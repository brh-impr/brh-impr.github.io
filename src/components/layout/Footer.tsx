import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="text-xl font-black text-brand">CCSU Club Hockey</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{siteConfig.disclaimer}</p>
        </div>
        <div>
          <div className="font-bold">Explore</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/schedule">Schedule</Link>
            <Link href="/roster">Roster</Link>
            <Link href="/recruiting">Recruiting</Link>
            <Link href="/events">Events</Link>
          </div>
        </div>
        <div>
          <div className="font-bold">Support</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/store">Store</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
