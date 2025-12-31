import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Katolske Informationssider - Sct. Albani Kirke',
  description: 'Links til katolske informationssider og ressourcer.',
};

async function getKatolskeInformationssiderContent() {
  try {
    const katolskeInformationssiderPage = await client.fetch(queries.katolskeInformationssiderPage);
    return { katolskeInformationssiderPage };
  } catch (error) {
    console.error('Error fetching Katolske Informationssider content:', error);
    return { katolskeInformationssiderPage: null };
  }
}

export default async function KatolskeInformationssiderPage() {
  const { katolskeInformationssiderPage } = await getKatolskeInformationssiderContent();

  // Fallback data
  const pageData = katolskeInformationssiderPage || {
    title: 'Katolske Informationssider',
    subtitle: 'Links til katolske ressourcer',
    heroImage: null,
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Her finder du links til forskellige katolske informationssider og ressourcer.',
          },
        ],
      },
    ],
    resourceLinks: [],
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
              alt="Katolske Informationssider"
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
            <span className="text-white">{pageData.title}</span>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      {pageData.description && pageData.description.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <PortableText value={pageData.description} components={portableTextComponents} />
            </div>
          </div>
        </section>
      )}

      {/* Resource Links Grid */}
      {pageData.resourceLinks && pageData.resourceLinks.length > 0 && (
        <section className="py-20 bg-[#f8f6f1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.resourceLinks.map((resource: any, index: number) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-gradient-to-br from-[#f8f6f1] to-[#e8e5df] overflow-hidden flex items-center justify-center">
                    {resource.image ? (
                      <img
                        src={urlFor(resource.image).width(400).height(200).url()}
                        alt={resource.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-slate-400 text-sm">Billede mangler</div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    {/* Title / Link */}
                    <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#c5a059] transition-colors line-clamp-2">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="mt-4 inline-flex items-center text-[#c5a059] font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                      Besøg siden
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {(!pageData.resourceLinks || pageData.resourceLinks.length === 0) && (
        <section className="py-20 bg-[#f8f6f1]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-600 text-lg">
              Der er endnu ikke tilføjet ressourcer. Kom tilbage snart!
            </p>
          </div>
        </section>
      )}
    </Layout>
  );
}
