// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   Typography,
//   List,
//   Badge,
//   Button,
//   Empty,
//   Alert,
//   Tag,
//   Divider,
// } from "antd";
// import { FileDoneOutlined, ClockCircleOutlined, DownloadOutlined, UploadOutlined } from "@ant-design/icons";
// import { useNavigate, useLocation } from "react-router-dom";

// const { Title, Text, Paragraph } = Typography;

// // Mock assignment data (in real app: fetch from API)
// const mockAssignments = [
//   {
//     id: 1,
//     courseId: 1,
//     courseTitle: "Software Development in Java",
//     videoId: 101,
//     videoTitle: "Introduction to OOP",
//     title: "OOP Concepts Assignment",
//     description: "Explain encapsulation, inheritance, and polymorphism with code examples.",
//     dueDate: "2025-06-10",
//     status: "pending", // pending, submitted, graded
//     submittedAt: null,
//     feedback: "",
//     grade: null,
//     fileRequired: true,
//   },
//   {
//     id: 2,
//     courseId: 2,
//     courseTitle: "Software Development in Python",
//     videoId: 205,
//     videoTitle: "Functions and Modules",
//     title: "Build a Python Module",
//     description: "Create a reusable module with at least 3 functions.",
//     dueDate: "2025-06-15",
//     status: "submitted",
//     submittedAt: "2025-06-12T10:30:00Z",
//     feedback: "Good work! Consider adding docstrings.",
//     grade: "A",
//     fileRequired: true,
//   },
//   {
//     id: 3,
//     courseId: 3,
//     courseTitle: "Manual Testing",
//     videoId: 302,
//     videoTitle: "Test Case Design",
//     title: "Write Test Cases for Login Page",
//     description: "Create 10 test cases covering valid/invalid scenarios.",
//     dueDate: "2025-06-20",
//     status: "pending",
//     submittedAt: null,
//     feedback: null,
//     grade: null,
//     fileRequired: false,
//   },
// ];

// export default function AssignmentsTab() {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Simulate API fetch
//     setTimeout(() => {
//       setAssignments(mockAssignments);
//       setLoading(false);
//     }, 800);
//   }, []);

//   const handleFileChange = (e, assignmentId) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(prev => ({ ...prev, [assignmentId]: file.name }));
//       message.success(`${file.name} selected`);
//     }
//   };

//   const handleSubmit = (assignmentId) => {
//     message.success("Assignment submitted successfully!");
//     setAssignments(prev =>
//       prev.map(a =>
//         a.id === assignmentId
//           ? {
//               ...a,
//               status: "submitted",
//               submittedAt: new Date().toISOString(),
//             }
//           : a
//       )
//     );
//   };

//   const getStatusConfig = (status) => {
//     switch (status) {
//       case "submitted":
//         return { text: "Submitted", color: "blue" };
//       case "graded":
//         return { text: "Graded", color: "green" };
//       default:
//         return { text: "Pending", color: "orange" };
//     }
//   };

//   return (
//     <div style={{ padding: "24px" }}>
//       <Title level={3}>
//         <FileDoneOutlined /> Assignments
//       </Title>
//       <Paragraph type="secondary">
//         Complete and submit assignments to reinforce your learning.
//       </Paragraph>

//       <Divider />

//       {loading ? (
//         <Card><div style={{ textAlign: "center" }}><Text>Loading assignments...</Text></div></Card>
//       ) : assignments.length === 0 ? (
//         <Empty description="No assignments available" />
//       ) : (
//         <List
//           dataSource={assignments}
//           renderItem={(assignment) => {
//             const status = getStatusConfig(assignment.status);

//             return (
//               <List.Item key={assignment.id}>
//                 <List.Item.Meta
//                   title={
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//                       <Text strong>{assignment.title}</Text>
//                       <Tag color={status.color}>{status.text}</Tag>
//                     </div>
//                   }
//                   description={
//                     <div style={{ marginTop: "8px" }}>
//                       <Text>
//                         <strong>Course:</strong> {assignment.courseTitle} |{" "}
//                         <strong>Video:</strong> {assignment.videoTitle}
//                       </Text>
//                       <Paragraph style={{ margin: "8px 0" }}>{assignment.description}</Paragraph>
//                       <Text type="secondary">
//                         <ClockCircleOutlined /> Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                       </Text>

//                       {/* Feedback if graded */}
//                       {assignment.status === "graded" && (
//                         <Alert
//                           message="Feedback"
//                           description={assignment.feedback}
//                           type="success"
//                           showIcon
//                           style={{ marginTop: 8 }}
//                         />
//                       )}

//                       {assignment.status === "submitted" && (
//                         <Alert
//   message={
//     <span style={{ color: "#ffffff" }}>
//       Submitted
//     </span>
//   }
//   description={
//     <span style={{ color: "#ffffff" }}>
//       On: {new Date(assignment.submittedAt).toLocaleString()}
//     </span>
//   }
//   type="info"
//   showIcon
//   style={{
//     marginTop: 8,
//     backgroundColor: "#004d40", // dark teal
//     borderColor: "#004d40",
//   }}
//                         />
//                       )}

//                       {/* Submit Section */}
//                       {assignment.status === "pending" && (
//                         <div style={{ marginTop: 16 }}>
//                           {assignment.fileRequired && (
//                             <div style={{ marginBottom: 12 }}>
//                               <input
//                                 type="file"
//                                 onChange={(e) => handleFileChange(e, assignment.id)}
//                                 style={{ marginBottom: 8 }}
//                               />
//                               {selectedFile?.[assignment.id] && (
//                                 <Text type="secondary">Selected: {selectedFile[assignment.id]}</Text>
//                               )}
//                             </div>
//                           )}
//                           <Button
//                             type="primary"
//                             icon={<UploadOutlined />}
//                             onClick={() => handleSubmit(assignment.id)}
//                             style={{
//     backgroundColor: "#004d40", // dark teal
//     borderColor: "#004d40",     // matches the button border
//   }}
//                           >
//                             Submit Assignment
//                           </Button>
//                         </div>
//                       )}
//                     </div>
//                   }
//                 />
//               </List.Item>
//             );
//           }}
//         />
//       )}

//       {/* Auto-navigate prompt */}
//       {location.search.includes("videoId") && (
//         <Alert
//           message="New Assignment Available"
//           description="You've completed a video. Don't forget to complete the related assignment!"
//           type="success"
//           showIcon
//           style={{ marginTop: 24 }}
//           action={
//             <Button size="small" type="primary" onClick={() => navigate("/Student-portal/assignments")}>
//               View Assignments
//             </Button>
//           }
//         />
//       )}
//     </div>
//   );
// }

// src/Student_Panel/pages/AssignmentsTab.jsx
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  Typography,
  List,
  Badge,
  Button,
  Empty,
  Alert,
  Tag,
  Divider,
} from "antd";
import { FileDoneOutlined, ClockCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store

const { Title, Text, Paragraph } = Typography;

export default function AssignmentsTab() {
  const { assignments, courses, dispatch } = useGlobalStore();
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const enrichedAssignments = assignments.map(a => ({
    ...a,
    courseTitle: courses.find(c => c.id === a.courseId)?.title || "Unknown Course",
    videoTitle: courses.find(c => c.id === a.courseId)?.videos.find(v => v.id === a.videoId)?.title || "Unknown Video",
    dueDate: a.dueDate || "2025-12-31",
  }));

  const handleFileChange = (e, assignmentId) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(prev => ({ ...prev, [assignmentId]: file.name }));
      message.success(`${file.name} selected`);
    }
  };

  const handleSubmit = (assignmentId) => {
    dispatch({ type: "SUBMIT_ASSIGNMENT", assignmentId });
    message.success("Assignment submitted!");
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "submitted": return { text: "Submitted", color: "blue" };
      case "graded": return { text: "Graded", color: "green" };
      default: return { text: "Pending", color: "orange" };
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <Title level={3}><FileDoneOutlined /> Assignments</Title>
      <Paragraph type="secondary">Complete and submit assignments to reinforce your learning.</Paragraph>
      <Divider />

      {enrichedAssignments.length === 0 ? (
        <Empty description="No assignments available" />
      ) : (
        <List
          dataSource={enrichedAssignments}
          renderItem={(assignment) => {
            const status = getStatusConfig(assignment.status);
            return (
              <List.Item key={assignment.id}>
                <List.Item.Meta
                  title={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Text strong>{assignment.title}</Text>
                      <Tag color={status.color}>{status.text}</Tag>
                    </div>
                  }
                  description={
                    <div style={{ marginTop: "8px" }}>
                      <Text><strong>Course:</strong> {assignment.courseTitle} | <strong>Video:</strong> {assignment.videoTitle}</Text>
                      <Paragraph style={{ margin: "8px 0" }}>{assignment.description}</Paragraph>
                      <Text type="secondary"><ClockCircleOutlined /> Due: {assignment.dueDate}</Text>

                      {assignment.status === "graded" && (
                        <Alert message="Feedback" description={assignment.feedback} type="success" showIcon />
                      )}

                      {assignment.status === "submitted" && (
                        <Alert message="Submitted" description={`On: ${new Date(assignment.submittedAt).toLocaleString()}`} type="info" showIcon />
                      )}

                      {assignment.status === "pending" && (
                        <div style={{ marginTop: 16 }}>
                          {assignment.fileRequired && (
                            <div style={{ marginBottom: 12 }}>
                              <input type="file" onChange={(e) => handleFileChange(e, assignment.id)} />
                              {selectedFile?.[assignment.id] && <Text type="secondary">Selected: {selectedFile[assignment.id]}</Text>}
                            </div>
                          )}
                          <Button type="primary" icon={<UploadOutlined />} onClick={() => handleSubmit(assignment.id)} style={{ backgroundColor: "#004d40", borderColor: "#004d40" }}>
                            Submit Assignment
                          </Button>
                        </div>
                      )}
                    </div>
                  }
                />
              </List.Item>
            );
          }}
        />
      )}

      {location.search.includes("videoId") && (
        <Alert
          message="New Assignment Available"
          description="You've completed a video. Don't forget to complete the related assignment!"
          type="success"
          showIcon
          style={{ marginTop: 24 }}
          action={<Button size="small" type="primary" onClick={() => navigate("/Student-portal/assignments")}>View Assignments</Button>}
        />
      )}
    </div>
  );
}