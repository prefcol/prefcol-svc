import { useState } from "react";
import { Card, List, Avatar, Button, Space, Tag, Rate, Empty, Modal } from "antd";
import { VideoCameraOutlined, MessageOutlined, CalendarOutlined } from "@ant-design/icons";

const ConnectWithMentor = () => {
  const [mentors] = useState([
    {
      id: "1",
      name: "Dr. Sarah Wilson",
      title: "Web Development Expert",
      avatar: "https://via.placeholder.com/64",
      rating: 4.9,
      reviews: 156,
      availability: "Available Today",
      hourlyRate: "$50",
      expertise: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "2",
      name: "Prof. James Brown",
      title: "JavaScript Specialist",
      avatar: "https://via.placeholder.com/64",
      rating: 4.7,
      reviews: 98,
      availability: "Available Tomorrow",
      hourlyRate: "$45",
      expertise: ["JavaScript", "TypeScript", "Angular"],
    },
  ]);

  const handleConnect = (mentor) => {
    Modal.info({
      title: `Connect with ${mentor.name}`,
      content: `You can schedule a session with ${mentor.name}. Choose your preferred time slot.`,
    });
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Connect With Mentor</h2>
        <p>Get guidance from experienced mentors</p>
      </div>

      {mentors.length > 0 ? (
        <List
          dataSource={mentors}
          renderItem={(mentor) => (
            <Card key={mentor.id} style={{ marginBottom: 16 }}>
              <List.Item.Meta
                avatar={<Avatar src={mentor.avatar} size={64} />}
                title={<h3>{mentor.name}</h3>}
                description={<p>{mentor.title}</p>}
              />

              <div style={{ marginTop: 16 }}>
                <p>
                  <Rate disabled defaultValue={mentor.rating} /> {mentor.rating} ({mentor.reviews} reviews)
                </p>
                <p><strong>Rate:</strong> {mentor.hourlyRate}/hour</p>
                <p><strong>Availability:</strong> {mentor.availability}</p>
                <p>
                  <strong>Expertise:</strong>
                  {mentor.expertise.map((skill) => (
                    <Tag key={skill} color="blue" style={{ marginLeft: 8 }}>
                      {skill}
                    </Tag>
                  ))}
                </p>
              </div>

              <Space style={{ marginTop: 16 }}>
                <Button type="primary" onClick={() => handleConnect(mentor)}>
                  Schedule Session
                </Button>
                <Button icon={<MessageOutlined />}>Message</Button>
              </Space>
            </Card>
          )}
        />
      ) : (
        <Empty description="No mentors available" />
      )}
    </div>
  );
};

export default ConnectWithMentor;
