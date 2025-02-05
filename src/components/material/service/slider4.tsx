"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
function Slider4() {
  return (
      <div id='partner' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
            <div className="w-[90%] mx-auto">
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                              <div className='flex w-full h-[300px] text-[#012169] rounded-xl bg-[#EFFBFF] flex-col items-center justify-center space-y-4'>
                                    <h1 className="text-2xl font-bold">&quot;Pesan Dari Saya (Nafiis A.A - Triton)&quot;</h1>
                                    <div className="w-[80%] mx-auto">
                                          <p className='text-md'>
                                          Ingat !!! Kesuksesan tidak muncul gratis dari laut, tapi ia adalah kristalisasi dari kerja keras dan keringat, PERSEMBAHKAN KARYA YANG TERBAIKK, UNTUK NEGRI INIII !!!</p>
                                    </div>
                                    <span className='text-lg font-bold'>Nafiis A.A - Triton 21</span>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='flex w-full h-[300px] text-[#012169] rounded-xl bg-[#EFFBFF] flex-col items-center justify-center space-y-4'>
                                    <h1 className="text-2xl font-bold">&quot;Pesan Dari Saya (Nafiis A.A - Triton)&quot;</h1>
                                    <div className="w-[80%] mx-auto">
                                          <p className='text-md'>
                                          Ingat !!! Kesuksesan tidak muncul gratis dari laut, tapi ia adalah kristalisasi dari kerja keras dan keringat, PERSEMBAHKAN KARYA YANG TERBAIKK, UNTUK NEGRI INIII !!!</p>
                                    </div>
                                    <span className='text-lg font-bold'>Nafiis A.A - Triton 21</span>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='flex w-full h-[300px] text-[#012169] rounded-xl bg-[#EFFBFF] flex-col items-center justify-center space-y-4'>
                                    <h1 className="text-2xl font-bold">&quot;Pesan Dari Saya (Nafiis A.A - Triton)&quot;</h1>
                                    <div className="w-[80%] mx-auto">
                                          <p className='text-md'>
                                          Ingat !!! Kesuksesan tidak muncul gratis dari laut, tapi ia adalah kristalisasi dari kerja keras dan keringat, PERSEMBAHKAN KARYA YANG TERBAIKK, UNTUK NEGRI INIII !!!</p>
                                    </div>
                                    <span className='text-lg font-bold'>Nafiis A.A - Triton 21</span>
                              </div>
                        </SwiperSlide>
                  </Swiper>
            </div>
      </div>
  )
}

export default Slider4