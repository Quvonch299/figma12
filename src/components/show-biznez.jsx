import React from 'react'
import Mebel from '../ui/Mebel'

export default function ShowBiznez() {
  return (
    <div className='bg-[#FBF8F5]'>
      <h2 className='text-2xl sm:text-3xl md:text-[36px] pt-16 md:pt-[112px] mb-14 text-center font-semibold'>
        Shop our Bestsellers
      </h2>

      <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-1 pb-14 px-4'>
        <Mebel praci={'rent for $15'} title={'Cooper Dining Table'} rasm={'/fur.png'}/>
        <Mebel praci={'rent for $15'} title={'Cooper Dining Table'} rasm={'/fur2.png'}/>
        <Mebel praci={'rent for $15'} title={'Cooper Dining Table'} rasm={'/fur3.png'}/>
        <Mebel praci={'rent for $15'} title={'Cooper Dining Table'} rasm={'/fur4.png'}/>
      </div>

      <a href='#' className='flex justify-center pb-36 text-[#E9672B] font-medium hover:underline duration-300'>
        Shop All Furniture
      </a>
    </div>
  )
}
