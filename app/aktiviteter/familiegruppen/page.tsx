import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
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
    h1: ({children}: any) => <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mt-8 mb-6">{children}</h1>,
    h2: ({children}: any) => <h2 className="font-serif text-2xl font-bold text-[#1e3a8a] mt-6 mb-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mt-5 mb-3">{children}</h3>,
  },
};

export default async function FamiliegruppenPage() {
  const { familiegruppenPage } = await getFamiliegruppenContent();

  // Fallback data
  const pageData = familiegruppenPage || {
    title: 'Familiegruppen',
    subtitle: 'Familie-lørdage 2025/2026',
    heroImage: null,
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Velkommen til Familiegruppen! Vi arrangerer aktiviteter for hele familien.',
          },
        ],
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
              src="https://images.unsplash.com/photo-1511895486341-702f393ee269?q=80&w=2070&auto=format&fit=crop"
              alt="Familiegruppen"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Rich Text */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={pageData.description} components={portableTextComponents} />
            </div>

            {/* Right Column - Feature Image */}
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
                <div className="w-full h-96 bg-gradient-to-br from-[#f8f6f1] to-[#e8e5df] rounded-lg flex items-center justify-center">
                  <p className="text-slate-500 text-center">Billede vil blive tilføjet snart</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] text-white rounded-2xl shadow-xl p-12">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">
              {pageData.contactTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pageData.contactEmail && (
                <a
                  href={`mailto:${pageData.contactEmail}`}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-8 w-8 text-[#c5a059] mb-3" />
                  <span className="text-sm text-slate-300 mb-2">Email</span>
                  <span className="font-semibold text-center break-all">
                    {pageData.contactEmail}
                  </span>
                </a>
              )}

              {pageData.contactPhone && (
                <a
                  href={`tel:${pageData.contactPhone.replace(/\s/g, '')}`}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-8 w-8 text-[#c5a059] mb-3" />
                  <span className="text-sm text-slate-300 mb-2">Telefon</span>
                  <span className="font-semibold">{pageData.contactPhone}</span>
                </a>
              )}

              {pageData.contactPerson && (
                <div className="flex flex-col items-center p-6 rounded-lg bg-white/10">
                  <User className="h-8 w-8 text-[#c5a059] mb-3" />
                  <span className="text-sm text-slate-300 mb-2">Kontaktperson</span>
                  <span className="font-semibold">{pageData.contactPerson}</span>
                </div>
              )}
            </div>

            <div className="text-center">
              <p className="text-slate-200 mb-6">
                Har du spørgsmål? Kontakt os gerne - vi hjælper dig med at forberede dig på denne vigtige dag.
              </p>
              <Link href="/#contact">
                <Button variant="secondary" className="inline-block">
                  Se alle kontaktinformationer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
