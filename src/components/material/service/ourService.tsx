"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimation, Variants, useScroll } from "framer-motion"
import Image1 from "../../../../public/img/banner2.png"
import Image2 from "../../../../public/img/banner4.png"
import Image3 from "../../../../public/img/banner5.png"
import Image4 from "../../../../public/img/banner6.png"


function OurService() {
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
            className="text-5xl z-20 flex-[0.2] font-bold text-gray-600 leading-[50px]">Our Services</motion.h1>

            </div>

            {/* kegiatan pertama */}
            <div className="flex flex-col space-y-3">
              <h1 className="text-3xl font-semibold px-4 w-[80vw] mx-auto">Kontruksi Komersial</h1>
              <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-start lg:items-start justify-start lg:space-x-6 h-fit">
              <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant1}
              className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
              <div className='w-full lg:w-[400px] h-[240px] lg:h-[300px] rounded-2xl'>
                    <Image src={Image1} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
              </div>
              </motion.div>
              <motion.h3 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant2}
              className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col justify-start gap-y-4">
              <h1 className="text-2xl font-bold">Solusi Kontruksi Komersial Terpadu</h1>
              <p className='text-lg text-start'>
              Kami menawarkan layanan konstruksi komersial yang mencakup pembangunan gedung perkantoran, pusat perbelanjaan, hotel dan resort, restoran, serta fasilitas industri dan gudang. Dengan fokus pada kualitas dan efisiensi, kami memastikan setiap proyek komersial kami memenuhi kebutuhan spesifik klien.
              </p>     
              </motion.h3>

              </div>
            </div>
            {/* kegiatan kedua */}
            <div className="flex flex-col space-y-3">
              <h1 className="text-3xl font-semibold px-4 w-[80vw] mx-auto">Kontruksi Hunian</h1>
              <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-start lg:items-start justify-start lg:space-x-6 h-fit">
              <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant1}
              className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
              <div className='w-full lg:w-[400px] h-[240px] lg:h-[300px] rounded-2xl'>
                    <Image src={Image2} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
              </div>
              </motion.div>
              <motion.h3 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant2}
              className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col justify-start gap-y-4">
              <h1 className="text-2xl font-bold">Hunian Nyaman dan Berkualitas</h1>
              <p className='text-lg text-start'>
              Kami menyediakan layanan konstruksi hunian yang meliputi pembangunan rumah pribadi, apartemen dan kondominium, townhouse, serta perumahan terpadu. Kami berkomitmen untuk menciptakan hunian yang nyaman, aman, dan sesuai dengan gaya hidup modern, memberikan tempat tinggal yang ideal bagi Anda dan keluarga.
              </p>     
              </motion.h3>

              </div>
            </div>
            {/* kegiatan ketiga */}
            <div className="flex flex-col space-y-3">
              <h1 className="text-3xl font-semibold px-4 w-[80vw] mx-auto">Pekerjaan Interior</h1>
              <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-start lg:items-start justify-start lg:space-x-6 h-fit">
              <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant1}
              className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
              <div className='w-full lg:w-[400px] h-[240px] lg:h-[300px] rounded-2xl'>
                    <Image src={Image3} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
              </div>
              </motion.div>
              <motion.h3 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant2}
              className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col justify-start gap-y-4">
              <h1 className="text-2xl font-bold">Pekerjaan Interior</h1>
              <p className='text-lg text-start'>
              Kami menyediakan berbagai alat dan perlengkapan untuk kebutuhan interior Anda. Dari bahan bangunan, alat kelengkapan, hingga aksesori dekoratif, kami memastikan Anda mendapatkan produk yang menciptakan ruang yang indah dan fungsional.
              </p>     
              </motion.h3>

              </div>
            </div>
            {/* kegiatan keempat */}
            <div className="flex flex-col space-y-3">
              <h1 className="text-3xl font-semibold px-4 w-[80vw] mx-auto">Pembuatan Furnitur</h1>
              <div className="relative rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-start lg:items-start justify-start lg:space-x-6 h-fit">
              <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant1}
              className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
              <div className='w-full lg:w-[400px] h-[240px] lg:h-[300px] rounded-2xl'>
                    <Image src={Image4} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
              </div>
              </motion.div>
              <motion.h3 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={titleVariant2}
              className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col justify-start gap-y-4">
              <h1 className="text-2xl font-bold">Pembuatan Furnitur</h1>
              <p className='text-lg text-start'>
              Kami menawarkan layanan pembuatan furnitur custom untuk berbagai keperluan interior, mulai dari rumah tinggal hingga kantor dan ruang komersial. Dengan desain yang dapat disesuaikan dan material berkualitas, memberikan sentuhan personal dan kenyamanan di setiap ruangan. </p>     
              </motion.h3>

              </div>
            </div>
    </div>
  )
}

export default OurService