import { CurrentClass } from "../components/timeTableComps/currentClass"
import { WeeklyTimeTable } from "../components/timeTableComps/weeklyTimeTable"
import { TodayClasses } from "../components/timeTableComps/todayTimetable";
import { MainComp } from "../layouts/mainComp";


export const TimeTable = () => {
    return (
      <div className="m-2 ">
       <MainComp className="">
          <CurrentClass />
          <TodayClasses />
          <WeeklyTimeTable />
       </MainComp>
        
      </div>
    );
  };
  