import { ServerLayout } from '@/components/ServerLayout';
import Link from 'next/link';
import type { Metadata } from 'next';
import { HandHeart, Landmark, Smartphone, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Støt Kirken - Sct. Albani Kirke',
  description: 'Støt Sct. Albani Kirke med en gave. Se hvordan du kan bidrage via kollekt, bankoverførsel eller MobilePay.',
};

export default function StotKirkenPage() {
  return (
    <ServerLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-[#1e3a8a]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#1e3a8a]/90 to-[#1e3a8a]" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#c5a059]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            Støt Kirken
          </h1>
          <p className="text-xl md:text-2xl text-[#c5a059] font-semibold mb-6 tracking-wide">
            GAVER TIL MENIGHEDEN
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span>/</span>
            <span className="text-white">Støt Kirken</span>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f1] relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
              Din støtte gør en forskel
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Hjælp os med at tjene menigheden
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Din støtte hjælper os med at vedligeholde kirken, arrangere gudstjenester og aktiviteter,
            og tjene vores mangfoldige menighed. Alle bidrag modtages med taknemmelighed.
          </p>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-semibold">
                Giv en gave
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Sådan støtter du
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection Card */}
            <div className="bg-gradient-to-br from-white to-[#f8f6f1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#c5a059]/20 hover:border-[#c5a059]/40 group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <HandHeart className="h-10 w-10 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 text-center">
                Kollekt ved messen
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Giv dit bidrag ved kirkens kollekt under gudstjenesten
              </p>
            </div>

            {/* Bank Transfer Card */}
            <div className="bg-gradient-to-br from-white to-[#f8f6f1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#c5a059]/20 hover:border-[#c5a059]/40 group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Landmark className="h-10 w-10 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-6 text-center">
                Bankoverførsel
              </h3>
              <div className="bg-white rounded-xl p-6 border-2 border-[#1e3a8a]/10 shadow-sm">
                <div className="space-y-3 font-mono">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-sm text-slate-600">Reg.nr.:</span>
                    <span className="text-lg font-bold text-[#1e3a8a]">4183</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Kontonr.:</span>
                    <span className="text-lg font-bold text-[#1e3a8a]">0005001471</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MobilePay Card */}
            <div className="bg-gradient-to-br from-white to-[#f8f6f1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#c5a059]/20 hover:border-[#c5a059]/40 group md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-10 w-10 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-6 text-center">
                MobilePay
              </h3>
              <div className="bg-white rounded-xl p-6 border-2 border-[#c5a059]/20 shadow-sm">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Nummer:</p>
                  <p className="font-mono text-4xl md:text-5xl font-bold text-[#c5a059] tracking-wider">
                    53 77 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VKort Download Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f1] relative overflow-hidden">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
                Download
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Download Information
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8 text-[#c5a059]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">
              VKort - Kontaktoplysninger
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Download vores VKort for at gemme kirkens kontaktoplysninger direkte i din telefon eller computer.
            </p>
            <a
              href="/Sognekontoret.vcf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download VKort
            </a>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-24 bg-[#1e3a8a] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#c5a059]/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Tak for din støtte
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
            Hver gave, stor eller lille, gør det muligt for os at fortsætte vores mission
            med at tjene menigheden og dele evangeliet.
          </p>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Dit bidrag hjælper med at vedligeholde vores smukke kirke, støtte vores præster
            og medarbejdere, arrangere messer og kirkelige begivenheder, og skabe et
            velkommende fællesskab for alle.
          </p>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-[#c5a059] font-semibold text-lg italic">
              Gud velsigne dig for din generøsitet
            </p>
          </div>
        </div>
      </section>
    </ServerLayout>
  );
}
