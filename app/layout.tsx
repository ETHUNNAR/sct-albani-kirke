import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SCT Albani Website Redesign',
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
