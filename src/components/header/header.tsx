import { ptSans } from '@/styles/nextFonts';
import Navigation from './navigation';
import LogoOwner from '@/components/logoOwner/logoOwner';
import dynamic from 'next/dynamic';

const HeaderParentStyle = dynamic(() => import('./headerParentStyle'));

export default function Header() {
  return (
    <header className={ptSans.className + ' fixed top-0 left-0 z-10 w-full h-[50px]'}>
      <HeaderParentStyle>
        <LogoOwner />
        <Navigation />
      </HeaderParentStyle>
    </header>
  );
}
