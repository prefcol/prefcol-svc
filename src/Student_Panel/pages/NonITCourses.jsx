// src/Student_Panel/pages/NonITCourses.jsx
"use client";

import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Space,
  Tag,
  Input,
  Select,
  Spin,
  Empty,
  Pagination,
  Divider,
  Avatar,
  Badge,
  message,
  Modal,
  Statistic,
  Tabs,
  Progress,
  Form,
} from "antd";
import {
  SearchOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  HeartFilled,
  BookOutlined,
  TeamOutlined,
  StarOutlined,
  DashboardOutlined,
  UpOutlined,
  DownOutlined,
  CheckCircleOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const TEAL_900 = "#004d4d";
const WHITE = "#ffffff";

async function submitContactForm(formData) {
  try {
    const response = await fetch("https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/contactus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mailId: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        mobileNumber: formData.phone,
        message: formData.message,
      }),
    });
    if (!response.ok) throw new Error("Failed to submit form");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export default function NonITCourses({ windowWidth, userData = {} }) {
  const { courses, wishlist, enquiries = [], dispatch, enrolledCourses } = useGlobalStore();

  // Filter ONLY Non-IT courses
  const nonItCourses = useMemo(() => {
  return courses.filter(course => course.category === "Non-IT");
}, [courses]);

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterLevel, setFilterLevel] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [form] = Form.useForm();
const navigate = useNavigate();
 const [isUltraWide, setIsUltraWide] = useState(false);
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsUltraWide(window.innerWidth > 1920);
    };
     handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    filterAndSortCourses();
  }, [nonItCourses, searchTerm, sortBy, filterCategory, filterLevel]);

  const filterAndSortCourses = () => {
    let result = [...nonItCourses];

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q) ||
        c.subcategory.toLowerCase().includes(q)
      );
    }

    if (filterCategory !== "all") {
      result = result.filter(c => c.subcategory === filterCategory);
    }

    if (filterLevel !== "all") {
      result = result.filter(c => c.level === filterLevel);
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => b.enrollments - a.enrollments);
    }

    setFilteredCourses(result);
    setCurrentPage(1);
  };

  const toggleWishlist = (courseId, e) => {
    if (e) e.stopPropagation();
    dispatch({ type: "TOGGLE_WISHLIST", courseId });
    message.success(wishlist.includes(courseId) ? "Removed from wishlist" : "Added to wishlist");
  };

  const openContactModal = (course, e) => {
  if (e) e.stopPropagation();
  setSelectedCourse(course);
  const enquiryMessage = `I'm interested in the "${course.title}" course priced at ₹${course.discountPrice}. Please provide more information.`;
  const newFormData = {
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    message: enquiryMessage,
    courseId: course.id, // ✅ ADD THIS
  };
  setFormData(newFormData);
  form.setFieldsValue(newFormData); // ✅ sync with Ant Form
  setContactModalVisible(true);
};

const handleSubmit = async () => {
  try {
    const values = await form.validateFields(); // ✅ get fresh values
    setIsSubmitting(true);

    await submitContactForm(values);

    // Dispatch enquiry
    if (selectedCourse?.id) {
      dispatch({ 
        type: "ENQUIRE_COURSE", 
        courseId: selectedCourse.id 
      });
    }

    message.success("Thank you! We'll contact you soon.");
    setTimeout(() => setContactModalVisible(false), 2000);
  } catch (error) {
    message.error(error.message || "Submission failed");
  } finally {
    setIsSubmitting(false);
  }
};

  const paginatedCourses = useMemo(() => {
  return filteredCourses.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}, [filteredCourses, currentPage, pageSize]);

  const renderCourseCard = (course,navigate) => {
  const isInWishlist = wishlist.includes(course.id);
  const hasEnquired = enquiries.some(enq => enq.courseId === course.id);
  const isEnrolled = enrolledCourses.includes(course.id); // ✅ NEW: check enrollment
  const discountPercentage = Math.round((1 - course.discountPrice / course.price) * 100);

  return (
    <Card
     
      hoverable
      cover={
        <div style={{ position: "relative" }}>
          <img
            alt={course.title}
            src={course.thumbnail}
            style={{ height: isMobile ? 200 : isUltraWide ? 400 : 300, objectFit: "cover", width: "100%" }}
          />
          <Button
            type="text"
            icon={isInWishlist ? <HeartFilled style={{ color: "#ff4d4f" }} /> : <HeartOutlined />}
            onClick={(e) => toggleWishlist(course.id, e)}
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              width: 36,
              height: 36,
            }}
          />
          {course.bestseller && <Badge.Ribbon text="Bestseller" color="#ff6b00" />}
          {discountPercentage >= 30 && (
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                background: "linear-gradient(45deg, #ff4d4f, #ff7875)",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {discountPercentage}% OFF
            </div>
          )}
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* ✅ Priority: Show Enrolled first, then Enquired */}
        {isEnrolled ? (
          <Tag color="success" style={{ marginBottom: 8, alignSelf: 'flex-start' }}>
            <CheckCircleOutlined /> Enrolled
          </Tag>
        ) : hasEnquired ? (
          <Tag color="processing" style={{ marginBottom: 8, alignSelf: 'flex-start' }}>
            <MessageOutlined /> Already Enquired
          </Tag>
        ) : null}

        <div style={{ marginBottom: 8, display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Tag color="blue">{course.subcategory}</Tag>
          <Tag color="purple">{course.level}</Tag>
        </div>
        <Title level={4} style={{ marginTop: 0, marginBottom: 8, fontSize: "clamp(14px, 2vw, 18px)" }}>
          {course.title}
        </Title>
        <Paragraph ellipsis={{ rows: 2 }} style={{ flexGrow: 1 }}>
          {course.description}
        </Paragraph>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
          <ClockCircleOutlined style={{ marginRight: 4 }} />
          <Text>{course.duration}</Text>
          <Divider type="vertical" />
          <BookOutlined style={{ marginRight: 4 }} />
          <Text>{course.totalLessons} lessons</Text>
        </div>
        <Divider style={{ margin: "12px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <Text delete={course.discountPrice < course.price}>₹{course.price.toFixed(2)}</Text>
            {course.discountPrice < course.price && (
              <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 8 }}>
                ₹{course.discountPrice.toFixed(2)}
              </Text>
            )}
          </div>

          {/* ✅ BUTTON LOGIC: Enrolled > Enquired > Default */}
          {isEnrolled ? (
            <>

            <Button
              onClick={() => navigate("/Student-portal/courses")}
              type="primary"
              shape="round"
     // ✅ Redirect to enrolled courses list
              style={{
                backgroundColor: "#52c41a",
                borderColor: "#52c41a",
                color: "white",
              }}
            >
              Go to my Courses
            </Button>
            <Button type="default" icon={<BookOutlined />} onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)} key="details" style={{
              margin: 8,
              backgroundColor: TEAL_900,
              borderColor: TEAL_900,
              color: WHITE,
            }}>
              Syllabus
            </Button></>
          ) : hasEnquired ? (
            <>
            <Button
              type="default"
              shape="round"
              disabled
              style={{
                backgroundColor: "#f5f5f5",
                borderColor: "#d9d9d9",
                color: "#bfbfbf",
                cursor: "not-allowed",
              }}
            >
              Already Enquired
            </Button>
            <Button type="default" icon={<BookOutlined />} onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)} key="details" style={{
              margin: 8,
              backgroundColor: TEAL_900,  
              borderColor: TEAL_900,
              color: WHITE,
            }}>
              Syllabus
            </Button></>
          ) : (
            <>
            <Button
              type="primary"
              shape="round"
              onClick={(e) => openContactModal(course, e)}
              style={{
                backgroundColor: "#004d4d",
                borderColor: "#004d4d",
                color: "white",
              }}
            >
              Enquire Now
            </Button>
            <Button type="default" icon={<BookOutlined />} onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)} key="details" style={{
              margin: 8,
              backgroundColor: TEAL_900,  
              borderColor: TEAL_900,
              color: WHITE,
            }}>
              Syllabus
            </Button>
          </> )}
        </div>
      </div>
    </Card>
  );
};

  return (
    <div style={{ padding: "24px 0" }}>
      {/* Hero */}
      <div
        style={{
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 24,
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            // backgroundImage: "linear-gradient(to right, rgba(25, 52, 65, 0.9), rgba(0, 21, 40, 0.7)), url('https://via.placeholder.com/1200x400')",
            // backgroundSize: "cover",
            backgroundColor: TEAL_900,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: isMobile ? "40px 20px" : "64px 40px",
            color: WHITE,
            
          }}
        >
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} lg={14}>
              <Title level={1} style={{ color: "#fff", marginBottom: 16 }}>
                Master Essential Non-IT Skills
              </Title>
              <Title level={4} style={{ color: "#fff", opacity: 0.9, marginBottom: 24 }}>
                Learn from experienced professionals and gain real-world expertise
              </Title>
              <Space size="large" direction={isMobile ? "vertical" : "horizontal"}>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ background: WHITE, color: TEAL_900, fontWeight: "bold" }}
                >
                  Explore Non-IT Courses
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </div>

      {/* Filters */}
      <div id="courses-section" style={{ marginBottom: 24 }}>
        <Row align="middle" justify="space-between" gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col xs={24} md={8}>
            <Input
              placeholder="Search courses..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={24} md={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Select
                  placeholder="Subcategory"
                  value={filterCategory}
                  onChange={setFilterCategory}
                  style={{ width: "100%" }}
                >
                  <Option value="all">All Subcategories</Option>
                  {[...new Set(nonItCourses.map(c => c.subcategory))].map(cat => (
                    <Option key={cat} value={cat}>{cat}</Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} sm={12}>
                <Select
                  placeholder="Level"
                  value={filterLevel}
                  onChange={setFilterLevel}
                  style={{ width: "100%" }}
                >
                  <Option value="all">All Levels</Option>
                  <Option value="Beginner">Beginner</Option>
                  <Option value="Intermediate">Intermediate</Option>
                  <Option value="Advanced">Advanced</Option>
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Courses */}
        <div style={{ backgroundColor: "#fff", padding: 24, borderRadius: 12 }}>
          {filteredCourses.length > 0 ? (
            <>
              <Row gutter={[24, 24]}>
                {paginatedCourses.map(course => (
                  <Col xs={24} sm={12} lg={8} key={course.id}>
                    {renderCourseCard(course, navigate)}
                  </Col>
                ))}
              </Row>
              <Row justify="center" style={{ marginTop: 40 }}>
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={filteredCourses.length}
                  onChange={(page, size) => {
                    setCurrentPage(page);
                    setPageSize(size);
                  }}
                  showSizeChanger
                />
              </Row>
            </>
          ) : (
            <Empty description="No non-IT courses found" />
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={`Inquire About "${selectedCourse?.title}"`}
        open={contactModalVisible}
        onCancel={() => setContactModalVisible(false)}
        footer={null}
        centered
      >
        {submitSuccess ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <CheckCircleOutlined style={{ fontSize: 64, color: "#52c41a" }} />
            <Title level={4}>Thank You!</Title>
            <Paragraph>We'll contact you shortly.</Paragraph>
          </div>
        ) : (
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <PhoneInput country="in" inputStyle={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isSubmitting} style={{ width: "100%", backgroundColor: "#004d4d" }}>
                Submit Enquiry
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}