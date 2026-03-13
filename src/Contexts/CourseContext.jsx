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
  FaCloud,
  FaCalendar,
  FaDollarSign,
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
  FaCloud: FaCloud,
  FaCalendar: FaCalendar,
  FaDollarSign: FaDollarSign,
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
  { courseId: "13", courseName: "UI/UX Development", description: "Design user interfaces and experiences for web and mobile apps.", available: true, icon: "FaPalette" },
  { courseId: "14", courseName: "Full Stack Development", description: "Build end-to-end applications with frontend and backend technologies.", available: true, icon: "FaCogs" },
  { courseId: "15", courseName: "Cloud (AWS / Azure / GCP)", description: "Design and deploy solutions on major cloud platforms.", available: true, icon: "FaCloud" },
  { courseId: "16", courseName: "Frontend Development (React / Angular)", description: "Build modern web UIs with React or Angular.", available: true, icon: "FaPalette" },
  { courseId: "17", courseName: ".NET / C# Development", description: "Build applications with Microsoft .NET and C#.", available: true, icon: "FaCogs" },
  { courseId: "18", courseName: "Database & SQL", description: "Design databases and write SQL for data management.", available: true, icon: "FaDatabase" },
  { courseId: "19", courseName: "System Design & Software Architecture", description: "Design scalable systems and apply software architecture patterns.", available: true, icon: "FaCogs" },
  { courseId: "20", courseName: "Agile / Scrum / Project Management", description: "Run projects with Agile, Scrum, and modern PM practices.", available: true, icon: "FaUserCog" },
  { courseId: "21", courseName: "Artificial Intelligence & Deep Learning", description: "Build AI and deep learning models with Python.", available: true, icon: "FaDatabase" },
  { courseId: "22", courseName: "Blockchain & Web3", description: "Understand blockchain, smart contracts, and Web3 development.", available: true, icon: "FaCogs" },
  { courseId: "23", courseName: "Big Data (Hadoop / Spark)", description: "Process large-scale data with Hadoop and Apache Spark.", available: true, icon: "FaDatabase" },
  { courseId: "24", courseName: "Docker & Kubernetes", description: "Containerize apps and orchestrate with Kubernetes.", available: true, icon: "FaCogs" },
  { courseId: "25", courseName: "Game Development", description: "Create games with popular engines and programming.", available: true, icon: "FaCogs" },
  { courseId: "26", courseName: "IoT (Internet of Things)", description: "Build connected devices and embedded systems.", available: true, icon: "FaMobileAlt" },
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
  { courseId: "13", courseName: "Human Resources", description: "Manage and develop talent in organizations.", available: true, icon: "FaUserTie" },
  { courseId: "14", courseName: "Finance & Accounting", description: "Financial statements, budgeting, and accounting basics.", available: true, icon: "FaDollarSign" },
  { courseId: "15", courseName: "Content Writing & Copywriting", description: "Write for marketing, blogs, and ads.", available: true, icon: "FaBook" },
  { courseId: "16", courseName: "Entrepreneurship & Startup", description: "Start a business, business plans, and funding.", available: true, icon: "FaUserTie" },
  { courseId: "17", courseName: "Leadership & Management", description: "Lead teams, decision-making, and influence.", available: true, icon: "FaUserCog" },
  { courseId: "18", courseName: "Event Management", description: "Plan and run events and conferences.", available: true, icon: "FaCalendar" },
  { courseId: "19", courseName: "Interior Design", description: "Space planning, materials, and styling.", available: true, icon: "FaPalette" },
  { courseId: "20", courseName: "Fashion Design", description: "Design and create fashion and apparel.", available: true, icon: "FaPalette" },
  { courseId: "21", courseName: "Animation & Video Editing", description: "Create and edit video and animation content.", available: true, icon: "FaCamera" },
  { courseId: "22", courseName: "Spoken English & Communication", description: "Fluency and professional communication.", available: true, icon: "FaMicrophone" },
  { courseId: "23", courseName: "Psychology & Soft Skills", description: "Self-awareness, teamwork, and career development.", available: true, icon: "FaHeartbeat" },
  { courseId: "24", courseName: "Teaching & Train the Trainer", description: "Teach and train others effectively.", available: true, icon: "FaBook" },
  { courseId: "25", courseName: "Retail Management", description: "Store operations, merchandising, and customer experience.", available: true, icon: "FaChartBar" },
  { courseId: "26", courseName: "Hospitality & Hotel Management", description: "Tourism, hotels, and food & beverage.", available: true, icon: "FaUserTie" },
  { courseId: "27", courseName: "Supply Chain & Logistics", description: "Procurement, inventory, and distribution.", available: true, icon: "FaCogs" },
  { courseId: "28", courseName: "Yoga, Fitness & Wellness", description: "Lifestyle, fitness, and wellness practices.", available: true, icon: "FaHeartbeat" },
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