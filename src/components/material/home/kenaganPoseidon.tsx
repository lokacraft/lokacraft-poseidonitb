"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Gall1 from "../../../../public/img/home/c2briefGallery1.png";
import Gall2 from "../../../../public/img/home/c2briefGallery2.png";
import Gall3 from "../../../../public/img/home/c2briefGallery3.png";
import Gall4 from "../../../../public/img/home/c2briefGallery4.png";

function KenaganPoseidon() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Transformasi Y untuk parallax (bergerak naik/turun berlawanan arah scroll)
  const yUp = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); // Bergerak ke bawah
  const yDown = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]); // Bergerak ke atas

  return (
    <div ref={ref} className="mb-20 relative h-screen w-[90%] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-center">
      {/* absolute content */}
      <div className="h-full w-full absolute flex items-center justify-center flex-col gap-y-4 z-40">
        <h1 className="text-3xl italic">Kenangan bersama POSEIDON</h1>
        <Link href="/gallery" className="bg-[#01377F] px-7 py-3 text-lg text-white rounded-full">
          View More
        </Link>
      </div>

      {/* top */}
      <div className="flex w-full h-1/2">
        <div className="flex w-1/2 h-full justify-center items-center">
          <motion.div className="w-[260px] h-[90%] object-cover" style={{ y: yUp }}>
            <Image src={Gall1} alt="i" width={800} height={900} className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <div className="flex w-1/2 h-full justify-center">
          <motion.div className="w-[200px] h-[90%] object-cover" style={{ y: yDown }}>
            <Image src={Gall3} alt="i" width={800} height={900} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex w-full h-1/2">
        <div className="flex w-1/2 h-full items-end justify-end pr-12">
          <motion.div className="w-[200px] h-[90%] object-cover" style={{ y: yDown }}>
            <Image src={Gall2} alt="i" width={800} height={900} className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <div className="flex w-1/2 h-full justify-center">
          <motion.div className="w-[260px] h-[90%] object-cover" style={{ y: yUp }}>
            <Image src={Gall4} alt="i" width={800} height={900} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default KenaganPoseidon;
