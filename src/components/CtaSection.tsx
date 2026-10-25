import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { business } from '@/data/site';
import { trackCtaClick, trackPhoneClick } from '@/lib/analytics';

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  location?: string;
};

export function CtaSection({
  title = 'Ready for honest European car care?',
  subtitle = 'Tell us about your vehicle and what you’re noticing. We’ll review it and contact you to arrange scheduling.',
  location = 'cta_section_default',
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" aria-hidden />
      <div className="container-tight relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-accent-400">Get Started</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-300 text-pretty">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/request-service"
              onClick={() => trackCtaClick('Request Service', location, '/request-service')}
              className="btn-primary px-7 py-4 text-base"
            >
              Request Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={business.phoneHref}
              onClick={() => trackPhoneClick(location)}
              className="btn px-7 py-4 text-base text-white ring-1 ring-white/20 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-500">
            Submitting a service request does not confirm an appointment. Our team will contact you to arrange scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}
