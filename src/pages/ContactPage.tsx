import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function ContactPage() {
  useScrollToTop();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-3">Contact Us</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have questions? We'd love to hear from you. Reach out and we'll respond within 30 minutes!
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-500">
                  Whether you're planning a trip or need assistance, our team is ready to help you 24/7.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Phone, title: 'Call / WhatsApp', value: '8953131595', link: 'tel:8953131595', subtitle: 'Available 24/7' },
                  { icon: Mail, title: 'Email Us', value: 'yadavravi761994@gmail.com', link: 'mailto:yadavravi761994@gmail.com', subtitle: 'Response within 1 hour' },
                  { icon: MapPin, title: 'Location', value: 'Pan-India Service', link: '#', subtitle: 'All major cities covered' },
                  { icon: Clock, title: 'Working Hours', value: '24/7 Available', link: '#', subtitle: 'Including holidays' },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition group"
                  >
                    <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center shrink-0 transition">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-primary-600 font-bold">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.subtitle}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918953131595?text=Hi Dhani Tour! I need help with travel planning."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-5 rounded-xl transition w-full"
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <div className="font-bold">Chat on WhatsApp</div>
                  <div className="text-sm opacity-80">Get instant replies</div>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Send us a Message</h3>
                <p className="text-gray-500 text-sm mb-6">Fill the form and we'll get back to you shortly.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We'll get back to you within 30 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" required placeholder="Your name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input type="tel" required placeholder="Your phone number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-600">
                        <option value="">Select a topic</option>
                        <option>Tour Package Inquiry</option>
                        <option>Transportation Booking</option>
                        <option>Hotel Reservation</option>
                        <option>Custom Trip Planning</option>
                        <option>Complaint / Feedback</option>
                        <option>Partnership / Business</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea required rows={5} placeholder="Tell us about your travel plans or query..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-primary-200 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="pb-0">
        <div className="bg-gray-100 h-80 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900">Serving All Across India</h3>
            <p className="text-gray-500 text-sm">From Kashmir to Kerala, we cover every corner of India</p>
          </div>
        </div>
      </section>
    </div>
  );
}
