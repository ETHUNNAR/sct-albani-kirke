import { SectionDivider } from './SectionDivider';

interface SectionHeaderProps {
  tag?: string;
  tagVariant?: 'gold' | 'blue';
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  tag,
  tagVariant = 'gold',
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  const tagColors = {
    gold: 'bg-[#c5a059]/10 text-[#c5a059]',
    blue: 'bg-[#1e3a8a]/10 text-[#1e3a8a]',
  };

  return (
    <div className={`text-center mb-16 ${className}`}>
      {tag && (
        <div className="inline-block mb-4">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${tagColors[tagVariant]}`}>
            {tag}
          </span>
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
        {title}
      </h2>
      <SectionDivider />
      {description && (
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">{description}</p>
      )}
    </div>
  );
}
