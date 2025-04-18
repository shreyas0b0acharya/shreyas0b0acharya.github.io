import { H3,H6 } from "../ui/h2Comp";
import { useEffect, useState } from "react";
// import { MainComp } from "../../layouts/mainComp";
import { Card } from "../ui/card";
import { facultyPhotos } from "./timeTableDict";

// import { H4, H5 } from "../components/ui/h2Comp";

// import { Divide } from "lucide-react";
import {H1} from "../ui/h2Comp";
import { getCurrentClass } from "./getTimeDateClass";

// function convertTo12HourFormat(time24) {
//   // Split the input time into hours and minutes
//   const [hour, minute] = time24.split(':').map(Number);
  
//   // Determine AM or PM suffix
//   const ampm = hour >= 12 ? 'PM' : 'AM';
  
//   // Convert hour from 24-hour format to 12-hour format
//   const hour12 = hour % 12 || 12; // Convert 0 to 12 for midnight
  
//   // Return the formatted time
//   return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
// }
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




// const currentClassList = getCurrentClass();
// const [ currentTime, day]= getCurrentTimeDay();

export const CurrentClass = () => {
  // const currentClassList = getCurrentClass(); // Example: returns array
  // const [currentTime, day] = getCurrentTimeDay();

  const [currentClassList, setCurrentClass] = useState(getCurrentClass());
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClass(getCurrentClass());
    }, 10000); // update every 10 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // const [currentTime, day] = currentTimeDay;

  return (
    <div className="mx-auto w-fit">
      {/* <H3>Time Table</H3>
      <H3>{currentTime} {day}</H3> */}
       
        
          <div className=""> 
            
            <Card className="flex flex-col space-y-5 dark:bg-themeColor bg-themeColor">
            <H1 className="dark:text-black">Now Happening...</H1>
            <div className="sm:flex  justify-center " >
              {currentClassList && currentClassList.length > 0 ? (
                currentClassList.map((currentClass, index) => (
                  <Card key={index} className=" flex items-center dark:bg-black bg-white">
                    <img
                      src={`${facultyPhotos[currentClass.faculty]}`}
                      alt={currentClass.faculty}
                      className="w-18 h-18 rounded-2xl m-2 object-cover shadow-lg"
                    />
                    <div className="m-2">
                      <H3 >{currentClass.subject}</H3>
                      <H6 className="text-sm text-gray-700">{currentClass.faculty}</H6>
                      <H6 className="text-sm text-gray-500">{convertTo12HourFormat(currentClass.time)}</H6>
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

