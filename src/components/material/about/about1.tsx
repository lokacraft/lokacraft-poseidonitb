"use client"
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import AboutUs from "../../../../public/img/about/AboutUs.jpg"
import AnimatedCounter from '../counter';

function About1() {
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
        <div id="about" className="w-[90%] mx-auto flex pt-[60px] flex-col items-center text-gray-600">
              <div className=" w-full min-h-[90vh] lg:min-h-[70vh] flex flex-col space-y-8 lg:space-y-0 items-center justify-center">
                <div
                className="flex w-full flex-col items-center space-y-20">
                  {/* 1 */}
                  <div className='w-full flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-start justify-between my-[48px]'>
                    {/* left */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-start justify-start flex-col space-y-9'>
                      <h1 className="text-3xl z-20 font-semibold leading-[50px]">
                        <span className="italic">Apa itu POSEIDON</span>
                      </h1>
                      <p className=" w-full lg:w-[65%] text-start">
                      Persembahan Oseanografi ITB untuk Indonesia, POSEIDON, adalah program pengabdian masyarakat tahunan dari Himpunan Mahasiswa Oseanografi Institut Teknologi Bandung (HMO) ‘TRITON’ ITB. Program ini telah berjalan sejak tahun 2010, berfokus pada aspek keilmuan dan kemasyarakatan di bidang Oseanografi.
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    {/* right */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-full lg:w-[500px] h-[360px] rounded-xl bg-gray-200'>
                      <video
          controls
          playsInline
          className="w-full h-full object-cover rounded-xl"
          poster="https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738738590/LOKACRAFT-POSEIDON/HighlightVideo/xfii3x2sonbeydkvd8ra.jpg"
          // poster="https://via.placeholder.com/800x450" // Ganti dengan poster video
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/ahawallet-ec31c.appspot.com/o/VideoPoseidon.mp4?alt=media&token=984e376d-9f17-44da-8e2b-d95f4dd84c04"
            type="video/mp4"
          />
                      </video>
                    </motion.div>
                  </div>
                  {/* 2 */}
                  <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-start justify-between">
                    {/* check */}
                    <div className="w-full md:w-[32%] rounded-xl p-6 flex flex-col items-center gap-y-6 justify-center h-[180px] bg-[#01377F] text-white">
                      <h1 className="font-thin italic text-lg">
                        Program Kerja
                      </h1>
                      <div className="flex w-full items-center justify-center space-x-2 text-5xl font-bold">
                        <AnimatedCounter from={0} to={7} />
                        <span className=''>+</span>
                      </div>
                    </div>
                    {/* check */}
                    <div className="w-full md:w-[32%] rounded-xl p-6 flex flex-col items-center gap-y-6 justify-center h-[180px] bg-[#01377F] text-white">
                      <h1 className="font-thin italic text-lg">
                        Panitia Pelaksana
                      </h1>
                      <div className="flex w-full items-center justify-center space-x-2 text-5xl font-bold">
                        <AnimatedCounter from={0} to={100} />
                        <span className=''>+</span>
                      </div>
                    </div>
                    {/* check */}
                    <div className="w-full md:w-[32%] rounded-xl p-6 flex flex-col items-center gap-y-6 justify-center h-[180px] bg-[#01377F] text-white">
                      <h1 className="font-thin italic text-lg">
                        Kemitraan
                      </h1>
                      <div className="flex w-full items-center justify-center space-x-2 text-5xl font-bold">
                        <AnimatedCounter from={0} to={5} />
                        <span className=''>+</span>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={titleVariant1}
                  className='w-[80%] mx-auto flex flex-col items-center space-y-6 mt-10'>
          <h1 className="text-3xl z-20 font-semibold leading-[50px]">
            <span className="italic">Visi Kami</span>
          </h1>
                    <h1 className="w-full text-center text-[28px] ">
                    Meningkatkan kesadaran terhadap isu-isu global kemaritiman, mendukung SDGs melalui konservasi ekosistem laut dan darat, serta mendorong masyarakat lokal untuk berperan aktif dalam pengelolaan sumber daya berkelanjutan.
                    </h1>
                  </motion.div>
                </div>
              </div>
            </div>
  )
}

export default About1