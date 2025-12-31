import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import { PageHero, ContactSection } from '@/components/sections';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Bibelgruppe - Sct. Albani Kirke',
  description: 'Information om Bibelgruppe i Sct. Albani Kirke.',
};

async function getBibelgruppeContent() {
  try {
    const bibelgruppePage = await client.fetch(queries.bibelgruppePage);
    return { bibelgruppePage };
  } catch (error) {
    console.error('Error fetching Bibelgruppe content:', error);
    return { bibelgruppePage: null };
  }
}

export default async function BibelgruppePage() {
  const { bibelgruppePage } = await getBibelgruppeContent();

  const pageData = bibelgruppePage || {
    title: 'Bibelgruppe',
    subtitle: 'Bibelgruppe 2025',
    heroImage: null,
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Velkommen til Bibelgruppe! Vi mødes for at studere Bibelen sammen.' }],
      },
    ],
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
        fallbackImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Forside', href: '/' },
          { label: 'Aktiviteter', href: '/#activities' },
          { label: pageData.title },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <PortableText value={pageData.description} components={portableTextComponents} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f8f6f1]">
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
