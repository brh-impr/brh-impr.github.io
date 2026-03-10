import { notFound } from 'next/navigation';
import { newsItems } from '@/data/news';

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}


export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const item = newsItems.find((entry) => entry.slug === slug);

  if (!item) return notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">News</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">{item.title}</h1>
      <div className="mt-3 text-slate-500">{item.date}</div>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="leading-7 text-slate-700">{item.content}</p>
      </div>
    </article>
  );
}