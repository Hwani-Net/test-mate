import type { MetadataRoute } from 'next';

const BASE_URL = 'https://testmate-app.vercel.app';

const testSlugs = ['mbti', 'love', 'animal-personality', 'personal-color', 'stress', 'first-impression'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ai-animal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const testPages: MetadataRoute.Sitemap = testSlugs.map((slug) => ({
    url: `${BASE_URL}/test/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...testPages];
}
