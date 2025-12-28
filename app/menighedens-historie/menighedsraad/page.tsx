import React from 'react';
import { Layout } from '@/components/Layout';
import { Users, Shield, FileText, Calendar, Mail, Phone, MapPin } from 'lucide-react';

export default function Menighedsraad() {
  const councilMembers = [
    {
      name: 'Marianne Larsen',
      role: 'Formand',
      phone: '51 24 23 90'
    },
    {
      name: 'Niels Christian Hvidt',
      role: 'Næstformand',
      phone: null
    },
    {
      name: 'Jaime Morales Henriquez',
      role: 'Menigt medlem',
      note: 'Officiel menighedsrepræsentant til Pastoralrådet'
    },
    {
      name: 'Fr. Bernhard Kofod CSsR',
      role: 'Sognepræst',
      phone: null
    },
    {
      name: 'Fr. Sigurd Sverre Stangeland',
      role: 'Kapellan',
      note: 'Pastoralrådsmedlem for stiftet'
    }
  ];

  return (
    <Layout>
      <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#c5a059] to-[#1e3a8a]" />

      <section className="relative bg-white border-b-4 border-[#c5a059]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a8a]/5 rounded-lg mb-6 border-l-4 border-[#1e3a8a]">
                <Calendar size={20} className="text-[#1e3a8a]" />
                <span className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider">Pr. januar 2020</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                Menighedsrådet
              </h1>

              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Menighedsrådet forvalter det kirkelige arbejde og består af sognepræsterne og flere medlemmer valgt af menighedens medlemmer.
              </p>

              <div className="flex gap-4">
                <div className="flex-1 bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] p-6 rounded-xl text-white">
                  <div className="text-3xl font-bold mb-1">5</div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">Medlemmer</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-[#c5a059] to-[#d4b06a] p-6 rounded-xl text-white">
                  <div className="text-3xl font-bold mb-1">2</div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">Præster</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-[#c5a059]/5 rounded-2xl transform rotate-3" />
              <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
                <Users className="text-[#c5a059] mb-4" size={48} />
                <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-3">
                  Rådets opgaver
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Menighedsrådet forvalter det kirkelige arbejde og består af sognepræsterne og flere medlemmer valgt af menighedens medlemmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8f6f1] w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-1 bg-[#c5a059]" />
            <div>
              <h2 className="font-serif text-4xl font-bold text-[#1e3a8a]">
                Rådets medlemmer
              </h2>
              <p className="text-slate-600 mt-1">Pr. januar 2020</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-[#c5a059] transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1e3a8a]/5 to-transparent rounded-bl-full" />

                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-white" size={24} />
                  </div>

                  <h3 className="font-bold text-xl text-[#1e3a8a] mb-2">
                    {member.name}
                  </h3>

                  <div className="inline-block px-3 py-1 bg-[#c5a059]/10 rounded-full mb-3">
                    <span className="text-sm font-semibold text-[#c5a059]">
                      {member.role}
                    </span>
                  </div>

                  {member.phone && (
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <Phone size={14} className="text-[#c5a059]" />
                      <span>{member.phone}</span>
                    </div>
                  )}

                  {member.note && (
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                      {member.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 text-center">
              Om menighedsrådet
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Menighedsrådet forvalter det kirkelige arbejde og består af sognepræsterne og flere medlemmer valgt af menighedens medlemmer. Rådet har ansvaret for menighedens drift, økonomiske forhold og udvikling i samarbejde med præsterne.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-4">
              Kontakt kirkekontoret
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

      <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#c5a059] to-[#1e3a8a]" />
    </Layout>
  );
}
