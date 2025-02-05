"use client"
import React from 'react'
import Logo from "../../../../public/img/logo.jpg"
import { TbGavel } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { LuLightbulb } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
function Lambang() {
  const titleVariant2: Variants = {
    offscreen: {
      // x: -80,
      opacity: 0
    },
    onscreen: {
      // x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.8
      }
    }
  };
  return (  
      <div id='partner' className='mt-[120px]  w-[90%] mx-auto py-12 flex flex-col items-start justify-start space-y-12'>
        <div className="bg-gray-200 flex items-center gap-x-2 pr-3 w-[420px] h-12">
          <div className="w-2 h-12 bg-orange-400"></div>
          <h1 className="text-4xl w-[90%] nx-auto z-20 font-extrabold leading-[50px]"><span className="">Makna Lambang</span></h1>
        </div>
            <div className="w-full flex items-center justify-between">   
              <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant2}
              className='w-[450px] rounded-2xl bg-gray-200'>
                <Image src={Logo} alt="logo" width={1000} height={1000} quality={90} className="w-full rounded-2xl object-cover" />
              </motion.div>
            <div className="w-full lg:w-[60%] mx-auto lg:mx-0 mt-[80px] lg:mt-0 lg:rounded-2xl flex items-center justify-end flex-wrap">
              {/* card */}
              <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
                  <div className='bg-[#00324D] rounded-xl w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                    <TbGavel className='text-3xl text-white' />
                  </div>
                  <h1 className='text-2xl font-bold'>Integrity</h1>
                  <p className='text-md font-light text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores itaque repellendus?
                  </p>
              </div>
              {/* card */}
              <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
                  <div className='bg-[#00324D] rounded-xl w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                    <MdOutlineHandshake className='text-3xl text-white' />
                  </div>
                  <h1 className='text-2xl font-bold'>Teamwork</h1>
                  <p className='text-md font-light text-start'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, maiores repellendus. Est, voluptas quia.
                  </p>
              </div>
              {/* card */}
              <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
                  <div className='bg-[#00324D] rounded-xl w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                    <LuLightbulb className='text-3xl text-white' />
                  </div>
                  <h1 className='text-2xl font-bold'>Innovation</h1>
                  <p className='text-md font-light text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda numquam minima, quas tenetur animi saepe magnam commodi.
                  </p>
              </div>
              {/* card */}
              <div className='flex flex-col p-4 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] bg-[#E5F9FF]'>
                  <div className='bg-[#00324D] rounded-xl w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                    <MdOutlineVerified className='text-3xl text-white' />
                  </div>
                  <h1 className='text-2xl font-bold'>Reability</h1>
                  <p className='text-md font-light text-start'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam reiciendis facere cum iure.
                  </p>
              </div>
            </div>
            </div>
      </div>
  )
}

export default Lambang