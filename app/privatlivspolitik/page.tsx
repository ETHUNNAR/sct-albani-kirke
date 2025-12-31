import { Layout } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privatlivspolitik - Sct. Albani Kirke',
  description: 'Læs om hvordan Sct. Albani Kirke behandler dine personoplysninger.',
};

export default function PrivatlivspolitikPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-navy" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Privatlivspolitik
          </h1>
          <div className="w-24 h-1 bg-gold rounded-full" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span>/</span>
            <span className="text-white">Privatlivspolitik</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-gradient-to-b from-white via-cream to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
        <div className="absolute top-[800px] right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-[1600px] left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-lg max-w-none">
            <div className="bg-cream rounded-xl p-6 mb-12 border-l-4 border-gold">
              <p className="text-slate-700 mb-0">
                <strong>Sidst opdateret:</strong> {new Date().toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold">
                Dataansvarlig
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-0 mb-6">
              1. Hvem er vi?
            </h2>

            <div className="flex items-start gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent mt-3" />
              <div className="w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50 mt-2.5" />
            </div>
            <p>
              Sct. Albani Kirke er en katolsk sognekirke i Odense, Danmark. Vi tager din personlige
              integritet alvorligt og er forpligtet til at beskytte dine personoplysninger i
              overensstemmelse med den Europæiske Unions Databeskyttelsesforordning (GDPR).
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8 my-8 border border-slate-200">
              <p className="mb-3 text-lg"><strong className="text-navy">Dataansvarlig:</strong></p>
              <p className="mb-1 text-slate-700">Sct. Albani Kirke</p>
              <p className="mb-1 text-slate-700">Adelgade 1</p>
              <p className="mb-1 text-slate-700">5000 Odense C</p>
              <p className="mb-1 text-slate-700">Email: sognepraest@sct-albani.dk</p>
              <p className="text-slate-700">Telefon: 2896 5517</p>
            </div>

            <div className="inline-block mb-6 mt-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold">
                Dataindsamling
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-0 mb-6">
              2. Hvilke oplysninger indsamler vi?
            </h2>
            <p>Vi kan indsamle følgende typer af personoplysninger:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Kontaktoplysninger:</strong> Navn, adresse, telefonnummer, e-mailadresse</li>
              <li><strong>Medlemsoplysninger:</strong> Medlemskab af kirkelige grupper (f.eks. DUK)</li>
              <li><strong>Tekniske data:</strong> IP-adresse, browsertype, enhedstype (kun hvis cookies accepteres)</li>
              <li><strong>Billeder:</strong> Fotografier fra kirkelige arrangementer (kun med samtykke)</li>
            </ul>

            <div className="inline-block mb-6 mt-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold">
                Anvendelse
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-0 mb-6">
              3. Hvordan bruger vi dine oplysninger?
            </h2>
            <p>Vi bruger dine personoplysninger til:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>At kommunikere med dig om kirkelige aktiviteter og arrangementer</li>
              <li>At administrere medlemskaber (f.eks. DUK)</li>
              <li>At besvare dine henvendelser</li>
              <li>At forbedre vores hjemmeside og tjenester</li>
              <li>At overholde juridiske forpligtelser</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              4. Retsgrundlag for behandling
            </h2>
            <p>Vi behandler dine personoplysninger baseret på:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Samtykke:</strong> Når du frivilligt giver os dine oplysninger</li>
              <li><strong>Legitim interesse:</strong> For at kunne drive kirken og kommunikere med menigheden</li>
              <li><strong>Kontraktlig forpligtelse:</strong> Ved medlemskab af kirkelige organisationer</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              5. Videregivelse af oplysninger
            </h2>
            <p>
              Vi deler ikke dine personoplysninger med tredjeparter, medmindre:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Du har givet dit samtykke</li>
              <li>Det er nødvendigt for at levere en tjeneste (f.eks. DUK national organisation)</li>
              <li>Vi er juridisk forpligtet til det</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              6. Opbevaring af data
            </h2>
            <p>
              Vi opbevarer dine personoplysninger kun så længe det er nødvendigt for de formål,
              hvortil de blev indsamlet, eller så længe vi er juridisk forpligtet til at gøre det.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Kontaktoplysninger:</strong> Så længe du er medlem eller deltager i aktiviteter</li>
              <li><strong>E-mail korrespondance:</strong> Op til 2 år</li>
              <li><strong>Billeder:</strong> Indtil samtykke trækkes tilbage</li>
            </ul>

            <div className="inline-block mb-6 mt-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold">
                Dine rettigheder
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-0 mb-6">
              7. Dine rettigheder
            </h2>
            <p>Du har følgende rettigheder i henhold til GDPR:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Ret til indsigt:</strong> Du kan anmode om en kopi af dine personoplysninger</li>
              <li><strong>Ret til berigtigelse:</strong> Du kan få rettet forkerte oplysninger</li>
              <li><strong>Ret til sletning:</strong> Du kan anmode om sletning af dine oplysninger</li>
              <li><strong>Ret til begrænsning:</strong> Du kan begrænse behandlingen af dine data</li>
              <li><strong>Ret til dataportabilitet:</strong> Du kan få dine data i et struktureret format</li>
              <li><strong>Ret til at gøre indsigelse:</strong> Du kan gøre indsigelse mod behandling</li>
              <li><strong>Ret til at trække samtykke tilbage:</strong> Du kan til enhver tid trække dit samtykke tilbage</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              8. Cookies
            </h2>
            <p>
              Vores hjemmeside bruger cookies til at forbedre brugeroplevelsen. Du kan til enhver
              tid ændre dine cookie-præferencer via cookie-banneret nederst på siden.
            </p>
            <p className="mt-4">
              Vi bruger følgende typer cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Nødvendige cookies:</strong> Disse er nødvendige for at hjemmesiden kan fungere</li>
              <li><strong>Præference cookies:</strong> Husker dine indstillinger (f.eks. sprog)</li>
              <li><strong>Statistik cookies:</strong> Hjælper os med at forstå, hvordan hjemmesiden bruges</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              9. Børn og unge
            </h2>
            <p>
              Vi er særligt opmærksomme på beskyttelsen af børns personoplysninger. For børn under
              15 år kræves forældres samtykke til indsamling af personoplysninger. Vi offentliggør
              ikke billeder af børn uden udtrykkelig tilladelse fra forældrene.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              10. Sikkerhed
            </h2>
            <p>
              Vi har implementeret passende tekniske og organisatoriske sikkerhedsforanstaltninger
              for at beskytte dine personoplysninger mod uautoriseret adgang, tab eller ødelæggelse.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              11. Ændringer til denne politik
            </h2>
            <p>
              Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil
              blive kommunikeret på vores hjemmeside.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy mt-12 mb-6">
              12. Kontakt os
            </h2>
            <p>
              Hvis du har spørgsmål om denne privatlivspolitik, eller hvis du ønsker at udøve dine
              rettigheder, er du velkommen til at kontakte os:
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8 my-8 border border-slate-200">
              <p className="mb-3 text-lg"><strong className="text-navy">Sct. Albani Kirke</strong></p>
              <p className="mb-1 text-slate-700">Adelgade 1, 5000 Odense C</p>
              <p className="mb-1 text-slate-700">Email: sognepraest@sct-albani.dk</p>
              <p className="mb-6 text-slate-700">Telefon: 2896 5517</p>
              <p className="text-sm text-slate-600 border-t border-slate-200 pt-6">
                Du har også ret til at klage til Datatilsynet, hvis du mener, at vi behandler
                dine personoplysninger i strid med databeskyttelseslovgivningen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-navy to-[#2563eb] text-white rounded-xl shadow-xl p-8 my-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="text-sm leading-relaxed">
                  <strong className="text-lg block mb-3">Datatilsynet:</strong>
                  Borgergade 28, 5.<br />
                  1300 København K<br />
                  Email: dt@datatilsynet.dk<br />
                  Telefon: 33 19 32 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
