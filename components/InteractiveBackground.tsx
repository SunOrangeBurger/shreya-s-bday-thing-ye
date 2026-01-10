import React, { useEffect} from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Heart, Star, Sparkles, Gift } from 'lucide-react';

const InteractiveBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving Spotlight Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[100px] opacity-10"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Floating Elements with Parallax (Inverse movement) */}
      <motion.div 
        className="absolute top-1/4 left-1/4 text-[#7F1D1D] opacity-10"
        style={{ x: useSpring(useMotionValue(0), springConfig), y: useSpring(useMotionValue(0), springConfig) }}
        animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 right-1/4 text-[#064E3B] opacity-10"
        animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star size={64} fill="currentColor" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 right-10 text-[#D4AF37] opacity-20"
        animate={{ 
            rotate: 360 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={56} />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-10 text-[#7F1D1D] opacity-10"
         animate={{ 
            y: [0, -15, 0] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Gift size={40} />
      </motion.div>
      
      {/* Random small particles */}
       <div className="absolute top-20 right-1/3 text-[#D4AF37] opacity-15 animate-pulse">
           <Star size={24} />
       </div>
       <div className="absolute bottom-1/2 left-20 text-[#064E3B] opacity-10">
           <Heart size={32} />
       </div>
    </div>
  );
};

export default InteractiveBackground;
