import React from 'react';
import { FilmReelProps } from '../types';

const FilmReel: React.FC<FilmReelProps> = ({ images, direction = 'left', speed = 'normal' }) => {
  // Duplicate images to create seamless loop effect
  const reelImages = [...images, ...images, ...images];

  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  // Speed adjustment (using inline style for duration override if needed, but css handles defaults)
  const durationStyle = speed === 'slow' ? { animationDuration: '60s' } : speed === 'fast' ? { animationDuration: '25s' } : { animationDuration: '40s' };

  return (
    <div className="relative w-full overflow-hidden py-8 bg-[#1A1A1A] border-y-8 border-[#D4AF37] shadow-2xl">
      {/* Film Perforations Top */}
      <div className="absolute top-2 left-0 w-full h-4 flex space-x-4 px-2 z-10 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`perf-top-${i}`} className="min-w-[12px] h-[16px] bg-white/10 rounded-sm"></div>
        ))}
      </div>

      <div className="w-full overflow-hidden">
        <div 
          className={`flex gap-8 w-max ${animationClass}`}
          style={durationStyle}
        >
          {reelImages.map((img, index) => (
            <div 
              key={`${img.id}-${index}`} 
              className="relative w-[280px] h-[380px] bg-black p-4 flex-shrink-0 border-x-4 border-[#2A2A2A] shadow-inner"
            >
              <div className="w-full h-full overflow-hidden rounded-sm relative group">
                <img 
                  src={img.url} 
                  alt={img.caption || "Memory"} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-[#FDF2F8] font-serif italic text-lg">{img.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Film Perforations Bottom */}
      <div className="absolute bottom-2 left-0 w-full h-4 flex space-x-4 px-2 z-10 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`perf-bot-${i}`} className="min-w-[12px] h-[16px] bg-white/10 rounded-sm"></div>
        ))}
      </div>
    </div>
  );
};

export default FilmReel;
