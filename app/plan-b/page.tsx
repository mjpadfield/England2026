import Nav from "@/components/Nav";
import PlanBMap from "@/components/PlanBMap";
import { planBStops } from "@/lib/planb-data";

export default function PlanBPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001835] via-[#0a0a14] to-[#0a0a14]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-6xl mb-6 block">🤞</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Plan B
          </h1>
          <p className="text-xl text-white/60 mb-4">If England finish <span className="text-blue-400 font-semibold">second</span> in Group L</p>
          <p className="text-white/40 text-sm max-w-xl mx-auto mb-10">
            The route changes significantly — Toronto replaces Atlanta, then Dallas and Boston instead of Mexico City and Miami. Here's the full picture.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { label: "Group Stage", sub: "27 Jun · MetLife, NYC", color: "england-red" },
              { label: "Round of 32", sub: "2 Jul · BMO Field, Toronto", color: "blue-500" },
              { label: "Round of 16", sub: "6 Jul · AT&T Stadium, Dallas", color: "blue-500" },
              { label: "Quarterfinal", sub: "9 Jul · Gillette Stadium, Boston", color: "blue-500" },
            ].map((m) => (
              <div key={m.label} className={`bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-3 text-left min-w-[140px]`}>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-wide">{m.label}</p>
                <p className="text-white/60 text-xs mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-4 text-left max-w-xl mx-auto">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-1">⚠️ Flight note</p>
            <p className="text-white/70 text-sm">
              You currently have JetBlue flights booked to Atlanta (30 June) and Cancún (2 July). If England finish second, these would need to be changed — the R32 is in Toronto on 2 July, not Atlanta.
            </p>
          </div>
        </div>
      </section>

      {/* Route map */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-1">Plan B Route</h2>
          <p className="text-white/40 text-sm mb-5">London → NYC → Toronto → Dallas → Boston</p>
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 380 }}>
            <PlanBMap />
          </div>
        </div>
      </section>

      {/* Match stops */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {planBStops.map((stop) => (
            <div key={stop.id} className="card-glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{stop.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{stop.city}</h3>
                  <p className="text-white/40 text-sm">{stop.country} · {stop.dates}</p>
                </div>
              </div>

              {stop.note && (
                <div className={`mb-4 text-sm rounded-lg px-4 py-3 ${stop.note.startsWith("⚠️") ? "bg-amber-500/10 border border-amber-500/20 text-amber-300" : "bg-white/5 border border-white/10 text-white/60"}`}>
                  {stop.note}
                </div>
              )}

              {stop.match && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-3 py-1 font-medium">
                      {stop.match.round}
                    </span>
                    <span className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1">
                      {stop.match.date}
                    </span>
                    <span className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1">
                      {stop.match.time}
                    </span>
                  </div>
                  <p className="text-blue-400 font-semibold">{stop.match.stadium}</p>
                  <p className="text-white/40 text-sm mt-0.5">{stop.match.address}</p>
                  <p className="text-white/70 text-sm mt-3 leading-relaxed">{stop.match.notes}</p>
                </div>
              )}

              {stop.fanzone && (
                <div className="mt-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-3">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-1">🎉 Fan Zone & Bars</p>
                  <p className="text-white/70 text-sm">{stop.fanzone}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 text-center">
        <a href="/" className="text-white/40 hover:text-white text-sm transition-colors">← Back to Plan A</a>
        <p className="text-white/20 text-xs mt-3">But we won't need this. 🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
      </footer>
    </main>
  );
}
