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

      <div className="space-y-5">
        {days.map((day) => (
          <div key={day.date}>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-2">
              {dayLabel(day.matches[0].kickoff, tz)}
            </p>
            <div className="space-y-2">
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
                      <p className="text-white text-sm font-medium leading-tight">
                        {f.isEngland && "🏴󠁧󠁢󠁥󠁮󠁧󠁿 "}
                        {f.home} <span className="text-white/40">v</span> {f.away}
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
          </div>
        ))}
      </div>
    </div>
  );
}
