import { Layout } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sakramenterne - Sct. Albani Kirke',
  description: 'Lær om de syv sakramenter i den katolske kirke.',
};

const sacraments = [
  { name: 'Dåb', number: 1 },
  { name: 'Skrifte', number: 2 },
  { name: 'Firmelse', number: 3 },
  { name: 'Eukaristi', number: 4 },
  { name: 'Ægteskab', number: 5 },
  { name: 'Præstevielse', number: 6 },
  { name: 'De syges salvelse', number: 7 },
];

export default function SakramenternePage() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] via-[#1e3a8a]/95 to-[#0f172a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c5a059]/10 via-transparent to-transparent" />
        </div>

        {/* 7 circles positioned around center using trigonometry */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
          <div className="relative">
            {[...Array(7)].map((_, i) => {
              const angle = (i * 360) / 7 - 90;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#c5a059]/40 border border-[#c5a059]/60"
                  style={{
                    left: `calc(50% + ${x}px - 6px)`,
                    top: `calc(50% + ${y}px - 6px)`,
                  }}
                />
              );
            })}
            <div className="w-20 h-20 rounded-full border-2 border-[#c5a059]/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a059]/50 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#c5a059]/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-32 max-w-5xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-16 h-px bg-[#c5a059]" />
            <span className="text-[#c5a059] font-serif text-4xl tracking-wide">VII</span>
            <div className="w-16 h-px bg-[#c5a059]" />
          </div>

          <p className="text-[#c5a059] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            De syv sakramenter
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Sakramenterne
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
            Hellige handlinger og nådemidler indstiftet af Kristus
          </p>

          <div className="flex items-center gap-3">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i === 3 ? '#c5a059' : 'rgba(197, 160, 89, 0.4)',
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-8 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span className="text-[#c5a059]">/</span>
            <Link href="/#mass-times" className="hover:text-white transition-colors">
              Messe
            </Link>
            <span className="text-[#c5a059]">/</span>
            <span className="text-white">Sakramenterne</span>
          </nav>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#1e3a8a] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a8a]/5 text-[#1e3a8a] text-sm tracking-wider uppercase rounded-full mb-6">
              Hvad er et sakramente?
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Den katolske Kirke har syv sakramenter; dåb, skrifte, firmelse, eukaristi, ægteskab,
              præstevielse og de syges salvelses sakramente.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Et sakramente (af latin: &ldquo;sacer&rdquo;, dvs. hellig) er en hellig handling og et nådemiddel.
              Det hører med til sakramentets væsen, at det er Kristus selv, der har indstiftet det og ikke
              kirken og det gjorde Han, for at fortsætte sin frelsende gerning iblandt os.
            </p>

            <blockquote className="relative bg-gradient-to-r from-[#fdfbf7] to-white border-l-4 border-[#c5a059] pl-8 py-6 my-12 italic">
              <p className="text-xl text-[#1e3a8a] font-serif mb-0">
                Et sakramente kan man derfor kort og godt kalde en Kristus-handling.
              </p>
            </blockquote>

            <p className="text-slate-700 text-lg leading-relaxed">
              De troende skal være sig bevidst, at det er Jesus selv, der giver dem den nåde, der er
              knyttet til det sakramente, de modtager.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fdfbf7] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c5a059]" />
              <span className="text-[#c5a059] font-serif text-2xl">VII</span>
              <div className="w-8 h-px bg-[#c5a059]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a]">
              De syv sakramenter
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {sacraments.slice(0, 4).map((sacrament) => (
              <div
                key={sacrament.name}
                className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#c5a059]/30 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white font-serif text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a059] transition-colors">
                  {sacrament.number}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1e3a8a]">
                  {sacrament.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 max-w-3xl mx-auto">
            {sacraments.slice(4).map((sacrament) => (
              <div
                key={sacrament.name}
                className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#c5a059]/30 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white font-serif text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a059] transition-colors">
                  {sacrament.number}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1e3a8a]">
                  {sacrament.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
              <div className="w-2 h-2 rounded-full bg-[#c5a059]/60" />
              <div className="w-2 h-2 rounded-full bg-[#c5a059]/30" />
              <div className="w-12 h-px bg-[#c5a059]" />
              <div className="w-2 h-2 rounded-full bg-[#c5a059]/30" />
              <div className="w-2 h-2 rounded-full bg-[#c5a059]/60" />
              <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              Kontakt
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              De som ønsker at skrifte, de som ønsker syges salvelse for sig selv eller en anden,
              de som ønsker at lade sig døbe eller få døbt sit barn samt de som ønsker at gifte sig
              katolsk bedes tage kontakt med en af menighedens præster.
            </p>

            <p>
              De som kender på et præste- eller ordenskald har anledning til at tage kontakt med en
              af menighedens præster eller til at tage direkte kontakt med den biskoppelige kaldsansvarlige,
              p. Jesper Fich, sognepræst i Maria menighed, Frederiksberg.
            </p>

            <p>
              Du kan læse mere om sakramenterne på{' '}
              <a
                href="https://katolsk.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e3a8a] hover:text-[#c5a059] underline transition-colors"
              >
                Katolsk.dk
              </a>
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-lg font-medium hover:bg-[#2a5aa8] transition-colors shadow-lg shadow-[#1e3a8a]/20"
            >
              <span>Kontakt os</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
