import { Link } from 'react-router-dom';
import { Phone, CalendarPlus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { business } from '@/data/site';
import { trackCtaClick, trackPhoneClick } from '@/lib/analytics';

export function StickyCTA() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on the request service page itself to avoid redundant CTA.
  if (location.pathname === '/request-service') return null;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 backdrop-blur-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex gap-2 p-3">
        <a
          href={business.phoneHref}
          onClick={() => trackPhoneClick('sticky_mobile')}
          className="btn-outline flex-1 px-3 py-3"
          aria-label={`Call ${business.phoneDisplay}`}
        >
          <Phone className="h-5 w-5" />
          Call
        </a>
        <Link
          to="/request-service"
          onClick={() => trackCtaClick('Request Service', 'sticky_mobile', '/request-service')}
          className="btn-primary flex-[1.4] px-3 py-3"
        >
          <CalendarPlus className="h-5 w-5" />
          Request Service
        </Link>
      </div>
    </div>
  );
}
