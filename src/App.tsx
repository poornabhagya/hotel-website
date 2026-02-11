import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { CharitySection } from './components/CharitySection';
import { GallerySection } from './components/GallerySection';
import { FoodSection } from './components/FoodSection';
import { OffersSection } from './components/OffersSection';
import { InquirySection } from './components/InquirySection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BirdSoundPlayer } from './components/BirdSoundPlayer';

export default function App() {
  const [birdSoundEnabled, setBirdSoundEnabled] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation 
        onBirdSoundToggle={setBirdSoundEnabled} 
        birdSoundEnabled={birdSoundEnabled} 
      />
      
      <Hero />
      <AboutSection />
      <RoomsSection />
      <ExperiencesSection />
      <CharitySection />
      <FoodSection />
      <OffersSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      
      <BirdSoundPlayer enabled={birdSoundEnabled} />
    </div>
  );
}