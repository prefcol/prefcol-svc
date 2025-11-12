// // // // // // // // // // "use client";

// // // // // // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // // // // // import {
// // // // // // // // // //   Card,
// // // // // // // // // //   Typography,
// // // // // // // // // //   Button,
// // // // // // // // // //   Row,
// // // // // // // // // //   Col,
// // // // // // // // // //   Empty,
// // // // // // // // // //   Divider,
// // // // // // // // // //   Spin,
// // // // // // // // // //   message,
// // // // // // // // // // } from "antd";
// // // // // // // // // // import { DownloadOutlined, TrophyOutlined, FileDoneOutlined } from "@ant-design/icons";
// // // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // // import axios from "axios";

// // // // // // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // // // // // Utility: Format date
// // // // // // // // // // const formatDate = (date) => {
// // // // // // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // // // // // //     year: "numeric",
// // // // // // // // // //     month: "long",
// // // // // // // // // //     day: "numeric",
// // // // // // // // // //   });
// // // // // // // // // // };

// // // // // // // // // // // Mock: Get student name from auth or localStorage
// // // // // // // // // // const getStudentName = () => {
// // // // // // // // // //   // Replace with real auth user data in production
// // // // // // // // // //   return localStorage.getItem("userName") || "Learner";
// // // // // // // // // // };

// // // // // // // // // // export default function CertificatePage({ windowWidth }) {
// // // // // // // // // //   const [completedCourses, setCompletedCourses] = useState([]);
// // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // //   const canvasRefs = useRef({}); // One canvas per course
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const isMobile = windowWidth < 768;

// // // // // // // // // //   // Fetch completed courses
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchCompletedCourses = async () => {
// // // // // // // // // //       setLoading(true);
// // // // // // // // // //       try {
// // // // // // // // // //         // In real app: fetch from backend
// // // // // // // // // //         const response = await fetch("https://run.mocky.io/v3/d164db5e-7208-4538-9fa4-72c976d8283f");
// // // // // // // // // //         const data = await response.json();

// // // // // // // // // //         const completed = data.filter((course) => course.status === "completed");
// // // // // // // // // //         setCompletedCourses(completed);

// // // // // // // // // //         // Generate all certificates after render
// // // // // // // // // //         setTimeout(() => {
// // // // // // // // // //           completed.forEach((course) => {
// // // // // // // // // //             const canvas = canvasRefs.current[course.id];
// // // // // // // // // //             if (canvas) {
// // // // // // // // // //               generateCertificate(
// // // // // // // // // //                 canvas,
// // // // // // // // // //                 getStudentName(),
// // // // // // // // // //                 course.title,
// // // // // // // // // //                 formatDate(course.completedDate || new Date())
// // // // // // // // // //               );
// // // // // // // // // //             }
// // // // // // // // // //           });
// // // // // // // // // //         }, 100);
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Failed to load courses:", error);
// // // // // // // // // //         message.error("Could not load completed courses.");
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchCompletedCourses();
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Certificate generation function
// // // // // // // // // //   const generateCertificate = (canvas, studentName, courseName, completionDate) => {
// // // // // // // // // //     const ctx = canvas.getContext("2d");
// // // // // // // // // //     const width = canvas.width;
// // // // // // // // // //     const height = canvas.height;

// // // // // // // // // //     // Background gradient
// // // // // // // // // //     const gradient = ctx.createLinearGradient(0, 0, width, 0);
// // // // // // // // // //     gradient.addColorStop(0, "#f0f5ff");
// // // // // // // // // //     gradient.addColorStop(1, "#e6f7ff");
// // // // // // // // // //     ctx.fillStyle = gradient;
// // // // // // // // // //     ctx.fillRect(0, 0, width, height);

// // // // // // // // // //     // Border
// // // // // // // // // //     ctx.strokeStyle = "#1890ff";
// // // // // // // // // //     ctx.lineWidth = 5;
// // // // // // // // // //     ctx.strokeRect(20, 20, width - 40, height - 40);

// // // // // // // // // //     // Inner white background
// // // // // // // // // //     ctx.fillStyle = "#ffffff";
// // // // // // // // // //     ctx.fillRect(40, 40, width - 80, height - 80);

// // // // // // // // // //     // Title
// // // // // // // // // //     ctx.font = "bold 40px 'Times New Roman', serif";
// // // // // // // // // //     ctx.fillStyle = "#003a8c";
// // // // // // // // // //     ctx.textAlign = "center";
// // // // // // // // // //     ctx.fillText("Prefcol Edutech Solutions", width / 2, 100);

// // // // // // // // // //     // Main Heading
// // // // // // // // // //     ctx.font = "bold 50px 'Times New Roman', serif";
// // // // // // // // // //     ctx.fillStyle = "#1890ff";
// // // // // // // // // //     ctx.fillText("Certificate of Completion", width / 2, 170);

// // // // // // // // // //     // Divider line
// // // // // // // // // //     ctx.strokeStyle = "#e6f7ff";
// // // // // // // // // //     ctx.lineWidth = 2;
// // // // // // // // // //     ctx.beginPath();
// // // // // // // // // //     ctx.moveTo(100, 200);
// // // // // // // // // //     ctx.lineTo(width - 100, 200);
// // // // // // // // // //     ctx.stroke();

// // // // // // // // // //     // Body Text
// // // // // // // // // //     ctx.font = "24px 'Georgia', serif";
// // // // // // // // // //     ctx.fillStyle = "#333";
// // // // // // // // // //     ctx.fillText("This is to certify that", width / 2, 250);

// // // // // // // // // //     // Student Name (Large)
// // // // // // // // // //     ctx.font = "bold 36px 'Georgia', serif";
// // // // // // // // // //     ctx.fillStyle = "#1890ff";
// // // // // // // // // //     ctx.fillText(studentName, width / 2, 310);

// // // // // // // // // //     // Course Name
// // // // // // // // // //     ctx.font = "24px 'Georgia', serif";
// // // // // // // // // //     ctx.fillStyle = "#333";
// // // // // // // // // //     ctx.fillText("has successfully completed the course", width / 2, 360);

// // // // // // // // // //     ctx.font = "bold 30px 'Georgia', serif";
// // // // // // // // // //     ctx.fillText(courseName, width / 2, 410);

// // // // // // // // // //     // Date
// // // // // // // // // //     ctx.font = "20px 'Georgia', serif";
// // // // // // // // // //     ctx.fillStyle = "#555";
// // // // // // // // // //     ctx.fillText(`Date of Completion: ${completionDate}`, width / 2, 470);

// // // // // // // // // //     // Signature Line
// // // // // // // // // //     ctx.font = "italic 18px 'Georgia', serif";
// // // // // // // // // //     ctx.fillText("Authorized Signature", width / 2, 540);
// // // // // // // // // //     ctx.beginPath();
// // // // // // // // // //     ctx.moveTo(width / 2 - 80, 500);
// // // // // // // // // //     ctx.lineTo(width / 2 + 80, 500);
// // // // // // // // // //     ctx.stroke();

// // // // // // // // // //     // Logo / Seal
// // // // // // // // // //     ctx.font = "bold 60px 'Arial', sans-serif";
// // // // // // // // // //     ctx.fillStyle = "#1890ff";
// // // // // // // // // //     ctx.fillText("🎓", width / 2 - 60, 580);
// // // // // // // // // //     ctx.font = "16px Arial";
// // // // // // // // // //     ctx.fillText("Prefcol", width / 2 + 20, 580);
// // // // // // // // // //   };

// // // // // // // // // //   // Handle download
// // // // // // // // // //   const handleDownload = (course) => {
// // // // // // // // // //     const canvas = canvasRefs.current[course.id];
// // // // // // // // // //     if (!canvas) return;

// // // // // // // // // //     const link = document.createElement("a");
// // // // // // // // // //     link.href = canvas.toDataURL("image/png");
// // // // // // // // // //     link.download = `Prefcol-Certificate-${course.title.replace(/\s+/g, "-")}.png`;
// // // // // // // // // //     document.body.appendChild(link);
// // // // // // // // // //     link.click();
// // // // // // // // // //     document.body.removeChild(link);
// // // // // // // // // //     message.success("Certificate downloaded!");
// // // // // // // // // //   };

// // // // // // // // // //   if (loading) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div style={{ textAlign: "center", marginTop: 50 }}>
// // // // // // // // // //         <Spin size="large" />
// // // // // // // // // //         <Paragraph>Loading certificates...</Paragraph>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   if (completedCourses.length === 0) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div style={{ padding: "24px" }}>
// // // // // // // // // //         <Title level={3}>Certificates</Title>
// // // // // // // // // //         <Empty
// // // // // // // // // //           image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
// // // // // // // // // //           description={
// // // // // // // // // //             <span>
// // // // // // // // // //               You haven't completed any courses yet. <br />
// // // // // // // // // //               <Button type="primary" onClick={() => navigate("/Student-portal/my-courses")}>
// // // // // // // // // //                 Go to My Courses
// // // // // // // // // //               </Button>
// // // // // // // // // //             </span>
// // // // // // // // // //           }
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ padding: "24px" }}>
// // // // // // // // // //       <Title level={3}>
// // // // // // // // // //         <TrophyOutlined /> My Certificates
// // // // // // // // // //       </Title>
// // // // // // // // // //       <Paragraph type="secondary">
// // // // // // // // // //         Download and share your achievement with the world!
// // // // // // // // // //       </Paragraph>

// // // // // // // // // //       <Divider />

// // // // // // // // // //       <Row gutter={[24, 24]}>
// // // // // // // // // //         {completedCourses.map((course) => (
// // // // // // // // // //           <Col xs={24} sm={12} lg={8} key={course.id}>
// // // // // // // // // //             <Card
// // // // // // // // // //               hoverable
// // // // // // // // // //               style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
// // // // // // // // // //               bodyStyle={{ padding: 0 }}
// // // // // // // // // //               actions={[
// // // // // // // // // //                 <Button
// // // // // // // // // //                   key="download"
// // // // // // // // // //                   type="primary"
// // // // // // // // // //                   icon={<DownloadOutlined />}
// // // // // // // // // //                   onClick={() => handleDownload(course)}
// // // // // // // // // //                   block
// // // // // // // // // //                 >
// // // // // // // // // //                   Download
// // // // // // // // // //                 </Button>,
// // // // // // // // // //               ]}
// // // // // // // // // //             >
// // // // // // // // // //               {/* Certificate Preview */}
// // // // // // // // // //               <div
// // // // // // // // // //                 style={{
// // // // // // // // // //                   position: "relative",
// // // // // // // // // //                   width: "100%",
// // // // // // // // // //                   height: 250,
// // // // // // // // // //                   overflow: "hidden",
// // // // // // // // // //                   backgroundColor: "#f0f5ff",
// // // // // // // // // //                   border: "1px solid #e6f7ff",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 <canvas
// // // // // // // // // //                   ref={(el) => (canvasRefs.current[course.id] = el)}
// // // // // // // // // //                   width={400}
// // // // // // // // // //                   height={300}
// // // // // // // // // //                   style={{ width: "100%", height: "100%", display: "block" }}
// // // // // // // // // //                 />
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Card Footer */}
// // // // // // // // // //               <div style={{ padding: "16px" }}>
// // // // // // // // // //                 <Title level={5} style={{ margin: 0 }}>
// // // // // // // // // //                   {course.title}
// // // // // // // // // //                 </Title>
// // // // // // // // // //                 <Text type="secondary">
// // // // // // // // // //                   Completed on {formatDate(course.completedDate || new Date())}
// // // // // // // // // //                 </Text>
// // // // // // // // // //               </div>
// // // // // // // // // //             </Card>
// // // // // // // // // //           </Col>
// // // // // // // // // //         ))}
// // // // // // // // // //       </Row>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // "use client";

// // // // // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // // // // import {
// // // // // // // // //   Card,
// // // // // // // // //   Typography,
// // // // // // // // //   Button,
// // // // // // // // //   Row,
// // // // // // // // //   Col,
// // // // // // // // //   Divider,
// // // // // // // // //   Spin,
// // // // // // // // //   message,
// // // // // // // // //   Alert,
// // // // // // // // // } from "antd";
// // // // // // // // // import { DownloadOutlined, TrophyOutlined, FileDoneOutlined, EyeOutlined } from "@ant-design/icons";
// // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // import { Tag } from "antd";

// // // // // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // // // // Format date
// // // // // // // // // const formatDate = (date) => {
// // // // // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // // // // //     year: "numeric",
// // // // // // // // //     month: "long",
// // // // // // // // //     day: "numeric",
// // // // // // // // //   });
// // // // // // // // // };

// // // // // // // // // export default function CertificatePage({ windowWidth }) {
// // // // // // // // //   const [completedCourses, setCompletedCourses] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // //   const canvasRef = useRef(null); // For sample certificate
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const isMobile = windowWidth < 768;

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchCompletedCourses = async () => {
// // // // // // // // //       setLoading(true);
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch("https://run.mocky.io/v3/d164db5e-7208-4538-9fa4-72c976d8283f");
// // // // // // // // //         const data = await response.json();

// // // // // // // // //         const completed = data.filter((course) => course.status === "completed");
// // // // // // // // //         setCompletedCourses(completed);

// // // // // // // // //         // Only generate sample if no real certificates
// // // // // // // // //         if (completed.length === 0 && canvasRef.current) {
// // // // // // // // //           generateSampleCertificate(canvasRef.current);
// // // // // // // // //         }
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Failed to load courses:", error);
// // // // // // // // //         message.error("Could not load course data.");
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchCompletedCourses();
// // // // // // // // //   }, []);

// // // // // // // // //   // Generate sample certificate with "Student Name"
// // // // // // // // //   const generateSampleCertificate = (canvas) => {
// // // // // // // // //     const ctx = canvas.getContext("2d");
// // // // // // // // //     const width = canvas.width;
// // // // // // // // //     const height = canvas.height;

// // // // // // // // //     // Background
// // // // // // // // //     const gradient = ctx.createLinearGradient(0, 0, width, 0);
// // // // // // // // //     gradient.addColorStop(0, "#f0f5ff");
// // // // // // // // //     gradient.addColorStop(1, "#e6f7ff");
// // // // // // // // //     ctx.fillStyle = gradient;
// // // // // // // // //     ctx.fillRect(0, 0, width, height);

// // // // // // // // //     // Border
// // // // // // // // //     ctx.strokeStyle = "#1890ff";
// // // // // // // // //     ctx.lineWidth = 5;
// // // // // // // // //     ctx.strokeRect(20, 20, width - 40, height - 40);

// // // // // // // // //     // Inner background
// // // // // // // // //     ctx.fillStyle = "#ffffff";
// // // // // // // // //     ctx.fillRect(40, 40, width - 80, height - 80);

// // // // // // // // //     // Title
// // // // // // // // //     ctx.font = "bold 40px 'Times New Roman', serif";
// // // // // // // // //     ctx.fillStyle = "#003a8c";
// // // // // // // // //     ctx.textAlign = "center";
// // // // // // // // //     ctx.fillText("Prefcol Edutech Solutions", width / 2, 100);

// // // // // // // // //     // Main Heading
// // // // // // // // //     ctx.font = "bold 50px 'Times New Roman', serif";
// // // // // // // // //     ctx.fillStyle = "#1890ff";
// // // // // // // // //     ctx.fillText("Certificate of Completion", width / 2, 170);

// // // // // // // // //     // Divider
// // // // // // // // //     ctx.strokeStyle = "#e6f7ff";
// // // // // // // // //     ctx.lineWidth = 2;
// // // // // // // // //     ctx.beginPath();
// // // // // // // // //     ctx.moveTo(100, 200);
// // // // // // // // //     ctx.lineTo(width - 100, 200);
// // // // // // // // //     ctx.stroke();

// // // // // // // // //     // Body
// // // // // // // // //     ctx.font = "24px 'Georgia', serif";
// // // // // // // // //     ctx.fillStyle = "#333";
// // // // // // // // //     ctx.fillText("This is to certify that", width / 2, 250);

// // // // // // // // //     // Placeholder Name
// // // // // // // // //     ctx.font = "bold 36px 'Georgia', serif";
// // // // // // // // //     ctx.fillStyle = "#1890ff";
// // // // // // // // //     ctx.fillText("Student Name", width / 2, 310);

// // // // // // // // //     // Course
// // // // // // // // //     ctx.font = "24px 'Georgia', serif";
// // // // // // // // //     ctx.fillStyle = "#333";
// // // // // // // // //     ctx.fillText("has successfully completed the course", width / 2, 360);

// // // // // // // // //     ctx.font = "bold 30px 'Georgia', serif";
// // // // // // // // //     ctx.fillText("Software Development in Java", width / 2, 410);

// // // // // // // // //     // Date
// // // // // // // // //     ctx.font = "20px 'Georgia', serif";
// // // // // // // // //     ctx.fillStyle = "#555";
// // // // // // // // //     ctx.fillText("Date of Completion: May 15, 2025", width / 2, 470);

// // // // // // // // //     // Signature
// // // // // // // // //     ctx.font = "italic 18px 'Georgia', serif";
// // // // // // // // //     ctx.fillText("Authorized Signature", width / 2, 540);
// // // // // // // // //     ctx.beginPath();
// // // // // // // // //     ctx.moveTo(width / 2 - 80, 500);
// // // // // // // // //     ctx.lineTo(width / 2 + 80, 500);
// // // // // // // // //     ctx.stroke();

// // // // // // // // //     // Seal
// // // // // // // // //     ctx.font = "bold 60px 'Arial', sans-serif";
// // // // // // // // //     ctx.fillStyle = "#1890ff";
// // // // // // // // //     ctx.fillText("🎓", width / 2 - 60, 580);
// // // // // // // // //     ctx.font = "16px Arial";
// // // // // // // // //     ctx.fillText("Prefcol", width / 2 + 20, 580);
// // // // // // // // //   };

// // // // // // // // //   // Handle download of sample
// // // // // // // // //   const handleDownloadSample = () => {
// // // // // // // // //     if (!canvasRef.current) return;

// // // // // // // // //     const link = document.createElement("a");
// // // // // // // // //     link.href = canvasRef.current.toDataURL("image/png");
// // // // // // // // //     link.download = "Prefcol-Certificate-Sample.png";
// // // // // // // // //     document.body.appendChild(link);
// // // // // // // // //     link.click();
// // // // // // // // //     document.body.removeChild(link);
// // // // // // // // //     message.success("Sample certificate downloaded!");
// // // // // // // // //   };

// // // // // // // // //   if (loading) {
// // // // // // // // //     return (
// // // // // // // // //       <div style={{ textAlign: "center", marginTop: 50 }}>
// // // // // // // // //         <Spin size="large" />
// // // // // // // // //         <Paragraph>Loading...</Paragraph>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ padding: "24px" }}>
// // // // // // // // //       <Title level={3}>
// // // // // // // // //         <TrophyOutlined /> My Certificates
// // // // // // // // //       </Title>

// // // // // // // // //       {completedCourses.length === 0 ? (
// // // // // // // // //         <>
// // // // // // // // //           <Alert
// // // // // // // // //             message="No Certificates Yet"
// // // // // // // // //             description="Complete a course to earn your first certificate. In the meantime, see what your certificate will look like!"
// // // // // // // // //             type="info"
// // // // // // // // //             showIcon
// // // // // // // // //             style={{ marginBottom: 24 }}
// // // // // // // // //           />

// // // // // // // // //           {/* Sample Certificate Card */}
// // // // // // // // //           <Card
// // // // // // // // //             style={{
// // // // // // // // //               borderRadius: "12px",
// // // // // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // // //               maxWidth: 400,
// // // // // // // // //               margin: "0 auto",
// // // // // // // // //               textAlign: "center",
// // // // // // // // //             }}
// // // // // // // // //             bodyStyle={{ padding: 0 }}
// // // // // // // // //             cover={
// // // // // // // // //               <div
// // // // // // // // //                 style={{
// // // // // // // // //                   position: "relative",
// // // // // // // // //                   width: "100%",
// // // // // // // // //                   height: 300,
// // // // // // // // //                   overflow: "hidden",
// // // // // // // // //                   backgroundColor: "#f0f5ff",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 <canvas
// // // // // // // // //                   ref={canvasRef}
// // // // // // // // //                   width={400}
// // // // // // // // //                   height={300}
// // // // // // // // //                   style={{ width: "100%", height: "100%", display: "block" }}
// // // // // // // // //                 />
// // // // // // // // //                 <Tag
// // // // // // // // //                   color="blue"
// // // // // // // // //                   style={{
// // // // // // // // //                     position: "absolute",
// // // // // // // // //                     top: 10,
// // // // // // // // //                     left: 10,
// // // // // // // // //                     fontSize: "12px",
// // // // // // // // //                     fontWeight: "bold",
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   SAMPLE
// // // // // // // // //                 </Tag>
// // // // // // // // //               </div>
// // // // // // // // //             }
// // // // // // // // //             actions={[
// // // // // // // // //               <Button
// // // // // // // // //                 key="browse"
// // // // // // // // //                 icon={<EyeOutlined />}
// // // // // // // // //                 onClick={() => navigate("/Student-portal/my-courses")}
// // // // // // // // //               >
// // // // // // // // //                 Browse Courses
// // // // // // // // //               </Button>,
// // // // // // // // //               <Button
// // // // // // // // //                 key="download"
// // // // // // // // //                 type="primary"
// // // // // // // // //                 icon={<DownloadOutlined />}
// // // // // // // // //                 onClick={handleDownloadSample}
// // // // // // // // //               >
// // // // // // // // //                 Download Sample
// // // // // // // // //               </Button>,
// // // // // // // // //             ]}
// // // // // // // // //           >
// // // // // // // // //             <div style={{ padding: "16px" }}>
// // // // // // // // //               <Title level={5} style={{ margin: 0 }}>
// // // // // // // // //                 Software Development in Java
// // // // // // // // //               </Title>
// // // // // // // // //               <Text type="secondary">Sample Certificate</Text>
// // // // // // // // //             </div>
// // // // // // // // //           </Card>

// // // // // // // // //           <Paragraph
// // // // // // // // //             type="secondary"
// // // // // // // // //             style={{ textAlign: "center", marginTop: 24, fontSize: "14px" }}
// // // // // // // // //           >
// // // // // // // // //             ✅ Real certificates will include your name, completion date, and course details.
// // // // // // // // //           </Paragraph>
// // // // // // // // //         </>
// // // // // // // // //       ) : (
// // // // // // // // //         <>
// // // // // // // // //           <Paragraph type="secondary">
// // // // // // // // //             Congratulations! Here are your earned certificates.
// // // // // // // // //           </Paragraph>
// // // // // // // // //           <Divider />

// // // // // // // // //           <Row gutter={[24, 24]}>
// // // // // // // // //             {completedCourses.map((course) => {
// // // // // // // // //               const courseCanvasRef = useRef(null);

// // // // // // // // //               useEffect(() => {
// // // // // // // // //                 if (courseCanvasRef.current) {
// // // // // // // // //                   generateRealCertificate(
// // // // // // // // //                     courseCanvasRef.current,
// // // // // // // // //                     localStorage.getItem("userName") || "Learner",
// // // // // // // // //                     course.title,
// // // // // // // // //                     formatDate(course.completedDate || new Date())
// // // // // // // // //                   );
// // // // // // // // //                 }
// // // // // // // // //               }, [course]);

// // // // // // // // //               const handleDownload = () => {
// // // // // // // // //                 const link = document.createElement("a");
// // // // // // // // //                 link.href = courseCanvasRef.current.toDataURL("image/png");
// // // // // // // // //                 link.download = `Certificate-${course.title.replace(/\s+/g, "-")}.png`;
// // // // // // // // //                 document.body.appendChild(link);
// // // // // // // // //                 link.click();
// // // // // // // // //                 document.body.removeChild(link);
// // // // // // // // //                 message.success("Certificate downloaded!");
// // // // // // // // //               };

// // // // // // // // //               return (
// // // // // // // // //                 <Col xs={24} sm={12} lg={8} key={course.id}>
// // // // // // // // //                   <Card
// // // // // // // // //                     hoverable
// // // // // // // // //                     style={{
// // // // // // // // //                       borderRadius: "12px",
// // // // // // // // //                       overflow: "hidden",
// // // // // // // // //                       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
// // // // // // // // //                     }}
// // // // // // // // //                     bodyStyle={{ padding: 0 }}
// // // // // // // // //                     actions={[
// // // // // // // // //                       <Button
// // // // // // // // //                         key="download"
// // // // // // // // //                         type="primary"
// // // // // // // // //                         icon={<DownloadOutlined />}
// // // // // // // // //                         onClick={handleDownload}
// // // // // // // // //                         block
// // // // // // // // //                       >
// // // // // // // // //                         Download
// // // // // // // // //                       </Button>,
// // // // // // // // //                     ]}
// // // // // // // // //                   >
// // // // // // // // //                     <div
// // // // // // // // //                       style={{
// // // // // // // // //                         position: "relative",
// // // // // // // // //                         width: "100%",
// // // // // // // // //                         height: 250,
// // // // // // // // //                         backgroundColor: "#f0f5ff",
// // // // // // // // //                       }}
// // // // // // // // //                     >
// // // // // // // // //                       <canvas
// // // // // // // // //                         ref={courseCanvasRef}
// // // // // // // // //                         width={400}
// // // // // // // // //                         height={300}
// // // // // // // // //                         style={{ width: "100%", height: "100%", display: "block" }}
// // // // // // // // //                       />
// // // // // // // // //                     </div>
// // // // // // // // //                     <div style={{ padding: "16px" }}>
// // // // // // // // //                       <Title level={5} style={{ margin: 0 }}>
// // // // // // // // //                         {course.title}
// // // // // // // // //                       </Title>
// // // // // // // // //                       <Text type="secondary">
// // // // // // // // //                         Completed on {formatDate(course.completedDate)}
// // // // // // // // //                       </Text>
// // // // // // // // //                     </div>
// // // // // // // // //                   </Card>
// // // // // // // // //                 </Col>
// // // // // // // // //               );
// // // // // // // // //             })}
// // // // // // // // //           </Row>
// // // // // // // // //         </>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // // Helper: Generate real certificate (reusable)
// // // // // // // // // function generateRealCertificate(canvas, studentName, courseName, completionDate) {
// // // // // // // // //   const ctx = canvas.getContext("2d");
// // // // // // // // //   const width = canvas.width;
// // // // // // // // //   const height = canvas.height;

// // // // // // // // //   const gradient = ctx.createLinearGradient(0, 0, width, 0);
// // // // // // // // //   gradient.addColorStop(0, "#f0f5ff");
// // // // // // // // //   gradient.addColorStop(1, "#e6f7ff");
// // // // // // // // //   ctx.fillStyle = gradient;
// // // // // // // // //   ctx.fillRect(0, 0, width, height);

// // // // // // // // //   ctx.strokeStyle = "#1890ff";
// // // // // // // // //   ctx.lineWidth = 5;
// // // // // // // // //   ctx.strokeRect(20, 20, width - 40, height - 40);

// // // // // // // // //   ctx.fillStyle = "#ffffff";
// // // // // // // // //   ctx.fillRect(40, 40, width - 80, height - 80);

// // // // // // // // //   ctx.font = "bold 40px 'Times New Roman', serif";
// // // // // // // // //   ctx.fillStyle = "#003a8c";
// // // // // // // // //   ctx.textAlign = "center";
// // // // // // // // //   ctx.fillText("Prefcol Edutech Solutions", width / 2, 100);

// // // // // // // // //   ctx.font = "bold 50px 'Times New Roman', serif";
// // // // // // // // //   ctx.fillStyle = "#1890ff";
// // // // // // // // //   ctx.fillText("Certificate of Completion", width / 2, 170);

// // // // // // // // //   ctx.strokeStyle = "#e6f7ff";
// // // // // // // // //   ctx.lineWidth = 2;
// // // // // // // // //   ctx.beginPath();
// // // // // // // // //   ctx.moveTo(100, 200);
// // // // // // // // //   ctx.lineTo(width - 100, 200);
// // // // // // // // //   ctx.stroke();

// // // // // // // // //   ctx.font = "24px 'Georgia', serif";
// // // // // // // // //   ctx.fillStyle = "#333";
// // // // // // // // //   ctx.fillText("This is to certify that", width / 2, 250);

// // // // // // // // //   ctx.font = "bold 36px 'Georgia', serif";
// // // // // // // // //   ctx.fillStyle = "#1890ff";
// // // // // // // // //   ctx.fillText(studentName, width / 2, 310);

// // // // // // // // //   ctx.font = "24px 'Georgia', serif";
// // // // // // // // //   ctx.fillStyle = "#333";
// // // // // // // // //   ctx.fillText("has successfully completed the course", width / 2, 360);

// // // // // // // // //   ctx.font = "bold 30px 'Georgia', serif";
// // // // // // // // //   ctx.fillText(courseName, width / 2, 410);

// // // // // // // // //   ctx.font = "20px 'Georgia', serif";
// // // // // // // // //   ctx.fillStyle = "#555";
// // // // // // // // //   ctx.fillText(`Date of Completion: ${completionDate}`, width / 2, 470);

// // // // // // // // //   ctx.font = "italic 18px 'Georgia', serif";
// // // // // // // // //   ctx.fillText("Authorized Signature", width / 2, 540);
// // // // // // // // //   ctx.beginPath();
// // // // // // // // //   ctx.moveTo(width / 2 - 80, 500);
// // // // // // // // //   ctx.lineTo(width / 2 + 80, 500);
// // // // // // // // //   ctx.stroke();

// // // // // // // // //   ctx.font = "bold 60px 'Arial', sans-serif";
// // // // // // // // //   ctx.fillStyle = "#1890ff";
// // // // // // // // //   ctx.fillText("🎓", width / 2 - 60, 580);
// // // // // // // // //   ctx.font = "16px Arial";
// // // // // // // // //   ctx.fillText("Prefcol", width / 2 + 20, 580);
// // // // // // // // // }


// // // // // // // // "use client";

// // // // // // // // import React, { useRef, useEffect, useState, useCallback } from "react";
// // // // // // // // import {
// // // // // // // //   Card,
// // // // // // // //   Button,
// // // // // // // //   Typography,
// // // // // // // //   Image,
// // // // // // // //   Row,
// // // // // // // //   Col,
// // // // // // // //   List,
// // // // // // // //   Divider,
// // // // // // // //   Spin,
// // // // // // // //   message,
// // // // // // // //   Flex,
// // // // // // // // } from "antd";
// // // // // // // // import { DownloadOutlined, ClockCircleOutlined, FileDoneOutlined } from "@ant-design/icons";

// // // // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // // // Example course data
// // // // // // // // const coursesData = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     title: "Software Development in Java",
// // // // // // // //     description: "Learn to build software applications using Java.",
// // // // // // // //     duration: "4 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     title: "Software Development in Python",
// // // // // // // //     description: "Develop applications and scripts using Python programming.",
// // // // // // // //     duration: "6 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     title: "Manual Testing",
// // // // // // // //     description: "Understand the fundamentals of software testing manually.",
// // // // // // // //     duration: "3 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     title: "Automation Testing (Java)",
// // // // // // // //     description: "Automate testing using Java-based frameworks.",
// // // // // // // //     duration: "5 weeks",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // // Format date
// // // // // // // // const formatDate = (date) => {
// // // // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // // // //     year: "numeric",
// // // // // // // //     month: "short",
// // // // // // // //     day: "numeric",
// // // // // // // //   });
// // // // // // // // };

// // // // // // // // // Generate certificate on canvas
// // // // // // // // const generateCertificate = (canvas, studentName, courseName, completionDate) => {
// // // // // // // //   const ctx = canvas.getContext("2d");
// // // // // // // //   const width = canvas.width;
// // // // // // // //   const height = canvas.height;

// // // // // // // //   // Gradient background
// // // // // // // //   const gradient = ctx.createLinearGradient(0, 0, width, 0);
// // // // // // // //   gradient.addColorStop(0, "#4299E1");
// // // // // // // //   gradient.addColorStop(1, "#9F7AEA");
// // // // // // // //   ctx.fillStyle = gradient;
// // // // // // // //   ctx.fillRect(0, 0, width, height);

// // // // // // // //   // Border
// // // // // // // //   ctx.strokeStyle = "#FFFFFF";
// // // // // // // //   ctx.lineWidth = 20;
// // // // // // // //   ctx.strokeRect(20, 20, width - 40, height - 40);

// // // // // // // //   // Inner white background
// // // // // // // //   ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
// // // // // // // //   ctx.fillRect(40, 40, width - 80, height - 80);

// // // // // // // //   // Title
// // // // // // // //   ctx.font = "bold 40px Arial";
// // // // // // // //   ctx.fillStyle = "#2D3748";
// // // // // // // //   ctx.textAlign = "center";
// // // // // // // //   ctx.fillText("Prefcol Edutech Solutions", width / 2, 100);

// // // // // // // //   // Main heading
// // // // // // // //   ctx.font = "bold 50px Arial";
// // // // // // // //   ctx.fillText("Certificate of Completion", width / 2, 170);

// // // // // // // //   // Student Name
// // // // // // // //   ctx.font = "bold 30px Arial";
// // // // // // // //   ctx.fillText(studentName, width / 2, 250);

// // // // // // // //   // Course text
// // // // // // // //   ctx.font = "24px Arial";
// // // // // // // //   ctx.fillText("has successfully completed the course", width / 2, 300);

// // // // // // // //   ctx.font = "bold 28px Arial";
// // // // // // // //   ctx.fillText(courseName, width / 2, 350);

// // // // // // // //   // Completion date
// // // // // // // //   ctx.font = "20px Arial";
// // // // // // // //   ctx.fillText(`Completed on ${completionDate}`, width / 2, 400);

// // // // // // // //   // Signature line
// // // // // // // //   ctx.font = "italic 18px Arial";
// // // // // // // //   ctx.fillText("Authorized Signature", width / 2, 480);
// // // // // // // //   ctx.beginPath();
// // // // // // // //   ctx.moveTo(width / 2 - 100, 440);
// // // // // // // //   ctx.lineTo(width / 2 + 100, 440);
// // // // // // // //   ctx.stroke();

// // // // // // // //   // Logo text
// // // // // // // //   ctx.font = "bold 60px Arial";
// // // // // // // //   ctx.fillStyle = "#4299E1";
// // // // // // // //   ctx.fillText("Prefcol", width / 2, 540);
// // // // // // // // };

// // // // // // // // export default function CertificateGenerator() {
// // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // // // // //   const [certificateImage, setCertificateImage] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const canvasRef = useRef(null);
// // // // // // // //   const currentDate = new Date();
// // // // // // // //   const completionDate = formatDate(currentDate);

// // // // // // // //   // "Student Name" instead of "Learner"
// // // // // // // //   const studentName = "Student Name";

// // // // // // // //   // Generate certificate when course changes
// // // // // // // //   useEffect(() => {
// // // // // // // //     setLoading(true);
// // // // // // // //     if (canvasRef.current) {
// // // // // // // //       const canvas = canvasRef.current;
// // // // // // // //       const ctx = canvas.getContext("2d");
// // // // // // // //       generateCertificate(canvas, studentName, selectedCourse.title, completionDate);
// // // // // // // //       setCertificateImage(canvas.toDataURL("image/png"));
// // // // // // // //     }
// // // // // // // //     setLoading(false);
// // // // // // // //   }, [selectedCourse]);

// // // // // // // //   // Handle download
// // // // // // // //   const handleDownload = useCallback(() => {
// // // // // // // //     if (!certificateImage) {
// // // // // // // //       message.error("Certificate image is not ready yet.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const link = document.createElement("a");
// // // // // // // //     link.href = certificateImage;
// // // // // // // //     const filename = `Prefcol-Edutech-Solutions-${selectedCourse.title
// // // // // // // //       .replace(/\s+/g, "-")
// // // // // // // //       .toLowerCase()}-certificate.png`;
// // // // // // // //     link.download = filename;

// // // // // // // //     document.body.appendChild(link);
// // // // // // // //     link.click();
// // // // // // // //     document.body.removeChild(link);

// // // // // // // //     message.success("Certificate downloaded successfully!");
// // // // // // // //   }, [certificateImage, selectedCourse.title]);

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // // // // //       {/* Header */}
// // // // // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // // // // //         <Title level={2} style={{ color: "#1890ff" }}>
// // // // // // // //           Prefcol Edutech Solutions
// // // // // // // //         </Title>
// // // // // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // // // // //           Demo Certificate
// // // // // // // //         </Paragraph>
// // // // // // // //       </div>

// // // // // // // //       {/* Two-column layout */}
// // // // // // // //       <Row gutter={[32, 32]} align="stretch">
// // // // // // // //         {/* Left: Course Selection */}
// // // // // // // //         <Col xs={24} md={8}>
// // // // // // // //           <Card
// // // // // // // //             title={
// // // // // // // //               <span style={{ fontWeight: "bold", fontSize: "16px" }}>
// // // // // // // //                 Select a Course
// // // // // // // //               </span>
// // // // // // // //             }
// // // // // // // //             bordered={false}
// // // // // // // //             style={{
// // // // // // // //               borderRadius: "12px",
// // // // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // //               height: "100%",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <List
// // // // // // // //               dataSource={coursesData}
// // // // // // // //               renderItem={(course) => (
// // // // // // // //                 <List.Item
// // // // // // // //                   key={course.id}
// // // // // // // //                   onClick={() => setSelectedCourse(course)}
// // // // // // // //                   style={{
// // // // // // // //                     cursor: "pointer",
// // // // // // // //                     border:
// // // // // // // //                       selectedCourse.id === course.id
// // // // // // // //                         ? "2px solid #1890ff"
// // // // // // // //                         : "1px solid #e8e8e8",
// // // // // // // //                     borderRadius: "8px",
// // // // // // // //                     padding: "12px",
// // // // // // // //                     transition: "all 0.2s",
// // // // // // // //                     marginBottom: "8px",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <List.Item.Meta
// // // // // // // //                     title={
// // // // // // // //                       <Text strong style={{ fontSize: "15px" }}>
// // // // // // // //                         {course.title}
// // // // // // // //                       </Text>
// // // // // // // //                     }
// // // // // // // //                     description={
// // // // // // // //                       <Flex align="center" gap="4px" style={{ marginTop: "4px" }}>
// // // // // // // //                         <ClockCircleOutlined style={{ color: "#1890ff" }} />
// // // // // // // //                         <Text type="secondary" style={{ fontSize: "13px" }}>
// // // // // // // //                           {course.duration}
// // // // // // // //                         </Text>
// // // // // // // //                       </Flex>
// // // // // // // //                     }
// // // // // // // //                   />
// // // // // // // //                 </List.Item>
// // // // // // // //               )}
// // // // // // // //             />
// // // // // // // //           </Card>
// // // // // // // //         </Col>

// // // // // // // //         {/* Right: Certificate Preview */}
// // // // // // // //         <Col xs={24} md={16}>
// // // // // // // //           <Card
// // // // // // // //             title={
// // // // // // // //               <Flex justify="space-between" align="center">
// // // // // // // //                 <span style={{ fontWeight: "bold", fontSize: "16px" }}>
// // // // // // // //                   Your Certificate
// // // // // // // //                 </span>
// // // // // // // //                 <Button
// // // // // // // //                   type="primary"
// // // // // // // //                   icon={<DownloadOutlined />}
// // // // // // // //                   onClick={handleDownload}
// // // // // // // //                   loading={loading}
// // // // // // // //                   size="small"
// // // // // // // //                 >
// // // // // // // //                   Download
// // // // // // // //                 </Button>
// // // // // // // //               </Flex>
// // // // // // // //             }
// // // // // // // //             bordered={false}
// // // // // // // //             style={{
// // // // // // // //               borderRadius: "12px",
// // // // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // //               height: "100%",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {/* Certificate Preview */}
// // // // // // // //             <div
// // // // // // // //               style={{
// // // // // // // //                 border: "2px solid #d9d9d9",
// // // // // // // //                 borderRadius: "8px",
// // // // // // // //                 overflow: "hidden",
// // // // // // // //                 position: "relative",
// // // // // // // //                 width: "100%",
// // // // // // // //                 paddingTop: "60%", // 800x600 = 4:3 aspect ratio
// // // // // // // //                 backgroundColor: "#f5f5f5",
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               <canvas
// // // // // // // //                 ref={canvasRef}
// // // // // // // //                 width={800}
// // // // // // // //                 height={600}
// // // // // // // //                 style={{
// // // // // // // //                   position: "absolute",
// // // // // // // //                   top: 0,
// // // // // // // //                   left: 0,
// // // // // // // //                   width: "100%",
// // // // // // // //                   height: "100%",
// // // // // // // //                   display: "none",
// // // // // // // //                 }}
// // // // // // // //               />
// // // // // // // //               {loading ? (
// // // // // // // //                 <Flex
// // // // // // // //                   justify="center"
// // // // // // // //                   align="center"
// // // // // // // //                   style={{
// // // // // // // //                     position: "absolute",
// // // // // // // //                     top: 0,
// // // // // // // //                     left: 0,
// // // // // // // //                     width: "100%",
// // // // // // // //                     height: "100%",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <Spin size="large" />
// // // // // // // //                 </Flex>
// // // // // // // //               ) : (
// // // // // // // //                 <Image
// // // // // // // //                   src={certificateImage}
// // // // // // // //                   alt="Certificate Preview"
// // // // // // // //                   style={{
// // // // // // // //                     position: "absolute",
// // // // // // // //                     top: 0,
// // // // // // // //                     left: 0,
// // // // // // // //                     width: "100%",
// // // // // // // //                     height: "100%",
// // // // // // // //                     objectFit: "contain",
// // // // // // // //                   }}
// // // // // // // //                   preview={false}
// // // // // // // //                   fallback="/placeholder.svg?height=600&width=800&text=Failed+to+Load"
// // // // // // // //                 />
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // // // // // //             <Paragraph type="secondary" style={{ textAlign: "center", fontSize: "14px" }}>
// // // // // // // //               This is a sample certificate. Your real certificate will include your name and actual completion date.
// // // // // // // //             </Paragraph>
// // // // // // // //           </Card>
// // // // // // // //         </Col>
// // // // // // // //       </Row>

// // // // // // // //       {/* Optional: Centered Download Button (mobile-friendly) */}
// // // // // // // //       {/* <Flex justify="center" style={{ marginTop: "24px" }}>
// // // // // // // //         <Button
// // // // // // // //           type="primary"
// // // // // // // //           icon={<FileDoneOutlined />}
// // // // // // // //           size="large"
// // // // // // // //           onClick={handleDownload}
// // // // // // // //           disabled={!certificateImage || loading}
// // // // // // // //           style={{ minWidth: 200 }}
// // // // // // // //         >
// // // // // // // //           Download Certificate
// // // // // // // //         </Button>
// // // // // // // //       </Flex> */}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // // // import {
// // // // // // // //   Card,
// // // // // // // //   Button,
// // // // // // // //   Typography,
// // // // // // // //   Row,
// // // // // // // //   Col,
// // // // // // // //   List,
// // // // // // // //   Divider,
// // // // // // // //   Spin,
// // // // // // // //   message,
// // // // // // // //   Flex,
// // // // // // // // } from "antd";
// // // // // // // // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";

// // // // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // // // Example course data
// // // // // // // // const coursesData = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     title: "Software Development in Java",
// // // // // // // //     description: "Learn to build software applications using Java.",
// // // // // // // //     duration: "4 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     title: "Software Development in Python",
// // // // // // // //     description: "Develop applications and scripts using Python programming.",
// // // // // // // //     duration: "6 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     title: "Manual Testing",
// // // // // // // //     description: "Understand the fundamentals of software testing manually.",
// // // // // // // //     duration: "3 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     title: "Automation Testing (Java)",
// // // // // // // //     description: "Automate testing using Java-based frameworks.",
// // // // // // // //     duration: "5 weeks",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const formatDate = (date) => {
// // // // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // // // //     year: "numeric",
// // // // // // // //     month: "short",
// // // // // // // //     day: "numeric",
// // // // // // // //   });
// // // // // // // // };

// // // // // // // // const generateCertificate = (canvas, studentName, courseName, completionDate) => {
// // // // // // // //   const ctx = canvas.getContext("2d");
// // // // // // // //   const width = canvas.width;
// // // // // // // //   const height = canvas.height;

// // // // // // // //   // Clear canvas
// // // // // // // //   ctx.clearRect(0, 0, width, height);

// // // // // // // //   // Gradient background
// // // // // // // //   const gradient = ctx.createLinearGradient(0, 0, width, 0);
// // // // // // // //   gradient.addColorStop(0, "#4299E1");
// // // // // // // //   gradient.addColorStop(1, "#9F7AEA");
// // // // // // // //   ctx.fillStyle = gradient;
// // // // // // // //   ctx.fillRect(0, 0, width, height);

// // // // // // // //   // White border
// // // // // // // //   ctx.strokeStyle = "#FFFFFF";
// // // // // // // //   ctx.lineWidth = 20;
// // // // // // // //   ctx.strokeRect(20, 20, width - 40, height - 40);

// // // // // // // //   // Inner content background
// // // // // // // //   ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
// // // // // // // //   ctx.fillRect(40, 40, width - 80, height - 80);

// // // // // // // //   // Title
// // // // // // // //   ctx.font = "bold 40px Arial";
// // // // // // // //   ctx.fillStyle = "#2D3748";
// // // // // // // //   ctx.textAlign = "center";
// // // // // // // //   ctx.fillText("Prefcol Edutech Solutions", width / 2, 100);

// // // // // // // //   // Main heading
// // // // // // // //   ctx.font = "bold 50px Arial";
// // // // // // // //   ctx.fillText("Certificate of Completion", width / 2, 170);

// // // // // // // //   // Student Name
// // // // // // // //   ctx.font = "bold 30px Arial";
// // // // // // // //   ctx.fillText(studentName, width / 2, 250);

// // // // // // // //   // Course line
// // // // // // // //   ctx.font = "24px Arial";
// // // // // // // //   ctx.fillText("has successfully completed the course", width / 2, 300);

// // // // // // // //   ctx.font = "bold 28px Arial";
// // // // // // // //   ctx.fillText(courseName, width / 2, 350);

// // // // // // // //   // Completion date
// // // // // // // //   ctx.font = "20px Arial";
// // // // // // // //   ctx.fillText(`Completed on ${completionDate}`, width / 2, 400);

// // // // // // // //   // Signature
// // // // // // // //   ctx.font = "italic 18px Arial";
// // // // // // // //   ctx.fillText("Authorized Signature", width / 2, 480);
// // // // // // // //   ctx.beginPath();
// // // // // // // //   ctx.moveTo(width / 2 - 100, 440);
// // // // // // // //   ctx.lineTo(width / 2 + 100, 440);
// // // // // // // //   ctx.stroke();

// // // // // // // //   // Logo text
// // // // // // // //   ctx.font = "bold 60px Arial";
// // // // // // // //   ctx.fillStyle = "#4299E1";
// // // // // // // //   ctx.fillText("Prefcol", width / 2, 540);
// // // // // // // // };

// // // // // // // // export default function CertificateGenerator() {
// // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const canvasRef = useRef(null);
// // // // // // // //   const currentDate = new Date();
// // // // // // // //   const completionDate = formatDate(currentDate);
// // // // // // // //   const studentName = "Student Name"; // Placeholder

// // // // // // // //   // Generate certificate when course changes
// // // // // // // //   useEffect(() => {
// // // // // // // //     setLoading(true);
// // // // // // // //     if (canvasRef.current) {
// // // // // // // //       const canvas = canvasRef.current;
// // // // // // // //       generateCertificate(canvas, studentName, selectedCourse.title, completionDate);
// // // // // // // //     }
// // // // // // // //     setLoading(false);
// // // // // // // //   }, [selectedCourse, completionDate]);

// // // // // // // //   // Handle download
// // // // // // // //   const handleDownload = () => {
// // // // // // // //     const canvas = canvasRef.current;
// // // // // // // //     if (!canvas) {
// // // // // // // //       message.error("Certificate not ready.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const link = document.createElement("a");
// // // // // // // //     link.href = canvas.toDataURL("image/png");
// // // // // // // //     link.download = `Prefcol-Certificate-${selectedCourse.title.replace(/\s+/g, "-")}.png`;
// // // // // // // //     document.body.appendChild(link);
// // // // // // // //     link.click();
// // // // // // // //     document.body.removeChild(link);
// // // // // // // //     message.success("Certificate downloaded!");
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // // // // //       {/* Header */}
// // // // // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // // // // //         <Title level={2} style={{ color: "#004d40", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
// // // // // // // //           Prefcol Edutech Solutions
// // // // // // // //         </Title>
// // // // // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // // // // //           Sample Certificate Preview
// // // // // // // //         </Paragraph>
// // // // // // // //       </div>

// // // // // // // //       <Row gutter={[32, 32]}>
// // // // // // // //         {/* Left: Course Selection */}
// // // // // // // //         <Col xs={24} md={8}>
// // // // // // // //           <Card
// // // // // // // //             title={<strong>Select a Course</strong>}
// // // // // // // //             bordered={false}
// // // // // // // //             style={{
// // // // // // // //               borderRadius: "12px",
// // // // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <List
// // // // // // // //               dataSource={coursesData}
// // // // // // // //               renderItem={(course) => (
// // // // // // // //                 <List.Item
// // // // // // // //                   key={course.id}
// // // // // // // //                   onClick={() => setSelectedCourse(course)}
// // // // // // // //                   style={{
// // // // // // // //                     cursor: "pointer",
// // // // // // // //                     border:
// // // // // // // //                       selectedCourse.id === course.id
// // // // // // // //                         ? "2px solid #1890ff"
// // // // // // // //                         : "1px solid #e8e8e8",
// // // // // // // //                     borderRadius: "8px",
// // // // // // // //                     padding: "12px",
// // // // // // // //                     marginBottom: "8px",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <List.Item.Meta
// // // // // // // //                     title={<Text strong>{course.title}</Text>}
// // // // // // // //                     description={
// // // // // // // //                       <span style={{ color: "#1890ff", display: "flex", alignItems: "center", gap: 4 }}>
// // // // // // // //                         <ClockCircleOutlined /> {course.duration}
// // // // // // // //                       </span>
// // // // // // // //                     }
// // // // // // // //                   />
// // // // // // // //                 </List.Item>
// // // // // // // //               )}
// // // // // // // //             />
// // // // // // // //           </Card>
// // // // // // // //         </Col>

// // // // // // // //         {/* Right: Certificate Preview */}
// // // // // // // //         <Col xs={24} md={16}>
// // // // // // // //           <Card
// // // // // // // //             title={
// // // // // // // //               <Flex justify="space-between" align="center">
// // // // // // // //                 <strong>Your Certificate</strong>
// // // // // // // //                 <Button
// // // // // // // //                   type="primary"
// // // // // // // //                   icon={<DownloadOutlined />}
// // // // // // // //                   onClick={handleDownload}
// // // // // // // //                   loading={loading}
// // // // // // // //                   size="small"
// // // // // // // //                   style={{ backgroundColor: "#004d40", borderColor: "#004d40" }}
// // // // // // // //                 >
// // // // // // // //                   Download
// // // // // // // //                 </Button>
// // // // // // // //               </Flex>
// // // // // // // //             }
// // // // // // // //             bordered={false}
// // // // // // // //             style={{
// // // // // // // //               borderRadius: "12px",
// // // // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {/* Certificate Canvas Preview */}
// // // // // // // //             <div
// // // // // // // //               style={{
// // // // // // // //                 border: "2px solid #d9d9d9",
// // // // // // // //                 borderRadius: "8px",
// // // // // // // //                 overflow: "hidden",
// // // // // // // //                 backgroundColor: "#f9f9f9",
// // // // // // // //                 width: "100%",
// // // // // // // //                 height: 0,
// // // // // // // //                 paddingTop: "75%", // 4:3 aspect ratio (800x600)
// // // // // // // //                 position: "relative",
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {loading ? (
// // // // // // // //                 <Flex
// // // // // // // //                   align="center"
// // // // // // // //                   justify="center"
// // // // // // // //                   style={{
// // // // // // // //                     position: "absolute",
// // // // // // // //                     top: 0,
// // // // // // // //                     left: 0,
// // // // // // // //                     width: "100%",
// // // // // // // //                     height: "100%",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <Spin size="large" />
// // // // // // // //                 </Flex>
// // // // // // // //               ) : (
// // // // // // // //                 <canvas
// // // // // // // //                   ref={canvasRef}
// // // // // // // //                   width={800}
// // // // // // // //                   height={600}
// // // // // // // //                   style={{
// // // // // // // //                     position: "absolute",
// // // // // // // //                     top: 0,
// // // // // // // //                     left: 0,
// // // // // // // //                     width: "100%",
// // // // // // // //                     height: "100%",
// // // // // // // //                     imageRendering: "crisp-edges", // Sharp text
// // // // // // // //                   }}
// // // // // // // //                 />
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // // // // // //             <Paragraph type="secondary" style={{ textAlign: "center", fontSize: "14px" }}>
// // // // // // // //               This is a sample certificate. Your real certificate will include your name and completion date.
// // // // // // // //             </Paragraph>
// // // // // // // //           </Card>
// // // // // // // //         </Col>
// // // // // // // //       </Row>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // // // import {
// // // // // // // //   Card,
// // // // // // // //   Button,
// // // // // // // //   Typography,
// // // // // // // //   Row,
// // // // // // // //   Col,
// // // // // // // //   List,
// // // // // // // //   Divider,
// // // // // // // //   Spin,
// // // // // // // //   message,
// // // // // // // //   Flex,
// // // // // // // // } from "antd";
// // // // // // // // import { DownloadOutlined, ClockCircleOutlined, TrophyOutlined } from "@ant-design/icons";
// // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // // // Example course data
// // // // // // // // const coursesData = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     title: "Software Development in Java",
// // // // // // // //     description: "Learn to build software applications using Java.",
// // // // // // // //     duration: "4 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     title: "Software Development in Python",
// // // // // // // //     description: "Develop applications and scripts using Python programming.",
// // // // // // // //     duration: "6 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     title: "Manual Testing",
// // // // // // // //     description: "Understand the fundamentals of software testing manually.",
// // // // // // // //     duration: "3 weeks",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     title: "Automation Testing (Java)",
// // // // // // // //     description: "Automate testing using Java-based frameworks.",
// // // // // // // //     duration: "5 weeks",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const formatDate = (date) => {
// // // // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // // // //     year: "numeric",
// // // // // // // //     month: "short",
// // // // // // // //     day: "numeric",
// // // // // // // //   });
// // // // // // // // };

// // // // // // // // const generateCertificate = (canvas, studentName, courseName, completionDate) => {
// // // // // // // //   const ctx = canvas.getContext("2d");
// // // // // // // //   const width = canvas.width;
// // // // // // // //   const height = canvas.height;

// // // // // // // //   // Clear canvas
// // // // // // // //   ctx.clearRect(0, 0, width, height);

// // // // // // // //   // Gradient background
// // // // // // // //   const gradient = ctx.createLinearGradient(0, 0, width, 0);
// // // // // // // //   gradient.addColorStop(0, "#4299E1");
// // // // // // // //   gradient.addColorStop(1, "#9F7AEA");
// // // // // // // //   ctx.fillStyle = gradient;
// // // // // // // //   ctx.fillRect(0, 0, width, height);

// // // // // // // //   // White border
// // // // // // // //   ctx.strokeStyle = "#FFFFFF";
// // // // // // // //   ctx.lineWidth = 20;
// // // // // // // //   ctx.strokeRect(20, 20, width - 40, height - 40);

// // // // // // // //   // Inner content background
// // // // // // // //   ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
// // // // // // // //   ctx.fillRect(40, 40, width - 80, height - 80);

// // // // // // // //   // Title
// // // // // // // //   ctx.font = "bold 40px Arial";
// // // // // // // //   ctx.fillStyle = "#2D3748";
// // // // // // // //   ctx.textAlign = "center";
// // // // // // // //   ctx.fillText("Prefcol Edutech Solutions", width / 2, 100);

// // // // // // // //   // Main heading
// // // // // // // //   ctx.font = "bold 50px Arial";
// // // // // // // //   ctx.fillText("Certificate of Completion", width / 2, 170);

// // // // // // // //   // Student Name
// // // // // // // //   ctx.font = "bold 30px Arial";
// // // // // // // //   ctx.fillText(studentName, width / 2, 250);

// // // // // // // //   // Course line
// // // // // // // //   ctx.font = "24px Arial";
// // // // // // // //   ctx.fillText("has successfully completed the course", width / 2, 300);

// // // // // // // //   ctx.font = "bold 28px Arial";
// // // // // // // //   ctx.fillText(courseName, width / 2, 350);

// // // // // // // //   // Completion date
// // // // // // // //   ctx.font = "20px Arial";
// // // // // // // //   ctx.fillText(`Completed on ${completionDate}`, width / 2, 400);

// // // // // // // //   // Signature
// // // // // // // //   ctx.font = "italic 18px Arial";
// // // // // // // //   ctx.fillText("Authorized Signature", width / 2, 480);
// // // // // // // //   ctx.beginPath();
// // // // // // // //   ctx.moveTo(width / 2 - 100, 440);
// // // // // // // //   ctx.lineTo(width / 2 + 100, 440);
// // // // // // // //   ctx.stroke();

// // // // // // // //   // Logo text
// // // // // // // //   ctx.font = "bold 60px Arial";
// // // // // // // //   ctx.fillStyle = "#4299E1";
// // // // // // // //   ctx.fillText("Prefcol", width / 2, 540);
// // // // // // // // };

// // // // // // // // export default function CertificatePage() {
// // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const canvasRef = useRef(null);
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();

// // // // // // // //   // Get real data from navigation (if coming from MyCourses after completion)
// // // // // // // //   const { course: completedCourse, userData } = location.state || {};

// // // // // // // //   const currentDate = new Date();
// // // // // // // //   const completionDate = formatDate(currentDate);

// // // // // // // //   // Determine mode: Sample or Real
// // // // // // // //   const isRealMode = !!completedCourse && !!userData;
// // // // // // // //   const studentName = isRealMode
// // // // // // // //     ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim() || "Learner"
// // // // // // // //     : "Student Name";

// // // // // // // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // // // // // // //   // Generate certificate on load or course change
// // // // // // // //   useEffect(() => {
// // // // // // // //     setLoading(true);
// // // // // // // //     if (canvasRef.current) {
// // // // // // // //       generateCertificate(
// // // // // // // //         canvasRef.current,
// // // // // // // //         studentName,
// // // // // // // //         displayCourse.title,
// // // // // // // //         completionDate
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     setLoading(false);
// // // // // // // //   }, [studentName, displayCourse.title, completionDate]);

// // // // // // // //   const handleDownload = () => {
// // // // // // // //     const canvas = canvasRef.current;
// // // // // // // //     if (!canvas) {
// // // // // // // //       message.error("Certificate not ready.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const link = document.createElement("a");
// // // // // // // //     link.href = canvas.toDataURL("image/png");
// // // // // // // //     const filename = isRealMode
// // // // // // // //       ? `Certificate-${completedCourse.title.replace(/\s+/g, "-")}.png`
// // // // // // // //       : `Sample-Certificate-${selectedCourse.title.replace(/\s+/g, "-")}.png`;
// // // // // // // //     link.download = filename;

// // // // // // // //     document.body.appendChild(link);
// // // // // // // //     link.click();
// // // // // // // //     document.body.removeChild(link);

// // // // // // // //     message.success("Certificate downloaded!");
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // // // // //       {/* Header */}
// // // // // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // // // // //         <Title level={2} style={{ color: "#004d40" }}>
// // // // // // // //           Prefcol Edutech Solutions
// // // // // // // //         </Title>
// // // // // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // // // // //           {isRealMode ? "Your Official Certificate" : "Sample Certificate Preview"}
// // // // // // // //         </Paragraph>
// // // // // // // //       </div>

// // // // // // // //       <Row gutter={[32, 32]}>
// // // // // // // //         {/* Left: Course Selection (only in sample mode) */}
// // // // // // // //         {!isRealMode && (
// // // // // // // //           <Col xs={24} md={8}>
// // // // // // // //             <Card
// // // // // // // //               title={<strong>Select a Course</strong>}
// // // // // // // //               bordered={false}
// // // // // // // //               style={{
// // // // // // // //                 borderRadius: "12px",
// // // // // // // //                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               <List
// // // // // // // //                 dataSource={coursesData}
// // // // // // // //                 renderItem={(course) => (
// // // // // // // //                   <List.Item
// // // // // // // //                     key={course.id}
// // // // // // // //                     onClick={() => setSelectedCourse(course)}
// // // // // // // //                     style={{
// // // // // // // //                       cursor: "pointer",
// // // // // // // //                       border:
// // // // // // // //                         selectedCourse.id === course.id
// // // // // // // //                           ? "2px solid #1890ff"
// // // // // // // //                           : "1px solid #e8e8e8",
// // // // // // // //                       borderRadius: "8px",
// // // // // // // //                       padding: "12px",
// // // // // // // //                       marginBottom: "8px",
// // // // // // // //                     }}
// // // // // // // //                   >
// // // // // // // //                     <List.Item.Meta
// // // // // // // //                       title={<Text strong>{course.title}</Text>}
// // // // // // // //                       description={
// // // // // // // //                         <span style={{ color: "#1890ff", display: "flex", alignItems: "center", gap: 4 }}>
// // // // // // // //                           <ClockCircleOutlined /> {course.duration}
// // // // // // // //                         </span>
// // // // // // // //                       }
// // // // // // // //                     />
// // // // // // // //                   </List.Item>
// // // // // // // //                 )}
// // // // // // // //               />
// // // // // // // //             </Card>
// // // // // // // //           </Col>
// // // // // // // //         )}

// // // // // // // //         {/* Right: Certificate Preview */}
// // // // // // // //         <Col xs={24} md={isRealMode ? 24 : 16}>
// // // // // // // //   <Card
// // // // // // // //     title={
// // // // // // // //       <div
// // // // // // // //         style={{
// // // // // // // //           display: "flex",
// // // // // // // //           flexDirection: "column",
// // // // // // // //           alignItems: "center",
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <strong style={{ marginBottom: 8 }}>
// // // // // // // //           {isRealMode ? "Your Certificate" : "Preview Certificate"}
// // // // // // // //         </strong>
// // // // // // // //         <Button
// // // // // // // //           type="primary"
// // // // // // // //           icon={<DownloadOutlined />}
// // // // // // // //           onClick={handleDownload}
// // // // // // // //           loading={loading}
// // // // // // // //           size="small"
// // // // // // // //           style={{
// // // // // // // //             backgroundColor: "#004d40",
// // // // // // // //             borderColor: "#004d40",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           Download
// // // // // // // //         </Button>
// // // // // // // //       </div>
// // // // // // // //     }
// // // // // // // //     bordered={false}
// // // // // // // //     style={{
// // // // // // // //       borderRadius: "12px",
// // // // // // // //       boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // // //     }}
// // // // // // // //   >
// // // // // // // //     {/* Certificate Canvas */}
// // // // // // // //     <div
// // // // // // // //       style={{
// // // // // // // //         border: "2px solid #d9d9d9",
// // // // // // // //         borderRadius: "8px",
// // // // // // // //         overflow: "hidden",
// // // // // // // //         backgroundColor: "#f9f9f9",
// // // // // // // //         width: "100%",
// // // // // // // //         height: 0,
// // // // // // // //         paddingTop: "75%", // 4:3 aspect ratio
// // // // // // // //         position: "relative",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       {loading ? (
// // // // // // // //         <Flex
// // // // // // // //           align="center"
// // // // // // // //           justify="center"
// // // // // // // //           style={{
// // // // // // // //             position: "absolute",
// // // // // // // //             top: 0,
// // // // // // // //             left: 0,
// // // // // // // //             width: "100%",
// // // // // // // //             height: "100%",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <Spin size="large" />
// // // // // // // //         </Flex>
// // // // // // // //       ) : (
// // // // // // // //         <canvas
// // // // // // // //           ref={canvasRef}
// // // // // // // //           width={800}
// // // // // // // //           height={600}
// // // // // // // //           style={{
// // // // // // // //             position: "absolute",
// // // // // // // //             top: 0,
// // // // // // // //             left: 0,
// // // // // // // //             width: "100%",
// // // // // // // //             height: "100%",
// // // // // // // //             imageRendering: "crisp-edges",
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //       )}
// // // // // // // //     </div>

// // // // // // // //     <Divider dashed style={{ margin: "24px 0" }} />

// // // // // // // //     <Paragraph
// // // // // // // //       type="secondary"
// // // // // // // //       style={{ textAlign: "center", fontSize: "14px" }}
// // // // // // // //     >
// // // // // // // //       {isRealMode ? (
// // // // // // // //         <>
// // // // // // // //           Congratulations! You've earned this certificate. Share it with pride.
// // // // // // // //         </>
// // // // // // // //       ) : (
// // // // // // // //         <>
// // // // // // // //           This is a sample certificate. After completing a course, your real
// // // // // // // //           certificate will include your name and actual completion date.
// // // // // // // //         </>
// // // // // // // //       )}
// // // // // // // //     </Paragraph>

// // // // // // // //     {isRealMode && (
// // // // // // // //       <Flex justify="center" style={{ marginTop: 16 }}>
// // // // // // // //         <Button
// // // // // // // //           type="default"
// // // // // // // //           onClick={() => navigate("/Student-portal/my-courses")}
// // // // // // // //         >
// // // // // // // //           ← Back to My Courses
// // // // // // // //         </Button>
// // // // // // // //       </Flex>
// // // // // // // //     )}
// // // // // // // //   </Card>
// // // // // // // // </Col>

// // // // // // // //       </Row>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // "use client";

// // // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // // import {
// // // // // // //   Card,
// // // // // // //   Button,
// // // // // // //   Typography,
// // // // // // //   Row,
// // // // // // //   Col,
// // // // // // //   List,
// // // // // // //   Divider,
// // // // // // //   Spin,
// // // // // // //   message,
// // // // // // //   Flex,
// // // // // // // } from "antd";
// // // // // // // import { DownloadOutlined, ClockCircleOutlined, TrophyOutlined } from "@ant-design/icons";
// // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // // Example course data
// // // // // // // const coursesData = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     title: "Software Development in Java",
// // // // // // //     description: "Learn to build software applications using Java.",
// // // // // // //     duration: "4 weeks",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 2,
// // // // // // //     title: "Software Development in Python",
// // // // // // //     description: "Develop applications and scripts using Python programming.",
// // // // // // //     duration: "6 weeks",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 3,
// // // // // // //     title: "Manual Testing",
// // // // // // //     description: "Understand the fundamentals of software testing manually.",
// // // // // // //     duration: "3 weeks",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 4,
// // // // // // //     title: "Automation Testing (Java)",
// // // // // // //     description: "Automate testing using Java-based frameworks.",
// // // // // // //     duration: "5 weeks",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const formatDate = (date) => {
// // // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // // //     year: "numeric",
// // // // // // //     month: "short",
// // // // // // //     day: "numeric",
// // // // // // //   });
// // // // // // // };

// // // // // // // const generateCertificate = (canvas, studentName, courseName, completionDate) => {
// // // // // // //   const ctx = canvas.getContext("2d");
// // // // // // //   const width = canvas.width;
// // // // // // //   const height = canvas.height;

// // // // // // //   // Clear canvas
// // // // // // //   ctx.clearRect(0, 0, width, height);

// // // // // // //   // Background: Light beige (mimicking paper texture)
// // // // // // //   ctx.fillStyle = "#f8f3e9";
// // // // // // //   ctx.fillRect(0, 0, width, height);

// // // // // // //   // Add subtle wavy pattern for texture (optional, can be removed if too noisy)
// // // // // // //   ctx.fillStyle = "rgba(240, 230, 210, 0.05)";
// // // // // // //   for (let i = 0; i < 5; i++) {
// // // // // // //     ctx.beginPath();
// // // // // // //     ctx.moveTo(0, i * 120 + 60);
// // // // // // //     for (let x = 0; x < width; x += 20) {
// // // // // // //       const y = Math.sin(x / 100) * 10 + i * 120 + 60;
// // // // // // //       ctx.lineTo(x, y);
// // // // // // //     }
// // // // // // //     ctx.lineWidth = 30;
// // // // // // //     ctx.stroke();
// // // // // // //   }

// // // // // // //   // Main border (dark green)
// // // // // // //   ctx.strokeStyle = "#004d40";
// // // // // // //   ctx.lineWidth = 3;
// // // // // // //   ctx.strokeRect(25, 25, width - 50, height - 50);

// // // // // // //   // Top-left decorative lines (gold)
// // // // // // //   ctx.strokeStyle = "#b8860b";
// // // // // // //   ctx.lineWidth = 3;
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(35, 35);
// // // // // // //   ctx.lineTo(35, 75);
// // // // // // //   ctx.moveTo(40, 40);
// // // // // // //   ctx.lineTo(40, 80);
// // // // // // //   ctx.moveTo(45, 45);
// // // // // // //   ctx.lineTo(45, 85);
// // // // // // //   ctx.stroke();

// // // // // // //   // Bottom-right decorative lines (gold)
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(width - 35, height - 35);
// // // // // // //   ctx.lineTo(width - 35, height - 75);
// // // // // // //   ctx.moveTo(width - 40, height - 40);
// // // // // // //   ctx.lineTo(width - 40, height - 80);
// // // // // // //   ctx.moveTo(width - 45, height - 45);
// // // // // // //   ctx.lineTo(width - 45, height - 85);
// // // // // // //   ctx.stroke();

// // // // // // //   // Top-right curved green design
// // // // // // //   ctx.fillStyle = "#006400"; // Dark green
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(width, 0);
// // // // // // //   ctx.bezierCurveTo(
// // // // // // //     width - 120, 60,
// // // // // // //     width - 60, 180,
// // // // // // //     width, 240
// // // // // // //   );
// // // // // // //   ctx.lineTo(width, 0);
// // // // // // //   ctx.fill();

// // // // // // //   ctx.fillStyle = "#2ecc71"; // Brighter green
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(width, 0);
// // // // // // //   ctx.bezierCurveTo(
// // // // // // //     width - 100, 50,
// // // // // // //     width - 50, 160,
// // // // // // //     width, 220
// // // // // // //   );
// // // // // // //   ctx.lineTo(width, 0);
// // // // // // //   ctx.fill();

// // // // // // //   // Bottom-left curved green design
// // // // // // //   ctx.fillStyle = "#006400";
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(0, height);
// // // // // // //   ctx.bezierCurveTo(
// // // // // // //     120, height - 60,
// // // // // // //     60, height - 180,
// // // // // // //     0, height - 240
// // // // // // //   );
// // // // // // //   ctx.lineTo(0, height);
// // // // // // //   ctx.fill();

// // // // // // //   ctx.fillStyle = "#2ecc71";
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(0, height);
// // // // // // //   ctx.bezierCurveTo(
// // // // // // //     100, height - 50,
// // // // // // //     50, height - 160,
// // // // // // //     0, height - 220
// // // // // // //   );
// // // // // // //   ctx.lineTo(0, height);
// // // // // // //   ctx.fill();

// // // // // // //   // Company Name at top left
// // // // // // //   ctx.font = "bold 36px 'Georgia', serif";
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.fillText("PREFCOL", 50, 80);
// // // // // // //   ctx.font = "16px 'Arial', sans-serif";
// // // // // // //   ctx.fillText("Edutech Solutions (OPC) Pvt Ltd", 50, 105);

// // // // // // //   // Main Certificate Title
// // // // // // //   ctx.font = "bold 60px 'Georgia', serif";
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.textAlign = "center";
// // // // // // //   ctx.fillText("CERTIFICATE", width / 2, 160);
// // // // // // //   ctx.font = "bold 36px 'Georgia', serif";
// // // // // // //   ctx.fillText("OF INTERNSHIP", width / 2, 210);

// // // // // // //   // Presentation line
// // // // // // //   ctx.font = "24px 'Arial', sans-serif";
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.textAlign = "center";
// // // // // // //   ctx.fillText("This certificate is proudly presented to:", width / 2, 270);

// // // // // // //   // Student Name (larger font, centered)
// // // // // // //   ctx.font = "bold 40px 'Georgia', serif";
// // // // // // //   ctx.fillText(studentName, width / 2, 330);

// // // // // // //   // Appreciation text
// // // // // // //   ctx.font = "18px 'Arial', sans-serif";
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.textAlign = "center";
// // // // // // //   ctx.fillText("In Appreciation For Your Successful Work As An Intern At Prefcol Edutech Solutions(OPC) Pvt Ltd", width / 2, 390);
// // // // // // //   ctx.fillText("The Internship Was Conducted Between 23 July, 2025 and 22 August, 2025.", width / 2, 420);

// // // // // // //   // Draw horizontal line above signature area
// // // // // // //   ctx.strokeStyle = "#b8860b";
// // // // // // //   ctx.lineWidth = 2;
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(width / 2 - 180, 470);
// // // // // // //   ctx.lineTo(width / 2 + 180, 470);
// // // // // // //   ctx.stroke();

// // // // // // //   // Central badge/ribbon
// // // // // // //   const badgeX = width / 2;
// // // // // // //   const badgeY = 550;
// // // // // // //   const badgeSize = 90;

// // // // // // //   // Badge outline (gold)
// // // // // // //   ctx.fillStyle = "#b8860b";
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(badgeX, badgeY - badgeSize / 2);
// // // // // // //   for (let i = 0; i < 8; i++) {
// // // // // // //     const angle = (i * Math.PI) / 4;
// // // // // // //     const x = badgeX + Math.cos(angle) * (badgeSize / 2);
// // // // // // //     const y = badgeY + Math.sin(angle) * (badgeSize / 2);
// // // // // // //     if (i === 0) ctx.moveTo(x, y);
// // // // // // //     else ctx.lineTo(x, y);
// // // // // // //   }
// // // // // // //   ctx.closePath();
// // // // // // //   ctx.fill();

// // // // // // //   // Badge center (dark green)
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.arc(badgeX, badgeY, badgeSize / 3, 0, Math.PI * 2);
// // // // // // //   ctx.fill();

// // // // // // //   // Add sparkle effect
// // // // // // //   ctx.fillStyle = "#ffffff";
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(badgeX - 4, badgeY - 4);
// // // // // // //   ctx.lineTo(badgeX + 4, badgeY - 4);
// // // // // // //   ctx.lineTo(badgeX, badgeY + 4);
// // // // // // //   ctx.closePath();
// // // // // // //   ctx.fill();

// // // // // // //   // Ribbon below badge
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(badgeX - 15, badgeY + badgeSize / 3);
// // // // // // //   ctx.lineTo(badgeX + 15, badgeY + badgeSize / 3);
// // // // // // //   ctx.lineTo(badgeX + 10, badgeY + badgeSize / 3 + 25);
// // // // // // //   ctx.lineTo(badgeX - 10, badgeY + badgeSize / 3 + 25);
// // // // // // //   ctx.closePath();
// // // // // // //   ctx.fill();

// // // // // // //   // Stars above badge
// // // // // // //   ctx.fillStyle = "#b8860b";
// // // // // // //   for (let i = 0; i < 5; i++) {
// // // // // // //     const starX = badgeX - 45 + (i * 22);
// // // // // // //     const starY = badgeY - 50;
// // // // // // //     drawStar(ctx, starX, starY, 5, 8, 4);
// // // // // // //   }

// // // // // // //   // Signatures
// // // // // // //   ctx.font = "bold 26px 'Arial', sans-serif";
// // // // // // //   ctx.fillStyle = "#004d40";
// // // // // // //   ctx.textAlign = "left";
// // // // // // //   ctx.fillText("Manikandan Balamurugan", 100, 630);
// // // // // // //   ctx.font = "bold 20px 'Arial', sans-serif";
// // // // // // //   ctx.fillText("DIRECTOR", 100, 655);

// // // // // // //   ctx.textAlign = "right";
// // // // // // //   ctx.fillText("Vimal Kanna M", width - 100, 630);
// // // // // // //   ctx.font = "bold 20px 'Arial', sans-serif";
// // // // // // //   ctx.fillText("MANAGER", width - 100, 655);

// // // // // // //   // Signature lines
// // // // // // //   ctx.strokeStyle = "#004d40";
// // // // // // //   ctx.lineWidth = 1;
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(100, 610);
// // // // // // //   ctx.lineTo(260, 610);
// // // // // // //   ctx.moveTo(width - 260, 610);
// // // // // // //   ctx.lineTo(width - 100, 610);
// // // // // // //   ctx.stroke();

// // // // // // //   // Footer line
// // // // // // //   ctx.strokeStyle = "#004d40";
// // // // // // //   ctx.lineWidth = 3;
// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(40, height - 40);
// // // // // // //   ctx.lineTo(width - 40, height - 40);
// // // // // // //   ctx.stroke();
// // // // // // // };

// // // // // // // // Helper function to draw a star
// // // // // // // function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
// // // // // // //   let rot = Math.PI / 2 * 3;
// // // // // // //   let x = cx;
// // // // // // //   let y = cy;
// // // // // // //   let step = Math.PI / spikes;

// // // // // // //   ctx.beginPath();
// // // // // // //   ctx.moveTo(cx, cy - outerRadius);
// // // // // // //   for (let i = 0; i < spikes; i++) {
// // // // // // //     x = cx + Math.cos(rot) * outerRadius;
// // // // // // //     y = cy + Math.sin(rot) * outerRadius;
// // // // // // //     ctx.lineTo(x, y);
// // // // // // //     rot += step;

// // // // // // //     x = cx + Math.cos(rot) * innerRadius;
// // // // // // //     y = cy + Math.sin(rot) * innerRadius;
// // // // // // //     ctx.lineTo(x, y);
// // // // // // //     rot += step;
// // // // // // //   }
// // // // // // //   ctx.lineTo(cx, cy - outerRadius);
// // // // // // //   ctx.closePath();
// // // // // // //   ctx.fill();
// // // // // // // }

// // // // // // // export default function CertificatePage() {
// // // // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const canvasRef = useRef(null);
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const location = useLocation();

// // // // // // //   // Get real data from navigation (if coming from MyCourses after completion)
// // // // // // //   const { course: completedCourse, userData } = location.state || {};

// // // // // // //   const currentDate = new Date();
// // // // // // //   const completionDate = formatDate(currentDate);

// // // // // // //   // Determine mode: Sample or Real
// // // // // // //   const isRealMode = !!completedCourse && !!userData;
// // // // // // //   const studentName = isRealMode
// // // // // // //     ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim() || "Learner"
// // // // // // //     : "Student Name";

// // // // // // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // // // // // //   // Generate certificate on load or course change
// // // // // // //   useEffect(() => {
// // // // // // //     setLoading(true);
// // // // // // //     if (canvasRef.current) {
// // // // // // //       generateCertificate(
// // // // // // //         canvasRef.current,
// // // // // // //         studentName,
// // // // // // //         displayCourse.title,
// // // // // // //         completionDate
// // // // // // //       );
// // // // // // //     }
// // // // // // //     setLoading(false);
// // // // // // //   }, [studentName, displayCourse.title, completionDate]);

// // // // // // //   const handleDownload = () => {
// // // // // // //     const canvas = canvasRef.current;
// // // // // // //     if (!canvas) {
// // // // // // //       message.error("Certificate not ready.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const link = document.createElement("a");
// // // // // // //     link.href = canvas.toDataURL("image/png");
// // // // // // //     const filename = isRealMode
// // // // // // //       ? `Certificate-${completedCourse.title.replace(/\s+/g, "-")}.png`
// // // // // // //       : `Sample-Certificate-${selectedCourse.title.replace(/\s+/g, "-")}.png`;
// // // // // // //     link.download = filename;

// // // // // // //     document.body.appendChild(link);
// // // // // // //     link.click();
// // // // // // //     document.body.removeChild(link);

// // // // // // //     message.success("Certificate downloaded!");
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // // // //       {/* Header */}
// // // // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // // // //         <Title level={2} style={{ color: "#004d40" }}>
// // // // // // //           Prefcol Edutech Solutions
// // // // // // //         </Title>
// // // // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // // // //           {isRealMode ? "Your Official Certificate" : "Sample Certificate Preview"}
// // // // // // //         </Paragraph>
// // // // // // //       </div>

// // // // // // //       <Row gutter={[32, 32]}>
// // // // // // //         {/* Left: Course Selection (only in sample mode) */}
// // // // // // //         {!isRealMode && (
// // // // // // //           <Col xs={24} md={8}>
// // // // // // //             <Card
// // // // // // //               title={<strong>Select a Course</strong>}
// // // // // // //               bordered={false}
// // // // // // //               style={{
// // // // // // //                 borderRadius: "12px",
// // // // // // //                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <List
// // // // // // //                 dataSource={coursesData}
// // // // // // //                 renderItem={(course) => (
// // // // // // //                   <List.Item
// // // // // // //                     key={course.id}
// // // // // // //                     onClick={() => setSelectedCourse(course)}
// // // // // // //                     style={{
// // // // // // //                       cursor: "pointer",
// // // // // // //                       border:
// // // // // // //                         selectedCourse.id === course.id
// // // // // // //                           ? "2px solid #1890ff"
// // // // // // //                           : "1px solid #e8e8e8",
// // // // // // //                       borderRadius: "8px",
// // // // // // //                       padding: "12px",
// // // // // // //                       marginBottom: "8px",
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     <List.Item.Meta
// // // // // // //                       title={<Text strong>{course.title}</Text>}
// // // // // // //                       description={
// // // // // // //                         <span style={{ color: "#1890ff", display: "flex", alignItems: "center", gap: 4 }}>
// // // // // // //                           <ClockCircleOutlined /> {course.duration}
// // // // // // //                         </span>
// // // // // // //                       }
// // // // // // //                     />
// // // // // // //                   </List.Item>
// // // // // // //                 )}
// // // // // // //               />
// // // // // // //             </Card>
// // // // // // //           </Col>
// // // // // // //         )}

// // // // // // //         {/* Right: Certificate Preview */}
// // // // // // //         <Col xs={24} md={isRealMode ? 24 : 16}>
// // // // // // //           <Card
// // // // // // //             title={
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   display: "flex",
// // // // // // //                   flexDirection: "column",
// // // // // // //                   alignItems: "center",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <strong style={{ marginBottom: 8 }}>
// // // // // // //                   {isRealMode ? "Your Certificate" : "Preview Certificate"}
// // // // // // //                 </strong>
// // // // // // //                 <Button
// // // // // // //                   type="primary"
// // // // // // //                   icon={<DownloadOutlined />}
// // // // // // //                   onClick={handleDownload}
// // // // // // //                   loading={loading}
// // // // // // //                   size="small"
// // // // // // //                   style={{
// // // // // // //                     backgroundColor: "#004d40",
// // // // // // //                     borderColor: "#004d40",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Download
// // // // // // //                 </Button>
// // // // // // //               </div>
// // // // // // //             }
// // // // // // //             bordered={false}
// // // // // // //             style={{
// // // // // // //               borderRadius: "12px",
// // // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {/* Certificate Canvas */}
// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 border: "2px solid #d9d9d9",
// // // // // // //                 borderRadius: "8px",
// // // // // // //                 overflow: "hidden",
// // // // // // //                 backgroundColor: "#f9f9f9",
// // // // // // //                 width: "100%",
// // // // // // //                 height: 0,
// // // // // // //                 paddingTop: "75%", // 4:3 aspect ratio
// // // // // // //                 position: "relative",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {loading ? (
// // // // // // //                 <Flex
// // // // // // //                   align="center"
// // // // // // //                   justify="center"
// // // // // // //                   style={{
// // // // // // //                     position: "absolute",
// // // // // // //                     top: 0,
// // // // // // //                     left: 0,
// // // // // // //                     width: "100%",
// // // // // // //                     height: "100%",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   <Spin size="large" />
// // // // // // //                 </Flex>
// // // // // // //               ) : (
// // // // // // //                 <canvas
// // // // // // //                   ref={canvasRef}
// // // // // // //                   width={800}
// // // // // // //                   height={600}
// // // // // // //                   style={{
// // // // // // //                     position: "absolute",
// // // // // // //                     top: 0,
// // // // // // //                     left: 0,
// // // // // // //                     width: "100%",
// // // // // // //                     height: "100%",
// // // // // // //                     imageRendering: "crisp-edges",
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // // // // //             <Paragraph
// // // // // // //               type="secondary"
// // // // // // //               style={{ textAlign: "center", fontSize: "14px" }}
// // // // // // //             >
// // // // // // //               {isRealMode ? (
// // // // // // //                 <>
// // // // // // //                   Congratulations! You've earned this certificate. Share it with pride.
// // // // // // //                 </>
// // // // // // //               ) : (
// // // // // // //                 <>
// // // // // // //                   This is a sample certificate. After completing a course, your real
// // // // // // //                   certificate will include your name and actual completion date.
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </Paragraph>

// // // // // // //             {isRealMode && (
// // // // // // //               <Flex justify="center" style={{ marginTop: 16 }}>
// // // // // // //                 <Button
// // // // // // //                   type="default"
// // // // // // //                   onClick={() => navigate("/Student-portal/my-courses")}
// // // // // // //                 >
// // // // // // //                   ← Back to My Courses
// // // // // // //                 </Button>
// // // // // // //               </Flex>
// // // // // // //             )}
// // // // // // //           </Card>
// // // // // // //         </Col>
// // // // // // //       </Row>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // import {
// // // // // //   Card,
// // // // // //   Button,
// // // // // //   Typography,
// // // // // //   Row,
// // // // // //   Col,
// // // // // //   List,
// // // // // //   Divider,
// // // // // //   Spin,
// // // // // //   message,
// // // // // //   Flex,
// // // // // // } from "antd";
// // // // // // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // import html2canvas from "html2canvas";

// // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // Example course data
// // // // // // const coursesData = [
// // // // // //   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
// // // // // //   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
// // // // // //   { id: 3, title: "Manual Testing", duration: "3 weeks" },
// // // // // //   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// // // // // // ];

// // // // // // const formatDate = (date) => {
// // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // //     year: "numeric",
// // // // // //     month: "short",
// // // // // //     day: "numeric",
// // // // // //   });
// // // // // // };

// // // // // // export default function CertificatePage() {
// // // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const certificateRef = useRef(null);
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const { course: completedCourse, userData } = location.state || {};

// // // // // //   const currentDate = new Date();
// // // // // //   const completionDate = formatDate(currentDate);

// // // // // //   const isRealMode = !!completedCourse && !!userData;
// // // // // //   const studentName = isRealMode
// // // // // //     ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim() || "Learner"
// // // // // //     : "Student Name";

// // // // // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // // // // //   const handleDownload = async () => {
// // // // // //     if (!certificateRef.current) {
// // // // // //       message.error("Certificate not ready.");
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const canvas = await html2canvas(certificateRef.current, {
// // // // // //         scale: 2, // Higher quality
// // // // // //         useCORS: true,
// // // // // //         backgroundColor: "#f8f3e9",
// // // // // //       });

// // // // // //       const link = document.createElement("a");
// // // // // //       link.href = canvas.toDataURL("image/png");
// // // // // //       const filename = isRealMode
// // // // // //         ? `Certificate-${completedCourse.title.replace(/\s+/g, "-")}.png`
// // // // // //         : `Sample-Certificate-${selectedCourse.title.replace(/\s+/g, "-")}.png`;
// // // // // //       link.download = filename;
// // // // // //       document.body.appendChild(link);
// // // // // //       link.click();
// // // // // //       document.body.removeChild(link);
// // // // // //       message.success("Certificate downloaded!");
// // // // // //     } catch (err) {
// // // // // //       console.error("Download failed", err);
// // // // // //       message.error("Failed to generate certificate.");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // // //         <Title level={2} style={{ color: "#004d40" }}>
// // // // // //           Prefcol Edutech Solutions
// // // // // //         </Title>
// // // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // // //           {isRealMode ? "Your Official Certificate" : "Sample Certificate Preview"}
// // // // // //         </Paragraph>
// // // // // //       </div>

// // // // // //       <Row gutter={[32, 32]}>
// // // // // //         {!isRealMode && (
// // // // // //           <Col xs={24} md={8}>
// // // // // //             <Card
// // // // // //               title={<strong>Select a Course</strong>}
// // // // // //               bordered={false}
// // // // // //               style={{
// // // // // //                 borderRadius: "12px",
// // // // // //                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // //               }}
// // // // // //             >
// // // // // //               <List
// // // // // //                 dataSource={coursesData}
// // // // // //                 renderItem={(course) => (
// // // // // //                   <List.Item
// // // // // //                     key={course.id}
// // // // // //                     onClick={() => setSelectedCourse(course)}
// // // // // //                     style={{
// // // // // //                       cursor: "pointer",
// // // // // //                       border:
// // // // // //                         selectedCourse.id === course.id
// // // // // //                           ? "2px solid #1890ff"
// // // // // //                           : "1px solid #e8e8e8",
// // // // // //                       borderRadius: "8px",
// // // // // //                       padding: "12px",
// // // // // //                       marginBottom: "8px",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     <List.Item.Meta
// // // // // //                       title={<Text strong>{course.title}</Text>}
// // // // // //                       description={
// // // // // //                         <span style={{ color: "#1890ff", display: "flex", alignItems: "center", gap: 4 }}>
// // // // // //                           <ClockCircleOutlined /> {course.duration}
// // // // // //                         </span>
// // // // // //                       }
// // // // // //                     />
// // // // // //                   </List.Item>
// // // // // //                 )}
// // // // // //               />
// // // // // //             </Card>
// // // // // //           </Col>
// // // // // //         )}

// // // // // //         <Col xs={24} md={isRealMode ? 24 : 16}>
// // // // // //           <Card
// // // // // //             title={
// // // // // //               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
// // // // // //                 <strong style={{ marginBottom: 8 }}>
// // // // // //                   {isRealMode ? "Your Certificate" : "Preview Certificate"}
// // // // // //                 </strong>
// // // // // //                 <Button
// // // // // //                   type="primary"
// // // // // //                   icon={<DownloadOutlined />}
// // // // // //                   onClick={handleDownload}
// // // // // //                   loading={loading}
// // // // // //                   size="small"
// // // // // //                   style={{ backgroundColor: "#004d40", borderColor: "#004d40" }}
// // // // // //                 >
// // // // // //                   Download
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             }
// // // // // //             bordered={false}
// // // // // //             style={{
// // // // // //               borderRadius: "12px",
// // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Certificate Preview Container */}
// // // // // //             <div
// // // // // //               style={{
// // // // // //                 border: "2px solid #d9d9d9",
// // // // // //                 borderRadius: "8px",
// // // // // //                 overflow: "hidden",
// // // // // //                 backgroundColor: "#f8f3e9",
// // // // // //                 width: "100%",
// // // // // //                 height: 0,
// // // // // //                 paddingTop: "75%", // 4:3 aspect ratio
// // // // // //                 position: "relative",
// // // // // //               }}
// // // // // //             >
// // // // // //               <div
// // // // // //                 ref={certificateRef}
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   top: 0,
// // // // // //                   left: 0,
// // // // // //                   width: "100%",
// // // // // //                   height: "100%",
// // // // // //                   display: "flex",
// // // // // //                   flexDirection: "column",
// // // // // //                   alignItems: "center",
// // // // // //                   justifyContent: "center",
// // // // // //                   padding: "40px",
// // // // // //                   boxSizing: "border-box",
// // // // // //                   fontFamily: "Georgia, serif",
// // // // // //                   color: "#004d40",
// // // // // //                   fontSize: "16px",
// // // // // //                   backgroundImage: `
// // // // // //                     linear-gradient(rgba(240,230,210,0.05) 1px, transparent 1px),
// // // // // //                     linear-gradient(90deg, rgba(240,230,210,0.05) 1px, transparent 1px)
// // // // // //                   `,
// // // // // //                   backgroundSize: "20px 20px",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {/* Decorative border */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     top: "20px",
// // // // // //                     left: "20px",
// // // // // //                     right: "20px",
// // // // // //                     bottom: "20px",
// // // // // //                     border: "3px solid #004d40",
// // // // // //                     pointerEvents: "none",
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 {/* Top-left lines */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     top: "35px",
// // // // // //                     left: "35px",
// // // // // //                     display: "flex",
// // // // // //                     flexDirection: "column",
// // // // // //                     gap: "5px",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {[0, 1, 2].map((i) => (
// // // // // //                     <div
// // // // // //                       key={i}
// // // // // //                       style={{
// // // // // //                         width: "3px",
// // // // // //                         height: "40px",
// // // // // //                         backgroundColor: "#b8860b",
// // // // // //                         transform: `translateX(${i * 5}px)`,
// // // // // //                       }}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                 </div>

// // // // // //                 {/* Bottom-right lines */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     bottom: "35px",
// // // // // //                     right: "35px",
// // // // // //                     display: "flex",
// // // // // //                     flexDirection: "column",
// // // // // //                     gap: "5px",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {[0, 1, 2].map((i) => (
// // // // // //                     <div
// // // // // //                       key={i}
// // // // // //                       style={{
// // // // // //                         width: "3px",
// // // // // //                         height: "40px",
// // // // // //                         backgroundColor: "#b8860b",
// // // // // //                         transform: `translateX(${-i * 5}px)`,
// // // // // //                       }}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                 </div>

// // // // // //                 {/* Top-right green curve (simulated with div) */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     top: 0,
// // // // // //                     right: 0,
// // // // // //                     width: "200px",
// // // // // //                     height: "240px",
// // // // // //                     background: `
// // // // // //                       radial-gradient(circle at top right, #2ecc71 40%, #006400 70%, transparent 100%)
// // // // // //                     `,
// // // // // //                     borderRadius: "0 0 0 100%",
// // // // // //                     clipPath: "polygon(70% 0, 100% 0, 100% 100%, 0 100%)",
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 {/* Bottom-left green curve */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     bottom: 0,
// // // // // //                     left: 0,
// // // // // //                     width: "200px",
// // // // // //                     height: "240px",
// // // // // //                     background: `
// // // // // //                       radial-gradient(circle at bottom left, #2ecc71 40%, #006400 70%, transparent 100%)
// // // // // //                     `,
// // // // // //                     borderRadius: "100% 0 0 0",
// // // // // //                     clipPath: "polygon(0 0, 30% 0, 100% 100%, 0 100%)",
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 {/* Company Name */}
// // // // // //                 <div style={{ position: "absolute", top: "50px", left: "60px", textAlign: "left" }}>
// // // // // //                   <div style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "Georgia, serif" }}>
// // // // // //                     PREFCOL
// // // // // //                   </div>
// // // // // //                   <div style={{ fontSize: "16px", fontFamily: "Arial, sans-serif" }}>
// // // // // //                     Edutech Solutions (OPC) Pvt Ltd
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Main Title */}
// // // // // //                 <div style={{ textAlign: "center", marginTop: "20px" }}>
// // // // // //                   <div style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "10px" }}>
// // // // // //                     CERTIFICATE
// // // // // //                   </div>
// // // // // //                   <div style={{ fontSize: "36px", fontWeight: "bold" }}>
// // // // // //                     OF INTERNSHIP
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Presentation Line */}
// // // // // //                 <div style={{ fontSize: "24px", marginTop: "20px" }}>
// // // // // //                   This certificate is proudly presented to:
// // // // // //                 </div>

// // // // // //                 {/* Student Name */}
// // // // // //                 <div style={{ fontSize: "40px", fontWeight: "bold", margin: "20px 0" }}>
// // // // // //                   {studentName}
// // // // // //                 </div>

// // // // // //                 {/* Appreciation Text */}
// // // // // //                 <div style={{ fontSize: "18px", textAlign: "center", maxWidth: "80%", lineHeight: 1.4 }}>
// // // // // //                   In Appreciation For Your Successful Work As An Intern At Prefcol Edutech Solutions(OPC) Pvt Ltd
// // // // // //                   <br />
// // // // // //                   The Internship Was Conducted Between 23 July, 2025 and 22 August, 2025.
// // // // // //                 </div>

// // // // // //                 {/* Decorative Line */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     width: "360px",
// // // // // //                     height: "2px",
// // // // // //                     backgroundColor: "#b8860b",
// // // // // //                     margin: "30px 0 20px",
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 {/* Badge with Stars */}
// // // // // //                 <div style={{ textAlign: "center", marginBottom: "40px" }}>
// // // // // //                   {/* Stars */}
// // // // // //                   <div style={{ marginBottom: "10px" }}>
// // // // // //                     {"⭐".repeat(5)}
// // // // // //                   </div>
// // // // // //                   {/* Badge */}
// // // // // //                   <div
// // // // // //                     style={{
// // // // // //                       width: "90px",
// // // // // //                       height: "90px",
// // // // // //                       margin: "0 auto",
// // // // // //                       background: "radial-gradient(circle, #b8860b 60%, #004d40 100%)",
// // // // // //                       borderRadius: "50%",
// // // // // //                       display: "flex",
// // // // // //                       alignItems: "center",
// // // // // //                       justifyContent: "center",
// // // // // //                       color: "white",
// // // // // //                       fontSize: "24px",
// // // // // //                       fontWeight: "bold",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     ✨
// // // // // //                   </div>
// // // // // //                   {/* Ribbon */}
// // // // // //                   <div
// // // // // //                     style={{
// // // // // //                       width: "0",
// // // // // //                       height: "0",
// // // // // //                       borderTop: "25px solid #004d40",
// // // // // //                       borderLeft: "15px solid transparent",
// // // // // //                       borderRight: "15px solid transparent",
// // // // // //                       marginTop: "-5px",
// // // // // //                       marginLeft: "auto",
// // // // // //                       marginRight: "auto",
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 {/* Signatures */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     display: "flex",
// // // // // //                     justifyContent: "space-between",
// // // // // //                     width: "100%",
// // // // // //                     maxWidth: "600px",
// // // // // //                     marginTop: "20px",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div style={{ textAlign: "center" }}>
// // // // // //                     <div
// // // // // //                       style={{
// // // // // //                         width: "160px",
// // // // // //                         height: "1px",
// // // // // //                         backgroundColor: "#004d40",
// // // // // //                         margin: "0 auto 10px",
// // // // // //                       }}
// // // // // //                     />
// // // // // //                     <div style={{ fontSize: "26px", fontWeight: "bold" }}>Manikandan Balamurugan</div>
// // // // // //                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>DIRECTOR</div>
// // // // // //                   </div>
// // // // // //                   <div style={{ textAlign: "center" }}>
// // // // // //                     <div
// // // // // //                       style={{
// // // // // //                         width: "160px",
// // // // // //                         height: "1px",
// // // // // //                         backgroundColor: "#004d40",
// // // // // //                         margin: "0 auto 10px",
// // // // // //                       }}
// // // // // //                     />
// // // // // //                     <div style={{ fontSize: "26px", fontWeight: "bold" }}>Vimal Kanna M</div>
// // // // // //                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>MANAGER</div>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Footer Line */}
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     bottom: "40px",
// // // // // //                     left: "40px",
// // // // // //                     right: "40px",
// // // // // //                     height: "3px",
// // // // // //                     backgroundColor: "#004d40",
// // // // // //                   }}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // // // //             <Paragraph type="secondary" style={{ textAlign: "center", fontSize: "14px" }}>
// // // // // //               {isRealMode
// // // // // //                 ? "Congratulations! You've earned this certificate. Share it with pride."
// // // // // //                 : "This is a sample certificate. After completing a course, your real certificate will include your name and actual completion date."}
// // // // // //             </Paragraph>

// // // // // //             {isRealMode && (
// // // // // //               <Flex justify="center" style={{ marginTop: 16 }}>
// // // // // //                 <Button type="default" onClick={() => navigate("/Student-portal/my-courses")}>
// // // // // //                   ← Back to My Courses
// // // // // //                 </Button>
// // // // // //               </Flex>
// // // // // //             )}
// // // // // //           </Card>
// // // // // //         </Col>
// // // // // //       </Row>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // import React, { useRef } from "react";
// // // // // // import Certificate from "../../assets/certificate-template.png";

// // // // // // const CertificatePreview = ({ studentName = "John Doe", courseName = "React Development" }) => {
// // // // // //   const canvasRef = useRef(null);

// // // // // //   const handleDownload = () => {
// // // // // //     const canvas = canvasRef.current;
// // // // // //     const link = document.createElement("a");
// // // // // //     link.download = `${studentName}-certificate.png`;
// // // // // //     link.href = canvas.toDataURL("image/png");
// // // // // //     link.click();
// // // // // //   };

// // // // // //   React.useEffect(() => {
// // // // // //     const canvas = canvasRef.current;
// // // // // //     const ctx = canvas.getContext("2d");

// // // // // //     const image = new Image();
// // // // // //     image.src = Certificate; // path in /public folder
// // // // // //     image.onload = () => {
// // // // // //       // Set canvas size to image size
// // // // // //       canvas.width = image.width;
// // // // // //       canvas.height = image.height;

// // // // // //       // Draw background image
// // // // // //       ctx.drawImage(image, 0, 0);

// // // // // //       // Text style
// // // // // //       ctx.font = "bold 48px 'Times New Roman'";
// // // // // //       ctx.fillStyle = "#000"; // text color
// // // // // //       ctx.textAlign = "center";

// // // // // //       // Student name (position adjust based on template)
// // // // // //       ctx.fillText(studentName, canvas.width / 2, canvas.height / 2);

// // // // // //       // Course name below
// // // // // //       ctx.font = "30px 'Times New Roman'";
// // // // // //       ctx.fillText(courseName, canvas.width / 2, canvas.height / 2 + 80);
// // // // // //     };
// // // // // //   }, [studentName, courseName]);

// // // // // //   return (
// // // // // //     <div style={{ textAlign: "center", marginTop: "20px" }}>
// // // // // //       <canvas ref={canvasRef} style={{ maxWidth: "100%", borderRadius: "12px" }} />
// // // // // //       <br />
// // // // // //       <button
// // // // // //         onClick={handleDownload}
// // // // // //         style={{
// // // // // //           marginTop: "16px",
// // // // // //           padding: "10px 20px",
// // // // // //           backgroundColor: "#FF7A00",
// // // // // //           color: "#fff",
// // // // // //           border: "none",
// // // // // //           borderRadius: "8px",
// // // // // //           cursor: "pointer",
// // // // // //         }}
// // // // // //       >
// // // // // //         Download Certificate
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CertificatePreview;

// // // // // // "use client";

// // // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // // import {
// // // // // //   Card,
// // // // // //   Button,
// // // // // //   Typography,
// // // // // //   Row,
// // // // // //   Col,
// // // // // //   List,
// // // // // //   Divider,
// // // // // //   message,
// // // // // //   Flex,
// // // // // // } from "antd";
// // // // // // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // import html2canvas from "html2canvas";
// // // // // // import certificate from "../../assets/certificate-template.png";

// // // // // // const { Title, Text, Paragraph } = Typography;

// // // // // // // Example course data
// // // // // // const coursesData = [
// // // // // //   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
// // // // // //   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
// // // // // //   { id: 3, title: "Manual Testing", duration: "3 weeks" },
// // // // // //   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// // // // // // ];

// // // // // // const formatDate = (date) => {
// // // // // //   return new Date(date).toLocaleDateString("en-US", {
// // // // // //     year: "numeric",
// // // // // //     month: "short",
// // // // // //     day: "numeric",
// // // // // //   });
// // // // // // };

// // // // // // export default function CertificatePage() {
// // // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const certificateRef = useRef(null);
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const { course: completedCourse, userData } = location.state || {};

// // // // // //   const currentDate = new Date();
// // // // // //   const completionDate = formatDate(currentDate);

// // // // // //   const isRealMode = !!completedCourse && !!userData;
// // // // // //   const studentName = isRealMode
// // // // // //     ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim() || "Learner"
// // // // // //     : "Student Name";

// // // // // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // // // // //   const handleDownload = async () => {
// // // // // //     if (!certificateRef.current) {
// // // // // //       message.error("Certificate not ready.");
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const canvas = await html2canvas(certificateRef.current, {
// // // // // //         scale: 2,
// // // // // //         useCORS: true,
// // // // // //         backgroundColor: null,
// // // // // //       });

// // // // // //       const link = document.createElement("a");
// // // // // //       link.href = canvas.toDataURL("image/png");
// // // // // //       const filename = isRealMode
// // // // // //         ? `Certificate-${completedCourse.title.replace(/\s+/g, "-")}.png`
// // // // // //         : `Sample-Certificate-${selectedCourse.title.replace(/\s+/g, "-")}.png`;
// // // // // //       link.download = filename;
// // // // // //       document.body.appendChild(link);
// // // // // //       link.click();
// // // // // //       document.body.removeChild(link);
// // // // // //       message.success("Certificate downloaded!");
// // // // // //     } catch (err) {
// // // // // //       console.error("Download failed", err);
// // // // // //       message.error("Failed to generate certificate.");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // // //         <Title level={2} style={{ color: "#004d40" }}>
// // // // // //           Prefcol Edutech Solutions
// // // // // //         </Title>
// // // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // // //           {isRealMode ? "Your Official Certificate" : "Sample Certificate Preview"}
// // // // // //         </Paragraph>
// // // // // //       </div>

// // // // // //       <Row gutter={[32, 32]}>
// // // // // //         {!isRealMode && (
// // // // // //           <Col xs={24} md={8}>
// // // // // //             <Card
// // // // // //               title={<strong>Select a Course</strong>}
// // // // // //               bordered={false}
// // // // // //               style={{
// // // // // //                 borderRadius: "12px",
// // // // // //                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // //               }}
// // // // // //             >
// // // // // //               <List
// // // // // //                 dataSource={coursesData}
// // // // // //                 renderItem={(course) => (
// // // // // //                   <List.Item
// // // // // //                     key={course.id}
// // // // // //                     onClick={() => setSelectedCourse(course)}
// // // // // //                     style={{
// // // // // //                       cursor: "pointer",
// // // // // //                       border:
// // // // // //                         selectedCourse.id === course.id
// // // // // //                           ? "2px solid #1890ff"
// // // // // //                           : "1px solid #e8e8e8",
// // // // // //                       borderRadius: "8px",
// // // // // //                       padding: "12px",
// // // // // //                       marginBottom: "8px",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     <List.Item.Meta
// // // // // //                       title={<Text strong>{course.title}</Text>}
// // // // // //                       description={
// // // // // //                         <span
// // // // // //                           style={{
// // // // // //                             color: "#1890ff",
// // // // // //                             display: "flex",
// // // // // //                             alignItems: "center",
// // // // // //                             gap: 4,
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           <ClockCircleOutlined /> {course.duration}
// // // // // //                         </span>
// // // // // //                       }
// // // // // //                     />
// // // // // //                   </List.Item>
// // // // // //                 )}
// // // // // //               />
// // // // // //             </Card>
// // // // // //           </Col>
// // // // // //         )}

// // // // // //         <Col xs={24} md={isRealMode ? 24 : 16}>
// // // // // //           <Card
// // // // // //             title={
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   display: "flex",
// // // // // //                   flexDirection: "column",
// // // // // //                   alignItems: "center",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <strong style={{ marginBottom: 8 }}>
// // // // // //                   {isRealMode ? "Your Certificate" : "Preview Certificate"}
// // // // // //                 </strong>
// // // // // //                 <Button
// // // // // //                   type="primary"
// // // // // //                   icon={<DownloadOutlined />}
// // // // // //                   onClick={handleDownload}
// // // // // //                   loading={loading}
// // // // // //                   size="small"
// // // // // //                   style={{
// // // // // //                     backgroundColor: "#004d40",
// // // // // //                     borderColor: "#004d40",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Download
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             }
// // // // // //             bordered={false}
// // // // // //             style={{
// // // // // //               borderRadius: "12px",
// // // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Certificate Container */}
// // // // // //             <div
// // // // // //               style={{
// // // // // //                 position: "relative",
// // // // // //                 width: "100%",
// // // // // //                 height: 0,
// // // // // //                 paddingTop: "70%", // Adjust to your image aspect ratio
// // // // // //                 borderRadius: "8px",
// // // // // //                 overflow: "hidden",
// // // // // //                 border: "2px solid #d9d9d9",
// // // // // //                 backgroundColor: "#fff",
// // // // // //               }}
// // // // // //             >
// // // // // //               {/* Background Certificate Image */}
// // // // // //               <img
// // // // // //                 src={certificate}
// // // // // //                 alt="Certificate Background"
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   top: 0,
// // // // // //                   left: 0,
// // // // // //                   width: "100%",
// // // // // //                   height: "100%",
// // // // // //                   objectFit: "cover",
// // // // // //                 }}
// // // // // //               />

// // // // // //               {/* Dynamic Text Overlay */}
// // // // // //               <div
// // // // // //                 ref={certificateRef}
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   top: 0,
// // // // // //                   left: 0,
// // // // // //                   width: "100%",
// // // // // //                   height: "100%",
// // // // // //                   display: "flex",
// // // // // //                   flexDirection: "column",
// // // // // //                   alignItems: "center",
// // // // // //                   justifyContent: "center",
// // // // // //                   color: "#00332b",
// // // // // //                   fontFamily: "Georgia, serif",
// // // // // //                   textAlign: "center",
// // // // // //                   padding: "40px",
// // // // // //                   boxSizing: "border-box",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <div style={{ fontSize: "22px", marginBottom: "8px" }}>
// // // // // //                   This certificate is presented to
// // // // // //                 </div>
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     fontSize: "48px",
// // // // // //                     fontWeight: "bold",
// // // // // //                     color: "#004d40",
// // // // // //                     margin: "12px 0",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {studentName}
// // // // // //                 </div>
// // // // // //                 <div style={{ fontSize: "20px", maxWidth: "80%" }}>
// // // // // //                   For successfully completing the{" "}
// // // // // //                   <strong>{displayCourse.title}</strong> course at{" "}
// // // // // //                   <strong>Prefcol Edutech Solutions (OPC) Pvt. Ltd.</strong>
// // // // // //                 </div>
// // // // // //                 <div style={{ fontSize: "18px", marginTop: "20px" }}>
// // // // // //                   Completion Date: <strong>{completionDate}</strong>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // // // //             <Paragraph
// // // // // //               type="secondary"
// // // // // //               style={{ textAlign: "center", fontSize: "14px" }}
// // // // // //             >
// // // // // //               {isRealMode
// // // // // //                 ? "Congratulations! You've earned this certificate. Share it with pride."
// // // // // //                 : "This is a sample certificate. After completing a course, your real certificate will include your name and completion date."}
// // // // // //             </Paragraph>

// // // // // //             {isRealMode && (
// // // // // //               <Flex justify="center" style={{ marginTop: 16 }}>
// // // // // //                 <Button
// // // // // //                   type="default"
// // // // // //                   onClick={() => navigate("/Student-portal/my-courses")}
// // // // // //                 >
// // // // // //                   ← Back to My Courses
// // // // // //                 </Button>
// // // // // //               </Flex>
// // // // // //             )}
// // // // // //           </Card>
// // // // // //         </Col>
// // // // // //       </Row>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import React, { useRef, useState } from "react";
// // // // // import {
// // // // //   Card,
// // // // //   Button,
// // // // //   Typography,
// // // // //   Row,
// // // // //   Col,
// // // // //   List,
// // // // //   Divider,
// // // // //   message,
// // // // //   Flex,
// // // // // } from "antd";
// // // // // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // import html2canvas from "html2canvas";
// // // // // import certificate from "../../assets/certificate-template.png";

// // // // // const { Title, Text, Paragraph } = Typography;

// // // // // const coursesData = [
// // // // //   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
// // // // //   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
// // // // //   { id: 3, title: "Manual Testing", duration: "3 weeks" },
// // // // //   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// // // // // ];

// // // // // const formatDate = (date) =>
// // // // //   new Date(date).toLocaleDateString("en-US", {
// // // // //     year: "numeric",
// // // // //     month: "short",
// // // // //     day: "numeric",
// // // // //   });

// // // // // export default function CertificatePage() {
// // // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const certificateRef = useRef(null);
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   // Dynamic values from navigation or mock data
// // // // //   const { course: completedCourse, userData } = location.state || {};
// // // // //   const currentDate = new Date();
// // // // //   const completionDate = formatDate(currentDate);
// // // // //   const isRealMode = !!completedCourse && !!userData;

// // // // //   const studentName = isRealMode
// // // // //     ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim() || "Learner"
// // // // //     : "Student Name";

// // // // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // // // //   // Download Certificate as Image
// // // // //   const handleDownload = async () => {
// // // // //     if (!certificateRef.current) {
// // // // //       message.error("Certificate not ready.");
// // // // //       return;
// // // // //     }
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const canvas = await html2canvas(certificateRef.current, {
// // // // //         scale: 2,
// // // // //         useCORS: true,
// // // // //         backgroundColor: null,
// // // // //       });

// // // // //       const link = document.createElement("a");
// // // // //       link.href = canvas.toDataURL("image/png");
// // // // //       link.download = `Certificate-${displayCourse.title.replace(/\s+/g, "-")}.png`;
// // // // //       link.click();
// // // // //       message.success("Certificate downloaded!");
// // // // //     } catch (err) {
// // // // //       console.error("Download failed", err);
// // // // //       message.error("Failed to generate certificate.");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // // //         <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
// // // // //           Prefcol Edutech Solutions
// // // // //         </Title>
// // // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // // //           {isRealMode ? "Your Official Certificate" : "Sample Certificate Preview"}
// // // // //         </Paragraph>
// // // // //       </div>

// // // // //       <Row gutter={[32, 32]}>
// // // // //         {!isRealMode && (
// // // // //           <Col xs={24} md={8}>
// // // // //             <Card
// // // // //               title={<strong>Select a Course</strong>}
// // // // //               bordered={false}
// // // // //               style={{
// // // // //                 borderRadius: "12px",
// // // // //                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // //               }}
// // // // //             >
// // // // //               <List
// // // // //                 dataSource={coursesData}
// // // // //                 renderItem={(course) => (
// // // // //                   <List.Item
// // // // //                     key={course.id}
// // // // //                     onClick={() => setSelectedCourse(course)}
// // // // //                     style={{
// // // // //                       cursor: "pointer",
// // // // //                       border:
// // // // //                         selectedCourse.id === course.id
// // // // //                           ? "2px solid #1890ff"
// // // // //                           : "1px solid #e8e8e8",
// // // // //                       borderRadius: "8px",
// // // // //                       padding: "12px",
// // // // //                       marginBottom: "8px",
// // // // //                     }}
// // // // //                   >
// // // // //                     <List.Item.Meta
// // // // //                       title={<Text strong>{course.title}</Text>}
// // // // //                       description={
// // // // //                         <span
// // // // //                           style={{
// // // // //                             color: "#1890ff",
// // // // //                             display: "flex",
// // // // //                             alignItems: "center",
// // // // //                             gap: 4,
// // // // //                           }}
// // // // //                         >
// // // // //                           <ClockCircleOutlined /> {course.duration}
// // // // //                         </span>
// // // // //                       }
// // // // //                     />
// // // // //                   </List.Item>
// // // // //                 )}
// // // // //               />
// // // // //             </Card>
// // // // //           </Col>
// // // // //         )}

// // // // //         <Col xs={24} md={isRealMode ? 24 : 16}>
// // // // //           <Card
// // // // //             bordered={false}
// // // // //             style={{
// // // // //               borderRadius: "12px",
// // // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // // //             }}
// // // // //             title={
// // // // //               <div
// // // // //                 style={{
// // // // //                   display: "flex",
// // // // //                   flexDirection: "column",
// // // // //                   alignItems: "center",
// // // // //                 }}
// // // // //               >
// // // // //                 <strong style={{ marginBottom: 8 }}>
// // // // //                   {isRealMode ? "Your Certificate" : "Preview Certificate"}
// // // // //                 </strong>
// // // // //                 <Button
// // // // //                   type="primary"
// // // // //                   icon={<DownloadOutlined />}
// // // // //                   onClick={handleDownload}
// // // // //                   loading={loading}
// // // // //                   size="small"
// // // // //                   style={{
// // // // //                     backgroundColor: "#004d40",
// // // // //                     borderColor: "#004d40",
// // // // //                   }}
// // // // //                 >
// // // // //                   Download
// // // // //                 </Button>
// // // // //               </div>
// // // // //             }
// // // // //           >
// // // // //             {/* Certificate Display */}
// // // // //             <div
// // // // //               ref={certificateRef}
// // // // //               style={{
// // // // //                 position: "relative",
// // // // //                 width: "100%",
// // // // //                 overflow: "hidden",
// // // // //                 borderRadius: "8px",
// // // // //                 backgroundColor: "#fff",
// // // // //               }}
// // // // //             >
// // // // //               <div
// // // // //                 style={{
// // // // //                   position: "relative",
// // // // //                   width: "100%",
// // // // //                   aspectRatio: "16 / 9",
// // // // //                   backgroundImage: `url(${certificate})`,
// // // // //                   backgroundSize: "cover",
// // // // //                   backgroundPosition: "center",
// // // // //                 }}
// // // // //               >
// // // // //                 {/* Responsive Overlay */}
// // // // //                 <div
// // // // //                   style={{
// // // // //                     position: "absolute",
// // // // //                     inset: 0,
// // // // //                     display: "flex",
// // // // //                     flexDirection: "column",
// // // // //                     justifyContent: "center",
// // // // //                     alignItems: "center",
// // // // //                     textAlign: "center",
// // // // //                     color: "#00332b",
// // // // //                     padding: "2vw",
// // // // //                     fontFamily: "Georgia, serif",
// // // // //                   }}
// // // // //                 >
// // // // //                   <p
// // // // //                     style={{
// // // // //                       fontSize: "clamp(14px, 1.2vw, 18px)",
// // // // //                       marginBottom: "0.8em",
// // // // //                     }}
// // // // //                   >
// // // // //                     This certificate is proudly presented to
// // // // //                   </p>

// // // // //                   <h1
// // // // //                     style={{
// // // // //                       fontSize: "clamp(24px, 4vw, 48px)",
// // // // //                       fontWeight: "bold",
// // // // //                       color: "#004d40",
// // // // //                       margin: "0.2em 0",
// // // // //                       wordBreak: "break-word",
// // // // //                     }}
// // // // //                   >
// // // // //                     {studentName}
// // // // //                   </h1>

// // // // //                   <p
// // // // //                     style={{
// // // // //                       fontSize: "clamp(14px, 1.3vw, 20px)",
// // // // //                       maxWidth: "85%",
// // // // //                       marginBottom: "0.8em",
// // // // //                       lineHeight: 1.4,
// // // // //                     }}
// // // // //                   >
// // // // //                     In appreciation for successfully completing the course{" "}
// // // // //                     <strong>{displayCourse.title}</strong> offered by{" "}
// // // // //                     <strong>Prefcol Edutech Solutions (OPC) Pvt Ltd.</strong>
// // // // //                   </p>

// // // // //                   <p
// // // // //                     style={{
// // // // //                       fontSize: "clamp(12px, 1vw, 18px)",
// // // // //                       marginTop: "1em",
// // // // //                     }}
// // // // //                   >
// // // // //                     Completion Date: <strong>{completionDate}</strong>
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // // //             <Paragraph
// // // // //               type="secondary"
// // // // //               style={{ textAlign: "center", fontSize: "14px" }}
// // // // //             >
// // // // //               {isRealMode
// // // // //                 ? "Congratulations! You've earned this certificate."
// // // // //                 : "This is a sample certificate. After completing a course, your real certificate will include your name and completion date."}
// // // // //             </Paragraph>

// // // // //             {isRealMode && (
// // // // //               <Flex justify="center" style={{ marginTop: 16 }}>
// // // // //                 <Button
// // // // //                   type="default"
// // // // //                   onClick={() => navigate("/Student-portal/my-courses")}
// // // // //                 >
// // // // //                   ← Back to My Courses
// // // // //                 </Button>
// // // // //               </Flex>
// // // // //             )}
// // // // //           </Card>
// // // // //         </Col>
// // // // //       </Row>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import React, { useRef, useState } from "react";
// // // // import {
// // // //   Card,
// // // //   Button,
// // // //   Typography,
// // // //   Row,
// // // //   Col,
// // // //   List,
// // // //   Divider,
// // // //   message,
// // // //   Flex,
// // // // } from "antd";
// // // // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // import html2canvas from "html2canvas";
// // // // import certificate from "../../assets/certificate-template.png";

// // // // const { Title, Text, Paragraph } = Typography;

// // // // const coursesData = [
// // // //   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
// // // //   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
// // // //   { id: 3, title: "Manual Testing", duration: "3 weeks" },
// // // //   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// // // // ];

// // // // export default function CertificatePage() {
// // // //   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const certificateRef = useRef(null);
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const { course: completedCourse, userData } = location.state || {};
// // // //   const isRealMode = !!completedCourse && !!userData;
// // // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // // //   // Download Certificate
// // // //   const handleDownload = async () => {
// // // //     if (!certificateRef.current) {
// // // //       message.error("Certificate not ready.");
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     try {
// // // //       const canvas = await html2canvas(certificateRef.current, {
// // // //         scale: 2,
// // // //         useCORS: true,
// // // //         backgroundColor: null,
// // // //       });

// // // //       const link = document.createElement("a");
// // // //       link.href = canvas.toDataURL("image/png");
// // // //       link.download = `Certificate-${displayCourse.title.replace(/\s+/g, "-")}.png`;
// // // //       link.click();
// // // //       message.success("Certificate downloaded!");
// // // //     } catch (err) {
// // // //       console.error("Download failed", err);
// // // //       message.error("Failed to generate certificate.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // // //       {/* Header */}
// // // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // //         <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
// // // //           Prefcol Edutech Solutions
// // // //         </Title>
// // // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // // //           {isRealMode ? "Your Official Certificate" : "Sample Certificate Preview"}
// // // //         </Paragraph>
// // // //       </div>

// // // //       <Row gutter={[32, 32]}>
// // // //         {!isRealMode && (
// // // //           <Col xs={24} md={8}>
// // // //             <Card
// // // //               title={<strong>Select a Course</strong>}
// // // //               bordered={false}
// // // //               style={{
// // // //                 borderRadius: "12px",
// // // //                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // //               }}
// // // //             >
// // // //               <List
// // // //                 dataSource={coursesData}
// // // //                 renderItem={(course) => (
// // // //                   <List.Item
// // // //                     key={course.id}
// // // //                     onClick={() => setSelectedCourse(course)}
// // // //                     style={{
// // // //                       cursor: "pointer",
// // // //                       border:
// // // //                         selectedCourse.id === course.id
// // // //                           ? "2px solid #1890ff"
// // // //                           : "1px solid #e8e8e8",
// // // //                       borderRadius: "8px",
// // // //                       padding: "12px",
// // // //                       marginBottom: "8px",
// // // //                     }}
// // // //                   >
// // // //                     <List.Item.Meta
// // // //                       title={<Text strong>{course.title}</Text>}
// // // //                       description={
// // // //                         <span
// // // //                           style={{
// // // //                             color: "#1890ff",
// // // //                             display: "flex",
// // // //                             alignItems: "center",
// // // //                             gap: 4,
// // // //                           }}
// // // //                         >
// // // //                           <ClockCircleOutlined /> {course.duration}
// // // //                         </span>
// // // //                       }
// // // //                     />
// // // //                   </List.Item>
// // // //                 )}
// // // //               />
// // // //             </Card>
// // // //           </Col>
// // // //         )}

// // // //         <Col xs={24} md={isRealMode ? 24 : 16}>
// // // //           <Card
// // // //             bordered={false}
// // // //             style={{
// // // //               borderRadius: "12px",
// // // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // // //             }}
// // // //             title={
// // // //               <div
// // // //                 style={{
// // // //                   display: "flex",
// // // //                   flexDirection: "column",
// // // //                   alignItems: "center",
// // // //                 }}
// // // //               >
// // // //                 <strong style={{ marginBottom: 8 }}>
// // // //                   {isRealMode ? "Your Certificate" : "Preview Certificate"}
// // // //                 </strong>
// // // //                 <Button
// // // //                   type="primary"
// // // //                   icon={<DownloadOutlined />}
// // // //                   onClick={handleDownload}
// // // //                   loading={loading}
// // // //                   size="small"
// // // //                   style={{
// // // //                     backgroundColor: "#004d40",
// // // //                     borderColor: "#004d40",
// // // //                   }}
// // // //                 >
// // // //                   Download
// // // //                 </Button>
// // // //               </div>
// // // //             }
// // // //           >
// // // //             {/* Clean Certificate Background */}
// // // //             <div
// // // //               ref={certificateRef}
// // // //               style={{
// // // //                 position: "relative",
// // // //                 width: "100%",
// // // //                 aspectRatio: "16 / 9",
// // // //                 backgroundImage: `url(${certificate})`,
// // // //                 backgroundSize: "cover",
// // // //                 backgroundPosition: "center",
// // // //                 borderRadius: "8px",
// // // //                 border: "2px solid #d9d9d9",
// // // //                 overflow: "hidden",
// // // //               }}
// // // //             >
// // // //               {/* no overlay content here — clean design */}
// // // //             </div>

// // // //             <Divider dashed style={{ margin: "24px 0" }} />

// // // //             <Paragraph
// // // //               type="secondary"
// // // //               style={{ textAlign: "center", fontSize: "14px" }}
// // // //             >
// // // //               {isRealMode
// // // //                 ? "Congratulations! You've earned this certificate."
// // // //                 : "This is a blank certificate. Text will be dynamically added via code."}
// // // //             </Paragraph>

// // // //             {isRealMode && (
// // // //               <Flex justify="center" style={{ marginTop: 16 }}>
// // // //                 <Button
// // // //                   type="default"
// // // //                   onClick={() => navigate("/Student-portal/my-courses")}
// // // //                 >
// // // //                   ← Back to My Courses
// // // //                 </Button>
// // // //               </Flex>
// // // //             )}
// // // //           </Card>
// // // //         </Col>
// // // //       </Row>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useRef, useState } from "react";
// // // import {
// // //   Card,
// // //   Button,
// // //   Typography,
// // //   Row,
// // //   Col,
// // //   List,
// // //   Divider,
// // //   message,
// // //   Flex,
// // //   Input,
// // // } from "antd";
// // // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import html2canvas from "html2canvas";
// // // import certificate from "../../assets/certificate-template.png";

// // // const { Title, Text, Paragraph } = Typography;

// // // const coursesData = [
// // //   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
// // //   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
// // //   { id: 3, title: "Manual Testing", duration: "3 weeks" },
// // //   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// // // ];

// // // export default function CertificatePage() {
// // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // //   const [studentName, setStudentName] = useState("John Doe");
// // //   const [loading, setLoading] = useState(false);
// // //   const certificateRef = useRef(null);
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const { course: completedCourse, userData } = location.state || {};
// // //   const isRealMode = !!completedCourse && !!userData;
// // //   const displayCourse = isRealMode ? completedCourse : selectedCourse;

// // //   // Download Certificate
// // //   const handleDownload = async () => {
// // //     if (!certificateRef.current) {
// // //       message.error("Certificate not ready.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const canvas = await html2canvas(certificateRef.current, {
// // //         scale: 2,
// // //         useCORS: true,
// // //         backgroundColor: null,
// // //       });

// // //       const link = document.createElement("a");
// // //       link.href = canvas.toDataURL("image/png");
// // //       link.download = `Certificate-${displayCourse?.title?.replace(/\s+/g, "-")}.png`;
// // //       link.click();
// // //       message.success("Certificate downloaded!");
// // //     } catch (err) {
// // //       console.error("Download failed", err);
// // //       message.error("Failed to generate certificate.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// // //       {/* Header */}
// // //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // //         <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
// // //           Prefcol Edutech Solutions
// // //         </Title>
// // //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// // //           Example Certificate Preview
// // //         </Paragraph>
// // //       </div>

// // //       <Row gutter={[32, 32]}>
// // //         {/* Left Side - Course & Name Input */}
// // //         <Col xs={24} md={8}>
// // //           <Card
// // //             title={<strong>Enter Details</strong>}
// // //             bordered={false}
// // //             style={{
// // //               borderRadius: "12px",
// // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // //             }}
// // //           >
// // //             <div style={{ marginBottom: 16 }}>
// // //               <Text strong>Student Name:</Text>
// // //               <Input
// // //                 value={studentName}
// // //                 onChange={(e) => setStudentName(e.target.value)}
// // //                 placeholder="Enter student name"
// // //                 style={{ marginTop: 8 }}
// // //               />
// // //             </div>

// // //             <Divider />

// // //             <Text strong>Select a Course:</Text>
// // //             <List
// // //               dataSource={coursesData}
// // //               renderItem={(course) => (
// // //                 <List.Item
// // //                   key={course.id}
// // //                   onClick={() => setSelectedCourse(course)}
// // //                   style={{
// // //                     cursor: "pointer",
// // //                     border:
// // //                       selectedCourse?.id === course.id
// // //                         ? "2px solid #1890ff"
// // //                         : "1px solid #e8e8e8",
// // //                     borderRadius: "8px",
// // //                     padding: "12px",
// // //                     marginBottom: "8px",
// // //                     transition: "0.2s",
// // //                   }}
// // //                 >
// // //                   <List.Item.Meta
// // //                     title={<Text strong>{course.title}</Text>}
// // //                     description={
// // //                       <span
// // //                         style={{
// // //                           color: "#1890ff",
// // //                           display: "flex",
// // //                           alignItems: "center",
// // //                           gap: 4,
// // //                         }}
// // //                       >
// // //                         <ClockCircleOutlined /> {course.duration}
// // //                       </span>
// // //                     }
// // //                   />
// // //                 </List.Item>
// // //               )}
// // //             />
// // //           </Card>
// // //         </Col>

// // //         {/* Right Side - Certificate Preview */}
// // //         <Col xs={24} md={16}>
// // //           <Card
// // //             bordered={false}
// // //             style={{
// // //               borderRadius: "12px",
// // //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// // //             }}
// // //             title={
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                   alignItems: "center",
// // //                 }}
// // //               >
// // //                 <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
// // //                 <Button
// // //                   type="primary"
// // //                   icon={<DownloadOutlined />}
// // //                   onClick={handleDownload}
// // //                   loading={loading}
// // //                   size="small"
// // //                   style={{
// // //                     backgroundColor: "#004d40",
// // //                     borderColor: "#004d40",
// // //                   }}
// // //                   disabled={!selectedCourse}
// // //                 >
// // //                   Download
// // //                 </Button>
// // //               </div>
// // //             }
// // //           >
// // //             <div
// // //               ref={certificateRef}
// // //               style={{
// // //                 position: "relative",
// // //                 width: "100%",
// // //                 aspectRatio: "16 / 9",
// // //                 backgroundImage: `url(${certificate})`,
// // //                 backgroundSize: "cover",
// // //                 backgroundPosition: "center",
// // //                 borderRadius: "8px",
// // //                 border: "2px solid #d9d9d9",
// // //                 overflow: "hidden",
// // //               }}
// // //             >
// // //               {/* Text Overlay */}
// // //               {selectedCourse && (
// // //                 <div
// // //                   style={{
// // //                     position: "absolute",
// // //                     top: "40%",
// // //                     left: "50%",
// // //                     transform: "translate(-50%, -40%)",
// // //                     textAlign: "center",
// // //                     color: "#004d40",
// // //                     fontFamily: "Georgia, serif",
// // //                     width: "80%",
// // //                     lineHeight: 1.4,
// // //                   }}
// // //                 >
// // //                   <div
// // //                     style={{
// // //                       fontSize: "24px",
// // //                       marginBottom: "10px",
// // //                       fontWeight: 500,
// // //                     }}
// // //                   >
// // //                     This certificate is presented to
// // //                   </div>
// // //                   <div
// // //                     style={{
// // //                       fontSize: "48px",
// // //                       fontWeight: "bold",
// // //                       marginBottom: "12px",
// // //                       wordBreak: "break-word",
// // //                     }}
// // //                   >
// // //                     {studentName || "Student Name"}
// // //                   </div>
// // //                   <div
// // //                     style={{
// // //                       fontSize: "22px",
// // //                       marginTop: "8px",
// // //                     }}
// // //                   >
// // //                     For successfully completing the{" "}
// // //                     <span style={{ fontWeight: "bold" }}>
// // //                       {selectedCourse.title}
// // //                     </span>{" "}
// // //                     course
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <Divider dashed style={{ margin: "24px 0" }} />

// // //             <Paragraph
// // //               type="secondary"
// // //               style={{ textAlign: "center", fontSize: "14px" }}
// // //             >
// // //               Select a course and enter a name to preview the certificate.
// // //             </Paragraph>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import React, { useRef, useState } from "react";
// // import {
// //   Card,
// //   Button,
// //   Typography,
// //   Row,
// //   Col,
// //   List,
// //   Divider,
// //   message,
// //   Input,
// // } from "antd";
// // import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// // import html2canvas from "html2canvas";
// // import certificate from "../../assets/certificate-template.png";

// // const { Title, Text, Paragraph } = Typography;

// // const coursesData = [
// //   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
// //   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
// //   { id: 3, title: "Manual Testing", duration: "3 weeks" },
// //   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// // ];

// // export default function CertificatePage() {
// //   const [selectedCourse, setSelectedCourse] = useState(null);
// //   const [studentName, setStudentName] = useState("John Doe");
// //   const [loading, setLoading] = useState(false);
// //   const certificateRef = useRef(null);

// //   // Download Certificate
// //   const handleDownload = async () => {
// //     if (!certificateRef.current) {
// //       message.error("Certificate not ready.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const canvas = await html2canvas(certificateRef.current, {
// //         scale: 2,
// //         useCORS: true,
// //         backgroundColor: null,
// //       });

// //       const link = document.createElement("a");
// //       link.href = canvas.toDataURL("image/png");
// //       link.download = `Certificate-${selectedCourse?.title?.replace(/\s+/g, "-")}.png`;
// //       link.click();
// //       message.success("Certificate downloaded!");
// //     } catch (err) {
// //       console.error("Download failed", err);
// //       message.error("Failed to generate certificate.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
// //       {/* Header */}
// //       <div style={{ textAlign: "center", marginBottom: "32px" }}>
// //         <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
// //           Prefcol Edutech Solutions
// //         </Title>
// //         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
// //           Certificate Preview
// //         </Paragraph>
// //       </div>

// //       <Row gutter={[32, 32]}>
// //         {/* Left Side - Input */}
// //         <Col xs={24} md={8}>
// //           <Card
// //             title={<strong>Enter Details</strong>}
// //             bordered={false}
// //             style={{
// //               borderRadius: "12px",
// //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// //             }}
// //           >
// //             <div style={{ marginBottom: 16 }}>
// //               <Text strong>Student Name:</Text>
// //               <Input
// //                 value={studentName}
// //                 onChange={(e) => setStudentName(e.target.value)}
// //                 placeholder="Enter student name"
// //                 style={{ marginTop: 8 }}
// //               />
// //             </div>

// //             <Divider />

// //             <Text strong>Select a Course:</Text>
// //             <List
// //               dataSource={coursesData}
// //               renderItem={(course) => (
// //                 <List.Item
// //                   key={course.id}
// //                   onClick={() => setSelectedCourse(course)}
// //                   style={{
// //                     cursor: "pointer",
// //                     border:
// //                       selectedCourse?.id === course.id
// //                         ? "2px solid #1890ff"
// //                         : "1px solid #e8e8e8",
// //                     borderRadius: "8px",
// //                     padding: "12px",
// //                     marginBottom: "8px",
// //                     transition: "0.2s",
// //                   }}
// //                 >
// //                   <List.Item.Meta
// //                     title={<Text strong>{course.title}</Text>}
// //                     description={
// //                       <span
// //                         style={{
// //                           color: "#1890ff",
// //                           display: "flex",
// //                           alignItems: "center",
// //                           gap: 4,
// //                         }}
// //                       >
// //                         <ClockCircleOutlined /> {course.duration}
// //                       </span>
// //                     }
// //                   />
// //                 </List.Item>
// //               )}
// //             />
// //           </Card>
// //         </Col>

// //         {/* Right Side - Certificate Preview */}
// //         <Col xs={24} md={16}>
// //           <Card
// //             bordered={false}
// //             style={{
// //               borderRadius: "12px",
// //               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
// //             }}
// //             title={
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   alignItems: "center",
// //                 }}
// //               >
// //                 <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
// //                 <Button
// //                   type="primary"
// //                   icon={<DownloadOutlined />}
// //                   onClick={handleDownload}
// //                   loading={loading}
// //                   size="small"
// //                   style={{
// //                     backgroundColor: "#004d40",
// //                     borderColor: "#004d40",
// //                   }}
// //                   disabled={!selectedCourse}
// //                 >
// //                   Download
// //                 </Button>
// //               </div>
// //             }
// //           >
// //             <div
// //               ref={certificateRef}
// //               style={{
// //                 position: "relative",
// //                 width: "100%",
// //                 aspectRatio: "16 / 9",
// //                 backgroundImage: `url(${certificate})`,
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //                 borderRadius: "8px",
// //                 border: "2px solid #d9d9d9",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               {/* Only Name and Course Overlay */}
// //               {selectedCourse && (
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     top: "45%",
// //                     left: "50%",
// //                     transform: "translate(-50%, -45%)",
// //                     textAlign: "center",
// //                     color: "#004d40",
// //                     fontFamily: "Georgia, serif",
// //                     width: "80%",
// //                     lineHeight: 1.4,
// //                   }}
// //                 >
// //                   <div
// //                     style={{
// //                       fontSize: "46px",
// //                       fontWeight: "bold",
// //                       marginBottom: "12px",
// //                       wordBreak: "break-word",
// //                     }}
// //                   >
// //                     {studentName || "Student Name"}
// //                   </div>
// //                   <div
// //                     style={{
// //                       fontSize: "26px",
// //                       marginTop: "12px",
// //                       fontWeight: "500",
// //                       wordBreak: "break-word",
// //                     }}
// //                   >
// //                     {selectedCourse.title}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             <Divider dashed style={{ margin: "24px 0" }} />

// //             <Paragraph
// //               type="secondary"
// //               style={{ textAlign: "center", fontSize: "14px" }}
// //             >
// //               Enter a student name and select a course to preview the certificate.
// //             </Paragraph>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </div>
// //   );
// // }
// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Card,
//   Button,
//   Typography,
//   Row,
//   Col,
//   List,
//   Divider,
//   message,
//   Input,
// } from "antd";
// import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/certificate-template.png";

// const { Title, Text, Paragraph } = Typography;

// const coursesData = [
//   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
//   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
//   { id: 3, title: "Manual Testing", duration: "3 weeks" },
//   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// ];

// export default function CertificatePage() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [studentName, setStudentName] = useState("John Doe");
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef(null);

//   // Download Certificate
//   const handleDownload = async () => {
//     if (!certificateRef.current) {
//       message.error("Certificate not ready.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certificateRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: null,
//       });

//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-${selectedCourse?.title?.replace(/\s+/g, "-")}.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
//       {/* Header */}
//       <div style={{ textAlign: "center", marginBottom: "32px" }}>
//         <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
//           Prefcol Edutech Solutions
//         </Title>
//         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
//           Certificate Preview
//         </Paragraph>
//       </div>

//       <Row gutter={[32, 32]}>
//         {/* Left Side - Input */}
//         <Col xs={24} md={8}>
//           <Card
//             title={<strong>Enter Details</strong>}
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//             }}
//           >
//             <div style={{ marginBottom: 16 }}>
//               <Text strong>Student Name:</Text>
//               <Input
//                 value={studentName}
//                 onChange={(e) => setStudentName(e.target.value)}
//                 placeholder="Enter student name"
//                 style={{ marginTop: 8 }}
//               />
//             </div>

//             <Divider />

//             <Text strong>Select a Course:</Text>
//             <List
//               dataSource={coursesData}
//               renderItem={(course) => (
//                 <List.Item
//                   key={course.id}
//                   onClick={() => setSelectedCourse(course)}
//                   style={{
//                     cursor: "pointer",
//                     border:
//                       selectedCourse?.id === course.id
//                         ? "2px solid #1890ff"
//                         : "1px solid #e8e8e8",
//                     borderRadius: "8px",
//                     padding: "12px",
//                     marginBottom: "8px",
//                     transition: "0.2s",
//                   }}
//                 >
//                   <List.Item.Meta
//                     title={<Text strong>{course.title}</Text>}
//                     description={
//                       <span
//                         style={{
//                           color: "#1890ff",
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 4,
//                         }}
//                       >
//                         <ClockCircleOutlined /> {course.duration}
//                       </span>
//                     }
//                   />
//                 </List.Item>
//               )}
//             />
//           </Card>
//         </Col>

//         {/* Right Side - Certificate Preview */}
//         <Col xs={24} md={16}>
//           <Card
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//             }}
//             title={
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
//                 <Button
//                   type="primary"
//                   icon={<DownloadOutlined />}
//                   onClick={handleDownload}
//                   loading={loading}
//                   size="small"
//                   style={{
//                     backgroundColor: "#004d40",
//                     borderColor: "#004d40",
//                   }}
//                   disabled={!selectedCourse}
//                 >
//                   Download
//                 </Button>
//               </div>
//             }
//           >
//             <div
//               ref={certificateRef}
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 aspectRatio: "16 / 9",
//                 backgroundImage: `url(${certificate})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 borderRadius: "8px",
//                 border: "2px solid #d9d9d9",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Only Name and Course Overlay */}
//               {selectedCourse && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "55%", // ⬅️ moved slightly lower
//                     left: "50%",
//                     transform: "translate(-50%, -55%)",
//                     textAlign: "center",
//                     color: "#004d40",
//                     fontFamily: "Georgia, serif",
//                     width: "80%",
//                     lineHeight: 1.4,
//                     padding: "0 10px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "clamp(28px, 5vw, 50px)", // responsive font
//                       fontWeight: "bold",
//                       marginBottom: "12px",
//                       wordBreak: "break-word",
//                     }}
//                   >
//                     {studentName || "Student Name"}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "clamp(18px, 3.5vw, 28px)", // responsive font
//                       fontWeight: 500,
//                       wordBreak: "break-word",
//                     }}
//                   >
//                     {selectedCourse.title}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Divider dashed style={{ margin: "24px 0" }} />

//             <Paragraph
//               type="secondary"
//               style={{ textAlign: "center", fontSize: "14px" }}
//             >
//               Enter a student name and select a course to preview the certificate.
//             </Paragraph>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }
// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Card,
//   Button,
//   Typography,
//   Row,
//   Col,
//   List,
//   Divider,
//   message,
//   Input,
// } from "antd";
// import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/certificate-template.png";

// const { Title, Text, Paragraph } = Typography;

// const coursesData = [
//   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
//   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
//   { id: 3, title: "Manual Testing", duration: "3 weeks" },
//   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// ];

// export default function CertificatePage() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [studentName, setStudentName] = useState("John Doe");
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef(null);

//   const handleDownload = async () => {
//     if (!certificateRef.current) {
//       message.error("Certificate not ready.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certificateRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: null,
//       });

//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-${selectedCourse?.title?.replace(/\s+/g, "-")}.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
//       <div style={{ textAlign: "center", marginBottom: "32px" }}>
//         <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
//           Prefcol Edutech Solutions
//         </Title>
//         <Paragraph type="secondary" style={{ fontSize: "18px" }}>
//           Certificate Preview
//         </Paragraph>
//       </div>

//       <Row gutter={[32, 32]}>
//         <Col xs={24} md={8}>
//           <Card
//             title={<strong>Enter Details</strong>}
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//             }}
//           >
//             <div style={{ marginBottom: 16 }}>
//               <Text strong>Student Name:</Text>
//               <Input
//                 value={studentName}
//                 onChange={(e) => setStudentName(e.target.value)}
//                 placeholder="Enter student name"
//                 style={{ marginTop: 8 }}
//               />
//             </div>

//             <Divider />

//             <Text strong>Select a Course:</Text>
//             <List
//               dataSource={coursesData}
//               renderItem={(course) => (
//                 <List.Item
//                   key={course.id}
//                   onClick={() => setSelectedCourse(course)}
//                   style={{
//                     cursor: "pointer",
//                     border:
//                       selectedCourse?.id === course.id
//                         ? "2px solid #1890ff"
//                         : "1px solid #e8e8e8",
//                     borderRadius: "8px",
//                     padding: "12px",
//                     marginBottom: "8px",
//                     transition: "0.2s",
//                   }}
//                 >
//                   <List.Item.Meta
//                     title={<Text strong>{course.title}</Text>}
//                     description={
//                       <span
//                         style={{
//                           color: "#1890ff",
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 4,
//                         }}
//                       >
//                         <ClockCircleOutlined /> {course.duration}
//                       </span>
//                     }
//                   />
//                 </List.Item>
//               )}
//             />
//           </Card>
//         </Col>

//         <Col xs={24} md={16}>
//           <Card
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//             }}
//             title={
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
//                 <Button
//                   type="primary"
//                   icon={<DownloadOutlined />}
//                   onClick={handleDownload}
//                   loading={loading}
//                   size="small"
//                   style={{
//                     backgroundColor: "#004d40",
//                     borderColor: "#004d40",
//                   }}
//                   disabled={!selectedCourse}
//                 >
//                   Download
//                 </Button>
//               </div>
//             }
//           >
//             <div
//   ref={certificateRef}
//   style={{
//     position: "relative",
//     width: "100%",
//     aspectRatio: "16 / 9",
//     backgroundImage: `url(${certificate})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     borderRadius: "8px",
//     border: "2px solid #d9d9d9",
//     overflow: "hidden",
//   }}
// >

//               {selectedCourse && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "56%", // slightly lowered
//                     left: "50%",
//                     transform: "translate(-50%, -56%)",
//                     textAlign: "center",
//                     color: "#004d40",
//                     fontFamily: "Georgia, serif",
//                     width: "80%",
//                     lineHeight: 1.3,
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "clamp(22px, 3.5vw, 36px)", // reduced name size
//                       fontWeight: "bold",
//                       marginBottom: "8px",
//                       wordBreak: "break-word",
//                     }}
//                   >
//                     {studentName || "Student Name"}
//                   </div>
//                   <div
//                      style={{
//     position: "relative",
//     top: "20px", // moves course name lower
//     fontSize: "clamp(12px, 1.8vw, 18px)",
//     fontWeight: 500,
//     wordBreak: "break-word",
//     opacity: 0.9,
//   }}
//                   >
//                     {selectedCourse.title}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Divider dashed style={{ margin: "24px 0" }} />

//             <Paragraph
//               type="secondary"
//               style={{ textAlign: "center", fontSize: "14px" }}
//             >
//               Enter a student name and select a course to preview the certificate.
//             </Paragraph>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }
// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Card,
//   Button,
//   Typography,
//   Row,
//   Col,
//   List,
//   Divider,
//   message,
//   Input,
// } from "antd";
// import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/certificate-template.png";

// const { Title, Text, Paragraph } = Typography;

// const coursesData = [
//   { id: 1, title: "Software Development in Java", duration: "4 weeks" },
//   { id: 2, title: "Software Development in Python", duration: "6 weeks" },
//   { id: 3, title: "Manual Testing", duration: "3 weeks" },
//   { id: 4, title: "Automation Testing (Java)", duration: "5 weeks" },
// ];

// export default function CertificatePage() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [studentName, setStudentName] = useState("John Doe");
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef(null);

//   const handleDownload = async () => {
//     if (!certificateRef.current) {
//       message.error("Certificate not ready.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certificateRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: null,
//       });

//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-${selectedCourse?.title?.replace(/\s+/g, "-")}.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Responsive Styles for Certificate Text */}
//       <style jsx>{`
//         .student-name {
//           font-size: clamp(22px, 3.5vw, 36px);
//           font-weight: bold;
//           margin-bottom: 8px;
//           word-break: break-word;
//         }

//         .course-name {
//           position: relative;
//           font-size: clamp(12px, 1.8vw, 18px);
//           font-weight: 500;
//           word-break: break-word;
//           opacity: 0.9;
//           top: 15px;
//         }

//         /* Mobile: <321px */
//           @media (min-width: 320px) and (max-width: 321px) {
//           .student-name {
//             font-size: clamp(6px, 4vw, 10px) !important;
//             position: relative;
//             top: 1px; /* move slightly down via parent transform adjustment */
//           }
//           .course-name {
//             font-size: clamp(4px, 1.5vw, 6px) !important;
//             position: relative;
//             top: 1px !important; /* move up compared to default 20px */
//           }
//         }

//         /* Mobile: <768px */
//           @media (min-width: 321px) and (max-width: 767px) {
//           .student-name {
//             font-size: clamp(6px, 4vw, 10px) !important;
//             position: relative;
//             top: 1px; /* move slightly down via parent transform adjustment */
//           }
//           .course-name {
//             font-size: clamp(4px, 1.5vw, 6px) !important;
//             position: relative;
//             top: 5px !important; /* move up compared to default 20px */
//           }
//         }

//         /* Tablet: 768px – 1023px */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           .student-name {
//             font-size: clamp(14px, 3vw, 16px) !important;
//           }
//           .course-name {
//           font-size: clamp(8px, 1.5vw, 12px) !important;
//             position: relative;
//             top: 12px !important; /* move up */
//           }
//         }

//         /* Desktop: 1024px – 1439px */
//         @media (min-width: 1024px) and (max-width: 1439px) {
//           .student-name {
//             font-size: clamp(20px, 2vw, 22px) !important;
//             position: relative;
//             top: -4px; /* slightly up */
//           }
//           .course-name {
//             font-size: clamp(12px, 3.2vw, 12px) !important;
//             position: relative;
//             top: 9px !important; /* slightly up */
//           }
//         }
//         /* Desktop: 1440px – 1919px */
//         @media (min-width: 1440px) and (max-width: 1919px) {
//           .student-name {
//             font-size: clamp(26px, 2vw, 26px) !important;
//             position: relative;
//             top: -5px; /* slightly up */
//           }
//           .course-name {
//             font-size: clamp(18px, 3.2vw, 18px) !important;
//             position: relative;
//             top: 16px !important; /* slightly up */
//           }
//         }

        

//         /* Large Desktop: ≥1920px */
//         @media (min-width: 1920px) {
//           .student-name {
//             font-size: clamp(30px, 2vw, 30px) !important;
//             position: relative;
//             top: -6px; /* move slightly up */
//           }
//           .course-name {
//             font-size: clamp(20px, 3.2vw, 20px) !important;
//             position: relative;
//             top: 24px !important; /* move slightly down */
//           }
//         }
//       `}</style>

//       <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "32px" }}>
//           <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
//             Prefcol Edutech Solutions
//           </Title>
//           <Paragraph type="secondary" style={{ fontSize: "18px" }}>
//             Certificate Preview
//           </Paragraph>
//         </div>

//         <Row gutter={[32, 32]}>
//           <Col xs={24} md={8}>
//             <Card
//               title={<strong>Enter Details</strong>}
//               bordered={false}
//               style={{
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//               }}
//             >
//               <div style={{ marginBottom: 16 }}>
//                 <Text strong>Student Name:</Text>
//                 <Input
//                   value={studentName}
//                   onChange={(e) => setStudentName(e.target.value)}
//                   placeholder="Enter student name"
//                   style={{ marginTop: 8 }}
//                 />
//               </div>

//               <Divider />

//               <Text strong>Select a Course:</Text>
//               <List
//                 dataSource={coursesData}
//                 renderItem={(course) => (
//                   <List.Item
//                     key={course.id}
//                     onClick={() => setSelectedCourse(course)}
//                     style={{
//                       cursor: "pointer",
//                       border:
//                         selectedCourse?.id === course.id
//                           ? "2px solid #1890ff"
//                           : "1px solid #e8e8e8",
//                       borderRadius: "8px",
//                       padding: "12px",
//                       marginBottom: "8px",
//                       transition: "0.2s",
//                     }}
//                   >
//                     <List.Item.Meta
//                       title={<Text strong>{course.title}</Text>}
//                       description={
//                         <span
//                           style={{
//                             color: "#1890ff",
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 4,
//                           }}
//                         >
//                           <ClockCircleOutlined /> {course.duration}
//                         </span>
//                       }
//                     />
//                   </List.Item>
//                 )}
//               />
//             </Card>
//           </Col>

//           <Col xs={24} md={16}>
//             <Card
//               bordered={false}
//               style={{
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//               }}
//               title={
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
//                   <Button
//                     type="primary"
//                     icon={<DownloadOutlined />}
//                     onClick={handleDownload}
//                     loading={loading}
//                     size="small"
//                     style={{
//                       backgroundColor: "#004d40",
//                       borderColor: "#004d40",
//                     }}
//                     disabled={!selectedCourse}
//                   >
//                     Download
//                   </Button>
//                 </div>
//               }
//             >
//               <div
//                 ref={certificateRef}
//                 style={{
//                   position: "relative",
//                   width: "100%",
//                   aspectRatio: "16 / 9",
//                   backgroundImage: `url(${certificate})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px",
//                   border: "2px solid #d9d9d9",
//                   overflow: "hidden",
//                 }}
//               >
//                 {selectedCourse && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "56%",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                       textAlign: "center",
//                       color: "#004d40",
//                       fontFamily: "Georgia, serif",
//                       width: "80%",
//                       lineHeight: 1.3,
//                     }}
//                   >
//                     <div className="student-name">
//                       {studentName || "Student Name"}
//                     </div>
//                     <div className="course-name">
//                       {selectedCourse.title}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Divider dashed style={{ margin: "24px 0" }} />

//               <Paragraph
//                 type="secondary"
//                 style={{ textAlign: "center", fontSize: "14px" }}
//               >
//                 Enter a student name and select a course to preview the certificate.
//               </Paragraph>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }
// src/Student_Panel/pages/CertificatePage.jsx
// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Card,
//   Button,
//   Typography,
//   Row,
//   Col,
//   List,
//   Divider,
//   message,
//   Input,
// } from "antd";
// import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/certificate-template.png";
// import { useGlobalStore } from "../contexts/GlobalStore";

// const { Title, Text, Paragraph } = Typography;

// export default function CertificatePage() {
//   const { courses, enrolledCourses, progress } = useGlobalStore();

//   const completedCourses = enrolledCourses
//     .map(id => courses.find(c => c.id === id))
//     .filter(course => {
//       if (!course) return false;
//       const prog = progress[course.id];
//       return prog && prog.completedVideos.size === course.videos.length;
//     })
//     .map(c => ({ id: c.id, title: c.title, duration: `${Math.round(c.totalDuration / 60)} weeks` }));

//   const [selectedCourse, setSelectedCourse] = useState(completedCourses[0] || null);
//   const [studentName, setStudentName] = useState("Student Name");
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef(null);

//   const handleDownload = async () => {
//     if (!certificateRef.current) {
//       message.error("Certificate not ready.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certificateRef.current, { scale: 2, useCORS: true, backgroundColor: null });
//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-${selectedCourse?.title?.replace(/\s+/g, "-")}.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         .student-name { font-size: clamp(22px, 3.5vw, 36px); font-weight: bold; margin-bottom: 8px; }
//         .course-name { font-size: clamp(12px, 1.8vw, 18px); font-weight: 500; opacity: 0.9; }
//       `}</style>

//       <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "32px" }}>
//           <Title level={2} style={{ color: "#004d40" }}>Prefcol Edutech Solutions</Title>
//           <Paragraph type="secondary" style={{ fontSize: "18px" }}>Certificate Preview</Paragraph>
//         </div>

//         <Row gutter={[32, 32]}>
//           <Col xs={24} md={8}>
//             <Card title={<strong>Enter Details</strong>} bordered={false}>
//               <div style={{ marginBottom: 16 }}>
//                 <Text strong>Student Name:</Text>
//                 <Input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Enter student name" style={{ marginTop: 8 }} />
//               </div>
//               <Divider />
//               <Text strong>Select a Course:</Text>
//               <List
//                 dataSource={completedCourses}
//                 renderItem={(course) => (
//                   <List.Item
//                     key={course.id}
//                     onClick={() => setSelectedCourse(course)}
//                     style={{
//                       cursor: "pointer",
//                       border: selectedCourse?.id === course.id ? "2px solid #1890ff" : "1px solid #e8e8e8",
//                       borderRadius: "8px",
//                       padding: "12px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <List.Item.Meta
//                       title={<Text strong>{course.title}</Text>}
//                       description={
//                         <span style={{ color: "#1890ff", display: "flex", alignItems: "center", gap: 4 }}>
//                           <ClockCircleOutlined /> {course.duration}
//                         </span>
//                       }
//                     />
//                   </List.Item>
//                 )}
//               />
//             </Card>
//           </Col>

//           <Col xs={24} md={16}>
//             <Card
//               bordered={false}
//               title={
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                   <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
//                   <Button
//                     type="primary"
//                     icon={<DownloadOutlined />}
//                     onClick={handleDownload}
//                     loading={loading}
//                     size="small"
//                     style={{ backgroundColor: "#004d40", borderColor: "#004d40" }}
//                     disabled={!selectedCourse}
//                   >
//                     Download
//                   </Button>
//                 </div>
//               }
//             >
//               <div
//                 ref={certificateRef}
//                 style={{
//                   position: "relative",
//                   width: "100%",
//                   aspectRatio: "16 / 9",
//                   backgroundImage: `url(${certificate})`,
//                   backgroundSize: "cover",
//                   borderRadius: "8px",
//                   border: "2px solid #d9d9d9",
//                   overflow: "hidden",
//                 }}
//               >
//                 {selectedCourse && (
//                   <div style={{
//                     position: "absolute",
//                     top: "56%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     textAlign: "center",
//                     color: "#004d40",
//                     fontFamily: "Georgia, serif",
//                     width: "80%",
//                     lineHeight: 1.3,
//                   }}>
//                     <div className="student-name">{studentName || "Student Name"}</div>
//                     <div className="course-name">{selectedCourse.title}</div>
//                   </div>
//                 )}
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }

// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Card,
//   Button,
//   Typography,
//   Row,
//   Col,
//   List,
//   Divider,
//   message,
//   Input,
// } from "antd";
// import { DownloadOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/Empty_certificate.png"; // Use your uploaded Canva certificate without text
// import { useGlobalStore } from "../contexts/GlobalStore";

// const { Title, Text, Paragraph } = Typography;

// export default function CertificatePage() {
//   const { courses, enrolledCourses, progress } = useGlobalStore();

//   const completedCourses = enrolledCourses
//     .map(id => courses.find(c => c.id === id))
//     .filter(course => {
//       if (!course) return false;
//       const prog = progress[course.id];
//       return prog && prog.completedVideos.size === course.videos.length;
//     })
//     .map(c => ({ id: c.id, title: c.title, duration: `${Math.round(c.totalDuration / 60)} weeks` }));

//   const [selectedCourse, setSelectedCourse] = useState(completedCourses[0] || null);
//   const [studentName, setStudentName] = useState("Student Name");
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef(null);

//   const handleDownload = async () => {
//     if (!certificateRef.current) {
//       message.error("Certificate not ready.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certificateRef.current, { scale: 3, useCORS: true });
//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-${selectedCourse?.title?.replace(/\s+/g, "-")}.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         .student-name {
//           font-size: clamp(24px, 3.2vw, 40px);
//           font-weight: bold;
//           color: #0d3b34;
//           margin-bottom: 6px;
//         }
//         .course-name {
//           font-size: clamp(14px, 2vw, 22px);
//           font-weight: 500;
//           color: #124c43;
//         }
//       `}</style>

//       <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "32px" }}>
//           <Title level={2} style={{ color: "#004d40" }}>Prefcol Edutech Solutions</Title>
//           <Paragraph type="secondary" style={{ fontSize: "18px" }}>Certificate Preview</Paragraph>
//         </div>

//         <Row gutter={[32, 32]}>
//           <Col xs={24} md={8}>
//             <Card title={<strong>Enter Details</strong>} bordered={false}>
//               <div style={{ marginBottom: 16 }}>
//                 <Text strong>Student Name:</Text>
//                 <Input
//                   value={studentName}
//                   onChange={(e) => setStudentName(e.target.value)}
//                   placeholder="Enter student name"
//                   style={{ marginTop: 8 }}
//                 />
//               </div>
//               <Divider />
//               <Text strong>Select a Course:</Text>
//               <List
//                 dataSource={completedCourses}
//                 renderItem={(course) => (
//                   <List.Item
//                     key={course.id}
//                     onClick={() => setSelectedCourse(course)}
//                     style={{
//                       cursor: "pointer",
//                       border: selectedCourse?.id === course.id ? "2px solid #1890ff" : "1px solid #e8e8e8",
//                       borderRadius: "8px",
//                       padding: "12px",
//                       marginBottom: "8px",
//                       backgroundColor: selectedCourse?.id === course.id ? "#f0f8ff" : "#fff",
//                     }}
//                   >
//                     <List.Item.Meta
//                       title={<Text strong>{course.title}</Text>}
//                       description={
//                         <span style={{ color: "#1890ff", display: "flex", alignItems: "center", gap: 4 }}>
//                           <ClockCircleOutlined /> {course.duration}
//                         </span>
//                       }
//                     />
//                   </List.Item>
//                 )}
//               />
//             </Card>
//           </Col>

//           <Col xs={24} md={16}>
//             <Card
//               bordered={false}
//               title={
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                   <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
//                   <Button
//                     type="primary"
//                     icon={<DownloadOutlined />}
//                     onClick={handleDownload}
//                     loading={loading}
//                     size="small"
//                     style={{ backgroundColor: "#004d40", borderColor: "#004d40" }}
//                     disabled={!selectedCourse}
//                   >
//                     Download
//                   </Button>
//                 </div>
//               }
//             >
//               <div
//                 ref={certificateRef}
//                 style={{
//                   position: "relative",
//                   width: "100%",
//                   aspectRatio: "1.414 / 1", // A4 ratio (landscape)
//                   backgroundImage: `url(${certificate})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px",
//                   border: "2px solid #d9d9d9",
//                   overflow: "hidden",
//                 }}
//               >
//                 {selectedCourse && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "52%",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                       textAlign: "center",
//                       fontFamily: "'Georgia', serif",
//                       lineHeight: 1.3,
//                       width: "80%",
//                     }}
//                   >
//                     <div className="student-name">{studentName || "Student Name"}</div>
//                     <div className="course-name">
//                       has successfully completed the course<br />
//                       <strong>{selectedCourse.title}</strong>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }
// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { Card, Button, Typography, message, Row, Col } from "antd";
// import { DownloadOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/Empty_certificate.png";
// import { useGlobalStore } from "../contexts/GlobalStore";

// const { Title, Text, Paragraph } = Typography;

// export default function CertificatePage() {
//   const { user, courses, enrolledCourses, progress } = useGlobalStore();
//   const [digitalMarketingCourse, setDigitalMarketingCourse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const certRef = useRef(null);

//   // Automatically find Digital Marketing course if completed
//   useEffect(() => {
//     const completedCourses = enrolledCourses
//       .map((id) => courses.find((c) => c.id === id))
//       .filter((course) => {
//         if (!course) return false;
//         const prog = progress[course.id];
//         return prog && prog.completedVideos.size === course.videos.length;
//       });

//     const dmCourse = completedCourses.find(
//       (course) =>
//         course.title?.toLowerCase().includes("digital marketing")
//     );

//     if (dmCourse) setDigitalMarketingCourse(dmCourse);
//   }, [courses, enrolledCourses, progress]);

//   const handleDownload = async () => {
//     if (!certRef.current) {
//       message.error("Certificate not found.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certRef.current, { scale: 3, useCORS: true });
//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-Digital-Marketing.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!digitalMarketingCourse) {
//     return (
//       <div style={{ padding: "24px", textAlign: "center" }}>
//         <Title level={3} style={{ color: "#004d40" }}>
//           Prefcol Edutech Solutions
//         </Title>
//         <Paragraph>No completed certificate available yet.</Paragraph>
//       </div>
//     );
//   }

//   const studentName = user?.name || "Student Name";
//   const courseTitle = digitalMarketingCourse.title;
//   const certId = `CERT-${digitalMarketingCourse.id}-${Date.now()}`;
//   const date = new Date().toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <>
//       <style jsx>{`
//         .student-name {
//           font-size: clamp(28px, 3.2vw, 42px);
//           font-weight: bold;
//           color: #0d3b34;
//           margin-bottom: 8px;
//         }
//         .certificate-text {
//           font-size: clamp(14px, 2vw, 20px);
//           font-family: "Georgia", serif;
//           color: #124c43;
//           line-height: 1.6;
//         }
//         .signature {
//           display: flex;
//           justify-content: space-between;
//           width: 80%;
//           margin: 40px auto 0;
//           font-family: "Georgia", serif;
//           font-weight: 500;
//           color: #0d3b34;
//         }
//       `}</style>

//       <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "32px" }}>
//           <Title level={2} style={{ color: "#004d40" }}>
//             Prefcol Edutech Solutions
//           </Title>
//           <Paragraph type="secondary" style={{ fontSize: "18px" }}>
//             Digital Marketing Course Certificate
//           </Paragraph>
//         </div>

//         <Row justify="center">
//           <Col xs={24} md={20}>
//             <Card
//               bordered={false}
//               title={
//                 <div style={{ textAlign: "center" }}>
//                   <Button
//                     type="primary"
//                     icon={<DownloadOutlined />}
//                     onClick={handleDownload}
//                     loading={loading}
//                     style={{
//                       backgroundColor: "#004d40",
//                       borderColor: "#004d40",
//                     }}
//                   >
//                     Download Certificate
//                   </Button>
//                 </div>
//               }
//             >
//               <div
//                 ref={certRef}
//                 style={{
//                   position: "relative",
//                   width: "100%",
//                   aspectRatio: "1.414 / 1",
//                   backgroundImage: `url(${certificate})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px",
//                   border: "2px solid #d9d9d9",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "52%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     textAlign: "center",
//                     fontFamily: "'Georgia', serif",
//                     width: "80%",
//                   }}
//                 >
//                   <div className="certificate-text">This is to certify that</div>
//                   <div className="student-name">{studentName}</div>
//                   <div className="certificate-text">
//                     has successfully completed the course<br />
//                     <strong>{courseTitle}</strong><br />
//                     and has demonstrated the required proficiency in the subject matter.
//                   </div>

//                   <div
//                     className="certificate-text"
//                     style={{ marginTop: "24px", fontSize: "16px" }}
//                   >
//                     Awarded on: {date}
//                     <br />
//                     Certificate ID: {certId}
//                   </div>

//                   <div className="signature">
//                     <div>
//                       <Text strong>Manikandan Balamurugan</Text>
//                       <br />
//                       Director
//                     </div>
//                     <div>
//                       <Text strong>Vimal Kanna M</Text>
//                       <br />
//                       Manager
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }
// src/Student_Panel/pages/CertificatePage.jsx
// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Card,
//   Button,
//   Typography,
//   Row,
//   Col,
//   List,
//   Divider,
//   message,
//   Input,
//   Empty,
// } from "antd";
// import { DownloadOutlined } from "@ant-design/icons";
// import html2canvas from "html2canvas";
// import certificate from "../../assets/Empty_certificate.png"; // Use your uploaded Canva certificate without text
// import { useGlobalStore } from "../contexts/GlobalStore";

// const { Title, Text } = Typography;

// // Replace with your actual logo path
// const LOGO_URL = "/images/prefcol-logo.png"; // e.g., public/images/prefcol-logo.png

// export default function CertificatePage() {
//   const { courses, enrolledCourses, progress } = useGlobalStore();

//   // Compute completed courses
//   const completedCourses = enrolledCourses
//     .map(id => {
//       const course = courses.find(c => c.id === id);
//       if (!course) return null;
//       const prog = progress[id] || { completedVideos: [] };
//       const isCompleted = prog.completedVideos.length === course.videos.length;
//       return isCompleted ? course : null;
//     })
//     .filter(Boolean);

//   const [selectedCourse, setSelectedCourse] = useState(completedCourses[0] || null);
//   const [studentName, setStudentName] = useState("Student Name");
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef(null);

//   const handleDownload = async () => {
//     if (!certificateRef.current || !selectedCourse) {
//       message.error("No certificate to download.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const canvas = await html2canvas(certificateRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: null,
//       });

//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `Certificate-${selectedCourse.title.replace(/\s+/g, "-")}.png`;
//       link.click();
//       message.success("Certificate downloaded!");
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Failed to generate certificate.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//   <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
//     <div style={{ textAlign: "center", marginBottom: "32px" }}>
//       <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
//         Prefcol Edutech Solutions
//       </Title>
//       <Text type="secondary" style={{ fontSize: "18px" }}>
//         Certificate of Completion
//       </Text>
//     </div>

//     <Row gutter={[32, 32]}>
//       {/* Left Panel: Controls */}
//       <Col xs={24} md={8}>
//         <Card
//           title={<strong>Certificate Details</strong>}
//           bordered={false}
//           style={{
//             borderRadius: "12px",
//             boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//           }}
//         >
//           <div style={{ marginBottom: 16 }}>
//             <Text strong>Student Name:</Text>
//             <Input
//               value={studentName}
//               onChange={(e) => setStudentName(e.target.value)}
//               placeholder="Enter your name"
//               style={{ marginTop: 8 }}
//             />
//           </div>

//           <Divider />

//           <Text strong>Select a Completed Course:</Text>
//           {completedCourses.length > 0 ? (
//             <List
//               dataSource={completedCourses}
//               renderItem={(course) => (
//                 <List.Item
//                   key={course.id}
//                   onClick={() => setSelectedCourse(course)}
//                   style={{
//                     cursor: "pointer",
//                     border:
//                       selectedCourse?.id === course.id
//                         ? "2px solid #1890ff"
//                         : "1px solid #e8e8e8",
//                     borderRadius: "8px",
//                     padding: "12px",
//                     marginBottom: "8px",
//                     transition: "0.2s",
//                   }}
//                 >
//                   <List.Item.Meta
//                     title={<Text strong>{course.title}</Text>}
//                     description={
//                       <Text type="secondary">
//                         {new Date().toLocaleDateString("en-IN", {
//                           day: "numeric",
//                           month: "long",
//                           year: "numeric",
//                         })}
//                       </Text>
//                     }
//                   />
//                 </List.Item>
//               )}
//             />
//           ) : (
//             <Empty description="No completed courses" />
//           )}
//         </Card>
//       </Col>

//       {/* Right Panel: Certificate Preview */}
//       <Col xs={24} md={16}>
//         <Card
//           bordered={false}
//           style={{
//             borderRadius: "12px",
//             boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
//           }}
//           title={
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <strong style={{ marginBottom: 8 }}>Preview Certificate</strong>
//               <Button
//                 type="primary"
//                 icon={<DownloadOutlined />}
//                 onClick={handleDownload}
//                 loading={loading}
//                 size="small"
//                 disabled={!selectedCourse}
//                 style={{
//                   backgroundColor: "#004d40",
//                   borderColor: "#004d40",
//                 }}
//               >
//                 Download
//               </Button>
//             </div>
//           }
//         >
//           <div
//             ref={certificateRef}
//             style={{
//               position: "relative",
//               width: "100%",
//               aspectRatio: "16 / 9",
//               backgroundColor: "#fff",
//               borderRadius: "8px",
//               border: "2px solid #d9d9d9",
//               overflow: "hidden",
//               padding: "40px",
//               textAlign: "center",
//               fontFamily: "'Georgia', serif",
//               backgroundImage: `url(${certificate})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             {/* Header */}
//             <div style={{ marginBottom: "10px" }}>
//               <Text
//                 style={{
//                   fontSize: "clamp(0.1rem, 2vw, 1.8rem)",
//                   fontWeight: "bold",
//                   color: "#004d40",
//                 }}
//               >
//                 Certificate of Completion
//               </Text>
//             </div>

//             {/* Body */}
//             <Text style={{ fontSize: "clamp(0.2rem, 1.5vw, 1.2rem)", marginBottom: "8px" }}>
//               This is to certify that
//             </Text>
//             <Text
//               style={{
//                 fontSize: "clamp(0.2rem, 2vw, 1.4rem)",
//                 fontWeight: "bold",
//                 color: "#004d40",
//                 wordBreak: "break-word",
//                 margin: "0 10px",
//               }}
//             >
//               {studentName || "Student Name"}
//             </Text>
//             <Text style={{ fontSize: "clamp(0.2rem, 1.5vw, 1.2rem)", marginBottom: "8px" }}>
//               has successfully completed the course
//             </Text>
//             <Text
//               style={{
//                 fontSize: "clamp(0.2rem, 2vw, 1.4rem)",
//                 fontWeight: "bold",
//                 color: "#004d40",
//                 // marginBottom: "32px",
//                 wordBreak: "break-word",
//                 margin: "0 10px",
//               }}
//             >
//               {selectedCourse?.title || "Course Title"}
//             </Text>

//             {/* Date */}
//             <Text style={{ fontSize: "clamp(0.2rem, 1.5vw, 1.2rem)", color: "#555" }}>
//               Awarded on:{" "}
//               {new Date().toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//               })}
//             </Text>

//             {/* Signatures */}
//             <Row justify="space-around" style={{ marginTop: "clamp(5px, 4vw, 64px)" }}>
//               <Col>
              
//                 <Text style={{ fontSize: "clamp(0.2rem, 1.5vw, 1.2rem)", marginLeft: "clamp(10px, 4vw, 180px)" }}>Manager</Text>
//               </Col>
//               <Col>
                
            
//                 <Text style={{ fontSize: "clamp(0.2rem, 1.5vw, 1.2rem)", marginLeft: "clamp(100px, 4vw, 180px)" }}>
//                   Director, Prefcol Edutech
//                 </Text>
//               </Col>
//             </Row>
//           </div>

//           <Divider dashed style={{ margin: "24px 0" }} />
//           <Text type="secondary" style={{ textAlign: "center", fontSize: "14px" }}>
//             {selectedCourse
//               ? `Certificate for "${selectedCourse.title}"`
//               : "Select a completed course to preview certificate."}
//           </Text>
//         </Card>
//       </Col>
//     </Row>
//   </div>
// );
// }
// src/Student_Panel/pages/CertificatePage.jsx
"use client";

import React, { useRef, useState } from "react";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  List,
  Divider,
  message,
  Empty,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import certificate from "../../assets/certificate-template.png";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store
import { useAuth } from "../../Contexts/AuthContext"; // Adjust path as needed

const { Title, Text, Paragraph } = Typography;

export default function CertificatePage() {
  const { courses, enrolledCourses, progress } = useGlobalStore();
  const { user } = useAuth(); // Get student name from auth context

  const studentName = user?.userName || "Student Name";

  // Compute completed courses with completion date
  const completedCourses = enrolledCourses
    .map(id => {
      const course = courses.find(c => c.id === id);
      if (!course) return null;
      const prog = progress[id] || { completedVideos: [], lastAccessed: new Date().toISOString() };
      const isCompleted = prog.completedVideos.length === course.videos?.length;
      return isCompleted
        ? {
            id,
            title: course.title,
            completedAt: new Date(prog.lastAccessed).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          }
        : null;
    })
    .filter(Boolean);

  const [loading, setLoading] = useState(false);

  const handleDownload = async (courseTitle, ref) => {
    if (!ref.current) {
      message.error("Certificate not ready.");
      return;
    }

    setLoading(true);
    try {
      const canvas = await html2canvas(ref.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `Certificate-${courseTitle.replace(/\s+/g, "-")}.png`;
      link.click();
      message.success("Certificate downloaded!");
    } catch (err) {
      console.error("Download failed", err);
      message.error("Failed to generate certificate.");
    } finally {
      setLoading(false);
    }
  };

  if (completedCourses.length === 0) {
    return (
      <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
        <Empty
          description={
            <div>
              <Title level={4}>No Completed Courses</Title>
              <Paragraph>
                Complete a course to earn your certificate.
              </Paragraph>
            </div>
          }
          style={{ marginTop: "100px" }}
        />
      </div>
    );
  }

  return (
    <>
      {/* Preserve your original responsive styles */}
      <style jsx>{`
        .student-name {
          font-size: clamp(22px, 3.5vw, 36px);
          font-weight: bold;
          margin-bottom: 8px;
          word-break: break-word;
        }
        .course-name {
          position: relative;
          font-size: clamp(12px, 1.8vw, 18px);
          font-weight: 500;
          word-break: break-word;
          opacity: 0.9;
          top: 15px;
        }
        /* ... (keep all your existing @media rules exactly as they are) ... */
        @media (min-width: 320px) and (max-width: 321px) {
          .student-name { font-size: clamp(6px, 4vw, 10px) !important; top: 1px !important; }
          .course-name { font-size: clamp(4px, 1.5vw, 6px) !important; top: 1px !important; }
        }
        @media (min-width: 321px) and (max-width: 767px) {
          .student-name { font-size: clamp(6px, 4vw, 10px) !important; top: 1px !important; }
          .course-name { font-size: clamp(4px, 1.5vw, 6px) !important; top: 5px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .student-name { font-size: clamp(14px, 3vw, 16px) !important; position: relative; top: -8px !important; }
          .course-name { font-size: clamp(8px, 1.5vw, 12px) !important; top: 24px !important; }
        }
        @media (min-width: 1024px) and (max-width: 1439px) {
          .student-name { font-size: clamp(25px, 1.5vw, 25px) !important; position: relative; top: -10px !important; }
          .course-name { font-size: clamp(20px, 3.2vw, 20px) !important; top: 28px !important; }
        }
        @media (min-width: 1440px) and (max-width: 1919px) {
          .student-name { font-size: clamp(35px, 2vw, 35px) !important; position: relative; top: -12px !important; }
          .course-name { font-size: clamp(25px, 3.2vw, 25px) !important; position: relative; top: 35px !important; }
        }
        @media (min-width: 1920px) {
         .student-name { font-size: clamp(40px, 2vw, 40px) !important; position: relative; top: -12px !important; }
          .course-name { font-size: clamp(35px, 3.2vw, 35px) !important; position: relative; top: 55px !important; }        }
     /* Reduce font size on mobile for course title and awarded text */
@media (max-width: 767px) {
  .responsive-course-title {
    font-size: 14px !important;
    font-weight: 600;
  }
  .responsive-awarded-text {
    font-size: 12px !important;
  }
}

/* Optional: even smaller on very small screens */
@media (max-width: 480px) {
  .responsive-course-title {
    font-size: 10px !important;
    margin-bottom: 4px !important;
  }
  .responsive-awarded-text {
    font-size: 8px !important;
  }
}
     `}
      
      </style>

      <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Title level={2} style={{ color: "#004d40", marginBottom: 4 }}>
            Prefcol Edutech Solutions
          </Title>
          <Paragraph type="secondary" style={{ fontSize: "18px" }}>
            Your Certificates of Completion
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {completedCourses.map((course) => {
            const certRef = useRef(null);
            return (
              <Col xs={24} key={course.id}>
                <Card
                  bordered={false}
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                  title={
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <strong className="responsive-course-title">{course.title}</strong>
                      <Text type="secondary" className="responsive-awarded-text">Awarded on: {course.completedAt}</Text>
                      <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={() => handleDownload(course.title, certRef)}
                        size="small"
                        style={{ backgroundColor: "#004d40", borderColor: "#004d40", marginTop: 12 }}
                      >
                        Download Certificate
                      </Button>
                    </div>
                  }
                >
                  <div
                    ref={certRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      backgroundImage: `url(${certificate})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                      border: "2px solid #d9d9d9",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "56%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "#004d40",
                        fontFamily: "Georgia, serif",
                        width: "80%",
                        lineHeight: 1.3,
                      }}
                    >
                      <div className="student-name">{studentName}</div>
                      <div className="course-name">{course.title}</div>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}