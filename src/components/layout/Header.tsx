import Link from 'next/link';

const nav = [
  { href: '/schedule', label: 'Schedule' },
  { href: '/roster', label: 'Roster' },
  { href: '/stats', label: 'Stats' },
  { href: '/recruiting', label: 'Recruiting' },
  { href: '/events', label: 'Events' },
  { href: '/store', label: 'Store' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Independent Club Team
          </span>
          <span className="text-2xl font-black tracking-tight text-brand">CCSU Club Hockey</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-semibold lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
