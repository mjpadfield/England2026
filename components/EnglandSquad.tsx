const players = [
  {
    name: "Jude Bellingham",
    number: 10,
    club: "Real Madrid",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg",
  },
  {
    name: "Harry Kane",
    number: 9,
    club: "Bayern Munich",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Harry_Kane_on_October_10%2C_2023.jpg/500px-Harry_Kane_on_October_10%2C_2023.jpg",
  },
  {
    name: "Bukayo Saka",
    number: 7,
    club: "Arsenal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1_bukayo_saka_arsenal_2025_%28cropped%29.jpg/500px-1_bukayo_saka_arsenal_2025_%28cropped%29.jpg",
  },
  {
    name: "Cole Palmer",
    number: 20,
    club: "Chelsea",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cole_Palmer_2025_FIFA_Club_World_Cup_Final.jpg",
  },
  {
    name: "Phil Foden",
    number: 11,
    club: "Man City",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg/500px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg",
  },
  {
    name: "Declan Rice",
    number: 4,
    club: "Arsenal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/1_declan_rice_arsenal_2025_%28cropped%29.jpg/500px-1_declan_rice_arsenal_2025_%28cropped%29.jpg",
  },
];

export default function EnglandSquad() {
  return (
    <section className="py-12 px-4 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">The Squad</h2>
            <p className="text-white/40 text-sm">England at FIFA World Cup 2026™</p>
          </div>
          <span className="text-3xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {players.map((p) => (
            <div key={p.name} className="group relative">
              {/* Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-white/5 border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />

                {/* Number badge */}
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-england-red flex items-center justify-center">
                  <span className="text-white text-xs font-black">{p.number}</span>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-white font-bold text-xs leading-tight">{p.name}</p>
                  <p className="text-white/50 text-[10px]">{p.club}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Celebration banner */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-england-red/20 via-england-red/10 to-transparent border border-england-red/20 px-6 py-5 flex items-center gap-4">
          <span className="text-4xl shrink-0">🏆</span>
          <div>
            <p className="text-white font-bold text-lg">It's coming home.</p>
            <p className="text-white/60 text-sm">Summer 2026 — England's best squad in a generation. This is the one.</p>
          </div>
          <div className="ml-auto hidden md:flex gap-3 text-center shrink-0">
            {[
              { label: "Group", venue: "MetLife" },
              { label: "R32", venue: "Atlanta" },
              { label: "R16", venue: "Azteca" },
              { label: "QF", venue: "Miami" },
            ].map((s) => (
              <div key={s.label} className="text-xs">
                <div className="text-england-red font-bold">{s.label}</div>
                <div className="text-white/40">{s.venue}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
