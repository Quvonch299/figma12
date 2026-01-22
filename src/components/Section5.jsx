import React from 'react'

export default function Section5() {
  return (
    <div className=' mb-56'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center mt-28 md:mt-[114px] px-4 md:px-0 gap-8 md:gap-16'>
        <div className='flex justify-center md:justify-start'>
          <img src="./sec9.png" alt="" className='w-full max-w-[500px] md:max-w-full'/>
        </div>
        <div className='text-center md:text-left md:ml-[131px]'>
          <h1 className='font-normal text-2xl sm:text-3xl md:text-[36px] leading-snug md:leading-[44px] tracking-normal'>
            Never assemble furniture again.
          </h1>
          <p className='font-normal text-base sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-normal mt-4 mb-5'>
            We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.
          </p>
          <a href='#' className='hover:underline duration-700 text-[#E9672B] font-medium'>
            How Feather Works
          </a>
        </div>
      </div>
    </div>
  )
}
