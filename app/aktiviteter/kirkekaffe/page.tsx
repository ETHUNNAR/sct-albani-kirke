import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PageHero, ContactSection } from '@/components/sections';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Kirkekaffe - Sct. Albani Kirke',
  description: 'Information om Kirkekaffe i Sct. Albani Kirke.',
};

async function getKirkekaffeContent() {
  try {
    const kirkekaffePage = await client.fetch(queries.kirkekaffePage);
    return { kirkekaffePage };
  } catch (error) {
    console.error('Error fetching Kirkekaffe content:', error);
    return { kirkekaffePage: null };
  }
}

export default async function KirkekaffePage() {
  const { kirkekaffePage } = await getKirkekaffeContent();

  const pageData = kirkekaffePage || {
    title: 'Kirkekaffe',
    subtitle: 'Kirkekaffe kl. 11 efterår 2025',
    heroImage: null,
    featureImage: null,
    contactTitle: 'Kontakt',
    contactEmail: '',
    contactPhone: '',
    contactPerson: '',
  };

  return (
    <Layout>
      <PageHero
        title={pageData.title}
        subtitle={pageData.subtitle}
        heroImage={pageData.heroImage}
        fallbackImage="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Forside', href: '/' },
          { label: 'Aktiviteter', href: '/#activities' },
          { label: pageData.title },
        ]}
      />

      <section className="py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {pageData.featureImage ? (
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={urlFor(pageData.featureImage).width(1200).url()}
                alt={pageData.title}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-gradient-to-br from-[#e8e5df] to-[#d8d5cf] rounded-lg flex items-center justify-center">
              <p className="text-slate-500 text-center">Billede vil blive tilføjet snart</p>
            </div>
          )}
        </div>
      </section>

      <ContactSection
        title={pageData.contactTitle}
        email={pageData.contactEmail}
        phone={pageData.contactPhone}
        contactPerson={pageData.contactPerson}
      />
    </Layout>
  );
}
