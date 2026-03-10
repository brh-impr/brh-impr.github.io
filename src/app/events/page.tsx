import Link from 'next/link';
import { events } from '@/data/events';

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Events</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Clinics, prospect skates, alumni events, and fundraisers</h1>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <article key={event.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
            <div className="aspect-[16/10] bg-slate-200" />
            <div className="p-5">
              <div className="text-sm font-semibold text-brand">{event.date}</div>
              <h2 className="mt-2 text-xl font-black">{event.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{event.location}</p>
              <p className="mt-4 text-slate-600">{event.description}</p>
              <Link href={`/events/${event.slug}`} className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-2 font-semibold text-white">
                View Event
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
