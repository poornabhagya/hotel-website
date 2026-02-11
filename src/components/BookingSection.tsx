import { motion } from 'motion/react';
import { Calendar, Users, Heart, Gift } from 'lucide-react';
import { useState } from 'react';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'heritage',
    natureWalk: false,
    birdSound: false,
    charityExtra: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    alert('Thank you for your booking request! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="booking" className="py-24 bg-[rgb(var(--color-ivory))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Book Your Nature Escape</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Begin your journey to emotional connection with Sri Lankan nature. Every booking includes our 
            10% charity donation under your name.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-[rgb(var(--color-beige))] rounded-lg shadow-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                  placeholder="Your name"
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
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
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
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
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
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
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
                  Check-in Date *
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                />
              </div>

              <div>
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Check-out Date *
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[rgb(var(--color-earth-brown))] mb-2" style={{ fontWeight: 500 }}>
                  Room Type *
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-ivory))] border border-[rgb(var(--color-sage))]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-earth-green))] text-[rgb(var(--color-earth-brown))]"
                >
                  <option value="heritage">Heritage Room - From $140/night</option>
                  <option value="colonial">Colonial Suite - From $180/night</option>
                  <option value="villa">Nature Villa - From $320/night</option>
                </select>
              </div>
            </div>


            {/* Charity Highlight */}
            <div className="mb-6 p-6 bg-gradient-to-r from-[rgb(var(--color-golden))]/20 to-[rgb(var(--color-earth-green))]/20 rounded-lg flex items-start space-x-4">
              <Heart className="w-6 h-6 text-[rgb(var(--color-golden))] flex-shrink-0 mt-1" />
              <div>
                <h5 className="text-[rgb(var(--color-earth-green))] mb-2">Included: 10% Charity Donation</h5>
                <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.95rem' }}>
                  10% of your booking automatically goes to charity under your name. You'll receive a certificate 
                  acknowledging your contribution to Sri Lankan conservation and community development.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-lg hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              style={{ fontWeight: 600, fontSize: '1.1rem' }}
            >
              <Calendar className="w-5 h-5" />
              <span>Complete Booking</span>
            </button>
          </motion.form>

          {/* External Booking Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 bg-[rgb(var(--color-beige))] rounded-lg shadow-xl p-8"
          >
            <h4 className="text-[rgb(var(--color-earth-green))] mb-6 text-center">Or Book Through Our Partners</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[rgb(var(--color-ivory))] p-6 rounded-lg border-2 border-[rgb(var(--color-sage))]/30 hover:border-[#003580] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-16 h-16 bg-[#003580] rounded-lg flex items-center justify-center">
                  <span className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700 }}>B</span>
                </div>
                <div className="text-center">
                  <h5 className="text-[rgb(var(--color-earth-green))] mb-2">Book via Booking.com</h5>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>
                    World's leading travel platform
                  </p>
                </div>
                <div className="w-full px-6 py-3 bg-[#003580] text-white rounded-lg text-center group-hover:bg-[#00224f] transition-colors duration-300" style={{ fontWeight: 600 }}>
                  Book Now →
                </div>
              </a>

              <a
                href="https://www.agoda.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[rgb(var(--color-ivory))] p-6 rounded-lg border-2 border-[rgb(var(--color-sage))]/30 hover:border-[#d7373f] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-16 h-16 bg-[#d7373f] rounded-lg flex items-center justify-center">
                  <span className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700 }}>A</span>
                </div>
                <div className="text-center">
                  <h5 className="text-[rgb(var(--color-earth-green))] mb-2">Book via Agoda</h5>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>
                    Best deals on accommodation
                  </p>
                </div>
                <div className="w-full px-6 py-3 bg-[#d7373f] text-white rounded-lg text-center group-hover:bg-[#b52f35] transition-colors duration-300" style={{ fontWeight: 600 }}>
                  Book Now →
                </div>
              </a>
            </div>
            <p className="text-center text-[rgb(var(--color-earth-brown))] mt-6" style={{ fontSize: '0.9rem' }}>
              All bookings include our 10% charity donation commitment, regardless of booking platform.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-center"
          >

          </motion.div>
        </div>
      </div>
    </section>
  );
}