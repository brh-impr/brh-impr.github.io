import Link from "next/link";
import { getAllNews } from "@/lib/content";

export default function NewsPage() {
  const posts = getAllNews();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          News
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          Team news and announcements
        </h1>
        <p className="mt-3 text-slate-600">
          Follow season updates, recruiting news, event announcements, and team stories.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <div className="text-sm font-semibold text-brand">{post.date}</div>
            <h2 className="mt-2 text-2xl font-black">{post.title}</h2>
            <p className="mt-4 text-slate-600">{post.excerpt}</p>

            <Link
              href={`/news/${post.slug}`}
              className="mt-5 inline-flex rounded-2xl border border-slate-300 px-4 py-2 font-semibold"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
