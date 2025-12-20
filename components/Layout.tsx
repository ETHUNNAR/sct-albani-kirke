import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import { WeeklyProgramItem } from '@/lib/types';

interface LayoutProps {
  children: React.ReactNode;
  weeklyProgram?: WeeklyProgramItem[];
}

export function Layout({
  children,
  weeklyProgram
}: LayoutProps) {
  return <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer weeklyProgram={weeklyProgram} />
      <CookieConsent />
    </div>;
}