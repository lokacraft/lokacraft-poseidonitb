// "use client"
// import React, { useState } from 'react'
// import { compileWelcomeTemplate, sendMail } from "@/lib/mail";
// import { Send } from '@/lib/send';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"



// function ContactForm() {
//       const [name, setName] = useState<string>('');
//   const [from, setFrom] = useState<string>('');
//   const [phone, setPhone] = useState<string>('');
//   const [subject, setSubject] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

// //   const send = async () => {
// //     "use server";
// //     await sendMail({
// //       to: "ahadanfauzan123@gmail.com",
// //       name: name,
// //       subject: subject,
// //       body: compileWelcomeTemplate(message, "youtube.com/@sakuradev"),
// //     });
// //   };
//   return (
//     <div className='flex-[0.5] mt-12 lg:mt-0'>
//       <form
//       onSubmit={async (e) => {
//             e.preventDefault();
//             await Send({name,from,phone, subject, message});
//             setName('');
//             setFrom('');
//             setPhone('');
//             setSubject('');
//             setMessage('');
//           }}  className="px-4 py-8 w-[90%] mx-auto lg:ml-auto flex flex-col space-y-3 shadow-2xl lg:shadow-lg bg-[#E5F9FF] rounded-2xl">
//             {/* title */}
//             <h1 className="text-2xl font-semibold">Contact Us</h1>
//             {/* fields 1 */}
//             <div className='w-full flex justify-between items-start'>
//                   {/* name */}
//                   <div className="flex-[0.48] flex flex-col space-y-1">
//                         <span className='font-semibold'>Nama</span>
//                         <input 
//                         className='bg-transparent w-full h-[48px] rounded-lg border-2 border-gray-300 text-sm px-3 ring-0 outline-0'
//                         placeholder='Nama Anda..'
//                         type="text" name="" id=""
//                         value={name}
//                         onChange={(e) => setName(e.target.value)} />
//                   </div>
//                   {/* email */}
//                   <div className="flex-[0.48] flex flex-col space-y-1">
//                         <span className='font-semibold'>Email</span>
//                         <input 
//                         className='bg-transparent w-full h-[48px] rounded-lg border-2 border-gray-300 text-sm px-3 ring-0 outline-0'
//                         placeholder='Alamat Email..'
//                         type="email" 
//                         name="" 
//                         id=""
//                         value={from}
//                         onChange={(e) => setFrom(e.target.value)} />
//                   </div>
//             </div>
//             {/* fields 2 */}
//             <div className='w-full flex justify-between items-start'>
//                   {/* phone number */}
//                   <div className="flex-[0.48] flex flex-col space-y-1">
//                         <span className='font-semibold'>No. Telp</span>
//                         <input 
//                         className='bg-transparent w-full h-[48px] rounded-lg border-2 border-gray-300 text-sm px-3 ring-0 outline-0'
//                         type="text" name="" id=""
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         />
//                   </div>
//                   {/* subhject */}
//                   <div className="flex-[0.48] flex flex-col space-y-1">
//                         <span className='font-semibold'>Subject</span>
//                         <input 
//                         className='bg-transparent w-full h-[48px] rounded-lg border-2 border-gray-300 text-sm px-3 ring-0 outline-0'
//                         placeholder='Subject..'
//                         type="text" name="" id=""
//                         value={subject}
//               onChange={(e) => setSubject(e.target.value)} />
//                   </div>
//             </div>
//             {/* textarea */}
//             <div className="flex-[0.48] flex flex-col space-y-1">
//                         <span className='font-semibold'>Message</span>
//                         <textarea 
//                         className='bg-transparent w-full h-[100px] rounded-lg border-2 border-gray-300 text-sm px-3 ring-0 outline-0'
//                         placeholder=''
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}>
//                         </textarea>
//                   </div>
//             {/* submit button */}
//             <Dialog>
//   <DialogTrigger>
//             <button type="submit" className=' bg-blue-900 text-white px-3 py-1.5 rounded-lg border-0 outline-0 ring-0 w-[30%] max-w-[250px]'>
//                   Kirim
//             </button>
//   </DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Pesan Terkirim</DialogTitle>
//       <DialogDescription>
//       Terima kasih telah menghubungi kami. Pesan Anda telah berhasil terkirim dan akan segera kami proses.
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>

//       </form>
//     </div>
//   )
// }

// export default ContactForm