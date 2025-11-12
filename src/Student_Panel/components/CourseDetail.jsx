// "use client"

// import { useState, useEffect } from "react"
// import {
//   Card,
//   Typography,
//   Button,
//   Space,
//   Tag,
//   Divider,
//   List,
//   Progress,
//   Tabs,
//   Rate,
//   Avatar,
//   Collapse,
//   Spin,
//   message,
// } from "antd"
// import {
//   PlayCircleOutlined,
//   ClockCircleOutlined,
//   BookOutlined,
//   UserOutlined,
//   CheckCircleOutlined,
//   LockOutlined,
//   DownloadOutlined,
//   StarOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons"
// import { useParams, useNavigate } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"

// const { Title, Text, Paragraph } = Typography
// const { TabPane } = Tabs
// const { Panel } = Collapse

// const CourseDetail = ({ windowWidth }) => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const { user } = useAuth()
//   const [loading, setLoading] = useState(true)
//   const [courseData, setCourseData] = useState(null)
//   const [completedLessons, setCompletedLessons] = useState([])
//   const [enrolled, setEnrolled] = useState(false)
//   const [activeTab, setActiveTab] = useState("1")
//   const isMobile = windowWidth < 768

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       setLoading(true)
//       try {
//         // Simulate API call
//         await new Promise((resolve) => setTimeout(resolve, 1000))

//         // Mock course data
//         const mockCourseData = {
//           id: id,
//           title: "Advanced Web Development with React",
//           description:
//             "Master modern web development techniques with React and related technologies. This comprehensive course covers everything from React fundamentals to advanced state management, routing, and working with APIs.",
//           longDescription:
//             "This comprehensive course is designed to take you from the basics of React to building complex, production-ready applications. You'll learn how to create reusable components, manage state effectively, implement routing for single-page applications, and integrate with backend services. By the end of this course, you'll have the skills to build modern, responsive web applications using the latest React best practices.",
//           instructor: {
//             name: "Dr. Jane Smith",
//             bio: "Senior Web Developer with 10+ years of experience in building enterprise applications. PhD in Computer Science.",
//             avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//           },
//           totalLessons: 10,
//           completedLessons: 0,
//           duration: "12 hours",
//           level: "Intermediate",
//           category: "IT",
//           tags: ["React", "JavaScript", "Web Development", "Frontend"],
//           rating: 4.8,
//           reviews: 124,
//           students: 1543,
//           price: 49.99,
//           discountPrice: 39.99,
//           thumbnail: "https://via.placeholder.com/800x450",
//           lastUpdated: "2023-10-15",
//           requirements: [
//             "Basic knowledge of HTML, CSS, and JavaScript",
//             "Understanding of ES6+ features",
//             "Familiarity with web development concepts",
//           ],
//           whatYouWillLearn: [
//             "Build robust applications with React and related libraries",
//             "Implement state management using Redux and Context API",
//             "Create responsive layouts with modern CSS techniques",
//             "Optimize React applications for performance",
//             "Deploy React applications to production environments",
//           ],
//           lessons: [
//             {
//               id: "1",
//               title: "Introduction to Modern Web Development",
//               duration: 1800, // in seconds
//               description: "An overview of modern web development practices and tools.",
//               isPreview: true,
//             },
//             {
//               id: "2",
//               title: "React Fundamentals",
//               duration: 2400,
//               description: "Learn the core concepts of React including components, props, and state.",
//               isPreview: false,
//             },
//             {
//               id: "3",
//               title: "State Management with Redux",
//               duration: 3000,
//               description: "Master global state management using Redux and React-Redux.",
//               isPreview: false,
//             },
//             {
//               id: "4",
//               title: "Routing and Navigation",
//               duration: 1500,
//               description: "Implement client-side routing with React Router.",
//               isPreview: false,
//             },
//             {
//               id: "5",
//               title: "Working with APIs",
//               duration: 2700,
//               description: "Learn how to fetch and manage data from RESTful APIs.",
//               isPreview: false,
//             },
//           ],
//           reviews: [
//             {
//               id: 1,
//               user: {
//                 name: "Michael Johnson",
//                 avatar: "https://randomuser.me/api/portraits/men/42.jpg",
//               },
//               rating: 5,
//               date: "2023-09-15",
//               comment:
//                 "Excellent course! The instructor explains complex concepts in a very understandable way. I've learned a lot and feel confident in building React applications now.",
//             },
//             {
//               id: 2,
//               user: {
//                 name: "Emily Chen",
//                 avatar: "https://randomuser.me/api/portraits/women/33.jpg",
//               },
//               rating: 4,
//               date: "2023-08-22",
//               comment:
//                 "Very comprehensive course with good examples. I would have liked more exercises, but overall it's a great learning resource.",
//             },
//           ],
//         }

//         setCourseData(mockCourseData)

//         // Get completed lessons from localStorage
//         const savedCompletedLessons = JSON.parse(localStorage.getItem(`course_${id}_completed`) || "[]")
//         setCompletedLessons(savedCompletedLessons)

//         // Check if user is enrolled
//         const enrolledCourses = JSON.parse(localStorage.getItem(`user_${user?.id}_enrolled_courses`) || "[]")
//         setEnrolled(enrolledCourses.includes(id))

//         setLoading(false)
//       } catch (error) {
//         console.error("Error fetching course data:", error)
//         message.error("Failed to load course data")
//         setLoading(false)
//       }
//     }

//     fetchCourseData()
//   }, [id, user])

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

//   const handleEnroll = () => {
//     if (!user) {
//       message.warning("Please log in to enroll in this course")
//       navigate("/login", { state: { from: `/course/${id}` } })
//       return
//     }

//     // In a real app, this would be an API call
//     try {
//       // Get current enrolled courses
//       const enrolledCourses = JSON.parse(localStorage.getItem(`user_${user.id}_enrolled_courses`) || "[]")

//       // Add this course if not already enrolled
//       if (!enrolledCourses.includes(id)) {
//         enrolledCourses.push(id)
//         localStorage.setItem(`user_${user.id}_enrolled_courses`, JSON.stringify(enrolledCourses))
//       }

//       setEnrolled(true)
//       message.success("Successfully enrolled in the course!")
//     } catch (error) {
//       console.error("Error enrolling in course:", error)
//       message.error("Failed to enroll in the course. Please try again.")
//     }
//   }

//   const startCourse = () => {
//     // Navigate to the first lesson
//     if (courseData && courseData.lessons.length > 0) {
//       navigate(`/video/${id}/${courseData.lessons[0].id}`)
//     }
//   }

//   const continueCourse = () => {
//     // Find the first incomplete lesson
//     if (courseData && courseData.lessons.length > 0) {
//       const nextLessonIndex = courseData.lessons.findIndex((lesson) => !completedLessons.includes(lesson.id))

//       if (nextLessonIndex !== -1) {
//         navigate(`/video/${id}/${courseData.lessons[nextLessonIndex].id}`)
//       } else {
//         // All lessons completed, go to the first one
//         navigate(`/video/${id}/${courseData.lessons[0].id}`)
//       }
//     }
//   }

//   const watchPreview = (lessonId) => {
//     navigate(`/video/${id}/${lessonId}`)
//   }

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
//         <Spin size="large" tip="Loading course details..." />
//       </div>
//     )
//   }

//   if (!courseData) {
//     return (
//       <div style={{ textAlign: "center", padding: "2rem" }}>
//         <Title level={3}>Course not found</Title>
//         <Button type="primary" onClick={() => navigate("/courses")}>
//           Back to Courses
//         </Button>
//       </div>
//     )
//   }

//   const courseProgress = Math.round((completedLessons.length / courseData.lessons.length) * 100)
//   const totalDuration = courseData.lessons.reduce((total, lesson) => total + lesson.duration, 0)

//   return (
//     <div className="course-detail-container" style={{ padding: "16px" }}>
//       <div
//         className="course-header"
//         style={{
//           background: "linear-gradient(to right, #1a365d, #2a4365)",
//           padding: "32px 16px",
//           borderRadius: "8px",
//           marginBottom: "24px",
//           color: "white",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",
//             gap: "24px",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           <div style={{ flex: "0 0 40%", maxWidth: isMobile ? "100%" : "40%" }}>
//             <img
//               src={courseData.thumbnail || "/placeholder.svg"}
//               alt={courseData.title}
//               style={{
//                 width: "100%",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//               }}
//             />
//           </div>

//           <div style={{ flex: "1 1 auto" }}>
//             <Space direction="vertical" size="middle" style={{ width: "100%" }}>
//               <div>
//                 <Space size="small" wrap>
//                   {courseData.tags.map((tag) => (
//                     <Tag key={tag} color="blue">
//                       {tag}
//                     </Tag>
//                   ))}
//                 </Space>
//                 <Title level={isMobile ? 3 : 2} style={{ color: "white", marginTop: "8px" }}>
//                   {courseData.title}
//                 </Title>
//               </div>

//               <Paragraph style={{ color: "rgba(255, 255, 255, 0.85)" }}>{courseData.description}</Paragraph>

//               <Space wrap>
//                 <Space>
//                   <Rate disabled defaultValue={courseData.rating} style={{ fontSize: "16px" }} />
//                   <Text style={{ color: "white" }}>
//                     {courseData.rating} ({courseData.reviews} reviews)
//                   </Text>
//                 </Space>

//                 <Text style={{ color: "white" }}>
//                   <UserOutlined /> {courseData.students} students
//                 </Text>

//                 <Text style={{ color: "white" }}>
//                   <ClockCircleOutlined /> {courseData.duration}
//                 </Text>

//                 <Text style={{ color: "white" }}>
//                   <BookOutlined /> {courseData.level}
//                 </Text>
//               </Space>

//               <Space>
//                 <Avatar src={courseData.instructor.avatar} />
//                 <Text style={{ color: "white" }}>Instructor: {courseData.instructor.name}</Text>
//               </Space>

//               {enrolled && (
//                 <div>
//                   <Progress
//                     percent={courseProgress}
//                     status={courseProgress === 100 ? "success" : "active"}
//                     style={{ marginBottom: "16px" }}
//                   />
//                   <Space>
//                     <Button type="primary" size="large" icon={<PlayCircleOutlined />} onClick={continueCourse}>
//                       {completedLessons.length > 0 ? "Continue Learning" : "Start Learning"}
//                     </Button>

//                     {courseProgress === 100 && (
//                       <Button
//                         type="default"
//                         size="large"
//                         icon={<DownloadOutlined />}
//                         onClick={() => navigate(`/certificate?courseId=${id}`)}
//                       >
//                         Get Certificate
//                       </Button>
//                     )}
//                   </Space>
//                 </div>
//               )}

//               {!enrolled && (
//                 <div>
//                   <Space direction="vertical" size="small" style={{ width: "100%" }}>
//                     <div>
//                       <Text delete style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "18px" }}>
//                         ${courseData.price}
//                       </Text>
//                       <Text style={{ color: "white", fontSize: "24px", fontWeight: "bold", marginLeft: "8px" }}>
//                         ${courseData.discountPrice}
//                       </Text>
//                       <Tag color="green" style={{ marginLeft: "8px" }}>
//                         {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% OFF
//                       </Tag>
//                     </div>

//                     <Button type="primary" size="large" block={isMobile} onClick={handleEnroll}>
//                       Enroll Now
//                     </Button>
//                   </Space>
//                 </div>
//               )}
//             </Space>
//           </div>
//         </div>
//       </div>

//       <div
//         className="course-content"
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           gap: "24px",
//         }}
//       >
//         <div style={{ flex: "1 1 auto" }}>
//           <Tabs activeKey={activeTab} onChange={setActiveTab}>
//             <TabPane tab="About" key="1">
//               <Card bordered={false}>
//                 <Title level={4}>What You'll Learn</Title>
//                 <List
//                   dataSource={courseData.whatYouWillLearn}
//                   renderItem={(item) => (
//                     <List.Item>
//                       <Space>
//                         <CheckCircleOutlined style={{ color: "#52c41a" }} />
//                         <Text>{item}</Text>
//                       </Space>
//                     </List.Item>
//                   )}
//                 />

//                 <Divider />

//                 <Title level={4}>Course Description</Title>
//                 <Paragraph>{courseData.longDescription}</Paragraph>

//                 <Divider />

//                 <Title level={4}>Requirements</Title>
//                 <List
//                   dataSource={courseData.requirements}
//                   renderItem={(item) => (
//                     <List.Item>
//                       <Space>
//                         <div style={{ color: "#1890ff" }}>•</div>
//                         <Text>{item}</Text>
//                       </Space>
//                     </List.Item>
//                   )}
//                 />

//                 <Divider />

//                 <Title level={4}>Instructor</Title>
//                 <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
//                   <Avatar src={courseData.instructor.avatar} size={64} />
//                   <div>
//                     <Title level={5} style={{ marginTop: 0 }}>
//                       {courseData.instructor.name}
//                     </Title>
//                     <Paragraph>{courseData.instructor.bio}</Paragraph>
//                   </div>
//                 </div>
//               </Card>
//             </TabPane>

//             <TabPane tab="Curriculum" key="2">
//               <Card bordered={false}>
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
//                   <Text>{courseData.lessons.length} Lessons</Text>
//                   <Text>Total Duration: {formatTime(totalDuration)}</Text>
//                 </div>

//                 <Collapse defaultActiveKey={["1"]}>
//                   <Panel
//                     header={
//                       <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
//                         <Text strong>Course Content</Text>
//                         <Text>
//                           {courseData.lessons.length} Lessons • {formatTime(totalDuration)}
//                         </Text>
//                       </div>
//                     }
//                     key="1"
//                   >
//                     <List
//                       dataSource={courseData.lessons}
//                       renderItem={(lesson, index) => (
//                         <List.Item
//                           actions={[
//                             <Text key="duration">{formatTime(lesson.duration)}</Text>,
//                             lesson.isPreview || enrolled ? (
//                               <Button
//                                 key="watch"
//                                 type="link"
//                                 icon={<PlayCircleOutlined />}
//                                 onClick={() => watchPreview(lesson.id)}
//                               >
//                                 {lesson.isPreview ? "Preview" : "Watch"}
//                               </Button>
//                             ) : (
//                               <LockOutlined key="lock" />
//                             ),
//                           ]}
//                         >
//                           <List.Item.Meta
//                             avatar={
//                               completedLessons.includes(lesson.id) ? (
//                                 <CheckCircleOutlined style={{ color: "#52c41a" }} />
//                               ) : (
//                                 <Text>{index + 1}.</Text>
//                               )
//                             }
//                             title={lesson.title}
//                             description={lesson.description}
//                           />
//                         </List.Item>
//                       )}
//                     />
//                   </Panel>
//                 </Collapse>
//               </Card>
//             </TabPane>

//             <TabPane tab="Reviews" key="3">
//               <Card bordered={false}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     marginBottom: "24px",
//                   }}
//                 >
//                   <div>
//                     <Title level={4} style={{ marginBottom: "8px" }}>
//                       Student Reviews
//                     </Title>
//                     <Space align="center">
//                       <Text style={{ fontSize: "24px", fontWeight: "bold" }}>{courseData.rating}</Text>
//                       <Rate disabled defaultValue={courseData.rating} />
//                       <Text>({courseData.reviews} reviews)</Text>
//                     </Space>
//                   </div>

//                   {enrolled && <Button icon={<StarOutlined />}>Write a Review</Button>}
//                 </div>

//                 <List
//                   itemLayout="vertical"
//                   dataSource={courseData.reviews}
//                   renderItem={(review) => (
//                     <List.Item>
//                       <div style={{ display: "flex", gap: "16px" }}>
//                         <Avatar src={review.user.avatar} />
//                         <div style={{ flex: 1 }}>
//                           <div style={{ display: "flex", justifyContent: "space-between" }}>
//                             <Text strong>{review.user.name}</Text>
//                             <Text type="secondary">{review.date}</Text>
//                           </div>
//                           <Rate disabled defaultValue={review.rating} style={{ fontSize: "14px" }} />
//                           <Paragraph style={{ marginTop: "8px" }}>{review.comment}</Paragraph>
//                         </div>
//                       </div>
//                     </List.Item>
//                   )}
//                 />
//               </Card>
//             </TabPane>
//           </Tabs>
//         </div>

//         {!isMobile && (
//           <div style={{ width: "300px", flexShrink: 0 }}>
//             <div style={{ position: "sticky", top: "16px" }}>
//               <Card bordered={false}>
//                 <Title level={4}>Course Content</Title>
//                 <List
//                   size="small"
//                   dataSource={[
//                     { icon: <BookOutlined />, text: `${courseData.lessons.length} lessons` },
//                     { icon: <ClockCircleOutlined />, text: courseData.duration },
//                     { icon: <FileTextOutlined />, text: "Downloadable resources" },
//                     { icon: <DownloadOutlined />, text: "Certificate of completion" },
//                   ]}
//                   renderItem={(item) => (
//                     <List.Item>
//                       <Space>
//                         {item.icon}
//                         <Text>{item.text}</Text>
//                       </Space>
//                     </List.Item>
//                   )}
//                 />

//                 {enrolled ? (
//                   <Button
//                     type="primary"
//                     icon={<PlayCircleOutlined />}
//                     block
//                     style={{ marginTop: "16px" }}
//                     onClick={continueCourse}
//                   >
//                     {completedLessons.length > 0 ? "Continue Learning" : "Start Learning"}
//                   </Button>
//                 ) : (
//                   <Button type="primary" block style={{ marginTop: "16px" }} onClick={handleEnroll}>
//                     Enroll Now
//                   </Button>
//                 )}
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CourseDetail

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Card,
//   Typography,
//   Button,
//   Space,
//   Tag,
//   Divider,
//   List,
//   Progress,
//   Tabs,
//   Rate,
//   Avatar,
//   Collapse,
//   Spin,
//   message,
// } from "antd"
// import {
//   PlayCircleOutlined,
//   ClockCircleOutlined,
//   BookOutlined,
//   UserOutlined,
//   CheckCircleOutlined,
//   LockOutlined,
//   DownloadOutlined,
//   StarOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons"
// import { useParams, useNavigate } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"

// const { Title, Text, Paragraph } = Typography
// const { TabPane } = Tabs
// const { Panel } = Collapse

// const CourseDetail = ({ windowWidth }) => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const { user } = useAuth()
//   const [loading, setLoading] = useState(true)
//   const [courseData, setCourseData] = useState(null)
//   const [completedLessons, setCompletedLessons] = useState([])
//   const [enrolled, setEnrolled] = useState(false)
//   const [activeTab, setActiveTab] = useState("1")
//   const isMobile = windowWidth < 768

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       setLoading(true)
//       try {
//         // Simulate API call
//         await new Promise((resolve) => setTimeout(resolve, 1000))

//         // Mock course data
//         const mockCourseData = {
//           id: id,
//           title: "Advanced Web Development with React",
//           description:
//             "Master modern web development techniques with React and related technologies. This comprehensive course covers everything from React fundamentals to advanced state management, routing, and working with APIs.",
//           longDescription:
//             "This comprehensive course is designed to take you from the basics of React to building complex, production-ready applications. You'll learn how to create reusable components, manage state effectively, implement routing for single-page applications, and integrate with backend services. By the end of this course, you'll have the skills to build modern, responsive web applications using the latest React best practices.",
//           instructor: {
//             name: "Dr. Jane Smith",
//             bio: "Senior Web Developer with 10+ years of experience in building enterprise applications. PhD in Computer Science.",
//             avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//           },
//           totalLessons: 10,
//           completedLessons: 0,
//           duration: "12 hours",
//           level: "Intermediate",
//           category: "IT",
//           tags: ["React", "JavaScript", "Web Development", "Frontend"],
//           rating: 4.8,
//           reviews: 124,
//           students: 1543,
//           price: 49.99,
//           discountPrice: 39.99,
//           thumbnail: "https://via.placeholder.com/800x450",
//           lastUpdated: "2023-10-15",
//           requirements: [
//             "Basic knowledge of HTML, CSS, and JavaScript",
//             "Understanding of ES6+ features",
//             "Familiarity with web development concepts",
//           ],
//           whatYouWillLearn: [
//             "Build robust applications with React and related libraries",
//             "Implement state management using Redux and Context API",
//             "Create responsive layouts with modern CSS techniques",
//             "Optimize React applications for performance",
//             "Deploy React applications to production environments",
//           ],
//           lessons: [
//             {
//               id: "1",
//               title: "Introduction to Modern Web Development",
//               duration: 1800, // in seconds
//               description: "An overview of modern web development practices and tools.",
//               isPreview: true,
//             },
//             {
//               id: "2",
//               title: "React Fundamentals",
//               duration: 2400,
//               description: "Learn the core concepts of React including components, props, and state.",
//               isPreview: false,
//             },
//             {
//               id: "3",
//               title: "State Management with Redux",
//               duration: 3000,
//               description: "Master global state management using Redux and React-Redux.",
//               isPreview: false,
//             },
//             {
//               id: "4",
//               title: "Routing and Navigation",
//               duration: 1500,
//               description: "Implement client-side routing with React Router.",
//               isPreview: false,
//             },
//             {
//               id: "5",
//               title: "Working with APIs",
//               duration: 2700,
//               description: "Learn how to fetch and manage data from RESTful APIs.",
//               isPreview: false,
//             },
//           ],
//           reviews: [
//             {
//               id: 1,
//               user: {
//                 name: "Michael Johnson",
//                 avatar: "https://randomuser.me/api/portraits/men/42.jpg",
//               },
//               rating: 5,
//               date: "2023-09-15",
//               comment:
//                 "Excellent course! The instructor explains complex concepts in a very understandable way. I've learned a lot and feel confident in building React applications now.",
//             },
//             {
//               id: 2,
//               user: {
//                 name: "Emily Chen",
//                 avatar: "https://randomuser.me/api/portraits/women/33.jpg",
//               },
//               rating: 4,
//               date: "2023-08-22",
//               comment:
//                 "Very comprehensive course with good examples. I would have liked more exercises, but overall it's a great learning resource.",
//             },
//           ],
//         }

//         setCourseData(mockCourseData)

//         // Get completed lessons from localStorage
//         const savedCompletedLessons = JSON.parse(localStorage.getItem(`course_${id}_completed`) || "[]")
//         setCompletedLessons(savedCompletedLessons)

//         // Check if user is enrolled
//         const enrolledCourses = JSON.parse(localStorage.getItem(`user_${user?.id}_enrolled_courses`) || "[]")
//         setEnrolled(enrolledCourses.includes(id))

//         setLoading(false)
//       } catch (error) {
//         console.error("Error fetching course data:", error)
//         message.error("Failed to load course data")
//         setLoading(false)
//       }
//     }

//     fetchCourseData()
//   }, [id, user])

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

//   const handleEnroll = () => {
//     if (!user) {
//       message.warning("Please log in to enroll in this course")
//       navigate("/login", { state: { from: `/course/${id}` } })
//       return
//     }

//     // In a real app, this would be an API call
//     try {
//       // Get current enrolled courses
//       const enrolledCourses = JSON.parse(localStorage.getItem(`user_${user.id}_enrolled_courses`) || "[]")

//       // Add this course if not already enrolled
//       if (!enrolledCourses.includes(id)) {
//         enrolledCourses.push(id)
//         localStorage.setItem(`user_${user.id}_enrolled_courses`, JSON.stringify(enrolledCourses))
//       }

//       setEnrolled(true)
//       message.success("Successfully enrolled in the course!")
//     } catch (error) {
//       console.error("Error enrolling in course:", error)
//       message.error("Failed to enroll in the course. Please try again.")
//     }
//   }

//   const startCourse = () => {
//     // Navigate to the first lesson
//     if (courseData && courseData.lessons.length > 0) {
//       navigate(`/video/${id}/${courseData.lessons[0].id}`)
//     }
//   }

//   const continueCourse = () => {
//     // Find the first incomplete lesson
//     if (courseData && courseData.lessons.length > 0) {
//       const nextLessonIndex = courseData.lessons.findIndex((lesson) => !completedLessons.includes(lesson.id))

//       if (nextLessonIndex !== -1) {
//         navigate(`/video/${id}/${courseData.lessons[nextLessonIndex].id}`)
//       } else {
//         // All lessons completed, go to the first one
//         navigate(`/video/${id}/${courseData.lessons[0].id}`)
//       }
//     }
//   }

//   const watchPreview = (lessonId) => {
//     navigate(`/video/${id}/${lessonId}`)
//   }

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
//         <Spin size="large" tip="Loading course details..." />
//       </div>
//     )
//   }

//   if (!courseData) {
//     return (
//       <div style={{ textAlign: "center", padding: "2rem" }}>
//         <Title level={3}>Course not found</Title>
//         <Button type="primary" onClick={() => navigate("/courses")}>
//           Back to Courses
//         </Button>
//       </div>
//     )
//   }

//   const courseProgress = Math.round((completedLessons.length / courseData.lessons.length) * 100)
//   const totalDuration = courseData.lessons.reduce((total, lesson) => total + lesson.duration, 0)

//   return (
//     <div className="course-detail-container" style={{ padding: "16px" }}>
//       <div
//         className="course-header"
//         style={{
//           background: "linear-gradient(to right, #1a365d, #2a4365)",
//           padding: "32px 16px",
//           borderRadius: "8px",
//           marginBottom: "24px",
//           color: "white",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",
//             gap: "24px",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           <div style={{ flex: "0 0 40%", maxWidth: isMobile ? "100%" : "40%" }}>
//             <img
//               src={courseData.thumbnail || "/placeholder.svg"}
//               alt={courseData.title}
//               style={{
//                 width: "100%",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//               }}
//             />
//           </div>

//           <div style={{ flex: "1 1 auto" }}>
//             <Space direction="vertical" size="middle" style={{ width: "100%" }}>
//               <div>
//                 <Space size="small" wrap>
//                   {courseData.tags.map((tag) => (
//                     <Tag key={tag} color="blue">
//                       {tag}
//                     </Tag>
//                   ))}
//                 </Space>
//                 <Title level={isMobile ? 3 : 2} style={{ color: "white", marginTop: "8px" }}>
//                   {courseData.title}
//                 </Title>
//               </div>

//               <Paragraph style={{ color: "rgba(255, 255, 255, 0.85)" }}>{courseData.description}</Paragraph>

//               <Space wrap>
//                 <Space>
//                   <Rate disabled defaultValue={courseData.rating} style={{ fontSize: "16px" }} />
//                   <Text style={{ color: "white" }}>
//                     {courseData.rating} ({courseData.reviews} reviews)
//                   </Text>
//                 </Space>

//                 <Text style={{ color: "white" }}>
//                   <UserOutlined /> {courseData.students} students
//                 </Text>

//                 <Text style={{ color: "white" }}>
//                   <ClockCircleOutlined /> {courseData.duration}
//                 </Text>

//                 <Text style={{ color: "white" }}>
//                   <BookOutlined /> {courseData.level}
//                 </Text>
//               </Space>

//               <Space>
//                 <Avatar src={courseData.instructor.avatar} />
//                 <Text style={{ color: "white" }}>Instructor: {courseData.instructor.name}</Text>
//               </Space>

//               {enrolled && (
//                 <div>
//                   <Progress
//                     percent={courseProgress}
//                     status={courseProgress === 100 ? "success" : "active"}
//                     style={{ marginBottom: "16px" }}
//                   />
//                   <Space>
//                     <Button type="primary" size="large" icon={<PlayCircleOutlined />} onClick={continueCourse}>
//                       {completedLessons.length > 0 ? "Continue Learning" : "Start Learning"}
//                     </Button>

//                     {courseProgress === 100 && (
//                       <Button
//                         type="default"
//                         size="large"
//                         icon={<DownloadOutlined />}
//                         onClick={() => navigate(`/certificate?courseId=${id}`)}
//                       >
//                         Get Certificate
//                       </Button>
//                     )}
//                   </Space>
//                 </div>
//               )}

//               {!enrolled && (
//                 <div>
//                   <Space direction="vertical" size="small" style={{ width: "100%" }}>
//                     <div>
//                       <Text delete style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "18px" }}>
//                         ${courseData.price}
//                       </Text>
//                       <Text style={{ color: "white", fontSize: "24px", fontWeight: "bold", marginLeft: "8px" }}>
//                         ${courseData.discountPrice}
//                       </Text>
//                       <Tag color="green" style={{ marginLeft: "8px" }}>
//                         {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% OFF
//                       </Tag>
//                     </div>

//                     <Button type="primary" size="large" block={isMobile} onClick={handleEnroll}>
//                       Enroll Now
//                     </Button>
//                   </Space>
//                 </div>
//               )}
//             </Space>
//           </div>
//         </div>
//       </div>

//       <div
//         className="course-content"
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           gap: "24px",
//         }}
//       >
//         <div style={{ flex: "1 1 auto" }}>
//           <Tabs activeKey={activeTab} onChange={setActiveTab}>
//             <TabPane tab="About" key="1">
//               <Card bordered={false}>
//                 <Title level={4}>What You'll Learn</Title>
//                 <List
//                   dataSource={courseData.whatYouWillLearn}
//                   renderItem={(item) => (
//                     <List.Item>
//                       <Space>
//                         <CheckCircleOutlined style={{ color: "#52c41a" }} />
//                         <Text>{item}</Text>
//                       </Space>
//                     </List.Item>
//                   )}
//                 />

//                 <Divider />

//                 <Title level={4}>Course Description</Title>
//                 <Paragraph>{courseData.longDescription}</Paragraph>

//                 <Divider />

//                 <Title level={4}>Requirements</Title>
//                 <List
//                   dataSource={courseData.requirements}
//                   renderItem={(item) => (
//                     <List.Item>
//                       <Space>
//                         <div style={{ color: "#1890ff" }}>•</div>
//                         <Text>{item}</Text>
//                       </Space>
//                     </List.Item>
//                   )}
//                 />

//                 <Divider />

//                 <Title level={4}>Instructor</Title>
//                 <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
//                   <Avatar src={courseData.instructor.avatar} size={64} />
//                   <div>
//                     <Title level={5} style={{ marginTop: 0 }}>
//                       {courseData.instructor.name}
//                     </Title>
//                     <Paragraph>{courseData.instructor.bio}</Paragraph>
//                   </div>
//                 </div>
//               </Card>
//             </TabPane>

//             <TabPane tab="Curriculum" key="2">
//               <Card bordered={false}>
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
//                   <Text>{courseData.lessons.length} Lessons</Text>
//                   <Text>Total Duration: {formatTime(totalDuration)}</Text>
//                 </div>

//                 <Collapse defaultActiveKey={["1"]}>
//                   <Panel
//                     header={
//                       <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
//                         <Text strong>Course Content</Text>
//                         <Text>
//                           {courseData.lessons.length} Lessons • {formatTime(totalDuration)}
//                         </Text>
//                       </div>
//                     }
//                     key="1"
//                   >
//                     <List
//                       dataSource={courseData.lessons}
//                       renderItem={(lesson, index) => (
//                         <List.Item
//                           actions={[
//                             <Text key="duration">{formatTime(lesson.duration)}</Text>,
//                             lesson.isPreview || enrolled ? (
//                               <Button
//                                 key="watch"
//                                 type="link"
//                                 icon={<PlayCircleOutlined />}
//                                 onClick={() => watchPreview(lesson.id)}
//                               >
//                                 {lesson.isPreview ? "Preview" : "Watch"}
//                               </Button>
//                             ) : (
//                               <LockOutlined key="lock" />
//                             ),
//                           ]}
//                         >
//                           <List.Item.Meta
//                             avatar={
//                               completedLessons.includes(lesson.id) ? (
//                                 <CheckCircleOutlined style={{ color: "#52c41a" }} />
//                               ) : (
//                                 <Text>{index + 1}.</Text>
//                               )
//                             }
//                             title={lesson.title}
//                             description={lesson.description}
//                           />
//                         </List.Item>
//                       )}
//                     />
//                   </Panel>
//                 </Collapse>
//               </Card>
//             </TabPane>

//             <TabPane tab="Reviews" key="3">
//               <Card bordered={false}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     marginBottom: "24px",
//                   }}
//                 >
//                   <div>
//                     <Title level={4} style={{ marginBottom: "8px" }}>
//                       Student Reviews
//                     </Title>
//                     <Space align="center">
//                       <Text style={{ fontSize: "24px", fontWeight: "bold" }}>{courseData.rating}</Text>
//                       <Rate disabled defaultValue={courseData.rating} />
//                       <Text>({courseData.reviews} reviews)</Text>
//                     </Space>
//                   </div>

//                   {enrolled && <Button icon={<StarOutlined />}>Write a Review</Button>}
//                 </div>

//                 <List
//                   itemLayout="vertical"
//                   dataSource={courseData.reviews}
//                   renderItem={(review) => (
//                     <List.Item>
//                       <div style={{ display: "flex", gap: "16px" }}>
//                         <Avatar src={review.user.avatar} />
//                         <div style={{ flex: 1 }}>
//                           <div style={{ display: "flex", justifyContent: "space-between" }}>
//                             <Text strong>{review.user.name}</Text>
//                             <Text type="secondary">{review.date}</Text>
//                           </div>
//                           <Rate disabled defaultValue={review.rating} style={{ fontSize: "14px" }} />
//                           <Paragraph style={{ marginTop: "8px" }}>{review.comment}</Paragraph>
//                         </div>
//                       </div>
//                     </List.Item>
//                   )}
//                 />
//               </Card>
//             </TabPane>
//           </Tabs>
//         </div>

//         {!isMobile && (
//           <div style={{ width: "300px", flexShrink: 0 }}>
//             <div style={{ position: "sticky", top: "16px" }}>
//               <Card bordered={false}>
//                 <Title level={4}>Course Content</Title>
//                 <List
//                   size="small"
//                   dataSource={[
//                     { icon: <BookOutlined />, text: `${courseData.lessons.length} lessons` },
//                     { icon: <ClockCircleOutlined />, text: courseData.duration },
//                     { icon: <FileTextOutlined />, text: "Downloadable resources" },
//                     { icon: <DownloadOutlined />, text: "Certificate of completion" },
//                   ]}
//                   renderItem={(item) => (
//                     <List.Item>
//                       <Space>
//                         {item.icon}
//                         <Text>{item.text}</Text>
//                       </Space>
//                     </List.Item>
//                   )}
//                 />

//                 {enrolled ? (
//                   <Button
//                     type="primary"
//                     icon={<PlayCircleOutlined />}
//                     block
//                     style={{ marginTop: "16px" }}
//                     onClick={continueCourse}
//                   >
//                     {completedLessons.length > 0 ? "Continue Learning" : "Start Learning"}
//                   </Button>
//                 ) : (
//                   <Button type="primary" block style={{ marginTop: "16px" }} onClick={handleEnroll}>
//                     Enroll Now
//                   </Button>
//                 )}
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CourseDetail

// // src/pages/CourseDetail.jsx
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Card, Typography, Tag, Space, Row, Col, List, Statistic } from 'antd';
// import { 
//   BookOutlined, 
//   ClockCircleOutlined, 
//   PlayCircleOutlined, 
//   HeartOutlined, 
//   HeartFilled,
//   ArrowRightOutlined,
//   UserOutlined
// } from '@ant-design/icons';
// import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store
// import { useState, useMemo } from 'react';

// const { Title, Text, Paragraph } = Typography;
// const TEAL_900 = "#004d4d";
// const WHITE = "#ffffff";

// export default function CourseDetail() {
//   const { courseId } = useParams();
//   const { courses, enrolledCourses, wishlist, dispatch } = useGlobalStore();
//   const navigate = useNavigate();
//   const [videoModal, setVideoModal] = useState({ open: false, course: null, video: null });

//   const currentCourse = courses.find(c => c.id === courseId);
  
//   if (!currentCourse) {
//     return (
//       <div style={{ padding: '24px', textAlign: 'center' }}>
//         <Title level={4}>Course not found</Title>
//         <Button onClick={() => navigate('/Student-portal/courses')}>
//           Back to Courses
//         </Button>
//       </div>
//     );
//   }

//   // ✅ Get next recommended course (same category, next level)
//   const nextCourse = useMemo(() => {
//     const currentLevelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
//     const currentLevelValue = currentLevelOrder[currentCourse.level] || 0;
    
//     return courses.find(course => 
//       course.category === currentCourse.category &&
//       course.id !== currentCourse.id &&
//       (currentLevelOrder[course.level] || 0) > currentLevelValue
//     ) || courses.find(course => 
//       course.category === currentCourse.category &&
//       course.id !== currentCourse.id
//     );
//   }, [courses, currentCourse]);

//   const isEnrolled = enrolledCourses.includes(currentCourse.id);
//   const isInWishlist = wishlist.includes(currentCourse.id);
//   const totalEnrolled = enrolledCourses.length;

//   const handleEnroll = () => {
//     dispatch({ type: "ENROLL_IN_COURSE", courseId: currentCourse.id });
//   };

//   const handleToggleWishlist = () => {
//     dispatch({ type: "TOGGLE_WISHLIST", courseId: currentCourse.id });
//   };

//   const handlePlayVideo = (video) => {
//     setVideoModal({ open: true, course: currentCourse, video });
//   };

//   const handleViewNextCourse = () => {
//     if (nextCourse) {
//       navigate(`/Student-portal/course/${nextCourse.id}`);
//     }
//   };

//   // Reusable Video Modal (same as before)
//   const VideoPlayerModal = ({ open, onClose, course, video }) => {
//     if (!video?.url) return null;
//     return (
//       <div style={{ 
//         position: "fixed", 
//         top: 0, 
//         left: 0, 
//         width: "100vw", 
//         height: "100vh", 
//         backgroundColor: "rgba(0,0,0,0.85)", 
//         zIndex: 1001, 
//         display: "flex", 
//         justifyContent: "center", 
//         alignItems: "center" 
//       }}>
//         <div style={{ 
//           backgroundColor: "white", 
//           borderRadius: 8, 
//           maxWidth: "900px", 
//           width: "100%", 
//           maxHeight: "90vh", 
//           overflowY: "auto" 
//         }}>
//           <div style={{ 
//             padding: "16px", 
//             display: "flex", 
//             justifyContent: "space-between", 
//             alignItems: "center", 
//             borderBottom: "1px solid #f0f0f0" 
//           }}>
//             <Title level={5} style={{ margin: 0 }}>{video.title}</Title>
//             <Button type="text" onClick={onClose}>✕</Button>
//           </div>
//           <div style={{ padding: "16px" }}>
//             <video
//               controls
//               width="100%"
//               style={{ borderRadius: 8, backgroundColor: "#000" }}
//               src={video.url}
//               onEnded={() => {
//                 dispatch({ 
//                   type: "COMPLETE_VIDEO", 
//                   courseId: course.id, 
//                   videoId: video.id 
//                 });
//                 onClose();
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
//       {/* Breadcrumb */}
//       <Button 
//         type="link" 
//         onClick={() => navigate(-1)}
//         style={{ marginBottom: '16px' }}
//       >
//         ← Back to Courses
//       </Button>

//       <Row gutter={[24, 24]}>
//         {/* Main Content */}
//         <Col xs={24} lg={16}>
//           {/* Current Course Header */}
//           <div style={{ 
//             background: `linear-gradient(135deg, ${TEAL_900}, #007a7a)`,
//             padding: '24px',
//             borderRadius: '12px',
//             color: 'white',
//             marginBottom: '24px'
//           }}>
//             <Space size="large" style={{ display: 'block' }}>
//               <Tag color="gold" style={{ color: TEAL_900, fontWeight: 'bold' }}>
//                 {currentCourse.category} • {currentCourse.level}
//               </Tag>
//               <Title level={2} style={{ color: 'white', margin: '8px 0' }}>
//                 {currentCourse.title}
//               </Title>
//               <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
//                 {currentCourse.description || "Master in-demand skills with hands-on projects"}
//               </Text>
//             </Space>
//           </div>

//           {/* Course Curriculum */}
//           <Card title="Course Curriculum" style={{ marginBottom: '24px' }}>
//             <List
//               dataSource={currentCourse.videos || []}
//               renderItem={(video) => (
//                 <List.Item
//                   actions={[
//                     <Button
//                       type="link"
//                       icon={<PlayCircleOutlined />}
//                       onClick={() => handlePlayVideo(video)}
//                       disabled={!video.url}
//                     >
//                       Play
//                     </Button>
//                   ]}
//                 >
//                   <List.Item.Meta
//                     title={video.title}
//                     description={`${Math.round(video.duration / 60)} min`}
//                   />
//                 </List.Item>
//               )}
//             />
//           </Card>

//           {/* Next Recommended Course */}
//           {nextCourse && (
//             <Card 
//               title={
//                 <span>
//                   <ArrowRightOutlined /> Next Recommended Course
//                 </span>
//               }
//               style={{ 
//                 border: `2px solid ${TEAL_900}`,
//                 borderRadius: '12px'
//               }}
//             >
//               <Row gutter={[16, 16]} align="middle">
//                 <Col xs={24} md={8}>
//                   <img 
//                     src={nextCourse.thumbnail} 
//                     alt={nextCourse.title} 
//                     style={{ 
//                       width: '100%', 
//                       borderRadius: 8,
//                       maxHeight: 150,
//                       objectFit: 'cover'
//                     }} 
//                   />
//                 </Col>
//                 <Col xs={24} md={16}>
//                   <Title level={4} style={{ margin: '0 0 8px' }}>
//                     {nextCourse.title}
//                   </Title>
//                   <Space wrap>
//                     <Tag color="blue">{nextCourse.subcategory}</Tag>
//                     <Tag color="purple">{nextCourse.level}</Tag>
//                   </Space>
//                   <Paragraph style={{ marginTop: '12px' }}>
//                     {nextCourse.description?.substring(0, 100)}...
//                   </Paragraph>
//                   <Button 
//                     type="primary" 
//                     onClick={handleViewNextCourse}
//                     style={{ 
//                       backgroundColor: TEAL_900,
//                       borderColor: TEAL_900
//                     }}
//                   >
//                     View Course Details
//                   </Button>
//                 </Col>
//               </Row>
//             </Card>
//           )}
//         </Col>

//         {/* Sidebar */}
//         <Col xs={24} lg={8}>
//           {/* Stats Card */}
//           <Card style={{ marginBottom: '24px' }}>
//             <Statistic
//               title="Your Learning Progress"
//               value={totalEnrolled}
//               prefix={<UserOutlined />}
//               suffix="courses enrolled"
//               valueStyle={{ color: TEAL_900 }}
//             />
//             <div style={{ marginTop: '16px' }}>
//               <Text type="secondary">
//                 You're on a learning journey with {totalEnrolled} course{totalEnrolled !== 1 ? 's' : ''}
//               </Text>
//             </div>
//           </Card>

//           {/* Course Actions */}
//           <Card>
//             <img 
//               src={currentCourse.thumbnail} 
//               alt={currentCourse.title} 
//               style={{ 
//                 width: '100%', 
//                 borderRadius: 8, 
//                 marginBottom: '16px',
//                 maxHeight: 200,
//                 objectFit: 'cover'
//               }} 
//             />

//             <div style={{ marginBottom: '16px', textAlign: 'center' }}>
//               <Text delete>₹{currentCourse.price.toFixed(2)}</Text>
//               <Text strong style={{ fontSize: '24px', marginLeft: '8px' }}>
//                 ₹{currentCourse.discountPrice.toFixed(2)}
//               </Text>
//             </div>

//             <Space direction="vertical" style={{ width: '100%' }}>
//               {isEnrolled ? (
//                 <Button
//                   type="primary"
//                   icon={<PlayCircleOutlined />}
//                   onClick={() => {
//                     const firstVideo = currentCourse.videos?.[0];
//                     if (firstVideo) handlePlayVideo(firstVideo);
//                   }}
//                   block
//                   style={{ backgroundColor: TEAL_900, borderColor: TEAL_900 }}
//                 >
//                   Continue Learning
//                 </Button>
//               ) : (
//                 <Button
//                   type="primary"
//                   onClick={handleEnroll}
//                   block
//                   style={{ backgroundColor: TEAL_900, borderColor: TEAL_900 }}
//                 >
//                   Enroll Now
//                 </Button>
//               )}

//               <Button
//                 icon={isInWishlist ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
//                 onClick={handleToggleWishlist}
//                 block
//               >
//                 {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
//               </Button>
//             </Space>

//             <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
//               <Space direction="vertical" size="small">
//                 <div>
//                   <BookOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
//                   <Text strong>{currentCourse.totalLessons} lessons</Text>
//                 </div>
//                 <div>
//                   <ClockCircleOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
//                   <Text strong>{Math.round(currentCourse.totalDuration / 60)} hours</Text>
//                 </div>
//                 <div>
//                   <UserOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
//                   <Text>Instructor: {currentCourse.instructor}</Text>
//                 </div>
//               </Space>
//             </div>
//           </Card>
//         </Col>
//       </Row>

//       {/* Video Modal */}
//       {videoModal.open && (
//         <VideoPlayerModal
//           open={videoModal.open}
//           onClose={() => setVideoModal({ open: false, course: null, video: null })}
//           course={videoModal.course}
//           video={videoModal.video}
//         />
//       )}
//     </div>
//   );
// }

// // src/pages/CourseDetail.jsx
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Card, Typography, Tag, Space, Row, Col, List, Statistic, message } from 'antd';
// import { 
//   BookOutlined, 
//   ClockCircleOutlined, 
//   PlayCircleOutlined, 
//   HeartOutlined, 
//   HeartFilled,
//   ArrowRightOutlined,
//   UserOutlined
// } from '@ant-design/icons';
// import { useGlobalStore } from "../contexts/GlobalStore";
// import { useAuth } from "../../Contexts/AuthContext"; // ✅ to get user data
// import { useState, useMemo } from 'react';

// const { Title, Text, Paragraph } = Typography;
// const TEAL_900 = "#004d4d";
// const WHITE = "#ffffff";

// export default function CourseDetail() {
//   const { courseId } = useParams();
//   const { courses, enrolledCourses, wishlist, dispatch } = useGlobalStore();
//   const { user: userData } = useAuth(); // ✅ get user for prefill
//   const navigate = useNavigate();
//   const [videoModal, setVideoModal] = useState({ open: false, course: null, video: null });

//   const currentCourse = courses.find(c => c.id === courseId);
  
//   if (!currentCourse) {
//     return (
//       <div style={{ padding: '24px', textAlign: 'center' }}>
//         <Title level={4}>Course not found</Title>
//         <Button onClick={() => navigate('/Student-portal/courses')}>
//           Back to Courses
//         </Button>
//       </div>
//     );
//   }

//   const isEnrolled = enrolledCourses.includes(currentCourse.id);
//   const isInWishlist = wishlist.includes(currentCourse.id);
//   const totalEnrolled = enrolledCourses.length;

//   // ✅ NEW: Razorpay-powered enrollment
//   const handleEnroll = () => {
//     // Free course → enroll directly
//     if (currentCourse.discountPrice <= 0) {
//       message.success("Enrolled successfully!");
//       dispatch({ type: "ENROLL_IN_COURSE", courseId: currentCourse.id });
//       return;
//     }
// const amountInPaise = Math.round((currentCourse.discountPrice || 0) * 100);

// if (amountInPaise <= 0 || isNaN(amountInPaise)) {
//   message.error("Invalid course price. Please contact support.");
//   return;
// }
//     // Paid course → open Razorpay
//     const options = {
//       key: "rzp_test_AbC123XyZ456", // ← Your actual test key
//       amount: amountInPaise, // in paise
//       currency: "INR",
//       name: "Your Academy Name", // ✏️ Update to your brand
//       description: `Enrollment: ${currentCourse.title}`,
//       image: "/logo192.png", // optional: add your logo
//       handler: function (response) {
//         // ✅ Payment successful
//         message.success("Payment successful! Enrolling you now...");
//         dispatch({ type: "ENROLL_IN_COURSE", courseId: currentCourse.id });
        
//         // 🔒 TODO (later): Send to backend for verification
//         // fetch("/api/verify-payment", { method: "POST", body: JSON.stringify(response) });
//       },
//       prefill: {
//         name: `${userData?.firstName || ""} ${userData?.lastName || ""}`.trim() || "Learner",
//         email: userData?.email || "",
//         contact: userData?.phone || "",
//       },
//       theme: {
//         color: TEAL_900,
//       },
//       modal: {
//         confirm_close: true,
//         ondismiss: () => {
//           message.info("Payment cancelled.");
//         },
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const handleToggleWishlist = () => {
//     dispatch({ type: "TOGGLE_WISHLIST", courseId: currentCourse.id });
//   };

//   const handlePlayVideo = (video) => {
//     setVideoModal({ open: true, course: currentCourse, video });
//   };

//   // ✅ Get next recommended course (same category, next level)
//   const nextCourse = useMemo(() => {
//     const currentLevelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
//     const currentLevelValue = currentLevelOrder[currentCourse.level] || 0;
    
//     return courses.find(course => 
//       course.category === currentCourse.category &&
//       course.id !== currentCourse.id &&
//       (currentLevelOrder[course.level] || 0) > currentLevelValue
//     ) || courses.find(course => 
//       course.category === currentCourse.category &&
//       course.id !== currentCourse.id
//     );
//   }, [courses, currentCourse]);

//   const handleViewNextCourse = () => {
//     if (nextCourse) {
//       navigate(`/Student-portal/course/${nextCourse.id}`);
//     }
//   };

//   // Reusable Video Modal
//   const VideoPlayerModal = ({ open, onClose, course, video }) => {
//     if (!video?.url) return null;
//     return (
//       <div style={{ 
//         position: "fixed", 
//         top: 0, 
//         left: 0, 
//         width: "100vw", 
//         height: "100vh", 
//         backgroundColor: "rgba(0,0,0,0.85)", 
//         zIndex: 1001, 
//         display: "flex", 
//         justifyContent: "center", 
//         alignItems: "center" 
//       }}>
//         <div style={{ 
//           backgroundColor: "white", 
//           borderRadius: 8, 
//           maxWidth: "900px", 
//           width: "100%", 
//           maxHeight: "90vh", 
//           overflowY: "auto" 
//         }}>
//           <div style={{ 
//             padding: "16px", 
//             display: "flex", 
//             justifyContent: "space-between", 
//             alignItems: "center", 
//             borderBottom: "1px solid #f0f0f0" 
//           }}>
//             <Title level={5} style={{ margin: 0 }}>{video.title}</Title>
//             <Button type="text" onClick={onClose}>✕</Button>
//           </div>
//           <div style={{ padding: "16px" }}>
//             <video
//               controls
//               width="100%"
//               style={{ borderRadius: 8, backgroundColor: "#000" }}
//               src={video.url}
//               onEnded={() => {
//                 dispatch({ 
//                   type: "COMPLETE_VIDEO", 
//                   courseId: course.id, 
//                   videoId: video.id 
//                 });
//                 onClose();
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
//       {/* Breadcrumb */}
//       <Button 
//         type="link" 
//         onClick={() => navigate(-1)}
//         style={{ marginBottom: '16px' }}
//       >
//         ← Back to Courses
//       </Button>

//       <Row gutter={[24, 24]}>
//         {/* Main Content */}
//         <Col xs={24} lg={16}>
//           {/* Current Course Header */}
//           <div style={{ 
//             background: `linear-gradient(135deg, ${TEAL_900}, #007a7a)`,
//             padding: '24px',
//             borderRadius: '12px',
//             color: 'white',
//             marginBottom: '24px'
//           }}>
//             <Space size="large" style={{ display: 'block' }}>
//               <Tag color="gold" style={{ color: TEAL_900, fontWeight: 'bold' }}>
//                 {currentCourse.category} • {currentCourse.level}
//               </Tag>
//               <Title level={2} style={{ color: 'white', margin: '8px 0' }}>
//                 {currentCourse.title}
//               </Title>
//               <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
//                 {currentCourse.description || "Master in-demand skills with hands-on projects"}
//               </Text>
//             </Space>
//           </div>

//           {/* Course Curriculum */}
//           <Card title="Course Curriculum" style={{ marginBottom: '24px' }}>
//             <List
//               dataSource={currentCourse.videos || []}
//               renderItem={(video) => (
//                 <List.Item
//                   actions={[
//                     <Button
//                       type="link"
//                       icon={<PlayCircleOutlined />}
//                       onClick={() => handlePlayVideo(video)}
//                       disabled={!video.url}
//                     >
//                       Play
//                     </Button>
//                   ]}
//                 >
//                   <List.Item.Meta
//                     title={video.title}
//                     description={`${Math.round(video.duration / 60)} min`}
//                   />
//                 </List.Item>
//               )}
//             />
//           </Card>

//           {/* Next Recommended Course */}
//           {nextCourse && (
//             <Card 
//               title={
//                 <span>
//                   <ArrowRightOutlined /> Next Recommended Course
//                 </span>
//               }
//               style={{ 
//                 border: `2px solid ${TEAL_900}`,
//                 borderRadius: '12px'
//               }}
//             >
//               <Row gutter={[16, 16]} align="middle">
//                 <Col xs={24} md={8}>
//                   <img 
//                     src={nextCourse.thumbnail} 
//                     alt={nextCourse.title} 
//                     style={{ 
//                       width: '100%', 
//                       borderRadius: 8,
//                       maxHeight: 150,
//                       objectFit: 'cover'
//                     }} 
//                   />
//                 </Col>
//                 <Col xs={24} md={16}>
//                   <Title level={4} style={{ margin: '0 0 8px' }}>
//                     {nextCourse.title}
//                   </Title>
//                   <Space wrap>
//                     <Tag color="blue">{nextCourse.subcategory}</Tag>
//                     <Tag color="purple">{nextCourse.level}</Tag>
//                   </Space>
//                   <Paragraph style={{ marginTop: '12px' }}>
//                     {nextCourse.description?.substring(0, 100)}...
//                   </Paragraph>
//                   <Button 
//                     type="primary" 
//                     onClick={handleViewNextCourse}
//                     style={{ 
//                       backgroundColor: TEAL_900,
//                       borderColor: TEAL_900
//                     }}
//                   >
//                     View Course Details
//                   </Button>
//                 </Col>
//               </Row>
//             </Card>
//           )}
//         </Col>

//         {/* Sidebar */}
//         <Col xs={24} lg={8}>
//           {/* Stats Card */}
//           <Card style={{ marginBottom: '24px' }}>
//             <Statistic
//               title="Your Learning Progress"
//               value={totalEnrolled}
//               prefix={<UserOutlined />}
//               suffix="courses enrolled"
//               valueStyle={{ color: TEAL_900 }}
//             />
//             <div style={{ marginTop: '16px' }}>
//               <Text type="secondary">
//                 You're on a learning journey with {totalEnrolled} course{totalEnrolled !== 1 ? 's' : ''}
//               </Text>
//             </div>
//           </Card>

//           {/* Course Actions */}
//           <Card>
//             <img 
//               src={currentCourse.thumbnail} 
//               alt={currentCourse.title} 
//               style={{ 
//                 width: '100%', 
//                 borderRadius: 8, 
//                 marginBottom: '16px',
//                 maxHeight: 200,
//                 objectFit: 'cover'
//               }} 
//             />

//             <div style={{ marginBottom: '16px', textAlign: 'center' }}>
//               {currentCourse.price > currentCourse.discountPrice && (
//                 <Text delete>₹{currentCourse.price.toFixed(2)}</Text>
//               )}
//               <Text strong style={{ fontSize: '24px', marginLeft: '8px' }}>
//                 ₹{currentCourse.discountPrice.toFixed(2)}
//               </Text>
//             </div>

//             <Space direction="vertical" style={{ width: '100%' }}>
//               {isEnrolled ? (
//                 <Button
//                   type="primary"
//                   icon={<PlayCircleOutlined />}
//                   onClick={() => {
//                     const firstVideo = currentCourse.videos?.[0];
//                     if (firstVideo) handlePlayVideo(firstVideo);
//                   }}
//                   block
//                   style={{ backgroundColor: TEAL_900, borderColor: TEAL_900 }}
//                 >
//                   Continue Learning
//                 </Button>
//               ) : (
//                 <Button
//                   type="primary"
//                   onClick={handleEnroll}
//                   block
//                   style={{ backgroundColor: TEAL_900, borderColor: TEAL_900 }}
//                 >
//                   {currentCourse.discountPrice > 0 ? "Enroll Now" : "Enroll Free"}
//                 </Button>
//               )}

//               <Button
//                 icon={isInWishlist ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
//                 onClick={handleToggleWishlist}
//                 block
//               >
//                 {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
//               </Button>
//             </Space>

//             <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
//               <Space direction="vertical" size="small">
//                 <div>
//                   <BookOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
//                   <Text strong>{currentCourse.totalLessons} lessons</Text>
//                 </div>
//                 <div>
//                   <ClockCircleOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
//                   <Text strong>{Math.round(currentCourse.totalDuration / 60)} hours</Text>
//                 </div>
//                 <div>
//                   <UserOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
//                   <Text>Instructor: {currentCourse.instructor}</Text>
//                 </div>
//               </Space>
//             </div>
//           </Card>
//         </Col>
//       </Row>

//       {/* Video Modal */}
//       {videoModal.open && (
//         <VideoPlayerModal
//           open={videoModal.open}
//           onClose={() => setVideoModal({ open: false, course: null, video: null })}
//           course={videoModal.course}
//           video={videoModal.video}
//         />
//       )}
//     </div>
//   );
// }

// src/pages/CourseDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Typography, Tag, Space, Row, Col, List, Statistic, message } from 'antd';
import { 
  BookOutlined, 
  ClockCircleOutlined, 
  PlayCircleOutlined, 
  HeartOutlined, 
  HeartFilled,
  ArrowRightOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useGlobalStore } from "../contexts/GlobalStore";
import { useAuth } from "../../Contexts/AuthContext";
import { useState, useMemo } from 'react';

const { Title, Text, Paragraph } = Typography;
const TEAL_900 = "#004d4d";

export default function CourseDetail() {
  const { courseId } = useParams();
  const { courses, enrolledCourses, wishlist, dispatch } = useGlobalStore();
  const { user: userData } = useAuth();
  const navigate = useNavigate();
  const [videoModal, setVideoModal] = useState({ open: false, course: null, video: null });

  const currentCourse = courses.find(c => c.id === courseId);
  
  if (!currentCourse) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title level={4}>Course not found</Title>
        <Button onClick={() => navigate('/Student-portal/courses')}>
          Back to Courses
        </Button>
      </div>
    );
  }

  const isEnrolled = enrolledCourses.includes(currentCourse.id);
  const isInWishlist = wishlist.includes(currentCourse.id);
  const totalEnrolled = enrolledCourses.length;

  // ✅ Fix 3: Clean phone number helper
  const cleanPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\D/g, '').slice(-10); // Keep last 10 digits
  };

  // ✅ Fix 2: Load Razorpay script dynamically
  const loadRazorpay = () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Razorpay"));
      document.body.appendChild(script);
    });
  };

  // ✅ Fix 1, 3, 4, 5: Full Razorpay handler with all fixes
  const handleEnroll = async () => {
    // Free course → enroll directly
    if (currentCourse.discountPrice <= 0) {
      message.success("Enrolled successfully!");
      dispatch({ type: "ENROLL_IN_COURSE", courseId: currentCourse.id });
      return;
    }

    try {
      // ✅ Fix 1: Validate amount
      const amountInPaise = Math.round((currentCourse.discountPrice || 0) * 100);
      if (amountInPaise <= 0 || isNaN(amountInPaise)) {
        message.error("Invalid course price. Please contact support.");
        return;
      }

      // ✅ Fix 2: Ensure Razorpay is loaded
      await loadRazorpay();

      // ✅ Fix 3: Clean phone number
      const cleanContact = cleanPhone(userData?.phone) || "";

      const options = {
        key: "rzp_test_AbC123XyZ456", // 🔑 REPLACE WITH YOUR ACTUAL TEST KEY
        amount: amountInPaise, // in paise (e.g., ₹499 → 49900)
        currency: "INR",
        name: "Your Academy Name",
        description: `Enrollment: ${currentCourse.title}`,
        image: "/logo192.png",
        prefill: {
          name: `${userData?.firstName || ""} ${userData?.lastName || ""}`.trim() || "Learner",
          email: userData?.email || "",
          contact: cleanContact, // ✅ Cleaned 10-digit number
        },
        theme: {
          color: TEAL_900,
        },
        handler: (response) => {
          message.success("Payment successful! Enrolling you now...");
          dispatch({ type: "ENROLL_IN_COURSE", courseId: currentCourse.id });
        },
        modal: {
          confirm_close: true,
          ondismiss: () => {
            message.info("Payment cancelled.");
          },
        },
      };

      // ✅ Fix 4: Safe Razorpay init
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Razorpay error:", error);
      message.error("Failed to open payment gateway. Please try again.");
    }
  };

  const handleToggleWishlist = () => {
    dispatch({ type: "TOGGLE_WISHLIST", courseId: currentCourse.id });
  };

  const handlePlayVideo = (video) => {
    setVideoModal({ open: true, course: currentCourse, video });
  };

  // ✅ Get next recommended course
  const nextCourse = useMemo(() => {
    const currentLevelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
    const currentLevelValue = currentLevelOrder[currentCourse.level] || 0;
    
    return courses.find(course => 
      course.category === currentCourse.category &&
      course.id !== currentCourse.id &&
      (currentLevelOrder[course.level] || 0) > currentLevelValue
    ) || courses.find(course => 
      course.category === currentCourse.category &&
      course.id !== currentCourse.id
    );
  }, [courses, currentCourse]);

  const handleViewNextCourse = () => {
    if (nextCourse) {
      navigate(`/Student-portal/course/${nextCourse.id}`);
    }
  };

  // Reusable Video Modal
  const VideoPlayerModal = ({ open, onClose, course, video }) => {
    if (!video?.url) return null;
    return (
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        backgroundColor: "rgba(0,0,0,0.85)", 
        zIndex: 1001, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
      }}>
        <div style={{ 
          backgroundColor: "white", 
          borderRadius: 8, 
          maxWidth: "900px", 
          width: "100%", 
          maxHeight: "90vh", 
          overflowY: "auto" 
        }}>
          <div style={{ 
            padding: "16px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            borderBottom: "1px solid #f0f0f0" 
          }}>
            <Title level={5} style={{ margin: 0 }}>{video.title}</Title>
            <Button type="text" onClick={onClose}>✕</Button>
          </div>
          <div style={{ padding: "16px" }}>
            <video
              controls
              width="100%"
              style={{ borderRadius: 8, backgroundColor: "#000" }}
              src={video.url}
              onEnded={() => {
                dispatch({ 
                  type: "COMPLETE_VIDEO", 
                  courseId: course.id, 
                  videoId: video.id 
                });
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <Button 
        type="link" 
        onClick={() => navigate(-1)}
        style={{ marginBottom: '16px' }}
      >
        ← Back to Courses
      </Button>

      <Row gutter={[24, 24]}>
        {/* Main Content */}
        <Col xs={24} lg={16}>
          <div style={{ 
            background: `linear-gradient(135deg, ${TEAL_900}, #007a7a)`,
            padding: '24px',
            borderRadius: '12px',
            color: 'white',
            marginBottom: '24px'
          }}>
            <Space size="large" style={{ display: 'block' }}>
              <Tag color="gold" style={{ color: TEAL_900, fontWeight: 'bold' }}>
                {currentCourse.category} • {currentCourse.level}
              </Tag>
              <Title level={2} style={{ color: 'white', margin: '8px 0' }}>
                {currentCourse.title}
              </Title>
              <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
                {currentCourse.description || "Master in-demand skills with hands-on projects"}
              </Text>
            </Space>
          </div>

          <Card title="Course Curriculum" style={{ marginBottom: '24px' }}>
            <List
              dataSource={currentCourse.videos || []}
              renderItem={(video) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      icon={<PlayCircleOutlined />}
                      onClick={() => handlePlayVideo(video)}
                      disabled={!video.url}
                    >
                      Play
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={video.title}
                    description={`${Math.round(video.duration / 60)} min`}
                  />
                </List.Item>
              )}
            />
          </Card>

          {nextCourse && (
            <Card 
              title={
                <span>
                  <ArrowRightOutlined /> Next Recommended Course
                </span>
              }
              style={{ 
                border: `2px solid ${TEAL_900}`,
                borderRadius: '12px'
              }}
            >
              <Row gutter={[16, 16]} align="middle">
                <Col xs={24} md={8}>
                  <img 
                    src={nextCourse.thumbnail} 
                    alt={nextCourse.title} 
                    style={{ 
                      width: '100%', 
                      borderRadius: 8,
                      maxHeight: 150,
                      objectFit: 'cover'
                    }} 
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ margin: '0 0 8px' }}>
                    {nextCourse.title}
                  </Title>
                  <Space wrap>
                    <Tag color="blue">{nextCourse.subcategory}</Tag>
                    <Tag color="purple">{nextCourse.level}</Tag>
                  </Space>
                  <Paragraph style={{ marginTop: '12px' }}>
                    {nextCourse.description?.substring(0, 100)}...
                  </Paragraph>
                  <Button 
                    type="primary" 
                    onClick={handleViewNextCourse}
                    style={{ 
                      backgroundColor: TEAL_900,
                      borderColor: TEAL_900
                    }}
                  >
                    View Course Details
                  </Button>
                </Col>
              </Row>
            </Card>
          )}
        </Col>

        {/* Sidebar */}
        <Col xs={24} lg={8}>
          <Card style={{ marginBottom: '24px' }}>
            <Statistic
              title="Your Learning Progress"
              value={totalEnrolled}
              prefix={<UserOutlined />}
              suffix="courses enrolled"
              valueStyle={{ color: TEAL_900 }}
            />
            <div style={{ marginTop: '16px' }}>
              <Text type="secondary">
                You're on a learning journey with {totalEnrolled} course{totalEnrolled !== 1 ? 's' : ''}
              </Text>
            </div>
          </Card>

          <Card>
            <img 
              src={currentCourse.thumbnail} 
              alt={currentCourse.title} 
              style={{ 
                width: '100%', 
                borderRadius: 8, 
                marginBottom: '16px',
                maxHeight: 400,
                objectFit: 'cover'
              }} 
            />

            <div style={{ marginBottom: '16px', textAlign: 'center' }}>
              {currentCourse.price > currentCourse.discountPrice && (
                <Text delete>₹{currentCourse.price.toFixed(2)}</Text>
              )}
              <Text strong style={{ fontSize: '24px', marginLeft: '8px' }}>
                ₹{currentCourse.discountPrice.toFixed(2)}
              </Text>
            </div>

            <Space direction="vertical" style={{ width: '100%' }}>
              {isEnrolled ? (
                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  onClick={() => {
                    const firstVideo = currentCourse.videos?.[0];
                    if (firstVideo) handlePlayVideo(firstVideo);
                  }}
                  block
                  style={{ backgroundColor: TEAL_900, borderColor: TEAL_900 }}
                >
                  Continue Learning
                </Button>
              ) : (
                // Replace the current "Enroll Now" button with:
                <Button
                type="primary"
                onClick={() => navigate(`/Student-portal/checkout/${currentCourse.id}`)} // ✅ Go to checkout page
                  block
                  style={{ backgroundColor: TEAL_900, borderColor: TEAL_900 }}
                  >
  {currentCourse.discountPrice > 0 ? "Enroll Now" : "Enroll Free"}
</Button>
              )}

              <Button
                icon={isInWishlist ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
                onClick={handleToggleWishlist}
                block
              >
                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </Space>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
              <Space direction="vertical" size="small">
                <div>
                  <BookOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
                  <Text strong>{currentCourse.totalLessons} lessons</Text>
                </div>
                <div>
                  <ClockCircleOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
                  <Text strong>{Math.round(currentCourse.totalDuration / 60)} hours</Text>
                </div>
                <div>
                  <UserOutlined style={{ marginRight: '8px', color: TEAL_900 }} />
                  <Text>Instructor: {currentCourse.instructor}</Text>
                </div>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>

      {videoModal.open && (
        <VideoPlayerModal
          open={videoModal.open}
          onClose={() => setVideoModal({ open: false, course: null, video: null })}
          course={videoModal.course}
          video={videoModal.video}
        />
      )}
    </div>
  );
}