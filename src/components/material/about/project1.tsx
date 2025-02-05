"use client"
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from "framer-motion"
import Image3 from "../../../../public/img/about/about3.png"


function Project1() {
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
      <div className="w-full flex flex-col space-y-6">
            {/* kegiatan pertama */}
            <div className="relative w-[80vw] mx-auto flex flex-col space-y-8 items-center justify-center">
            {/* <Image alt="svg" src="" width={100} height={100} className="absolute left-[50px] top-[40%]" /> */}
            
            <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
            className="text-5xl z-20 flex-[0.2] font-bold text-gray-600 leading-[50px]">Projects</motion.h1>
            <motion.h3 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant2}
            className="flex-[0.4] z-20 text-center text-lg">
                  PT Panca Armada Andalan merupakan perusahaan yang telah berpengalaman 
      bertahun-tahun dalam industri karoseri mobil di Indonesia. Dengan dedikasi yang 
      tinggi.
            
            </motion.h3>

            </div>
            {/* kegiatan kedua */}
            <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[55vh]">
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
            className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
            <div className='w-[400px] h-[300px] rounded-2xl'>
                  <Image src={Image3} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
            </div>
            </motion.div>
            <motion.h3 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant2}
            className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Title</h1>
            <p className='text-lg text-start'>
            Kami peduli terhadap lingkungan dan 
      berkomitmen untuk mengurangi dampak negatif produksi terhadap 
      lingkungan sekitar.
            </p>
            <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
                  
            </motion.h3>

            </div>
            {/* kegiatan ketiga */}
            <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[55vh]">
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
            className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
            <div className='w-[400px] h-[300px] rounded-2xl'>
                  <Image src={Image3} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
            </div>
            </motion.div>
            <motion.h3 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant2}
            className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Title</h1>
            <p className='text-lg text-start'>
            Kami peduli terhadap lingkungan dan 
      berkomitmen untuk mengurangi dampak negatif produksi terhadap 
      lingkungan sekitar.
            </p>
            <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
                  
            </motion.h3>

            </div>
            {/* kegiatan keempat */}
            <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[55vh]">
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
            className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
            <div className='w-[400px] h-[300px] rounded-2xl'>
                  <Image src={Image3} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
            </div>
            </motion.div>
            <motion.h3 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant2}
            className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Title</h1>
            <p className='text-lg text-start'>
            Kami peduli terhadap lingkungan dan 
      berkomitmen untuk mengurangi dampak negatif produksi terhadap 
      lingkungan sekitar.
            </p>
            <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
                  
            </motion.h3>

            </div>
    </div>
  )
}

export default Project1