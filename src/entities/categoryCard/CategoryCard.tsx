import { Slot, Slottable } from '@radix-ui/react-slot';
import Image from 'next/image';

import { TImg } from '@/shared/types/common';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './CategoryCard.module.css';

type TProps = {
  img: TImg;
  cover: React.ReactNode;
  categoryName: string;
};

export const CategoryCard = ({ img, cover, categoryName }: TProps) => (
  <div className={style.card}>
    <div className={style.wrap_image}>
      <Image
        className={style.image}
        src={img.src}
        alt={img.alt || ''}
        fill={true}
        sizes="(min-width: 974px) 510px, (min-width: 375px) 330px, 315px"
      />
      <div className={style.cover}>
        <Slot className={style.cover_icon}>
          <Slottable>{cover}</Slottable>
        </Slot>
      </div>
    </div>
    <div className={style.caption}>
      <Typography variant="body">{categoryName}</Typography>
    </div>
  </div>
);
