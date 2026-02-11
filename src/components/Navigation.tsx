import { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  onBirdSoundToggle: (enabled: boolean) => void;
  birdSoundEnabled: boolean;
}

export function Navigation({ onBirdSoundToggle, birdSoundEnabled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Packages', href: '#offers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgb(var(--color-earth-green))]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-white hover:text-[rgb(var(--color-golden))] transition-colors duration-300"
                style={{ fontSize: '0.95rem', fontWeight: 500 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <span
              className="text-white text-center"
              style={{
                fontFamily: 'Playfair Display',
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Wild Chemes
            </span>
            <span
              className="text-[rgb(var(--color-golden))] text-center"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                fontWeight: 500,
              }}
            >
              ECO HOTEL
            </span>
          </motion.div>

          {/* Mobile Menu */}
          <div className="flex items-center justify-end flex-1 space-x-3">
            

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-[rgb(var(--color-beige))] hover:bg-[rgb(var(--color-sage))]/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
              ) : (
                <Menu className="w-6 h-6 text-[rgb(var(--color-earth-green))]" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden md:block px-6 py-2.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-[rgb(var(--color-earth-green))] transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ fontWeight: 500 }}
            >
              Contact Us
            </a>

            <a
              href="#booking"
              className="hidden md:block px-6 py-2.5 bg-[rgb(var(--color-earth-green))] text-white rounded-full hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ fontWeight: 500 }}
            >
              Book Your Stay
            </a>
          </div>
        </div>

        {/* Mobile Menu Blur Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden relative z-50"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-white hover:bg-[rgb(var(--color-beige))] rounded-lg transition-colors duration-300"
                    style={{ fontWeight: 500 }}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mx-4 px-6 py-2.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-[rgb(var(--color-earth-green))] transition-all duration-300 text-center"
                  style={{ fontWeight: 500 }}
                >
                  Contact Us
                </a>
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="mx-4 px-6 py-2.5 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-full hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300 text-center"
                  style={{ fontWeight: 500 }}
                >
                  Book Your Stay
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}