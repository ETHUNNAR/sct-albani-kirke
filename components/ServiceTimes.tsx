import React from 'react';
import { Clock, CalendarDays } from 'lucide-react';

interface ServiceTime {
  _id: string;
  day: string;
  time: string;
  type: string;
  language?: string;
  order: number;
}

interface ServiceTimesProps {
  serviceTimes?: ServiceTime[];
}

export function ServiceTimes({ serviceTimes = [] }: ServiceTimesProps) {
  // Fallback data if CMS data is not available
  const schedule = serviceTimes.length > 0 ? serviceTimes : [{
    _id: '1',
    day: 'Søndag',
    time: '10:00',
    type: 'Højmesse',
    language: 'Dansk',
    order: 1
  }, {
    _id: '2',
    day: 'Søndag',
    time: '13:00',
    type: 'Messe',
    language: 'Polsk',
    order: 2
  }, {
    _id: '3',
    day: 'Søndag',
    time: '16:00',
    type: 'Messe',
    language: 'Engelsk',
    order: 3
  }, {
    _id: '4',
    day: 'Mandag',
    time: '17:00',
    type: 'Aftenmesse',
    language: 'Dansk',
    order: 4
  }, {
    _id: '5',
    day: 'Onsdag',
    time: '17:00',
    type: 'Aftenmesse',
    language: 'Dansk',
    order: 5
  }, {
    _id: '6',
    day: 'Fredag',
    time: '17:00',
    type: 'Aftenmesse',
    language: 'Dansk',
    order: 6
  }, {
    _id: '7',
    day: 'Lørdag',
    time: '17:00',
    type: 'Vigilie',
    language: 'Dansk',
    order: 7
  }];
  return <section id="mass-times" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1e3a8a] via-[#c5a059] to-[#1e3a8a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Messetider
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Vi fejrer messen hver dag. Kom og vær med i fællesskabet omkring
            alteret. Kirken er åben for bøn i dagtimerne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Card */}
          <div className="bg-[#fdfbf7] rounded-xl shadow-lg border border-slate-100 p-8">
            <div className="flex items-center mb-6 text-[#1e3a8a]">
              <CalendarDays className="h-6 w-6 mr-3" />
              <h3 className="font-serif text-2xl font-semibold">
                Ugens Program
              </h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item) => <div key={item._id} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0 hover:bg-white transition-colors px-2 rounded-md">
                  <div className="flex items-center">
                    <span className="w-24 font-medium text-slate-900">
                      {item.day}
                    </span>
                    <span className="text-[#c5a059] font-bold w-20">
                      {item.time}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-800 font-medium">
                      {item.type}
                    </span>
                    {item.language && <span className="text-xs text-slate-500 uppercase tracking-wide">
                      {item.language}
                    </span>}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Info / Confession */}
          <div className="space-y-8">
            <div className="bg-[#1e3a8a] text-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center mb-4 text-[#c5a059]">
                  <Clock className="h-6 w-6 mr-3" />
                  <h3 className="font-serif text-2xl font-semibold">
                    Skriftemål
                  </h3>
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  Der er mulighed for skriftemål en halv time før hver messe,
                  eller efter aftale med præsten. Vi opfordrer til at komme i
                  god tid.
                </p>
                <button className="text-sm font-medium text-[#c5a059] hover:text-white transition-colors flex items-center">
                  Kontakt præsten for aftale &rarr;
                </button>
              </div>
              {/* Pattern overlay */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h3 className="font-serif text-xl font-semibold text-[#1e3a8a] mb-4">
                Særlige Højtider
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                For messetider i julen, påsken og pinsen, se venligst vores
                ugeseddel eller kalender for opdaterede tider.
              </p>
              <a href="#" className="text-[#1e3a8a] font-medium text-sm hover:underline">
                Se kalenderen &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}