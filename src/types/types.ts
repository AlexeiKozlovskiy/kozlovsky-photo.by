export enum ROUTE {
  MAIN = '/',
  PORTFOLIO = '/portfolio',
  PORTFOLIO_WEDDING = '/portfolio/wedding',
  PORTFOLIO_PORTRAIT = '/portfolio/portrait',
  PORTFOLIO_LOVE_STORY = '/portfolio/love-story',
  PORTFOLIO_CORPORATE = '/portfolio/corporate',
  PORTFOLIO_STUDIO = '/portfolio/studio',
  PORTFOLIO_STREET = '/portfolio/street-portrait',
  PORTFOLIO_BANQUET = '/portfolio/banquet',
  ABOUT = '/about',
  CONTACTS = '/contacts',
}

export interface Slide {
  id: number;
  title: string;
  image: string | string[];
  route: string;
}
export interface SliderProps {
  sliderProps: Slide[];
}
