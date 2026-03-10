import { products } from '@/data/store';

export default function StorePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Store</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Team gear and fan merchandise</h1>
        <p className="mt-3 text-slate-600">Start with lightweight merch listings and later connect Shopify or another e-commerce service.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.slug} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="aspect-[4/3] rounded-2xl bg-slate-100" />
            <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
            <p className="text-slate-500">{product.price}</p>
            <button className="mt-4 rounded-2xl bg-slate-900 px-4 py-2 font-semibold text-white">Buy Now</button>
          </article>
        ))}
      </div>
    </section>
  );
}
