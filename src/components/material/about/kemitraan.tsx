"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"; 
import AboutUs from "../../../../public/img/logo.png"
import Mitra1 from "../../../../public/img/about/c2mitra1.jpg"
import Mitra2 from "../../../../public/img/about/c2mitra2.png"
import Mitra3 from "../../../../public/img/about/c2mitra3.jpg"
import Mitra4 from "../../../../public/img/about/c2mitra4.png"
import Mitra5 from "../../../../public/img/about/c2mitra5.png"
import Mitra6 from "../../../../public/img/about/c2mitra6.png"
import Mitra7 from "../../../../public/img/about/c2mitra7.png"
import Mitra8 from "../../../../public/img/about/c2mitra8.jpg"
import Mitra9 from "../../../../public/img/about/c2mitra9.png"
import Mitra10 from "../../../../public/img/about/c2mitra10.png"
import Mitra11 from "../../../../public/img/about/c2mitra11.png"
import Mitra12 from "../../../../public/img/about/c2mitra12.png"
import Mitra13 from "../../../../public/img/about/c2mitra13.png"
import Mitra14 from "../../../../public/img/about/c2mitra14.png"
import Mitra15 from "../../../../public/img/about/c2mitra15.png"
import Mitra16 from "../../../../public/img/about/c2mitra16.png"
import Mitra17 from "../../../../public/img/about/c2mitra17.jpg"
import Mitra18 from "../../../../public/img/about/c2mitra18.jpg"

export function Kemitraan() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col gap-y-6 antialiased items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl z-20 font-semibold leading-[50px]">
            <span className="italic">Kemitraan Kami</span>
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        pauseOnHover={true}
      />
    </div>
  );
}

const testimonials = [
  {
    image: Mitra1,
    name: "a1",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra2,
    name: "a2",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra3,
    name: "a3",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra4,
    name: "a4",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra5,
    name: "a5",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra6,
    name: "a6",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra7,
    name: "a7",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra8,
    name: "a8",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra9,
    name: "a9",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra10,
    name: "a10",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra11,
    name: "a11",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra12,
    name: "a12",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra13,
    name: "a13",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra14,
    name: "a14",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra15,
    name: "a15",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra16,
    name: "a16",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra17,
    name: "a17",
    title: "A Tale of Two Cities",
  },
  {
    image: Mitra18,
    name: "a18",
    title: "A Tale of Two Cities",
  },
];
