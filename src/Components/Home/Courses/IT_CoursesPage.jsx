import React, { useState, useContext } from 'react';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaJava, FaPython, FaRegFileAlt, FaCogs, FaShieldAlt, FaMobileAlt, FaDatabase, FaUserCog, FaSearch, FaGraduationCap, FaSun, FaMoon, FaBook, FaPalette, FaChartBar, FaHeartbeat, FaGavel, FaGlobeAmericas, FaUserTie, FaCamera, FaMicrophone, FaTheaterMasks, FaLeaf, FaUtensils } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Typography, 
  TextField, 
  InputAdornment, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Box,
  Container,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
// import { fetchCoursesByType } from './fetchCoursesByType';
import { useCourseContext } from "../../../Contexts/CourseContext";
import ITCourses from '../../../Student_Panel/pages/ITCourses';
import MotionFadeIn from '../../Common/MotionFadeIn';

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
<Box
  display="flex"
  alignItems="center"
  justifyContent="center"
  mb={2}
  mt={8}
  sx={{
    flexDirection: { xs: "column", sm: "row" }, 
  }}
>
  <FaGraduationCap size={40} color="#ffff" />
  <Typography
    variant="h4"
    component="span"
    sx={{
      ml: { xs: 0, sm: 1 }, 
      fontWeight: 700,
      color: '#ffff',
      letterSpacing: { xs: '0', sm: '0.5px', md: '1px' },
      textShadow: '2px 2px 4px rgba(238, 229, 229, 0.1)',
      fontSize: {
        xs: '1.25rem', 
        sm: '1.5rem',   
        md: '1.75rem',  
        lg: '2rem',     
      },
    }}
  >
    Courses
  </Typography>
</Box>

  );
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#004d40', // teal.900
            light: '#48a999',
            dark: '#004c40',
          },
          secondary: {
            main: '#f50057',
            light: '#ff4081',
            dark: '#c51162',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
        }
      : {
          primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
          },
          secondary: {
            main: '#f48fb1',
            light: '#ffc1e3',
            dark: '#bf5f82',
          },
          background: {
            default: '#303030',
            paper: '#424242',
          },
        }),
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          padding: '10px 20px',
        },
      },
    },
  },
});

// const coursesData = [
//   { id: 1, title: "Java Development", description: "Build robust Java applications", available: true, icon: <FaJava />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 2, title: "Python Programming", description: "Create versatile Python scripts", available: true, icon: <FaPython />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 3, title: "Manual Testing", description: "Master software testing techniques", available: true, icon: <FaRegFileAlt />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 4, title: "Java Automation", description: "Automate with Java frameworks", available: true, icon: <FaCogs />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 5, title: "API Testing", description: "Test APIs with Rest Assured", available: true, icon: <FaRegFileAlt />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 6, title: "Python Automation", description: "Automate using Python", available: true, icon: <FaCogs />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 7, title: "Product Management", description: "Lead product development", available: true, icon: <FaUserCog />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 8, title: "Business Analysis", description: "Develop analytical skills", available: true, icon: <FaRegFileAlt />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 9, title: "Mobile Development", description: "Build iOS and Android apps", available: true, icon: <FaMobileAlt />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 10, title: "Data Science & ML", description: "Explore AI and data analysis", available: true, icon: <FaDatabase />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 11, title: "DevOps & Cloud", description: "Master cloud technologies", available: true, icon: <FaCogs />, character: "/placeholder.svg?height=200&width=200" },
//   { id: 12, title: "Cybersecurity", description: "Protect against cyber threats", available: true, icon: <FaShieldAlt />, character: "/placeholder.svg?height=200&width=200" },
// ];  

// useEffect(() => {
//   fetch("http://localhost:5000/api/courses")
//     .then((res) => res.json())
//     .then((data) => setCourses(data))
//     .catch((err) => console.error("API error:", err));
// }, []);


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const IT_Courses = () => {
 
  // const [coursesData, setCoursesData] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm);
  const [mode, setMode] = React.useState('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
// Get course data from CourseContext
  const { itCourses, error} = useCourseContext();
  // useEffect(() => {
  //   const loadCourses = async () => {
  //     const data = await fetchCoursesByType("IT");
      
  //     // Convert string icons to React components
  //     const mappedData = data.map(course => ({
  //       ...course,
  //       iconComponent: iconMap[course.icon] || defaultIcon
  //     }));
      
  //     setCoursesData(mappedData);
  //   };

  //   loadCourses();
  // }, []);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const gradients = React.useMemo(() => [
    'linear-gradient(90deg,#FFD54F 0%, #FFB74D 100%)',
    'linear-gradient(90deg,#64B5F6 0%, #42A5F5 100%)',
    'linear-gradient(90deg,#4FC3F7 0%, #29B6F6 100%)',
    'linear-gradient(90deg,#66BB6A 0%, #43A047 100%)',
    'linear-gradient(90deg,#FF7043 0%, #FF8A65 100%)',
    'linear-gradient(90deg,#7986CB 0%, #5C6BC0 100%)',
  ], []);



  // const filteredCourses = React.useMemo(() => 
  //   itCourses.filter(course =>
  //     course.courseName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
  //     course.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  //   ),
  //   [debouncedSearchTerm]
  // );

   const filteredCourses = useMemo(() => {
    if (!Array.isArray(itCourses)) return [];

    return itCourses.filter((course) =>
      course.courseName?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      course.description?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [itCourses, debouncedSearchTerm]);

    const handleCardClick = (course) => {
    if (course.available) {
      navigate(`/it-courses/${course.courseId}`);
    } else {
      alert("This course is coming soon! Stay tuned for updates.");
    }
  };

//   const renderCourseIcon = (courses, size = 30) => {
//     debugger;
//   return React.cloneElement(courses.icon, { size });
// };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            // Soft mint background similar to reference design
            background: '#f6fbf9',
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="xl">
            <MotionFadeIn>
            <Box sx={{ 
              py: { xs: 4, md: 6 }, 
              px: { xs: 2, md: 4 },
              mb: { xs: 3, md: 5 }, 
              // Light header panel instead of dark gradient
              background: '#ffffff',
              borderRadius: '24px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(15, 118, 110, 0.08)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid #e3f3ec',
            }}>
              <Logo />
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  color: '#12352f',
                  mb: { xs: 2, md: 3 }, 
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  textShadow: '0 1px 2px rgba(15, 23, 42, 0.12)'
                }}
              >
                All IT Courses
              </Typography>
              <Box sx={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaSearch color={theme.palette.primary.main} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                      backgroundColor: theme.palette.background.paper,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      },
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
              </Box>
              {!isSmallScreen && (
                <Box
                  // component="img"
                  // src="/placeholder.svg?height=400&width=600"
                  // alt="Students learning"
                  // sx={{
                  //   position: 'absolute',
                  //   right: '-100px',
                  //   bottom: '-50px',
                  //   width: '600px',
                  //   height: '400px',
                  //   opacity: 0.2,
                  //   objectFit: 'cover',
                  //   objectPosition: 'center',
                  // }}
                />
              )}
              {/* <Tooltip title={`Switch to ${theme.palette.mode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton
                  onClick={colorMode.toggleColorMode}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: theme.palette.mode === 'light' ? 'white' : 'rgba(0,0,0,0.87)',
                  }}
                >
                  {theme.palette.mode === 'light' ? <FaMoon /> : <FaSun />}
                </IconButton>
              </Tooltip> */}
            </Box>
            </MotionFadeIn>

            <AnimatePresence>
              <Grid container spacing={3}>
{filteredCourses.map((course, index) => {
  const IconComponent = iconMap[course.icon] || FaGraduationCap;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={course.courseId}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.99, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.05 }}
      >
        <Card 
          onClick={() => handleCardClick(course)}
          sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e3f3ec',
            boxShadow: '0 16px 40px rgba(15, 118, 110, 0.06)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 24px 60px rgba(15, 118, 110, 0.12)',
              borderColor: '#00b074',
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0, position: 'relative', zIndex: 1 }} className="course-card">
            {/* Top banner area – soft green accent like reference cards */}
            <Box
              className="course-hero"
              sx={{
                background: '#f0faf5',
                borderBottom: '1px solid #e3f3ec',
                px: 2.5,
                py: 1.75,
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  color: '#12352f',
                  fontWeight: 700,
                  textAlign: 'left',
                  width: '100%',
                  fontSize: '1rem',
                }}
              >
                {course.courseName}
              </Typography>
            </Box>
            <Box className="course-card-body" sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    backgroundColor: course.available ? theme.palette.primary.main : theme.palette.action.disabled,
                    color: theme.palette.background.paper,
                    boxShadow: '0 6px 18px rgba(2,6,23,0.06)',
                    transform: 'translateY(-28px)'
                  }}
                >
                  {React.cloneElement(<IconComponent />, { size: 26 })}
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3, flexGrow: 1, textAlign: 'center' }}>
                {course.description}
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                sx={{ 
                  mt: 'auto',
                  backgroundColor: course.available ? '#004d40' : theme.palette.action.disabled,
                  color: theme.palette.background.paper,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.18)',
                      backgroundColor: course.available ? '#004c40' : theme.palette.action.disabled,
                  }
                }}
              >
                {course.available ? 'Learn More' : 'Coming Soon'}
              </Button>
            </Box>
          </CardContent>
          {!course.available && (
            <Chip
              label="Coming Soon"
              color="secondary"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.background.paper,
                zIndex: 2,
              }}
            />
          )}
        </Card>
      </motion.div>
    </Grid>
  );
})}
              </Grid>
    
            </AnimatePresence>
 
            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6" align="center" color="primary" sx={{ mt: 4 }}>
                  No courses found. Try a different search term.
                </Typography>
              </motion.div>
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default IT_Courses;

// import React, { useState, useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaJava,
//   FaPython,
//   FaRegFileAlt,
//   FaCogs,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaDatabase,
//   FaUserCog,
//   FaSearch,
//   FaGraduationCap,
//   FaSun,
//   FaMoon,
// } from "react-icons/fa"
// import { motion, AnimatePresence, useAnimation } from "framer-motion"
// import {
//   Typography,
//   TextField,
//   InputAdornment,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   Box,
//   Container,
//   Chip,
//   Avatar,
//   IconButton,
//   Tooltip,
//   useMediaQuery,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
// } from "@mui/material"

// // Logo component
// const Logo = () => {
//   return (
//     <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
//       <FaGraduationCap size={40} color="#004d40" />
//       <Typography
//         variant="h4"
//         component="span"
//         sx={{
//           ml: 1,
//           fontWeight: 700,
//           color: "#004d40",
//           letterSpacing: "0.5px",
//           textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//         }}
//       >
//         Courses
//       </Typography>
//     </Box>
//   )
// }

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#004d40",
//             light: "#48a999",
//             dark: "#004c40",
//           },
//           secondary: {
//             main: "#f50057",
//             light: "#ff4081",
//             dark: "#c51162",
//           },
//           background: {
//             default: "#f5f5f5",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//             light: "#e3f2fd",
//             dark: "#42a5f5",
//           },
//           secondary: {
//             main: "#f48fb1",
//             light: "#ffc1e3",
//             dark: "#bf5f82",
//           },
//           background: {
//             default: "#303030",
//             paper: "#424242",
//           },
//         }),
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h2: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.3s ease-in-out",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "25px",
//           padding: "10px 20px",
//         },
//       },
//     },
//   },
// })

// const coursesData = [
//   {
//     id: 1,
//     title: "Java Development",
//     description: "Build robust Java applications",
//     available: true,
//     icon: <FaJava />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 2,
//     title: "Python Programming",
//     description: "Create versatile Python scripts",
//     available: true,
//     icon: <FaPython />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Master software testing techniques",
//     available: true,
//     icon: <FaRegFileAlt />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 4,
//     title: "Java Automation",
//     description: "Automate with Java frameworks",
//     available: true,
//     icon: <FaCogs />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 5,
//     title: "API Testing",
//     description: "Test APIs with Rest Assured",
//     available: true,
//     icon: <FaRegFileAlt />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 6,
//     title: "Python Automation",
//     description: "Automate using Python",
//     available: true,
//     icon: <FaCogs />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Lead product development",
//     available: true,
//     icon: <FaUserCog />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 8,
//     title: "Business Analysis",
//     description: "Develop analytical skills",
//     available: true,
//     icon: <FaRegFileAlt />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 9,
//     title: "Mobile Development",
//     description: "Build iOS and Android apps",
//     available: true,
//     icon: <FaMobileAlt />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 10,
//     title: "Data Science & ML",
//     description: "Explore AI and data analysis",
//     available: true,
//     icon: <FaDatabase />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 11,
//     title: "DevOps & Cloud",
//     description: "Master cloud technologies",
//     available: true,
//     icon: <FaCogs />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect against cyber threats",
//     available: true,
//     icon: <FaShieldAlt />,
//     character: "/placeholder.svg?height=200&width=200",
//   },
// ]

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// const Courses = () => {
//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm)
//   const [mode, setMode] = React.useState("light")
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       },
//     }),
//     [],
//   )

//   const [selectedCourse, setSelectedCourse] = useState(null)

//   React.useEffect(() => {
//     const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300)
//     return () => clearTimeout(timer)
//   }, [searchTerm])

//   const handleCardClick = (course) => {
//     if (course.available) {
//       setSelectedCourse(course)
//     } else {
//       alert("This course is coming soon! Stay tuned for updates.")
//     }
//   }

//   const handleCloseDialog = () => {
//     setSelectedCourse(null)
//   }

//   const handleEnrollNow = () => {
//     if (selectedCourse) {
//       navigate(`/it-courses/${selectedCourse.id}`)
//     }
//   }

//   const filteredCourses = React.useMemo(
//     () =>
//       coursesData.filter(
//         (course) =>
//           course.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
//           course.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
//       ),
//     [debouncedSearchTerm],
//   )

//   const controls = useAnimation()

//   React.useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls])

//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     in: { opacity: 1, y: 0 },
//     out: { opacity: 0, y: -20 },
//   }

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   }

//   const MotionContainer = motion(Container)
//   const MotionGrid = motion(Grid)
//   const MotionCard = motion(Card)
//   const MotionTypography = motion(Typography)
//   const MotionBox = motion(Box)

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MotionContainer
//           maxWidth={false}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           sx={{
//             minHeight: "100vh",
//             background: theme.palette.background.default,
//             py: { xs: 4, md: 6 },
//             overflow: "hidden",
//           }}
//         >
//           <MotionBox
//             sx={{
//               py: { xs: 4, md: 6 },
//               px: { xs: 2, md: 4 },
//               mb: { xs: 3, md: 5 },
//               background:
//                 theme.palette.mode === "light"
//                   ? "linear-gradient(135deg, #004d40 0%, #004c40 100%)"
//                   : "linear-gradient(135deg, #48a999 0%, #004d40 100%)",
//               borderRadius: "24px",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Logo />
//             <MotionTypography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{
//                 color: theme.palette.mode === "light" ? "white" : "rgba(0,0,0,0.87)",
//                 mb: { xs: 2, md: 3 },
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Explore Our Courses
//             </MotionTypography>
//             <MotionBox
//               sx={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <FaSearch color={theme.palette.primary.main} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     backgroundColor: theme.palette.background.paper,
//                     transition: "all 0.3s ease-in-out",
//                     "&:hover": {
//                       boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//                     },
//                     "& fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: theme.palette.primary.main,
//                     },
//                   },
//                 }}
//               />
//             </MotionBox>
//             {!isSmallScreen && (
//               <MotionBox
//                 component="img"
//                 src="/placeholder.svg?height=400&width=600"
//                 alt="Students learning"
//                 sx={{
//                   position: "absolute",
//                   right: "-100px",
//                   bottom: "-50px",
//                   width: "600px",
//                   height: "400px",
//                   opacity: 0.2,
//                   objectFit: "cover",
//                   objectPosition: "center",
//                 }}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 0.2, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//               />
//             )}
//           </MotionBox>

//           <AnimatePresence>
//             <MotionGrid container spacing={3}>
//               {filteredCourses.map((course, index) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
//                   <MotionCard
//                     onClick={() => handleCardClick(course)}
//                     sx={{
//                       height: "100%",
//                       display: "flex",
//                       flexDirection: "column",
//                       cursor: "pointer",
//                       background: course.available
//                         ? theme.palette.background.paper
//                         : theme.palette.action.disabledBackground,
//                       position: "relative",
//                       overflow: "hidden",
//                       transition: "all 0.3s ease-in-out",
//                       "&:hover": {
//                         transform: "translateY(-5px)",
//                         boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//                       },
//                     }}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={controls}
//                     exit={{ opacity: 0, y: -50 }}
//                     transition={{ duration: 0.3 }}
//                     custom={index}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <CardContent
//                       sx={{
//                         flexGrow: 1,
//                         display: "flex",
//                         flexDirection: "column",
//                         p: 3,
//                         position: "relative",
//                         zIndex: 1,
//                       }}
//                     >
//                       <MotionBox
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           mb: 2,
//                         }}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ duration: 0.3, delay: 0.1 }}
//                       >
//                         <Avatar
//                           sx={{
//                             width: 60,
//                             height: 60,
//                             backgroundColor: course.available
//                               ? theme.palette.primary.main
//                               : theme.palette.action.disabled,
//                             color: theme.palette.background.paper,
//                             boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//                           }}
//                         >
//                           {React.cloneElement(course.icon, { size: 30 })}
//                         </Avatar>
//                       </MotionBox>
//                       <MotionTypography
//                         variant="h6"
//                         component="h2"
//                         gutterBottom
//                         sx={{ color: theme.palette.text.primary, mb: 2, fontSize: "1.1rem", textAlign: "center" }}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.2 }}
//                       >
//                         {course.title}
//                       </MotionTypography>
//                       <MotionTypography
//                         variant="body2"
//                         sx={{ color: theme.palette.text.secondary, mb: 3, flexGrow: 1, textAlign: "center" }}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3, delay: 0.3 }}
//                       >
//                         {course.description}
//                       </MotionTypography>
//                       <MotionBox
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.4 }}
//                       >
//                         <Button
//                           variant="contained"
//                           fullWidth
//                           sx={{
//                             mt: "auto",
//                             backgroundColor: course.available ? "#004d40" : theme.palette.action.disabled,
//                             color: theme.palette.background.paper,
//                             "&:hover": {
//                               backgroundColor: course.available ? "#004c40" : theme.palette.action.disabled,
//                             },
//                           }}
//                         >
//                           {course.available ? "Enroll Now" : "Coming Soon"}
//                         </Button>
//                       </MotionBox>
//                     </CardContent>
//                     {!course.available && (
//                       <Chip
//                         label="Coming Soon"
//                         color="secondary"
//                         size="small"
//                         sx={{
//                           position: "absolute",
//                           top: 16,
//                           right: 16,
//                           backgroundColor: theme.palette.secondary.main,
//                           color: theme.palette.background.paper,
//                           zIndex: 2,
//                         }}
//                       />
//                     )}
//                     <MotionBox
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         opacity: 0.1,
//                         backgroundImage: `url(${course.character})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         zIndex: 0,
//                       }}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 0.1 }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </MotionCard>
//                 </Grid>
//               ))}
//             </MotionGrid>
//           </AnimatePresence>

//           {filteredCourses.length === 0 && (
//             <MotionTypography
//               variant="h6"
//               align="center"
//               color="primary"
//               sx={{ mt: 4 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               No courses found. Try a different search term.
//             </MotionTypography>
//           )}

//           <AnimatePresence>
//             {selectedCourse && (
//               <Dialog
//                 open={!!selectedCourse}
//                 onClose={handleCloseDialog}
//                 maxWidth="md"
//                 fullWidth
//                 TransitionComponent={motion.div}
//                 TransitionProps={{
//                   initial: { opacity: 0, scale: 0.9, y: 50 },
//                   animate: { opacity: 1, scale: 1, y: 0 },
//                   exit: { opacity: 0, scale: 0.9, y: 50 },
//                   transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
//                 }}
//               >
//                 <DialogTitle>
//                   <MotionBox
//                     display="flex"
//                     alignItems="center"
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Avatar
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.background.paper,
//                         marginRight: 2,
//                       }}
//                     >
//                       {React.cloneElement(selectedCourse.icon, { size: 30 })}
//                     </Avatar>
//                     <Typography variant="h5">{selectedCourse.title}</Typography>
//                   </MotionBox>
//                 </DialogTitle>
//                 <DialogContent>
//                   <MotionTypography
//                     variant="body1"
//                     paragraph
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.1 }}
//                   >
//                     {selectedCourse.description}
//                   </MotionTypography>
//                   <MotionTypography
//                     variant="body1"
//                     paragraph
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.2 }}
//                   >
//                     This course will provide you with in-depth knowledge and practical skills in {selectedCourse.title}.{" "}
//                     You'll learn from industry experts and work on real-world projects to enhance your understanding.
//                   </MotionTypography>
//                   <MotionTypography
//                     variant="body1"
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.3 }}
//                   >
//                     Key topics covered:
//                   </MotionTypography>
//                   <MotionBox
//                     component="ul"
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.4 }}
//                   >
//                     <li>Fundamentals of {selectedCourse.title}</li>
//                     <li>Advanced techniques and best practices</li>
//                     <li>Real-world application and case studies</li>
//                     <li>Industry-relevant tools and frameworks</li>
//                   </MotionBox>
//                 </DialogContent>
//                 <DialogActions>
//                   <MotionBox
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.5 }}
//                   >
//                     <Button onClick={handleCloseDialog}>Close</Button>
//                     <Button variant="contained" color="primary" onClick={handleEnrollNow}>
//                       Enroll Now
//                     </Button>
//                   </MotionBox>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </AnimatePresence>
//         </MotionContainer>
//         <MotionBox
//           component={Button}
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate("/non-it-courses")}
//           sx={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//             "&:hover": {
//               boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             },
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Non-IT Courses
//         </MotionBox>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export default Courses



// import React, { useState, useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaJava,
//   FaPython,
//   FaRegFileAlt,
//   FaCogs,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaDatabase,
//   FaUserCog,
//   FaSearch,
//   FaClock,
//   FaGraduationCap,
//   FaChevronLeft,
//   FaChevronRight,
//   FaList,
//   FaTh,
// } from "react-icons/fa"
// import { motion, AnimatePresence, useAnimation } from "framer-motion"
// import {
//   Typography,
//   TextField,
//   InputAdornment,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   Box,
//   Container,
//   Chip,
//   Avatar,
//   useMediaQuery,
//   Grid,
//   IconButton,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "@mui/material"
// import { debounce } from "lodash"

// // import Logo from "./Logo"

// // Logo component
// // const Logo = () => {
// //   return (
// //     <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
// //       <FaGraduationCap size={40} color="#004d40" />
// //       <Typography
// //         variant="h4"
// //         component="span"
// //         sx={{
// //           ml: 1,
// //           fontWeight: 700,
// //           color: "#004d40",
// //           letterSpacing: "0.5px",
// //           textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
// //         }}
// //       >
// //         Courses
// //       </Typography>
// //     </Box>
// //   )
// // }

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#1e88e5",
//             light: "#4b9fea",
//             dark: "#1565c0",
//           },
//           secondary: {
//             main: "#ff4081",
//             light: "#ff79b0",
//             dark: "#c60055",
//           },
//           background: {
//             default: "#f5f5f5",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//             light: "#e3f2fd",
//             dark: "#42a5f5",
//           },
//           secondary: {
//             main: "#f48fb1",
//             light: "#ffc1e3",
//             dark: "#bf5f82",
//           },
//           background: {
//             default: "#303030",
//             paper: "#424242",
//           },
//         }),
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h2: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.3s ease-in-out",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "25px",
//           padding: "10px 20px",
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//         },
//       },
//     },
//   },
// })

// const coursesData = [
//   {
//     id: 1,
//     title: "Java Development",
//     description: "Build robust Java applications",
//     available: true,
//     icon: <FaJava />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Development",
//     tags: ["java", "programming", "backend"],
//     category: "Programming",
//   },
//   {
//     id: 2,
//     title: "Python Programming",
//     description: "Create versatile Python scripts",
//     available: true,
//     icon: <FaPython />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Programming",
//     tags: ["python", "programming", "scripting"],
//     category: "Programming",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Master software testing techniques",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Manual+Testing",
//     tags: ["testing", "manual", "qa"],
//     category: "Testing",
//   },
//   {
//     id: 4,
//     title: "Java Automation",
//     description: "Automate with Java frameworks",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Automation",
//     tags: ["java", "automation", "testing"],
//     category: "Testing",
//   },
//   {
//     id: 5,
//     title: "API Testing",
//     description: "Test APIs with Rest Assured",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=API+Testing",
//     tags: ["testing", "api", "rest"],
//     category: "Testing",
//   },
//   {
//     id: 6,
//     title: "Python Automation",
//     description: "Automate using Python",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Automation",
//     tags: ["python", "automation", "scripting"],
//     category: "Testing",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Lead product development",
//     available: true,
//     icon: <FaUserCog />,
//     image: "/placeholder.svg?height=300&width=400&text=Product+Management",
//     tags: ["product", "management", "agile"],
//     category: "Management",
//   },
//   {
//     id: 8,
//     title: "Business Analysis",
//     description: "Develop analytical skills",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Business+Analysis",
//     tags: ["business", "analysis", "requirements"],
//     category: "Management",
//   },
//   {
//     id: 9,
//     title: "Mobile Development",
//     description: "Build iOS and Android apps",
//     available: true,
//     icon: <FaMobileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Mobile+Development",
//     tags: ["mobile", "development", "ios", "android"],
//     category: "Programming",
//   },
//   {
//     id: 10,
//     title: "Data Science & ML",
//     description: "Explore AI and data analysis",
//     available: true,
//     icon: <FaDatabase />,
//     image: "/placeholder.svg?height=300&width=400&text=Data+Science+%26+ML",
//     tags: ["data", "science", "machine learning", "ai"],
//     category: "Data",
//   },
//   {
//     id: 11,
//     title: "DevOps & Cloud",
//     description: "Master cloud technologies",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=DevOps+%26+Cloud",
//     tags: ["devops", "cloud", "aws", "azure", "gcp"],
//     category: "DevOps",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect against cyber threats",
//     available: true,
//     icon: <FaShieldAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Cybersecurity",
//     tags: ["cybersecurity", "security", "penetration testing"],
//     category: "Security",
//   },
// ]

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// const Courses = () => {
//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm)
//   const [mode, setMode] = React.useState("light")
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       },
//     }),
//     [],
//   )

//   const [selectedCourse, setSelectedCourse] = useState(null)
//   const [categoryFilter, setCategoryFilter] = useState("All")
//   const [viewMode, setViewMode] = useState("grid")

//   React.useEffect(() => {
//     const debouncedSearch = debounce((term) => {
//       setDebouncedSearchTerm(term)
//     }, 300)

//     debouncedSearch(searchTerm)

//     return () => {
//       debouncedSearch.cancel()
//     }
//   }, [searchTerm])

//   const handleCardClick = (course) => {
//     if (course.available) {
//       setSelectedCourse(course)
//     } else {
//       alert("This course is coming soon! Stay tuned for updates.")
//     }
//   }

//   const handleCloseDetails = () => {
//     setSelectedCourse(null)
//   }

//   const handleEnrollNow = () => {
//     if (selectedCourse) {
//       navigate(`/it-courses/${selectedCourse.id}`)
//     }
//   }

//   const filteredCourses = React.useMemo(
//     () =>
//       coursesData.filter((course) => {
//         const searchLower = debouncedSearchTerm.toLowerCase()
//         const categoryMatch = categoryFilter === "All" || course.category === categoryFilter
//         return (
//           categoryMatch &&
//           (course.title.toLowerCase().includes(searchLower) ||
//             course.description.toLowerCase().includes(searchLower) ||
//             (course.tags && course.tags.some((tag) => tag.toLowerCase().includes(searchLower))))
//         )
//       }),
//     [debouncedSearchTerm, categoryFilter],
//   )

//   const controls = useAnimation()

//   React.useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls])

//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     in: { opacity: 1, y: 0 },
//     out: { opacity: 0, y: -20 },
//   }

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   }

//   const MotionContainer = motion(Container)
//   const MotionBox = motion(Box)
//   const MotionTypography = motion(Typography)
//   const MotionCard = motion(Card)

//   const renderCourseCard = (course, index) => (
//     <Grid
//       item
//       xs={12}
//       sm={viewMode === "grid" ? 6 : 12}
//       md={viewMode === "grid" ? 4 : 12}
//       lg={viewMode === "grid" ? 3 : 12}
//       key={course.id}
//     >
//       <MotionCard
//         onClick={() => handleCardClick(course)}
//         sx={{
//           height: viewMode === "grid" ? 340 : 200,
//           display: "flex",
//           flexDirection: viewMode === "grid" ? "column" : "row",
//           cursor: "pointer",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.3s ease-in-out",
//           "&:hover": {
//             transform: "translateY(-5px)",
//             boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//           },
//         }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.3 }}
//         custom={index}
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <CardMedia
//           component="img"
//           image={course.image}
//           alt={course.title}
//           sx={{
//             height: viewMode === "grid" ? 140 : 200,
//             width: viewMode === "grid" ? "100%" : 200,
//           }}
//         />
//         <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//           <Box>
//             <Typography variant="h6" component="h2" gutterBottom>
//               {course.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//               {course.description}
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
//             <Chip label={course.category} size="small" color="primary" />
//             <Typography variant="caption" color="text.secondary">
//               <FaClock style={{ marginRight: "4px", verticalAlign: "middle" }} />8 weeks
//             </Typography>
//           </Box>
//         </CardContent>
//         {!course.available && (
//           <Chip
//             label="Coming Soon"
//             color="secondary"
//             size="small"
//             sx={{
//               position: "absolute",
//               top: 16,
//               right: 16,
//               backgroundColor: theme.palette.secondary.main,
//               color: theme.palette.background.paper,
//               zIndex: 2,
//             }}
//           />
//         )}
//       </MotionCard>
//     </Grid>
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MotionContainer
//           maxWidth={false}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           sx={{
//             minHeight: "100vh",
//             background: theme.palette.background.default,
//             py: { xs: 4, md: 6 },
//             px: { xs: 2, md: 4 },
//             overflow: "hidden",
//           }}
//         >
//           <MotionBox
//             sx={{
//               py: { xs: 4, md: 6 },
//               px: { xs: 2, md: 4 },
//               mb: { xs: 3, md: 5 },
//               background: theme.palette.primary.main,
//               borderRadius: "24px",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* <Logo /> */}
//             <MotionTypography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{
//                 color: theme.palette.common.white,
//                 mb: { xs: 2, md: 3 },
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Explore Our Courses
//             </MotionTypography>
//             <MotionBox
//               sx={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <FaSearch color={theme.palette.common.white} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     transition: "all 0.3s ease-in-out",
//                     "&:hover": {
//                       backgroundColor: "rgba(255, 255, 255, 0.2)",
//                     },
//                     "& fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: theme.palette.common.white,
//                     },
//                     "& input": {
//                       color: theme.palette.common.white,
//                     },
//                     "& input::placeholder": {
//                       color: "rgba(255, 255, 255, 0.7)",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               />
//             </MotionBox>
//           </MotionBox>

//           <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
//             <FormControl sx={{ minWidth: 120, mr: 2, mb: { xs: 2, sm: 0 } }}>
//               <InputLabel id="category-filter-label">Category</InputLabel>
//               <Select
//                 labelId="category-filter-label"
//                 value={categoryFilter}
//                 label="Category"
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//               >
//                 <MenuItem value="All">All Categories</MenuItem>
//                 {Array.from(new Set(coursesData.map((course) => course.category))).map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <ToggleButtonGroup
//               value={viewMode}
//               exclusive
//               onChange={(e, newMode) => newMode && setViewMode(newMode)}
//               aria-label="view mode"
//             >
//               <ToggleButton value="grid" aria-label="grid view">
//                 <FaTh />
//               </ToggleButton>
//               <ToggleButton value="list" aria-label="list view">
//                 <FaList />
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </Box>

//           <Grid container spacing={3}>
//             {filteredCourses.map((course, index) => renderCourseCard(course, index))}
//           </Grid>

//           {filteredCourses.length === 0 && (
//             <MotionTypography
//               variant="h6"
//               align="center"
//               color="primary"
//               sx={{ mt: 4 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               No courses found. Try a different search term or category.
//             </MotionTypography>
//           )}

//           <AnimatePresence>
//             {selectedCourse && (
//               <Dialog
//                 open={!!selectedCourse}
//                 onClose={handleCloseDetails}
//                 maxWidth="md"
//                 fullWidth
//                 TransitionComponent={motion.div}
//                 TransitionProps={{
//                   initial: { opacity: 0, scale: 0.9, y: 50 },
//                   animate: { opacity: 1, scale: 1, y: 0 },
//                   exit: { opacity: 0, scale: 0.9, y: 50 },
//                   transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
//                 }}
//               >
//                 <DialogTitle>
//                   <Box display="flex" alignItems="center">
//                     <Avatar
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.common.white,
//                         marginRight: 2,
//                       }}
//                     >
//                       {React.cloneElement(selectedCourse.icon, { size: 30 })}
//                     </Avatar>
//                     <Typography variant="h5">{selectedCourse.title}</Typography>
//                   </Box>
//                 </DialogTitle>
//                 <DialogContent>
//                   <Box sx={{ mb: 3 }}>
//                     <img
//                       src={selectedCourse.image || "/placeholder.svg"}
//                       alt={selectedCourse.title}
//                       style={{ width: "100%", borderRadius: "8px" }}
//                     />
//                   </Box>
//                   <Typography variant="body1" paragraph>
//                     {selectedCourse.description}
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     This course will provide you with in-depth knowledge and practical skills in {selectedCourse.title}.
//                     You'll learn from industry experts and work on real-world projects to enhance your understanding.
//                   </Typography>
//                   <Typography variant="h6" gutterBottom>
//                     Key topics covered:
//                   </Typography>
//                   <Box component="ul" sx={{ pl: 3 }}>
//                     <li>Fundamentals of {selectedCourse.title}</li>
//                     <li>Advanced techniques and best practices</li>
//                     <li>Real-world application and case studies</li>
//                     <li>Industry-relevant tools and frameworks</li>
//                   </Box>
//                   <Box sx={{ mt: 3 }}>
//                     <Typography variant="subtitle1" gutterBottom>
//                       Course Details:
//                     </Typography>
//                     <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
//                       <Typography variant="body2">
//                         <FaClock style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Duration: 8 weeks
//                       </Typography>
//                       <Typography variant="body2">
//                         <FaGraduationCap style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Level: Beginner to Intermediate
//                       </Typography>
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                       {selectedCourse.tags.map((tag) => (
//                         <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
//                       ))}
//                     </Box>
//                   </Box>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseDetails}>Close</Button>
//                   <Button variant="contained" color="primary" onClick={handleEnrollNow}>
//                     Enroll Now
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </AnimatePresence>
//         </MotionContainer>
//         <MotionBox
//           component={Button}
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate("/non-it-courses")}
//           sx={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//             "&:hover": {
//               boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             },
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Non-IT Courses
//         </MotionBox>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// const NextArrow = (props) => {
//   const { className, style, onClick } = props
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         top: "50%",
//         right: -20,
//         transform: "translateY(-50%)",
//         zIndex: 2,
//         backgroundColor: "rgba(0, 0, 0, 0.3)",
//         color: "white",
//         "&:hover": {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//         },
//       }}
//     >
//       <FaChevronRight />
//     </IconButton>
//   )
// }

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         top: "50%",
//         left: -20,
//         transform: "translateY(-50%)",
//         zIndex: 2,
//         backgroundColor: "rgba(0, 0, 0, 0.3)",
//         color: "white",
//         "&:hover": {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//         },
//       }}
//     >
//       <FaChevronLeft />
//     </IconButton>
//   )
// }

// export default Courses


// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaJava,
//   FaPython,
//   FaRegFileAlt,
//   FaCogs,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaDatabase,
//   FaUserCog,
//   FaSearch,
//   FaClock,
//   FaGraduationCap,
//   FaList,
//   FaTh,
// } from "react-icons/fa"
// import { motion, AnimatePresence, useAnimation } from "framer-motion"
// import {
//   Typography,
//   TextField,
//   InputAdornment,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   Box,
//   Container,
//   Chip,
//   Avatar,
//   useMediaQuery,
//   Grid,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "@mui/material"
// import { debounce } from "lodash"
// import Java from "../assets/Hero.png"

// // Logo component
// // const Logo = () => {
// //   return (
// //     <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
// //       <FaGraduationCap size={40} color="#ffffff" />
// //       <Typography
// //         variant="h4"
// //         component="span"
// //         sx={{
// //           ml: 1,
// //           fontWeight: 700,
// //           color: "#ffffff",
// //           letterSpacing: "0.5px",
// //           textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
// //         }}
// //       >
// //         Courses
// //       </Typography>
// //     </Box>
// //   )
// // }

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#2196f3",
//             light: "#64b5f6",
//             dark: "#1976d2",
//           },
//           secondary: {
//             main: "#ff4081",
//             light: "#ff79b0",
//             dark: "#c60055",
//           },
//           background: {
//             default: "#f5f5f5",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//             light: "#e3f2fd",
//             dark: "#42a5f5",
//           },
//           secondary: {
//             main: "#f48fb1",
//             light: "#ffc1e3",
//             dark: "#bf5f82",
//           },
//           background: {
//             default: "#303030",
//             paper: "#424242",
//           },
//         }),
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h2: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.3s ease-in-out",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "25px",
//           padding: "10px 20px",
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//         },
//       },
//     },
//   },
// })

// const coursesData = [
//   {
//     id: 1,
//     title: "Java Development",
//     description: "Build robust Java applications",
//     available: true,
//     icon: <FaJava />,
//     image: {Java},
//     tags: ["java", "programming", "backend"],
//     category: "Programming",
//   },
//   {
//     id: 2,
//     title: "Python Programming",
//     description: "Create versatile Python scripts",
//     available: true,
//     icon: <FaPython />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Programming",
//     tags: ["python", "programming", "scripting"],
//     category: "Programming",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Master software testing techniques",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Manual+Testing",
//     tags: ["testing", "manual", "qa"],
//     category: "Testing",
//   },
//   {
//     id: 4,
//     title: "Java Automation",
//     description: "Automate with Java frameworks",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Automation",
//     tags: ["java", "automation", "testing"],
//     category: "Testing",
//   },
//   {
//     id: 5,
//     title: "API Testing",
//     description: "Test APIs with Rest Assured",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=API+Testing",
//     tags: ["testing", "api", "rest"],
//     category: "Testing",
//   },
//   {
//     id: 6,
//     title: "Python Automation",
//     description: "Automate using Python",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Automation",
//     tags: ["python", "automation", "scripting"],
//     category: "Testing",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Lead product development",
//     available: true,
//     icon: <FaUserCog />,
//     image: "/placeholder.svg?height=300&width=400&text=Product+Management",
//     tags: ["product", "management", "agile"],
//     category: "Management",
//   },
//   {
//     id: 8,
//     title: "Business Analysis",
//     description: "Develop analytical skills",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Business+Analysis",
//     tags: ["business", "analysis", "requirements"],
//     category: "Management",
//   },
//   {
//     id: 9,
//     title: "Mobile Development",
//     description: "Build iOS and Android apps",
//     available: true,
//     icon: <FaMobileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Mobile+Development",
//     tags: ["mobile", "development", "ios", "android"],
//     category: "Programming",
//   },
//   {
//     id: 10,
//     title: "Data Science & ML",
//     description: "Explore AI and data analysis",
//     available: true,
//     icon: <FaDatabase />,
//     image: "/placeholder.svg?height=300&width=400&text=Data+Science+%26+ML",
//     tags: ["data", "science", "machine learning", "ai"],
//     category: "Data",
//   },
//   {
//     id: 11,
//     title: "DevOps & Cloud",
//     description: "Master cloud technologies",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=DevOps+%26+Cloud",
//     tags: ["devops", "cloud", "aws", "azure", "gcp"],
//     category: "DevOps",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect against cyber threats",
//     available: true,
//     icon: <FaShieldAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Cybersecurity",
//     tags: ["cybersecurity", "security", "penetration testing"],
//     category: "Security",
//   },
// ]

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// const Courses = () => {
//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm)
//   const [mode, setMode] = React.useState("light")
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       },
//     }),
//     [],
//   )

//   const [selectedCourse, setSelectedCourse] = useState(null)
//   const [categoryFilter, setCategoryFilter] = useState("All")
//   const [viewMode, setViewMode] = useState("grid")

//   React.useEffect(() => {
//     const debouncedSearch = debounce((term) => {
//       setDebouncedSearchTerm(term)
//     }, 300)

//     debouncedSearch(searchTerm)

//     return () => {
//       debouncedSearch.cancel()
//     }
//   }, [searchTerm])

//   const handleCardClick = (course) => {
//     if (course.available) {
//       setSelectedCourse(course)
//     } else {
//       alert("This course is coming soon! Stay tuned for updates.")
//     }
//   }

//   const handleCloseDetails = () => {
//     setSelectedCourse(null)
//   }

//   const handleEnrollNow = () => {
//     if (selectedCourse) {
//       navigate(`/it-courses/${selectedCourse.id}`)
//     }
//   }

//   const filteredCourses = React.useMemo(
//     () =>
//       coursesData.filter((course) => {
//         const searchLower = debouncedSearchTerm.toLowerCase()
//         const categoryMatch = categoryFilter === "All" || course.category === categoryFilter
//         return (
//           categoryMatch &&
//           (course.title.toLowerCase().includes(searchLower) ||
//             course.description.toLowerCase().includes(searchLower) ||
//             (course.tags && course.tags.some((tag) => tag.toLowerCase().includes(searchLower))))
//         )
//       }),
//     [debouncedSearchTerm, categoryFilter],
//   )

//   const controls = useAnimation()

//   React.useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls])

//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     in: { opacity: 1, y: 0 },
//     out: { opacity: 0, y: -20 },
//   }

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   }

//   const MotionContainer = motion(Container)
//   const MotionBox = motion(Box)
//   const MotionTypography = motion(Typography)
//   const MotionCard = motion(Card)

//   const renderCourseCard = (course, index) => (
//     <Grid
//       item
//       xs={12}
//       sm={viewMode === "grid" ? 6 : 12}
//       md={viewMode === "grid" ? 4 : 12}
//       lg={viewMode === "grid" ? 3 : 12}
//       key={course.id}
//     >
//       <MotionCard
//         onClick={() => handleCardClick(course)}
//         sx={{
//           height: viewMode === "grid" ? 340 : 200,
//           display: "flex",
//           flexDirection: viewMode === "grid" ? "column" : "row",
//           cursor: "pointer",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.3s ease-in-out",
//           "&:hover": {
//             transform: "translateY(-5px)",
//             boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//           },
//           backgroundColor: theme.palette.background.paper,
//         }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.3 }}
//         custom={index}
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <CardMedia
//           component="img"
//           image={course.image}
//           alt={course.title}
//           sx={{
//             height: viewMode === "grid" ? 140 : 200,
//             width: viewMode === "grid" ? "100%" : 200,
//             objectFit: "cover",
//           }}
//         />
//         <CardContent
//           sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", p: 2 }}
//         >
//           <Box>
//             <Typography variant="h6" component="h2" gutterBottom noWrap>
//               {course.title}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{
//                 mb: 1,
//                 display: "-webkit-box",
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: "vertical",
//                 overflow: "hidden",
//               }}
//             >
//               {course.description}
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
//             <Chip label={course.category} size="small" color="primary" />
//             <Typography variant="caption" color="text.secondary">
//               <FaClock style={{ marginRight: "4px", verticalAlign: "middle" }} />8 weeks
//             </Typography>
//           </Box>
//         </CardContent>
//         {!course.available && (
//           <Chip
//             label="Coming Soon"
//             color="secondary"
//             size="small"
//             sx={{
//               position: "absolute",
//               top: 16,
//               right: 16,
//               backgroundColor: theme.palette.secondary.main,
//               color: theme.palette.common.white,
//               zIndex: 2,
//             }}
//           />
//         )}
//       </MotionCard>
//     </Grid>
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MotionContainer
//           maxWidth={false}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           sx={{
//             minHeight: "100vh",
//             background: theme.palette.background.default,
//             py: { xs: 4, md: 6 },
//             px: { xs: 2, md: 4 },
//             overflow: "hidden",
//           }}
//         >
//           <MotionBox
//             sx={{
//               py: { xs: 4, md: 6 },
//               px: { xs: 2, md: 4 },
//               mb: { xs: 3, md: 5 },
//               background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//               borderRadius: "24px",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* <Logo /> */}
//             <MotionTypography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{
//                 color: theme.palette.common.white,
//                 mb: { xs: 2, md: 3 },
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Explore Our Courses
//             </MotionTypography>
//             <MotionBox
//               sx={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <FaSearch color={theme.palette.common.white} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 aria-label="Search courses"
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     transition: "all 0.3s ease-in-out",
//                     "&:hover": {
//                       backgroundColor: "rgba(255, 255, 255, 0.2)",
//                     },
//                     "& fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: theme.palette.common.white,
//                     },
//                     "& input": {
//                       color: theme.palette.common.white,
//                     },
//                     "& input::placeholder": {
//                       color: "rgba(255, 255, 255, 0.7)",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               />
//             </MotionBox>
//           </MotionBox>

//           <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
//             <FormControl sx={{ minWidth: 120, mr: 2, mb: { xs: 2, sm: 0 } }}>
//               <InputLabel id="category-filter-label">Category</InputLabel>
//               <Select
//                 labelId="category-filter-label"
//                 value={categoryFilter}
//                 label="Category"
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 sx={{ backgroundColor: theme.palette.background.paper }}
//               >
//                 <MenuItem value="All">All Categories</MenuItem>
//                 {Array.from(new Set(coursesData.map((course) => course.category))).map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <ToggleButtonGroup
//               value={viewMode}
//               exclusive
//               onChange={(e, newMode) => newMode && setViewMode(newMode)}
//               aria-label="view mode"
//               sx={{ backgroundColor: theme.palette.background.paper }}
//             >
//               <ToggleButton value="grid" aria-label="grid view">
//                 <FaTh />
//               </ToggleButton>
//               <ToggleButton value="list" aria-label="list view">
//                 <FaList />
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </Box>

//           <Grid container spacing={3}>
//             {filteredCourses.map((course, index) => renderCourseCard(course, index))}
//           </Grid>

//           {filteredCourses.length === 0 && (
//             <MotionTypography
//               variant="h6"
//               align="center"
//               color="primary"
//               sx={{ mt: 4 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               No courses found. Try a different search term or category.
//             </MotionTypography>
//           )}

//           <AnimatePresence>
//             {selectedCourse && (
//               <Dialog
//                 open={!!selectedCourse}
//                 onClose={handleCloseDetails}
//                 maxWidth="md"
//                 fullWidth
//                 TransitionComponent={motion.div}
//                 TransitionProps={{
//                   initial: { opacity: 0, scale: 0.9, y: 50 },
//                   animate: { opacity: 1, scale: 1, y: 0 },
//                   exit: { opacity: 0, scale: 0.9, y: 50 },
//                   transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
//                 }}
//                 PaperProps={{
//                   sx: {
//                     borderRadius: "16px",
//                     backgroundColor: theme.palette.background.paper,
//                   },
//                 }}
//               >
//                 <DialogTitle>
//                   <Box display="flex" alignItems="center">
//                     <Avatar
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.common.white,
//                         marginRight: 2,
//                       }}
//                     >
//                       {React.cloneElement(selectedCourse.icon, { size: 30 })}
//                     </Avatar>
//                     <Typography variant="h5">{selectedCourse.title}</Typography>
//                   </Box>
//                 </DialogTitle>
//                 <DialogContent>
//                   <Box sx={{ mb: 3 }}>
//                     <img
//                       src={selectedCourse.image || "/placeholder.svg"}
//                       alt={selectedCourse.title}
//                       style={{ width: "100%", borderRadius: "8px" }}
//                     />
//                   </Box>
//                   <Typography variant="body1" paragraph>
//                     {selectedCourse.description}
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     This course will provide you with in-depth knowledge and practical skills in {selectedCourse.title}.
//                     You'll learn from industry experts and work on real-world projects to enhance your understanding.
//                   </Typography>
//                   <Typography variant="h6" gutterBottom>
//                     Key topics covered:
//                   </Typography>
//                   <Box component="ul" sx={{ pl: 3 }}>
//                     <li>Fundamentals of {selectedCourse.title}</li>
//                     <li>Advanced techniques and best practices</li>
//                     <li>Real-world application and case studies</li>
//                     <li>Industry-relevant tools and frameworks</li>
//                   </Box>
//                   <Box sx={{ mt: 3 }}>
//                     <Typography variant="subtitle1" gutterBottom>
//                       Course Details:
//                     </Typography>
//                     <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
//                       <Typography variant="body2">
//                         <FaClock style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Duration: 8 weeks
//                       </Typography>
//                       <Typography variant="body2">
//                         <FaGraduationCap style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Level: Beginner to Intermediate
//                       </Typography>
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                       {selectedCourse.tags.map((tag) => (
//                         <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
//                       ))}
//                     </Box>
//                   </Box>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseDetails}>Close</Button>
//                   <Button variant="contained" color="primary" onClick={handleEnrollNow}>
//                     Enroll Now
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </AnimatePresence>
//         </MotionContainer>
//         <MotionBox
//           component={Button}
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate("/non-it-courses")}
//           sx={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//             "&:hover": {
//               boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             },
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Non-IT Courses
//         </MotionBox>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export default Courses




// import React, { useState, useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaJava,
//   FaPython,
//   FaRegFileAlt,
//   FaCogs,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaDatabase,
//   FaUserCog,
//   FaSearch,
//   FaClock,
//   FaGraduationCap,
//   FaChevronLeft,
//   FaChevronRight,
//   FaList,
//   FaTh,
// } from "react-icons/fa"
// import { motion, AnimatePresence, useAnimation } from "framer-motion"
// import {
//   Typography,
//   TextField,
//   InputAdornment,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   Box,
//   Container,
//   Chip,
//   Avatar,
//   useMediaQuery,
//   Grid,
//   IconButton,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "@mui/material"
// import { debounce } from "lodash"

// // import Logo from "./Logo"

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#2196f3",
//             light: "#64b5f6",
//             dark: "#1976d2",
//           },
//           secondary: {
//             main: "#ff4081",
//             light: "#ff79b0",
//             dark: "#c60055",
//           },
//           background: {
//             default: "#f5f5f5",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//             light: "#e3f2fd",
//             dark: "#42a5f5",
//           },
//           secondary: {
//             main: "#f48fb1",
//             light: "#ffc1e3",
//             dark: "#bf5f82",
//           },
//           background: {
//             default: "#303030",
//             paper: "#424242",
//           },
//         }),
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h2: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.3s ease-in-out",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "25px",
//           padding: "10px 20px",
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//         },
//       },
//     },
//   },
// })

// const coursesData = [
//   {
//     id: 1,
//     title: "Java Development",
//     description: "Build robust Java applications",
//     available: true,
//     icon: <FaJava />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Development",
//     tags: ["java", "programming", "backend"],
//     category: "Programming",
//   },
//   {
//     id: 2,
//     title: "Python Programming",
//     description: "Create versatile Python scripts",
//     available: true,
//     icon: <FaPython />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Programming",
//     tags: ["python", "programming", "scripting"],
//     category: "Programming",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Master software testing techniques",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Manual+Testing",
//     tags: ["testing", "manual", "qa"],
//     category: "Testing",
//   },
//   {
//     id: 4,
//     title: "Java Automation",
//     description: "Automate with Java frameworks",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Automation",
//     tags: ["java", "automation", "testing"],
//     category: "Testing",
//   },
//   {
//     id: 5,
//     title: "API Testing",
//     description: "Test APIs with Rest Assured",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=API+Testing",
//     tags: ["testing", "api", "rest"],
//     category: "Testing",
//   },
//   {
//     id: 6,
//     title: "Python Automation",
//     description: "Automate using Python",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Automation",
//     tags: ["python", "automation", "scripting"],
//     category: "Testing",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Lead product development",
//     available: true,
//     icon: <FaUserCog />,
//     image: "/placeholder.svg?height=300&width=400&text=Product+Management",
//     tags: ["product", "management", "agile"],
//     category: "Management",
//   },
//   {
//     id: 8,
//     title: "Business Analysis",
//     description: "Develop analytical skills",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Business+Analysis",
//     tags: ["business", "analysis", "requirements"],
//     category: "Management",
//   },
//   {
//     id: 9,
//     title: "Mobile Development",
//     description: "Build iOS and Android apps",
//     available: true,
//     icon: <FaMobileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Mobile+Development",
//     tags: ["mobile", "development", "ios", "android"],
//     category: "Programming",
//   },
//   {
//     id: 10,
//     title: "Data Science & ML",
//     description: "Explore AI and data analysis",
//     available: true,
//     icon: <FaDatabase />,
//     image: "/placeholder.svg?height=300&width=400&text=Data+Science+%26+ML",
//     tags: ["data", "science", "machine learning", "ai"],
//     category: "Data",
//   },
//   {
//     id: 11,
//     title: "DevOps & Cloud",
//     description: "Master cloud technologies",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=DevOps+%26+Cloud",
//     tags: ["devops", "cloud", "aws", "azure", "gcp"],
//     category: "DevOps",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect against cyber threats",
//     available: true,
//     icon: <FaShieldAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Cybersecurity",
//     tags: ["cybersecurity", "security", "penetration testing"],
//     category: "Security",
//   },
// ]

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// const Courses = () => {
//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm)
//   const [mode, setMode] = React.useState("light")
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       },
//     }),
//     [],
//   )

//   const [selectedCourse, setSelectedCourse] = useState(null)
//   const [categoryFilter, setCategoryFilter] = useState("All")
//   const [viewMode, setViewMode] = useState("grid")

//   React.useEffect(() => {
//     const debouncedSearch = debounce((term) => {
//       setDebouncedSearchTerm(term)
//     }, 300)

//     debouncedSearch(searchTerm)

//     return () => {
//       debouncedSearch.cancel()
//     }
//   }, [searchTerm])

//   const handleCardClick = (course) => {
//     if (course.available) {
//       setSelectedCourse(course)
//     } else {
//       alert("This course is coming soon! Stay tuned for updates.")
//     }
//   }

//   const handleCloseDetails = () => {
//     setSelectedCourse(null)
//   }

//   const handleEnrollNow = () => {
//     if (selectedCourse) {
//       navigate(`/it-courses/${selectedCourse.id}`)
//     }
//   }

//   const filteredCourses = React.useMemo(
//     () =>
//       coursesData.filter((course) => {
//         const searchLower = debouncedSearchTerm.toLowerCase()
//         const categoryMatch = categoryFilter === "All" || course.category === categoryFilter
//         return (
//           categoryMatch &&
//           (course.title.toLowerCase().includes(searchLower) ||
//             course.description.toLowerCase().includes(searchLower) ||
//             (course.tags && course.tags.some((tag) => tag.toLowerCase().includes(searchLower))))
//         )
//       }),
//     [debouncedSearchTerm, categoryFilter],
//   )

//   const controls = useAnimation()

//   React.useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls]) // Removed filteredCourses from dependencies

//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     in: { opacity: 1, y: 0 },
//     out: { opacity: 0, y: -20 },
//   }

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   }

//   const MotionContainer = motion(Container)
//   const MotionBox = motion(Box)
//   const MotionTypography = motion(Typography)
//   const MotionCard = motion(Card)

//   const renderCourseCard = (course, index) => (
//     <Grid item xs={12} sm={viewMode === "grid" ? 6 : 12} md={viewMode === "grid" ? 4 : 12} lg={viewMode === "grid" ? 3 : 12} key={course.id}>
//       <MotionCard
//         onClick={() => handleCardClick(course)}
//         sx={{
//           height: viewMode === "grid" ? 340 : 200,
//           display: 'flex',
//           flexDirection: viewMode === "grid" ? 'column' : 'row',
//           cursor: 'pointer',
//           position: 'relative',
//           overflow: 'hidden',
//           transition: 'all 0.3s ease-in-out',
//           '&:hover': {
//             transform: 'translateY(-5px)',
//             boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
//           },
//           backgroundColor: theme.palette.background.paper,
//         }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         layout
//       >
//         <CardMedia
//           component="img"
//           image={course.image}
//           alt={course.title}
//           sx={{
//             height: viewMode === "grid" ? 140 : 200,
//             width: viewMode === "grid" ? '100%' : 200,
//             objectFit: 'cover',
//           }}
//         />
//         <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
//           <Box>
//             <Typography variant="h6" component="h2" gutterBottom noWrap>
//               {course.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ mb: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
//               {course.description}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
//             <Chip label={course.category} size="small" color="primary" />
//             <Typography variant="caption" color="text.secondary">
//               <FaClock style={{ marginRight: '4px', verticalAlign: 'middle' }} />
//               8 weeks
//             </Typography>
//           </Box>
//         </CardContent>
//         {!course.available && (
//           <Chip
//             label="Coming Soon"
//             color="secondary"
//             size="small"
//             sx={{
//               position: 'absolute',
//               top: 16,
//               right: 16,
//               backgroundColor: theme.palette.secondary.main,
//               color: theme.palette.common.white,
//               zIndex: 2,
//             }}
//           />
//         )}
//       </MotionCard>
//     </Grid>
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MotionContainer
//           maxWidth={false}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           sx={{
//             minHeight: "100vh",
//             background: theme.palette.background.default,
//             py: { xs: 4, md: 6 },
//             px: { xs: 2, md: 4 },
//             overflow: "hidden",
//           }}
//         >
//           <MotionBox
//             sx={{
//               py: { xs: 4, md: 6 },
//               px: { xs: 2, md: 4 },
//               mb: { xs: 3, md: 5 },
//               background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//               borderRadius: "24px",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* <Logo /> */}
//             <MotionTypography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{
//                 color: theme.palette.common.white,
//                 mb: { xs: 2, md: 3 },
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Explore Our Courses
//             </MotionTypography>
//             <MotionBox
//               sx={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <FaSearch color={theme.palette.common.white} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 aria-label="Search courses"
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     transition: "all 0.3s ease-in-out",
//                     "&:hover": {
//                       backgroundColor: "rgba(255, 255, 255, 0.2)",
//                     },
//                     "& fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: theme.palette.common.white,
//                     },
//                     "& input": {
//                       color: theme.palette.common.white,
//                     },
//                     "& input::placeholder": {
//                       color: "rgba(255, 255, 255, 0.7)",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               />
//             </MotionBox>
//           </MotionBox>

//           <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//             <FormControl sx={{ minWidth: 120, mr: 2, mb: { xs: 2, sm: 0 } }}>
//               <InputLabel id="category-filter-label">Category</InputLabel>
//               <Select
//                 labelId="category-filter-label"
//                 value={categoryFilter}
//                 label="Category"
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 sx={{ backgroundColor: theme.palette.background.paper }}
//               >
//                 <MenuItem value="All">All Categories</MenuItem>
//                 {Array.from(new Set(coursesData.map((course) => course.category))).map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <ToggleButtonGroup
//               value={viewMode}
//               exclusive
//               onChange={(e, newMode) => newMode && setViewMode(newMode)}
//               aria-label="view mode"
//               sx={{ backgroundColor: theme.palette.background.paper }}
//             >
//               <ToggleButton value="grid" aria-label="grid view">
//                 <FaTh />
//               </ToggleButton>
//               <ToggleButton value="list" aria-label="list view">
//                 <FaList />
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </Box>

//           <AnimatePresence>
//             <Grid container spacing={3}>
//               {filteredCourses.map((course, index) => renderCourseCard(course, index))}
//             </Grid>
//           </AnimatePresence>

//           {filteredCourses.length === 0 && (
//             <MotionTypography
//               variant="h6"
//               align="center"
//               color="primary"
//               sx={{ mt: 4 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               No courses found. Try a different search term or category.
//             </MotionTypography>
//           )}

//           <AnimatePresence>
//             {selectedCourse && (
//               <Dialog
//                 open={!!selectedCourse}
//                 onClose={handleCloseDetails}
//                 maxWidth="md"
//                 fullWidth
//                 TransitionComponent={motion.div}
//                 TransitionProps={{
//                   initial: { opacity: 0, scale: 0.9, y: 50 },
//                   animate: { opacity: 1, scale: 1, y: 0 },
//                   exit: { opacity: 0, scale: 0.9, y: 50 },
//                   transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
//                 }}
//                 PaperProps={{
//                   sx: {
//                     borderRadius: '16px',
//                     backgroundColor: theme.palette.background.paper,
//                   }
//                 }}
//               >
//                 <DialogTitle>
//                   <Box display="flex" alignItems="center">
//                     <Avatar
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.common.white,
//                         marginRight: 2,
//                       }}
//                     >
//                       {React.cloneElement(selectedCourse.icon, { size: 30 })}
//                     </Avatar>
//                     <Typography variant="h5">{selectedCourse.title}</Typography>
//                   </Box>
//                 </DialogTitle>
//                 <DialogContent>
//                   <Box sx={{ mb: 3 }}>
//                     <img
//                       src={selectedCourse.image || "/placeholder.svg"}
//                       alt={selectedCourse.title}
//                       style={{ width: '100%', borderRadius: '8px' }}
//                     />
//                   </Box>
//                   <Typography variant="body1" paragraph>
//                     {selectedCourse.description}
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     This course will provide you with in-depth knowledge and practical skills in {selectedCourse.title}.
//                     You'll learn from industry experts and work on real-world projects to enhance your understanding.
//                   </Typography>
//                   <Typography variant="h6" gutterBottom>
//                     Key topics covered:
//                   </Typography>
//                   <Box component="ul" sx={{ pl: 3 }}>
//                     <li>Fundamentals of {selectedCourse.title}</li>
//                     <li>Advanced techniques and best practices</li>
//                     <li>Real-world application and case studies</li>
//                     <li>Industry-relevant tools and frameworks</li>
//                   </Box>
//                   <Box sx={{ mt: 3 }}>
//                     <Typography variant="subtitle1" gutterBottom>
//                       Course Details:
//                     </Typography>
//                     <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
//                       <Typography variant="body2">
//                         <FaClock style={{ marginRight: '8px', verticalAlign: 'middle' }} />
//                         Duration: 8 weeks
//                       </Typography>
//                       <Typography variant="body2">
//                         <FaGraduationCap style={{ marginRight: '8px', verticalAlign: 'middle' }} />
//                         Level: Beginner to Intermediate
//                       </Typography>
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                       {selectedCourse.tags.map((tag) => (
//                         <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
//                       ))}
//                     </Box>
//                   </Box>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseDetails}>Close</Button>
//                   <Button variant="contained" color="primary" onClick={handleEnrollNow}>
//                     Enroll Now
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </AnimatePresence>
//         </MotionContainer>
//         <MotionBox
//           component={Button}
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate("/non-it-courses")}
//           sx={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//             "&:hover": {
//               boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             },
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Non-IT Courses
//         </MotionBox>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export default Courses



// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaJava,
//   FaPython,
//   FaRegFileAlt,
//   FaCogs,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaDatabase,
//   FaUserCog,
//   FaSearch,
//   FaClock,
//   FaGraduationCap,
//   FaList,
//   FaTh,
// } from "react-icons/fa"
// import { motion, AnimatePresence, useAnimation } from "framer-motion"
// import {
//   Typography,
//   TextField,
//   InputAdornment,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   Box,
//   Container,
//   Chip,
//   Avatar,
//   useMediaQuery,
//   Grid,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "@mui/material"
// import { debounce } from "lodash"

// // import Logo from "./Logo"

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#2196f3",
//             light: "#64b5f6",
//             dark: "#1976d2",
//           },
//           secondary: {
//             main: "#ff4081",
//             light: "#ff79b0",
//             dark: "#c60055",
//           },
//           background: {
//             default: "#f5f5f5",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//             light: "#e3f2fd",
//             dark: "#42a5f5",
//           },
//           secondary: {
//             main: "#f48fb1",
//             light: "#ffc1e3",
//             dark: "#bf5f82",
//           },
//           background: {
//             default: "#303030",
//             paper: "#424242",
//           },
//         }),
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h2: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.3s ease-in-out",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "25px",
//           padding: "10px 20px",
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//         },
//       },
//     },
//   },
// })

// const coursesData = [
//   {
//     id: 1,
//     title: "Java Development",
//     description: "Build robust Java applications",
//     available: true,
//     icon: <FaJava />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Development",
//     tags: ["java", "programming", "backend"],
//     category: "Programming",
//   },
//   {
//     id: 2,
//     title: "Python Programming",
//     description: "Create versatile Python scripts",
//     available: true,
//     icon: <FaPython />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Programming",
//     tags: ["python", "programming", "scripting"],
//     category: "Programming",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Master software testing techniques",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Manual+Testing",
//     tags: ["testing", "manual", "qa"],
//     category: "Testing",
//   },
//   {
//     id: 4,
//     title: "Java Automation",
//     description: "Automate with Java frameworks",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Automation",
//     tags: ["java", "automation", "testing"],
//     category: "Testing",
//   },
//   {
//     id: 5,
//     title: "API Testing",
//     description: "Test APIs with Rest Assured",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=API+Testing",
//     tags: ["testing", "api", "rest"],
//     category: "Testing",
//   },
//   {
//     id: 6,
//     title: "Python Automation",
//     description: "Automate using Python",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Automation",
//     tags: ["python", "automation", "scripting"],
//     category: "Testing",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Lead product development",
//     available: true,
//     icon: <FaUserCog />,
//     image: "/placeholder.svg?height=300&width=400&text=Product+Management",
//     tags: ["product", "management", "agile"],
//     category: "Management",
//   },
//   {
//     id: 8,
//     title: "Business Analysis",
//     description: "Develop analytical skills",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Business+Analysis",
//     tags: ["business", "analysis", "requirements"],
//     category: "Management",
//   },
//   {
//     id: 9,
//     title: "Mobile Development",
//     description: "Build iOS and Android apps",
//     available: true,
//     icon: <FaMobileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Mobile+Development",
//     tags: ["mobile", "development", "ios", "android"],
//     category: "Programming",
//   },
//   {
//     id: 10,
//     title: "Data Science & ML",
//     description: "Explore AI and data analysis",
//     available: true,
//     icon: <FaDatabase />,
//     image: "/placeholder.svg?height=300&width=400&text=Data+Science+%26+ML",
//     tags: ["data", "science", "machine learning", "ai"],
//     category: "Data",
//   },
//   {
//     id: 11,
//     title: "DevOps & Cloud",
//     description: "Master cloud technologies",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=DevOps+%26+Cloud",
//     tags: ["devops", "cloud", "aws", "azure", "gcp"],
//     category: "DevOps",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect against cyber threats",
//     available: true,
//     icon: <FaShieldAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Cybersecurity",
//     tags: ["cybersecurity", "security", "penetration testing"],
//     category: "Security",
//   },
// ]

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// const Courses = () => {
//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm)
//   const [mode, setMode] = React.useState("light")
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       },
//     }),
//     [],
//   )

//   const [selectedCourse, setSelectedCourse] = useState(null)
//   const [categoryFilter, setCategoryFilter] = useState("All")
//   const [viewMode, setViewMode] = useState("grid")

//   React.useEffect(() => {
//     const debouncedSearch = debounce((term) => {
//       setDebouncedSearchTerm(term)
//     }, 500) // Increased from 300ms to 500ms

//     debouncedSearch(searchTerm)

//     return () => {
//       debouncedSearch.cancel()
//     }
//   }, [searchTerm])

//   const handleCardClick = (course) => {
//     if (course.available) {
//       setSelectedCourse(course)
//     } else {
//       alert("This course is coming soon! Stay tuned for updates.")
//     }
//   }

//   const handleCloseDetails = () => {
//     setSelectedCourse(null)
//   }

//   const handleEnrollNow = () => {
//     if (selectedCourse) {
//       navigate(`/it-courses/${selectedCourse.id}`)
//     }
//   }

//   const filteredCourses = React.useMemo(() => {
//     if (debouncedSearchTerm.length < 2) {
//       return categoryFilter === "All" ? coursesData : coursesData.filter((course) => course.category === categoryFilter)
//     }

//     const searchLower = debouncedSearchTerm.toLowerCase()
//     return coursesData.filter((course) => {
//       const categoryMatch = categoryFilter === "All" || course.category === categoryFilter
//       const titleMatch = course.title.toLowerCase().includes(searchLower)
//       const descriptionMatch = course.description.toLowerCase().includes(searchLower)
//       const tagMatch = course.tags.some((tag) => tag.toLowerCase().includes(searchLower))

//       return categoryMatch && (titleMatch || descriptionMatch || tagMatch)
//     })
//   }, [debouncedSearchTerm, categoryFilter])

//   const controls = useAnimation()

//   React.useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls]) // Removed filteredCourses from dependencies

//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     in: { opacity: 1, y: 0 },
//     out: { opacity: 0, y: -20 },
//   }

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   }

//   const MotionContainer = motion(Container)
//   const MotionBox = motion(Box)
//   const MotionTypography = motion(Typography)
//   const MotionCard = motion(Card)

//   const renderCourseCard = (course, index) => (
//     <Grid
//       item
//       xs={12}
//       sm={viewMode === "grid" ? 6 : 12}
//       md={viewMode === "grid" ? 4 : 12}
//       lg={viewMode === "grid" ? 3 : 12}
//       key={course.id}
//     >
//       <MotionCard
//         onClick={() => handleCardClick(course)}
//         sx={{
//           height: viewMode === "grid" ? 340 : 200,
//           display: "flex",
//           flexDirection: viewMode === "grid" ? "column" : "row",
//           cursor: "pointer",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.3s ease-in-out",
//           "&:hover": {
//             transform: "translateY(-5px)",
//             boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//           },
//           backgroundColor: theme.palette.background.paper,
//         }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         layout
//       >
//         <CardMedia
//           component="img"
//           image={course.image}
//           alt={course.title}
//           sx={{
//             height: viewMode === "grid" ? 140 : 200,
//             width: viewMode === "grid" ? "100%" : 200,
//             objectFit: "cover",
//           }}
//         />
//         <CardContent
//           sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", p: 2 }}
//         >
//           <Box>
//             <Typography variant="h6" component="h2" gutterBottom noWrap>
//               {course.title}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{
//                 mb: 1,
//                 display: "-webkit-box",
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: "vertical",
//                 overflow: "hidden",
//               }}
//             >
//               {course.description}
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
//             <Chip label={course.category} size="small" color="primary" />
//             <Typography variant="caption" color="text.secondary">
//               <FaClock style={{ marginRight: "4px", verticalAlign: "middle" }} />8 weeks
//             </Typography>
//           </Box>
//         </CardContent>
//         {!course.available && (
//           <Chip
//             label="Coming Soon"
//             color="secondary"
//             size="small"
//             sx={{
//               position: "absolute",
//               top: 16,
//               right: 16,
//               backgroundColor: theme.palette.secondary.main,
//               color: theme.palette.common.white,
//               zIndex: 2,
//             }}
//           />
//         )}
//       </MotionCard>
//     </Grid>
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MotionContainer
//           maxWidth={false}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           sx={{
//             minHeight: "100vh",
//             background: theme.palette.background.default,
//             py: { xs: 4, md: 6 },
//             px: { xs: 2, md: 4 },
//             overflow: "hidden",
//           }}
//         >
//           <MotionBox
//             sx={{
//               py: { xs: 4, md: 6 },
//               px: { xs: 2, md: 4 },
//               mb: { xs: 3, md: 5 },
//               background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//               borderRadius: "24px",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* <Logo /> */}
//             <MotionTypography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{
//                 color: theme.palette.common.white,
//                 mb: { xs: 2, md: 3 },
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Explore Our Courses
//             </MotionTypography>
//             <MotionBox
//               sx={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <FaSearch color={theme.palette.common.white} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 helperText={
//                   searchTerm.length > 0 && searchTerm.length < 2 ? "Enter at least 2 characters to search" : " "
//                 }
//                 FormHelperTextProps={{
//                   sx: { color: "rgba(255, 255, 255, 0.7)" },
//                 }}
//                 aria-label="Search courses"
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     transition: "all 0.3s ease-in-out",
//                     "&:hover": {
//                       backgroundColor: "rgba(255, 255, 255, 0.2)",
//                     },
//                     "& fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: theme.palette.common.white,
//                     },
//                     "& input": {
//                       color: theme.palette.common.white,
//                     },
//                     "& input::placeholder": {
//                       color: "rgba(255, 255, 255, 0.7)",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               />
//             </MotionBox>
//           </MotionBox>

//           <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
//             <FormControl sx={{ minWidth: 120, mr: 2, mb: { xs: 2, sm: 0 } }}>
//               <InputLabel id="category-filter-label">Category</InputLabel>
//               <Select
//                 labelId="category-filter-label"
//                 value={categoryFilter}
//                 label="Category"
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 sx={{ backgroundColor: theme.palette.background.paper }}
//               >
//                 <MenuItem value="All">All Categories</MenuItem>
//                 {Array.from(new Set(coursesData.map((course) => course.category))).map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <ToggleButtonGroup
//               value={viewMode}
//               exclusive
//               onChange={(e, newMode) => newMode && setViewMode(newMode)}
//               aria-label="view mode"
//               sx={{ backgroundColor: theme.palette.background.paper }}
//             >
//               <ToggleButton value="grid" aria-label="grid view">
//                 <FaTh />
//               </ToggleButton>
//               <ToggleButton value="list" aria-label="list view">
//                 <FaList />
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </Box>

//           <AnimatePresence>
//             <Grid container spacing={3}>
//               {filteredCourses.map((course, index) => renderCourseCard(course, index))}
//             </Grid>
//           </AnimatePresence>

//           {filteredCourses.length === 0 && (
//             <MotionTypography
//               variant="h6"
//               align="center"
//               color="primary"
//               sx={{ mt: 4 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               No courses found. Try a different search term or category.
//             </MotionTypography>
//           )}

//           <AnimatePresence>
//             {selectedCourse && (
//               <Dialog
//                 open={!!selectedCourse}
//                 onClose={handleCloseDetails}
//                 maxWidth="md"
//                 fullWidth
//                 TransitionComponent={motion.div}
//                 TransitionProps={{
//                   initial: { opacity: 0, scale: 0.9, y: 50 },
//                   animate: { opacity: 1, scale: 1, y: 0 },
//                   exit: { opacity: 0, scale: 0.9, y: 50 },
//                   transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
//                 }}
//                 PaperProps={{
//                   sx: {
//                     borderRadius: "16px",
//                     backgroundColor: theme.palette.background.paper,
//                   },
//                 }}
//               >
//                 <DialogTitle>
//                   <Box display="flex" alignItems="center">
//                     <Avatar
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.common.white,
//                         marginRight: 2,
//                       }}
//                     >
//                       {React.cloneElement(selectedCourse.icon, { size: 30 })}
//                     </Avatar>
//                     <Typography variant="h5">{selectedCourse.title}</Typography>
//                   </Box>
//                 </DialogTitle>
//                 <DialogContent>
//                   <Box sx={{ mb: 3 }}>
//                     <img
//                       src={selectedCourse.image || "/placeholder.svg"}
//                       alt={selectedCourse.title}
//                       style={{ width: "100%", borderRadius: "8px" }}
//                     />
//                   </Box>
//                   <Typography variant="body1" paragraph>
//                     {selectedCourse.description}
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     This course will provide you with in-depth knowledge and practical skills in {selectedCourse.title}.
//                     You'll learn from industry experts and work on real-world projects to enhance your understanding.
//                   </Typography>
//                   <Typography variant="h6" gutterBottom>
//                     Key topics covered:
//                   </Typography>
//                   <Box component="ul" sx={{ pl: 3 }}>
//                     <li>Fundamentals of {selectedCourse.title}</li>
//                     <li>Advanced techniques and best practices</li>
//                     <li>Real-world application and case studies</li>
//                     <li>Industry-relevant tools and frameworks</li>
//                   </Box>
//                   <Box sx={{ mt: 3 }}>
//                     <Typography variant="subtitle1" gutterBottom>
//                       Course Details:
//                     </Typography>
//                     <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
//                       <Typography variant="body2">
//                         <FaClock style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Duration: 8 weeks
//                       </Typography>
//                       <Typography variant="body2">
//                         <FaGraduationCap style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Level: Beginner to Intermediate
//                       </Typography>
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                       {selectedCourse.tags.map((tag) => (
//                         <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
//                       ))}
//                     </Box>
//                   </Box>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseDetails}>Close</Button>
//                   <Button variant="contained" color="primary" onClick={handleEnrollNow}>
//                     Enroll Now
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </AnimatePresence>
//         </MotionContainer>
//         <MotionBox
//           component={Button}
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate("/non-it-courses")}
//           sx={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//             "&:hover": {
//               boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             },
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Non-IT Courses
//         </MotionBox>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export default Courses

// import React, { useState, useMemo, useCallback } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaJava,
//   FaPython,
//   FaRegFileAlt,
//   FaCogs,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaDatabase,
//   FaUserCog,
//   FaSearch,
//   FaClock,
//   FaGraduationCap,
//   FaList,
//   FaTh,
//   FaTimes,
// } from "react-icons/fa"
// import { motion, AnimatePresence, useAnimation } from "framer-motion"
// import {
//   Typography,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   Box,
//   Container,
//   Chip,
//   Avatar,
//   useMediaQuery,
//   Grid,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "@mui/material"
// import { debounce, deburr } from "lodash"

// // import Logo from "./Logo"

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#2196f3",
//             light: "#64b5f6",
//             dark: "#1976d2",
//           },
//           secondary: {
//             main: "#ff4081",
//             light: "#ff79b0",
//             dark: "#c60055",
//           },
//           background: {
//             default: "#f5f5f5",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//             light: "#e3f2fd",
//             dark: "#42a5f5",
//           },
//           secondary: {
//             main: "#f48fb1",
//             light: "#ffc1e3",
//             dark: "#bf5f82",
//           },
//           background: {
//             default: "#303030",
//             paper: "#424242",
//           },
//         }),
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h2: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.3s ease-in-out",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "25px",
//           padding: "10px 20px",
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//         },
//       },
//     },
//   },
// })

// const coursesData = [
//   {
//     id: 1,
//     title: "Java Development",
//     description: "Build robust Java applications",
//     available: true,
//     icon: <FaJava />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Development",
//     tags: ["java", "programming", "backend"],
//     category: "Programming",
//   },
//   {
//     id: 2,
//     title: "Python Programming",
//     description: "Create versatile Python scripts",
//     available: true,
//     icon: <FaPython />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Programming",
//     tags: ["python", "programming", "scripting"],
//     category: "Programming",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Master software testing techniques",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Manual+Testing",
//     tags: ["testing", "manual", "qa"],
//     category: "Testing",
//   },
//   {
//     id: 4,
//     title: "Java Automation",
//     description: "Automate with Java frameworks",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Java+Automation",
//     tags: ["java", "automation", "testing"],
//     category: "Testing",
//   },
//   {
//     id: 5,
//     title: "API Testing",
//     description: "Test APIs with Rest Assured",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=API+Testing",
//     tags: ["testing", "api", "rest"],
//     category: "Testing",
//   },
//   {
//     id: 6,
//     title: "Python Automation",
//     description: "Automate using Python",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=Python+Automation",
//     tags: ["python", "automation", "scripting"],
//     category: "Testing",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Lead product development",
//     available: true,
//     icon: <FaUserCog />,
//     image: "/placeholder.svg?height=300&width=400&text=Product+Management",
//     tags: ["product", "management", "agile"],
//     category: "Management",
//   },
//   {
//     id: 8,
//     title: "Business Analysis",
//     description: "Develop analytical skills",
//     available: true,
//     icon: <FaRegFileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Business+Analysis",
//     tags: ["business", "analysis", "requirements"],
//     category: "Management",
//   },
//   {
//     id: 9,
//     title: "Mobile Development",
//     description: "Build iOS and Android apps",
//     available: true,
//     icon: <FaMobileAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Mobile+Development",
//     tags: ["mobile", "development", "ios", "android"],
//     category: "Programming",
//   },
//   {
//     id: 10,
//     title: "Data Science & ML",
//     description: "Explore AI and data analysis",
//     available: true,
//     icon: <FaDatabase />,
//     image: "/placeholder.svg?height=300&width=400&text=Data+Science+%26+ML",
//     tags: ["data", "science", "machine learning", "ai"],
//     category: "Data",
//   },
//   {
//     id: 11,
//     title: "DevOps & Cloud",
//     description: "Master cloud technologies",
//     available: true,
//     icon: <FaCogs />,
//     image: "/placeholder.svg?height=300&width=400&text=DevOps+%26+Cloud",
//     tags: ["devops", "cloud", "aws", "azure", "gcp"],
//     category: "DevOps",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect against cyber threats",
//     available: true,
//     icon: <FaShieldAlt />,
//     image: "/placeholder.svg?height=300&width=400&text=Cybersecurity",
//     tags: ["cybersecurity", "security", "penetration testing"],
//     category: "Security",
//   },
// ]

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// const Courses = () => {
//   const navigate = useNavigate()
//   const [searchTerm, setSearchTerm] = useState("")
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm)
//   const [mode, setMode] = React.useState("light")
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       },
//     }),
//     [],
//   )

//   const [selectedCourse, setSelectedCourse] = useState(null)
//   const [categoryFilter, setCategoryFilter] = useState("All")
//   const [viewMode, setViewMode] = useState("grid")

//   React.useEffect(() => {
//     const debouncedSearch = debounce((term) => {
//       setDebouncedSearchTerm(term)
//     }, 500) // Increased from 300ms to 500ms

//     debouncedSearch(searchTerm)

//     return () => {
//       debouncedSearch.cancel()
//     }
//   }, [searchTerm])

//   const handleCardClick = useCallback((course) => {
//     if (course.available) {
//       setSelectedCourse(course)
//     } else {
//       alert("This course is coming soon! Stay tuned for updates.")
//     }
//   }, [])

//   const handleCloseDetails = useCallback(() => {
//     setSelectedCourse(null)
//   }, [])

//   const handleEnrollNow = useCallback(() => {
//     if (selectedCourse) {
//       navigate(`/it-courses/${selectedCourse.id}`)
//     }
//   }, [selectedCourse, navigate])

//   const highlightMatch = useCallback((text, search) => {
//     if (search.length < 2) return text
//     const parts = text.split(new RegExp(`(${search})`, "gi"))
//     return (
//       <span>
//         {parts.map((part, i) =>
//           part.toLowerCase() === search.toLowerCase() ? (
//             <mark key={i} style={{ backgroundColor: "yellow", color: "black" }}>
//               {part}
//             </mark>
//           ) : (
//             part
//           ),
//         )}
//       </span>
//     )
//   }, [])

//   const filteredCourses = useMemo(() => {
//     if (debouncedSearchTerm.length < 2) {
//       return categoryFilter === "All" ? coursesData : coursesData.filter((course) => course.category === categoryFilter)
//     }

//     const searchLower = deburr(debouncedSearchTerm.toLowerCase())
//     return coursesData.filter((course) => {
//       const categoryMatch = categoryFilter === "All" || course.category === categoryFilter
//       const titleMatch = deburr(course.title.toLowerCase()).includes(searchLower)
//       const descriptionMatch = deburr(course.description.toLowerCase()).includes(searchLower)
//       const tagMatch = course.tags.some((tag) => deburr(tag.toLowerCase()).includes(searchLower))

//       return categoryMatch && (titleMatch || descriptionMatch || tagMatch)
//     })
//   }, [debouncedSearchTerm, categoryFilter])

//   const controls = useAnimation()

//   React.useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls]) 
//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     in: { opacity: 1, y: 0 },
//     out: { opacity: 0, y: -20 },
//   }

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   }

//   const MotionContainer = motion(Container)
//   const MotionBox = motion(Box)
//   const MotionTypography = motion(Typography)
//   const MotionCard = motion(Card)

//   const renderCourseCard = useCallback(
//     (course, index) => (
//       <Grid
//         item
//         xs={12}
//         sm={viewMode === "grid" ? 6 : 12}
//         md={viewMode === "grid" ? 4 : 12}
//         lg={viewMode === "grid" ? 3 : 12}
//         key={course.id}
//       >
//         <MotionCard
//           onClick={() => handleCardClick(course)}
//           sx={{
//             height: viewMode === "grid" ? 340 : 200,
//             display: "flex",
//             flexDirection: viewMode === "grid" ? "column" : "row",
//             cursor: "pointer",
//             position: "relative",
//             overflow: "hidden",
//             transition: "all 0.3s ease-in-out",
//             "&:hover": {
//               transform: "translateY(-5px)",
//               boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//             },
//             backgroundColor: theme.palette.background.paper,
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           layout
//         >
//           <CardMedia
//             component="img"
//             image={course.image}
//             alt={course.title}
//             sx={{
//               height: viewMode === "grid" ? 140 : 200,
//               width: viewMode === "grid" ? "100%" : 200,
//               objectFit: "cover",
//             }}
//           />
//           <CardContent
//             sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", p: 2 }}
//           >
//             <Box>
//               <Typography variant="h6" component="h2" gutterBottom noWrap>
//                 {highlightMatch(course.title, debouncedSearchTerm)}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{
//                   mb: 1,
//                   display: "-webkit-box",
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                 }}
//               >
//                 {highlightMatch(course.description, debouncedSearchTerm)}
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
//               <Chip label={course.category} size="small" color="primary" />
//               <Typography variant="caption" color="text.secondary">
//                 <FaClock style={{ marginRight: "4px", verticalAlign: "middle" }} />8 weeks
//               </Typography>
//             </Box>
//           </CardContent>
//           {!course.available && (
//             <Chip
//               label="Coming Soon"
//               color="secondary"
//               size="small"
//               sx={{
//                 position: "absolute",
//                 top: 16,
//                 right: 16,
//                 backgroundColor: theme.palette.secondary.main,
//                 color: theme.palette.common.white,
//                 zIndex: 2,
//               }}
//             />
//           )}
//         </MotionCard>
//       </Grid>
//     ),
//     [viewMode, theme, debouncedSearchTerm, highlightMatch, handleCardClick],
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MotionContainer
//           maxWidth={false}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           sx={{
//             minHeight: "100vh",
//             background: theme.palette.background.default,
//             py: { xs: 4, md: 6 },
//             px: { xs: 2, md: 4 },
//             overflow: "hidden",
//           }}
//         >
//           <MotionBox
//             sx={{
//               py: { xs: 4, md: 6 },
//               px: { xs: 2, md: 4 },
//               mb: { xs: 3, md: 5 },
//               background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//               borderRadius: "24px",
//               textAlign: "center",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* <Logo /> */}
//             <MotionTypography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{
//                 color: theme.palette.common.white,
//                 mb: { xs: 2, md: 3 },
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Explore Our Courses
//             </MotionTypography>
//             <MotionBox
//               sx={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <FaSearch color={theme.palette.common.white} />
//                     </InputAdornment>
//                   ),
//                   endAdornment: searchTerm.length > 0 && (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="clear search"
//                         onClick={() => setSearchTerm("")}
//                         edge="end"
//                         sx={{ color: theme.palette.common.white }}
//                       >
//                         <FaTimes />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 helperText={
//                   searchTerm.length > 0 && searchTerm.length < 2
//                     ? "Enter at least 2 characters to search"
//                     : filteredCourses.length > 0
//                       ? `${filteredCourses.length} course${filteredCourses.length === 1 ? "" : "s"} found`
//                       : "No courses found"
//                 }
//                 FormHelperTextProps={{
//                   sx: { color: "rgba(255, 255, 255, 0.7)" },
//                 }}
//                 aria-label="Search courses"
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     transition: "all 0.3s ease-in-out",
//                     "&:hover": {
//                       backgroundColor: "rgba(255, 255, 255, 0.2)",
//                     },
//                     "& fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "transparent",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: theme.palette.common.white,
//                     },
//                     "& input": {
//                       color: theme.palette.common.white,
//                     },
//                     "& input::placeholder": {
//                       color: "rgba(255, 255, 255, 0.7)",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               />
//             </MotionBox>
//           </MotionBox>

//           <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
//             <FormControl sx={{ minWidth: 120, mr: 2, mb: { xs: 2, sm: 0 } }}>
//               <InputLabel id="category-filter-label">Category</InputLabel>
//               <Select
//                 labelId="category-filter-label"
//                 value={categoryFilter}
//                 label="Category"
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 sx={{ backgroundColor: theme.palette.background.paper }}
//               >
//                 <MenuItem value="All">All Categories</MenuItem>
//                 {Array.from(new Set(coursesData.map((course) => course.category))).map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <ToggleButtonGroup
//               value={viewMode}
//               exclusive
//               onChange={(e, newMode) => newMode && setViewMode(newMode)}
//               aria-label="view mode"
//               sx={{ backgroundColor: theme.palette.background.paper }}
//             >
//               <ToggleButton value="grid" aria-label="grid view">
//                 <FaTh />
//               </ToggleButton>
//               <ToggleButton value="list" aria-label="list view">
//                 <FaList />
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </Box>

//           <AnimatePresence>
//             <Grid container spacing={3}>
//               {filteredCourses.map((course, index) => renderCourseCard(course, index))}
//             </Grid>
//           </AnimatePresence>

//           {filteredCourses.length === 0 && (
//             <MotionTypography
//               variant="h6"
//               align="center"
//               color="primary"
//               sx={{ mt: 4 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               No courses found. Try a different search term or category.
//             </MotionTypography>
//           )}

//           <AnimatePresence>
//             {selectedCourse && (
//               <Dialog
//                 open={!!selectedCourse}
//                 onClose={handleCloseDetails}
//                 maxWidth="md"
//                 fullWidth
//                 TransitionComponent={motion.div}
//                 TransitionProps={{
//                   initial: { opacity: 0, scale: 0.9, y: 50 },
//                   animate: { opacity: 1, scale: 1, y: 0 },
//                   exit: { opacity: 0, scale: 0.9, y: 50 },
//                   transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
//                 }}
//                 PaperProps={{
//                   sx: {
//                     borderRadius: "16px",
//                     backgroundColor: theme.palette.background.paper,
//                   },
//                 }}
//               >
//                 <DialogTitle>
//                   <Box display="flex" alignItems="center">
//                     <Avatar
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.common.white,
//                         marginRight: 2,
//                       }}
//                     >
//                       {React.cloneElement(selectedCourse.icon, { size: 30 })}
//                     </Avatar>
//                     <Typography variant="h5">{selectedCourse.title}</Typography>
//                   </Box>
//                 </DialogTitle>
//                 <DialogContent>
//                   <Box sx={{ mb: 3 }}>
//                     <img
//                       src={selectedCourse.image || "/placeholder.svg"}
//                       alt={selectedCourse.title}
//                       style={{ width: "100%", borderRadius: "8px" }}
//                     />
//                   </Box>
//                   <Typography variant="body1" paragraph>
//                     {selectedCourse.description}
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     This course will provide you with in-depth knowledge and practical skills in {selectedCourse.title}.
//                     You'll learn from industry experts and work on real-world projects to enhance your understanding.
//                   </Typography>
//                   <Typography variant="h6" gutterBottom>
//                     Key topics covered:
//                   </Typography>
//                   <Box component="ul" sx={{ pl: 3 }}>
//                     <li>Fundamentals of {selectedCourse.title}</li>
//                     <li>Advanced techniques and best practices</li>
//                     <li>Real-world application and case studies</li>
//                     <li>Industry-relevant tools and frameworks</li>
//                   </Box>
//                   <Box sx={{ mt: 3 }}>
//                     <Typography variant="subtitle1" gutterBottom>
//                       Course Details:
//                     </Typography>
//                     <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
//                       <Typography variant="body2">
//                         <FaClock style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Duration: 8 weeks
//                       </Typography>
//                       <Typography variant="body2">
//                         <FaGraduationCap style={{ marginRight: "8px", verticalAlign: "middle" }} />
//                         Level: Beginner to Intermediate
//                       </Typography>
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                       {selectedCourse.tags.map((tag) => (
//                         <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
//                       ))}
//                     </Box>
//                   </Box>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseDetails}>Close</Button>
//                   <Button variant="contained" color="primary" onClick={handleEnrollNow}>
//                     Enroll Now
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </AnimatePresence>
//         </MotionContainer>
//         <MotionBox
//           component={Button}
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate("/non-it-courses")}
//           sx={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//             "&:hover": {
//               boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             },
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Non-IT Courses
//         </MotionBox>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export default Courses

