'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, CalendarDays, ArrowRight, ChevronDown } from 'lucide-react';
import { WeeklyProgramItem } from '@/lib/types';
import { expandRecurringEvents } from '@/lib/eventUtils';

interface WeeklyProgramProps {
  weeklyProgram?: WeeklyProgramItem[];
}

const INITIAL_VISIBLE_COUNT = 5;

export function WeeklyProgram({ weeklyProgram = [] }: WeeklyProgramProps) {
  const schedule = expandRecurringEvents(weeklyProgram, 8);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMoreItems = schedule.length > INITIAL_VISIBLE_COUNT;
  const visibleSchedule = isExpanded ? schedule : schedule.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = schedule.length - INITIAL_VISIBLE_COUNT;

  return <section id="mass-times" className="py-24 bg-gradient-to-b from-[#fdfbf7] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy shadow-lg" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold">
              <CalendarDays className="h-4 w-4 mr-2" />
              Program
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Kommende Begivenheder
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Se hvad der sker i de næste 8 dage. Vi fejrer messen flere gange om ugen.
            Kom og vær med i fællesskabet omkring alteret. Kirken er åben for bøn i dagtimerne.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <div className="w-16 h-1 bg-gold/50 rounded-full" />
            <div className="w-2 h-2 bg-gold rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Schedule Card */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500
                          border border-slate-200/50 p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center mb-8 pb-6 border-b border-slate-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy/10 text-navy mr-4
                              group-hover:bg-navy group-hover:text-white transition-all duration-500">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">
                  Ugens Program
                </h3>
              </div>

              <div className="space-y-3">
                {schedule.length === 0 ? (
                  <p className="text-slate-500 text-center py-12">
                    Ingen aktiviteter planlagt i øjeblikket.
                  </p>
                ) : (
                  <>
                    <div className={`space-y-3 transition-all duration-500 ease-out ${isExpanded ? 'opacity-100' : ''}`}>
                      {visibleSchedule.map((item, index) => {
                        const date = new Date(item.datetime);
                        const dayName = date.toLocaleDateString('da-DK', { weekday: 'long' });
                        const dayDate = date.toLocaleDateString('da-DK', { day: 'numeric', month: 'short' });
                        const time = date.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });

                        return <div key={`program-${index}`}
                                    className="group/item p-4 rounded-xl
                                             hover:bg-[#fdfbf7] transition-all duration-300
                                             border border-transparent hover:border-gold/20
                                             hover:shadow-md cursor-pointer">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="min-w-[100px] sm:min-w-[120px]">
                                <span className="block font-semibold text-slate-900 capitalize text-sm sm:text-base">
                                  {dayName}
                                </span>
                                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                                  {dayDate}
                                </span>
                              </div>
                              <div className="flex items-center justify-center px-3 py-1.5 rounded-lg
                                            bg-gold/10 group-hover/item:bg-gold transition-colors duration-300">
                                <Clock className="h-4 w-4 mr-1.5 text-gold group-hover/item:text-white transition-colors" />
                                <span className="text-gold group-hover/item:text-white font-bold text-sm transition-colors">
                                  {time}
                                </span>
                              </div>
                            </div>
                            <div className="sm:text-right pl-0 sm:pl-4 flex-1 min-w-0">
                              <span className="block text-slate-900 font-semibold text-sm sm:text-base break-words">
                                {item.massType}
                              </span>
                              <div className="flex items-center sm:justify-end gap-2 mt-1.5 flex-wrap">
                                {item.language && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                                    {item.language}
                                  </span>
                                )}
                                {item.location && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium uppercase tracking-wide">
                                    {item.location}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      })}
                    </div>

                    {hasMoreItems && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full mt-4 py-3 px-4 rounded-xl
                                 bg-gradient-to-r from-navy/5 via-gold/10 to-navy/5
                                 hover:from-navy/10 hover:via-gold/20 hover:to-navy/10
                                 border border-gold/20 hover:border-gold/40
                                 text-navy font-semibold text-sm
                                 flex items-center justify-center gap-2
                                 transition-all duration-300 hover:shadow-md
                                 group/btn"
                      >
                        <span>
                          {isExpanded ? 'Vis mindre' : `Vis ${hiddenCount} flere begivenheder`}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-gold transition-transform duration-300
                                    group-hover/btn:text-navy
                                    ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Info / Confession */}
          <div className="space-y-6">
            <div className="group/confession bg-gradient-to-br from-navy to-[#2a4a9a] text-white rounded-2xl
                          shadow-xl hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center mb-6 pb-4 border-b border-white/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/20 text-gold mr-4
                                group-hover/confession:bg-gold group-hover/confession:text-white transition-all duration-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">
                    Skriftemål
                  </h3>
                </div>
                <p className="text-slate-100 mb-8 leading-relaxed text-base">
                  Der er mulighed for skriftemål en halv time før hver messe,
                  eller efter aftale med præsten. Vi opfordrer til at komme i
                  god tid.
                </p>
                <Link href="/kontakt#priests" className="inline-flex items-center px-5 py-2.5 rounded-lg
                                 bg-white/10 hover:bg-white/20 border border-white/20
                                 text-white font-semibold text-sm
                                 transition-all duration-300 hover:scale-105">
                  Kontakt præsten for aftale
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group/holidays bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500
                          border border-slate-200/50 p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold mr-3
                                group-hover/holidays:bg-gold group-hover/holidays:text-white transition-all duration-500">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    Særlige Højtider
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  For messetider i julen, påsken og pinsen, se venligst vores
                  ugeseddel for opdaterede tider.
                </p>
                <Link href="/ugeseddel" className="inline-flex items-center text-navy font-semibold
                                      hover:text-gold transition-colors group/link">
                  Se Ugeseddel
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}