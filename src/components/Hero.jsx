import React from 'react';
import { motion } from 'framer-motion';

const BACKGROUND_POSTERS = [
  { text: "HOW TO RAISE SEED FUNDING?", x: '-5vw', y: '-10vh', rotation: -12, scale: 0.8 },
  { text: "WHO IS YOUR NEXT CO-FOUNDER?", x: '70vw', y: '-15vh', rotation: 15, scale: 0.9 },
  { text: "IS YOUR IDEA SCALABLE?", x: '5vw', y: '65vh', rotation: 8, scale: 1 },
  { text: "READY TO PITCH YOUR VISION?", x: '75vw', y: '70vh', rotation: -10, scale: 0.85 },
  { text: "WHAT'S YOUR REVENUE MODEL?", x: '40vw', y: '-5vh', rotation: 5, scale: 0.7 },
  { text: "BUILD. MEASURE. LEARN.", x: '35vw', y: '80vh', rotation: -8, scale: 0.95 },
  { text: "FROM DORM ROOM TO UNICORN.", x: '-10vw', y: '30vh', rotation: 12, scale: 0.75 },
  { text: "DISRUPT THE STATUS QUO.", x: '85vw', y: '35vh', rotation: -15, scale: 0.8 },
];

const Hero = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#111]">
      
      {/* Dynamic Background Posters */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {BACKGROUND_POSTERS.map((poster, idx) => (
          <div 
            key={idx}
            className="absolute w-[300px] h-[350px] md:w-[400px] md:h-[450px] flex items-center justify-center p-8"
            style={{
              left: poster.x,
              top: poster.y,
              transform: `rotate(${poster.rotation}deg) scale(${poster.scale})`
            }}
          >
            <img 
              src="/scratchcard.png" 
              alt="poster bg" 
              className="absolute inset-0 w-full h-full object-fill brightness-0 invert opacity-[0.03]" 
            />
            <h2 className="relative z-10 text-4xl md:text-5xl font-black text-center text-white/10 uppercase leading-[0.9] tracking-tighter">
              {poster.text}
            </h2>
          </div>
        ))}
      </div>



      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white font-semibold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase mb-6 md:mb-8"
        >
          The Launchpad For Tomorrow's Unicorns
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="relative flex flex-col items-center mb-16 md:mb-20"
        >
          <h1 className="text-[40px] min-[400px]:text-[48px] sm:text-[70px] md:text-[120px] lg:text-[160px] font-black text-white tracking-tighter leading-none flex items-center justify-center w-full">
            <span>BUILD</span>
            <div className="bg-white text-black px-1.5 md:px-4 py-0.5 md:py-2 transform -rotate-3 mx-1.5 md:mx-4 border-2 border-white">
              <span className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-7xl font-bold lowercase tracking-tight">the</span>
            </div>
            <span>FUTURE</span>
          </h1>
          
          <div className="absolute right-0 sm:right-4 -bottom-6 md:-bottom-12 text-white text-base md:text-3xl font-bold flex items-center gap-1.5 md:gap-2 pr-2 md:pr-0">
            <span className="text-xs md:text-xl font-medium lowercase">by</span>
            <div className="flex items-center gap-1 md:gap-1.5 italic">
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#ea580c] skew-x-[-15deg]"></div>
              E-Cell
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button className="px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto rounded bg-[#ea580c] hover:bg-orange-600 text-white font-bold text-sm md:text-base tracking-wide transition-colors">
            Start Building Now
          </button>
          <button className="px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto rounded bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-sm md:text-base tracking-wide transition-colors">
            Explore Our Tracks
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
