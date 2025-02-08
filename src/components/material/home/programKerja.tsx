import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Proker1 from "../../../../public/img/home/c2programKerja1.png"
import Proker2 from "../../../../public/img/home/c2programKerja2.png"
import Proker3 from "../../../../public/img/home/c2programKerja3.png"
import Proker4 from "../../../../public/img/home/c2programKerja4.png"
import Proker5 from "../../../../public/img/home/c2programKerja5.jpg"
import Proker6 from "../../../../public/img/home/c2programKerja6.jpg"
import Proker7 from "../../../../public/img/home/c2programKerja7.jpg"

export function ProgramKerja() {
  const programKerjas = [
    { src: Proker5 ,
      name: 'Policy Brief', 
      quote: `Program kerja penyusunan policy brief bertujuan untuk menyusun kajian mendalam mengenai isu-isu kunci yang dihadapi oleh Masyarakat Pengarengan, yaitu lingkungan, ekowisata, dan tata ruang  serta membantu birokrasi permasalahan masyarakat kepada stakeholder` },
    { src: Proker6 ,
        name: 'Diseminasi Policy Brief', 
        quote: `Ngobrol untuk lingkungan (Ngulik) ditujukan untuk edukasi dan sosialisasi untuk
masyarakat Desa Pengarengan  Edukasi dan sosialisasi yang dilakukan akan
mengacu pada data lingkungan yang didapatkan agar masyarakat mengerti
kondisi lingkungannya saat ini dengan rinci.` },
    { src: Proker1 ,
      name: 'River Clean Up & Eduboard', 
      quote: 'River Clean Up merupakan program kerja membersihkan sungai Desa Pengarengan tepatnya di wilayah Ekowisata Mangrove dilanjutkan dengan pembuatan papan informasi dan sosialisasi mengenai permasalahan lingkungan yang memengaruhi nelayan dan flora-fauna di Wisata Mangrove Pengarengan.' },
    { src: Proker2 ,
      name: 'Instrumentasi',
      quote: 'Program kerja ini bertujuan untuk mengembangkan dan mengimplementasikan instrumentasi terkkait pencemaran sampah  serta sebagai wujud aplikasi ilmu pengetahuan dalam memecahkan masalah lingkungan. Istrumen yang akan dibuat adalah alat pembakar sampah tanpa mengeluarkan asap' },
    { src: Proker4 ,
        name: 'Free Medical Check-Up', 
        quote: 'Kegiatan ini melibatkan tim medis dari BEM FK UI yang akan memberikan pemeriksaan kesehatan gratis serta penyuluhan tentang kebersihan dan pola hidup sehat.' },
    { src: Proker3 ,
      name: 'Nirwana Pengarengan (Exhibition)', 
      quote: 'Pameran Nirwana Pengarengan merayakan kesempurnaan keberadaan Desa Pengarengan untuk meningkatkan pemahaman tentang pentingnya hubungan antara alam dan manusia dalam menjaga keberlanjutan lingkungan, khususnya di wilayah pesisir. Terdiri dari rangkaian diskusipanel, galeri POSEIDON, dan Etalase fotografi' },
      { src: Proker7 ,
        name: 'Workshop Digital Marketing & Branding', 
        quote: `Kegiatan ini melibatkan NGO Incoaster dalam memberikan pelatihan
mengenai digital marketing dan branding kepada pemuda Desa
Pengarengan sebagai rotor penggerak desa agar dapat mengembangkan
UMKM setempat terutama usaha kerupuk ranjungan dan ikan gesek
sehingga mampu memperkuat perekonomian dan identitas Desa
Pengarengan` },
  ];
  return (
      <div id="testimonial" className="mt-20 w-[90%] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-center z-10">
        <h1 className="text-3xl z-20 font-semibold leading-[50px]">
          <span className="italic">
            Program Kerja Kami
          </span> 
        </h1>
            <AnimatedTestimonials isLandScape={true} testimonials={programKerjas} />
      </div>
  ); 
}
