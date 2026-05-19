import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display">Ready to Start Your Journey?</h3>
            <p className="text-white/90 mt-1">Get a free customized travel quote — takes less than 2 minutes!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('inquiry')}
              className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold text-sm transition flex items-center gap-2 shadow-lg"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/918953131595?text=Hi%20Dhani%20Tour%2C%20I%20want%20to%20book%20a%20tour%20package"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition flex items-center gap-2 shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5 mb-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden border border-white/10 group-hover:border-primary-400/50 group-hover:scale-105 transition-all duration-300">
                <img src="/logo.png" alt="Dhani Tour & Travels" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight text-white group-hover:text-primary-400 transition-colors">Dhani Tour</div>
                <div className="text-[10px] text-primary-400 font-semibold uppercase tracking-widest">& Travels</div>
              </div>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted travel partner for memorable journeys across India. We offer safe, comfortable, and affordable travel experiences for families, groups, and corporate clients.
            </p>
            <p className="text-primary-400 font-semibold text-sm italic">"Your Journey, Our Responsibility"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Tour Packages', page: 'packages' },
                { label: 'Destinations', page: 'destinations' },
                { label: 'Transportation', page: 'transport' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact Us', page: 'contact' },
                { label: 'Gallery', page: 'gallery' },
                { label: 'Travel Blog', page: 'blog' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-primary-400 text-sm transition flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tour Categories</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Family Tour Packages', page: 'packages-family' },
                { label: 'Honeymoon Packages', page: 'packages-honeymoon' },
                { label: 'Religious Tours', page: 'packages-religious' },
                { label: 'Corporate Tours', page: 'packages-corporate' },
                { label: 'Group Tours', page: 'packages-group' },
                { label: 'Weekend Trips', page: 'packages-weekend' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-primary-400 text-sm transition flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Call / WhatsApp</p>
                  <a href="tel:8953131595" className="text-white font-bold hover:text-primary-400 transition">8953131595</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Email</p>
                  <a href="mailto:yadavravi761994@gmail.com" className="text-white hover:text-primary-400 transition text-sm">yadavravi761994@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Office</p>
                  <p className="text-gray-400 text-sm">Serving All Across India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Working Hours</p>
                  <p className="text-gray-400 text-sm">24/7 Support Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Dhani Tour and Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-gray-300 text-sm transition">Privacy Policy</button>
            <button className="text-gray-500 hover:text-gray-300 text-sm transition">Terms of Service</button>
            <button className="text-gray-500 hover:text-gray-300 text-sm transition">Refund Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
