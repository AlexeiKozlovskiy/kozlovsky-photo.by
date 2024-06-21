'use client';

import { ROUTE } from '@/types/types';
import { SxProps, Tab, Tabs, Theme, useMediaQuery } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SelectPopoverPortfolio from '@/components/porfolioSelect/porfolioSelect';

export default function Navigation() {
  const pathname = usePathname();
  const mediaMatches480 = useMediaQuery('(max-width:480px)');
  const mediaMatches768 = useMediaQuery('(max-width:768px)');
  const mediaMatches1024 = useMediaQuery('(max-width:1024px)');
  const [openExpand, setOpenExpand] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;
  const color = '#fff';
  const router = useRouter();

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget as HTMLButtonElement);
    setOpenExpand(!openExpand);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpenExpand(!openExpand);
  };

  function getCurrentTab() {
    const extractPath = `/${pathname.split('/').filter(Boolean)[0]}`;

    switch (extractPath) {
      case ROUTE.MAIN:
        return 0;
      case ROUTE.PORTFOLIO:
        return 1;
      case ROUTE.ABOUT:
        return 2;
      case ROUTE.CONTACTS:
        return 3;
      default:
        return 0;
    }
  }

  const currentTab = getCurrentTab();
  const [value, setValue] = useState(currentTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push(ROUTE.MAIN);
        break;
      case 1:
        router.push(ROUTE.PORTFOLIO);
        break;
      case 2:
        router.push(ROUTE.ABOUT);
        break;
      case 3:
        router.push(ROUTE.CONTACTS);
        break;
      default:
        router.push(ROUTE.MAIN);
        break;
    }
  };
  function checkStylesTab(): SxProps<Theme> {
    if (mediaMatches480) {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': {
          fontSize: '0.5rem',
          minWidth: 'auto',
          color,
          margin: '0 0',
          padding: '0 5px',
          minHeight: '50px',
        },
        '& .MuiSvgIcon-root': { margin: '0' },
      };
    } else if (mediaMatches768) {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': { fontSize: '0.5rem', color, margin: '0 0', padding: '0 0', minHeight: '50px' },
        '& .MuiSvgIcon-root': { margin: '0' },
      };
    } else if (mediaMatches1024) {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': { fontSize: '0.8rem', color, margin: '0 10px', padding: '0 0', minHeight: '50px' },
        '& .MuiSvgIcon-root': { margin: '0' },
      };
    } else {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': {
          fontSize: '0.8rem',
          color,
          padding: '0 0',
          margin: '0 40px',
          minHeight: '50px',
        },
        '& .MuiSvgIcon-root': { margin: '0' },
      };
    }
  }

  function checkStylesPanel(): SxProps<Theme> {
    if (mediaMatches768) {
      return {
        '& .MuiTabs-indicator': { background: color },
        '& .MuiTabs-scrollButtons': { display: 'flex' },
      };
    } else {
      return { '& .MuiTabs-indicator': { background: color } };
    }
  }

  const stylesTab = checkStylesTab();
  const stylesPanel = checkStylesPanel();

  return (
    <nav className="overflow-x-auto h-[50px]">
      <Tabs value={value} onChange={handleChange} sx={stylesPanel} variant="scrollable">
        <Tab sx={stylesTab} label="Main" className="hover:text-gray-300 transition" />
        <Tab
          icon={
            openExpand ? (
              <div onClick={handlePopoverOpen}>
                <ExpandLess />
              </div>
            ) : (
              <div onClick={handlePopoverOpen}>
                <ExpandMore className="hover:bg-gray-900 transition" />
              </div>
            )
          }
          iconPosition="start"
          sx={stylesTab}
          label="Portfolio"
          className="hover:text-gray-300 transition"
          // onClick={handleClick}
        ></Tab>
        <Tab sx={stylesTab} label="About me" className="hover:text-gray-300 transition" />
        <Tab sx={stylesTab} label="Contacts" className="hover:text-gray-300 transition" />
      </Tabs>
      <SelectPopoverPortfolio id={id} openPopover={openPopover} anchorEl={anchorEl} handlePopoverClose={handlePopoverClose} />
    </nav>
  );
}
