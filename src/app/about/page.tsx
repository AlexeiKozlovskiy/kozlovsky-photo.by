import { roboto } from '@/styles/nextFonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О себе. Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default async function About() {
  return (
    <main className={roboto.className + ' flex flex-col items-center justify-between p-10'}>
      <section className="max-w-6xl h-max text-start">
        <div className="flex flex-row items-center space-between gap-10 p-5 flex-col max-sm:p-2 max-sm:pt-5 max-md:text-center">
          <div
            className="shrink-0 h-[400px] w-[400px] max-md:h-[200px] max-md:w-[200px]"
            style={{
              background: `url("/assets/avatar.png") center center / cover no-repeat`,
            }}
          ></div>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold max-lg:text-2xl max-md:text-xl text-center">ОБО МНЕ</h2>
            <p className="text-center pt-12 max-lg:text-sm max-md:text-xs max-md:pt-6">
              Меня зовут Алексей, я портретный и репортажный фотограф. Фотография — моя возможность зафиксировать жизнь, эмоции и
              красоту. Я всегда стремлюсь улавливать красоту и художественность в их разнообразии и неповторимости. Минск, мой
              дом, вдохновляет меня своей историей, его тайными уголками. На съемке я создаю атмосферу творчества и легкости,
              вселяю уверенность и располагаю к себе. В работе я стремлюсь запечатлеть моменты искренности, любви и радости.
              Давайте вместе создадим великолепные кадры, наполненные воспоминаниями на всю жизнь!
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}
