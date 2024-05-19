'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { timeToHHMMSS } from '@/shared/lib/helpers/timeConvert';
import { useNow } from '@/shared/lib/hooks/useNow';
import { Typography } from '@/shared/ui/typography/Typography';

import style from './CountdownTimer.module.css';

type TProps = {
  title: string;
  endDate: Date;
};

export const CountdownTimer = ({ title, endDate }: TProps) => {
  const t = useTranslations('Time');
  const [isEndTimer, setIsEndTimer] = useState(true);
  const now =
    useNow(1000, isEndTimer, (now) => {
      if (endDate?.getTime() - now <= 0) {
        setIsEndTimer(true);
      }
    }) || 0;
  const countDown = Math.max(0, endDate?.getTime() - now);
  const { seconds, minutes, hours } = timeToHHMMSS(countDown);
  return (
    <div className={style.timer}>
      <Typography variant="caption" font="space_mono">
        {title}
      </Typography>
      <div className={style.time}>
        <div className={style.time_block}>
          <Typography
            className={style.digit}
            variant="h3"
            suppressHydrationWarning={true}
          >
            {hours[0]}
          </Typography>
          <Typography
            className={style.digit}
            variant="h3"
            suppressHydrationWarning={true}
          >
            {hours[1]}
          </Typography>
          <Typography
            className={style.label}
            variant="caption"
            font="space_mono"
            suppressHydrationWarning={true}
          >
            {t('hours', { count: +hours.join('') })}
          </Typography>
        </div>
        <Typography variant="h4" font="space_mono">
          :
        </Typography>
        <div className={style.time_block}>
          <Typography
            className={style.digit}
            variant="h3"
            suppressHydrationWarning={true}
          >
            {minutes[0]}
          </Typography>
          <Typography
            className={style.digit}
            variant="h3"
            suppressHydrationWarning={true}
          >
            {minutes[1]}
          </Typography>
          <Typography
            className={style.label}
            variant="caption"
            font="space_mono"
            suppressHydrationWarning={true}
          >
            {t('minutes', { count: +minutes.join('') })}
          </Typography>
        </div>
        <Typography variant="h4" font="space_mono">
          :
        </Typography>
        <div className={style.time_block}>
          <Typography
            className={style.digit}
            variant="h3"
            suppressHydrationWarning={true}
          >
            {seconds[0]}
          </Typography>
          <Typography
            className={style.digit}
            variant="h3"
            suppressHydrationWarning={true}
          >
            {seconds[1]}
          </Typography>
          <Typography
            className={style.label}
            variant="caption"
            font="space_mono"
            suppressHydrationWarning={true}
          >
            {t('seconds', { count: +seconds.join('') })}
          </Typography>
        </div>
      </div>
    </div>
  );
};
