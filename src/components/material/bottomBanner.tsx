import Image, { StaticImageData } from 'next/image'
import React from 'react'
// import Banner1 from "../../../public/img/banner1.png"

interface BannerProps {
  title: string;
  path: string;
  bannerImage: StaticImageData;
}

function BottomBanner({title, path, bannerImage}: BannerProps) {
  return (
    <div className="relative w-screen h-[55vh] lg:h-[50vh] bg-gray-400 flex items-center justify-center px-12">
      <Image quality={90} src={bannerImage} alt="banner" width={1400} height={800} className='absolute top-0 left-0 w-full h-full object-cover' />
      <div className='z-20 text-white w-[80%] lg:w-[60%] flex flex-col items-center gap-y-7'>
            {/* title */}
            <h1 className='text-3xl italic font-medium'>{title}</h1>
            <div className='flex items-center justify-start space-x-6 font-normal'>
              <a href="/contact" className='bg-[#01377F] px-7 py-3 text-lg text-gray-100 rounded-full'>Contact Us</a>
              <a href={path} className='bg-none border-2 border-[#DA9B34] px-7 py-3 text-lg rounded-full'>Get Involved</a>
            </div>
      </div>   
    </div>
  )
}

export default BottomBanner