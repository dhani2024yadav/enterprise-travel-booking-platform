import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function GalleryPage() {
  useScrollToTop();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/images/hero-bg.jpg', title: 'Himalayan Mountains', category: 'Nature' },
    { src: '/images/family-tour.jpg', title: 'Family at Hill Station', category: 'Family Tours' },
    { src: '/images/honeymoon.jpg', title: 'Romantic Lake View', category: 'Honeymoon' },
    { src: '/images/religious-tour.jpg', title: 'Sacred Temple', category: 'Religious Tours' },
    { src: '/images/group-tour.jpg', title: 'Group Adventure', category: 'Group Tours' },
    { src: '/images/corporate-tour.jpg', title: 'Corporate Retreat', category: 'Corporate' },
    { src: '/images/weekend-trip.jpg', title: 'Weekend Getaway', category: 'Weekend Trips' },
    { src: '/images/gallery-1.jpg', title: 'Iconic Monument', category: 'Heritage' },
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-3">Travel Gallery</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            A glimpse of the beautiful destinations and memories our travelers have experienced
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img.src)}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-white font-semibold text-sm">{img.title}</div>
                  <div className="text-white/60 text-xs">{img.category}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition">
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
