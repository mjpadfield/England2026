"use client";
import { useState } from "react";
import JourneyMap from "./JourneyMap";
import CitySection from "./CitySection";
import { cities, planATimeline, planBTimeline, planARoute, planAStops, planBRoute, planBStops } from "@/lib/data";
import type { Fixture } from "@/lib/fixtures";
import { planBCities } from "@/lib/planb-data";

const nycCity = cities.find((c) => c.id === "nyc")!;
const planACities = cities.filter((c) => c.id !== "nyc");

type Plan = "a" | "b";

export default function PlanToggle({ fixtures }: { fixtures: Fixture[] }) {
  const [plan, setPlan] = useState<Plan>("a");

  const timeline = plan === "a" ? planATimeline : planBTimeline;
  const route = plan === "a" ? planARoute : planBRoute;
  const stops = plan === "a" ? planAStops : planBStops;
  const afterNycCities = plan === "a" ? planACities : planBCities;
  const routeColor = plan === "a" ? "#CF081F" : "#3b82f6";

  return (
    <>
      {/* Route map */}
      <section className="px-4 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">The Route</h2>
              <p className="text-white/40 text-sm mt-0.5">
                {plan === "a"
                  ? "NYC → Atlanta → Cancún → Mexico City → Miami"
                  : "NYC → Toronto → Dallas → Los Angeles"}
              </p>
            </div>

            {/* Toggle */}
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1 self-start">
              <button
                onClick={() => setPlan("a")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  plan === "a"
                    ? "bg-england-red text-white shadow"
                    : "text-white/50 hover:text-white"
                }`}
              >
                🏆 Plan A — 1st place
              </button>
              <button
                onClick={() => setPlan("b")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  plan === "b"
                    ? "bg-blue-600 text-white shadow"
                    : "text-white/50 hover:text-white"
                }`}
              >
                🤞 Plan B — 2nd place
              </button>
            </div>
          </div>

          {plan === "b" && (
            <div className="mb-5 bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-4">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-1">⚠️ Flight note</p>
              <p className="text-white/70 text-sm">
                You have JetBlue flights booked to Atlanta (30 June) and Cancún (2 July). If England finish second, the R32 is in Toronto on 2 July — these flights would need rebooking.
              </p>
            </div>
          )}

          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 420 }}>
            <JourneyMap
              route={route}
              stops={stops}
              color={routeColor}
              center={plan === "a" ? [28, -90] : [36, -97]}
              zoom={plan === "a" ? 4 : 4}
            />
          </div>
        </div>
      </section>

      {/* Itinerary timeline */}
      <section id="itinerary" className="py-16 px-4 border-t border-white/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Full Itinerary</h2>
          <p className="text-white/40 text-sm mb-10">
            {plan === "a" ? "26 June — 13 July 2026 · Plan A" : "26 June — ~12 July 2026 · Plan B"}
          </p>
          <div className="relative">
            <div className="absolute left-[6px] top-2 bottom-2 w-px bg-white/10" />
            <ol className="space-y-5 pl-8">
              {timeline.map((item, i) => (
                <li key={i} className="relative">
                  <span className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 ${
                    item.event.startsWith("⚽")
                      ? plan === "a" ? "bg-england-red border-england-red" : "bg-blue-500 border-blue-500"
                      : item.event.startsWith("✈️")
                      ? "bg-blue-400 border-blue-400"
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

      {/* NYC — always shown */}
      <CitySection city={nycCity} fixtures={fixtures} />

      {/* Plan-specific cities */}
      {afterNycCities.map((city) => (
        <CitySection key={city.id} city={city} fixtures={fixtures} />
      ))}
    </>
  );
}
