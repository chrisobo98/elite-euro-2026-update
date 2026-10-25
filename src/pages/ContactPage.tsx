import { Phone, MapPin, Clock, Navigation, ExternalLink, Mail } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { business } from '@/data/site';
import { trackPhoneClick, trackDirectionsClick } from '@/lib/analytics';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0 ... Sun=6

  return (
    <>
      <Seo
        title="Contact Elite Euro Motors in Ocoee, FL | Call or Get Directions"
        description="Contact Elite Euro Motors — independent BMW and Mercedes-Benz repair at 505 Roper Pkwy, Ocoee, FL 34761. Call (321) 527-1563 or get directions."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Elite Euro Motors',
          url: `${business.url}/contact`,
        }}
      />

      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-ink-900 to-steel-950" />
        <div className="container-tight py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-400">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl text-balance">Get in touch with the shop.</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200 text-pretty">
              Call us, request service online, or stop by in Ocoee. We’re happy to answer questions
              about your BMW or Mercedes-Benz and help you figure out the right next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-tight grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <Reveal className="card p-7 lg:p-8">
            <h2 className="text-xl font-bold text-ink-900">Shop details</h2>
            <div className="mt-6 space-y-5 text-sm">
              <a href={business.phoneHref} onClick={() => trackPhoneClick('contact_card')} className="group flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ink-900 text-accent-500">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">Call us</span>
                  <span className="text-base font-semibold text-ink-900 group-hover:text-accent-600">{business.phoneDisplay}</span>
                </span>
              </a>
              <a href={`mailto:${business.email}`} className="group flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ink-900 text-accent-500">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">Email</span>
                  <span className="text-base font-semibold text-ink-900 group-hover:text-accent-600">{business.email}</span>
                </span>
              </a>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackDirectionsClick('contact_card')} className="group flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ink-900 text-accent-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">Address</span>
                  <span className="text-base font-semibold text-ink-900 group-hover:text-accent-600">{business.address.full}</span>
                </span>
              </a>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-service" className="btn-primary flex-1">Request Service</Link>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackDirectionsClick('contact_card_btn')} className="btn-outline flex-1">
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal delay={100} className="card p-7 lg:p-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent-500" />
              <h2 className="text-xl font-bold text-ink-900">Hours</h2>
            </div>
            <ul className="mt-6 divide-y divide-ink-100">
              {business.hours.map((h, i) => {
                const closed = h.time.toLowerCase().startsWith('closed');
                const isToday = i === todayIdx;
                return (
                  <li key={h.day} className={`flex items-center justify-between py-3 ${isToday ? '-mx-3 rounded-lg bg-accent-50 px-3' : ''}`}>
                    <span className="text-sm font-medium text-ink-700">
                      {h.day}
                      {isToday && <span className="ml-2 rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Today</span>}
                    </span>
                    <span className={`text-sm ${closed ? 'text-ink-400' : 'font-semibold text-ink-900'}`}>{h.time}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 rounded-lg bg-ink-50 p-4 text-xs text-ink-500">
              Hours shown are a placeholder pending confirmation. Verify current hours before publishing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="container-tight">
          <Reveal className="card overflow-hidden">
            <div className="relative h-[420px] bg-ink-100">
              <iframe
                title="Map showing Elite Euro Motors at 505 Roper Pkwy, Ocoee, FL"
                src={business.googleMapsEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('contact_map_overlay')}
                className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-card hover:bg-ink-50"
              >
                Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
