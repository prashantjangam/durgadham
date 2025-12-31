import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import ClientProviders from '@/components/client-providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased overflow-x-hidden">
        <ClientProviders>
          <div className="flex min-h-screen flex-col">
            <Header />

            {/* IMPORTANT: no max-width here */}
            <main className="flex-1 w-full">
              {children}
            </main>

            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
