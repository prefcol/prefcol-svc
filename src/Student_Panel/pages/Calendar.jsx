// // // import { Link, useLocation } from "react-router-dom";
// // // import { Card } from "../components/ui/Card";
// // // import { Button } from "../components/ui/button";
// // // import { LogIn, Calendar as CalendarIcon, Users } from "lucide-react";
// // // import Header from "../components/Header";



// // // const Calendar = () => {
// // //   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
// // //   // November 2025 calendar data with attendance status
// // //   const calendarDays = [
// // //     { day: 1, status: null },
// // //     { day: 2, status: null },
// // //     { day: 3, status: null },
// // //     { day: 4, status: null },
// // //     { day: 5, status: null },
// // //     { day: 6, status: "holiday" },
// // //     { day: 7, status: "holiday" },
// // //     { day: 8, status: "holiday" },
// // //     { day: 9, status: null },
// // //     { day: 10, status: "holiday" },
// // //     { day: 11, status: null },
// // //     { day: 12, status: null },
// // //     { day: 13, status: null },
// // //     { day: 14, status: null },
// // //     { day: 15, status: "holiday" },
// // //     { day: 16, status: null },
// // //     { day: 17, status: null },
// // //     { day: 18, status: null },
// // //     { day: 19, status: null },
// // //     { day: 20, status: null },
// // //     { day: 21, status: null },
// // //     { day: 22, status: null },
// // //     { day: 23, status: null },
// // //     { day: 24, status: null },
// // //     { day: 25, status: null },
// // //     { day: 26, status: null },
// // //     { day: 27, status: null },
// // //     { day: 28, status: null },
// // //     { day: 29, status: null },
// // //     { day: 30, status: null },
// // //   ];

// // //   // Mark some days as present/absent for demonstration
// // //   const attendanceMap = {
// // //     31: "present",
// // //     1: "present",
// // //     2: "absent",
// // //     3: "present",
// // //     4: "present",
// // //     5: "present",
// // //   };

// // //   const getStatusClass = (status, day) => {
// // //     if (day && attendanceMap[day]) {
// // //       const attendanceStatus = attendanceMap[day];
// // //       if (attendanceStatus === "present") return "bg-present text-present-foreground";
// // //       if (attendanceStatus === "absent") return "bg-absent text-absent-foreground";
// // //     }
// // //     if (status === "holiday") return "bg-holiday text-holiday-foreground";
// // //     return "bg-card hover:bg-muted/50";
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-background">
// // //       <Header />
// // //       <main className="container mx-auto px-6 py-8">
// // //         <div className="mb-6">
// // //           <h1 className="text-3xl font-bold mb-2">Attendance Heatmap</h1>
// // //           <p className="text-muted-foreground">View your monthly attendance pattern</p>
// // //         </div>

// // //         <Card className="p-6 mb-6">
// // //           <div className="flex justify-between items-center mb-6">
// // //             <h2 className="text-xl font-semibold">November 2025</h2>
// // //             <div className="flex gap-4 text-sm">
// // //               <div className="flex items-center gap-2">
// // //                 <div className="w-4 h-4 rounded bg-present" />
// // //                 <span>Present</span>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <div className="w-4 h-4 rounded bg-absent" />
// // //                 <span>Absent</span>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <div className="w-4 h-4 rounded bg-holiday" />
// // //                 <span>Holiday</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-7 gap-3 mb-6">
// // //             {daysOfWeek.map((day) => (
// // //               <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
// // //                 {day}
// // //               </div>
// // //             ))}
// // //             {calendarDays.map((dayData, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`aspect-square flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${getStatusClass(
// // //                   dayData.status,
// // //                   dayData.day
// // //                 )}`}
// // //               >
// // //                 <span className="font-medium">{dayData.day}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-4">
// // //             <Card className="p-4 border-l-4 border-l-present">
// // //               <div className="text-3xl font-bold text-present-foreground mb-1">11</div>
// // //               <div className="text-sm text-muted-foreground">Present Days</div>
// // //             </Card>
// // //             <Card className="p-4 border-l-4 border-l-absent">
// // //               <div className="text-3xl font-bold text-absent-foreground mb-1">2</div>
// // //               <div className="text-sm text-muted-foreground">Absent Days</div>
// // //             </Card>
// // //             <Card className="p-4 border-l-4 border-l-holiday">
// // //               <div className="text-3xl font-bold text-holiday-foreground mb-1">5</div>
// // //               <div className="text-sm text-muted-foreground">Holidays</div>
// // //             </Card>
// // //           </div>
// // //         </Card>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Calendar;

// // import { Link, useLocation } from "react-router-dom";
// // import { Card } from "../components/ui/Card";
// // import { Button } from "../components/ui/button";
// // import { LogIn, Calendar as CalendarIcon, Users } from "lucide-react";
// // import Header from "../components/Header";

// // const Calendar = () => {
// //   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
// //   // November 2025 calendar data with attendance status
// //   const calendarDays = [
// //     { day: 1, status: null },
// //     { day: 2, status: null },
// //     { day: 3, status: null },
// //     { day: 4, status: null },
// //     { day: 5, status: null },
// //     { day: 6, status: "holiday" },
// //     { day: 7, status: "holiday" },
// //     { day: 8, status: "holiday" },
// //     { day: 9, status: null },
// //     { day: 10, status: "holiday" },
// //     { day: 11, status: null },
// //     { day: 12, status: null },
// //     { day: 13, status: null },
// //     { day: 14, status: null },
// //     { day: 15, status: "holiday" },
// //     { day: 16, status: null },
// //     { day: 17, status: null },
// //     { day: 18, status: null },
// //     { day: 19, status: null },
// //     { day: 20, status: null },
// //     { day: 21, status: null },
// //     { day: 22, status: null },
// //     { day: 23, status: null },
// //     { day: 24, status: null },
// //     { day: 25, status: null },
// //     { day: 26, status: null },
// //     { day: 27, status: null },
// //     { day: 28, status: null },
// //     { day: 29, status: null },
// //     { day: 30, status: null },
// //   ];

// //   // Mark some days as present/absent for demonstration
// //   const attendanceMap = {
// //     31: "present",
// //     1: "present",
// //     2: "absent",
// //     3: "present",
// //     4: "present",
// //     5: "present",
// //   };

// //   const getStatusClass = (status, day) => {
// //     if (day && attendanceMap[day]) {
// //       const attendanceStatus = attendanceMap[day];
// //       if (attendanceStatus === "present") return "bg-present text-present-foreground border border-present-foreground";
// //       if (attendanceStatus === "absent") return "bg-absent text-absent-foreground border border-absent-foreground";
// //     }
// //     if (status === "holiday") return "bg-holiday text-holiday-foreground border border-holiday-foreground";
// //     return "bg-card hover:bg-muted/50 border border-input";
// //   };

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <Header />
// //       <main className="container mx-auto px-6 py-8">
// //         <div className="mb-6">
// //           <h1 className="text-3xl font-bold mb-2">Attendance Heatmap</h1>
// //           <p className="text-muted-foreground">View your monthly attendance pattern</p>
// //         </div>

// //         <Card className="p-6 mb-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-xl font-semibold">November 2025</h2>
// //             <div className="flex gap-4 text-sm">
// //               <div className="flex items-center gap-2">
// //                 <div className="w-4 h-4 rounded bg-present border border-present-foreground" />
// //                 <span>Present</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="w-4 h-4 rounded bg-absent border border-absent-foreground" />
// //                 <span>Absent</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="w-4 h-4 rounded bg-holiday border border-holiday-foreground" />
// //                 <span>Holiday</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-7 gap-3 mb-6">
// //             {daysOfWeek.map((day) => (
// //               <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
// //                 {day}
// //               </div>
// //             ))}
// //             {calendarDays.map((dayData, index) => (
// //               <div
// //                 key={index}
// //                 className={`aspect-square flex items-center justify-center rounded-lg transition-colors cursor-pointer ${getStatusClass(
// //                   dayData.status,
// //                   dayData.day
// //                 )}`}
// //               >
// //                 <span className="font-medium">{dayData.day}</span>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-4">
// //             <Card className="p-4 border-l-4 border-l-present">
// //               <div className="text-3xl font-bold text-present-foreground mb-1">11</div>
// //               <div className="text-sm text-muted-foreground">Present Days</div>
// //             </Card>
// //             <Card className="p-4 border-l-4 border-l-absent">
// //               <div className="text-3xl font-bold text-absent-foreground mb-1">2</div>
// //               <div className="text-sm text-muted-foreground">Absent Days</div>
// //             </Card>
// //             <Card className="p-4 border-l-4 border-l-holiday">
// //               <div className="text-3xl font-bold text-holiday-foreground mb-1">5</div>
// //               <div className="text-sm text-muted-foreground">Holidays</div>
// //             </Card>
// //           </div>
// //         </Card>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Calendar;

// import { Link, useLocation } from "react-router-dom";
// import { Card } from "../components/ui/Card";
// import { Button } from "../components/ui/button";
// import { LogIn, Calendar as CalendarIcon, Users } from "lucide-react";
// import Header from "../components/Header";

// const Calendar = () => {
//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
//   // November 2025 calendar data with attendance status
//   const calendarDays = [
//     { day: 1, status: null },
//     { day: 2, status: null },
//     { day: 3, status: null },
//     { day: 4, status: null },
//     { day: 5, status: null },
//     { day: 6, status: "holiday" },
//     { day: 7, status: "holiday" },
//     { day: 8, status: "holiday" },
//     { day: 9, status: null },
//     { day: 10, status: "holiday" },
//     { day: 11, status: null },
//     { day: 12, status: null },
//     { day: 13, status: null },
//     { day: 14, status: null },
//     { day: 15, status: "holiday" },
//     { day: 16, status: null },
//     { day: 17, status: null },
//     { day: 18, status: null },
//     { day: 19, status: null },
//     { day: 20, status: null },
//     { day: 21, status: null },
//     { day: 22, status: null },
//     { day: 23, status: null },
//     { day: 24, status: null },
//     { day: 25, status: null },
//     { day: 26, status: null },
//     { day: 27, status: null },
//     { day: 28, status: null },
//     { day: 29, status: null },
//     { day: 30, status: null },
//   ];

//   // Mark some days as present/absent for demonstration
//   const attendanceMap = {
//     31: "present",
//     1: "present",
//     2: "absent",
//     3: "present",
//     4: "present",
//     5: "present",
//   };

//   // Define the exact colors from your image
//   const COLORS = {
//     present: {
//       background: '#E8F5E9', // Light green background
//       border: '#2E7D32',     // Darker green border
//       text: '#2E7D32'        // Darker green text
//     },
//     absent: {
//       background: '#FFEBEE', // Light pink/red background
//       border: '#C62828',     // Darker pink/red border
//       text: '#C62828'        // Darker pink/red text
//     },
//     holiday: {
//       background: '#FFF8E1', // Light yellow background
//       border: '#FF8F00',     // Darker yellow/orange border
//       text: '#FF8F00'        // Darker yellow/orange text
//     },
//     default: {
//       background: 'white',   // Default background (white)
//       border: '#E5E7EB',     // Light gray border
//       text: '#111827'        // Dark gray text
//     }
//   };

//   const getStatusStyle = (status, day) => {
//     if (day && attendanceMap[day]) {
//       const attendanceStatus = attendanceMap[day];
//       if (attendanceStatus === "present") return COLORS.present;
//       if (attendanceStatus === "absent") return COLORS.absent;
//     }
//     if (status === "holiday") return COLORS.holiday;
//     return COLORS.default;
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-6 py-8">
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold mb-2">Attendance Heatmap</h1>
//           <p className="text-muted-foreground">View your monthly attendance pattern</p>
//         </div>

//         <Card className="p-6 mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold">November 2025</h2>
//             <div className="flex gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div 
//                   className="w-4 h-4 rounded" 
//                   style={{ 
//                     backgroundColor: COLORS.present.background,
//                     borderColor: COLORS.present.border,
//                     borderWidth: '1px',
//                     borderStyle: 'solid'
//                   }} 
//                 />
//                 <span>Present</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div 
//                   className="w-4 h-4 rounded" 
//                   style={{ 
//                     backgroundColor: COLORS.absent.background,
//                     borderColor: COLORS.absent.border,
//                     borderWidth: '1px',
//                     borderStyle: 'solid'
//                   }} 
//                 />
//                 <span>Absent</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div 
//                   className="w-4 h-4 rounded" 
//                   style={{ 
//                     backgroundColor: COLORS.holiday.background,
//                     borderColor: COLORS.holiday.border,
//                     borderWidth: '1px',
//                     borderStyle: 'solid'
//                   }} 
//                 />
//                 <span>Holiday</span>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-7 gap-3 mb-6">
//             {daysOfWeek.map((day) => (
//               <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
//                 {day}
//               </div>
//             ))}
//             {calendarDays.map((dayData, index) => {
//               const style = getStatusStyle(dayData.status, dayData.day);
              
//               return (
//                 <div
//                   key={index}
//                   className={`aspect-square flex items-center justify-center rounded-lg transition-colors cursor-pointer`}
//                   style={{
//                     backgroundColor: style.background,
//                     borderColor: style.border,
//                     borderWidth: '1px',
//                     borderStyle: 'solid',
//                     color: style.text
//                   }}
//                 >
//                   <span className="font-medium">{dayData.day}</span>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="grid md:grid-cols-3 gap-4">
//             <Card 
//               className="p-4"
//               style={{
//                 borderLeftWidth: '4px',
//                 borderLeftColor: COLORS.present.border,
//                 borderLeftStyle: 'solid'
//               }}
//             >
//               <div className="text-3xl font-bold" style={{ color: COLORS.present.text }}>11</div>
//               <div className="text-sm text-muted-foreground">Present Days</div>
//             </Card>
//             <Card 
//               className="p-4"
//               style={{
//                 borderLeftWidth: '4px',
//                 borderLeftColor: COLORS.absent.border,
//                 borderLeftStyle: 'solid'
//               }}
//             >
//               <div className="text-3xl font-bold" style={{ color: COLORS.absent.text }}>2</div>
//               <div className="text-sm text-muted-foreground">Absent Days</div>
//             </Card>
//             <Card 
//               className="p-4"
//               style={{
//                 borderLeftWidth: '4px',
//                 borderLeftColor: COLORS.holiday.border,
//                 borderLeftStyle: 'solid'
//               }}
//             >
//               <div className="text-3xl font-bold" style={{ color: COLORS.holiday.text }}>5</div>
//               <div className="text-sm text-muted-foreground">Holidays</div>
//             </Card>
//           </div>
//         </Card>
//       </main>
//     </div>
//   );
// };

// export default Calendar;

import { useState, useMemo } from "react";
import { Card } from "../components/ui/Card";
import Header from "../components/Header";

// Exact colors from your design
const COLORS = {
  present: { bg: "#E8F5E9", border: "#2E7D32", text: "#2E7D32" },
  absent: { bg: "#FFEBEE", border: "#C62828", text: "#C62828" },
  holiday: { bg: "#FFF8E1", border: "#FF8F00", text: "#FF8F00" },
  default: { bg: "white", border: "#E5E7EB", text: "#111827" },
};

// Mock attendance data by date (YYYY-MM-DD)
const mockAttendanceData = {
  "2025-11-01": "present",
  "2025-11-02": "absent",
  "2025-11-03": "present",
  "2025-11-04": "present",
  "2025-11-05": "present",
  // Add more as needed
};

// Mock holidays (you can also use a holiday API or config)
const holidays = {
  "2025-11-06": true,
  "2025-11-07": true,
  "2025-11-08": true,
  "2025-11-10": true,
  "2025-11-15": true,
  // Add more as needed
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // Nov 2025 (month is 0-indexed)

  // Format month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Generate calendar days for the current month
  const { year, month, calendarDays } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed

    // First day of the month & days in month
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday

    // Days from previous month to fill the grid
    const prevMonthDays = new Date(year, month, 0).getDate();
    const days = [];

    // Previous month's trailing days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      days.push({ day, month: month - 1, year, isCurrentMonth: false });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, month, year, isCurrentMonth: true });
    }

    // Next month's leading days (to fill 6 rows = 42 days max)
    const totalCells = 42; // 6 rows x 7 days
    const remainingCells = totalCells - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({ day, month: month + 1, year, isCurrentMonth: false });
    }

    return { year, month, calendarDays: days };
  }, [currentDate]);

  // Get attendance status for a given date
  const getAttendanceStatus = (dayInfo) => {
    if (!dayInfo.isCurrentMonth) return null;

    const dateKey = `${dayInfo.year}-${String(dayInfo.month + 1).padStart(2, '0')}-${String(dayInfo.day).padStart(2, '0')}`;
    
    if (holidays[dateKey]) return "holiday";
    return mockAttendanceData[dateKey] || null;
  };

  const getStatusStyle = (status) => {
    if (status === "present") return COLORS.present;
    if (status === "absent") return COLORS.absent;
    if (status === "holiday") return COLORS.holiday;
    return COLORS.default;
  };

  // Compute stats for current month only
  const stats = useMemo(() => {
    let present = 0, absent = 0, holiday = 0;
    calendarDays.forEach(day => {
      if (!day.isCurrentMonth) return;
      const status = getAttendanceStatus(day);
      if (status === "present") present++;
      else if (status === "absent") absent++;
      else if (status === "holiday") holiday++;
    });
    return { present, absent, holiday };
  }, [calendarDays]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Attendance Heatmap</h1>
          <p className="text-muted-foreground">View your monthly attendance pattern</p>
        </div>

        <Card className="p-6 mb-6">
          {/* Use column layout on mobile, row on md+ so legend moves below month on small screens */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div className="flex items-center gap-4 mb-3 md:mb-0">
              <button
                onClick={goToPreviousMonth}
                className="px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                aria-label="Previous month"
              >
                ←
              </button>
              <h2 className="text-xl font-semibold">
                {monthNames[month]} {year}
              </h2>
              <button
                onClick={goToNextMonth}
                className="px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                aria-label="Next month"
              >
                →
              </button>
            </div>

            {/* Legend: center on mobile, align to end on md+ */}
            <div className="flex gap-4 text-sm flex-wrap justify-center md:justify-end">
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: COLORS.present.bg, borderColor: COLORS.present.border, borderWidth: 1 }}
                />
                <span>Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: COLORS.absent.bg, borderColor: COLORS.absent.border, borderWidth: 1 }}
                />
                <span>Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: COLORS.holiday.bg, borderColor: COLORS.holiday.border, borderWidth: 1 }}
                />
                <span>Holiday</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3 mb-6">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            {calendarDays.map((dayInfo, index) => {
              const status = getAttendanceStatus(dayInfo);
              const style = getStatusStyle(status);
              const isDisabled = !dayInfo.isCurrentMonth;

              return (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                    isDisabled ? "opacity-30" : ""
                  }`}
                  style={{
                    backgroundColor: style.bg,
                    borderColor: style.border,
                    borderWidth: 1,
                    borderStyle: "solid",
                    color: isDisabled ? "#9CA3AF" : style.text,
                  }}
                >
                  <span className="font-medium">{dayInfo.day}</span>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4" style={{ borderLeft: `4px solid ${COLORS.present.border}` }}>
              <div className="text-3xl font-bold" style={{ color: COLORS.present.text }}>{stats.present}</div>
              <div className="text-sm text-muted-foreground">Present Days</div>
            </Card>
            <Card className="p-4" style={{ borderLeft: `4px solid ${COLORS.absent.border}` }}>
              <div className="text-3xl font-bold" style={{ color: COLORS.absent.text }}>{stats.absent}</div>
              <div className="text-sm text-muted-foreground">Absent Days</div>
            </Card>
            <Card className="p-4" style={{ borderLeft: `4px solid ${COLORS.holiday.border}` }}>
              <div className="text-3xl font-bold" style={{ color: COLORS.holiday.text }}>{stats.holiday}</div>
              <div className="text-sm text-muted-foreground">Holidays</div>
            </Card>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Calendar;