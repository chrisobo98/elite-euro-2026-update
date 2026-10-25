import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { business, services } from '@/data/site';
import { trackPhoneClick } from '@/lib/analytics';

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-tight py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-accent-500">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M5 17c2 1 4 1.5 6 1.5 4 0 7-2 7-5 0-5-9-2-9-6 0-2 2-3 4.5-3 2 0 3.5.5 5 1.5" />
                  <circle cx="18" cy="18" r="1.4" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="font-display text-base font-bold text-white">{business.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Independent BMW &amp; Mercedes-Benz repair in Ocoee, Florida. European car care with no guesswork and no pressure.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-500">{business.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-ink-400 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-ink-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/bmw-service" className="text-ink-400 hover:text-white transition-colors">BMW Service</Link></li>
              <li><Link to="/blog" className="text-ink-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/request-service" className="text-ink-400 hover:text-white transition-colors">Request Service</Link></li>
              <li><Link to="/contact" className="text-ink-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Visit Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-white transition-colors">
                  {business.address.full}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <a href={business.phoneHref} onClick={() => trackPhoneClick('footer')} className="text-ink-400 hover:text-white transition-colors">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <a href={`mailto:${business.email}`} className="text-ink-400 hover:text-white transition-colors">
                  {business.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <span className="text-ink-400">Mon–Fri · 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="text-ink-600">
            Website prototype. Photographs are illustrative stock images and do not depict Elite Euro Motors’ facility, staff, or customers.
          </p>
        </div>
      </div>
    </footer>
  );
}
