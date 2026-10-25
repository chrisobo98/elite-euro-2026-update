import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { business } from '@/data/site';
import { trackCtaClick, trackPhoneClick } from '@/lib/analytics';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'BMW Service', to: '/bmw-service' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-accent-500">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M5 17c2 1 4 1.5 6 1.5 4 0 7-2 7-5 0-5-9-2-9-6 0-2 2-3 4.5-3 2 0 3.5.5 5 1.5" />
          <circle cx="18" cy="18" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-ink-900">Elite Euro Motors</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">Ocoee · Florida</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-100 bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container-tight flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(l.to) ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {l.label}
              {isActive(l.to) && (
                <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-accent-500" aria-hidden />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={business.phoneHref}
            onClick={() => trackPhoneClick('header')}
            className="btn-ghost px-3 py-2 text-sm"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{business.phoneDisplay}</span>
          </a>
          <Link
            to="/request-service"
            onClick={() => trackCtaClick('Request Service', 'header', '/request-service')}
            className="btn-primary px-5 py-2.5"
          >
            Request Service
          </Link>
        </div>

        <button
          className="lg:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 z-40 transition-all duration-300 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1 p-5" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(l.to) ? 'bg-ink-50 text-ink-900' : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={business.phoneHref}
                onClick={() => trackPhoneClick('mobile_menu')}
                className="btn-outline w-full"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <Link
                to="/request-service"
                onClick={() => trackCtaClick('Request Service', 'mobile_menu', '/request-service')}
                className="btn-primary w-full"
              >
                Request Service
              </Link>
            </div>
            <p className="mt-6 px-4 text-xs text-ink-400">{business.address.full}</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
