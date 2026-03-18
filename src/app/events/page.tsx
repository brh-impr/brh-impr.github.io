import EventsListClient from "@/components/events/EventsListClient";

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Events
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          Team events and registration
        </h1>
        <p className="mt-3 text-slate-600">
          Stay involved with upcoming team events and register online.
        </p>
      </div>

      <EventsListClient />
    </section>
  );
}
