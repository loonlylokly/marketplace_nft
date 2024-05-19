import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { NftCard } from '@/entities/nftCard/NftCard';
import { TitleSection } from '@/entities/titleSection/TitleSection';
import { Button } from '@/shared/ui/button/Button';
import { Eye } from '@/shared/ui/icons/Eye';

import style from './Discover.module.css';

type TProps = {
  className?: string;
};

export const Discover = ({ className }: TProps) => {
  const t = useTranslations('Discover');
  const nfts = [
    {
      id: '1',
      name: 'Distant Galaxy',
      link: '/',
      img: {
        src: '/images/discover_1.png',
        alt: '',
      },
      price: 9999.63,
      highestBid: 99.33,
      author: {
        name: 'MoonDancer',
        linkProfile: '/',
        img: {
          src: '/images/avatars/16.png',
          alt: 'Аватарка MoonDancer',
        },
      },
    },
    {
      id: '2',
      name: 'Life on Edena',
      link: '/',
      img: {
        src: '/images/discover_2.png',
        alt: '',
      },
      price: 1.63,
      highestBid: 0.33,
      author: {
        name: 'NebulaKid',
        linkProfile: '/',
        img: {
          src: '/images/avatars/10.png',
          alt: 'Аватарка NebulaKid',
        },
      },
    },
    {
      id: '3',
      name: 'AstroFiction',
      link: '/',
      img: {
        src: '/images/discover_3.png',
        alt: '',
      },
      price: 1.63,
      highestBid: 0.33,
      author: {
        name: 'Spaceone',
        linkProfile: '/',
        img: {
          src: '/images/avatars/15.png',
          alt: 'Аватарка AstroFiction',
        },
      },
    },
  ];
  return (
    <section className={`${style.discover} ${className}`}>
      <TitleSection
        className={style.title}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <Button
        className={style.btn_viewRank}
        appearance="secondary"
        size="md"
        leftElement={<Eye className={style.icon} />}
      >
        {t('btn_all')}
      </Button>
      <div className={style.list}>
        {nfts.map((nft) => (
          <Link key={nft.id} href={nft.link}>
            <NftCard
              name={nft.name}
              author={nft.author}
              price={nft.price}
              priceLabel={t('price')}
              highestBid={nft.highestBid}
              bidLabel={t('highestBid')}
              img={nft.img}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
