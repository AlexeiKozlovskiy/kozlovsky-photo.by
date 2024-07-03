import '@/styles/customBtnMenu.scss';
import { roboto } from '@/styles/nextFonts';
import { Metadata } from 'next';
import Image from 'next/image';
import SliderMainFirst from '@/components/slider/sliderMainFirst';
import SliderPortfolioSecond from '@/components/slider/sliderPortfolioSecond';
import sliderMainFirstData from '@/components/slider/sliderMainFirstData.json';
import sliderPortfolioSecondData from '@/components/slider/sliderPortfolioSecondData.json';

export const metadata: Metadata = {
  title: 'Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default function Main() {
  return (
    <main className={roboto.className + ' flex flex-col items-center justify-between'}>
      <SliderMainFirst data={sliderMainFirstData} />
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
      <SliderPortfolioSecond sliderProps={sliderPortfolioSecondData} />
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
        <Image
          className="opacity-85 object-cover object-top"
          src="/assets/zapis.webp"
          alt="Записаться на съемку"
          fill={true}
        ></Image>
      </section>
    </main>
  );
}
