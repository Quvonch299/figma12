// Reviews.jsx
import React from "react";

export default function Reviews({ colorBorder, color, shadow }) {
  return (
    <div
      className="w-[396px] max-sm:w-[350px] rounded-[2px] border-2 p-6 bg-white"
      style={{
        borderColor: color,
        boxShadow: shadow,
      }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            style={{ fill: color }}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.245 11.5.49 6.91l6.56-.955L10 0l2.95 5.955 6.56.955-4.755 4.59 1.123 6.59z" />
          </svg>
        ))}
      </div>

      <p className="text-[24px] leading-[32px] font-normal mb-6">
        Honestly <span className="font-semibold">BEST EXPERIENCE</span> moving
        ever.
      </p>

      <p className="text-[18px] leading-[28px] text-gray-700">
        – Julie, San Francisco, CA
      </p>
    </div>
  );
}
