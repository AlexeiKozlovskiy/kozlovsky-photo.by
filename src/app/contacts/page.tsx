import { roboto } from '@/styles/nextFonts';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Контакты. Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default async function Contacts() {
  return (
    <main className={roboto.className + ' flex flex-col items-center justify-between p-10 max-[365px]:pb-2'}>
      <section className="max-w-6xl h-max text-start">
        <h2 className="text-2xl font-bold max-lg:text-1xl max-md:text-xl text-center p-10 max-[380px]:p-5 max-[380px]:pt-5">
          СВЯЖИТЕСЬ СО МНОЙ
        </h2>
        <div className="text-center flex flex-row items-center space-between gap-10 p-5 max-sm:p-2 max-sm:pt-2 max-sm:gap-5 max-[365px]:flex-col">
          <div
            className="shrink-0 h-[300px] w-[300px] max-md:h-[120px] max-md:w-[120px]"
            style={{
              background: `url("/assets/avatar.png") center center / cover no-repeat`,
              filter: `grayscale(100%)`,
            }}
          ></div>
          <div className="max-w-4xl flex flex-col items-right">
            <h3 className="pb-2 max-lg:text-sm max-md:">Мои контакты:</h3>
            <Link href="https://www.instagram.com/kozlovsky_foto?igsh=a3Jmdml6ZGp5eXVx" target="_blank" rel="noreferrer">
              <p className="max-lg:text-sm max-md:text-[10px] hover:underline">Instagram: @kozlovsky_foto</p>
            </Link>
            <p className="max-lg:text-sm max-md:text-[10px]">Tel: +375 29 507 35 86</p>
            <Link href="tel:+375 29 507 35 86" target="_blank" rel="noreferrer">
              <p className="max-lg:text-sm max-md:text-[10px] hover:underline">Telegram: @Rubi_Rod</p>
            </Link>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}
