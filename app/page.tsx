import Nav from "@/components/Nav";
import CitySection from "@/components/CitySection";
import JourneyMap from "@/components/JourneyMap";
import { cities, timeline } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section
        id="overview"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-england-navy via-[#0a0a14] to-[#1a0005]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,8,31,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white transform -translate-y-1/2" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="text-7xl md:text-9xl select-none">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 text-shadow">
            England<span className="text-england-red"> 2026</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 mb-2 font-light">The World Cup Tour</p>
          <p className="text-white/40 text-sm md:text-base tracking-widest uppercase mb-10">
            New York · Atlanta · Mexico City · Miami
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { label: "Group Stage", sub: "27 Jun · MetLife, NYC" },
              { label: "Round of 32", sub: "1 Jul · Mercedes-Benz, ATL" },
              { label: "Round of 16", sub: "6 Jul · Azteca, CDMX" },
              { label: "Quarterfinal", sub: "11 Jul · Hard Rock, MIA" },
            ].map((m) => (
              <div key={m.label} className="bg-england-red/10 border border-england-red/30 rounded-xl px-4 py-3 text-left min-w-[140px]">
                <p className="text-england-red text-xs font-bold uppercase tracking-wide">{m.label}</p>
                <p className="text-white/60 text-xs mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#itinerary" className="inline-flex items-center gap-2 bg-england-red hover:bg-england-red/80 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              View Itinerary ↓
            </a>
            <a href="/plan-b" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 font-semibold px-8 py-3 rounded-full transition-colors border border-white/20">
              Plan B — If 2nd 🤞
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span className="text-white text-xl">↓</span>
        </div>
      </section>

      {/* Journey Map */}
      <section className="px-4 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-1">The Route</h2>
          <p className="text-white/40 text-sm mb-6">London → NYC → Atlanta → Cancún → Mexico City → Miami</p>
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 420 }}>
            <JourneyMap />
          </div>
        </div>
      </section>

      {/* Itinerary timeline */}
      <section id="itinerary" className="py-16 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Full Itinerary</h2>
          <p className="text-white/40 text-sm mb-10">26 June — 13 July 2026</p>

          <div className="relative">
            <div className="absolute left-[6px] top-2 bottom-2 w-px bg-white/10" />
            <ol className="space-y-5 pl-8">
              {timeline.map((item, i) => (
                <li key={i} className="relative">
                  <span className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 ${
                    item.event.startsWith("⚽") ? "bg-england-red border-england-red"
                    : item.event.startsWith("✈️") ? "bg-blue-400 border-blue-400"
                    : "bg-white/20 border-white/30"
                  }`} />
                  <a href={`#${item.city}`} className="group block">
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">{item.date}</p>
                    <p className="text-white/90 text-sm group-hover:text-white transition-colors">{item.event}</p>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* City sections */}
      {cities.map((city) => (
        <CitySection key={city.id} city={city} />
      ))}

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-4xl mb-4">🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
        <p className="text-white/30 text-sm">It's coming home. Via New York, Atlanta, Mexico City and Miami.</p>
        <p className="text-white/20 text-xs mt-2">FIFA World Cup 2026 · 26 June – 13 July</p>
      </footer>
    </main>
  );
}
