import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { urlFor } from '@/lib/sanity';

interface HeroProps {
  siteSettings?: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroTagline?: string;
    heroImage?: any;
  } | null;
}

export function Hero({ siteSettings }: HeroProps) {
  const heroImageUrl = siteSettings?.heroImage
    ? urlFor(siteSettings.heroImage).width(2000).height(1200).url()
    : "https://images.unsplash.com/photo-1548625361-e88c60eb355c?q=80&w=2070&auto=format&fit=crop";

  return <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="Church Interior"
          className="w-full h-full object-cover scale-105 transition-transform duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-black/50 to-navy/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy/30 rounded-full blur-3xl" />
      </div>

      {/* Content with Glassmorphism */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pb-32">
        {/* Crest/Logo with Enhanced Animation */}
        <div className="mb-8 animate-in fade-in zoom-in duration-1000">
          <div className="relative group">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500" />
            <div
              className="relative w-24 h-24 md:w-32 md:h-32 mx-auto bg-contain bg-center bg-no-repeat opacity-90
                         transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
              style={{
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_the_Diocese_of_Copenhagen.svg/1200px-Coat_of_arms_of_the_Diocese_of_Copenhagen.svg.png')"
              }}
            >
              {/* Using Diocese coat of arms as placeholder for specific church crest */}
            </div>
          </div>
        </div>

        {/* Main Content Container with Glassmorphism */}
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight
                         animate-in slide-in-from-bottom-5 duration-1000 delay-150
                         [text-shadow:_0_4px_12px_rgb(0_0_0_/40%)]">
            {siteSettings?.heroTitle || 'Sct. Albani Kirke'}
            <span className="block text-2xl md:text-4xl font-normal mt-4 text-gold italic
                           animate-in fade-in duration-1000 delay-300
                           [text-shadow:_0_2px_8px_rgb(0_0_0_/30%)]">
              {siteSettings?.heroSubtitle || 'Den katolske kirke i Odense'}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8 animate-in zoom-in duration-700 delay-300">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50" />
            <div className="w-24 h-1 bg-gold rounded-full shadow-lg shadow-gold/50" />
            <div className="w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>

          <p className="text-lg md:text-2xl text-slate-100 max-w-2xl mx-auto mb-8 font-light tracking-wide
                       animate-in slide-in-from-bottom-5 duration-1000 delay-400
                       leading-relaxed">
            {siteSettings?.heroTagline || 'Christus Vincit! Christus Regnat! Christus Imperat!'}
          </p>

          <div className="flex justify-center animate-in fade-in duration-1000 delay-500">
            <a href="#mass-times">
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[180px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300
                           bg-gold hover:bg-[#d4b06d] font-semibold"
              >
                Messetider
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mx-auto">
          <span className="text-sm font-medium tracking-wide">Scroll ned</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse" />
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </div>;
}