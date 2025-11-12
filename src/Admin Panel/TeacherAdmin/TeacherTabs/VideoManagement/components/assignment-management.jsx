

"use client";

import { useState } from "react";
import {
  Table,
  Card,
  Button,
  Input,
  Space,
  Tag,
  Dropdown,
  Menu,
  Modal,
  Form,
  Select,
  Row,
  Col,
  Typography,
  Statistic,
  message,
  Divider,
  Progress,
  DatePicker,
  Upload,
  Tabs,
  Empty,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  FileTextOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
  InboxOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;
const { confirm } = Modal;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;

// Mock data for assignments
const initialAssignments = [
  {
    id: "assignment-1",
    title: "Biology Lab Report",
    description: "Write a detailed report on the cell structure experiment.",
    course: "Introduction to Biology",
    dueDate: "2023-07-15T23:59:00Z",
    status: "Active",
    submissionCount: 18,
    totalStudents: 28,
    graded: 12,
    maxPoints: 100,
    averageScore: 85,
    createdBy: "Dr. Sarah Johnson",
    createdAt: "2023-06-20T10:30:00Z",
  },
  {
    id: "assignment-2",
    title: "Math Problem Set",
    description: "Complete problems 1-20 from Chapter 5.",
    course: "Advanced Mathematics",
    dueDate: "2023-07-10T23:59:00Z",
    status: "Active",
    submissionCount: 15,
    totalStudents: 22,
    graded: 10,
    maxPoints: 50,
    averageScore: 42,
    createdBy: "Prof. Michael Chen",
    createdAt: "2023-06-15T14:45:00Z",
  },
  {
    id: "assignment-3",
    title: "Historical Essay",
    description: "Write a 1000-word essay on the Industrial Revolution.",
    course: "World History",
    dueDate: "2023-08-05T23:59:00Z",
    status: "Upcoming",
    submissionCount: 0,
    totalStudents: 15,
    graded: 0,
    maxPoints: 100,
    averageScore: 0,
    createdBy: "Dr. Emily Rodriguez",
    createdAt: "2023-06-25T09:15:00Z",
  },
  {
    id: "assignment-4",
    title: "Literary Analysis",
    description: 'Analyze the themes in "To Kill a Mockingbird".',
    course: "English Literature",
    dueDate: "2023-06-30T23:59:00Z",
    status: "Closed",
    submissionCount: 30,
    totalStudents: 32,
    graded: 30,
    maxPoints: 100,
    averageScore: 88,
    createdBy: "Prof. James Wilson",
    createdAt: "2023-06-01T11:30:00Z",
  },
  {
    id: "assignment-5",
    title: "Chemical Reactions Lab",
    description: "Document and analyze the results of the chemical reactions lab.",
    course: "Chemistry Fundamentals",
    dueDate: "2023-06-20T23:59:00Z",
    status: "Closed",
    submissionCount: 24,
    totalStudents: 26,
    graded: 24,
    maxPoints: 50,
    averageScore: 45,
    createdBy: "Dr. Lisa Kim",
    createdAt: "2023-05-25T13:20:00Z",
  },
];

const AssignmentManagement = ({ isMobile }) => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCourse, setFilterCourse] = useState("");
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch =
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus ? assignment.status === filterStatus : true;
    const matchesCourse = filterCourse ? assignment.course === filterCourse : true;

    return matchesSearch && matchesStatus && matchesCourse;
  });

  const stats = {
    total: assignments.length,
    active: assignments.filter((assignment) => assignment.status === "Active").length,
    upcoming: assignments.filter((assignment) => assignment.status === "Upcoming").length,
    closed: assignments.filter((assignment) => assignment.status === "Closed").length,
    submissionRate: Math.round(
      (assignments.reduce((sum, assignment) => sum + assignment.submissionCount, 0) /
        assignments.reduce((sum, assignment) => sum + assignment.totalStudents, 0)) *
        100
    ),
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleFilterStatusChange = (value) => {
    setFilterStatus(value);
  };

  const handleFilterCourseChange = (value) => {
    setFilterCourse(value);
  };

  const showAddModal = () => {
    form.resetFields();
    setIsAddModalVisible(true);
  };

  const showViewModal = (assignment) => {
    setSelectedAssignment(assignment);
    setIsViewModalVisible(true);
  };

  const handleDeleteAssignment = (assignment) => {
    confirm({
      title: `Are you sure you want to delete "${assignment.title}"?`,
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 500));
          setAssignments((prev) => prev.filter((a) => a.id !== assignment.id));
          messageApi.success("Assignment deleted successfully");
          setLoading(false);
        } catch (error) {
          messageApi.error("Failed to delete assignment");
          console.error("Delete error:", error);
          setLoading(false);
        }
      },
    });
  };

  const handleAddSubmit = async (values) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newAssignment = {
        id: `assignment-${Date.now()}`,
        title: values.title,
        description: values.description || "",
        course: values.course,
        dueDate: values.dueDate.format("YYYY-MM-DDTHH:mm:00Z"),
        status: "Upcoming",
        submissionCount: 0,
        totalStudents: 25,
        graded: 0,
        maxPoints: values.maxPoints,
        averageScore: 0,
        createdBy: "John Doe",
        createdAt: new Date().toISOString(),
      };

      setAssignments((prev) => [...prev, newAssignment]);
      setIsAddModalVisible(false);
      form.resetFields();
      messageApi.success("Assignment added successfully");
      setLoading(false);
    } catch (error) {
      messageApi.error("Failed to add assignment");
      console.error("Add error:", error);
      setLoading(false);
    }
  };

  const getStatusTag = (status) => {
    switch (status) {
      case "Active":
        return <Tag color="#00A878">Active</Tag>;
      case "Upcoming":
        return <Tag color="#0096C7">Upcoming</Tag>;
      case "Closed":
        return <Tag color="#666666">Closed</Tag>;
      default:
        return <Tag color="default">{status}</Tag>;
    }
  };

  // Desktop/Tablet Columns
  const columns = [
    {
      title: "Assignment",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: "bold" }}>{text}</div>
          <div style={{ fontSize: 12, color: "#666" }}>{record.course}</div>
        </div>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (date) => new Date(date).toLocaleString(),
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
      responsive: ["md"],
    },
    {
      title: "Submissions",
      key: "submissions",
      render: (_, record) => (
        <div>
          <div>
            {record.submissionCount} / {record.totalStudents}
          </div>
          <Progress
            percent={Math.round((record.submissionCount / record.totalStudents) * 100)}
            size="small"
            showInfo={false}
            strokeColor="#FF7A00"
          />
        </div>
      ),
      responsive: ["lg"],
    },
    {
      title: "Graded",
      key: "graded",
      render: (_, record) => (
        <div>
          <div>
            {record.graded} / {record.submissionCount}
          </div>
          <Progress
            percent={record.submissionCount > 0 ? Math.round((record.graded / record.submissionCount) * 100) : 0}
            size="small"
            showInfo={false}
            strokeColor="#00A878"
          />
        </div>
      ),
      responsive: ["lg"],
    },
    {
      title: "Avg. Score",
      dataIndex: "averageScore",
      key: "averageScore",
      render: (score, record) => (record.graded > 0 ? `${score}/${record.maxPoints}` : "-"),
      responsive: ["lg"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  key: "1",
                  icon: <EyeOutlined />,
                  label: "View Details",
                  onClick: () => showViewModal(record),
                },
                {
                  key: "2",
                  icon: <EditOutlined />,
                  label: "Edit",
                  onClick: () => messageApi.info("Edit functionality coming soon"),
                },
                {
                  key: "3",
                  icon: <TeamOutlined />,
                  label: "View Submissions",
                  onClick: () => messageApi.info("Submissions view coming soon"),
                },
                {
                  type: "divider",
                },
                {
                  key: "4",
                  icon: <DeleteOutlined />,
                  label: "Delete",
                  danger: true,
                  onClick: () => handleDeleteAssignment(record),
                },
              ]}
            />
          }
          trigger={["click"]}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  // ✅ Fully Responsive Mobile View (Card-based)
  const renderMobileView = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {filteredAssignments.map((assignment) => (
          <Card
            key={assignment.id}
            style={{
              border: "1px solid #f0f0f0",
              borderRadius: "12px",
              padding: 0,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ padding: "16px" }}>
              {/* Title & Course */}
              <div style={{ marginBottom: "12px" }}>
                <Text strong style={{ fontSize: "16px", lineHeight: "1.4", display: "block" }}>
                  {assignment.title}
                </Text>
                <Text type="secondary" style={{ fontSize: "13px", marginTop: "4px" }}>
                  {assignment.course}
                </Text>
              </div>

              {/* Status & Due Date */}
              <div style={{ marginBottom: "12px" }}>
                <Space size={8} wrap>
                  {getStatusTag(assignment.status)}
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </Text>
                </Space>
              </div>

              {/* Submissions Progress */}
              <div style={{ marginBottom: "16px" }}>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Submissions ({assignment.submissionCount}/{assignment.totalStudents})
                </Text>
                <div style={{ marginTop: "6px" }}>
                  <Progress
                    percent={Math.round((assignment.submissionCount / assignment.totalStudents) * 100)}
                    size="small"
                    strokeColor="#FF7A00"
                    showInfo={false}
                  />
                </div>
              </div>

              {/* Graded & Avg Score */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    Graded
                  </Text>
                  <div style={{ fontSize: "14px", fontWeight: 500, marginTop: "4px" }}>
                    {assignment.graded}/{assignment.submissionCount || 0}
                  </div>
                </div>
                <div>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    Avg. Score
                  </Text>
                  <div style={{ fontSize: "14px", fontWeight: 500, marginTop: "4px" }}>
                    {assignment.graded > 0 ? `${assignment.averageScore}/${assignment.maxPoints}` : "-"}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  paddingTop: "12px",
                  borderTop: "1px solid #f0f0f0",
                  marginTop: "8px",
                }}
              >
                <Button
                  type="text"
                  icon={<EyeOutlined />}
                  size="middle"
                  onClick={() => showViewModal(assignment)}
                  style={{ fontSize: "14px" }}
                >
                  View
                </Button>
                <Dropdown
                  overlay={
                    <Menu
                      items={[
                        {
                          key: "1",
                          icon: <EditOutlined />,
                          label: "Edit",
                          onClick: () => messageApi.info("Edit functionality coming soon"),
                        },
                        {
                          key: "2",
                          icon: <TeamOutlined />,
                          label: "Submissions",
                          onClick: () => messageApi.info("Submissions view coming soon"),
                        },
                        {
                          key: "3",
                          icon: <DeleteOutlined />,
                          label: "Delete",
                          danger: true,
                          onClick: () => handleDeleteAssignment(assignment),
                        },
                      ]}
                    />
                  }
                  trigger={["click"]}
                  placement="topRight"
                >
                  <Button type="text" icon={<MoreOutlined />} size="middle" />
                </Dropdown>
              </div>
            </div>
          </Card>
        ))}

        {filteredAssignments.length === 0 && !loading && (
          <Empty
            description="No assignments found"
            style={{ marginTop: "32px", padding: "32px" }}
          />
        )}
      </div>
    );
  };

  const uploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        messageApi.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        messageApi.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      {contextHolder}
      <Card bordered={false} bodyStyle={{ padding: isMobile ? 12 : 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Statistic
              title="Total Assignments"
              value={stats.total}
              prefix={<FileTextOutlined style={{ color: "#FF7A00" }} />}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Statistic
              title="Active"
              value={stats.active}
              valueStyle={{ color: "#00A878" }}
              prefix={<CheckCircleOutlined />}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Statistic
              title="Upcoming"
              value={stats.upcoming}
              valueStyle={{ color: "#0096C7" }}
              prefix={<ClockCircleOutlined />}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Statistic
              title="Closed"
              value={stats.closed}
              valueStyle={{ color: "#666666" }}
              prefix={<CloseCircleOutlined />}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic
              title="Submission Rate"
              value={stats.submissionRate}
              suffix="%"
              prefix={<FileTextOutlined style={{ color: "#0096C7" }} />}
            />
          </Col>
        </Row>
      </Card>

      <Divider style={{ margin: "16px 0" }} />

      {isMobile ? (
        <>
          <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between" }}>
            <Input
              placeholder="Search assignments"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
              size="middle"
            />
            <Space>
              <Button icon={<FilterOutlined />} onClick={() => setFiltersVisible(!filtersVisible)} size="middle" />
              <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal} size="middle" />
            </Space>
          </Space>

          {filtersVisible && (
            <Card size="small" style={{ marginBottom: 16 }}>
              <Space direction="vertical" style={{ width: "100%" }} size={12}>
                <Select
                  placeholder="Filter by status"
                  style={{ width: "100%" }}
                  onChange={handleFilterStatusChange}
                  value={filterStatus || undefined}
                  allowClear
                  size="middle"
                >
                  <Option value="Active">Active</Option>
                  <Option value="Upcoming">Upcoming</Option>
                  <Option value="Closed">Closed</Option>
                </Select>
                <Select
                  placeholder="Filter by course"
                  style={{ width: "100%" }}
                  onChange={handleFilterCourseChange}
                  value={filterCourse || undefined}
                  allowClear
                  size="middle"
                >
                  <Option value="Introduction to Biology">Introduction to Biology</Option>
                  <Option value="Advanced Mathematics">Advanced Mathematics</Option>
                  <Option value="World History">World History</Option>
                  <Option value="English Literature">English Literature</Option>
                  <Option value="Chemistry Fundamentals">Chemistry Fundamentals</Option>
                </Select>
              </Space>
            </Card>
          )}

          {renderMobileView()}

          {filteredAssignments.length > 0 && (
            <div style={{ textAlign: "center", color: "#888", fontSize: "13px", marginTop: "16px" }}>
              Showing {filteredAssignments.length} of {assignments.length} assignments
            </div>
          )}
        </>
      ) : (
        <>
          <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
            <Space wrap>
              <Input
                placeholder="Search assignments"
                prefix={<SearchOutlined />}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 250 }}
                allowClear
              />
              <Select
                placeholder="Filter by status"
                style={{ width: 150 }}
                onChange={handleFilterStatusChange}
                value={filterStatus || undefined}
                allowClear
              >
                <Option value="Active">Active</Option>
                <Option value="Upcoming">Upcoming</Option>
                <Option value="Closed">Closed</Option>
              </Select>
              <Select
                placeholder="Filter by course"
                style={{ width: 200 }}
                onChange={handleFilterCourseChange}
                value={filterCourse || undefined}
                allowClear
              >
                <Option value="Introduction to Biology">Introduction to Biology</Option>
                <Option value="Advanced Mathematics">Advanced Mathematics</Option>
                <Option value="World History">World History</Option>
                <Option value="English Literature">English Literature</Option>
                <Option value="Chemistry Fundamentals">Chemistry Fundamentals</Option>
              </Select>
            </Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
              Add Assignment
            </Button>
          </Space>

          <Table
            dataSource={filteredAssignments}
            columns={columns}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} assignments`,
            }}
            scroll={{ x: "max-content" }}
          />
        </>
      )}

      {/* Add Assignment Modal */}
      <Modal
        title="Add New Assignment"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 700}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
          <Form.Item
            name="title"
            label="Assignment Title"
            rules={[{ required: true, message: "Please enter assignment title" }]}
          >
            <Input placeholder="Enter assignment title" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter assignment description" rows={4} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
              <Form.Item name="course" label="Course" rules={[{ required: true, message: "Please select course" }]}>
                <Select placeholder="Select course">
                  <Option value="Introduction to Biology">Introduction to Biology</Option>
                  <Option value="Advanced Mathematics">Advanced Mathematics</Option>
                  <Option value="World History">World History</Option>
                  <Option value="English Literature">English Literature</Option>
                  <Option value="Chemistry Fundamentals">Chemistry Fundamentals</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item
                name="maxPoints"
                label="Maximum Points"
                rules={[{ required: true, message: "Please enter maximum points" }]}
              >
                <Input type="number" placeholder="Enter maximum points" min={1} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="dueDate"
            label="Due Date & Time"
            rules={[{ required: true, message: "Please select due date and time" }]}
          >
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm"
              style={{ width: "100%" }}
              placeholder="Select due date and time"
            />
          </Form.Item>

          <Form.Item label="Attachments">
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for PDF, DOCX, PPTX, or image files.</p>
            </Dragger>
          </Form.Item>

          <Form.Item>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button onClick={() => setIsAddModalVisible(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Add Assignment
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* View Assignment Modal */}
      {selectedAssignment && (
        <Modal
          title="Assignment Details"
          open={isViewModalVisible}
          onCancel={() => setIsViewModalVisible(false)}
          width={isMobile ? "95%" : 800}
          footer={[
            <Button key="close" onClick={() => setIsViewModalVisible(false)}>
              Close
            </Button>,
            <Button
              key="edit"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => {
                setIsViewModalVisible(false);
                messageApi.info("Edit functionality coming soon");
              }}
            >
              Edit
            </Button>,
          ]}
          centered
        >
          <div>
            <Title level={4}>{selectedAssignment.title}</Title>
            <Space style={{ marginBottom: 16 }}>
              {getStatusTag(selectedAssignment.status)}
              <Text type="secondary">Course: {selectedAssignment.course}</Text>
            </Space>

            <Divider style={{ margin: "16px 0" }} />

            <Text>{selectedAssignment.description}</Text>

            <Divider style={{ margin: "16px 0" }} />

            <Row gutter={[16, 16]}>
              <Col span={isMobile ? 24 : 12}>
                <Text type="secondary">Due Date:</Text>
                <div>
                  <strong>{new Date(selectedAssignment.dueDate).toLocaleString()}</strong>
                </div>
              </Col>
              <Col span={isMobile ? 24 : 12}>
                <Text type="secondary">Maximum Points:</Text>
                <div>
                  <strong>{selectedAssignment.maxPoints}</strong>
                </div>
              </Col>
              <Col span={isMobile ? 24 : 12}>
                <Text type="secondary">Created By:</Text>
                <div>
                  <strong>{selectedAssignment.createdBy}</strong>
                </div>
              </Col>
              <Col span={isMobile ? 24 : 12}>
                <Text type="secondary">Created At:</Text>
                <div>
                  <strong>{new Date(selectedAssignment.createdAt).toLocaleString()}</strong>
                </div>
              </Col>
            </Row>

            <Divider style={{ margin: "16px 0" }} />

            <Row gutter={[16, 16]}>
              <Col span={isMobile ? 24 : 8}>
                <Card bordered={false} style={{ backgroundColor: "#f9f9f9" }}>
                  <Statistic
                    title="Submissions"
                    value={`${selectedAssignment.submissionCount}/${selectedAssignment.totalStudents}`}
                    suffix={`(${Math.round((selectedAssignment.submissionCount / selectedAssignment.totalStudents) * 100)}%)`}
                  />
                  <Progress
                    percent={Math.round((selectedAssignment.submissionCount / selectedAssignment.totalStudents) * 100)}
                    strokeColor="#FF7A00"
                    style={{ marginTop: 8 }}
                  />
                </Card>
              </Col>
              <Col span={isMobile ? 24 : 8}>
                <Card bordered={false} style={{ backgroundColor: "#f9f9f9" }}>
                  <Statistic
                    title="Graded"
                    value={`${selectedAssignment.graded}/${selectedAssignment.submissionCount}`}
                    suffix={
                      selectedAssignment.submissionCount > 0
                        ? `(${Math.round((selectedAssignment.graded / selectedAssignment.submissionCount) * 100)}%)`
                        : "(0%)"
                    }
                  />
                  <Progress
                    percent={
                      selectedAssignment.submissionCount > 0
                        ? Math.round((selectedAssignment.graded / selectedAssignment.submissionCount) * 100)
                        : 0
                    }
                    strokeColor="#00A878"
                    style={{ marginTop: 8 }}
                  />
                </Card>
              </Col>
              <Col span={isMobile ? 24 : 8}>
                <Card bordered={false} style={{ backgroundColor: "#f9f9f9" }}>
                  <Statistic
                    title="Average Score"
                    value={selectedAssignment.graded > 0 ? selectedAssignment.averageScore : "-"}
                    suffix={selectedAssignment.graded > 0 ? `/${selectedAssignment.maxPoints}` : ""}
                  />
                  {selectedAssignment.graded > 0 && (
                    <Progress
                      percent={Math.round((selectedAssignment.averageScore / selectedAssignment.maxPoints) * 100)}
                      strokeColor="#0096C7"
                      style={{ marginTop: 8 }}
                    />
                  )}
                </Card>
              </Col>
            </Row>

            <Tabs
              style={{ marginTop: 24 }}
              activeKey={activeTab}
              onChange={setActiveTab}
              items={[
                {
                  key: "1",
                  label: (
                    <span>
                      <TeamOutlined /> Submissions
                    </span>
                  ),
                  children: (
                    <List
                      dataSource={[
                        {
                          id: 1,
                          name: "Emma Johnson",
                          status: "Submitted",
                          grade: 92,
                          submittedAt: "2023-07-05T14:30:00Z",
                        },
                        {
                          id: 2,
                          name: "Michael Chen",
                          status: "Submitted",
                          grade: 88,
                          submittedAt: "2023-07-06T10:15:00Z",
                        },
                        {
                          id: 3,
                          name: "Sophia Rodriguez",
                          status: "Late",
                          grade: 75,
                          submittedAt: "2023-07-07T23:45:00Z",
                        },
                        {
                          id: 4,
                          name: "James Wilson",
                          status: "Submitted",
                          grade: null,
                          submittedAt: "2023-07-04T16:20:00Z",
                        },
                        { id: 5, name: "Olivia Kim", status: "Not Submitted", grade: null, submittedAt: null },
                      ]}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            item.status !== "Not Submitted" ? (
                              <Button key="view" type="link" icon={<EyeOutlined />}>
                                View
                              </Button>
                            ) : null,
                            item.status !== "Not Submitted" ? (
                              <Button key="grade" type="link" icon={<EditOutlined />}>
                                Grade
                              </Button>
                            ) : null,
                          ]}
                        >
                          <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} style={{ backgroundColor: "#00A878" }} />}
                            title={item.name}
                            description={
                              <Space>
                                <Tag
                                  color={
                                    item.status === "Submitted"
                                      ? "#00A878"
                                      : item.status === "Late"
                                        ? "#FF7A00"
                                        : "#FF5252"
                                  }
                                >
                                  {item.status}
                                </Tag>
                                {item.submittedAt && (
                                  <Text type="secondary">Submitted: {new Date(item.submittedAt).toLocaleString()}</Text>
                                )}
                              </Space>
                            }
                          />
                          {item.grade !== null && (
                            <div>
                              <Tag color="#0096C7">
                                Grade: {item.grade}/{selectedAssignment.maxPoints}
                              </Tag>
                            </div>
                          )}
                        </List.Item>
                      )}
                    />
                  ),
                },
                {
                  key: "2",
                  label: (
                    <span>
                      <FileTextOutlined /> Materials
                    </span>
                  ),
                  children: (
                    <List
                      dataSource={[
                        { id: 1, name: "Assignment Instructions.pdf", type: "PDF", size: "1.2 MB", date: "2023-06-20" },
                        { id: 2, name: "Rubric.docx", type: "DOCX", size: "850 KB", date: "2023-06-20" },
                        { id: 3, name: "Reference Materials.pdf", type: "PDF", size: "2.5 MB", date: "2023-06-21" },
                      ]}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Button key="download" type="link" icon={<DownloadOutlined />}>
                              Download
                            </Button>,
                          ]}
                        >
                          <List.Item.Meta
                            avatar={<Avatar icon={<FileTextOutlined />} style={{ backgroundColor: "#0096C7" }} />}
                            title={item.name}
                            description={
                              <Space>
                                <span>{item.type}</span>
                                <span>•</span>
                                <span>{item.size}</span>
                                <span>•</span>
                                <span>Added {item.date}</span>
                              </Space>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  ),
                },
              ]}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default AssignmentManagement;