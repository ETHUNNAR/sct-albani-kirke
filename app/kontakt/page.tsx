import { ServerLayout } from '@/components/ServerLayout';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin,
  User,
  Users,
  Heart,
  Globe,
  Church,
  Calendar,
  GraduationCap,
  Phone,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt - Sct. Albani Kirke',
  description: 'Kontakt Sct. Albani Kirke i Odense. Find kontaktoplysninger til præster, menighedsråd og kirkelige organisationer.',
};

export default function KontaktPage() {
  return (
    <ServerLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-[#1e3a8a]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#1e3a8a]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Kontakt
          </h1>
          <div className="w-24 h-1 bg-[#c5a059] rounded-full" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span>/</span>
            <span className="text-white">Kontakt</span>
          </nav>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
                Kontor
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Kirkens Kontor
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#c5a059]" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#1e3a8a]">
                  Adelgade 1
                </h3>
                <p className="text-lg text-slate-700">
                  5000 Odense C
                </p>
                <p className="text-sm text-[#c5a059] font-semibold italic">
                  Kun efter aftale
                </p>
                <a
                  href="mailto:sognepraest@sct-albani.dk"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors mt-4"
                >
                  <Mail className="h-4 w-4" />
                  <span>sognepraest@sct-albani.dk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clergy Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f8f6f1] to-white relative overflow-hidden">
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-semibold">
                Præster
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Præster og Sjælesørgere
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
            {/* Clergy Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <User className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Bernhard Kofod
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Sognepræst
              </p>
              <a
                href="tel:28965517"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>28 96 55 17</span>
              </a>
            </div>

            {/* Clergy Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <User className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Livio Alloa Casale
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Medhjælperpræst
              </p>
              <a
                href="tel:50312505"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>50 31 25 05</span>
              </a>
            </div>

            {/* Clergy Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <User className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                P. Jacek Aniszewski
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Polsktalende Præst
              </p>
              <a
                href="tel:71456434"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>71 45 64 34</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
                Ledelse
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Menighedsråd og Ledelse
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Leadership Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Marianne Larsen
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Menighedsrådsformand
              </p>
              <a
                href="tel:51242390"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>51 24 23 90</span>
              </a>
            </div>

            {/* Leadership Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Jaime Morales
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Pastoralråds Repræsentant
              </p>
              <a
                href="tel:31443110"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>31 44 31 10</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f8f6f1] to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-semibold">
                Foreninger
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Foreninger og Grupper
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Organization Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Maria Dinh
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                DUK Formand
              </p>
              <div className="space-y-2">
                <a
                  href="tel:51602224"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>51 60 22 24</span>
                </a>
                <a
                  href="mailto:mariadinhduk@gmail.com"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">mariadinhduk@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Organization Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Trang Hoang Kim My
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Vietnamesisk Menighed
              </p>
              <div className="space-y-2">
                <a
                  href="tel:50259050"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>50 25 90 50</span>
                </a>
                <a
                  href="mailto:trangmimi@hotmail.com"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">trangmimi@hotmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold">
                Aktiviteter
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Aktiviteter og Rundvisninger
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
            {/* Activity Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Church className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Povl Løvborg
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Kirkerundvisninger
              </p>
              <a
                href="tel:29339282"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>29 33 92 82</span>
              </a>
            </div>

            {/* Activity Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                Ann-Lise Aasesdatter
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                Aktivitetskoordinator
              </p>
              <a
                href="tel:23291833"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>23 29 18 33</span>
              </a>
            </div>

            {/* Activity Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-7 w-7 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                P. Livio Alloa Casale
              </h3>
              <p className="text-[#c5a059] font-semibold mb-4">
                International Student Group
              </p>
              <a
                href="tel:50312505"
                className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>50 31 25 05</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ServerLayout>
  );
}
