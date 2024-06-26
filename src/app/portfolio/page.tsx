import type { Metadata } from 'next';
import Link from 'next/link';
import { roboto } from '@/styles/nextFonts';
import sliderPortfolioSecondData from '@/components/slider/sliderPortfolioSecondData.json';
import { ROUTE, Slide } from '@/types/types';
import ImageCard from './imageCard';

export const metadata: Metadata = {
  title: 'Портфолио. Фоторграф в Минске Алексей Козловский',
  description: '',
};

interface ICard extends Slide {
  ind: number;
}

function Card({ id, image, title, route, ind }: ICard) {
  return (
    <Link data-id={id} href={ROUTE.PORTFOLIO + `${route}`} className="relative">
      <ImageCard image={image} title={title} ind={ind} />
      <h3 className="text-3xl absolute bottom-[20px] left-[20px] md:group-hover:bottom-[50px] md:group-hover:left-[50px] group-hover:text-4xl transition-all duration-700 ease-out max-sm:text-xl max-sm:group-hover:text-xl">
        {title}
      </h3>
    </Link>
  );
}

export default async function Portfolio() {
  return (
    <main className={roboto.className + ' flex flex-col items-center justify-between p-20 max-sm:p-3 max-sm:pt-10'}>
      <section className="flex flex-row flex-wrap gap-12 justify-center mt-10 max-sm:gap-3">
        {sliderPortfolioSecondData.map(({ id, image, title, route }, ind) => (
          <div
            key={id}
            className="hover:cursor-pointer hover:scale-110 group transition duration-700 ease-out hover:opacity-100 opacity-85 max-sm:hover:scale-105"
          >
            <Card id={id} image={image} title={title} route={route} ind={ind} />
          </div>
        ))}
      </section>
    </main>
  );
}
