import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import { client, queries } from '@/lib/sanity';

interface LayoutProps {
  children: React.ReactNode;
}

async function getWeeklyProgram() {
  try {
    const weeklyProgram = await client.fetch(queries.weeklyProgram);
    return weeklyProgram || [];
  } catch (error) {
    console.error('Error fetching weekly program:', error);
    return [];
  }
}

export async function Layout({ children }: LayoutProps) {
  const weeklyProgram = await getWeeklyProgram();

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer weeklyProgram={weeklyProgram} />
      <CookieConsent />
    </div>
  );
}