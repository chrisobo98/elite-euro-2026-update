// Lightweight GA4 event helper.
// Events are queued if gtag is not yet loaded; gtag is initialized in index.html / main.tsx.
// Never send PII (names, emails, phone numbers, vehicle VINs) to analytics.

export type AnalyticsEvent =
  | { event: 'cta_click'; cta_name: string; cta_location: string; destination?: string }
  | { event: 'phone_click'; cta_location: string }
  | { event: 'directions_click'; cta_location: string }
  | { event: 'service_request_start'; cta_location: string }
  | { event: 'service_request_loaded'; source: 'iframe' | 'fallback_link' }
  | { event: 'shopmonkey_fallback_opened'; reason: 'load_error' | 'manual' }
  | { event: 'nav_click'; destination: string };

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function trackEvent(payload: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (typeof gtag === 'function') {
    gtag('event', payload.event, payload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
}

export function trackPhoneClick(location: string): void {
  trackEvent({ event: 'phone_click', cta_location: location });
}

export function trackDirectionsClick(location: string): void {
  trackEvent({ event: 'directions_click', cta_location: location });
}

export function trackCtaClick(ctaName: string, location: string, destination?: string): void {
  trackEvent({ event: 'cta_click', cta_name: ctaName, cta_location: location, destination });
}
