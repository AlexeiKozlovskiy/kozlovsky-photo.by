'use client';

import { ROUTE } from '@/types/types';
import { SxProps, Tab, Tabs, Theme, useMediaQuery } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Navigation() {
  const pathname = usePathname();
  const mediaMatches480 = useMediaQuery('(max-width:480px)');
  const mediaMatches768 = useMediaQuery('(max-width:768px)');
  const mediaMatches1024 = useMediaQuery('(max-width:1024px)');
  const [open, setOpen] = useState(false);

  const color = '#fff';
  const router = useRouter();

  // useEffect(() => {
  //   const currentTab = getCurrentTab();
  //   setValue(currentTab);
  // }, [pathname]);

  const handleClick = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   const handleHover = (e: React.MouseEvent | MouseEvent) => {
  //     e.stopPropagation();
  //     const { dataset } = e.target as HTMLElement;

  //     if (dataset.id === 'portfolio') {
  //       setOpen(true);
  //     } else {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener('mouseover', handleHover);
  //   return () => {
  //     document.removeEventListener('mouseover', handleHover);
  //   };
  // }, []);

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
        <Tab sx={stylesTab} label="Главная" />
        <Tab
          icon={open ? <ExpandLess /> : <ExpandMore />}
          iconPosition="end"
          sx={stylesTab}
          label="Портфолио"
          onClick={handleClick}
        />
        <Tab sx={stylesTab} label="О себе" />
        <Tab sx={stylesTab} label="Контакты" />
      </Tabs>
    </nav>
  );
}
