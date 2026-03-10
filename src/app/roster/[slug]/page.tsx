import { notFound } from 'next/navigation';
import { players } from '@/data/roster';

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}


export default function PlayerPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const player = players.find((item) => item.slug === slug);

  if (!player) return notFound();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[320px_1fr]">
        <div className="aspect-[4/5] rounded-3xl bg-slate-200" />
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Player Profile</div>
          <h1 className="mt-2 text-4xl font-black">#{player.number} {player.name}</h1>
          <p className="mt-3 text-lg text-slate-600">{player.position} · {player.year}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-soft">Hometown: {player.hometown}</div>
            <div className="rounded-2xl bg-white p-4 shadow-soft">Previous Team: {player.previousTeam ?? 'TBD'}</div>
            <div className="rounded-2xl bg-white p-4 shadow-soft">Shoots: {player.shoots ?? 'TBD'}</div>
            <div className="rounded-2xl bg-white p-4 shadow-soft">Major: {player.major ?? 'TBD'}</div>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Bio</h2>
            <p className="mt-4 leading-7 text-slate-600">{player.bio ?? 'Player biography coming soon.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}