import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  siteSettings?: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroTagline?: string;
  } | null;
}

export function Hero({ siteSettings }: HeroProps) {
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1548625361-e88c60eb355c?q=80&w=2070&auto=format&fit=crop" alt="Church Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1e3a8a]/90 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Crest/Logo Placeholder */}
        <div className="mb-8 animate-in fade-in zoom-in duration-1000">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-contain bg-center bg-no-repeat opacity-90" style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_the_Diocese_of_Copenhagen.svg/1200px-Coat_of_arms_of_the_Diocese_of_Copenhagen.svg.png')"
        }}>
            {/* Using Diocese coat of arms as placeholder for specific church crest */}
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg animate-in slide-in-from-bottom-5 duration-1000 delay-150">
          {siteSettings?.heroTitle || 'Sct. Albani Kirke'}
          <span className="block text-2xl md:text-3xl font-normal mt-2 text-[#c5a059] italic">
            {siteSettings?.heroSubtitle || 'Odense'}
          </span>
        </h1>

        <div className="w-24 h-1 bg-[#c5a059] mb-8 rounded-full animate-in zoom-in duration-700 delay-300" />

        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-light tracking-wide animate-in slide-in-from-bottom-5 duration-1000 delay-300">
          {siteSettings?.heroTagline || 'Christus Vincit! Christus Regnat! Christus Imperat!'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
          <Button variant="secondary" size="lg" className="min-w-[160px]">
            Messetider
          </Button>
          <Button variant="outline" size="lg" className="min-w-[160px] border-white text-white hover:bg-white hover:text-[#1e3a8a]">
            Ny i kirken?
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown className="h-8 w-8" />
      </div>
    </div>;
}