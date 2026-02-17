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
import TeacherAdminLayout from './TeacherAdmin/TeacherAdminLayout';
import TeacherAdminHome from './TeacherAdmin/TeacherAdminHome';
import TeacherVideoPortal from './TeacherAdmin/TeacherTabs/VideoManagement/teacher-video-portal';
import ComingSoonPage from './TeacherAdmin/ComingSoonPage';
import LogoutPage from './TeacherAdmin/LogoutPage';
import EmployeeDashboard from './TeacherAdmin/EmployeePortal/EmployeeDashboard';
import EmployeeAttendance from './TeacherAdmin/EmployeePortal/EmployeeAttendance';
import EmployeePayslip from './TeacherAdmin/EmployeePortal/EmployeePayslip';
import EmployeeLeave from './TeacherAdmin/EmployeePortal/EmployeeLeave';
import SmartInstituteDashboard from './TeacherAdmin/SmartInstitute/SmartInstituteDashboard';
import BatchClassManagement from './TeacherAdmin/SmartInstitute/BatchClassManagement';
import TestAssignmentSystem from './TeacherAdmin/SmartInstitute/TestAssignmentSystem';
import FeesPaymentTracking from './TeacherAdmin/SmartInstitute/FeesPaymentTracking';
import StudentPerformanceAnalytics from './TeacherAdmin/SmartInstitute/StudentPerformanceAnalytics';

function TeacherAdminRoute() {
  return (
    <Routes>
      {/* Redirect '/teacher-admin/' to '/teacher-admin/home' */}
      <Route path="/" element={<Navigate to="home" replace />} />

      {/* All teacher-admin routes use the same layout (sidebar + content) */}
      <Route element={<TeacherAdminLayout />}>
        <Route path="home" element={<TeacherAdminHome />} />
        <Route path="institute" element={<SmartInstituteDashboard />} />
        <Route path="institute/batches" element={<BatchClassManagement />} />
        <Route path="institute/tests" element={<TestAssignmentSystem />} />
        <Route path="institute/fees" element={<FeesPaymentTracking />} />
        <Route path="institute/analytics" element={<StudentPerformanceAnalytics />} />
        <Route path="employee-portal">
          <Route index element={<EmployeeDashboard />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="attendance" element={<EmployeeAttendance />} />
          <Route path="payslip" element={<EmployeePayslip />} />
          <Route path="leave" element={<EmployeeLeave />} />
        </Route>

        {/* Video Management: all show TeacherVideoPortal (upload/manage/organization via tabs) */}
        <Route path="videos/upload" element={<TeacherVideoPortal embedded />} />
        <Route path="videos/manage" element={<TeacherVideoPortal embedded />} />
        <Route path="videos/organization" element={<TeacherVideoPortal embedded />} />

        {/* Teacher Portal – coming soon */}
        <Route path="login" element={<ComingSoonPage title="Teacher Login" />} />
        <Route path="schedule" element={<ComingSoonPage title="Personal Schedule" />} />
        <Route path="availability" element={<ComingSoonPage title="Availability" />} />

        {/* Attendance Management – coming soon */}
        <Route path="attendance/mark" element={<ComingSoonPage title="Mark Attendance" />} />
        <Route path="attendance/reports" element={<ComingSoonPage title="Attendance Reports" />} />

        {/* Performance Tracking – coming soon */}
        <Route path="performance/attendance" element={<ComingSoonPage title="Attendance Records" />} />
        <Route path="performance/grades" element={<ComingSoonPage title="Grades & Progress Reports" />} />
        <Route path="performance/feedback" element={<ComingSoonPage title="Feedback" />} />

        {/* Logout – signs out and redirects to home */}
        <Route path="logout" element={<LogoutPage />} />
      </Route>
    </Routes>
  );
}

export default TeacherAdminRoute;
