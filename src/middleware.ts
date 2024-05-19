import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from '@/shared/lib/constants/common';

import { TLocales } from './shared/types/common';

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'en' satisfies TLocales,

  localePrefix: 'as-needed',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', `/(${locales.join('|')})/:path*`],
  // matcher: ['/', '/(en|ru)/:path*'],
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
