import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Button } from './ui/Button';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';

interface NewsItem {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedAt?: string;
  date?: string;
  excerpt: string;
  featuredImage?: any;
  image?: any;
  category?: string;
}

interface NewsSectionProps {
  newsItems?: NewsItem[];
}

const categoryTranslations: Record<string, string> = {
  news: 'Nyhed',
  event: 'Begivenhed',
  announcement: 'Meddelelse',
  liturgy: 'Liturgi',
  community: 'Fællesskab',
};

export function NewsSection({ newsItems = [] }: NewsSectionProps) {
  const news = newsItems.slice(0, 4).map(item => ({
    ...item,
    date: new Date(item.publishedAt || item.date || new Date()).toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: item.category ? categoryTranslations[item.category] || item.category : 'Nyhed',
    image: (item.featuredImage || item.image) ? urlFor(item.featuredImage || item.image).width(800).height(600).url() : 'https://images.unsplash.com/photo-1548625361-e88c60eb355c?q=80&w=1000&auto=format&fit=crop',
    slug: item.slug?.current
  }));

  if (news.length === 0) return null;

  return <section id="activities" className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-8 md:mb-0">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold">
                Nyheder & Aktiviteter
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Aktuelt i Kirken
            </h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Hold dig opdateret med de seneste nyheder, arrangementer og
              aktiviteter i Sct. Albani menighed.
            </p>
          </div>
          <Link href="/nyheder">
            <Button
              variant="outline"
              className="mt-6 md:mt-0 hidden md:flex border-2 border-navy text-navy
                       hover:!bg-navy hover:text-white font-semibold
                       shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Se alle nyheder
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => <article
              key={item._id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                       transition-all duration-500 border border-slate-200/50 flex flex-col h-full
                       hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                              opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full
                              text-xs font-bold text-navy uppercase tracking-wide shadow-lg">
                  {item.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white/90 text-xs font-medium">
                    <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
                    {item.date}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 leading-tight
                             group-hover:text-navy transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {item.excerpt}
                </p>
                {item.slug ? (
                  <Link
                    href={`/nyheder/${item.slug}`}
                    className="inline-flex items-center text-sm font-bold text-navy
                             hover:text-gold transition-all duration-300 mt-auto group/link"
                  >
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center text-sm font-bold text-navy
                               hover:text-gold transition-all duration-300 mt-auto group/link cursor-pointer">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                )}
              </div>
            </article>)}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/nyheder">
            <Button
              variant="outline"
              className="w-full border-2 border-navy text-navy
                       hover:!bg-navy hover:text-white font-semibold
                       shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Se alle nyheder
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
}