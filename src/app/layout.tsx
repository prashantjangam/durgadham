'use client';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { StrictMode, use } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <GoogleReCaptchaProvider
          reCaptchaKey="6LdOATssAAAAAHSThqXSBPylj_ndQroElZKmBMty" // Replace with your site key
          scriptProps={{ async: true, defer: true }}
        >
    <html lang="mr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex justify-center">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
      </GoogleReCaptchaProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
  );
}
