"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: StaticImageData;
  alt: string;
  index: number;
  totalImages: number;
}

export default function ParallaxImage({ src, alt, index, totalImages }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Responsif terhadap scroll
  });

  // Perhitungan offset gambar satu per satu
  const start = index / totalImages;
  const end = (index + 1) / totalImages;

  // Efek Parallax (Perubahan posisi Y)
  const y = useTransform(scrollYProgress, [start, end], ["40%", "0%"]);

  // Efek Opacity agar gambar bertumpuk secara smooth
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ y, opacity, zIndex: index + 1 }}
    >
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </motion.div>
  );
}
