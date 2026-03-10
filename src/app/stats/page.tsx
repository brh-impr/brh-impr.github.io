import { playerLeaders, teamStats } from '@/data/stats';

export default function StatsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Stats</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Team and player statistics</h1>
        <p className="mt-3 text-slate-600">Track season leaders, special teams performance, and team trends.</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black">Team Stats</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {teamStats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-1 text-2xl font-black">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black">Player Leaders</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 text-sm text-slate-500">
                <tr>
                  <th className="px-4 py-3">Player</th>
                  <th className="px-4 py-3">G</th>
                  <th className="px-4 py-3">A</th>
                  <th className="px-4 py-3">PTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {playerLeaders.map((player) => (
                  <tr key={player.name}>
                    <td className="px-4 py-3 font-semibold">{player.name}</td>
                    <td className="px-4 py-3">{player.goals}</td>
                    <td className="px-4 py-3">{player.assists}</td>
                    <td className="px-4 py-3">{player.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
