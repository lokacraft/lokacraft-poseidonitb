import Image from 'next/image'
import React from 'react'
import Image1 from "../../../../public/img/partner/partner1.png"
import Partner1 from "../../../../public/img/home/Partner1.jpg"
import Partner2 from "../../../../public/img/home/Partner2.jpg"

function Partner() {
  return (
    <div id='partner' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
      <div className="w-[90%] mx-auto flex flex-col space-y-12 p-8 rounded-2xl bg-[#E5F9FF] lg:shadow-md lg:shadow-gray-300">
        <h1 className="text-4xl w-full mx-auto z-20 font-extrabold leading-[50px]"><span className="">Powered By</span></h1>
        <div className="w-full lg:w-full mx-auto mt-[80px] flex items-center justify-center flex-wrap py-5 text-white">
          <div className='flex items-center justify-center mx-3 my-3 rounded-xl w-[300px]'>
            <Image src={Partner1} alt={""} width={1000} height={1000} className="w-[180px] object-cover" />
          </div>
          <div className='flex items-center justify-center mx-3 my-3 rounded-xl w-[300px]'>
            <Image src={Partner2} alt={""} width={1000} height={1000} className="w-[220px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner