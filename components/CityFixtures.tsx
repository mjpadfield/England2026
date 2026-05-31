import type { City } from "@/lib/data";
import type { Fixture } from "@/lib/fixtures";

// Calendar date (YYYY-MM-DD) of an instant, as seen in a given timezone.
function localDate(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

function timeIn(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(iso));
}

function dayLabel(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

export default function CityFixtures({ city, fixtures }: { city: City; fixtures: Fixture[] }) {
  const { timezone: tz, window } = city;

  const inWindow = fixtures
    .filter((f) => {
      const d = localDate(f.kickoff, tz);
      return d >= window.start && d <= window.end;
    })
    .sort((a, b) => a.kickoff.localeCompare(b.kickoff));

  if (inWindow.length === 0) return null;

  // Group by the local calendar day you'd watch them on.
  const days: { date: string; matches: Fixture[] }[] = [];
  for (const f of inWindow) {
    const d = localDate(f.kickoff, tz);
    const bucket = days.find((x) => x.date === d);
    if (bucket) bucket.matches.push(f);
    else days.push({ date: d, matches: [f] });
  }

  return (
    <div className="mt-8">
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <h3 className="text-white/50 text-xs uppercase tracking-widest">📺 Matches while you're here</h3>
        <span className="text-white/30 text-xs">times in {city.name} local</span>
      </div>
      <p className="text-white/30 text-xs mb-4">
        Highlighted games are in {city.name} — you could go in person. UK time shown underneath.
      </p>

      <div className="space-y-2">
        {days.map((day) => {
          const hereCount = day.matches.filter((f) => f.cityId === city.id).length;
          return (
          <details
            key={day.date}
            open={hereCount > 0}
            className="group bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-white/[0.04] transition-colors">
              <span className="text-white text-sm font-semibold">
                {dayLabel(day.matches[0].kickoff, tz)}
              </span>
              <span className="flex items-center gap-2 shrink-0">
                {hereCount > 0 && (
                  <span className="text-england-red text-[10px] font-bold uppercase tracking-wide">
                    {hereCount} in {city.name}
                  </span>
                )}
                <span className="text-white/40 text-xs">
                  {day.matches.length} {day.matches.length === 1 ? "game" : "games"}
                </span>
                <svg
                  className="w-4 h-4 text-white/40 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="space-y-2 px-3 pb-3 pt-1">
              {day.matches.map((f) => {
                const here = f.cityId === city.id;
                return (
                  <div
                    key={f.id}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 border ${
                      here
                        ? "bg-england-red/10 border-england-red/40"
                        : "bg-white/[0.03] border-white/10"
                    }`}
                  >
                    {/* Time */}
                    <div className="text-center shrink-0 w-14">
                      <p className={`font-bold tabular-nums ${here ? "text-england-red" : "text-white"}`}>
                        {timeIn(f.kickoff, tz)}
                      </p>
                      <p className="text-white/30 text-[10px] tabular-nums">
                        {timeIn(f.kickoff, "Europe/London")} UK
                      </p>
                    </div>

                    {/* Match */}
                    <div className="min-w-0 flex-1">
                      <p className="text-white text-sm font-medium leading-tight flex items-center gap-1.5 flex-wrap">
                        {f.homeFlag && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={f.homeFlag} alt="" className="w-4 h-4 rounded-sm shrink-0" />
                        )}
                        <span>{f.home}</span>
                        <span className="text-white/40">v</span>
                        {f.awayFlag && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={f.awayFlag} alt="" className="w-4 h-4 rounded-sm shrink-0" />
                        )}
                        <span>{f.away}</span>
                      </p>
                      <p className="text-white/40 text-xs truncate">
                        {f.stadium} · {f.venueCity}
                      </p>
                    </div>

                    {/* Round / location badge */}
                    <div className="shrink-0 text-right">
                      <span className="text-white/50 text-[10px] uppercase tracking-wide block">{f.roundLabel}</span>
                      {here && (
                        <span className="text-england-red text-[10px] font-bold uppercase tracking-wide">In {city.name}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
          );
        })}
      </div>
    </div>
  );
}
