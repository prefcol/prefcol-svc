"use client";

import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Statistic,
  Progress,
  List,
  Button,
  Space,
  Divider,
  Tag,
  Skeleton,
  Empty,
  Carousel,
  Avatar,
  message,
} from "antd";
import {
  BookOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  PlayCircleOutlined,
  BellOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store
import VideoPlayerModal from "../components/VideoPlayerModal";

const { Title, Text, Paragraph } = Typography;
const TEAL_900 = "#004d4d";
const WHITE = "#ffffff";


export default function Dashboard({ windowWidth }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { courses, enrolledCourses, progress, assignments, dispatch } = useGlobalStore(); // ✅ Get shared state

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const isMobile = windowWidth < 768;
  // Add this with your other useState hooks
const [videoModal, setVideoModal] = useState({
  open: false,
  course: null,
  video: null
});


  useEffect(() => {
    // Derive dashboard data from global state
    const computeDashboardData = () => {
      // Enrolled course objects
      const enrolledCourseObjects = enrolledCourses
        .map(id => courses.find(c => c.id === id))
        .filter(Boolean);

      // Recent courses (last 3 accessed)
      const recentCourses = enrolledCourseObjects
        .sort((a, b) => {
          const timeA = progress[a.id]?.lastAccessed || 0;
          const timeB = progress[b.id]?.lastAccessed || 0;
          return new Date(timeB) - new Date(timeA);
        })
        .slice(0, 3)
        .map(course => {
          const prog = progress[course.id] || { completedVideos: [] };
          const completedCount = prog.completedVideos.length;
          const progressPercent = Math.round((completedCount / course.videos.length) * 100);
          const nextVideo = course.videos.find(v => !prog.completedVideos.includes(v.id)) || course.videos[0];
          return {
            id: course.id,
            title: course.title,
            progress: progressPercent,
            lastAccessed: prog.lastAccessed || new Date().toISOString(),
            thumbnail: course.thumbnail,
            nextLesson: {
              id: nextVideo.id,
              title: nextVideo.title,
            },
          };
        });

      // Pending assignments
      const pendingAssignments = assignments
        .filter(a => a.status === "pending")
        .map(a => {
          const course = courses.find(c => c.id === a.courseId);
          return {
            id: a.id,
            title: a.title || `Assignment for ${course?.title || "Unknown Course"}`,
            course: course?.title || "Unknown Course",
            dueDate: a.dueDate || "2025-12-31", // fallback
            courseId: a.courseId,
          };
        });

      // Stats
      const completedCourses = enrolledCourseObjects.filter(course => {
        const prog = progress[course.id];
        return prog && prog.completedVideos.length === course.videos.length;
      });

      const totalHours = enrolledCourseObjects.reduce((sum, course) => {
        const prog = progress[course.id];
        if (!prog) return sum;
        return sum + Array.from(prog.completedVideos).reduce((dur, vidId) => {
          const vid = course.videos.find(v => v.id === vidId);
          return dur + (vid?.duration || 0);
        }, 0);
      }, 0);

      const stats = {
        enrolledCourses: enrolledCourses.length,
        completedCourses: completedCourses.length,
        certificatesEarned: completedCourses.length, // assuming cert on completion
        totalHoursLearned: Math.round(totalHours),
        quizzesTaken: 12, // not modeled yet — keep as placeholder
        quizAvgScore: 85, // placeholder
        streak: 7,        // placeholder
        pointsEarned: 1250, // placeholder
      };

      // Recommended: non-enrolled courses
      const recommended = courses
        .filter(c => !enrolledCourses.includes(c.id))
        .slice(0, 3)
        .map(c => ({
          id: c.id,
          title: c.title,
          instructor: c.instructor,
          rating: c.rating || 4.5,
          students: c.students || 1000,
          thumbnail: c.thumbnail,
          price: c.price,
          discountPrice: c.discountPrice,
          tags: c.subcategory ? [c.subcategory] : [],
        }));

      // Recent activity (simplified)
      const recentActivity = recentCourses.slice(0, 2).map((rc, i) => ({
        id: `act-${i}`,
        type: "course_progress",
        description: `Continued "${rc.title}"`,
        course: rc.title,
        timestamp: rc.lastAccessed,
      }));

      return {
        stats,
        recentCourses,
        recommendedCourses: recommended,
        pendingAssignments,
        recentActivity,
      };
    };

    try {
      // Simulate async load
      setTimeout(() => {
        const data = computeDashboardData();
        setDashboardData(data);
        setLoading(false);
      }, 400);
    } catch (err) {
      console.error("Error computing dashboard:", err);
      message.error("Failed to load dashboard");
      setLoading(false);
    }
  }, [courses, enrolledCourses, progress, assignments]); // ✅ Re-run when global state changes

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "course_progress":
        return <PlayCircleOutlined style={{ color: TEAL_900 }} />;
      case "quiz_completed":
        return <CheckCircleOutlined style={{ color: "#52c41a" }} />;
      case "certificate_earned":
        return <TrophyOutlined style={{ color: "#faad14" }} />;
      case "assignment_submitted":
        return <FileTextOutlined style={{ color: "#722ed1" }} />;
      default:
        return <BellOutlined style={{ color: "#999" }} />;
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "24px" }}>
        <Skeleton active paragraph={{ rows: 6 }} />
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          {[...Array(4)].map((_, i) => (
            <Col xs={24} sm={12} md={8} lg={6} key={i}>
              <Card><Skeleton.Input active style={{ width: "100%" }} /></Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  if (!dashboardData) {
    return <Empty description="No dashboard data available" style={{ margin: "100px auto" }} />;
  }

  return (
    <div className="dashboard-container" style={{ padding: "24px" }}>
      {/* Welcome Header */}
      <div style={{ marginBottom: 24 }}>
        <Title level={3}>
          Welcome back, {user?.userName || "Student"}! 👋
        </Title>
        <Paragraph type="secondary">
          Here's your learning overview for today.
        </Paragraph>
      </div>

      {/* Welcome Banner */}
      <Card
        style={{
          marginBottom: 24,
          background: TEAL_900,
          color: WHITE,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={16}>
            <Title level={3} style={{ color: WHITE, margin: 0 }}>
              Keep Learning! 🚀
            </Title>
            <Paragraph style={{ color: "rgba(255,255,255,0.85)", fontSize: 16 }}>
              You're on a <strong>{dashboardData.stats.streak}-day streak</strong> — don’t break it!
            </Paragraph>
            <Button
              type="default"
              size="large"
              onClick={() => navigate("/Student-portal/courses")}
              style={{
                color: TEAL_900,
                backgroundColor: WHITE,
                borderColor: TEAL_900,
                fontWeight: "bold",
              }}
            >
              Continue Learning
            </Button>
            <Tag
              color="gold"
              onClick={() => navigate("/Student-portal/certificates")}
              style={{
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "bold",
                margin: "16px",
              }}
            >
              {dashboardData.stats.certificatesEarned} Certificates
            </Tag>
          </Col>
        </Row>
      </Card>

      {/* Stats Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card hoverable onClick={() => navigate("/Student-portal/courses")}>
            <Statistic
              title="Enrolled Courses"
              value={dashboardData.stats.enrolledCourses}
              prefix={<BookOutlined style={{ color: "#1890ff" }} />}
              valueStyle={{ color: "#1890ff" }}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">{dashboardData.stats.completedCourses} completed</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card hoverable onClick={() => navigate("/Student-portal/courses")}>
            <Statistic
              title="Learning Hours"
              value={dashboardData.stats.totalHoursLearned}
              prefix={<ClockCircleOutlined style={{ color: "#52c41a" }} />}
              suffix="hrs"
              valueStyle={{ color: "#52c41a" }}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">This month</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card hoverable onClick={() => navigate("/Student-portal/certificates")}>
            <Statistic
              title="Certificates"
              value={dashboardData.stats.certificatesEarned}
              prefix={<TrophyOutlined style={{ color: "#faad14" }} />}
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card hoverable onClick={() => navigate("/Student-portal/assignments")}>
            <Statistic
              title="Pending Assignments"
              value={dashboardData.pendingAssignments.length}
              prefix={<FileTextOutlined style={{ color: "#722ed1" }} />}
              valueStyle={{ color: "#722ed1" }}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">Due soon</Text>
            </div>
          </Card>
        </Col>
      </Row>

    
      {/* Continue Learning */}
<div style={{ marginBottom: 24 }}>
  <Title level={4}>Continue Your Learning</Title>
  <Row gutter={[16, 16]}>
    {dashboardData.recentCourses.map((course) => {
      // Find the actual course object to get videos
      const fullCourse = courses.find(c => c.id === course.id);
      const prog = progress[course.id] || { completedVideos: [] };
      const nextVideo = fullCourse?.videos?.find(v => 
        !prog.completedVideos.includes(v.id)
      ) || fullCourse?.videos?.[0];

      return (
        <Col xs={24} sm={12} lg={8} key={course.id}>
          <Card
  hoverable
  cover={
    <img
      alt={course.title}
      src={course.thumbnail}
      style={{
        height: isMobile ? 200 : 250,
        objectFit: "cover",
      }}
    />
  }
  actions={[
    <div
      key="action-buttons"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? 8 : 12, // responsive spacing
        padding: '0 16px 12px',
        flexWrap: 'wrap', // allows wrapping on small screens
      }}
    >
      <Button
        type="primary"
        icon={<PlayCircleOutlined />}
        onClick={() => {
          if (fullCourse && nextVideo) {
            setVideoModal({
              open: true,
              course: fullCourse,
              video: nextVideo,
            });
          } else {
            message.warning("No video available");
          }
        }}
        style={{
          backgroundColor: TEAL_900,
          borderColor: TEAL_900,
          color: WHITE,
          minWidth: isMobile ? 'auto' : 100,
        }}
      >
        Continue
      </Button>

      <Button
        type="default"
        onClick={() => navigate(`/Student-portal/course/${course.id}`)}
        style={{
          color: TEAL_900,
          borderColor: TEAL_900,
          backgroundColor: WHITE,
          minWidth: isMobile ? 'auto' : 100,
        }}
      >
        Details
      </Button>

      <Button
        type="default"
        onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)}
        style={{
          color: TEAL_900,
          borderColor: TEAL_900,
          backgroundColor: WHITE,
          minWidth: isMobile ? 'auto' : 100,
        }}
      >
        Syllabus
      </Button>
    </div>
  ]}
>
  <Card.Meta
    title={course.title}
    description={
      <div>
        <Text type="secondary">
          Next: {nextVideo?.title || "No lessons available"}
        </Text>
        <div style={{ marginTop: 8 }}>
          <Progress percent={course.progress} size="small" />
        </div>
      </div>
    }
  />
</Card>
        </Col>
      );
    })}
  </Row>
</div>

      {/* Pending Assignments */}
{dashboardData.pendingAssignments.length > 0 && (
  <div style={{ marginBottom: 24 }}>
    <Title level={4} style={{ color: "#ff4d4f" }}>
      📢 Pending Assignments
    </Title>
    <List
      bordered
      dataSource={dashboardData.pendingAssignments}
      renderItem={(assignment) => (
        <List.Item
          // Remove actions on mobile — we'll render button inline
          actions={!isMobile ? [
            <Button
              type="primary"
              size="small"
              onClick={() => navigate(`/Student-portal/assignments?courseId=${assignment.courseId}`)}
              style={{
                backgroundColor: TEAL_900,
                borderColor: TEAL_900,
                color: WHITE,
              }}
            >
              Submit Now
            </Button>,
          ] : undefined}
        >
          <List.Item.Meta
            title={<Text strong>{assignment.title}</Text>}
            description={
              <>
                <Space wrap>
                  <Tag color="blue">{assignment.course}</Tag>
                  <Text type="secondary">Due: {formatDate(assignment.dueDate)}</Text>
                </Space>

                {/* Render button below on mobile only */}
                {isMobile && (
                  <div style={{ marginTop: 12 }}>
                    <Button
                      type="primary"
                      size="small"
                      block
                      onClick={() => navigate(`/Student-portal/assignments?courseId=${assignment.courseId}`)}
                      style={{
                        backgroundColor: TEAL_900,
                        borderColor: TEAL_900,
                        color: WHITE,
                      }}
                    >
                      Submit Now
                    </Button>
                  </div>
                )}
              </>
            }
          />
        </List.Item>
      )}
    />
  </div>
)}

      {/* Recommended Courses */}
      <div style={{ marginBottom: 24 }}>
        <Title level={4}>Recommended For You</Title>
        <Card bordered={false}>
          <Carousel autoplay>
            {dashboardData.recommendedCourses.map((course) => (
              <div key={course.id}>
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} md={8}>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      style={{ width: "100%", borderRadius: 8 }}
                    />
                  </Col>
                  <Col xs={24} md={16}>
                    <Title level={4}>{course.title}</Title>
                    <Text type="secondary">By {course.instructor}</Text>
                    <div style={{ margin: "12px 0" }}>
                      <Space>
                        <Text strong>⭐ {course.rating}</Text>
                        <Text>({course.students} students)</Text>
                      </Space>
                    </div>
                    <Space size={[0, 8]} wrap>
                      {course.tags.map((tag, i) => (
                        <Tag key={i} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                    <div style={{ margin: "12px 0" }}>
                      <Text delete>₹{course.price}</Text>{" "}
                      <Text strong>₹{course.discountPrice}</Text>
                    </div>
                    <Button
                      type="primary"
                      onClick={() => navigate(`/Student-portal/course/${course.id}`)}
                      style={{
                        backgroundColor: TEAL_900,
                        borderColor: TEAL_900,
                        color: WHITE,
                      }}
                    >
                      View Details
                    </Button>
                    <Button
  type="default"
  onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)} // ✅ Absolute path
  key="details"
  style={{
    margin: 8,
    color: TEAL_900,
    borderColor: TEAL_900,
    backgroundColor: WHITE,
  }}
>
 Syllabus
</Button>
                   
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
        <Title level={4}>
          <BellOutlined /> Recent Activity
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={dashboardData.recentActivity}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar icon={getActivityIcon(item.type)} />}
                title={<Text strong>{item.description}</Text>}
                description={
                  <>
                    <Text type="secondary">{item.course}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {formatDate(item.timestamp)}
                    </Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
      {/* Video Player Modal */}
<VideoPlayerModal
  open={videoModal.open}
  onClose={() => setVideoModal({ open: false, course: null, video: null })}
  course={videoModal.course}
  video={videoModal.video}
  dispatch={dispatch}
  windowWidth={windowWidth}
/>
    </div>
  );
}
