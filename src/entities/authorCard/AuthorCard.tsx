import { TImg } from '@/shared/types/common';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './AuthorCard.module.css';

type TProps = {
  position: number;
  image: TImg;
  name: string;
  totalSales: number;
  textTotalSales: string;
};

export const AuthorCard = ({
  position,
  image,
  name,
  totalSales,
  textTotalSales,
}: TProps) => (
  <div className={style.card}>
    <div className={style.avatar}>
      <Typography variant="base" font="space_mono" asChild>
        <div className={style.position}>{position}</div>
      </Typography>
      <Avatar
        className={style.avatar_img}
        src={image.src}
        alt={image.alt}
        size="md"
        name={name}
      />
    </div>
    <div className={style.text}>
      <Typography variant="h5" asChild>
        <h4 className={style.name}>{name}</h4>
      </Typography>
      <div className={style.sales}>
        <Typography variant="base">{textTotalSales}</Typography>
        <Typography variant="base" font="space_mono">
          {`${totalSales} ETH`}
        </Typography>
      </div>
    </div>
  </div>
);
