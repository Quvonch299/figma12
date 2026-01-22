import React from "react";
import Reviews from "../ui/Reviews";

export default function Section6() {
  return (
    <div className="bg-[#FBF8F5] pb-40">
      <h2 className="pt-36 md:pt-[143px] mb-16 md:mb-[63px] text-2xl sm:text-3xl md:text-[48px] text-center font-semibold">
        The Reviews are In
      </h2>

      <div className="max-w-7xl mx-auto flex  justify-center gap-6 sm:gap-8 md:gap-8 px-4">
        <Reviews colorBorder="#E9672B" color="#CBC6F4" shadow="8px -8px 0px 0px #CBC6F4" />
        <Reviews colorBorder="#225DCA" color="#E7CB43" shadow="8px -8px 0px 0px #E7CB43" />
        <Reviews colorBorder="#A2D4C5" color="#A2D4C5" shadow="8px -8px 0px 0px #A2D4C5" />
      </div>
    </div>
  );
}
