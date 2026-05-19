import { Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../data/destinations';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  useScrollToTop();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-3">Travel Blog</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Tips, guides, and inspiration for your next adventure across India
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-12">
            <button
              onClick={() => onNavigate('blog')}
              className="w-full text-left group bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100 grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-primary-500 font-semibold text-sm">{blogPosts[0].category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary-600 transition">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blogPosts[0].author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blogPosts[0].readTime}</span>
                </div>
              </div>
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <button
                key={post.id}
                onClick={() => onNavigate('blog')}
                className="text-left group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-primary-500 font-semibold">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
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
