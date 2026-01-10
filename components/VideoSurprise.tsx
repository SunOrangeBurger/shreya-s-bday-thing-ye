import React, { useRef, useEffect, useState } from 'react';

const YOUTUBE_VIDEO_ID = 'PASTE_YOUR_VIDEO_ID_HERE';

const VideoSurprise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.7) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] border-4 border-[#D4AF37]"
    >
      {shouldLoad ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/3HKwijVj3Yg?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
          title="Birthday Surprise Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        /* Pre-load poster state */
        <div className="w-full h-full flex flex-col items-center justify-center bg-black text-[#D4AF37]">
          <p className="font-['Playfair_Display'] text-2xl mb-2">
            Final Reel
          </p>
          <p className="text-sm opacity-70">
            Scroll a little more…
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoSurprise;
