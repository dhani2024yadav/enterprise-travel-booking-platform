import { MapPin, ArrowRight } from 'lucide-react';
import { popularDestinations } from '../data/destinations';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface DestinationsPageProps {
  onNavigate: (page: string) => void;
}

export default function DestinationsPage({ onNavigate }: DestinationsPageProps) {
  useScrollToTop();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-3">Popular Destinations</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Explore India's most breathtaking destinations handpicked for unforgettable experiences
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => onNavigate('packages')}
                className="group text-left bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1 text-primary-300 text-xs font-semibold mb-1">
                      <MapPin className="w-3 h-3" /> {dest.state}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm mb-4">{dest.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400">Starting from</span>
                      <div className="text-lg font-bold text-primary-600">₹{dest.startingPrice.toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{dest.packageCount} packages</span>
                      <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
