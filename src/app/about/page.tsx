import { siteConfig } from '@/lib/constants';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">About</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">About the team</h1>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 leading-7 text-slate-600 shadow-soft">
        <p>CCSU Club Hockey is an independent college club hockey program built around competition, player development, and community.</p>
        <p className="mt-4">{siteConfig.disclaimer}</p>
      </div>
    </section>
  );
}
