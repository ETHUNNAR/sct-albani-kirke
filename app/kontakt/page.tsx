import { Layout } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin, User, Users, Heart, Globe, Church, Calendar, GraduationCap, Mail } from 'lucide-react';
import { SectionHeader, InfoCard, DecorativeBlobs } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Kontakt - Sct. Albani Kirke',
  description: 'Kontakt Sct. Albani Kirke i Odense. Find kontaktoplysninger til præster, menighedsråd og kirkelige organisationer.',
};

export default function KontaktPage() {
  return (
    <Layout>
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-[#1e3a8a]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#1e3a8a]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Kontakt</h1>
          <div className="w-24 h-1 bg-[#c5a059] rounded-full" />
        </div>
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
            <span>/</span>
            <span className="text-white">Kontakt</span>
          </nav>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <DecorativeBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Kontor" title="Kirkens Kontor" />
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#c5a059]" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#1e3a8a]">Adelgade 1</h3>
                <p className="text-lg text-slate-700">5000 Odense C</p>
                <p className="text-sm text-[#c5a059] font-semibold italic">Kun efter aftale</p>
                <a href="mailto:sognepraest@sct-albani.dk" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors mt-4">
                  <Mail className="h-4 w-4" />
                  <span>sognepraest@sct-albani.dk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white via-[#f8f6f1] to-white relative overflow-hidden">
        <DecorativeBlobs variant="reversed" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Præster" tagVariant="blue" title="Præster og Sjælesørgere" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard icon={User} title="Bernhard Kofod" subtitle="Sognepræst" phone="28 96 55 17" />
            <InfoCard icon={User} title="Livio Alloa Casale" subtitle="Medhjælperpræst" phone="50 31 25 05" />
            <InfoCard icon={User} title="P. Jacek Aniszewski" subtitle="Polsktalende Præst" phone="71 45 64 34" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <DecorativeBlobs variant="centered" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Ledelse" title="Menighedsråd og Ledelse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard icon={Users} title="Marianne Larsen" subtitle="Menighedsrådsformand" phone="51 24 23 90" />
            <InfoCard icon={Users} title="Jaime Morales" subtitle="Pastoralråds Repræsentant" phone="31 44 31 10" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white via-[#f8f6f1] to-white relative overflow-hidden">
        <DecorativeBlobs variant="reversed" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Foreninger" tagVariant="blue" title="Foreninger og Grupper" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard icon={Heart} title="Maria Dinh" subtitle="DUK Formand" phone="51 60 22 24" email="mariadinhduk@gmail.com" />
            <InfoCard icon={Globe} title="Trang Hoang Kim My" subtitle="Vietnamesisk Menighed" phone="50 25 90 50" email="trangmimi@hotmail.com" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <DecorativeBlobs variant="centered" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader tag="Aktiviteter" title="Aktiviteter og Rundvisninger" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard icon={Church} title="Povl Løvborg" subtitle="Kirkerundvisninger" phone="29 33 92 82" />
            <InfoCard icon={Calendar} title="Ann-Lise Aasesdatter" subtitle="Aktivitetskoordinator" phone="23 29 18 33" />
            <InfoCard icon={GraduationCap} title="P. Livio Alloa Casale" subtitle="International Student Group" phone="50 31 25 05" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
