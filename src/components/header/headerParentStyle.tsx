'use client';

import { useBGScroll } from './useBGScroll';

interface IheaderParentStyle {
  children?: React.ReactNode;
}

export default function HeaderParentStyle({ children }: IheaderParentStyle) {
  const position = 150;
  const color = 'rgba(9,9,9, 1.0)';
  const headerRef = useBGScroll({ position, color });

  return (
    <div
      ref={headerRef}
      className="w-full h-full bg-[rgba(9,9,9,0.2)] transition-background duration-700 flex justify-between items-center pl-20 pr-20 max-md:pl-10 max-md:pr-10 max-sm:pl-5 max-sm:pr-5"
    >
      {children}
    </div>
  );
}
