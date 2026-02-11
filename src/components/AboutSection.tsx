import { motion } from 'motion/react';
import { Heart, Leaf, Bird, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: 'Eco-Luxury Experience',
      description: 'Colonial architecture meets sustainable living in perfect harmony.',
    },
    {
      icon: Bird,
      title: 'Wildlife & Nature',
      description: 'Gateway to Wilpattu National Park and exceptional birdwatching.',
    },
    {
      icon: Heart,
      title: 'Wellness & Heritage',
      description: 'Traditional Sri Lankan culture combined with mindfulness practices.',
    },
    {
      icon: Users,
      title: 'Charity & Community',
      description: '10% of every booking donated to charity under your name.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[rgb(var(--color-beige))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">A Sanctuary of Simple Harmony</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Wild Chimes Eco is more than a tourism destination, it is a journey through the timeless memories of bygone eras; an emotional experience of the old world, where grace, charm, and gentle rhythms linger forever in your heart.  
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762788185338-f3ce54f6f9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZSUyMHRyb3BpY2FsfGVufDF8fHx8MTc2MzAzNTU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Colonial architecture of Wild Chemes"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[rgb(var(--color-earth-green))] mb-6">Our Story & Mission</h3>
            <p className="text-[rgb(var(--color-earth-brown))] mb-4">
               Inspired by a vision to revive the timeless practices of a centuries-old life, Wild Chimes celebrates a lifestyle deeply connected with nature and enriched by simple social bonds. Every moment here is designed to bring you closer to nature, culture, and community, offering an experience that is both serene and profoundly meaningful.  
            </p>
            <p className="text-[rgb(var(--color-earth-brown))] mb-6">
              It is more than a commercial aspiration. While we strive to create moments that are memorable, heartfelt, and truly enriching, we ensure that every creator and contributor is valued and respected. Through your stay at Wild Chimes Eco, we also support those in need by every possible means, making each visit meaningful, impactful, and socially conscious.
            </p>
            <h3 className="text-[rgb(var(--color-earth-green))] mb-6">Our Vision</h3>
            <p className="text-[rgb(var(--color-earth-brown))] mb-6">
              We aim to immerse travellers in the simplicity, charm, and harmony of a world long past, allowing them to connect with the essence of timeless eras and forge meaningful bonds. At Wild Chimes, every moment is designed to slow the pace of modern life, awaken the senses, and deepen ties with nature, culture, and community.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[rgb(var(--color-ivory))] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-[rgb(var(--color-earth-green))]" />
              </div>
              <h4 className="text-[rgb(var(--color-earth-green))] mb-3">{feature.title}</h4>
              <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.95rem' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
