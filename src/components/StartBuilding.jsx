import React from 'react';
import { motion } from 'framer-motion';

const StartBuilding = () => {
  return (
    <div className="relative w-full min-h-[550px] md:min-h-0 md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden py-16 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <img 
          src="/startupbackground.png" 
          alt="Start Building Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center pr-0 md:pr-12"
        >
          <h2 className="text-[50px] sm:text-[70px] lg:text-[100px] xl:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase text-center md:text-left drop-shadow-lg">
            START <br/> BUILDING <br/> NOW
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-8 lg:pl-12 border-l-0 md:border-l-4 border-transparent mt-8 md:mt-0"
        >
          <div className="text-white text-lg md:text-[20px] lg:text-[22px] font-medium leading-[1.4] max-w-[600px] tracking-tight drop-shadow-md text-center md:text-left">
            <p className="mb-6 lg:mb-8">
              The world is full of problems worth solving. <br className="hidden md:block"/>
              Now, the biggest challenges are all in one place. <br className="hidden md:block"/>
              This is E-Cell's launchpad for the next generation of founders <br className="hidden md:block"/>
              to step up and build what comes next.
            </p>
            <p>
              Ready to start your journey? <br className="hidden md:block"/>
              Start building right here on campus.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StartBuilding;
