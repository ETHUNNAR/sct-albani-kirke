import { Layout } from '@/components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messe - Sct. Albani Kirke',
  description: 'Lær om den hellige messe, dens betydning og opbygning i Sct. Albani Kirke.',
};

const massStructure = [
  {
    number: '01',
    title: 'Indledning',
    subtitle: 'Åbningen',
    description: 'Præsten kysser alteret, og menigheden gør korsets tegn. Vi samles som ét legeme i Kristus.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Ordets liturgi',
    subtitle: 'Guds Ord',
    description: 'Skriftlæsninger, Evangeliet og homilien åbner Guds ord for os og nærer vores tro.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Den eukaristiske bøn',
    subtitle: 'Forvandlingen',
    description: 'Brød og vin forvandles til Kristi legeme og blod. Menigheden svarer med deres tro.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Kommunion',
    subtitle: 'Modtagelsen',
    description: 'De troende modtager Kristi legeme og blod og forenes med Ham og hinanden.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Afslutning',
    subtitle: 'Udsendelsen',
    description: 'Den afsluttende velsignelse og udsendelse sender os ud for at leve vores tro i verden.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

const prayers = [
  {
    name: 'Fadervor',
    latin: 'Pater Noster',
    text: `Vor Fader, du som er i himlene,
helliget vorde dit navn,
komme dit rige,
ske din vilje,
som i himlen så og på jorden.
Giv os i dag vort daglige brød,
og forlad os vor skyld,
som og vi forlader vore skyldnere,
og led os ikke i fristelse,
men fri os fra det onde.
Amen.`,
  },
  {
    name: 'Ave Maria',
    latin: 'Ave Maria',
    text: `Hil dig, Maria, fuld af nåde,
Herren er med dig,
velsignet er du iblandt kvinder,
og velsignet er dit livs frugt, Jesus.
Hellige Maria, Guds moder,
bed for os syndere,
nu og i vor dødstime.
Amen.`,
  },
  {
    name: 'Trosbekendelsen',
    latin: 'Credo',
    text: `Jeg tror på Gud, den almægtige Fader, himlens og jordens skaber.
Jeg tror på Jesus Kristus, hans enbårne Søn, vor Herre,
som er undfanget ved Helligånden, født af Jomfru Maria,
pint under Pontius Pilatus, korsfæstet, død og begravet,
nedsteget til dødsriget, på tredje dag opstanden fra de døde,
opfaret til himmels, siddende ved Gud Faders, den almægtiges, højre hånd,
hvorfra han skal komme at dømme levende og døde.
Jeg tror på Helligånden, den hellige katolske kirke,
de helliges samfund, syndernes forladelse,
kødets opstandelse og det evige liv.
Amen.`,
  },
];

export default function MessePage() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2071&auto=format&fit=crop"
            alt="Den hellige messe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#1e3a8a]/60 to-[#1e3a8a]/95" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-32 max-w-5xl mx-auto">
          <div className="mb-8">
            <svg className="w-16 h-16 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
            </svg>
          </div>

          <p className="text-[#c5a059] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Den hellige liturgi
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Messen
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
            Troens levende centrum - hvor vi deltager i menneskehedens største begivenhed
          </p>

          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[#c5a059]" />
            <div className="w-3 h-3 rotate-45 border border-[#c5a059]" />
            <div className="w-16 h-px bg-[#c5a059]" />
          </div>
        </div>

        <div className="absolute bottom-8 left-8 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Forside
            </Link>
            <span className="text-[#c5a059]">/</span>
            <Link href="/#mass-times" className="hover:text-white transition-colors">
              Messe
            </Link>
            <span className="text-[#c5a059]">/</span>
            <span className="text-white">Om Messen</span>
          </nav>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#1e3a8a] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#1e3a8a]/5 text-[#1e3a8a] text-sm tracking-wider uppercase rounded-full mb-6">
              Hvad er messen?
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-8">
              Liturgi - offentlig tjeneste
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Ordet &ldquo;liturgi&rdquo; stammer fra græsk og betyder <em className="text-[#1e3a8a] font-medium">&ldquo;offentlig tjeneste udført på offentlighedens vegne&rdquo;</em>.
              Når vi taler om liturgi, tænker vi på menigheden, som forsamles for at fejre den hellige messe.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Det er vigtigt at lægge mærke til udtrykket: <strong>fejre den hellige messe</strong>. Vi kender alle til at fejre en fest - og at forberede os til fest. Dette gælder så meget mere, når det drejer sig om den fest, Gud selv indbyder os til, og hvor Jesus Kristus selv er iblandt os.
            </p>

            <div className="bg-[#fdfbf7] rounded-xl p-6 my-8 border-l-4 border-[#1e3a8a]">
              <p className="text-slate-700 mb-2"><strong>At gå til messe er IKKE:</strong> at være tilskuer til et smukt og dybsindigt skuespil!</p>
              <p className="text-slate-700 mb-2"><strong>At gå til messe er IKKE:</strong> at fremsige de særlige bønner, der hører sig til ved lejligheden.</p>
              <p className="text-[#1e3a8a] font-medium"><strong>At gå til messe ER:</strong> at leve med i en begivenhed - den største i menneskehedens historie.</p>
            </div>

            <blockquote className="relative bg-gradient-to-r from-[#fdfbf7] to-white border-l-4 border-[#c5a059] pl-8 py-6 my-12 italic">
              <p className="text-xl text-[#1e3a8a] font-serif mb-0">
                &ldquo;Det er at være vidne til det samme levende drama, som fandt sted på Golgata for ca. 2000 år siden, og som siden er blevet gentaget hver eneste dag på jorden.&rdquo;
              </p>
            </blockquote>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Messen er det levende midtpunkt i enhver katoliks liv. I dåben bliver vi Guds børn og modtager nådens liv. I skriftemålet renses vor sjæl, og nådens liv styrkes i os. I messen (Eukaristien) modtager vi imidlertid ikke kun Guds nåde: <strong>vi modtager Gud selv</strong>.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              Det er Jesus Kristus selv, der, aftenen før han skulle dø på korset, indstiftede den hellige Eukaristi. Han gjorde det for at give sine disciple og alle andre kristne efter dem del i sin lidelse og opstandelse. Hver gang vi går til messe, fejrer vi påskemysteriet - Jesu offerdød på korset og hans herlighedsfulde opstandelse.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1e3a8a]/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#c5a059]/10 to-transparent" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-2">
                  Vil du vide mere?
                </h3>
                <p className="text-slate-600 mb-4">
                  Download vores komplette guide til messens liturgi - en detaljeret forklaring med alle bønner,
                  svar og forklaringer, så du kan følge med og forstå hver del af messen.
                </p>
                <p className="text-sm text-slate-500">
                  PDF dokument &bull; 12 sider &bull; Inkluderer alle bønner og trosbekendelser
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="/Messens_liturgi.pdf"
                  download
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#c5a059] text-white rounded-xl font-medium hover:bg-[#b08c4a] transition-colors shadow-lg shadow-[#c5a059]/20 group"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#fdfbf7] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#c5a059]/10 text-[#c5a059] text-sm tracking-wider uppercase rounded-full mb-6">
              Messens struktur
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Rejsen gennem messen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Messen er opbygget som en hellig rejse, der leder os fra samling til udsendelse,
              fra ord til sakramente.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c5a059] via-[#1e3a8a] to-[#c5a059] hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {massStructure.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    } max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-[#c5a059] text-sm font-medium">{step.subtitle}</span>
                          <h3 className="font-serif text-xl font-bold text-[#1e3a8a]">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#2a5aa8] flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-white font-serif text-lg font-bold">{step.number}</span>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1e3a8a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white/10 text-[#c5a059] text-sm tracking-wider uppercase rounded-full mb-6">
              Bønnerne
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              De fælles bønner
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Disse tidløse bønner forener katolikker verden over i én fælles stemme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {prayers.map((prayer, index) => (
              <div
                key={prayer.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center shadow-lg">
                  <span className="text-white font-serif font-bold">{index + 1}</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {prayer.name}
                  </h3>
                  <p className="text-[#c5a059] italic text-sm">
                    {prayer.latin}
                  </p>
                </div>

                <p className="text-white/80 leading-relaxed whitespace-pre-line text-sm">
                  {prayer.text}
                </p>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#c5a059]" />
            <svg className="w-6 h-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
            </svg>
            <div className="w-12 h-px bg-[#c5a059]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Deltag i messen
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Alle er velkomne til at deltage i den hellige messe i Sct. Albani Kirke.
            Se vores messetider og kom og oplev fællesskabet.
          </p>

          <Link
            href="/#mass-times"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-lg font-medium hover:bg-[#2a5aa8] transition-colors shadow-lg shadow-[#1e3a8a]/20"
          >
            <span>Se messetider</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
