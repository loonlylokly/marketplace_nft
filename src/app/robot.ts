import { MetadataRoute } from 'next';

import { HOST_URL } from '@/shared/lib/constants/common';

export default function robots(): MetadataRoute.Robots {
  const PROD_BUILD = process.env.MODE_BUILD === 'production';
  const allow = PROD_BUILD ? '/' : '';
  const disallow = PROD_BUILD ? '/private/' : '/';
  return {
    rules: {
      allow: allow,
      disallow: disallow,
      userAgent: '*',
    },
    sitemap: `${HOST_URL}/sitemap.xml`,
  };
}
