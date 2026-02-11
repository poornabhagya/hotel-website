import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635737988013-25cd6611f63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYW4lMjBiaXJkJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzYzMDM1NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Birds over lush Sri Lankan nature"
          className="w-full h-full object-cover brightness-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-deep-forest))]/50 via-[rgb(var(--color-deep-forest))]/30 to-[rgb(var(--color-deep-forest))]/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-[rgb(var(--color-ivory))]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-6 text-[rgb(var(--color-ivory))] drop-shadow-lg">
            A Sanctuary of Timeless Connection
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 text-[rgb(var(--color-beige))]"
          style={{ fontSize: '1.25rem', lineHeight: 1.8 }}
        >
          More than a stay, it is a return to the gentle rhythms of life. Awaken your senses in nature's embrace and find true belonging in a place where heritage meets harmony.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#booking"
            className="group px-8 py-4 bg-[rgb(var(--color-golden))] text-[rgb(var(--color-deep-forest))] rounded-full hover:bg-[rgb(var(--color-terracotta))] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
            style={{ fontWeight: 600, fontSize: '1.1rem' }}
          >
            <span>Book Your Stay</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            className="px-8 py-4 border-2 border-[rgb(var(--color-ivory))] text-[rgb(var(--color-ivory))] rounded-full hover:bg-[rgb(var(--color-ivory))]/10 transition-all duration-300"
            style={{ fontWeight: 600, fontSize: '1.1rem' }}
          >
            Discover More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-[rgb(var(--color-golden))]"
          style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.1em' }}
        >
          ✦
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
}
