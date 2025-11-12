

"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Card,
  Tag,
  Typography,
  Badge,
  List,
  Modal,
  Button,
  Space,
  Divider,
  Statistic,
  Row,
  Col,
  Empty,
  Select,
  Input,
  Form,
  DatePicker,
  Radio,
  message,
} from "antd";
import {
  ClockCircleOutlined,
  FileTextOutlined,
  BookOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PlusOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { Option } = Select;
const { confirm } = Modal;

// Mock events — replace with real API data later
const initialEvents = [
  {
    id: "evt-1",
    title: "Biology Lab Report Due",
    type: "assignment",
    date: "2023-07-15",
    description: "Submit your lab report on cell structure.",
    courseId: "course-1",
    courseName: "Introduction to Biology",
    color: "#FF7A00",
  },
  {
    id: "evt-2",
    title: "Math Problem Set Due",
    type: "assignment",
    date: "2023-07-10",
    description: "Complete problems 1–20 from Chapter 5.",
    courseId: "course-2",
    courseName: "Advanced Mathematics",
    color: "#FF7A00",
  },
  {
    id: "evt-3",
    title: "World History Course Starts",
    type: "course",
    date: "2023-07-10",
    description: "First lecture on Industrial Revolution.",
    courseId: "course-3",
    courseName: "World History",
    color: "#0096C7",
  },
  {
    id: "evt-4",
    title: "Mid-term Exam - English Lit",
    type: "exam",
    date: "2023-07-20",
    description: "Covering Chapters 1–6 of To Kill a Mockingbird.",
    courseId: "course-4",
    courseName: "English Literature",
    color: "#FF5252",
  },
  {
    id: "evt-5",
    title: "Chemistry Lab Submission",
    type: "assignment",
    date: "2023-07-05",
    description: "Upload your lab documentation.",
    courseId: "course-5",
    courseName: "Chemistry Fundamentals",
    color: "#FF7A00",
  },
  {
    id: "evt-6",
    title: "Parent-Teacher Meeting",
    type: "meeting",
    date: "2023-07-12",
    description: "Discuss student progress with parents.",
    color: "#8884d8",
  },
  {
    id: "evt-7",
    title: "Final Project Deadline",
    type: "assignment",
    date: "2023-07-25",
    description: "Submit group project on renewable energy.",
    courseId: "course-1",
    courseName: "Introduction to Biology",
    color: "#FF7A00",
  },
];

const getEventTypeConfig = (type) => {
  const config = {
    assignment: { icon: <FileTextOutlined />, color: "#FF7A00", label: "Assignment" },
    course: { icon: <BookOutlined />, color: "#0096C7", label: "Course" },
    exam: { icon: <CloseCircleOutlined />, color: "#FF5252", label: "Exam" },
    meeting: { icon: <TeamOutlined />, color: "#8884d8", label: "Meeting" },
  };
  return config[type] || { icon: <ClockCircleOutlined />, color: "#666", label: "Event" };
};

const CalendarPage = ({ isMobile }) => {
  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // Apply filters
  useEffect(() => {
    let result = events;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description?.toLowerCase().includes(q) ||
          e.courseName?.toLowerCase().includes(q)
      );
    }
    if (filterType) {
      result = result.filter((e) => e.type === filterType);
    }
    setFilteredEvents(result);
  }, [searchQuery, filterType, events]);

  // Load events for selected date
  useEffect(() => {
    const dateStr = selectedDate.format("YYYY-MM-DD");
    const dayEvents = filteredEvents.filter((e) => e.date === dateStr);
    setSelectedEvents(dayEvents);
  }, [selectedDate, filteredEvents]);

  const handleDateSelect = (date) => {
    setSelectedDate(dayjs(date));
    setIsModalVisible(true);
  };

  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const dayEvents = filteredEvents.filter((e) => e.date === dateStr);
    if (dayEvents.length === 0) return null;

    return (
      <div style={{ marginTop: 4, paddingLeft: 4 }}>
        {dayEvents.slice(0, 3).map((event) => (
          <Badge
            key={event.id}
            color={getEventTypeConfig(event.type).color}
            style={{ display: "block", marginBottom: 2, height: 10 }}
            title={event.title}
          />
        ))}
        {dayEvents.length > 3 && (
          <Text type="secondary" style={{ fontSize: 10, display: "block" }}>
            +{dayEvents.length - 3} more
          </Text>
        )}
      </div>
    );
  };

  const handleAddEvent = async (values) => {
    try {
      const newEvent = {
        id: `evt-${Date.now()}`,
        title: values.title,
        description: values.description,
        type: values.type,
        date: values.date.format("YYYY-MM-DD"),
        courseId: values.courseId || null,
        courseName: values.courseId ? "Custom Course" : null,
        ...getEventTypeConfig(values.type),
      };
      setEvents((prev) => [...prev, newEvent]);
      setIsAddModalVisible(false);
      form.resetFields();
      messageApi.success("Event added successfully!");
    } catch (error) {
      messageApi.error("Failed to add event");
    }
  };

  const handleDeleteEvent = (event) => {
    confirm({
      title: `Delete "${event.title}"?`,
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        setEvents((prev) => prev.filter((e) => e.id !== event.id));
        messageApi.success("Event deleted");
      },
    });
  };

  return (
    <>
      {contextHolder}

      {/* Stats Summary */}
      <Card bordered={false} bodyStyle={{ padding: isMobile ? 12 : 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={6}>
            <Statistic
              title="Total Events"
              value={events.length}
              prefix={<ClockCircleOutlined style={{ color: "#0096C7" }} />}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Statistic
              title="Assignments"
              value={events.filter((e) => e.type === "assignment").length}
              prefix={<FileTextOutlined style={{ color: "#FF7A00" }} />}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Statistic
              title="Exams"
              value={events.filter((e) => e.type === "exam").length}
              prefix={<CloseCircleOutlined style={{ color: "#FF5252" }} />}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Statistic
              title="Meetings"
              value={events.filter((e) => e.type === "meeting").length}
              prefix={<TeamOutlined style={{ color: "#8884d8" }} />}
            />
          </Col>
        </Row>
      </Card>

      <Divider style={{ margin: isMobile ? "12px 0" : "16px 0" }} />

      {/* Search & Filters */}
      <Space
        direction={isMobile ? "vertical" : "horizontal"}
        size="middle"
        style={{ width: "100%", marginBottom: 16, justifyContent: "space-between" }}
      >
        <Space.Compact style={{ width: isMobile ? "100%" : 300 }}>
          <Input
            placeholder="Search events..."
            prefix={<SearchOutlined />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            allowClear
          />
        </Space.Compact>

        <Space>
          <Select
            placeholder="Filter by type"
            style={{ width: isMobile ? 140 : 160 }}
            onChange={setFilterType}
            value={filterType || undefined}
            allowClear
          >
            <Option value="assignment">Assignments</Option>
            <Option value="exam">Exams</Option>
            <Option value="course">Courses</Option>
            <Option value="meeting">Meetings</Option>
          </Select>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsAddModalVisible(true)}>
            {isMobile ? "Add" : "Add Event"}
          </Button>
        </Space>
      </Space>

      {/* Calendar */}
      <Card bordered={false}>
        <Calendar
          fullscreen={!isMobile}
          value={selectedDate}
          onSelect={handleDateSelect}
          dateCellRender={dateCellRender}
          headerRender={({ value, onChange }) => {
            if (isMobile) {
              return (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ textAlign: 'center', marginBottom: 12 }}>
                    <Title level={5} style={{ margin: 0, fontSize: 18 }}>
                      {value.format("MMMM YYYY")}
                    </Title>
                  </div>
                  <Space direction="vertical" style={{ width: '100%' }} size={8}>
                    <Button
                      block
                      size="middle"
                      onClick={() => onChange(value.subtract(1, 'month'))}
                    >
                      Previous Month
                    </Button>
                    <Button
                      block
                      size="middle"
                      type="default"
                      onClick={() => onChange(dayjs())}
                    >
                      Today
                    </Button>
                    <Button
                      block
                      size="middle"
                      onClick={() => onChange(value.add(1, 'month'))}
                    >
                      Next Month
                    </Button>
                  </Space>
                </div>
              );
            }

            // Desktop layout
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 12px 16px",
                }}
              >
                <Title level={4} style={{ margin: 0 }}>
                  {value.format("MMMM YYYY")}
                </Title>
                <Space>
                  <Button size="small" onClick={() => onChange(value.subtract(1, "month"))}>
                    Prev
                  </Button>
                  <Button size="small" onClick={() => onChange(dayjs())}>
                    Today
                  </Button>
                  <Button size="small" onClick={() => onChange(value.add(1, "month"))}>
                    Next
                  </Button>
                </Space>
              </div>
            );
          }}
          style={{
            borderRadius: 8,
            border: "1px solid #f0f0f0",
            padding: isMobile ? 8 : 16,
          }}
        />
      </Card>

      {/* Event Detail Modal */}
      <Modal
        title={
          <div>
            Events on{" "}
            <Text strong>{selectedDate.format("dddd, MMMM D, YYYY")}</Text>
          </div>
        }
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 600}
        centered
      >
        {selectedEvents.length > 0 ? (
          <List
            dataSource={selectedEvents}
            renderItem={(event) => {
              const config = getEventTypeConfig(event.type);
              return (
                <List.Item
                  key={event.id}
                  actions={[
                    <Button
                      key="delete"
                      danger
                      type="text"
                      size="small"
                      onClick={() => handleDeleteEvent(event)}
                    >
                      Remove
                    </Button>,
                  ]}
                  style={{ padding: "12px 0" }}
                >
                  <List.Item.Meta
                    avatar={
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          backgroundColor: config.color + "20",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: config.color,
                        }}
                      >
                        {config.icon}
                      </div>
                    }
                    title={
                      <div>
                        {event.title}
                        <Tag color={config.color} style={{ marginLeft: 8, fontSize: 12 }}>
                          {config.label}
                        </Tag>
                      </div>
                    }
                    description={
                      <div style={{ marginTop: 6 }}>
                        <Text type="secondary" style={{ fontSize: 13 }}>
                          {event.description}
                        </Text>
                        {event.courseName && (
                          <div style={{ marginTop: 4 }}>
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              Course: <Text strong>{event.courseName}</Text>
                            </Text>
                          </div>
                        )}
                      </div>
                    }
                  />
                </List.Item>
              );
            }}
          />
        ) : (
          <Empty
            description="No events scheduled for this day"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </Modal>

      {/* Add Event Modal */}
      <Modal
        title="Add New Event"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 500}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleAddEvent}>
          <Form.Item name="title" label="Event Title" rules={[{ required: true }]}>
            <Input placeholder="e.g., Mid-term Exam" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Add details..." rows={3} />
          </Form.Item>

          <Form.Item name="type" label="Event Type" rules={[{ required: true }]}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="assignment">
                  <FileTextOutlined style={{ color: "#FF7A00", marginRight: 8 }} />
                  Assignment
                </Radio>
                <Radio value="exam">
                  <CloseCircleOutlined style={{ color: "#FF5252", marginRight: 8 }} />
                  Exam
                </Radio>
                <Radio value="course">
                  <BookOutlined style={{ color: "#0096C7", marginRight: 8 }} />
                  Course
                </Radio>
                <Radio value="meeting">
                  <TeamOutlined style={{ color: "#8884d8", marginRight: 8 }} />
                  Meeting
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button onClick={() => setIsAddModalVisible(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Add Event
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CalendarPage;