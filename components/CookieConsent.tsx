'use client';

import React, { useEffect, useState } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (e) {
        console.error('Error loading cookie preferences:', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      analytics: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            {!showSettings ? (
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-navy rounded-full p-3">
                    <Cookie className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">
                      Vi bruger cookies
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. Nogle cookies er nødvendige for at hjemmesiden kan fungere, mens andre hjælper os med at forstå, hvordan du bruger siden.
                    </p>
                    <p className="text-sm text-slate-500 mb-6">
                      Læs mere i vores{' '}
                      <Link href="/privatlivspolitik" className="text-navy hover:text-gold underline">
                        privatlivspolitik
                      </Link>
                      .
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="primary"
                        onClick={handleAcceptAll}
                        className="sm:min-w-[160px]"
                      >
                        Acceptér alle
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleAcceptNecessary}
                        className="sm:min-w-[160px]"
                      >
                        Kun nødvendige
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setShowSettings(true)}
                        className="sm:min-w-[160px]"
                      >
                        Indstillinger
                      </Button>
                    </div>
                  </div>
                  <button
                    onClick={handleAcceptNecessary}
                    className="flex-shrink-0 p-2 hover:bg-slate-100 rounded-full transition-colors"
                    aria-label="Luk"
                  >
                    <X className="h-5 w-5 text-slate-400" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative z-50">
                <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                        Cookie indstillinger
                      </h3>
                      <p className="text-slate-600">
                        Vælg hvilke cookies du vil acceptere
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                      aria-label="Luk"
                    >
                      <X className="h-5 w-5 text-slate-400" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Necessary Cookies */}
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-navy">
                          Nødvendige cookies
                        </h4>
                        <div className="bg-navy text-white text-xs px-3 py-1 rounded-full">
                          Altid aktiv
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        Disse cookies er nødvendige for at hjemmesiden kan fungere og kan ikke slås fra. De bruges til grundlæggende funktioner som navigation og adgang til sikre områder.
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-navy">
                          Præference cookies
                        </h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) =>
                              setPreferences({
                                ...preferences,
                                functional: e.target.checked,
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-600">
                        Disse cookies husker dine valg og præferencer (f.eks. sprog, region) for at give dig en mere personlig oplevelse.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-navy">
                          Statistik cookies
                        </h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) =>
                              setPreferences({
                                ...preferences,
                                analytics: e.target.checked,
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-600">
                        Disse cookies hjælper os med at forstå, hvordan besøgende bruger hjemmesiden, så vi kan forbedre den. Alle data er anonymiseret.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Button
                      variant="primary"
                      onClick={handleSavePreferences}
                      className="flex-1"
                    >
                      Gem indstillinger
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleAcceptAll}
                      className="flex-1"
                    >
                      Acceptér alle
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
