import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ROUTES } from '@/shared/lib/constants/routes';
import { Logo } from '@/shared/ui/icons/Logo';
import { Discord } from '@/shared/ui/icons/socials/Discord';
import { Instagram } from '@/shared/ui/icons/socials/Instagram';
import { Twitter } from '@/shared/ui/icons/socials/Twitter';
import { Youtube } from '@/shared/ui/icons/socials/Youtube';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './Info.module.css';

export const Info = () => {
  const t = useTranslations('Footer.info');

  return (
    <div className={style.info}>
      <Link className={style.logo} href={ROUTES.main}>
        <Logo />
      </Link>
      <div className={style.wrapper}>
        <Typography variant="base">{t('desc')}</Typography>
        <Typography variant="base">{t('social')}</Typography>
        <ul className={style.social}>
          <li className={style.social_item}>
            <Link className={style.social_link} href={ROUTES.main}>
              <Discord />
            </Link>
          </li>
          <li className={style.social_item}>
            <Link className={style.social_link} href={ROUTES.main}>
              <Youtube />
            </Link>
          </li>
          <li className={style.social_item}>
            <Link className={style.social_link} href={ROUTES.main}>
              <Twitter className={style.twitter} />
            </Link>
          </li>
          <li className={style.social_item}>
            <Link className={style.social_link} href={ROUTES.main}>
              <Instagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
