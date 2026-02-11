import { motion } from 'motion/react';
import { Users, Maximize, Eye, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RoomsSection() {
  const rooms = [
    {
      name: 'Colonial Suite',
      image: 'https://images.unsplash.com/photo-1758239652052-a49b3ed9d7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY28lMjBob3RlbCUyMG5hdHVyZXxlbnwxfHx8fDE3NjMwMzU1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '2 Adults',
      size: '45 m²',
      view: 'Garden & Forest View',
      features: ['King Bed', 'Private Veranda', 'Colonial Furniture', 'Natural Ventilation'],
      price: 'From $180/night',
    },
    {
      name: 'Heritage Room',
      image: 'https://images.unsplash.com/photo-1699015874886-35fc054c40ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHBhbG18ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '2 Adults',
      size: '35 m²',
      view: 'Tropical Garden View',
      features: ['Queen Bed', 'Wooden Interiors', 'Eco-Friendly Amenities', 'Bird Sounds'],
      price: 'From $140/night',
    },
    {
      name: 'Nature Villa',
      image: 'https://images.unsplash.com/photo-1680967379888-25d4436bfa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxwYXR0dSUyMG5hdGlvbmFsJTIwcGFyayUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc2MzAzNTU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '4 Adults',
      size: '65 m²',
      view: 'Wildlife Reserve View',
      features: ['Two Bedrooms', 'Living Area', 'Private Pool', 'Birdwatching Deck'],
      price: 'From $320/night',
    },
  ];

  return (
    <section id="rooms" className="py-24 bg-[rgb(var(--color-ivory))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Colonial Elegance Meets Nature</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Each room is a sanctuary designed to immerse you in Sri Lankan heritage while offering modern comfort 
            and breathtaking views of nature.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[rgb(var(--color-beige))] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[rgb(var(--color-golden))] text-[rgb(var(--color-deep-forest))] px-4 py-2 rounded-full" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                  {room.price}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-[rgb(var(--color-earth-green))] mb-4">{room.name}</h4>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-[rgb(var(--color-sage))]/30">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-[rgb(var(--color-golden))] mx-auto mb-1" />
                    <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.75rem' }}>{room.capacity}</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="w-5 h-5 text-[rgb(var(--color-golden))] mx-auto mb-1" />
                    <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.75rem' }}>{room.size}</p>
                  </div>
                  <div className="text-center">
                    <Eye className="w-5 h-5 text-[rgb(var(--color-golden))] mx-auto mb-1" />
                    <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.75rem' }}>View</p>
                  </div>
                </div>

                <p className="text-[rgb(var(--color-earth-brown))] mb-4 flex items-center" style={{ fontSize: '0.9rem' }}>
                  <Eye className="w-4 h-4 mr-2 text-[rgb(var(--color-sage))]" />
                  {room.view}
                </p>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Sparkles className="w-3 h-3 text-[rgb(var(--color-golden))]" />
                      <span className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.85rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  className="block w-full text-center px-6 py-3 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-lg hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Book This Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[rgb(var(--color-beige))] rounded-lg p-8 text-center"
        >
          <h4 className="text-[rgb(var(--color-earth-green))] mb-4">Enhance Your Stay</h4>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-4 bg-[rgb(var(--color-ivory))] rounded-lg">
              <h5 className="text-[rgb(var(--color-golden))] mb-2">🐦 Birdsound Experience</h5>
              <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                Immersive natural soundscape in your room
              </p>
            </div>
            <div className="p-4 bg-[rgb(var(--color-ivory))] rounded-lg">
              <h5 className="text-[rgb(var(--color-golden))] mb-2">🌿 Nature Walk Discount</h5>
              <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                Get 10% off by exploring our hotel grounds
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
