import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CountdownTimer } from '@/features/countdownTimer/CountdownTimer';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Button } from '@/shared/ui/button/Button';
import { Eye } from '@/shared/ui/icons/Eye';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './HighLight.module.css';

type TProps = {
  className?: string;
};

export const HighLight = ({ className }: TProps) => {
  const t = useTranslations('HighLight');
  const highlight = {
    name: 'Magic Mashrooms',
    link: '/',
    img: {
      src: '/images/collection2_1.png',
      alt: '',
    },
    date: new Date('2026-05-17T15:24:00'),
    author: {
      name: 'Shroomie',
      linkProfile: '/',
      img: {
        src: '/images/avatars/7.png',
        alt: '',
      },
    },
  };
  return (
    <section className={`${style.highlight} ${className}`}>
      <Image
        className={style.img}
        src={highlight.img.src}
        alt={highlight.img.alt}
        fill={true}
        sizes="100%"
      />
      <div className={style.info}>
        <div className={style.info_wrap}>
          <Link className={style.author} href={highlight.author.linkProfile}>
            <Avatar
              src={highlight.author.img.src}
              alt={highlight.author.img.alt}
              name={highlight.author.name}
            />
            <Typography variant="base">{highlight.author.name}</Typography>
          </Link>
          <Typography variant="h3" asChild>
            <h3 className={style.name}>{highlight.name}</h3>
          </Typography>
          <div className={style.timer}>
            <CountdownTimer title={t('auction_end')} endDate={highlight.date} />
          </div>
          <Button
            className={style.btn_see}
            appearance="tertiary"
            size="md"
            leftElement={<Eye className={style.icon} />}
          >
            {t('btn_see')}
          </Button>
        </div>
      </div>
    </section>
  );
};
