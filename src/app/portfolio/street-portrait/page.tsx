import type { Metadata } from 'next';
import { titillium_bold } from '@/styles/nextFonts';
import PortfolioGalery from '@/components/portfolioGalery/portfolioGalery';

export const metadata: Metadata = {
  title: 'Портфолио. Фоторграф в Минске Алексей Козловский',
  description: '',
};

const streetImages = [
  '/assets/pages/streetPortret/streetPortret_1.webp',
  '/assets/pages/streetPortret/streetPortret_2.webp',
  '/assets/pages/streetPortret/streetPortret_3.webp',
  '/assets/pages/streetPortret/streetPortret_4.webp',
  '/assets/pages/streetPortret/streetPortret_5.webp',
  '/assets/pages/streetPortret/streetPortret_6.webp',
  '/assets/pages/streetPortret/streetPortret_7.webp',
  '/assets/pages/streetPortret/streetPortret_8.webp',
  '/assets/pages/streetPortret/streetPortret_9.webp',
  '/assets/pages/streetPortret/streetPortret_10.webp',
  '/assets/pages/streetPortret/streetPortret_11.webp',
  '/assets/pages/streetPortret/streetPortret_12.webp',
  '/assets/pages/streetPortret/streetPortret_13.webp',
  '/assets/pages/streetPortret/streetPortret_14.webp',
  '/assets/pages/streetPortret/streetPortret_15.webp',
  '/assets/pages/streetPortret/streetPortret_16.webp',
  '/assets/pages/streetPortret/streetPortret_17.webp',
  '/assets/pages/streetPortret/streetPortret_18.webp',
  '/assets/pages/streetPortret/streetPortret_19.webp',
  '/assets/pages/streetPortret/streetPortret_20.webp',
  '/assets/pages/streetPortret/streetPortret_21.webp',
  '/assets/pages/streetPortret/streetPortret_22.webp',
  '/assets/pages/streetPortret/streetPortret_23.webp',
  '/assets/pages/streetPortret/streetPortret_24.webp',
  '/assets/pages/streetPortret/streetPortret_25.webp',
  '/assets/pages/streetPortret/streetPortret_26.webp',
  '/assets/pages/streetPortret/streetPortret_27.webp',
  '/assets/pages/streetPortret/streetPortret_28.webp',
  '/assets/pages/streetPortret/streetPortret_29.webp',
  '/assets/pages/streetPortret/streetPortret_30.webp',
];

export default async function StreetPortrait() {
  return (
    <main
      className={
        titillium_bold.className + ' flex min-h-100vh flex-col items-center justify-between p-20 max-sm:p-3 max-sm:pt-20'
      }
    >
      <h3 className="text-2xl mb-[20px]">STRET PORTRET</h3>
      <PortfolioGalery images={streetImages} alt="Street portrait image" />
    </main>
  );
}
