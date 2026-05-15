import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Add solid background if we've scrolled down a bit
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }

    // Hide if scrolling down past threshold, show if scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-[100] transition-colors duration-300 ${
        hasScrolled ? 'bg-[#050505]/95 backdrop-blur-md shadow-xl border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center">
        <img src="/E-cell.png" alt="E-Cell Logo" className="h-8 md:h-10 object-contain" />
      </div>
      <div className="hidden md:flex gap-8 text-white font-bold text-xs md:text-sm tracking-widest uppercase">
        <a href="#" className="hover:text-[#ea580c] transition-colors">Events</a>
        <a href="#" className="hover:text-[#ea580c] transition-colors">Incubation</a>
        <a href="#" className="hover:text-[#ea580c] transition-colors">Initiatives</a>
        <a href="#" className="hover:text-[#ea580c] transition-colors">About Us</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
