import About1 from '@/components/material/about/about1'
import ImageBanner from '@/components/material/imageBanner'
import React from 'react'
import TopBanner from "../../../../public/img/about/c2_pageBanner.png"
import ContactBanner from "../../../../public/img/about/c2_bottomBanner.png"
import BottomBanner from '@/components/material/bottomBanner'
import Proker from '@/components/material/home/proker'
import { Kemitraan } from '@/components/material/about/kemitraan'
import PilarPoseidon from '@/components/material/about/pilarPoseidon'

function About() {
  return (
    <div className=" bg-[#F7F8FF] flex w-full flex-col items-center gap-y-20">
      {/* banner top */}
      <ImageBanner title='Tentang POSEIDON' pathDescription='Komitmen Kami untuk Masyarakat Pesisir Indonesia' bannerImage={TopBanner} />
      {/* about */}
      <About1 />
      {/* Program Kerja */}
      <Proker />
      {/* kemitraan */}
      <Kemitraan />
      {/* pilar */}
      <PilarPoseidon />
      {/* banner bottom */}
      <BottomBanner bannerImage={ContactBanner} title="Bersama Kita Bangun Masa Depan Pesisir Lebih Baik" path="/contact" />
    
    </div>
  )
}

export default About