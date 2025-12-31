interface DecorativeBlobsProps {
  variant?: 'default' | 'reversed' | 'centered';
  className?: string;
}

export function DecorativeBlobs({ variant = 'default', className = '' }: DecorativeBlobsProps) {
  if (variant === 'centered') {
    return (
      <>
        <div className={`absolute top-40 left-1/4 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl ${className}`} />
        <div className={`absolute bottom-40 right-1/4 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl ${className}`} />
      </>
    );
  }

  if (variant === 'reversed') {
    return (
      <>
        <div className={`absolute top-40 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl ${className}`} />
        <div className={`absolute bottom-20 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl ${className}`} />
      </>
    );
  }

  return (
    <>
      <div className={`absolute top-20 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl ${className}`} />
      <div className={`absolute bottom-20 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl ${className}`} />
    </>
  );
}
