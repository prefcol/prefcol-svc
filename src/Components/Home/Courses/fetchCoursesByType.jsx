// // const COURSE_API_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/listOfCourses"; 

// // export const fetchCoursesByType = async (type) => {
// //   try {
// //     const response = await fetch(`${COURSE_API_URL}?typeOfCourse=${encodeURIComponent(type)}`, {
// //       method: "GET",
// //       headers: {
// //         // Content-Type is optional for GET requests, can be removed or kept
// //         "Content-Type": "application/json",
// //       },
// //     });

// //     if (!response.ok) throw new Error("Failed to fetch courses");

// //     const result = await response.json();
// //     return result.courseEntity || [];
// //   } catch (error) {
// //     console.error("Error fetching courses:", error);
// //     return [];
// //   }
// // };
// import { FaJava,FaBook, FaPython, FaRegFileAlt, FaCogs, FaShieldAlt, FaMobileAlt, FaDatabase, FaUserCog, FaSearch, FaGraduationCap, FaSun, FaMoon ,FaPalette,FaChartBar,FaHeartbeat,FaGavel,FaGlobeAmericas} from 'react-icons/fa';
// export const fetchCoursesByType = async (type) => {
//   const iconMap = {
//   "<FaJava />": <FaJava />,
//   "<FaPython />": <FaPython />,
//   "<FaRegFileAlt />": <FaRegFileAlt />,
//   "<FaCogs />": <FaCogs />,
//   "<FaUserCog />": <FaUserCog />,
//   "<FaMobileAlt />": <FaMobileAlt />,
//   "<FaDatabase />": <FaDatabase />,
//   "<FaShieldAlt />": <FaShieldAlt />,
//   "<FaBook />": <FaBook />,
//   "<FaPalette />": <FaPalette />,
//   "<FaChartBar />": <FaChartBar />,
//   "<FaHeartbeat />": <FaHeartbeat />,
//   "<FaGavel />": <FaGavel />,
//   "<FaGlobeAmericas />": <FaGlobeAmericas />,
//   "<FaUserTie />": <FaUserTie />,
//   "<FaCamera />": <FaCamera />,
//   "<FaMicrophone />": <FaMicrophone />,
//   "<FaTheaterMasks />": <FaTheaterMasks />,
//   "<FaLeaf />": <FaLeaf />,
//   "<FaGraduationCap />": <FaGraduationCap />
// };

//   try {
//     const response = await fetch(`${COURSE_API_URL}?typeOfCourse=${encodeURIComponent(type)}`, {
//       method: "GET"
//     });

//     if (!response.ok) throw new Error("Failed to fetch courses");

//     const result = await response.json();

//     return result.courseEntity.map((course) => ({
//       ...course,
//       icon: iconMap[course.icon] || <FaGraduationCap />, // Convert string to React component
//     }));
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     return [];
//   }
// };
const COURSE_API_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/listOfCourses"; 

export const fetchCoursesByType = async (type) => {
  const formData = new FormData();
  // Format col_courses exactly as in cURL
  formData.append("col_courses", JSON.stringify({ typeOfCourse: type }));

  try {
    const response = await fetch(COURSE_API_URL, {
      method: "GET",  // ✅ Must be POST
        // 🚫 Not allowed in GET
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.statusText}`);
    }

    const result = await response.json();

    return result.courseEntity || [];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};