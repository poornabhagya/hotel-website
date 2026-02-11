import { motion } from 'motion/react';
import { Heart, Users, TreePine, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export function CharitySection() {
  const [donationProgress] = useState(68); // Mock progress percentage

  const causes = [
    {
      icon: TreePine,
      title: 'Wildlife Conservation',
      description: 'Supporting Wilpattu National Park protection and habitat restoration.',
    },
    {
      icon: Users,
      title: 'Local Communities',
      description: 'Empowering nearby villages with sustainable development programs.',
    },
    {
      icon: GraduationCap,
      title: 'Education Programs',
      description: 'Funding agriculture and eco-training for Sri Lankan students.',
    },
  ];

  return (
    <section id="charity" className="py-24 bg-[rgb(var(--color-beige))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Your Stay Makes a Difference</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            10% of every booking is donated to charity under your name. You're not just visiting Sri Lanka—
            you're contributing to its preservation and community welfare.
          </p>
        </motion.div>



        {/* Causes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[rgb(var(--color-ivory))] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[rgb(var(--color-earth-green))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <cause.icon className="w-8 h-8 text-[rgb(var(--color-earth-green))]" />
              </div>
              <h4 className="text-[rgb(var(--color-earth-green))] mb-3">{cause.title}</h4>
              <p className="text-[rgb(var(--color-earth-brown))] mb-4" style={{ fontSize: '0.95rem' }}>
                {cause.description}
              </p>
              <div className="pt-4 border-t border-[rgb(var(--color-sage))]/30">
                <p className="text-[rgb(var(--color-golden))]" style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
