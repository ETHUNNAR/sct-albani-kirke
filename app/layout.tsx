import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sct. Albani Kirke',
  description: 'Sct. Albani Kirke - den katolske sognekirke i Odense',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
