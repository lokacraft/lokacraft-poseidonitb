"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HmoContext } from '../../../../context/hmoContext'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



function ArticleLists() {
      const {article} = useContext(HmoContext)
      const {category} = useContext(HmoContext)
  return (
    <div className='w-full flex flex-col gap-y-10 p-8'>
      {/* content */}
      <div className="w-full  gap-4">
            
            {/* use */}
            <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        {category.map((item) => (
                              <TabsTrigger key={item.id} value={item.id}>{item.data.name}</TabsTrigger>
                        ))}
                  </TabsList>
                  <TabsContent value="all" className='flex flex-col items-center gap-y-8'>
                        {/* title */}
                        <div className="h-[45vh] flex items-center justify-between pl-6 py-4 rounded-xl border-2 border-gray-600 w-full">
                              <div className="flex flex-col gap-y-6">
                                    <h1 className="text-5xl font-semibold">Semua Artikel</h1>
                                    <p className="text-lg text-gray-600">Menampilkan {article.length} Hasil</p>
                              </div>
                        </div>
                        <div className="w-full flex flex-wrap items-center justify-evenly gap-x-6 gap-y-8 lg:gap-y-14">
                        {article.map((item) => (
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
                                          <span className="text-sm font-semibold text-gray-100 bg-[#01377F] rounded-full px-3 py-2">
                                                {item.data.category?.name}
                                          </span>
                                    </div>
                              </Link>
                        ))}
                        </div>
                  </TabsContent>
                  {/* other tab */}
                  {category.map((cat) => (
                        <TabsContent key={cat.id} value={cat.id} className='flex flex-col items-center gap-y-8'>
                              {/* title */}
                              <div className="h-[45vh] flex items-center justify-between pl-6 py-4 rounded-xl border-2 border-gray-600 w-full">
                              <div className="flex flex-col gap-y-6">
                                    <h1 className="text-5xl font-semibold">{cat.data.name}</h1>
                                    <p className="text-lg text-gray-600">Menampilkan {article.filter(item => item.data.categoryId === cat.id).length} Hasil</p>
                              </div>
                        </div>
                        <div className="w-full flex flex-wrap justify-evenly gap-4 align-middle">
                        {article
                              .filter((item) => item.data.categoryId === cat.id)
                              .map((item) => (
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
                                          <span className="text-sm font-semibold text-gray-100 bg-[#01377F] rounded-full px-3 py-2">
                                                {item.data.category?.name}
                                          </span>
                                    </div>
                              </Link>
                              ))}
                        </div>
                        </TabsContent>
                  ))}
            </Tabs>


      </div>
    </div>
  )
}

export default ArticleLists