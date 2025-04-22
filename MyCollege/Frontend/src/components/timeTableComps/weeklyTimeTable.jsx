// Importing reusable UI components
import { Card } from "../ui/card";
import { H1 } from "../ui/h2Comp";

const timeSlots = [
  "09:00 AM to 10:00 AM",
  "10:00 AM to 11:00 AM",
  "11:00 AM to 11:15 AM",
  "11:15 AM to 12:15 PM",
  "12:15 PM to 01:15 PM",
  "01:15 PM to 02:30 PM",
  "02:30 PM to 04:30 PM"
];

const timetable = {
  "09:00 AM to 10:00 AM": {
    Monday: "DBMS",
    Tuesday: "MC",
    Wednesday: "DMS",
    Thursday: "ADA Lab B2",
    Friday: "ADA"
  },
  "10:00 AM to 11:00 AM": {
    Monday: "ADA",
    Tuesday: "DMS",
    Wednesday: "MC",
    Thursday: "-",
    Friday: "DMS TUTORIAL"
  },
  "11:00 AM to 11:15 AM": {
    Monday: "Tea Break",
    Tuesday: "Tea Break",
    Wednesday: "Tea Break",
    Thursday: "Tea Break",
    Friday: "Tea Break"
  },
  "11:15 AM to 12:15 PM": {
    Monday: "UI/UX",
    Tuesday: "MC Lab B2 / ADA Lab B3",
    Wednesday: "ADA",
    Thursday: "ADA Lab B1 / MC Lab B3",
    Friday: "DBMS"
  },
  "12:15 PM to 01:15 PM": {
    Monday: "DMS TUTORIAL",
    Tuesday: "-",
    Wednesday: "DBMS",
    Thursday: "-",
    Friday: "MC"
  },
  "01:15 PM to 02:30 PM": {
    Monday: "Lunch Break",
    Tuesday: "Lunch Break",
    Wednesday: "Lunch Break",
    Thursday: "Lunch Break",
    Friday: "Lunch Break"
  },
  "02:30 PM to 04:30 PM": {
    Monday: "YOGA",
    Tuesday: "DBMS Lab B3",
    Wednesday: "DBMS Lab B1",
    Thursday: "Bio",
    Friday: "MC Lab B1 / DBMS Lab B2"
  }
};

export const WeeklyTimeTable = () => {
  return (
    <div className="m-2 w-full sm:w-[75vw] overflow-x-auto">
      <Card className="border p-4 min-w-[700px] sm:min-w-0">
        <H1>Weekly Time Table 📚</H1>

        <div className="overflow-x-auto mt-4">
          <table className="table-auto border-collapse w-full text-center text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border p-2 bg-themeColor">Day</th>
                {timeSlots.map((slot) => (
                  <th key={slot} className="border p-2 bg-themeColor whitespace-nowrap">
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Loop over the days */}
              {Object.keys(timetable[timeSlots[0]]).map((day) => (
                <tr key={day}>
                  <td className="border p-2 font-semibold bg-themeColor">{day}</td>

                  {/* For each day, loop through the time slots */}
                  {timeSlots.map((slot) => (
                    <td key={`${day}-${slot}`} className="border-themeColor border p-2 dark:text-white">
                      {timetable[slot][day] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
