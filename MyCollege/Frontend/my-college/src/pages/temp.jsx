// import React from 'react';
// import { Card, CardContent } from '../components/ui/card';

// const timeTable = {
//   Monday: [
//     { time: '9:00 to 10:00', subject: 'DBMS', faculty: 'Prof Shruthi M K' },
//     { time: '10:00 to 11:00', subject: 'ADA', faculty: 'Prof Basantha Kumari' },
//     { time: '11:15 to 12:15', subject: 'UI/UX', faculty: 'Prof Pavithra N' },
//     { time: '12:15 to 1:15', subject: 'DMS TUTORIAL', faculty: 'Prof Thansheera B R' },
//     { time: '2:30 to 3:30', subject: 'NSS/PE/YOGA', faculty: 'Dr Kumarswamy K/Ambika' },
//     { time: '3:30 to 4:30', subject: 'DBMS Lab B3', faculty: 'Prof Shruthi M K' }
//   ],
//   Tuesday: [
//     { time: '9:00 to 10:00', subject: 'MC', faculty: 'Prof Kumarswamy H' },
//     { time: '10:00 to 11:00', subject: 'DMS', faculty: 'Prof Thansheera B R' },
//     { time: '11:15 to 1:15', subject: 'MC Lab B2 + ADA Lab B3', faculty: 'Prof Kumarswamy H, Prof Basantha Kumari' }
//   ],
//   Wednesday: [
//     { time: '9:00 to 10:00', subject: 'DMS', faculty: 'Prof Thansheera B R' },
//     { time: '10:00 to 11:00', subject: 'MC', faculty: 'Prof Kumarswamy H' },
//     { time: '11:15 to 12:15', subject: 'ADA', faculty: 'Prof Basantha Kumari' },
//     { time: '12:15 to 1:15', subject: 'DBMS', faculty: 'Prof Shruthi M K' }
//   ],
//   Thursday: [
//     { time: '9:00 to 11:00', subject: 'ADA Lab B2', faculty: 'Prof Basantha Kumari' },
//     { time: '11:15 to 1:15', subject: 'MC Lab B3 + ADA Lab B1', faculty: 'Prof Kumarswamy H, Prof Basantha Kumari' }
//   ],
//   Friday: [
//     { time: '9:00 to 10:00', subject: 'ADA', faculty: 'Prof Basantha Kumari' },
//     { time: '10:00 to 11:00', subject: 'DMS TUTORIAL', faculty: 'Prof Thansheera B R' },
//     { time: '11:15 to 12:15', subject: 'DBMS', faculty: 'Prof Shruthi M K' },
//     { time: '12:15 to 1:15', subject: 'MC', faculty: 'Prof Kumarswamy H' },
//     { time: '3:30 to 4:30', subject: 'MC Lab B1 + DBMS Lab B2', faculty: 'Prof Kumarswamy H, Prof Shruthi M K' }
//   ]
// };

// const facultyPhotos = {
//   'Prof Basantha Kumari': '/images/basantha.jpg',
//   'Prof Shruthi M K': '/images/shruthi.jpg',
//   'Prof Kumarswamy H': '/images/kumarswamy.jpg',
//   'Prof Pavithra N': '/images/pavithra.jpg',
//   'Prof Thansheera B R': '/images/thansheera.jpg',
//   'Dr Kumarswamy K/Ambika': '/images/nss.jpg'
// };

// const getCurrentClass = () => {
//   const now = new Date();
//   const day = now.toLocaleString('en-US', { weekday: 'long' });
//   const hour = now.getHours();
//   const minute = now.getMinutes();
// //   const currentTime = `${hour}:${minute < 10 ? '0' + minute : minute}`;

//   const daySchedule = timeTable[day];
//   if (!daySchedule) return null;

//   for (const cls of daySchedule) {
//     const [start, end] = cls.time.split(' to ').map(t => {
//       const [h, m] = t.split(':').map(Number);
//       return h + (m || 0) / 60;
//     });
//     const nowHour = hour + minute / 60;
//     if (nowHour >= start && nowHour <= end) return cls;
//   }
//   return null;
// };

// export const TimeTable = () => {
//   const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
//   const currentClass = getCurrentClass();

//   return (
//     <div className="p-4 space-y-6">
//       {/* Current Class Section */}
//       <Card className="">
//         <CardContent className="p-4">
//           <h2 className="text-xl font-semibold mb-2">Currently Ongoing Class</h2>
//           {currentClass ? (
//             <div className="flex items-center gap-4">
//               <img
//                 src={facultyPhotos[currentClass.faculty] || '/images/default.jpg'}
//                 alt={currentClass.faculty}
//                 className="w-16 h-16 rounded-full"
//               />
//               <div>
//                 <p className="text-lg font-medium">{currentClass.subject}</p>
//                 <p className="text-sm text-gray-700">{currentClass.faculty}</p>
//                 <p className="text-sm text-gray-500">{currentClass.time}</p>
//               </div>
//             </div>
//           ) : (
//             <p>No class at the moment.</p>
//           )}
//         </CardContent>
//       </Card>

//       {/* Today's Classes Section */}
//       <Card>
//         <CardContent className="p-4">
//           <h2 className="text-xl font-semibold mb-2">Today's Classes</h2>
//           <ul className="space-y-2">
//             {timeTable[currentDay]?.map((cls, idx) => (
//               <li key={idx} className="flex items-start gap-4">
//                 <img
//                   src={facultyPhotos[cls.faculty] || '/images/default.jpg'}
//                   alt={cls.faculty}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <p className="font-medium">{cls.subject} ({cls.time})</p>
//                   <p className="text-sm text-gray-600">{cls.faculty}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Full Timetable Section */}
//       <Card>
//         <CardContent className="p-4">
//           <h2 className="text-xl font-semibold mb-4">Full Week Timetable</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm text-left">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2">Day</th>
//                   <th className="px-4 py-2">Time</th>
//                   <th className="px-4 py-2">Subject</th>
//                   <th className="px-4 py-2">Faculty</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(timeTable).map(([day, classes]) => (
//                   classes.map((cls, idx) => (
//                     <tr key={`${day}-${idx}`} className="border-t">
//                       {idx === 0 && (
//                         <td rowSpan={classes.length} className="px-4 py-2 font-semibold align-top">{day}</td>
//                       )}
//                       <td className="px-4 py-2">{cls.time}</td>
//                       <td className="px-4 py-2">{cls.subject}</td>
//                       <td className="px-4 py-2">{cls.faculty}</td>
//                     </tr>
//                   ))
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };


// <div class="flex items-center h-screen">
// <div  className="max-w-[350px]
//                 mx-auto
//                 font-sans
//                 flex flex-col items-center
//                 bg-gray-100 dark:bg-grey
//                 rounded-lg
//                 p-8
//                 shadow-lg
//                 border
//                 border-gray-300 dark:border-gray-700
//                 ">
//     <h1 className="text-2xl font-bold mb-3 dark:text-white ">Sign Up</h1>
//     <form >
//         <FormComp legend="First Name" type="text" placeholder="Enter the First Name"/>
//         <FormComp legend="Last Name" type="text" placeholder="Enter the Last Name"/>
//         <FormComp legend="Email" type="email" placeholder="example@email.com"/>
        
//     </form>
//     <Button type="button" >Submit</Button>
// </div>
// </div>