"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CgMenuLeft } from "react-icons/cg";
import Logo from "../../../public/img/c2logoNav.png"



function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
      useEffect(() => {
        const scrollHeader = () => {
          if(window.scrollY >= 20) {
            setShowNavbar(true)
          } else {
            setShowNavbar(false)
          }
        }
        window.addEventListener('scroll', scrollHeader);
        return () => {
          window.removeEventListener('scroll', scrollHeader);
        }
    
      }, []);
  return (
    <div className={`${showNavbar===false? "bg-transparent text-gray-100" : "bg-[#F7F8FF] text-gray-600 shadow-sm shadow-gray-200 transition-all ease-in duration-300"} fixed z-50 top-0 left-0 w-screen h-[90px] px-[5vw] flex flex-col items-center`}>
      <div className="flex items-center justify-between flex-1 w-full">

        {/* left */}
        <a href='/' className='scale-[0.8] lg:scale-100 flex items-center justify-start space-x-2 cursor-pointer'>
              <Image priority quality={100} alt="image" src={Logo} width={800} height={500} className='w-[125px]' />
        </a>
        {/* right lg */}
        <div className='hidden flex-1 lg:flex lg:items-center lg:justify-center gap-x-[6%] text-xl'>
              <a href={"/"} className="hover:scale-105 hover:text-[#FFB438] transition-all ease-in duration-150">Home</a>
              <a href={"/about"} className="hover:scale-105 hover:text-[#FFB438] transition-all ease-in duration-150">About</a>
              <a href={"/activity"} className="hover:scale-105 hover:text-[#FFB438] transition-all ease-in duration-150">Activity</a>
              <a href={"/article"} className="hover:scale-105 hover:text-[#FFB438] transition-all ease-in duration-150">Article</a>
              <a href={"/gallery"} className="hover:scale-105 hover:text-[#FFB438] transition-all ease-in duration-150">Gallery</a>
        </div>
        <a href={"/contact"} className={`hidden lg:inline-flex px-4 py-3 ${showNavbar===false? 'hover:bg-[#DA9B34] transition-all bg-gray-400 bg-opacity-40' : 'bg-[#DA9B34]'} duration-300 rounded-full text-white`}>Contact Us</a>
        {/* deskripsi sm */}
        <div className='inline-flex lg:hidden'>
                    <Sheet>
                            <SheetTrigger>
                              <CgMenuLeft className='h-6 w-6 hover:rotate-[360deg] hover:scale-105 duration-300' />
                            </SheetTrigger>
                            <SheetContent>
                              <SheetHeader>
                                <SheetDescription>
                                <div className='flex text-lg flex-col text-md font-semi-bold items-start justify-start space-y-8 mt-[100px]'>
                                    <a href={"/"} className='flex items-center justify-start space-x-2'>
                                      <h1>Home</h1>  
                                    </a> 
                                    <a href={"/about"} className='flex items-center justify-start space-x-2'>
                                      <h1>About</h1>  
                                    </a> 
                                    <a href={"/activity"} className='flex items-center justify-start space-x-2'>
                                      <h1>Activity</h1>  
                                    </a> 
                                    <a href={"/article"} className='flex items-center justify-start space-x-2'>
                                      <h1>Article</h1>  
                                    </a> 
                                    <a href={"/gallery"} className='flex items-center justify-start space-x-2'>
                                      <h1>Gallery</h1>  
                                    </a> 
                                    <a href={"/contact"} className='flex items-center justify-start space-x-2'>
                                      <h1>Contact</h1>  
                                    </a> 
                                </div>
                                </SheetDescription>
                              </SheetHeader>
                            </SheetContent>
                    </Sheet>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white bg-opacity-40 rounded-full"></div>


      
    </div>
  )
}

export default Navbar