import React, { useState, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaJava, FaPython, FaRegFileAlt, FaCogs, FaShieldAlt, FaMobileAlt, FaDatabase, FaUserCog, FaSearch, FaGraduationCap, FaSun, FaMoon, FaBook, FaPalette, FaChartBar, FaHeartbeat, FaGavel, FaGlobeAmericas, FaUserTie, FaCamera, FaMicrophone, FaTheaterMasks, FaLeaf, FaUtensils } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { useCourseContext } from "../../../Contexts/CourseContext";
import MotionFadeIn from "../../Common/MotionFadeIn";

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

  // Colorful gradient palette for Non‑IT course cards
  const gradients = useMemo(
    () => [
      "linear-gradient(135deg,#FF9A9E 0%,#FAD0C4 100%)",
      "linear-gradient(135deg,#A18CD1 0%,#FBC2EB 100%)",
      "linear-gradient(135deg,#FBC2EB 0%,#A6C1EE 100%)",
      "linear-gradient(135deg,#F6D365 0%,#FDA085 100%)",
      "linear-gradient(135deg,#84FAB0 0%,#8FD3F4 100%)",
      "linear-gradient(135deg,#FFE29F 0%,#FFA99F 48%,#FF719A 100%)",
      "linear-gradient(135deg,#89F7FE 0%,#66A6FF 100%)",
      "linear-gradient(135deg,#F5576C 0%,#F093FB 100%)",
    ],
    []
  );

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
          <MotionFadeIn>
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
          </MotionFadeIn>

          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => {
                const IconComponent = iconMap[course.icon] || FaGraduationCap;
                const gradient = gradients[index % gradients.length];

                return (
                  <motion.div
                    key={course.courseId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.99, y: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.04 }}
                  >
                    <div
                      className="h-full flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)] transition-all duration-300 cursor-pointer"
                      onClick={() => handleCardClick(course)}
                      role="button"
                      tabIndex={0}
                    >
                      {/* Top illustration / hero area */}
                      <div
                        className="relative h-40 w-full flex items-center justify-center overflow-hidden"
                        style={{ backgroundImage: gradient, backgroundSize: "cover" }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.48),transparent_55%)]" />
                        <div className="relative flex flex-col items-center justify-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                            {React.cloneElement(<IconComponent />, { size: 30, className: "text-teal-700" })}
                          </div>
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                        {/* Meta row */}
                        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide mb-2 text-slate-500">
                          <div className="flex items-center gap-1">
                            <span className="inline-flex items-center justify-center rounded-full bg-teal-50 text-teal-700 px-2 py-0.5">
                              10x Lesson
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            Non‑IT
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-1 text-slate-900 line-clamp-2">
                          {course.courseName}
                        </h2>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 mb-3 line-clamp-2">
                          {course.description}
                        </p>

                        {/* Instructor / stats row (static meta) */}
                        <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-700">
                              P
                            </span>
                            <span className="font-medium text-slate-700">Prefcol Mentor</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-emerald-500" />
                            <span>50+ Students</span>
                          </div>
                        </div>

                        {/* Footer row: rating + CTA */}
                        <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-100">
                          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-500">
                            <span className="text-[13px]">★★★★★</span>
                            <span className="text-slate-500">(10)</span>
                          </div>
                          <button
                            onClick={() => handleCardClick(course)}
                            disabled={!course.available}
                            className={`text-xs sm:text-sm font-semibold inline-flex items-center gap-1 ${
                              course.available
                                ? "text-teal-700 hover:text-teal-900"
                                : "text-slate-400 cursor-not-allowed"
                            }`}
                          >
                            {course.available ? "Learn More+" : "Coming Soon"}
                          </button>
                        </div>
                      </div>
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
