'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { ROUTE } from '@/types/types';

interface Slide {
  id: number;
  title: string;
  image: string;
  route: string;
}
interface SliderProps {
  data: Slide[];
}

export default function SliderSecond({ data }: SliderProps) {
  return (
    <section className="w-full h-[550px] opacity-90">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        grabCursor={true}
        slidesPerView={4}
        pagination={{ type: 'bullets', clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map(({ id, image, title, route }) => (
          <SwiperSlide key={id} className="">
            <div
              className="h-full w-full absolute left-0 top-0"
              style={{
                background: `url(${image}) center center / cover no-repeat`,
              }}
            ></div>
            <div className="relative z-10 h-full flex items-end justify-center">
              <div className="text-center mb-10">
                <p className="text-1xl sm:text-2xl lg:text-3xl text-white">{title}</p>
                <Link href={ROUTE.PORTFOLIO + `${route}`} className="hover:underline pt-1 text-sm">
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
