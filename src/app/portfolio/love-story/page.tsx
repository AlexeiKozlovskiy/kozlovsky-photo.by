import PortfolioGalery from '@/components/portfolioGalery/portfolioGalery';
import { titillium_bold } from '@/styles/nextFonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Портфолио. Фоторграф в Минске Алексей Козловский',
  description: 'Love story portfolio',
};

const loveStoryImages = [
  '/assets/pages/loveStory/loveStory_1.webp',
  '/assets/pages/loveStory/loveStory_2.webp',
  '/assets/pages/loveStory/loveStory_3.webp',
  '/assets/pages/loveStory/loveStory_4.webp',
  '/assets/pages/loveStory/loveStory_5.webp',
  '/assets/pages/loveStory/loveStory_6.webp',
  '/assets/pages/loveStory/loveStory_7.webp',
];

export default async function LoveStory() {
  return (
    <main
      className={
        titillium_bold.className + ' flex min-h-100vh flex-col items-center justify-between p-20 max-sm:p-3 max-sm:pt-20'
      }
    >
      <h3 className="text-2xl mb-[20px]">LOVE STORY</h3>
      <PortfolioGalery images={loveStoryImages} alt="Love story image" />
    </main>
  );
}
