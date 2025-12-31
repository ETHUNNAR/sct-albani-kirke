import { Layout } from '@/components/Layout';
import { client, queries } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import { PageHero, ContactSection, DownloadsSection } from '@/components/sections';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Firmander - Sct. Albani Kirke',
  description: 'Information og vejledning for Firmander i Sct. Albani Kirke. En vigtig milepæl i dit kristne liv.',
};

async function getFiremanderContent() {
  try {
    const firmanderPage = await client.fetch(queries.firmanderPage);
    return { firmanderPage };
  } catch (error) {
    console.error('Error fetching Firmander content:', error);
    return { firmanderPage: null };
  }
}

export default async function FiremanderPage() {
  const { firmanderPage } = await getFiremanderContent();

  const pageData = firmanderPage || {
    title: 'Firmander',
    subtitle: 'En vigtig milepæl i dit kristne liv',
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Velkommen til Firmander! Dette er en vigtig dag hvor du bekræfter din tro og modtager Helligåndens gaver.' }],
      },
    ],
    aboutTitle: 'Om Firmander',
    aboutText: [],
    requirementsTitle: 'Krav og Forudsætninger',
    requirements: [],
    contactTitle: 'Kontakt',
    contactEmail: 'kontakt@sct-albani.dk',
    contactPhone: '2896 5517',
    contactPerson: 'Præsten',
    downloadTitle: 'Dokumenter',
    downloads: [],
  };

  return (
    <Layout>
      <PageHero
        title={pageData.title}
        subtitle={pageData.subtitle}
        heroImage={pageData.heroImage}
        fallbackImage="https://images.unsplash.com/photo-1533517310735-490a1a3fb5b7?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Forside', href: '/' },
          { label: 'Aktiviteter', href: '/#activities' },
          { label: pageData.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {pageData.description && (
            <div>
              <PortableText value={pageData.description} components={portableTextComponents} />
            </div>
          )}
        </div>
      </section>

      {pageData.aboutText && pageData.aboutText.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold">
                Information
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-navy mb-8">{pageData.aboutTitle}</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={pageData.aboutText} components={portableTextComponents} />
            </div>
          </div>
        </section>
      )}

      {pageData.requirements && pageData.requirements.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-navy mb-8">{pageData.requirementsTitle}</h2>
            <div className="bg-cream rounded-xl p-8 border border-slate-200">
              <PortableText value={pageData.requirements} components={portableTextComponents} />
            </div>
          </div>
        </section>
      )}

      <DownloadsSection title={pageData.downloadTitle} downloads={pageData.downloads} />

      <ContactSection
        title={pageData.contactTitle}
        email={pageData.contactEmail}
        phone={pageData.contactPhone}
        contactPerson={pageData.contactPerson}
        className="border-t-0"
      />
    </Layout>
  );
}
