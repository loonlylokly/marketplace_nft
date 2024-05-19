import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { TLocales } from '@/shared/types/common';
import { CategoriesList } from '@/widgets/categoriesList/CategoriesList';
import { Discover } from '@/widgets/discover/Discover';
import { Hero } from '@/widgets/hero/Hero';
import { HighLight } from '@/widgets/highlight/HighLight';
import { HowItWorks } from '@/widgets/howItWorks/HowItWorks';
import { Ranking } from '@/widgets/ranking/Ranking';
import { Subscribe } from '@/widgets/subscribe/Subscribe';
import { Trends } from '@/widgets/trends/Trends';

import style from './page.module.css';

type TProps = {
  params: { locale: TLocales };
};

export async function generateMetadata({ params: { locale } }: TProps) {
  const t = await getTranslations({ locale, namespace: 'MainPage' });

  return {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
  };
}

export default function Home({ params: { locale } }: TProps) {
  unstable_setRequestLocale(locale);
  return (
    <main className={'main'}>
      <div className={`${style.content} wrapper`}>
        <Hero />
        <Trends className={style.trends} />
        <Ranking />
        <CategoriesList />
        <Discover />
      </div>
      <HighLight className={style.highlight} />
      <div className={`${style.content} wrapper`}>
        <HowItWorks className={style.howitworks} />
        <Subscribe className={style.subscribe} />
      </div>
    </main>
  );
}
