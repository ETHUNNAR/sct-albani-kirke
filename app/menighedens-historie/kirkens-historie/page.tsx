import React from 'react';
import { Layout } from '@/components/Layout';
import { Church, BookOpen, Landmark, Sparkles, Clock, MapPin, Bell, Users } from 'lucide-react';
import { GradientDivider, StatCard } from '@/components/sections';

export default function KirkensHistorie() {
  const timeline = [
    { year: '1867', title: 'Missionsstationen grundlægges', description: 'Danmarks tredje katolske missionsstation etableres i Odense med 19 menighedsmedlemmer (12 voksne og 7 børn).', icon: Users, highlight: true },
    { year: '1869', title: 'Køb af ejendom', description: 'Ejendom købes til kirkebygning - tidligere ejet af den sidste katolske biskop i Odense.', icon: Landmark },
    { year: '1870', title: 'Sct. Mariæ Kirke indvies', description: '"Sct. Mariæ Kirke" indvies i bindingsværksbygninger med plads til cirka 200 tilhørere.', icon: Church },
    { year: '1899', title: 'Redemptoristerne ankommer', description: 'Redemptorister fra Østrig ankommer og iværksætter indsamlinger i Østrig og andre nationer til en ny kirkebygning.', icon: Sparkles },
    { year: '1906', title: 'Dalum Kloster og grundstensnedlæggelse', description: 'Sankt Hedvigs Søstre etablerer Dalum Kloster. Grundstensnedlæggelse for den nye "Sct. Albani Kirke".', icon: Landmark, highlight: true },
    { year: '1908', title: 'Den nye kirke indvies', description: 'Ny kirke indvies af biskop von Euch den 25. oktober, dedikeret til Vor Frue, Sankt Alban og Sankt Knud. Kirken er bygget i tidlig gotisk stil med romansk portal. Det 54 meter høje tårn indeholder fire klokker fra Tyskland.', icon: Church, highlight: true },
    { year: '1920', title: 'Orgel installeres', description: 'Orgel bygget af det tjekkiske firma Rieger installeres med 19 stemmer. Kirken rummer også træudskæringer fra Sydtyrol og glasmalerier fra Tyskland.', icon: Bell },
    { year: 'Efter 1980', title: 'Betydelig vækst', description: 'Menigheden ekspanderede markant, især efter 1980 med vietnamesisk immigration.', icon: Sparkles },
    { year: '2000', title: 'Over 2.200 medlemmer', description: 'Menigheden havde cirka 2.200 medlemmer omkring årtusindeskiftet.', icon: Users, highlight: true },
  ];

  const interiorElements = [
    { title: 'Altertavle', description: 'Maleri der forestiller Marias kroning' },
    { title: 'Jesu Hellige Hjerte', description: 'Statue af Jesu Hellige Hjerte' },
    { title: 'Døbefont', description: 'Døbefont med latinsk indskrift' },
    { title: 'Prædikestol', description: 'Dekoreret med fremstillinger af de fire kirkefædre' },
  ];

  return (
    <Layout>
      <GradientDivider className="h-1.5 from-[#c5a059] via-[#1e3a8a] to-[#c5a059]" />

      <section className="relative bg-gradient-to-b from-[#1e3a8a] via-[#1e3a8a] to-[#2d4a9a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(30deg, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.1) 52%, transparent 52%, transparent 100%), linear-gradient(150deg, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.1) 52%, transparent 52%, transparent 100%)`, backgroundSize: '40px 70px' }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Clock className="text-[#c5a059]" size={20} />
            <span className="text-sm font-bold text-white uppercase tracking-widest">Historisk rejse</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 leading-tight">Kirkens Historie</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Fra 1867 til i dag, historien om Sct. Albani Kirke i Odense
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <StatCard value="150+" label="År med tradition" variant="gold" className="bg-transparent border border-white/20" />
            <div className="w-px bg-white/20" />
            <StatCard value="2,200+" label="Medlemmer i 2000" variant="gold" className="bg-transparent border border-white/20" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8f6f1"/>
          </svg>
        </div>
      </section>

      <div className="bg-[#f8f6f1] w-full">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-[#c5a059] mb-6">
              <MapPin className="text-[#c5a059]" size={18} />
              <span className="text-sm font-bold text-[#1e3a8a]">Odense, Danmark</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">En kirke med rødder og vinger</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Sct. Albani Kirke har gennem over 150 år været et åndeligt hjem for katolikker i Odense og på Fyn. Kirkens historie er en historie om tro, fællesskab og vedholdenhed.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c5a059] via-[#1e3a8a] to-[#c5a059]" />
            <div className="space-y-16">
              {timeline.map((event, index) => {
                const isLeft = index % 2 === 0;
                const Icon = event.icon;
                return (
                  <div key={index} className="relative">
                    <div className={`${isLeft ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)]'}`}>
                      <div className={`bg-white rounded-2xl border-2 ${event.highlight ? 'border-[#c5a059] shadow-xl' : 'border-slate-200 shadow-lg'} p-8 relative ml-16 md:ml-0 hover:shadow-2xl transition-shadow duration-300`}>
                        <div className={`absolute left-0 md:left-auto ${isLeft ? 'md:right-0' : 'md:left-0'} top-8 w-16 h-16 ${event.highlight ? 'bg-gradient-to-br from-[#c5a059] to-[#d4b06a]' : 'bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a]'} rounded-xl flex items-center justify-center shadow-lg -ml-8 md:ml-0 ${isLeft ? 'md:-mr-8' : 'md:-ml-8'}`}>
                          <Icon className="text-white" size={28} />
                        </div>
                        <div className={isLeft ? '' : 'md:text-right'}>
                          <div className="inline-block px-4 py-1.5 bg-[#1e3a8a] rounded-full mb-4">
                            <span className="text-white font-bold text-lg">{event.year}</span>
                          </div>
                          <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-4">{event.title}</h3>
                          <p className="text-slate-700 leading-relaxed text-lg">{event.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 top-8 w-3 h-3 bg-[#c5a059] rounded-full border-4 border-[#f8f6f1] -ml-[5px] md:-ml-[5px] z-10" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-8 relative z-10 bg-[#f8f6f1]">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-[#c5a059] transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1e3a8a]/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Church className="text-white" size={28} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-4">Arkitektur</h3>
                <p className="text-slate-700 leading-relaxed mb-4">Kirken er bygget i tidlig gotisk stil med romansk portal. Det 54 meter høje tårn indeholder fire klokker fra Tyskland.</p>
                <p className="text-slate-700 leading-relaxed">Træudskæringer kommer fra Sydtyrol, og de smukke glasmalerier er fremstillet i Tyskland.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-[#c5a059] rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">Interiør elementer</h3>
                <div className="space-y-3">
                  {interiorElements.map((element, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-[#c5a059]">{element.title}</div>
                        <div className="text-white/90 text-sm">{element.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#c5a059]/10 to-transparent rounded-tl-full" />
            <div className="relative">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-block p-4 bg-[#f8f6f1] rounded-full mb-6">
                  <Sparkles className="text-[#c5a059]" size={32} />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">En levende tradition</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Historien om Sct. Albani Kirke er ikke blot fortid, den skrives hver dag gennem vores fælles gudstjenester, aktiviteter og det levende fællesskab, som udspringer af troen.
                </p>
                <div className="inline-block px-6 py-2 bg-[#1e3a8a] text-white rounded-full">
                  <span className="font-semibold">Velkommen til at være en del af historien</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GradientDivider className="h-1.5 from-[#c5a059] via-[#1e3a8a] to-[#c5a059]" />
    </Layout>
  );
}
