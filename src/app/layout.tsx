import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import ClientProviders from '@/components/client-providers';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <ClientProviders>
            <Header />
            <main className="flex-grow flex justify-center">
              <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
                {children}
              </div>
            </main>
            <Footer />
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}
