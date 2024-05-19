import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CategoryCard } from '@/entities/categoryCard/CategoryCard';
import { TitleSection } from '@/entities/titleSection/TitleSection';
import { TCategoryName } from '@/shared/types/common';

import style from './CategoriesList.module.css';
import { svgIconCover, TCovers } from './lib/IconCover';

type TProps = {
  className?: string;
};

export const CategoriesList = ({ className = '' }: TProps) => {
  const t = useTranslations('CategoriesList');
  const categories = [
    {
      id: '1',
      link: '/',
      img: {
        src: '/images/nft/art.png',
        alt: '',
      },
      cover: 'paintbrush',
    },
    {
      id: '2',
      link: '/',
      img: {
        src: '/images/nft/collectibles.png',
        alt: '',
      },
      cover: 'swatches',
    },
    {
      id: '3',
      link: '/',
      img: {
        src: '/images/nft/music.png',
        alt: '',
      },
      cover: 'musicnotes',
    },
    {
      id: '4',
      link: '/',
      img: {
        src: '/images/nft/photography.png',
        alt: '',
      },
      cover: 'camera',
    },
    {
      id: '5',
      link: '/',
      img: {
        src: '/images/nft/video.png',
        alt: '',
      },
      cover: 'videocamera',
    },
    {
      id: '6',
      link: '/',
      img: {
        src: '/images/nft/utility.png',
        alt: '',
      },
      cover: 'magicwand',
    },
    {
      id: '7',
      link: '/',
      img: {
        src: '/images/nft/sport.png',
        alt: '',
      },
      cover: 'basketball',
    },
    {
      id: '8',
      link: '/',
      img: {
        src: '/images/nft/virtual_worlds.png',
        alt: '',
      },
      cover: 'planet',
    },
  ];

  return (
    <section className={`${style.categories} ${className}`}>
      <TitleSection title={t('title')} />
      <div className={style.list}>
        {categories.map((category) => (
          <Link
            className={style.category}
            key={category.id}
            href={category.link}
          >
            <CategoryCard
              img={category.img}
              categoryName={t(`categories.${category.id as TCategoryName}`)}
              cover={svgIconCover[category.cover as keyof TCovers]}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
