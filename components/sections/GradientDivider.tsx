interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className = '' }: GradientDividerProps) {
  return (
    <div className={`h-1 bg-gradient-to-r from-[#1e3a8a] via-[#c5a059] to-[#1e3a8a] ${className}`} />
  );
}
