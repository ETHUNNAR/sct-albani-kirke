import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  highlight = false,
  className = '',
}: FeatureCardProps) {
  return (
    <div className={`group bg-white rounded-2xl border-2 ${highlight ? 'border-gold' : 'border-slate-200'} p-8 hover:border-gold transition-all duration-300 hover:shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-navy/5 to-transparent rounded-bl-full" />

      <div className="relative">
        <div className={`w-16 h-16 ${highlight ? 'bg-gradient-to-br from-gold to-gold/80' : 'bg-gradient-to-br from-navy to-navy-light'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white" size={28} />
        </div>

        <h3 className="font-serif text-2xl font-bold text-navy mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
