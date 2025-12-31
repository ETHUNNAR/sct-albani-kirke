import React from 'react';
import { ServerLayout } from '@/components/ServerLayout';
import { Coins, Heart, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import { GradientDivider, FeatureCard, ContactInfoGrid } from '@/components/sections';

export default function Kirkeskat() {
  const keyPoints = [
    { icon: AlertCircle, title: 'Katolikker er fritaget', description: 'Medlemmer af folkekirken skal betale kirkeskat til deres menighed, men katolikker i Danmark er fritaget for at betale kirkeskat til folkekirken gennem skattesystemet.', highlight: true },
    { icon: Info, title: 'Ingen statsstøtte', description: 'Den katolske kirke modtager ingen offentlig støtte. Kirken er helt afhængig af sine medlemmers frivillige bidrag.', highlight: true },
    { icon: Heart, title: 'Forpligtelse at støtte', description: 'Da det er en forpligtelse for katolske troende at understøtte sin kirke økonomisk, opfordres alle medlemmer til at tilmelde sig frivillig kirkeskat til den katolske kirke.', highlight: false },
  ];

  return (
    <ServerLayout>
      <GradientDivider />

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c5a059]/10 rounded-lg mb-6 border-l-4 border-[#c5a059]">
                <Coins className="text-[#c5a059]" size={20} />
                <span className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider">Frivillig støtte</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">Kirkeskat</h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                For den katolske kirke i Danmark er kirkeskat en frivillig ordning, da kirken ikke modtager offentlig støtte.
              </p>
              <div className="flex items-start gap-3 p-4 bg-[#f8f6f1] rounded-xl border-l-4 border-[#1e3a8a]">
                <Info className="text-[#1e3a8a] flex-shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700 text-sm leading-relaxed">
                  Medlemmer af folkekirken skal betale kirkeskat til deres menighed, men katolikker i Danmark er fritaget for denne betaling gennem skattesystemet.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/10 to-[#1e3a8a]/10 rounded-3xl transform rotate-6" />
              <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-3xl p-10 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <div className="relative">
                  <Heart className="text-[#c5a059] mb-6" size={48} />
                  <h3 className="font-serif text-3xl font-bold mb-4">Anbefalet bidrag</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Som vejledning anbefales et bidrag på 1% af din indtægt i kirkeskat til den katolske kirke.
                  </p>
                  <div className="inline-block px-6 py-3 bg-[#c5a059] rounded-lg">
                    <span className="font-bold text-white text-2xl">1%</span>
                    <span className="text-white/90 text-sm ml-2">af indtægt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8f6f1] w-full">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">Vigtig information</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Forstå den katolske kirkes særlige situation i Danmark</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {keyPoints.map((point, index) => (
              <FeatureCard key={index} icon={point.icon} title={point.title} description={point.description} highlight={point.highlight} />
            ))}
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#c5a059]/10 to-transparent rounded-tl-full" />
            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-[#f8f6f1] rounded-full mb-6">
                  <AlertCircle className="text-[#c5a059]" size={40} />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Økonomiske udfordringer</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed text-center mb-8">
                Den katolske kirke i Danmark står over for økonomiske udfordringer og har været nødsaget til at sælge ejendomme for at opretholde den daglige drift. Din frivillige støtte gør en afgørende forskel for kirkens fortsatte virke.
              </p>
              <div className="bg-[#f8f6f1] rounded-xl p-6 border-2 border-[#1e3a8a]/10">
                <p className="text-center text-slate-700 leading-relaxed italic">
                  "Da det er en forpligtelse for katolske troende at understøtte sin kirke økonomisk, opfordres alle medlemmer til at tilmelde sig frivillig kirkeskat til den katolske kirke."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              </div>
              <div className="relative">
                <Coins className="text-[#c5a059] mb-6" size={40} />
                <h3 className="font-serif text-3xl font-bold mb-4">Sådan tilmelder du dig</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Du kan få yderligere information og tilmelde dig frivillig kirkeskat ved at kontakte sognekontoret eller udfylde formular på den katolske kirkes hjemmeside.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
                    <span className="text-white/90">Kontakt sognekontoret</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
                    <a href="https://www.katolsk.dk/kirkeskat" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline hover:no-underline transition-all">
                      Udfyld formular på katolsk.dk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c5a059]/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <Heart className="text-[#c5a059] mb-6" size={40} />
                <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-4">Skattefradrag</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Kirkeskat til den katolske kirke er fradragsberettiget i din selvangivelse, hvilket reducerer din skattepligtige indkomst.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Dette gør det økonomisk mere fordelagtigt at støtte kirken gennem den frivillige kirkeskatteordning.
                </p>
              </div>
            </div>
          </div>

          <ContactInfoGrid
            title="Kontakt kirkekontoret"
            subtitle="For mere information om kirkeskat og tilmelding"
            address={{ line1: 'Adelgade 1', line2: '5000 Odense C' }}
            email="sognepraest@sct-albani.dk"
            phone="2896 5517"
          />
        </div>
      </div>

      <GradientDivider />
    </ServerLayout>
  );
}
