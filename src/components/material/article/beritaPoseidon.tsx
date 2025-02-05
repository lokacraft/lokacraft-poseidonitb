import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function BeritaPoseidon() {
      const news = [
            {
                  title: "iNews - Gelar POSEIDON 2024, Himpunan Mahasiswa Oseanografi ITB Ungkap Potensi Desa Pengarengan",
                  descripsi: "test deskripsi",
                  imgPoster: "https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738740558/LOKACRAFT-POSEIDON/HighlightVideo/glhsw9lc1zwezttbwgs8.png",
                  videoUrl: "https://www.inews.id/news/nasional/gelar-poseidon-2024-himpunan-mahasiswa-oseanografi-itb-ungkap-potensi-desa-pengarengan"
            },
            {
                  title: "Liputan ITB - POSEIDON ITB 2024 Bawakan Semangat Kolaborasi yang Menginspirasi, Memberdayakan, dan Menghubungkan",
                  descripsi: "test deskripsi",
                  imgPoster: "https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738740555/LOKACRAFT-POSEIDON/HighlightVideo/wtvceyacxe8ea14rxw0v.png",
                  videoUrl: "https://itb.ac.id/berita/poseidon-itb-2024-bawakan-semangat-kolaborasi-yang-menginspirasi-memberdayakan-dan-menghubungkan/61623"
            },
            {
                  title: "RCTV CIREBON - Kolaborasi Mahasiswa Selesaikan Persoalan Lingkungan Di Pengarengan",
                  descripsi: "test deskripsi",
                  imgPoster: "https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738740555/LOKACRAFT-POSEIDON/HighlightVideo/z8svfzrcjigfyescf4xm.jpg",
                  videoUrl: "https://youtu.be/vQWqXzrpSOM?feature=shared"
            },
            {
                  title: "RCTV CIREBON - Incenerator Sampah Tanpa Asap",
                  descripsi: "test deskripsi",
                  imgPoster: "https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738740554/LOKACRAFT-POSEIDON/HighlightVideo/llumnl59kh4snfal4ru0.jpg",
                  videoUrl: "https://youtu.be/OzLGgsN82u0?feature=shared "
            },
      ]
  return (
      <div className='w-[90vw] mx-auto flex flex-col gap-y-8 items-center'>
            {/* title */}
      <div className="h-[45vh] flex items-center justify-between pl-6 py-4 rounded-xl border-2 border-gray-600 w-full">
            <div className="flex flex-col gap-y-6">
                  <h1 className="text-5xl font-semibold">Berita POSEIDON</h1>
                  <p className="text-lg text-gray-600">Buku buku POSEIDON</p>
            </div>
      </div>

      {/* content */}
      <div className="w-full flex flex-wrap justify-evenly gap-4 align-middle">
      {news.map((item, index) => (
                              <Link href={item.videoUrl} key={index} className="pb-3 w-full lg:w-[31%] h-[460px] flex flex-col relative gap-y-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-300">
                                    {/* image */}
                                    <div className="w-full rounded-xl bg-gray-200 h-[70%]">
                                          {item.imgPoster && (
                                                      <Image
                                                      src={`${item.imgPoster}`}
                                                      alt={item.title}
                                                      className="w-full h-full object-cover rounded-xl"
                                                      width={600}
                                                      height={600}
                                                      />
                                          )}
                                    </div>
                                    <div className="flex flex-col gap-y-2 p-2 flex-1">
                                    {/* title */}
                                    <h1 className="text-lg font-semibold h-[80px]">{item.title}</h1>
                                    
                                   </div>
                              </Link>
                        ))}
      </div>
      
    </div>
  )
}

export default BeritaPoseidon