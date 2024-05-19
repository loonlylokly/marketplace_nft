import { useTranslations } from 'next-intl';

import { Typography } from '@/shared/ui/typography/Typography';

import style from './Footer.module.css';
import { Info } from './ui/info/Info';
import { Menu } from './ui/menu/Menu';
import { Subscribe } from './ui/subscribe/Subscribe';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <Info />
        <Menu />
        <Subscribe />
      </div>
      <hr className={style.divider} />
      <div className={style.copyright}>
        <Typography variant="caption">{t('copyright')}</Typography>
      </div>
    </footer>
  );
};
