"use client"
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react'
import AboutUs from "../../../../public/img/activity/c2aboutActivity.png"

function AboutActivity() {
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
                        <span className="italic">Tentang Kegiatan Kami</span>
                      </h1>
                      <p className=" w-full lg:w-[65%] text-start">
                      POSEIDON ITB berkomitmen pada pelaksanaan kegiatan yang berfokus pada aspek kemasyarakatan, pendidikan, dan konservasi di wilayah pesisir. Setiap kegiatan kami dirancang untuk mencapai dampak yang berkelanjutan dan mendukung masyarakat lokal dalam menghadapi tantangan global.
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    {/* right */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-full lg:w-[500px] h-[360px] rounded-2xl bg-gray-200'>
                      <Image src={AboutUs} alt="logo" width={1000} height={1000} quality={90} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default AboutActivity