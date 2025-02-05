import Image from 'next/image'
import React from 'react'
import Banner1 from "../../../../public/img/banner3.png"

function ImageBanner() {
  return (
    <div className="relative w-screen h-[50vh] bg-gray-400 flex items-center justify-start px-12">
      <Image quality={90} src={Banner1} alt="banner" width={1400} height={800} className='absolute top-0 left-0 w-full h-full object-cover' />
      <div className='z-20 text-white w-[80%] lg:w-[60%] flex flex-col space-y-4'>
            {/* title */}
            <h1 className='text-6xl font-extrabold'>Contact Us</h1>
            {/* title */}
            <h1 className='text-lg'>Home/Contact</h1>
      </div>   
    </div>
  )
}

export default ImageBanner