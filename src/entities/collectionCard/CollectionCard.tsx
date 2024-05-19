import Image from 'next/image';

import { AuthorCaption } from '@/entities/authorCaption/AuthorCaption';
import { TAuthor, TImg } from '@/shared/types/common';

import style from './CollectionCard.module.css';

type TProps = {
  name: string;
  collectionSize: number;
  author: TAuthor;
  imgs: TImg[];
};

export const CollectionCard = ({
  name,
  collectionSize,
  author,
  imgs,
}: TProps) => (
  <div className={style.card}>
    <div className={style.preview}>
      <div className={style.main_img}>
        <Image
          className={style.image}
          src={imgs[0].src}
          alt={imgs[0].alt || ''}
          fill={true}
          sizes="100%"
        />
      </div>
      <div className={style.wrap_image}>
        <Image
          className={style.image}
          src={imgs[1].src}
          alt={imgs[1].alt || ''}
          fill={true}
          sizes="100%"
        />
      </div>
      <div className={style.wrap_image}>
        <Image
          className={style.image}
          src={imgs[2].src}
          alt={imgs[2].alt || ''}
          fill={true}
          sizes="100%"
        />
      </div>
      <div className={style.more}>{collectionSize}+</div>
    </div>
    <div className={style.caption}>
      <AuthorCaption title={name} author={author} />
    </div>
  </div>
);
