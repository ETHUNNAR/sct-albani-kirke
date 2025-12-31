import { Download } from 'lucide-react';

interface DownloadItem {
  name: string;
  url: string;
  description?: string;
}

interface DownloadsSectionProps {
  title: string;
  downloads: DownloadItem[];
  className?: string;
}

export function DownloadsSection({ title, downloads, className = '' }: DownloadsSectionProps) {
  if (!downloads || downloads.length === 0) return null;

  return (
    <section className={`py-20 bg-cream ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold text-navy mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((download, index) => (
            <a
              key={index}
              href={download.url}
              download
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-navy hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
                  <Download className="h-6 w-6 text-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors">
                    {download.name}
                  </h3>
                  {download.description && (
                    <p className="text-slate-600 text-sm mt-1">{download.description}</p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
