import Link from 'next/link';
import { newsItems } from '@/data/news';

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">News</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">News and announcements</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {newsItems.map((item) => (
          <article key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold text-brand">{item.date}</div>
            <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.excerpt}</p>
            <Link href={`/news/${item.slug}`} className="mt-5 inline-flex rounded-2xl border border-slate-300 px-4 py-2 font-semibold">
              Read Story
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
