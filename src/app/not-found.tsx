import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">404</div>
      <h1 className="mt-2 text-4xl font-black tracking-tight">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you requested does not exist or may have moved.</p>
      <Link href="/" className="mt-8 inline-flex rounded-2xl bg-brand px-5 py-3 font-semibold text-white">
        Return Home
      </Link>
    </section>
  );
}
