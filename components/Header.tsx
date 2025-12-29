'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Church, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    {
      name: 'Forside',
      href: '/'
    },
    {
      name: 'Aktiviteter',
      href: '#activities',
      dropdown: [
        { name: 'Sct. Albani DUK', href: '/aktiviteter/duk' },
        { name: 'Besøgsgruppen', href: '/aktiviteter/besoegsgruppen' },
        { name: '1. Kommunikanter', href: '/aktiviteter/1kommunikanter' },
        { name: 'Firmander', href: '/aktiviteter/firmander' },
        { name: 'Ministranter', href: '/aktiviteter/ministranter' },
        { name: 'Familiegruppen', href: '/aktiviteter/familiegruppen' },
        { name: 'Bibelgruppe', href: '/aktiviteter/bibelgruppe' },
        { name: 'Kirkekaffe', href: '/aktiviteter/kirkekaffe' },
      ]
    },
    {
      name: 'Messe',
      href: '#mass-times',
      dropdown: [
        { name: 'Messetider', href: '/#mass-times' },
        { name: 'Messe', href: '/messetider-mass-times/messe' },
        { name: 'Rosenkransen', href: '/messetider-mass-times/rosenkransen' },
        { name: 'Sakramenterne', href: '/messetider-mass-times/sakramenterne' },
      ]
    },
    {
      name: 'Menighedens historie',
      href: '#history',
      dropdown: [
        { name: 'Redemptorist - ordenen', href: '/menighedens-historie/redemptorist-ordenen' },
        { name: 'Menighedsrådet 2018-2022', href: '/menighedens-historie/menighedsraad' },
        { name: 'Kirkens historie', href: '/menighedens-historie/kirkens-historie' },
        { name: 'Kirkeskat', href: '/menighedens-historie/kirkeskat' },
      ]
    },
    {
      name: 'Ugeseddel',
      href: '/ugeseddel'
    },
    {
      name: 'Kontakt',
      href: '/kontakt'
    }
  ];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-[#1e3a8a] text-white">
              <Church className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-[#1e3a8a]">
              <span className="font-serif font-bold text-lg leading-none">
                Sct. Albani Kirke
              </span>
              <span className="text-xs uppercase tracking-wider opacity-80">
                Odense
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className="text-sm font-medium transition-colors hover:text-[#c5a059] flex items-center gap-1 text-slate-700">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 -mt-2 pt-4 w-56">
                        <div className="bg-white rounded-lg shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {link.dropdown.map(item => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#f8f6f1] hover:text-[#1e3a8a] transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="text-sm font-medium transition-colors hover:text-[#c5a059] text-slate-700">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/stot-kirken">
              <Button variant="primary" size="sm">
                Støt Kirken
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 md:hidden p-4 flex flex-col space-y-2 animate-in slide-in-from-top-5">
          {navLinks.map(link => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="space-y-1">
                  <div className="text-slate-700 font-medium py-2 px-4">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-slate-600 hover:text-[#1e3a8a] py-2 px-4 rounded-md hover:bg-slate-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="block text-slate-700 hover:text-[#1e3a8a] font-medium py-2 px-4 rounded-md hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link href="/stot-kirken" className="w-full">
            <Button className="w-full justify-center">Støt Kirken</Button>
          </Link>
        </div>
      )}
    </header>;
}