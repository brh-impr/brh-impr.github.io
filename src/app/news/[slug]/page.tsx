import { notFound } from "next/navigation";
import { getAllNews, getNewsBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllNews().map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!post) return notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
        News
      </div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">{post.title}</h1>
      <p className="mt-3 text-sm font-semibold text-slate-500">{post.date}</p>

      {post.featured_image ? (
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <img
            src={post.featured_image}
            alt={post.title}
            className="h-auto w-full object-cover"
          />
        </div>
      ) : null}

      <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="whitespace-pre-line leading-8 text-slate-700">
          {post.body}
        </div>
      </article>
    </section>
  );
}
