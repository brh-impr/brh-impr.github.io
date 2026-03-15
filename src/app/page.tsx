import Link from "next/link";
import {
  getAllEvents,
  getAllNews,
  getHomepageSettings,
  getSchedule,
  getStore,
} from "@/lib/content";

export default function HomePage() {
  const homepage = getHomepageSettings();
  const schedule = getSchedule();
  const store = getStore();
  const allEvents = getAllEvents();
  const allNews = getAllNews();

  const featuredStats = homepage.featured_stats ?? [];
  const nextGames = schedule.games.slice(0, 3);
  const upcomingEvents = allEvents.slice(0, 3);
  const latestNews = allNews.slice(0, 3);
  const previewProducts = store.products.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              {homepage.hero_eyebrow}
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              {homepage.hero_title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-blue-100">
              {homepage.hero_text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={homepage.primary_cta_link}
                className="rounded-2xl bg-white px-5 py-3 font-semibold text-brand"
              >
                {homepage.primary_cta_label}
              </Link>
              <Link
                href={homepage.secondary_cta_link}
                className="rounded-2xl border border-white/30 px-5 py-3 font-semibold text-white"
              >
                {homepage.secondary_cta_label}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredStats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <div className="text-sm uppercase tracking-wide text-blue-100">
                  {item.label}
                </div>
                <div className="mt-2 text-3xl font-black">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              Upcoming Games
            </h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              {nextGames.map((game) => (
                <div
                  key={`${game.date}-${game.opponent}`}
                  className="flex flex-col gap-3 border-b border-slate-100 p-5 md:flex-row md:items-center md:justify-between last:border-b-0"
                >
                  <div>
                    <div className="text-sm font-semibold text-brand">
                      {game.date}
                    </div>
                    <div className="text-xl font-bold">vs {game.opponent}</div>
                    <div className="text-slate-500">
                      {game.location} · {game.rink}
                    </div>
                  </div>
                  <Link
                    href="/schedule"
                    className="rounded-2xl bg-slate-900 px-4 py-2 font-semibold text-white"
                  >
                    Game Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Latest News
            </div>
            <div className="mt-4 space-y-4">
              {latestNews.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="block rounded-2xl bg-slate-50 p-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.date}
                  </div>
                  <div className="mt-1 font-bold">{item.title}</div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Events
          </div>
          <h2 className="mt-2 text-3xl font-black">
            Register for team events
          </h2>
          <div className="mt-6 space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.slug}
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
              >
                <div>
                  <div className="font-bold">{event.title}</div>
                  <div className="text-sm text-slate-500">
                    {event.date} · {event.location}
                  </div>
                </div>
                <Link
                  href={`/events/${event.slug}`}
                  className="rounded-2xl bg-brand px-4 py-2 font-semibold text-white"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Store
          </div>
          <h2 className="mt-2 text-3xl font-black">
            Support the team with merch
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {previewProducts.map((product) => (
              <div
                key={product.slug}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <div className="aspect-[4/3] rounded-2xl bg-slate-100" />
                <div className="mt-4 font-bold">{product.name}</div>
                <div className="text-slate-500">{product.price}</div>
              </div>
            ))}
          </div>
          <Link
            href="/store"
            className="mt-5 inline-flex rounded-2xl border border-slate-300 px-4 py-2 font-semibold"
          >
            Visit Store
          </Link>
        </div>
      </section>
    </div>
  );
}
