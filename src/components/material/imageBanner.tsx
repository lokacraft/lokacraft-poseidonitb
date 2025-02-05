import Image, { StaticImageData } from 'next/image'
import React from 'react'
// import Banner1 from "../../../public/img/banner1.png"

interface BannerProps {
  title: string;
  pathDescription: string;
  bannerImage: StaticImageData;
}

function ImageBanner({title, pathDescription, bannerImage}: BannerProps) {
  return (
    <div className="relative w-screen h-[80vh] lg:h-[70vh] bg-gray-400 flex items-center justify-start px-12">
      <Image quality={90} src={bannerImage} alt="banner" width={1400} height={800} className='absolute top-0 left-0 w-full h-full object-cover' />
      <div className='z-20 text-white w-[80%] lg:w-[60%] flex flex-col space-y-4'>
            {/* title */}
            <h1 className='text-5xl font-medium'>{title}</h1>
            {/* title */}
            <h1 className='text-xl font-light italic'>{pathDescription}</h1>
      </div>   
    </div>
  )
}

export default ImageBanner