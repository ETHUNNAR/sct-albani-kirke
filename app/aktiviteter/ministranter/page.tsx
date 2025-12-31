import { ServerLayout } from '@/components/ServerLayout';
import { client, queries } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import { Mail, Phone, User } from 'lucide-react';
import { PageHero } from '@/components/sections';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Ministranter - Sct. Albani Kirke',
  description: 'Information og vejledning for Ministranter i Sct. Albani Kirke. Tjener ved gudstjenesten.',
};

async function getMinstranterContent() {
  try {
    const ministranterPage = await client.fetch(queries.ministranterPage);
    return { ministranterPage };
  } catch (error) {
    console.error('Error fetching Ministranter content:', error);
    return { ministranterPage: null };
  }
}

export default async function MinstranterPage() {
  const { ministranterPage } = await getMinstranterContent();

  const pageData = ministranterPage || {
    title: 'Ministranter',
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Velkommen til Ministranter! Vi søger dedikerede unge mennesker, der gerne vil bidrage til vores gudstjenester.' }],
      },
    ],
    contactTitle: 'Kontakt og Spørgsmål',
    contact1: { sectionTitle: 'Højmessen og Aftenmessen', email: '', phone: '', person: '' },
    contact2: { sectionTitle: 'Messe på vietnamesisk', email: '', phone: '', person: '' },
  };

  return (
    <ServerLayout>
      <PageHero
        title={pageData.title}
        heroImage={pageData.heroImage}
        fallbackImage="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?q=80&w=2070&auto=format&fit=crop"
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-12 text-center">
            {pageData.contactTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] text-white rounded-2xl shadow-lg p-10">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">{pageData.contact1.sectionTitle}</h3>
              <div className="space-y-6">
                {pageData.contact1.email && (
                  <a href={`mailto:${pageData.contact1.email}`} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Mail className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Email</p>
                      <p className="font-semibold break-all">{pageData.contact1.email}</p>
                    </div>
                  </a>
                )}
                {pageData.contact1.phone && (
                  <a href={`tel:${pageData.contact1.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Telefon</p>
                      <p className="font-semibold">{pageData.contact1.phone}</p>
                    </div>
                  </a>
                )}
                {pageData.contact1.person && (
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <User className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Kontaktperson</p>
                      <p className="font-semibold">{pageData.contact1.person}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] text-white rounded-2xl shadow-lg p-10">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">{pageData.contact2.sectionTitle}</h3>
              <div className="space-y-6">
                {pageData.contact2.email && (
                  <a href={`mailto:${pageData.contact2.email}`} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Mail className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Email</p>
                      <p className="font-semibold break-all">{pageData.contact2.email}</p>
                    </div>
                  </a>
                )}
                {pageData.contact2.phone && (
                  <a href={`tel:${pageData.contact2.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Telefon</p>
                      <p className="font-semibold">{pageData.contact2.phone}</p>
                    </div>
                  </a>
                )}
                {pageData.contact2.person && (
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <User className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Kontaktperson</p>
                      <p className="font-semibold">{pageData.contact2.person}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-700 mb-6">
              Vælg kontakten for den messe, du gerne vil tjene ved, så kontakter du vedkommende direkte.
            </p>
          </div>
        </div>
      </section>
    </ServerLayout>
  );
}
