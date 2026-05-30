export type PlanBStop = {
  id: string;
  city: string;
  country: string;
  emoji: string;
  dates: string;
  coords: [number, number];
  match?: {
    round: string;
    date: string;
    time: string;
    stadium: string;
    address: string;
    notes: string;
  };
  fanzone?: string;
  note?: string;
};

export const planBStops: PlanBStop[] = [
  {
    id: "nyc-b",
    city: "New York City",
    country: "USA",
    emoji: "🗽",
    dates: "26–30 June",
    coords: [40.73, -73.98],
    match: {
      round: "Group Stage",
      date: "Saturday 27 June",
      time: "5pm ET / 10pm BST",
      stadium: "MetLife Stadium",
      address: "1 MetLife Stadium Dr, East Rutherford, NJ",
      notes: "Same as Plan A — bus from Port Authority at 2pm.",
    },
    note: "Same stay — 656 Metropolitan Ave, Brooklyn.",
  },
  {
    id: "toronto",
    city: "Toronto",
    country: "Canada",
    emoji: "🍁",
    dates: "~30 June – 3 July",
    coords: [43.6532, -79.3832],
    match: {
      round: "Round of 32",
      date: "Wednesday 2 July",
      time: "7pm ET / 12am BST",
      stadium: "BMO Field",
      address: "170 Princes' Blvd, Toronto, ON M6K 3C3",
      notes:
        "BMO Field is on the western waterfront — 25 mins from downtown. Take the 509 streetcar from Union Station to Exhibition. Smaller, intimate stadium — should have a brilliant atmosphere. Note: you have Atlanta flights booked for this date — these would need to be changed.",
    },
    fanzone: "Nathan Phillips Square fan zone (free, city centre). Also look for Steamwhistle Brewery events on the waterfront.",
    note: "⚠️ You currently have JetBlue flights to Atlanta on 30 June and a flight to Cancún on 2 July. If England finish second you'd need to rebook flights to Toronto instead.",
  },
  {
    id: "dallas",
    city: "Dallas (Arlington)",
    country: "USA",
    emoji: "🤠",
    dates: "~4–7 July",
    coords: [32.748, -97.093],
    match: {
      round: "Round of 16",
      date: "Sunday 6 July",
      time: "2pm CT / 8pm BST",
      stadium: "AT&T Stadium",
      address: "1 AT&T Way, Arlington, TX 76011",
      notes:
        "AT&T Stadium is in Arlington between Dallas and Fort Worth. Take a rideshare — ~25 mins from downtown Dallas. One of the biggest and most spectacular stadiums in the world — retractable roof, enormous screen. Should be electric.",
    },
    fanzone: "Dallas Fan Fest at Fair Park. Also check out Trinity Groves and Deep Ellum for pre-match bars.",
    note: "Dallas also hosts the Semifinal on 14 July if England continue to progress.",
  },
  {
    id: "boston",
    city: "Boston",
    country: "USA",
    emoji: "🦞",
    dates: "~8–10 July",
    coords: [42.3601, -71.0589],
    match: {
      round: "Quarterfinal",
      date: "Thursday 9 July",
      time: "4pm ET / 9pm BST",
      stadium: "Gillette Stadium",
      address: "1 Patriot Pl, Foxborough, MA 02035",
      notes:
        "Gillette Stadium is in Foxborough, ~30 miles south of Boston. Take the MBTA Commuter Rail from South Station (direct on match days, ~55 mins). Strong England fan presence expected given Boston's large expat community.",
    },
    fanzone: "Boston City Hall Plaza fan zone. Also strong English pub scene — The Banshee in Dorchester and Bleacher Bar under Fenway are iconic.",
  },
];

export const planBRoute: [number, number][] = [
  [51.508, -0.190],   // London Gatwick
  [40.641, -73.778],  // New York JFK
  [43.677, -79.630],  // Toronto BMO Field
  [32.748, -97.093],  // Dallas AT&T Stadium
  [42.091, -71.264],  // Boston Gillette Stadium
];
