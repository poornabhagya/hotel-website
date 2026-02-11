import { motion } from 'motion/react';
import { Binoculars, Brain, UtensilsCrossed, Sprout, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function ExperiencesSection() {
  const experiences = [
    {
      icon: Binoculars,
      title: 'Communing with Nature',
      description: "A meditative journey through our lush grounds. Breathe in the pure air and find deep relaxation as you observe the vibrant life hidden within the canopy.",
      image: 'https://images.unsplash.com/photo-1553215474-d7d4a22d677a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkd2F0Y2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'earth-green',
    },
    {
      icon: Brain,
      title: 'The Gentle Touch of Earth',
      description: 'Immerse your hands in the soil and reconnect with the source of life. Experience the therapeutic joy of planting, feeling the textures of nature, and whispering to the green souls around you.',
      image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMDI3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'sage',
    },
    {
      icon: UtensilsCrossed,
      title: 'Heartfelt Village Connections',
      description: 'Step into the lives of our local guardians. Share stories with farmers, exchange warm smiles with villagers, and discover the wisdom woven into their simple, joyous daily rhythms.',
      image: 'https://images.unsplash.com/photo-1619714604987-2f6caead7850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYW4lMjBmb29kJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYzMDM1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'terracotta',
    },
    {
      icon: Sprout,
      title: 'Into the Heart of the Wild',
      description: 'Wander through untouched landscapes where biodiversity thrives. From vibrant flora to elusive wildlife, witness the raw, breathing beauty of Sri Lanka’s natural heritage.',
      image: 'https://images.unsplash.com/photo-1699015874886-35fc054c40ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHBhbG18ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'earth-brown',
    },
    {
      icon: Heart,
      title: 'Serenity by the Silent Waters',
      description: 'Take a contemplative stroll along the tranquil lake banks. Let the cool breeze and the gentle ripples soothe your mind as you find stillness in nature’s liquid mirror.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwcHJvamVjdHxlbnwxfHx8fDE3NjMwMzU1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'golden',
    },
    {
      icon: Heart,
      title: 'Ancestral Healing & Wellness',
      description: 'Experience true healing passed down through generations. Our local practitioners use ancestral knowledge and family secrets to restore your body’s harmony through authentic Ayurvedic touch.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwcHJvamVjdHxlbnwxfHx8fDE3NjMwMzU1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'golden',
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-[rgb(var(--color-deep-forest))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-golden))] mb-4 font-serif" style={{ fontSize: '2.25rem', fontWeight: 700 }}>
            Immersive Experiences
          </h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-beige))] font-serif" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
            Curated journeys designed to slow time. Rediscover the joy of simple connections through activities that honor our heritage, celebrate nature, and uplift the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              style={{ backgroundColor: '#fff' }}
            >
              <div className="relative">
                <ImageWithFallback
                  src={experience.image}
                  alt={experience.title}
                  className="rounded-t-lg w-full h-64 object-cover"
                />
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-[rgb(var(--color-${experience.color}))]/20 shadow-lg border-4 border-white`}>
                  <experience.icon className="w-8 h-8 text-[rgb(var(--color-golden))]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between p-8 pt-12 text-center">
                <h3 className="text-[rgb(var(--color-earth-green))] mb-4 font-serif" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {experience.title}
                </h3>
                <p className="text-[rgb(var(--color-earth-brown))] mb-6 font-serif" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {experience.description}
                </p>
                <a
                  href="#booking"
                  className="inline-block px-8 py-3 border-2 border-[rgb(var(--color-golden))] text-[rgb(var(--color-golden))] rounded-full hover:bg-[rgb(var(--color-golden))] hover:text-[rgb(var(--color-deep-forest))] transition-all duration-300 font-serif"
                  style={{ fontWeight: 500, fontSize: '1rem' }}
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
