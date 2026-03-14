import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) return notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#003DA5]">
        News
      </div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-slate-500">{article.date}</p>

      <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
        <p className="leading-8 text-slate-700">{article.content}</p>
      </article>
    </section>
  );
}
