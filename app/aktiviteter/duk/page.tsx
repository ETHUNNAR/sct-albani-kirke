import { Layout } from '@/components/Layout';
import { client, queries, urlFor } from '@/lib/sanity';
import { PageHero, SectionDivider } from '@/components/sections';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, ExternalLink, Users, CreditCard, Facebook, Instagram, FileEdit } from 'lucide-react';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Sct. Albani DUK - Danmarks Unge Katolikker',
  description: 'At styrke fællesskab med Gud og med hinanden. DUK i Sct. Albani Kirke, Odense.',
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

  return (
    <Layout>
      <PageHero
        title={dukPage.title || 'Sct. Albani DUK'}
        subtitle={dukPage.subtitle}
        heroImage={dukPage.heroImage}
        fallbackImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Forside', href: '/' },
          { label: 'Aktiviteter', href: '/#aktiviteter' },
          { label: 'Sct. Albani DUK' },
        ]}
      />

      {dukPage.purpose && (
        <section className="py-16 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-[128px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="font-serif text-2xl md:text-4xl text-white italic leading-relaxed">
              "{dukPage.purpose}"
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-20 h-1 bg-gold rounded-full" />
            </div>
          </div>
        </section>
      )}

      {(dukPage.overview || dukPage.groups?.length > 0) && (
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {(dukPage.overview || dukPage.bishopNote) && (
              <div className="max-w-3xl mx-auto text-center mb-16">
                {dukPage.overview && (
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {dukPage.overview}
                  </p>
                )}
                {dukPage.bishopNote && (
                  <p className="text-slate-600 italic">
                    {dukPage.bishopNote}
                  </p>
                )}
              </div>
            )}

            {dukPage.groups?.length > 0 && (
              <>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Vores Grupper</h2>
                  <SectionDivider />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dukPage.groups.map((group: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-gold"
                    >
                      <h3 className="font-serif text-xl font-bold text-navy mb-2">{group.name}</h3>
                      {group.description && (
                        <p className="text-slate-600 text-sm">{group.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {(dukPage.membership?.registrationInfo || dukPage.membership?.fee || dukPage.financialSupport?.bankAccount) && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Bliv Medlem</h2>
              <SectionDivider />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                {dukPage.membership?.registrationInfo && (
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {dukPage.membership.registrationInfo}
                  </p>
                )}

                {(dukPage.membership?.fee || dukPage.membership?.benefits) && (
                  <ul className="space-y-4 mb-6">
                    {dukPage.membership?.fee && (
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold text-sm font-bold">kr</span>
                        </div>
                        <div>
                          <span className="font-semibold text-navy">Kontingent:</span>{' '}
                          <span className="text-slate-600">
                            {dukPage.membership.fee}
                            {dukPage.membership.paymentMethod && ` via ${dukPage.membership.paymentMethod}`}
                          </span>
                        </div>
                      </li>
                    )}
                    {dukPage.membership?.benefits && (
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <div>
                          <span className="font-semibold text-navy">Fordele:</span>{' '}
                          <span className="text-slate-600">{dukPage.membership.benefits}</span>
                        </div>
                      </li>
                    )}
                  </ul>
                )}

                {dukPage.membership?.details && (
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 bg-cream/50 rounded-lg p-4 border-l-4 border-gold">
                    {dukPage.membership.details}
                  </p>
                )}

                {dukPage.membership?.registrationUrl && (
                  <a href={dukPage.membership.registrationUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="gap-2">
                      Tilmeld dig på duk.dk
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>

              {dukPage.financialSupport?.bankAccount && (
                <div className="bg-cream rounded-2xl p-8 border border-gold/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy">Støt DUK</h3>
                  </div>
                  <p className="text-slate-600 mb-4">Anonyme donationer modtages på:</p>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <p className="font-mono text-navy font-semibold">{dukPage.financialSupport.bankAccount}</p>
                    {dukPage.financialSupport.reference && (
                      <p className="text-sm text-slate-500 mt-1">Reference: "{dukPage.financialSupport.reference}"</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {(dukPage.board?.members?.length > 0 || dukPage.board?.photo) && (
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Bestyrelsen</h2>
              <SectionDivider />
              {dukPage.board?.description && (
                <p className="max-w-2xl mx-auto text-slate-600 mt-6">
                  {dukPage.board.description}
                </p>
              )}
            </div>

            {dukPage.board?.photo && (
              <div className="mb-12 max-w-4xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={urlFor(dukPage.board.photo).width(1200).height(600).url()}
                    alt="Bestyrelsen"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}

            {dukPage.board?.members?.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {dukPage.board.members.map((member: any, index: number) => {
                  const isChair = member.role === 'Formand';
                  return (
                    <div
                      key={index}
                      className={`rounded-xl p-5 text-center transition-all ${
                        isChair
                          ? 'bg-navy text-white col-span-2 sm:col-span-1'
                          : 'bg-white border border-slate-100 hover:border-gold/30'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-serif font-bold ${
                        isChair ? 'bg-gold text-navy' : 'bg-gold/20 text-gold'
                      }`}>
                        {member.name?.charAt(0) || '?'}
                      </div>
                      <h3 className={`font-semibold mb-1 ${isChair ? 'text-white' : 'text-navy'}`}>
                        {member.name}
                      </h3>
                      <p className="text-sm mb-3 text-gold">
                        {member.role}
                      </p>
                      {(member.phone || member.email) && (
                        <div className="space-y-1">
                          {member.phone && (
                            <a
                              href={`tel:${member.phone}`}
                              className={`flex items-center justify-center gap-1.5 text-xs ${
                                isChair ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-navy'
                              }`}
                            >
                              <Phone className="w-3 h-3" />
                              {member.phone}
                            </a>
                          )}
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className={`flex items-center justify-center gap-1.5 text-xs ${
                                isChair ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-navy'
                              }`}
                            >
                              <Mail className="w-3 h-3" />
                              Email
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {(dukPage.socialMedia?.facebook || dukPage.socialMedia?.instagram) && (
              <div className="mt-12 flex justify-center gap-4">
                {dukPage.socialMedia.facebook && (
                  <a
                    href={dukPage.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-slate-200 hover:border-navy hover:bg-navy hover:text-white transition-all group"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                )}
                {dukPage.socialMedia.instagram && (
                  <a
                    href={dukPage.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-slate-200 hover:border-navy hover:bg-navy hover:text-white transition-all group"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            Har du spørgsmål eller forslag til bestyrelsen eller er nysgerrig omkring børne- og ungdomsarbejdet, er du velkommen til at kontakte Sct. Albani DUKs formand,
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-white font-semibold text-xl">Maria Dinh</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:51602224"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-gold text-white hover:text-navy rounded-full transition-all"
              >
                <Phone className="w-4 h-4" />
                51602224
              </a>
              <a
                href="mailto:mariadinhduk@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-gold text-white hover:text-navy rounded-full transition-all"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
