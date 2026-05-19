import { Star, MapPin, Clock, Users, Calendar, Shield, CheckCircle, XCircle, Phone, ArrowRight, Mountain, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { getPackageBySlug } from '../data/packages';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface PackageDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export default function PackageDetailPage({ slug, onNavigate }: PackageDetailPageProps) {
  useScrollToTop(slug);
  const pkg = getPackageBySlug(slug);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Package Not Found</h2>
          <p className="text-gray-500 mb-6">The package you're looking for doesn't exist.</p>
          <button onClick={() => onNavigate('packages')} className="bg-primary-500 text-white px-6 py-2.5 rounded-xl font-semibold">
            View All Packages
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {pkg.discount && (
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{pkg.discount}% OFF</span>
              )}
              {pkg.trending && (
                <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">🔥 Trending</span>
              )}
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full capitalize">{pkg.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display text-white mb-3">{pkg.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {pkg.destination}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {pkg.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {pkg.groupSize}</span>
              <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> {pkg.difficulty}</span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {pkg.rating} ({pkg.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Package</h2>
                <p className="text-gray-600 leading-relaxed">{pkg.description}</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Tour Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day, i) => (
                    <div key={day.day} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedDay(expandedDay === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                            D{day.day}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 text-sm">{day.title}</div>
                            {day.meals && <div className="text-xs text-gray-400">🍽️ {day.meals}</div>}
                          </div>
                        </div>
                        {expandedDay === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                      </button>
                      {expandedDay === i && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="pl-13 ml-[52px] border-l-2 border-primary-100 pl-4">
                            <p className="text-sm text-gray-600 leading-relaxed">{day.description}</p>
                            {day.accommodation && (
                              <p className="text-xs text-gray-400 mt-2">🏨 Stay: {day.accommodation}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-red-700">
                        <XCircle className="w-3.5 h-3.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary-600">₹{pkg.price.toLocaleString()}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-6">per person</p>

                  {pkg.discount && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-6 text-center">
                      <span className="text-green-700 font-semibold text-sm">
                        🎉 You save ₹{((pkg.originalPrice || 0) - pkg.price).toLocaleString()} per person!
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-medium text-gray-900">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Group Size</span>
                      <span className="font-medium text-gray-900">{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Best Time</span>
                      <span className="font-medium text-gray-900">{pkg.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Difficulty</span>
                      <span className="font-medium text-gray-900">{pkg.difficulty}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('inquiry')}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-primary-200 flex items-center justify-center gap-2 mb-3"
                  >
                    Book This Package <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/918953131595?text=Hi! I'm interested in the "${pkg.title}" package (₹${pkg.price.toLocaleString()}/person). Please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Inquiry
                  </a>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="tel:8953131595" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition">
                      <Phone className="w-4 h-4" />
                      Call: 8953131595
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="space-y-3">
                    {[
                      { icon: Shield, text: 'Safe & Secure Booking' },
                      { icon: Calendar, text: 'Free Cancellation (48hrs)' },
                      { icon: CheckCircle, text: 'Best Price Guarantee' },
                      { icon: Phone, text: '24/7 Travel Support' },
                    ].map((badge) => (
                      <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-600">
                        <badge.icon className="w-4 h-4 text-green-500" />
                        {badge.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
