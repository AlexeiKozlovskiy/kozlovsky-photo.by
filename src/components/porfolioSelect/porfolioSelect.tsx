import { titillium_bold } from '@/styles/nextFonts';
import { ROUTE } from '@/types/types';
import { Popover, Typography } from '@mui/material';
import Link from 'next/link';

interface ISelectPopoverPortfolio {
  id: string | undefined;
  anchorEl: HTMLButtonElement | null;
  openPopover: boolean;
  handlePopoverClose: () => void;
}

export default function SelectPopoverPortfolio({ id, anchorEl, openPopover, handlePopoverClose }: ISelectPopoverPortfolio) {
  return (
    <Popover
      id={id}
      sx={{
        '& .MuiPopover-paper': {
          background: 'rgb(0, 0, 0, 0.8)',
          boxShadow: 'none',
          color: 'white',
          margin: '20px 0 0 0',
        },
      }}
      open={openPopover}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={handlePopoverClose}
    >
      <Typography component="ul" sx={{ p: 1 }} className={titillium_bold.className + ' flex flex-col'}>
        <li className="cursor-pointer hover:text-gray-400 transition max-md:text-xs">
          <Link href={ROUTE.PORTFOLIO_LOVE_STORY}> LOVE STORY</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition max-md:text-xs">
          <Link href={ROUTE.PORTFOLIO_WEDDING}>WEDDING</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition max-md:text-xs">
          <Link href={ROUTE.PORTFOLIO_STUDIO}>STUDIO</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition max-md:text-xs">
          <Link href={ROUTE.PORTFOLIO_STREET}>STREET PORTRET</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition max-md:text-xs">
          <Link href={ROUTE.PORTFOLIO_BANQUET_CORPORATE}>BANQUETS AND CORPORATE</Link>
        </li>
      </Typography>
    </Popover>
  );
}
