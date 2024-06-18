import { titillium } from '@/styles/nextFonts';
import { ROUTE } from '@/types/types';
import Link from 'next/link';

export default function logoOwner() {
  return (
    <Link href={ROUTE.MAIN} className={titillium.className + ' text-nowrap max-lg:text-sm max-md:text-xs'}>
      ALEXEI KOZLOVSKY
    </Link>
  );
}
