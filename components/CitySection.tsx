import type { City } from "@/lib/data";
import type { Fixture } from "@/lib/fixtures";
import CityMap from "./CityMap";
import CityFixtures from "./CityFixtures";

export default function CitySection({ city, fixtures }: { city: City; fixtures: Fixture[] }) {
  return (
    <section id={city.id} className="py-20 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <span className="text-4xl">{city.emoji}</span>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{city.name}</h2>
            <p className="text-white/50 text-sm mt-0.5">{city.country} · {city.dates}</p>
          </div>
        </div>

        {/* Stadium image */}
        {city.match?.stadiumImage && (
          <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10" style={{ height: 260 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={city.match.stadiumImage}
              alt={city.match.stadium}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="text-white font-bold text-lg">{city.match.stadium}</p>
              <p className="text-white/60 text-sm">{city.match.round} · {city.match.date}</p>
            </div>
          </div>
        )}

        {/* City map */}
        <div className="rounded-2xl overflow-hidden mb-4 border border-white/10" style={{ height: 300 }}>
          <CityMap center={city.coords} zoom={city.id === "nyc" ? 11 : 12} locations={city.mapLocations.filter((l) => l.type !== "bar")} />
        </div>

        {/* Map legend */}
        <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/50">
          <span><span className="inline-block w-2.5 h-2.5 rounded-full bg-purple-500 mr-1.5 align-middle" />Stay</span>
          <span><span className="inline-block w-2.5 h-2.5 rounded-full bg-england-red mr-1.5 align-middle" />Stadium</span>
          <span><span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 mr-1.5 align-middle" />Fan Zone</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Travel */}
          <Card title="✈️ Travel" color="blue">
            <p className="text-white/80 text-sm font-medium">{city.travel.arrival}</p>
            {city.travel.arrivalFlight && <FlightChip f={city.travel.arrivalFlight} />}
            {city.travel.departure && <p className="text-white/60 text-sm mt-3 font-medium">{city.travel.departure}</p>}
            {city.travel.departureFlight && <FlightChip f={city.travel.departureFlight} />}
          </Card>

          {/* Stay */}
          <Card title="🏠 Where We're Staying" color="purple">
            <p className="text-white font-medium">{city.stay.name}</p>
            <p className="text-white/60 text-sm mt-1">{city.stay.address}</p>
            {city.stay.note && <p className="text-white/40 text-sm mt-2 italic">{city.stay.note}</p>}
          </Card>

          {/* Match */}
          {city.match && (
            <Card title={`⚽ ${city.match.round}`} color="red" wide>
              <div className="flex flex-wrap gap-3 mb-3">
                <Pill label={city.match.date} />
                <Pill label={city.match.time} />
              </div>
              {city.match.opponent && (
                <p className="text-2xl font-bold text-white mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs {city.match.opponent} 🏳️</p>
              )}
              <p className="text-england-gold font-semibold">{city.match.stadium}</p>
              <p className="text-white/50 text-sm">{city.match.address}</p>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">{city.match.notes}</p>
            </Card>
          )}

          {/* Fan Zone */}
          <Card title="🎉 Fan Zone" color="green" wide={!city.match}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-white font-medium">{city.fanzone.name}</p>
              {city.fanzone.url && (
                <a href={city.fanzone.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2.5 py-1 whitespace-nowrap hover:bg-emerald-500/30 transition-colors shrink-0">
                  Website ↗
                </a>
              )}
            </div>
            <p className="text-white/50 text-sm">{city.fanzone.address}</p>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">{city.fanzone.notes}</p>
          </Card>
        </div>

        {/* Matches on while you're in this city */}
        <CityFixtures city={city} fixtures={fixtures} />
      </div>
    </section>
  );
}

function FlightChip({ f }: { f: NonNullable<City["travel"]["arrivalFlight"]> }) {
  return (
    <div className="mt-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs space-y-0.5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-white font-medium">{f.airline}</span>
        <span className="text-white/40">·</span>
        <span className="text-white/70">{f.departs}{f.arrives ? ` → ${f.arrives}` : ""}</span>
        {f.via && <><span className="text-white/40">·</span><span className="text-white/50">via {f.via}</span></>}
      </div>
      {f.bookedOn && <p className="text-white/30">Booked on {f.bookedOn}</p>}
    </div>
  );
}

function Card({ title, color, wide, children }: {
  title: string; color: "red" | "blue" | "green" | "purple"; wide?: boolean; children: React.ReactNode;
}) {
  const accent = { red: "border-england-red", blue: "border-blue-400", green: "border-emerald-400", purple: "border-purple-400" }[color];
  return (
    <div className={`card-glass rounded-xl p-6 border-t-2 ${accent} ${wide ? "md:col-span-2" : ""}`}>
      <h3 className="text-white/50 text-xs uppercase tracking-widest mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="text-xs bg-england-red/20 text-england-red border border-england-red/30 rounded-full px-3 py-1 font-medium">
      {label}
    </span>
  );
}
