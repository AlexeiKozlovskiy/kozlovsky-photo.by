'use client';
import { Box, ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { ModalGalery } from './modalGalery';
import { useState } from 'react';

interface PortfolioGaleryProps {
  images: string[];
  alt: string;
}

export default function PortfolioGalery({ images, alt }: PortfolioGaleryProps) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const [chosenImage, setChosenImage] = useState('');

  // const randomImages = images.sort(() => Math.random() - 0.5);

  return (
    <Box component="section" sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <ModalGalery openModal={openModal} setOpenModal={setOpenModal} chosenImage={chosenImage} />
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((img) => (
          <ImageListItem key={img} onClick={handleOpenModal} onClickCapture={() => setChosenImage(img)}>
            <Image
              src={img}
              alt={alt}
              width={248}
              height={408}
              priority={false}
              loading="lazy"
              unoptimized
              className="object-contain object-center w-auto h-auto hover:cursor-pointer"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
