import { Star, CheckCircle, ThumbsUp } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface ReviewsPageProps {
  onNavigate: (page: string) => void;
}

export default function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  useScrollToTop();

  const overallStats = {
    average: 4.8,
    total: 487,
    breakdown: [
      { stars: 5, count: 380, pct: 78 },
      { stars: 4, count: 72, pct: 15 },
      { stars: 3, count: 25, pct: 5 },
      { stars: 2, count: 7, pct: 1.5 },
      { stars: 1, count: 3, pct: 0.5 },
    ],
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-3">Traveler Reviews</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Real stories from real travelers who experienced unforgettable journeys with us
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Rating Overview */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-gray-100 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-navy-950">{overallStats.average}</div>
                <div className="flex items-center justify-center md:justify-start gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < Math.round(overallStats.average) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-gray-500">Based on {overallStats.total} reviews</p>
                <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold text-sm">93% travelers recommend us</span>
                </div>
              </div>
              <div className="space-y-2">
                {overallStats.breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-6">{b.stars}★</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full transition-all" style={{ width: `${b.pct}%` }} />
                    </div>
                    <span className="text-sm text-gray-400 w-10">{b.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.comment}"</p>
                <div className="text-xs text-primary-500 font-semibold mb-3">📍 {t.tourPackage}</div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.location} • {new Date(t.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-primary-500 transition">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Create Your Own Story?</h3>
            <p className="text-gray-500 mb-6">Join 5000+ happy travelers who trusted us with their journeys.</p>
            <button
              onClick={() => onNavigate('packages')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-primary-200"
            >
              Explore Tour Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
