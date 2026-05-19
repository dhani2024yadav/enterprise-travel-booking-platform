import { useState } from 'react';
import { Send, CheckCircle, Phone, Shield, Clock, Star, MessageCircle } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface InquiryPageProps {
  onNavigate: (page: string) => void;
}

export default function InquiryPage({ onNavigate }: InquiryPageProps) {
  useScrollToTop();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: '2',
    budget: '',
    packageType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Inquiry Submitted!</h2>
          <p className="text-gray-500 mb-6">
            Thank you for your inquiry. Our travel expert will contact you within 30 minutes with a customized travel plan.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
            <p className="text-sm text-gray-500 mb-3">For instant response, chat with us on:</p>
            <a
              href={`https://wa.me/918953131595?text=Hi! I just submitted an inquiry for ${form.destination || 'a trip'}. My name is ${form.name}. Please share details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-14 md:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-white mb-3">Get Your Free Travel Quote</h1>
          <p className="text-white/80 max-w-lg mx-auto">
            Fill in your details and our travel expert will create a customized plan within 30 minutes!
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Trip</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="Your phone number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination *</label>
                    <input type="text" name="destination" required value={form.destination} onChange={handleChange} placeholder="Where do you want to go?" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Travel Date *</label>
                    <input type="date" name="travelDate" required value={form.travelDate} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Travelers</label>
                    <input type="number" name="travelers" min="1" value={form.travelers} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-600">
                      <option value="">Select budget</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-20k">₹10,000 - ₹20,000</option>
                      <option value="20k-35k">₹20,000 - ₹35,000</option>
                      <option value="35k-50k">₹35,000 - ₹50,000</option>
                      <option value="50k+">₹50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Package Type</label>
                    <select name="packageType" value={form.packageType} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-600">
                      <option value="">Select type</option>
                      <option value="family">Family Tour</option>
                      <option value="honeymoon">Honeymoon</option>
                      <option value="religious">Religious Tour</option>
                      <option value="corporate">Corporate Tour</option>
                      <option value="group">Group Tour</option>
                      <option value="weekend">Weekend Trip</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about any special requirements, preferences, or questions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" /> Your information is safe with us. No spam guaranteed.
                  </p>
                  <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-primary-200 flex items-center gap-2 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Prefer to Talk?</h4>
                <a
                  href="tel:8953131595"
                  className="w-full bg-navy-950 hover:bg-navy-900 text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 mb-3"
                >
                  <Phone className="w-4 h-4" /> Call: 8953131595
                </a>
                <a
                  href="https://wa.me/918953131595?text=Hi Dhani Tour! I want to plan a trip. Please help me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>

              {/* Trust Signals */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h4 className="font-bold text-gray-900 mb-4">Why Book With Us?</h4>
                <div className="space-y-3">
                  {[
                    { icon: Clock, text: 'Response within 30 minutes' },
                    { icon: Star, text: 'Customized itinerary included' },
                    { icon: Shield, text: 'No hidden costs guaranteed' },
                    { icon: CheckCircle, text: 'Free cancellation within 48hrs' },
                    { icon: Phone, text: '24/7 travel support included' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-gray-700">
                      <item.icon className="w-4 h-4 text-primary-500 shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  "Best travel service! They planned our entire Rajasthan trip perfectly. Great value for money. Highly recommended!"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-xs font-bold text-primary-700">RK</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Rajesh Kumar</div>
                    <div className="text-xs text-gray-400">Delhi</div>
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
