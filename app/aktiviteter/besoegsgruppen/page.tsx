import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Besøgsgruppen - Sct. Albani Kirke',
  description: 'Besøgsgruppen i Sct. Albani Menighed. En gruppe der styrker fællesskabet i vores menighed.',
};

async function getBesoesgruppenContent() {
  try {
    const besoesgruppenPage = await client.fetch(queries.besoesgruppenPage);
    return { besoesgruppenPage };
  } catch (error) {
    console.error('Error fetching Besøgsgruppen content:', error);
    return { besoesgruppenPage: null };
  }
}

export default async function BesoesgruppenPage() {
  const { besoesgruppenPage } = await getBesoesgruppenContent();

  // Fallback data if CMS content is not available
  const pageData = besoesgruppenPage || {
    title: 'Besøgsgruppen',
    subtitle: 'Menigheds Besøgsgruppe',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Vi er en gruppe fra Menigheden, som kan tilbyde møte besøg med jævnlige mellemrum.',
          },
        ],
      },
    ],
    aboutTitle: 'Om Besøgsgruppen',
    aboutText: 'Besøgsgruppen arbejder for at styrke fællesskabet i vores menighed gennem personlig kontakt og omsorg.',
    objectives: [
      { text: 'er du alene, ung som ældre' },
      { text: 'er du gennem tab blevet alene' },
      { text: 'er du på grund af handicap eller sygdom afskåret fra at komme ind i Kirken' },
      { text: 'er du indlagt på hospitalet med en alvorlig sygdom' },
      { text: 'har du behov for besøg af en trosfælle' },
      { text: 'til et par timers hyggeligt samvær,' },
      { text: 'til at snakke med - til at være stille sammen med' },
    ],
    contactEmail: 'besøgsgruppen@sct-albani.dk',
    contactPhone: '2896 5517',
    contactPerson: 'Kontaktperson',
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {pageData.heroImage ? (
            <img
              src={urlFor(pageData.heroImage).width(2000).height(1200).url()}
              alt={pageData.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
              alt="Gathering"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1e3a8a]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            {pageData.title}
          </h1>
          {pageData.subtitle && (
            <p className="text-xl md:text-2xl text-[#c5a059] font-medium mb-6">
              {pageData.subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-[#c5a059] rounded-full" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span>/</span>
            <Link href="/#activities" className="hover:text-white transition-colors">
              Aktiviteter
            </Link>
            <span>/</span>
            <span className="text-white">{pageData.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f1] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* About Section */}
          <div className="mb-16">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-semibold">
                Om os
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              {pageData.aboutTitle}
            </h2>

            <div className="flex items-start gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-[#c5a059] to-transparent mt-3" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50 mt-2.5" />
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              {pageData.aboutText}
            </p>

            {/* Objectives List */}
            {pageData.objectives && pageData.objectives.length > 0 && (
              <div className="bg-[#fdfbf7] rounded-xl p-8 border border-slate-200">
                <h3 className="font-serif text-xl font-semibold text-[#1e3a8a] mb-6">
                  Vi er her for dig hvis:
                </h3>
                <ul className="space-y-3">
                  {pageData.objectives && pageData.objectives.map((objective: any, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#c5a059] mt-2 mr-4" />
                      <span className="text-slate-700">{objective.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-[#f8f6f1] to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-slate-200">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
                  Kontakt
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                Kontakt os
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
                <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
                <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
                <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
              </div>
            </div>

            {pageData.contactPerson && (
              <div className="mb-8 text-center">
                <p className="text-slate-700 text-lg mb-4">
                  <strong>Kontaktperson:</strong> {pageData.contactPerson}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pageData.contactEmail && (
                <a
                  href={`mailto:${pageData.contactEmail}`}
                  className="flex flex-col items-center p-6 rounded-lg hover:bg-[#f8f6f1] transition-colors border border-slate-100"
                >
                  <Mail className="h-8 w-8 text-[#1e3a8a] mb-3" />
                  <span className="text-slate-600 text-sm mb-2">Email</span>
                  <span className="text-[#1e3a8a] font-semibold hover:text-[#c5a059] transition-colors">
                    {pageData.contactEmail}
                  </span>
                </a>
              )}

              {pageData.contactPhone && (
                <a
                  href={`tel:${pageData.contactPhone.replace(/\s/g, '')}`}
                  className="flex flex-col items-center p-6 rounded-lg hover:bg-[#f8f6f1] transition-colors border border-slate-100"
                >
                  <Phone className="h-8 w-8 text-[#1e3a8a] mb-3" />
                  <span className="text-slate-600 text-sm mb-2">Telefon</span>
                  <span className="text-[#1e3a8a] font-semibold hover:text-[#c5a059] transition-colors">
                    {pageData.contactPhone}
                  </span>
                </a>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-6">
                Du er også velkommen til at kontakte os gennem præsterne eller sognekontoret.
              </p>
              <Link href="/#contact">
                <Button variant="secondary">Se alle kontaktinformationer</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
