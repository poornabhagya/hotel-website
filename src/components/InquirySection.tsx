import { motion } from 'motion/react';
import { MessageSquare, Send, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export function InquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    checkIn: '',
    checkOut: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      checkIn: '',
      checkOut: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="inquiry" className="py-24 bg-[rgb(var(--color-beige))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Make an Inquiry</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Have questions or special requests? Send us an inquiry and our team will get back to you 
            with personalized recommendations for your nature escape.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-[rgb(var(--color-ivory))] rounded-lg shadow-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
              </div>
              <div>
                <h4 className="text-[rgb(var(--color-earth-green))]">Send Your Inquiry</h4>
                <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Preferred Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                />
              </div>

              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Preferred Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))] resize-none"
                  placeholder="Tell us about your interests, special requests, dietary requirements, or any questions you have about Wild Chemes..."
                />
              </div>
            </div>

            <div className="mb-6 p-4 bg-gradient-to-r from-[rgb(var(--color-earth-green))]/10 to-[rgb(var(--color-sage))]/10 rounded-lg">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-[rgb(var(--color-golden))] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600 }}>Quick Response Guarantee:</span> Our team reviews inquiries daily 
                    and provides personalized recommendations based on your interests and travel dates.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-lg hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              style={{ fontWeight: 600, fontSize: '1.1rem' }}
            >
              <Send className="w-5 h-5" />
              <span>Send Inquiry</span>
            </button>
          </motion.form>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-[rgb(var(--color-ivory))] rounded-lg p-6 text-center shadow-md">
              <Users className="w-8 h-8 text-[rgb(var(--color-earth-green))] mx-auto mb-3" />
              <h5 className="text-[rgb(var(--color-earth-green))] mb-2">Group Inquiries</h5>
              <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>
                Special rates for groups of 6+
              </p>
            </div>

            <div className="bg-[rgb(var(--color-ivory))] rounded-lg p-6 text-center shadow-md">
              <Calendar className="w-8 h-8 text-[rgb(var(--color-earth-green))] mx-auto mb-3" />
              <h5 className="text-[rgb(var(--color-earth-green))] mb-2">Custom Packages</h5>
              <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>
                Tailored experiences for your needs
              </p>
            </div>

            <div className="bg-[rgb(var(--color-ivory))] rounded-lg p-6 text-center shadow-md">
              <MessageSquare className="w-8 h-8 text-[rgb(var(--color-earth-green))] mx-auto mb-3" />
              <h5 className="text-[rgb(var(--color-earth-green))] mb-2">24-Hour Response</h5>
              <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>
                We aim to reply within one day
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
