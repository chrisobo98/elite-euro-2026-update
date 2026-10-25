import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { articles, business } from '@/data/site';
import { articleContent } from '@/data/articles';

const coverBySlug: Record<string, string> = {
  'bmw-maintenance-as-your-vehicle-ages':
    'https://images.pexels.com/photos/9881922/pexels-photo-9881922.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280',
  'independent-repair-vs-dealership':
    'https://images.pexels.com/photos/7012890/pexels-photo-7012890.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280',
  'understanding-your-inspection-report':
    'https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280',
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const summary = articles.find((a) => a.slug === slug);
  const content = slug ? articleContent[slug] : undefined;

  if (!summary || !content) {
    return <Navigate to="/blog" replace />;
  }

  const others = articles.filter((a) => a.slug !== summary.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: summary.title,
    description: summary.excerpt,
    datePublished: summary.date,
    author: { '@type': 'Organization', name: business.name },
    publisher: { '@type': 'Organization', name: business.name },
    mainEntityOfPage: `${business.url}/blog/${summary.slug}`,
  };

  return (
    <>
      <Seo
        title={`${summary.title} | Elite Euro Motors`}
        description={summary.excerpt}
        path={`/blog/${summary.slug}`}
        canonical={`${business.url}/blog/${summary.slug}`}
        jsonLd={jsonLd}
      />

      {/* Breadcrumb / hero */}
      <section className="bg-ink-50">
        <div className="container-tight py-10 lg:py-14">
          <nav className="flex items-center gap-1.5 text-xs text-ink-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-ink-900">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/blog" className="hover:text-ink-900">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-700">{summary.category}</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">{summary.category}</span>
            <h1 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl text-balance">{summary.title}</h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-ink-500">
              <span>{new Date(summary.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {summary.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="bg-ink-50">
        <div className="container-tight">
          <Reveal className="overflow-hidden rounded-2xl shadow-card-lg">
            <img src={coverBySlug[summary.slug]} alt={summary.title} className="aspect-[16/8] w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </div>

      {/* Body */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-narrow">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-700 text-pretty">{content.intro}</p>
          </Reveal>

          <div className="prose-eem mt-10">
            {content.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            ))}
          </div>

          {/* Takeaway */}
          <Reveal className="mt-12 rounded-2xl bg-ink-900 p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">Key Takeaway</p>
            <p className="mt-3 text-lg leading-relaxed text-white text-pretty">{content.takeaway}</p>
          </Reveal>

          {/* Disclaimer */}
          <p className="mt-8 rounded-lg bg-ink-50 p-4 text-xs text-ink-500">
            This article is educational and reflects general guidance for European vehicle owners. It
            is not a definitive safety or maintenance recommendation. Always confirm against your
            vehicle’s specific service schedule and consult a qualified technician for your situation.
          </p>

          <div className="mt-8">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="bg-ink-50 py-14 lg:py-16">
        <div className="container-tight">
          <h2 className="text-2xl font-bold text-ink-900">Keep reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="group card flex items-center gap-4 p-5 hover:shadow-card-lg transition-shadow">
                <img src={coverBySlug[a.slug]} alt={a.title} loading="lazy" className="h-20 w-28 flex-shrink-0 rounded-lg object-cover" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{a.category}</p>
                  <h3 className="mt-1 text-base font-semibold text-ink-900 group-hover:text-accent-700 transition-colors line-clamp-2">{a.title}</h3>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 flex-shrink-0 text-ink-400 group-hover:text-accent-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        location="article_final_cta"
        title="Questions about your vehicle?"
        subtitle="Articles are general guidance. For your specific vehicle, request service or call — we’ll help you figure out the right next step."
      />
    </>
  );
}
