import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, MapPin, CircleCheck, ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { business } from '@/data/site';
import { trackCtaClick, trackPhoneClick } from '@/lib/analytics';

const bmwHero =
  'https://images.pexels.com/photos/20398056/pexels-photo-20398056.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

const services = [
  {
    title: 'Oil Service & Condition-Based Service',
    body: 'BMW’s condition-based service system tracks your vehicle’s actual condition rather than a fixed interval. We perform oil and filter service using products that meet BMW specifications and reset service indicators correctly.',
  },
  {
    title: 'Brake Pads, Rotors & Fluid',
    body: 'BMW braking systems have specific pad, rotor, and fluid requirements. We replace worn components, service brake fluid on the proper interval, and explain whether a brake concern is urgent or can be planned.',
  },
  {
    title: 'Cooling System Repairs',
    body: 'Cooling system components are a common concern across many BMW model lines. We identify leaks, test the system, and explain what to address — and in what order — to help you avoid larger problems.',
  },
  {
    title: 'Suspension, Steering & Chassis',
    body: 'BMW vehicles are built around how they drive. When the ride or steering changes, we inspect bushings, links, and chassis components and explain your options for restoring that feel.',
  },
  {
    title: 'Engine Diagnostics',
    body: 'Check-engine lights and drivability concerns can stem from many sources. We use BMW-compatible diagnostic equipment to read the actual fault data, then test before recommending parts.',
  },
  {
    title: 'Electrical & Warning-Light Diagnosis',
    body: 'BMW vehicles report a lot through their electrical systems. We diagnose warning lights, battery and charging concerns, and module-related issues with brand-specific tools.',
  },
];

const commonConcerns = [
  'Coolant or oil leaks noticed under the vehicle',
  'Brake noise, vibration, or a low-pad warning',
  'Check-engine or drivability warning illuminated',
  'Suspension noise or changes in steering feel',
  'Service indicator showing an upcoming item',
  'Battery or electrical warning on the dash',
];

const faqs = [
  {
    q: 'Can an independent shop service my BMW under warranty?',
    a: 'Independent shops can perform maintenance and many repairs. We can talk through your specific vehicle and warranty situation so you can decide what makes sense.',
  },
  {
    q: 'Do you use BMW-specified oil and parts?',
    a: 'We use products that meet BMW’s specifications for oil and common service items. We can discuss part options and what we recommend for your vehicle.',
  },
  {
    q: 'Will you reset my service indicator after an oil service?',
    a: 'Yes. After completing service, we reset the condition-based service indicator so your dashboard reflects the current service state.',
  },
];

export default function BmwServicePage() {
  const bmwJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BMW Service & Repair',
    serviceType: 'BMW maintenance and repair',
    provider: { '@type': 'AutoRepair', name: business.name, telephone: business.phoneDisplay, address: { '@type': 'PostalAddress', streetAddress: business.address.street, addressLocality: business.address.city, addressRegion: business.address.state, postalCode: business.address.zip } },
    areaServed: business.serviceArea.map((c) => ({ '@type': 'City', name: c })),
    brand: { '@type': 'Brand', name: 'BMW' },
  };

  return (
    <>
      <Seo
        title="BMW Service & Repair in Ocoee, FL | Elite Euro Motors"
        description="Independent BMW service and repair in Ocoee, Florida. Oil service, brakes, cooling, suspension, diagnostics, and warning-light investigation — with clear explanations and honest priorities."
        path="/bmw-service"
        canonical={`${business.url}/bmw-service`}
        jsonLd={bmwJsonLd}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10">
          <img src={bmwHero} alt="BMW parked in an urban night setting" className="h-full w-full object-cover opacity-45" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        </div>
        <div className="container-tight py-16 lg:py-24">
          <div className="max-w-2xl">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <p className="eyebrow mt-6 text-accent-400">BMW Service in Ocoee, FL</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
              BMW service without the dealership service counter.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200 text-pretty">
              Independent BMW maintenance and repair in Ocoee — for owners who want consistent,
              attentive care from people who know their vehicle. Brand-specific tools, familiar
              common concerns, and plain-language explanations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-service" onClick={() => trackCtaClick('Request Service', 'bmw_hero', '/request-service')} className="btn-primary px-7 py-4 text-base">
                Request BMW Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={business.phoneHref} onClick={() => trackPhoneClick('bmw_hero')} className="btn px-7 py-4 text-base text-white ring-1 ring-white/25 hover:bg-white/10">
                <Phone className="h-4 w-4" /> {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-tight grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why a BMW specialist</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              BMWs reward consistent, informed maintenance.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              BMW vehicles are engineered around a maintenance philosophy and a sophisticated set of
              onboard systems. Working on them well means using the right diagnostic equipment,
              knowing the common concerns by model line, and explaining what you’re seeing in plain
              language. That’s what we focus on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              We help BMW owners in Ocoee, Winter Garden, and the western Orlando area stay ahead of
              service, address concerns early, and avoid surprises — without feeling pressured into
              work that isn’t needed yet.
            </p>
          </Reveal>
          <Reveal delay={120} className="card p-7">
            <h3 className="text-base font-semibold text-ink-900">Serving BMW owners in</h3>
            <ul className="mt-4 space-y-3">
              {business.serviceArea.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-ink-700">
                  <MapPin className="h-4 w-4 text-accent-500" /> {area}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-ink-50 p-4 text-sm text-ink-600">
              Located at <strong className="text-ink-900">{business.address.street}</strong>, Ocoee — convenient from Winter Garden and West Orange County.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-tight">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">BMW Services</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              What we handle for BMW owners.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className="card h-full p-6">
                <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Common concerns */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <p className="eyebrow">When to come in</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Common signs BMW owners bring to us.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600 text-pretty">
              These aren’t definitive safety recommendations — they’re reasons owners contact us. If
              you’re noticing any of them, request service or call and we’ll help you figure out the
              right next step.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {commonConcerns.map((c) => (
                <li key={c} className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-700">
                  <CircleCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-tight">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">BMW Service FAQ</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">Questions BMW owners ask.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) * 70} className="card p-6">
                <h3 className="text-base font-semibold text-ink-900">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        location="bmw_final_cta"
        title="BMW service in Ocoee, built on clear communication."
        subtitle="Tell us about your BMW and what you’re noticing. We’ll review it and contact you to arrange a time that works."
      />
    </>
  );
}
