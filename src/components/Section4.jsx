import React from 'react'

export default function Section4() {
  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center pt-16 md:pt-[112px] px-4 md:px-0 gap-8'>
        <div className='md:w-[402px] mx-auto md:mx-0 text-center md:text-left'>
          <h1 className='font-normal text-2xl sm:text-3xl md:text-[36px] leading-snug md:leading-[44px] tracking-normal'>
            Furniture for business, made simple.
          </h1>
          <p className='font-normal text-base sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-normal mt-4 mb-5'>
            Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.
          </p>
          <a href='#' className='hover:underline duration-700 text-[#E9672B] font-medium'>
            Visit Feather For Business
          </a>
        </div>
        <div className='flex justify-center md:justify-end'>
          <img src="./sec8.png" alt="" className='w-full max-w-[500px] md:max-w-full'/>
        </div>
      </div>
    </div>
  )
}
