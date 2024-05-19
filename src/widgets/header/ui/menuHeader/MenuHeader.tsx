import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ROUTES } from '@/shared/lib/constants/routes';
import { Button } from '@/shared/ui/button/Button';
import { UserIcon } from '@/shared/ui/icons/UserIcon';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './MenuHeader.module.css';

export const MenuHeader = () => {
  const t = useTranslations();
  return (
    <nav className={style.nav}>
      <ul className={style.menu}>
        <li className={style.item}>
          <Typography variant="h5" asChild>
            <Link className={style.link} href={ROUTES.main}>
              {t(`Header.Menu.item1`)}
            </Link>
          </Typography>
        </li>
        <li className={style.item}>
          <Typography variant="h5" asChild>
            <Link className={style.link} href={ROUTES.main}>
              {t(`Header.Menu.item2`)}
            </Link>
          </Typography>
        </li>
        <li className={style.item}>
          <Typography variant="h5" asChild>
            <Link className={style.link} href={ROUTES.main}>
              {t(`Header.Menu.item3`)}
            </Link>
          </Typography>
        </li>
      </ul>
      <Button
        asChild={true}
        appearance="primary"
        size="md"
        leftElement={<UserIcon />}
      >
        <Link className={style.auth} href={ROUTES.auth}>
          {t('signIn')}
        </Link>
      </Button>
    </nav>
  );
};
