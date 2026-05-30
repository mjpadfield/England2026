import type { City } from "@/lib/data";

export default function CitySection({ city }: { city: City }) {
  return (
    <section id={city.id} className="py-20 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* City header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{city.emoji}</span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{city.name}</h2>
              <p className="text-white/50 text-sm mt-0.5">
                {city.country} · {city.dates}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Travel */}
          <Card title="✈️ Travel" color="blue">
            <p className="text-white/80 text-sm">{city.travel.arrival}</p>
            {city.travel.departure && (
              <p className="text-white/60 text-sm mt-1">{city.travel.departure}</p>
            )}
          </Card>

          {/* Stay */}
          <Card title="🏠 Where We're Staying" color="purple">
            <p className="text-white font-medium">{city.stay.name}</p>
            <p className="text-white/60 text-sm mt-1">{city.stay.address}</p>
            {city.stay.note && (
              <p className="text-white/40 text-sm mt-2 italic">{city.stay.note}</p>
            )}
          </Card>

          {/* Match */}
          {city.match && (
            <Card title={`⚽ ${city.match.round}`} color="red" wide>
              <div className="flex flex-wrap gap-4 mb-3">
                <Pill label={city.match.date} />
                <Pill label={city.match.time} />
              </div>
              {city.match.opponent && (
                <p className="text-2xl font-bold text-white mb-2">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs {city.match.opponent} 🏳️
                </p>
              )}
              <p className="text-england-gold font-semibold">{city.match.stadium}</p>
              <p className="text-white/50 text-sm">{city.match.address}</p>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">{city.match.notes}</p>
            </Card>
          )}

          {/* Fan Zone */}
          <Card title="🎉 Fan Zone" color="green" wide={!city.match}>
            <p className="text-white font-medium">{city.fanzone.name}</p>
            <p className="text-white/50 text-sm mt-1">{city.fanzone.address}</p>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">{city.fanzone.notes}</p>
          </Card>
        </div>

        {/* Bars */}
        <div className="mt-6">
          <h3 className="text-white/50 text-xs uppercase tracking-widest mb-4">
            🍺 Recommended Bars
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.bars.map((bar) => (
              <div key={bar.name} className="card-glass rounded-xl p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-white font-semibold leading-tight">{bar.name}</p>
                  <span className="text-xs bg-white/10 text-white/60 rounded-full px-2 py-0.5 whitespace-nowrap shrink-0">
                    {bar.vibe}
                  </span>
                </div>
                <p className="text-white/40 text-xs mb-2">{bar.address}</p>
                <p className="text-white/70 text-sm leading-relaxed">{bar.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  color,
  wide,
  children,
}: {
  title: string;
  color: "red" | "blue" | "green" | "purple";
  wide?: boolean;
  children: React.ReactNode;
}) {
  const accent = {
    red: "border-england-red",
    blue: "border-blue-400",
    green: "border-emerald-400",
    purple: "border-purple-400",
  }[color];

  return (
    <div
      className={`card-glass rounded-xl p-6 border-t-2 ${accent} ${wide ? "md:col-span-2" : ""}`}
    >
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
