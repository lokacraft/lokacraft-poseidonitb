import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Proker1 from "../../../../public/img/home/c2programKerja1.png"
import Proker2 from "../../../../public/img/home/c2programKerja2.png"
import Proker3 from "../../../../public/img/home/c2programKerja3.png"
import Proker4 from "../../../../public/img/home/c2programKerja4.png"
import Proker5 from "../../../../public/img/home/c2programKerja5.jpg"
import Proker6 from "../../../../public/img/home/c2programKerja6.jpg"
import Proker7 from "../../../../public/img/home/c2programKerja7.jpg"

function Proker() {
  const OPTIONS: EmblaOptionsType = { align: 'start', loop: false }
  const slides = [
    { image: Proker5 ,
      title: 'Policy Brief', 
      content: `Program kerja penyusunan policy brief bertujuan untuk menyusun kajian mendalam mengenai isu-isu kunci yang dihadapi oleh Masyarakat Pengarengan, yaitu lingkungan, ekowisata, dan tata ruang  serta membantu birokrasi permasalahan masyarakat kepada stakeholder` },
    { image: Proker6 ,
        title: 'Diseminasi Policy Brief', 
        content: `Ngobrol untuk lingkungan (Ngulik) ditujukan untuk edukasi dan sosialisasi untuk
masyarakat Desa Pengarengan  Edukasi dan sosialisasi yang dilakukan akan
mengacu pada data lingkungan yang didapatkan agar masyarakat mengerti
kondisi lingkungannya saat ini dengan rinci.` },
    { image: Proker1 ,
      title: 'River Clean Up & Eduboard', 
      content: 'River Clean Up merupakan program kerja membersihkan sungai Desa Pengarengan tepatnya di wilayah Ekowisata Mangrove dilanjutkan dengan pembuatan papan informasi dan sosialisasi mengenai permasalahan lingkungan yang memengaruhi nelayan dan flora-fauna di Wisata Mangrove Pengarengan.' },
    { image: Proker2 ,
      title: 'Instrumentasi',
      content: 'Program kerja ini bertujuan untuk mengembangkan dan mengimplementasikan instrumentasi terkkait pencemaran sampah  serta sebagai wujud aplikasi ilmu pengetahuan dalam memecahkan masalah lingkungan. Istrumen yang akan dibuat adalah alat pembakar sampah tanpa mengeluarkan asap' },
    { image: Proker4 ,
        title: 'Free Medical Check-Up', 
        content: 'Kegiatan ini melibatkan tim medis dari BEM FK UI yang akan memberikan pemeriksaan kesehatan gratis serta penyuluhan tentang kebersihan dan pola hidup sehat.' },
    { image: Proker3 ,
      title: 'Nirwana Pengarengan (Exhibition)', 
      content: 'Pameran Nirwana Pengarengan merayakan kesempurnaan keberadaan Desa Pengarengan untuk meningkatkan pemahaman tentang pentingnya hubungan antara alam dan manusia dalam menjaga keberlanjutan lingkungan, khususnya di wilayah pesisir. Terdiri dari rangkaian diskusipanel, galeri POSEIDON, dan Etalase fotografi' },
      { image: Proker7 ,
        title: 'Workshop Digital Marketing & Branding', 
        content: `Kegiatan ini melibatkan NGO Incoaster dalam memberikan pelatihan
mengenai digital marketing dan branding kepada pemuda Desa
Pengarengan sebagai rotor penggerak desa agar dapat mengembangkan
UMKM setempat terutama usaha kerupuk ranjungan dan ikan gesek
sehingga mampu memperkuat perekonomian dan identitas Desa
Pengarengan` },
    ]
  return (
    <div className="h-fit w-[90%] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-center z-10">
      <h1 className="text-3xl z-20 font-semibold leading-[50px]">
          <span className="italic">
            Program Kerja
          </span> 
        </h1>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  )
}

export default Proker