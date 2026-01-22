import React from 'react'
import Card from '../ui/Card'

export default function Rooms() {
  return (
    <div className='bg-[#FBF8F5] pb-16'>
      <h2 className='text-center mb-10 pt-9 text-3xl sm:text-4xl md:text-[48px] font-semibold'>
        Shop by Room
      </h2>

      <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-[32px] px-4'>
        <Card Shadow={'8px 8px 0px 0px #CBC6F4'} title={'Living Room'} color={'#E9672B'} rasm={'/sec2.png'}/>
        <Card Shadow={'8px 8px 0px 0px #E7CB43'} title={'Bedroom'} color={'#225DCA'} rasm={'/sec3.png'}/>
        <Card Shadow={'8px 8px 0px 0px #A2D4C5'} title={'Home Office'} color={'#242947'} rasm={'/sec5.png'}/>
        <Card Shadow={'8px 8px 0px 0px #AF4920'} title={'Dining Room'} color={'#DE4333'} rasm={'/sec4.png'}/>
      </div>
    </div>
  )
}
