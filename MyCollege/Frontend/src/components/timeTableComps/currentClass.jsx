import { H1, H3, H6 } from "../ui/h2Comp";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { facultyPhotos } from "./timeTableDict";

// Import function to get current class info
import { getCurrentClass } from "./getTimeDateClass";

// Converts time form 24-hour format to 12-hour format
function convertTo12HourFormat(time24) {
  const [start, end] = time24.split('to').map(str => str.trim());
  const [startHour, startMin] = start.split(':').map(Number);
  const [endHour, endMin] = end.split(':').map(Number);

  function convert(hours, minutes) {
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12; // Convert 0 to 12
    const minuteFormatted = minutes.toString().padStart(2, '0');
    return `${hour12}:${minuteFormatted} ${period}`;
  }

  return `${convert(startHour, startMin)} to ${convert(endHour, endMin)}`;
}

// component to display the currently ongoing class
export const CurrentClass = () => {
  const [currentClassList, setCurrentClass] = useState(getCurrentClass());

  // update the current class every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClass(getCurrentClass());
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-fit">
      <div>
        <Card className="flex flex-col space-y-5 dark:bg-themeColor bg-themeColor">
          <H1 className="dark:text-black">Now Happening...</H1>
          <div className="sm:flex justify-center">
            {currentClassList && currentClassList.length > 0 ? (
              currentClassList.map((currentClass, index) => (
                <Card
                  key={index}
                  className="flex items-center dark:bg-black bg-white"
                >
                  <img
                    src={facultyPhotos[currentClass.faculty]}
                    alt={currentClass.faculty}
                    className="w-18 h-18 rounded-2xl m-2 object-cover shadow-lg"
                  />
                  <div className="m-2">
                    <H3>{currentClass.subject}</H3>
                    <H6 className="text-sm text-gray-700">
                      {currentClass.faculty}
                    </H6>
                    <H6 className="text-sm text-gray-500">
                      {convertTo12HourFormat(currentClass.time)}
                    </H6>
                  </div>
                </Card>
              ))
            ) : (
              <h3>No class is in session right now</h3>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
