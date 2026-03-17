import ScheduleTableClient from "@/components/schedule/ScheduleTableClient";

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Schedule
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          Season schedule and results
        </h1>
        <p className="mt-3 text-slate-600">
          Follow upcoming games, recent results, and rink details.
        </p>
      </div>

      <ScheduleTableClient />
    </section>
  );
}
