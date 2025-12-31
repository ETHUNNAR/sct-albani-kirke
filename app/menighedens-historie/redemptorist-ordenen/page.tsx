import React from 'react';
import { ServerLayout } from '@/components/ServerLayout';
import { Cross, Book, Heart, Globe } from 'lucide-react';
import { ContactInfoGrid } from '@/components/sections';

export default function RedemptoristOrden() {
  return (
    <ServerLayout>
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2d4a9a] to-[#1e3a8a] text-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)` }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-[#c5a059]" />
            <Cross className="mx-4 text-[#c5a059]" size={24} />
            <div className="h-px w-16 bg-[#c5a059]" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight">Redemptorist-ordenen</h1>
          <p className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Congregatio Sanctissimi Redemptoris (C.Ss.R.)
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f8f6f1]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">Selskabet af den Allerhelligste Frelser</h2>
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
              <p className="text-slate-600 leading-relaxed italic">"At forkynde evangeliet for de mest forladte mennesker, især de fattige"</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c5a059] to-[#d4b06a] rounded-full flex items-center justify-center mb-6">
                <Cross className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Motto</h3>
              <p className="text-slate-600 leading-relaxed italic">"Hos Herren er der rigelig forløsning" (Salme 130)</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-full flex items-center justify-center mb-6">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Verdensomspændende</h3>
              <p className="text-slate-600 leading-relaxed">Ca. 5.000 medlemmer i over 100 lande med generalhoved­kvarter i Rom</p>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="sticky top-8">
                <span className="text-sm font-bold text-[#c5a059] uppercase tracking-widest">Historie</span>
                <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-4 leading-tight">Fra Italien til Danmark</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#c5a059] to-transparent" />
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              {[
                { year: '1732', title: 'Ordenens grundlæggelse', description: 'Alfonso M. de Liguori grundlagde Redemptorist-ordenen med det formål at forkynde evangeliet for de mest forladte og fattige mennesker.' },
                { year: '1800-tallet', title: 'Ekspansion til Nordeuropa', description: 'Klemens M. Hofbauer udvidede kongregationen ud over Italien gennem sit pionerarbejde i Warszawa og Wien, hvilket banede vejen for ordenens spredning til hele Europa.' },
                { year: '1899', title: 'Ankomst til Danmark', description: 'Redemptorister fra Østrig kom til Sankt Albani Menighed i 1899 og har været forbundet med menigheden siden da. I dag hører menighederne i Næstved og Odense under Wien-München provinsen, mens Sankt Annæ i København hører under Warszawa provinsen.' },
              ].map((event, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#c5a059]/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#c5a059] rounded-full border-4 border-[#f8f6f1]" />
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-[#1e3a8a] text-white text-sm font-bold rounded-full">{event.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-3">{event.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mb-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
            </div>
            <div className="relative">
              <div className="text-center mb-8">
                <span className="text-sm font-bold text-[#c5a059] uppercase tracking-widest">I Danmark i dag</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 mt-4">Danske og polske medlemmer</h2>
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

          <ContactInfoGrid
            title="Kontakt"
            subtitle="Sct. Albani Kirke, Odense"
            address={{ line1: 'Adelgade 1', line2: '5000 Odense C' }}
            email="sognepraest@sct-albani.dk"
            phone="2896 5517"
          />
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
    </ServerLayout>
  );
}
