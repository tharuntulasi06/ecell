import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const problems = [
  {
    category: "Funding",
    question: "Why is securing early-stage seed funding still a massive hurdle for student entrepreneurs with scalable prototypes?",
    theme: "white",
    span: 2
  },
  {
    category: "Networking",
    question: "Why do student founders struggle to connect with experienced industry mentors outside their immediate college circles?",
    theme: "orange",
    span: 2
  },
  {
    category: "Team Building",
    question: "Why is finding a technical co-founder who shares your vision so frustrating?",
    theme: "orange",
    span: 1
  },
  {
    category: "Product",
    question: "Why do most incredible hackathon projects die out before ever reaching real users?",
    theme: "white",
    span: 1
  },
  {
    category: "Incubation",
    question: "Why do student startups lack access to affordable workspace and rapid-prototyping tools?",
    theme: "dark",
    span: 1
  },
  {
    category: "Marketing",
    question: "Why do incredible campus products fail to acquire their first 100 paying customers?",
    theme: "orange",
    span: 1
  },
  {
    category: "Legal",
    question: "Why is navigating startup equity and basic incorporation so confusing for first-time builders?",
    theme: "dark",
    span: 1
  },
  {
    category: "Tech",
    question: "Why is scaling a college project to handle production-level traffic so daunting?",
    theme: "orange",
    span: 1
  },
  {
    category: "Operations",
    question: "Why do young founders burn out trying to balance a full-time degree with running a startup?",
    theme: "white",
    span: 1
  },
  {
    category: "Ecosystem",
    question: "Why isn't there a unified platform bridging the gap between campus talent and angel investors?",
    theme: "dark",
    span: 1
  }
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity">
    <circle cx="12" cy="12" r="10" strokeWidth="1"/>
    <path d="M10 8l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MobileDeck = () => {
  const [cards, setCards] = useState(problems);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.offset.x > swipeThreshold) {
      setCards((prev) => {
        const newCards = [...prev];
        if (info.offset.x < -swipeThreshold) {
          // Swipe left
          const frontCard = newCards.shift();
          newCards.push(frontCard);
        } else {
          // Swipe right
          const backCard = newCards.pop();
          newCards.unshift(backCard);
        }
        return newCards;
      });
    }
  };

  return (
    <div className="w-full flex md:hidden flex-col items-center justify-center relative min-h-[550px] overflow-visible py-8">
      <div className="relative w-[300px] sm:w-[340px] h-[400px]">
        <AnimatePresence>
          {cards.map((prob, diff) => {
            // Render only top 7 cards for performance
            if (diff > 6) return null;

            const isWhite = prob.theme === 'white';
            const isOrange = prob.theme === 'orange';
            const isDark = prob.theme === 'dark';

            let rotate = 0;
            let zIndex = 50 - diff;
            
            if (diff > 0) {
              const base = Math.ceil(diff / 2) * 8; 
              rotate = diff % 2 === 0 ? -base : base;
            }

            return (
              <motion.div
                key={prob.question}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  rotate, 
                  scale: 1, 
                  opacity: 1
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`
                  absolute top-0 left-0 w-full h-full p-8 rounded-[32px] flex flex-col justify-center
                  shadow-2xl border border-white/10 ${diff === 0 ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}
                  ${isWhite ? 'bg-[#f4f4f5] text-black' : ''}
                  ${isOrange ? 'bg-[#ea580c] text-white' : ''}
                  ${isDark ? 'bg-[#222222] text-white' : ''}
                `}
                style={{ zIndex }}
                drag={diff === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={diff === 0 ? handleDragEnd : undefined}
                whileDrag={{ scale: 1.05 }}
              >
                <div className="mb-6 flex justify-start">
                   <span className={`
                    text-sm font-bold px-4 py-1.5 rounded-lg border
                    ${isWhite ? 'bg-white border-black/10 text-black' : ''}
                    ${isOrange || isDark ? 'bg-transparent border-white/20 text-white' : ''}
                  `}>
                    {prob.category}
                  </span>
                </div>
                <h3 className={`text-[26px] font-medium tracking-tight leading-[1.1] ${isWhite ? '' : 'text-white/95'}`}>
                  {prob.question}
                </h3>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-16 text-white/50 text-base tracking-widest font-medium flex items-center gap-4">
        <span>&lt;</span>
        <span>Swipe</span>
        <span>&gt;</span>
      </div>
    </div>
  );
};

const ProblemGrid = () => {
  return (
    <div className="w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[50px] sm:text-6xl md:text-[100px] font-black text-white uppercase tracking-tighter mb-4 md:mb-12 leading-none text-center md:text-left">
          TOP 10 <br className="block md:hidden"/> PROBLEMS
        </h2>

        {/* Mobile Deck View */}
        <MobileDeck />

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {problems.map((prob, idx) => {
            const isWhite = prob.theme === 'white';
            const isOrange = prob.theme === 'orange';
            const isDark = prob.theme === 'dark';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`
                  relative flex flex-col justify-between p-6 md:p-8 rounded-xl group cursor-pointer hover:scale-[1.02] transition-transform duration-300
                  ${prob.span === 2 ? 'xl:col-span-2 min-h-[200px] md:min-h-[220px]' : 'xl:col-span-1 min-h-[260px] md:min-h-[300px]'}
                  ${isWhite ? 'bg-white text-black' : ''}
                  ${isOrange ? 'bg-[#ea580c] text-white' : ''}
                  ${isDark ? 'bg-[#333333] text-white' : ''}
                `}
              >
                {/* Top Row: Badge & Icon */}
                <div className="flex justify-between items-start mb-12">
                  <span className={`
                    text-xs font-bold px-4 py-1.5 rounded-md
                    ${isWhite ? 'bg-gray-100 text-gray-800' : ''}
                    ${isOrange || isDark ? 'bg-white text-black' : ''}
                  `}>
                    {prob.category}
                  </span>
                  <ArrowIcon />
                </div>

                {/* Bottom Row: Question */}
                <p className={`text-xl md:text-[22px] leading-[1.2] tracking-tight ${isWhite ? 'font-medium' : 'font-normal text-white/95'}`}>
                  {prob.question}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemGrid;
