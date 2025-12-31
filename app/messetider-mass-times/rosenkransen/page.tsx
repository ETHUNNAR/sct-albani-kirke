import { Layout } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rosenkransen - Sct. Albani Kirke',
  description: 'Lær om rosenkransen, dens historie og hvordan man beder den i Sct. Albani Kirke.',
};

export default function RosenkransenPage() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-[#0f172a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        </div>

        {/* Floating beads - positions calculated with modulo for distribution */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-gold/20 animate-pulse"
              style={{
                top: `${15 + (i * 7) % 70}%`,
                left: `${5 + (i * 8) % 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-32 max-w-5xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-20 h-20 rounded-full border-2 border-gold/50 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-gold" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-gold" />
          </div>

          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Bed Rosenkransen
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Rosenkransen
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
            En meditativ bøn gennem Jesu liv - fra bebudelsen til opstandelsen
          </p>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-gold/70" />
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold/70" />
            <div className="w-2 h-2 rounded-full bg-gold" />
          </div>
        </div>

        <div className="absolute bottom-8 left-8 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span className="text-gold">/</span>
            <Link href="/#mass-times" className="hover:text-white transition-colors">
              Messe
            </Link>
            <span className="text-gold">/</span>
            <span className="text-white">Rosenkransen</span>
          </nav>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-navy to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-navy/5 text-navy text-sm tracking-wider uppercase rounded-full mb-6">
              En bøn med Jesus i centrum
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-8">
              Hvad er rosenkransen?
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Rosenkransen bliver nok af mange opfattet som en super-katolsk bøn, da man i rosenkransen
              beder Maria om at gå i forbøn for os. Dog er rosenkransen <em className="text-navy font-medium">en
              bøn med Jesus i centrum</em>.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              I rosenkransbønnen mediterer man over de vigtigste begivenheder i Jesu liv, altså man
              fordyber sig i frelseshistorien. Den gennemgående bøn i rosenkransen, &ldquo;Hil dig Maria...&rdquo;,
              bygger på englens hilsen til Maria ved bebudelsen. <em className="text-navy font-medium">Inkarnationen
              - dette at Gud blev menneske - står altså i centrum i Rosenkransen.</em>
            </p>

            <blockquote className="relative bg-gradient-to-r from-[#fdfbf7] to-white border-l-4 border-gold pl-8 py-6 my-12 italic">
              <p className="text-xl text-navy font-serif mb-0">
                &ldquo;Rosenkransen er blevet en elsket bøn, fordi den både kan bedes af den helt enkle
                kristne - ja af analfabeten - men også den lærde finder her en fuldgyldig næring for sin bøn.&rdquo;
              </p>
            </blockquote>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Vi følger Marias eksempel, hun som <em>&ldquo;gemte og overvejede alle disse ord i sit hjerte&rdquo;</em>.
              Rosenkransen er velegnet til fællesbøn, og den har i mange katolske familier gennem generationer
              været den fælles familiebøn.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              For at lære at bede rosenkransen kan man finde vejledning i <em>Katolsk Bønnebog</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fdfbf7] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-navy to-gold" />

              <div className="space-y-12">
                <div className="relative pl-20">
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-lg" />
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">1300-tallet</span>
                  <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">Tidlig form</h3>
                  <p className="text-slate-600">Rosenkransen opstod i sin enkle form som en meditativ bøn.</p>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-navy border-4 border-white shadow-lg" />
                  <span className="text-navy text-sm font-medium uppercase tracking-wider">Gennem århundrederne</span>
                  <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">Udvikling</h3>
                  <p className="text-slate-600">Rosenkransen udviklede sig over flere århundreder.</p>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-lg" />
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">1600-tallet</span>
                  <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">Nuværende form</h3>
                  <p className="text-slate-600">Rosenkransen nåede sin nuværende struktur.</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm tracking-wider uppercase rounded-full mb-6">
                Historie
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                En bøn gennem tiderne
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                I en meget enkel form dukkede rosenkransen op i 1300-tallet, og blev så videreudviklet
                gennem et par århundreder, indtil den i 1600-tallet fandt den form vi kender i dag.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Rosenkransen har haft en stor pædagogisk funktion over for mennesker som ikke kunne læse.
                I rosenkransbønnen mediterer man over de vigtigste begivenheder i Jesu liv, altså man
                fordyber sig i frelseshistorien.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Man kan se rosenkransen som en meditation af Kirkens liturgi: Fra Jesu undfangelse til
                &ldquo;han satte sig ved Faderens højre hånd&rdquo;. Fra Kirkens &ldquo;fødsel&rdquo; til det nye
                himmelske Jerusalems herlighed. Fra adventstiden til Pinsefesten. Eller som en meditativ
                kommentar til Jesus-hymnen i Filipperbrevet 2,6-11.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-12 h-px bg-gold" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
            Bed rosenkransen med os
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            I Sct. Albani Kirke bedes rosenkransen regelmæssigt før messen.
            Tjek messetiderne for at finde tidspunkter, hvor rosenkransen bedes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#mass-times"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white rounded-lg font-medium hover:bg-[#2a5aa8] transition-colors shadow-lg shadow-navy/20"
            >
              <span>Se messetider</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/messetider-mass-times/messe"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy rounded-lg font-medium hover:bg-slate-50 transition-colors border border-slate-200"
            >
              <span>Læs om messen</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
