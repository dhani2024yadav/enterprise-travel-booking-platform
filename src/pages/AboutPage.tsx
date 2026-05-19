import { Shield, Award, Heart, Target, Eye, Phone } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  useScrollToTop();

  const values = [
    { icon: Shield, title: 'Safety First', desc: 'Every vehicle inspected, every driver verified, every route planned for your safety.' },
    { icon: Heart, title: 'Customer Love', desc: 'We treat every traveler like family. Your comfort and happiness is our mission.' },
    { icon: Award, title: 'Quality Service', desc: 'From budget to luxury, we maintain the highest quality standards across all services.' },
    { icon: Target, title: 'Affordable Pricing', desc: 'No hidden costs, no surprises. Transparent pricing that respects your budget.' },
  ];

  const milestones = [
    { year: '2016', event: 'Founded Dhani Tour and Travels with a vision to make travel accessible' },
    { year: '2018', event: 'Expanded to cover 20+ destinations across North India' },
    { year: '2020', event: 'Launched online booking system and digital operations' },
    { year: '2022', event: 'Crossed 3000+ happy travelers milestone' },
    { year: '2024', event: 'Expanded pan-India coverage with 50+ destinations' },
    { year: '2025', event: 'Launched premium packages and corporate travel solutions' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mt-2 mb-4">
            Memories Begin With<br />
            <span className="text-gradient">Dhani Tour and Travels</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your trusted travel partner since 2016. We've helped over 5,000 travelers create unforgettable memories across India.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-navy-950 mt-2 mb-6">
                From a Small Dream to India's Trusted Travel Partner
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dhani Tour and Travels was born from a simple belief — every family deserves a memorable vacation, every traveler deserves safety and comfort, and every journey should be stress-free.
                </p>
                <p>
                  What started as a small car rental service has now grown into a comprehensive travel platform offering tour packages, hotel bookings, transportation, and customized travel planning across India.
                </p>
                <p>
                  Our founder's vision was clear: make professional travel services accessible and affordable for everyone. Today, with 8+ years of experience, 5000+ happy travelers, and 50+ destinations, we continue to live that vision every single day.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => onNavigate('packages')} className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition">
                  Explore Packages
                </button>
                <a href="tel:8953131595" className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-xl font-semibold text-sm text-gray-700 hover:bg-gray-50 transition">
                  <Phone className="w-4 h-4" /> Call Us: 8953131595
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/gallery-1.jpg" alt="Dhani Tour Travels" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold">8+</div>
                <div className="text-sm opacity-80">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, comfortable, and affordable travel experiences that create lifelong memories. We aim to be every Indian family's first choice for travel — from weekend trips to international vacations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Eye className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted and innovative travel platform by combining technology with personalized service. We envision a future where every traveler can explore India effortlessly with Dhani Tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-navy-950 mt-2">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">Milestones</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-primary-400 font-bold text-lg">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-primary-500 rounded-full mt-1.5 ring-4 ring-primary-500/20" />
                  {i < milestones.length - 1 && (
                    <div className="absolute top-6 left-1.5 w-0.5 h-full bg-white/10" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-gray-300 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: 'Happy Travelers', icon: '😊' },
              { number: '200+', label: 'Tour Packages', icon: '📦' },
              { number: '50+', label: 'Destinations', icon: '📍' },
              { number: '4.8★', label: 'Average Rating', icon: '⭐' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-navy-950">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
