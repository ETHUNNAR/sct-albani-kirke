import { MapPin, Mail, Phone } from 'lucide-react';

interface ContactInfoGridProps {
  address?: { line1: string; line2?: string };
  email?: string;
  phone?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ContactInfoGrid({
  address,
  email,
  phone,
  title = 'Kontakt kirkekontoret',
  subtitle,
  className = '',
}: ContactInfoGridProps) {
  const hasAnyContact = address || email || phone;
  if (!hasAnyContact) return null;

  return (
    <div className={`bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 shadow-lg ${className}`}>
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl font-bold text-navy mb-4">{title}</h3>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {address && (
          <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
            <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-navy text-sm mb-1">Adresse</div>
              <div className="text-slate-700 text-sm">
                {address.line1}
                {address.line2 && <><br />{address.line2}</>}
              </div>
            </div>
          </div>
        )}

        {email && (
          <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
            <Mail className="text-gold flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-navy text-sm mb-1">Email</div>
              <a href={`mailto:${email}`} className="text-slate-700 text-sm hover:text-navy transition-colors whitespace-nowrap">
                {email}
              </a>
            </div>
          </div>
        )}

        {phone && (
          <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
            <Phone className="text-gold flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-navy text-sm mb-1">Telefon</div>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-slate-700 text-sm hover:text-navy transition-colors">
                {phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
