import React from 'react'
import Image from "next/image"
import Logo from "../../../public/img/c2logoFooter.png"
import Link from 'next/link'
import { LinkPreview } from '../ui/link-preview'
import { Separator } from '../ui/separator'

function Footer() {
  return (
      <div className="bg-[#01377F] px-8 pt-16 w-screen md:px-24 lg:px-8 flex flex-col items-center justify-between gap-y-8">
      <div className="flex flex-col lg:flex-row w-full h-full items-start justify-between gap-y-14 lg:gap-y-0">
        {/* 1 */}
        <div className="w-full md:w-[28vw] flex gap-x-3 items-center">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image alt="lambang" src={Logo} width={1200} height={1200} className='w-[80%]' />
            
          </Link>
        </div>
        <div className=' h-[120px] my-auto w-[1px] bg-white hidden lg:inline-flex' />
        {/* 3 */}
        <div className='w-full lg:w-[25vw] space-y-2 flex flex-col items-center'>
          <span className="text-base font-bold tracking-wide text-gray-100">
            Social Media
          </span>
          <div className="flex flex-col items-end mt-1 space-y-3">
            <Link
              href="https://twitter.com/hmotritonitb?fbclid=IwZXh0bgNhZW0CMTAAAR2S4rdDXvWai37q-vD5ES-6XgbEbNUqaGfZlt7Z31fAMXtCT0ux7Q0FQOY_aem_ZXSqAwl0oAB5ydee5yMiKw"
              className="text-gray-100 transition-colors flex items-center justify-end gap-x-2 duration-300 hover:text-deep-purple-accent-400 w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
              <span className='text-md w-[80px]'>Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/hmotritonitb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-100 transition-colors flex items-center justify-end gap-x-2 duration-300 hover:text-deep-purple-accent-400 w-fit"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
              <span className='text-md w-[80px]'>Instagram</span>
            </Link>
            <Link
              href="https://www.facebook.com/HimpunanMahasiswaOseanografiITB"
              className="text-gray-100 transition-colors flex items-center justify-end gap-x-2 duration-300 hover:text-deep-purple-accent-400 w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
              <span className='text-md w-[80px]'>Facebook</span>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-300">
          </p>
        </div>
        <div className=' h-[120px] my-auto w-[1px] bg-white hidden lg:inline-flex' />
        {/* 2 */}
        <div className=" text-sm w-full lg:w-[25vw]  flex flex-col items-center lg:items-end gap-y-4">
          <p className="text-base font-bold tracking-wide text-gray-100">
            Contacts
          </p>
          <div className="flex gap-y-3 flex-col items-center lg:items-end">
            <div className="flex flex-col gap-y-2 items-center lg:items-end">
              <p className=" text-gray-300">Email</p>
              <a
                href="mailto:hmotritonitb129@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-gray-300 hover:text-deep-purple-800 text-center lg:text-end"
              >
                hmotritonitb129@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-y-2 items-center lg:items-end">
              <p className="mr-1 text-gray-300">Alamat</p>
              <a
                href="https://g.co/kgs/sWD4tJW"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-gray-300 hover:text-deep-purple-800 text-center lg:text-end"
              >
                Sekretariat HMO “TRITON” ITB, Gedung Labtek XI-B, Jalan Ganesa No. 10 Bandung 40132
              </a>
            </div>
          </div>
        </div>
      </div>
      <Separator orientation='horizontal' className=' w-full bg-white' />
      {/* arthaloka */}
      <div className="w-full flex items-center justify-center py-5">
        <p className="text-md text-gray-300">
        Build by{" "}
        <LinkPreview url="https://arthaloka.tech" className="text-gray-300 font-semibold">
        Arthaloka Technology
        </LinkPreview>
        </p>
      </div>
    </div>
  )
}

export default Footer