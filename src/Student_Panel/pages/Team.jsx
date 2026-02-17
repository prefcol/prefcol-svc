import { useState } from "react";
import { Card, Table, Avatar, Tag, Button, Space, Empty } from "antd";
import { UserAddOutlined, MessageOutlined } from "@ant-design/icons";

const Team = () => {
  const [teammates] = useState([
    {
      id: "1",
      name: "Alice Johnson",
      avatar: "https://via.placeholder.com/32",
      role: "Study Partner",
      courses: "Web Development, JavaScript",
      joinDate: "2024-01-10",
      status: "active",
    },
    {
      id: "2",
      name: "Bob Smith",
      avatar: "https://via.placeholder.com/32",
      role: "Group Member",
      courses: "Advanced JavaScript",
      joinDate: "2024-01-15",
      status: "active",
    },
    {
      id: "3",
      name: "Carol Williams",
      avatar: "https://via.placeholder.com/32",
      role: "Peer Reviewer",
      courses: "Web Development, React",
      joinDate: "2024-02-01",
      status: "active",
    },
  ]);

  const columns = [
    {
      title: "Member",
      key: "name",
      render: (_, record) => (
        <Space>
          <Avatar src={record.avatar} />
          <div>
            <p style={{ margin: 0, fontWeight: "bold" }}>{record.name}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#666" }}>{record.role}</p>
          </div>
        </Space>
      ),
    },
    {
      title: "Courses",
      dataIndex: "courses",
      key: "courses",
    },
    {
      title: "Joined",
      dataIndex: "joinDate",
      key: "joinDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color="green">{status.charAt(0).toUpperCase() + status.slice(1)}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button icon={<MessageOutlined />} size="small">
            Message
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Card title="Course Team" bordered={false}>
        {teammates.length > 0 ? (
          <Table dataSource={teammates} columns={columns} rowKey="id" pagination={false} />
        ) : (
          <Empty description="No team members yet" />
        )}
      </Card>
    </div>
  );
};

export default Team;
