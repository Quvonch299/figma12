import React from 'react';

export default function Section7() {
  return (
    <div className="bg-[#F6CFCA] py-16 md:py-24 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[88px] text-center mb-10 leading-snug md:leading-[96px] font-bold">
        Ease the pain of <br /> moving from <br /> apartment to <br /> apartment.
      </h2>

      {/* Slider container */}
      <div className="relative w-full overflow-hidden">
        {/* Slider track */}
        <div className="flex animate-marquee gap-6 sm:gap-8 md:gap-12">
          {[...Array(19)].map((_, i) => (
            <img
              key={i}
              src="/icon/Vector.svg"
              alt={`logo-${i}`}
              className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Tailwind CSS inline style for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
