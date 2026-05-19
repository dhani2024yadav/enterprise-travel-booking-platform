import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PackageCard from '../components/common/PackageCard';
import { tourPackages } from '../data/packages';
import { PackageCategory } from '../types';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface PackagesPageProps {
  onNavigate: (page: string) => void;
  filterCategory?: PackageCategory;
}

const categoryLabels: Record<string, string> = {
  all: 'All Packages',
  family: 'Family Tours',
  honeymoon: 'Honeymoon Packages',
  religious: 'Religious Tours',
  corporate: 'Corporate Tours',
  group: 'Group Tours',
  weekend: 'Weekend Trips',
  adventure: 'Adventure Tours',
  educational: 'Educational Tours',
};

export default function PackagesPage({ onNavigate, filterCategory }: PackagesPageProps) {
  useScrollToTop(filterCategory);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(filterCategory || 'all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = tourPackages;

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(s) ||
        p.destination.toLowerCase().includes(s) ||
        p.description.toLowerCase().includes(s)
      );
    }

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        result = [...result].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-white mb-3">
            {categoryLabels[selectedCategory] || 'Tour Packages'}
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Discover handcrafted tour packages designed to create unforgettable memories
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search & Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by destination, package name..."
                className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className={`mb-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="flex flex-wrap gap-2">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === key
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing <strong className="text-gray-900">{filtered.length}</strong> packages
            </p>
          </div>

          {/* Package Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onView={(slug) => onNavigate(`package-${slug}`)}
                  onInquiry={() => onNavigate('inquiry')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => { setSearch(''); setSelectedCategory('all'); }}
                className="bg-primary-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
