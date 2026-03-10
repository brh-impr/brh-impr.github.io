export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Contact</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">Get in touch</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="font-bold">General Inquiries</div>
          <p className="mt-3 text-slate-600">clubhockey@example.com</p>
          <div className="mt-6 font-bold">Recruiting Contact</div>
          <p className="mt-3 text-slate-600">recruiting@example.com</p>
        </div>

        <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm text-slate-500">This starter is static-export ready. Replace this form with Formspree, Basin, or your preferred form provider before launch.</p>
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Your Name" />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Your Email" />
          <textarea className="min-h-36 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Message" />
          <button className="rounded-2xl bg-brand px-5 py-3 font-semibold text-white">Send Message</button>
        </form>
      </div>
    </section>
  );
}
