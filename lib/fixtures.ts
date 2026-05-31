// World Cup 2026 fixtures, pulled live from FIFA's public calendar API.
//
// `Date` from the API is the kickoff as an absolute UTC instant — the UI
// converts it to whatever city you're in (via that city's IANA timezone), so
// the time shown is always correct local time wherever you're watching.
// Knockout teams are placeholders (e.g. "Winners Group A") until the draw/results.

const FIFA_URL =
  "https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=285023";

// FIFA venue city name → city id used across the site (for the "you're here" highlight).
const CITY_BY_VENUE: Record<string, string> = {
  "New York": "nyc",
  Atlanta: "atlanta",
  "Mexico City": "mexico-city",
  Miami: "miami",
  Toronto: "toronto",
  Dallas: "dallas",
  "Los Angeles": "la",
};

export type Fixture = {
  id: string;
  kickoff: string; // ISO 8601 UTC — absolute instant of kickoff
  roundLabel: string; // "Group L" or "Round of 32" etc.
  isKnockout: boolean;
  home: string; // team name, or friendly placeholder for knockouts
  away: string;
  homeFlag?: string; // flag image URL — only set when the team is known
  awayFlag?: string;
  stadium: string;
  venueCity: string;
  cityId?: string; // set when the venue is one of the trip cities → highlighted
  isEngland: boolean;
};

function desc(arr: { Description: string }[] | null | undefined): string | null {
  return arr && arr.length ? arr[0].Description : null;
}

function flag(code: string | null | undefined): string | undefined {
  return code ? `https://api.fifa.com/api/v3/picture/flags-sq-4/${code}` : undefined;
}

// Turn FIFA knockout placeholders ("1I", "2H", "3CDFGH", "W76", "RU101") into readable text.
function friendlyPlaceholder(ph: string | null | undefined): string {
  if (!ph) return "TBD";
  let m: RegExpMatchArray | null;
  if ((m = ph.match(/^1([A-L])$/))) return `Winners Group ${m[1]}`;
  if ((m = ph.match(/^2([A-L])$/))) return `Runners-up Group ${m[1]}`;
  if ((m = ph.match(/^3([A-L]+)$/))) return `3rd place · Group ${m[1].split("").join("/")}`;
  if ((m = ph.match(/^W(\d+)$/))) return `Winners of Match ${m[1]}`;
  if ((m = ph.match(/^RU(\d+)$/))) return `Runners-up of Match ${m[1]}`;
  return ph;
}

type RawMatch = {
  IdMatch: string;
  Date: string;
  StageName: { Description: string }[];
  GroupName: { Description: string }[] | null;
  Home: { TeamName: { Description: string }[]; IdCountry: string } | null;
  Away: { TeamName: { Description: string }[]; IdCountry: string } | null;
  PlaceHolderA?: string | null;
  PlaceHolderB?: string | null;
  Stadium: {
    Name: { Description: string }[];
    CityName: { Description: string }[];
  };
};

export async function getFixtures(): Promise<Fixture[]> {
  let raw: RawMatch[];
  try {
    const res = await fetch(FIFA_URL, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 3600 }, // refresh hourly (picks up confirmed teams + scores)
    });
    if (!res.ok) return [];
    const data = await res.json();
    raw = data.Results ?? [];
  } catch {
    return [];
  }

  return raw.map((m): Fixture => {
    const stage = desc(m.StageName) ?? "";
    const isKnockout = stage !== "First Stage";
    const home = desc(m.Home?.TeamName) ?? friendlyPlaceholder(m.PlaceHolderA);
    const away = desc(m.Away?.TeamName) ?? friendlyPlaceholder(m.PlaceHolderB);
    const venueCity = desc(m.Stadium.CityName) ?? "";
    return {
      id: m.IdMatch,
      kickoff: m.Date,
      roundLabel: isKnockout ? stage : desc(m.GroupName) ?? "Group stage",
      isKnockout,
      home,
      away,
      homeFlag: m.Home ? flag(m.Home.IdCountry) : undefined,
      awayFlag: m.Away ? flag(m.Away.IdCountry) : undefined,
      stadium: desc(m.Stadium.Name) ?? "",
      venueCity,
      cityId: CITY_BY_VENUE[venueCity],
      isEngland: home === "England" || away === "England",
    };
  });
}
