import { Layout } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';
import { HandHeart, Landmark, Smartphone, Download } from 'lucide-react';
import { SectionHeader, SectionDivider, DecorativeBlobs } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Støt Kirken - Sct. Albani Kirke',
  description: 'Støt Sct. Albani Kirke med en gave. Se hvordan du kan bidrage via kollekt, bankoverførsel eller MobilePay.',
};

export default function StotKirkenPage() {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-navy/90 to-navy" />
        <DecorativeBlobs variant="centered" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">Støt Kirken</h1>
          <p className="text-xl md:text-2xl text-gold font-semibold mb-6 tracking-wide">GAVER TIL MENIGHEDEN</p>
          <SectionDivider />
        </div>
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
            <span>/</span>
            <span className="text-white">Støt Kirken</span>
          </nav>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
        <DecorativeBlobs />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader tag="Din støtte gør en forskel" title="Hjælp os med at tjene menigheden" description="Din støtte hjælper os med at vedligeholde kirken, arrangere gudstjenester og aktiviteter, og tjene vores mangfoldige menighed. Alle bidrag modtages med taknemmelighed." className="mb-0" />
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <DecorativeBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Giv en gave" tagVariant="blue" title="Sådan støtter du" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gold/20 hover:border-gold/40 group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <HandHeart className="h-10 w-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4 text-center">Kollekt ved messen</h3>
              <p className="text-slate-600 text-center leading-relaxed">Giv dit bidrag ved kirkens kollekt under gudstjenesten</p>
            </div>

            <div className="bg-gradient-to-br from-white to-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gold/20 hover:border-gold/40 group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Landmark className="h-10 w-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6 text-center">Bankoverførsel</h3>
              <div className="bg-white rounded-xl p-6 border-2 border-navy/10 shadow-sm">
                <div className="space-y-3 font-mono">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-sm text-slate-600">Reg.nr.:</span>
                    <span className="text-lg font-bold text-navy">4183</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Kontonr.:</span>
                    <span className="text-lg font-bold text-navy">0005001471</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gold/20 hover:border-gold/40 group md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-10 w-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6 text-center">MobilePay</h3>
              <div className="bg-white rounded-xl p-6 border-2 border-gold/20 shadow-sm">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Nummer:</p>
                  <p className="font-mono text-4xl md:text-5xl font-bold text-gold tracking-wider">53 77 35</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
        <DecorativeBlobs variant="centered" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Download" title="Download Information" />
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">VKort - Kontaktoplysninger</h3>
            <p className="text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Download vores VKort for at gemme kirkens kontaktoplysninger direkte i din telefon eller computer.
            </p>
            <a href="/Sognekontoret.vcf" download className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors shadow-md hover:shadow-lg">
              <Download className="h-5 w-5" />
              Download VKort
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <DecorativeBlobs variant="centered" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Tak for din støtte</h2>
          <SectionDivider className="mb-8" />
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
            Hver gave, stor eller lille, gør det muligt for os at fortsætte vores mission med at tjene menigheden og dele evangeliet.
          </p>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Dit bidrag hjælper med at vedligeholde vores smukke kirke, støtte vores præster og medarbejdere, arrangere messer og kirkelige begivenheder, og skabe et velkommende fællesskab for alle.
          </p>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gold font-semibold text-lg italic">Gud velsigne dig for din generøsitet</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
