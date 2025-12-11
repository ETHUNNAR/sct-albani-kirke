import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { Users, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Sct. Albani DUK - Danmarks Unge Katolikker',
  description: 'At styrke fællesskab med Gud og med hinanden. Læs mere om DUK i Sct. Albani Kirke Odense.',
};

async function getDukContent() {
  try {
    const dukPage = await client.fetch(queries.dukPage);
    return { dukPage };
  } catch (error) {
    console.error('Error fetching DUK content:', error);
    return { dukPage: null };
  }
}

export default async function DukPage() {
  const { dukPage } = await getDukContent();

  // Fallback data if CMS content is not available
  const pageData = dukPage || {
    title: 'Sct. Albani DUK',
    subtitle: 'Danmarks Unge Katolikker',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'At styrke fællesskab med Gud og med hinanden - det er kernen i Sct. Albani DUK.',
          },
        ],
      },
    ],
    membershipFee: '100 kr. pr. år',
    registrationUrl: 'https://www.duk.dk',
    ageGroups: [
      {
        name: 'Ministranter',
        ageRange: '1. kommunion - 18 år',
        description: 'For dem der ønsker at tjene ved alteret og deltage i kirkens liturgi.',
      },
      {
        name: 'Unge',
        ageRange: '18-30 år',
        description: 'Fællesskab for unge voksne der ønsker at styrke deres tro sammen.',
      },
    ],
    boardMembers: [
      { name: 'Maria Dinh', role: 'Formand' },
      { name: 'Anni', role: 'Næstformand' },
      { name: 'Veronica', role: 'Kasserer' },
    ],
    socialMedia: {
      facebook: 'https://www.facebook.com/sctalbaniduk',
      instagram: 'https://www.instagram.com/sctalbaniduk',
    },
    contactEmail: 'duk@sct-albani.dk',
    contactPhone: '2896 5517',
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
              alt="Youth gathering"
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
            <span className="text-white">Sct. Albani DUK</span>
          </nav>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {pageData.description && (
              <PortableText value={pageData.description} />
            )}
          </div>

          {/* Membership Info */}
          {(pageData.membershipFee || pageData.registrationUrl) && (
            <div className="mt-12 bg-[#f8f6f1] rounded-xl p-8 border-l-4 border-[#c5a059]">
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4 flex items-center gap-3">
                <Users className="h-6 w-6" />
                Bliv Medlem
              </h3>
              {pageData.membershipFee && (
                <p className="text-lg mb-4">
                  <strong>Kontingent:</strong> {pageData.membershipFee}
                </p>
              )}
              {pageData.registrationUrl && (
                <a
                  href={pageData.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="inline-flex items-center gap-2">
                    Tilmeld dig her
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Age Groups */}
      {pageData.ageGroups && pageData.ageGroups.length > 0 && (
        <section className="py-20 bg-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                {pageData.ageGroupsTitle || 'Vores Grupper'}
              </h2>
              <div className="w-24 h-1 bg-[#c5a059] mx-auto rounded-full" />

              {/* Age Groups Description */}
              {pageData.ageGroupsDescription && (
                <div className="max-w-4xl mx-auto mt-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {pageData.ageGroupsDescription}
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.ageGroups.map((group: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-2">
                    {group.name}
                  </h3>
                  {group.ageRange && (
                    <p className="text-[#c5a059] font-semibold mb-4">
                      {group.ageRange}
                    </p>
                  )}
                  {group.description && (
                    <p className="text-slate-600">{group.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Board Members */}
      {pageData.boardMembers && pageData.boardMembers.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                {pageData.boardTitle || 'Bestyrelsen'}
              </h2>
              <div className="w-24 h-1 bg-[#c5a059] mx-auto rounded-full" />

              {/* Board Description */}
              {pageData.boardDescription && (
                <div className="max-w-4xl mx-auto mt-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {pageData.boardDescription}
                  </p>
                </div>
              )}
            </div>

            {/* Board Photo */}
            {pageData.boardPhoto && (
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
                <img
                  src={urlFor(pageData.boardPhoto).width(1200).height(600).url()}
                  alt="Bestyrelsen"
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Board Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pageData.boardMembers.map((member: any, index: number) => (
                <div
                  key={index}
                  className="bg-[#f8f6f1] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {member.photo && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={urlFor(member.photo).width(400).height(400).url()}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#c5a059] font-semibold mb-2">
                      {member.role}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-slate-600 hover:text-[#1e3a8a] transition-colors flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact & Social */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Kontakt Os
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pageData.contactEmail && (
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-[#c5a059] mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${pageData.contactEmail}`}
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  {pageData.contactEmail}
                </a>
              </div>
            )}
            {pageData.contactPhone && (
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-[#c5a059] mb-4" />
                <h3 className="font-semibold mb-2">Telefon</h3>
                <a
                  href={`tel:${pageData.contactPhone}`}
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  {pageData.contactPhone}
                </a>
              </div>
            )}
          </div>

          {/* Social Media */}
          {(pageData.socialMedia?.facebook || pageData.socialMedia?.instagram) && (
            <div className="border-t border-white/20 pt-8">
              <h3 className="font-semibold mb-6">Følg os på sociale medier</h3>
              <div className="flex justify-center gap-6">
                {pageData.socialMedia.facebook && (
                  <a
                    href={pageData.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {pageData.socialMedia.instagram && (
                  <a
                    href={pageData.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
