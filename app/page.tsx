import Nav from "@/components/Nav";
import PlanToggle from "@/components/PlanToggle";
import EnglandSquad from "@/components/EnglandSquad";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-england-navy via-[#0a0a14] to-[#1a0005]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,8,31,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white transform -translate-y-1/2" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-7xl md:text-9xl select-none mb-6 block">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 text-shadow">
            England<span className="text-england-red"> 2026</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 mb-2 font-light">The World Cup Tour</p>
          <p className="text-white/40 text-sm md:text-base tracking-widest uppercase mb-10">
            New York · Atlanta · Mexico City · Miami
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
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

          <a href="#itinerary" className="inline-flex items-center gap-2 bg-england-red hover:bg-england-red/80 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            View Itinerary ↓
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span className="text-white text-xl">↓</span>
        </div>
      </section>

      {/* England squad */}
      <EnglandSquad />

      {/* Plan A/B toggle — map, timeline, city sections */}
      <PlanToggle />

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-4xl mb-4">🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
        <p className="text-white/30 text-sm">It's coming home. Via New York, Atlanta, Mexico City and Miami.</p>
        <p className="text-white/20 text-xs mt-2">FIFA World Cup 2026 · 26 June – 13 July</p>
      </footer>
    </main>
  );
}
