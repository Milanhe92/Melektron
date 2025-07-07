import createImageUrlBuilder from '@sanity/image-url';

const builder = createImageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || '',
});

export const urlFor = (source) => builder.image(source);
export const urlForOptimized = (source, width, quality = 75) => 
  builder.image(source).width(width).quality(quality).auto('format').url();