import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

function ContactHeader() {
  return (
    <div className='flex-[0.5] flex flex-col gap-y-6'>
      <div className="flex flex-col w-full gap-3">
      <span className="text-lg font-semibold">CONTACT US NOW</span>
            <h1 className='text-3xl font-semibold'>Come discuss your project with us</h1>
            <div className="h-1 w-[50%] bg-gray-700"></div>
      <p className="w-full text-left text-md font-normal">
      Have a project in mind? Let&lsquo;s chat about it! Our team is eager to hear your ideas and provide expert guidance to bring them to fruition. Schedule a consultation with us today and let&lsquo;s embark on this journey together.</p>
      </div>
      {/* cards */}
      <div className="flex flex-col w-full space-y-8 items-start">
            {/* contact */}
            <div className='w-full flex items-center space-x-6'>
                  <div className="w-[100px] h-[100px] rounded-full bg-[#E5F9FF] flex items-center justify-center">
                        <FaPhoneAlt className='text-2xl text-gray-600' />
                  </div>
                  <div className="flex flex-col flex-1 space-y-3">
                        <h1 className="text-2xl font-semibold">Contact</h1>
                        <div className="flex flex-col flex-1 space-y-0.5">
                              <h3 className=''>No. Telp: <span>+62 0823 3124 12</span></h3>
                              <h3 className=''>Email: <span>lexicacalanusa@gmail.com</span></h3>
                        </div>

                  </div>
            </div>
            {/* address */}
            <div className='w-full flex items-center space-x-6'>
                  <div className="w-[100px] h-[100px] rounded-full bg-[#E5F9FF] flex items-center justify-center">
                        
                  <FaAddressBook className='text-2xl text-gray-600' />
                  </div>
                  <div className="flex flex-col flex-1 space-y-3">
                        <h1 className="text-2xl font-semibold">Address</h1>
                        <div className="flex flex-col flex-1 space-y-0.5">
                              <h3 className=''><span>Jl. Gumuruh No.14, Batununggal, kota Bandung</span></h3>
                        </div>

                  </div>
            </div>
      </div>
      
    </div>
  )
}

export default ContactHeader