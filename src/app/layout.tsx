import type { Metadata } from "next";
// import { Geist, Geist_Mono  } from "next/font/google";
import { Montserrat  } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const mont_serrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POSEIDON",
  description: "triton itb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont_serrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
