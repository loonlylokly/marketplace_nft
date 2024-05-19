import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { TLocales } from '@/shared/types/common';

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
export default function page({ params: { locale } }: TProps) {
  unstable_setRequestLocale(locale);
  return (
    <main className={'main'}>
      <h1>Auth</h1>
    </main>
  );
}
