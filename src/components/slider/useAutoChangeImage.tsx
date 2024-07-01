import { SliderProps } from '@/types/types';
import { useEffect, useState } from 'react';

export function useAutoChangeImage({ sliderProps }: SliderProps) {
  const initialArray = Array(sliderProps.length).fill(0);
  const [imageIndex, setImageIndex] = useState(initialArray);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCategory = Math.floor(Math.random() * sliderProps.length);
      const randomIndex = Math.floor(Math.random() * sliderProps[randomCategory].image.length);

      setImageIndex((prev) => {
        const newIndex = (prev[randomCategory] = randomIndex) % sliderProps.length;
        const newArray = [...prev];
        newArray[randomCategory] = newIndex;
        return newArray;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return imageIndex;
}
