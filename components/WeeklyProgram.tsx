import React from 'react';
import { Clock, CalendarDays } from 'lucide-react';

interface WeeklyProgramItem {
  datetime: string;
  recurring?: boolean;
  massType: string;
  language?: string;
  description?: string;
  location?: string;
}

interface WeeklyProgramProps {
  weeklyProgram?: WeeklyProgramItem[];
}

export function WeeklyProgram({ weeklyProgram = [] }: WeeklyProgramProps) {
  // Expand recurring events to create instances for the next 8 days
  const now = new Date();
  // Set to end of day 8 days from now (23:59:59) to include all events on that day
  const eightDaysFromNow = new Date(now);
  eightDaysFromNow.setDate(eightDaysFromNow.getDate() + 8);
  eightDaysFromNow.setHours(23, 59, 59, 999);

  const expandedEvents: WeeklyProgramItem[] = [];

  weeklyProgram.forEach(item => {
    const originalDate = new Date(item.datetime);

    if (item.recurring) {
      // For recurring events, create instances for each week in the next 8 days
      const dayOfWeek = originalDate.getDay();
      const timeOfDay = originalDate.getHours() * 60 + originalDate.getMinutes();

      // Check every day in the next 15 days to catch up to 2 occurrences
      for (let i = 0; i <= 15; i++) {
        const checkDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);

        if (checkDate.getDay() === dayOfWeek) {
          // Set the time to match the original event
          const eventDateTime = new Date(checkDate);
          eventDateTime.setHours(Math.floor(timeOfDay / 60), timeOfDay % 60, 0, 0);

          // Only add if it's in the future and within 8 days
          if (eventDateTime >= now && eventDateTime <= eightDaysFromNow) {
            expandedEvents.push({
              ...item,
              datetime: eventDateTime.toISOString(),
            });
          }
        }
      }
    } else {
      // For one-time events, just add them if they're within the range
      if (originalDate >= now && originalDate <= eightDaysFromNow) {
        expandedEvents.push(item);
      }
    }
  });

  // Sort by datetime
  const schedule = expandedEvents.sort((a, b) => {
    return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
  });
  return <section id="mass-times" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1e3a8a] via-[#c5a059] to-[#1e3a8a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Kommende Begivenheder
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Se hvad der sker i de næste 8 dage. Vi fejrer messen flere gange om ugen.
            Kom og vær med i fællesskabet omkring alteret. Kirken er åben for bøn i dagtimerne.
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
              {schedule.length === 0 ? (
                <p className="text-slate-500 text-center py-8">
                  Ingen aktiviteter planlagt i øjeblikket.
                </p>
              ) : (
                schedule.map((item, index) => {
                  const date = new Date(item.datetime);
                  const dayName = date.toLocaleDateString('da-DK', { weekday: 'long' });
                  const dayDate = date.toLocaleDateString('da-DK', { day: 'numeric', month: 'short' });
                  const time = date.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });

                  return <div key={`program-${index}`} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0 hover:bg-white transition-colors px-2 rounded-md">
                    <div className="flex items-center">
                      <div className="w-32">
                        <span className="block font-medium text-slate-900 capitalize">
                          {dayName}
                        </span>
                        <span className="text-xs text-slate-500">
                          {dayDate}
                        </span>
                      </div>
                      <span className="text-[#c5a059] font-bold w-20">
                        {time}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-slate-800 font-medium">
                        {item.massType}
                      </span>
                      <div className="flex items-center justify-end gap-2 mt-1">
                        {item.language && (
                          <span className="text-xs text-slate-500">
                            {item.language}
                          </span>
                        )}
                        {item.location && (
                          <span className="text-xs text-slate-500 uppercase tracking-wide">
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                })
              )}
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