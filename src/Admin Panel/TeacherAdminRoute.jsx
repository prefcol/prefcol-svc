// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TeacherVideoManagement from './TeacherAdmin/TeacherTabs/VideoManagement/Videomanagement';
// import TeacherAdminHome from './TeacherAdmin/TeacherAdminHome';


// function TeacherAdminRoute() {
//   return (
//     <Router>
//       <Routes>
//         {/* Dashboard */}
//         <Route path="/dashboard" element={<TeacherAdminHome />} />

//         {/* Teacher Portal */}
//         <Route path="/teacher/login" element={<TeacherLogin />} />
//         <Route path="/teacher/schedule" element={<PersonalSchedule />} />
//         <Route path="/teacher/availability" element={<Availability />} />

//         {/* Attendance Management */}
//         <Route path="/attendance/mark" element={<MarkAttendance />} />
//         <Route path="/attendance/reports" element={<AttendanceReports />} />

//         {/* Video Management */}
//         <Route path="/videos/upload" element={<TeacherVideoManagement />} />
//         <Route path="/videos/manage" element={<ManageVideos />} />
//         <Route path="/videos/organization" element={<CourseMaterial />} />

//         {/* Student Portal */}
//         <Route path="/student/login" element={<StudentLogin />} />
//         <Route path="/student/courses" element={<EnrolledCourses />} />
//         <Route path="/student/schedule" element={<StudentSchedule />} />

//         {/* Performance Tracking */}
//         <Route path="/performance/attendance" element={<AttendanceRecords />} />
//         <Route path="/performance/grades" element={<GradesReports />} />
//         <Route path="/performance/feedback" element={<Feedback />} />

//         {/* Logout */}
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//     </Router>
//   );
// }

// export default TeacherAdminRoute;



// import { Routes, Route, Navigate } from 'react-router-dom';
// import TeacherVideoManagement from './TeacherAdmin/TeacherTabs/VideoManagement/Videomanagement';
// import TeacherAdminHome from './TeacherAdmin/TeacherAdminHome';

// function TeacherAdminRoute() {
//   return (
//     <Routes>
//       {/* Default Redirect */}
//       <Route path="/" element={<Navigate to="/teacher-admin/home" replace />} />

//       {/* Dashboard */}
//       <Route path="/home" element={<TeacherAdminHome />} />

//       {/* Teacher Portal */}
//       <Route path="/teacher-admin/login" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/schedule" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/availability" element={<h1>Update User Information</h1>} />

//       {/* Attendance Management */}
//       <Route path="/teacher-admin/attendance/mark" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/attendance/reports" element={<h1>Update User Information</h1>} />

//       {/* Video Management */}
//       <Route path="/teacher-admin/videos/upload" element={<TeacherVideoManagement/>} />
//       <Route path="/teacher-admin/videos/manage" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/videos/organization" element={<h1>Update User Information</h1>} />

//       {/* Student Portal */}
//       <Route path="/teacher-admin/student/login" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/student/courses" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/student/schedule" element={<h1>Update User Information</h1>} />

//       {/* Performance Tracking */}
//       <Route path="/teacher-admin/performance/attendance" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/performance/grades" element={<h1>Update User Information</h1>} />
//       <Route path="/teacher-admin/performance/feedback" element={<h1>Update User Information</h1>} />

//       {/* Logout */}
//       <Route path="/teacher-admin/logout" element={<h1>Update User Information</h1>} />
//     </Routes>
//   );
// }

// export default TeacherAdminRoute;





import { Routes, Route, Navigate } from 'react-router-dom';
import TeacherAdminHome from './TeacherAdmin/TeacherAdminHome';
// import TeacherVideoManagement from './TeacherAdmin/TeacherTabs/VideoManagement/Videomanagement';
import TeacherVideoPortal from './TeacherAdmin/TeacherTabs/VideoManagement/teacher-video-portal';

function TeacherAdminRoute() {
  return (
    <Routes>
      {/* Redirect '/teacher-admin/' to '/teacher-admin/home' */}
      <Route path="/" element={<Navigate to="home" replace />} />

      {/* Home Route */}
      <Route path="home" element={<TeacherVideoPortal />} />

      {/* Teacher Portal */}
      <Route path="login" element={<h1>Update User Information</h1>} />
      <Route path="schedule" element={<h1>Update User Information</h1>} />
      <Route path="availability" element={<h1>Update User Information</h1>} />

      {/* Attendance Management */}
      <Route path="attendance/mark" element={<h1>Update User Information</h1>} />
      <Route path="attendance/reports" element={<h1>Update User Information</h1>} />

      {/* Video Management */}
      <Route path="videos/upload" element={<h1>Update User Information</h1>} />
      <Route path="videos/manage" element={<h1>Update User Information</h1>} />
      <Route path="videos/organization" element={<h1>Update User Information</h1>} />

      {/* Student Portal */}
      <Route path="student/login" element={<h1>Update User Information</h1>} />
      <Route path="student/courses" element={<h1>Update User Information</h1>} />
      <Route path="student/schedule" element={<h1>Update User Information</h1>} />

      {/* Performance Tracking */}
      <Route path="performance/attendance" element={<h1>Update User Information</h1>} />
      <Route path="performance/grades" element={<h1>Update User Information</h1>} />
      <Route path="performance/feedback" element={<h1>Update User Information</h1>} />

      {/* Logout */}
      <Route path="logout" element={<h1>Update User Information</h1>} />
    </Routes>
  );
}

export default TeacherAdminRoute;
