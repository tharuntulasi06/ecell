import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const POSTERS = [
  "GOT A CRAZY STARTUP IDEA?",
  "WHO IS YOUR NEXT CO-FOUNDER?",
  "READY TO PITCH YOUR VISION?",
  "FROM DORM ROOM TO UNICORN.",
  "WHAT PROBLEM ARE YOU SOLVING?",
  "BUILD. MEASURE. LEARN."
];

const PREDEFINED_POSITIONS = [
  { x: '-35vw', y: '-25vh', rotation: -15, scale: 0.9, isOrange: false },
  { x: '-25vw', y: '20vh', rotation: 10, scale: 1.05, isOrange: true },
  { x: '-15vw', y: '-35vh', rotation: 25, scale: 0.85, isOrange: true },
  { x: '-10vw', y: '30vh', rotation: -20, scale: 0.95, isOrange: false },
  { x: '15vw', y: '-30vh', rotation: -10, scale: 1, isOrange: true },
  { x: '35vw', y: '-15vh', rotation: 15, scale: 0.9, isOrange: false },
  { x: '25vw', y: '20vh', rotation: -5, scale: 1.1, isOrange: true },
  { x: '10vw', y: '35vh', rotation: 20, scale: 0.85, isOrange: false },
  { x: '-5vw', y: '15vh', rotation: -12, scale: 1, isOrange: true },
  { x: '5vw', y: '-15vh', rotation: 8, scale: 0.95, isOrange: false },
  { x: '-42vw', y: '5vh', rotation: 5, scale: 0.8, isOrange: true },
  { x: '42vw', y: '10vh', rotation: -15, scale: 0.9, isOrange: true },
];

const generatePosters = () => {
  return PREDEFINED_POSITIONS.map((pos, i) => ({
    id: i,
    text: POSTERS[i % POSTERS.length],
    ...pos,
    delay: Math.random() * 0.3
  }));
};

const ScratchReveal = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [posters, setPosters] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isRevealed) {
      setPosters(generatePosters());
      
      // Trigger transition to Hero page after 3 seconds
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    const renderCanvas = () => {
      // Use offsetWidth/Height to prevent getting distorted sizes during render/animation
      canvas.width = canvas.offsetWidth || 300;
      canvas.height = canvas.offsetHeight || 350;
      
      const img = new window.Image();
      img.src = '/scratchcard.png';
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const width = canvas.width;
        const height = canvas.height;
        
        // Re-draw the center logo and text in case scratchcard.png is blank
        ctx.font = '700 14px Inter';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('SCRATCH TO REVEAL', width / 2, height - 40);
        


        // Setup brush for continuous smooth scratching
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 60; // Thick smooth brush
      };
    };

    renderCanvas();
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    const getCoordinates = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
      const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;
      
      // Calculate CSS scaling offset so the brush perfectly aligns with the mouse
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    };

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x;
      lastY = y;
      
      checkReveal();
    };

    let lastCheck = 0;
    const checkReveal = () => {
      const now = Date.now();
      // Throttle heavy image processing to every 150ms
      if (now - lastCheck < 150) return;
      lastCheck = now;

      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let transparent = 0;
        
        // Skip pixels to drastically improve performance (checking every ~16th pixel)
        const step = 64; 
        for (let i = 3; i < pixels.length; i += step) {
          if (pixels[i] < 128) transparent++;
        }
        
        const percentage = (transparent / (pixels.length / step)) * 100;
        if (percentage > 35) {
          setIsRevealed(true);
        }
      } catch(e) {}
    };

    const handleStart = (e) => {
      isDrawing = true;
      const { x, y } = getCoordinates(e);
      lastX = x;
      lastY = y;
      
      // Stamp a starting dot
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMove = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const { x, y } = getCoordinates(e);
      scratch(x, y);
    };

    const handleEnd = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('mouseleave', handleEnd);
    
    canvas.addEventListener('touchstart', handleStart, { passive: false });
    canvas.addEventListener('touchmove', handleMove, { passive: false });
    canvas.addEventListener('touchend', handleEnd);

    return () => {
      canvas.removeEventListener('mousedown', handleStart);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('mouseleave', handleEnd);
      
      canvas.removeEventListener('touchstart', handleStart);
      canvas.removeEventListener('touchmove', handleMove);
      canvas.removeEventListener('touchend', handleEnd);
    };
  }, [isRevealed]);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center bg-[#111]"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      {/* Background Typography */}
      <motion.div 
        className="absolute inset-0 flex items-center opacity-[0.08] pointer-events-none overflow-hidden"
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <h1 className="text-[100px] md:text-[130px] font-black tracking-tighter text-white uppercase leading-none pr-8">
            SCRATCH SCRATCH SCRATCH SCRATCH SCRATCH SCRATCH SCRATCH
          </h1>
          <h1 className="text-[100px] md:text-[130px] font-black tracking-tighter text-white uppercase leading-none pr-8">
            SCRATCH SCRATCH SCRATCH SCRATCH SCRATCH SCRATCH SCRATCH
          </h1>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {!isRevealed ? (
          <motion.div 
            key="scratch-card"
            exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[300px] h-[350px] md:w-[400px] md:h-[450px]"
            whileHover={{ scale: 1.02 }}
          >
            {/* Base Card under the scratch layer */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
              {/* Use inverted scratchcard.png to perfectly match the transparent edges */}
              <img 
                src="/scratchcard.png" 
                alt="base card" 
                className="absolute inset-0 w-full h-full object-fill pointer-events-none brightness-0 invert" 
              />
              <h2 className="relative z-0 pointer-events-none text-4xl font-black text-center text-[#ea580c] p-8 tracking-tighter uppercase leading-[0.9]">
                Welcome To<br/>E-Cell
              </h2>
            </div>
            
            {/* The Canvas on top */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 z-20 w-full h-full cursor-crosshair touch-none transition-shadow duration-300 shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:shadow-[0_0_80px_rgba(249,115,22,0.6)]"
            />
          </motion.div>
        ) : (
          <motion.div 
            key="revealed-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            {/* Revealed Background Text */}
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-center text-5xl md:text-8xl font-black text-white/90 tracking-tighter max-w-[80vw] z-0 leading-[0.85] pointer-events-auto"
              style={{
                transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`
              }}
            >
              <span className="text-white/60">WHERE FOUNDERS</span> <br /> 
              <span className="text-electricOrange">ARE FORGED</span>
            </motion.h1>

            {/* Floating Posters */}
            {posters.map((poster, idx) => (
              <motion.div
                key={poster.id}
                className="absolute pointer-events-none"
                style={{
                  x: mousePos.x * (idx % 2 === 0 ? 0.3 : -0.3),
                  y: mousePos.y * (idx % 2 === 0 ? 0.3 : -0.3)
                }}
              >
                <motion.div
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0.2, 
                    opacity: 0, 
                    rotate: 0,
                    filter: 'blur(20px)'
                  }}
                  animate={{ 
                    x: poster.x, 
                    y: poster.y, 
                    scale: poster.scale, 
                    opacity: 1, 
                    rotate: poster.rotation,
                    filter: 'blur(0px)'
                  }}
                  transition={{ 
                    duration: 1.4, 
                    delay: poster.delay,
                    type: 'spring',
                    stiffness: 40,
                    damping: 15,
                    mass: 1.2
                  }}
                  className={`relative w-[300px] h-[340px] flex flex-col justify-start items-start shadow-2xl z-10 pointer-events-auto cursor-pointer`}
                  whileHover={{ 
                    scale: poster.scale * 1.05, 
                    rotate: poster.rotation * 0.5, 
                    zIndex: 50,
                    transition: { duration: 0.4, ease: 'easeOut' }
                  }}
                >
                  {/* Background Image (scratchcard.png) for stamp edges */}
                  <img 
                    src="/scratchcard.png" 
                    alt="card background" 
                    className={`absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-lg ${poster.isOrange ? '' : 'brightness-0 invert'}`}
                  />
                  
                  {/* Content - increased padding so text stays inside stamp edge */}
                  <div className="relative z-10 p-12 flex flex-col h-full justify-center">
                    <h3 className={`text-[28px] font-black leading-[0.95] uppercase text-left tracking-tighter ${poster.isOrange ? 'text-white' : 'text-[#ea580c]'}`}>
                      {poster.text}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScratchReveal;
