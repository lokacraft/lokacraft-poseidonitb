"use client";
import React from "react";
import ImageBanner from "@/components/material/imageBanner";
import Banner from "../../../../public/img/gallery/c2pageBanner.png";
import Gall1 from "../../../../public/img/gallery/c2gall1.png";
import Gall2 from "../../../../public/img/gallery/c2gall2.png";
import Gall3 from "../../../../public/img/gallery/c2gall3.png";
import Gall4 from "../../../../public/img/gallery/c2gall4.png";
import Gall5 from "../../../../public/img/gallery/c2gall5.png";
import Gall6 from "../../../../public/img/gallery/c2gall6.png";
import Gall7 from "../../../../public/img/gallery/c2gall7.png";
import "./styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

// import required modules
import { Mousewheel, EffectCreative } from 'swiper/modules';
import Image from "next/image";
import Player from "./Player";

const GalleryPage: React.FC = () => {
  const images = [
    {
      title: "Pesisir Pangarengan",
      src: Gall1
    },
    {
      title: "Bridging Ocean",
      src: Gall2
    },
    {
      title: "Synergy in Action",
      src: Gall3
    },
    {
      title: "Long Live The Alliance",
      src: Gall4
    },
    {
      title: "Lost Legacy",
      src: Gall5
    },
    {
      title: "Aimless Policy",
      src: Gall6
    },
    {
      title: "From roots to reality",
      src: Gall7
    },
  ];
  return (
    <div className="bg-[#F7F8FF] flex w-full flex-col items-center gap-y-20 min-h-screen">
      {/* ImageBanner */}
      <ImageBanner
        title="Album S[ea]mphony"
        pathDescription="Menyelaraskan Jiwa dan Ombak"
        bannerImage={Banner}
      />

      <div className="w-full h-screen flex flex-col gap-y-6 lg:gap-y-12">
      <h1 className="text-3xl z-20 font-semibold leading-[50px] flex flex-col items-center gap-y-3">
          <span className="">
            Inside The Wave
          </span> 
          <span className="italic text-lg font-thin">
            Menelisik Apa itu POSEIDON 2024?
          </span> 
      </h1>
        <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                grabCursor={false}
                effect={'creative'}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: [0, '100%', 0],
                  },
                }}
                modules={[Mousewheel, EffectCreative]}
                className="mySwiper"
              >
              {images.map((item, index) => (
                <SwiperSlide key={index} className="w-[90%] h-full mx-auto" >
                  <div className="relative w-[90%] h-full mx-auto flex items-end justify-center">
                    <Image priority quality={100} src={item.src} alt="i" width={1400} height={1400} className="h-[90%] w-[90%] mx-auto object-cover" />
                    {/* absolute content */}
                    <div className="absolute h-full w-full flex items-center justify-center">
                      <h1 className="text-4xl text-white">{item.title}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
      </div>

      {/* quotes */}
      <div className="w-[80%] mx-auto flex items-center justify-center my-6">
        <h1 className="italic text-2xl text-center">
        Di setiap hembusan angin riak ombak, terukir cerita tentang ketulusan dan kerja keras tentang ,tangan tangan yang membangun bukan hanya demi hari ini, tapi untuk masa depan yang lebih baik
        </h1>
      </div>
      <div className="h-[120px] w-full"></div>
      

      
    </div>
  );
};

export default GalleryPage;
