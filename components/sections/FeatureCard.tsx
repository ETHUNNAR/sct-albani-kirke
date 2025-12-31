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
    <div className={`group bg-white rounded-2xl border-2 ${highlight ? 'border-[#c5a059]' : 'border-slate-200'} p-8 hover:border-[#c5a059] transition-all duration-300 hover:shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1e3a8a]/5 to-transparent rounded-bl-full" />

      <div className="relative">
        <div className={`w-16 h-16 ${highlight ? 'bg-gradient-to-br from-[#c5a059] to-[#d4b06a]' : 'bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a]'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white" size={28} />
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
