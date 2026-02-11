import { motion, AnimatePresence } from 'motion/react';
import { Leaf, UtensilsCrossed, Heart, FileText, Download, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function FoodSection() {

  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const dishes = [
    {
      name: 'Rice & Curry',
      origin: 'Sinhala Traditional',
      description: 'Aromatic rice served with vegetable curries, dhal, and sambols made from our organic garden.',
      ingredients: 'Organic vegetables, Sri Lankan spices, coconut',
    },
    {
      name: 'Kottu Roti',
      origin: 'Tamil Street Food',
      description: 'Chopped flatbread stir-fried with vegetables and our secret blend of spices.',
      ingredients: 'Homemade roti, fresh vegetables, curry leaves',
    },
    {
      name: 'String Hoppers',
      origin: 'Traditional Breakfast',
      description: 'Delicate rice noodle nests served with coconut sambol and lentil curry.',
      ingredients: 'Rice flour, coconut, homegrown lentils',
    },
    {
      name: 'Lamprais',
      origin: 'Dutch-Burgher Heritage',
      description: 'Rice cooked in stock, wrapped in banana leaf with curry and sambol.',
      ingredients: 'Basmati rice, spices, banana leaf',
    },
  ];

  return (
    <section id="food" className="py-24 bg-[rgb(var(--color-beige))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[rgb(var(--color-earth-green))] mb-4">Food & Heritage</h2>
          <div className="w-24 h-1 bg-[rgb(var(--color-golden))] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[rgb(var(--color-earth-brown))]">
            Experience the unity of Sri Lankan culture through authentic Sinhala and Tamil cuisine, 
            crafted entirely from natural, locally-sourced ingredients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[rgb(var(--color-earth-green))] mb-6">A Culinary Journey Through Sri Lanka</h3>
            <p className="text-[rgb(var(--color-earth-brown))] mb-4">
              Our kitchen is a celebration of Sri Lankan diversity. Every dish tells a story—from ancient 
              Sinhala recipes passed down through generations to vibrant Tamil flavors that awaken the senses.
            </p>
            <p className="text-[rgb(var(--color-earth-brown))] mb-6">
              We source ingredients from our organic garden and local farmers who practice sustainable 
              agriculture. No preservatives, no artificial flavors—just the pure, authentic taste of Sri Lanka.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-[rgb(var(--color-ivory))] rounded-lg">
                <Leaf className="w-6 h-6 text-[rgb(var(--color-sage))] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Timeless Traditions, International Flavors</h5>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                    Savor the authenticity of heritage cooking methods alongside a sophisticated global menu. From open fires to fine dining, every meal tells a story of culture and connection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[rgb(var(--color-ivory))] rounded-lg">
                <UtensilsCrossed className="w-6 h-6 text-[rgb(var(--color-terracotta))] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Nourishment for the Soul</h5>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                    Menus curated not just for taste, but for wellness. Enjoy balanced, wholesome meals designed to energize your body and harmonize with your natural rhythms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[rgb(var(--color-ivory))] rounded-lg">
                <Heart className="w-6 h-6 text-[rgb(var(--color-golden))] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-[rgb(var(--color-earth-green))] mb-1">Cultural Unity</h5>
                  <p className="text-[rgb(var(--color-earth-brown))]" style={{ fontSize: '0.9rem' }}>
                    Sri Lankan cuisines served side by side in harmony
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1619714604987-2f6caead7850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYW4lMjBmb29kJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYzMDM1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Traditional Sri Lankan cuisine"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        

        {/* Culinary Philosophy Section */}
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[rgb(var(--color-earth-green))]/10 to-[rgb(var(--color-terracotta))]/10 rounded-lg p-8 text-center"
        >
          <h4 className="text-[rgb(var(--color-earth-green))] mb-4">Our Culinary Philosophy</h4>
          <p className="max-w-3xl mx-auto text-[rgb(var(--color-earth-brown))] mb-6" style={{ fontSize: '1.05rem' }}>
            We prioritize natural sourcing and traditional methods to ensure every bite supports your vitality. Experience a culinary rhythm designed to align with your body.
          </p>
          <button
            onClick={() => setIsPdfOpen(true)}
            className="inline-flex items-center space-x-2 bg-[rgb(var(--color-earth-green))] text-white px-8 py-3 rounded-lg hover:bg-[rgb(var(--color-earth-green))]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            <span>Read Our Food Story</span>
          </button>
        </motion.div>
      </div>

{/* PDF Modal Popup */}
        <AnimatePresence>
          {isPdfOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
              onClick={() => setIsPdfOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-2xl w-full max-w-3xl h-[98vh] sm:h-[95vh] flex flex-col border-2 border-[rgb(var(--color-earth-green))]/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-[rgb(var(--color-earth-green))]/95 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
                  {/* Mobile Layout: Stacked */}
                  <div className="flex md:hidden flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-white" />
                        <h3 className="text-white text-sm">The Wisdom of the Table</h3>
                      </div>
                      <button
                        onClick={() => setIsPdfOpen(false)}
                        className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors duration-300"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <a
                      href="/menu.pdf"
                      download
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[rgb(var(--color-earth-green))] transition-colors duration-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>

                  {/* Desktop Layout: Horizontal */}
                  <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-white" />
                      <h3 className="text-white">The Wisdom of the Table</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Download Button */}
                      <a
                        href="/menu.pdf"
                        download
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[rgb(var(--color-earth-green))] transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                      {/* Close Button */}
                      <button
                        onClick={() => setIsPdfOpen(false)}
                        className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* PDF Viewer Area */}
                <div className="flex-1 p-2 sm:p-4 bg-white rounded-b-lg overflow-hidden">
                  <div className="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-inner overflow-auto" style={{ minHeight: '400px' }}>
                    <iframe
                      src="/documents/Food_Story.pdf#toolbar=0"
                      className="w-full h-full rounded-lg"
                      style={{ minHeight: '400px' }}
                      title="The Wisdom of the Table"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
}
