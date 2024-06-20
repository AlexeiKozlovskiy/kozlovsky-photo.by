import { useEffect, useRef } from 'react';

interface IUseBGScroll {
  position: number;
  color: string;
}

export function useBGScroll({ position, color }: IUseBGScroll) {
  const refElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const header = refElement.current;
      if (!header) {
        return;
      } else if (scrollTop > position) {
        header.style.backgroundColor = color;
      } else {
        header.style.backgroundColor = '';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return refElement;
}
