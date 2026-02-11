import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1635737988013-25cd6611f63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYW4lMjBiaXJkJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzYzMDM1NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Sri Lankan Bird Species',
      category: 'Wildlife',
    },
    {
      url: 'https://images.unsplash.com/photo-1762788185338-f3ce54f6f9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZSUyMHRyb3BpY2FsfGVufDF8fHx8MTc2MzAzNTU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Colonial Architecture',
      category: 'Heritage',
    },
    {
      url: 'https://images.unsplash.com/photo-1619714604987-2f6caead7850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYW4lMjBmb29kJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYzMDM1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Traditional Sri Lankan Cuisine',
      category: 'Culinary',
    },
    {
      url: 'https://images.unsplash.com/photo-1758239652052-a49b3ed9d7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY28lMjBob3RlbCUyMG5hdHVyZXxlbnwxfHx8fDE3NjMwMzU1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Eco-Luxury Accommodations',
      category: 'Rooms',
    },
    {
      url: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMDI3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Wellness & Meditation',
      category: 'Wellness',
    },
    {
      url: 'https://images.unsplash.com/photo-1699015874886-35fc054c40ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHBhbG18ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Tropical Gardens',
      category: 'Nature',
    },
    {
      url: 'https://images.unsplash.com/photo-1553215474-d7d4a22d677a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkd2F0Y2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzYzMDM1NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Birdwatching Experience',
      category: 'Wildlife',
    },
    {
      url: 'https://images.unsplash.com/photo-1680967379888-25d4436bfa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxwYXR0dSUyMG5hdGlvbmFsJTIwcGFyayUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc2MzAzNTU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Wilpattu National Park',
      category: 'Nature',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[rgb(var(--color-ivory))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Moments & Memories</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Experience the beauty of Wild Chemes through the eyes of our guests and the lens of nature.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-deep-forest))]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[rgb(var(--color-golden))]" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                  {image.category}
                </span>
                <span className="text-[rgb(var(--color-ivory))]" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                  {image.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgb(var(--color-deep-forest))]/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 p-2 bg-[rgb(var(--color-ivory))] rounded-full hover:bg-[rgb(var(--color-golden))] transition-colors"
            >
              <X className="w-6 h-6 text-[rgb(var(--color-deep-forest))]" />
            </button>

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <ImageWithFallback
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-[rgb(var(--color-golden))]" style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                  {galleryImages[selectedImage].category}
                </p>
                <p className="text-[rgb(var(--color-ivory))]" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Guest Memory Wall CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[rgb(var(--color-earth-green))]/10 to-[rgb(var(--color-sage))]/10 rounded-lg p-8 text-center"
        >
          <h4 className="text-[rgb(var(--color-earth-green))] mb-4">Share Your Wild Chemes Story</h4>
          <p className="text-[rgb(var(--color-earth-brown))] mb-6" style={{ fontSize: '1.05rem' }}>
            Guests are invited to contribute their photos and testimonials to our Memory Wall. 
            Celebrate your connection with Sri Lankan nature and inspire future travelers.
          </p>
          <button className="px-8 py-3 bg-[rgb(var(--color-earth-green))] text-[rgb(var(--color-ivory))] rounded-full hover:bg-[rgb(var(--color-deep-forest))] transition-all duration-300" style={{ fontWeight: 500 }}>
            Upload Your Memories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
