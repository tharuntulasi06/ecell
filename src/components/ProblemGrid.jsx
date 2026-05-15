import React from 'react';
import { motion } from 'framer-motion';

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

const ProblemGrid = () => {
  return (
    <div className="w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-6xl md:text-[100px] font-black text-white uppercase tracking-tighter mb-12 leading-none">
          TOP 10 PROBLEMS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
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
