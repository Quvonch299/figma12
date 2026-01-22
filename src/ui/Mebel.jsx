import React from 'react'

export default function Mebel({ title, praci, rasm }) {
    return (
        <div className='items-center flex flex-col w-[233px] bg-[#FFFFFF] pb-[69px]'>
            <img className='mt-[50px]' src={rasm} alt={rasm} />
            <p className='mt-[41px] font-normal text-[18px] leading-[28px] text-center tracking-normal'>{title}</p>
            <p className='mt-[19px]'>{praci}</p>
        </div>
    )
}
