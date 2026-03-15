import Link from "next/link";
import { getAllPlayers } from "@/lib/content";

export default function RosterPage() {
  const players = getAllPlayers();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Roster
          </div>
          <h1 className="mt-2 text-4xl font-black tracking-tight">
            Meet the team
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Browse player profiles, class years, hometowns, and season bios.
          </p>
        </div>

        <div className="flex gap-3">
          <input
            className="rounded-2xl border border-slate-300 px-4 py-2"
            placeholder="Search players"
          />
          <select className="rounded-2xl border border-slate-300 px-4 py-2">
            <option>All Positions</option>
            <option>Forwards</option>
            <option>Defense</option>
            <option>Goalies</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {players.map((player) => (
          <article
            key={player.slug}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"
          >
            <div className="flex items-start justify-between">
              <div className="text-5xl font-black text-brand">
                {player.number}
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">
                {player.position}
              </div>
            </div>

            <h2 className="mt-4 text-xl font-bold">{player.name}</h2>
            <p className="text-slate-600">{player.year}</p>
            <p className="mt-3 text-sm text-slate-500">{player.hometown}</p>

            <Link
              href={`/roster/${player.slug}`}
              className="mt-5 inline-flex rounded-2xl border border-slate-300 px-4 py-2 font-semibold"
            >
              View Profile
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
