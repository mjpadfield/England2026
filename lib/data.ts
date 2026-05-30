export type City = {
  id: string;
  name: string;
  emoji: string;
  country: string;
  dates: string;
  stay: {
    name: string;
    address: string;
    note?: string;
  };
  travel: {
    arrival: string;
    departure?: string;
  };
  match?: {
    round: string;
    opponent?: string;
    date: string;
    time: string;
    stadium: string;
    address: string;
    notes: string;
  };
  fanzone: {
    name: string;
    address: string;
    notes: string;
  };
  bars: {
    name: string;
    vibe: string;
    address: string;
    tip: string;
  }[];
};

export const cities: City[] = [
  {
    id: "nyc",
    name: "New York City",
    emoji: "🗽",
    country: "USA",
    dates: "26–30 June",
    stay: {
      name: "Friend's place",
      address: "656 Metropolitan Ave, Brooklyn, NY",
      note: "Williamsburg — right next to Banter bar. Perfect base.",
    },
    travel: {
      arrival: "Fri 26 June — fly from London Heathrow",
      departure: "Tue 1 July — fly to Atlanta",
    },
    match: {
      round: "Group Stage",
      opponent: "Panama",
      date: "Saturday 27 June",
      time: "5pm ET / 10pm BST",
      stadium: "MetLife Stadium",
      address: "1 MetLife Stadium Dr, East Rutherford, NJ",
      notes:
        "Bus from Port Authority Bus Terminal at 2pm — direct to MetLife, ~45 mins. Get there early to grab your spot. England fans congregate in the south end.",
    },
    fanzone: {
      name: "FIFA Fan Zone Queens + Hudson Yards Screen",
      address:
        "USTA Billie Jean King National Tennis Center, Flushing Meadows; Hudson Yards, Manhattan",
      notes:
        "Queens fan zone holds 10,000 and runs 17–28 June — pre-register at nynjfwc26.com. Hudson Yards has a free 30-foot outdoor screen with no registration needed. Rockefeller Center also has a Fan Village for the full tournament.",
    },
    bars: [
      {
        name: "Banter",
        vibe: "🏆 The one",
        address: "132 Havemeyer St, Williamsburg (5 min walk from your place)",
        tip: "NYC's best soccer bar — 15 years deep, proper matchday atmosphere. Book ahead for England games.",
      },
      {
        name: "Kent Ale House",
        vibe: "🍺 Local classic",
        address: "1030 Manhattan Ave, Greenpoint, Brooklyn",
        tip: "Go-to EPL bar in Brooklyn, opens at 7:30am for early KOs. Good for pre-match drinks.",
      },
      {
        name: "The Monro Pub",
        vibe: "☀️ Backyard vibes",
        address: "132 Union St, Park Slope, Brooklyn",
        tip: "Has a lovely backyard — great for a pint in the sun if England have already won.",
      },
      {
        name: "230 Fifth Rooftop Bar",
        vibe: "🌃 Friday night",
        address: "230 5th Ave, Flatiron, Manhattan",
        tip: "Rooftop bar with panoramic Manhattan views — perfect for Friday night arrival drinks. Empire State Building right in front of you. Book a table ahead.",
      },
      {
        name: "Grand Banks Oyster Bar",
        vibe: "🦪 Sunday afternoon",
        address: "Pier 25, Hudson River Park, Tribeca",
        tip: "Oyster bar on a beautiful schooner moored on the Hudson. Ideal for a long Sunday afternoon — oysters, cold drinks, and views across the river. Book in advance.",
      },
      {
        name: "Legends (Football Factory)",
        vibe: "🎉 Stadium atmosphere",
        address: "6 W 33rd St, Midtown Manhattan",
        tip: "Multi-level, 30+ screens, supporters groups from every nation. Closest thing to a stadium inside a bar. Worth the trip to Manhattan for a big match.",
      },
    ],
  },
  {
    id: "atlanta",
    name: "Atlanta",
    emoji: "🍑",
    country: "USA",
    dates: "1–3 July",
    stay: {
      name: "Accommodation",
      address: "1159 Wade Street, Atlanta, GA",
    },
    travel: {
      arrival: "Tue 1 July — fly from New York",
      departure: "Thu 3 July — fly to Cancún",
    },
    match: {
      round: "Round of 32",
      date: "Wednesday 2 July (TBC)",
      time: "TBC",
      stadium: "Mercedes-Benz Stadium",
      address: "1 AMB Dr NW, Atlanta, GA 30313",
      notes:
        "Mercedes-Benz Stadium is a 15-min rideshare from Wade St. STATS Brewpub and Der Biergarten are right next to the stadium for pre-match. Centennial Olympic Park Fan Zone is a 5-min walk from the stadium.",
    },
    fanzone: {
      name: "FIFA Fan Fest — Centennial Olympic Park",
      address: "265 Park Ave W NW, Atlanta, GA 30313",
      notes:
        "Free and open to the public, runs every match day plus the day before. Giant screens, food, entertainment. 5-min walk from Mercedes-Benz Stadium — perfect for a full matchday experience.",
    },
    bars: [
      {
        name: "Brewhouse Cafe",
        vibe: "🏆 America's Best Soccer Bar",
        address: "401 Moreland Ave NE, Little Five Points",
        tip: "Voted America's Best Soccer Bar by Men in Blazers 2024-25. Opens 5am for big matches. Second location opening in South Downtown steps from the stadium.",
      },
      {
        name: "STATS Brewpub",
        vibe: "📺 Stadium-adjacent",
        address: "300 Marietta St NW (next to Mercedes-Benz Stadium)",
        tip: "70+ screens, 16,000 sq ft, seven audio zones. Best spot for pre-match right next to the ground.",
      },
      {
        name: "Der Biergarten",
        vibe: "🌿 Beer garden",
        address: "300 Marietta St NW, steps from Mercedes-Benz Stadium",
        tip: "7,000 sq ft indoor/outdoor space, Atlanta United supporters HQ. Great post-match beer garden atmosphere.",
      },
    ],
  },
  {
    id: "cancun",
    name: "Cancún",
    emoji: "🌴",
    country: "Mexico",
    dates: "3–4 July",
    stay: {
      name: "Transit stop",
      address: "Cancún, Quintana Roo, Mexico",
      note: "Short stopover en route to Mexico City. Hotel Zona Hotelera recommended.",
    },
    travel: {
      arrival: "Thu 3 July — fly from Atlanta",
      departure: "Fri 4 July — fly to Mexico City",
    },
    fanzone: {
      name: "Cancún Beach Bars",
      address: "Zona Hotelera",
      notes:
        "No official FIFA Fan Fest in Cancún, but the beach strip has huge screens outside many bars. Carlos'n Charlie's and Señor Frog's will be showing all matches — touristy but fun for a night.",
    },
    bars: [
      {
        name: "The City Disco & Bar",
        vibe: "🎵 Beach club",
        address: "Blvd. Kukulcán Km 9.5, Zona Hotelera",
        tip: "One of the biggest outdoor screens in the Zona Hotelera. Good for watching a match with a frozen margarita in hand.",
      },
      {
        name: "Señor Frog's",
        vibe: "🍹 Party vibes",
        address: "Blvd. Kukulcán Km 9.5, Zona Hotelera",
        tip: "Classic Cancún — not subtle, but they'll have the football on and the drinks flowing.",
      },
    ],
  },
  {
    id: "mexico-city",
    name: "Mexico City",
    emoji: "🌮",
    country: "Mexico",
    dates: "4–7 July",
    stay: {
      name: "Apartment",
      address: "Dr. Lavista, Colonia Doctores, CDMX",
      note: "Great central location — Roma Norte and Condesa bars are a short taxi ride away.",
    },
    travel: {
      arrival: "Fri 4 July — fly from Cancún",
      departure: "Mon 7 July — fly to Miami",
    },
    match: {
      round: "Round of 16",
      date: "Sunday 6 July (TBC)",
      time: "TBC",
      stadium: "Estadio Azteca",
      address: "Calzada de Tlalpan 3465, Santa Úrsula Coapa, CDMX",
      notes:
        "Take the Metro Line 2 to Tasqueña, then the tren ligero to Estadio Azteca. Or rideshare (Uber works well in CDMX). The Azteca atmosphere is unlike anywhere else in the world — one of football's great cathedrals. Get there early.",
    },
    fanzone: {
      name: "FIFA Fan Fest — El Zócalo",
      address: "Plaza de la Constitución, Centro Histórico, CDMX",
      notes:
        "Free entry, no registration. Mexico's Fan Fest is at the Zócalo — the main square surrounded by incredible colonial architecture. Every match screened live. Expect massive, electric crowds for any Mexico or CONMEBOL game.",
    },
    bars: [
      {
        name: "The Dog House Pub",
        vibe: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Brit-owned, proper football bar",
        address: "Calle Dinamarca 44, Juárez (near Roma/Condesa)",
        tip: "Brit-owned, walls lined with TVs and football memorabilia. Will be the central hub for English fans in CDMX. Book ahead.",
      },
      {
        name: "Celtics Pub",
        vibe: "🍺 Local favourite",
        address: "Ámsterdam 17, Condesa",
        tip: "Screens everywhere, lively crowd, rooftop seating. A 10-min walk from Parque México. Popular with expats and locals alike.",
      },
      {
        name: "BeerGarden Roma",
        vibe: "🌿 Hip & relaxed",
        address: "Tonalá 10, Roma Norte",
        tip: "Plant-filled, inclusive crowd, great beer selection. Screens major sporting events. Good for a pre-match afternoon drink.",
      },
    ],
  },
  {
    id: "miami",
    name: "Miami",
    emoji: "🌊",
    country: "USA",
    dates: "7–13 July",
    stay: {
      name: "Boho Central by the Beach Studio",
      address: "Miami Beach, FL",
      note: "Miami Beach studio — Ocean Drive and the beach are on your doorstep.",
    },
    travel: {
      arrival: "Mon 7 July — fly from Mexico City",
      departure: "Sun 13 July — fly back to London Heathrow",
    },
    match: {
      round: "Quarterfinal",
      date: "Friday 11 July (TBC)",
      time: "TBC",
      stadium: "Hard Rock Stadium",
      address: "347 Don Shula Dr, Miami Gardens, FL 33056",
      notes:
        "Uber/Lyft from Miami Beach is ~35–40 mins. The third-place playoff is also at Hard Rock on July 18 if needed. Hard Rock hosts the QF — this is where it gets real.",
    },
    fanzone: {
      name: "FIFA Fan Fest — Bayfront Park",
      address: "301 Biscayne Blvd, Downtown Miami",
      notes:
        "On Biscayne Bay with incredible views. Free entry. Wynwood Marketplace is also hosting free FIFA watch parties at Clutch Bar from 6 July — massive screens, food vendors, open-air.",
    },
    bars: [
      {
        name: "The Clevelander",
        vibe: "🏖️ South Beach icon",
        address: "1020 Ocean Dr, Miami Beach (near your place)",
        tip: "20+ screens including a giant 20ft LED, DJ sets, pool access. Walking distance from your studio. Best spot for a matchday that turns into a party.",
      },
      {
        name: "Grails Wynwood",
        vibe: "📺 Best screens in Miami",
        address: "2250 NW 2nd Ave, Wynwood",
        tip: "75+ TVs, no cover charge for any match. Shows every World Cup game with full audio. The most dedicated soccer bar in Miami.",
      },
      {
        name: "Wynwood Marketplace",
        vibe: "🎉 Free watch parties",
        address: "2250 NW 2nd Ave, Wynwood",
        tip: "Free FIFA watch parties at Clutch Bar from 6 July onwards. Open-air, massive screens, food vendors. Great pre-match or backup option.",
      },
    ],
  },
];

export const timeline = [
  { date: "Fri 26 June", event: "✈️ Fly London → New York (JFK/EWR)", city: "nyc" },
  { date: "Sat 27 June", event: "⚽ England vs Panama — MetLife Stadium", city: "nyc" },
  { date: "Sun–Mon 28–30 June", event: "🗽 NYC days — Brooklyn & Manhattan", city: "nyc" },
  { date: "Tue 1 July", event: "✈️ Fly New York → Atlanta", city: "atlanta" },
  { date: "Wed 2 July", event: "⚽ England — Round of 32 — Mercedes-Benz Stadium", city: "atlanta" },
  { date: "Thu 3 July", event: "✈️ Fly Atlanta → Cancún", city: "cancun" },
  { date: "Fri 4 July", event: "✈️ Fly Cancún → Mexico City", city: "mexico-city" },
  { date: "Sat–Sun 5–6 July", event: "🌮 Mexico City days + Round of 16", city: "mexico-city" },
  { date: "Mon 7 July", event: "✈️ Fly Mexico City → Miami", city: "miami" },
  { date: "Tue–Thu 8–10 July", event: "🌊 Miami Beach days", city: "miami" },
  { date: "Fri 11 July", event: "⚽ England — Quarterfinal — Hard Rock Stadium", city: "miami" },
  { date: "Sat–Sun 12–13 July", event: "🏖️ Last days in Miami Beach", city: "miami" },
  { date: "Sun 13 July", event: "✈️ Fly Miami → London Heathrow", city: "miami" },
];
