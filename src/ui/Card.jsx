import React from 'react'

export default function Card({ Shadow, title, color,rasm }) {
  return (
    <div
      className="w-[248px] rounded-[2px] flex flex-col items-center transition-all duration-300 hover:translate-y-[-4px]"
      style={{
        boxShadow: Shadow,
        border: `2px solid ${color}`,
      }}
    >
      <img
       src={rasm}
        alt={rasm} />
      <p className="mt-[15px] mb-[19px] font-normal text-[17px] leading-[28px] tracking-normal text-center">
        {title}
      </p>
    </div>
  )
}
