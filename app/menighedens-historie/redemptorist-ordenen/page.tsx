import React from 'react';
import { ServerLayout } from '@/components/ServerLayout';
import { Cross, Book, Heart, Globe, MapPin, Mail, Phone } from 'lucide-react';

export default function RedemptoristOrden() {
  return (
    <ServerLayout>
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2d4a9a] to-[#1e3a8a] text-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-[#c5a059]" />
            <Cross className="mx-4 text-[#c5a059]" size={24} />
            <div className="h-px w-16 bg-[#c5a059]" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight">
            Redemptorist-ordenen
          </h1>

          <p className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Congregatio Sanctissimi Redemptoris (C.Ss.R.)
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f8f6f1]" style={{
          clipPath: 'ellipse(75% 100% at 50% 100%)'
        }} />
      </section>

      <div className="bg-[#f8f6f1] w-full">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5a059]/10 to-transparent rounded-bl-full" />

          <div className="relative">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-[#1e3a8a]/5 rounded-full border border-[#1e3a8a]/10">
                <Book className="text-[#1e3a8a]" size={20} />
                <span className="text-sm font-semibold text-[#1e3a8a] uppercase tracking-wider">Om Ordenen</span>
              </div>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Selskabet af den Allerhelligste Frelser
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                Redemptorist-ordenen blev grundlagt i 1732 af den napolitanske adelsmand <strong className="text-[#1e3a8a] font-semibold">Alfonso M. de Liguori</strong> (1696-1787), en kommende biskop og helgen. Ordenens primære formål er <em>"at forkynde evangeliet for de mest forladte mennesker, især de fattige."</em>
              </p>

              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                <strong className="text-[#1e3a8a] font-semibold">Klemens M. Hofbauer</strong> (1751-1820), ordenens anden store helgen, udvidede kongregationen ud over Italien gennem sit arbejde i Warszawa og Wien.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                I dag arbejder cirka <strong className="text-[#1e3a8a] font-semibold">5.000 redemptorister</strong> præster og lægbrødre, i over 100 lande verden over. Ordenens generalhoved­kvarter ligger i Rom.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Mission</h3>
            <p className="text-slate-600 leading-relaxed italic">
              "At forkynde evangeliet for de mest forladte mennesker, især de fattige"
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#c5a059] to-[#d4b06a] rounded-full flex items-center justify-center mb-6">
              <Cross className="text-white" size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Motto</h3>
            <p className="text-slate-600 leading-relaxed italic">
              "Hos Herren er der rigelig forløsning" (Salme 130)
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-full flex items-center justify-center mb-6">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Verdensomspændende</h3>
            <p className="text-slate-600 leading-relaxed">
              Ca. 5.000 medlemmer i over 100 lande med generalhoved­kvarter i Rom
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="sticky top-8">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold text-[#c5a059] uppercase tracking-widest">Historie</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-4 leading-tight">
                Fra Italien til Danmark
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c5a059] to-transparent" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <div className="relative pl-8 border-l-2 border-[#c5a059]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#c5a059] rounded-full border-4 border-[#f8f6f1]" />
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-[#1e3a8a] text-white text-sm font-bold rounded-full">1732</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-3">Ordenens grundlæggelse</h3>
              <p className="text-slate-700 leading-relaxed">
                Alfonso M. de Liguori grundlagde Redemptorist-ordenen med det formål at forkynde evangeliet for de mest forladte og fattige mennesker.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-[#c5a059]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#c5a059] rounded-full border-4 border-[#f8f6f1]" />
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-[#1e3a8a] text-white text-sm font-bold rounded-full">1800-tallet</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-3">Ekspansion til Nordeuropa</h3>
              <p className="text-slate-700 leading-relaxed">
                Klemens M. Hofbauer udvidede kongregationen ud over Italien gennem sit pionerarbejde i Warszawa og Wien, hvilket banede vejen for ordenens spredning til hele Europa.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-[#c5a059]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#c5a059] rounded-full border-4 border-[#f8f6f1]" />
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-[#1e3a8a] text-white text-sm font-bold rounded-full">1899</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-3">Ankomst til Danmark</h3>
              <p className="text-slate-700 leading-relaxed">
                Redemptorister fra Østrig kom til Sankt Albani Menighed i 1899 og har været forbundet med menigheden siden da. I dag hører menighederne i Næstved og Odense under Wien-München provinsen, mens Sankt Annæ i København hører under Warszawa provinsen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold text-[#c5a059] uppercase tracking-widest">I Danmark i dag</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Danske og polske medlemmer
              </h2>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-white/90 leading-relaxed text-lg text-center mb-8">
                I Københavns Stift arbejder danske og polske medlemmer i dag sammen om at fortsætte redemptoristernes mission i det danske katolske kirkesamfund.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2 text-[#c5a059]">Wien-München provinsen</h4>
                  <p className="text-white/90 text-sm">Næstved og Odense menigheder</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2 text-[#c5a059]">Warszawa provinsen</h4>
                  <p className="text-white/90 text-sm">Sankt Annæ i København</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-4">
              Kontakt
            </h3>
            <p className="text-slate-600">Sct. Albani Kirke, Odense</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-[#f8f6f1] rounded-lg">
              <MapPin className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="font-semibold text-[#1e3a8a] text-sm mb-1">Adresse</div>
                <div className="text-slate-700 text-sm">Adelgade 1<br />5000 Odense C</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#f8f6f1] rounded-lg">
              <Mail className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="font-semibold text-[#1e3a8a] text-sm mb-1">Email</div>
                <a href="mailto:sognepraest@sct-albani.dk" className="text-slate-700 text-sm hover:text-[#1e3a8a] transition-colors whitespace-nowrap">sognepraest@sct-albani.dk</a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#f8f6f1] rounded-lg">
              <Phone className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="font-semibold text-[#1e3a8a] text-sm mb-1">Telefon</div>
                <div className="text-slate-700 text-sm">2896 5517</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
    </ServerLayout>
  );
}
