"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HmoContext } from '../../../../context/hmoContext'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function LatestArticle() {
  const { latestArticle } = useContext(HmoContext)

  return (
    <div className="w-full flex flex-wrap items-center justify-evenly gap-x-6 gap-y-8 lg:gap-y-14">
                        {latestArticle.map((item) => (
                              <Link href={`/article/read/${item.id}`} key={item.id} className="pb-3 w-full lg:w-[31%] h-[360px] flex flex-col relative gap-y-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-300">
                                    {/* image */}
                                    <div className="w-full rounded-xl bg-gray-200 h-[200px]">
                                          {item.data.imgUrl && (
                                                      <Image
                                                      src={item.data.imgUrl}
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
                                    {/* button */}
                                    <div className="w-full flex items-center justify-between">
                                          {/* author */}
                                          <div className="flex items-center gap-x-2">
                                                <Avatar>
                                                <AvatarImage src={`${item.data.author?.imgUrl}`} />
                                                <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <h1 className='text-sm font-semibold'>
                                                {item.data.author?.name || "Anonim"}
                                                </h1>
                                          </div>
                                          {/* category */}
                                          <span className="text-sm font-semibold text-gray-100 bg-blue-700 rounded-full px-3 py-2">
                                                {item.data.category?.name}
                                          </span>
                                    </div>
                              </Link>
                        ))}
                        </div>
  )
}

export default LatestArticle
