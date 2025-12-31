import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { Download, FileText, FileQuestion, Calendar } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Ugeseddel - Sct. Albani Kirke',
  description: 'Den aktuelle ugeseddel for Sct. Albani Kirke i Odense.',
};

async function getUgeseddelContent() {
  try {
    const ugeseddelPage = await client.fetch(queries.ugeseddelPage);
    return { ugeseddelPage };
  } catch (error) {
    console.error('Error fetching Ugeseddel content:', error);
    return { ugeseddelPage: null };
  }
}

// Format date to Danish format
function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default async function UgeseddelPage() {
  const { ugeseddelPage } = await getUgeseddelContent();

  // Fallback data
  const pageData = ugeseddelPage || {
    title: 'Ugeseddel',
    subtitle: 'Den aktuelle ugeseddel for Sct. Albani Kirke',
    currentBulletin: null,
    bulletinTitle: '',
    publishedDate: '',
    description: '',
    contactEmail: '',
    contactPerson: '',
  };

  const hasPDF = pageData.currentBulletin?.asset?.url;

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
              src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2070&auto=format&fit=crop"
              alt="Church bulletin"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-navy/90 mix-blend-multiply" />

          {/* Decorative golden cross pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle, #c5a059 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          {/* Decorative top ornament */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            {pageData.title}
          </h1>
          {pageData.subtitle && (
            <p className="text-xl md:text-2xl text-gold font-light mb-6 italic">
              {pageData.subtitle}
            </p>
          )}

          {/* Decorative divider */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-white/60" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-white/60" />
          </div>
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

      {/* Main Content */}
      {hasPDF ? (
        <>
          {/* Bulletin Info Section */}
          <section className="py-12 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%231e3a8a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center mb-8">
                {pageData.bulletinTitle && (
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-gold" />
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
                      {pageData.bulletinTitle}
                    </h2>
                    <div className="h-px w-8 bg-gold" />
                  </div>
                )}

                {pageData.publishedDate && (
                  <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
                    <Calendar className="h-4 w-4 text-gold" />
                    <time className="text-sm font-medium tracking-wide uppercase">
                      {formatDate(pageData.publishedDate)}
                    </time>
                  </div>
                )}

                {pageData.description && (
                  <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                    {pageData.description}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* PDF Viewer Section */}
          <section className="py-16 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Desktop PDF Viewer */}
              <div className="hidden md:block">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gold/20">
                  {/* Viewer Header */}
                  <div className="bg-gradient-to-r from-navy to-[#2a5aa8] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-white">
                          Ugeseddel
                        </h3>
                        <p className="text-xs text-slate-300">
                          {pageData.currentBulletin?.asset?.originalFilename || 'ugeseddel.pdf'}
                        </p>
                      </div>
                    </div>
                    <a
                      href={pageData.currentBulletin.asset.url}
                      download={pageData.currentBulletin.asset.originalFilename || 'ugeseddel.pdf'}
                      className="flex items-center gap-2 bg-gold text-white px-5 py-2.5 rounded-lg hover:bg-[#b89549] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </div>

                  {/* PDF Embed */}
                  <div className="w-full h-[900px] bg-slate-100">
                    <iframe
                      src={`${pageData.currentBulletin.asset.url}#view=FitH`}
                      width="100%"
                      height="100%"
                      aria-label="Ugeseddel PDF dokument"
                      title="Aktuel ugeseddel"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Download Card */}
              <div className="md:hidden">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="relative h-48 bg-gradient-to-br from-navy via-[#2a5aa8] to-navy flex items-center justify-center overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold blur-3xl" />
                      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white blur-3xl" />
                    </div>

                    <div className="relative w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <FileText className="h-10 w-10 text-gold" />
                    </div>
                  </div>

                  <div className="p-8 text-center">
                    {pageData.bulletinTitle && (
                      <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                        {pageData.bulletinTitle}
                      </h3>
                    )}
                    {pageData.description && (
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {pageData.description}
                      </p>
                    )}
                    {pageData.publishedDate && (
                      <p className="text-sm text-slate-500 mb-8 flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4 text-gold" />
                        {formatDate(pageData.publishedDate)}
                      </p>
                    )}

                    <a
                      href={pageData.currentBulletin.asset.url}
                      download={pageData.currentBulletin.asset.originalFilename || 'ugeseddel.pdf'}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-navy to-[#2a5aa8] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full justify-center"
                    >
                      <Download className="h-6 w-6" />
                      Download Ugeseddel
                    </a>

                    <p className="text-xs text-slate-400 mt-4">
                      PDF åbner i din browsers fremviser
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  Ugesedlen opdateres automatisk hver uge
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* No PDF Fallback State */
        <section className="py-32 bg-gradient-to-b from-white via-cream to-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Decorative icon container */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl scale-150" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cream to-white border-2 border-gold/30 flex items-center justify-center mx-auto">
                  <FileQuestion className="h-12 w-12 text-gold" />
                </div>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                Ingen ugeseddel tilgængelig
              </h2>

              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 bg-gold/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="h-px w-12 bg-gold/30" />
              </div>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Der er i øjeblikket ingen ugeseddel uploadet.<br />
                Kom gerne tilbage senere for at se den nyeste udgave.
              </p>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
