import PortfolioGalery from '@/components/portfolioGalery/portfolioGalery';
import { titillium_bold } from '@/styles/nextFonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Портфолио. Фоторграф в Минске Алексей Козловский',
  description: '',
};

const banquetsCorporatesImages = [
  '/assets/pages/banquets&corporates/corp_1.webp',
  '/assets/pages/banquets&corporates/corp_2.webp',
  '/assets/pages/banquets&corporates/corp_3.webp',
  '/assets/pages/banquets&corporates/corp_4.webp',
  '/assets/pages/banquets&corporates/corp_5.webp',
  '/assets/pages/banquets&corporates/corp_6.webp',
  '/assets/pages/banquets&corporates/corp_7.webp',
  '/assets/pages/banquets&corporates/corp_8.webp',
  '/assets/pages/banquets&corporates/corp_9.webp',
  '/assets/pages/banquets&corporates/corp_10.webp',
  '/assets/pages/banquets&corporates/corp_11.webp',
  '/assets/pages/banquets&corporates/corp_12.webp',
];

export default async function BanquetsCorporates() {
  return (
    <main
      className={
        titillium_bold.className + ' flex min-h-100vh flex-col items-center justify-between p-20 max-sm:p-3 max-sm:pt-20'
      }
    >
      <h3 className="text-2xl mb-[20px]">BANQUEST & CORPORATES</h3>
      <PortfolioGalery images={banquetsCorporatesImages} alt="Love story image" />
    </main>
  );
}
