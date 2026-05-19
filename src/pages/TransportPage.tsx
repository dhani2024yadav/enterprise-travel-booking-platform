import { Car, Bus, Plane, Phone, CheckCircle, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { transportServices } from '../data/destinations';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface TransportPageProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  car: Car,
  bus: Bus,
  plane: Plane,
};

export default function TransportPage({ onNavigate }: TransportPageProps) {
  useScrollToTop();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-3">Transportation Services</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Reliable, comfortable, and affordable transportation for all your travel needs
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportServices.map((service) => {
              const Icon = iconMap[service.icon] || Car;
              return (
                <div key={service.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-5">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400">Starting from</span>
                      <div className="font-bold text-primary-600 text-lg">{service.priceRange}</div>
                    </div>
                    <button
                      onClick={() => onNavigate('inquiry')}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-1"
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Transport */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-navy-950 mb-4">
              Why Choose Our Transport?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Verified Drivers', desc: 'All drivers are background-verified, experienced, and trained for safety.' },
              { icon: Clock, title: 'Punctual Service', desc: 'On-time pickups and drops guaranteed. GPS tracking for live updates.' },
              { icon: Star, title: 'Clean Vehicles', desc: 'All vehicles are regularly serviced, sanitized, and maintained for comfort.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-14 h-14 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-navy-950 mb-4">
            Need a Custom Transport Solution?
          </h2>
          <p className="text-gray-500 mb-8">
            Whether it's a local trip or an outstation journey, we'll create the perfect transport plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8953131595" className="bg-navy-950 hover:bg-navy-900 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call: 8953131595
            </a>
            <button onClick={() => onNavigate('inquiry')} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition">
              Get Transport Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
