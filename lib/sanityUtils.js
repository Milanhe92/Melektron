import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-07-01',
  token: process.env.SANITY_API_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export const urlForOptimized = (source, width, quality = 85) => 
  builder.image(source)
    .width(width)
    .quality(quality)
    .auto('format')
    .url();

// Напредне Sanity упите
export const fetchQuantumPosts = async () => {
  const query = `*[_type == "post" && "quantum" in categories[]->title]{
    _id,
    title,
    description,
    "slug": slug.current,
    mainImage,
    publishedAt
  } | order(publishedAt desc) [0..5]`;
  
  return await client.fetch(query);
};

export const fetchBlockchainTutorials = async () => {
  const query = `*[_type == "tutorial" && "blockchain" in tags]{
    _id,
    title,
    difficulty,
    duration,
    "slug": slug.current,
    mainImage
  } | order(difficulty asc)`;
  
  return await client.fetch(query);
};