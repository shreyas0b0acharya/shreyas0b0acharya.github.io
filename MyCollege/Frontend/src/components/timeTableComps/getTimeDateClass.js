import { timeTable } from "./timeTableDict";

// Function to get the current time and day
export const getCurrentTimeDay = () => {
  const now = new Date();
  const day = now.toLocaleString('en-US', { weekday: 'long' });
  const hour = now.getHours();
  const minute = now.getMinutes();
  const hourIn12 = hour % 12 || 12;
  const currentTime = `${hourIn12}:${minute < 10 ? '0' : ''}${minute}`;
  return [currentTime, day];
};

// Function to get the currently ongoing class
export const getCurrentClass = () => {
  const now = new Date();
  const day = now.toLocaleString('en-US', { weekday: 'long' });
  const hour = now.getHours();
  const minute = now.getMinutes();

  // return empty array if time is not between 9 to 18 hour
  if (hour < 9 || hour >= 18) {
    return [];
  }
  const daySchedule = timeTable[day];

  // If no schedule exists for the day, return empty array
  if (!daySchedule) {
    return [];
  }

  // Convert current time to minutes for comparison
  const nowInMinutes = hour * 60 + minute;
  const classList = [];

  // Loop through each scheduled class
  for (const cls of daySchedule) {

    const [start, end] = cls.time.split('to').map(str => str.trim());
    const [startHour, startMin] = start.split(':').map(Number);
    const [endHour, endMin] = end.split(':').map(Number);
    const startInMinutes = startHour * 60 + startMin;
    const endInMinutes = endHour * 60 + endMin;

    // If current time is within the class duration then add to the list classList
    if (nowInMinutes >= startInMinutes && nowInMinutes <= endInMinutes) {
      classList.push(cls);
    }
  }

  return classList;
};
