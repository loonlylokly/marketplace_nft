import { TAuthor } from '@/shared/types/common';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './AuthorCaption.module.css';

type TProps = {
  title: string;
  author: TAuthor;
};

export const AuthorCaption = ({ title, author }: TProps) => (
  <div className={style.caption}>
    <Typography className={style.title} variant="h5" asChild>
      <h3>{title}</h3>
    </Typography>
    <div className={style.author}>
      <Avatar src={author.img.src} alt={author.img.alt} name={author.name} />
      <Typography variant="base">{author.name}</Typography>
    </div>
  </div>
);
