import { Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ContactSectionProps {
  title: string;
  email?: string;
  phone?: string;
  contactPerson?: string;
  description?: string;
  showAllContactsLink?: boolean;
  className?: string;
}

export function ContactSection({
  title,
  email,
  phone,
  contactPerson,
  description = 'Har du spørgsmål? Kontakt os gerne - vi hjælper dig med at forberede dig på denne vigtige dag.',
  showAllContactsLink = true,
  className = '',
}: ContactSectionProps) {
  const hasContacts = email || phone || contactPerson;
  if (!hasContacts) return null;

  return (
    <section className={`py-20 bg-white border-t border-slate-200 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl shadow-xl p-12">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">{title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail className="h-8 w-8 text-gold mb-3" />
                <span className="text-sm text-slate-300 mb-2">Email</span>
                <span className="font-semibold text-center break-all">{email}</span>
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 text-gold mb-3" />
                <span className="text-sm text-slate-300 mb-2">Telefon</span>
                <span className="font-semibold">{phone}</span>
              </a>
            )}

            {contactPerson && (
              <div className="flex flex-col items-center p-6 rounded-lg bg-white/10">
                <User className="h-8 w-8 text-gold mb-3" />
                <span className="text-sm text-slate-300 mb-2">Kontaktperson</span>
                <span className="font-semibold">{contactPerson}</span>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-slate-200 mb-6">{description}</p>
            {showAllContactsLink && (
              <Link href="/#contact">
                <Button variant="secondary" className="inline-block">
                  Se alle kontaktinformationer
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
