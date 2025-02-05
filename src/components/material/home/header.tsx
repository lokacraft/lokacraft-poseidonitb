"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Banner2 from "../../../../public/img/home/Banner2.jpg"
// import Banner2 from "../../../public/img/navbar/logo.png"
import { motion, Variants } from 'framer-motion';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function Header() {
      const titleVariant1: Variants = {
            offscreen: {
              y: 80,
              opacity: 0
            },
            onscreen: {
              y: 0,
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
      <div id="home" className={`z-20 h-screen w-screen relative flex items-center justify-center`} >
        <div className='w-full h-full flex relative items-center justify-center'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738738590/LOKACRAFT-POSEIDON/HighlightVideo/xfii3x2sonbeydkvd8ra.jpg"// Ganti dengan poster video
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/ahawallet-ec31c.appspot.com/o/VideoPoseidon.mp4?alt=media&token=984e376d-9f17-44da-8e2b-d95f4dd84c04"
            type="video/mp4"
          />
        </video>
        </div>
        {/* <div className="absolute w-screen h-screen flex items-center justify-center">
          <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='text-white w-[90%] font-extrabold absolute left-[8vw] z-40 flex items-center justify-center flex-col space-y-7 '>
                      <div className='w-full flex items-center justify-center'>
                          <h1 className="text-5xl lg:text-6xl font-extrabold">
                            Lorem ipsum dolor sit amet consectetur.
                          </h1>
                      </div>
                          <div className='flex items-center justify-start space-x-6 font-normal'>
                                <a href="/about" className='bg-[#FEFAE0] px-7 py-3 text-lg text-gray-700 rounded-xl'>See More</a>
                                <a href="/contact" className='bg-[#FEFAE0] px-7 py-3 text-lg text-gray-700 rounded-xl'>Contact</a>
                          </div>
          </motion.div>
        </div> */}
        <a href="#about" className=" absolute right-6 lg:right-[50%] bottom-6 lg:bottom-6 z-40">
        <HiOutlineChevronDoubleDown className='text-white h-10 w-10 animate-bounce' />

        </a>
    </div>
  )
}

export default Header