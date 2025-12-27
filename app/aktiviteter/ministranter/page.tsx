import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
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

// Custom PortableText components for proper rendering
const portableTextComponents = {
  list: {
    bullet: ({children}: any) => <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal list-inside text-slate-700 space-y-2 ml-4">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="text-slate-700">{children}</li>,
    number: ({children}: any) => <li className="text-slate-700">{children}</li>,
  },
  block: {
    normal: ({children}: any) => <p className="text-slate-700 mb-4">{children}</p>,
    h2: ({children}: any) => <h2 className="font-serif text-2xl font-bold text-[#1e3a8a] mt-6 mb-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mt-5 mb-3">{children}</h3>,
  },
};

export default async function MinstranterPage() {
  const { ministranterPage } = await getMinstranterContent();

  // Fallback data
  const pageData = ministranterPage || {
    title: 'Ministranter',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Velkommen til Ministranter! Vi søger dedikerede unge mennesker, der gerne vil bidrage til vores gudstjenester.',
          },
        ],
      },
    ],
    contactTitle: 'Kontakt og Spørgsmål',
    contact1: {
      sectionTitle: 'Højmessen og Aftenmessen',
      email: '',
      phone: '',
      person: '',
    },
    contact2: {
      sectionTitle: 'Messe på vietnamesisk',
      email: '',
      phone: '',
      person: '',
    },
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
              src="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?q=80&w=2070&auto=format&fit=crop"
              alt="Ministranter"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1e3a8a]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            {pageData.title}
          </h1>
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {pageData.description && (
            <div>
              <PortableText value={pageData.description} components={portableTextComponents} />
            </div>
          )}
        </div>
      </section>

      {/* Dual Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-12 text-center">
            {pageData.contactTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* First Contact Box */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] text-white rounded-2xl shadow-lg p-10">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">
                {pageData.contact1.sectionTitle}
              </h3>

              <div className="space-y-6">
                {pageData.contact1.email && (
                  <a
                    href={`mailto:${pageData.contact1.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Email</p>
                      <p className="font-semibold break-all">{pageData.contact1.email}</p>
                    </div>
                  </a>
                )}

                {pageData.contact1.phone && (
                  <a
                    href={`tel:${pageData.contact1.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
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

            {/* Second Contact Box */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] text-white rounded-2xl shadow-lg p-10">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">
                {pageData.contact2.sectionTitle}
              </h3>

              <div className="space-y-6">
                {pageData.contact2.email && (
                  <a
                    href={`mailto:${pageData.contact2.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-[#c5a059] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Email</p>
                      <p className="font-semibold break-all">{pageData.contact2.email}</p>
                    </div>
                  </a>
                )}

                {pageData.contact2.phone && (
                  <a
                    href={`tel:${pageData.contact2.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
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
    </Layout>
  );
}
