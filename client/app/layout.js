import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "../components/ThemeProvider";
import FluidBackground from "../components/FluidBackground";
import TransitionProvider from "../components/TransitionProvider";

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "xP0Z - OSINT Portfolio",
  description: "xP0Z shines a light on your public digital footprint so you can lock it down. Open-Source Intelligence Analyst & CTF Player.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CRYZ379GRK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CRYZ379GRK');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <FluidBackground />
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
