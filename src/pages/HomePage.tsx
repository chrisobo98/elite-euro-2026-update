import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  Wrench,
  ClipboardList,
  CalendarClock,
  CircleCheck,
  Star,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { Seo, autoRepairJsonLd } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { business, services } from '@/data/site';
import { trackCtaClick, trackPhoneClick, trackDirectionsClick } from '@/lib/analytics';

const heroImage =
  'https://images.pexels.com/photos/13058788/pexels-photo-13058788.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

const whyChoose = [
  {
    icon: ClipboardList,
    title: 'Clear explanations, every time',
    body: 'You get a plain-language summary of what we found, what it means, and why it matters — not a parts list you have to decode.',
  },
  {
    icon: CalendarClock,
    title: 'Personalized maintenance planning',
    body: 'We help you plan service around your vehicle’s intervals and your driving habits, so nothing sneaks up on you.',
  },
  {
    icon: Wrench,
    title: 'Specialized in BMW & Mercedes-Benz',
    body: 'European vehicles are all we focus on. Brand-specific tools, familiar common concerns, and informed recommendations.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest repair priorities',
    body: 'We separate what needs attention now from what can wait, so you can make decisions without pressure.',
  },
];

const carePlan = [
  {
    state: 'Needs attention now',
    tone: 'error',
    icon: ShieldCheck,
    summary: 'Safety-related or actively failing items. We’ll explain why and what happens if it waits.',
    examples: ['Brake concern affecting stopping distance', 'Active coolant or oil leak', 'Drivability issue you can feel'],
  },
  {
    state: 'Plan for upcoming service',
    tone: 'warning',
    icon: CalendarClock,
    summary: 'Within a reasonable service window. We’ll help you time it around your schedule and budget.',
    examples: ['Brake pads getting low, not yet at metal', 'Fluid service coming due', 'Worn suspension component, still safe'],
  },
  {
    state: 'Currently in good condition',
    tone: 'success',
    icon: CircleCheck,
    summary: 'Checked and in good shape. You’ll know it was inspected, not just skipped.',
    examples: ['Brake pads and rotors within spec', 'Fluids clean and at proper level', 'Suspension components tight'],
  },
] as const;

const toneMap: Record<string, { ring: string; bg: string; text: string; dot: string }> = {
  error: { ring: 'ring-error-200', bg: 'bg-error-50', text: 'text-error-700', dot: 'bg-error-500' },
  warning: { ring: 'ring-warning-200', bg: 'bg-warning-50', text: 'text-warning-700', dot: 'bg-warning-500' },
  success: { ring: 'ring-success-200', bg: 'bg-success-50', text: 'text-success-700', dot: 'bg-success-500' },
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="Elite Euro Motors — BMW & Mercedes-Benz Repair in Ocoee, FL"
        description="Independent BMW and Mercedes-Benz repair in Ocoee, Florida. Honest, specialist European car care — no guesswork, no pressure. Request service or call (321) 527-1563."
        path="/"
        jsonLd={autoRepairJsonLd as unknown as Record<string, unknown>}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Luxury black BMW parked in a clean, modern setting"
            className="h-full w-full object-cover opacity-40"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
        </div>

        <div className="container-tight relative flex min-h-[640px] flex-col justify-center py-20 lg:min-h-[720px] lg:py-28">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-accent-400" />
                Ocoee · Winter Garden · West Orlando
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                <Star className="h-3.5 w-3.5 text-accent-400" />
                Reviews on Google &amp; CARFAX
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl text-balance animate-fade-up">
              European Car Care.
              <span className="block text-accent-500">No Guesswork. No Pressure.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200 text-pretty animate-fade-up" style={{ animationDelay: '80ms' }}>
              Independent BMW &amp; Mercedes-Benz repair in Ocoee, Florida. Honest recommendations,
              clear priorities, and personal service from a family-owned shop that wants you as a
              long-term customer — not a one-time transaction.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: '160ms' }}>
              <Link
                to="/request-service"
                onClick={() => trackCtaClick('Request Service', 'hero', '/request-service')}
                className="btn-primary px-7 py-4 text-base"
              >
                Request Service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={business.phoneHref}
                onClick={() => trackPhoneClick('hero')}
                className="btn px-7 py-4 text-base text-white ring-1 ring-white/25 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>

            <p className="mt-5 text-sm text-ink-400 animate-fade-up" style={{ animationDelay: '240ms' }}>
              Submitting a request doesn’t confirm an appointment — we’ll contact you to arrange scheduling.
            </p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative border-t border-white/10 bg-ink-950/80 backdrop-blur">
          <div className="container-tight grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {[
              { k: 'BMW', v: 'Service & Repair' },
              { k: 'Mercedes-Benz', v: 'Service & Repair' },
              { k: 'Family-Owned', v: 'Independent Shop' },
              { k: 'Ocoee, FL', v: '505 Roper Pkwy' },
            ].map((item) => (
              <div key={item.k} className="px-4 py-5 text-center sm:px-6">
                <p className="font-display text-sm font-bold text-white sm:text-base">{item.k}</p>
                <p className="mt-1 text-xs text-ink-400">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-tight">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Elite Euro Motors</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              A reason to choose us that isn’t just “cheaper than the dealership.”
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              We earn long-term customers by being clear about what your vehicle needs, what can
              wait, and what doesn’t need doing at all. That’s the whole point.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CARE PLAN */}
      <section className="relative overflow-hidden bg-ink-50 py-20 lg:py-28">
        <div className="container-tight">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Your European Vehicle Care Plan</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Know what needs attention now, what can wait, and what’s in good shape.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              We organize our findings into three clear categories so you can decide with confidence.
              <span className="block text-sm text-ink-500 mt-2">
                A proposed customer experience — not an existing guaranteed program.
              </span>
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {carePlan.map((item, i) => {
              const t = toneMap[item.tone];
              return (
                <Reveal key={item.state} delay={i * 100} className={`rounded-2xl bg-white p-7 ring-1 ${t.ring} shadow-card`}>
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${t.bg} ${t.text}`}>
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${t.text}`}>
                      <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                      Tier {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">{item.state}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${t.dot}`} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-tight">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
                European vehicle services, explained clearly.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
                From diagnostics to scheduled maintenance, every service starts with understanding
                what’s actually going on with your vehicle.
              </p>
            </div>
            <Link to="/services" className="btn-outline self-start sm:self-end">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to="/services"
                  onClick={() => trackCtaClick('Service Card', 'home_services', '/services')}
                  className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-ink-600">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700">
                      Learn more
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REPUTATION */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="container-tight relative">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-accent-400">Trust &amp; Reputation</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
              What customers say about us.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300 text-pretty">
              We have customer reviews on Google and CARFAX. We won’t fabricate testimonials here —
              this section is built to display real, verified reviews.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                tag: 'Google Reviews',
                note: 'Real customer ratings on Google. Review count and average shown once verified.',
                cta: 'View on Google',
                href: business.googleMapsUrl,
              },
              {
                tag: 'CARFAX Service Reviews',
                note: 'Service-history reviews visible through CARFAX. Count and score shown once verified.',
                cta: 'View on CARFAX',
                href: 'https://www.carfax.com',
              },
              {
                tag: 'Your Review',
                note: 'If we’ve earned it, we’d appreciate a review. Tell us how we did — good or bad.',
                cta: 'Leave a review',
                href: business.googleMapsUrl,
              },
            ].map((card, i) => (
              <Reveal key={card.tag} delay={i * 90} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">{card.tag}</span>
                  <div className="flex gap-0.5 text-accent-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{card.note}</p>
                <div className="mt-4 rounded-lg bg-ink-900/60 px-3 py-2 text-xs text-ink-400">
                  Placeholder — replace with live review widgets and verified counts before launch.
                </div>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-400 transition-colors"
                >
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">European Expertise. Local Relationships.</p>
              <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
                An independent shop run by people who want you back.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
                There’s a difference between a service center that processes vehicles and a shop that
                knows your name, your car, and what matters to you. As a family-owned business, we’d
                rather maintain your vehicle well for the next ten years than oversell you once.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  'Direct, personal communication — you talk to the people working on your car.',
                  'Long-term maintenance thinking, not just today’s ticket.',
                  'A shop that remembers your vehicle’s history and preferences.',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                    <span className="text-ink-700">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700">
                Meet the shop
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-card-lg">
                <img
                  src="https://images.pexels.com/photos/8985923/pexels-photo-8985923.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                  alt="Clean, professional automotive workshop"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-2xl bg-white p-5 shadow-card-lg ring-1 ring-ink-100 sm:block">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">Family-Owned</p>
                <p className="mt-2 text-sm text-ink-700">
                  Authentic owner &amp; team photos can be added here before launch.
                </p>
              </div>
              <div className="absolute -top-5 -right-3 hidden rounded-2xl bg-ink-900 px-5 py-4 text-white shadow-card-lg sm:block">
                <p className="font-display text-2xl font-bold text-accent-500">Ocoee</p>
                <p className="text-xs text-ink-300">Florida</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaSection
        location="home_final_cta"
        title="Let’s take care of your European vehicle."
        subtitle="Request service online or call us. We’ll review what you’re experiencing and contact you to set up a time."
      />

      {/* HOURS + LOCATION MINI STRIP */}
      <section className="border-t border-ink-100 bg-ink-50 py-14">
        <div className="container-tight grid gap-8 md:grid-cols-3">
          <div className="flex gap-4">
            <Clock className="h-6 w-6 flex-shrink-0 text-accent-500" />
            <div>
              <h3 className="text-sm font-semibold text-ink-900">Hours</h3>
              <p className="mt-1 text-sm text-ink-600">Monday – Friday</p>
              <p className="text-sm text-ink-600">8:00 AM – 5:00 PM</p>
              <p className="mt-1 text-sm text-ink-400">Saturday – Sunday: Closed</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 flex-shrink-0 text-accent-500" />
            <div>
              <h3 className="text-sm font-semibold text-ink-900">Location</h3>
              <p className="mt-1 text-sm text-ink-600">{business.address.full}</p>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('home_hours_strip')}
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
              >
                Get directions <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="h-6 w-6 flex-shrink-0 text-accent-500" />
            <div>
              <h3 className="text-sm font-semibold text-ink-900">Phone</h3>
              <a
                href={business.phoneHref}
                onClick={() => trackPhoneClick('home_hours_strip')}
                className="mt-1 block text-sm font-semibold text-ink-900 hover:text-accent-600"
              >
                {business.phoneDisplay}
              </a>
              <Link to="/contact" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700">
                Contact page <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
