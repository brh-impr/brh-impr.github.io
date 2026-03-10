export default function DonatePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Donate</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">Support the program</h1>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-slate-600">Donations can help fund travel, ice time, equipment, and recruiting.</p>
        <button className="mt-6 rounded-2xl bg-brand px-5 py-3 font-semibold text-white">Add Donation Link</button>
      </div>
    </section>
  );
}
