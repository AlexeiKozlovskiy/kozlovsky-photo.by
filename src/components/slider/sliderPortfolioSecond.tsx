'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { ROUTE, SliderProps } from '@/types/types';
import { useMediaQuery } from '@mui/material';
import { useAutoChangeImage } from './useAutoChangeImage';

export default function SliderPortfolioSecond({ sliderProps }: SliderProps) {
  const mediaMatches = useMediaQuery('(max-width:600px)');
  const imageIndex = useAutoChangeImage({ sliderProps });

  return (
    <section className="w-full h-[550px] opacity-90 max-xl:h-[450px] max-lg:h-[300px] max-md:h-[250px] max-[500px]:h-[200px] max-[400px]:h-[160px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        grabCursor={true}
        slidesPerView={mediaMatches ? 3 : 4}
        // pagination={{ type: 'bullets', clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {sliderProps.map(({ id, image, title, route }, ind) => (
          <SwiperSlide key={id} className="">
            <div
              className="h-full w-full absolute left-0 top-0 transition-background duration-700"
              style={{
                background: `url(${image[imageIndex[ind]]}) center center / cover no-repeat`,
              }}
            ></div>
            <div className="relative z-10 h-full flex items-end justify-center">
              <div className="text-center mb-10 max-sm:mb-2">
                <p className="text-2xl text-white max-lg:text-sm max-sm:text-[8px]">{title}</p>
                <Link href={ROUTE.PORTFOLIO + `${route}`} className="hover:underline pt-1 text-sm max-sm:text-[8px]">
                  Перейти →
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
