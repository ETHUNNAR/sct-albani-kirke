import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ServiceTimes } from '@/components/ServiceTimes';
import { NewsSection } from '@/components/NewsSection';
import { client, queries } from '@/lib/sanity';

export const revalidate = 60; // Revalidate every 60 seconds

async function getContent() {
  try {
    const [serviceTimes, newsItems, siteSettings] = await Promise.all([
      client.fetch(queries.serviceTimes),
      client.fetch(queries.newsItems),
      client.fetch(queries.siteSettings),
    ]);

    return { serviceTimes, newsItems, siteSettings };
  } catch (error) {
    console.error('Error fetching content from Sanity:', error);
    return { serviceTimes: [], newsItems: [], siteSettings: null };
  }
}

export default async function Home() {
  const { serviceTimes, newsItems, siteSettings } = await getContent();

  return (
    <Layout>
      <Hero siteSettings={siteSettings} />
      <ServiceTimes serviceTimes={serviceTimes} />
      <NewsSection newsItems={newsItems} />

      {/* Quick About Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Velkommen til Sct. Albani Kirke
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {siteSettings?.aboutText ||
              'Sct. Albani Kirke er den katolske sognekirke i Odense. Vi er et levende fællesskab af mennesker fra mange forskellige nationer, der forenes i troen på Jesus Kristus. Uanset hvem du er, og hvor du kommer fra, er du velkommen her.'}
          </p>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full" />
        </div>
      </section>
    </Layout>
  );
}
