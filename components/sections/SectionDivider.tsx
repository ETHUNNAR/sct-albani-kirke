interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 mb-6 ${className}`}>
      <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
      <div className="w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50" />
      <div className="w-24 h-1 bg-gold rounded-full shadow-lg shadow-gold/50" />
      <div className="w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50" />
      <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
