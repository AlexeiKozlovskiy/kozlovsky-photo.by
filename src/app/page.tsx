import { roboto } from '@/styles/nextFonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фоторграф в Минске Алексей Козловский',
  description: '',
};

export default function Main() {
  return (
    <main className={roboto.className + ' flex min-h-screen flex-col items-center justify-between p-20'}>
      <div>Main page</div>
    </main>
  );
}
