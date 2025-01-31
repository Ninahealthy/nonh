import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SearchForm from "@/components/Search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nina",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <Script
        id="Gtag"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-C8757P0MH2"
      />
      <Script
        id="Analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-C8757P0MH2');
          `,
        }}
      />
      <body>
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
