import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export function LocationMap() {
  return (
    <section className="py-20 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Find Os
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sct. Albani Kirke ligger i hjertet af Odense, tæt på centrum.
            Vi glæder os til at se dig!
          </p>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.7842385912873!2d10.385363776743935!3d55.39691557304445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464d2090da8b8d67%3A0x8f4b8c8b8b8b8b8b!2sAdelgade%201%2C%205000%20Odense%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1234567890123"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sct. Albani Kirke location"
          />
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#c5a059] mr-3 mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1e3a8a] mb-2">
                  Adresse
                </h3>
                <p className="text-slate-700 mb-1">Adelgade 1</p>
                <p className="text-slate-700 mb-3">5000 Odense C</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Adelgade+1,+5000+Odense+C,+Denmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e3a8a] hover:text-[#c5a059] font-medium text-sm transition-colors inline-flex items-center"
                >
                  Få kørevejledning →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-[#c5a059] mr-3 mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1e3a8a] mb-2">
                  Åbningstider
                </h3>
                <p className="text-slate-700 mb-2">
                  Kirken er åben for bøn i dagtimerne.
                </p>
                <p className="text-sm text-slate-600">
                  Se messetider i programmet ovenfor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parking Notice */}
        <div className="bg-[#1e3a8a] text-white rounded-xl shadow-lg p-6 mt-8">
          <p className="text-slate-200 text-sm leading-relaxed">
            <strong className="text-white">Parkering:</strong> Der er begrænsede
            parkeringspladser ved kirken. Vi anbefaler offentlig transport
            eller parkering i nærheden af centrum.
          </p>
        </div>
      </div>
    </section>
  );
}
