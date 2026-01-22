import React from 'react'

export default function Section3() {
  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center px-4 md:px-0 gap-8 md:gap-16 py-16 md:py-[112px]'>
        <div className='flex justify-center md:justify-start'>
          <img src="./sec7.png" alt="" className='w-full max-w-[500px] md:max-w-full'/>
        </div>
        <div className='text-center md:text-left md:ml-[131px]'>
          <h1 className='font-normal text-2xl sm:text-3xl md:text-[36px] leading-snug md:leading-[44px] tracking-normal'>
            Garage Sale - 40% & Up
          </h1>
          <p className='font-normal text-base sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-normal mt-4 mb-5'>
            Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember.
          </p>
          <a href='#' className='hover:underline duration-700 text-[#E9672B] font-medium'>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  )
}
