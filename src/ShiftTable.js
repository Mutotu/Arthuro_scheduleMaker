// import React, { useState } from 'react';
// import { employees } from './data';

// function ShiftTable() {
//   const currentDate = new Date();
//   const numDays = 7;
//   const dates = [...Array(numDays)].map((_, index) => {
//     const date = new Date();
//     date.setDate(currentDate.getDate() + index);
//     return date;
//   });

//   const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const shifts = ['0600-1400', '1400-2200', '2200-0600'];
//   const initialShiftData = shifts.map(() => Array(numDays).fill(''));
//   const [shiftData, setShiftData] = useState(initialShiftData);
//   const [scheduleGenerated, setScheduleGenerated] = useState(false);

//   const addNewShift = (shiftIndex, dayIndex, newData) => {
//     const updatedShiftData = [...shiftData];
//     updatedShiftData[shiftIndex][dayIndex] = newData;
//     setShiftData(updatedShiftData);
//     console.log(shiftData)
//   };

//   const generateSchedule = () => {
//     const newShiftData = [...shiftData];

//     data.employees
//       .filter((employee) => Object.keys(employee.availability).length === 7) // Filter employees with 5 shifts
//       .forEach((employee) => {
//         shifts.forEach((shift, shiftIndex) => {
//           dates.forEach((date, dayIndex) => {
//             newShiftData[shiftIndex][dayIndex] = employee.name;
//           });
//         });
//       });

//     setShiftData(newShiftData);
//     setScheduleGenerated(true);
//   };

//   return (
//     <div>
//       <table className="shift-table">
//         <thead>
//           <tr>
//             <th></th>
//             {dates.map((date, index) => (
//               <th key={index}>
//                 {weekdays[date.getDay()]}<br />
//                 {date.toLocaleDateString()}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {shifts.map((shift, shiftIndex) => (
//             <tr key={shiftIndex}>
//               <td>{shift}</td>
//               {dates.map((date, dayIndex) => (
//                 <td key={dayIndex}>
//                   <input
//                     type="text"
//                     value={shiftData[shiftIndex][dayIndex]}
//                     onChange={(e) => addNewShift(shiftIndex, dayIndex, e.target.value)}
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={generateSchedule}>Generate schedule</button>
//       {scheduleGenerated && <p>Schedule generated.</p>}
//     </div>
//   );
// }

// // export default ShiftTable;
