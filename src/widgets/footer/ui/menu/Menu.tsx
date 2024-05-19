import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ROUTES } from '@/shared/lib/constants/routes';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './Menu.module.css';

export const Menu = () => {
  const t = useTranslations('Footer.menu');
  return (
    <div className={style.menu}>
      <Typography variant="h5" font="space_mono">
        {t('title')}
      </Typography>
      <ul className={style.menu_list}>
        <li className={style.menu_item}>
          <Link className={style.menu_link} href={ROUTES.main}>
            <Typography variant="base">{t('item_1')}</Typography>
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link className={style.menu_link} href={ROUTES.main}>
            <Typography variant="base">{t('item_3')}</Typography>
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link className={style.menu_link} href={ROUTES.main}>
            <Typography variant="base">{t('item_2')}</Typography>
          </Link>
        </li>
      </ul>
    </div>
  );
};
