import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'hif47s0u',
  dataset: 'production',
  apiVersion: '2022-09-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
