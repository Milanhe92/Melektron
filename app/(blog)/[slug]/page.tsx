import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor, urlForOptimized } from '@/lib/sanity.image';
import QuantumComments from '@/components/QuantumComments';

// Dodajte custom komponente za PortableText
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="quantum-image-container my-8">
        <Image
          src={urlForOptimized(value, 1200)}
          alt={value.alt || 'Blog image'}
          width={1200}
          height={800}
          className="rounded-xl shadow-2xl"
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-400 mt-2">
            {value.caption}
          </p>
        )}
      </div>
    ),
    quantumEmbed: ({ value }: any) => (
      <div className="quantum-embed my-6">
        <iframe 
          src={value.url} 
          className="w-full h-96 rounded-lg border-2 border-purple-500"
        />
      </div>
    )
  }
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
      "relatedPosts": *[_type == "post" && slug.current != $slug][0..2]{
        title,
        slug,
        excerpt
      }
    }
  `, { slug: params.slug });

  if (!post) {
    return (
      <div className="quantum-error text-center py-20">
        <h1 className="text-4xl font-bold">Post nije pronađen</h1>
        <p className="mt-4">
          Kvantna anomalija je poremetila ovu stranicu. Pokušajte ponovo.
        </p>
      </div>
    );
  }

  return (
    <article className="quantum-blog-post">
      {/* Kvantni efekat u pozadini */}
      <div className="quantum-particle-background"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          {post.title}
        </h1>
        
        {post.mainImage && (
          <div className="relative h-[50vh] w-full mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={urlForOptimized(post.mainImage, 1600, 85)}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert prose-xl max-w-none mx-auto">
          <PortableText 
            value={post.body} 
            components={portableTextComponents} 
          />
        </div>

        {/* Relacionani postovi */}
        {post.relatedPosts?.length > 0 && (
          <section className="quantum-related-posts mt-20">
            <h2 className="text-3xl font-bold mb-8">Kvantno Povezani Sadržaj</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedPosts.map((related: any) => (
                <a 
                  key={related.slug.current} 
                  href={`/blog/${related.slug.current}`}
                  className="quantum-post-card p-6 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-purple-500/30 hover:border-cyan-400 transition-all"
                >
                  <h3 className="text-xl font-bold">{related.title}</h3>
                  <p className="mt-2 text-gray-300">{related.excerpt}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Kvantni komentari */}
        <QuantumComments postId={params.slug} />
      </div>
    </article>
  );
}