import { roboto } from '@/styles/nextFonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О себе. Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default async function About() {
  return (
    <main className={roboto.className + ' flex min-h-screen flex-col items-center justify-between p-20'}>
      <div>About page</div>
    </main>
  );
}
