'use client';

import sliderPortfolioSecondData from '@/components/slider/sliderPortfolioSecondData.json';
import { useAutoChangeImage } from '@/components/slider/useAutoChangeImage';
import Image from 'next/image';

interface IImageCard {
  image: string | string[];
  title: string;
  ind: number;
}

export default function ImageCard({ image, title, ind }: IImageCard) {
  const imageIndex = useAutoChangeImage({ sliderProps: sliderPortfolioSecondData });

  return (
    <Image
      src={image[imageIndex[ind]]}
      // style={{ backgroundImage: `url(${image[imageIndex[ind]]})` }}
      priority={true}
      alt={title}
      width={360}
      height={450}
      className="w-[360px] h-[450px] rounded-md object-cover transition-all duration-700 max-sm:w-[150px] max-sm:h-[220px]"
    ></Image>
  );
}
