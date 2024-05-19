import Image from 'next/image';
import Link from 'next/link';

import { AuthorCaption } from '@/entities/authorCaption/AuthorCaption';
import { TAuthor, TImg } from '@/shared/types/common';

import style from './HighlightedCard.module.css';

type TProps = {
  title: string;
  link: string;
  author: TAuthor;
  img: TImg;
  styleClass?: string;
};

export const HighlightedCard = ({
  title,
  link,
  author,
  img,
  styleClass = '',
}: TProps) => (
  <Link className={`${style.highlight} ${styleClass}`} href={link}>
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
      <AuthorCaption title={title} author={author} />
    </div>
  </Link>
);
