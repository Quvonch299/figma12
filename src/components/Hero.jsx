import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[#FBF8F5]'>

      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center pt-[80px] md:pt-[112px] px-4 md:px-0 gap-8'>
        <div>
          <h1 className='font-normal text-4xl sm:text-5xl md:text-[64px] leading-snug sm:leading-tight md:leading-[76px] tracking-normal'>
            Curated and Convenient
          </h1>
          <p className='font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-normal mt-4 md:mt-[18px]'>
            We've built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”
          </p>
          <button className='w-[140px] sm:w-[150px] md:w-[154px] h-[50px] sm:h-[55px] md:h-[60px] bg-[#E9672B] rounded-[30px] mt-4 sm:mt-6 md:mt-[46px] text-white'>
            Get Started
          </button>
        </div>
        <div className='flex justify-center md:justify-end'>
          <img src="./sec1.png" alt="" className='w-full max-w-[500px] md:max-w-full'/>
        </div>
      </div>
    </div>
  )
}
