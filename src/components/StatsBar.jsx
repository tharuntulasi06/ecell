import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
  return (
    <div className="w-full bg-[#0a0a0a] py-6 md:py-8 z-20 relative border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
        
        {/* Stat 1 */}
        <div className="flex items-center gap-4 md:px-12 md:border-r border-white/20 w-full md:w-auto justify-center md:justify-start">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="text-white text-sm md:text-base font-normal leading-[1.15] uppercase tracking-wide">
            <span className="font-bold text-[15px] md:text-[18px]">1,000+</span> <br/> VERIFIED PROBLEMS
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-4 md:px-12 md:border-r border-white/20 w-full md:w-auto justify-center md:justify-start">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div className="text-white text-sm md:text-base font-normal leading-[1.15] uppercase tracking-wide">
            <span className="font-bold text-[15px] md:text-[18px]">FROM 10K+ STUDENTS</span> <br/> AND COUNTING
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center gap-4 md:px-12 w-full md:w-auto justify-center md:justify-start">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z"></path>
            </svg>
          </div>
          <div className="text-white text-sm md:text-base font-normal leading-[1.15] uppercase tracking-wide">
            <span className="font-bold text-[15px] md:text-[18px]">AI-POWERED</span> <br/> CURATION
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsBar;
