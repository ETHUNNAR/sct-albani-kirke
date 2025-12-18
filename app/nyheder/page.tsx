import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Nyheder - Sct. Albani Kirke',
  description: 'Hold dig opdateret med de seneste nyheder, begivenheder og meddelelser fra Sct. Albani Kirke i Odense.',
};

interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: 'news' | 'event' | 'announcement';
  excerpt: string;
  featuredImage?: any;
  featured?: boolean;
}

async function getNewsPosts() {
  try {
    const posts = await client.fetch<NewsPost[]>(queries.newsPosts);
    return { posts };
  } catch (error) {
    console.error('Error fetching news posts:', error);
    return { posts: [] };
  }
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

export default async function NyhederPage() {
  const { posts } = await getNewsPosts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
            alt="Church community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1e3a8a]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Nyheder
          </h1>
          <p className="text-xl md:text-2xl text-[#c5a059] font-medium mb-6">
            Hold dig opdateret med livet i Sct. Albani
          </p>
          <div className="w-24 h-1 bg-[#c5a059] rounded-full" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span>/</span>
            <span className="text-white">Nyheder</span>
          </nav>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600">
                Der er ingen nyheder at vise i øjeblikket. Kom tilbage snart!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                >
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={urlFor(post.featuredImage).width(600).height(400).url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                          <Tag className="h-3 w-3" />
                          {categoryLabels[post.category]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-56 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex items-center justify-center">
                      <div className="text-white/20 text-6xl font-serif">SA</div>
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                          <Tag className="h-3 w-3" />
                          {categoryLabels[post.category]}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('da-DK', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#c5a059] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/nyheder/${post.slug.current}`}
                      className="inline-flex items-center text-[#1e3a8a] hover:text-[#c5a059] font-semibold transition-colors group"
                    >
                      Læs mere
                      <svg
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#f8f6f1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-4">
            Vil du holde dig opdateret?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Følg os på sociale medier eller kontakt kirken for at modtage vores nyhedsbrev
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-[#1e3a8a] text-white font-semibold rounded-lg hover:bg-[#1e3a8a]/90 transition-colors"
            >
              Kontakt os
            </Link>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-[#1e3a8a] font-semibold rounded-lg hover:bg-slate-50 transition-colors border-2 border-[#1e3a8a]"
            >
              Følg os på Facebook
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
