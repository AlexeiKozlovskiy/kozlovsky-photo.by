import type { Metadata } from 'next';
import { titillium_bold } from '@/styles/nextFonts';
import PortfolioGalery from '@/components/portfolioGalery/portfolioGalery';

export const metadata: Metadata = {
  title: 'Портфолио. Фоторграф в Минске Алексей Козловский',
  description: '',
};

const weddingImages = [
  '/assets/pages/wedding/wedding_1.webp',
  '/assets/pages/wedding/wedding_2.webp',
  '/assets/pages/wedding/wedding_3.webp',
  '/assets/pages/wedding/wedding_4.webp',
  '/assets/pages/wedding/wedding_5.webp',
  '/assets/pages/wedding/wedding_6.webp',
  '/assets/pages/wedding/wedding_7.webp',
  '/assets/pages/wedding/wedding_8.webp',
  '/assets/pages/wedding/wedding_9.webp',
];

export default async function Wedding() {
  return (
    <main
      className={
        titillium_bold.className + ' flex min-h-100vh flex-col items-center justify-between p-20 max-sm:p-3 max-sm:pt-20'
      }
    >
      <h3 className="text-2xl mb-[20px]">WEDDING</h3>
      <PortfolioGalery images={weddingImages} alt="Wedding image" />
    </main>
  );
}
