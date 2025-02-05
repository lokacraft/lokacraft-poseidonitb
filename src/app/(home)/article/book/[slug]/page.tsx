// @ts-nocheck
'use client';
import { forwardRef, useEffect, useState } from 'react';
import Navbar from "@/components/material/navbar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PagesProps {
  number: number;
  children?: React.ReactNode;
}

// Komponen Halaman Flipbook
const Pages = forwardRef<HTMLDivElement, PagesProps>(({ number, children }, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div>{children}</div>
    </div>
  );
});

Pages.displayName = "Pages";

export default function BookPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  // Unwrap `params` menggunakan useEffect
  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await paramsPromise;
      setSlug(unwrappedParams.slug);
    };
    unwrapParams();
  }, [paramsPromise]);

  // Fungsi untuk mengambil artikel berdasarkan slug
  const fetchBook = async (slug: string) => {
    try {
      const docRef = doc(db, 'books', slug); // Ambil dokumen berdasarkan slug
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const bookData = docSnap.data();

        setBook({
          ...bookData,
        });
      } else {
        console.error("Buku tidak ditemukan");
        setBook(null);
      }
    } catch (error) {
      console.error("Error fetching Book:", error);
      setBook(null);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data artikel saat slug sudah tersedia
  useEffect(() => {
    if (slug) {
      fetchBook(slug);
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
  if (!book) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-[#F7F8FF] text-gray-600">
        <Navbar />
        <h1 className="text-2xl font-semibold text-red-500">Buku tidak ditemukan!</h1>
      </main>
    );
  }


  return (
<div className='w-screen h-[calc(100vh+30vh)] flex items-center justify-center'>
      
    <HTMLFlipBook
      width={350}
      height={500}
      size="stretch"
      minWidth={250}
      maxWidth={400}
      minHeight={400}
      maxHeight={600}
      startPage={0}
      className="flipbook-container shadow-2xl"
      drawShadow={false}
        flippingTime={1700}
        usePortrait={true}
        startZIndex={10}
        maxShadowOpacity={0.5}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      style={{}}>
            {[...Array(numPages).keys()].map((pNum) => (
                              <Pages key={pNum} number={pNum + 1}>
                                    <Document file={`/${book.fileUrl}.pdf`} onLoadSuccess={pNum === 0 ? onDocumentLoadSuccess : undefined}>
                                          <Page pageNumber={pNum} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                                    </Document>
                                    {/* <p>
                                          Page {pNum} of {numPages}
                                    </p> */}
                              </Pages>
                              ))
            }
      </HTMLFlipBook>
      
</div>
  );
}
