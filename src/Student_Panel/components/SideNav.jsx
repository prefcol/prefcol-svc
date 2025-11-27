// "use client"

// import { useState, useEffect } from "react"
// import { Layout, Menu, Divider, Avatar, Typography, Badge } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   RocketOutlined,
//   SettingOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons"
// import { Link, useLocation } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png" // You'll need to add this asset

// const { Sider } = Layout
// const { Text } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth }) => {
//   const location = useLocation()
//   const { user, logout } = useAuth()
//   const { theme } = useTheme()
//   const [selectedKeys, setSelectedKeys] = useState([])

//   useEffect(() => {
//     const pathName = location.pathname
//     const key = pathName.split("/")[1] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     {
//       key: "dashboard",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       key: "courses",
//       icon: <BookOutlined />,
//       label: "My Courses",
//       path: "/courses",
//     },
//     {
//       key: "it-courses",
//       icon: <LaptopOutlined />,
//       label: "IT Courses",
//       path: "/it-courses",
//     },
//     {
//       key: "non-it-courses",
//       icon: <ReadOutlined />,
//       label: "Non-IT Courses",
//       path: "/non-it-courses",
//     },
//     {
//       key: "quiz",
//       icon: <FileTextOutlined />,
//       label: "Quizzes",
//       path: "/quiz",
//     },
//     {
//       key: "certificate",
//       icon: <TrophyOutlined />,
//       label: "Certificates",
//       path: "/certificate",
//     },
//     {
//       key: "payment",
//       icon: <CreditCardOutlined />,
//       label: "Payment",
//       path: "/payment",
//     },
//     {
//       key: "invoices",
//       icon: <FileOutlined />,
//       label: "Invoices",
//       path: "/invoices",
//     },
//     {
//       key: "resources",
//       icon: <BulbOutlined />,
//       label: "Resources",
//       path: "/resources",
//     },
//     {
//       key: "community",
//       icon: <TeamOutlined />,
//       label: "Community",
//       path: "/community",
//     },
//     {
//       key: "help",
//       icon: <QuestionCircleOutlined />,
//       label: "Help Center",
//       path: "/help",
//     },
//   ]

//   const userMenuItems = [
//     {
//       key: "profile",
//       icon: <UserOutlined />,
//       label: "My Profile",
//       path: "/profile",
//     },
//     {
//       key: "settings",
//       icon: <SettingOutlined />,
//       label: "Settings",
//       path: "/settings",
//     },
//     {
//       key: "logout",
//       icon: <LogoutOutlined />,
//       label: "Logout",
//       onClick: logout,
//     },
//   ]

//   return (
//     <Sider
//       theme={theme === "dark" ? "dark" : "light"}
//       trigger={null}
//       collapsible
//       collapsed={collapsed}
//       breakpoint="lg"
//       width={collapsed ? 80 : 260}
//       collapsedWidth={isMobile ? 0 : 80}
//       className="site-sidebar"
//       style={{
//         overflow: "auto",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         bottom: 0,
//         zIndex: 1000,
//         boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div
//         className="logo-container"
//         style={{
//           padding: collapsed ? "16px 0" : "16px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "flex-start",
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//         }}
//       >
//         {collapsed ? (
//           <img src={COL || "/placeholder.svg"} alt="COL Logo" style={{ width: 32, height: 32 }} />
//         ) : (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <img src={COL || "/placeholder.svg"} alt="COL Logo" style={{ width: 32, height: 32, marginRight: 12 }} />
//             <Typography.Title level={4} style={{ margin: 0, color: theme === "dark" ? "#fff" : undefined }}>
//               COL Platform
//             </Typography.Title>
//           </div>
//         )}
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={user?.avatar} icon={!user?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Typography.Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {user?.name || "Student"}
//             </Typography.Text>
//             <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//               {user?.email || "student@example.com"}
//             </Typography.Text>
//           </div>
//         </div>
//       )}

//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={menuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={userMenuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             borderTop: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           <div
//             style={{
//               background: theme === "dark" ? "#1f1f1f" : "#f9f9f9",
//               padding: "12px",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <RocketOutlined style={{ fontSize: 20, color: "#1890ff", marginRight: 12 }} />
//             <div>
//               <Text strong style={{ display: "block", color: theme === "dark" ? "#fff" : undefined }}>
//                 Upgrade to Pro
//               </Text>
//               <Text type="secondary" style={{ fontSize: 12 }}>
//                 Get more features
//               </Text>
//             </div>
//           </div>
//         </div>
//       )}
//     </Sider>
//   )
// }

// export default SideNav

// "use client"

// import { useState, useEffect } from "react"
// import { Layout, Menu, Divider, Avatar, Typography, Badge } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   RocketOutlined,
//   SettingOutlined,
// } from "@ant-design/icons"
// import { Link, useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"

// const { Sider } = Layout
// const { Text } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const [selectedKeys, setSelectedKeys] = useState([])

//   useEffect(() => {
//     const pathName = location.pathname
//     // Extract the key from the path (remove /Student-portal/ prefix)
//     const path = pathName.replace("/Student-portal/", "")
//     const key = path.split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     {
//       key: "dashboard",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//       path: "/Student-portal/dashboard",
//     },
//     {
//       key: "courses",
//       icon: <BookOutlined />,
//       label: "My Courses",
//       path: "/Student-portal/courses",
//     },
//     {
//       key: "it-courses",
//       icon: <LaptopOutlined />,
//       label: "IT Courses",
//       path: "/Student-portal/it-courses",
//     },
//     {
//       key: "non-it-courses",
//       icon: <ReadOutlined />,
//       label: "Non-IT Courses",
//       path: "/Student-portal/non-it-courses",
//     },
//     {
//       key: "quiz",
//       icon: <FileTextOutlined />,
//       label: "Quizzes",
//       path: "/Student-portal/quiz",
//     },
//     {
//       key: "certificate",
//       icon: <TrophyOutlined />,
//       label: "Certificates",
//       path: "/Student-portal/certificate",
//     },
//     {
//       key: "payment",
//       icon: <CreditCardOutlined />,
//       label: "Payment",
//       path: "/Student-portal/payment",
//     },
//     {
//       key: "invoices",
//       icon: <FileOutlined />,
//       label: "Invoices",
//       path: "/Student-portal/invoices",
//     },
//     {
//       key: "resources",
//       icon: <BulbOutlined />,
//       label: "Resources",
//       path: "/Student-portal/resources",
//     },
//     {
//       key: "community",
//       icon: <TeamOutlined />,
//       label: "Community",
//       path: "/Student-portal/community",
//     },
//     {
//       key: "help",
//       icon: <QuestionCircleOutlined />,
//       label: "Help Center",
//       path: "/Student-portal/help",
//     },
//   ]

//   const userMenuItems = [
//     {
//       key: "profile",
//       icon: <UserOutlined />,
//       label: "My Profile",
//       path: "/Student-portal/profile",
//     },
//     {
//       key: "settings",
//       icon: <SettingOutlined />,
//       label: "Settings",
//       path: "/Student-portal/settings",
//     },
//   ]

//   return (
//     <Sider
//       theme={theme === "dark" ? "dark" : "light"}
//       trigger={null}
//       collapsible
//       collapsed={collapsed}
//       breakpoint="lg"
//       width={260}
//       collapsedWidth={isMobile ? 0 : 80}
//       className="site-sidebar"
//       style={{
//         overflow: "auto",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         bottom: 0,
//         zIndex: 1000,
//         boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div
//         className="logo-container"
//         style={{
//           padding: collapsed ? "16px 0" : "16px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "flex-start",
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//         }}
//       >
//         {collapsed ? (
//           <img src="/placeholder.svg?height=32&width=32" alt="COL Logo" style={{ width: 32, height: 32 }} />
//         ) : (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <img
//               src="/placeholder.svg?height=32&width=32"
//               alt="COL Logo"
//               style={{ width: 32, height: 32, marginRight: 12 }}
//             />
//             <Typography.Title level={4} style={{ margin: 0, color: theme === "dark" ? "#fff" : undefined }}>
//               COL Platform
//             </Typography.Title>
//           </div>
//         )}
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={userData?.avatar} icon={!userData?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Typography.Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Typography.Text>
//             <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Typography.Text>
//           </div>
//         </div>
//       )}

//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={menuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={userMenuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             borderTop: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           <div
//             style={{
//               background: theme === "dark" ? "#1f1f1f" : "#f9f9f9",
//               padding: "12px",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <RocketOutlined style={{ fontSize: 20, color: "#1890ff", marginRight: 12 }} />
//             <div>
//               <Text strong style={{ display: "block", color: theme === "dark" ? "#fff" : undefined }}>
//                 Upgrade to Pro
//               </Text>
//               <Text type="secondary" style={{ fontSize: 12 }}>
//                 Get more features
//               </Text>
//             </div>
//           </div>
//         </div>
//       )}
//     </Sider>
//   )
// }

// export default SideNav

// "use client"

// import { useState, useEffect } from "react"
// import { Layout, Menu, Divider, Avatar, Typography, Badge } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   RocketOutlined,
//   SettingOutlined,
// } from "@ant-design/icons"
// import { Link, useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext";

// const { Sider } = Layout
// const { Text } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const [selectedKeys, setSelectedKeys] = useState([])
// const { user, setShowForm, setRedirect, showEnrollForm, setShowEnrollForm  } = useAuth();

//   useEffect(() => {
//     const pathName = location.pathname
//     // Extract the key from the path (remove /Student-portal/ prefix)
//     const path = pathName.replace("/Student-portal/", "")
//     const key = path.split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     {
//       key: "dashboard",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//       path: "/Student-portal/dashboard",
//     },
//     {
//       key: "courses",
//       icon: <BookOutlined />,
//       label: "My Courses",
//       path: "/Student-portal/courses",
//     },
//     {
//       key: "it-courses",
//       icon: <LaptopOutlined />,
//       label: "IT Courses",
//       path: "/Student-portal/it-courses",
//     },
//     {
//       key: "non-it-courses",
//       icon: <ReadOutlined />,
//       label: "Non-IT Courses",
//       path: "/Student-portal/non-it-courses",
//     },
//     {
//       key: "quiz",
//       icon: <FileTextOutlined />,
//       label: "Quizzes",
//       path: "/Student-portal/quiz",
//     },
//     {
//       key: "certificate",
//       icon: <TrophyOutlined />,
//       label: "Certificates",
//       path: "/Student-portal/certificate",
//     },
//     {
//       key: "payment",
//       icon: <CreditCardOutlined />,
//       label: "Payment",
//       path: "/Student-portal/payment",
//     },
//     {
//       key: "invoices",
//       icon: <FileOutlined />,
//       label: "Invoices",
//       path: "/Student-portal/invoices",
//     },
//     {
//       key: "resources",
//       icon: <BulbOutlined />,
//       label: "Resources",
//       path: "/resources",
//     },
//     {
//       key: "community",
//       icon: <TeamOutlined />,
//       label: "Community",
//       path: "/Student-portal/community",
//     },
//     {
//       key: "help",
//       icon: <QuestionCircleOutlined />,
//       label: "Help Center",
//       path: "/Student-portal/help",
//     },
//   ]

//   const userMenuItems = [
//     {
//       key: "profile",
//       icon: <UserOutlined />,
//       label: "My Profile",
//       path: "/Student-portal/profile",
//     },
//     {
//       key: "settings",
//       icon: <SettingOutlined />,
//       label: "Settings",
//       path: "/Student-portal/settings",
//     },
//   ]

//   return (
//     <Sider
//       theme={theme === "dark" ? "dark" : "light"}
//       trigger={null}
//       collapsible
//       collapsed={collapsed}
//       breakpoint="lg"
//       width={260}
//       collapsedWidth={isMobile ? 0 : 80}
//       className="site-sidebar"
//       style={{
//         overflow: "auto",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         bottom: 0,
//         zIndex: 1000,
//         boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div
//         className="logo-container"
//         style={{
//           padding: collapsed ? "16px 0" : "16px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "flex-start",
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//         }}
//       >
//         {collapsed ? (
//           <img src="/placeholder.svg?height=32&width=32" alt="COL Logo" style={{ width: 32, height: 32 }} />
//         ) : (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <img
//               src={COL}
//               alt="COL Logo"
//               style={{ width: 32, height: 32, marginRight: 12 }}
//             />
//             <Typography.Title level={4} style={{ margin: 0, color: theme === "dark" ? "#fff" : undefined }}>
//             Student Portal
//             </Typography.Title>
//           </div>
//         )}
//       </div>

//       {!collapsed && (
//         <div1
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={userData?.avatar} icon={!userData?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Typography.Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {
//                 userData?.name || "Student"
//               }
//             </Typography.Text>
//             <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Typography.Text>
//           </div>
//         </div1>
//       )}

//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={menuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={userMenuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             borderTop: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           {/* <div
//             style={{
//               background: theme === "dark" ? "#1f1f1f" : "#f9f9f9",
//               padding: "12px",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <RocketOutlined style={{ fontSize: 20, color: "#1890ff", marginRight: 12 }} />
//             <div>
//               <Text strong style={{ display: "block", color: theme === "dark" ? "#fff" : undefined }}>
//                 Upgrade to Pro
//               </Text>
//               <Text type="secondary" style={{ fontSize: 12 }}>
//                 Get more features
//               </Text>
//             </div>
//           </div> */}
//         </div>
//       )}
//     </Sider>
//   )
// }

// export default SideNav

// "use client"

// import { useState, useEffect } from "react"
// import { Layout, Menu, Divider, Avatar, Typography, Badge, Button } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
//   CloseOutlined,
// } from "@ant-design/icons"
// import { Link, useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const [selectedKeys, setSelectedKeys] = useState([])
//   const { user, setShowForm, setRedirect, showEnrollForm, setShowEnrollForm } = useAuth()

//   useEffect(() => {
//     const pathName = location.pathname
//     const path = pathName.replace("/Student-portal/", "")
//     const key = path.split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//     { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//     { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//     { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//     { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//     { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//     { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//     { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   ]

//   const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   ]

//   return (
//     <Sider
//       theme={theme === "dark" ? "dark" : "light"}
//       trigger={null}
//       collapsible
//       collapsed={collapsed}
//       breakpoint="lg"
//       width={260}
//       collapsedWidth={isMobile ? 0 : 80}
//       className="site-sidebar"
//       style={{
//         overflow: "auto",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         bottom: 0,
//         zIndex: 1000,
//         boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//         background: theme === "dark" ? "#001529" : "#fff",
//       }}
//     >
//       {/* Close button for mobile view */}
//       {isMobile && !collapsed && (
//         <Button
//           icon={<CloseOutlined />}
//           type="text"
//           onClick={() => setCollapsed(true)}
//           style={{
//             position: "absolute",
//             top: 10,
//             right: 10,
//             zIndex: 1100,
//             color: theme === "dark" ? "#fff" : "#000",
//           }}
//         />
//       )}

//       <div
//         className="logo-container"
//         style={{
//           padding: collapsed ? "16px 0" : "16px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "flex-start",
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//         }}
//       >
//         {collapsed ? (
//           <img src={COL} alt="COL Logo" style={{ width: 32, height: 32 }} />
//         ) : (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <img src={COL} alt="COL Logo" style={{ width: 32, height: 32, marginRight: 12 }} />
//             <Typography.Title level={4} style={{ margin: 0, color: theme === "dark" ? "#fff" : undefined }}>
//               Student Portal
//             </Typography.Title>
//           </div>
//         )}
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={userData?.avatar} icon={!userData?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Typography.Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Typography.Text>
//             <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Typography.Text>
//           </div>
//         </div>
//       )}

//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={menuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={userMenuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: item.onClick ? (
//               <span onClick={item.onClick}>{item.label}</span>
//             ) : (
//               <Link to={item.path}>{item.label}</Link>
//             ),
//           }))}
//         />
//       </div>

//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             borderTop: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           {/* Reserved footer slot */}
//         </div>
//       )}
//     </Sider>
//   )
// }

// export default SideNav

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Divider,
//   Avatar,
//   Typography,
//   Badge,
//   Button,
//   Drawer,
// } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
//   CloseOutlined,
//   MenuOutlined,
// } from "@ant-design/icons"
// import { Link, useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const [selectedKeys, setSelectedKeys] = useState([])
//   const { user } = useAuth()

//   useEffect(() => {
//     const pathName = location.pathname
//     const path = pathName.replace("/Student-portal/", "")
//     const key = path.split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//     { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//     { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//     { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//     { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//     { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//     { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//     { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   ]

//   const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   ]

//   const SideNavContent = () => (
//     <>
//       {/* Logo and Close Button */}
//       <div
//         className="logo-container"
//         style={{
//           padding: collapsed ? "16px 0" : "16px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "space-between",
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <img src={COL} alt="COL Logo" style={{width: 32, height: 32, marginRight: collapsed ? 0 : 12 }} />
//           {!collapsed && (
//             <Typography.Title level={4} style={{ margin: 0, color: theme === "dark" ? "#fff" : undefined }}>
//               Student Portal
//             </Typography.Title>
//           )}
//         </div>
//         {isMobile && !collapsed && (
//           <Button
//             icon={<CloseOutlined />}
//             type="text"
//             onClick={() => setCollapsed(true)}
//             style={{ color: theme === "dark" ? "#fff" : "#000" }}
//           />
//         )}
//       </div>

//       {/* Profile Section */}
//       {!collapsed && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={userData?.avatar} icon={!userData?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Typography.Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Typography.Text>
//             <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Typography.Text>
//           </div>
//         </div>
//       )}

//       {/* Menus */}
//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={menuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: <Link to={item.path}>{item.label}</Link>,
//           }))}
//           onClick={() => isMobile && setCollapsed(true)}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={userMenuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: <Link to={item.path}>{item.label}</Link>,
//           }))}
//           onClick={() => isMobile && setCollapsed(true)}
//         />
//       </div>
//     </>
//   )

//   return (
//     <>
//       {isMobile ? (
//         // Mobile Drawer
//         <Drawer
//           placement="left"
//           closable={false}
//           onClose={() => setCollapsed(true)}
//           open={!collapsed}
//           bodyStyle={{ padding: 0 }}
//           width={260}
//         >
//           <SideNavContent />
//         </Drawer>
//       ) : (
//         // Tablet & Desktop Sidebar
//         <Sider
//           theme={theme === "dark" ? "dark" : "light"}
//           trigger={null}
//           collapsible
//           collapsed={collapsed}
//           collapsedWidth={80}
//           width={260}
//           className="site-sidebar"
//           style={{
//             overflow: "auto",
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//             boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           <SideNavContent />
//         </Sider>
//       )}
//     </>
//   )
// }

// export default SideNav


// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Divider,
//   Avatar,
//   Typography,
//   Badge,
//   Button,
//   Drawer,
// } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
//   CloseOutlined,
//   MenuOutlined,
// } from "@ant-design/icons"
// import { Link, useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const [selectedKeys, setSelectedKeys] = useState([])
//   const { user } = useAuth()

//   useEffect(() => {
//     const pathName = location.pathname
//     const path = pathName.replace("/Student-portal/", "")
//     const key = path.split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//     { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//     { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//     { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//     { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//     { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//     { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//     { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   ]

//   const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   ]


//   const SideNavContent = () => (
//     <>
//       {/* Logo and Close Button */}
//       <div
//         className="logo-container"
//         style={{
//           padding: collapsed ? "16px 0" : "16px 24px",
//           display: "flex",
//           alignItems: "center",
//           width: collapsed ? "80px" : "260px",
//           justifyContent: collapsed ? "center" : "space-between",
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <img
//             src={COL}
//             alt="COL Logo"
//             style={{
//               width: 32,
//               height: 32,
//               marginRight: collapsed ? 0 : 12,
//               transition: "margin 0.3s",
//             }}
//           />
//           {!collapsed && (
            
//             <Typography.Title
//               level={4}
//               style={{
//                 margin: 0,
//                 color: theme === "dark" ? "#fff" : undefined,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Student Portal
//             </Typography.Title>
//           )}
//         </div>
//         {isMobile && !collapsed && (
//           <Button
//             icon={<CloseOutlined />}
//             type="text"
//             onClick={() => setCollapsed(true)}
//             style={{ color: theme === "dark" ? "#fff" : "#000" }}
//           />
//         )}
//       </div>
  
//       {/* Profile Section */}
//       {!collapsed && !isMobile && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={userData?.avatar} icon={!userData?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Typography.Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Typography.Text>
//             <Typography.Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Typography.Text>
//           </div>
//         </div>
//       )}
  
//       {/* Menus */}
//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           items={menuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: collapsed ? <span style={{ display: collapsed ? "none" : "inline" }}>{item.icon}</span>:<span style={{ display: collapsed ? "none" : "inline" }}>{item.label}</span>,
//             title: item.label, // shows tooltip on collapsed
//           }))}
//           onClick={() => isMobile && setCollapsed(true)}
//         />
  
//         <Divider style={{ margin: "8px 0" }} />
  
//         {/* <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={collapsed}
//           items={userMenuItems.map((item) => ({
//             key: item.key,
//             icon: item.icon,
//             label: <span style={{ display: collapsed ? "none" : "inline" }}>{item.label}</span>,
//             title: item.label,
//           }))}
//           onClick={() => isMobile && setCollapsed(true)}
//         /> */}
//         <Menu
//   theme={theme === "dark" ? "dark" : "light"}
//   mode="inline"
//   selectedKeys={selectedKeys}
//   items={userMenuItems.map((item) => ({
//     key: item.key,
//     icon: item.icon,
//     label: collapsed? (
//       // Only show the icon when collapsed
//       <span>{item.icon}</span> // You could also use other logic here like just showing the icon or a shortened version of the label.
//     ) : (
//       // Show the full label when not collapsed
//       <span>{item.label}</span>
//     ),
//     title: item.label, // Tooltip (optional)
//   }))}
//   onClick={() => isMobile && setCollapsed(true)} // Close on click in mobile view
// />

//       </div>
//     </>
//   )
  

//   return (
//     <>
//       {isMobile ? (
//         // Mobile Drawer
//         <Drawer
//           placement="left"
//           closable={false}
//           onClose={() => setCollapsed(true)}
//           open={!collapsed}
//           bodyStyle={{ padding: 0 }}
//           width={260}
//         >
//           <SideNavContent />
//         </Drawer>
//       ) : (
//         // Tablet & Desktop Sidebar
//         <Sider
//           theme={theme === "dark" ? "dark" : "light"}
//           trigger={null}
//           collapsible
//           collapsedWidth={80}
//           width={collapsed ? 80 : 260}
//           className="site-sidebar"
//           style={{
//             overflow: "auto",
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//             boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           <SideNavContent /> 
//         </Sider>
//       )}
//     </>
//   )
// }

// export default SideNav


// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Divider,
//   Avatar,
//   Typography,
//   Badge,
//   Button,
//   Drawer,
// } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
//   CloseOutlined,
// } from "@ant-design/icons"
// import { useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text, Title } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const { user } = useAuth()
//   const [selectedKeys, setSelectedKeys] = useState([])

//   useEffect(() => {
//     const pathName = location.pathname
//     const path = pathName.replace("/Student-portal/", "")
//     const key = path.split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//     { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//     { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//     { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//     { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//     { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//     { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//     { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   ]

//   const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   ]

//   const SideNavContent = () => (
//     <>
//       {/* Logo and Close Button */}
//       <div
//   className="logo-container"
//   style={{
//     padding: "16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: collapsed ? "center" : "space-between",
//     height: 64,
//     borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//   }}
// >
//   <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//     <img
//       src={COL}
//       alt="COL Logo"
//       style={{
//         width: 32,
//         height: 32,
//         marginRight: collapsed ? 0 : 12,
//         transition: "all 0.3s ease",
//       }}
//     />
//     {!collapsed && (
//       <Title
//         level={4}
//         style={{
//           margin: 0,
//           color: theme === "dark" ? "#fff" : undefined,
//           whiteSpace: "nowrap",
//           fontSize: "1.1rem",
//         }}
//       >
//         Student Portal
//       </Title>
//     )}
//   </div>

//   {/* Show close only on mobile */}
//   {isMobile && !collapsed && (
//     <Button
//       icon={<CloseOutlined />}
//       type="text"
//       onClick={() => setCollapsed(true)}
//       style={{ color: theme === "dark" ? "#fff" : "#000" }}
//     />
//   )}
// </div>


//       {/* Profile Section */}
//       {!collapsed && !isMobile && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar src={userData?.avatar} icon={!userData?.avatar && <UserOutlined />} size={40} />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Text>
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Text>
//           </div>
//         </div>
//       )}

//       {/* Menus */}
//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={menuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={userMenuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />
//       </div>
//     </>
//   )

//   return (
//     <>
//       {isMobile ? (
//         <Drawer
//           placement="left"
//           closable={false}
//           onClose={() => setCollapsed(true)}
//           open={!collapsed}
//           bodyStyle={{ padding: 0 }}
//           width={260}
//         >
//           <SideNavContent />
//         </Drawer>
//       ) : (
//         <Sider
//           theme={theme === "dark" ? "dark" : "light"}
//           trigger={null}
//           collapsible
//           collapsedWidth={80}
//           width={260}
//           collapsed={collapsed}
//           className="site-sidebar"
//           style={{
//             overflow: "auto",
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//             boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//             background: theme === "dark" ? "#001529" : "#fff",
//           }}
//         >
//           <SideNavContent />
//         </Sider>
//       )}
//     </>
//   )
// }

// export default SideNav
// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Divider,
//   Avatar,
//   Typography,
//   Badge,
//   Button,
//   Drawer,
// } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
//   CloseOutlined,
// } from "@ant-design/icons"
// import { useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text, Title } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const { user } = useAuth()
//   const [selectedKeys, setSelectedKeys] = useState([])

//   useEffect(() => {
//     const pathName = location.pathname
//     const key = pathName.replace("/Student-portal/", "").split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//     { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//     { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//     { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//     { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//     { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//     { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//     { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   ]

//   const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   ]

//   const SideNavContent = () => (
//     <>
//       {/* Logo and Close Button */}
//       <div
//         className="logo-container"
//         style={{
//           padding: "16px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "space-between",
//           height: 64,
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//           transition: "all 0.3s ease-in-out",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <img
//             src={COL}
//             alt="COL Logo"
//             style={{
//               width: 32,
//               height: 32,
//               marginRight: collapsed ? 0 : 12,
//               transition: "all 0.3s ease-in-out",
//             }}
//           />
//           {!collapsed && !isMobile &&(
//             <Title
//               level={4}
//               style={{
//                 margin: 0,
//                 color: theme === "dark" ? "#fff" : undefined,
//                 whiteSpace: "nowrap",
//                 fontSize: "1.1rem",
//                 transition: "opacity 0.3s ease-in-out",
//               }}
//             >
//               Student Portal
//             </Title>
//           )}
//         </div>

//         {isMobile && !collapsed && (
//           <Button
//             icon={<CloseOutlined />}
//             type="text"
//             onClick={() => setCollapsed(true)}
//             style={{ color: theme === "dark" ? "#fff" : "#000" }}
//           />
//         )}
//       </div>

//       {/* Profile Section */}
//       {!collapsed && !isMobile && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar
//               src={userData?.avatar}
//               icon={!userData?.avatar && <UserOutlined />}
//               size={40}
//             />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Text>
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Text>
//           </div>
//         </div>
//       )}

//       {/* Menus */}
//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={menuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={userMenuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />
//       </div>
//     </>
//   )
// return (
//   <>
//     {isMobile ? (
//       <Drawer
//         placement="left"
//         closable={false}
//         onClose={() => setCollapsed(true)}
//         open={!collapsed}
//         bodyStyle={{ padding: 0 }}
//         width={260}
//       >
//         <SideNavContent />
//       </Drawer>
//     ) : (
//       <Sider
//         theme={theme === "dark" ? "dark" : "light"}
//         trigger={null}
//         collapsible
//         collapsed={collapsed} // << Important: Controls full/partial collapse
//         collapsedWidth={80}   // << Ensures icons and logo are visible when collapsed
//         width={260}
//         className="site-sidebar"
//         style={{
//           overflow: "auto",
//           height: "100vh",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           bottom: 0,
//           zIndex: 1000,
//           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//           background: theme === "dark" ? "#001529" : "#fff",
//           transition: "all 0.3s ease-in-out",
//         }}
//       >
//         <SideNavContent />
//       </Sider>
//     )}
//   </>
// )

// }

// export default SideNav

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Divider,
//   Avatar,
//   Typography,
//   Badge,
//   Button,
//   Drawer,
// } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
//   CloseOutlined,
// } from "@ant-design/icons"
// import { useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/COL.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text, Title } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const { user } = useAuth()
//   const [selectedKeys, setSelectedKeys] = useState([])

//   useEffect(() => {
//     const pathName = location.pathname
//     const key = pathName.replace("/Student-portal/", "").split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//     { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//     { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//     { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//     { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//     { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//     { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//     { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   ]

//   const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   ]

//   const SideNavContent = () => (
//     <>
//       {/* Logo and Close Button */}
//       <div
//         className="logo-container"
//         style={{
//           padding: "16px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "space-between",
//           height: 64,
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//           transition: "all 0.3s ease-in-out",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <img
//             src={COL}
//             alt="COL Logo"
//             style={{
//               width: 32,
//               height: 32,
//               marginRight: collapsed ? 0 : 12,
//               transition: "all 0.3s ease-in-out",
//             }}
//           />
//           {!collapsed && !isMobile && (
//             <Title
//               level={4}
//               style={{
//                 margin: 0,
//                 color: theme === "dark" ? "#fff" : undefined,
//                 whiteSpace: "nowrap",
//                 fontSize: "1.1rem",
//                 transition: "opacity 0.3s ease-in-out",
//               }}
//             >
//               Student Portal
//             </Title>
//           )}
//         </div>

//         {isMobile && !collapsed && (
//           <Button
//             icon={<CloseOutlined />}
//             type="text"
//             onClick={() => setCollapsed(true)}
//             style={{ color: theme === "dark" ? "#fff" : "#000" }}
//           />
//         )}

        
//       </div>

//       {/* Profile Section */}
//       {!collapsed && !isMobile && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar
//               src={userData?.avatar}
//               icon={!userData?.avatar && <UserOutlined />}
//               size={40}
//             />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {userData?.name || "Student"}
//             </Text>
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               {userData?.email || "student@example.com"}
//             </Text>
//           </div>
//         </div>
//       )}

//       {/* Menus */}
//       <div style={{ padding: "16px 0" }}>
//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={menuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={userMenuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />
//       </div>
//     </>
//   )

//   return (
//     <>
//       {isMobile ? (
//         <Drawer
//           placement="left"
//           closable={false}
//           onClose={() => setCollapsed(true)}
//           open={!collapsed}
//           bodyStyle={{ padding: 0 }}
//           width={260}
//         >
//           <SideNavContent />
//         </Drawer>
//       ) : (
//         <Sider
//           theme={theme === "dark" ? "dark" : "light"}
//           trigger={null}
//           collapsible
//           collapsed={collapsed}
//           collapsedWidth={80}
//           width={260}
//           className="site-sidebar"
//           style={{
//             overflow: "auto",
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//             boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//             background: theme === "dark" ? "#001529" : "#fff",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <SideNavContent />
//         </Sider>
//       )}
//     </>
//   )
// }

// export default SideNav

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Divider,
//   Avatar,
//   Typography,
//   Badge,
//   Drawer,
// } from "antd"
// import {
//   DashboardOutlined,
//   BookOutlined,
//   LaptopOutlined,
//   ReadOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   CreditCardOutlined,
//   FileOutlined,
//   TeamOutlined,
//   QuestionCircleOutlined,
//   UserOutlined,
//   BulbOutlined,
//   SettingOutlined,
// } from "@ant-design/icons"
// import { CustomerServiceOutlined } from "@ant-design/icons";

// import { useLocation } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import COL from "../../assets/Prefcol.png"
// import { useAuth } from "../../Contexts/AuthContext"

// const { Sider } = Layout
// const { Text, Title } = Typography

// const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
//   const location = useLocation()
//   const { theme } = useTheme()
//   const { user } = useAuth()
//   const [selectedKeys, setSelectedKeys] = useState([])

//   useEffect(() => {
//     const pathName = location.pathname
//     const key = pathName.replace("/Student-portal/", "").split("/")[0] || "dashboard"
//     setSelectedKeys([key])
//   }, [location.pathname])

//     const getInitial = () => {
//     if (!user?.userName) return '?'
//     return user.userName.trim().charAt(0).toUpperCase()
//   }

//   const stringToColor = (str) => {
//   let hash = 0
//   for (let i = 0; i < str.length; i++) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash)
//   }
//   const hue = Math.abs(hash) % 360
//   return `hsl(${hue}, 60%, 70%)`
// }
//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//     { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//     { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//     { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
    
  
//   ]

//   //   const menuItems = [
//   //   { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
//   //   { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
//   //   { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
//   //   { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
//   //   { key: "quiz", icon: <FileTextOutlined />, label: "Quizzes", path: "/Student-portal/quiz" },
//   //   { key: "certificate", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificate" },
//   //   { key: "payment", icon: <CreditCardOutlined />, label: "Payment", path: "/Student-portal/payment" },
//   //   { key: "invoices", icon: <FileOutlined />, label: "Invoices", path: "/Student-portal/invoices" },
//   //   { key: "resources", icon: <BulbOutlined />, label: "Resources", path: "/resources" },
//   //   { key: "community", icon: <TeamOutlined />, label: "Community", path: "/Student-portal/community" },
//   //   { key: "help", icon: <QuestionCircleOutlined />, label: "Help Center", path: "/Student-portal/help" },
//   // ]

//   // const userMenuItems = [
//   //   { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//   //   { key: "settings", icon: <SettingOutlined />, label: "Settings", path: "/Student-portal/settings" },
//   // ]
//    const userMenuItems = [
//     { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
//     { key: "support", icon: <CustomerServiceOutlined />, label: "Support", path: "/Student-portal/support" }

//   ]

//   const SideNavContent = () => (
//     <>
//       {/* Logo Section (No close button on mobile) */}
//       <div
//         className="logo-container"
//         style={{
//           padding: "16px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "space-between",
//           height: 64,
//           borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//           transition: "all 0.3s ease-in-out",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <img
//             src={COL}
//             alt="COL Logo"
//             style={{
//               width: 32,
//               height: 32,
//               marginRight: collapsed ? 0 : 12,
//               transition: "all 0.3s ease-in-out",
//             }}
//           />
//           {!collapsed && !isMobile && (
//             <Title
//               level={4}
//               style={{
//                 margin: 0,
//                 color: theme === "dark" ? "#fff" : undefined,
//                 whiteSpace: "nowrap",
//                 fontSize: "1.1rem",
//                 transition: "opacity 0.3s ease-in-out",
//               }}
//             >
//               Student Portal
//             </Title>
//           )}
//         </div>
//       </div>

//       {/* Profile Section */}
//       {!collapsed && !isMobile && (
//         <div
//           style={{
//             padding: "16px 24px",
//             borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
//             display: "flex",
//             alignItems: "center",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <Badge dot status="success">
//             <Avatar
//               src={user?.avatar}
//               // icon={!user?.avatar && <UserOutlined />}
//               icon={!user?.avatar && <span>{getInitial()}</span>}
//               size={40}
//               style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
//             />
//           </Badge>
//           <div style={{ marginLeft: 12, overflow: "hidden" }}>
//             <Text
//               strong
//               style={{
//                 display: "block",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 color: theme === "dark" ? "#fff" : undefined,
//               }}
//             >
//               {
//                 user?.userName || "Student"
//               }
             
//             </Text>
             
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               {user?.mailId || "student@example.com"}
//             </Text>
//           </div>
//         </div>
//       )}

//       {/* Menus */}
//       <div style={{ padding: "16px 0" }}>
//         <Menu
//         className="custom-menu"
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={menuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />

//         <Divider style={{ margin: "8px 0" }} />

//         <Menu
//         className="custom-menu"
//           theme={theme === "dark" ? "dark" : "light"}
//           mode="inline"
//           selectedKeys={selectedKeys}
//           inlineCollapsed={!isMobile && collapsed}
//           items={userMenuItems.map((item) => ({
//             ...item,
//             onClick: () => {
//               window.location.href = item.path
//               if (isMobile) setCollapsed(true)
//             },
//           }))}
//         />
//          <Divider style={{ margin: "8px 0" }} />
//       </div>
//     </>
//   )

//   return (
//     <>
//       {isMobile ? (
//         <Drawer
//           placement="left"
//           closable={false}
//           onClose={() => setCollapsed(true)}
//           open={!collapsed}
//           bodyStyle={{ padding: 0 }}
//           width={260}
//         >
//           <SideNavContent />
//         </Drawer>
//       ) : (
//         <Sider
//           theme={theme === "dark" ? "dark" : "light"}
//           trigger={null}
//           collapsible
//           collapsed={collapsed}
//           collapsedWidth={80}
//           width={260}
//           className="site-sidebar"
//           style={{
//             overflow: "auto",
//             height: "100vh",
//             position: "fixed",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//             boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//             background: theme === "dark" ? "#001529" : "#fff",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           <SideNavContent />
//         </Sider>
//       )}
//     </>
//   )
// }

// export default SideNav

"use client"

import { useState, useEffect } from "react"
import {
  Layout,
  Menu,
  Divider,
  Avatar,
  Typography,
  Badge,
  Drawer,
} from "antd"
import {
  DashboardOutlined,
  BookOutlined,
  LaptopOutlined,
  ReadOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  TrophyOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  CreditCardOutlined,
  HeartOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import COL from "../../assets/Prefcol.png"
import { useAuth } from "../../Contexts/AuthContext"
import { SwapOutlined } from "@ant-design/icons";

const { Sider } = Layout
const { Text, Title } = Typography

const SideNav = ({ collapsed, setCollapsed, isMobile, windowWidth, userData }) => {
  const location = useLocation()
  const navigate = useNavigate() // Hook for navigation
  const { theme } = useTheme()
  // const { user } = useAuth()
  const [selectedKeys, setSelectedKeys] = useState([])
const { logout, user } = useAuth() // ✅ Use logout from AuthContext
  useEffect(() => {
    const pathName = location.pathname
    const key = pathName.replace("/Student-portal/", "").split("/")[0] || "dashboard"
    setSelectedKeys([key])
  }, [location.pathname])

  const getInitial = () => {
    if (!user?.userName) return '?'
    return user.userName.trim().charAt(0).toUpperCase()
  }

  const stringToColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const hue = Math.abs(hash) % 360
    return `hsl(${hue}, 60%, 70%)`
  }

  const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard", path: "/Student-portal/dashboard" },
    { key: "courses", icon: <BookOutlined />, label: "My Courses", path: "/Student-portal/courses" },
    { key: "it-courses", icon: <LaptopOutlined />, label: "IT Courses", path: "/Student-portal/it-courses" },
    { key: "non-it-courses", icon: <ReadOutlined />, label: "Non-IT Courses", path: "/Student-portal/non-it-courses" },
    { key: "certificates", icon: <TrophyOutlined />, label: "Certificates", path: "/Student-portal/certificates" },
    { key: "assignments", icon: <FileDoneOutlined />, label: "Assignments", path: "/Student-portal/assignments" },
    { key: "payments", icon: <CreditCardOutlined />, label: "Payments", path: "/Student-portal/payments" },
    { key: "InterestWishlist", icon: <HeartOutlined />, label: "Enquired & Wishlist", path: "/Student-portal/InterestWishlist" },
  ]

  const userMenuItems = [
    { key: "profile", icon: <UserOutlined />, label: "My Profile", path: "/Student-portal/profile" },
    { key: "check-in-out", icon: <SwapOutlined />, label: "Check In/Out", path: "/Student-portal/check-in-out" },
    { key: "mentor-connect", icon: <UserSwitchOutlined />, label: "Mentor Connect", path: "/Student-portal/mentor-connect" },
    { key: "support", icon: <CustomerServiceOutlined />, label: "Support", path: "/Student-portal/support" },
   { key: "logout", icon: <LogoutOutlined />, label: "Logout" },
  ]

  const handleMenuClick = (path) => {
    navigate(path)
    if (isMobile) setCollapsed(true)
  }

  const SideNavContent = () => (
    <>
      {/* Logo Section */}
      <div
        className="logo-container"
        style={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          height: 64,
          borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* <img
            src={COL}
            alt="COL Logo"
            style={{
              width: 40,
              height: 40,
              marginRight: collapsed ? 0 : 12,
              transition: "all 0.3s ease-in-out",
            }}
          /> */}
          <img
  src={COL}
  alt="COL Logo"
  style={{
    width: collapsed ? 40 : 70,
    height: collapsed ? 40 : 70,
    objectFit: "contain",
    marginRight: collapsed ? 0 : 12,
    transition: "all 0.3s ease-in-out",
  }}
/>
          {!collapsed && !isMobile && (
            <Title
              level={4}
              style={{
                margin: 0,
                color: theme === "dark" ? "#fff" : undefined,
                whiteSpace: "nowrap",
                fontSize: "1.1rem",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              Student Portal
            </Title>
          )}
        </div>
      </div>

      {/* Profile Section */}
      {!collapsed && !isMobile && (
        <div
          style={{
            padding: "16px 24px",
            borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
            display: "flex",
            alignItems: "center",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Badge dot status="success">
            <Avatar
              src={user?.avatar}
              icon={!user?.avatar && <span>{getInitial()}</span>}
              size={40}
              style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
            />
          </Badge>
          <div style={{ marginLeft: 12, overflow: "hidden" }}>
            <Text
              strong
              style={{
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: theme === "dark" ? "#fff" : undefined,
              }}
            >
              {user?.userName || "Student"}
            </Text>
            <Text type="secondary" style={{ fontSize: 12 }}>
              {user?.mailId || "student@example.com"}
            </Text>
          </div>
        </div>
      )}

      {/* Menus */}
      {/* <div style={{ padding: "16px 0" }}>
        <Menu
          className="custom-menu"
          theme={theme === "dark" ? "dark" : "light"}
          mode="inline"
          selectedKeys={selectedKeys}
          inlineCollapsed={!isMobile && collapsed}
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => handleMenuClick(item.path),
          }))}
        />

        <Divider style={{ margin: "8px 0" }} />

        <Menu
          className="custom-menu"
          theme={theme === "dark" ? "dark" : "light"}
          mode="inline"
          selectedKeys={selectedKeys}
          inlineCollapsed={!isMobile && collapsed}
          items={userMenuItems.map((item) => ({
            ...item,
            onClick: () => handleMenuClick(item.path),
          }))}
        />

        <Divider style={{ margin: "8px 0" }} />
      </div> */}
      {/* Menus */}
<div style={{ padding: "16px 0" }}>
  <Menu
    className="custom-menu"
    theme={theme === "dark" ? "dark" : "light"}
    mode="inline"
    selectedKeys={selectedKeys}
    inlineCollapsed={!isMobile && collapsed}
    items={menuItems.map((item) => ({
      ...item,
      onClick: () => handleMenuClick(item.path),
    }))}
  />

  <Divider style={{ margin: "8px 0" }} />

  <Menu
    className="custom-menu"
    theme={theme === "dark" ? "dark" : "light"}
    mode="inline"
    selectedKeys={selectedKeys}
    inlineCollapsed={!isMobile && collapsed}
    items={userMenuItems.map((item) => ({
      ...item,
      onClick: () => {
        if (item.key === "logout") {
          logout()
          navigate("/")
          message.success("Logged out successfully")
        } else {
          handleMenuClick(item.path)
        }
      },
    }))}
  />

  <Divider style={{ margin: "8px 0" }} />
</div>

    </>
  )

  return (
    <>
      {isMobile ? (
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setCollapsed(true)}
          open={!collapsed}
          bodyStyle={{ padding: 0 }}
          width={260}
        >
          <SideNavContent />
        </Drawer>
      ) : (
        <Sider
          theme={theme === "dark" ? "dark" : "light"}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={80}
          width={260}
          className="site-sidebar"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1000,
            boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
            background: theme === "dark" ? "#001529" : "#fff",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <SideNavContent />
        </Sider>
      )}
    </>
  )
}

export default SideNav