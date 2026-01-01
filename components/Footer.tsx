'use client';

import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { WeeklyProgramItem } from '@/lib/types';
import { getNextEvent } from '@/lib/eventUtils';

interface FooterProps {
  weeklyProgram?: WeeklyProgramItem[];
}

export function Footer({ weeklyProgram = [] }: FooterProps) {
  const [nextMass, setNextMass] = React.useState<WeeklyProgramItem | null>(null);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    setNextMass(getNextEvent(weeklyProgram));

    const interval = setInterval(() => {
      setNextMass(getNextEvent(weeklyProgram));
    }, 60000);

    return () => clearInterval(interval);
  }, [weeklyProgram]);

  return <footer className="bg-[#0f172a] text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gold">
              Sct. Albani Kirke
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Den katolske kirke i Odense. Et fællesskab i tro, håb og
              kærlighed. Velkommen til alle, der søger stilhed, bøn eller
              fællesskab.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/SctAlbaniDuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sctalbaniduk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 shrink-0" />
                <span>
                  Adelgade 1<br />
                  5000 Odense C
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 shrink-0" />
                <a href="tel:28965517" className="hover:text-gold transition-colors">
                  2896 5517
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 shrink-0" />
                <a href="mailto:sognepraest@sct-albani.dk" className="hover:text-gold transition-colors">
                  sognepraest@sct-albani.dk
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Genveje</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/ugeseddel" className="hover:text-gold transition-colors">
                  Ugeseddel
                </Link>
              </li>
              <li>
                <a href="#mass-times" className="hover:text-gold transition-colors">
                  Messetider
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-gold transition-colors">
                  Aktiviteter
                </a>
              </li>
              <li>
                <Link href="/stot-kirken" className="hover:text-gold transition-colors">
                  Støt Kirken
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-gold transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Next Event */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Næste Begivenhed</h4>
            {!isClient ? (
              <div className="bg-navy/50 p-4 rounded-lg border border-navy">
                <p className="text-sm text-slate-300">
                  Indlæser...
                </p>
              </div>
            ) : nextMass ? (
              <div className="bg-navy/50 p-4 rounded-lg border border-navy">
                <div className="flex items-start mb-2">
                  <Calendar className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{nextMass.massType}</p>
                    <p className="text-sm text-slate-300">
                      {new Date(nextMass.datetime).toLocaleDateString('da-DK', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                      })} kl. {new Date(nextMass.datetime).toLocaleTimeString('da-DK', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    {nextMass.language && (
                      <p className="text-xs text-slate-400">({nextMass.language})</p>
                    )}
                  </div>
                </div>
                {nextMass.description && (
                  <p className="text-xs text-slate-400 mt-2">
                    {nextMass.description}
                  </p>
                )}
                {!nextMass.description && (
                  <p className="text-xs text-slate-400 mt-2">
                    Kom og vær med. Alle er velkomne.
                  </p>
                )}
              </div>
            ) : (
              <div className="bg-navy/50 p-4 rounded-lg border border-navy">
                <p className="text-sm text-slate-300">
                  Se vores messetider i menuen ovenfor.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Sct. Albani Kirke Odense. Alle
            rettigheder forbeholdes.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privatlivspolitik" className="hover:text-slate-300">
              Privatlivspolitik
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('cookie-consent');
                window.location.reload();
              }}
              className="hover:text-slate-300"
            >
              Cookie indstillinger
            </button>
          </div>
        </div>
      </div>
    </footer>;
}