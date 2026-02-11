import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[rgb(var(--color-beige))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Plan Your Nature Stay</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Have questions about Wild Chemes? We're here to help you plan your perfect eco-luxury escape 
            to Sri Lankan nature.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-[rgb(var(--color-ivory))] rounded-lg shadow-lg p-8">
              <h4 className="text-[rgb(var(--color-earth-green))] mb-6">Send Us a Message</h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                    Email Address
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
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[rgb(var(--color-beige))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))] resize-none"
                    placeholder="Tell us about your plans..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-lg hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  style={{ fontWeight: 500 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-[rgb(var(--color-earth-green))] mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
                  </div>
                  <div>
                    <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Location</h5>
                    <p className="text-[rgb(var(--color-earth-brown))]">
                      Near Wilpattu National Park<br />
                      Anuradhapura District<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
                  </div>
                  <div>
                    <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Phone</h5>
                    <p className="text-[rgb(var(--color-earth-brown))]">
                      +94 25 222 XXXX<br />
                      WhatsApp: +94 77 XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
                  </div>
                  <div>
                    <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Email</h5>
                    <p className="text-[rgb(var(--color-earth-brown))]">
                      stay@wildchemes.lk<br />
                      info@wildchemes.lk
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
                  </div>
                  <div>
                    <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Response Time</h5>
                    <p className="text-[rgb(var(--color-earth-brown))]">
                      We typically respond within 24 hours<br />
                      Check-in: 2:00 PM | Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[rgb(var(--color-ivory))] rounded-lg shadow-lg overflow-hidden h-80">
              <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--color-sage))]/30 to-[rgb(var(--color-earth-green))]/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[rgb(var(--color-earth-green))] mx-auto mb-3" />
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontWeight: 500 }}>
                    Interactive Map
                  </p>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                    Near Wilpattu National Park
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[rgb(var(--color-earth-green))]/10 to-[rgb(var(--color-golden))]/10 rounded-lg p-6">
              <h5 className="text-[rgb(var(--color-earth-green))] mb-3">Ready to Experience Wild Chemes?</h5>
              <p className="text-[rgb(var(--color-earth-brown))] mb-4" style={{ fontSize: '0.95rem' }}>
                Join us for an unforgettable journey into Sri Lankan nature, wildlife, and heritage.
              </p>
              <a
                href="#booking"
                className="inline-block px-6 py-3 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-lg hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300"
                style={{ fontWeight: 500 }}
              >
                Book Your Stay
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
