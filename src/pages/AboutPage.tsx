import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, ClipboardList, CalendarClock, CircleCheck, MapPin, Phone } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { business } from '@/data/site';
import { trackPhoneClick } from '@/lib/analytics';

const values = [
  {
    icon: ClipboardList,
    title: 'Clear over clever',
    body: 'We’d rather you understand your vehicle than be impressed by jargon. Every recommendation comes with a plain-language explanation.',
  },
  {
    icon: CalendarClock,
    title: 'Long-term over one-time',
    body: 'We plan maintenance with the next several years in mind, not just the next visit. That’s how independent shops earn repeat customers.',
  },
  {
    icon: HeartHandshake,
    title: 'People over transactions',
    body: 'You talk to the people working on your car. We remember your vehicle’s history and your preferences — that’s the point of being local.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Elite Euro Motors — Family-Owned BMW & Mercedes-Benz Repair in Ocoee"
        description="Elite Euro Motors is a family-owned independent European repair shop in Ocoee, Florida, focused on honest recommendations and long-term customer relationships."
        path="/about"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/3855223/pexels-photo-3855223.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Mechanic selecting tools in a clean workshop"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        </div>
        <div className="container-tight py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-400">About Us</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl text-balance">
              European expertise. Local relationships.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200 text-pretty">
              Elite Euro Motors is a family-owned independent repair shop in Ocoee, Florida, focused
              on BMW and Mercedes-Benz. We exist to give owners a real alternative to the
              dealership — one built on honest recommendations and long-term relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              A different kind of repair shop.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600 text-pretty">
              <p>
                Independent European repair shops succeed when customers trust them enough to come
                back. That’s the simple idea behind Elite Euro Motors: do right by people and their
                vehicles, and the rest takes care of itself.
              </p>
              <p>
                We focus on BMW and Mercedes-Benz because European vehicles reward a shop that knows
                them well — the right tools, the common concerns, and the maintenance philosophy
                behind them. Specialization lets us give better advice, not just turn more cars.
              </p>
              <p>
                And because we’re family-owned and local to Ocoee, we’re not trying to be the
                biggest shop in town. We’re trying to be the shop you’d recommend to a neighbor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card-lg">
              <img
                src="https://images.pexels.com/photos/8986173/pexels-photo-8986173.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="Well-organized professional workshop"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-72 rounded-2xl bg-white p-5 shadow-card-lg ring-1 ring-ink-100 sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">Placeholder</p>
              <p className="mt-2 text-sm text-ink-700">
                Add authentic owner &amp; team photos and a short story here before launch.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-tight">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What We Believe</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Three principles we work by.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="card h-full p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-accent-500">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">The Difference</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Independent specialist vs. impersonal service center.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600 text-pretty">
              A large service center can process a lot of vehicles. An independent specialist earns
              the same customers back, year after year. Here’s what that looks like in practice.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'You speak with the people working on your car',
                'We remember your vehicle’s history and preferences',
                'Recommendations come with context, not pressure',
                'Maintenance planned around your actual driving',
                'Clear priority: now, soon, or in good shape',
                'A shop invested in keeping you as a customer',
              ].map((point) => (
                <div key={point} className="rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-700">
                  <CircleCheck className="mb-2 h-5 w-5 text-accent-500" />
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-ink-50 py-20">
        <div className="container-tight">
          <Reveal className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <p className="eyebrow">Visit Us</p>
                <h2 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">Find us in Ocoee.</h2>
                <div className="mt-6 space-y-4 text-sm">
                  <p className="flex items-start gap-3 text-ink-700">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                    {business.address.full}
                  </p>
                  <p className="flex items-start gap-3 text-ink-700">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                    <a href={business.phoneHref} onClick={() => trackPhoneClick('about_visit')} className="hover:text-accent-600">{business.phoneDisplay}</a>
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="btn-outline">Contact &amp; directions <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/request-service" className="btn-primary">Request Service</Link>
                </div>
              </div>
              <div className="relative min-h-[280px] bg-ink-200">
                <iframe
                  title="Map of Elite Euro Motors location in Ocoee, FL"
                  src={business.googleMapsEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        location="about_final_cta"
        title="Become a long-term customer, not a one-time ticket."
        subtitle="We’d like to meet you and your vehicle. Request service or call — we’ll take it from there."
      />
    </>
  );
}
