import ImageBanner from '@/components/material/imageBanner'
import React from 'react'
import TopBanner from "../../../../public/img/article//c2pageBanner.png"
import ArticleLists from '@/components/material/article/articleLists'
import BukuPoseidon from '@/components/material/article/bukuPoseidon'
import BeritaPoseidon from '@/components/material/article/beritaPoseidon'

function page() {
  return (
    <div className=" bg-[#F7F8FF] flex w-full flex-col items-center gap-y-20">
      {/* banner top */}
      <ImageBanner title='Artikel POSEIDON' pathDescription='Menginspirasi dan Memberdayakan Masyarakat Pesisir' bannerImage={TopBanner} />
      {/* content */}
      <BukuPoseidon />
      <ArticleLists />
      <BeritaPoseidon />
      <div className="h-[120px] w-full"></div>
    </div>
  )
}

export default page