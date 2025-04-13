import { facultyPhotos } from "./timeTableDict";
import { useEffect, useState } from "react"; 
import { Card } from "../ui/card";
import { H1 } from "../ui/h2Comp";
import { getTodayClasses } from "./getTodayClasses";

// Convert 24-hour time to 12-hour format
function convertTo12HourFormat(time24) { 
  const [start, end] = time24.split('to').map(str => str.trim());
  const [startHour, startMin] = start.split(':').map(Number);
  const [endHour, endMin] = end.split(':').map(Number);

  function convert(hours, minutes) {
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    const minuteFormatted = minutes.toString().padStart(2, '0');
    return `${hour12}:${minuteFormatted} ${period}`;
  }

  return `${convert(startHour, startMin)} to ${convert(endHour, endMin)}`;
}

export const TodayClasses = () => {
  const [todayClassList, setTodayClassList] = useState(getTodayClasses());

  useEffect(() => {
    const interval = setInterval(() => {
      setTodayClassList(getTodayClasses());
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-2 w-[100%] sm:w-[75vw]">
      <div className="">
        <Card className="flex-col flex   space-y-4 border ">
          <H1>Today's Schedule 📅</H1>
          {todayClassList && todayClassList.length > 0 ? (
            <div className="flex flex-col sm:flex-row overflow-x-auto">
              {todayClassList.map((cls ) => (
                <Card className="flex flex-shrink-0 justify-center mx-auto w-fit sm:flex-col flex-row  items-center  justify-center bg-themeColor">
                  <div className="">
                    <img
                    src={facultyPhotos[cls.faculty]}
                    alt={cls.faculty}
                    style={{ width: "auto", height: "70px" }}
                    className="rounded-2xl  object-cover shadow-lg mr-10 sm:mr-0"
                  />
                  </div>
                  
                  <div className="flex flex-col ml-2 text-left sm:text-center ">
                    <h3 className="text-lg font-bold dark:text-black">{cls.subject}</h3>
                    <h6 className="text-xs font-semibold dark:text-black">{cls.faculty}</h6>
                    <h6 className="text-xs font-semibold dark:text-black">{convertTo12HourFormat(cls.time)}</h6>
                  </div>
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
