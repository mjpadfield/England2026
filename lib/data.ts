export type Flight = {
  from: string;
  to: string;
  airline: string;
  departs: string;
  arrives?: string;
  via?: string;
  bookedOn?: string;
};

export type MapLocation = {
  name: string;
  address?: string;
  lat: number;
  lng: number;
  type: "stay" | "stadium" | "fanzone" | "bar";
};

export type City = {
  id: string;
  name: string;
  emoji: string;
  country: string;
  dates: string;
  coords: [number, number];
  stay: {
    name: string;
    address: string;
    note?: string;
  };
  travel: {
    arrival: string;
    departure?: string;
    arrivalFlight?: Flight;
    departureFlight?: Flight;
  };
  match?: {
    round: string;
    opponent?: string;
    date: string;
    time: string;
    stadium: string;
    stadiumImage: string;
    address: string;
    notes: string;
  };
  fanzone: {
    name: string;
    address: string;
    notes: string;
    url?: string;
  };
  bars: {
    name: string;
    vibe: string;
    address: string;
    tip: string;
    url?: string;
  }[];
  mapLocations: MapLocation[];
};

export const cities: City[] = [
  {
    id: "nyc",
    name: "New York City",
    emoji: "🗽",
    country: "USA",
    dates: "26–30 June",
    coords: [40.73, -73.98],
    stay: {
      name: "Friend's place",
      address: "656 Metropolitan Ave, Brooklyn, NY",
      note: "Williamsburg — right next to Banter bar. Perfect base.",
    },
    travel: {
      arrival: "Fri 26 June — fly from London Gatwick",
      departure: "Tue 30 June — fly to Atlanta",
      arrivalFlight: {
        from: "London Gatwick (LGW)",
        to: "New York JFK",
        airline: "Norse Atlantic",
        departs: "13:05",
        arrives: "15:55",
        bookedOn: "mytrip.com",
      },
      departureFlight: {
        from: "New York",
        to: "Atlanta",
        airline: "JetBlue",
        departs: "14:55",
      },
    },
    match: {
      round: "Group Stage",
      opponent: "Panama",
      date: "Saturday 27 June",
      time: "5pm ET / 10pm BST",
      stadium: "MetLife Stadium",
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Metlife_stadium_%28Aerial_view%29.jpg/1200px-Metlife_stadium_%28Aerial_view%29.jpg",
      address: "1 MetLife Stadium Dr, East Rutherford, NJ",
      notes:
        "Bus from Port Authority Bus Terminal at 2pm — direct to MetLife, ~45 mins. Get there early to grab your spot. England fans congregate in the south end.",
    },
    fanzone: {
      name: "FIFA Fan Zone Queens + Hudson Yards",
      address: "USTA Billie Jean King Center, Queens / Hudson Yards, Manhattan",
      notes:
        "Queens fan zone holds 10,000 — pre-register online. Hudson Yards has a free 30-foot outdoor screen with no registration. Rockefeller Center also has a Fan Village for the full tournament.",
      url: "https://www.nynjfwc26.com",
    },
    bars: [
      {
        name: "Banter",
        vibe: "🏆 The one",
        address: "132 Havemeyer St, Williamsburg (5 min walk from your place)",
        tip: "NYC's best soccer bar — 15 years deep, proper matchday atmosphere. Book ahead for England games.",
        url: "https://banterbrooklyn.com",
      },
      {
        name: "230 Fifth Rooftop Bar",
        vibe: "🌃 Friday night",
        address: "230 5th Ave, Flatiron, Manhattan",
        tip: "Rooftop bar with panoramic Manhattan views — perfect for Friday night arrival drinks. Empire State Building right in front of you. Book ahead.",
        url: "https://www.230-fifth.com",
      },
      {
        name: "Grand Banks Oyster Bar",
        vibe: "🦪 Sunday afternoon",
        address: "Pier 25, Hudson River Park, Tribeca",
        tip: "Oyster bar on a beautiful schooner moored on the Hudson. Ideal for a long Sunday afternoon. Book in advance.",
        url: "https://grandbanksnyc.com",
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
        tip: "Has a lovely backyard — great for a pint in the sun. A proper neighbourhood pub.",
      },
      {
        name: "Legends (Football Factory)",
        vibe: "🎉 Stadium atmosphere",
        address: "6 W 33rd St, Midtown Manhattan",
        tip: "Multi-level, 30+ screens, supporters groups from every nation. Closest thing to a stadium inside a bar.",
        url: "https://www.legendsnyc.com",
      },
    ],
    mapLocations: [
      { name: "Your stay — 656 Metropolitan Ave", lat: 40.7134, lng: -73.9556, type: "stay" },
      { name: "MetLife Stadium", address: "East Rutherford, NJ", lat: 40.8135, lng: -74.0744, type: "stadium" },
      { name: "FIFA Fan Zone Queens", address: "USTA Billie Jean King Center", lat: 40.7501, lng: -73.8468, type: "fanzone" },
      { name: "Hudson Yards Screen", lat: 40.7540, lng: -74.0019, type: "fanzone" },
      { name: "Banter Bar", address: "132 Havemeyer St, Williamsburg", lat: 40.7131, lng: -73.9558, type: "bar" },
      { name: "230 Fifth Rooftop", lat: 40.7451, lng: -73.9882, type: "bar" },
      { name: "Grand Banks Oyster Bar", address: "Pier 25, Tribeca", lat: 40.7209, lng: -74.0158, type: "bar" },
      { name: "Legends (Football Factory)", address: "6 W 33rd St", lat: 40.7484, lng: -73.9882, type: "bar" },
    ],
  },
  {
    id: "atlanta",
    name: "Atlanta",
    emoji: "🍑",
    country: "USA",
    dates: "30 June – 2 July",
    coords: [33.749, -84.388],
    stay: {
      name: "Accommodation",
      address: "1159 Wade Street, Atlanta, GA",
    },
    travel: {
      arrival: "Tue 30 June — fly from New York",
      departure: "Thu 2 July — fly to Cancún",
      arrivalFlight: {
        from: "New York",
        to: "Atlanta",
        airline: "JetBlue",
        departs: "14:55",
      },
      departureFlight: {
        from: "Atlanta",
        to: "Cancún",
        via: "Fort Lauderdale",
        airline: "JetBlue",
        departs: "07:10",
        arrives: "11:55",
        bookedOn: "lastminute.com",
      },
    },
    match: {
      round: "Round of 32",
      date: "Wednesday 1 July (TBC)",
      time: "TBC",
      stadium: "Mercedes-Benz Stadium",
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mercedes_Benz_Stadium_time_lapse_capture_2017-08-13.jpg/1200px-Mercedes_Benz_Stadium_time_lapse_capture_2017-08-13.jpg",
      address: "1 AMB Dr NW, Atlanta, GA 30313",
      notes:
        "Mercedes-Benz Stadium is a 15-min rideshare from Wade St. STATS Brewpub and Der Biergarten are right next to the stadium for pre-match. Centennial Olympic Park Fan Zone is a 5-min walk.",
    },
    fanzone: {
      name: "FIFA Fan Fest — Centennial Olympic Park",
      address: "265 Park Ave W NW, Atlanta, GA 30313",
      notes:
        "Free and open to the public, runs every match day plus the day before. Giant screens, food, entertainment. 5-min walk from Mercedes-Benz Stadium.",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/fifa-fan-festival",
    },
    bars: [
      {
        name: "Brewhouse Cafe",
        vibe: "🏆 America's Best Soccer Bar",
        address: "401 Moreland Ave NE, Little Five Points",
        tip: "Voted America's Best Soccer Bar by Men in Blazers 2024-25. Opens 5am for big matches.",
        url: "https://www.brewhousecafe.com",
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
    mapLocations: [
      { name: "Your stay — 1159 Wade St", lat: 33.7560, lng: -84.4220, type: "stay" },
      { name: "Mercedes-Benz Stadium", lat: 33.7553, lng: -84.4006, type: "stadium" },
      { name: "Centennial Olympic Park Fan Fest", lat: 33.7603, lng: -84.3922, type: "fanzone" },
      { name: "STATS Brewpub", lat: 33.7557, lng: -84.3998, type: "bar" },
      { name: "Brewhouse Cafe", address: "Little Five Points", lat: 33.7565, lng: -84.3499, type: "bar" },
    ],
  },
  {
    id: "cancun",
    name: "Cancún",
    emoji: "🌴",
    country: "Mexico",
    dates: "2–4 July",
    coords: [21.1619, -86.8515],
    stay: {
      name: "Transit stop",
      address: "Cancún, Quintana Roo, Mexico",
      note: "Short stopover en route to Mexico City. Hotel Zona Hotelera recommended.",
    },
    travel: {
      arrival: "Thu 2 July — fly from Atlanta via Fort Lauderdale",
      departure: "Sat 4 July — fly to Mexico City",
      arrivalFlight: {
        from: "Atlanta",
        to: "Cancún",
        via: "Fort Lauderdale",
        airline: "JetBlue",
        departs: "07:10",
        arrives: "11:55",
        bookedOn: "lastminute.com",
      },
      departureFlight: {
        from: "Cancún",
        to: "Mexico City",
        airline: "Volaris",
        departs: "10:50",
        bookedOn: "kiwi.com",
      },
    },
    fanzone: {
      name: "Cancún Beach Bars",
      address: "Zona Hotelera",
      notes:
        "No official FIFA Fan Fest, but the beach strip has huge screens outside many bars. Touristy but fun for a night.",
    },
    bars: [
      {
        name: "The City Disco & Bar",
        vibe: "🎵 Beach club",
        address: "Blvd. Kukulcán Km 9.5, Zona Hotelera",
        tip: "One of the biggest outdoor screens in the Zona Hotelera. Good for watching a match with a frozen margarita.",
      },
      {
        name: "Señor Frog's",
        vibe: "🍹 Party vibes",
        address: "Blvd. Kukulcán Km 9.5, Zona Hotelera",
        tip: "Classic Cancún — not subtle, but they'll have the football on and the drinks flowing.",
      },
    ],
    mapLocations: [
      { name: "Zona Hotelera", lat: 21.0744, lng: -86.7700, type: "fanzone" },
      { name: "Señor Frog's", lat: 21.0785, lng: -86.7714, type: "bar" },
    ],
  },
  {
    id: "mexico-city",
    name: "Mexico City",
    emoji: "🌮",
    country: "Mexico",
    dates: "4–7 July",
    coords: [19.4326, -99.1332],
    stay: {
      name: "Apartment",
      address: "Dr. Lavista, Colonia Doctores, CDMX",
      note: "Great central location — Roma Norte and Condesa bars are a short taxi ride away.",
    },
    travel: {
      arrival: "Sat 4 July — fly from Cancún",
      departure: "Mon 7 July — fly to Miami",
      arrivalFlight: {
        from: "Cancún",
        to: "Mexico City",
        airline: "Volaris",
        departs: "10:50",
        bookedOn: "kiwi.com",
      },
    },
    match: {
      round: "Round of 16",
      date: "Sunday 6 July (TBC)",
      time: "TBC",
      stadium: "Estadio Azteca",
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg/1200px-Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg",
      address: "Calzada de Tlalpan 3465, Santa Úrsula Coapa, CDMX",
      notes:
        "Take the Metro Line 2 to Tasqueña, then the tren ligero to Estadio Azteca. Uber also works well. One of football's great cathedrals — 87,000 capacity. Get there early.",
    },
    fanzone: {
      name: "FIFA Fan Fest — El Zócalo",
      address: "Plaza de la Constitución, Centro Histórico, CDMX",
      notes:
        "Free entry, no registration. Surrounded by incredible colonial architecture. Expect massive, electric crowds for any Mexico game.",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/fifa-fan-festival",
    },
    bars: [
      {
        name: "The Dog House Pub",
        vibe: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Brit-owned",
        address: "Calle Dinamarca 44, Juárez (near Roma/Condesa)",
        tip: "Brit-owned, walls lined with TVs and football memorabilia. Will be the central hub for English fans in CDMX. Book ahead.",
      },
      {
        name: "Celtics Pub",
        vibe: "🍺 Local favourite",
        address: "Ámsterdam 17, Condesa",
        tip: "Screens everywhere, lively crowd, rooftop seating. A 10-min walk from Parque México.",
      },
      {
        name: "BeerGarden Roma",
        vibe: "🌿 Hip & relaxed",
        address: "Tonalá 10, Roma Norte",
        tip: "Plant-filled, inclusive crowd, great beer selection. Good for a pre-match afternoon drink.",
      },
    ],
    mapLocations: [
      { name: "Your stay — Dr. Lavista", lat: 19.4180, lng: -99.1480, type: "stay" },
      { name: "Estadio Azteca", lat: 19.3029, lng: -99.1505, type: "stadium" },
      { name: "FIFA Fan Fest — El Zócalo", lat: 19.4326, lng: -99.1332, type: "fanzone" },
      { name: "The Dog House Pub", lat: 19.4260, lng: -99.1580, type: "bar" },
      { name: "Celtics Pub (Condesa)", lat: 19.4130, lng: -99.1702, type: "bar" },
      { name: "BeerGarden Roma", lat: 19.4178, lng: -99.1623, type: "bar" },
    ],
  },
  {
    id: "miami",
    name: "Miami",
    emoji: "🌊",
    country: "USA",
    dates: "7–13 July",
    coords: [25.79, -80.13],
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
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hard_Rock_Stadium_for_Super_Bowl_LIV_%2849606710103%29.jpg/1200px-Hard_Rock_Stadium_for_Super_Bowl_LIV_%2849606710103%29.jpg",
      address: "347 Don Shula Dr, Miami Gardens, FL 33056",
      notes:
        "Uber/Lyft from Miami Beach is ~35–40 mins. Hard Rock hosts the QF — this is where it gets real.",
    },
    fanzone: {
      name: "FIFA Fan Fest — Bayfront Park",
      address: "301 Biscayne Blvd, Downtown Miami",
      notes:
        "On Biscayne Bay with incredible views. Free entry. Wynwood Marketplace also hosting free watch parties from 6 July.",
      url: "https://www.bayfrontparkmiami.com",
    },
    bars: [
      {
        name: "The Clevelander",
        vibe: "🏖️ South Beach icon",
        address: "1020 Ocean Dr, Miami Beach (near your place)",
        tip: "20+ screens, giant 20ft LED, DJ sets, pool access. Walking distance from your studio.",
        url: "https://www.clevelander.com",
      },
      {
        name: "Grails Wynwood",
        vibe: "📺 Best screens in Miami",
        address: "2800 N Miami Ave, Wynwood",
        tip: "75+ TVs, no cover charge for any match. The most dedicated soccer bar in Miami.",
        url: "https://grailsmiami.com",
      },
      {
        name: "Wynwood Marketplace",
        vibe: "🎉 Free watch parties",
        address: "2250 NW 2nd Ave, Wynwood",
        tip: "Free FIFA watch parties at Clutch Bar from 6 July onwards. Open-air, massive screens, food vendors.",
      },
    ],
    mapLocations: [
      { name: "Boho Central — Miami Beach", lat: 25.7907, lng: -80.1300, type: "stay" },
      { name: "Hard Rock Stadium", lat: 25.9580, lng: -80.2389, type: "stadium" },
      { name: "FIFA Fan Fest — Bayfront Park", lat: 25.7742, lng: -80.1870, type: "fanzone" },
      { name: "The Clevelander", address: "Ocean Drive", lat: 25.7796, lng: -80.1300, type: "bar" },
      { name: "Grails Wynwood", lat: 25.8008, lng: -80.1990, type: "bar" },
    ],
  },
];

export const planATimeline = [
  { date: "Fri 26 June", event: "✈️ Fly London Gatwick → New York JFK (Norse, 13:05–15:55)", city: "nyc" },
  { date: "Fri 26 June", event: "🌃 230 Fifth Rooftop — arrival drinks", city: "nyc" },
  { date: "Sat 27 June", event: "⚽ England vs Panama — MetLife Stadium (5pm ET / 10pm BST)", city: "nyc" },
  { date: "Sun 28 June", event: "🦪 Grand Banks Oyster Bar — Sunday afternoon", city: "nyc" },
  { date: "Mon 29 June", event: "🗽 Last full day in NYC", city: "nyc" },
  { date: "Tue 30 June", event: "✈️ Fly New York → Atlanta (JetBlue, 14:55)", city: "atlanta" },
  { date: "Wed 1 July", event: "⚽ England — Round of 32 — Mercedes-Benz Stadium", city: "atlanta" },
  { date: "Thu 2 July", event: "✈️ Fly Atlanta → Cancún via Fort Lauderdale (JetBlue, 07:10–11:55)", city: "cancun" },
  { date: "Sat 4 July", event: "✈️ Fly Cancún → Mexico City (Volaris, 10:50)", city: "mexico-city" },
  { date: "Sun 6 July", event: "⚽ England — Round of 16 — Estadio Azteca", city: "mexico-city" },
  { date: "Mon 7 July", event: "✈️ Fly Mexico City → Miami", city: "miami" },
  { date: "Fri 11 July", event: "⚽ England — Quarterfinal — Hard Rock Stadium", city: "miami" },
  { date: "Sun 13 July", event: "✈️ Fly Miami → London Heathrow", city: "miami" },
];

export const planBTimeline = [
  { date: "Fri 26 June", event: "✈️ Fly London Gatwick → New York JFK (Norse, 13:05–15:55)", city: "nyc" },
  { date: "Fri 26 June", event: "🌃 230 Fifth Rooftop — arrival drinks", city: "nyc" },
  { date: "Sat 27 June", event: "⚽ England vs Panama — MetLife Stadium (5pm ET / 10pm BST)", city: "nyc" },
  { date: "Sun 28 June", event: "🦪 Grand Banks Oyster Bar — Sunday afternoon", city: "nyc" },
  { date: "Mon–Tue 29–30 June", event: "🗽 NYC → travel to Toronto", city: "toronto" },
  { date: "Wed 2 July", event: "⚽ England — Round of 32 — BMO Field, Toronto (7pm ET)", city: "toronto" },
  { date: "Thu–Sat 3–5 July", event: "🤠 Travel to Dallas", city: "dallas" },
  { date: "Sun 6 July", event: "⚽ England — Round of 16 — AT&T Stadium, Dallas (2pm CT)", city: "dallas" },
  { date: "Mon–Wed 7–9 July", event: "🌴 Travel to Los Angeles", city: "la" },
  { date: "Thu 10 July", event: "⚽ England — Quarterfinal — SoFi Stadium, LA (12pm PT)", city: "la" },
];

// Plan A route: NYC onwards only
export const planARoute: [number, number][] = [
  [40.641, -73.778],  // New York JFK
  [33.749, -84.388],  // Atlanta
  [21.162, -86.852],  // Cancún
  [19.433, -99.133],  // Mexico City
  [25.796, -80.287],  // Miami
];

export const planAStops = [
  { name: "New York", coords: [40.641, -73.778] as [number, number], dates: "26 June – 30 June" },
  { name: "Atlanta", coords: [33.749, -84.388] as [number, number], dates: "30 June – 2 July" },
  { name: "Cancún", coords: [21.162, -86.852] as [number, number], dates: "2–4 July" },
  { name: "Mexico City", coords: [19.433, -99.133] as [number, number], dates: "4–7 July" },
  { name: "Miami", coords: [25.796, -80.287] as [number, number], dates: "7–13 July" },
];

// Plan B route
export const planBRoute: [number, number][] = [
  [40.641, -73.778],  // New York
  [43.633, -79.418],  // Toronto BMO Field
  [32.748, -97.093],  // Dallas AT&T Stadium
  [33.953, -118.339], // SoFi Stadium LA
];

export const planBStops = [
  { name: "New York", coords: [40.641, -73.778] as [number, number], dates: "26 June – 30 June" },
  { name: "Toronto", coords: [43.633, -79.418] as [number, number], dates: "~30 June – 3 July" },
  { name: "Dallas", coords: [32.748, -97.093] as [number, number], dates: "~4–7 July" },
  { name: "Los Angeles", coords: [33.953, -118.339] as [number, number], dates: "~8–11 July" },
];
