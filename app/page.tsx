import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { WeeklyProgram } from '@/components/WeeklyProgram';
import { NewsSection } from '@/components/NewsSection';
import { LocationMap } from '@/components/LocationMap';
import { client, queries } from '@/lib/sanity';

export const revalidate = 60; // Revalidate every 60 seconds

async function getContent() {
  try {
    const homePage = await client.fetch(queries.homePage);
    const newsPosts = await client.fetch(queries.featuredNewsPosts);
    return { homePage, newsPosts };
  } catch (error) {
    console.error('Error fetching content from Sanity:', error);
    return { homePage: null, newsPosts: [] };
  }
}

export default async function Home() {
  const { homePage, newsPosts } = await getContent();

  // Provide fallback data if homePage is null
  const pageData = homePage || {
    heroTitle: 'Sct. Albani Kirke',
    heroSubtitle: 'Den katolske kirke i Odense',
    aboutTitle: 'Velkommen til Sct. Albani Kirke',
    aboutText: 'Sct. Albani Kirke er den katolske sognekirke i Odense. Vi er et levende fællesskab af mennesker fra mange forskellige nationer, der forenes i troen på Jesus Kristus. Uanset hvem du er, og hvor du kommer fra, er du velkommen her.',
    newsItems: [],
    weeklyProgram: [],
  };

  return (
    <Layout>
      <Hero siteSettings={pageData} />
      <WeeklyProgram weeklyProgram={pageData.weeklyProgram || []} />
      <NewsSection newsItems={newsPosts || []} />

      {/* Quick About Section */}
      <section className="py-32 bg-gradient-to-b from-white to-[#fdfbf7] text-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl" />

        {/* Decorative Cross Pattern */}
        <div className="absolute top-10 left-10 text-[#1e3a8a]/5 text-6xl font-serif">✦</div>
        <div className="absolute bottom-10 right-10 text-[#c5a059]/10 text-6xl font-serif">✦</div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
              Om Kirken
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8 leading-tight">
            {pageData.aboutTitle}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>

          <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            {pageData.aboutText}
          </p>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />
    </Layout>
  );
}
