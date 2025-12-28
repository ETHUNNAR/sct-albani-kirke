import React from 'react';
import { Layout } from './Layout';
import { client, queries } from '@/lib/sanity';

interface ServerLayoutProps {
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

export async function ServerLayout({ children }: ServerLayoutProps) {
  const weeklyProgram = await getWeeklyProgram();

  return <Layout weeklyProgram={weeklyProgram}>{children}</Layout>;
}
