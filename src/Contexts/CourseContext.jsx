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
} from "react-icons/fa";

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

// Create Context
const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [itCourses, setItCourses] = useState([]);
  const [nonItCourses, setNonItCourses] = useState([]);
  const [error, setError] = useState(null);

  const COURSE_API_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/listOfCourses"; 

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

  // Load IT & Non-IT courses on mount
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const [itData, nonItData] = await Promise.all([
          fetchCourses("IT"),
          fetchCourses("Non-IT")
        ]);

        // Map icons once fetched
        const mapIcons = (courses) =>
          courses.map((course) => ({
            ...course,
            iconComponent: iconMap[course.icon] || defaultIcon
          }));

        setItCourses(mapIcons(itData));
        setNonItCourses(mapIcons(nonItData));
      } catch (err) {
        setError(err.message);
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