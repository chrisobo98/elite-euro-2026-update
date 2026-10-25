import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { articles } from '@/data/site';
import { trackCtaClick } from '@/lib/analytics';

const coverBySlug: Record<string, string> = {
  'bmw-maintenance-as-your-vehicle-ages':
    'https://images.pexels.com/photos/9881922/pexels-photo-9881922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'independent-repair-vs-dealership':
    'https://images.pexels.com/photos/7012890/pexels-photo-7012890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'understanding-your-inspection-report':
    'https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const categories = ['All', 'Maintenance', 'Ownership', 'Buying Guide'];

export default function BlogPage() {
  return (
    <>
      <Seo
        title="European Car Care Blog | Elite Euro Motors Ocoee"
        description="Educational articles for BMW and Mercedes-Benz owners in Ocoee and Winter Garden — maintenance, independent repair vs. dealership, and reading your inspection report."
        path="/blog"
      />

      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-ink-900 to-steel-950" />
        <div className="container-tight py-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-400">Blog</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl text-balance">European car care, explained.</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200 text-pretty">
              Educational articles to help you understand your vehicle, make confident decisions,
              and know what to expect from independent European repair.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-tight">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-4 py-2 text-sm font-medium ${i === 0 ? 'bg-ink-900 text-white' : 'bg-ink-50 text-ink-600'}`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  to={`/blog/${a.slug}`}
                  onClick={() => trackCtaClick('Article Card', 'blog_index', `/blog/${a.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={coverBySlug[a.slug]} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-sm">{a.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-400">
                      <span>{new Date(a.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.readTime}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-ink-900 group-hover:text-accent-700 transition-colors">{a.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                      Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        location="blog_final_cta"
        title="Have a question about your vehicle?"
        subtitle="We’re happy to help you understand what you’re seeing. Request service or call — no pressure, just honest guidance."
      />
    </>
  );
}
