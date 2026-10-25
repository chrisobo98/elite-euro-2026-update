import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | Elite Euro Motors" description="The page you were looking for doesn’t exist." path="/404" />
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden />
        <div className="container-tight flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-7xl font-bold text-accent-500 sm:text-8xl">404</p>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">We couldn’t find that page.</h1>
          <p className="mt-3 max-w-md text-ink-300">
            The link may have moved or been retired. Let’s get you back on track.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="btn-primary"><Home className="h-4 w-4" /> Back home</Link>
            <Link to="/services" className="btn text-white ring-1 ring-white/25 hover:bg-white/10">
              Browse services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
