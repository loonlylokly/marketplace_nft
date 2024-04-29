import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { TLocales } from '@/shared/types/common';
import { Button } from '@/shared/ui/button/Button';

import styles from './page.module.css';

type TProps = {
  params: { locale: TLocales };
};

export default function Home({ params: { locale } }: TProps) {
  // export default function Home() {
  unstable_setRequestLocale(locale);

  // Once the request locale is set, you
  // can call hooks from `next-intl`
  const t = useTranslations('MainPage');
  return (
    <main className={styles.main}>
      <h1>{t('title')}</h1>
      <Button asChild={true}>
        <a>{t('button')}</a>
      </Button>
    </main>
  );
}
