import Image from 'next/image';

import { AuthorCaption } from '@/entities/authorCaption/AuthorCaption';
import { TAuthor, TImg } from '@/shared/types/common';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './NftCard.module.css';

type TProps = {
  name: string;
  author: TAuthor;
  img: TImg;
  price?: number;
  priceLabel?: string;
  highestBid?: number;
  bidLabel?: string;
  className?: string;
};

export const NftCard = ({
  name,
  author,
  img,
  price,
  priceLabel,
  highestBid,
  bidLabel,
  className = '',
}: TProps) => (
  <div className={`${style.nft} ${className}`}>
    <div className={style.wrap_image}>
      <Image
        className={style.image}
        src={img.src}
        alt={img.alt || ''}
        fill={true}
        sizes="(min-width: 974px) 510px, (min-width: 375px) 330px, 315px"
      />
    </div>
    <div className={style.caption}>
      <AuthorCaption title={name} author={author} />
      <div className={style.wrap_price_bid}>
        <div className={style.price}>
          <Typography variant="caption" font="space_mono" asChild>
            <p className={style.label}>{priceLabel}</p>
          </Typography>
          <Typography variant="base" font="space_mono">
            {price} ETH
          </Typography>
        </div>
        <div className={style.bid}>
          <Typography variant="caption" font="space_mono" asChild>
            <p className={style.label}>{bidLabel}</p>
          </Typography>
          <Typography variant="base" font="space_mono">
            {highestBid} wETH
          </Typography>
        </div>
      </div>
    </div>
  </div>
);
