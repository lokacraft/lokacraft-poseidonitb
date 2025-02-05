"use client"
import Image from 'next/image'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Partner1 from "../../../../public/img/home/partner1.png"
import Partner2 from "../../../../public/img/home/partner2.png"
import Partner3 from "../../../../public/img/home/partner33.png"
import Yomart1 from "../../../../public/img/portofolio/yomart1.png"
import Yomart2 from "../../../../public/img/portofolio/yomart2.png"
import Yomart3 from "../../../../public/img/portofolio/yomart3.png"
import Yomart4 from "../../../../public/img/portofolio/yomart4.png"
import Summarecon1 from "../../../../public/img/portofolio/summarecon1.png"
import Summarecon2 from "../../../../public/img/portofolio/summarecon2.png"
import Summarecon3 from "../../../../public/img/portofolio/summarecon3.png"
import Summarecon4 from "../../../../public/img/portofolio/summarecon4.png"
import Summarecon5 from "../../../../public/img/portofolio/summarecon5.png"
import Pln1 from "../../../../public/img/portofolio/pln1.png"
import Pln2 from "../../../../public/img/portofolio/pln2.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Project() {
  return (
    <div className='w-[90%] mt-[48px] mx-auto flex flex-col space-y-[45px] lg:space-y-[60px]'>
      {/* 1 */}
      <div className="w-full flex flex-col space-y-4">
            <h1 className='text-2xl font-semibold'>Proyek Pembangunan Minimarket: Yomart</h1>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                  {/* image */}
                  <div className="lg:flex-[0.4]">
                  <Image quality={90} src={Partner1} alt="banner" width={1400} height={800} className='w-[250px] h-[60px] object-cover' />
                  </div>
                  <p className="text-left lg:flex-[0.5]">
                  Lexica dengan bangga mengumumkan keterlibatan kami dalam proyek pembangunan Yomart, sebuah jaringan supermarket yang dirancang untuk memenuhi kebutuhan masyarakat dengan produk berkualitas dan harga terjangkau.
                  </p>
            </div>
            <div className="hidden lg:flex flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>Galeri Proyek</h1>
                  <Swiper
                  slidesPerView={3.15}
                  spaceBetween={20}
                  modules={[]}
                  className="mySwiper hidden lg:inline-flex"
                  >
                  <SwiperSlide className='w-[25%]'>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart3} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart4} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  </Swiper>
            </div>
            {/* sm */}
            <div className="lg:hidden flex flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>Galeri Proyek</h1>
                  <Swiper
                  slidesPerView={1.2}
                  spaceBetween={20}
                  modules={[]}
                  className="mySwiper hidden lg:inline-flex"
                  >
                  <SwiperSlide className=''>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart3} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='h-[200px] w-full rounded-lg'>
                              <Image quality={90} src={Yomart4} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  </Swiper>
            </div>
      </div>
      {/* 2 */}
      <div className="w-full flex flex-col space-y-4">
            <h1 className='text-2xl font-semibold'>Proyek Pembuatan Furnitur : Summarecon</h1>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                  {/* image */}
                  <div className="lg:flex-[0.4]">
                  <Image quality={90} src={Partner2} alt="banner" width={1400} height={800} className='w-[260px] h-[100px] object-cover' />
                  </div>
                  <p className="text-left lg:flex-[0.5]">
                  PT Lexica Cala Nusa berperan sebagai sub kontraktor dalam proyek Summarecon, bertanggung jawab atas pembuatan furnitur. Kami menyediakan desain, produksi, dan instalasi furnitur berkualitas untuk hunian dan fasilitas umum, memastikan setiap produk sesuai dengan kebutuhan dan spesifikasi yang ditetapkan oleh Summarecon.</p>
            </div>
            <div className="hidden lg:flex flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>Galeri Proyek</h1>
                  <Swiper
                  slidesPerView={3.15}
                  spaceBetween={20}
                  modules={[]}
                  className="mySwiper"
                  >
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon3} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon4} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon5} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  </Swiper>
            </div>
            <div className="lg:hidden flex flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>Galeri Proyek</h1>
                  <Swiper
                  slidesPerView={1.2}
                  spaceBetween={20}
                  modules={[]}
                  className="mySwiper"
                  >
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon3} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon4} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Summarecon5} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  </Swiper>
            </div>
      </div>
      {/* 3 */}
      <div className="w-full flex flex-col space-y-4">
            <h1 className='text-2xl font-semibold'>Desain dan Pembangunan Proyek : PLN</h1>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                  {/* image */}
                  <div className="lg:flex-[0.4]">
                  <Image quality={90} src={Partner3} alt="banner" width={1400} height={800} className='w-[250px] h-[80px] object-cover' />
                  </div>
                  <p className="text-left lg:flex-[0.5]">
                  PT Lexica Cala Nusa bertanggung jawab atas desain dan pembangunan ruang rapat untuk PLN, memastikan setiap elemen sesuai dengan kebutuhan fungsional dan estetika. Kami fokus pada penyediaan solusi yang nyaman dan efisien, lengkap dengan perabotan dan peralatan modern untuk mendukung kegiatan rapat dan presentasi.</p>
            </div>
            <div className="hidden lg:flex flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>Galeri Proyek</h1>
                  <Swiper
                  slidesPerView={3.15}
                  spaceBetween={20}
                  modules={[]}
                  className="mySwiper"
                  >
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Pln1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className='w-[25%]'>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Pln2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  </Swiper>
            </div>
            <div className="lg:hidden flex flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>Galeri Proyek</h1>
                  <Swiper
                  slidesPerView={1.2}
                  spaceBetween={20}
                  modules={[]}
                  className="mySwiper"
                  >
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Pln1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                        <div className='w-full h-[200px] rounded-lg'>
                              <Image quality={90} src={Pln2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
                        </div>
                  </SwiperSlide>
                  </Swiper>
            </div>
      </div>
    </div>
  )
}

export default Project