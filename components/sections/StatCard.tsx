interface StatCardProps {
  value: string | number;
  label: string;
  variant?: 'blue' | 'gold';
  className?: string;
}

export function StatCard({ value, label, variant = 'blue', className = '' }: StatCardProps) {
  const variants = {
    blue: 'bg-gradient-to-br from-navy to-navy-light',
    gold: 'bg-gradient-to-br from-gold to-gold/80',
  };

  return (
    <div className={`${variants[variant]} p-6 rounded-xl text-white ${className}`}>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-white/80 uppercase tracking-wide">{label}</div>
    </div>
  );
}
