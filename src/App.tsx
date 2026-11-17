import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';

export default function App() {
  const [bookingContext, setBookingContext] = useState<{
    artist: string;
    idea: string;
    nonce: number;
  }>({
    artist: '',
    idea: '',
    nonce: 0,
  });

  const scrollToBooking = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArtist = (artistName: string) => {
    setBookingContext((prev) => ({
      artist: artistName,
      idea: prev.idea,
      nonce: prev.nonce + 1,
    }));
    scrollToBooking();
  };

  const handleBookStyle = (artistName: string, styleNote: string) => {
    setBookingContext((prev) => ({
      artist: artistName,
      idea: styleNote,
      nonce: prev.nonce + 1,
    }));
    scrollToBooking();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection onSelectArtist={handleSelectArtist} />
          <PortfolioSection onBookStyle={handleBookStyle} />
          <BookingSection
            key={bookingContext.nonce}
            preselectedArtist={bookingContext.artist}
            preselectedIdea={bookingContext.idea}
          />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
