import React from 'react';
import PhotoSphere from './PhotoSphere';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-orange-400 relative overflow-hidden flex">
      {/* PhotoSphere component on the left side */}
      <div className="flex-1">
        <PhotoSphere />
      </div>
      {/* Image on the right side, shifted slightly downward */}
      <div
        className="flex-none w-1/3 p-4 flex justify-center items-center relative mt-[10px] bg-[#f5f5dc] shadow-lg rounded-lg"
      >
        <Image
          src="/photo2.png"  // Ensure the correct path is used
          alt="photographer"
          width={500}  // Explicitly set the width
          height={500}  // Explicitly set the height
          className="rounded-[50%] bg-orange-400 mt-20"  
          priority  // Optimizes loading
        />
      </div>
    </div>
  );
};

export default HeroSection;
