import React from 'react';
import { Layout } from '@/components/Layout';
import { Users, Shield, Calendar, Phone } from 'lucide-react';
import { GradientDivider, ContactInfoGrid, StatCard } from '@/components/sections';

export default function Menighedsraad() {
  const councilMembers = [
    { name: 'Marianne Larsen', role: 'Formand', phone: '51 24 23 90' },
    { name: 'Niels Christian Hvidt', role: 'Næstformand', phone: null },
    { name: 'Jaime Morales Henriquez', role: 'Menigt medlem', note: 'Officiel menighedsrepræsentant til Pastoralrådet' },
    { name: 'Fr. Bernhard Kofod CSsR', role: 'Sognepræst', phone: null },
    { name: 'Fr. Sigurd Sverre Stangeland', role: 'Kapellan', note: 'Pastoralrådsmedlem for stiftet' },
  ];

  return (
    <Layout>
      <GradientDivider />

      <section className="relative bg-white border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg mb-6 border-l-4 border-navy">
                <Calendar size={20} className="text-navy" />
                <span className="text-sm font-bold text-navy uppercase tracking-wider">Pr. januar 2020</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">Menighedsrådet</h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Menighedsrådet forvalter det kirkelige arbejde og består af sognepræsterne og flere medlemmer valgt af menighedens medlemmer.
              </p>
              <div className="flex gap-4">
                <StatCard value={5} label="Medlemmer" variant="blue" className="flex-1" />
                <StatCard value={2} label="Præster" variant="gold" className="flex-1" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-gold/5 rounded-2xl transform rotate-3" />
              <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
                <Users className="text-gold mb-4" size={48} />
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">Rådets opgaver</h3>
                <p className="text-slate-600 leading-relaxed">
                  Menighedsrådet forvalter det kirkelige arbejde og består af sognepræsterne og flere medlemmer valgt af menighedens medlemmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream w-full">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-1 bg-gold" />
              <div>
                <h2 className="font-serif text-4xl font-bold text-navy">Rådets medlemmer</h2>
                <p className="text-slate-600 mt-1">Pr. januar 2020</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {councilMembers.map((member, index) => (
                <div key={index} className="group bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-gold transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-navy/5 to-transparent rounded-bl-full" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-[#2d4a9a] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-navy mb-2">{member.name}</h3>
                    <div className="inline-block px-3 py-1 bg-gold/10 rounded-full mb-3">
                      <span className="text-sm font-semibold text-gold">{member.role}</span>
                    </div>
                    {member.phone && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <Phone size={14} className="text-gold" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                    {member.note && <p className="text-slate-600 text-sm leading-relaxed mt-2">{member.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6 text-center">Om menighedsrådet</h3>
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                Menighedsrådet forvalter det kirkelige arbejde og består af sognepræsterne og flere medlemmer valgt af menighedens medlemmer. Rådet har ansvaret for menighedens drift, økonomiske forhold og udvikling i samarbejde med præsterne.
              </p>
            </div>
          </div>

          <ContactInfoGrid
            title="Kontakt kirkekontoret"
            subtitle="Sct. Albani Kirke, Odense"
            address={{ line1: 'Adelgade 1', line2: '5000 Odense C' }}
            email="sognepraest@sct-albani.dk"
            phone="2896 5517"
          />
        </div>
      </div>

      <GradientDivider />
    </Layout>
  );
}
