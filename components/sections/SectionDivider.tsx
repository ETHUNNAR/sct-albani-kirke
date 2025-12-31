interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 mb-6 ${className}`}>
      <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
      <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
      <div className="w-24 h-1 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
      <div className="w-2 h-2 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/50" />
      <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
    </div>
  );
}
