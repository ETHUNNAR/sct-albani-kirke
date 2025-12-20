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
    <Layout weeklyProgram={pageData.weeklyProgram || []}>
      <Hero siteSettings={pageData} />
      <WeeklyProgram weeklyProgram={pageData.weeklyProgram || []} />
      <NewsSection newsItems={newsPosts || []} />

      {/* Quick About Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            {pageData.aboutTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {pageData.aboutText}
          </p>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full" />
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />
    </Layout>
  );
}
