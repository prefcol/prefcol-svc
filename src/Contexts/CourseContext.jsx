// import React, { createContext, useContext, useState, useEffect } from "react";
// import { FaJava, FaPython, FaRegFileAlt, FaCogs, FaShieldAlt, FaMobileAlt, FaDatabase, FaUserCog, FaSearch, FaGraduationCap, FaSun, FaMoon, FaBook, FaPalette, FaChartBar, FaHeartbeat, FaGavel, FaGlobeAmericas, FaUserTie, FaCamera, FaMicrophone, FaTheaterMasks, FaLeaf, FaUtensils } from 'react-icons/fa';

// // Import your existing fetch function
// import { fetchCoursesByType } from "../Components/Home/Courses/fetchCoursesByType";

// // Icon Mapping
// const iconMap = {
//   FaJava: FaJava,
//   FaPython: FaPython,
//   FaRegFileAlt: FaRegFileAlt,
//   FaCogs: FaCogs,
//   FaUserCog: FaUserCog,
//   FaMobileAlt: FaMobileAlt,
//   FaDatabase: FaDatabase,
//   FaShieldAlt: FaShieldAlt,
//   FaBook: FaBook,
//   FaPalette: FaPalette,
//   FaChartBar: FaChartBar,
//   FaHeartbeat: FaHeartbeat,
//   FaGavel: FaGavel,
//   FaGlobeAmericas: FaGlobeAmericas,
//   FaUserTie: FaUserTie,
//   FaCamera: FaCamera,
//   FaMicrophone: FaMicrophone,
//   FaTheaterMasks: FaTheaterMasks,
//   FaLeaf: FaLeaf,
//   FaUtensils: FaUtensils,
// };
// const defaultIcon = FaGraduationCap;

// // Create Context
// const CourseContext = createContext();

// export const CourseProvider = ({ children }) => {
//   const [itCourses, setItCourses] = useState([]);
//   const [nonItCourses, setNonItCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Load IT & Non-IT courses using your existing fetch function
//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         // Fetch both course types
//         const [itData, nonItData] = await Promise.all([
//           fetchCoursesByType("IT"),
//           fetchCoursesByType("Non-IT")
//         ]);

//         // Map icon strings to actual components
//         const mapIcons = (courses) =>
//           courses.map((course) => ({
//             ...course,
//             iconComponent: iconMap[course.icon] || defaultIcon
//           }));

//         const itMapped = mapIcons(itData);
//         const nonItMapped = mapIcons(nonItData);

//         setItCourses(itMapped);
//         setNonItCourses(nonItMapped);
//       } catch (err) {
//         console.error("Error loading courses:", err.message);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourses();
//   }, []);

//   // Refresh courses manually
//   const refreshCourses = async () => {
//     setLoading(true);
//     try {
//       const [itData, nonItData] = await Promise.all([
//         fetchCoursesByType("IT"),
//         fetchCoursesByType("Non-IT")
//       ]);

//       const itMapped = itData.map(course => ({
//         ...course,
//         iconComponent: iconMap[course.icon] || defaultIcon
//       }));
//       const nonItMapped = nonItData.map(course => ({
//         ...course,
//         iconComponent: iconMap[course.icon] || defaultIcon
//       }));

//       setItCourses(itMapped);
//       setNonItCourses(nonItMapped);
//     } catch (err) {
//       console.error("Refresh error:", err.message);
//       setError("Failed to refresh course list.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const value = {
//     itCourses,
//     nonItCourses,
//     loading,
//     error,
//     refreshCourses
//   };

//   return (
//     <CourseContext.Provider value={value}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// export const useCourseContext = () => {
//   const context = useContext(CourseContext);
//   if (!context) {
//     throw new Error("useCourseContext must be used within a CourseProvider");
//   }
//   return context;
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import {
  FaJava,
  FaPython,
  FaRegFileAlt,
  FaCogs,
  FaShieldAlt,
  FaMobileAlt,
  FaDatabase,
  FaUserCog,
  FaBook,
  FaPalette,
  FaChartBar,
  FaHeartbeat,
  FaGavel,
  FaGlobeAmericas,
  FaUserTie,
  FaCamera,
  FaMicrophone,
  FaTheaterMasks,
  FaLeaf,
  FaUtensils,
  FaGraduationCap,
} from "react-icons/fa";
import { apiV1Url } from "../api/colBackend";

// Icon Mapping
const iconMap = {
  FaJava: FaJava,
  FaPython: FaPython,
  FaRegFileAlt: FaRegFileAlt,
  FaCogs: FaCogs,
  FaShieldAlt: FaShieldAlt,
  FaMobileAlt: FaMobileAlt,
  FaDatabase: FaDatabase,
  FaUserCog: FaUserCog,
  FaBook: FaBook,
  FaPalette: FaPalette,
  FaChartBar: FaChartBar,
  FaHeartbeat: FaHeartbeat,
  FaGavel: FaGavel,
  FaGlobeAmericas: FaGlobeAmericas,
  FaUserTie: FaUserTie,
  FaCamera: FaCamera,
  FaMicrophone: FaMicrophone,
  FaTheaterMasks: FaTheaterMasks,
  FaLeaf: FaLeaf,
  FaUtensils: FaUtensils,
};

const defaultIcon = () => <FaGraduationCap />;

// Fallback course data when API is unreachable (e.g. localhost CORS or backend down)
const FALLBACK_IT_COURSES = [
  { courseId: "1", courseName: "Software Development in Java", description: "Learn to build software applications using Java.", available: true, icon: "FaJava" },
  { courseId: "2", courseName: "Software Development in Python", description: "Develop applications and scripts using Python programming.", available: true, icon: "FaPython" },
  { courseId: "3", courseName: "Manual Testing", description: "Understand the fundamentals of software testing manually.", available: true, icon: "FaRegFileAlt" },
  { courseId: "4", courseName: "Automation Testing (Java)", description: "Automate testing using Java-based frameworks.", available: true, icon: "FaCogs" },
  { courseId: "5", courseName: "API Automation Testing (Java with Rest Assured)", description: "Test and automate APIs with Java and Rest Assured.", available: true, icon: "FaRegFileAlt" },
  { courseId: "6", courseName: "Automation Testing (Python)", description: "Automate testing processes using Python.", available: true, icon: "FaCogs" },
  { courseId: "7", courseName: "Product Management", description: "Learn product management essentials.", available: true, icon: "FaUserCog" },
  { courseId: "8", courseName: "Business Analyst", description: "Gain skills in business analysis.", available: true, icon: "FaChartBar" },
  { courseId: "9", courseName: "Data Science", description: "Data analysis, ML and visualization.", available: true, icon: "FaDatabase" },
  { courseId: "10", courseName: "Mobile Development", description: "Build mobile applications.", available: true, icon: "FaMobileAlt" },
  { courseId: "11", courseName: "DevOps", description: "CI/CD, cloud and infrastructure.", available: true, icon: "FaCogs" },
  { courseId: "12", courseName: "Cyber Security", description: "Security fundamentals and practices.", available: true, icon: "FaShieldAlt" },
];
const FALLBACK_NON_IT_COURSES = [
  { courseId: "1", courseName: "Creative Writing", description: "Master the art of storytelling and creative expression.", available: true, icon: "FaBook" },
  { courseId: "2", courseName: "Graphic Design", description: "Create stunning visual content and design fundamentals.", available: true, icon: "FaPalette" },
  { courseId: "3", courseName: "Digital Marketing", description: "Marketing strategies, SEO, and digital channels.", available: true, icon: "FaChartBar" },
  { courseId: "4", courseName: "Healthcare Management", description: "Healthcare administration and operations.", available: true, icon: "FaHeartbeat" },
  { courseId: "5", courseName: "Business Law", description: "Legal fundamentals for business and compliance.", available: true, icon: "FaGavel" },
  { courseId: "6", courseName: "Business Management", description: "Core business and management skills.", available: true, icon: "FaUserTie" },
  { courseId: "7", courseName: "Public Speaking", description: "Communicate with confidence and clarity.", available: true, icon: "FaMicrophone" },
  { courseId: "8", courseName: "Photography", description: "Composition, lighting, and visual storytelling.", available: true, icon: "FaCamera" },
  { courseId: "9", courseName: "Theatre Arts", description: "Acting, direction, and performing arts.", available: true, icon: "FaTheaterMasks" },
  { courseId: "10", courseName: "Sustainable Agriculture", description: "Eco-friendly farming and agri practices.", available: true, icon: "FaLeaf" },
  { courseId: "11", courseName: "Culinary Arts", description: "Cooking techniques and kitchen management.", available: true, icon: "FaUtensils" },
  { courseId: "12", courseName: "Environmental Studies", description: "Sustainability and environmental management.", available: true, icon: "FaGlobeAmericas" },
];

// Create Context
const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [itCourses, setItCourses] = useState([]);
  const [nonItCourses, setNonItCourses] = useState([]);
  const [error, setError] = useState(null);

  const COURSE_API_URL = apiV1Url("/listOfCourses"); 

  // Function to fetch courses
  const fetchCourses = async (type) => {
    try {
      const response = await fetch(`${COURSE_API_URL}?typeOfCourse=${encodeURIComponent(type)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) throw new Error(`API returned status ${response.status}`);

      const result = await response.json();
      return result.courseEntity || [];
    } catch (err) {
      console.error("Fetch error:", err.message);
      return [];
    }
  };

  // Load IT & Non-IT courses on mount; use fallback when API is unreachable (e.g. localhost)
  useEffect(() => {
    const mapIcons = (courses) =>
      (courses || []).map((course) => ({
        ...course,
        iconComponent: iconMap[course.icon] || defaultIcon
      }));

    const loadCourses = async () => {
      try {
        const [itData, nonItData] = await Promise.all([
          fetchCourses("IT"),
          fetchCourses("Non-IT")
        ]);

        // Use fallback when API returns empty (e.g. CORS on localhost or backend down)
        const itList = Array.isArray(itData) && itData.length > 0 ? itData : FALLBACK_IT_COURSES;
        const nonItList = Array.isArray(nonItData) && nonItData.length > 0 ? nonItData : FALLBACK_NON_IT_COURSES;

        setItCourses(mapIcons(itList));
        setNonItCourses(mapIcons(nonItList));
      } catch (err) {
        setError(err.message);
        setItCourses(mapIcons(FALLBACK_IT_COURSES));
        setNonItCourses(mapIcons(FALLBACK_NON_IT_COURSES));
      }
    };

    loadCourses();
  }, []);

  const value = {
    itCourses,
    nonItCourses,
    error
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
};