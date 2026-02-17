import { useState, useEffect } from "react";
import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Input,
  Avatar,
  Tabs,
  Space,
  Statistic,
  List,
  Upload,
  message,
  Divider,
  Badge,
  Modal,
  Tooltip,
  Progress,
  Select,
  Tag,
  Timeline,
  Spin,
  Alert,
  Drawer,
  Switch,
  Skeleton,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  EditOutlined,
  SaveOutlined,
  LockOutlined,
  CameraOutlined,
  TrophyOutlined,
  BookOutlined,
  CheckCircleOutlined,
  LinkedinOutlined,
  GithubOutlined,
  GlobalOutlined,
  IdcardOutlined,
  CalendarOutlined,
  TeamOutlined,
  CodeOutlined,
  FireOutlined,
  RocketOutlined,
  AimOutlined,
  ReloadOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../Contexts/AuthContext";

// CSS Animations
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }

  .profile-header {
    animation: fadeInUp 0.8s ease-out;
  }

  .profile-tab-content {
    animation: fadeInUp 0.6s ease-out;
  }

  .profile-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .profile-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
  }
`;

// Add styles to document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = animationStyles;
  document.head.appendChild(style);
}

// API Service Layer
const ProfileAPI = {
  // Simulate API calls with localStorage - Optimized for faster response
  fetchProfile: async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cached = localStorage.getItem(`profile_${userId}`);
        resolve(cached ? JSON.parse(cached) : null);
      }, 100); // Reduced from 500ms
    });
  },

  updateProfile: async (userId, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          localStorage.setItem(`profile_${userId}`, JSON.stringify(data));
          resolve({ success: true, data });
        } catch (error) {
          reject(error);
        }
      }, 150); // Reduced from 800ms
    });
  },

  changePassword: async (userId, passwords) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(`pwd_${userId}`, JSON.stringify(passwords));
        resolve({ success: true, message: "Password changed successfully" });
      }, 200); // Reduced from 1000ms
    });
  },

  downloadCertificate: async (certId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, url: `/certificates/${certId}.pdf` });
      }, 150); // Reduced from 500ms
    });
  },
};

// Skeleton Loading Components for better UX
const PersonalInfoSkeleton = () => (
  <Card style={{ borderRadius: 12, border: "none" }}>
    <Row gutter={32}>
      <Col xs={24} sm={6} style={{ textAlign: "center" }}>
        <Skeleton.Avatar size={120} active />
        <Skeleton paragraph={{ rows: 2 }} style={{ marginTop: 16 }} />
      </Col>
      <Col xs={24} sm={18}>
        <Skeleton paragraph={{ rows: 4 }} active />
      </Col>
    </Row>
  </Card>
);

const TabContentSkeleton = () => (
  <Card style={{ borderRadius: 12, border: "none" }}>
    <Skeleton active paragraph={{ rows: 6 }} />
  </Card>
);

// Default profile structure
const DEFAULT_PROFILE = {
  fullName: "Rohit Kumar",
  studentId: "INS-2026-0892",
  email: "rohit.kumar@institute.edu",
  mobileNumber: "+91 9876543210",
  dateOfBirth: "12 March 2004",
  gender: "Male",
  courseCategory: "IT",
  courseName: "Full Stack Web Development",
  batch: "2025–2026",
  modeOfLearning: "Online",
  enrollmentStatus: "Active",
  courseProgress: 65,
  modulesCompleted: 13,
  modulesTotal: 20,
  attendance: 90,
  assessmentsCompleted: 8,
  lastLogin: "5 February 2026",
  technicalSkills: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Git"],
  professionalSkills: ["Communication", "Teamwork", "Presentation Skills", "Time Management"],
  areaOfInterest: "Software Development",
  careerGoal: "To gain practical skills and secure a job in my chosen field",
  about: "I am a motivated learner enrolled in an IT program, focused on developing practical skills and industry knowledge. I am eager to apply what I learn in real-world projects and professional environments.",
  certifications: [
    { id: 1, title: "Completed Institute Orientation Program", date: "January 2025" },
    { id: 2, title: "Participated in Web Development Workshop", date: "February 2025" },
    { id: 3, title: "Earned Course Completion Certificate", date: "February 2026" },
  ],
  preferredLanguage: "English",
  notificationSettings: ["Email", "In-App"],
  themePreference: "Light Mode",
};

const Profile = ({ windowWidth }) => {
  const { user } = useAuth();
  const [profileForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [editingMode, setEditingMode] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const [profileData, setProfileData] = useState(DEFAULT_PROFILE);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const isMobile = windowWidth < 768;
  const userId = user?.id || "student_001";

  // Load profile on mount
  useEffect(() => {
    loadProfileData();
  }, [userId]);

  const loadProfileData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await ProfileAPI.fetchProfile(userId);
      if (data) {
        setProfileData(data);
        profileForm.setFieldsValue(data);
      } else {
        const mergedData = {
          ...DEFAULT_PROFILE,
          fullName: user?.userName || DEFAULT_PROFILE.fullName,
          email: user?.mailId || DEFAULT_PROFILE.email,
        };
        setProfileData(mergedData);
        profileForm.setFieldsValue(mergedData);
      }
    } catch (err) {
      setError("⚠️ Couldn't load profile. Try refreshing or contact support.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadProfileData();
    message.success("Profile refreshed successfully!");
    setRefreshing(false);
  };

  // Extract initials from user name
  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.substring(0, 2).toUpperCase();
  };

  // Handle profile update
  const handleUpdateProfile = async (values) => {
    setSaveLoading(true);
    try {
      const updatedProfile = { ...profileData, ...values };
      await ProfileAPI.updateProfile(userId, updatedProfile);
      setProfileData(updatedProfile);
      message.success({ content: "✅ Profile updated successfully!", duration: 2 });
      setEditingMode(false);
    } catch (error) {
      message.error("⚠️ Couldn't update profile. Please check your connection and try again.");
      console.error(error);
    } finally {
      setSaveLoading(false);
    }
  };

  // Handle password change
  const handleChangePassword = async (values) => {
    setSaveLoading(true);
    try {
      if (values.newPassword !== values.confirmPassword) {
        message.error("Passwords do not match!");
        setSaveLoading(false);
        return;
      }
      await ProfileAPI.changePassword(userId, {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      message.success("✅ Password changed successfully!");
      passwordForm.resetFields();
      setPasswordModalVisible(false);
    } catch (error) {
      message.error("⚠️ Couldn't change password. Please try again.");
      console.error(error);
    } finally {
      setSaveLoading(false);
    }
  };

  // Handle certificate download
  const handleDownloadCertificate = async (certId) => {
    try {
      const result = await ProfileAPI.downloadCertificate(certId);
      if (result.success) {
        message.success("Certificate downloaded successfully!");
      }
    } catch (error) {
      message.error("⚠️ Couldn't download certificate. Please try again.");
    }
  };

  // Update notification settings
  const handleNotificationChange = async (setting) => {
    const newSettings = profileData.notificationSettings.includes(setting)
      ? profileData.notificationSettings.filter((s) => s !== setting)
      : [...profileData.notificationSettings, setting];

    const updatedProfile = { ...profileData, notificationSettings: newSettings };
    setProfileData(updatedProfile);
    await ProfileAPI.updateProfile(userId, updatedProfile);
    message.success("Notification settings updated!");
  };

  // Update theme preference
  const handleThemeChange = async (checked) => {
    const newTheme = checked ? "Dark Mode" : "Light Mode";
    const updatedProfile = { ...profileData, themePreference: newTheme };
    setProfileData(updatedProfile);
    await ProfileAPI.updateProfile(userId, updatedProfile);
    message.success(`✅ Theme changed to ${newTheme}!`);
  };

  if (loading) {
    return (
      <div style={{ padding: "24px" }}>
        <PersonalInfoSkeleton />
        <div style={{ marginTop: 24 }}>
          <TabContentSkeleton />
        </div>
      </div>
    );
  }

  // Personal Information Tab
  const PersonalInfoTab = React.memo(() => (
    <Card 
      style={{ 
        borderRadius: 12, 
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        overflow: "hidden",
        border: "none",
      }}
      className="profile-card"
    >
      <Row gutter={32} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={6} style={{ textAlign: "center" }}>
          <div
            style={{
              animation: "bounceIn 0.8s ease-out",
              display: "inline-block",
            }}
            onMouseEnter={() => setHoveredCard("avatar")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Badge count={<CheckCircleOutlined style={{ color: "#16A34A", fontSize: 18 }} />}>
              <Avatar
                size={120}
                style={{
                  backgroundColor: "#2563EB",
                  fontSize: 48,
                  fontWeight: 600,
                  border: "3px solid #2563EB",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredCard === "avatar" ? "scale(1.1) rotate(5deg)" : "scale(1)",
                  boxShadow: hoveredCard === "avatar" ? "0 8px 20px rgba(37, 99, 235, 0.3)" : "none",
                  cursor: "pointer",
                }}
              >
                {getInitials(profileData.fullName)}
              </Avatar>
            </Badge>
          </div>
          <Button
            type="text"
            icon={<CameraOutlined />}
            size="small"
            style={{ 
              marginTop: 12, 
              color: "#2563EB",
              transition: "all 0.3s ease",
              fontSize: 14,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.color = "#1e40af";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.color = "#2563EB";
            }}
          >
            Change Photo
          </Button>
        </Col>
        <Col xs={24} sm={18}>
          <h2 
            style={{ 
              marginTop: 0, 
              color: "#1F2933", 
              fontSize: 28,
              animation: "slideInRight 0.6s ease-out",
            }}
          >
            {profileData.fullName}
          </h2>
          <Tag 
            color="blue" 
            style={{ 
              marginBottom: 16,
              animation: "fadeInScale 0.6s ease-out 0.1s both",
              fontSize: 12,
            }}
          >
            <CheckCircleOutlined /> Verified Student
          </Tag>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {[
              { label: "Student ID", value: profileData.studentId },
              { label: "Email", value: profileData.email },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.2 + idx * 0.1}s both`,
                  padding: "8px 12px",
                  borderRadius: 6,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(37, 99, 235, 0.08)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <small style={{ color: "#6B7280" }}>{item.label}</small>
                <p style={{ margin: "4px 0 0 0", color: "#1F2933", fontWeight: 500 }}>
                  {item.value}
                </p>
              </div>
             ))}
          </Space>
        </Col>
      </Row>

      <Divider />

      {editingMode ? (
        <div style={{ animation: "fadeInUp 0.4s ease-out" }}>
          <Form
            form={profileForm}
            layout="vertical"
            onFinish={handleUpdateProfile}
            initialValues={profileData}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item 
                  label={<Tooltip title="Your full legal name">Full Name</Tooltip>}
                  name="fullName" 
                  rules={[{ required: true, message: "Please enter your full name" }, { min: 3, message: "Name must be at least 3 characters" }]}
                >
                  <Input placeholder="John Doe" prefix={<UserOutlined />} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item 
                  label={<Tooltip title="Your date of birth">Date of Birth</Tooltip>}
                  name="dateOfBirth"
                >
                  <Input placeholder="12 March 2004" prefix={<CalendarOutlined />} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item 
                  label={<Tooltip title="Contact number for urgent matters">Mobile Number</Tooltip>}
                  name="mobileNumber"
                  rules={[{ pattern: /^[0-9\s\-\+()]{8,}$/, message: "Valid phone number required" }]}
                >
                  <Input placeholder="+91 9876543210" prefix={<PhoneOutlined />} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item 
                  label={<Tooltip title="Your gender (optional)">Gender</Tooltip>}
                  name="gender"
                >
                  <Select placeholder="Select your gender">
                    <Select.Option value="Male">👨 Male</Select.Option>
                    <Select.Option value="Female">👩 Female</Select.Option>
                    <Select.Option value="Other">🧑 Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item 
              label={<Tooltip title="Share a brief bio (max 500 chars)">About Me</Tooltip>}
              name="about"
              rules={[{ max: 500, message: "Maximum 500 characters allowed" }]}
            >
              <Input.TextArea rows={4} placeholder="Tell us about yourself..." maxLength={500} showCount />
            </Form.Item>

            <Space>
              <Button 
                type="primary" 
                htmlType="submit" 
                icon={<SaveOutlined />} 
                loading={loading}
                style={{ transition: "all 0.3s ease" }}
              >
                Save Changes
              </Button>
              <Button onClick={() => setEditingMode(false)}>Cancel</Button>
            </Space>
          </Form>
        </div>
      ) : (
        <>
          <Row gutter={32}>
            <Col xs={24} sm={12}>
              <h4 style={{ color: "#1F2933", marginBottom: 12, animation: "slideInRight 0.6s ease-out" }}>
                Personal Details
              </h4>
              <Space direction="vertical" size="large" style={{ width: "100%" }}>
                {[
                  { label: "Mobile Number", icon: PhoneOutlined, value: profileData.mobileNumber },
                  { label: "Date of Birth", icon: CalendarOutlined, value: profileData.dateOfBirth },
                  { label: "Gender", icon: UserOutlined, value: profileData.gender },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${0.3 + idx * 0.1}s both`,
                      padding: "10px 12px",
                      borderRadius: 6,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(37, 99, 235, 0.08)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <small style={{ color: "#6B7280" }}>{item.label}</small>
                    <p style={{ margin: "4px 0 0 0", color: "#1F2933" }}>
                      <item.icon style={{ marginRight: 8, color: "#2563EB" }} />
                      {item.value}
                    </p>
                  </div>
                ))}
              </Space>
            </Col>
            <Col xs={24} sm={12}>
              <h4 style={{ color: "#1F2933", marginBottom: 12, animation: "slideInRight 0.6s ease-out" }}>
                About Me
              </h4>
              <p 
                style={{ 
                  color: "#6B7280", 
                  lineHeight: 1.6,
                  animation: "fadeInUp 0.6s ease-out 0.3s both",
                  padding: "12px",
                  borderLeft: "4px solid #2563EB",
                  borderRadius: 4,
                }}
              >
                {profileData.about}
              </p>
            </Col>
          </Row>
          <div style={{ marginTop: 24, animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
            <Button 
              type="primary" 
              icon={<EditOutlined />} 
              onClick={() => setEditingMode(true)}
              style={{ transition: "all 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Edit Profile
            </Button>
          </div>
        </>
      )}
    </Card>
  ));

  // Certifications Tab
  const CourseInfoTab = React.memo(() => (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Card 
          style={{ 
            borderRadius: 12, 
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
            height: "100%",
            overflow: "hidden",
            border: "none",
            animation: "fadeInUp 0.6s ease-out",
          }}
          className="profile-card"
          onMouseEnter={() => setHoveredCard("course")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h4 style={{ color: "#1F2933", marginBottom: 16, transition: "all 0.3s ease", transform: hoveredCard === "course" ? "translateX(4px)" : "translateX(0)" }}>
            <BookOutlined style={{ marginRight: 8, color: "#2563EB" }} />
            Course Details
          </h4>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            {[
              { label: "Course Category", type: "tag", value: profileData.courseCategory, color: "blue" },
              { label: "Course Name", type: "text", value: profileData.courseName },
              { label: "Batch", type: "text", value: profileData.batch },
              { label: "Mode of Learning", type: "tag", value: profileData.modeOfLearning, color: "green" },
              { label: "Enrollment Status", type: "tag", value: profileData.enrollmentStatus, color: "success" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 + idx * 0.08}s both`,
                }}
              >
                <small style={{ color: "#6B7280" }}>{item.label}</small>
                {item.type === "tag" ? (
                  <div style={{ marginTop: 4 }}>
                    <Tag 
                      color={item.color}
                      style={{ 
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {item.value}
                    </Tag>
                  </div>
                ) : (
                  <p style={{ margin: "4px 0 0 0", color: "#1F2933", fontWeight: 500 }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </Space>
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card 
          style={{ 
            borderRadius: 12, 
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
            height: "100%",
            overflow: "hidden",
            border: "none",
            animation: "fadeInUp 0.6s ease-out 0.1s both",
          }}
          className="profile-card"
          onMouseEnter={() => setHoveredCard("dates")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h4 style={{ color: "#1F2933", marginBottom: 16, transition: "all 0.3s ease", transform: hoveredCard === "dates" ? "translateX(4px)" : "translateX(0)" }}>
            <CalendarOutlined style={{ marginRight: 8, color: "#7C3AED" }} />
            Important Dates
          </h4>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            {[
              { label: "Enrollment Started", value: "January 2025" },
              { label: "Expected Completion", value: "December 2025" },
              { label: "Last Login", value: profileData.lastLogin },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 + idx * 0.08}s both`,
                  padding: "8px 12px",
                  borderRadius: 6,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(123, 58, 237, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <small style={{ color: "#6B7280" }}>{item.label}</small>
                <p style={{ margin: "4px 0 0 0", color: "#1F2933", fontWeight: 500 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </Space>
        </Card>
      </Col>
    </Row>
  ));

  // Learning Progress Tab
  const LearningProgressTab = React.memo(() => (
    <Card 
      style={{ 
        borderRadius: 12, 
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        overflow: "hidden",
        border: "none",
        animation: "fadeInUp 0.6s ease-out",
      }}
      className="profile-card"
    >
      <h3 style={{ color: "#1F2933", marginBottom: 24, animation: "slideInRight 0.6s ease-out" }}>📊 Detailed Progress</h3>
      
      <Row gutter={16} style={{ marginBottom: 32 }}>
        {[
          { 
            title: "Course Progress", 
            value: profileData.courseProgress, 
            suffix: "%",
            icon: BookOutlined,
            color: "#2563EB",
            delay: "0s",
          },
          { 
            title: "Modules Completed", 
            value: `${profileData.modulesCompleted}/${profileData.modulesTotal}`,
            icon: CheckCircleOutlined,
            color: "#16A34A",
            delay: "0.1s",
          },
          { 
            title: "Attendance", 
            value: profileData.attendance, 
            suffix: "%",
            icon: FireOutlined,
            color: "#7C3AED",
            delay: "0.2s",
          },
          { 
            title: "Assessments Done", 
            value: profileData.assessmentsCompleted,
            icon: TrophyOutlined,
            color: "#0EA5E9",
            delay: "0.3s",
          },
        ].map((stat, idx) => (
          <Col xs={24} sm={12} md={6} key={idx}>
            <Card 
              style={{ 
                borderRadius: 12, 
                textAlign: "center", 
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                overflow: "hidden",
                border: "none",
                animation: `fadeInScale 0.6s ease-out ${stat.delay} both`,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className="profile-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTop = `4px solid ${stat.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTop = "none";
              }}
            >
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={stat.suffix}
                prefix={<stat.icon style={{ marginRight: 8 }} />}
                valueStyle={{ color: stat.color, fontSize: 24 }}
              />
              {stat.title.includes("Progress") || stat.title.includes("Modules") || stat.title.includes("Attendance") ? (
                <Progress
                  percent={stat.title.includes("Modules") ? (profileData.modulesCompleted / profileData.modulesTotal) * 100 : (stat.title.includes("Attendance") ? profileData.attendance : profileData.courseProgress)}
                  strokeColor={stat.color}
                  size="small"
                  style={{ marginTop: 12 }}
                  format={(percent) => (
                    <span style={{ color: stat.color, fontWeight: 600 }}>{Math.round(percent)}%</span>
                  )}
                />
              ) : null}
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <h4 style={{ color: "#1F2933", marginBottom: 16, animation: "slideInRight 0.6s ease-out 0.2s both" }}>
        Recent Activity
      </h4>
      <Timeline
        items={[
          {
            children: <p style={{ color: "#6B7280", animation: "fadeInUp 0.6s ease-out 0.3s both" }}>Completed Module 13: Advanced React Concepts</p>,
            color: "#16A34A",
          },
          {
            children: <p style={{ color: "#6B7280", animation: "fadeInUp 0.6s ease-out 0.35s both" }}>Submitted Assessment 8: Final Project</p>,
            color: "#2563EB",
          },
          {
            children: <p style={{ color: "#6B7280", animation: "fadeInUp 0.6s ease-out 0.4s both" }}>Attended Workshop: Web Security Best Practices</p>,
            color: "#7C3AED",
          },
          {
            children: <p style={{ color: "#6B7280", animation: "fadeInUp 0.6s ease-out 0.45s both" }}>Completed Module 12: Database Design</p>,
            color: "#16A34A",
          },
        ]}
        style={{ marginTop: 16 }}
      />
    </Card>
  ));

  // Skills & Competencies Tab
  const SkillsTab = React.memo(() => (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Card 
          style={{ 
            borderRadius: 12, 
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
            height: "100%",
            overflow: "hidden",
            border: "none",
            animation: "fadeInUp 0.6s ease-out",
          }}
          className="profile-card"
        >
          <h4 style={{ color: "#1F2933", marginBottom: 16 }}>
            <CodeOutlined style={{ marginRight: 8, color: "#2563EB" }} />
            Technical Skills
          </h4>
          <Space wrap>
            {profileData.technicalSkills.map((skill, idx) => (
              <Tag 
                key={skill} 
                color="blue" 
                style={{ 
                  borderRadius: 6, 
                  padding: "6px 12px",
                  animation: `fadeInScale 0.5s ease-out ${0.1 + idx * 0.05}s both`,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(37, 99, 235, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {skill}
              </Tag>
            ))}
          </Space>
          <Button
            type="dashed"
            block
            style={{ 
              marginTop: 16, 
              borderColor: "#2563EB", 
              color: "#2563EB",
              transition: "all 0.3s ease",
              animation: "fadeInUp 0.6s ease-out 0.3s both",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(37, 99, 235, 0.04)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            + Add More Skills
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card 
          style={{ 
            borderRadius: 12, 
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
            height: "100%",
            overflow: "hidden",
            border: "none",
            animation: "fadeInUp 0.6s ease-out 0.1s both",
          }}
          className="profile-card"
        >
          <h4 style={{ color: "#1F2933", marginBottom: 16 }}>
            <TeamOutlined style={{ marginRight: 8, color: "#16A34A" }} />
            Professional Skills
          </h4>
          <Space wrap>
            {profileData.professionalSkills.map((skill, idx) => (
              <Tag 
                key={skill} 
                color="green" 
                style={{ 
                  borderRadius: 6, 
                  padding: "6px 12px",
                  animation: `fadeInScale 0.5s ease-out ${0.15 + idx * 0.05}s both`,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(22, 163, 74, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {skill}
              </Tag>
            ))}
          </Space>
          <Button
            type="dashed"
            block
            style={{ 
              marginTop: 16, 
              borderColor: "#16A34A", 
              color: "#16A34A",
              transition: "all 0.3s ease",
              animation: "fadeInUp 0.6s ease-out 0.4s both",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(22, 163, 74, 0.04)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            + Add More Skills
          </Button>
        </Card>
      </Col>
    </Row>
  ));

  // Career & Goals Tab
  const CareerTab = React.memo(() => (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Card 
          style={{ 
            borderRadius: 12, 
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
            height: "100%",
            overflow: "hidden",
            border: "none",
            animation: "fadeInUp 0.6s ease-out",
          }}
          className="profile-card"
        >
          <h4 style={{ color: "#1F2933", marginBottom: 16 }}>
            <AimOutlined style={{ marginRight: 8, color: "#7C3AED" }} />
            Area of Interest
          </h4>
          <Tag 
            color="purple" 
            style={{ 
              fontSize: 14, 
              padding: "8px 16px", 
              borderRadius: 6,
              animation: "fadeInScale 0.6s ease-out 0.1s both",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {profileData.areaOfInterest}
          </Tag>
          <p style={{ 
            color: "#6B7280", 
            marginTop: 16,
            animation: "fadeInUp 0.6s ease-out 0.2s both",
          }}>
            Software Development, Web Development, Full Stack Engineering
          </p>
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card 
          style={{ 
            borderRadius: 12, 
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
            height: "100%",
            overflow: "hidden",
            border: "none",
            animation: "fadeInUp 0.6s ease-out 0.1s both",
          }}
          className="profile-card"
        >
          <h4 style={{ color: "#1F2933", marginBottom: 16 }}>
            <RocketOutlined style={{ marginRight: 8, color: "#FACC15" }} />
            Career Goal
          </h4>
          <p style={{ 
            color: "#6B7280", 
            lineHeight: 1.6,
            animation: "fadeInUp 0.6s ease-out 0.2s both",
            padding: "12px",
            borderLeft: "4px solid #FACC15",
            borderRadius: 4,
            backgroundColor: "rgba(250, 204, 21, 0.05)",
          }}>
            {profileData.careerGoal}
          </p>
          <Tag 
            color="gold" 
            style={{ 
              marginTop: 12,
              animation: "fadeInScale 0.6s ease-out 0.3s both",
            }}
          >
            Goal Priority: High
          </Tag>
        </Card>
      </Col>
    </Row>
  ));

  // Certifications & Activities Tab
  const CertificationsTab = React.memo(() => (
    <Card 
      style={{ 
        borderRadius: 12, 
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        overflow: "hidden",
        border: "none",
        animation: "fadeInUp 0.6s ease-out",
      }}
      className="profile-card"
    >
      <h4 style={{ color: "#1F2933", marginBottom: 16, animation: "slideInRight 0.6s ease-out" }}>
        <TrophyOutlined style={{ marginRight: 8, color: "#FACC15" }} />
        Achievements & Certifications
      </h4>
      <List
        dataSource={profileData.certifications}
        renderItem={(item, idx) => (
          <List.Item 
            style={{ 
              borderLeft: "4px solid #7C3AED", 
              paddingLeft: 16, 
              marginBottom: 16,
              animation: `fadeInUp 0.5s ease-out ${0.1 + idx * 0.1}s both`,
              transition: "all 0.3s ease",
              padding: "12px 12px 12px 16px",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(123, 58, 237, 0.04)";
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <List.Item.Meta
              avatar={<CheckCircleOutlined style={{ fontSize: 20, color: "#16A34A", animation: "pulse 2s ease-in-out infinite" }} />}
              title={<span style={{ color: "#1F2933", fontWeight: 500 }}>{item.title}</span>}
              description={<span style={{ color: "#6B7280" }}>Earned on {item.date}</span>}
            />
            <Button 
              type="text"
              icon={<DownloadOutlined />}
              onClick={() => handleDownloadCertificate(item.id)}
              style={{ color: "#2563EB" }}
            >
              Download
            </Button>
          </List.Item>
        )}
      />
      <Divider />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button 
          type="primary" 
          icon={<FireOutlined />}
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
        >
          View All Certificates
        </Button>
        <Button 
          icon={<DownloadOutlined />}
          style={{ animation: "fadeInUp 0.6s ease-out 0.45s both" }}
        >
          Download All
        </Button>
      </div>
    </Card>
  ));

  // Settings Tab
  const SettingsTab = React.memo(() => (
    <>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Card 
            style={{ 
              borderRadius: 12, 
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
              height: "100%",
              overflow: "hidden",
              border: "none",
              animation: "fadeInUp 0.6s ease-out",
            }}
            className="profile-card"
          >
            <h4 style={{ color: "#1F2933", marginBottom: 16 }}>
              <GlobalOutlined style={{ marginRight: 8, color: "#2563EB" }} />
              Portal Settings
            </h4>
            <Space direction="vertical" style={{ width: "100%" }}>
              <div style={{ animation: "fadeInUp 0.6s ease-out 0.1s both", padding: "10px 12px", borderRadius: 6 }}>
                <small style={{ color: "#6B7280" }}>Preferred Language</small>
                <Select 
                  value={profileData.preferredLanguage}
                  onChange={(lang) => {
                    const updated = { ...profileData, preferredLanguage: lang };
                    setProfileData(updated);
                    ProfileAPI.updateProfile(userId, updated);
                    message.success("Language updated!");
                  }}
                  style={{ width: "100%", marginTop: 8 }}
                >
                  <Select.Option value="English">🇬🇧 English</Select.Option>
                  <Select.Option value="Tamil">🇮🇳 Tamil</Select.Option>
                  <Select.Option value="Hindi">🇮🇳 Hindi</Select.Option>
                </Select>
              </div>

              <Divider />

              <div style={{ animation: "fadeInUp 0.6s ease-out 0.15s both", padding: "10px 12px", borderRadius: 6 }}>
                <small style={{ color: "#6B7280" }}>Theme Preference</small>
                <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "#1F2933" }}>
                    {profileData.themePreference === "Dark Mode" ? "🌙 Dark" : "☀️ Light"}
                  </span>
                  <Switch 
                    checked={profileData.themePreference === "Dark Mode"}
                    onChange={handleThemeChange}
                  />
                </div>
              </div>

              <Divider />

              <div style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
                <small style={{ color: "#6B7280", display: "block", marginBottom: 12 }}>Notification Settings</small>
                <Space direction="vertical" style={{ width: "100%" }}>
                  {["Email", "SMS", "In-App"].map((setting) => (
                    <div
                      key={setting}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 12px",
                        borderRadius: 6,
                        backgroundColor: "rgba(37, 99, 235, 0.04)",
                      }}
                    >
                      <span style={{ color: "#1F2933" }}>{setting}</span>
                      <Switch 
                        checked={profileData.notificationSettings.includes(setting)}
                        onChange={() => handleNotificationChange(setting)}
                      />
                    </div>
                  ))}
                </Space>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card 
            style={{ 
              borderRadius: 12, 
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
              height: "100%",
              overflow: "hidden",
              border: "none",
              animation: "fadeInUp 0.6s ease-out 0.1s both",
            }}
            className="profile-card"
          >
            <h4 style={{ color: "#1F2933", marginBottom: 16 }}>
              <LockOutlined style={{ marginRight: 8, color: "#DC2626" }} />
              Security
            </h4>
            <Space direction="vertical" style={{ width: "100%" }}>
              <div style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
                <p style={{ color: "#6B7280", marginBottom: 12 }}>
                  Manage your password and security settings to keep your account secure
                </p>
                <Button 
                  type="primary" 
                  danger
                  onClick={() => setPasswordModalVisible(true)}
                  icon={<LockOutlined />}
                  style={{ transition: "all 0.3s ease" }}
                >
                  Change Password
                </Button>
              </div>
              <Divider />
              <div style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
                <p style={{ color: "#6B7280", marginBottom: 12 }}>
                  Enable two-factor authentication for enhanced security
                </p>
                <Button 
                  style={{ transition: "all 0.3s ease" }}
                >
                  Enable 2FA
                </Button>
              </div>

              <Divider />

              <Alert 
                message="Last password change"
                description="You last changed your password 45 days ago"
                type="info"
                showIcon
                style={{ marginTop: 12 }}
              />
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Password Change Modal */}
      <Modal
        title="Change Password"
        open={passwordModalVisible}
        onCancel={() => setPasswordModalVisible(false)}
        footer={null}
        centered
      >
        <Form
          form={passwordForm}
          layout="vertical"
          onFinish={handleChangePassword}
        >
          <Form.Item
            label="Current Password"
            name="currentPassword"
            rules={[{ required: true, message: "Please enter your current password" }]}
          >
            <Input.Password placeholder="Enter your current password" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: "Please enter a new password" },
              { min: 8, message: "Password must be at least 8 characters" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Password must contain uppercase, lowercase, and numbers",
              },
            ]}
          >
            <Input.Password placeholder="Enter new password" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm new password" prefix={<LockOutlined />} />
          </Form.Item>

          <Space style={{ width: "100%" }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={saveLoading}
              icon={<SaveOutlined />}
              block
            >
              Update Password
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  ));

  const tabItems = [
    { key: "personal", label: "👤 Personal Info", children: <PersonalInfoTab /> },
    { key: "course", label: "🏫 Course Info", children: <CourseInfoTab /> },
    { key: "progress", label: "📊 Learning Progress", children: <LearningProgressTab /> },
    { key: "skills", label: "💻 Skills", children: <SkillsTab /> },
    { key: "career", label: "🎯 Career Goals", children: <CareerTab /> },
    { key: "certifications", label: "🏆 Achievements", children: <CertificationsTab /> },
    { key: "settings", label: "⚙️ Settings", children: <SettingsTab /> },
  ];

  // Quick Stats Section
  const QuickStats = () => (
    <Row gutter={16} style={{ marginBottom: 24 }}>
      {[
        { icon: "📚", label: "Course Progress", value: `${profileData.courseProgress}%`, color: "#2563EB" },
        { icon: "✅", label: "Modules Done", value: `${profileData.modulesCompleted}/${profileData.modulesTotal}`, color: "#16A34A" },
        { icon: "📍", label: "Attendance", value: `${profileData.attendance}%`, color: "#F59E0B" },
        { icon: "🏅", label: "Certifications", value: profileData.certifications.length, color: "#7C3AED" },
      ].map((stat, idx) => (
        <Col xs={12} sm={6} key={idx} style={{ animation: `fadeInUp 0.4s ease-out ${idx * 0.05}s both` }}>
          <Card 
            style={{
              textAlign: "center",
              borderRadius: 12,
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{stat.label}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div 
      style={{ 
        padding: isMobile ? 16 : 24,
        background: "linear-gradient(135deg, #F8FAFC 0%, #F0F4F8 100%)",
        minHeight: "100vh",
      }}
    >
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          closable
          onClose={() => setError(null)}
          style={{ marginBottom: 16, animation: "fadeInUp 0.3s ease-out" }}
        />
      )}

      <div 
        style={{ 
          marginBottom: 24,
          animation: "fadeInUp 0.8s ease-out",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 12,
        }}
        className="profile-header"
      >
        <div>
          <h1 style={{ 
            color: "#1F2933", 
            fontSize: isMobile ? 24 : 32,
            margin: 0,
            animation: "slideInRight 0.8s ease-out",
          }}>
            🎓 Student Profile
          </h1>
          <p style={{ 
            color: "#6B7280", 
            fontSize: 14, 
            margin: "8px 0 0 0",
            animation: "slideInRight 0.8s ease-out 0.1s both",
          }}>
            {profileData.courseCategory} Institute - {profileData.batch} | ID: {profileData.studentId}
          </p>
        </div>
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={handleRefresh}
          loading={refreshing}
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
        >
          Refresh
        </Button>
      </div>

      <div style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }} className="profile-tab-content">
        <QuickStats />
        <Tabs
          items={tabItems}
          activeKey={activeTab}
          onChange={setActiveTab}
          defaultActiveKey="personal"
          style={{ 
            background: "#fff",
            borderRadius: 12,
            padding: 0,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
