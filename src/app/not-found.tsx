import Link from 'next/link';
import styles from '@/styles/not-found.module.scss';
import { roboto } from '@/styles/nextFonts';
import { ROUTE } from '@/types/types';

export default function Custom404() {
  return (
    <div className={styles.page404__container + ' ' + roboto.className}>
      <p>Whoops!</p>
      <p>Looks like you got lost.</p>
      <p>
        {`Go back to the `}
        <Link className={styles.page404__link} href={ROUTE.MAIN}>
          home
        </Link>
        {` page?`}
      </p>
    </div>
  );
}
