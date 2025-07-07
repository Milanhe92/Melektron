// lib/sanityUtils.ts
import { client } from '@/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function fetchQuantumPosts() {
  const query = `*[_type == "blog"]`;
  return await client.fetch(query);
}