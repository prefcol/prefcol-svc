// "use client"

// import { useState, useEffect, useRef } from "react"
// import {
//   Layout,
//   Card,
//   Button,
//   Progress,
//   Typography,
//   Space,
//   Divider,
//   List,
//   Tooltip,
//   message,
//   Modal,
//   Drawer,
//   Collapse,
//   Spin,
//   Affix,
// } from "antd"
// import {
//   PlayCircleOutlined,
//   PauseCircleOutlined,
//   DownloadOutlined,
//   FileTextOutlined,
//   CheckCircleOutlined,
//   InfoCircleOutlined,
//   BookOutlined,
//   MessageOutlined,
//   ClockCircleOutlined,
//   SoundOutlined,
//   ForwardOutlined,
//   BackwardOutlined,
//   ExpandOutlined,
//   CompressOutlined,
// } from "@ant-design/icons"
// import { useParams, useNavigate } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
// import CourseNotes from "./CourseNotes"
// import CourseDiscussion from "./CourseDiscussion"
// import { generateCertificate } from "../utils/certificateGenerator"

// const { Title, Text, Paragraph } = Typography
// const { Panel } = Collapse

// const VideoPlayer = ({ windowWidth }) => {
//   const { courseId, lessonId } = useParams()
//   const navigate = useNavigate()
//   const { user } = useAuth()
//   const videoRef = useRef(null)
//   const [loading, setLoading] = useState(true)
//   const [courseData, setCourseData] = useState(null)
//   const [currentLesson, setCurrentLesson] = useState(null)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [playbackRate, setPlaybackRate] = useState(1)
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const [showControls, setShowControls] = useState(true)
//   const [showSettings, setShowSettings] = useState(false)
//   const [showNotes, setShowNotes] = useState(false)
//   const [showDiscussion, setShowDiscussion] = useState(false)
//   const [completedLessons, setCompletedLessons] = useState([])
//   const [certificateModalVisible, setCertificateModalVisible] = useState(false)
//   const [courseCompleted, setCourseCompleted] = useState(false)
//   const [activeTab, setActiveTab] = useState("content")
//   const [isMobile, setIsMobile] = useState(windowWidth < 768)
//   const controlsTimeoutRef = useRef(null)

//   // Mock data - in a real app, this would come from an API
//   useEffect(() => {
//     const fetchCourseData = async () => {
//       setLoading(true)
//       try {
//         // Simulate API call
//         await new Promise((resolve) => setTimeout(resolve, 1000))

//         // Mock course data
//         const mockCourseData = {
//           id: courseId,
//           title: "Advanced Web Development with React",
//           description: "Master modern web development techniques with React and related technologies.",
//           instructor: "Dr. Jane Smith",
//           totalLessons: 10,
//           duration: "12 hours",
//           level: "Intermediate",
//           category: "IT",
//           thumbnail: "https://via.placeholder.com/800x450",
//           lessons: [
//             {
//               id: "1",
//               title: "Introduction to Modern Web Development",
//               duration: 1800, // in seconds
//               videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//               description: "An overview of modern web development practices and tools.",
//               resources: ["Slide deck", "Code examples", "Reading list"],
//               isCompleted: false,
//             },
//             {
//               id: "2",
//               title: "React Fundamentals",
//               duration: 2400,
//               videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//               description: "Learn the core concepts of React including components, props, and state.",
//               resources: ["React documentation", "Practice exercises", "Quiz"],
//               isCompleted: false,
//             },
//             {
//               id: "3",
//               title: "State Management with Redux",
//               duration: 3000,
//               videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//               description: "Master global state management using Redux and React-Redux.",
//               resources: ["Redux documentation", "Example project", "Cheat sheet"],
//               isCompleted: false,
//             },
//             {
//               id: "4",
//               title: "Routing and Navigation",
//               duration: 1500,
//               videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//               description: "Implement client-side routing with React Router.",
//               resources: ["Router configuration examples", "Navigation patterns"],
//               isCompleted: false,
//             },
//             {
//               id: "5",
//               title: "Working with APIs",
//               duration: 2700,
//               videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//               description: "Learn how to fetch and manage data from RESTful APIs.",
//               resources: ["API documentation", "Axios examples", "Error handling patterns"],
//               isCompleted: false,
//             },
//           ],
//         }

//         setCourseData(mockCourseData)

//         // Find the current lesson
//         const lesson = mockCourseData.lessons.find((l) => l.id === lessonId)
//         setCurrentLesson(lesson)

//         // Get completed lessons from localStorage (in a real app, this would come from a database)
//         const savedCompletedLessons = JSON.parse(localStorage.getItem(`course_${courseId}_completed`) || "[]")
//         setCompletedLessons(savedCompletedLessons)

//         // Check if course is completed
//         const isCompleted = savedCompletedLessons.length === mockCourseData.lessons.length
//         setCourseCompleted(isCompleted)

//         setLoading(false)
//       } catch (error) {
//         console.error("Error fetching course data:", error)
//         message.error("Failed to load course data")
//         setLoading(false)
//       }
//     }

//     fetchCourseData()
//   }, [courseId, lessonId])

//   useEffect(() => {
//     setIsMobile(windowWidth < 768)
//   }, [windowWidth])

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   useEffect(() => {
//     const video = videoRef.current

//     if (!video) return

//     const handleTimeUpdate = () => {
//       setCurrentTime(video.currentTime)

//       // Auto-mark lesson as completed when reaching 95% of the video
//       if (video.currentTime > video.duration * 0.95 && !completedLessons.includes(lessonId)) {
//         markLessonAsCompleted()
//       }
//     }

//     const handleLoadedMetadata = () => {
//       setDuration(video.duration)
//     }

//     const handlePlay = () => {
//       setIsPlaying(true)
//     }

//     const handlePause = () => {
//       setIsPlaying(false)
//     }

//     const handleEnded = () => {
//       setIsPlaying(false)
//       markLessonAsCompleted()

//       // Check if this was the last lesson
//       if (courseData && courseData.lessons.findIndex((l) => l.id === lessonId) === courseData.lessons.length - 1) {
//         // This was the last lesson, show certificate modal
//         if (completedLessons.length + 1 === courseData.lessons.length) {
//           setCertificateModalVisible(true)
//         }
//       } else {
//         // Offer to go to next lesson
//         message.success({
//           content: "Lesson completed! Ready for the next one?",
//           duration: 5,
//           onClick: () => goToNextLesson(),
//         })
//       }
//     }

//     video.addEventListener("timeupdate", handleTimeUpdate)
//     video.addEventListener("loadedmetadata", handleLoadedMetadata)
//     video.addEventListener("play", handlePlay)
//     video.addEventListener("pause", handlePause)
//     video.addEventListener("ended", handleEnded)

//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate)
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata)
//       video.removeEventListener("play", handlePlay)
//       video.removeEventListener("pause", handlePause)
//       video.removeEventListener("ended", handleEnded)
//     }
//   }, [videoRef.current, lessonId, completedLessons, courseData])

//   // Auto-hide controls after inactivity
//   useEffect(() => {
//     const handleMouseMove = () => {
//       setShowControls(true)

//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current)
//       }

//       controlsTimeoutRef.current = setTimeout(() => {
//         if (isPlaying) {
//           setShowControls(false)
//         }
//       }, 3000)
//     }

//     document.addEventListener("mousemove", handleMouseMove)

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove)
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current)
//       }
//     }
//   }, [isPlaying])

//   const togglePlay = () => {
//     const video = videoRef.current
//     if (isPlaying) {
//       video.pause()
//     } else {
//       video.play()
//     }
//     setIsPlaying(!isPlaying)
//   }

//   const handleVolumeChange = (newVolume) => {
//     const video = videoRef.current
//     video.volume = newVolume
//     setVolume(newVolume)
//   }

//   const handlePlaybackRateChange = (rate) => {
//     const video = videoRef.current
//     video.playbackRate = rate
//     setPlaybackRate(rate)
//     setShowSettings(false)
//   }

//   const handleSeek = (value) => {
//     const video = videoRef.current
//     video.currentTime = value
//     setCurrentTime(value)
//   }

//   const toggleFullscreen = () => {
//     const videoContainer = document.getElementById("video-container")

//     if (!document.fullscreenElement) {
//       if (videoContainer.requestFullscreen) {
//         videoContainer.requestFullscreen()
//       } else if (videoContainer.webkitRequestFullscreen) {
//         videoContainer.webkitRequestFullscreen()
//       } else if (videoContainer.msRequestFullscreen) {
//         videoContainer.msRequestFullscreen()
//       }
//       setIsFullscreen(true)
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen()
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen()
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen()
//       }
//       setIsFullscreen(false)
//     }
//   }

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600)
//     const minutes = Math.floor((seconds % 3600) / 60)
//     const secs = Math.floor(seconds % 60)

//     return [
//       hours > 0 ? hours : null,
//       minutes < 10 && hours > 0 ? `0${minutes}` : minutes,
//       secs < 10 ? `0${secs}` : secs,
//     ]
//       .filter(Boolean)
//       .join(":")
//   }

//   const markLessonAsCompleted = () => {
//     if (!completedLessons.includes(lessonId)) {
//       const updatedCompletedLessons = [...completedLessons, lessonId]
//       setCompletedLessons(updatedCompletedLessons)
//       localStorage.setItem(`course_${courseId}_completed`, JSON.stringify(updatedCompletedLessons))

//       // Check if all lessons are completed
//       if (courseData && updatedCompletedLessons.length === courseData.lessons.length) {
//         setCourseCompleted(true)
//         message.success("Congratulations! You've completed the entire course!")
//       }
//     }
//   }

//   const goToNextLesson = () => {
//     if (!courseData) return

//     const currentIndex = courseData.lessons.findIndex((l) => l.id === lessonId)
//     if (currentIndex < courseData.lessons.length - 1) {
//       const nextLesson = courseData.lessons[currentIndex + 1]
//       navigate(`/video/${courseId}/${nextLesson.id}`)
//     }
//   }

//   const goToPreviousLesson = () => {
//     if (!courseData) return

//     const currentIndex = courseData.lessons.findIndex((l) => l.id === lessonId)
//     if (currentIndex > 0) {
//       const prevLesson = courseData.lessons[currentIndex - 1]
//       navigate(`/video/${courseId}/${prevLesson.id}`)
//     }
//   }

//   const handleDownloadCertificate = () => {
//     if (!user || !courseData) return

//     try {
//       generateCertificate({
//         studentName: user.name,
//         courseName: courseData.title,
//         completionDate: new Date().toLocaleDateString(),
//         instructorName: courseData.instructor,
//       })

//       message.success("Certificate downloaded successfully!")
//       setCertificateModalVisible(false)
//     } catch (error) {
//       console.error("Error generating certificate:", error)
//       message.error("Failed to generate certificate. Please try again.")
//     }
//   }

//   const skipForward = () => {
//     const video = videoRef.current
//     video.currentTime += 10
//     setCurrentTime(video.currentTime)
//   }

//   const skipBackward = () => {
//     const video = videoRef.current
//     video.currentTime -= 10
//     setCurrentTime(video.currentTime)
//   }

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
//         <Spin size="large" tip="Loading video player..." />
//       </div>
//     )
//   }

//   if (!currentLesson) {
//     return (
//       <div style={{ textAlign: "center", padding: "2rem" }}>
//         <Title level={3}>Lesson not found</Title>
//         <Button type="primary" onClick={() => navigate(`/course/${courseId}`)}>
//           Back to Course
//         </Button>
//       </div>
//     )
//   }

//   const courseProgress = courseData ? Math.round((completedLessons.length / courseData.lessons.length) * 100) : 0

//   return (
//     <Layout className="video-player-container">
//       <div className="video-section">
//         <Card
//           bordered={false}
//           className="video-card"
//           title={
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <Button type="text" icon={<BackwardOutlined />} onClick={() => navigate(`/course/${courseId}`)}>
//                 Back to Course
//               </Button>
//               <div>
//                 {courseCompleted && (
//                   <Button
//                     type="primary"
//                     icon={<DownloadOutlined />}
//                     onClick={() => setCertificateModalVisible(true)}
//                     style={{ marginRight: 16 }}
//                   >
//                     Get Certificate
//                   </Button>
//                 )}
//               </div>
//             </div>
//           }
//         >
//           <div
//             id="video-container"
//             className="video-container"
//             style={{ position: "relative", overflow: "hidden", borderRadius: 8 }}
//             onMouseEnter={() => setShowControls(true)}
//             onMouseLeave={() => isPlaying && setShowControls(false)}
//           >
//             <video
//               ref={videoRef}
//               src={currentLesson.videoUrl}
//               className="video-element"
//               onClick={togglePlay}
//               style={{ width: "100%", height: "auto", backgroundColor: "#000" }}
//               playsInline
//             />

//             {showControls && (
//               <div
//                 className="video-controls"
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
//                   padding: "20px 16px 8px",
//                   transition: "opacity 0.3s ease",
//                 }}
//               >
//                 <Progress
//                   percent={(currentTime / duration) * 100}
//                   showInfo={false}
//                   strokeColor="#1890ff"
//                   style={{ marginBottom: 8, cursor: "pointer" }}
//                   onClick={(e) => {
//                     const progressBar = e.currentTarget
//                     const rect = progressBar.getBoundingClientRect()
//                     const percent = (e.clientX - rect.left) / rect.width
//                     handleSeek(percent * duration)
//                   }}
//                 />

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                   <Space>
//                     <Button
//                       type="text"
//                       icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
//                       onClick={togglePlay}
//                       style={{ color: "#fff" }}
//                     />

//                     <Button type="text" icon={<BackwardOutlined />} onClick={skipBackward} style={{ color: "#fff" }} />

//                     <Button type="text" icon={<ForwardOutlined />} onClick={skipForward} style={{ color: "#fff" }} />

//                     <Tooltip title="Volume">
//                       <Button
//                         type="text"
//                         icon={<SoundOutlined />}
//                         onClick={() => {
//                           const newVolume = volume === 0 ? 1 : 0
//                           handleVolumeChange(newVolume)
//                         }}
//                         style={{ color: "#fff" }}
//                       />
//                     </Tooltip>

//                     <Text style={{ color: "#fff" }}>
//                       {formatTime(currentTime)} / {formatTime(duration)}
//                     </Text>
//                   </Space>

//                   <Space>
//                     <Tooltip title="Playback Speed">
//                       <Button type="text" onClick={() => setShowSettings(!showSettings)} style={{ color: "#fff" }}>
//                         {playbackRate}x
//                       </Button>
//                     </Tooltip>

//                     <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
//                       <Button
//                         type="text"
//                         icon={isFullscreen ? <CompressOutlined /> : <ExpandOutlined />}
//                         onClick={toggleFullscreen}
//                         style={{ color: "#fff" }}
//                       />
//                     </Tooltip>
//                   </Space>
//                 </div>

//                 {showSettings && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       bottom: 60,
//                       right: 16,
//                       background: "rgba(0,0,0,0.8)",
//                       padding: 8,
//                       borderRadius: 4,
//                     }}
//                   >
//                     <List
//                       size="small"
//                       dataSource={[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]}
//                       renderItem={(rate) => (
//                         <List.Item
//                           onClick={() => handlePlaybackRateChange(rate)}
//                           style={{
//                             cursor: "pointer",
//                             color: "#fff",
//                             backgroundColor: playbackRate === rate ? "rgba(24, 144, 255, 0.2)" : "transparent",
//                             padding: "4px 8px",
//                           }}
//                         >
//                           {rate}x
//                         </List.Item>
//                       )}
//                     />
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           <div style={{ marginTop: 16 }}>
//             <Title level={4}>{currentLesson.title}</Title>
//             <Space split={<Divider type="vertical" />}>
//               <Text type="secondary">
//                 <ClockCircleOutlined /> {formatTime(currentLesson.duration)}
//               </Text>
//               {completedLessons.includes(lessonId) ? (
//                 <Text type="success">
//                   <CheckCircleOutlined /> Completed
//                 </Text>
//               ) : (
//                 <Text type="secondary">
//                   <InfoCircleOutlined /> In Progress
//                 </Text>
//               )}
//             </Space>

//             <Paragraph style={{ marginTop: 16 }}>{currentLesson.description}</Paragraph>

//             <Divider />

//             <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
//               <Space>
//                 <Button icon={<BookOutlined />} onClick={() => setShowNotes(true)}>
//                   Notes
//                 </Button>
//                 <Button icon={<MessageOutlined />} onClick={() => setShowDiscussion(true)}>
//                   Discussion
//                 </Button>
//               </Space>

//               <Space>
//                 <Button
//                   disabled={courseData.lessons.findIndex((l) => l.id === lessonId) === 0}
//                   onClick={goToPreviousLesson}
//                 >
//                   Previous Lesson
//                 </Button>
//                 <Button
//                   type="primary"
//                   disabled={courseData.lessons.findIndex((l) => l.id === lessonId) === courseData.lessons.length - 1}
//                   onClick={goToNextLesson}
//                 >
//                   Next Lesson
//                 </Button>
//               </Space>
//             </div>
//           </div>
//         </Card>
//       </div>

//       {!isMobile && (
//         <div className="course-sidebar">
//           <Card bordered={false} className="course-progress-card">
//             <Title level={4}>Course Progress</Title>
//             <Progress
//               percent={courseProgress}
//               status={courseProgress === 100 ? "success" : "active"}
//               style={{ marginBottom: 16 }}
//             />

//             <Collapse defaultActiveKey={["1"]} ghost>
//               <Panel header="Course Content" key="1">
//                 <List
//                   dataSource={courseData.lessons}
//                   renderItem={(lesson, index) => (
//                     <List.Item
//                       onClick={() => navigate(`/video/${courseId}/${lesson.id}`)}
//                       style={{
//                         cursor: "pointer",
//                         backgroundColor: lesson.id === lessonId ? "rgba(24, 144, 255, 0.1)" : "transparent",
//                         padding: "8px",
//                         borderRadius: 4,
//                       }}
//                     >
//                       <List.Item.Meta
//                         avatar={
//                           completedLessons.includes(lesson.id) ? (
//                             <CheckCircleOutlined style={{ color: "#52c41a" }} />
//                           ) : (
//                             <div
//                               style={{
//                                 width: 14,
//                                 height: 14,
//                                 borderRadius: "50%",
//                                 border: "1px solid #d9d9d9",
//                                 marginTop: 4,
//                               }}
//                             />
//                           )
//                         }
//                         title={
//                           <Text strong={lesson.id === lessonId}>
//                             {index + 1}. {lesson.title}
//                           </Text>
//                         }
//                         description={formatTime(lesson.duration)}
//                       />
//                     </List.Item>
//                   )}
//                 />
//               </Panel>

//               <Panel header="Resources" key="2">
//                 {currentLesson.resources.map((resource, index) => (
//                   <div key={index} style={{ marginBottom: 8 }}>
//                     <FileTextOutlined style={{ marginRight: 8 }} />
//                     <Text>{resource}</Text>
//                   </div>
//                 ))}
//               </Panel>
//             </Collapse>
//           </Card>
//         </div>
//       )}

//       {/* Mobile course content drawer */}
//       {isMobile && (
//         <Affix style={{ position: "fixed", bottom: 20, right: 20 }}>
//           <Button
//             type="primary"
//             shape="circle"
//             icon={<BookOutlined />}
//             size="large"
//             onClick={() => setActiveTab("content")}
//           />
//         </Affix>
//       )}

//       {/* Notes Drawer */}
//       <Drawer
//         title="Your Notes"
//         placement="right"
//         onClose={() => setShowNotes(false)}
//         open={showNotes}
//         width={isMobile ? "100%" : 400}
//       >
//         <CourseNotes courseId={courseId} lessonId={lessonId} />
//       </Drawer>

//       {/* Discussion Drawer */}
//       <Drawer
//         title="Lesson Discussion"
//         placement="right"
//         onClose={() => setShowDiscussion(false)}
//         open={showDiscussion}
//         width={isMobile ? "100%" : 500}
//       >
//         <CourseDiscussion courseId={courseId} lessonId={lessonId} />
//       </Drawer>

//       {/* Certificate Modal */}
//       <Modal
//         title="Course Completion Certificate"
//         open={certificateModalVisible}
//         onCancel={() => setCertificateModalVisible(false)}
//         footer={[
//           <Button key="back" onClick={() => setCertificateModalVisible(false)}>
//             Close
//           </Button>,
//           <Button key="download" type="primary" icon={<DownloadOutlined />} onClick={handleDownloadCertificate}>
//             Download Certificate
//           </Button>,
//         ]}
//         width={600}
//       >
//         <div style={{ textAlign: "center", padding: "20px 0" }}>
//           <CheckCircleOutlined style={{ fontSize: 64, color: "#52c41a", marginBottom: 16 }} />
//           <Title level={3}>Congratulations!</Title>
//           <Paragraph>You have successfully completed the course:</Paragraph>
//           <Title level={4}>{courseData?.title}</Title>
//           <Paragraph>
//             Your certificate is ready to be downloaded. Click the button below to get your certificate.
//           </Paragraph>
//         </div>
//       </Modal>
//     </Layout>
//   )
// }

// export default VideoPlayer

// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Card, Typography, Button, Progress, Tooltip, message, Modal } from "antd"
// import {
//   PlayCircleOutlined,
//   PauseCircleOutlined,
//   FullscreenOutlined,
//   SettingOutlined,
//   DownloadOutlined,
//   TrophyOutlined,
// } from "@ant-design/icons"
// import axios from "axios"
// import "../styles/VideoPlayer.css"

// const { Title, Text } = Typography

// const VideoPlayer = ({ courseId, videoId, videoUrl, videoTitle, onComplete }) => {
//   const videoRef = useRef(null)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [playbackRate, setPlaybackRate] = useState(1)
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const [showControls, setShowControls] = useState(true)
//   const [progress, setProgress] = useState(0)
//   const [watchedSegments, setWatchedSegments] = useState([])
//   const [hasSkipped, setHasSkipped] = useState(false)
//   const [completedWatching, setCompletedWatching] = useState(false)
//   const [showCertificateModal, setShowCertificateModal] = useState(false)
//   const controlsTimeoutRef = useRef(null)
//   const lastTimeUpdateRef = useRef(0)

//   useEffect(() => {
//     const video = videoRef.current

//     if (!video) return

//     const handleLoadedMetadata = () => {
//       setDuration(video.duration)
//     }

//     const handleTimeUpdate = () => {
//       setCurrentTime(video.currentTime)
//       setProgress((video.currentTime / video.duration) * 100)

//       // Track watched segments
//       const currentSegment = Math.floor(video.currentTime)
//       if (currentSegment > lastTimeUpdateRef.current + 1) {
//         // User skipped forward
//         setHasSkipped(true)
//       }

//       lastTimeUpdateRef.current = currentSegment

//       if (!watchedSegments.includes(currentSegment)) {
//         setWatchedSegments((prev) => [...prev, currentSegment])
//       }

//       // Check if video is complete (watched at least 95% without skipping)
//       const percentWatched = (watchedSegments.length / Math.floor(video.duration)) * 100
//       if (percentWatched >= 95 && !hasSkipped) {
//         setCompletedWatching(true)
//         if (onComplete) {
//           onComplete()
//         }
//       }
//     }

//     const handleEnded = () => {
//       setIsPlaying(false)
//       if (!hasSkipped) {
//         setCompletedWatching(true)
//         if (onComplete) {
//           onComplete()
//         }
//       }
//     }

//     video.addEventListener("loadedmetadata", handleLoadedMetadata)
//     video.addEventListener("timeupdate", handleTimeUpdate)
//     video.addEventListener("ended", handleEnded)

//     return () => {
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata)
//       video.removeEventListener("timeupdate", handleTimeUpdate)
//       video.removeEventListener("ended", handleEnded)
//     }
//   }, [watchedSegments, hasSkipped, onComplete])

//   useEffect(() => {
//     // Load progress from server
//     const loadProgress = async () => {
//       try {
//         const response = await axios.get(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/progress/${courseId}/${videoId}`)

//         if (response.data.progress) {
//           setProgress(response.data.progress)
//           setWatchedSegments(response.data.watchedSegments || [])
//           setHasSkipped(response.data.hasSkipped || false)
//           setCompletedWatching(response.data.completed || false)

//           // Set video time to saved progress
//           if (videoRef.current) {
//             videoRef.current.currentTime = (response.data.progress / 100) * videoRef.current.duration
//           }
//         }
//       } catch (error) {
//         console.error("Error loading progress:", error)
//       }
//     }

//     loadProgress()
//   }, [courseId, videoId])

//   useEffect(() => {
//     // Save progress to server
//     const saveProgress = async () => {
//       try {
//         await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/progress/${courseId}/${videoId}`, {
//           progress,
//           watchedSegments,
//           hasSkipped,
//           completed: completedWatching,
//         })
//       } catch (error) {
//         console.error("Error saving progress:", error)
//       }
//     }

//     // Save progress every 10 seconds
//     const intervalId = setInterval(saveProgress, 10000)

//     return () => {
//       clearInterval(intervalId)
//       saveProgress() // Save on unmount
//     }
//   }, [courseId, videoId, progress, watchedSegments, hasSkipped, completedWatching])

//   const togglePlay = () => {
//     const video = videoRef.current

//     if (isPlaying) {
//       video.pause()
//     } else {
//       video.play()
//     }

//     setIsPlaying(!isPlaying)
//     showControlsTemporarily()
//   }

//   const handleVolumeChange = (e) => {
//     const newVolume = Number.parseFloat(e.target.value)
//     setVolume(newVolume)
//     videoRef.current.volume = newVolume
//     showControlsTemporarily()
//   }

//   const handlePlaybackRateChange = (rate) => {
//     setPlaybackRate(rate)
//     videoRef.current.playbackRate = rate
//     showControlsTemporarily()
//   }

//   const handleProgressChange = (e) => {
//     const newTime = (Number.parseFloat(e.target.value) / 100) * duration

//     // Check if user is skipping
//     if (Math.abs(newTime - currentTime) > 5) {
//       setHasSkipped(true)
//     }

//     setCurrentTime(newTime)
//     videoRef.current.currentTime = newTime
//     showControlsTemporarily()
//   }

//   const toggleFullscreen = () => {
//     const videoContainer = document.querySelector(".video-container")

//     if (!isFullscreen) {
//       if (videoContainer.requestFullscreen) {
//         videoContainer.requestFullscreen()
//       } else if (videoContainer.webkitRequestFullscreen) {
//         videoContainer.webkitRequestFullscreen()
//       } else if (videoContainer.msRequestFullscreen) {
//         videoContainer.msRequestFullscreen()
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen()
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen()
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen()
//       }
//     }

//     setIsFullscreen(!isFullscreen)
//     showControlsTemporarily()
//   }

//   const showControlsTemporarily = () => {
//     setShowControls(true)

//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current)
//     }

//     controlsTimeoutRef.current = setTimeout(() => {
//       if (isPlaying) {
//         setShowControls(false)
//       }
//     }, 3000)
//   }

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = Math.floor(seconds % 60)
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
//   }

//   const handleMouseMove = () => {
//     showControlsTemporarily()
//   }

//   const handleDownloadCertificate = () => {
//     if (!completedWatching || hasSkipped) {
//       message.warning("You must watch the entire video without skipping to download the certificate")
//       return
//     }

//     setShowCertificateModal(true)
//   }

//   const handleGenerateCertificate = async () => {
//     try {
//       const response = await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/certificates/generate`, {
//         courseId,
//         videoId,
//       })

//       // Create a download link for the certificate
//       const link = document.createElement("a")
//       link.href = response.data.certificateUrl
//       link.download = `${videoTitle.replace(/\s+/g, "_")}_Certificate.pdf`
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)

//       setShowCertificateModal(false)
//       message.success("Certificate downloaded successfully")
//     } catch (error) {
//       console.error("Error generating certificate:", error)
//       message.error("Failed to generate certificate")
//     }
//   }

//   return (
//     <Card className="video-player-card">
//       <div
//         className="video-container"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={() => isPlaying && setShowControls(false)}
//       >
//         <video ref={videoRef} src={videoUrl} className="video-element" onClick={togglePlay} />

//         {showControls && (
//           <div className="video-controls">
//             <div className="progress-container">
//               <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={progress}
//                 onChange={handleProgressChange}
//                 className="progress-bar"
//               />
//               <div className="time-display">
//                 <span>{formatTime(currentTime)}</span>
//                 <span> / </span>
//                 <span>{formatTime(duration)}</span>
//               </div>
//             </div>

//             <div className="controls-row">
//               <div className="left-controls">
//                 <Button
//                   type="text"
//                   icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
//                   onClick={togglePlay}
//                   className="control-button"
//                 />

//                 <div className="volume-control">
//                   <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.1"
//                     value={volume}
//                     onChange={handleVolumeChange}
//                     className="volume-slider"
//                   />
//                 </div>
//               </div>

//               <div className="right-controls">
//                 <Tooltip title="Playback Speed">
//                   <div className="playback-rate-control">
//                     <Button type="text" icon={<SettingOutlined />} className="control-button" />
//                     <div className="playback-rate-options">
//                       {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
//                         <Button
//                           key={rate}
//                           type={playbackRate === rate ? "primary" : "text"}
//                           size="small"
//                           onClick={() => handlePlaybackRateChange(rate)}
//                         >
//                           {rate}x
//                         </Button>
//                       ))}
//                     </div>
//                   </div>
//                 </Tooltip>

//                 <Button
//                   type="text"
//                   icon={<FullscreenOutlined />}
//                   onClick={toggleFullscreen}
//                   className="control-button"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="video-info">
//         <Title level={4}>{videoTitle}</Title>

//         <div className="video-progress-info">
//           <Progress
//             percent={Math.round(progress)}
//             status={hasSkipped ? "exception" : "active"}
//             strokeColor={completedWatching ? "#52c41a" : "#1890ff"}
//           />

//           <div className="video-actions">
//             <Tooltip
//               title={
//                 completedWatching && !hasSkipped
//                   ? "Download Certificate"
//                   : "Watch the entire video without skipping to unlock certificate"
//               }
//             >
//               <Button
//                 type="primary"
//                 icon={<DownloadOutlined />}
//                 onClick={handleDownloadCertificate}
//                 disabled={!completedWatching || hasSkipped}
//               >
//                 Certificate
//               </Button>
//             </Tooltip>

//             {hasSkipped && (
//               <Text type="danger" className="skipped-warning">
//                 You have skipped parts of the video. Watch the entire video without skipping to earn a certificate.
//               </Text>
//             )}
//           </div>
//         </div>
//       </div>

//       <Modal
//         title={
//           <div>
//             <TrophyOutlined /> Course Completion Certificate
//           </div>
//         }
//         open={showCertificateModal}
//         onOk={handleGenerateCertificate}
//         onCancel={() => setShowCertificateModal(false)}
//         okText="Download Certificate"
//         cancelText="Cancel"
//       >
//         <p>Congratulations on completing the video "{videoTitle}"!</p>
//         <p>
//           You've watched the entire content without skipping and are eligible to receive a certificate of completion.
//         </p>
//         <p>Click "Download Certificate" to generate and download your personalized certificate.</p>
//       </Modal>
//     </Card>
//   )
// }

// export default VideoPlayer



"use client"

import { useState, useRef, useEffect } from "react"
import { Card, Button, Progress, Tooltip, message, Alert, Modal, Typography, Space, Row, Col } from "antd"
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  FullscreenOutlined,
  SettingOutlined,
  DownloadOutlined,
  FileTextOutlined,
  MessageOutlined,
  TrophyOutlined,
  SoundOutlined,
} from "@ant-design/icons"
import "../styles/VideoPlayer.css"

const { Title, Text } = Typography

const VideoPlayer = ({ courseData, onComplete, windowWidth }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showControls, setShowControls] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [showDiscussion, setShowDiscussion] = useState(false)
  const [watchedSegments, setWatchedSegments] = useState([])
  const [hasSkipped, setHasSkipped] = useState(false)
  const [completedWatching, setCompletedWatching] = useState(false)
  const [showCertificateModal, setShowCertificateModal] = useState(false)

  const isMobile = windowWidth < 768

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      video.volume = volume
      video.addEventListener("loadedmetadata", () => {
        setDuration(video.duration)
      })

      video.addEventListener("timeupdate", handleTimeUpdate)
      video.addEventListener("ended", handleVideoEnded)

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate)
        video.removeEventListener("ended", handleVideoEnded)
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume
    }
  }, [volume])

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (video) {
      const currentVideoTime = video.currentTime
      setCurrentTime(currentVideoTime)

      // Track watched segments
      const lastSegment = watchedSegments.length > 0 ? watchedSegments[watchedSegments.length - 1] : null

      if (!lastSegment || currentVideoTime < lastSegment.start || currentVideoTime > lastSegment.end + 5) {
        // User has skipped part of the video
        if (lastSegment && currentVideoTime > lastSegment.end + 5) {
          setHasSkipped(true)
          message.warning("Skipping parts of the video will prevent certificate download")
        }

        setWatchedSegments([...watchedSegments, { start: currentVideoTime, end: currentVideoTime }])
      } else {
        // Update the end time of the current segment
        const updatedSegments = [...watchedSegments]
        updatedSegments[updatedSegments.length - 1].end = currentVideoTime
        setWatchedSegments(updatedSegments)
      }

      // Check if user has watched enough of the video
      const watchedPercentage = calculateWatchedPercentage()
      if (watchedPercentage > 95 && !hasSkipped) {
        setCompletedWatching(true)
      }
    }
  }

  const calculateWatchedPercentage = () => {
    if (duration === 0) return 0

    // Calculate total watched time from segments
    let totalWatchedTime = 0
    watchedSegments.forEach((segment) => {
      totalWatchedTime += segment.end - segment.start
    })

    return (totalWatchedTime / duration) * 100
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    if (!hasSkipped) {
      setCompletedWatching(true)
      message.success("You've completed this lesson! Certificate is now available.")
      if (onComplete) onComplete()
    } else {
      message.warning("You skipped parts of the video. Please watch the entire video to earn your certificate.")
    }
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (video) {
      const seekTime = (e.target.value / 100) * duration
      video.currentTime = seekTime
      setCurrentTime(seekTime)

      // Check if seeking is a skip
      const lastSegment = watchedSegments.length > 0 ? watchedSegments[watchedSegments.length - 1] : null
      if (lastSegment && Math.abs(seekTime - lastSegment.end) > 5) {
        setHasSkipped(true)
        message.warning("Skipping parts of the video will prevent certificate download")
      }
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handleFullscreen = () => {
    const videoContainer = document.querySelector(".video-container")
    if (videoContainer) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoContainer.requestFullscreen()
      }
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const handleDownloadCertificate = () => {
    if (!completedWatching) {
      message.error("You need to watch the entire video without skipping to download the certificate")
      return
    }

    setShowCertificateModal(true)
  }

  return (
    <div className="video-player-wrapper">
      <Card
        title={<Title level={4}>{courseData?.title || "Course Lesson"}</Title>}
        extra={
          <Space>
            <Tooltip title="Course Notes">
              <Button
                icon={<FileTextOutlined />}
                onClick={() => setShowNotes(!showNotes)}
                type={showNotes ? "primary" : "default"}
              />
            </Tooltip>
            <Tooltip title="Discussion">
              <Button
                icon={<MessageOutlined />}
                onClick={() => setShowDiscussion(!showDiscussion)}
                type={showDiscussion ? "primary" : "default"}
              />
            </Tooltip>
            <Tooltip title={completedWatching ? "Download Certificate" : "Watch the entire video to unlock"}>
              <Button
                icon={<TrophyOutlined />}
                onClick={handleDownloadCertificate}
                disabled={!completedWatching}
                type="primary"
              />
            </Tooltip>
          </Space>
        }
        className="video-card"
      >
        <div
          className="video-container"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            src={courseData?.videoUrl || "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"}
            className="video-element"
            poster={courseData?.thumbnail || "/placeholder.svg?height=400&width=600"}
          />

          <div className={`video-controls ${showControls ? "show" : ""}`}>
            <div className="progress-container">
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="progress-bar"
              />
            </div>

            <div className="controls-row">
              <div className="left-controls">
                <Button
                  type="text"
                  icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                  onClick={togglePlay}
                  className="control-button"
                />
                <div className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="right-controls">
                <Button type="text" icon={<SettingOutlined />} className="control-button" />
                <Button
                  type="text"
                  icon={<FullscreenOutlined />}
                  onClick={handleFullscreen}
                  className="control-button"
                />
                {/* Scholly-style vertical volume slider: blue track, white handle, speaker at bottom */}
                <div className="volume-slider-wrapper">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider-vertical"
                    style={{ "--volume-percent": `${volume * 100}%` }}
                  />
                  <SoundOutlined className="volume-slider-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video-info">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={16}>
              <Progress
                percent={Math.round((currentTime / duration) * 100) || 0}
                status="active"
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
              />
            </Col>
            <Col xs={24} md={8} style={{ textAlign: "right" }}>
              {hasSkipped ? (
                <Alert
                  message="Video skipping detected"
                  description="Watch the entire video without skipping to earn your certificate"
                  type="warning"
                  showIcon
                />
              ) : completedWatching ? (
                <Alert
                  message="Lesson completed!"
                  description="You can now download your certificate"
                  type="success"
                  showIcon
                />
              ) : null}
            </Col>
          </Row>
        </div>
      </Card>

      <Modal
        title="Certificate Download"
        open={showCertificateModal}
        onCancel={() => setShowCertificateModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setShowCertificateModal(false)}>
            Cancel
          </Button>,
          <Button
            key="download"
            type="primary"
            icon={<DownloadOutlined />}
            onClick={() => {
              message.success("Certificate downloaded successfully!")
              setShowCertificateModal(false)
            }}
          >
            Download Certificate
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <TrophyOutlined style={{ fontSize: 48, color: "#faad14", marginBottom: 16 }} />
          <Title level={4}>Congratulations!</Title>
          <Text>
            You have successfully completed the course "{courseData?.title || "Course Lesson"}". Your certificate is
            ready to download.
          </Text>
        </div>
      </Modal>
    </div>
  )
}

export default VideoPlayer


