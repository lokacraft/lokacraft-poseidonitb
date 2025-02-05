import ImageBanner from '@/components/material/imageBanner'
// import Address from '@/components/material/address'
import Navbar from '@/components/material/navbar'
import React from 'react'
// import ContactSection from '@/components/material/contact/contactSection'
import Footer from '@/components/material/footer'
import CompanyLocation from '@/components/material/about/companyLocation'
import Banner from "../../../../public/img/contact/banner.png"

function Contact() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-[#F7F8FF] flex min-h-screen w-screen flex-col items-center">
      {/* navbar */}
      <Navbar />
      {/* ImageBanner */}
      <ImageBanner title='Contact' pathDescription='Home / Contact' bannerImage={Banner} />
      {/* contact section */}
      {/* <ContactSection /> */}
      {/* company Location */}
      <CompanyLocation />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default Contact