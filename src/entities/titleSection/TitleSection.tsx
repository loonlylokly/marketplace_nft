import { Typography } from '@/shared/ui/typography/Typography';

import style from './TitleSection.module.css';

type TProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const TitleSection = ({ title, subtitle, className }: TProps) => (
  <div className={`${style.title_section} ${className}`}>
    <div className={style.wrapper}>
      <Typography variant="h4" asChild>
        <h2 className={style.title}>{title}</h2>
      </Typography>
      {subtitle && (
        <Typography variant="base" asChild>
          <p className={style.subtitle}>{subtitle}</p>
        </Typography>
      )}
    </div>
  </div>
);
