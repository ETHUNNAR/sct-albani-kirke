import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import { PageHero, ContactSection } from '@/components/sections';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Familiegruppen - Sct. Albani Kirke',
  description: 'Information om Familiegruppen i Sct. Albani Kirke.',
};

async function getFamiliegruppenContent() {
  try {
    const familiegruppenPage = await client.fetch(queries.familiegruppenPage);
    return { familiegruppenPage };
  } catch (error) {
    console.error('Error fetching Familiegruppen content:', error);
    return { familiegruppenPage: null };
  }
}

export default async function FamiliegruppenPage() {
  const { familiegruppenPage } = await getFamiliegruppenContent();

  const pageData = familiegruppenPage || {
    title: 'Familiegruppen',
    subtitle: 'Familie-lørdage 2025/2026',
    heroImage: null,
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Velkommen til Familiegruppen! Vi arrangerer aktiviteter for hele familien.' }],
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
        fallbackImage="https://images.unsplash.com/photo-1511895486341-702f393ee269?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Forside', href: '/' },
          { label: 'Aktiviteter', href: '/#activities' },
          { label: pageData.title },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg max-w-none">
              <PortableText value={pageData.description} components={portableTextComponents} />
            </div>

            <div className="flex items-start">
              {pageData.featureImage ? (
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={urlFor(pageData.featureImage).width(600).url()}
                    alt={pageData.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-cream to-[#e8e5df] rounded-lg flex items-center justify-center">
                  <p className="text-slate-500 text-center">Billede vil blive tilføjet snart</p>
                </div>
              )}
            </div>
          </div>
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
