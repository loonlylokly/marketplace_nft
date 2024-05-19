import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { AuthorCard } from '@/entities/authorCard/AuthorCard';
import { TitleSection } from '@/entities/titleSection/TitleSection';
import { Button } from '@/shared/ui/button/Button';
import { RocketLaunch } from '@/shared/ui/icons/RocketLaunch';

import style from './Ranking.module.css';

type TProps = {
  className?: string;
};

export const Ranking = ({ className = '' }: TProps) => {
  const t = useTranslations('Ranking');
  const creators = [
    {
      id: '1',
      position: 1,
      image: {
        src: '/images/avatars/1.png',
        alt: '',
      },
      name: 'Keepitreal',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '2',
      position: 2,
      image: {
        src: '/images/avatars/2.png',
        alt: '',
      },
      name: 'DigiLab',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '3',
      position: 3,
      image: {
        src: '/images/avatars/3.png',
        alt: '',
      },
      name: 'GravityOne',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '4',
      position: 4,
      image: {
        src: '/images/avatars/4.png',
        alt: '',
      },
      name: 'Juanie',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '5',
      position: 5,
      image: {
        src: '/images/avatars/5.png',
        alt: '',
      },
      name: 'BlueWhale',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '6',
      position: 6,
      image: {
        src: '/images/avatars/6.png',
        alt: '',
      },
      name: 'Mr Fox',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '7',
      position: 7,
      image: {
        src: '/images/avatars/7.png',
        alt: '',
      },
      name: 'Shroomie',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '8',
      position: 8,
      image: {
        src: '/images/avatars/8.png',
        alt: '',
      },
      name: 'Robotica',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '9',
      position: 9,
      image: {
        src: '/images/avatars/9.png',
        alt: '',
      },
      name: 'RustyRobot',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '10',
      position: 10,
      image: {
        src: '/images/avatars/10.png',
        alt: '',
      },
      name: 'Animakid',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '11',
      position: 11,
      image: {
        src: '/images/avatars/11.png',
        alt: '',
      },
      name: 'Dotgu',
      urlProfile: '/',
      totalSales: 34.53,
    },
    {
      id: '12',
      position: 12,
      image: {
        src: '/images/avatars/12.png',
        alt: '',
      },
      name: 'Ghiblier',
      urlProfile: '/',
      totalSales: 34.53,
    },
  ];
  return (
    <section className={`${style.ranking} ${className}`}>
      <TitleSection
        className={style.title}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <Button
        className={style.btn_viewRank}
        appearance="secondary"
        size="md"
        leftElement={<RocketLaunch className={style.icon} />}
      >
        {t('btn_view')}
      </Button>
      <div className={style.ranking_authors}>
        {creators.map((creator) => (
          <Link
            className={style.author}
            key={creator.id}
            href={creator.urlProfile}
          >
            <AuthorCard
              position={creator.position}
              image={creator.image}
              name={creator.name}
              totalSales={creator.totalSales}
              textTotalSales={t('textTotalSales')}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
