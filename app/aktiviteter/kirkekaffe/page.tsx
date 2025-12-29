import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
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

  // Fallback data
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
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2070&auto=format&fit=crop"
              alt="Kirkekaffe"
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

      {/* Large Feature Image - Full Width */}
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
