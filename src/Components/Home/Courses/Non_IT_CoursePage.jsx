import React, { useState, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaJava, FaPython, FaRegFileAlt, FaCogs, FaShieldAlt, FaMobileAlt, FaDatabase, FaUserCog, FaSearch, FaGraduationCap, FaSun, FaMoon, FaBook, FaPalette, FaChartBar, FaHeartbeat, FaGavel, FaGlobeAmericas, FaUserTie, FaCamera, FaMicrophone, FaTheaterMasks, FaLeaf, FaUtensils } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { useCourseContext } from "../../../Contexts/CourseContext";

const iconMap = {
  FaJava: FaJava,
  FaPython: FaPython,
  FaRegFileAlt: FaRegFileAlt,
  FaCogs: FaCogs,
  FaUserCog: FaUserCog,
  FaMobileAlt: FaMobileAlt,
  FaDatabase: FaDatabase,
  FaShieldAlt: FaShieldAlt,
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
// Logo component
const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-4 mt-20 flex-col sm:flex-row">
      <FaGraduationCap size={40} color="#006959" />
      <span className="ml-0 sm:ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 tracking-wide text-center sm:text-left">
        Non IT Courses
      </span>
    </div>
  );
};

// const coursesData = [
//   {
//     id: 1,
//     title: "Creative Writing",
//     description: "Master the art of storytelling",
//     available: true,
//     icon: <FaBook />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 2,
//     title: "Graphic Design",
//     description: "Create stunning visual content",
//     available: true,
//     icon: <FaPalette />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description: "Learn to promote in the digital age",
//     available: true,
//     icon: <FaChartBar />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 4,
//     title: "Healthcare Management",
//     description: "Lead in the healthcare industry",
//     available: true,
//     icon: <FaHeartbeat />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 5,
//     title: "Business Law",
//     description: "Understand legal aspects of business",
//     available: true,
//     icon: <FaGavel />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 6,
//     title: "Environmental Science",
//     description: "Study and protect our environment",
//     available: true,
//     icon: <FaGlobeAmericas />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 7,
//     title: "Human Resources",
//     description: "Manage and develop talent",
//     available: true,
//     icon: <FaUserTie />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 8,
//     title: "Photography",
//     description: "Capture moments through the lens",
//     available: true,
//     icon: <FaCamera />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 9,
//     title: "Public Speaking",
//     description: "Become a confident speaker",
//     available: true,
//     icon: <FaMicrophone />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 10,
//     title: "Theater Arts",
//     description: "Express yourself on stage",
//     available: true,
//     icon: <FaTheaterMasks />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 11,
//     title: "Sustainable Agriculture",
//     description: "Learn eco-friendly farming",
//     available: true,
//     icon: <FaLeaf />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 12,
//     title: "Culinary Arts",
//     description: "Master the art of cooking",
//     available: true,
//     icon: <FaUtensils />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
// ];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Non_IT_Courses = () => {
    const { nonItCourses, error} = useCourseContext();
  
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [mode, setMode] = useState("light");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
const filteredCourses = useMemo(() => {
    if (!Array.isArray(nonItCourses)) return [];

    return nonItCourses.filter((course) =>
      course.courseName?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      course.description?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [nonItCourses, debouncedSearchTerm]);

   const handleCardClick = (course) => {
    if (course.available) {
      navigate(`/Non_it-courses/${course.courseId}`);
    } else {
      alert("This course is coming soon! Stay tuned for updates.");
    }
  };

  // const filteredCourses = useMemo(
  //   () =>
  //     nonItCourses.filter(
  //       (course) =>
  //         course.title
  //           .toLowerCase()
  //           .includes(debouncedSearchTerm.toLowerCase()) ||
  //         course.description
  //           .toLowerCase()
  //           .includes(debouncedSearchTerm.toLowerCase())
  //     ),
  //   [debouncedSearchTerm]
  // );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div
        className={`min-h-screen py-8 md:py- ${
          mode === "light" ? "bg-teal-50" : "bg-teal-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`py-8 md:py-12 px-4 md:px-8 mb-6 md:mb-10 rounded-3xl text-center relative overflow-hidden ${
              mode === "light" ? "bg-white" : "bg-black"
            }`}
          >
            <Logo />
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-6 ${
                mode === "light" ? "text-teal-900" : "text-white"
              }`}
            >
              Explore Our Non IT Courses
            </h1>
            <div className="relative z-10 max-w-xl mx-auto">
              <input
                style={{ border: "2px solid teal" }}
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-4  rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
              <FaSearch className="absolute right-3 top-1/2  transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => {
                const IconComponent = iconMap[course.icon] || FaGraduationCap;

                return (
               
                  <motion.div
                    key={course.courseId}
                    initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div
                    onClick={() => handleCardClick(course)}
                    className={`h-full flex flex-col rounded-xl overflow-hidden cursor-pointer  ${
                      course.available
                        ? "bg-teal-900 hover:bg-teal-700"
                        : "bg-teal-900 hover:bg-gray-700"
                    }`}
                  >
                    <div className="p-6 flex-grow flex flex-col relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            course.available
                              ? "bg-white text-teal-900"
                              : "bg-gray-400 text-gray-600"
                          }`}
                        >
                           {React.cloneElement(<IconComponent />, { size: 30 })}
                        </div>
                      </div>
                      <h2
                        className={`text-xl font-semibold mb-2 text-center ${
                          mode === "light" ? "text-white" : "text-teal-100"
                        }`}
                      >
                        {course.courseName}
                      </h2>
                      <p
                        className={`text-sm mb-4 flex-grow text-center ${
                          mode === "light" ? "text-white" : "text-teal-200"
                        }`}
                      >
                        {course.description}
                      </p>
                      <button
                        className={`w-full py-2 px-4 rounded-full font-semibold transition-all duration-300 transform ${
                          course.available
                            ? "bg-white text-teal-900 hover:bg-gray-300 hover:translate-y-[-5px]"
                            : "bg-gray-400 text-gray-800 cursor-not-allowed"
                        }`}
                      >
                        {course.available ? "Learn More" : "Coming Soon"}
                      </button>
                    </div>
                    {!course.available && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Coming Soon
                      </div>
                    )}
                    <div
                      className="absolute inset-0 opacity-10 bg-cover bg-center z-0"
                      style={{ backgroundImage: `url(${course.character})` }}
                    />
                  </div>
                </motion.div>
              
               );
})}
            </div>
          </AnimatePresence>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p
                className={`text-xl text-center mt-8 ${
                  mode === "light" ? "text-teal-600" : "text-teal-400"
                }`}
              >
                No courses found. Try a different search term.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </ColorModeContext.Provider>
  );
};

export default Non_IT_Courses;
