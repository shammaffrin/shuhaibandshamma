import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
//import LoadingScreen from './components/LoadingScreen';
//import OpeningScreen from './components/OpeningScreen';
import HeroSection from './components/HeroSection';
//import CoupleSection from './components/CoupleSection';
import WeddingDetails from './components/WeddingDetails';
//import CountdownTimer from './components/CountdownTimer';
//import GallerySection from './components/GallerySection';
import VenueSection from './components/VenueSection';
import DuaSection from './components/DuaSection';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';
import MusicToggle from './components/MusicToggle';

type Phase = 'main';

export default function App() {
  const [phase, setPhase] = useState<Phase>('main');

  return (
    <div className="min-h-screen bg-[#0A0702] overflow-x-hidden">
      {/* <AnimatePresence mode="wait">
        {phase === 'loading' && (
          <LoadingScreen key="loading" onComplete={() => setPhase('opening')} />
        )}
      </AnimatePresence> */}

      {/* <AnimatePresence mode="wait">
        {phase === 'opening' && (
          <OpeningScreen key="opening" onOpen={() => setPhase('main')} />
        )}
      </AnimatePresence> */}

      <AnimatePresence>
        {phase === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            {/* Global floating petals */}
            <FloatingPetals count={18} />

            {/* Main content */}
            <HeroSection />
            {/* <CoupleSection /> */}
            <WeddingDetails />
            {/* <CountdownTimer /> */}
            {/* <GallerySection /> */}
            <VenueSection />
            <DuaSection />
            <Footer />

            {/* Music toggle */}
            <MusicToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
