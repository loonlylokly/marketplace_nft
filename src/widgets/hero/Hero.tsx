import { useTranslations } from 'next-intl';

import { HighlightedCard } from '@/entities/highlightedCard/HighlightedCard';
import { Button } from '@/shared/ui/button/Button';
import { RocketLaunch } from '@/shared/ui/icons/RocketLaunch';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './Hero.module.css';

type TProps = {
  className?: string;
};

export const Hero = ({ className = '' }: TProps) => {
  const t = useTranslations();
  const author = {
    name: 'Animakid',
    linkProfile: '/',
    img: {
      src: '/images/avatars/14.png',
      alt: 'Аватарка Animakid',
    },
  };

  const img = {
    src: '/images/highlight.png',
    alt: '',
  };
  return (
    <section className={`${style.hero} ${className}`}>
      <div className={style.text}>
        <Typography className={style.title} variant={'h4'} asChild>
          <h1>{t('Hero.title')}</h1>
        </Typography>
        <Typography className={style.subtitle}>{t('Hero.text')}</Typography>
      </div>
      <div className={style.highlight}>
        <HighlightedCard
          title={'Space Walking'}
          link={'/'}
          author={author}
          img={img}
        />
      </div>
      <Button
        className={style.cta_btn}
        appearance="primary"
        size="md"
        leftElement={<RocketLaunch />}
      >
        {t('Hero.cta')}
      </Button>
      <div className={style.stats}>
        <div className={style.sales}>
          <Typography
            className={style.number}
            variant={'h5'}
            font={'space_mono'}
          >
            240k+
          </Typography>
          <Typography className={style.label}>{t('Hero.sales')}</Typography>
        </div>
        <div className={style.auctions}>
          <Typography
            className={style.number}
            variant={'h5'}
            font={'space_mono'}
          >
            100k+
          </Typography>
          <Typography className={style.label}>{t('Hero.auctions')}</Typography>
        </div>
        <div className={style.artists}>
          <Typography
            className={style.number}
            variant={'h5'}
            font={'space_mono'}
          >
            240k+
          </Typography>
          <Typography className={style.label}>{t('Hero.artists')}</Typography>
        </div>
      </div>
    </section>
  );
};
