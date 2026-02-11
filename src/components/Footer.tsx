import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-deep-forest))] text-[rgb(var(--color-beige))] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h4 className="text-[rgb(var(--color-golden))] mb-4">Wild Chemes Eco Hotel</h4>
            <p className="mb-4 opacity-90" style={{ fontSize: '0.9rem' }}>
              An eco-luxury boutique hotel near Wilpattu National Park, connecting guests with Sri Lankan nature, wildlife, and heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[rgb(var(--color-golden))] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[rgb(var(--color-golden))] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[rgb(var(--color-golden))] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[rgb(var(--color-golden))] mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[rgb(var(--color-golden))] transition-colors" style={{ fontSize: '0.9rem' }}>About Us</a></li>
              <li><a href="#rooms" className="hover:text-[rgb(var(--color-golden))] transition-colors" style={{ fontSize: '0.9rem' }}>Rooms & Suites</a></li>
              <li><a href="#experiences" className="hover:text-[rgb(var(--color-golden))] transition-colors" style={{ fontSize: '0.9rem' }}>Experiences</a></li>
              <li><a href="#charity" className="hover:text-[rgb(var(--color-golden))] transition-colors" style={{ fontSize: '0.9rem' }}>Charity Initiative</a></li>
              <li><a href="#gallery" className="hover:text-[rgb(var(--color-golden))] transition-colors" style={{ fontSize: '0.9rem' }}>Gallery</a></li>
              <li><a href="#contact" className="hover:text-[rgb(var(--color-golden))] transition-colors" style={{ fontSize: '0.9rem' }}>Contact</a></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h5 className="text-[rgb(var(--color-golden))] mb-4">Experiences</h5>
            <ul className="space-y-2">
              <li><span className="opacity-90" style={{ fontSize: '0.9rem' }}>Birdwatching Tours</span></li>
              <li><span className="opacity-90" style={{ fontSize: '0.9rem' }}>Nature Walks</span></li>
              <li><span className="opacity-90" style={{ fontSize: '0.9rem' }}>Wellness & Mindfulness</span></li>
              <li><span className="opacity-90" style={{ fontSize: '0.9rem' }}>Traditional Sri Lankan Cuisine</span></li>
              <li><span className="opacity-90" style={{ fontSize: '0.9rem' }}>Agriculture Training</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[rgb(var(--color-golden))] mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(var(--color-golden))] flex-shrink-0 mt-1" />
                <span className="opacity-90" style={{ fontSize: '0.9rem' }}>Near Wilpattu National Park, Anuradhapura District, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[rgb(var(--color-golden))] flex-shrink-0" />
                <span className="opacity-90" style={{ fontSize: '0.9rem' }}>+94 25 222 XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[rgb(var(--color-golden))] flex-shrink-0" />
                <span className="opacity-90" style={{ fontSize: '0.9rem' }}>stay@wildchemes.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgb(var(--color-sage))]/30 mt-12 pt-8 text-center">
          <p className="opacity-75" style={{ fontSize: '0.85rem' }}>
            © 2025 Wild Chemes Eco Hotel. All rights reserved. | 10% of every booking supports charity in your name.
          </p>
        </div>
      </div>
    </footer>
  );
}
