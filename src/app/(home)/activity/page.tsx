import React from 'react'
import ImageBanner from '@/components/material/imageBanner'
import Banner from "../../../../public/img/activity/c2pageBanner.png"
import AboutActivity from '@/components/material/activity/aboutActivity'
import { Testimonial } from '@/components/material/home/testimonial'
import "./styles.css"
import { ProgramKerja } from '@/components/material/home/programKerja'
import VideoHighlight from '@/components/material/activity/videoHighlight'

function ActivityPage() {
  return (
    <div className=" bg-[#F7F8FF] flex w-full flex-col items-center gap-y-20">
      {/* ImageBanner */}
      <ImageBanner title='Kegiatan POSEIDON' pathDescription='Menginspirasi dan Memberdayakan Masyarakat Pesisir' bannerImage={Banner} />
      {/* about */}
      <AboutActivity />
      {/* proker */}
      <ProgramKerja />
      {/* highlight */}
      <VideoHighlight />
      {/* testimonial */}
      <Testimonial />
    </div>
  )
}

export default ActivityPage