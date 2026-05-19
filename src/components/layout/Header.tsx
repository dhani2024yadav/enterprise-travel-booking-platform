import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, MapPin } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeTransparent = currentPage === 'home' && !isScrolled;

  const navItems = [
    { label: 'Home', page: 'home' },
    {
      label: 'Tour Packages',
      page: 'packages',
      dropdown: [
        { label: 'Family Tours', page: 'packages-family' },
        { label: 'Honeymoon Packages', page: 'packages-honeymoon' },
        { label: 'Religious Tours', page: 'packages-religious' },
        { label: 'Corporate Tours', page: 'packages-corporate' },
        { label: 'Group Tours', page: 'packages-group' },
        { label: 'Weekend Trips', page: 'packages-weekend' },
      ],
    },
    { label: 'Transport', page: 'transport' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Blog', page: 'blog' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    setIsPackagesOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`text-white text-sm py-2 hidden md:block transition-all duration-300 ${
        isHomeTransparent
          ? 'absolute top-0 left-0 right-0 bg-transparent border-b border-white/10 z-50 w-full'
          : 'bg-navy-950'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary-400" />
              Serving All Across India
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary-400" />
              <a href="tel:8953131595" className="hover:text-primary-300 transition">8953131595</a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-300 font-medium">✈️ Special Offers Available!</span>
            <button
              onClick={() => handleNav('inquiry')}
              className="bg-primary-500 hover:bg-primary-600 px-3 py-0.5 rounded-full text-xs font-semibold transition"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`z-50 transition-all duration-300 ${
          isHomeTransparent
            ? 'absolute left-0 right-0 bg-transparent text-white md:top-9 top-0'
            : isScrolled
            ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 text-gray-900 border-b border-gray-100'
            : 'sticky top-0 bg-white shadow-sm text-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shadow-primary-200/10 group-hover:shadow-primary-300/20 border border-gray-100 overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img src="/logo.png" alt="Dhani Tour & Travels" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col text-left">
                <span className={`text-lg font-bold leading-tight tracking-tight transition-colors ${
                  isHomeTransparent ? 'text-white' : 'text-navy-950'
                }`}>Dhani Tour</span>
                <span className={`text-[10px] font-semibold uppercase tracking-widest -mt-0.5 transition-colors ${
                  isHomeTransparent ? 'text-primary-300' : 'text-primary-600'
                }`}>& Travels</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.page} className="relative group">
                  {item.dropdown ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage.startsWith('packages')
                          ? isHomeTransparent
                            ? 'text-primary-300 bg-white/10'
                            : 'text-primary-600 bg-primary-50'
                          : isHomeTransparent
                          ? 'text-white hover:text-primary-300 hover:bg-white/5'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNav(item.page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === item.page
                          ? isHomeTransparent
                            ? 'text-primary-300 bg-white/10'
                            : 'text-primary-600 bg-primary-50'
                          : isHomeTransparent
                          ? 'text-white hover:text-primary-300 hover:bg-white/5'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[220px]">
                        <button
                          onClick={() => handleNav('packages')}
                          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          All Packages
                        </button>
                        <div className="h-px bg-gray-100 mx-3 my-1" />
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.page}
                            onClick={() => handleNav(sub.page)}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918953131595?text=Hi%20Dhani%20Tour%2C%20I%20want%20to%20inquire%20about%20tour%20packages"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-lg shadow-green-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isHomeTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.page}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isPackagesOpen && (
                        <div className="pl-4 space-y-0.5">
                          <button
                            onClick={() => handleNav('packages')}
                            className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary-50"
                          >
                            All Packages
                          </button>
                          {item.dropdown.map((sub) => (
                            <button
                              key={sub.page}
                              onClick={() => handleNav(sub.page)}
                              className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary-50"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNav(item.page)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                        currentPage === item.page
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:8953131595"
                  className="flex items-center justify-center gap-2 bg-navy-950 text-white py-2.5 rounded-lg text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" /> Call: 8953131595
                </a>
                <a
                  href="https://wa.me/918953131595?text=Hi%20Dhani%20Tour%2C%20I%20want%20to%20inquire%20about%20tour%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-lg text-sm font-semibold"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
