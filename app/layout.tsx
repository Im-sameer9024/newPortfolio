import type { Metadata } from "next";
import {  Big_Shoulders, Great_Vibes, La_Belle_Aurore, Righteous, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
})

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: "400",
})

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
})

const laBellaAuroea = La_Belle_Aurore({
  variable: "--font-la-belle-aurore",
  subsets: ["latin"],
  weight: "400",
})



export const metadata: Metadata = {
  title: {
    default: "Mohammad Sameer | Portfolio",
    template: "%s | MS"
  },
  description: "Professional portfolio of Mohammad Sameer, showcasing my skills, projects, and experience in web development.",
  keywords: [
    "portfolio",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX"
  ],
  authors: [{ name: "Mohammad Sameer",  }],
  creator: "Mohammad Sameer",
  publisher: "Mohammad Sameer",
  // metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Mohammad Sameer | Portfolio",
    description: "Professional portfolio of Mohammad Sameer, showcasing my skills, projects, and experience in web development.",
    // url: "http://localhost:3000",
    siteName: "Mohammad Sameer Portfolio",
    images: [
      {
        url: "/me.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Mohammad Sameer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Mohammad Sameer | Portfolio",
  //   description: "Professional portfolio of Mohammad Sameer, showcasing my skills, projects, and experience in web development.",
  //   images: ["/me.jpg"], // Replace with your actual Twitter image path
  //   creator: "@mohammad_sameer"
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
  // alternates: {
  //   canonical: "http://localhost:3000"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${laBellaAuroea.variable} ${righteous.variable} ${greatVibes.variable} ${bigShoulders.variable}  antialiased`}
      >
        <Toaster/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
