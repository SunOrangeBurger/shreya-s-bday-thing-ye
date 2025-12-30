import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { SURPRISE_VIDEO_URL } from '../constants';

const VideoSurprise: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              // Auto-play might fail without interaction
              console.log("Autoplay prevented by browser");
            });
          } else if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.7 } //trigger when 70% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] border-4 border-[#D4AF37]"
    >
      <video
        ref={videoRef}
        src={SURPRISE_VIDEO_URL}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted={isMuted}
      />
      
      {/* Custom Controls Overlay */}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300 flex items-center justify-center group">
        {!isPlaying && (
           <button 
             onClick={togglePlay}
             className="bg-[#D4AF37] text-[#7F1D1D] p-6 rounded-full shadow-lg transform transition-transform hover:scale-110 active:scale-95"
           >
             <Play size={48} fill="currentColor" />
           </button>
        )}
        
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button 
             onClick={toggleMute}
             className="bg-black/50 text-white p-2 rounded-full hover:bg-[#7F1D1D] transition-colors"
           >
             {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
           </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSurprise;
