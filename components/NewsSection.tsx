import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { urlFor } from '@/lib/sanity';

interface NewsItem {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: any;
  category?: string;
}

interface NewsSectionProps {
  newsItems?: NewsItem[];
}

const categoryTranslations: Record<string, string> = {
  event: 'Begivenhed',
  announcement: 'Annoncering',
  liturgy: 'Liturgi',
  community: 'Fællesskab',
};

export function NewsSection({ newsItems = [] }: NewsSectionProps) {
  // Fallback data if CMS data is not available
  const news = newsItems.length > 0 ? newsItems.slice(0, 3).map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: item.category ? categoryTranslations[item.category] || item.category : 'Nyhed',
    image: item.image ? urlFor(item.image).width(800).height(600).url() : 'https://images.unsplash.com/photo-1548625361-e88c60eb355c?q=80&w=1000&auto=format&fit=crop'
  })) : [{
    _id: '1',
    title: 'Kirkekaffe efter Højmesse',
    date: 'Hver Søndag',
    category: 'Fællesskab',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Kom og vær med til hyggeligt samvær i menighedssalen efter søndagens højmesse kl. 10.00.'
  }, {
    _id: '2',
    title: 'Caritas Indsamling',
    date: '15. Marts 2024',
    category: 'Velgørenhed',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Vi samler ind til fordel for verdens fattigste. Støt op om Caritas Danmarks vigtige arbejde.'
  }, {
    _id: '3',
    title: 'Koncert i Kirken',
    date: '22. Marts 2024',
    category: 'Kultur',
    image: 'https://images.unsplash.com/photo-1514117445516-2ecfc9c4ec90?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Oplev kirkens kor fremføre værker af Bach og Mozart. En aften med smuk musik og eftertanke.'
  }];
  return <section id="activities" className="py-20 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              Aktuelt i Kirken
            </h2>
            <p className="text-slate-600 max-w-xl">
              Hold dig opdateret med de seneste nyheder, arrangementer og
              aktiviteter i Sct. Albani menighed.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 hidden md:flex">
            Se alle nyheder
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => <article key={item._id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1e3a8a] uppercase tracking-wide">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-[#c5a059] font-medium mb-2">
                  {item.date}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-[#1e3a8a] hover:text-[#c5a059] transition-colors mt-auto">
                  Læs mere <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>)}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Se alle nyheder
          </Button>
        </div>
      </div>
    </section>;
}