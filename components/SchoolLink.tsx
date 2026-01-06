'use client';

import { ExternalLink, GraduationCap } from 'lucide-react';

export function SchoolLink() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#fdfbf7] to-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <a
          href="https://sctalbaniskole.dk/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative bg-gradient-to-br from-navy via-navy-dark to-navy rounded-2xl p-8 md:p-10
                          shadow-xl hover:shadow-2xl transition-all duration-500
                          border border-gold/20 hover:border-gold/40
                          overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl
                            transform translate-x-1/2 -translate-y-1/2
                            group-hover:bg-gold/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-light/30 rounded-full blur-2xl
                            transform -translate-x-1/2 translate-y-1/2" />

            <div className="absolute top-4 left-4 text-gold/10 text-4xl font-serif
                            group-hover:text-gold/20 transition-colors duration-500">✦</div>
            <div className="absolute bottom-4 right-4 text-gold/10 text-4xl font-serif
                            group-hover:text-gold/20 transition-colors duration-500">✦</div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-md
                                  group-hover:bg-gold/30 transition-all duration-500" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-[#d4b06d]
                                  rounded-full flex items-center justify-center
                                  shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-navy" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2
                                 group-hover:text-gold transition-colors duration-300">
                    Sct. Albani Skole
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light tracking-wide">
                    Besøg vores katolske skole i Odense
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 py-3
                              bg-white/10 backdrop-blur-sm rounded-full
                              border border-white/20 group-hover:border-gold/50
                              group-hover:bg-gold/20 transition-all duration-300">
                <span className="text-white font-medium text-sm md:text-base
                                 group-hover:text-gold transition-colors duration-300">
                  Besøg skolens hjemmeside
                </span>
                <ExternalLink className="w-4 h-4 text-gold
                                         group-hover:translate-x-1 group-hover:-translate-y-1
                                         transition-transform duration-300" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </a>
      </div>
    </section>
  );
}
