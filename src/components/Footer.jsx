import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-[50px] sm:text-[70px] md:text-[90px] font-black text-white tracking-tighter mb-8 leading-none">
            GET INVOLVED
          </h2>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-md transition-colors mb-16 md:mb-24 text-sm md:text-base tracking-wide">
            Share With A Founder
          </button>

          <div className="space-y-4 text-white/60 font-medium text-lg md:text-xl tracking-tight">
            <div className="flex items-center gap-4">
              <span>Stay updated</span>
              <div className="flex items-center gap-4 text-white/80">
                {/* Instagram Icon */}
                <svg className="w-6 h-6 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                {/* LinkedIn Icon */}
                <svg className="w-6 h-6 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                {/* X Icon */}
                <svg className="w-5 h-5 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Visit</span>
              <a href="#" className="underline hover:text-white transition-colors decoration-1 underline-offset-4">ecell.in</a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-start">
              <span className="text-[80px] md:text-[140px] font-black text-white leading-[0.75] tracking-tighter uppercase">
                BUILD
              </span>
              <div className="border-[3px] border-white text-white px-2 py-1 transform -rotate-6 ml-2 md:ml-4 mt-2 md:mt-4">
                <span className="text-xl md:text-3xl font-black lowercase tracking-tighter leading-none block">the</span>
              </div>
            </div>
            <span className="text-[80px] md:text-[140px] font-black text-white leading-[0.8] tracking-tighter uppercase mt-2">
              FUTURE
            </span>
            <div className="text-white text-xl md:text-2xl font-bold flex items-center gap-2 mt-4 md:mt-6">
              <span className="text-base font-medium lowercase">by</span>
              <div className="flex items-center gap-1 italic">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ea580c] skew-x-[-15deg]"></div>
                E-Cell
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
