"use client"
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { HmoContext } from '../../../../context/hmoContext';
import Image from 'next/image';

export default function PilarPoseidon() {
      const {pilars} = useContext(HmoContext)
  return (
      <div id="pilar-pilar-poseidon" className="w-[90%] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-center z-10">
      <h1 className="text-3xl z-20 font-semibold leading-[50px]">
        <span className="italic">
          Pilar Pilar Poseidon
        </span> 
      </h1>
      <div className="h-[60vh] w-full">
            <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
            >
                  {pilars.map((item) => (
                  <SwiperSlide key={item.id} className=''>
                        <div className='w-full h-[400px] flex flex-col gap-y-3 pb-4 border border-gray-700'>

                          <div className="w-full h-3/4 bg-gray-400">
                          {/* <Image src={`${item.data.imgUrl}`} fill alt="i" className='w-full h-full object-cover' /> */}
                          </div>

                        <h1 className="text-xl font-semibold">{item.data.name}</h1>
                        <span className="text-md font-thin">{item.data.role}</span>
                        </div>
                  </SwiperSlide>

                  ))}
            </Swiper>
      </div>
    </div>
  );
}
