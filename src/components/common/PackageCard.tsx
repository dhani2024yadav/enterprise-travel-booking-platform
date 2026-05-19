import { Star, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { TourPackage } from '../../types';

interface PackageCardProps {
  pkg: TourPackage;
  onView: (slug: string) => void;
  onInquiry: () => void;
}

export default function PackageCard({ pkg, onView, onInquiry }: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {pkg.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {pkg.discount}% OFF
            </span>
          )}
          {pkg.trending && (
            <span className="bg-primary-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              🔥 Trending
            </span>
          )}
        </div>

        {/* Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-sm font-medium">
          <MapPin className="w-4 h-4" />
          {pkg.destination}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-gray-900">{pkg.rating}</span>
          </div>
          <span className="text-gray-400 text-xs">({pkg.reviewCount} reviews)</span>
          <span className="ml-auto text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium capitalize">
            {pkg.category}
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {pkg.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {pkg.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {pkg.groupSize}
          </span>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-600">₹{pkg.price.toLocaleString()}</span>
              {pkg.originalPrice && (
                <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <span className="text-xs text-gray-400">per person</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onView(pkg.slug)}
              className="bg-navy-950 hover:bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1"
            >
              View <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onInquiry}
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
