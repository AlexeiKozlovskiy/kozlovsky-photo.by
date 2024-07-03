import type { Metadata } from 'next';
import { titillium_bold } from '@/styles/nextFonts';
import PortfolioGalery from '@/components/portfolioGalery/portfolioGalery';

export const metadata: Metadata = {
  title: 'Портфолио. Фоторграф в Минске Алексей Козловский',
  description: '',
};

const studioImages = [
  '/assets/pages/studio/studio_1.webp',
  '/assets/pages/studio/studio_2.webp',
  '/assets/pages/studio/studio_3.webp',
  '/assets/pages/studio/studio_4.webp',
  '/assets/pages/studio/studio_5.webp',
  '/assets/pages/studio/studio_6.webp',
  '/assets/pages/studio/studio_7.webp',
  '/assets/pages/studio/studio_8.webp',
  '/assets/pages/studio/studio_9.webp',
  '/assets/pages/studio/studio_10.webp',
  '/assets/pages/studio/studio_11.webp',
  '/assets/pages/studio/studio_12.webp',
  '/assets/pages/studio/studio_13.webp',
];

export default async function Studio() {
  return (
    <main
      className={
        titillium_bold.className + ' flex min-h-100vh flex-col items-center justify-between p-20 max-sm:p-3 max-sm:pt-20'
      }
    >
      <h3 className="text-2xl mb-[20px]">STUDIO</h3>
      <PortfolioGalery images={studioImages} alt="Wedding image" />
    </main>
  );
}
