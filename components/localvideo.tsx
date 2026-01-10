import React from 'react';

type Props = {
  src: string;
};

const LocalVideoSurprise: React.FC<Props> = ({ src }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] border-4 border-[#D4AF37]">
      <video
        src={src}
        controls
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LocalVideoSurprise;
