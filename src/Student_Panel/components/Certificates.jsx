// // "use client"

// // import { useState, useEffect } from "react"
// // import { Card, Typography, Button, Space, Empty, Spin, message, Divider, Tag, Modal } from "antd"
// // import {
// //   DownloadOutlined,
// //   TrophyOutlined,
// //   CheckCircleOutlined,
// //   FilePdfOutlined,
// //   ShareAltOutlined,
// // } from "@ant-design/icons"
// // import { useNavigate, useLocation } from "react-router-dom"
// // import { useAuth } from "../contexts/AuthContext"
// // import { generateCertificate } from "../utils/certificateGenerator"

// // const { Title, Text, Paragraph } = Typography

// // const Certificate = ({ windowWidth }) => {
// //   const navigate = useNavigate()
// //   const location = useLocation()
// //   const { user } = useAuth()
// //   const [loading, setLoading] = useState(true)
// //   const [completedCourses, setCompletedCourses] = useState([])
// //   const [selectedCertificate, setSelectedCertificate] = useState(null)
// //   const [certificateModalVisible, setCertificateModalVisible] = useState(false)
// //   const isMobile = windowWidth < 768

// //   // Get courseId from query params if available
// //   const queryParams = new URLSearchParams(location.search)
// //   const courseIdFromQuery = queryParams.get("courseId")

// //   useEffect(() => {
// //     const fetchCompletedCourses = async () => {
// //       setLoading(true)
// //       try {
// //         // In a real app, this would be an API call
// //         await new Promise((resolve) => setTimeout(resolve, 1000))

// //         // Mock completed courses data
// //         const mockCourses = [
// //           {
// //             id: "1",
// //             title: "Advanced Web Development with React",
// //             completionDate: "2023-10-15",
// //             instructor: "Dr. Jane Smith",
// //             thumbnail: "https://via.placeholder.com/800x450",
// //             category: "IT",
// //             duration: "12 hours",
// //           },
// //           {
// //             id: "2",
// //             title: "Python for Data Science",
// //             completionDate: "2023-09-22",
// //             instructor: "Prof. Michael Johnson",
// //             thumbnail: "https://via.placeholder.com/800x450",
// //             category: "IT",
// //             duration: "10 hours",
// //           },
// //           {
// //             id: "3",
// //             title: "Digital Marketing Fundamentals",
// //             completionDate: "2023-08-05",
// //             instructor: "Sarah Williams",
// //             thumbnail: "https://via.placeholder.com/800x450",
// //             category: "Non-IT",
// //             duration: "8 hours",
// //           },
// //         ]

// //         setCompletedCourses(mockCourses)

// //         // If courseId is provided in query params, select that certificate
// //         if (courseIdFromQuery) {
// //           const course = mockCourses.find((c) => c.id === courseIdFromQuery)
// //           if (course) {
// //             setSelectedCertificate(course)
// //             setCertificateModalVisible(true)
// //           }
// //         }

// //         setLoading(false)
// //       } catch (error) {
// //         console.error("Error fetching completed courses:", error)
// //         message.error("Failed to load certificates")
// //         setLoading(false)
// //       }
// //     }

// //     fetchCompletedCourses()
// //   }, [courseIdFromQuery])

// //   const handleDownloadCertificate = (course) => {
// //     if (!user) return

// //     try {
// //       generateCertificate({
// //         studentName: user.name,
// //         courseName: course.title,
// //         completionDate: new Date(course.completionDate).toLocaleDateString(),
// //         instructorName: course.instructor,
// //       })

// //       message.success("Certificate downloaded successfully!")
// //     } catch (error) {
// //       console.error("Error generating certificate:", error)
// //       message.error("Failed to generate certificate. Please try again.")
// //     }
// //   }

// //   const viewCertificate = (course) => {
// //     setSelectedCertificate(course)
// //     setCertificateModalVisible(true)
// //   }

// //   if (loading) {
// //     return (
// //       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
// //         <Spin size="large" tip="Loading certificates..." />
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="certificate-container" style={{ padding: "16px" }}>
// //       <Card bordered={false} className="page-header-card" style={{ marginBottom: "24px" }}>
// //         <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
// //           <div
// //             style={{
// //               backgroundColor: "#f0f5ff",
// //               borderRadius: "50%",
// //               width: "64px",
// //               height: "64px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <TrophyOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
// //           </div>
// //           <div>
// //             <Title level={4} style={{ margin: 0 }}>
// //               Your Certificates
// //             </Title>
// //             <Text type="secondary">View and download your course completion certificates</Text>
// //           </div>
// //         </div>
// //       </Card>

// //       {completedCourses.length === 0 ? (
// //         <Card bordered={false}>
// //           <Empty
// //             description={
// //               <div>
// //                 <Title level={5}>No Certificates Yet</Title>
// //                 <Paragraph>Complete a course to earn your first certificate.</Paragraph>
// //                 <Button type="primary" onClick={() => navigate("/courses")}>
// //                   Browse Courses
// //                 </Button>
// //               </div>
// //             }
// //             image={Empty.PRESENTED_IMAGE_SIMPLE}
// //           />
// //         </Card>
// //       ) : (
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
// //             gap: "16px",
// //           }}
// //         >
// //           {completedCourses.map((course) => (
// //             <Card
// //               key={course.id}
// //               hoverable
// //               cover={
// //                 <div style={{ position: "relative" }}>
// //                   <img
// //                     alt={course.title}
// //                     src={course.thumbnail || "/placeholder.svg"}
// //                     style={{ height: "160px", objectFit: "cover" }}
// //                   />
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       top: 0,
// //                       left: 0,
// //                       width: "100%",
// //                       height: "100%",
// //                       background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       justifyContent: "center",
// //                       alignItems: "center",
// //                       padding: "16px",
// //                     }}
// //                   >
// //                     <FilePdfOutlined style={{ fontSize: "48px", color: "white", marginBottom: "8px" }} />
// //                     <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
// //                       Certificate of Completion
// //                     </Text>
// //                   </div>
// //                 </div>
// //               }
// //               actions={[
// //                 <Button
// //                   key="download"
// //                   type="text"
// //                   icon={<DownloadOutlined />}
// //                   onClick={() => handleDownloadCertificate(course)}
// //                 >
// //                   Download
// //                 </Button>,
// //                 <Button
// //                   key="share"
// //                   type="text"
// //                   icon={<ShareAltOutlined />}
// //                   onClick={() => message.info("Sharing functionality coming soon!")}
// //                 >
// //                   Share
// //                 </Button>,
// //               ]}
// //               onClick={() => viewCertificate(course)}
// //             >
// //               <Card.Meta
// //                 title={course.title}
// //                 description={
// //                   <Space direction="vertical" size="small">
// //                     <div>
// //                       <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
// //                       <Text>Completed on {new Date(course.completionDate).toLocaleDateString()}</Text>
// //                     </div>
// //                     <div>
// //                       <Tag color="blue">{course.category}</Tag>
// //                     </div>
// //                   </Space>
// //                 }
// //               />
// //             </Card>
// //           ))}
// //         </div>
// //       )}

// //       {/* Certificate Preview Modal */}
// //       <Modal
// //         title="Certificate Preview"
// //         open={certificateModalVisible}
// //         onCancel={() => setCertificateModalVisible(false)}
// //         footer={[
// //           <Button key="back" onClick={() => setCertificateModalVisible(false)}>
// //             Close
// //           </Button>,
// //           <Button
// //             key="download"
// //             type="primary"
// //             icon={<DownloadOutlined />}
// //             onClick={() => {
// //               handleDownloadCertificate(selectedCertificate)
// //               setCertificateModalVisible(false)
// //             }}
// //           >
// //             Download Certificate
// //           </Button>,
// //         ]}
// //         width={800}
// //       >
// //         {selectedCertificate && (
// //           <div
// //             style={{
// //               border: "10px solid #f0f5ff",
// //               padding: "32px",
// //               textAlign: "center",
// //               background: "linear-gradient(to bottom right, #ffffff, #f9f9f9)",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 border: "2px solid #1890ff",
// //                 borderRadius: "4px",
// //                 padding: "32px",
// //                 position: "relative",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   top: "-50px",
// //                   left: "-50px",
// //                   width: "100px",
// //                   height: "100px",
// //                   background: "#1890ff",
// //                   transform: "rotate(45deg)",
// //                 }}
// //               />
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   bottom: "-50px",
// //                   right: "-50px",
// //                   width: "100px",
// //                   height: "100px",
// //                   background: "#1890ff",
// //                   transform: "rotate(45deg)",
// //                 }}
// //               />

// //               <Title level={3} style={{ color: "#1890ff", marginBottom: "8px" }}>
// //                 CERTIFICATE OF COMPLETION
// //               </Title>

// //               <div style={{ margin: "16px 0" }}>
// //                 <Text>This is to certify that</Text>
// //                 <Title level={2} style={{ margin: "16px 0" }}>
// //                   {user?.name || "Student Name"}
// //                 </Title>
// //                 <Text>has successfully completed the course</Text>
// //                 <Title level={3} style={{ margin: "16px 0", color: "#1890ff" }}>
// //                   {selectedCertificate.title}
// //                 </Title>
// //                 <Text>on {new Date(selectedCertificate.completionDate).toLocaleDateString()}</Text>
// //               </div>

// //               <Divider style={{ margin: "24px 0" }} />

// //               <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
// //                 <div>
// //                   <div style={{ borderTop: "1px solid #000", width: "150px", margin: "0 auto" }}></div>
// //                   <Text>Instructor Signature</Text>
// //                   <div>
// //                     <Text strong>{selectedCertificate.instructor}</Text>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <div style={{ borderTop: "1px solid #000", width: "150px", margin: "0 auto" }}></div>
// //                   <Text>COL Director</Text>
// //                   <div>
// //                     <Text strong>Dr. Robert Wilson</Text>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div style={{ marginTop: "32px" }}>
// //                 <Text type="secondary">
// //                   Certificate ID: COL-{Math.random().toString(36).substring(2, 10).toUpperCase()}
// //                 </Text>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </Modal>
// //     </div>
// //   )
// // }

// // export default Certificate

// "use client"

// import { useState, useEffect } from "react"
// import { Card, Typography, Button, Space, Empty, Spin, message, Divider, Tag, Modal } from "antd"
// import {
//   DownloadOutlined,
//   TrophyOutlined,
//   CheckCircleOutlined,
//   FilePdfOutlined,
//   ShareAltOutlined,
// } from "@ant-design/icons"
// import { useNavigate, useLocation } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
// import { generateCertificate } from "../utils/certificateGenerator"

// const { Title, Text, Paragraph } = Typography

// const Certificate = ({ windowWidth }) => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const { user } = useAuth()
//   const [loading, setLoading] = useState(true)
//   const [completedCourses, setCompletedCourses] = useState([])
//   const [selectedCertificate, setSelectedCertificate] = useState(null)
//   const [certificateModalVisible, setCertificateModalVisible] = useState(false)
//   const isMobile = windowWidth < 768

//   // Get courseId from query params if available
//   const queryParams = new URLSearchParams(location.search)
//   const courseIdFromQuery = queryParams.get("courseId")

//   useEffect(() => {
//     const fetchCompletedCourses = async () => {
//       setLoading(true)
//       try {
//         // In a real app, this would be an API call
//         await new Promise((resolve) => setTimeout(resolve, 1000))

//         // Mock completed courses data
//         const mockCourses = [
//           {
//             id: "1",
//             title: "Advanced Web Development with React",
//             completionDate: "2023-10-15",
//             instructor: "Dr. Jane Smith",
//             thumbnail: "https://via.placeholder.com/800x450",
//             category: "IT",
//             duration: "12 hours",
//           },
//           {
//             id: "2",
//             title: "Python for Data Science",
//             completionDate: "2023-09-22",
//             instructor: "Prof. Michael Johnson",
//             thumbnail: "https://via.placeholder.com/800x450",
//             category: "IT",
//             duration: "10 hours",
//           },
//           {
//             id: "3",
//             title: "Digital Marketing Fundamentals",
//             completionDate: "2023-08-05",
//             instructor: "Sarah Williams",
//             thumbnail: "https://via.placeholder.com/800x450",
//             category: "Non-IT",
//             duration: "8 hours",
//           },
//         ]

//         setCompletedCourses(mockCourses)

//         // If courseId is provided in query params, select that certificate
//         if (courseIdFromQuery) {
//           const course = mockCourses.find((c) => c.id === courseIdFromQuery)
//           if (course) {
//             setSelectedCertificate(course)
//             setCertificateModalVisible(true)
//           }
//         }

//         setLoading(false)
//       } catch (error) {
//         console.error("Error fetching completed courses:", error)
//         message.error("Failed to load certificates")
//         setLoading(false)
//       }
//     }

//     fetchCompletedCourses()
//   }, [courseIdFromQuery])

//   const handleDownloadCertificate = (course) => {
//     if (!user) return

//     try {
//       generateCertificate({
//         studentName: user.name,
//         courseName: course.title,
//         completionDate: new Date(course.completionDate).toLocaleDateString(),
//         instructorName: course.instructor,
//       })

//       message.success("Certificate downloaded successfully!")
//     } catch (error) {
//       console.error("Error generating certificate:", error)
//       message.error("Failed to generate certificate. Please try again.")
//     }
//   }

//   const viewCertificate = (course) => {
//     setSelectedCertificate(course)
//     setCertificateModalVisible(true)
//   }

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
//         <Spin size="large" tip="Loading certificates..." />
//       </div>
//     )
//   }

//   return (
//     <div className="certificate-container" style={{ padding: "16px" }}>
//       <Card bordered={false} className="page-header-card" style={{ marginBottom: "24px" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//           <div
//             style={{
//               backgroundColor: "#f0f5ff",
//               borderRadius: "50%",
//               width: "64px",
//               height: "64px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <TrophyOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
//           </div>
//           <div>
//             <Title level={4} style={{ margin: 0 }}>
//               Your Certificates
//             </Title>
//             <Text type="secondary">View and download your course completion certificates</Text>
//           </div>
//         </div>
//       </Card>

//       {completedCourses.length === 0 ? (
//         <Card bordered={false}>
//           <Empty
//             description={
//               <div>
//                 <Title level={5}>No Certificates Yet</Title>
//                 <Paragraph>Complete a course to earn your first certificate.</Paragraph>
//                 <Button type="primary" onClick={() => navigate("/courses")}>
//                   Browse Courses
//                 </Button>
//               </div>
//             }
//             image={Empty.PRESENTED_IMAGE_SIMPLE}
//           />
//         </Card>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
//             gap: "16px",
//           }}
//         >
//           {completedCourses.map((course) => (
//             <Card
//               key={course.id}
//               hoverable
//               cover={
//                 <div style={{ position: "relative" }}>
//                   <img
//                     alt={course.title}
//                     src={course.thumbnail || "/placeholder.svg"}
//                     style={{ height: "160px", objectFit: "cover" }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       padding: "16px",
//                     }}
//                   >
//                     <FilePdfOutlined style={{ fontSize: "48px", color: "white", marginBottom: "8px" }} />
//                     <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
//                       Certificate of Completion
//                     </Text>
//                   </div>
//                 </div>
//               }
//               actions={[
//                 <Button
//                   key="download"
//                   type="text"
//                   icon={<DownloadOutlined />}
//                   onClick={() => handleDownloadCertificate(course)}
//                 >
//                   Download
//                 </Button>,
//                 <Button
//                   key="share"
//                   type="text"
//                   icon={<ShareAltOutlined />}
//                   onClick={() => message.info("Sharing functionality coming soon!")}
//                 >
//                   Share
//                 </Button>,
//               ]}
//               onClick={() => viewCertificate(course)}
//             >
//               <Card.Meta
//                 title={course.title}
//                 description={
//                   <Space direction="vertical" size="small">
//                     <div>
//                       <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
//                       <Text>Completed on {new Date(course.completionDate).toLocaleDateString()}</Text>
//                     </div>
//                     <div>
//                       <Tag color="blue">{course.category}</Tag>
//                     </div>
//                   </Space>
//                 }
//               />
//             </Card>
//           ))}
//         </div>
//       )}

//       {/* Certificate Preview Modal */}
//       <Modal
//         title="Certificate Preview"
//         open={certificateModalVisible}
//         onCancel={() => setCertificateModalVisible(false)}
//         footer={[
//           <Button key="back" onClick={() => setCertificateModalVisible(false)}>
//             Close
//           </Button>,
//           <Button
//             key="download"
//             type="primary"
//             icon={<DownloadOutlined />}
//             onClick={() => {
//               handleDownloadCertificate(selectedCertificate)
//               setCertificateModalVisible(false)
//             }}
//           >
//             Download Certificate
//           </Button>,
//         ]}
//         width={800}
//       >
//         {selectedCertificate && (
//           <div
//             style={{
//               border: "10px solid #f0f5ff",
//               padding: "32px",
//               textAlign: "center",
//               background: "linear-gradient(to bottom right, #ffffff, #f9f9f9)",
//             }}
//           >
//             <div
//               style={{
//                 border: "2px solid #1890ff",
//                 borderRadius: "4px",
//                 padding: "32px",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-50px",
//                   left: "-50px",
//                   width: "100px",
//                   height: "100px",
//                   background: "#1890ff",
//                   transform: "rotate(45deg)",
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "-50px",
//                   right: "-50px",
//                   width: "100px",
//                   height: "100px",
//                   background: "#1890ff",
//                   transform: "rotate(45deg)",
//                 }}
//               />

//               <Title level={3} style={{ color: "#1890ff", marginBottom: "8px" }}>
//                 CERTIFICATE OF COMPLETION
//               </Title>

//               <div style={{ margin: "16px 0" }}>
//                 <Text>This is to certify that</Text>
//                 <Title level={2} style={{ margin: "16px 0" }}>
//                   {user?.name || "Student Name"}
//                 </Title>
//                 <Text>has successfully completed the course</Text>
//                 <Title level={3} style={{ margin: "16px 0", color: "#1890ff" }}>
//                   {selectedCertificate.title}
//                 </Title>
//                 <Text>on {new Date(selectedCertificate.completionDate).toLocaleDateString()}</Text>
//               </div>

//               <Divider style={{ margin: "24px 0" }} />

//               <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
//                 <div>
//                   <div style={{ borderTop: "1px solid #000", width: "150px", margin: "0 auto" }}></div>
//                   <Text>Instructor Signature</Text>
//                   <div>
//                     <Text strong>{selectedCertificate.instructor}</Text>
//                   </div>
//                 </div>

//                 <div>
//                   <div style={{ borderTop: "1px solid #000", width: "150px", margin: "0 auto" }}></div>
//                   <Text>COL Director</Text>
//                   <div>
//                     <Text strong>Dr. Robert Wilson</Text>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: "32px" }}>
//                 <Text type="secondary">
//                   Certificate ID: COL-{Math.random().toString(36).substring(2, 10).toUpperCase()}
//                 </Text>
//               </div>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   )
// }

// export default Certificate

"use client"

import { useState, useEffect } from "react"
import { Card, Typography, Button, Spin, message, Empty, List, Tag } from "antd"
import { DownloadOutlined, TrophyOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import axios from "axios"
import { jsPDF } from "jspdf"
import "jspdf-autotable"

const { Title, Text, Paragraph } = Typography

const Certificate = ({ courseId, userId }) => {
  const [loading, setLoading] = useState(false)
  const [courseData, setCourseData] = useState(null)
  const [completedVideos, setCompletedVideos] = useState([])
  const [certificateLoading, setCertificateLoading] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetchCourseData()
    fetchCompletedVideos()

    // Add responsive handling
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [courseId, userId])

  const fetchCourseData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/courses/${courseId}`)
      setCourseData(response.data)
    } catch (error) {
      console.error("Error fetching course data:", error)
      message.error("Failed to load course data")
    } finally {
      setLoading(false)
    }
  }

  const fetchCompletedVideos = async () => {
    try {
      const response = await axios.get(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/progress/${userId}/${courseId}/completed`)
      setCompletedVideos(response.data.completedVideos || [])
    } catch (error) {
      console.error("Error fetching completed videos:", error)
    }
  }

  const generateCertificate = async () => {
    if (!courseData) return

    // Check if all videos are completed without skipping
    if (completedVideos.length < courseData.videos.length) {
      message.warning("You must complete all videos without skipping to generate a course certificate")
      return
    }

    setCertificateLoading(true)

    try {
      // Create PDF certificate
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })

      // Add background color
      doc.setFillColor(240, 240, 240)
      doc.rect(0, 0, 297, 210, "F")

      // Add border
      doc.setDrawColor(0, 102, 204)
      doc.setLineWidth(5)
      doc.rect(10, 10, 277, 190)

      // Add header
      doc.setFont("helvetica", "bold")
      doc.setTextColor(0, 102, 204)
      doc.setFontSize(30)
      doc.text("CERTIFICATE OF COMPLETION", 148.5, 40, { align: "center" })

      // Add logo/icon
      // This would typically be an image, but for simplicity we'll use text
      doc.setFontSize(20)
      doc.text("🏆 Prefcol Edutech Solutions", 148.5, 60, { align: "center" })

      // Add recipient name
      doc.setFont("helvetica", "normal")
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(24)
      doc.text("This is to certify that", 148.5, 80, { align: "center" })

      // Add user name
      doc.setFont("helvetica", "bold")
      doc.setFontSize(28)
      doc.text(courseData.userName || "Student Name", 148.5, 100, { align: "center" })

      // Add course details
      doc.setFont("helvetica", "normal")
      doc.setFontSize(16)
      doc.text("has successfully completed the course", 148.5, 115, { align: "center" })

      doc.setFont("helvetica", "bold")
      doc.setFontSize(24)
      doc.text(courseData.title, 148.5, 130, { align: "center" })

      // Add date
      doc.setFont("helvetica", "normal")
      doc.setFontSize(14)
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      doc.text(`Issued on: ${currentDate}`, 148.5, 150, { align: "center" })

      // Add signature
      doc.setFont("helvetica", "italic")
      doc.text("Prefcol Edutech Solutions", 148.5, 170, { align: "center" })
      doc.setFontSize(12)
      doc.text("Authorized Signature", 148.5, 175, { align: "center" })

      // Save the PDF
      doc.save(`${courseData.title.replace(/\s+/g, "_")}_Certificate.pdf`)

      // Record certificate generation in the database
      await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/certificates`, {
        userId,
        courseId,
        courseTitle: courseData.title,
        issueDate: new Date().toISOString(),
      })

      message.success("Certificate generated successfully")
    } catch (error) {
      console.error("Error generating certificate:", error)
      message.error("Failed to generate certificate")
    } finally {
      setCertificateLoading(false)
    }
  }

  if (loading) {
    return (
      <Card className="certificate-card">
        <div className="loading-container">
          <Spin size="large" />
          <Text>Loading course data...</Text>
        </div>
      </Card>
    )
  }

  if (!courseData) {
    return (
      <Card className="certificate-card">
        <Empty description="Course data not available" />
      </Card>
    )
  }

  const allVideosCompleted = completedVideos.length === courseData.videos.length

  // Responsive styles
  const cardStyle = {
    padding: windowWidth < 576 ? "12px" : "24px",
    margin: windowWidth < 576 ? "8px 0" : "16px 0",
  }

  const headerStyle = {
    flexDirection: windowWidth < 768 ? "column" : "row",
    alignItems: windowWidth < 768 ? "flex-start" : "center",
    gap: windowWidth < 768 ? "12px" : "24px",
  }

  return (
    <Card className="certificate-card" style={cardStyle}>
      <div className="certificate-header" style={headerStyle}>
        <div className="certificate-title">
          <Title level={windowWidth < 576 ? 4 : 3}>
            <TrophyOutlined /> Course Certificate
          </Title>
        </div>
        <div className="certificate-actions">
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={generateCertificate}
            loading={certificateLoading}
            disabled={!allVideosCompleted}
            size={windowWidth < 576 ? "small" : "middle"}
          >
            Generate Certificate
          </Button>
        </div>
      </div>

      <Paragraph className="certificate-description">
        Complete all videos without skipping to earn your course certificate. This certificate verifies your completion
        of the course and can be downloaded as a PDF.
      </Paragraph>

      <div className="certificate-progress">
        <Title level={4}>Course Progress</Title>
        <List
          itemLayout="horizontal"
          dataSource={courseData.videos || []}
          renderItem={(video) => {
            const isCompleted = completedVideos.some((v) => v.videoId === video.id && !v.hasSkipped)
            const isSkipped = completedVideos.some((v) => v.videoId === video.id && v.hasSkipped)

            return (
              <List.Item
                key={video.id}
                actions={[
                  isCompleted ? (
                    <Tag key="completed" color="success" icon={<CheckCircleOutlined />}>
                      Completed
                    </Tag>
                  ) : isSkipped ? (
                    <Tag key="skipped" color="error" icon={<CloseCircleOutlined />}>
                      Skipped
                    </Tag>
                  ) : (
                    <Tag key="not-completed" color="default">
                      Not Completed
                    </Tag>
                  ),
                ]}
              >
                <List.Item.Meta title={video.title} description={`Duration: ${video.duration || "Unknown"}`} />
              </List.Item>
            )
          }}
        />
      </div>

      {!allVideosCompleted && (
        <div className="certificate-warning">
          <Text type="warning">You need to complete all videos without skipping to generate your certificate.</Text>
        </div>
      )}
    </Card>
  )
}

export default Certificate

