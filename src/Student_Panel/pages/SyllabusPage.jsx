// // src/pages/SyllabusPage.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useGlobalStore } from "../contexts/GlobalStore";
// import { Card, Typography, List, Divider } from "antd";

// const { Title, Text } = Typography;

// const SyllabusPage = () => {
//   const { courseId } = useParams(); // Get course ID from the URL
//   const { courses } = useGlobalStore();

//   const course = courses.find((c) => c.id === courseId);

//   if (!course) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <Title level={3}>Course not found</Title>
//       </div>
//     );
//   }

//   return (
//     <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
//       <Card bordered={false} style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
//         <Title level={2}>{course.title}</Title>
//         <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
//           Instructor: {course.instructor}
//         </Text>

//         <Divider />
//         <Title level={4}>Course Syllabus</Title>

//         <List
//           itemLayout="vertical"
//           dataSource={course.syllabus}
//           renderItem={(module, index) => (
//             <List.Item key={index}>
//               <Title level={5}>
//                 {index + 1}. {module.module}
//               </Title>
//               <ul style={{ marginLeft: "20px" }}>
//                 {module.topics.map((topic, i) => (
//                   <li key={i} style={{ marginBottom: 6 }}>
//                     <Text>{topic}</Text>
//                   </li>
//                 ))}
//               </ul>
//             </List.Item>
//           )}
//         />
//       </Card>
//     </div>
//   );
// };

// export default SyllabusPage;

import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../contexts/GlobalStore";
import { Card, Typography, Collapse, List, Tag, Divider, Button } from "antd";
import BookAnimation from "./Book";
const { Title, Text } = Typography;
const { Panel } = Collapse;

const SyllabusPage = () => {
  const { courseId } = useParams();
  const { courses } = useGlobalStore();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <Title level={3}>Course not found</Title>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 950,
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <Card
        bordered={false}
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "12px",
        }}
      >
          <Button 
        type="link" 
        onClick={() => navigate(-1)}
        style={{ marginBottom: '16px' }}
      >
        ← Back to Courses
      </Button>
      {/* <BookAnimation /> */}
      <Title level={2} style={{ marginBottom: 4 }}>
          {course.title}
        </Title>
        {/* <Text type="secondary" style={{ fontSize: 15 }}>
          Instructor: {course.instructor}
        </Text> */}

        <Divider />

        <Title level={4} style={{ marginBottom: 16 }}>
          📘 Course Syllabus
        </Title>

        <Collapse
          accordion
          bordered={false}
          style={{
            background: "transparent",
          }}
        >
          {course.syllabus?.map((module, index) => (
            <Panel
              key={index}
              header={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Tag style={{backgroundColor:"#014D4E",color: "white", }}>{index + 1}</Tag>
                  <Text strong style={{ fontSize: 16 }}>
                    {module.module}
                  </Text>
                </div>
              }
            >
              <List
                dataSource={module.topics}
                renderItem={(topic, i) => (
                  <List.Item
                    style={{
                      border: "none",
                      padding: "6px 0",
                    }}
                  >
                    <Text>
                      ✅ {topic}
                    </Text>
                  </List.Item>
                )}
              />
            </Panel>
          ))}
        </Collapse>
      </Card>
    </div>
  );
};

export default SyllabusPage;
