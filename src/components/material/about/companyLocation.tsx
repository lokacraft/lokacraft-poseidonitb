import Image from 'next/image'
import React from 'react'
import Location from "../../../../public/img/contact/location.jpg"
import Link from 'next/link'

function CompanyLocation() {
  return (
      <div className="mt-10 relative w-[90vw] mx-auto flex flex-col space-y-8 items-start justify-center">
      <h1 className='text-2xl font-semibold'>Our Location</h1>
      <Link href={"https://maps.app.goo.gl/BCMQMmzESmT91y4XA"} className='w-full h-[400px] bg-blue-800'>
        <Image quality={100} width={1200} height={1200} alt="location" src={Location} className='w-full h-full object-cover' />
      </Link>
    </div>
  )
}

export default CompanyLocation