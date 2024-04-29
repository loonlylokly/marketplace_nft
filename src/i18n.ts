import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/shared/lib/constants/common';

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (baseLocale in locales) notFound();

  return {
    messages: (await import(`./shared/messages/${locale}.json`)).default,
  };
});
