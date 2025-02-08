import About2 from "@/components/material/home/about2";
import Header from "@/components/material/home/header";
import Partner from "@/components/material/home/partner";
import LatestArticle from "@/components/material/home/latestArticle";
import { Testimonial } from "@/components/material/home/testimonial";
import Proker from "@/components/material/home/proker";
import Banner from "../../../public/img/home/c2bottomBanner.png"
import BottomBanner from "@/components/material/bottomBanner";
import KenaganPoseidon from "@/components/material/home/kenaganPoseidon";
import { Kemitraan } from "@/components/material/about/kemitraan";

export default function Home() {
  return (
    <div className=" bg-[#F7F8FF] flex w-full flex-col items-center justify-between">
      {/* Header */}
      <Header />
      {/* About2 */}
      <About2 />
      {/* Proker */}
      <Proker />
      {/* testimonial */}
      <Testimonial />
      {/* Kenangan POSEIDON */}
      <KenaganPoseidon />
      {/* kemitraan */}
      <Kemitraan />
      {/* bottombanner */}
      <BottomBanner bannerImage={Banner} title="Mari Bergabung dan Dukung POSEIDON" path="/contact" />
    </div>
  );
}
