import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, 'max-w-8xl')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
