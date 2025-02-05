"use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import KomisarisUtama from "../../../../public/img/about/komisarisUtamaFix.png"
import Komisaris from "../../../../public/img/about/komisarisFix.png"
import Dirut from "../../../../public/img/about/dirutFix.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Variants, motion } from 'framer-motion';

function Slider1() {
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
                bounce: 0,
                duration: 1.8
              }
            }
          };
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
    <div className='w-[90%] mx-auto flex pt-[60px] flex-col items-center space-y-8 text-gray-600'>
      {/* 1 */}
      <div className='w-full flex flex-col items-center justify-start space-y-2'>
            <h1 className='text-3xl font-extrabold'>Company Team Profile</h1>
            <p>The Amazing Team Of Us</p>
      </div>
      {/* 2 */}
      <div className="flex w-full flex-col items-center justify-between">
                  {/* 1 */}
                  <div className='w-[90%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-5 md:items-center lg:items-center justify-start my-[48px]'>
                    {/* left */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-full max-w-[500px] h-[500px] rounded-2xl'>
                      <Image src={KomisarisUtama} alt="logo" width={2000} height={2000} quality={100} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                    {/* right */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-end justify-start flex-col space-y-9'>
                      <h1 className="w-full flex flex-col space-y-2 text-start text-[22px] font-extrabold ">
                        <span className="text-3xl">
                      Komisaris Utama
                      </span>
                        <span className="">
                          Adinugraha Sukandar, ST., M.B.A
                      </span>
                      </h1>
                      <p className=" w-full text-start text-lg">
                      Berpengalaman lebih dari 14 tahun dalam manajemen bisnis dan konstruksi. Menyelesaikan pendidikan sarjana dalam bidang Teknik Lingkungan di Institut Teknologi Bandung pada tahun 2010, dan melanjutkan pendidikan Magister Administrasi Bisnis di Institut Teknologi Bandung pada tahun 2014. Memulai karier sebagai Expert Assistant di Mahakarya Engineering.
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    
                  </div>
                  {/* 2 */}
                  <div className='w-[90%] mx-auto hidden lg:flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center justify-between my-[48px]'>
                    {/* left */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-start justify-start flex-col space-y-9'>
                      <h1 className="w-full flex flex-col space-y-2 text-start text-[22px] font-extrabold ">
                        <span className="text-3xl">
                      Komisaris
                      </span>
                        <span className="">
                        M. Yoesep Ali Rachman, ST
                      </span>
                      </h1>
                      <p className=" w-full text-start text-lg">
                      Berpengalaman lebih dari 8 tahun dalam manajemen proyek dan konstruksi. Menyelesaikan pendidikan sarjana dalam bidang Teknik Sipil di ITENAS pada tahun 2010, dan memulai karier sebagai konsultan manajemen konstruksi pada proyek Park Hotel di Jalan Suci. Selanjutnya, bergabung dengan Bumi Raya Agung dan terlibat dalam proyek-proyek strategis.
                      </p></motion.div>
                    {/* right */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-full max-w-[500px] h-[500px] rounded-2xl'>
                      <Image src={Komisaris} alt="logo" width={2000} height={2000} quality={100} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                  </div>
                  {/* 2 sm */}
                  <div className='w-[90%] mx-auto flex lg:hidden flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-5 md:items-center lg:items-center justify-start my-[48px]'>
                    {/* left */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-full max-w-[500px] h-[500px] rounded-2xl'>
                      <Image src={Komisaris} alt="logo" width={2000} height={2000} quality={100} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                    {/* right */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-end justify-start flex-col space-y-9'>
                      <h1 className="w-full flex flex-col space-y-2 text-start text-[22px] font-extrabold ">
                        <span className="text-3xl">
                      Komisaris
                      </span>
                        <span className="">
                        M. Yoesep Ali Rachman, ST
                      </span>
                      </h1>
                      <p className=" w-full text-start text-lg">
                      Berpengalaman lebih dari 8 tahun dalam manajemen proyek dan konstruksi. Menyelesaikan pendidikan sarjana dalam bidang Teknik Sipil di ITENAS pada tahun 2010, dan memulai karier sebagai konsultan manajemen konstruksi pada proyek Park Hotel di Jalan Suci. Selanjutnya, bergabung dengan Bumi Raya Agung dan terlibat dalam proyek-proyek strategis.
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    
                  </div>
                  {/* 3 */}
                  <div className='w-[90%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-5 md:items-center lg:items-center justify-start my-[48px]'>
                    {/* left */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-full max-w-[500px] h-[500px] rounded-2xl'>
                      <Image src={Dirut} alt="logo" width={2000} height={2000} quality={100} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                    {/* right */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-end justify-start flex-col space-y-9'>
                      <h1 className="w-full flex flex-col space-y-2 text-start text-[22px] font-extrabold ">
                        <span className="text-3xl">
                      Direktur Utama
                      </span>
                        <span className="">
                        Miftah Faris, SE., M.B.A
                      </span>
                      </h1>
                      <p className=" w-full text-start text-lg">
                      Berpengalaman lebih dari 8 tahun dalam manajemen bisnis dan keuangan. Menyelesaikan pendidikan sarjana dalam bidang Ekonomi di Universitas Brawijaya. dan Melanjukan Pendidikan Magister Bisnis dan Administrasi di Institut Teknologi Bandung. 
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    
                  </div>
                </div>
    </div>
  )
}

export default Slider1