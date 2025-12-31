import { urlFor } from '@/lib/sanity';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  heroImage?: any;
  fallbackImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({
  title,
  subtitle,
  heroImage,
  fallbackImage = 'https://images.unsplash.com/photo-1533517310735-490a1a3fb5b7?q=80&w=2070&auto=format&fit=crop',
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <img
            src={urlFor(heroImage).width(2000).height(1200).url()}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={fallbackImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-navy/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gold font-medium mb-6">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gold rounded-full" />
      </div>

      <div className="absolute bottom-6 left-6 z-10">
        <Breadcrumb items={breadcrumbs} />
      </div>
    </section>
  );
}
