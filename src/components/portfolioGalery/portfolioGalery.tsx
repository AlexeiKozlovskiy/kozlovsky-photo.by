import { Box, ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

interface IProps {
  images: string[];
  alt: string;
}

export default function PortfolioGalery({ images, alt }: IProps) {
  const randomImages = images.sort(() => Math.random() - 0.5);

  return (
    <Box component="section" sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {randomImages.map((img) => (
          <ImageListItem key={img}>
            <Image
              src={img}
              alt={alt}
              width={248}
              height={408}
              priority={false}
              loading="lazy"
              unoptimized
              className="object-contain object-center w-auto h-auto"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
