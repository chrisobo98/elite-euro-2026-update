import { useEffect } from 'react';
import { business } from '@/data/site';

type SeoProps = {
  title: string;
  description: string;
  path: string; // e.g. "/services" — root-relative, no trailing slash except home
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({ title, description, path, canonical, ogImage, jsonLd }: SeoProps) {
  useEffect(() => {
    const fullTitle = title;
    const url = `${business.url}${path === '/' ? '' : path}`;
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setLink('canonical', canonical ?? url);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', ogImage ?? 'https://bolt.new/static/og_default.png');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    if (jsonLd) setJsonLd('page-jsonld', jsonLd);
    else {
      const existing = document.getElementById('page-jsonld');
      if (existing) existing.remove();
    }
  }, [title, description, path, canonical, ogImage, jsonLd]);

  return null;
}

// AutoRepair LocalBusiness structured data — only factually verified fields.
export const autoRepairJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: business.name,
  telephone: business.phoneDisplay,
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.state,
  postalCode: business.address.zip,
  addressCountry: 'US',
  url: business.url,
  image: 'https://bolt.new/static/og_default.png',
  areaServed: business.serviceArea.map((c) => ({ '@type': 'City', name: c })),
  openingHours: [
    'Mo-Fr 08:00-17:00',
  ],
  priceRange: '$$',
} as const;
