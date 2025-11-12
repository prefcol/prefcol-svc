// src/pages/TeacherManagement.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  Button,
  Table,
  Modal,
  Tabs,
  Card,
  Avatar,
  Badge,
  Space,
  InputNumber,
  ConfigProvider,
  message
} from "antd";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

// Custom theme
const customTheme = {
  token: {
    colorPrimary: "#FF7A00",
    colorBgContainer: "#ffffff",
    colorText: "#333333",
    colorTextSecondary: "#666666",
    colorBorder: "#e0e0e0",
    borderRadius: 8,
  },
  components: {
    Button: {
      colorPrimary: "#FF7A00",
      colorPrimaryHover: "#e06700",
      colorPrimaryActive: "#c05500",
    },
    Table: {
      headerBg: "#fafafa",
      rowHoverBg: "#fff2e8",
    }
  }
};

// localStorage helpers
const getTeachersFromStorage = () => {
  try {
    const saved = localStorage.getItem("teachers");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to parse teachers", e);
    return [];
  }
};

const saveTeachersToStorage = (teachers) => {
  try {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  } catch (e) {
    console.error("Failed to save teachers", e);
    message.error("Failed to save data");
  }
};

const getDefaultTeachers = () => [
  {
    id: "1",
    name: "Karthiga",
    email: "karthiga@example.com",
    subject: "Computer Science",
    phone: "7894561230",
    username: "karthiga",
    status: "active",
  },
  {
    id: "2",
    name: "Radhika",
    email: "radhika@example.com",
    subject: "Geography",
    phone: "4567890123",
    username: "radhika",
    status: "active",
  },
  {
    id: "3",
    name: "Demo",
    email: "demo@example.com",
    subject: "Geography",
    phone: "4567890123",
    username: "demo",
    status: "inactive",
  }
];

const SUBJECTS = [
  "Software Development",
  "Web Development",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Artificial Intelligence",
  "Machine Learning",
  "Blockchain Technology",
  "Computer Networking",
  "Database Management",
  "Mathematics",
  "Science",
  "English",
  "History",
  "Geography",
  "Physical Education",
  "Art",
  "Music"
];

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState(() => {
    const saved = getTeachersFromStorage();
    return saved.length > 0 ? saved : getDefaultTeachers();
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState("1");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);

  const navigate = useNavigate();

  // Persist to localStorage
  useEffect(() => {
    saveTeachersToStorage(teachers);
  }, [teachers]);

  // Filter teachers
  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle create
  const handleCreate = (values) => {
    const newTeacher = {
      id: String(Date.now()),
      ...values,
      phone: values.phone ? String(values.phone) : "",
    };
    setTeachers([...teachers, newTeacher]);
    form.resetFields();
    setActiveTab("2");
    message.success("Teacher created successfully!");
  };

  // Handle delete
  const showDeleteConfirm = (record) => {
    setTeacherToDelete(record);
    setDeleteModalVisible(true);
  };

  const handleDelete = () => {
    if (!teacherToDelete) return;
    
    const updatedTeachers = teachers.filter(
      (teacher) => teacher.id !== teacherToDelete.id
    );
    setTeachers(updatedTeachers);
    setDeleteModalVisible(false);
    setTeacherToDelete(null);
    message.success(`Teacher "${teacherToDelete.name}" deleted successfully!`);
  };

  // Columns for table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar size="small" style={{ backgroundColor: "#FF7A00" }}>
            {text.charAt(0)}
          </Avatar>
          {text}
        </Space>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Subject", dataIndex: "subject", key: "subject" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          status={status === "active" ? "success" : status === "inactive" ? "error" : "warning"}
          text={status.charAt(0).toUpperCase() + status.slice(1)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => navigate(`/master-admin/user-management/update/${record.id}`)}
            style={{ color: "#FF7A00" }}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            onClick={() => showDeleteConfirm(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <ConfigProvider theme={customTheme}>
      <Content style={{ margin: "24px 16px", padding: 24, minHeight: "100vh" }}>
        <Card
          title="Teacher Management System"
          bordered={false}
          headStyle={{ backgroundColor: "#FF7A00", color: "white", fontSize: "18px" }}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            tabBarStyle={{ marginBottom: 24 }}
            items={[
              {
                key: "1",
                label: "Add Teacher",
                children: (
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleCreate}
                    initialValues={{ status: "active" }}
                  >
                    <h3 style={{ marginBottom: 16 }}>Create New Teacher Account</h3>
                    
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: "Please enter name!" }]}
                    >
                      <Input placeholder="Enter teacher's full name" />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter email!" },
                        { type: "email", message: "Please enter valid email!" }
                      ]}
                    >
                      <Input placeholder="Enter email address" />
                    </Form.Item>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Form.Item
                        name="subject"
                        label="Subject"
                        style={{ flex: 1, minWidth: 200 }}
                      >
                        <Select placeholder="Select subject">
                          {SUBJECTS.map(subject => (
                            <Option key={subject} value={subject}>{subject}</Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        style={{ flex: 1, minWidth: 200 }}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          addonBefore="+91"
                          placeholder="Phone number"
                          min={0}
                        />
                      </Form.Item>
                    </div>

                    <h4 style={{ marginTop: 24, marginBottom: 16 }}>Login Credentials</h4>

                    <Form.Item
                      name="username"
                      label="Username"
                      rules={[{ required: true, message: "Please enter username!" }]}
                    >
                      <Input placeholder="Create username" />
                    </Form.Item>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Form.Item
                        name="password"
                        label="Password"
                        style={{ flex: 1, minWidth: 200 }}
                        rules={[
                          { required: true, message: "Please enter password!" },
                          { min: 6, message: "Password must be at least 6 characters" }
                        ]}
                      >
                        <Input.Password
                          placeholder="Create password"
                          iconRender={(visible) =>
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>

                      <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        style={{ flex: 1, minWidth: 200 }}
                        dependencies={['password']}
                        rules={[
                          { required: true, message: "Please confirm password!" },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(new Error('Passwords do not match!'));
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          placeholder="Confirm password"
                          iconRender={(visible) =>
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>
                    </div>

                    <Form.Item name="status" label="Status">
                      <Select>
                        <Option value="active">Active</Option>
                        <Option value="inactive">Inactive</Option>
                        <Option value="pending">Pending</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item>
                      <Space>
                        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                          Create Teacher
                        </Button>
                        <Button onClick={() => form.resetFields()}>Reset</Button>
                      </Space>
                    </Form.Item>
                  </Form>
                ),
              },
              {
                key: "2",
                label: "View Teachers",
                children: (
                  <>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 16 }}>
                      <h3 style={{ margin: 0 }}>Teacher Directory</h3>
                      <Input
                        placeholder="Search teachers..."
                        prefix={<SearchOutlined />}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: 300 }}
                      />
                    </div>

                    <Table
                      dataSource={filteredTeachers}
                      columns={columns}
                      rowKey="id"
                      pagination={{ pageSize: 10 }}
                      scroll={{ x: 800 }}
                    />
                  </>
                ),
              },
            ]}
          />
        </Card>

        {/* DELETE CONFIRMATION MODAL */}
        <Modal
          title={
            <Space>
              <DeleteOutlined style={{ color: "#ff4d4f", fontSize: 20 }} />
              Confirm Deletion
            </Space>
          }
          open={deleteModalVisible}
          onOk={handleDelete}
          onCancel={() => {
            setDeleteModalVisible(false);
            setTeacherToDelete(null);
          }}
          okText="Yes, Delete"
          okButtonProps={{ danger: true }}
          cancelText="Cancel"
          centered
        >
          <p>
            Are you sure you want to delete <b>{teacherToDelete?.name}</b>? 
            This action cannot be undone.
          </p>
        </Modal>
      </Content>
    </ConfigProvider>
  );
};

export default TeacherManagement;