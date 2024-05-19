import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CollectionCard } from '@/entities/collectionCard/CollectionCard';
import { TitleSection } from '@/entities/titleSection/TitleSection';

import style from './Trends.module.css';

type TProps = {
  className?: string;
};

export const Trends = ({ className = '' }: TProps) => {
  const t = useTranslations('Trends');
  const collections = [
    {
      id: 1,
      name: 'DSGN Animals',
      link: '/',
      size: 1025,
      imgs: [
        {
          src: '/images/collection1_1.png',
          alt: '',
        },
        {
          src: '/images/collection1_2.png',
          alt: '',
        },
        {
          src: '/images/collection1_3.png',
          alt: '',
        },
      ],
      author: {
        name: 'MrFox',
        linkProfile: '/',
        img: {
          src: '/images/avatars/14.png',
          alt: 'Аватарка MrFox',
        },
      },
    },
    {
      id: 2,
      name: 'Magic Mushrooms',
      link: '/',
      size: 6,
      imgs: [
        {
          src: '/images/collection2_1.png',
          alt: '',
        },
        {
          src: '/images/collection2_2.png',
          alt: '',
        },
        {
          src: '/images/collection2_3.png',
          alt: '',
        },
      ],
      author: {
        name: 'Shroomie',
        linkProfile: '/',
        img: {
          src: '/images/avatars/7.png',
          alt: 'Аватарка Shroomie',
        },
      },
    },
    {
      id: 3,
      name: 'Disco Machines',
      link: '/',
      size: 1026,
      imgs: [
        {
          src: '/images/collection3_1.png',
          alt: '',
        },
        {
          src: '/images/collection3_2.png',
          alt: '',
        },
        {
          src: '/images/collection3_3.png',
          alt: '',
        },
      ],
      author: {
        name: 'BeKind2Robots',
        linkProfile: '/',
        img: {
          src: '/images/avatars/12.png',
          alt: 'Аватарка BeKind2Robots',
        },
      },
    },
  ];

  return (
    <section className={`${style.trends} ${className}`}>
      <TitleSection title={t('title')} subtitle={t('subtitle')} />
      <div className={style.gallery}>
        {collections.map((collection) => (
          <Link key={collection.id} href={collection.link}>
            <CollectionCard
              name={collection.name}
              imgs={collection.imgs}
              author={collection.author}
              collectionSize={collection.size}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
