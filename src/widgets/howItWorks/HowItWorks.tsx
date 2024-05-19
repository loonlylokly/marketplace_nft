import { useTranslations } from 'next-intl';

import { SetupCard } from '@/entities/setupCard/SetupCard';
import { TitleSection } from '@/entities/titleSection/TitleSection';
import { CreateCollectionIcon } from '@/shared/ui/icons/setupIcons/CreateCollectionIcon';
import { SetupWalletIcon } from '@/shared/ui/icons/setupIcons/SetupWalletIcon';
import { StartEarningIcon } from '@/shared/ui/icons/setupIcons/StartEarningIcon';

import style from './HowItWorks.module.css';

type TSetupCardIdx =
  | '1.text'
  | '2.text'
  | '3.text'
  | '1.title'
  | '2.title'
  | '3.title';

type TProps = {
  className?: string;
};

export const HowItWorks = ({ className }: TProps) => {
  const t = useTranslations('HowItWorks');
  const cards_icons = [
    <SetupWalletIcon key="setup" />,
    <CreateCollectionIcon key="creat" />,
    <StartEarningIcon key="start" />,
  ];
  return (
    <section className={`${style.section} ${className}`}>
      <TitleSection title={t('title')} subtitle={t('subtitle')} />
      <div className={style.steps}>
        {cards_icons.map((icon, index) => (
          <SetupCard
            key={index}
            icon={icon}
            title={t(`steps.${`${index + 1}.title` as TSetupCardIdx}`)}
            text={t(`steps.${`${index + 1}.text` as TSetupCardIdx}`)}
          />
        ))}
      </div>
    </section>
  );
};
