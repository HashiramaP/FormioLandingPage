import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://formio.ca',                           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: 'https://formio.ca/demo',                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/book-call',                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/vs/caseeasy',               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://formio.ca/vs/visto',                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://formio.ca/vs/visaflo',                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://formio.ca/features/custom-forms',     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://formio.ca/blog',                                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: 'https://formio.ca/blog/cicc-compliance',                              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/blog/cicc-client-file-management-requirements',     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/blog/barreau-qc-ia-generative',                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/programs',                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/how-it-works',              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://formio.ca/faq',                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
