"use client"
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from "framer-motion"
import Logo from "../../../../public/img/c2logo.png"
import { RiTreeLine, RiStethoscopeLine, RiEarthLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";


function Profile2() {
      const titleVariant1: Variants = {
            offscreen: {
              x: -80,
              opacity: 0
            },
            onscreen: {
              x: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }
            }
          };
          const titleVariant2: Variants = {
            offscreen: {
              x: 80,
              opacity: 0
            },
            onscreen: {
              x: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }
            }
          };
  return (
      <div id="about" className="mt-20 w-[90%] mx-auto flex flex-col gap-y-12 lg:gap-y-20 items-center">
      {/* about us */}
        {/* title */}
        <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
            className="text-3xl z-20 font-bold text-gray-600 leading-[50px] italic w-full text-center">
              Kolaborasi yang Menginspirasi, Memberdayakan, dan Menghubungkan
        </motion.h1>  
        <div className="relative w-[80%] mx-auto flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:gap-x-6 items-center justify-center lg:justify-between h-[105vh] lg:h-fit">
          {/* logo */}
          <div className="w-[300px]">
          <Image alt="svg" src={Logo} width={800} height={700} className=" w-full h-full object-contain" />
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-y-6">
            <motion.h3 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant2}
            className="z-20 text-left text-lg w-full">
            POSEIDON ITB adalah program pengabdian masyarakat tahunan yang melibatkan mahasiswa Oseanografi ITB dalam mendukung pembangunan berkelanjutan kawasan pesisir Indonesia.
            </motion.h3>
            <div className='flex items-center justify-start space-x-6 font-normal'>
              <a href="/about" className='bg-[#01377F] px-7 py-3 text-lg text-gray-100 rounded-full'>Learn More</a>
              <a href="/contact" className='bg-none border-2 border-[#DA9B34] px-7 py-3 text-lg rounded-full'>Get Involved</a>
            </div>
          </div>
        </div>
        
      {/* apa yang kami lakukan */}
      {/* title */}
        <h1 className="text-3xl z-20 font-bold leading-[50px] w-full italic"><span className="">Apa yang Kami Lakukan</span></h1>
        <div className="w-full lg:rounded-2xl flex items-center justify-center flex-wrap py-5">
                {/* card */}
                <div className='flex flex-col p-6 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] border-2 border-gray-500'>
                    <div className='w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                        <RiTreeLine className='text-4xl text-[#01377F]' />
                    </div>
                    <h1 className='text-3xl font-bold text-[#01377F]'>Ekowisata</h1>
                    <p className='text-sm font-light text-start'>
                    Mengembangkan ekowisata berbasis mangrove untuk mendukung keseimbangan ekosistem 
                    </p>
                </div>
                {/* card */}
                <div className='flex flex-col p-6 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] border-2 border-gray-500'>
                    <div className='w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                        <RiStethoscopeLine  className='text-4xl text-[#01377F]' />
                    </div>
                    <h1 className='text-3xl font-bold text-[#01377F]'>Kesehatan</h1>
                    <p className='text-sm font-light text-start'>
                    Memberikan layanan kesehatan bagi masyarakat pesisir melalui pemeriksaan dan edukasi.
                    </p>
                </div>
                {/* card */}
                <div className='flex flex-col p-6 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] border-2 border-gray-500'>
                    <div className='w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                        <RiEarthLine  className='text-4xl text-[#01377F]' />
                    </div>
                    <h1 className='text-3xl font-bold text-[#01377F]'>Lingkungan</h1>
                    <p className='text-sm font-light text-start'>
                    Mengurangi dampak lingkungan dengan teknologi pengelolaan sampah inovatif.
                    </p>
                </div>
                {/* card */}
                <div className='flex flex-col p-6 space-y-2 mx-3 my-3 shadow-lg rounded-xl w-[300px] h-[300px] border-2 border-gray-500'>
                    <div className='w-[60px] h-[60px] flex items-center justify-center text-xl font-bold text-white'>
                        <FaPeopleGroup className='text-4xl text-[#01377F]' />
                    </div>
                    <h1 className='text-3xl font-bold text-[#01377F]'>SDM</h1>
                    <p className='text-sm font-light text-start'>
                    Memberdayakan masyarakat melalui pelatihan dan pendidikan
                    </p>
                </div>
              </div>

      </div>
  )
}

export default Profile2