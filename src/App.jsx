import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScratchReveal from './components/ScratchReveal';
import Hero from './components/Hero';
import TopProblems from './components/TopProblems';
import ProblemGrid from './components/ProblemGrid';
import StartBuilding from './components/StartBuilding';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import StatsBar from './components/StatsBar';

function App() {
  const [showHero, setShowHero] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#050505] font-sans">
      <div className="noise-overlay" />
      <AnimatePresence mode="wait">
        {!showHero ? (
          <motion.div 
            key="scratch"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 w-full h-screen z-50"
          >
            <ScratchReveal onComplete={() => setShowHero(true)} />
          </motion.div>
        ) : (
          <motion.main 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full flex flex-col"
          >
            <Navbar />
            
            {/* The Hero takes up the first viewport */}
            <div className="relative w-full h-screen shrink-0">
              <Hero />
            </div>
            
            <StatsBar />

            {/* Scrollable sections below */}
            <TopProblems />
            <ProblemGrid />
            <StartBuilding />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
