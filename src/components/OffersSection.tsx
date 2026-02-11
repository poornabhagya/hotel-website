import { motion } from 'motion/react';
import { Calendar, Percent, Tag, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OffersSection() {
  const offers = [
    {
      title: 'Sinhala & Tamil New Year Special',
      season: 'April 2025',
      description: 'Celebrate the Sri Lankan New Year with traditional festivities, special cultural performances, and authentic New Year feast. Immerse yourself in the unity of Sinhala and Tamil cultures.',
      image: 'https://images.unsplash.com/photo-1619714604987-2f6caead7850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYW4lMjBmb29kJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYzMDM1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      discount: '25% OFF',
      price: 'From $105/night',
      features: ['3 nights minimum', 'Traditional meals included', 'Cultural activities', 'Nature walks'],
    },
    {
      title: 'Monsoon Wellness Retreat',
      season: 'May - September',
      description: 'Experience the rejuvenating power of the monsoon season. Enjoy the lush greenery, fresh air, and peaceful rain sounds while practicing mindfulness and wellness.',
      image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMDI3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      discount: '30% OFF',
      price: 'From $98/night',
      features: ['5 nights minimum', 'Daily yoga sessions', 'Ayurvedic treatments', 'Meditation classes'],
    },
    {
      title: 'Wildlife Safari Season',
      season: 'February - October',
      description: 'Prime season for wildlife spotting at Wilpattu National Park. Witness leopards, elephants, and over 150 bird species in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1680967379888-25d4436bfa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxwYXR0dSUyMG5hdGlvbmFsJTIwcGFyayUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc2MzAzNTU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      discount: '15% OFF',
      price: 'From $153/night',
      features: ['Guided safari tours', 'Birdwatching sessions', 'Wildlife photography tips', 'Park entrance included'],
    },
    {
      title: 'Long-Stay Nature Retreat',
      season: 'Year-Round',
      description: 'Disconnect from the world and reconnect with nature. Perfect for digital detox, remote work in nature, or extended wellness retreats.',
      image: 'https://images.unsplash.com/photo-1699015874886-35fc054c40ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHBhbG18ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      discount: '40% OFF',
      price: 'From $84/night',
      features: ['10+ nights stay', 'Weekly meal plans', 'Workspace available', 'Agriculture workshops'],
    },
    {
      title: 'Honeymoon in Paradise',
      season: 'Year-Round',
      description: 'Celebrate your love surrounded by nature. Romantic candlelit dinners, private nature walks, and luxurious colonial suite accommodation.',
      image: 'https://images.unsplash.com/photo-1758239652052-a49b3ed9d7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY28lMjBob3RlbCUyMG5hdHVyZXxlbnwxfHx8fDE3NjMwMzU1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      discount: '20% OFF',
      price: 'From $144/night',
      features: ['Colonial Suite upgrade', 'Romantic dinner setup', 'Couples spa treatment', 'Complimentary champagne'],
    },
    {
      title: 'Birdwatcher\'s Paradise',
      season: 'November - March',
      description: 'Peak season for migratory birds. Join expert ornithologists and discover rare species unique to Sri Lanka and seasonal migrants.',
      image: 'https://images.unsplash.com/photo-1553215474-d7d4a22d677a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkd2F0Y2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      discount: '18% OFF',
      price: 'From $115/night',
      features: ['Expert guide included', 'Binoculars provided', 'Photography assistance', 'Bird checklist'],
    },
  ];

  return (
    <section id="offers" className="py-24 bg-[rgb(var(--color-ivory))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Special Packages</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            
            Each package is designed to enhance your connection with nature and heritage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[rgb(var(--color-beige))] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[rgb(var(--color-golden))] text-[rgb(var(--color-deep-forest))] px-4 py-2 rounded-full flex items-center space-x-1" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                  <Percent className="w-4 h-4" />
                  <span>{offer.discount}</span>
                </div>
                <div className="absolute top-4 left-4 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] px-3 py-1 rounded-full flex items-center space-x-1" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  <Calendar className="w-3 h-3" />
                  <span>{offer.season}</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-[rgb(var(--color-earth-green))] mb-3">{offer.title}</h4>
                <p className="text-[rgb(var(--color-earth-brown))] mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {offer.description}
                </p>

                <div className="mb-4 pb-4 border-b border-[rgb(var(--color-sage))]/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>
                      Starting from
                    </span>
                    <span className="text-[rgb(var(--color-earth-green))]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {offer.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {offer.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Tag className="w-3 h-3 text-[rgb(var(--color-golden))]" />
                      <span className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  className="group/btn block w-full text-center px-6 py-3 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-lg hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ fontWeight: 500 }}
                >
                  <span>Book This Offer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[rgb(var(--color-earth-green))]/10 to-[rgb(var(--color-golden))]/10 rounded-lg p-8 text-center"
        >
          <h4 className="text-[rgb(var(--color-earth-green))] mb-4">All Offers Include Our Charity Commitment</h4>
          <p className="max-w-3xl mx-auto text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '1.05rem' }}>
            Every booking, regardless of the offer, includes our 10% charity donation under your name. 
            You're not just saving on your stay—you're contributing to Sri Lankan conservation and community welfare.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
