import type { Metadata } from "next";
import { HmoDataProvider } from "../../../context/hmoContext";
import Navbar from "@/components/material/navbar";
import Footer from "@/components/material/footer";



export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HmoDataProvider>
      <section
        className={` antialiased`}
        >
          <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-[#F7F8FF] flex min-h-screen w-screen flex-col items-center justify-between">
          <Navbar />
          {children}
          {/* Footer */}
          <Footer />
          </main>
      </section>
    </HmoDataProvider>
  );
}
