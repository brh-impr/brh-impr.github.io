const faqs = [
  ['Is this an official university athletics website?', 'No. This site is independently operated for the club team.'],
  ['How do I join the team?', 'Visit the recruiting page and complete the interest form.'],
  ['How do I register for events?', 'Go to Events and open the event detail page to register.']
];

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">FAQ</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">Frequently asked questions</h1>
      <div className="mt-8 space-y-4">
        {faqs.map(([q, a]) => (
          <div key={q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold">{q}</h2>
            <p className="mt-3 text-slate-600">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
