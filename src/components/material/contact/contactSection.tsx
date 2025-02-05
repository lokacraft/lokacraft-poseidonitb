import React from 'react'
import ContactHeader from './contactHeader'
// import ContactForm from './contactForm'

function ContactSection() {
  return (
    <div className='w-[90%] my-12 mx-auto flex flex-col lg:flex-row'>
      {/* left */}
      <ContactHeader />
      {/* right */}
      {/* <ContactForm /> */}
    </div>
  )
}

export default ContactSection