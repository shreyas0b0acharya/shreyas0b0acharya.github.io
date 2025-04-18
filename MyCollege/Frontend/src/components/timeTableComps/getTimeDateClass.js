
import { timeTable } from "./timeTableDict";

export const getCurrentTimeDay = () => {
    const now = new Date();
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    const hour = now.getHours();
    const minute = now.getMinutes();
    const hourIn12 = hour % 12 || 12;
    const currentTime = `${hourIn12}:${minute < 10 ? '0' : ''}${minute}`;
  
    return [ currentTime, day]; // ✅ Return as object
  };
  
  
  
  export const getCurrentClass = () => {
    const now = new Date();
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    const hour = now.getHours();
    const minute = now.getMinutes();
  
    // Check if current time is within class time (9:00 to 18:00)
    if (hour < 9 || hour >= 18) {
      return [];
    }
  
    // Converting 24-hour to 12-hour format, handling midnight as 12
    // const hourIn12 = hour % 12 || 12;
    console.log(hour);
    
    // const currentTime = `${hourIn12}:${minute < 10 ? '0' : ''}${minute}`;
  
    const daySchedule = timeTable[day];
    if (!daySchedule) {
      return [];
    }
  
    // Check each class period to see if the current time falls within it
    const nowInMinutes = hour * 60 + minute;
    const classList = [];
    for (const cls of daySchedule) {
      console.log(cls.time);
      const [start, end] = cls.time.split('to').map(str => str.trim());
      const [startHour, startMin] = start.split(':').map(Number);
      const [endHour, endMin] = end.split(':').map(Number);
  
      const startInMinutes = startHour * 60 + startMin;
      const endInMinutes = endHour * 60 + endMin;
      console.log(nowInMinutes, startInMinutes, endInMinutes);
  
      if (nowInMinutes >= startInMinutes && nowInMinutes <= endInMinutes) {
       classList.push(cls)
      }
    
    }
    return classList;
  };