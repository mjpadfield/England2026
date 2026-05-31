import type { City } from "./data";

// Plan B cities — same City type so CitySection works for both plans
export const planBCities: City[] = [
  {
    id: "toronto",
    name: "Toronto",
    emoji: "🍁",
    country: "Canada",
    dates: "~30 June – 3 July",
    timezone: "America/Toronto",
    window: { start: "2026-06-30", end: "2026-07-03" },
    coords: [43.653, -79.383],
    stay: {
      name: "TBC",
      address: "Toronto, Canada",
      note: "Not yet booked — flights to Atlanta would need rebooking if England finish 2nd.",
    },
    travel: {
      arrival: "~Tue 30 June / Wed 1 July — travel from NYC",
      departure: "~Thu 3 July — travel to Dallas",
    },
    match: {
      round: "Round of 32",
      date: "Wednesday 2 July",
      time: "7pm ET / 12am BST",
      stadium: "BMO Field",
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Toronto_BMO_Field_in_2024.jpg/1200px-Toronto_BMO_Field_in_2024.jpg",
      address: "170 Princes' Blvd, Toronto, ON M6K 3C3",
      notes:
        "Take the 509/511 streetcar from Union Station to Exhibition stop — right outside the ground. Smaller and more intimate than the US stadiums, but the atmosphere should be brilliant. England fans will congregate on the waterfront beforehand.",
    },
    fanzone: {
      name: "Nathan Phillips Square Fan Zone",
      address: "Nathan Phillips Square, 100 Queen St W, Toronto",
      notes:
        "Toronto's official FIFA Fan Zone is at Nathan Phillips Square in front of City Hall — free, open to all, giant screens. Great pre-match spot before heading to BMO Field. Also check Steamwhistle Brewery on the waterfront for unofficial watch parties.",
      url: "https://www.toronto.ca/explore-enjoy/festivals-events/world-cup-toronto-2026/",
    },
    bars: [
      {
        name: "The Caledonian",
        vibe: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Scottish/British pub",
        address: "856 College St, Little Italy",
        tip: "One of Toronto's best British-style pubs. Shows all major football and will be packed for England games.",
      },
      {
        name: "Hemingway's",
        vibe: "🍺 Expat favourite",
        address: "142 Cumberland St, Yorkville",
        tip: "Long-standing expat bar popular with British and Irish supporters. Multiple screens, lively on match days.",
      },
      {
        name: "Amsterdam BrewHouse",
        vibe: "🌊 Waterfront",
        address: "245 Queens Quay W, Harbourfront",
        tip: "Massive lakefront venue with huge screens. Walking distance from BMO Field — ideal for pre and post-match. Expect big crowds on match days.",
      },
    ],
    mapLocations: [
      { name: "BMO Field", lat: 43.6332, lng: -79.4187, type: "stadium" },
      { name: "Nathan Phillips Square Fan Zone", lat: 43.6529, lng: -79.3849, type: "fanzone" },
      { name: "Amsterdam BrewHouse (Harbourfront)", lat: 43.6393, lng: -79.3893, type: "bar" },
      { name: "The Caledonian", lat: 43.6544, lng: -79.4227, type: "bar" },
    ],
  },
  {
    id: "dallas",
    name: "Dallas (Arlington)",
    emoji: "🤠",
    country: "USA",
    dates: "~4–7 July",
    timezone: "America/Chicago",
    window: { start: "2026-07-04", end: "2026-07-07" },
    coords: [32.748, -97.093],
    stay: {
      name: "TBC",
      address: "Dallas / Arlington, TX",
      note: "Arlington (stadium area) or downtown Dallas both work. Uber between them is ~25 mins.",
    },
    travel: {
      arrival: "~Thu–Fri 3–4 July — fly from Toronto",
      departure: "~Mon 7 July — fly to Los Angeles",
    },
    match: {
      round: "Round of 16",
      date: "Sunday 6 July",
      time: "2pm CT / 8pm BST",
      stadium: "AT&T Stadium",
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/1200px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg",
      address: "1 AT&T Way, Arlington, TX 76011",
      notes:
        "One of the biggest and most spectacular stadiums in the world — retractable roof, the world's largest column-free indoor space. Rideshare from downtown Dallas is ~25 mins. Deep Ellum is the best pre-match neighbourhood for bars.",
    },
    fanzone: {
      name: "Dallas Fan Fest — Fair Park",
      address: "3809 Grand Ave, Dallas, TX 75210",
      notes:
        "Fair Park hosts the Dallas FIFA Fan Fest — one of the largest in the USA. Free, open to all, giant screens for every match. Also check out Trinity Groves for watch parties with a view of the city skyline.",
      url: "https://www.dallasfwc26.com",
    },
    bars: [
      {
        name: "The Londoner",
        vibe: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 British pub chain",
        address: "Multiple Dallas locations",
        tip: "Go-to spot for English fans in Dallas. Will be showing all England games, expect big crowds and proper atmosphere.",
      },
      {
        name: "Three Links",
        vibe: "🎸 Deep Ellum",
        address: "2704 Elm St, Deep Ellum",
        tip: "Deep Ellum is Dallas's most vibrant neighbourhood. Three Links and surrounding bars will all be showing the matches — great pre/post-match area.",
      },
      {
        name: "The Common Table",
        vibe: "🍺 Craft beer",
        address: "2917 Fairmount St, Uptown Dallas",
        tip: "Popular Uptown spot with multiple screens and a great beer selection. Less touristy than some, more local crowd.",
      },
    ],
    mapLocations: [
      { name: "AT&T Stadium", lat: 32.7480, lng: -97.0929, type: "stadium" },
      { name: "Fair Park Fan Fest", lat: 32.7818, lng: -96.7576, type: "fanzone" },
      { name: "Deep Ellum bar district", lat: 32.7847, lng: -96.7900, type: "bar" },
    ],
  },
  {
    id: "la",
    name: "Los Angeles",
    emoji: "🌴",
    country: "USA",
    dates: "~8–11 July",
    timezone: "America/Los_Angeles",
    window: { start: "2026-07-08", end: "2026-07-11" },
    coords: [34.052, -118.243],
    stay: {
      name: "TBC",
      address: "Los Angeles / Inglewood, CA",
      note: "Santa Monica or Manhattan Beach recommended — good base near SoFi and the coast.",
    },
    travel: {
      arrival: "~Mon–Tue 7–8 July — fly from Dallas",
      departure: "~Fri–Sat 11–12 July — fly home",
    },
    match: {
      round: "Quarterfinal",
      date: "Thursday 10 July",
      time: "12pm PT / 8pm BST",
      stadium: "SoFi Stadium",
      stadiumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/1200px-SoFi_Stadium_2023.jpg",
      address: "1001 Stadium Dr, Inglewood, CA 90301",
      notes:
        "SoFi is the most advanced stadium in the world — open-air with a translucent roof, fully immersive. Take the Metro C Line (Green) from downtown LA to Hawthorne/Lennox then Uber/walk (~15 min). Or rideshare direct — expect surge pricing, allow extra time.",
    },
    fanzone: {
      name: "LA FIFA Fan Fest — Grand Park",
      address: "200 N Grand Ave, Downtown LA",
      notes:
        "Grand Park in downtown LA hosts the official FIFA Fan Fest. Also check Venice Beach for unofficial watch parties on match day — the whole city comes alive for big games.",
      url: "https://losangelesfwc26.com",
    },
    bars: [
      {
        name: "Ye Olde King's Head",
        vibe: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 The LA British pub",
        address: "116 Santa Monica Blvd, Santa Monica",
        tip: "LA's most famous British pub — been showing English football for 40+ years. Will be the epicentre for England fans in LA. Book ahead, it will be rammed.",
        url: "https://www.yeoldekingsheadpub.com",
      },
      {
        name: "The Brig",
        vibe: "🍺 Venice Beach",
        address: "1515 Abbot Kinney Blvd, Venice",
        tip: "Cool Venice bar showing all matches — great location for a post-match wander on Abbot Kinney.",
      },
      {
        name: "Clifton's Republic",
        vibe: "🎉 Downtown LA",
        address: "648 S Broadway, Downtown LA",
        tip: "Huge multi-level bar near Grand Park fan zone. Multiple screens throughout — good for watching the match then heading to the fan fest.",
      },
    ],
    mapLocations: [
      { name: "SoFi Stadium", lat: 33.9535, lng: -118.3392, type: "stadium" },
      { name: "Grand Park Fan Fest", lat: 34.0561, lng: -118.2464, type: "fanzone" },
      { name: "Ye Olde King's Head (Santa Monica)", lat: 34.0195, lng: -118.4912, type: "bar" },
      { name: "Venice Beach", lat: 33.9850, lng: -118.4695, type: "bar" },
    ],
  },
];
