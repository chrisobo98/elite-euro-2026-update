import { useEffect, useRef, useState } from 'react';
import { Phone, ExternalLink, ShieldCheck, Info, AlertTriangle, ArrowRight, Clock } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { business } from '@/data/site';
import { trackCtaClick, trackPhoneClick, trackEvent } from '@/lib/analytics';
import { Link } from 'react-router-dom';

export default function RequestServicePage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    trackEvent({ event: 'service_request_start', cta_location: 'request_service_page' });
    const timer = window.setTimeout(() => {
      if (!iframeLoaded && !iframeFailed) {
        setIframeFailed(true);
        trackEvent({ event: 'shopmonkey_fallback_opened', reason: 'load_error' });
      }
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [iframeLoaded, iframeFailed]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    trackEvent({ event: 'service_request_loaded', source: 'iframe' });
  };

  return (
    <>
      <Seo
        title="Request Service | Elite Euro Motors — BMW & Mercedes-Benz Repair in Ocoee"
        description="Request service for your BMW or Mercedes-Benz at Elite Euro Motors in Ocoee, FL. Tell us what you’re noticing and our team will contact you to arrange scheduling."
        path="/request-service"
        canonical={`${business.url}/request-service`}
      />

      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-ink-900 to-steel-950" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" aria-hidden />
        <div className="container-tight py-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-400">Request Service</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl text-balance">Tell us about your vehicle.</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200 text-pretty">
              Share what you’re noticing — sounds, warning lights, service items, or general
              concerns. Our team will review your request and contact you to arrange scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="bg-accent-50 border-b border-accent-100">
        <div className="container-tight py-4">
          <div className="flex items-start gap-3 text-sm text-accent-900">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
            <p>
              <strong>Submitting a service request does not confirm an appointment.</strong> Our team
              will contact you to arrange scheduling. For urgent concerns, please call us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-12 lg:py-16">
        <div className="container-tight grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Form panel */}
          <Reveal className="card overflow-hidden">
            <div className="border-b border-ink-100 bg-white px-6 py-5 sm:px-8">
              <h2 className="text-xl font-bold text-ink-900">Service Request Form</h2>
              <p className="mt-1 text-sm text-ink-600">
                Powered by Shopmonkey — your details go directly to our service team.
              </p>
            </div>

            <div className="bg-white p-2 sm:p-3">
              {!iframeFailed ? (
                <>
                  {!iframeLoaded && (
                    <div className="flex h-[640px] flex-col items-center justify-center gap-3 text-ink-500">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-accent-500" />
                      <p className="text-sm">Loading request form…</p>
                    </div>
                  )}
                  <iframe
                    ref={iframeRef}
                    title="Elite Euro Motors service request form (powered by Shopmonkey)"
                    src={business.shopmonkeyUrl}
                    onLoad={handleIframeLoad}
                    className={`w-full overflow-auto ${iframeLoaded ? 'block' : 'hidden'} h-[720px] rounded-xl border-0`}
                    style={{ colorScheme: 'auto' }}
                  />
                </>
              ) : (
                <div className="flex h-[640px] flex-col items-center justify-center gap-4 p-8 text-center">
                  <AlertTriangle className="h-10 w-10 text-accent-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">Form couldn’t load inline</h3>
                    <p className="mt-2 text-sm text-ink-600">
                      Some browsers or privacy settings block embedded forms. You can open the
                      request form directly in a new tab.
                    </p>
                  </div>
                  <a
                    href={business.shopmonkeyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent({ event: 'shopmonkey_fallback_opened', reason: 'manual' })}
                    className="btn-primary"
                  >
                    Open request form <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}

              {/* Always-available fallback link */}
              <div className="mt-3 flex items-center justify-between rounded-lg bg-ink-50 px-4 py-3 text-xs text-ink-500">
                <span>Prefer to open the form directly?</span>
                <a
                  href={business.shopmonkeyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-accent-600 hover:text-accent-700"
                >
                  Open form <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Side panel */}
          <Reveal delay={100} className="space-y-6">
            <div className="card p-6">
              <h3 className="text-base font-semibold text-ink-900">Prefer to call?</h3>
              <p className="mt-2 text-sm text-ink-600">We’re happy to talk through what’s going on with your vehicle.</p>
              <a href={business.phoneHref} onClick={() => trackPhoneClick('request_service_side')} className="btn-secondary mt-4 w-full">
                <Phone className="h-4 w-4" /> {business.phoneDisplay}
              </a>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-500" />
                <h3 className="text-base font-semibold text-ink-900">Hours</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-ink-600">Monday – Friday</span><span className="font-medium text-ink-900">8 AM – 5 PM</span></li>
                <li className="flex justify-between"><span className="text-ink-600">Saturday</span><span className="text-ink-400">Closed</span></li>
                <li className="flex justify-between"><span className="text-ink-600">Sunday</span><span className="text-ink-400">Closed</span></li>
              </ul>
              <p className="mt-4 text-xs text-ink-400">Hours placeholder — confirm before launch.</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-500" />
                <h3 className="text-base font-semibold text-ink-900">What happens next</h3>
              </div>
              <ol className="mt-4 space-y-3 text-sm text-ink-600">
                <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-accent-500">1</span> You submit your request through the form.</li>
                <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-accent-500">2</span> Our team reviews it and contacts you.</li>
                <li className="flex gap-3"><span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-accent-500">3</span> We arrange a time that works for you.</li>
              </ol>
            </div>

            <Link to="/contact" className="card flex items-center justify-between p-6 hover:shadow-card-lg transition-shadow">
              <span className="text-sm font-semibold text-ink-900">Location &amp; directions</span>
              <ArrowRight className="h-4 w-4 text-accent-600" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
