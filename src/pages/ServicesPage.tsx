import { Link } from 'react-router-dom';
import { ArrowRight, Check, Wrench } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { services, business } from '@/data/site';
import { trackCtaClick } from '@/lib/analytics';

export default function ServicesPage() {
  const faqs = [
    {
      q: 'Do you work on vehicles other than BMW and Mercedes-Benz?',
      a: 'Our primary focus is BMW and Mercedes-Benz. If you have another European vehicle, give us a call — we’ll let you know honestly whether we’re the right shop for it.',
    },
    {
      q: 'Do I need an appointment?',
      a: 'We recommend requesting service ahead of time so we can plan the time and bay space your vehicle needs. You can request service online or call us directly.',
    },
    {
      q: 'Will you explain what my vehicle needs before doing the work?',
      a: 'Yes. We inspect first, explain findings in plain language, and separate what needs attention now from what can wait. You decide what to approve.',
    },
    {
      q: 'Can you service my vehicle if it’s still under warranty?',
      a: 'Independent repair shops can perform maintenance and many repairs. We can talk through your specific situation and what applies to your vehicle.',
    },
  ];

  return (
    <>
      <Seo
        title="European Auto Repair Services in Ocoee, FL | Elite Euro Motors"
        description="BMW and Mercedes-Benz diagnostics, maintenance, brake, engine, oil, and suspension services in Ocoee, Florida. Clear explanations and honest repair priorities."
        path="/services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: { '@type': 'AutoRepair', name: business.name, telephone: business.phoneDisplay },
          areaServed: business.serviceArea.map((c) => ({ '@type': 'City', name: c })),
          serviceType: 'European automotive repair and maintenance',
        }}
      />

      {/* Header */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/8985461/pexels-photo-8985461.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Mechanic working on a car engine"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        </div>
        <div className="container-tight py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-400">Our Services</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl text-balance">
              European vehicle services, explained clearly.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200 text-pretty">
              Every service starts with understanding what’s actually going on with your vehicle.
              You get a plain-language explanation and honest priorities — not a parts list.
            </p>
            <Link
              to="/request-service"
              onClick={() => trackCtaClick('Request Service', 'services_hero', '/request-service')}
              className="btn-primary mt-8 px-7 py-4"
            >
              Request Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-white">
                        <Wrench className="h-4 w-4" />
                      </span>
                      <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-ink-600">{s.description}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/request-service"
                      onClick={() => trackCtaClick(`Service: ${s.title}`, 'services_list', '/request-service')}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
                    >
                      Request this service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-tight">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Things customers ask us.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 60} className="card p-6">
                <h3 className="text-lg font-semibold text-ink-900">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        location="services_final_cta"
        title="Not sure what your vehicle needs?"
        subtitle="Tell us what you’re noticing — sounds, warning lights, changes in how it drives. We’ll take a look and explain it plainly."
      />
    </>
  );
}
