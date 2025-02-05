"use client"
import React, { useContext } from 'react'
import { HmoContext } from '../../../../context/hmoContext'
import Link from 'next/link'
import Image from 'next/image'
import LatestArticle from '../home/latestArticle'

function BukuPoseidon() {
      const {books} = useContext(HmoContext)
  return (
    <div className='w-[90vw] mx-auto flex flex-col gap-y-8 items-center'>
      {/* latest article */}
      <div id="article-terbaru" className="mt-20 w-[90w] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-start z-10">
                  <h1 className="text-3xl z-20 font-semibold leading-[50px]">
                  <span className="italic">
                        Terbaru
                  </span> 
                  </h1>
                  <div className="w-full mb-8">
                        {/* artikel */}
                        <LatestArticle />
                  </div>
      </div>
      {/* title */}
      <div className="h-[45vh] flex items-center justify-between pl-6 py-4 rounded-xl border-2 border-gray-600 w-full">
            <div className="flex flex-col gap-y-6">
                  <h1 className="text-5xl font-semibold">Policy Brief</h1>
                  <p className="text-lg text-gray-600">Buku buku POSEIDON</p>
            </div>
      </div>
      {/* content */}
      
      <div className="w-full flex flex-wrap justify-evenly gap-4 align-middle">
      {books.map((item) => (
                              <Link href={`/article/book/${item.id}`} key={item.id} className="pb-3 w-full lg:w-[31%] h-[460px] flex flex-col relative gap-y-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-300">
                                    {/* image */}
                                    <div className="w-full rounded-xl bg-gray-200 h-[70%]">
                                          {item.data.bannerUrl && (
                                                      <Image
                                                      src={`/${item.data.bannerUrl}.jpg`}
                                                      alt={item.data.title}
                                                      className="w-full h-full object-cover rounded-xl"
                                                      width={600}
                                                      height={600}
                                                      />
                                          )}
                                    </div>
                                    <div className="flex flex-col gap-y-2 p-2 flex-1">
                                    {/* title */}
                                    <h1 className="text-lg font-semibold h-[80px]">{item.data.title}</h1>
                                    
                                   </div>
                              </Link>
                        ))}
      </div>
      </div>
  )
}

export default BukuPoseidon