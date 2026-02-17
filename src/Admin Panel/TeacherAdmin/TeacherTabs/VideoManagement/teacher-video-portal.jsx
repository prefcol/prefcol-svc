// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout,
//   Menu,
//   Button,
//   theme,
//   Spin,
//   message,
//   Tabs,
//   Dropdown,
//   Space,
//   Avatar,
//   Badge,
//   Typography,
//   Drawer,
//   Grid,
// } from "antd"
// import {
//   VideoCameraOutlined,
//   PlaySquareOutlined,
//   LineChartOutlined,
//   SettingOutlined,
//   BellOutlined,
//   UserOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   LogoutOutlined,
//   DashboardOutlined,
//   CloudUploadOutlined,
//   SearchOutlined,
// } from "@ant-design/icons"
// import VideoManagement from "./components/video-management"
// import PlaylistManagement from "./components/playlist-management"
// import VideoAnalytics from "./components/video-analytics"
// import SettingsPanel from "./components/settings-panel"
// import { useVideos } from "./hooks/use-videos"
// import { usePlaylists } from "./hooks/use-playlists"
// import { useAnalytics } from "./hooks/use-analytics"

// const { Header, Sider, Content } = Layout
// const { Title } = Typography
// const { useBreakpoint } = Grid

// const TeacherVideoPortal = () => {
//   const [collapsed, setCollapsed] = useState(false)
//   const [activeTab, setActiveTab] = useState("videos")
//   const [loading, setLoading] = useState(true)
//   const [messageApi, contextHolder] = message.useMessage()
//   const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

//   const screens = useBreakpoint()
//   const isMobile = !screens.md

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken()

//   const {
//     videos,
//     stats: videoStats,
//     filteredVideos,
//     searchQuery,
//     setSearchQuery,
//     filterStatus,
//     setFilterStatus,
//     sortBy,
//     setSortBy,
//     sortOrder,
//     setSortOrder,
//     addVideo,
//     updateVideo,
//     deleteVideo,
//     updateVideoStatus,
//     fetchVideos,
//     loading: videosLoading,
//   } = useVideos()

//   const {
//     playlists,
//     addPlaylist,
//     updatePlaylist,
//     deletePlaylist,
//     addVideoToPlaylist,
//     removeVideoFromPlaylist,
//     reorderPlaylistVideos,
//     fetchPlaylists,
//     loading: playlistsLoading,
//   } = usePlaylists()

//   const { analyticsData, fetchAnalytics, timeRange, setTimeRange, loading: analyticsLoading } = useAnalytics()

//   useEffect(() => {
//     const initializeData = async () => {
//       try {
//         setLoading(true)
//         await Promise.all([fetchVideos(), fetchPlaylists(), fetchAnalytics()])
//         messageApi.success("Data loaded successfully")
//       } catch (error) {
//         messageApi.error("Failed to load data")
//         console.error("Initialization error:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     initializeData()
//   }, [])

//   useEffect(() => {
//     // Auto-collapse sidebar on mobile
//     if (isMobile) {
//       setCollapsed(true)
//     }
//   }, [isMobile])

//   const userMenu = (
//     <Menu
//       items={[
//         {
//           key: "1",
//           label: "Profile",
//           icon: <UserOutlined />,
//         },
//         {
//           key: "2",
//           label: "Settings",
//           icon: <SettingOutlined />,
//         },
//         {
//           type: "divider",
//         },
//         {
//           key: "3",
//           label: "Logout",
//           icon: <LogoutOutlined />,
//         },
//       ]}
//     />
//   )

//   const notificationsMenu = (
//     <Menu
//       items={[
//         {
//           key: "1",
//           label: 'New comment on "Introduction to Physics"',
//           onClick: () => {},
//         },
//         {
//           key: "2",
//           label: 'Your video "Chemistry Basics" was approved',
//           onClick: () => {},
//         },
//         {
//           key: "3",
//           label: 'Playlist "Math Fundamentals" has been shared',
//           onClick: () => {},
//         },
//       ]}
//     />
//   )

//   const handleTabChange = (key) => {
//     setActiveTab(key)
//     if (isMobile) {
//       setMobileMenuVisible(false)
//     }
//   }

//   const menuItems = [
//     {
//       key: "dashboard",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       key: "videos",
//       icon: <VideoCameraOutlined />,
//       label: "Videos",
//     },
//     {
//       key: "playlists",
//       icon: <PlaySquareOutlined />,
//       label: "Playlists",
//     },
//     {
//       key: "analytics",
//       icon: <LineChartOutlined />,
//       label: "Analytics",
//     },
//     {
//       key: "settings",
//       icon: <SettingOutlined />,
//       label: "Settings",
//     },
//   ]

//   const renderContent = () => {
//     if (loading) {
//       return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
//           <Spin size="large" tip="Loading teacher portal..." />
//         </div>
//       )
//     }

//     return (
//       <Tabs
//         activeKey={activeTab}
//         onChange={handleTabChange}
//         type="card"
//         size={isMobile ? "small" : "large"}
//         tabBarStyle={{ marginBottom: 24 }}
//         tabBarExtraContent={
//           activeTab === "videos" && !isMobile ? (
//             <Button
//               type="primary"
//               icon={<CloudUploadOutlined />}
//               onClick={() => messageApi.info("Upload video clicked")}
//             >
//               Upload Video
//             </Button>
//           ) : null
//         }
//         items={[
//           {
//             key: "videos",
//             label: (
//               <span>
//                 <VideoCameraOutlined /> {!isMobile && "Videos"}
//               </span>
//             ),
//             children: (
//               <VideoManagement
//                 videos={filteredVideos}
//                 loading={videosLoading}
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//                 filterStatus={filterStatus}
//                 setFilterStatus={setFilterStatus}
//                 sortBy={sortBy}
//                 setSortBy={setSortBy}
//                 sortOrder={sortOrder}
//                 setSortOrder={setSortOrder}
//                 onAdd={addVideo}
//                 onUpdate={updateVideo}
//                 onDelete={deleteVideo}
//                 onStatusChange={updateVideoStatus}
//                 onRefresh={fetchVideos}
//                 playlists={playlists}
//                 addToPlaylist={addVideoToPlaylist}
//                 stats={videoStats}
//                 isMobile={isMobile}
//               />
//             ),
//           },
//           {
//             key: "playlists",
//             label: (
//               <span>
//                 <PlaySquareOutlined /> {!isMobile && "Playlists"}
//               </span>
//             ),
//             children: (
//               <PlaylistManagement
//                 playlists={playlists}
//                 videos={videos}
//                 loading={playlistsLoading}
//                 onAdd={addPlaylist}
//                 onUpdate={updatePlaylist}
//                 onDelete={deletePlaylist}
//                 onAddVideo={addVideoToPlaylist}
//                 onRemoveVideo={removeVideoFromPlaylist}
//                 onReorderVideos={reorderPlaylistVideos}
//                 onRefresh={fetchPlaylists}
//                 isMobile={isMobile}
//               />
//             ),
//           },
//           {
//             key: "analytics",
//             label: (
//               <span>
//                 <LineChartOutlined /> {!isMobile && "Analytics"}
//               </span>
//             ),
//             children: (
//               <VideoAnalytics
//                 analyticsData={analyticsData}
//                 loading={analyticsLoading}
//                 timeRange={timeRange}
//                 setTimeRange={setTimeRange}
//                 onRefresh={fetchAnalytics}
//                 videos={videos}
//                 isMobile={isMobile}
//               />
//             ),
//           },
//           {
//             key: "settings",
//             label: (
//               <span>
//                 <SettingOutlined /> {!isMobile && "Settings"}
//               </span>
//             ),
//             children: <SettingsPanel isMobile={isMobile} />,
//           },
//         ]}
//       />
//     )
//   }

//   // Mobile menu drawer
//   const mobileMenu = (
//     <Drawer
//       title="Teacher Portal"
//       placement="left"
//       onClose={() => setMobileMenuVisible(false)}
//       open={mobileMenuVisible}
//       width={250}
//       bodyStyle={{ padding: 0 }}
//     >
//       <Menu
//         mode="inline"
//         selectedKeys={[activeTab]}
//         onClick={({ key }) => handleTabChange(key)}
//         items={menuItems}
//         style={{ height: "100%" }}
//       />
//     </Drawer>
//   )

//   return (
//     <>
//       {contextHolder}
//       {mobileMenu}
//       <Layout style={{ minHeight: "100vh" }}>
//         {!isMobile && (
//           <Sider
//             trigger={null}
//             collapsible
//             collapsed={collapsed}
//             theme="light"
//             width={250}
//             style={{
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//               zIndex: 10,
//               overflow: "auto",
//               height: "100vh",
//               position: "fixed",
//               left: 0,
//               top: 0,
//               bottom: 0,
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "16px",
//                 height: "64px",
//                 borderBottom: "1px solid #f0f0f0",
//               }}
//             >
//               {!collapsed && (
//                 <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
//                   Teacher Portal
//                 </Title>
//               )}
//               {collapsed && <Avatar style={{ backgroundColor: "#1890ff" }} icon={<UserOutlined />} />}
//             </div>
//             <Menu mode="inline" selectedKeys={[activeTab]} onClick={({ key }) => setActiveTab(key)} items={menuItems} />
//           </Sider>
//         )}
//         <Layout style={{ marginLeft: isMobile ? 0 : collapsed ? 80 : 250, transition: "all 0.2s" }}>
//           <Header
//             style={{
//               padding: "0 16px",
//               background: colorBgContainer,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
//               position: "sticky",
//               top: 0,
//               zIndex: 9,
//               width: "100%",
//             }}
//           >
//             {isMobile ? (
//               <Button
//                 type="text"
//                 icon={<MenuUnfoldOutlined />}
//                 onClick={() => setMobileMenuVisible(true)}
//                 style={{ fontSize: "16px", width: 40, height: 40 }}
//               />
//             ) : (
//               <Button
//                 type="text"
//                 icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ fontSize: "16px", width: 40, height: 40 }}
//               />
//             )}

//             {isMobile && (
//               <div style={{ flex: 1, textAlign: "center" }}>
//                 <Title level={4} style={{ margin: 0 }}>
//                   Teacher Portal
//                 </Title>
//               </div>
//             )}

//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Space size={isMobile ? 8 : 16}>
//                 {!isMobile && (
//                   <Button
//                     type="text"
//                     icon={<SearchOutlined />}
//                     style={{ fontSize: "16px" }}
//                     onClick={() => messageApi.info("Global search clicked")}
//                   />
//                 )}
//                 <Dropdown overlay={notificationsMenu} trigger={["click"]} placement="bottomRight">
//                   <Badge count={3} size="small">
//                     <Button type="text" icon={<BellOutlined />} style={{ fontSize: "16px" }} />
//                   </Badge>
//                 </Dropdown>
//                 <Dropdown overlay={userMenu} trigger={["click"]} placement="bottomRight">
//                   <Space>
//                     <Avatar style={{ backgroundColor: "#1890ff" }} icon={<UserOutlined />} />
//                     {!isMobile && <span> Teacher</span>}
//                   </Space>
//                 </Dropdown>
//               </Space>
//             </div>
//           </Header>

//           {/* Mobile action button for upload */}
//           {isMobile && activeTab === "videos" && (
//             <div
//               style={{
//                 position: "fixed",
//                 bottom: 20,
//                 right: 20,
//                 zIndex: 10,
//               }}
//             >
//               <Button
//                 type="primary"
//                 shape="circle"
//                 size="large"
//                 icon={<CloudUploadOutlined />}
//                 onClick={() => messageApi.info("Upload video clicked")}
//                 style={{
//                   width: 56,
//                   height: 56,
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                 }}
//               />
//             </div>
//           )}

//           <Content
//             style={{
//               margin: isMobile ? "16px 8px" : "24px 16px",
//               padding: isMobile ? 16 : 24,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//               minHeight: 280,
//               overflow: "auto",
//             }}
//           >
//             {renderContent()}
//           </Content>
//         </Layout>
//       </Layout>
//     </>
//   )
// }

// export default TeacherVideoPortal






// import { useState, useEffect } from "react"
// import {
//   Input,
//   Layout,
//   Menu,
//   Button,
//   theme,
//   Spin,
//   message,
//   Dropdown,
//   Space,
//   Avatar,
//   Badge,
//   Typography,
//   Drawer,
//   Grid,
//   ConfigProvider,
//   notification,
// } from "antd"
// import {
//   VideoCameraOutlined,
//   PlaySquareOutlined,
//   LineChartOutlined,
//   SettingOutlined,
//   BellOutlined,
//   UserOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   LogoutOutlined,
//   DashboardOutlined,
//   CloudUploadOutlined,
//   SearchOutlined,
//   TeamOutlined,
//   CalendarOutlined,
//   BookOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons"
// import VideoManagement from "./components/video-management"
// import PlaylistManagement from "./components/playlist-management"
// import VideoAnalytics from "./components/video-analytics"
// import SettingsPanel from "./components/settings-panel"
// import Dashboard from "./components/dashboard"
// import StudentManagement from "./components/student-management"
// import CourseManagement from "./components/course-management"
// import AssignmentManagement from "./components/assignment-management"
// import { useVideos } from "./hooks/use-videos"
// import { usePlaylists } from "./hooks/use-playlists"
// import { useAnalytics } from "./hooks/use-analytics"
// import { useNotifications } from "./hooks/use-notifications"
// import { useSearch } from "./hooks/use-search"
// import themeConfig from "./theme-config"

// const { Header, Sider, Content } = Layout
// const { Title } = Typography
// const { useBreakpoint } = Grid

// const TeacherVideoPortal = () => {
//   const [collapsed, setCollapsed] = useState(false)
//   const [activeTab, setActiveTab] = useState("dashboard")
//   const [loading, setLoading] = useState(true)
//   const [messageApi, contextHolder] = message.useMessage()
//   const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
//   const [notificationApi, notificationContextHolder] = notification.useNotification()

//   const screens = useBreakpoint()
//   const isMobile = !screens.md

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken()

//   const {
//     videos,
//     stats: videoStats,
//     filteredVideos,
//     searchQuery,
//     setSearchQuery,
//     filterStatus,
//     setFilterStatus,
//     sortBy,
//     setSortBy,
//     sortOrder,
//     setSortOrder,
//     addVideo,
//     updateVideo,
//     deleteVideo,
//     updateVideoStatus,
//     fetchVideos,
//     loading: videosLoading,
//   } = useVideos()

//   const {
//     playlists,
//     addPlaylist,
//     updatePlaylist,
//     deletePlaylist,
//     addVideoToPlaylist,
//     removeVideoFromPlaylist,
//     reorderPlaylistVideos,
//     fetchPlaylists,
//     loading: playlistsLoading,
//   } = usePlaylists()

//   const { analyticsData, fetchAnalytics, timeRange, setTimeRange, loading: analyticsLoading } = useAnalytics()

//   const { notifications, markAsRead, clearNotifications, unreadCount, fetchNotifications } = useNotifications()

//   const { searchResults, globalSearchQuery, setGlobalSearchQuery, performSearch, searchLoading } = useSearch({
//     videos,
//     playlists,
//   })

//   useEffect(() => {
//     const initializeData = async () => {
//       try {
//         setLoading(true)
//         await Promise.all([fetchVideos(), fetchPlaylists(), fetchAnalytics(), fetchNotifications()])
//         messageApi.success("Data loaded successfully")
//       } catch (error) {
//         messageApi.error("Failed to load data")
//         console.error("Initialization error:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     initializeData()
//   }, [])

//   useEffect(() => {
//     // Auto-collapse sidebar on mobile
//     if (isMobile) {
//       setCollapsed(true)
//     }
//   }, [isMobile])

//   // Handle global search
//   const handleGlobalSearch = () => {
//     if (globalSearchQuery.trim()) {
//       performSearch(globalSearchQuery)

//       // Show search results in a notification
//       if (searchResults.videos.length > 0 || searchResults.playlists.length > 0) {
//         const searchContent = (
//           <div>
//             {searchResults.videos.length > 0 && (
//               <div>
//                 <p>
//                   <strong>Videos ({searchResults.videos.length}):</strong>
//                 </p>
//                 <ul>
//                   {searchResults.videos.slice(0, 3).map((video) => (
//                     <li key={video.id}>{video.title}</li>
//                   ))}
//                   {searchResults.videos.length > 3 && <li>...and more</li>}
//                 </ul>
//               </div>
//             )}
//             {searchResults.playlists.length > 0 && (
//               <div>
//                 <p>
//                   <strong>Playlists ({searchResults.playlists.length}):</strong>
//                 </p>
//                 <ul>
//                   {searchResults.playlists.slice(0, 3).map((playlist) => (
//                     <li key={playlist.id}>{playlist.name}</li>
//                   ))}
//                   {searchResults.playlists.length > 3 && <li>...and more</li>}
//                 </ul>
//               </div>
//             )}
//           </div>
//         )

//         notificationApi.info({
//           message: "Search Results",
//           description: searchContent,
//           placement: "topRight",
//           duration: 5,
//         })
//       } else {
//         notificationApi.info({
//           message: "Search Results",
//           description: "No results found for your search query.",
//           placement: "topRight",
//           duration: 3,
//         })
//       }
//     }
//   }

//   const userMenu = (
//     <Menu
//       items={[
//         {
//           key: "1",
//           label: "Profile",
//           icon: <UserOutlined />,
//           onClick: () => setActiveTab("settings"),
//         },
//         {
//           key: "2",
//           label: "Settings",
//           icon: <SettingOutlined />,
//           onClick: () => setActiveTab("settings"),
//         },
//         {
//           type: "divider",
//         },
//         {
//           key: "3",
//           label: "Logout",
//           icon: <LogoutOutlined />,
//           onClick: () => messageApi.info("Logout clicked"),
//         },
//       ]}
//     />
//   )

//   const notificationsMenu = (
//     <Menu
//       style={{ width: 320, maxHeight: 400, overflow: "auto" }}
//       items={[
//         {
//           key: "header",
//           label: (
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <span>
//                 <strong>Notifications</strong>
//               </span>
//               <Button type="link" size="small" onClick={() => clearNotifications()}>
//                 Clear All
//               </Button>
//             </div>
//           ),
//           disabled: true,
//         },
//         ...notifications.map((notification, index) => ({
//           key: notification.id,
//           label: (
//             <div
//               style={{
//                 padding: "8px 0",
//                 opacity: notification.read ? 0.7 : 1,
//                 backgroundColor: notification.read ? "transparent" : "rgba(255, 122, 0, 0.05)",
//               }}
//               onClick={() => markAsRead(notification.id)}
//             >
//               <div style={{ fontWeight: notification.read ? "normal" : "bold" }}>{notification.title}</div>
//               <div style={{ fontSize: "12px", color: "#666" }}>{notification.message}</div>
//               <div style={{ fontSize: "11px", color: "#999", marginTop: "4px" }}>
//                 {new Date(notification.timestamp).toLocaleString()}
//               </div>
//             </div>
//           ),
//         })),
//         notifications.length === 0
//           ? {
//               key: "empty",
//               label: <div style={{ textAlign: "center", padding: "20px 0" }}>No notifications</div>,
//               disabled: true,
//             }
//           : null,
//       ].filter(Boolean)}
//     />
//   )

//   const handleTabChange = (key) => {
//     setActiveTab(key)
//     if (isMobile) {
//       setMobileMenuVisible(false)
//     }
//   }

//   const menuItems = [
//     {
//       key: "dashboard",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//     },
//     {
//       key: "videos",
//       icon: <VideoCameraOutlined />,
//       label: "Videos",
//     },
//     {
//       key: "playlists",
//       icon: <PlaySquareOutlined />,
//       label: "Playlists",
//     },
//     {
//       key: "analytics",
//       icon: <LineChartOutlined />,
//       label: "Analytics",
//     },
//     {
//       key: "students",
//       icon: <TeamOutlined />,
//       label: "Students",
//     },
//     {
//       key: "courses",
//       icon: <BookOutlined />,
//       label: "Courses",
//     },
//     {
//       key: "assignments",
//       icon: <FileTextOutlined />,
//       label: "Assignments",
//     },
//     {
//       key: "calendar",
//       icon: <CalendarOutlined />,
//       label: "Calendar",
//     },
//     {
//       key: "settings",
//       icon: <SettingOutlined />,
//       label: "Settings",
//     },
//   ]

//   const renderContent = () => {
//     if (loading) {
//       return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
//           <Spin size="large" tip="Loading teacher portal..." />
//         </div>
//       )
//     }

//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <Dashboard
//             videoStats={videoStats}
//             playlists={playlists}
//             videos={videos}
//             analyticsData={analyticsData}
//             notifications={notifications.slice(0, 5)}
//             isMobile={isMobile}
//           />
//         )
//       case "videos":
//         return (
//           <VideoManagement
//             videos={filteredVideos}
//             loading={videosLoading}
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//             filterStatus={filterStatus}
//             setFilterStatus={setFilterStatus}
//             sortBy={sortBy}
//             setSortBy={setSortBy}
//             sortOrder={sortOrder}
//             setSortOrder={setSortOrder}
//             onAdd={addVideo}
//             onUpdate={updateVideo}
//             onDelete={deleteVideo}
//             onStatusChange={updateVideoStatus}
//             onRefresh={fetchVideos}
//             playlists={playlists}
//             addToPlaylist={addVideoToPlaylist}
//             stats={videoStats}
//             isMobile={isMobile}
//           />
//         )
//       case "playlists":
//         return (
//           <PlaylistManagement
//             playlists={playlists}
//             videos={videos}
//             loading={playlistsLoading}
//             onAdd={addPlaylist}
//             onUpdate={updatePlaylist}
//             onDelete={deletePlaylist}
//             onAddVideo={addVideoToPlaylist}
//             onRemoveVideo={removeVideoFromPlaylist}
//             onReorderVideos={reorderPlaylistVideos}
//             onRefresh={fetchPlaylists}
//             isMobile={isMobile}
//           />
//         )
//       case "analytics":
//         return (
//           <VideoAnalytics
//             analyticsData={analyticsData}
//             loading={analyticsLoading}
//             timeRange={timeRange}
//             setTimeRange={setTimeRange}
//             onRefresh={fetchAnalytics}
//             videos={videos}
//             isMobile={isMobile}
//           />
//         )
//       case "students":
//         return <StudentManagement isMobile={isMobile} />
//       case "courses":
//         return <CourseManagement isMobile={isMobile} />
//       case "assignments":
//         return <AssignmentManagement isMobile={isMobile} />
//       case "settings":
//         return <SettingsPanel isMobile={isMobile} />
//       case "calendar":
//         return (
//           <div style={{ textAlign: "center", padding: "50px 0" }}>
//             <Title level={3}>Calendar</Title>
//             <p>Calendar feature coming soon!</p>
//           </div>
//         )
//       default:
//         return (
//           <Dashboard
//             videoStats={videoStats}
//             playlists={playlists}
//             videos={videos}
//             analyticsData={analyticsData}
//             notifications={notifications.slice(0, 5)}
//             isMobile={isMobile}
//           />
//         )
//     }
//   }

//   // Mobile menu drawer
//   const mobileMenu = (
//     <Drawer
//       title={
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <div
//             style={{
//               width: 32,
//               height: 32,
//               borderRadius: "50%",
//               backgroundColor: "#FF7A00",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginRight: 12,
//               color: "white",
//             }}
//           >
//             <VideoCameraOutlined />
//           </div>
//           <span>Teacher Portal</span>
//         </div>
//       }
//       placement="left"
//       onClose={() => setMobileMenuVisible(false)}
//       open={mobileMenuVisible}
//       width={280}
//       bodyStyle={{ padding: 0 }}
//     >
//       <Menu
//         mode="inline"
//         selectedKeys={[activeTab]}
//         onClick={({ key }) => handleTabChange(key)}
//         items={menuItems}
//         style={{ height: "100%" }}
//       />
//     </Drawer>
//   )

//   return (
//     <ConfigProvider theme={themeConfig}>
//       {contextHolder}
//       {notificationContextHolder}
//       {mobileMenu}
//       <Layout style={{ minHeight: "100vh" }}>
//         {!isMobile && (
//           <Sider
//             trigger={null}
//             collapsible
//             collapsed={collapsed}
//             theme="light"
//             width={250}
//             style={{
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//               zIndex: 10,
//               overflow: "auto",
//               height: "100vh",
//               position: "fixed",
//               left: 0,
//               top: 0,
//               bottom: 0,
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "16px",
//                 height: "64px",
//                 borderBottom: "1px solid #f0f0f0",
//               }}
//             >
//               {!collapsed ? (
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div
//                     style={{
//                       width: 32,
//                       height: 32,
//                       borderRadius: "50%",
//                       backgroundColor: "#FF7A00",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginRight: 12,
//                       color: "white",
//                     }}
//                   >
//                     <VideoCameraOutlined />
//                   </div>
//                   <Title level={4} style={{ margin: 0, color: "#FF7A00" }}>
//                     Teacher Portal
//                   </Title>
//                 </div>
//               ) : (
//                 <div
//                   style={{
//                     width: 40,
//                     height: 40,
//                     borderRadius: "50%",
//                     backgroundColor: "#FF7A00",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     margin: "0 auto",
//                     color: "white",
//                   }}
//                 >
//                   <VideoCameraOutlined />
//                 </div>
//               )}
//             </div>
//             <Menu mode="inline" selectedKeys={[activeTab]} onClick={({ key }) => setActiveTab(key)} items={menuItems} />
//           </Sider>
//         )}
//         <Layout style={{ marginLeft: isMobile ? 0 : collapsed ? 80 : 250, transition: "all 0.2s" }}>
//           <Header
//             style={{
//               padding: "0 16px",
//               background: colorBgContainer,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
//               position: "sticky",
//               top: 0,
//               zIndex: 9,
//               width: "100%",
//             }}
//           >
//             {isMobile ? (
//               <Button
//                 type="text"
//                 icon={<MenuUnfoldOutlined />}
//                 onClick={() => setMobileMenuVisible(true)}
//                 style={{ fontSize: "16px", width: 40, height: 40 }}
//               />
//             ) : (
//               <Button
//                 type="text"
//                 icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ fontSize: "16px", width: 40, height: 40 }}
//               />
//             )}

//             {isMobile ? (
//               <div style={{ flex: 1, textAlign: "center" }}>
//                 <Title level={4} style={{ margin: 0, color: "#FF7A00" }}>
//                   Teacher Portal
//                 </Title>
//               </div>
//             ) : (
//               <div style={{ flex: 1, display: "flex", alignItems: "center", maxWidth: 400 }}>
//                 <Input
//                   placeholder="Search videos, playlists..."
//                   prefix={<SearchOutlined />}
//                   value={globalSearchQuery}
//                   onChange={(e) => setGlobalSearchQuery(e.target.value)}
//                   onPressEnter={handleGlobalSearch}
//                   style={{ width: "100%" }}
//                   suffix={
//                     <Button
//                       type="text"
//                       icon={<SearchOutlined />}
//                       onClick={handleGlobalSearch}
//                       loading={searchLoading}
//                     />
//                   }
//                 />
//               </div>
//             )}

//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Space size={isMobile ? 8 : 16}>
//                 {isMobile && (
//                   <Button
//                     type="text"
//                     icon={<SearchOutlined />}
//                     style={{ fontSize: "16px" }}
//                     onClick={() => {
//                       notificationApi.info({
//                         message: "Search",
//                         description: "Mobile search coming soon!",
//                         placement: "topRight",
//                       })
//                     }}
//                   />
//                 )}
//                 <Dropdown overlay={notificationsMenu} trigger={["click"]} placement="bottomRight">
//                   <Badge count={unreadCount} size="small">
//                     <Button type="text" icon={<BellOutlined />} style={{ fontSize: "16px" }} />
//                   </Badge>
//                 </Dropdown>
//                 <Dropdown overlay={userMenu} trigger={["click"]} placement="bottomRight">
//                   <Space>
//                     <Avatar style={{ backgroundColor: "#00A878" }} icon={<UserOutlined />} />
//                     {!isMobile && <span>John Doe</span>}
//                   </Space>
//                 </Dropdown>
//               </Space>
//             </div>
//           </Header>

//           {/* Mobile action button for upload */}
//           {isMobile && activeTab === "videos" && (
//             <div
//               style={{
//                 position: "fixed",
//                 bottom: 20,
//                 right: 20,
//                 zIndex: 10,
//               }}
//             >
//               <Button
//                 type="primary"
//                 shape="circle"
//                 size="large"
//                 icon={<CloudUploadOutlined />}
//                 onClick={() => messageApi.info("Upload video clicked")}
//                 style={{
//                   width: 56,
//                   height: 56,
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                 }}
//               />
//             </div>
//           )}

//           <Content
//             style={{
//               margin: isMobile ? "16px 8px" : "24px 16px",
//               padding: isMobile ? 16 : 24,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//               minHeight: 280,
//               overflow: "auto",
//             }}
//           >
//             {renderContent()}
//           </Content>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   )
// }

// export default TeacherVideoPortal




"use client"

import { useState, useEffect } from "react"
import {
  Layout,
  Menu,
  Button,
  theme,
  Spin,
  message,
  Dropdown,
  Space,
  Avatar,
  Badge,
  Typography,
  Divider,
  Drawer,
  Grid,
  ConfigProvider,
  notification,
  Input,
  Modal,
  List, // Added List import
} from "antd"
import {
  VideoCameraOutlined,
  PlaySquareOutlined,
  LineChartOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  DashboardOutlined,
  CloudUploadOutlined,
  SearchOutlined,
  TeamOutlined,
  CalendarOutlined,
  BookOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons"
import VideoManagement from "./components/video-management"
import PlaylistManagement from "./components/playlist-management"
import VideoAnalytics from "./components/video-analytics"
import SettingsPanel from "./components/settings-panel"
import Dashboard from "./components/dashboard"
import StudentManagement from "./components/student-management"
import CourseManagement from "./components/course-management"
import AssignmentManagement from "./components/assignment-management"
import Calendar from "./components/Calendar"
import { useVideos } from "./hooks/use-videos"
import { usePlaylists } from "./hooks/use-playlists"
import { useAnalytics } from "./hooks/use-analytics"
import { useNotifications } from "./hooks/use-notifications"
import { useSearch } from "./hooks/use-search"
import themeConfig from "./theme-config"
import { useAuth } from "../../../../Contexts/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
const { Header, Sider, Content } = Layout
const { Title, Text } = Typography
const { useBreakpoint } = Grid
const { Search } = Input

const TeacherVideoPortal = ({ embedded = false }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [loading, setLoading] = useState(true)
  const [messageApi, contextHolder] = message.useMessage()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [notificationApi, notificationContextHolder] = notification.useNotification()
  const [searchModalVisible, setSearchModalVisible] = useState(false)
  const [helpModalVisible, setHelpModalVisible] = useState(false)
  const [userMenuVisible, setUserMenuVisible] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  // First name for welcome message and profile (from user or email prefix)
  const teacherFirstName = (() => {
    if (!user) return "Teacher"
    const first = user.firstName || (user.name && user.name.split(/\s+/)[0])
    if (first) return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
    const email = user.mailId || user.email || ""
    const prefix = email.split("@")[0] || ""
    const part = prefix.split(".")[0] || prefix
    return part ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : "Teacher"
  })()
  const screens = useBreakpoint()
  const isMobile = !screens.md
  const isTablet = !screens.lg && screens.md

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const {
    videos,
    stats: videoStats,
    filteredVideos,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    addVideo,
    updateVideo,
    deleteVideo,
    updateVideoStatus,
    fetchVideos,
    loading: videosLoading,
  } = useVideos()

  const {
    playlists,
    addPlaylist,
    updatePlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    reorderPlaylistVideos,
    fetchPlaylists,
    loading: playlistsLoading,
  } = usePlaylists()

  const { analyticsData, fetchAnalytics, timeRange, setTimeRange, loading: analyticsLoading } = useAnalytics()

  const {
    notifications,
    markAsRead,
    markAllAsRead,
    clearNotifications,
    unreadCount,
    fetchNotifications,
    addNotification,
  } = useNotifications()

  const { searchResults, globalSearchQuery, setGlobalSearchQuery, performSearch, searchLoading } = useSearch({
    videos,
    playlists,
  })

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true)
        await Promise.all([fetchVideos(), fetchPlaylists(), fetchAnalytics(), fetchNotifications()])
        messageApi.success("Data loaded successfully")
      } catch (error) {
        messageApi.error("Failed to load data")
        console.error("Initialization error:", error)
      } finally {
        setLoading(false)
      }
    }

    initializeData()
  }, [])

  useEffect(() => {
    // Auto-collapse sidebar on mobile
    if (isMobile) {
      setCollapsed(true)
    }
  }, [isMobile])

  // Handle global search
  const handleGlobalSearch = () => {
    if (globalSearchQuery.trim()) {
      performSearch(globalSearchQuery)

      if (isMobile) {
        setSearchModalVisible(true)
      } else {
        // Show search results in a notification for desktop
        if (searchResults.videos.length > 0 || searchResults.playlists.length > 0) {
          const searchContent = (
            <div>
              {searchResults.videos.length > 0 && (
                <div>
                  <p>
                    <strong>Videos ({searchResults.videos.length}):</strong>
                  </p>
                  <ul>
                    {searchResults.videos.slice(0, 3).map((video) => (
                      <li key={video.id}>
                        <a
                          onClick={() => {
                            setActiveTab("videos")
                            setSearchQuery(video.title)
                          }}
                        >
                          {video.title}
                        </a>
                      </li>
                    ))}
                    {searchResults.videos.length > 3 && <li>...and more</li>}
                  </ul>
                </div>
              )}
              {searchResults.playlists.length > 0 && (
                <div>
                  <p>
                    <strong>Playlists ({searchResults.playlists.length}):</strong>
                  </p>
                  <ul>
                    {searchResults.playlists.slice(0, 3).map((playlist) => (
                      <li key={playlist.id}>
                        <a
                          onClick={() => {
                            setActiveTab("playlists")
                            setSearchQuery(playlist.name)
                          }}
                        >
                          {playlist.name}
                        </a>
                      </li>
                    ))}
                    {searchResults.playlists.length > 3 && <li>...and more</li>}
                  </ul>
                </div>
              )}
            </div>
          )

          notificationApi.info({
            message: "Search Results",
            description: searchContent,
            placement: "topRight",
            duration: 5,
          })
        } else {
          notificationApi.info({
            message: "Search Results",
            description: "No results found for your search query.",
            placement: "topRight",
            duration: 3,
          })
        }
      }
    }
  }

  const handleLogout = () => {
    Modal.confirm({
      title: "Logout Confirmation",
      content: "Are you sure you want to logout?",
      onOk: () => {
        messageApi.success("Logged out successfully")
        // In a real app, this would redirect to login page
        // window.location.href = '/login';
      },
    })
  }

  const userMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Profile",
          icon: <UserOutlined />,
          onClick: () => {
            setActiveTab("settings")
            setUserMenuVisible(false)
          },
        },
        {
          key: "2",
          label: "Settings",
          icon: <SettingOutlined />,
          onClick: () => {
            setActiveTab("settings")
            setUserMenuVisible(false)
          },
        },
        {
          key: "3",
          label: "Help",
          icon: <QuestionCircleOutlined />,
          onClick: () => {
            setHelpModalVisible(true)
            setUserMenuVisible(false)
          },
        },
        {
          type: "divider",
        },
        {
          key: "4",
          label: "Logout",
          icon: <LogoutOutlined />,
          onClick: () => {
           logout()
            navigate("/")
            message.success("Logged out successfully")
          },
          
          
        },
      ]}
    />
  )

  const notificationsMenu = (
    <Menu
      style={{ width: 320, maxHeight: 400, overflow: "auto" }}
      items={[
        {
          key: "header",
          label: (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>
                <strong>Notifications</strong>
              </span>
              <Space>
                <Button type="link" size="small" onClick={() => markAllAsRead()} disabled={unreadCount === 0}>
                  Mark all as read
                </Button>
                <Button
                  type="link"
                  size="small"
                  onClick={() => clearNotifications()}
                  disabled={notifications.length === 0}
                >
                  Clear All
                </Button>
              </Space>
            </div>
          ),
          disabled: true,
        },
        ...notifications.map((notification, index) => ({
          key: notification.id,
          label: (
            <div
              style={{
                padding: "8px 0",
                opacity: notification.read ? 0.7 : 1,
                backgroundColor: notification.read ? "transparent" : "rgba(255, 122, 0, 0.05)",
              }}
              onClick={() => {
                markAsRead(notification.id)

                // Handle navigation based on notification type
                if (notification.relatedId) {
                  const type = notification.relatedId.split("-")[0]

                  if (type === "video") {
                    setActiveTab("videos")
                    // Find the video and show its details
                    const video = videos.find((v) => v.id === notification.relatedId)
                    if (video) {
                      setTimeout(() => {
                        document.getElementById(notification.relatedId)?.scrollIntoView({ behavior: "smooth" })
                      }, 500)
                    }
                  } else if (type === "playlist") {
                    setActiveTab("playlists")
                  } else if (type === "assignment") {
                    setActiveTab("assignments")
                  }
                }
              }}
            >
              <div style={{ fontWeight: notification.read ? "normal" : "bold" }}>{notification.title}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{notification.message}</div>
              <div style={{ fontSize: "11px", color: "#999", marginTop: "4px" }}>
                {new Date(notification.timestamp).toLocaleString()}
              </div>
            </div>
          ),
        })),
        notifications.length === 0
          ? {
              key: "empty",
              label: <div style={{ textAlign: "center", padding: "20px 0" }}>No notifications</div>,
              disabled: true,
            }
          : null,
      ].filter(Boolean)}
    />
  )

  const handleTabChange = (key) => {
    if (key === "employee-dashboard") {
      navigate("/teacher-admin/employee-portal/dashboard")
      if (isMobile) setMobileMenuVisible(false)
      return
    }
    setActiveTab(key)
    if (isMobile) {
      setMobileMenuVisible(false)
    }
  }

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "employee-dashboard",
      icon: <UserOutlined />,
      label: "Employee Dashboard",
    },
    {
      key: "videos",
      icon: <VideoCameraOutlined />,
      label: "Videos",
    },
    {
      key: "playlists",
      icon: <PlaySquareOutlined />,
      label: "Playlists",
    },
    {
      key: "analytics",
      icon: <LineChartOutlined />,
      label: "Analytics",
    },
    {
      key: "students",
      icon: <TeamOutlined />,
      label: "Students",
    },
    {
      key: "courses",
      icon: <BookOutlined />,
      label: "Courses",
    },
    {
      key: "assignments",
      icon: <FileTextOutlined />,
      label: "Assignments",
    },
    {
      key: "calendar",
      icon: <CalendarOutlined />,
      label: "Calendar",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ]

  const renderContent = () => {
    if (loading) {
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Spin size="large" tip="Loading teacher portal..." />
        </div>
      )
    }

    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            videoStats={videoStats}
            playlists={playlists}
            videos={videos}
            analyticsData={analyticsData}
            notifications={notifications.slice(0, 5)}
            isMobile={isMobile}
            firstName={teacherFirstName}
            onVideoClick={(videoId) => {
              setActiveTab("videos")
              // Find the video and show its details
              const video = videos.find((v) => v.id === videoId)
              if (video) {
                setTimeout(() => {
                  document.getElementById(videoId)?.scrollIntoView({ behavior: "smooth" })
                }, 500)
              }
            }}
            onPlaylistClick={(playlistId) => {
              setActiveTab("playlists")
              // Find the playlist and show its details
              const playlist = playlists.find((p) => p.id === playlistId)
              if (playlist) {
                setTimeout(() => {
                  document.getElementById(playlistId)?.scrollIntoView({ behavior: "smooth" })
                }, 500)
              }
            }}
          />
        )
      case "videos":
        return (
          <VideoManagement
            videos={filteredVideos}
            loading={videosLoading}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onAdd={addVideo}
            onUpdate={updateVideo}
            onDelete={deleteVideo}
            onStatusChange={updateVideoStatus}
            onRefresh={fetchVideos}
            playlists={playlists}
            addToPlaylist={addVideoToPlaylist}
            stats={videoStats}
            isMobile={isMobile}
            addNotification={addNotification}
          />
        )
      case "playlists":
        return (
          <PlaylistManagement
            playlists={playlists}
            videos={videos}
            loading={playlistsLoading}
            onAdd={addPlaylist}
            onUpdate={updatePlaylist}
            onDelete={deletePlaylist}
            onAddVideo={addVideoToPlaylist}
            onRemoveVideo={removeVideoFromPlaylist}
            onReorderVideos={reorderPlaylistVideos}
            onRefresh={fetchPlaylists}
            isMobile={isMobile}
            addNotification={addNotification}
          />
        )
      case "analytics":
        return (
          <VideoAnalytics
            analyticsData={analyticsData}
            loading={analyticsLoading}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            onRefresh={fetchAnalytics}
            videos={videos}
            isMobile={isMobile}
          />
        )
      case "students":
        return <StudentManagement isMobile={isMobile} addNotification={addNotification} />
      case "courses":
        return <CourseManagement isMobile={isMobile} addNotification={addNotification} />
      case "assignments":
        return <AssignmentManagement isMobile={isMobile} addNotification={addNotification} />
      case "settings":
        return <SettingsPanel isMobile={isMobile} addNotification={addNotification} />
      case "calendar":
        return <Calendar isMobile={isMobile} addNotification={addNotification} />
      default:
        return (
          <Dashboard
            videoStats={videoStats}
            playlists={playlists}
            videos={videos}
            analyticsData={analyticsData}
            notifications={notifications.slice(0, 5)}
            isMobile={isMobile}
            firstName={teacherFirstName}
            onVideoClick={(videoId) => setActiveTab("videos")}
            onPlaylistClick={(playlistId) => setActiveTab("playlists")}
          />
        )
    }
  }

  // Mobile menu drawer
  const mobileMenu = (
    <Drawer
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "#FF7A00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              color: "white",
            }}
          >
            <VideoCameraOutlined />
          </div>
          <span>Teacher Portal</span>
        </div>
      }
      placement="left"
      onClose={() => setMobileMenuVisible(false)}
      open={mobileMenuVisible}
      width={280}
      bodyStyle={{ padding: 0 }}
    >
      <Menu
        mode="inline"
        selectedKeys={[activeTab]}
        onClick={({ key }) => handleTabChange(key)}
        items={menuItems}
        style={{ height: "100%" }}
      />
    </Drawer>
  )

  // Search results modal for mobile
  const searchResultsModal = (
    <Modal
      title="Search Results"
      open={searchModalVisible}
      onCancel={() => setSearchModalVisible(false)}
      footer={null}
      width={isMobile ? "95%" : 600}
    >
      {searchLoading ? (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <Spin />
          <div style={{ marginTop: 16 }}>Searching...</div>
        </div>
      ) : (
        <div>
          {searchResults.videos.length === 0 && searchResults.playlists.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <Text type="secondary">No results found for "{globalSearchQuery}"</Text>
            </div>
          ) : (
            <>
              {searchResults.videos.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <Title level={5}>Videos ({searchResults.videos.length})</Title>
                  <List
                    dataSource={searchResults.videos}
                    renderItem={(video) => (
                      <List.Item
                        key={video.id}
                        actions={[
                          <Button
                            key="view"
                            type="link"
                            onClick={() => {
                              setActiveTab("videos")
                              setSearchQuery(video.title)
                              setSearchModalVisible(false)
                            }}
                          >
                            View
                          </Button>,
                        ]}
                      >
                        <List.Item.Meta
                          avatar={
                            <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden" }}>
                              <img
                                src={video.thumbnailUrl || "/placeholder.svg?height=40&width=60"}
                                alt={video.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                            </div>
                          }
                          title={video.title}
                          description={
                            <Text type="secondary" ellipsis={{ rows: 2 }}>
                              {video.description}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              )}

              {searchResults.playlists.length > 0 && (
                <div>
                  <Title level={5}>Playlists ({searchResults.playlists.length})</Title>
                  <List
                    dataSource={searchResults.playlists}
                    renderItem={(playlist) => (
                      <List.Item
                        key={playlist.id}
                        actions={[
                          <Button
                            key="view"
                            type="link"
                            onClick={() => {
                              setActiveTab("playlists")
                              setSearchQuery(playlist.name)
                              setSearchModalVisible(false)
                            }}
                          >
                            View
                          </Button>,
                        ]}
                      >
                        <List.Item.Meta
                          avatar={<Avatar icon={<PlaySquareOutlined />} style={{ backgroundColor: "#00A878" }} />}
                          title={playlist.name}
                          description={
                            <Text type="secondary" ellipsis={{ rows: 2 }}>
                              {playlist.description}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </Modal>
  )

  // Help modal
  const helpModal = (
    <Modal
      title="Help & Support"
      open={helpModalVisible}
      onCancel={() => setHelpModalVisible(false)}
      footer={[
        <Button key="close" onClick={() => setHelpModalVisible(false)}>
          Close
        </Button>,
      ]}
      width={isMobile ? "95%" : 600}
    >
      <div>
        <Title level={5}>Quick Start Guide</Title>
        <p>Welcome to the Teacher Video Portal! Here's how to get started:</p>

        <ul>
          <li>
            <strong>Dashboard:</strong> View key metrics and recent activities
          </li>
          <li>
            <strong>Videos:</strong> Upload, manage, and organize your educational videos
          </li>
          <li>
            <strong>Playlists:</strong> Create collections of videos for your courses
          </li>
          <li>
            <strong>Analytics:</strong> Track engagement and performance metrics
          </li>
          <li>
            <strong>Students:</strong> Manage student accounts and track progress
          </li>
          <li>
            <strong>Courses:</strong> Organize your content into structured courses
          </li>
          <li>
            <strong>Assignments:</strong> Create and grade assignments
          </li>
        </ul>

        <Divider />

        <Title level={5}>Need Help?</Title>
        <p>If you need assistance, you can:</p>

        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            type="primary"
            icon={<QuestionCircleOutlined />}
            onClick={() => {
              window.open("https://example.com/documentation", "_blank")
              setHelpModalVisible(false)
            }}
            block
          >
            View Documentation
          </Button>

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => {
              messageApi.success("Support ticket created! Our team will contact you shortly.")
              setHelpModalVisible(false)
            }}
            block
          >
            Contact Support
          </Button>
        </Space>
      </div>
    </Modal>
  )

  return (
    <ConfigProvider theme={themeConfig}>
      {contextHolder}
      {notificationContextHolder}
      {mobileMenu}
      {searchResultsModal}
      {helpModal}
      <Layout style={{ minHeight: "100vh" }}>
        {!embedded && !isMobile && (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            width={250}
            style={{
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              zIndex: 10,
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                height: "64px",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {!collapsed ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "#FF7A00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                      color: "white",
                    }}
                  >
                    <VideoCameraOutlined />
                  </div>
                  <Title level={4} style={{ margin: 0, color: "#FF7A00" }}>
                    Teacher Portal
                  </Title>
                </div>
              ) : (
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#FF7A00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    color: "white",
                  }}
                >
                  <VideoCameraOutlined />
                </div>
              )}
            </div>
            <Menu mode="inline" selectedKeys={[activeTab]} onClick={({ key }) => handleTabChange(key)} items={menuItems} />

            {!collapsed && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  padding: "16px",
                  borderTop: "1px solid #f0f0f0",
                  backgroundColor: colorBgContainer,
                }}
              >
                <Button icon={<QuestionCircleOutlined />} onClick={() => setHelpModalVisible(true)} block>
                  Help & Support
                </Button>
              </div>
            )}
          </Sider>
        )}
        <Layout style={{ marginLeft: embedded ? 0 : isMobile ? 0 : collapsed ? 80 : 250, transition: "all 0.2s" }}>
          <Header
            style={{
              padding: "0 16px",
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              position: "sticky",
              top: 0,
              zIndex: 9,
              width: "100%",
            }}
          >
            {isMobile ? (
              <Button
                type="text"
                icon={<MenuUnfoldOutlined />}
                onClick={() => setMobileMenuVisible(true)}
                style={{ fontSize: "16px", width: 40, height: 40 }}
              />
            ) : (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: "16px", width: 40, height: 40 }}
              />
            )}

            {isMobile ? (
              <div style={{ flex: 1, textAlign: "center" }}>
                <Title level={4} style={{ margin: 0, color: "#FF7A00" }}>
                  Teacher Portal
                </Title>
              </div>
            ) : (
              <div style={{ flex: 1, display: "flex", alignItems: "center", maxWidth: 400 }}>
                <Input
                  placeholder="Search videos, playlists..."
                  prefix={<SearchOutlined />}
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  onPressEnter={handleGlobalSearch}
                  style={{ width: "100%" }}
                  suffix={
                    <Button
                      type="text"
                      icon={<SearchOutlined />}
                      onClick={handleGlobalSearch}
                      loading={searchLoading}
                    />
                  }
                />
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center" }}>
              <Space size={isMobile ? 8 : 16}>
                {isMobile && (
                  <Button
                    type="text"
                    icon={<SearchOutlined />}
                    style={{ fontSize: "16px" }}
                    onClick={() => setSearchModalVisible(true)}
                  />
                )}
                <Dropdown
                  overlay={notificationsMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                  onOpenChange={(visible) => {
                    if (visible) {
                      // Mark notifications as read after a delay
                      setTimeout(() => {
                        const unreadNotifications = notifications.filter((n) => !n.read)
                        if (unreadNotifications.length > 0) {
                          unreadNotifications.forEach((n) => markAsRead(n.id))
                        }
                      }, 3000)
                    }
                  }}
                >
                  <Badge count={unreadCount} size="small">
                    <Button type="text" icon={<BellOutlined />} style={{ fontSize: "16px" }} />
                  </Badge>
                </Dropdown>
                <Dropdown
                  overlay={userMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                  open={userMenuVisible}
                  onOpenChange={setUserMenuVisible}
                >
                  <Space style={{ cursor: "pointer" }}>
                    <Avatar style={{ backgroundColor: "#00A878" }} icon={<UserOutlined />} />
                    {!isMobile && <span>Teacher 1</span>}
                  </Space>
                </Dropdown>
              </Space>
            </div>
          </Header>

          {/* Mobile action button for upload */}
          {isMobile && activeTab === "videos" && (
            <div
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 10,
              }}
            >
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<CloudUploadOutlined />}
                onClick={() => {
                  const videoManagementComponent = document.querySelector('[data-testid="video-management"]')
                  if (videoManagementComponent) {
                    const uploadButton = videoManagementComponent.querySelector('[data-testid="upload-button"]')
                    if (uploadButton) {
                      uploadButton.click()
                    } else {
                      messageApi.info("Upload video clicked")
                    }
                  } else {
                    messageApi.info("Upload video clicked")
                  }
                }}
                style={{
                  width: 56,
                  height: 56,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              />
            </div>
          )}

          <Content
            style={{
              margin: isMobile ? "16px 8px" : "24px 16px",
              padding: isMobile ? 16 : 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: 280,
              overflow: "auto",
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default TeacherVideoPortal

