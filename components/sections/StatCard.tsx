interface StatCardProps {
  value: string | number;
  label: string;
  variant?: 'blue' | 'gold';
  className?: string;
}

export function StatCard({ value, label, variant = 'blue', className = '' }: StatCardProps) {
  const variants = {
    blue: 'bg-gradient-to-br from-[#1e3a8a] to-[#2d4a9a]',
    gold: 'bg-gradient-to-br from-[#c5a059] to-[#d4b06a]',
  };

  return (
    <div className={`${variants[variant]} p-6 rounded-xl text-white ${className}`}>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-white/80 uppercase tracking-wide">{label}</div>
    </div>
  );
}
