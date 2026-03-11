import { notFound } from "next/navigation";
import { events } from "@/data/events";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) return notFound();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="aspect-[16/8] rounded-3xl bg-slate-200" />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#003DA5]">
            Event
          </div>
          <h1 className="mt-2 text-4xl font-black">{event.title}</h1>
          <p className="mt-4 leading-7 text-slate-600">{event.description}</p>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="space-y-3 text-slate-700">
            <div>
              <span className="font-bold">Date:</span> {event.date}
            </div>
            <div>
              <span className="font-bold">Location:</span> {event.location}
            </div>
            <div>
              <span className="font-bold">Price:</span> {event.price ?? "Free"}
            </div>
          </div>

          <form className="mt-6 space-y-4">
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Full Name"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Email"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Phone"
            />
            <button className="w-full rounded-2xl bg-[#003DA5] px-5 py-3 font-semibold text-white">
              Register Now
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}
