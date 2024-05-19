import { Typography } from '@/shared/ui/typography/Typography';

import style from './SetupCard.module.css';

type TProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export const SetupCard = ({ icon, title, text }: TProps) => (
  <div className={style.card}>
    <div className={style.icon}>{icon}</div>
    <div className={style.info}>
      <Typography className={style.title} variant="base">
        {title}
      </Typography>
      <Typography className={style.text} variant="caption">
        {text}
      </Typography>
    </div>
  </div>
);
