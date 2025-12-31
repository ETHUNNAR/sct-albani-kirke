import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portableTextComponents';

interface ContentSectionProps {
  content: any;
  bgColor?: 'white' | 'cream';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function ContentSection({
  content,
  bgColor = 'white',
  maxWidth = 'lg',
  className = '',
}: ContentSectionProps) {
  if (!content) return null;

  const bgColors = {
    white: 'bg-white',
    cream: 'bg-cream',
  };

  const maxWidths = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return (
    <section className={`py-20 ${bgColors[bgColor]} ${className}`}>
      <div className={`${maxWidths[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="prose prose-lg max-w-none">
          <PortableText value={content} components={portableTextComponents} />
        </div>
      </div>
    </section>
  );
}
