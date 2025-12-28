import { ServerLayout } from '@/components/ServerLayout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const revalidate = 60;

interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: 'news' | 'event' | 'announcement';
  excerpt: string;
  featuredImage?: any;
  content: any[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const categoryLabels: Record<string, string> = {
  news: 'Nyhed',
  event: 'Begivenhed',
  announcement: 'Meddelelse',
};

const categoryColors: Record<string, string> = {
  news: 'bg-blue-100 text-blue-800',
  event: 'bg-green-100 text-green-800',
  announcement: 'bg-amber-100 text-amber-800',
};

async function getNewsPost(slug: string) {
  try {
    const post = await client.fetch<NewsPost>(queries.newsPostBySlug(slug));
    return post;
  } catch (error) {
    console.error('Error fetching news post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    return {
      title: 'Nyhed ikke fundet - Sct. Albani Kirke',
    };
  }

  return {
    title: `${post.title} - Sct. Albani Kirke`,
    description: post.excerpt,
  };
}

// Custom components for PortableText rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            className="w-full rounded-lg shadow-md"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-slate-600 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-serif text-3xl font-bold text-[#1e3a8a] mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#c5a059] pl-6 my-6 italic text-lg text-slate-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 text-slate-700 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-700">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={value.href.startsWith('/') ? '_self' : '_blank'}
          className="text-[#1e3a8a] hover:text-[#c5a059] underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <ServerLayout>
      {/* Hero Section with Featured Image */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {post.featuredImage ? (
            <img
              src={urlFor(post.featuredImage).width(2000).height(1200).url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1e3a8a]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold ${categoryColors[post.category]}`}>
              <Tag className="h-4 w-4" />
              {categoryLabels[post.category]}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {post.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-2 text-white/90 text-lg mb-4">
            <Calendar className="h-5 w-5" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('da-DK', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>

          <div className="w-24 h-1 bg-[#c5a059] rounded-full" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span>/</span>
            <Link href="/nyheder" className="hover:text-white transition-colors">
              Nyheder
            </Link>
            <span>/</span>
            <span className="text-white">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-24 bg-gradient-to-b from-white via-[#f8f6f1] to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute top-[800px] right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Excerpt/Lead */}
          {post.excerpt && (
            <div className="text-xl text-slate-600 leading-relaxed mb-12 pb-8 border-b border-slate-200">
              {post.excerpt}
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.content} components={portableTextComponents} />
          </div>

          {/* Back to News Link */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              href="/nyheder"
              className="inline-flex items-center text-[#1e3a8a] hover:text-[#c5a059] font-semibold transition-colors group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Tilbage til alle nyheder
            </Link>
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="py-20 bg-gradient-to-b from-[#f8f6f1] to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
              Del artiklen
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Del denne nyhed
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>

          <p className="text-lg text-slate-600 mb-8">
            Hjælp os med at sprede budskabet ved at dele med dit netværk
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#1877f2] text-white font-semibold rounded-lg hover:bg-[#1877f2]/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Del på Facebook
            </a>
          </div>
        </div>
      </section>
    </ServerLayout>
  );
}
