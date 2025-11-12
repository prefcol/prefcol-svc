// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import Lenis from "@studio-freight/lenis";
// import COLChatbot from "./Chatbot/ColChatbot";
// import Footer from "./Footer/Footer";

// // Import Components
// import Homepage from "./Components/Home/Home";
// import CareersPage from "./Components/Home/CareerLogin/CareersPage";
// import IT_CourseDetails from "./Components/Home/Courses/IT_CoursesDetails";
// import IT_Courses from "./Components/Home/Courses/IT_CoursesPage";
// import Non_IT_CourseDetails from "./Components/Home/Courses/Non_IT_CoursesDetails";
// import Navigationbar from "./Components/Home/Navbar/Navbar";
// import AboutUs from "./Components/Home/AboutUs.jsx/AboutUs";
// import ContactPage from "./Components/Common/ContactUS/ContactUs";
// import Non_IT_Courses from "./Components/Home/Courses/Non_IT_CoursePage";
// import EnrollmentForm from "./Components/Home/Courses/EnrollmentForm";
// import Cancellation_Refund_Policy from "./Components/Home/Support/Cancellation_Refund_Policy";
// import Privacy_Policy from "./Components/Home/Support/Privacy_Policy";
// import Shipping_Delivery_Policy from "./Components/Home/Support/Shipping_Delivery_Policy";

// // Student Panel
// // import Studentportal from "./Student panel/page";

// // Admin Panel

// import MasterAdminRoutes from "./Admin Panel/MastersRoutePage";
// import TeacherAdminRoute from "./Admin Panel/TeacherAdminRoute";
// import TermsAndConditions from "./Footer/terms-and-conditions";
// import StudentPortal from "./Student_Panel/page";

// // Spinner Component
// const FuturisticSpinner = () => (
//   <div className="fixed inset-0 flex items-center justify-center bg-teal-50 z-50">
//     <div className="animate-spin w-16 h-16 border-4 border-teal-900 border-t-transparent rounded-full"></div>
//   </div>
// );

// // Smooth Scrolling (Lenis)
// const SmoothScroll = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 0.8,
//       easing: (t) => 1 - Math.pow(1 - t, 3),
//       smooth: true,
//       direction: "vertical",
//       gesture: true,
//     });

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// };

// // Scroll to Top on Route Change
// const ScrollToTop = ({ setLoading }) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => setLoading(false), 800);
//   }, [pathname, setLoading]);

//   return null;
// };

// const AppContent = ({ isDarkMode, onThemeToggle, loading, setLoading }) => {
//   const { pathname } = useLocation();

//   // Determine if the current route is part of the student portal, master admin, or teacher admin
//   const isStudentPortal = pathname.startsWith("/Student-portal");
//   const isAdminRoute =
//     pathname.startsWith("/master-admin") ||
//     pathname.startsWith("/teacher-admin");

//   return (
//     <>
//       {/* Show Spinner While Loading */}
//       {loading && <FuturisticSpinner />}

//       <div
//         className={`relative transition-opacity duration-700 ${
//           loading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         {/* Navbar is hidden on admin and student portal routes */}
//         {!isStudentPortal && !isAdminRoute && (
//           <Navigationbar onThemeToggle={onThemeToggle} />
//         )}

//         {/* Main Routes */}
//         <Routes>
//           {/* /* Public Routes */ }
//                 <Route path="/" element={<Homepage />} />
//                 <Route path="/about-us" element={<AboutUs />} />
//                 <Route path="/contact-us" element={<ContactPage />} />
//                 <Route path="/careers" element={<CareersPage />} />
//                 <Route path="/it-courses" element={<IT_Courses />} />
//                 <Route path="/it-courses/:courseId" element={<IT_CourseDetails />} />
//                 <Route path="/Non_it-courses" element={<Non_IT_Courses />} />
//                 <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
//                 <Route path="/Cancellation_Refund_Policy" element={<Cancellation_Refund_Policy />} />
//                 <Route path="/Shipping_Delivery_Policy" element={<Shipping_Delivery_Policy />} />
                
//                 <Route
//                 path="/Non_it-courses/:courseId"
//                 element={<Non_IT_CourseDetails />}
//                 />
//                 <Route path="/enroll" element={<EnrollmentForm />} />
//                 <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

//                 {/* Student Portal */}
//           <Route path="/Student-portal/*" element={<StudentPortal />} />

//           {/* Admin Routes */}
//           <Route path="/master-admin/*" element={<MasterAdminRoutes />} />
//           <Route path="/teacher-admin/*" element={<TeacherAdminRoute />} />
//         </Routes>

//         {/* Footer is hidden on admin and student portal routes */}
//         {!isStudentPortal && !isAdminRoute && <Footer />}

//         {/* Chatbot */}
//         <div className="absolute pt-3 right-2 z-50">
//           {/* <COLChatbot /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleThemeToggle = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ChakraProvider>
//       <Router>
//         <SmoothScroll />
//         <ScrollToTop setLoading={setLoading} />
//         <AppContent
//           isDarkMode={isDarkMode}
//           onThemeToggle={handleThemeToggle}
//           loading={loading}
//           setLoading={setLoading}
//         />
//       </Router>
//     </ChakraProvider>
//   );
// }

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import Lenis from "@studio-freight/lenis";
import COLChatbot from "./Chatbot/ColChatbot";
import Footer from "./Footer/Footer";

// Import Components
import Homepage from "./Components/Home/Home";
import CareersPage from "./Components/Home/CareerLogin/CareersPage";
import IT_CourseDetails from "./Components/Home/Courses/IT_CoursesDetails";
import IT_Courses from "./Components/Home/Courses/IT_CoursesPage";
import Non_IT_CourseDetails from "./Components/Home/Courses/Non_IT_CoursesDetails";
import Navigationbar from "./Components/Home/Navbar/Navbar";
import AboutUs from "./Components/Home/AboutUs.jsx/AboutUs";
import ContactPage from "./Components/Common/ContactUS/ContactUs";
import Non_IT_Courses from "./Components/Home/Courses/Non_IT_CoursePage";
import EnrollmentForm from "./Components/Home/Courses/EnrollmentForm";
import Cancellation_Refund_Policy from "./Components/Home/Support/Cancellation_Refund_Policy";
import Privacy_Policy from "./Components/Home/Support/Privacy_Policy";
import Shipping_Delivery_Policy from "./Components/Home/Support/Shipping_Delivery_Policy";

// Student Panel
import StudentPortal from "./Student_Panel/page";


// Admin Panel
import MasterAdminRoutes from "./Admin Panel/MastersRoutePage";
import TeacherAdminRoute from "./Admin Panel/TeacherAdminRoute";


// Support Pages
import TermsAndConditions from "./Footer/terms-and-conditions";

// Spinner Component
const FuturisticSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-teal-50 z-50">
    <div className="animate-spin w-16 h-16 border-4 border-teal-900 border-t-transparent rounded-full"></div>
  </div>
);

// // Smooth Scrolling (Lenis)
// const SmoothScroll = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 0.8,
//       easing: (t) => 1 - Math.pow(1 - t, 3),
//       smooth: true,
//       direction: "vertical",
//       gesture: true,
//     });

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// };

// Scroll to Top on Route Change
const ScrollToTop = ({ setLoading }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname, setLoading]);

  return null;
};

// AppContent: Handles layout logic per route
const AppContent = ({ isDarkMode, onThemeToggle, loading, setLoading }) => {
  const { pathname } = useLocation();

  const isStudentPortal = pathname.startsWith("/Student-portal");
  const isAdminRoute =
    pathname.startsWith("/master-admin") ||
    pathname.startsWith("/teacher-admin");

  return (
    <>
      {/* Loading Spinner */}
      {loading && <FuturisticSpinner />}

      <div
        className={`relative transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Navbar: hidden on admin & student routes */}
        {!isStudentPortal && !isAdminRoute && (
          <Navigationbar onThemeToggle={onThemeToggle} />
        )}

        {/* Main Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/it-courses" element={<IT_Courses />} />
          <Route path="/it-courses/:courseId" element={<IT_CourseDetails />} />
          <Route path="/Non_it-courses" element={<Non_IT_Courses />} />
          <Route path="/Non_it-courses/:courseId" element={<Non_IT_CourseDetails />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route path="/Cancellation_Refund_Policy" element={<Cancellation_Refund_Policy />} />
          <Route path="/Shipping_Delivery_Policy" element={<Shipping_Delivery_Policy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Student Portal */}
          <Route path="/Student-portal/*" element={<StudentPortal />} />

          {/* Admin Routes */}
          <Route path="/master-admin/*" element={<MasterAdminRoutes />} />
          <Route path="/teacher-admin/*" element={<TeacherAdminRoute />} />
        </Routes>

        {/* Footer: hidden on admin & student routes */}
        {!isStudentPortal && !isAdminRoute && <Footer />}

        {/* Chatbot (commented out as in original) */}
        {/* <div className="fixed bottom-4 right-4 z-50">
          <COLChatbot />
        </div> */}
      </div>
    </>
  );
};

// Main App Component
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ChakraProvider>
      <Router>
        {/* <SmoothScroll /> */}
        <ScrollToTop setLoading={setLoading} />
        <AppContent
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
          loading={loading}
          setLoading={setLoading}
        />
      </Router>
    </ChakraProvider>
  );
}