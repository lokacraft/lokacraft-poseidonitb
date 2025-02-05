'use client';
import { useEffect, useState } from 'react';
import Navbar from "@/components/material/navbar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

export default function Page({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Unwrap `params` menggunakan useEffect
  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await paramsPromise;
      setSlug(unwrappedParams.slug);
    };
    unwrapParams();
  }, [paramsPromise]);

  // Fungsi untuk mengambil artikel berdasarkan slug
  const fetchArticle = async (slug: string) => {
    try {
      const docRef = doc(db, 'articles', slug); // Ambil dokumen berdasarkan slug
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const articleData = docSnap.data();
        const authorId = articleData.authorId;
        const categoryId = articleData.categoryId;

        // Ambil data author dan kategori
        const [authorDoc, categoryDoc] = await Promise.all([
          authorId ? getDoc(doc(db, 'authors', authorId)) : null,
          categoryId ? getDoc(doc(db, 'categories', categoryId)) : null,
        ]);

        setArticle({
          ...articleData,
          author: authorDoc?.exists() ? authorDoc.data() : null,
          category: categoryDoc?.exists() ? categoryDoc.data() : null,
        });
      } else {
        console.error("Artikel tidak ditemukan");
        setArticle(null);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
      setArticle(null);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data artikel saat slug sudah tersedia
  useEffect(() => {
    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  // Tampilkan loading state jika data belum selesai diambil
  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-[#F7F8FF] text-gray-600">
        <Navbar />
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </main>
    );
  }

  // Tampilkan pesan jika artikel tidak ditemukan
  if (!article) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-[#F7F8FF] text-gray-600">
        <Navbar />
        <h1 className="text-2xl font-semibold text-red-500">Artikel tidak ditemukan!</h1>
      </main>
    );
  }

  return (
    <div className=" bg-[#F7F8FF] flex w-full flex-col items-center gap-y-20">
      {/* header */}
      <div className="flex flex-col gap-y-4 w-full lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:w-[80%] mx-auto lg:mt-[140px]">
        {/* image */}
        <div className="inline-flex lg:hidden w-full  bg-gray-400 h-[400px]">
          {article.imgUrl && (
            <Image
              src={article.imgUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              width={600}
              height={600}
            />
          )}
        </div>
        {/* description */}
        <div className="flex-1 flex flex-col gap-y-4 p-4">
          <Link href="/article/" className="w-full flex gap-x-3 items-center cursor-pointer">
          <IoMdArrowRoundBack className="w-6 h-6" />
          <span>kembali</span>
          </Link>
          {/* category & minute read */}
          <div className="w-full flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-700">
              {article.category?.name || "Tanpa Kategori"}
            </span>
            <span className="text-lg font-medium">
              Reading Time Estimate {article.minutesRead || "0"} mins
            </span>
          </div>
          {/* title & brief */}
          <div className="flex flex-col gap-y-3 max-w-full">
            <h1 className="text-2xl font-semibold text-black">
              {article.title}
            </h1>
            <p className="text-left font-light text-md text-gray-600">
              {article.brief}
            </p>
          </div>
          <Separator orientation='horizontal' />

          {/* author */}
          <div className="text-md text-gray-500 flex items-center gap-x-3">
          <Avatar>
                  <AvatarImage src={`${article.author?.imgUrl}`} />
                  <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span>
                  {article.author?.name || "Anonim"}
            </span>
          </div>
        </div>
        {/* image */}
        <div className="hidden lg:inline-flex w-[40%] rounded-xl bg-gray-400 h-[400px]">
          {article.imgUrl && (
            <Image
              src={article.imgUrl}
              alt={article.title}
              className="w-full h-full object-cover rounded-xl"
              width={600}
              height={600}
            />
          )}
        </div>
      </div>
      <Separator orientation='horizontal' className='w-[80%] my-8' />
      {/* content */}
      <div className="w-[80%] mx-auto mt-20">
      {article.body.split('<br />').map((item: string, index: number) => (
            <div key={index}>
                  <p className="text-left text-gray-700">{item}</p>
                  {/* Render dua baris kosong setelah setiap bagian */}
                  <div className="h-8"></div>
            </div>
      ))}
      </div>
    </div>
  );
}
