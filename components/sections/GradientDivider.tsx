interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className = '' }: GradientDividerProps) {
  return (
    <div className={`h-1 bg-gradient-to-r from-navy via-gold to-navy ${className}`} />
  );
}
