'use client';

import { ROUTE } from '@/types/types';
import { SxProps, Tab, Tabs, Theme, useMediaQuery } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const mediaMatches480 = useMediaQuery('(max-width:480px)');
  const mediaMatches768 = useMediaQuery('(max-width:768px)');
  const mediaMatches1024 = useMediaQuery('(max-width:1024px)');

  const color = '#fff';
  const router = useRouter();

  useEffect(() => {
    const currentTab = getCurrentTab();
    setValue(currentTab);
  }, [pathname]);

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
        '&.MuiButtonBase-root': { fontSize: '0.5rem', minWidth: 'auto', color, margin: '0 0px', padding: '0 5px' },
      };
    } else if (mediaMatches768) {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': { fontSize: '0.5rem', minWidth: 'auto', color, margin: '0 0px' },
      };
    } else if (mediaMatches1024) {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': { fontSize: '0.8rem', color, margin: '0 10px' },
      };
    } else {
      return {
        '&.Mui-selected': { color },
        '&.MuiButtonBase-root': { fontSize: '0.8rem', color, margin: '0 30px' },
      };
    }
  }

  function checkStylesPanel(): SxProps<Theme> {
    if (mediaMatches768) {
      return { '& .MuiTabs-indicator': { background: color }, '& .MuiTabs-scrollButtons': { display: 'flex' } };
    } else {
      return { '& .MuiTabs-indicator': { background: color } };
    }
  }

  const stylesTab = checkStylesTab();
  const stylesPanel = checkStylesPanel();
  return (
    <nav className="p-3 overflow-x-auto">
      <Tabs value={value} onChange={handleChange} sx={stylesPanel} variant="scrollable">
        <Tab sx={stylesTab} label="Главная" />
        <Tab sx={stylesTab} label="Портфолио" />
        <Tab sx={stylesTab} label="О себе" />
        <Tab sx={stylesTab} label="Контакты" />
      </Tabs>
    </nav>
  );
}
