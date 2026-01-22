import React from 'react'

export default function Large() {
  return (
    <div className='flex '>
      
      {/* Image */}
      <div className=' '>
        <img src="/large.png" alt="" className=''/>
      </div>

      {/* Text section */}
      <div className='w-full md:w-[688px] bg-[#E9672B] flex flex-col items-center px-6 py-10 md:py-[61px]'>
        
        <div className='flex justify-center mb-7'>
          <img src="/icon/title.svg" alt=""/>
        </div>

        <h2 className='font-normal text-2xl sm:text-3xl md:text-[36px] leading-snug md:leading-[44px] text-center text-white w-full md:w-[363px]'>
          Floyd Furniture Meets Feather Flexibility
        </h2>

        <div className='flex justify-center mt-8'>
          <button className='cursor-pointer w-[240px] sm:w-[260px] md:w-[272px] h-[50px] sm:h-[55px] md:h-[60px] rounded-[88px] bg-white text-[#E9672B] font-medium hover:opacity-90 duration-300'>
            Explore Floyd Furniture
          </button>
        </div>

      </div>
    </div>
  )
}
