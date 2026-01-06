import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film } from 'lucide-react';

import FilmReel from './components/FilmReel';
import VideoSurprise from './components/VideoSurprise';
import MessageRow from './components/MessageRow';
import InteractiveBackground from './components/InteractiveBackground';

import { 
  MEMORIES_ROW_1, MEMORIES_ROW_2, MEMORIES_ROW_3, MEMORIES_ROW_4, MEMORIES_ROW_5,
  MESSAGES_ROW_1, MESSAGES_ROW_2, MESSAGES_ROW_3, MESSAGES_ROW_4, MESSAGES_ROW_5
} from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen font-['Lato'] overflow-x-hidden bg-[#FDF2F8]">
      
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Hero Section */}
      <motion.section 
        className="h-screen flex flex-col items-center justify-center relative z-10 px-6 text-center"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-[#7F1D1D] mb-4 flex justify-center">
            <Film size={48} className="animate-bounce" />
          </div>
          <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl text-[#064E3B] mb-6 tracking-tight">
            Happy Birthday <br/> <span className="text-[#D4AF37] italic">Shreya</span>
          </h1>
          <div className="w-24 h-1 bg-[#7F1D1D] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-[#064E3B]/80 font-light max-w-lg mx-auto">
            A cinematic journey through your beautiful moments.
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 flex flex-col items-center text-[#7F1D1D]/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm uppercase tracking-widest mb-2">Scroll to Begin</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#7F1D1D] to-transparent"></div>
        </motion.div>
      </motion.section>

      {/* Intro Text Section */}
      <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-[#FDF2F8] to-white/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl text-[#7F1D1D] mb-8">
              A Story in Frames
            </h2>
            <p className="text-lg text-[#064E3B] leading-relaxed mb-8">
              To the girl who lights up every room she enters. Here are the chapters of your amazing life so far, accompanied by words from those who love you most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CHAPTER 1 --- */}
      <section className="py-12 relative z-10 bg-[#1A1A1A] text-white">
        <div className="absolute top-[-20px] left-0 w-full h-6 bg-gradient-to-b from-[#FDF2F8] to-[#1A1A1A]"></div>
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
           <h3 className="font-['Playfair_Display'] text-[#D4AF37] text-2xl italic">idk what to put here im workshopping how do we segment this</h3>
        </div>
        <FilmReel images={MEMORIES_ROW_1} direction="left" speed="slow" />
      </section>
      
      <MessageRow messages={MESSAGES_ROW_1} title="Sendable text messages" />


      {/* --- CHAPTER 2 --- */}
      <section className="py-12 relative z-10 bg-[#7F1D1D] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
           <h3 className="font-['Playfair_Display'] text-[#FDF2F8] text-2xl italic">Unforgettable Adventures but forgettable caption i wanted an inside joke here</h3>
        </div>
        <FilmReel images={MEMORIES_ROW_2} direction="right" speed="normal" />
      </section>

      <MessageRow messages={MESSAGES_ROW_2} title="Friends Forever" />


      {/* --- CHAPTER 3 --- */}
      <section className="py-12 relative z-10 bg-[#064E3B] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
           <h3 className="font-['Playfair_Display'] text-[#D4AF37] text-2xl italic">Growing & Glowing</h3>
        </div>
        <FilmReel images={MEMORIES_ROW_3} direction="left" speed="fast" />
      </section>

      <MessageRow messages={MESSAGES_ROW_3} title="Love & Laughter" />


      {/* --- CHAPTER 4 --- */}
      <section className="py-12 relative z-10 bg-[#1A1A1A] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
           <h3 className="font-['Playfair_Display'] text-[#FDF2F8] text-2xl italic">Milestones</h3>
        </div>
        <FilmReel images={MEMORIES_ROW_4} direction="right" speed="slow" />
      </section>

      <MessageRow messages={MESSAGES_ROW_4} title="Cheers to You" />


      {/* --- CHAPTER 5 --- */}
      <section className="py-12 relative z-10 bg-[#7F1D1D] text-white mt-12">
         <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
           <h3 className="font-['Playfair_Display'] text-[#D4AF37] text-2xl italic">The Best Is Yet To Come</h3>
        </div>
        <FilmReel images={MEMORIES_ROW_5} direction="left" speed="normal" />
        <div className="absolute bottom-[-20px] left-0 w-full h-6 bg-gradient-to-t from-[#FDF2F8] to-[#7F1D1D]"></div>
      </section>

      <MessageRow messages={MESSAGES_ROW_5} title="Final Wishes" />


      {/* Final Surprise Section */}
      <section className="py-32 px-6 relative z-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-[#D4AF37]/10 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center"
        >
          <div className="mb-12">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#7F1D1D] mb-4">
              One Last Surprise...
            </h2>
            <p className="text-[#064E3B] text-lg">
              A little video to wrap up the celebration.
            </p>
          </div>
          
          <VideoSurprise />
          
          <div className="mt-16 space-y-4">
             <p className="font-['Playfair_Display'] text-3xl text-[#D4AF37] font-bold">
               Happy Birthday Shreya!
             </p>
             <p className="text-[#064E3B]/60 text-sm">
               Here's to a year as wonderful as you are.
             </p>
          </div>
        </motion.div>
      </section>
      
      <footer className="py-8 text-center text-[#064E3B]/40 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Celebrating Shreya</p>
      </footer>

    </div>
  );
};

export default App;
