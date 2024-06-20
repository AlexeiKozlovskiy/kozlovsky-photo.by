import SliderFirst from '@/components/slider/sliderFirst';
import SliderSecond from '@/components/slider/sliderSecond';
import { roboto } from '@/styles/nextFonts';
import { Metadata } from 'next';
import dataSliderFirst from '@/components/slider/first-slider-data.json';
import dataSliderSecond from '@/components/slider/second-slider-data.json';
import '@/styles/customBtnMenu.scss';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default function Main() {
  const instagramLinck = (
    <Link href="https://instagram.com" target="_blank" rel="noreferrer">
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
    </Link>
  );

  const telegramLinck = (
    <Link href="https://telegram.com" target="_blank" rel="noreferrer">
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
          <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
        </svg>
      </span>
    </Link>
  );

  const telefonLinck = (
    <Link href="tel:+79991112233" target="_blank" rel="noreferrer">
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </span>
    </Link>
  );

  return (
    <main className={roboto.className + ' flex flex-col items-center justify-between'}>
      <SliderFirst data={dataSliderFirst} />
      <section className="max-w-6xl h-max text-start">
        <div className="flex flex-row items-center space-between gap-10 p-[80px] max-md:flex-col max-md:p-[40px] max-sm:p-[30px] max-md:text-center">
          <div
            className="shrink-0 h-[240px] w-[240px] max-md:h-[120px] max-md:w-[120px]"
            style={{
              background: `url("/assets/avatar.png") center center / cover no-repeat`,
            }}
          ></div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold max-lg:text-2xl max-md:text-xl">
              Алексей Козловский — свадебный и репортажный фотограф.
            </h2>
            <p className="pt-12 max-lg:text-sm max-md:text-xs max-md:pt-6">
              Добро пожаловать на мой сайт, посвященный профессиональной фотографии! Меня зовут Алексей, и я являюсь создателем
              этого виртуального пространства, где вы можете вы можете ознакомиться с моим портфолио, узнать об услугах которые я
              я предоставляю, и многое другое.
            </p>
          </div>
        </div>
      </section>
      <SliderSecond data={dataSliderSecond} />
      <section className="p-28 max-md:p-14 max-sm:p-10">
        <p className="max-w-xl text-2xl font-bold text-center max-sm:text-sm">
          Для меня фотография — любимое дело, ставшее для меня профессией и смыслом жизни
        </p>
      </section>
      <section className="w-full h-[600px] relative max-xl:h-[400px]">
        <div className="z-10 bottom-10 absolute w-full flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold max-sm:text-xl">Записаться на съемку</h3>
          <p className="max-w-xl text-center p-5 text-sm max-sm:text-xs">
            Благодаря опыту и творческому подходу, я готов запечатлеть для вас самые важные моменты, создавая уникальные и
            неповторимые воспоминания.
          </p>
          <button className="customBtnMenu">
            <span data-text="КОНТАКТЫ">КОНТАКТЫ</span>
          </button>
        </div>
        <div
          className="h-full w-full absolute left-0 top-0"
          style={{
            background: `url("assets/100а.webp") center top / cover no-repeat`,
            opacity: 0.7,
          }}
        ></div>
      </section>
      <footer className="w-full h-full relative mt-5 p-5">
        <div className="z-10 flex flex-row items-center justify-center gap-5 pb-5">
          {instagramLinck}
          {telegramLinck}
          {telefonLinck}
        </div>
        <h4 className="text-sm font-bold text-center">Репортажный фотограф Алексей Козловский.</h4>
        <p className="text-xs font-bold text-center pt-2 max-sm:text-[10px]">
          Создание ярких воспоминаний о самых важных событиях в Вашей жизни. Минск, Беларусь.
        </p>
        <p className="text-xs text-center p-5 opacity-70 max-sm:text-[8px]">© 2024 Алексей Козловский</p>
      </footer>
    </main>
  );
}
