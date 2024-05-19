'use client';
import * as AvatarRadix from '@radix-ui/react-avatar';
import Image from 'next/image';

import { FALLBACK_LONG } from '@/shared/lib/constants/common';

import style from './Avatar.module.css';

type TProps = {
  src: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  alt?: string;
  name?: string;
};

export const Avatar = ({
  src,
  className = '',
  size = 'sm',
  alt = '',
  name = '??',
}: TProps) => (
  <AvatarRadix.Root
    className={`${style.avatar_root} ${style[size]} ${className}`}
  >
    <AvatarRadix.Image asChild src={src}>
      <div className={style.avatar_image}>
        <Image
          src={src}
          alt={alt || `Аватарка ${name}`}
          fill={true}
          sizes="100%"
        />
      </div>
    </AvatarRadix.Image>
    <AvatarRadix.Fallback className={style.avatar_fallback} delayMs={600}>
      {name.slice(0, FALLBACK_LONG)}
    </AvatarRadix.Fallback>
  </AvatarRadix.Root>
);
