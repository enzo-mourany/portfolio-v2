import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://enzomourany.com',
      lastModified: new Date(),
    },
    {
      url: 'https://enzomourany.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://enzomourany.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://enzomourany.com/portfolio',
      lastModified: new Date(),
    },
  ];
}
