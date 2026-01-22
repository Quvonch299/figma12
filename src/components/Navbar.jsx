import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className='bg-[#FBF8F5]'>
      <div className='flex flex-col md:flex-row items-center md:justify-between pt-6 md:pt-[31px] max-w-7xl mx-auto px-4 md:px-0 gap-4 md:gap-0'>
        
        {/* Left links */}
        <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-[36px] text-sm md:text-base'>
          <a href="">Furniture</a>
          <a href="">Why Feather</a>
          <a href="">Feather for Business</a>
        </div>

        {/* Logo */}
        <div className='flex justify-center'>
          <img src="./icon/logo.svg" alt="" className='h-10 md:h-auto'/>
        </div>

        {/* Right links */}
        <div className='flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-10 text-sm md:text-base'>
          <a href="">Check if We Deliver</a>
          <a href="">Search</a>
          <a href="">Account</a>
          <RiShoppingCart2Line size={26} />
        </div>

      </div>
    </div>
  )
}
