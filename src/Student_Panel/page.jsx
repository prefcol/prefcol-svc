// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// // // // // // import { Layout, ConfigProvider, theme as antdTheme } from "antd"
// // // // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // // // import { ThemeProvider, useTheme } from "./contexts/ThemeContext"

// // // // // // // Components
// // // // // // import SideNav from "./components/SideNav"
// // // // // // import TopNav from "./components/TopNav"
// // // // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // // // Pages
// // // // // // import Dashboard from "./pages/Dashboard"
// // // // // // import MyCourses from "./pages/MyCourses"
// // // // // // import ITCourses from "./pages/ITCourses"
// // // // // // import NonITCourses from "./pages/NonITCourses"
// // // // // // import Profile from "./pages/Profile"
// // // // // // import Settings from "./pages/Settings"
// // // // // // import NotFound from "./pages/NotFound"

// // // // // // // Styles
// // // // // // import "./styles/StudentPortal.css"

// // // // // // const { Content } = Layout

// // // // // // const AppContent = () => {
// // // // // //   const { theme } = useTheme()
// // // // // //   const [collapsed, setCollapsed] = useState(false)
// // // // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // // // //   const [userData, setUserData] = useState(null)

// // // // // //   const isMobile = windowWidth < 768

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       const width = window.innerWidth
// // // // // //       setWindowWidth(width)
// // // // // //       if (width < 768 && !collapsed) {
// // // // // //         setCollapsed(true)
// // // // // //       }
// // // // // //     }

// // // // // //     window.addEventListener("resize", handleResize)
// // // // // //     return () => window.removeEventListener("resize", handleResize)
// // // // // //   }, [collapsed])

// // // // // //   useEffect(() => {
// // // // // //     // Get user data from localStorage
// // // // // //     const user = localStorage.getItem("user")
// // // // // //     if (user) {
// // // // // //       setUserData(JSON.parse(user))
// // // // // //     } else {
// // // // // //       // Create a default user if none exists
// // // // // //       const defaultUser = {
// // // // // //         id: "user123",
// // // // // //         name: "Student User",
// // // // // //         email: "student@example.com",
// // // // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // // // //         role: "student",
// // // // // //       }
// // // // // //       setUserData(defaultUser)
// // // // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // // // //     }
// // // // // //   }, [])

// // // // // //   return (
// // // // // //     <ConfigProvider
// // // // // //       theme={{
// // // // // //         algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // // // //         token: {
// // // // // //           colorPrimary: "#1890ff",
// // // // // //           borderRadius: 4,
// // // // // //         },
// // // // // //       }}
// // // // // //     >
// // // // // //       <Layout style={{ minHeight: "100vh" }}>
// // // // // //         <SideNav
// // // // // //           collapsed={collapsed}
// // // // // //           setCollapsed={setCollapsed}
// // // // // //           isMobile={isMobile}
// // // // // //           windowWidth={windowWidth}
// // // // // //           userData={userData}
// // // // // //         />
// // // // // //         <Layout style={{ marginLeft: collapsed ? (isMobile ? 0 : 80) : 260, transition: "all 0.2s" }}>
// // // // // //           <TopNav collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} userData={userData} />
// // // // // //           <Content
// // // // // //             style={{
// // // // // //               margin: "24px 16px",
// // // // // //               padding: 24,
// // // // // //               minHeight: 280,
// // // // // //               background: theme === "dark" ? "#141414" : "#fff",
// // // // // //               borderRadius: 4,
// // // // // //               transition: "all 0.3s",
// // // // // //             }}
// // // // // //           >
// // // // // //             <Routes>
// // // // // //               <Route path="/" element={<Navigate to="/Student-portal/dashboard" replace />} />
// // // // // //               <Route
// // // // // //                 path="/dashboard"
// // // // // //                 element={
// // // // // //                   <PrivateRoute>
// // // // // //                     <Dashboard windowWidth={windowWidth} />
// // // // // //                   </PrivateRoute>
// // // // // //                 }
// // // // // //               />
// // // // // //               <Route
// // // // // //                 path="/courses"
// // // // // //                 element={
// // // // // //                   <PrivateRoute>
// // // // // //                     <MyCourses windowWidth={windowWidth} />
// // // // // //                   </PrivateRoute>
// // // // // //                 }
// // // // // //               />
// // // // // //               <Route
// // // // // //                 path="/it-courses"
// // // // // //                 element={
// // // // // //                   <PrivateRoute>
// // // // // //                     <ITCourses windowWidth={windowWidth} />
// // // // // //                   </PrivateRoute>
// // // // // //                 }
// // // // // //               />
// // // // // //               <Route
// // // // // //                 path="/non-it-courses"
// // // // // //                 element={
// // // // // //                   <PrivateRoute>
// // // // // //                     <NonITCourses windowWidth={windowWidth} />
// // // // // //                   </PrivateRoute>
// // // // // //                 }
// // // // // //               />
// // // // // //               <Route
// // // // // //                 path="/profile"
// // // // // //                 element={
// // // // // //                   <PrivateRoute>
// // // // // //                     <Profile windowWidth={windowWidth} />
// // // // // //                   </PrivateRoute>
// // // // // //                 }
// // // // // //               />
// // // // // //               <Route
// // // // // //                 path="/settings"
// // // // // //                 element={
// // // // // //                   <PrivateRoute>
// // // // // //                     <Settings windowWidth={windowWidth} />
// // // // // //                   </PrivateRoute>
// // // // // //                 }
// // // // // //               />
// // // // // //               <Route path="*" element={<NotFound />} />
// // // // // //             </Routes>
// // // // // //           </Content>
// // // // // //         </Layout>
// // // // // //       </Layout>
// // // // // //     </ConfigProvider>
// // // // // //   )
// // // // // // }

// // // // // // const StudentPortal = () => {
// // // // // //   return (
// // // // // //     <Router basename="/Student-portal">
// // // // // //       <ThemeProvider>
// // // // // //         <AuthProvider>
// // // // // //           <AppContent />
// // // // // //         </AuthProvider>
// // // // // //       </ThemeProvider>
// // // // // //     </Router>
// // // // // //   )
// // // // // // }

// // // // // // export default StudentPortal

// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // // // // import { Layout, ConfigProvider, theme as antdTheme } from "antd"
// // // // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // // // // Components
// // // // // // import SideNav from "./components/SideNav"
// // // // // // import TopNav from "./components/TopNav"
// // // // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // // // Pages
// // // // // // import Dashboard from "./pages/Dashboard"
// // // // // // import MyCourses from "./pages/MyCourses"
// // // // // // import ITCourses from "./pages/ITCourses"
// // // // // // import NonITCourses from "./pages/NonITCourses"
// // // // // // import Profile from "./pages/Profile"
// // // // // // import Settings from "./pages/Settings"
// // // // // // import NotFound from "./pages/NotFound"

// // // // // // // Styles
// // // // // // import "./styles/StudentPortal.css"
// // // // // // import VideoPlayer from "./components/VideoPlayer"

// // // // // // const { Content } = Layout

// // // // // // const StudentPortal = () => {
// // // // // //   const [theme, setTheme] = useState("light")
// // // // // //   const [collapsed, setCollapsed] = useState(false)
// // // // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // // // //   const [userData, setUserData] = useState(null)

// // // // // //   const isMobile = windowWidth < 768
// // // // // //   const location = useLocation()

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       const width = window.innerWidth
// // // // // //       setWindowWidth(width)
// // // // // //       if (width < 768 && !collapsed) {
// // // // // //         setCollapsed(true)
// // // // // //       }
// // // // // //     }

// // // // // //     window.addEventListener("resize", handleResize)
// // // // // //     return () => window.removeEventListener("resize", handleResize)
// // // // // //   }, [collapsed])

// // // // // //   useEffect(() => {
// // // // // //     // Get user data from localStorage
// // // // // //     const user = localStorage.getItem("user")
// // // // // //     if (user) {
// // // // // //       setUserData(JSON.parse(user))
// // // // // //     } else {
// // // // // //       // Create a default user if none exists
// // // // // //       const defaultUser = {
// // // // // //         id: "user123",
// // // // // //         name: "Student User",
// // // // // //         email: "student@example.com",
// // // // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // // // //         role: "student",
// // // // // //       }
// // // // // //       setUserData(defaultUser)
// // // // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // // // //     }
// // // // // //   }, [])

// // // // // //   const toggleTheme = () => {
// // // // // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // // // // //   }

// // // // // //   return (
// // // // // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // // // // //       <AuthProvider>
// // // // // //         <ConfigProvider
// // // // // //           theme={{
// // // // // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // // // //             token: {
// // // // // //               colorPrimary: "#1890ff",
// // // // // //               borderRadius: 4,
// // // // // //             },
// // // // // //           }}
// // // // // //         >
// // // // // //           <Layout style={{ minHeight: "100vh" }}>
// // // // // //             <SideNav
// // // // // //               collapsed={collapsed}
// // // // // //               setCollapsed={setCollapsed}
// // // // // //               isMobile={isMobile}
// // // // // //               windowWidth={windowWidth}
// // // // // //               userData={userData}
// // // // // //             />
// // // // // //             <Layout style={{ marginLeft: collapsed ? (isMobile ? 0 : 80) : 260, transition: "all 0.2s" }}>
// // // // // //               <TopNav collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} userData={userData} />
// // // // // //               <Content
// // // // // //                 style={{
// // // // // //                   margin: "24px 16px",
// // // // // //                   padding: 24,
// // // // // //                   minHeight: 280,
// // // // // //                   background: theme === "dark" ? "#141414" : "#fff",
// // // // // //                   borderRadius: 4,
// // // // // //                   transition: "all 0.3s",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <Routes>
// // // // // //                   <Route path="/" element={<Navigate to="dashboard" replace />} />
// // // // // //                   <Route
// // // // // //                     path="dashboard"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                         <Dashboard windowWidth={windowWidth} />
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route
// // // // // //                     path="courses"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                         <MyCourses windowWidth={windowWidth} />
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route
// // // // // //                     path="it-courses"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                         <ITCourses windowWidth={windowWidth} />
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route
// // // // // //                     path="non-it-courses"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                         <NonITCourses windowWidth={windowWidth} />
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route
// // // // // //                     path="profile"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                         <Profile windowWidth={windowWidth} />
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route
// // // // // //                     path="settings"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                         <Settings windowWidth={windowWidth} toggleTheme={toggleTheme} />
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route
// // // // // //                     path="video"
// // // // // //                     element={
// // // // // //                       <PrivateRoute>
// // // // // //                       <VideoPlayer/>
// // // // // //                       </PrivateRoute>
// // // // // //                     }
// // // // // //                   />
// // // // // //                   <Route path="*" element={<NotFound />} />
// // // // // //                 </Routes>
// // // // // //               </Content>
// // // // // //             </Layout>
// // // // // //           </Layout>
// // // // // //         </ConfigProvider>
// // // // // //       </AuthProvider>
// // // // // //     </ThemeProvider>
// // // // // //   )
// // // // // // }

// // // // // // export default StudentPortal

// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // // // // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // // // // // import { CloseOutlined } from "@ant-design/icons"
// // // // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // // // // Components
// // // // // // import SideNav from "./components/SideNav"
// // // // // // import TopNav from "./components/TopNav"
// // // // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // // // Pages
// // // // // // import Dashboard from "./pages/Dashboard"
// // // // // // import MyCourses from "./pages/MyCourses"
// // // // // // import ITCourses from "./pages/ITCourses"
// // // // // // import NonITCourses from "./pages/NonITCourses"
// // // // // // import Profile from "./pages/Profile"
// // // // // // import Settings from "./pages/Settings"
// // // // // // import NotFound from "./pages/NotFound"
// // // // // // import VideoPlayer from "./components/VideoPlayer"

// // // // // // // Styles
// // // // // // import "./styles/StudentPortal.css"

// // // // // // const { Content } = Layout

// // // // // // const StudentPortal = () => {
// // // // // //   const [theme, setTheme] = useState("light")
// // // // // //   const [collapsed, setCollapsed] = useState(false)
// // // // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // // // //   const [userData, setUserData] = useState(null)

// // // // // //   const isMobile = windowWidth < 768
// // // // // //   const location = useLocation()

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       const width = window.innerWidth
// // // // // //       setWindowWidth(width)
// // // // // //       if (width < 768) {
// // // // // //   setCollapsed(true)
// // // // // // } else {
// // // // // //   setCollapsed(false)
// // // // // // }

// // // // // //     }

// // // // // //     window.addEventListener("resize", handleResize)
// // // // // //     return () => window.removeEventListener("resize", handleResize)
// // // // // //   }, [])

// // // // // //   useEffect(() => {
// // // // // //     const user = localStorage.getItem("user")
// // // // // //     if (user) {
// // // // // //       setUserData(JSON.parse(user))
// // // // // //     } else {
// // // // // //       const defaultUser = {
// // // // // //         id: "user123",
// // // // // //         name: "Student User",
// // // // // //         email: "student@example.com",
// // // // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // // // //         role: "student",
// // // // // //       }
// // // // // //       setUserData(defaultUser)
// // // // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // // // //     }
// // // // // //   }, [])

// // // // // //   const toggleTheme = () => {
// // // // // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // // // // //   }

// // // // // //   return (
// // // // // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // // // // //       <AuthProvider>
// // // // // //         <ConfigProvider
// // // // // //           theme={{
// // // // // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // // // //             token: {
// // // // // //               colorPrimary: "#1890ff",
// // // // // //               borderRadius: 4,
// // // // // //             },
// // // // // //           }}
// // // // // //         >
// // // // // //           <Layout style={{ minHeight: "100vh" }}>
// // // // // //             {/* Sidebar */}
// // // // // //             {!collapsed && (
// // // // // //               <div style={{ position: isMobile ? "absolute" : "relative", zIndex: 1000, height: "100vh", width: isMobile ? "100vw" : undefined }}>
// // // // // //                 <SideNav
// // // // // //                   collapsed={collapsed}
// // // // // //                   setCollapsed={setCollapsed}
// // // // // //                   isMobile={isMobile}
// // // // // //                   windowWidth={windowWidth}
// // // // // //                   userData={userData}
// // // // // //                 />
// // // // // //                 {isMobile && (
// // // // // //                   <Button
// // // // // //                     icon={<CloseOutlined />}
// // // // // //                     onClick={() => setCollapsed(true)}
// // // // // //                     style={{
// // // // // //                       position: "absolute",
// // // // // //                       top: 10,
// // // // // //                       right: 10,
// // // // // //                       zIndex: 1100,
// // // // // //                       background: "#fff",
// // // // // //                       border: "1px solid #ccc",
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Main Layout */}
// // // // // //             <Layout style={{ marginLeft: isMobile ? 0 : collapsed ? 80 : 260, transition: "all 0.2s" }}>
// // // // // //               <TopNav collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} userData={userData} />
// // // // // //               <Content
// // // // // //                 style={{
// // // // // //                   margin: "24px 16px",
// // // // // //                   padding: 24,
// // // // // //                   minHeight: 280,
// // // // // //                   background: theme === "dark" ? "#141414" : "#fff",
// // // // // //                   borderRadius: 4,
// // // // // //                   transition: "all 0.3s",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <Routes>
// // // // // //                   <Route path="/" element={<Navigate to="dashboard" replace />} />
// // // // // //                   <Route path="dashboard" element={<PrivateRoute><Dashboard windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //                   <Route path="courses" element={<PrivateRoute><MyCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //                   <Route path="it-courses" element={<PrivateRoute><ITCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //                   <Route path="non-it-courses" element={<PrivateRoute><NonITCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //                   <Route path="profile" element={<PrivateRoute><Profile windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //                   <Route path="settings" element={<PrivateRoute><Settings windowWidth={windowWidth} toggleTheme={toggleTheme} /></PrivateRoute>} />
// // // // // //                   <Route path="video" element={<PrivateRoute><VideoPlayer /></PrivateRoute>} />
// // // // // //                   <Route path="*" element={<NotFound />} />
// // // // // //                 </Routes>
// // // // // //               </Content>
// // // // // //             </Layout>
// // // // // //           </Layout>
// // // // // //         </ConfigProvider>
// // // // // //       </AuthProvider>
// // // // // //     </ThemeProvider>
// // // // // //   )
// // // // // // }

// // // // // // export default StudentPortal

// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // // // // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // // // // // import { CloseOutlined } from "@ant-design/icons"
// // // // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // // // // Components
// // // // // // import SideNav from "./components/SideNav"
// // // // // // import TopNav from "./components/TopNav"
// // // // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // // // Pages
// // // // // // import Dashboard from "./pages/Dashboard"
// // // // // // import MyCourses from "./pages/MyCourses"
// // // // // // import ITCourses from "./pages/ITCourses"
// // // // // // import NonITCourses from "./pages/NonITCourses"
// // // // // // import Profile from "./pages/Profile"
// // // // // // import Support from "./pages/Support"
// // // // // // import Settings from "./pages/Settings"
// // // // // // import NotFound from "./pages/NotFound"
// // // // // // import VideoPlayer from "./components/VideoPlayer"
// // // // // // import Certificates from "./pages/Certificates"
// // // // // // import Assignments from "./pages/Assignments"
// // // // // // import Payments from "./pages/Payments"
// // // // // // // Styles
// // // // // // import "./styles/StudentPortal.css"

// // // // // // const { Content } = Layout

// // // // // // const StudentPortal = () => {
// // // // // //   const [theme, setTheme] = useState("light")
// // // // // //   const [collapsed, setCollapsed] = useState(false)
// // // // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // // // //   const [userData, setUserData] = useState(null)

// // // // // //   const isMobile = windowWidth < 768
// // // // // //   const location = useLocation()

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       const width = window.innerWidth
// // // // // //       setWindowWidth(width)
// // // // // //       if (width < 768) {
// // // // // //         setCollapsed(true)
// // // // // //       } else {
// // // // // //         setCollapsed(false)
// // // // // //       }
// // // // // //     }

// // // // // //     window.addEventListener("resize", handleResize)
// // // // // //     return () => window.removeEventListener("resize", handleResize)
// // // // // //   }, [])

// // // // // //   useEffect(() => {
// // // // // //     const user = localStorage.getItem("user")
// // // // // //     if (user) {
// // // // // //       setUserData(JSON.parse(user))
// // // // // //     } else {
// // // // // //       const defaultUser = {
// // // // // //         id: "user123",
// // // // // //         name: "Student User",
// // // // // //         email: "student@example.com",
// // // // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // // // //         role: "student",
// // // // // //       }
// // // // // //       setUserData(defaultUser)
// // // // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // // // //     }
// // // // // //   }, [])

// // // // // // const toggleTheme = () => {
// // // // // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // // // // //   }
// // // // // //   useEffect(() => {
// // // // // //     setCollapsed(isMobile)
// // // // // //   }, [isMobile])

// // // // // //   return (
// // // // // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // // // // //       <AuthProvider>
// // // // // //         <ConfigProvider
// // // // // //           theme={{
// // // // // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // // // //             token: {
// // // // // //               colorPrimary: "#1890ff",
// // // // // //               borderRadius: 4,
// // // // // //             },
// // // // // //           }}
// // // // // //         >
// // // // // //         <Layout
// // // // // //   style={{
// // // // // //     minHeight: "100vh",
// // // // // //     background: theme === "dark" ? "#141414" : "#f5f5f5", // 🔹 dark = black, light = very light gray
// // // // // //   }}
// // // // // // >
// // // // // //   {/* Sidebar */}
// // // // // //   <div
// // // // // //     style={{
// // // // // //       position: isMobile ? "absolute" : "relative",
// // // // // //       height: "100vh",
// // // // // //       width: isMobile ? "100vw" : undefined,
// // // // // //     }}
// // // // // //   >
// // // // // //     <SideNav
// // // // // //       collapsed={collapsed}
// // // // // //       setCollapsed={setCollapsed}
// // // // // //       isMobile={isMobile}
// // // // // //       windowWidth={windowWidth}
// // // // // //       userData={userData}
// // // // // //     />
// // // // // //     {isMobile && !collapsed && (
// // // // // //       <Button
// // // // // //         icon={<CloseOutlined />}
// // // // // //         onClick={() => setCollapsed(true)}
// // // // // //         style={{
// // // // // //           position: "absolute",
// // // // // //           top: 10,
// // // // // //           right: 10,
// // // // // //           zIndex: 1100,
// // // // // //           background: "#fff",
// // // // // //           border: "1px solid #ccc",
// // // // // //         }}
// // // // // //       />
// // // // // //     )}
// // // // // //   </div>

// // // // // //   {/* Main Layout */}
// // // // // //   <Layout
// // // // // //     style={{
// // // // // //       marginLeft: isMobile ? 0 : collapsed ? 80 : 260,
// // // // // //       transition: "all 0.2s",
// // // // // //       background: "transparent", // let parent Layout handle the background
// // // // // //     }}
// // // // // //   >
// // // // // //     <TopNav collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} userData={userData} />
// // // // // //     <Content
// // // // // //   style={{
// // // // // //     // Responsive margin: center content on very large screens
// // // // // //     margin: windowWidth > 1600 
// // // // // //       ? "24px auto" 
// // // // // //       : "24px 16px",
      
// // // // // //     // Responsive padding that scales with screen size
// // // // // //     padding: windowWidth > 1920 
// // // // // //       ? 48 
// // // // // //       : windowWidth > 1600 
// // // // // //         ? 36 
// // // // // //         : 24,
        
// // // // // //     background: theme === "dark" ? "#141414" : "#fff",
// // // // // //     borderRadius: 4,
// // // // // //     transition: "all 0.3s",
    
// // // // // //     // Prevent content from becoming too wide on huge screens
// // // // // //     maxWidth: windowWidth > 1920 ? "1800px" : "100%",
// // // // // //     width: "100%",
// // // // // //   }}
// // // // // // >
// // // // // //   <Routes>
// // // // // //     <Route path="/" element={<Navigate to="dashboard" replace />} />
// // // // // //     <Route path="dashboard" element={<PrivateRoute><Dashboard windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="courses" element={<PrivateRoute><MyCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="it-courses" element={<PrivateRoute><ITCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="non-it-courses" element={<PrivateRoute><NonITCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="certificates" element={<PrivateRoute><Certificates windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="profile" element={<PrivateRoute><Profile windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="support" element={<PrivateRoute><Support windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="settings" element={<PrivateRoute><Settings windowWidth={windowWidth} toggleTheme={toggleTheme} /></PrivateRoute>} />
// // // // // //     <Route path="video" element={<PrivateRoute><VideoPlayer /></PrivateRoute>} />
// // // // // //     <Route path="assignments" element={<PrivateRoute><Assignments windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="payments" element={<PrivateRoute><Payments windowWidth={windowWidth} /></PrivateRoute>} />
// // // // // //     <Route path="*" element={<NotFound />} />
// // // // // //   </Routes>
// // // // // // </Content>
// // // // // //             </Layout>
// // // // // //           </Layout>
// // // // // //         </ConfigProvider>
// // // // // //       </AuthProvider>
// // // // // //     </ThemeProvider>
// // // // // //   )
// // // // // // }

// // // // // // export default StudentPortal
// // // // // "use client"

// // // // // import { useState, useEffect } from "react"
// // // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // // // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // // // // import { CloseOutlined } from "@ant-design/icons"
// // // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // // // Components
// // // // // import SideNav from "./components/SideNav"
// // // // // import TopNav from "./components/TopNav"
// // // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // // Pages
// // // // // import Dashboard from "./pages/Dashboard"
// // // // // import MyCourses from "./pages/MyCourses"
// // // // // import ITCourses from "./pages/ITCourses"
// // // // // import NonITCourses from "./pages/NonITCourses"
// // // // // import Profile from "./pages/Profile"
// // // // // import Support from "./pages/Support"
// // // // // import Settings from "./pages/Settings"
// // // // // import NotFound from "./pages/NotFound"
// // // // // import VideoPlayer from "./components/VideoPlayer"
// // // // // import Certificates from "./pages/Certificates"
// // // // // import Assignments from "./pages/Assignments"
// // // // // import Payments from "./pages/Payments"
// // // // // // Styles
// // // // // import "./styles/StudentPortal.css"

// // // // // const { Content } = Layout

// // // // // const StudentPortal = () => {
// // // // //   const [theme, setTheme] = useState("light")
// // // // //   const [collapsed, setCollapsed] = useState(false)
// // // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // // //   const [userData, setUserData] = useState(null)

// // // // //   const isMobile = windowWidth < 768
// // // // //   const location = useLocation()

// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       const width = window.innerWidth
// // // // //       setWindowWidth(width)
// // // // //       if (width < 768) {
// // // // //         setCollapsed(true)
// // // // //       } else {
// // // // //         setCollapsed(false)
// // // // //       }
// // // // //     }

// // // // //     window.addEventListener("resize", handleResize)
// // // // //     return () => window.removeEventListener("resize", handleResize)
// // // // //   }, [])

// // // // //   useEffect(() => {
// // // // //     const user = localStorage.getItem("user")
// // // // //     if (user) {
// // // // //       setUserData(JSON.parse(user))
// // // // //     } else {
// // // // //       const defaultUser = {
// // // // //         id: "user123",
// // // // //         name: "Student User",
// // // // //         email: "student@example.com",
// // // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // // //         role: "student",
// // // // //       }
// // // // //       setUserData(defaultUser)
// // // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // // //     }
// // // // //   }, [])

// // // // //   const toggleTheme = () => {
// // // // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // // // //   }
  
// // // // //   useEffect(() => {
// // // // //     setCollapsed(isMobile)
// // // // //   }, [isMobile])

// // // // //   return (
// // // // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // // // //       <AuthProvider>
// // // // //         <ConfigProvider
// // // // //           theme={{
// // // // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // // //             token: {
// // // // //               colorPrimary: "#1890ff",
// // // // //               borderRadius: 4,
// // // // //             },
// // // // //           }}
// // // // //         >
// // // // //           <Layout
// // // // //             style={{
// // // // //               minHeight: "100vh",
// // // // //               background: theme === "dark" ? "#141414" : "#f5f5f5",
// // // // //             }}
// // // // //           >
// // // // //             {/* Sidebar */}
// // // // //             <div
// // // // //               style={{
// // // // //                 position: isMobile ? "absolute" : "relative",
// // // // //                 height: "100vh",
// // // // //                 width: isMobile ? "100vw" : undefined,
// // // // //               }}
// // // // //             >
// // // // //               <SideNav
// // // // //                 collapsed={collapsed}
// // // // //                 setCollapsed={setCollapsed}
// // // // //                 isMobile={isMobile}
// // // // //                 windowWidth={windowWidth}
// // // // //                 userData={userData}
// // // // //               />
// // // // //               {isMobile && !collapsed && (
// // // // //                 <Button
// // // // //                   icon={<CloseOutlined />}
// // // // //                   onClick={() => setCollapsed(true)}
// // // // //                   style={{
// // // // //                     position: "absolute",
// // // // //                     top: 10,
// // // // //                     right: 10,
// // // // //                     zIndex: 1100,
// // // // //                     background: "#fff",
// // // // //                     border: "1px solid #ccc",
// // // // //                   }}
// // // // //                 />
// // // // //               )}
// // // // //             </div>

// // // // //             {/* Main Layout */}
// // // // //             <Layout
// // // // //               style={{
// // // // //                 marginLeft: isMobile ? 0 : collapsed ? 80 : 260,
// // // // //                 transition: "all 0.2s",
// // // // //                 background: "transparent",
// // // // //                 flex: 1,
// // // // //                 display: "flex",
// // // // //                 flexDirection: "column",
// // // // //               }}
// // // // //             >
// // // // //               <TopNav 
// // // // //                 collapsed={collapsed} 
// // // // //                 setCollapsed={setCollapsed} 
// // // // //                 isMobile={isMobile} 
// // // // //                 userData={userData} 
// // // // //               />
// // // // //               <Content
// // // // //                 style={{
// // // // //                   margin: "24px 16px",
// // // // //                   background: theme === "dark" ? "#141414" : "#fff",
// // // // //                   borderRadius: 4,
// // // // //                   transition: "all 0.3s",
// // // // //                   flex: 1,
// // // // //                   overflowY: "auto",
// // // // //                 }}
// // // // //               >
// // // // //                 {/* Responsive Content Wrapper */}
// // // // //                 <div
// // // // //                   style={{
// // // // //                     maxWidth: windowWidth > 1920 
// // // // //                       ? "1800px" 
// // // // //                       : windowWidth > 1600 
// // // // //                         ? "1600px" 
// // // // //                         : "100%",
// // // // //                     width: "100%",
// // // // //                     margin: "0 auto",
// // // // //                     padding: windowWidth > 1920 
// // // // //                       ? 48 
// // // // //                       : windowWidth > 1600 
// // // // //                         ? 36 
// // // // //                         : 24,
// // // // //                   }}
// // // // //                 >
// // // // //                   <Routes>
// // // // //                     <Route path="/" element={<Navigate to="dashboard" replace />} />
// // // // //                     <Route path="dashboard" element={<PrivateRoute><Dashboard windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="courses" element={<PrivateRoute><MyCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="it-courses" element={<PrivateRoute><ITCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="non-it-courses" element={<PrivateRoute><NonITCourses windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="certificates" element={<PrivateRoute><Certificates windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="profile" element={<PrivateRoute><Profile windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="support" element={<PrivateRoute><Support windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="settings" element={<PrivateRoute><Settings windowWidth={windowWidth} toggleTheme={toggleTheme} /></PrivateRoute>} />
// // // // //                     <Route path="video" element={<PrivateRoute><VideoPlayer /></PrivateRoute>} />
// // // // //                     <Route path="assignments" element={<PrivateRoute><Assignments windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="payments" element={<PrivateRoute><Payments windowWidth={windowWidth} /></PrivateRoute>} />
// // // // //                     <Route path="*" element={<NotFound />} />
// // // // //                   </Routes>
// // // // //                 </div>
// // // // //               </Content>
// // // // //             </Layout>
// // // // //           </Layout>
// // // // //         </ConfigProvider>
// // // // //       </AuthProvider>
// // // // //     </ThemeProvider>
// // // // //   )
// // // // // }

// // // // // export default StudentPortal

// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // // // import { CloseOutlined } from "@ant-design/icons"
// // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // // Components
// // // // import SideNav from "./components/SideNav"
// // // // import TopNav from "./components/TopNav"
// // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // Pages
// // // // import Dashboard from "./pages/Dashboard"
// // // // import MyCourses from "./pages/MyCourses"
// // // // import ITCourses from "./pages/ITCourses"
// // // // import NonITCourses from "./pages/NonITCourses"
// // // // import Profile from "./pages/Profile"
// // // // import Support from "./pages/Support"
// // // // import Settings from "./pages/Settings"
// // // // import NotFound from "./pages/NotFound"
// // // // import VideoPlayer from "./components/VideoPlayer"
// // // // import Certificates from "./pages/Certificates"
// // // // import Assignments from "./pages/Assignments"
// // // // import Payments from "./pages/Payments"

// // // // // Styles
// // // // import "./styles/StudentPortal.css"

// // // // const { Content } = Layout

// // // // const StudentPortal = () => {
// // // //   const [theme, setTheme] = useState("light")
// // // //   const [collapsed, setCollapsed] = useState(false)
// // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // //   const [userData, setUserData] = useState(null)

// // // //   const isMobile = windowWidth < 768
// // // //   const location = useLocation()

// // // //   // Handle window resize for responsive sidebar
// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       const width = window.innerWidth
// // // //       setWindowWidth(width)
// // // //       if (width < 768) {
// // // //         setCollapsed(true)
// // // //       } else {
// // // //         setCollapsed(false)
// // // //       }
// // // //     }

// // // //     window.addEventListener("resize", handleResize)
// // // //     return () => window.removeEventListener("resize", handleResize)
// // // //   }, [])

// // // //   // Set default user data if not found in localStorage
// // // //   useEffect(() => {
// // // //     const user = localStorage.getItem("user")
// // // //     if (user) {
// // // //       setUserData(JSON.parse(user))
// // // //     } else {
// // // //       const defaultUser = {
// // // //         id: "user123",
// // // //         name: "Student User",
// // // //         email: "student@example.com",
// // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // //         role: "student",
// // // //       }
// // // //       setUserData(defaultUser)
// // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // //     }
// // // //   }, [])

// // // //   const toggleTheme = () => {
// // // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // // //   }

// // // //   useEffect(() => {
// // // //     setCollapsed(isMobile)
// // // //   }, [isMobile])

// // // //   return (
// // // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // // //       <AuthProvider>
// // // //         <ConfigProvider
// // // //           theme={{
// // // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // //             token: {
// // // //               colorPrimary: "#1890ff",
// // // //               borderRadius: 4,
// // // //             },
// // // //           }}
// // // //         >
// // // //           <Layout
// // // //             style={{
// // // //               minHeight: "100vh",
// // // //               background: theme === "dark" ? "#141414" : "#f5f5f5",
// // // //               overflow: "hidden",
// // // //             }}
// // // //           >
// // // //             {/* ======== SIDENAV + OVERLAY ======== */}
// // // //             {isMobile && !collapsed && (
// // // //               <div
// // // //                 onClick={() => setCollapsed(true)}
// // // //                 style={{
// // // //                   position: "fixed",
// // // //                   top: 0,
// // // //                   left: 0,
// // // //                   width: "100vw",
// // // //                   height: "100vh",
// // // //                   background: "rgba(0, 0, 0, 0.4)",
// // // //                   zIndex: 998,
// // // //                   transition: "opacity 0.3s ease",
// // // //                 }}
// // // //               />
// // // //             )}

// // // //             <div
// // // //               style={{
// // // //                 position: isMobile ? "fixed" : "relative",
// // // //                 top: 0,
// // // //                 left: 0,
// // // //                 height: "100vh",
// // // //                 zIndex: 999,
// // // //                 transition: "transform 0.3s ease-in-out",
// // // //                 transform: isMobile
// // // //                   ? collapsed
// // // //                     ? "translateX(-100%)"
// // // //                     : "translateX(0)"
// // // //                   : "none",
// // // //               }}
// // // //             >
// // // //               <SideNav
// // // //                 collapsed={collapsed}
// // // //                 setCollapsed={setCollapsed}
// // // //                 isMobile={isMobile}
// // // //                 windowWidth={windowWidth}
// // // //                 userData={userData}
// // // //               />

// // // //               {isMobile && !collapsed && (
// // // //                 <Button
// // // //                   icon={<CloseOutlined />}
// // // //                   onClick={() => setCollapsed(true)}
// // // //                   style={{
// // // //                     position: "absolute",
// // // //                     top: 10,
// // // //                     right: 10,
// // // //                     zIndex: 1100,
// // // //                     background: "#fff",
// // // //                     border: "1px solid #ccc",
// // // //                   }}
// // // //                 />
// // // //               )}
// // // //             </div>

// // // //             {/* ======== MAIN CONTENT ======== */}
// // // //             <Layout
// // // //               style={{
// // // //                 marginLeft: isMobile ? 0 : collapsed ? 80 : 260,
// // // //                 transition: "all 0.2s ease",
// // // //                 background: "transparent",
// // // //                 flex: 1,
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //               }}
// // // //             >
// // // //               <TopNav
// // // //                 collapsed={collapsed}
// // // //                 setCollapsed={setCollapsed}
// // // //                 isMobile={isMobile}
// // // //                 userData={userData}
// // // //               />

// // // //               <Content
// // // //                 style={{
// // // //                   margin: "24px 16px",
// // // //                   background: theme === "dark" ? "#141414" : "#fff",
// // // //                   borderRadius: 4,
// // // //                   transition: "all 0.3s ease",
// // // //                   flex: 1,
// // // //                   overflowY: "auto",
// // // //                 }}
// // // //               >
// // // //                 {/* Responsive Content Wrapper */}
// // // //                 <div
// // // //                   style={{
// // // //                     maxWidth:
// // // //                       windowWidth > 1920
// // // //                         ? "1800px"
// // // //                         : windowWidth > 1600
// // // //                         ? "1600px"
// // // //                         : "100%",
// // // //                     width: "100%",
// // // //                     margin: "0 auto",
// // // //                     padding:
// // // //                       windowWidth > 1920
// // // //                         ? 48
// // // //                         : windowWidth > 1600
// // // //                         ? 36
// // // //                         : 24,
// // // //                   }}
// // // //                 >
// // // //                   <Routes>
// // // //                     <Route path="/" element={<Navigate to="dashboard" replace />} />
// // // //                     <Route
// // // //                       path="dashboard"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Dashboard windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="courses"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <MyCourses windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="it-courses"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <ITCourses windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="non-it-courses"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <NonITCourses windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="certificates"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Certificates windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="profile"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Profile windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="support"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Support windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="settings"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Settings
// // // //                             windowWidth={windowWidth}
// // // //                             toggleTheme={toggleTheme}
// // // //                           />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="video"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <VideoPlayer />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="assignments"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Assignments windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="payments"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Payments windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route path="*" element={<NotFound />} />
// // // //                   </Routes>
// // // //                 </div>
// // // //               </Content>
// // // //             </Layout>
// // // //           </Layout>
// // // //         </ConfigProvider>
// // // //       </AuthProvider>
// // // //     </ThemeProvider>
// // // //   )
// // // // }

// // // // export default StudentPortal

// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // // // import { CloseOutlined } from "@ant-design/icons"
// // // // import { AuthProvider } from "./contexts/AuthContext"
// // // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // // Components
// // // // import SideNav from "./components/SideNav"
// // // // import TopNav from "./components/TopNav"
// // // // import PrivateRoute from "./components/PrivateRoute"

// // // // // Pages
// // // // import Dashboard from "./pages/Dashboard"
// // // // import MyCourses from "./pages/MyCourses"
// // // // import ITCourses from "./pages/ITCourses"
// // // // import NonITCourses from "./pages/NonITCourses"
// // // // import Profile from "./pages/Profile"
// // // // import Support from "./pages/Support"
// // // // import Settings from "./pages/Settings"
// // // // import NotFound from "./pages/NotFound"
// // // // import VideoPlayer from "./components/VideoPlayer"
// // // // import Certificates from "./pages/Certificates"
// // // // import Assignments from "./pages/Assignments"
// // // // import Payments from "./pages/Payments"

// // // // // Styles
// // // // import "./styles/StudentPortal.css"

// // // // const { Content } = Layout

// // // // const StudentPortal = () => {
// // // //   const [theme, setTheme] = useState("light")
// // // //   const [collapsed, setCollapsed] = useState(false)
// // // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // // //   const [userData, setUserData] = useState(null)

// // // //   const isSmallScreen = windowWidth < 1024 // 📱💻 mobile + tablet together
// // // //   const location = useLocation()

// // // //   // Handle window resize for responsive sidebar
// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       const width = window.innerWidth
// // // //       setWindowWidth(width)
// // // //       if (width < 1024) {
// // // //         setCollapsed(true)
// // // //       } else {
// // // //         setCollapsed(false)
// // // //       }
// // // //     }

// // // //     window.addEventListener("resize", handleResize)
// // // //     return () => window.removeEventListener("resize", handleResize)
// // // //   }, [])

// // // //   // Set default user data if not found in localStorage
// // // //   useEffect(() => {
// // // //     const user = localStorage.getItem("user")
// // // //     if (user) {
// // // //       setUserData(JSON.parse(user))
// // // //     } else {
// // // //       const defaultUser = {
// // // //         id: "user123",
// // // //         name: "Student User",
// // // //         email: "student@example.com",
// // // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // // //         role: "student",
// // // //       }
// // // //       setUserData(defaultUser)
// // // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // // //     }
// // // //   }, [])

// // // //   const toggleTheme = () => {
// // // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // // //   }

// // // //   useEffect(() => {
// // // //     setCollapsed(isSmallScreen)
// // // //   }, [isSmallScreen])

// // // //   return (
// // // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // // //       <AuthProvider>
// // // //         <ConfigProvider
// // // //           theme={{
// // // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // // //             token: {
// // // //               colorPrimary: "#1890ff",
// // // //               borderRadius: 4,
// // // //             },
// // // //           }}
// // // //         >
// // // //           <Layout
// // // //             style={{
// // // //               minHeight: "100vh",
// // // //               background: theme === "dark" ? "#141414" : "#f5f5f5",
// // // //               overflow: "hidden",
// // // //             }}
// // // //           >
// // // //             {/* ======== SIDENAV + OVERLAY ======== */}
// // // //             {isSmallScreen && !collapsed && (
// // // //               <div
// // // //                 onClick={() => setCollapsed(true)}
// // // //                 style={{
// // // //                   position: "fixed",
// // // //                   top: 0,
// // // //                   left: 0,
// // // //                   width: "100vw",
// // // //                   height: "100vh",
// // // //                   background: "rgba(0, 0, 0, 0.4)",
// // // //                   zIndex: 998,
// // // //                   transition: "opacity 0.3s ease",
// // // //                 }}
// // // //               />
// // // //             )}

// // // //             <div
// // // //               style={{
// // // //                 position: isSmallScreen ? "fixed" : "relative",
// // // //                 top: 0,
// // // //                 left: 0,
// // // //                 height: "100vh",
// // // //                 zIndex: 999,
// // // //                 transition: "transform 0.3s ease-in-out",
// // // //                 transform: isSmallScreen
// // // //                   ? collapsed
// // // //                     ? "translateX(-100%)"
// // // //                     : "translateX(0)"
// // // //                   : "none",
// // // //               }}
// // // //             >
// // // //               <SideNav
// // // //                 collapsed={collapsed}
// // // //                 setCollapsed={setCollapsed}
// // // //                 isMobile={isSmallScreen}
// // // //                 windowWidth={windowWidth}
// // // //                 userData={userData}
// // // //               />

// // // //               {isSmallScreen && !collapsed && (
// // // //                 <Button
// // // //                   icon={<CloseOutlined />}
// // // //                   onClick={() => setCollapsed(true)}
// // // //                   style={{
// // // //                     position: "absolute",
// // // //                     top: 10,
// // // //                     right: 10,
// // // //                     zIndex: 1100,
// // // //                     background: "#fff",
// // // //                     border: "1px solid #ccc",
// // // //                   }}
// // // //                 />
// // // //               )}
// // // //             </div>

// // // //             {/* ======== MAIN CONTENT ======== */}
// // // //             <Layout
// // // //               style={{
// // // //                 marginLeft: isSmallScreen ? 0 : collapsed ? 80 : 260,
// // // //                 transition: "all 0.2s ease",
// // // //                 background: "transparent",
// // // //                 flex: 1,
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //               }}
// // // //             >
// // // //               <TopNav
// // // //                 collapsed={collapsed}
// // // //                 setCollapsed={setCollapsed}
// // // //                 isMobile={isSmallScreen}
// // // //                 userData={userData}
// // // //               />

// // // //               <Content
// // // //                 style={{
// // // //                   margin: "24px 16px",
// // // //                   background: theme === "dark" ? "#141414" : "#fff",
// // // //                   borderRadius: 4,
// // // //                   transition: "all 0.3s ease",
// // // //                   flex: 1,
// // // //                   overflowY: "auto",
// // // //                 }}
// // // //               >
// // // //                 {/* Responsive Content Wrapper */}
// // // //                 <div
// // // //                   style={{
// // // //                     maxWidth:
// // // //                       windowWidth > 1920
// // // //                         ? "1800px"
// // // //                         : windowWidth > 1600
// // // //                         ? "1600px"
// // // //                         : "100%",
// // // //                     width: "100%",
// // // //                     margin: "0 auto",
// // // //                     padding:
// // // //                       windowWidth > 1920
// // // //                         ? 48
// // // //                         : windowWidth > 1600
// // // //                         ? 36
// // // //                         : 24,
// // // //                   }}
// // // //                 >
// // // //                   <Routes>
// // // //                     <Route path="/" element={<Navigate to="dashboard" replace />} />
// // // //                     <Route
// // // //                       path="dashboard"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Dashboard windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="courses"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <MyCourses windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="it-courses"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <ITCourses windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="non-it-courses"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <NonITCourses windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="certificates"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Certificates windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="profile"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Profile windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="support"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Support windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="settings"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Settings windowWidth={windowWidth} toggleTheme={toggleTheme} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="video"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <VideoPlayer />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="assignments"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Assignments windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route
// // // //                       path="payments"
// // // //                       element={
// // // //                         <PrivateRoute>
// // // //                           <Payments windowWidth={windowWidth} />
// // // //                         </PrivateRoute>
// // // //                       }
// // // //                     />
// // // //                     <Route path="*" element={<NotFound />} />
// // // //                   </Routes>
// // // //                 </div>
// // // //               </Content>
// // // //             </Layout>
// // // //           </Layout>
// // // //         </ConfigProvider>
// // // //       </AuthProvider>
// // // //     </ThemeProvider>
// // // //   )
// // // // }

// // // // export default StudentPortal
// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // // import { CloseOutlined } from "@ant-design/icons"
// // // import { AuthProvider } from "./contexts/AuthContext"
// // // import { ThemeProvider } from "./contexts/ThemeContext"

// // // // Components
// // // import SideNav from "./components/SideNav"
// // // import TopNav from "./components/TopNav"
// // // import PrivateRoute from "./components/PrivateRoute"

// // // // Pages
// // // import Dashboard from "./pages/Dashboard"
// // // import MyCourses from "./pages/MyCourses"
// // // import ITCourses from "./pages/ITCourses"
// // // import NonITCourses from "./pages/NonITCourses"
// // // import Profile from "./pages/Profile"
// // // import Support from "./pages/Support"
// // // import Settings from "./pages/Settings"
// // // import NotFound from "./pages/NotFound"
// // // import VideoPlayer from "./components/VideoPlayer"
// // // import Certificates from "./pages/Certificates"
// // // import Assignments from "./pages/Assignments"
// // // import Payments from "./pages/Payments"

// // // // Styles
// // // import "./styles/StudentPortal.css"

// // // const { Content } = Layout

// // // const StudentPortal = () => {
// // //   const [theme, setTheme] = useState("light")
// // //   const [collapsed, setCollapsed] = useState(false)
// // //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
// // //   const [userData, setUserData] = useState(null)

// // //   const isSmallScreen = windowWidth < 1024 // mobile + tablet
// // //   const location = useLocation()

// // //   // Handle window resize for responsive sidebar
// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       const width = window.innerWidth
// // //       setWindowWidth(width)
// // //       if (width < 1024) {
// // //         setCollapsed(true)
// // //       } else {
// // //         setCollapsed(false)
// // //       }
// // //     }

// // //     window.addEventListener("resize", handleResize)
// // //     return () => window.removeEventListener("resize", handleResize)
// // //   }, [])

// // //   // Set default user data if not found in localStorage
// // //   useEffect(() => {
// // //     const user = localStorage.getItem("user")
// // //     if (user) {
// // //       setUserData(JSON.parse(user))
// // //     } else {
// // //       const defaultUser = {
// // //         id: "user123",
// // //         name: "Student User",
// // //         email: "student@example.com",
// // //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // //         role: "student",
// // //       }
// // //       setUserData(defaultUser)
// // //       localStorage.setItem("user", JSON.stringify(defaultUser))
// // //     }
// // //   }, [])

// // //   const toggleTheme = () => {
// // //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// // //   }

// // //   useEffect(() => {
// // //     setCollapsed(isSmallScreen)
// // //   }, [isSmallScreen])

// // //   return (
// // //     <ThemeProvider value={{ theme, toggleTheme }}>
// // //       <AuthProvider>
// // //         <ConfigProvider
// // //           theme={{
// // //             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
// // //             token: {
// // //               colorPrimary: "#1890ff",
// // //               borderRadius: 4,
// // //             },
// // //           }}
// // //         >
// // //           <Layout
// // //             style={{
// // //               minHeight: "100vh",
// // //               background: theme === "dark" ? "#141414" : "#f5f5f5",
// // //               overflow: "hidden",
// // //             }}
// // //           >
// // //             {/* ======== SIDENAV + OVERLAY ======== */}
// // //             {isSmallScreen && !collapsed && (
// // //               <div
// // //                 onClick={() => setCollapsed(true)}
// // //                 style={{
// // //                   position: "fixed",
// // //                   top: 0,
// // //                   left: 0,
// // //                   width: "100vw",
// // //                   height: "100vh",
// // //                   background: "rgba(0, 0, 0, 0.4)",
// // //                   zIndex: 998,
// // //                   transition: "opacity 0.3s ease",
// // //                 }}
// // //               />
// // //             )}

// // //             <div
// // //               style={{
// // //                 position: isSmallScreen ? "fixed" : "relative",
// // //                 top: 0,
// // //                 left: 0,
// // //                 height: "100vh",
// // //                 zIndex: 999,
// // //                 transition: "transform 0.3s ease-in-out",
// // //                 transform: isSmallScreen
// // //                   ? collapsed
// // //                     ? "translateX(-100%)"
// // //                     : "translateX(0)"
// // //                   : "none",
// // //               }}
// // //             >
// // //               <SideNav
// // //                 collapsed={collapsed}
// // //                 setCollapsed={setCollapsed}
// // //                 isMobile={isSmallScreen}
// // //                 windowWidth={windowWidth}
// // //                 userData={userData}
// // //               />

// // //               {isSmallScreen && !collapsed && (
// // //                 <Button
// // //                   icon={<CloseOutlined />}
// // //                   onClick={() => setCollapsed(true)}
// // //                   style={{
// // //                     position: "absolute",
// // //                     top: 10,
// // //                     right: 10,
// // //                     zIndex: 1100,
// // //                     background: "#fff",
// // //                     border: "1px solid #ccc",
// // //                   }}
// // //                 />
// // //               )}
// // //             </div>

// // //             {/* ======== MAIN CONTENT ======== */}
// // //             <Layout
// // //               style={{
// // //                 marginLeft: isSmallScreen ? 0 : collapsed ? 80 : 260,
// // //                 transition: "all 0.2s ease",
// // //                 background: "transparent",
// // //                 flex: 1,
// // //                 display: "flex",
// // //                 flexDirection: "column",
// // //               }}
// // //             >
// // //               <TopNav
// // //                 collapsed={collapsed}
// // //                 setCollapsed={setCollapsed}
// // //                 isMobile={isSmallScreen}
// // //                 userData={userData}
// // //               />

// // //               <Content
// // //                 style={{
// // //                   margin: "24px 16px",
// // //                   background: theme === "dark" ? "#141414" : "#fff",
// // //                   borderRadius: 4,
// // //                   transition: "all 0.3s ease",
// // //                   flex: 1,
// // //                   overflowY: "auto",
// // //                   width: "100%",
// // //                 }}
// // //               >
// // //                 {/* Full-width Responsive Wrapper */}
// // //                 <div
// // //                   style={{
// // //                     width: "100%",
// // //                     maxWidth: "100%", // removes any fixed maxWidth
// // //                     margin: "0 auto",
// // //                     padding:
// // //                       windowWidth > 2560
// // //                         ? 64
// // //                         : windowWidth > 1920
// // //                         ? 48
// // //                         : windowWidth > 1600
// // //                         ? 36
// // //                         : 24,
// // //                   }}
// // //                 >
// // //                   <Routes>
// // //                     <Route path="/" element={<Navigate to="dashboard" replace />} />
// // //                     <Route
// // //                       path="dashboard"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Dashboard windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="courses"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <MyCourses windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="it-courses"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <ITCourses windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="non-it-courses"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <NonITCourses windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="certificates"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Certificates windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="profile"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Profile windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="support"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Support windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="settings"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Settings windowWidth={windowWidth} toggleTheme={toggleTheme} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="video"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <VideoPlayer />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="assignments"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Assignments windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route
// // //                       path="payments"
// // //                       element={
// // //                         <PrivateRoute>
// // //                           <Payments windowWidth={windowWidth} />
// // //                         </PrivateRoute>
// // //                       }
// // //                     />
// // //                     <Route path="*" element={<NotFound />} />
// // //                   </Routes>
// // //                 </div>
// // //               </Content>
// // //             </Layout>
// // //           </Layout>
// // //         </ConfigProvider>
// // //       </AuthProvider>
// // //     </ThemeProvider>
// // //   )
// // // }

// // // export default StudentPortal

// // "use client"

// // import { useState, useEffect } from "react"
// // import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// // import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// // import { CloseOutlined } from "@ant-design/icons"
// // import { AuthProvider } from "./contexts/AuthContext"
// // import { ThemeProvider } from "./contexts/ThemeContext"

// // // Components
// // import SideNav from "./components/SideNav"
// // import TopNav from "./components/TopNav"
// // import PrivateRoute from "./components/PrivateRoute"

// // // Pages
// // import Dashboard from "./pages/Dashboard"
// // import MyCourses from "./pages/MyCourses"
// // import ITCourses from "./pages/ITCourses"
// // import NonITCourses from "./pages/NonITCourses"
// // import Profile from "./pages/Profile"
// // import Support from "./pages/Support"
// // import Settings from "./pages/Settings"
// // import NotFound from "./pages/NotFound"
// // import VideoPlayer from "./components/VideoPlayer"
// // import Certificates from "./pages/Certificates"
// // import Assignments from "./pages/Assignments"
// // import Payments from "./pages/Payments"

// // // Styles
// // import "./styles/StudentPortal.css"

// // const { Content } = Layout

// // const StudentPortal = () => {
// //   const [theme, setTheme] = useState("light")
// //   const [collapsed, setCollapsed] = useState(false)
// //   const [windowWidth, setWindowWidth] = useState(
// //     typeof window !== "undefined" ? window.innerWidth : 1200
// //   )
// //   const [userData, setUserData] = useState(null)

// //   const isMobile = windowWidth < 768
// //   const isTablet = windowWidth >= 768 && windowWidth < 1024
// //   const location = useLocation()

// //   useEffect(() => {
// //     const handleResize = () => {
// //       const width = window.innerWidth
// //       setWindowWidth(width)
// //       if (width < 1024) {
// //         setCollapsed(true) // auto collapse for tablet & mobile
// //       } else {
// //         setCollapsed(false)
// //       }
// //     }

// //     window.addEventListener("resize", handleResize)
// //     return () => window.removeEventListener("resize", handleResize)
// //   }, [])

// //   useEffect(() => {
// //     const user = localStorage.getItem("user")
// //     if (user) {
// //       setUserData(JSON.parse(user))
// //     } else {
// //       const defaultUser = {
// //         id: "user123",
// //         name: "Student User",
// //         email: "student@example.com",
// //         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// //         role: "student",
// //       }
// //       setUserData(defaultUser)
// //       localStorage.setItem("user", JSON.stringify(defaultUser))
// //     }
// //   }, [])

// //   const toggleTheme = () => {
// //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
// //   }

// //   useEffect(() => {
// //     setCollapsed(isMobile || isTablet)
// //   }, [isMobile, isTablet])

// //   return (
// //     <ThemeProvider value={{ theme, toggleTheme }}>
// //       <AuthProvider>
// //         <ConfigProvider
// //           theme={{
// //             algorithm:
// //               theme === "dark"
// //                 ? antdTheme.darkAlgorithm
// //                 : antdTheme.defaultAlgorithm,
// //             token: {
// //               colorPrimary: "#1890ff",
// //               borderRadius: 4,
// //             },
// //           }}
// //         >
// //           <Layout
// //             style={{
// //               minHeight: "100vh",
// //               background: theme === "dark" ? "#141414" : "#f5f5f5",
// //             }}
// //           >
// //             {/* Sidebar */}
// //             <div
// //               style={{
// //                 position: isMobile || isTablet ? "absolute" : "relative",
// //                 zIndex: 1100,
// //                 height: "100vh",
// //                 width: isMobile || isTablet ? "100vw" : undefined,
// //                 transition: "all 0.3s ease",
// //               }}
// //             >
// //               <SideNav
// //                 collapsed={collapsed}
// //                 setCollapsed={setCollapsed}
// //                 isMobile={isMobile || isTablet}
// //                 windowWidth={windowWidth}
// //                 userData={userData}
// //               />
// //               {(isMobile || isTablet) && !collapsed && (
// //                 <Button
// //                   icon={<CloseOutlined />}
// //                   onClick={() => setCollapsed(true)}
// //                   style={{
// //                     position: "absolute",
// //                     top: 10,
// //                     right: 10,
// //                     zIndex: 1200,
// //                     background: "#fff",
// //                     border: "1px solid #ccc",
// //                   }}
// //                 />
// //               )}
// //             </div>

// //             {/* Main Layout */}
// //             <Layout
// //               style={{
// //                 marginLeft:
// //                   isMobile || isTablet
// //                     ? 0
// //                     : collapsed
// //                     ? 80
// //                     : 260,
// //                 transition: "all 0.2s",
// //                 background: "transparent",
// //                 flex: 1,
// //                 display: "flex",
// //                 flexDirection: "column",
// //               }}
// //             >
// //               <TopNav
// //                 collapsed={collapsed}
// //                 setCollapsed={setCollapsed}
// //                 isMobile={isMobile || isTablet}
// //                 userData={userData}
// //               />
// //               <Content
// //                 style={{
// //                   margin: "24px 0",
// //                   background: theme === "dark" ? "#141414" : "#fff",
// //                   borderRadius: 4,
// //                   transition: "all 0.3s",
// //                   flex: 1,
// //                   overflowY: "auto",
// //                   width: "100%",
// //                 }}
// //               >
// //                 {/* Responsive Content Wrapper */}
// //                 <div
// //                   style={{
// //                     width: "100%",
// //                     maxWidth: "1920px",
// //                     margin: "0 auto",
// //                     padding: 24,
// //                   }}
// //                 >
// //                   <Routes>
// //                     <Route
// //                       path="/"
// //                       element={<Navigate to="dashboard" replace />}
// //                     />
// //                     <Route
// //                       path="dashboard"
// //                       element={
// //                         <PrivateRoute>
// //                           <Dashboard windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="courses"
// //                       element={
// //                         <PrivateRoute>
// //                           <MyCourses windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="it-courses"
// //                       element={
// //                         <PrivateRoute>
// //                           <ITCourses windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="non-it-courses"
// //                       element={
// //                         <PrivateRoute>
// //                           <NonITCourses windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="certificates"
// //                       element={
// //                         <PrivateRoute>
// //                           <Certificates windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="profile"
// //                       element={
// //                         <PrivateRoute>
// //                           <Profile windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="support"
// //                       element={
// //                         <PrivateRoute>
// //                           <Support windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="settings"
// //                       element={
// //                         <PrivateRoute>
// //                           <Settings
// //                             windowWidth={windowWidth}
// //                             toggleTheme={toggleTheme}
// //                           />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="video"
// //                       element={
// //                         <PrivateRoute>
// //                           <VideoPlayer />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="assignments"
// //                       element={
// //                         <PrivateRoute>
// //                           <Assignments windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route
// //                       path="payments"
// //                       element={
// //                         <PrivateRoute>
// //                           <Payments windowWidth={windowWidth} />
// //                         </PrivateRoute>
// //                       }
// //                     />
// //                     <Route path="*" element={<NotFound />} />
// //                   </Routes>
// //                 </div>
// //               </Content>
// //             </Layout>
// //           </Layout>
// //         </ConfigProvider>
// //       </AuthProvider>
// //     </ThemeProvider>
// //   )
// // }

// // export default StudentPortal

// "use client"

// import { useState, useEffect } from "react"
// import { Routes, Route, Navigate, useLocation } from "react-router-dom"
// import { Layout, ConfigProvider, theme as antdTheme, Button } from "antd"
// import { CloseOutlined } from "@ant-design/icons"
// import { AuthProvider } from "./contexts/AuthContext"
// import { ThemeProvider } from "./contexts/ThemeContext"

// // Components
// import SideNav from "./components/SideNav"
// import TopNav from "./components/TopNav"
// import PrivateRoute from "./components/PrivateRoute"

// // Pages
// import Dashboard from "./pages/Dashboard"
// import MyCourses from "./pages/MyCourses"
// import ITCourses from "./pages/ITCourses"
// import NonITCourses from "./pages/NonITCourses"
// import Profile from "./pages/Profile"
// import Support from "./pages/Support"
// import Settings from "./pages/Settings"
// import NotFound from "./pages/NotFound"
// import VideoPlayer from "./components/VideoPlayerold"
// import Certificates from "./pages/Certificates"
// import Assignments from "./pages/Assignments"
// import Payments from "./pages/Payments"
// import InterestWishlist from "./pages/InterestandWishlist"
// import CourseDetail from "./components/CourseDetail"

// // Styles
// import "./styles/StudentPortal.css"
// //globaldata
// import  useGlobalStore from "./contexts/GlobalStore"



// const { Content } = Layout

// const StudentPortal = () => {
//   const [theme, setTheme] = useState("light")
//   const [collapsed, setCollapsed] = useState(false)
//   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
//   const [userData, setUserData] = useState(null)

//   const isSmallScreen = windowWidth < 1024 // mobile + tablet
//   const location = useLocation()

//   // Handle window resize for responsive sidebar
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth
//       setWindowWidth(width)
//       if (width < 1024) {
//         setCollapsed(true)
//       } else {
//         setCollapsed(false)
//       }
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // Set default user data if not found in localStorage
//   useEffect(() => {
//     const user = localStorage.getItem("user")
//     if (user) {
//       setUserData(JSON.parse(user))
//     } else {
//       const defaultUser = {
//         id: "user123",
//         name: "Student User",
//         email: "student@example.com",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         role: "student",
//       }
//       setUserData(defaultUser)
//       localStorage.setItem("user", JSON.stringify(defaultUser))
//     }
//   }, [])

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
//   }

//   useEffect(() => {
//     setCollapsed(isSmallScreen)
//   }, [isSmallScreen])

//   return (
//     <ThemeProvider value={{ theme, toggleTheme }}>
//       <AuthProvider>
//         <useGlobalStore>
//         <ConfigProvider
//           theme={{
//             algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
//             token: {
//               colorPrimary: "#1890ff",
//               borderRadius: 4,
//             },
//           }}
//         >
//           <Layout
//             style={{
//               minHeight: "100vh",
//               background: theme === "dark" ? "#141414" : "#f5f5f5",
//               overflow: "hidden",
//             }}
//           >
//             {/* ======== SIDENAV + OVERLAY ======== */}
//             {isSmallScreen && !collapsed && (
//               <div
//                 onClick={() => setCollapsed(true)}
//                 style={{
//                   position: "fixed",
//                   top: 0,
//                   left: 0,
//                   width: "100vw",
//                   height: "100vh",
//                   background: "rgba(0, 0, 0, 0.4)",
//                   zIndex: 998,
//                   transition: "opacity 0.3s ease",
//                 }}
//               />
//             )}

//             <div
//               style={{
//                 position: isSmallScreen ? "fixed" : "relative",
//                 top: 0,
//                 left: 0,
//                 height: "100vh",
//                 zIndex: 999,
//                 transition: "transform 0.3s ease-in-out",
//                 transform: isSmallScreen
//                   ? collapsed
//                     ? "translateX(-100%)"
//                     : "translateX(0)"
//                   : "none",
//               }}
//             >
//               <SideNav
//                 collapsed={collapsed}
//                 setCollapsed={setCollapsed}
//                 isMobile={isSmallScreen}
//                 windowWidth={windowWidth}
//                 userData={userData}
//               />

//               {isSmallScreen && !collapsed && (
//                 <Button
//                   icon={<CloseOutlined />}
//                   onClick={() => setCollapsed(true)}
//                   style={{
//                     position: "absolute",
//                     top: 10,
//                     right: 10,
//                     zIndex: 1100,
//                     background: "#fff",
//                     border: "1px solid #ccc",
//                   }}
//                 />
//               )}
//             </div>

//             {/* ======== MAIN CONTENT ======== */}
//             <Layout
//               style={{
//                 marginLeft: isSmallScreen ? 0 : collapsed ? 80 : 260,
//                 transition: "all 0.2s ease",
//                 background: "transparent",
//                 flex: 1,
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <TopNav
//                 collapsed={collapsed}
//                 setCollapsed={setCollapsed}
//                 isMobile={isSmallScreen}
//                 userData={userData}
//               />

//               <Content
//                 style={{
//                   margin: "24px 16px",
//                   background: theme === "dark" ? "#141414" : "#fff",
//                   borderRadius: 4,
//                   transition: "all 0.3s ease",
//                   flex: 1,
//                   overflowY: "auto",
//                   width: "100%",
//                 }}
//               >
//                 {/* Full-width Responsive Wrapper */}
//                 <div
//                   style={{
//                     width: "100%",
//                     maxWidth: "100%", // removes any fixed maxWidth
//                     margin: "0 auto",
//                     padding:
//                       windowWidth > 2560
//                         ? 64
//                         : windowWidth > 1920
//                         ? 48
//                         : windowWidth > 1600
//                         ? 36
//                         : 24,
//                   }}
//                 >
                 
//                   <Routes>
//                     <Route path="/" element={<Navigate to="dashboard" replace />} />
//                     <Route
//                       path="dashboard"
//                       element={
//                         <PrivateRoute>
//                           <Dashboard windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="courses"
//                       element={
//                         <PrivateRoute>
//                           <MyCourses windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="it-courses"
//                       element={
//                         <PrivateRoute>
//                           <ITCourses windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="non-it-courses"
//                       element={
//                         <PrivateRoute>
//                           <NonITCourses windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="certificates"
//                       element={
//                         <PrivateRoute>
//                           <Certificates windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="profile"
//                       element={
//                         <PrivateRoute>
//                           <Profile windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="support"
//                       element={
//                         <PrivateRoute>
//                           <Support windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="settings"
//                       element={
//                         <PrivateRoute>
//                           <Settings windowWidth={windowWidth} toggleTheme={toggleTheme} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="video"
//                       element={
//                         <PrivateRoute>
//                           <VideoPlayer />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="assignments"
//                       element={
//                         <PrivateRoute>
//                           <Assignments windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="payments"
//                       element={
//                         <PrivateRoute>
//                           <Payments windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="InterestWishlist"
//                       element={
//                         <PrivateRoute>
//                           <InterestWishlist windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="course/:courseId"
//                       element={<CourseDetail windowWidth={windowWidth} />}
//                     />
//                     <Route path="*" element={<NotFound />} />
//                   </Routes>
                 
//                 </div>
//               </Content>
//             </Layout>
//           </Layout>
//         </ConfigProvider>
//         </useGlobalStore>
//       </AuthProvider>
//     </ThemeProvider>
//   )
// }

// export default StudentPortal
// "use client";

// import { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { Layout, ConfigProvider, theme as antdTheme, Button, Spin } from "antd";
// import { CloseOutlined } from "@ant-design/icons";
// import { AuthProvider, useAuth } from "../Contexts/AuthContext"; // ✅ Fixed import path
// import { ThemeProvider } from "./contexts/ThemeContext";

// // Components
// import SideNav from "./components/SideNav";
// import TopNav from "./components/TopNav";
// import PrivateRoute from "./components/PrivateRoute";

// // Pages
// import Dashboard from "./pages/Dashboard";
// import MyCourses from "./pages/MyCourses";
// import ITCourses from "./pages/ITCourses";
// import NonITCourses from "./pages/NonITCourses";
// import Profile from "./pages/Profile";
// import Support from "./pages/Support";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
// import Certificates from "./pages/Certificates";
// import Assignments from "./pages/Assignments";
// import Payments from "./pages/Payments";
// import InterestWishlist from "./pages/InterestandWishlist";
// import CourseDetail from "./components/CourseDetail";

// // Styles
// import "./styles/StudentPortal.css";
// // Global Store
// import { GlobalProvider } from "./contexts/GlobalStore";

// const { Content } = Layout;

// // ✅ Wrapper component that has access to AuthContext
// const StudentPortalContent = () => {
//   const { user } = useAuth(); // ✅ Now inside AuthProvider
//   const studentId = user?.email;
  
//   const [theme, setTheme] = useState("light");
//   const [collapsed, setCollapsed] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
//   const [userData, setUserData] = useState(null);
//   const isSmallScreen = windowWidth < 1024;
//   const location = useLocation();

//   // Handle window resize for responsive sidebar
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setWindowWidth(width);
//       if (width < 1024) {
//         setCollapsed(true);
//       } else {
//         setCollapsed(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Set default user data if not found in localStorage
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setUserData(JSON.parse(user));
//     } else {
//       const defaultUser = {
//         id: "user123",
//         name: "Student User",
//         email: "student@example.com",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         role: "student",
//       };
//       setUserData(defaultUser);
//       localStorage.setItem("user", JSON.stringify(defaultUser));
//     }
//   }, []);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   useEffect(() => {
//     setCollapsed(isSmallScreen);
//   }, [isSmallScreen]);

//   // ✅ Show loading while waiting for auth
//   if (!user) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Spin size="large" />
//       </div>
//     );
//   }

//   return (
//     <ThemeProvider value={{ theme, toggleTheme }}>
//       <ConfigProvider
//         theme={{
//           algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
//           token: {
//             colorPrimary: "#1890ff",
//             borderRadius: 4,
//           },
//         }}
//       >
//         <Layout
//           style={{
//             minHeight: "100vh",
//             background: theme === "dark" ? "#141414" : "#f5f5f5",
//             overflow: "hidden",
//           }}
//         >
//           {/* ======== SIDENAV + OVERLAY ======== */}
//           {isSmallScreen && !collapsed && (
//             <div
//               onClick={() => setCollapsed(true)}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 background: "rgba(0, 0, 0, 0.4)",
//                 zIndex: 998,
//                 transition: "opacity 0.3s ease",
//               }}
//             />
//           )}

//           <div
//             style={{
//               position: isSmallScreen ? "fixed" : "relative",
//               top: 0,
//               left: 0,
//               height: "100vh",
//               zIndex: 999,
//               transition: "transform 0.3s ease-in-out",
//               transform: isSmallScreen
//                 ? collapsed
//                   ? "translateX(-100%)"
//                   : "translateX(0)"
//                 : "none",
//             }}
//           >
//             <SideNav
//               collapsed={collapsed}
//               setCollapsed={setCollapsed}
//               isMobile={isSmallScreen}
//               windowWidth={windowWidth}
//               userData={userData}
//             />

//             {isSmallScreen && !collapsed && (
//               <Button
//                 icon={<CloseOutlined />}
//                 onClick={() => setCollapsed(true)}
//                 style={{
//                   position: "absolute",
//                   top: 10,
//                   right: 10,
//                   zIndex: 1100,
//                   background: "#fff",
//                   border: "1px solid #ccc",
//                 }}
//               />
//             )}
//           </div>

//           {/* ======== MAIN CONTENT ======== */}
//           <Layout
//             style={{
//               marginLeft: isSmallScreen ? 0 : collapsed ? 80 : 260,
//               transition: "all 0.2s ease",
//               background: "transparent",
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <TopNav
//               collapsed={collapsed}
//               setCollapsed={setCollapsed}
//               isMobile={isSmallScreen}
//               userData={userData}
//             />

//             <Content
//               style={{
//                 margin: "24px 16px",
//                 background: theme === "dark" ? "#141414" : "#fff",
//                 borderRadius: 4,
//                 transition: "all 0.3s ease",
//                 flex: 1,
//                 overflowY: "auto",
//                 width: "100%",
//               }}
//             >
//               {/* Full-width Responsive Wrapper */}
//               <div
//                 style={{
//                   width: "100%",
//                   maxWidth: "100%",
//                   margin: "0 auto",
//                   padding:
//                     windowWidth > 2560
//                       ? 64
//                       : windowWidth > 1920
//                       ? 48
//                       : windowWidth > 1600
//                       ? 36
//                       : 24,
//                 }}
//               >
//                 {/* ✅ GlobalProvider wrapped around routes */}
//                 <GlobalProvider studentId={studentId}>
//                   <Routes>
//                     <Route path="/" element={<Navigate to="dashboard" replace />} />
//                     <Route
//                       path="dashboard"
//                       element={
//                         <PrivateRoute>
//                           <Dashboard windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="courses"
//                       element={
//                         <PrivateRoute>
//                           <MyCourses windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="it-courses"
//                       element={
//                         <PrivateRoute>
//                           <ITCourses windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="non-it-courses"
//                       element={
//                         <PrivateRoute>
//                           <NonITCourses windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="certificates"
//                       element={
//                         <PrivateRoute>
//                           <Certificates windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="profile"
//                       element={
//                         <PrivateRoute>
//                           <Profile windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="support"
//                       element={
//                         <PrivateRoute>
//                           <Support windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="settings"
//                       element={
//                         <PrivateRoute>
//                           <Settings windowWidth={windowWidth} toggleTheme={toggleTheme} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="assignments"
//                       element={
//                         <PrivateRoute>
//                           <Assignments windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="payments"
//                       element={
//                         <PrivateRoute>
//                           <Payments windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="InterestWishlist"
//                       element={
//                         <PrivateRoute>
//                           <InterestWishlist windowWidth={windowWidth} />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="course/:courseId"
//                       element={<CourseDetail windowWidth={windowWidth} />}
//                     />
//                     <Route path="*" element={<NotFound />} />
//                   </Routes>
//                 </GlobalProvider>
//               </div>
//             </Content>
//           </Layout>
//         </Layout>
//       </ConfigProvider>
//     </ThemeProvider>
//   );
// };

// // ✅ Main component with proper provider nesting
// const StudentPortal = () => {
//   return (
//     <AuthProvider>
//       <StudentPortalContent />
//     </AuthProvider>
//   );
// };

// export default StudentPortal;

// "use client";

// import { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { Layout, ConfigProvider, theme as antdTheme, Button, Spin } from "antd";
// import { CloseOutlined } from "@ant-design/icons";
// // import { AuthProvider} from "./contexts/AuthContext";
// import { ThemeProvider } from "./contexts/ThemeContext";
// // Everywhere in your app
// import { AuthProvider,useAuth } from "../Contexts/AuthContext";

// // Components
// import SideNav from "./components/SideNav";
// import TopNav from "./components/TopNav";
// import PrivateRoute from "./components/PrivateRoute";

// // Pages
// import Dashboard from "./pages/Dashboard";
// import MyCourses from "./pages/MyCourses";
// import ITCourses from "./pages/ITCourses";
// import NonITCourses from "./pages/NonITCourses";
// import Profile from "./pages/Profile";
// import Support from "./pages/Support";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
// import Certificates from "./pages/Certificates";
// import Assignments from "./pages/Assignments";
// import Payments from "./pages/Payments";
// import InterestWishlist from "./pages/InterestandWishlist";
// import CourseDetail from "./components/CourseDetail";

// // Styles
// import "./styles/StudentPortal.css";
// // Global Store
// import { GlobalProvider } from "./contexts/GlobalStore";

// const { Content } = Layout;

// // ✅ Component that wraps TopNav + Content with GlobalProvider
// const AppWithGlobalStore = ({ 
//   windowWidth, 
//   collapsed, 
//   setCollapsed, 
//   isSmallScreen, 
//   userData, 
//   studentId,
//   theme 
// }) => {
//   return (
//     <GlobalProvider studentId={studentId}>
//       <TopNav
//         collapsed={collapsed}
//         setCollapsed={setCollapsed}
//         isMobile={isSmallScreen}
//         userData={userData}
//       />
//       <Content
//         style={{
//           margin: "24px 16px",
//           background: theme === "dark" ? "#141414" : "#fff",
//           borderRadius: 4,
//           transition: "all 0.3s ease",
//           flex: 1,
//           overflowY: "auto",
//           width: "100%",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "100%",
//             margin: "0 auto",
//             padding:
//               windowWidth > 2560
//                 ? 64
//                 : windowWidth > 1920
//                 ? 48
//                 : windowWidth > 1600
//                 ? 36
//                 : 24,
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<Navigate to="dashboard" replace />} />
//             <Route
//               path="dashboard"
//               element={
//                 <PrivateRoute>
//                   <Dashboard windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="courses"
//               element={
//                 <PrivateRoute>
//                   <MyCourses windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="it-courses"
//               element={
//                 <PrivateRoute>
//                   <ITCourses windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="non-it-courses"
//               element={
//                 <PrivateRoute>
//                   <NonITCourses windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="certificates"
//               element={
//                 <PrivateRoute>
//                   <Certificates windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="profile"
//               element={
//                 <PrivateRoute>
//                   <Profile windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="support"
//               element={
//                 <PrivateRoute>
//                   <Support windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="settings"
//               element={
//                 <PrivateRoute>
//                   <Settings windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="assignments"
//               element={
//                 <PrivateRoute>
//                   <Assignments windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="payments"
//               element={
//                 <PrivateRoute>
//                   <Payments windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="InterestWishlist"
//               element={
//                 <PrivateRoute>
//                   <InterestWishlist windowWidth={windowWidth} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="course/:courseId"
//               element={<CourseDetail windowWidth={windowWidth} />}
//             />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </Content>
//     </GlobalProvider>
//   );
// };

// // ✅ Wrapper component that has access to AuthContext
// const StudentPortalContent = () => {
//   const { user } = useAuth();
//   const studentId = user?.email;
  
//   const [theme, setTheme] = useState("light");
//   const [collapsed, setCollapsed] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
//   const [userData, setUserData] = useState(null);
//   const isSmallScreen = windowWidth < 1024;
//   const location = useLocation();

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setWindowWidth(width);
//       setCollapsed(width < 1024);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Set user data
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setUserData(JSON.parse(user));
//     } else {
//       const defaultUser = {
//         id: "user123",
//         name: "Student User",
//         email: "student@example.com",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         role: "student",
//       };
//       setUserData(defaultUser);
//       localStorage.setItem("user", JSON.stringify(defaultUser));
//     }
//   }, []);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   if (!user) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Spin size="large" />
//       </div>
//     );
//   }

//   return (
//     <ThemeProvider value={{ theme, toggleTheme }}>
//       <ConfigProvider
//         theme={{
//           algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
//           token: {
//             colorPrimary: "#1890ff",
//             borderRadius: 4,
//           },
//         }}
//       >
//         <Layout
//           style={{
//             minHeight: "100vh",
//             background: theme === "dark" ? "#141414" : "#f5f5f5",
//             overflow: "hidden",
//           }}
//         >
//           {/* SIDENAV + OVERLAY */}
//           {isSmallScreen && !collapsed && (
//             <div
//               onClick={() => setCollapsed(true)}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 background: "rgba(0, 0, 0, 0.4)",
//                 zIndex: 998,
//                 transition: "opacity 0.3s ease",
//               }}
//             />
//           )}

//           <div
//             style={{
//               position: isSmallScreen ? "fixed" : "relative",
//               top: 0,
//               left: 0,
//               height: "100vh",
//               zIndex: 999,
//               transition: "transform 0.3s ease-in-out",
//               transform: isSmallScreen
//                 ? collapsed
//                   ? "translateX(-100%)"
//                   : "translateX(0)"
//                 : "none",
//             }}
//           >
//             <SideNav
//               collapsed={collapsed}
//               setCollapsed={setCollapsed}
//               isMobile={isSmallScreen}
//               windowWidth={windowWidth}
//               userData={userData}
//             />

//             {isSmallScreen && !collapsed && (
//               <Button
//                 icon={<CloseOutlined />}
//                 onClick={() => setCollapsed(true)}
//                 style={{
//                   position: "absolute",
//                   top: 10,
//                   right: 10,
//                   zIndex: 1100,
//                   background: "#fff",
//                   border: "1px solid #ccc",
//                 }}
//               />
//             )}
//           </div>

//           {/* MAIN CONTENT - NOW WRAPPED WITH GLOBALPROVIDER */}
//           <Layout
//             style={{
//               marginLeft: isSmallScreen ? 0 : collapsed ? 80 : 260,
//               transition: "all 0.2s ease",
//               background: "transparent",
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <AppWithGlobalStore
//               windowWidth={windowWidth}
//               collapsed={collapsed}
//               setCollapsed={setCollapsed}
//               isSmallScreen={isSmallScreen}
//               userData={userData}
//               studentId={studentId}
//               theme={theme}
//             />
//           </Layout>
//         </Layout>
//       </ConfigProvider>
//     </ThemeProvider>
//   );
// };

// const StudentPortal = () => {
//   return (
//     <AuthProvider>
//       <StudentPortalContent />
//     </AuthProvider>
//   );
// };

// export default StudentPortal;


"use client";

import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Layout, ConfigProvider, theme as antdTheme, Button, Spin } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { AuthProvider, useAuth } from "../Contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalProvider } from "./contexts/GlobalStore";

// Components
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import ITCourses from "./pages/ITCourses";
import NonITCourses from "./pages/NonITCourses";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Certificates from "./pages/Certificates";
import Assignments from "./pages/Assignments";
import Payments from "./pages/Payments";
import InterestWishlist from "./pages/InterestandWishlist";
import CourseDetail from "./components/CourseDetail";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import SyllabusPage from "./pages/SyllabusPage.jsx";
// Styles
import "./styles/StudentPortal.css";

const { Content } = Layout;

// ✅ Component that wraps TopNav + Content with GlobalProvider
const AppWithGlobalStore = ({ 
  windowWidth, 
  collapsed, 
  setCollapsed, 
  isSmallScreen, 
  userData, 
  studentId,
  theme 
}) => {
  return (
    <GlobalProvider studentId={studentId}>
      <TopNav
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isSmallScreen}
        userData={userData}
      />
      <Content
        style={{
          margin: "24px 16px",
          background: theme === "dark" ? "#141414" : "#fff",
          borderRadius: 4,
          transition: "all 0.3s ease",
          flex: 1,
          overflowY: "auto",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            margin: "0 auto",
            padding:
              windowWidth > 2560
                ? 64
                : windowWidth > 1920
                ? 48
                : windowWidth > 1600
                ? 36
                : 24,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="courses"
              element={
                <PrivateRoute>
                  <MyCourses windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="it-courses"
              element={
                <PrivateRoute>
                  <ITCourses windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="non-it-courses"
              element={
                <PrivateRoute>
                  <NonITCourses windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="certificates"
              element={
                <PrivateRoute>
                  <Certificates windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="support"
              element={
                <PrivateRoute>
                  <Support windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="settings"
              element={
                <PrivateRoute>
                  <Settings windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="assignments"
              element={
                <PrivateRoute>
                  <Assignments windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="payments"
              element={
                <PrivateRoute>
                  <Payments windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="InterestWishlist"
              element={
                <PrivateRoute>
                  <InterestWishlist windowWidth={windowWidth} />
                </PrivateRoute>
              }
            />
            <Route
              path="checkout/:courseId"
              element={<CheckoutPage windowWidth={windowWidth} />}
            />  
            <Route
              path="course/:courseId"
              element={<CourseDetail windowWidth={windowWidth} />}
            />
            <Route
              path="syllabus/:courseId"
              element={<SyllabusPage windowWidth={windowWidth} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Content>
    </GlobalProvider>
  );
};

// ✅ Wrapper that has access to AuthContext
const StudentPortalContent = () => {
  const { user } = useAuth(); // ✅ Comes from AuthContext (sessionStorage)

  // ✅ CORRECT: Use mailId, NOT email
  const studentId = user?.mailId;

  const [theme, setTheme] = useState("light");
  const [collapsed, setCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const isSmallScreen = windowWidth < 1024;
  const location = useLocation();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setCollapsed(width < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Show loader while waiting for user
  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: "#1890ff",
            borderRadius: 4,
          },
        }}
      >
        <Layout
          style={{
            minHeight: "100vh",
            background: theme === "dark" ? "#141414" : "#f5f5f5",
            overflow: "hidden",
          }}
        >
          {/* SIDENAV + OVERLAY */}
          {isSmallScreen && !collapsed && (
            <div
              onClick={() => setCollapsed(true)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.4)",
                zIndex: 998,
                transition: "opacity 0.3s ease",
              }}
            />
          )}

          <div
            style={{
              position: isSmallScreen ? "fixed" : "relative",
              top: 0,
              left: 0,
              height: "100vh",
              zIndex: 999,
              transition: "transform 0.3s ease-in-out",
              transform: isSmallScreen
                ? collapsed
                  ? "translateX(-100%)"
                  : "translateX(0)"
                : "none",
            }}
          >
            <SideNav
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              isMobile={isSmallScreen}
              windowWidth={windowWidth}
              userData={user} // ✅ Use user directly from context
            />

            {isSmallScreen && !collapsed && (
              <Button
                icon={<CloseOutlined />}
                onClick={() => setCollapsed(true)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 1100,
                  background: "#fff",
                  border: "1px solid #ccc",
                }}
              />
            )}
          </div>

          {/* MAIN CONTENT */}
          <Layout
            style={{
              marginLeft: isSmallScreen ? 0 : collapsed ? 80 : 260,
              transition: "all 0.2s ease",
              background: "transparent",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AppWithGlobalStore
              windowWidth={windowWidth}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              isSmallScreen={isSmallScreen}
              userData={user}
              studentId={studentId} // ✅ Now correctly mailId
              theme={theme}
            />
          </Layout>
        </Layout>
      </ConfigProvider>
    </ThemeProvider>
  );
};

const StudentPortal = () => {
  return (
    <AuthProvider>
      <StudentPortalContent />
    </AuthProvider>
  );
};

export default StudentPortal;