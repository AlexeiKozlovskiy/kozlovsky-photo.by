'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

interface SliderProps {
  data: Slide[];
}

export default function SliderMainFirst({ data }: SliderProps) {
  return (
    <section className="w-full h-screen h-full max-lg:h-[600px] max-sm:h-[450px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ type: 'bullets', clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map(({ id, image, tagline, title }) => (
          <SwiperSlide key={id} className="">
            <div
              className="h-full w-full absolute left-0 top-0"
              style={{
                background: `url(${image}) center center / cover no-repeat`,
              }}
            ></div>
            <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white">{title}</p>
                {tagline && <p className="text-md sm:text-xl lg:text-2xl font-semibold text-white">{tagline}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
