import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { urlFor } from '@/lib/sanity';

interface Priest {
  _id: string;
  name: string;
  title: string;
  photo?: any;
  bio?: string;
  email?: string;
  phone?: string;
  order: number;
}

interface PriestsSectionProps {
  priests?: Priest[];
}

export function PriestsSection({ priests = [] }: PriestsSectionProps) {
  // Fallback data if CMS data is not available
  const priestsList = priests.length > 0 ? priests : [
    {
      _id: '1',
      name: 'Pater John Doe',
      title: 'Sognepræst',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      email: 'john@example.com',
      phone: '+45 12 34 56 78',
      order: 1
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Vores Præster
          </h2>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priestsList.map((priest) => (
            <div
              key={priest._id}
              className="bg-[#f8f6f1] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {priest.photo && (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={urlFor(priest.photo).width(600).height(400).url()}
                    alt={priest.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-2">
                  {priest.name}
                </h3>
                <p className="text-[#c5a059] font-semibold mb-4">
                  {priest.title}
                </p>

                {priest.bio && (
                  <p className="text-slate-600 mb-4">{priest.bio}</p>
                )}

                <div className="space-y-2">
                  {priest.email && (
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="h-4 w-4 mr-2 text-[#1e3a8a]" />
                      <a
                        href={`mailto:${priest.email}`}
                        className="hover:text-[#1e3a8a] transition-colors"
                      >
                        {priest.email}
                      </a>
                    </div>
                  )}
                  {priest.phone && (
                    <div className="flex items-center text-sm text-slate-600">
                      <Phone className="h-4 w-4 mr-2 text-[#1e3a8a]" />
                      <a
                        href={`tel:${priest.phone}`}
                        className="hover:text-[#1e3a8a] transition-colors"
                      >
                        {priest.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}