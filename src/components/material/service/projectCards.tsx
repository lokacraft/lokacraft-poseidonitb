import Image from 'next/image'
import React from 'react'
import Banner1 from "../../../../public/img/banner1.png"

function ProjectCards() {
  return (
      <div className="w-full lg:rounded-2xl flex items-center justify-center flex-wrap py-5">
      {/* card */}
      <div className='relative flex flex-col items-center justify-center space-y-2 mx-3 my-8 bg-orange-200 rounded-xl w-[300px] h-[300px]'>
          <Image src={Banner1} alt="asd" width={800} height={800} className='rounded-xl w-full h-full object-cover' />
          <div className='absolute -bottom-8 rounded-xl z-20 bg-orange-200 w-[80%] py-4 px-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className='text-SM font-light text-start'>
                  Lorem ipsum dolor sit.</p>
          </div>
      </div>
      {/* card */}
      <div className='relative flex flex-col items-center justify-center space-y-2 mx-3 my-8 bg-orange-200 rounded-xl w-[300px] h-[300px]'>
          <Image src={Banner1} alt="asd" width={800} height={800} className='rounded-xl w-full h-full object-cover' />
          <div className='absolute -bottom-8 rounded-xl z-20 bg-orange-200 w-[80%] py-4 px-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className='text-SM font-light text-start'>
                  Lorem ipsum dolor sit.</p>
          </div>
      </div>
      {/* card */}
      <div className='relative flex flex-col items-center justify-center space-y-2 mx-3 my-8 bg-orange-200 rounded-xl w-[300px] h-[300px]'>
          <Image src={Banner1} alt="asd" width={800} height={800} className='rounded-xl w-full h-full object-cover' />
          <div className='absolute -bottom-8 rounded-xl z-20 bg-orange-200 w-[80%] py-4 px-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className='text-SM font-light text-start'>
                  Lorem ipsum dolor sit.</p>
          </div>
      </div>
      {/* card */}
      <div className='relative flex flex-col items-center justify-center space-y-2 mx-3 my-8 bg-orange-200 rounded-xl w-[300px] h-[300px]'>
          <Image src={Banner1} alt="asd" width={800} height={800} className='rounded-xl w-full h-full object-cover' />
          <div className='absolute -bottom-8 rounded-xl z-20 bg-orange-200 w-[80%] py-4 px-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className='text-SM font-light text-start'>
                  Lorem ipsum dolor sit.</p>
          </div>
      </div>
      {/* card */}
      <div className='relative flex flex-col items-center justify-center space-y-2 mx-3 my-8 bg-orange-200 rounded-xl w-[300px] h-[300px]'>
          <Image src={Banner1} alt="asd" width={800} height={800} className='rounded-xl w-full h-full object-cover' />
          <div className='absolute -bottom-8 rounded-xl z-20 bg-orange-200 w-[80%] py-4 px-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className='text-SM font-light text-start'>
                  Lorem ipsum dolor sit.</p>
          </div>
      </div>
      {/* card */}
      <div className='relative flex flex-col items-center justify-center space-y-2 mx-3 my-8 bg-orange-200 rounded-xl w-[300px] h-[300px]'>
          <Image src={Banner1} alt="asd" width={800} height={800} className='rounded-xl w-full h-full object-cover' />
          <div className='absolute -bottom-8 rounded-xl z-20 bg-orange-200 w-[80%] py-4 px-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className='text-SM font-light text-start'>
                  Lorem ipsum dolor sit.</p>
          </div>
      </div>
    </div>
  )
}

export default ProjectCards