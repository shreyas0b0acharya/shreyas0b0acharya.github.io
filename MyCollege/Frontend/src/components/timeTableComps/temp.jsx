import { useEffect, useState } from "react"; 
import { Card } from "../ui/card";
import { H1 } from "../ui/h2Comp";
import { getTodayClasses } from "./getTodayClasses";

// Convert 24-hour time to 12-hour format
const convertTo12Hour = (time24) => {
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
};

export const TodayClasses = () => {
  const [todayClassList, setTodayClassList] = useState(getTodayClasses());

  useEffect(() => {
    const interval = setInterval(() => {
      setTodayClassList(getTodayClasses());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-fit">
      <div className="">
        <Card className="flex flex-col px-2 py-6  space-y-5 ">
          <H1>Today's Schedule 📅</H1>
          {todayClassList && todayClassList.length > 0 ? (
            <div className="flex flex-col sm:flex-row divide-x divide-gray-300 overflow-x-auto">
              {todayClassList.map((cls, index) => (
                <Card key={index} className="px-4 flex-shrink-0 text-center bg-themeColor">
                
                  <p className="text-lg font-semibold">{cls.subject}</p>
                  <p className="text-sm text-gray-700">{cls.faculty}</p>
                  <p className="text-sm text-gray-500">{convertTo12Hour(cls.time)}</p>
                </Card>
              ))}
            </div>
          ) : (
            <h3 className="text-center text-gray-500 py-4">
              No classes scheduled for today.
            </h3>
          )}
        </Card>
      </div>
    </div>
  );
};
