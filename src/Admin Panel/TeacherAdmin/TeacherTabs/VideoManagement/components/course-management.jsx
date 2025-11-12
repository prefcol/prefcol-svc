

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
  Tabs,
  Upload,
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
  BookOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  TeamOutlined,
  CalendarOutlined,
  UploadOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;
const { confirm } = Modal;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;

// Mock data for courses
const initialCourses = [
  {
    id: "course-1",
    title: "Introduction to Biology",
    description: "A comprehensive introduction to basic biology concepts.",
    category: "Science",
    status: "Active",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    enrolledStudents: 28,
    progress: 75,
    instructor: "Dr. Sarah Johnson",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "course-2",
    title: "Advanced Mathematics",
    description: "Advanced mathematical concepts for high school students.",
    category: "Mathematics",
    status: "Active",
    startDate: "2023-02-01",
    endDate: "2023-07-15",
    enrolledStudents: 22,
    progress: 68,
    instructor: "Prof. Michael Chen",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "course-3",
    title: "World History",
    description:
      "Exploring major historical events and their impact on society.",
    category: "History",
    status: "Upcoming",
    startDate: "2023-07-10",
    endDate: "2023-12-20",
    enrolledStudents: 15,
    progress: 0,
    instructor: "Dr. Emily Rodriguez",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "course-4",
    title: "English Literature",
    description: "Analysis of classic and contemporary literary works.",
    category: "English",
    status: "Active",
    startDate: "2023-01-20",
    endDate: "2023-06-15",
    enrolledStudents: 32,
    progress: 90,
    instructor: "Prof. James Wilson",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "course-5",
    title: "Chemistry Fundamentals",
    description: "Basic principles of chemistry and laboratory practices.",
    category: "Science",
    status: "Completed",
    startDate: "2022-09-05",
    endDate: "2023-01-10",
    enrolledStudents: 26,
    progress: 100,
    instructor: "Dr. Lisa Kim",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
];

const CourseManagement = ({ isMobile }) => {
  const [courses, setCourses] = useState(initialCourses);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus ? course.status === filterStatus : true;
    const matchesCategory = filterCategory
      ? course.category === filterCategory
      : true;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const stats = {
    total: courses.length,
    active: courses.filter((course) => course.status === "Active").length,
    upcoming: courses.filter((course) => course.status === "Upcoming").length,
    completed: courses.filter((course) => course.status === "Completed").length,
    totalStudents: courses.reduce(
      (sum, course) => sum + course.enrolledStudents,
      0
    ),
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleFilterStatusChange = (value) => {
    setFilterStatus(value);
  };

  const handleFilterCategoryChange = (value) => {
    setFilterCategory(value);
  };

  const showAddModal = () => {
    form.resetFields();
    setIsAddModalVisible(true);
  };

  const showViewModal = (course) => {
    setSelectedCourse(course);
    setIsViewModalVisible(true);
  };

  const handleDeleteCourse = (course) => {
    confirm({
      title: `Are you sure you want to delete "${course.title}"?`,
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 500));
          setCourses((prev) => prev.filter((c) => c.id !== course.id));
          messageApi.success("Course deleted successfully");
          setLoading(false);
        } catch (error) {
          messageApi.error("Failed to delete course");
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
      const newCourse = {
        id: `course-${Date.now()}`,
        title: values.title,
        description: values.description || "",
        category: values.category,
        status: values.status || "Upcoming",
        startDate: values.dateRange[0].format("YYYY-MM-DD"),
        endDate: values.dateRange[1].format("YYYY-MM-DD"),
        enrolledStudents: 0,
        progress: 0,
        instructor: values.instructor,
        thumbnail: "/placeholder.svg?height=180&width=320",
      };
      setCourses((prev) => [...prev, newCourse]);
      setIsAddModalVisible(false);
      form.resetFields();
      messageApi.success("Course added successfully");
      setLoading(false);
    } catch (error) {
      messageApi.error("Failed to add course");
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
      case "Completed":
        return <Tag color="#666666">Completed</Tag>;
      default:
        return <Tag color="default">{status}</Tag>;
    }
  };

  // Desktop/Tablet Table Columns
  const columns = [
    {
      title: "Course",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 60,
              height: 40,
              marginRight: 12,
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={record.thumbnail || "/placeholder.svg"}
              alt={text}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: isMobile ? 13 : 14 }}>{text}</div>
            <div style={{ fontSize: 12, color: "#666" }}>{record.instructor}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
      responsive: ["sm"],
    },
    {
      title: "Students",
      dataIndex: "enrolledStudents",
      key: "enrolledStudents",
      responsive: ["lg"],
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress) => (
        <Progress
          percent={progress}
          size="small"
          status={progress === 100 ? "success" : "active"}
          strokeColor={progress < 50 ? "#FF7A00" : "#00A878"}
        />
      ),
      responsive: ["sm"],
    },
    {
      title: "Date Range",
      key: "dateRange",
      render: (_, record) => (
        <span style={{ fontSize: isMobile ? 12 : 14 }}>
          {new Date(record.startDate).toLocaleDateString()} – {new Date(record.endDate).toLocaleDateString()}
        </span>
      ),
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
                  label: "Manage Students",
                  onClick: () => messageApi.info("Student management coming soon"),
                },
                {
                  type: "divider",
                },
                {
                  key: "4",
                  icon: <DeleteOutlined />,
                  label: "Delete",
                  danger: true,
                  onClick: () => handleDeleteCourse(record),
                },
              ]}
            />
          }
          trigger={["click"]}
        >
          <Button type="text" icon={<MoreOutlined />} size={isMobile ? "small" : "middle"} />
        </Dropdown>
      ),
    },
  ];

  // ✅ Fully Responsive Mobile View (Card-based)
  const renderMobileView = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            style={{
              border: '1px solid #f0f0f0',
              borderRadius: '12px',
              padding: 0,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ padding: '16px' }}>
              {/* Thumbnail + Title/Instructor */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: 80,
                    height: 60,
                    borderRadius: 8,
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={course.thumbnail || "/placeholder.svg?height=180&width=320"}
                    alt={course.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Text strong style={{ fontSize: '16px', lineHeight: '1.4', display: 'block' }}>
                    {course.title}
                  </Text>
                  <Text type="secondary" style={{ fontSize: '13px', marginTop: '4px' }}>
                    {course.instructor}
                  </Text>
                </div>
              </div>

              {/* Status & Category */}
              <div style={{ marginBottom: '12px' }}>
                <Space size={8} wrap>
                  {getStatusTag(course.status)}
                  <Tag color="blue">{course.category}</Tag>
                </Space>
              </div>

              {/* Progress */}
              <div style={{ marginBottom: '12px' }}>
                <Text type="secondary" style={{ fontSize: '12px' }}>Progress</Text>
                <div style={{ marginTop: '6px' }}>
                  <Progress
                    percent={course.progress}
                    size="small"
                    status={course.progress === 100 ? "success" : "active"}
                    strokeColor={course.progress < 50 ? "#FF7A00" : "#00A878"}
                    showInfo={false}
                  />
                  <div style={{ textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    {course.progress}%
                  </div>
                </div>
              </div>

              {/* Duration & Students */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Duration</Text>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>
                    {new Date(course.startDate).toLocaleDateString()} – {new Date(course.endDate).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Enrolled Students</Text>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>
                    {course.enrolledStudents}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid #f0f0f0',
                  marginTop: '8px',
                }}
              >
                <Button
                  type="text"
                  icon={<EyeOutlined />}
                  size="middle"
                  onClick={() => showViewModal(course)}
                  style={{ fontSize: '14px' }}
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
                          label: "Manage Students",
                          onClick: () => messageApi.info("Student management coming soon"),
                        },
                        {
                          type: "divider",
                        },
                        {
                          key: "3",
                          icon: <DeleteOutlined />,
                          label: "Delete",
                          danger: true,
                          onClick: () => handleDeleteCourse(course),
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

        {filteredCourses.length === 0 && !loading && (
          <Empty
            description="No courses found"
            style={{ marginTop: '32px', padding: '32px' }}
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
              title="Total Courses"
              value={stats.total}
              prefix={<BookOutlined style={{ color: "#FF7A00" }} />}
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
              title="Completed"
              value={stats.completed}
              valueStyle={{ color: "#666666" }}
              prefix={<CheckCircleOutlined />}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic
              title="Total Enrolled Students"
              value={stats.totalStudents}
              prefix={<TeamOutlined style={{ color: "#0096C7" }} />}
            />
          </Col>
        </Row>
      </Card>

      <Divider style={{ margin: "16px 0" }} />

      {isMobile ? (
        <>
          <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between" }}>
            <Input
              placeholder="Search courses"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
              size="middle"
            />
            <Space>
              <Button
                icon={<FilterOutlined />}
                onClick={() => setFiltersVisible(!filtersVisible)}
                size="middle"
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={showAddModal}
                size="middle"
              />
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
                  <Option value="Completed">Completed</Option>
                </Select>
                <Select
                  placeholder="Filter by category"
                  style={{ width: "100%" }}
                  onChange={handleFilterCategoryChange}
                  value={filterCategory || undefined}
                  allowClear
                  size="middle"
                >
                  <Option value="Science">Science</Option>
                  <Option value="Mathematics">Mathematics</Option>
                  <Option value="History">History</Option>
                  <Option value="English">English</Option>
                </Select>
              </Space>
            </Card>
          )}

          {renderMobileView()}

          {filteredCourses.length > 0 && (
            <div style={{ textAlign: 'center', color: '#888', fontSize: '13px', marginTop: '16px' }}>
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          )}
        </>
      ) : (
        <>
          <Space
            style={{
              marginBottom: 16,
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Space wrap>
              <Input
                placeholder="Search courses"
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
                <Option value="Completed">Completed</Option>
              </Select>
              <Select
                placeholder="Filter by category"
                style={{ width: 150 }}
                onChange={handleFilterCategoryChange}
                value={filterCategory || undefined}
                allowClear
              >
                <Option value="Science">Science</Option>
                <Option value="Mathematics">Mathematics</Option>
                <Option value="History">History</Option>
                <Option value="English">English</Option>
              </Select>
            </Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
              Add Course
            </Button>
          </Space>

          <Table
            dataSource={filteredCourses}
            columns={columns}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} courses`,
            }}
            scroll={{ x: "max-content" }}
            size="middle"
          />
        </>
      )}

      {/* Add Course Modal */}
      <Modal
        title="Add New Course"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 700}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
          <Form.Item
            name="title"
            label="Course Title"
            rules={[{ required: true, message: "Please enter course title" }]}
          >
            <Input placeholder="Enter course title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter course description" rows={4} />
          </Form.Item>
          <Row gutter={16}>
            <Col
              span={isMobile ? 24 : 12}
              style={{ marginBottom: isMobile ? 16 : 0 }}
            >
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Please select category" }]}
              >
                <Select placeholder="Select category">
                  <Option value="Science">Science</Option>
                  <Option value="Mathematics">Mathematics</Option>
                  <Option value="History">History</Option>
                  <Option value="English">English</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item
                name="instructor"
                label="Instructor"
                rules={[
                  { required: true, message: "Please enter instructor name" },
                ]}
              >
                <Input placeholder="Enter instructor name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col
              span={isMobile ? 24 : 12}
              style={{ marginBottom: isMobile ? 16 : 0 }}
            >
              <Form.Item
                name="dateRange"
                label="Course Duration"
                rules={[
                  { required: true, message: "Please select date range" },
                ]}
              >
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item name="status" label="Status" initialValue="Upcoming">
                <Select placeholder="Select status">
                  <Option value="Active">Active</Option>
                  <Option value="Upcoming">Upcoming</Option>
                  <Option value="Completed">Completed</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button onClick={() => setIsAddModalVisible(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Add Course
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* View Course Modal */}
      {selectedCourse && (
        <Modal
          title="Course Details"
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
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 20,
            }}
          >
            <div style={{ width: isMobile ? "100%" : 240 }}>
              <div
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: 16,
                }}
              >
                <img
                  src={selectedCourse.thumbnail || "/placeholder.svg"}
                  alt={selectedCourse.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                {getStatusTag(selectedCourse.status)}
              </div>
              <div style={{ marginBottom: 8 }}>
                <Text type="secondary">Enrolled Students:</Text>
                <div>
                  <strong>{selectedCourse.enrolledStudents}</strong>
                </div>
              </div>
              <div>
                <Text type="secondary">Progress:</Text>
                <Progress
                  percent={selectedCourse.progress}
                  status={
                    selectedCourse.progress === 100 ? "success" : "active"
                  }
                  strokeColor={
                    selectedCourse.progress < 50 ? "#FF7A00" : "#00A878"
                  }
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <Title level={4}>{selectedCourse.title}</Title>
              <Text type="secondary">{selectedCourse.description}</Text>
              <Divider style={{ margin: "16px 0" }} />
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Text type="secondary">Category:</Text>
                  <div>
                    <strong>{selectedCourse.category}</strong>
                  </div>
                </Col>
                <Col span={12}>
                  <Text type="secondary">Instructor:</Text>
                  <div>
                    <strong>{selectedCourse.instructor}</strong>
                  </div>
                </Col>
                <Col span={24}>
                  <Text type="secondary">Duration:</Text>
                  <div>
                    <strong>
                      {new Date(selectedCourse.startDate).toLocaleDateString()} –{" "}
                      {new Date(selectedCourse.endDate).toLocaleDateString()}
                    </strong>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Tabs
            style={{ marginTop: 24 }}
            activeKey={activeTab}
            onChange={setActiveTab}
            items={[
              {
                key: "1",
                label: (
                  <span>
                    <VideoCameraOutlined /> Videos
                  </span>
                ),
                children: (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <Title level={5}>Course Videos</Title>
                      <Button icon={<PlusOutlined />}>Add Video</Button>
                    </div>
                    <List
                      dataSource={[
                        {
                          id: 1,
                          title: "Introduction to the Course",
                          duration: "15:30",
                          views: 124,
                          date: "2023-01-20",
                        },
                        {
                          id: 2,
                          title: "Basic Concepts and Terminology",
                          duration: "22:45",
                          views: 98,
                          date: "2023-01-25",
                        },
                        {
                          id: 3,
                          title: "Advanced Topics Overview",
                          duration: "18:15",
                          views: 76,
                          date: "2023-02-05",
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Button
                              key="edit"
                              type="text"
                              icon={<EditOutlined />}
                            />,
                            <Button
                              key="view"
                              type="text"
                              icon={<EyeOutlined />}
                            />,
                          ]}
                        >
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                icon={<VideoCameraOutlined />}
                                style={{ backgroundColor: "#FF7A00" }}
                              />
                            }
                            title={item.title}
                            description={
                              <Space>
                                <span>{item.duration}</span>
                                <span>•</span>
                                <span>{item.views} views</span>
                                <span>•</span>
                                <span>Added {item.date}</span>
                              </Space>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
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
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <Title level={5}>Course Materials</Title>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </div>
                    <Dragger {...uploadProps} style={{ marginBottom: 16 }}>
                      <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for PDF, DOCX, PPTX, or image files.
                      </p>
                    </Dragger>
                    <List
                      dataSource={[
                        {
                          id: 1,
                          name: "Course Syllabus.pdf",
                          type: "PDF",
                          size: "1.2 MB",
                          date: "2023-01-15",
                        },
                        {
                          id: 2,
                          name: "Lecture Notes - Week 1.docx",
                          type: "DOCX",
                          size: "850 KB",
                          date: "2023-01-20",
                        },
                        {
                          id: 3,
                          name: "Assignment Guidelines.pdf",
                          type: "PDF",
                          size: "650 KB",
                          date: "2023-01-25",
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Button
                              key="download"
                              type="link"
                              icon={<DownloadOutlined />}
                            >
                              Download
                            </Button>,
                            <Button
                              key="delete"
                              type="text"
                              danger
                              icon={<DeleteOutlined />}
                            />,
                          ]}
                        >
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                icon={<FileTextOutlined />}
                                style={{ backgroundColor: "#0096C7" }}
                              />
                            }
                            title={item.name}
                            description={
                              <Space>
                                <span>{item.type}</span>
                                <span>•</span>
                                <span>{item.size}</span>
                                <span>•</span>
                                <span>Uploaded {item.date}</span>
                              </Space>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                ),
              },
              {
                key: "3",
                label: (
                  <span>
                    <TeamOutlined /> Students
                  </span>
                ),
                children: (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <Title level={5}>Enrolled Students</Title>
                      <Button icon={<PlusOutlined />}>Add Students</Button>
                    </div>
                    <List
                      dataSource={[
                        {
                          id: 1,
                          name: "Emma Johnson",
                          email: "emma.j@example.com",
                          progress: 85,
                        },
                        {
                          id: 2,
                          name: "Michael Chen",
                          email: "michael.c@example.com",
                          progress: 92,
                        },
                        {
                          id: 3,
                          name: "Sophia Rodriguez",
                          email: "sophia.r@example.com",
                          progress: 45,
                        },
                        {
                          id: 4,
                          name: "James Wilson",
                          email: "james.w@example.com",
                          progress: 78,
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Button
                              key="view"
                              type="text"
                              icon={<EyeOutlined />}
                            />,
                            <Button
                              key="remove"
                              type="text"
                              danger
                              icon={<DeleteOutlined />}
                            />,
                          ]}
                        >
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                icon={<UserOutlined />}
                                style={{ backgroundColor: "#00A878" }}
                              />
                            }
                            title={item.name}
                            description={
                              <div>
                                <div>{item.email}</div>
                                <div style={{ marginTop: 8 }}>
                                  <Text type="secondary">
                                    Progress: {item.progress}%
                                  </Text>
                                  <Progress
                                    percent={item.progress}
                                    size="small"
                                    status={
                                      item.progress === 100
                                        ? "success"
                                        : "active"
                                    }
                                    strokeColor={
                                      item.progress < 50
                                        ? "#FF5252"
                                        : item.progress < 75
                                        ? "#FFB347"
                                        : "#00A878"
                                    }
                                  />
                                </div>
                              </div>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                ),
              },
              {
                key: "4",
                label: (
                  <span>
                    <CalendarOutlined /> Schedule
                  </span>
                ),
                children: (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <Title level={5}>Course Schedule</Title>
                      <Button icon={<PlusOutlined />}>Add Event</Button>
                    </div>
                    <List
                      dataSource={[
                        {
                          id: 1,
                          title: "Course Introduction",
                          type: "Lecture",
                          date: "2023-01-15",
                          time: "10:00 AM - 11:30 AM",
                        },
                        {
                          id: 2,
                          title: "First Assignment Due",
                          type: "Assignment",
                          date: "2023-01-30",
                          time: "11:59 PM",
                        },
                        {
                          id: 3,
                          title: "Mid-term Exam",
                          type: "Exam",
                          date: "2023-03-15",
                          time: "9:00 AM - 11:00 AM",
                        },
                        {
                          id: 4,
                          title: "Group Project Presentations",
                          type: "Presentation",
                          date: "2023-05-20",
                          time: "1:00 PM - 4:00 PM",
                        },
                        {
                          id: 5,
                          title: "Final Exam",
                          type: "Exam",
                          date: "2023-06-10",
                          time: "9:00 AM - 12:00 PM",
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Button
                              key="edit"
                              type="text"
                              icon={<EditOutlined />}
                            />,
                            <Button
                              key="delete"
                              type="text"
                              danger
                              icon={<DeleteOutlined />}
                            />,
                          ]}
                        >
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                icon={<CalendarOutlined />}
                                style={{ backgroundColor: "#0096C7" }}
                              />
                            }
                            title={item.title}
                            description={
                              <Space>
                                <Tag
                                  color={
                                    item.type === "Lecture"
                                      ? "#FF7A00"
                                      : item.type === "Assignment"
                                      ? "#00A878"
                                      : item.type === "Exam"
                                      ? "#FF5252"
                                      : "#0096C7"
                                  }
                                >
                                  {item.type}
                                </Tag>
                                <span>{item.date}</span>
                                <span>•</span>
                                <span>{item.time}</span>
                              </Space>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                ),
              },
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default CourseManagement;