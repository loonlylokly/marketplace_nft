import Link from 'next/link';

import { ROUTES } from '@/shared/lib/constants/routes';
import { Logo } from '@/shared/ui/icons/Logo';

// import Link from 'next/link';
import style from './Header.module.css';
import { MenuHeader } from './ui/menuHeader/MenuHeader';
import { MobileHeader } from './ui/mobileHeader/MobileHeader';

export const Header = () => (
  <header className={style.header}>
    <Link className={style.logo} href={ROUTES.main}>
      <Logo />
    </Link>
    <div className={style.wrapper}>
      <div className={style.desktopMenu}>
        <MenuHeader />
      </div>
      <div className={style.mobileMenu}>
        <MobileHeader />
      </div>
    </div>
  </header>
);
