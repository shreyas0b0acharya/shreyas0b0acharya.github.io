import { timeTable } from "./timeTableDict";

export const getTodayClasses = () => {
  const now = new Date();
  const day = now.toLocaleString('en-US', { weekday: 'long' });

  const daySchedule = timeTable[day];
  return daySchedule || [];
};
