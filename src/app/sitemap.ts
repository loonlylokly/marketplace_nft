import { MetadataRoute } from 'next';

import { HOST_URL } from '@/shared/lib/constants/common';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 1,
      url: `${HOST_URL}`,
    },
  ];
  return process.env.MODE_BUILD === 'prod' ? sitemap : [];
}
