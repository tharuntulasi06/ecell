import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TopProblems = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full bg-[#f3f4f6] h-auto py-16 md:py-20 relative overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 mb-8 md:mb-20 px-4 mt-12 md:mt-0">
        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black text-[#111] uppercase tracking-tighter text-center leading-[0.9]">
          FOUNDERS SPOKE. <br className="md:hidden" /> HERE'S HOW.
        </h2>
      </div>

      {/* Collage Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-[1000px] md:h-[550px] pointer-events-none">
        
        {/* Shape 1: Triangle */}
        <motion.div 
          className="absolute left-[5%] top-[2%] md:left-[2%] md:top-[15%] w-[280px] h-[260px] md:w-[380px] md:h-[340px] flex items-center justify-center pointer-events-auto"
          animate={{ x: mousePos.x * -1, y: mousePos.y * -1, rotate: -12 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          whileHover={{ scale: 1.05, rotate: -5 }}
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full drop-shadow-2xl text-[#222]">
            <polygon points="50,5 95,95 5,95" fill="currentColor" strokeLinejoin="round" strokeWidth="6" stroke="currentColor"/>
          </svg>
          <div className="relative z-10 w-full h-full flex flex-col justify-end pb-6 md:pb-8">
            <p className="text-white text-center font-black text-sm md:text-[18px] uppercase tracking-tight leading-[1.2] px-12 md:px-16">
              70%+ <br/> IDEAS <br/> DIE WITHOUT <br/> A PROPER <br/> LAUNCHPAD <br/> TODAY.
            </p>
          </div>
        </motion.div>

        {/* Asterisk Accent */}
        <motion.div 
          className="absolute left-[40%] top-[18%] md:left-[28%] md:top-[10%] text-[#ea580c] text-[120px] md:text-[200px] font-black leading-none drop-shadow-lg z-0"
          animate={{ x: mousePos.x * 2, y: mousePos.y * 2, rotate: 20 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          *
        </motion.div>

        {/* Shape 2: First Orange Block */}
        <motion.div 
          className="absolute right-[5%] top-[22%] md:left-[25%] md:top-[40%] md:right-auto w-[240px] h-[240px] md:w-[300px] md:h-[300px] flex items-center justify-center z-20 pointer-events-auto bg-[#ea580c] shadow-2xl"
          animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5, rotate: 10 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          <p className="relative z-10 text-white text-left font-black text-xl md:text-[26px] uppercase tracking-tighter p-6 md:p-8 leading-[1.05]">
            EVEN WEB3, <br/> DEEP-TECH, <br/> AND HARDWARE <br/> MADE THE <br/> LIST.
          </p>
        </motion.div>

        {/* Shape 3: House */}
        <motion.div 
          className="absolute left-[5%] top-[45%] md:left-auto md:right-[22%] md:top-[18%] w-[300px] h-[280px] md:w-[400px] md:h-[360px] flex flex-col items-center justify-center z-10 pointer-events-auto"
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5, rotate: 5 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          whileHover={{ scale: 1.05, rotate: 10 }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#222] drop-shadow-2xl" preserveAspectRatio="none">
            <path d="M50 15 L95 50 L85 50 L85 95 L15 95 L15 50 L5 50 Z M25 35 L25 10 L35 10 L35 25" fill="currentColor" strokeLinejoin="round" strokeWidth="4" stroke="currentColor"/>
          </svg>
          <div className="relative z-10 w-full h-full flex flex-col justify-end pb-8 md:pb-12 px-6">
            <p className="text-white text-center font-black text-lg md:text-[22px] uppercase tracking-tight leading-[1.1]">
              9,500+ <br/> STUDENTS FEEL <br/> THEY ARE <br/> MISSING OUT <br/> ON BUILDING
            </p>
          </div>
        </motion.div>

        {/* Shape 4: Tall Orange Block */}
        <motion.div 
          className="absolute right-[5%] top-[68%] md:right-[2%] md:top-[5%] w-[260px] h-[380px] md:w-[320px] md:h-[460px] flex items-center justify-center z-30 pointer-events-auto bg-[#ea580c] shadow-2xl"
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8, rotate: -8 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        >
          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-center w-full">
            <p className="text-white text-left font-black text-[22px] md:text-[28px] uppercase tracking-tighter leading-[1.05] mb-4 md:mb-6">
              2 OUT OF 3 <br/> STUDENT <br/> BUILDERS <br/> AREN'T <br/> FINDING THEIR <br/> CO-FOUNDER.
            </p>
            <div className="border-t-4 border-dashed border-white/40 pt-3 md:pt-4">
              <p className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-wider">
                *MAYBE E-CELL CAN CONNECT THEM?
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TopProblems;
