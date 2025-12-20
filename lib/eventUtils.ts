import { WeeklyProgramItem } from './types';

export function expandRecurringEvents(
  weeklyProgram: WeeklyProgramItem[],
  daysAhead: number = 8
): WeeklyProgramItem[] {
  const now = new Date();
  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + daysAhead);
  endDate.setHours(23, 59, 59, 999);

  const expandedEvents: WeeklyProgramItem[] = [];

  weeklyProgram.forEach(item => {
    const originalDate = new Date(item.datetime);

    if (item.recurring) {
      const dayOfWeek = originalDate.getDay();
      const timeOfDay = originalDate.getHours() * 60 + originalDate.getMinutes();

      for (let i = 0; i <= 15; i++) {
        const checkDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);

        if (checkDate.getDay() === dayOfWeek) {
          const eventDateTime = new Date(checkDate);
          eventDateTime.setHours(Math.floor(timeOfDay / 60), timeOfDay % 60, 0, 0);

          if (eventDateTime >= now && eventDateTime <= endDate) {
            expandedEvents.push({
              ...item,
              datetime: eventDateTime.toISOString(),
            });
          }
        }
      }
    } else {
      if (originalDate >= now && originalDate <= endDate) {
        expandedEvents.push(item);
      }
    }
  });

  return expandedEvents.sort((a, b) => {
    return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
  });
}

export function getNextEvent(
  weeklyProgram: WeeklyProgramItem[]
): WeeklyProgramItem | null {
  if (weeklyProgram.length === 0) return null;

  const now = new Date();
  const expandedEvents: WeeklyProgramItem[] = [];

  weeklyProgram.forEach(item => {
    const originalDate = new Date(item.datetime);

    if (item.recurring) {
      const dayOfWeek = originalDate.getDay();
      const timeOfDay = originalDate.getHours() * 60 + originalDate.getMinutes();

      for (let i = 0; i <= 14; i++) {
        const checkDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);

        if (checkDate.getDay() === dayOfWeek) {
          const eventDateTime = new Date(checkDate);
          eventDateTime.setHours(Math.floor(timeOfDay / 60), timeOfDay % 60, 0, 0);

          if (eventDateTime >= now) {
            expandedEvents.push({
              ...item,
              datetime: eventDateTime.toISOString(),
            });
            break;
          }
        }
      }
    } else {
      if (originalDate >= now) {
        expandedEvents.push(item);
      }
    }
  });

  if (expandedEvents.length === 0) return null;

  expandedEvents.sort((a, b) => {
    return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
  });

  return expandedEvents[0];
}
