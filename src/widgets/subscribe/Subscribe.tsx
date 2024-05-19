import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { TitleSection } from '@/entities/titleSection/TitleSection';
import { SubscribeForm } from '@/features/subscribeForm/SubscribeForm';

import style from './Subscribe.module.css';

type TProps = {
  className?: string;
};

export const Subscribe = ({ className }: TProps) => {
  const t = useTranslations('Subscribe');
  return (
    <section className={`${style.subscribe} ${className}`}>
      <div className={style.wrap_img}>
        <Image
          className={style.img}
          src={'/images/spaceMan.png'}
          alt=""
          fill={true}
          sizes="100%"
        />
      </div>
      <div className={style.form}>
        <TitleSection title={t('title')} subtitle={t('subtitle')} />
        <SubscribeForm submitLabel={'Subscribe'} />
      </div>
    </section>
  );
};
