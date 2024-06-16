import { ptSans } from '@/styles/nextFonts';
import Navigation from './navigation';
import LogoOwner from '@/components/logoOwner/logoOwner';

export default function Header() {
  return (
    <header
      className={
        ptSans.className +
        ' flex justify-between items-center pl-20 pr-20 cursor-pointer max-md:pl-10 max-md:pr-10 max-sm:pl-5 max-sm:pr-5'
      }
    >
      <LogoOwner />
      <Navigation />
    </header>
  );
}
