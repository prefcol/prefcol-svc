import { useState } from "react";
import { Card, List, Button, Space, Tag, Badge, Empty, Avatar } from "antd";
import { CheckCircleOutlined, FileTextOutlined } from "@ant-design/icons";

const CodingReview = () => {
  const [submissions] = useState([
    {
      id: "1",
      title: "Todo App Project",
      course: "JavaScript Fundamentals",
      submittedDate: "2024-02-03",
      reviewStatus: "reviewed",
      rating: 4.5,
      reviewer: "Prof. John Smith",
      reviews: "Great implementation! Consider optimizing the event listeners.",
    },
    {
      id: "2",
      title: "Weather App API Integration",
      course: "Advanced JavaScript",
      submittedDate: "2024-02-05",
      reviewStatus: "reviewed",
      rating: 4.2,
      reviewer: "Dr. Sarah Wilson",
      reviews: "Good error handling. Need to improve loading states.",
    },
    {
      id: "3",
      title: "E-commerce Cart Component",
      course: "React Fundamentals",
      submittedDate: "2024-02-07",
      reviewStatus: "pending",
      rating: null,
      reviewer: null,
      reviews: null,
    },
  ]);

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Coding Review</h2>
        <p>Get feedback on your code submissions</p>
      </div>

      {submissions.length > 0 ? (
        <List
          dataSource={submissions}
          renderItem={(submission) => (
            <Card key={submission.id} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, marginBottom: 8 }}>{submission.title}</h4>
                  <p style={{ color: "#666", margin: 0, marginBottom: 12 }}>{submission.course}</p>

                  <Space style={{ marginBottom: 12 }}>
                    <Tag>Submitted: {submission.submittedDate}</Tag>
                    <Badge status={submission.reviewStatus === "reviewed" ? "success" : "processing"}
                      text={submission.reviewStatus === "reviewed" ? "Reviewed" : "Pending Review"} />
                  </Space>

                  {submission.reviewStatus === "reviewed" && (
                    <div style={{ marginTop: 12 }}>
                      <p style={{ margin: 0, marginBottom: 8 }}>
                        <strong>Reviewed by:</strong> {submission.reviewer}
                      </p>
                      <p style={{ margin: 0, marginBottom: 8 }}>
                        <strong>Rating:</strong> {submission.rating} ⭐
                      </p>
                      <p style={{ margin: 0, color: "#666", backgroundColor: "#f5f5f5", padding: 8, borderRadius: 4 }}>
                        {submission.reviews}
                      </p>
                    </div>
                  )}
                </div>

                <Space direction="vertical">
                  <Button type="primary" icon={<FileTextOutlined />}>
                    View Code
                  </Button>
                  {submission.reviewStatus === "pending" && (
                    <Button>View Review</Button>
                  )}
                </Space>
              </div>
            </Card>
          )}
        />
      ) : (
        <Empty description="No code submissions yet" />
      )}
    </div>
  );
};

export default CodingReview;
