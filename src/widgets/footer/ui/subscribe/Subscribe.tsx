import { useTranslations } from 'next-intl';
import React from 'react';

import { SubscribeForm } from '@/features/subscribeForm/SubscribeForm';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './Subscribe.module.css';

export const Subscribe = () => {
  const t = useTranslations('Footer');
  return (
    <div className={style.subscribe}>
      <Typography variant="h5" font="space_mono">
        {t('subscribe.title')}
      </Typography>
      <Typography variant="base" asChild>
        <p className={style.desc}>{t('subscribe.desc')}</p>
      </Typography>
      <SubscribeForm submitLabel={t('submitBtn')} />
    </div>
  );
};
