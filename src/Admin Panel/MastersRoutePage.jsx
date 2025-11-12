// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// // import MasterAdminHome from "./MasterAdmin/MasterAdminHome";
// import TeacherAdminHome from "./TeacherAdmin/TeacherAdminHome";
// import MasterAdminSidebar from "./MasterAdmin/MasterAdminSidebar";
// import ManageVideosPage from "./MasterAdmin/MasterTabs/CourseandContentControl/MasterUploadVideo";
// import MasterAdminHome from "./MasterAdmin/MasterAdminHome";


// const MastersPage = () => {
//   return (
//     <Router>
//       <div className="flex">
//         {/* Sidebar Navigation */}
//         <MasterAdminSidebar />

//         {/* Page Content */}
//         <div className="flex-grow p-4">
//           <Routes>
//             {/* Master Admin Routes */}
//             <MasterAdminHome />
//             <MasterAdminSidebar />

//             {/* User Management */}
//             <Route path="/admin/user-management/create" element={<h1>Create Users</h1>} />
//             <Route path="/admin/user-management/update" element={<h1>Update User Information</h1>} />
//             <Route path="/admin/user-management/delete" element={<h1>Delete Users</h1>} />
//             <Route path="/admin/user-management/roles" element={<h1>Manage Roles and Permissions</h1>} />
//             <Route path="/admin/user-management/teacher-approvals" element={<h1>Teacher Applications</h1>} />

//             {/* Course and Content Control */}
//             <Route path="/admin/course-control/add-update-remove" element={<h1>Add/Update/Remove Courses</h1>} />
//             <Route path="/master-admin/videos/upload" element={<MasterUploadVideo />} />
//             <Route path="/admin/course-control/restrict-access" element={<h1>Restrict Content Access</h1>} />
//             <Route path="/admin/course-control/video-organization" element={<h1>Oversee Video Organization</h1>} />

//             {/* Analytics and Reports */}
//             <Route path="/admin/analytics/student-performance" element={<h1>View Student Performance</h1>} />
//             <Route path="/admin/analytics/teacher-effectiveness" element={<h1>Track Teacher Effectiveness</h1>} />
//             <Route path="/admin/analytics/platform-usage" element={<h1>Platform Usage Reports</h1>} />

//             {/* System Settings */}
//             <Route path="/admin/settings/payment-gateway" element={<h1>Configure Payment Gateway</h1>} />
//             <Route path="/admin/settings/notification-templates" element={<h1>Manage Notification Templates</h1>} />
//             <Route path="/admin/settings/platform-preferences" element={<h1>Customize Platform Preferences</h1>} />

//             {/* Audit and Logs */}
//             <Route path="/admin/audit-logs/view-logs" element={<h1>View System Logs</h1>} />
//             <Route path="/admin/audit-logs/accountability" element={<h1>Ensure Accountability</h1>} />

//             {/* Support Management */}
//             <Route path="/admin/support/manage-requests" element={<h1>Manage Support Requests</h1>} />

//             {/* Teacher Admin Part */}
//             <Route path="/teacher-admin" element={<TeacherAdminHome />} />

//             {/* Default Redirect */}
//             <Route path="*" element={<Navigate to="/master-admin" replace />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default MastersPage;



// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import MasterAdminHome from "../Admin Panel/MasterAdmin/MasterAdminHome";
// import MasterAdminSidebar from "../Admin Panel/MasterAdmin/MasterAdminSidebar";
// import ManageVideosPage from "../Admin Panel/MasterAdmin/MasterTabs/CourseandContentControl/MasterUploadVideo";
// import TeacherAdminHome from "../Admin Panel/TeacherAdmin/TeacherAdminHome";

// const MasterAdminRoutes = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar Navigation */}
//       <MasterAdminSidebar />

//       {/* Page Content */}
//       <div className="flex-grow p-4">
//         <Routes>
//           {/* Master Admin Routes */}
//           <Route path="/master-admin" element={<MasterAdminHome />} />
//           <Route path="/master-admin/videos/upload" element={<ManageVideosPage />} />

//           {/* User Management */}
//           <Route path="/admin/user-management/create" element={<h1>Create Users</h1>} />
//           <Route path="/admin/user-management/update" element={<h1>Update User Information</h1>} />
//           <Route path="/admin/user-management/delete" element={<h1>Delete Users</h1>} />
//           <Route path="/admin/user-management/roles" element={<h1>Manage Roles and Permissions</h1>} />
//           <Route path="/admin/user-management/teacher-approvals" element={<h1>Teacher Applications</h1>} />

//           {/* Course and Content Control */}
//           <Route path="/admin/course-control/add-update-remove" element={<h1>Add/Update/Remove Courses</h1>} />
//           <Route path="/admin/course-control/restrict-access" element={<h1>Restrict Content Access</h1>} />
//           <Route path="/admin/course-control/video-organization" element={<h1>Oversee Video Organization</h1>} />

//           {/* Analytics and Reports */}
//           <Route path="/admin/analytics/student-performance" element={<h1>View Student Performance</h1>} />
//           <Route path="/admin/analytics/teacher-effectiveness" element={<h1>Track Teacher Effectiveness</h1>} />
//           <Route path="/admin/analytics/platform-usage" element={<h1>Platform Usage Reports</h1>} />

//           {/* System Settings */}
//           <Route path="/admin/settings/payment-gateway" element={<h1>Configure Payment Gateway</h1>} />
//           <Route path="/admin/settings/notification-templates" element={<h1>Manage Notification Templates</h1>} />
//           <Route path="/admin/settings/platform-preferences" element={<h1>Customize Platform Preferences</h1>} />

//           {/* Audit and Logs */}
//           <Route path="/admin/audit-logs/view-logs" element={<h1>View System Logs</h1>} />
//           <Route path="/admin/audit-logs/accountability" element={<h1>Ensure Accountability</h1>} />

//           {/* Support Management */}
//           <Route path="/admin/support/manage-requests" element={<h1>Manage Support Requests</h1>} />

//           {/* Teacher Admin Part */}
//           <Route path="/teacher-admin" element={<TeacherAdminHome />} />

//           {/* Default Redirect */}
//           <Route path="*" element={<Navigate to="/master-admin" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default MasterAdminRoutes;


// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import MasterAdminHome from "../Admin Panel/MasterAdmin/MasterAdminHome";
// import AdminLayout from "./MasterAdmin/Layout";
// import CreateUser from "./MasterAdmin/MasterTabs/User Management/CreateUser";
// import VideoManagement from "./MasterAdmin/MasterTabs/CourseandContentControl/components/VideoManagement";

// const MasterAdminRoutes = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar Navigation */}
//       <AdminLayout />

//       {/* Page Content */}
//       <div className="flex-grow p-4">
//         <Routes>
//           {/* Default Redirect */}
//           <Route path="/" element={<Navigate to="/master-admin/home" replace />} />

//           {/* Master Admin Home */}
//           <Route path="/home" element={<MasterAdminHome />} />
          

//           {/* Course and Content Control */}
//           <Route path="/videos/upload" element={<VideoManagement />} />
//           <Route path="/course-control/add-update-remove" element={<h1>Add/Update/Remove Courses</h1>} />
//           <Route path="/course-control/restrict-access" element={<h1>Restrict Content Access</h1>} />
//           <Route path="/course-control/video-organization" element={<h1>Oversee Video Organization</h1>} />

//           {/* User Management */}
//           <Route path="/create/user" element={<CreateUser/>} />
//           <Route path="/user-management/update" element={<h1>Update User Information</h1>} />
//           <Route path="/user-management/delete" element={<h1>Delete Users</h1>} />
//           <Route path="/user-management/roles" element={<h1>Manage Roles and Permissions</h1>} />
//           <Route path="/user-management/teacher-approvals" element={<h1>Teacher Applications</h1>} />

//           {/* Analytics and Reports */}
//           <Route path="/analytics/student-performance" element={<h1>View Student Performance</h1>} />
//           <Route path="/analytics/teacher-effectiveness" element={<h1>Track Teacher Effectiveness</h1>} />
//           <Route path="/analytics/platform-usage" element={<h1>Platform Usage Reports</h1>} />

//           {/* System Settings */}
//           <Route path="/settings/payment-gateway" element={<h1>Configure Payment Gateway</h1>} />
//           <Route path="/settings/notification-templates" element={<h1>Manage Notification Templates</h1>} />
//           <Route path="/settings/platform-preferences" element={<h1>Customize Platform Preferences</h1>} />

//           {/* Audit and Logs */}
//           <Route path="/audit-logs/view-logs" element={<h1>View System Logs</h1>} />
//           <Route path="/audit-logs/accountability" element={<h1>Ensure Accountability</h1>} />

//           {/* Support Management */}
//           <Route path="/support/manage-requests" element={<h1>Manage Support Requests</h1>} />

//           {/* Catch-all Redirect */}
//           <Route path="*" element={<Navigate to="/master-admin/home" replace />} />
          
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default MasterAdminRoutes;

// MasterAdminRoutes.jsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MasterAdminHome from "../Admin Panel/MasterAdmin/MasterAdminHome";
import AdminLayout from "./MasterAdmin/Layout"; // ✅ Your layout
import CreateUser from "./MasterAdmin/MasterTabs/User Management/CreateUser";
import VideoManagement from "./MasterAdmin/MasterTabs/CourseandContentControl/components/VideoManagement";
import UpdateTeacher from "./MasterAdmin/MasterTabs/Update_User";
import DeleteUser from "./MasterAdmin/MasterTabs/User Management/DeleteUser";
import RolesPermissions from "./MasterAdmin/MasterTabs/User Management/RolesPermissions";

const MasterAdminRoutes = () => {
  return (
    <AdminLayout> {/* ✅ Wrap all routes with layout */}
      <Routes>
        {/* Redirect root of /master-admin to home */}
        <Route index element={<Navigate to="home" replace />} />

        {/* Master Admin Routes (relative paths!) */}
        <Route path="home" element={<MasterAdminHome />} />
        <Route path="videos/upload" element={<VideoManagement />} />
        <Route path="course-control/add-update-remove" element={<h1>Add/Update/Remove Courses</h1>} />
        <Route path="course-control/restrict-access" element={<h1>Restrict Content Access</h1>} />
        <Route path="course-control/video-organization" element={<h1>Oversee Video Organization</h1>} />
        <Route path="create/user" element={<CreateUser />} />
        <Route path="user-management/update" element={<UpdateTeacher />} />
        <Route path="user-management/delete" element={<DeleteUser />} />
        <Route path="user-management/roles" element={<RolesPermissions />} />
        <Route path="user-management/teacher-approvals" element={<h1>Teacher Applications</h1>} />
        <Route path="analytics/student-performance" element={<h1>View Student Performance</h1>} />
        <Route path="analytics/teacher-effectiveness" element={<h1>Track Teacher Effectiveness</h1>} />
        <Route path="analytics/platform-usage" element={<h1>Platform Usage Reports</h1>} />
        <Route path="settings/payment-gateway" element={<h1>Configure Payment Gateway</h1>} />
        <Route path="settings/notification-templates" element={<h1>Manage Notification Templates</h1>} />
        <Route path="settings/platform-preferences" element={<h1>Customize Platform Preferences</h1>} />
        <Route path="audit-logs/view-logs" element={<h1>View System Logs</h1>} />
        <Route path="audit-logs/accountability" element={<h1>Ensure Accountability</h1>} />
        <Route path="support/manage-requests" element={<h1>Manage Support Requests</h1>} />

        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default MasterAdminRoutes;