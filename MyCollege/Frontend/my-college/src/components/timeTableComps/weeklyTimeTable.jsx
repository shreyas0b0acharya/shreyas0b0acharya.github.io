import { Card } from "../ui/card";
import { H1 } from "../ui/h2Comp";

const timeSlots = [
  "09:00 to 10:00",
  "10:00 to 11:00",
  "11:00 to 11:15",
  "11:15 to 12:15",
  "12:15 to 13:15",
  "13:15 to 14:30",
  "14:30 to 16:30"
];

const timetable = {
  "09:00 to 10:00": {
    Monday: "DBMS",
    Tuesday: "MC",
    Wednesday: "DMS",
    Thursday: "ADA Lab B2",
    Friday: "ADA"
  },
  "10:00 to 11:00": {
    Monday: "ADA",
    Tuesday: "DMS",
    Wednesday: "MC",
    Thursday: "-",
    Friday: "DMS TUTORIAL"
  },
  "11:00 to 11:15": {
    Monday: "Tea Break",
    Tuesday: "Tea Break",
    Wednesday: "Tea Break",
    Thursday: "Tea Break",
    Friday: "Tea Break"
  },
  "11:15 to 12:15": {
    Monday: "UI/UX",
    Tuesday: "MC Lab B2 / ADA Lab B3",
    Wednesday: "ADA",
    Thursday: "ADA Lab B1 / MC Lab B3",
    Friday: "DBMS"
  },
  "12:15 to 13:15": {
    Monday: "DMS TUTORIAL",
    Tuesday: "-",
    Wednesday: "DBMS",
    Thursday: "-",
    Friday: "MC"
  },
  "13:15 to 14:30": {
    Monday: "Lunch Break",
    Tuesday: "Lunch Break",
    Wednesday: "Lunch Break",
    Thursday: "Lunch Break",
    Friday: "Lunch Break"
  },
  "14:30 to 16:30": {
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
          <table className="table-auto border-collapse w-full  text-center text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border  p-2 bg-themeColor">Day</th>
                {timeSlots.map((slot) => (
                  <th key={slot} className="border p-2  bg-themeColor whitespace-nowrap">
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(timetable[timeSlots[0]]).map((day) => (
                <tr key={day}>
                  <td className="border  p-2 font-semibold  bg-themeColor">{day}</td>
                  {timeSlots.map((slot) => (
                    <td key={`${day}-${slot}`} className=" border-themeColor border p-2 dark:text-white">
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
