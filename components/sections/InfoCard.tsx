import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description?: string;
  phone?: string;
  email?: string;
  highlight?: boolean;
  className?: string;
}

export function InfoCard({
  icon: Icon,
  title,
  subtitle,
  description,
  phone,
  email,
  highlight = false,
  className = '',
}: InfoCardProps) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 group ${className}`}>
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${highlight ? 'bg-[#1e3a8a]/10' : 'bg-[#c5a059]/10'}`}>
        <Icon className={`h-7 w-7 ${highlight ? 'text-[#1e3a8a]' : 'text-[#c5a059]'}`} />
      </div>
      <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">{title}</h3>
      {subtitle && <p className="text-[#c5a059] font-semibold mb-4">{subtitle}</p>}
      {description && <p className="text-slate-600 mb-4">{description}</p>}
      <div className="space-y-2">
        {phone && (
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{phone}</span>
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{email}</span>
          </a>
        )}
      </div>
    </div>
  );
}
