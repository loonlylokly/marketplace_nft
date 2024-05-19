import '@/shared/lib/styles/global.css';

import { NextIntlClientProvider, useMessages } from 'next-intl';

import { locales } from '@/shared/lib/constants/common';
import { SpaceMono, WorkSans } from '@/shared/lib/styles/fonts';
import { TLocales } from '@/shared/types/common';
import { Footer } from '@/widgets/footer/Footer';
import { Header } from '@/widgets/header/Header';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: TLocales };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={`${WorkSans.variable} ${SpaceMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
