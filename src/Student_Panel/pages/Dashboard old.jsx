

"use client"

import { useState, useEffect } from "react"
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
  Tabs,
  Calendar,
  Badge,
  Avatar,
  Rate,
  Carousel,
  message,
} from "antd"
import {
  BookOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  RiseOutlined,
  PlayCircleOutlined,
  CalendarOutlined,
  BellOutlined,
  FireOutlined,
  StarOutlined,
  CheckCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  FileTextOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { Chart } from "../components/ui/chart"
import { Line, Bar, Pie } from "recharts"
import data_science from "../../assets/images/Data_Science.jpeg"
import digital_marketing from "../../assets/images/Digital_Marketing.jpeg"
import manual_testing from "../../assets/images/Manual_Testing.jpeg"
import { useAuth } from "../../Contexts/AuthContext"

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs

const Dashboard = ({ windowWidth, userData }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)
  const [activeTab, setActiveTab] = useState("1")
  const isMobile = windowWidth < 768
  
  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await dashboardAPI.getDashboardData();
      // setDashboardData(response.data);

      // Mock data
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockData = {
        stats: {
          enrolledCourses: 5,
          completedCourses: 2,
          certificatesEarned: 2,
          totalHoursLearned: 28,
          quizzesTaken: 12,
          quizAvgScore: 85,
          streak: 7,
          pointsEarned: 1250,
        },
        progress: {
          weeklyGoal: 10,
          weeklyProgress: 7,
          monthlyGoal: 40,
          monthlyProgress: 28,
          yearlyGoal: 500,
          yearlyProgress: 320,
        },
        recentCourses: [
          {
            id: "1",
            title: "Advanced Web Development with React",
            progress: 75,
            lastAccessed: "2023-10-20T14:30:00Z",
            thumbnail: "https://via.placeholder.com/300x150",
            nextLesson: {
              id: "lesson-3",
              title: "State Management with Redux",
            },
          },
          {
            id: "2",
            title: "Python for Data Science",
            progress: 45,
            lastAccessed: "2023-10-18T10:15:00Z",
            thumbnail: "https://via.placeholder.com/300x150",
            nextLesson: {
              id: "lesson-2",
              title: "Data Manipulation with Pandas",
            },
          },
          {
            id: "3",
            title: "Digital Marketing Fundamentals",
            progress: 20,
            lastAccessed: "2023-10-15T16:45:00Z",
            thumbnail: "https://via.placeholder.com/300x150",
            nextLesson: {
              id: "lesson-1",
              title: "Social Media Marketing Strategies",
            },
          },
        ],
        recommendedCourses: [
          {
            id: "4",
            title: "Manual Testing Fundamentals",
            instructor: "Dr. Sarah Johnson",
            rating: 4.8,
            students: 1245,
            thumbnail: manual_testing,
            price: 49.99,
            discountPrice: 39.99,
            tags: ["Python", "AI", "Data Science"],
          },
          {
            id: "5",
            title: "Digital Marketing Mastery",
            instructor: "Michael Chen",
            rating: 4.7,
            students: 980,
            thumbnail: digital_marketing,
            price: 59.99,
            discountPrice: 44.99,
            tags: ["Design", "UI/UX", "Figma"],
          },
          {
            id: "6",
            title: "Data Science & Machine Learning with Python",
            instructor: "Alex Rodriguez",
            rating: 4.9,
            students: 1560,
            thumbnail: data_science,
            price: 69.99,
            discountPrice: 49.99,
            tags: ["JavaScript", "Node.js", "React"],
          },
        ],
        upcomingEvents: [
          {
            id: "1",
            title: "Python Workshop",
            date: "2023-11-05T15:00:00Z",
            type: "Workshop",
          },
          {
            id: "2",
            title: "Web Development Q&A Session",
            date: "2023-11-10T18:30:00Z",
            type: "Q&A",
          },
          {
            id: "3",
            title: "Data Science Webinar",
            date: "2023-11-15T14:00:00Z",
            type: "Webinar",
          },
        ],
        learningAnalytics: {
          weeklyHours: [
            { day: "Mon", hours: 1.5 },
            { day: "Tue", hours: 2.0 },
            { day: "Wed", hours: 0.5 },
            { day: "Thu", hours: 1.0 },
            { day: "Fri", hours: 2.5 },
            { day: "Sat", hours: 0.0 },
            { day: "Sun", hours: 0.0 },
          ],
          monthlyProgress: [
            { month: "Jan", hours: 10 },
            { month: "Feb", hours: 15 },
            { month: "Mar", hours: 12 },
            { month: "Apr", hours: 8 },
            { month: "May", hours: 20 },
            { month: "Jun", hours: 18 },
            { month: "Jul", hours: 22 },
            { month: "Aug", hours: 25 },
            { month: "Sep", hours: 18 },
            { month: "Oct", hours: 28 },
            { month: "Nov", hours: 0 },
            { month: "Dec", hours: 0 },
          ],
          categoryDistribution: [
            { category: "Web Development", percentage: 40 },
            { category: "Data Science", percentage: 25 },
            { category: "Digital Marketing", percentage: 15 },
            { category: "Design", percentage: 10 },
            { category: "Business", percentage: 10 },
          ],
          skillsGrowth: [
            { skill: "JavaScript", level: 75, growth: 15 },
            { skill: "Python", level: 60, growth: 20 },
            { skill: "React", level: 80, growth: 10 },
            { skill: "Data Analysis", level: 45, growth: 25 },
            { skill: "UI/UX Design", level: 30, growth: 5 },
          ],
        },
        notifications: [
          {
            id: "1",
            title: "New Course Available",
            description: "Check out our new course on Machine Learning!",
            time: "2 hours ago",
            read: false,
          },
          {
            id: "2",
            title: "Assignment Reminder",
            description: "Your React project is due tomorrow.",
            time: "5 hours ago",
            read: false,
          },
        ],
        achievements: [
          {
            id: "1",
            title: "Fast Learner",
            description: "Completed 5 lessons in a single day",
            date: "2023-10-15",
            icon: "🚀",
          },
          {
            id: "2",
            title: "Quiz Master",
            description: "Scored 100% on 3 consecutive quizzes",
            date: "2023-09-28",
            icon: "🏆",
          },
          {
            id: "3",
            title: "Consistent Learner",
            description: "Maintained a 7-day learning streak",
            date: "2023-10-20",
            icon: "🔥",
          },
        ],
        recentActivity: [
          {
            id: "1",
            type: "course_progress",
            description: "Completed 'Introduction to React Hooks' lesson",
            course: "Advanced Web Development with React",
            timestamp: "2023-10-22T09:30:00Z",
          },
          {
            id: "2",
            type: "quiz_completed",
            description: "Scored 90% on 'Python Basics' quiz",
            course: "Python for Data Science",
            timestamp: "2023-10-21T14:15:00Z",
          },
          {
            id: "3",
            type: "certificate_earned",
            description: "Earned certificate for UI/UX Design Principles",
            course: "UI/UX Design Principles",
            timestamp: "2023-10-18T11:45:00Z",
          },
        ],
      }

      setDashboardData(mockData)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      message.error("Failed to load dashboard data")
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getEventTypeColor = (type) => {
    switch (type) {
      case "Workshop":
        return "blue"
      case "Q&A":
        return "green"
      case "Webinar":
        return "purple"
      default:
        return "default"
    }
  }

  const getCalendarData = (value) => {
    if (!dashboardData) return null

    const dateStr = value.format("YYYY-MM-DD")
    const events = dashboardData.upcomingEvents.filter((event) => {
      const eventDate = new Date(event.date)
      return eventDate.toISOString().split("T")[0] === dateStr
    })

    return events.length ? events : null
  }

  const dateCellRender = (value) => {
    const events = getCalendarData(value)
    return events ? (
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {events.map((event) => (
          <li key={event.id}>
            <Badge color={getEventTypeColor(event.type)} text={event.title} />
          </li>
        ))}
      </ul>
    ) : null
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "course_progress":
        return <PlayCircleOutlined style={{ color: "#1890ff" }} />
      case "quiz_completed":
        return <FileTextOutlined style={{ color: "#52c41a" }} />
      case "certificate_earned":
        return <TrophyOutlined style={{ color: "#faad14" }} />
      default:
        return <ClockCircleOutlined style={{ color: "#1890ff" }} />
    }
  }

  if (loading) {
    return (
      <div style={{ padding: "24px" }}>
        <Row gutter={[24, 24]}>
          {[...Array(6)].map((_, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card>
                <Skeleton active />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }

  if (!dashboardData) {
    return <Empty description="No dashboard data available" style={{ margin: "100px auto" }} />
  }

  return (
    <div className="dashboard-container" style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
       
      <Title level={4}>Welcome back, {userData?.message?.trim() || "Student"}!</Title>

        <Paragraph type="secondary">Track your progress, continue learning, and discover new courses.</Paragraph>
      </div>

      {/* Welcome Banner */}
      <Card
        className="welcome-banner"
        style={{
          marginBottom: 24,
          background: "linear-gradient(135deg, #004d4d 0%, #66cccc 100%)",
          color: "white",
          borderRadius: 8,
        }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={16}>
            <Title level={3} style={{ color: "white", marginTop: 0 }}>
              Continue Your Learning Journey
            </Title>
            <Paragraph style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: 16 }}>
              You're on a {dashboardData.stats.streak}-day streak! Keep going to maintain your momentum.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{ background: "white", color: "#004d4d", borderColor: "white" }}
              onClick={() => navigate("/Student-portal/courses")}
            >
              Continue Learning
            </Button>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            {/* <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: 120,
                height: 120,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Title level={2} style={{ color: "white", margin: 0 }}>
                {dashboardData.stats.pointsEarned}
              </Title>
              <Text style={{ color: "white" }}>Points Earned</Text>
            </div> */}
          </Col>
        </Row>
      </Card>

      {/* Stats Cards */}
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable className="stat-card">
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

        <Col xs={24} sm={12} lg={6}>
          <Card hoverable className="stat-card">
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

        <Col xs={24} sm={12} lg={6}>
          <Card hoverable className="stat-card">
            <Statistic
              title="Certificates Earned"
              value={dashboardData.stats.certificatesEarned}
              prefix={<TrophyOutlined style={{ color: "#faad14" }} />}
              valueStyle={{ color: "#faad14" }}
            />
            <div style={{ marginTop: 8 }}>
              <Button type="link" size="small" onClick={() => navigate("/Student-portal/certificate")}>
                View Certificates
              </Button>
            </div>
          </Card>
        </Col>

        

        {/* <Col xs={24} sm={12} lg={6}>
          <Card hoverable className="stat-card">
            <Statistic
              title="Quiz Average"
              value={dashboardData.stats.quizAvgScore}
              prefix={<CheckCircleOutlined style={{ color: "#722ed1" }} />}
              suffix="%"
              valueStyle={{ color: "#722ed1" }}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">{dashboardData.stats.quizzesTaken} quizzes taken</Text>
            </div>
          </Card>
        </Col> */}
      </Row>
 
      {/* Weekly Progress */}
      {/*
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card
            title={
              <div style={{ display: "flex", alignItems: "center" }}>
                <FireOutlined style={{ color: "#ff4d4f", marginRight: 8 }} />
                <span>Learning Progress</span>
              </div>
            }
            extra={
              <Button type="link" onClick={() => navigate("/Student-portal/profile")}>
                View Details
              </Button>
            }
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12}>
                <div style={{ marginBottom: 16 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}
                  >
                    <Text>Weekly Goal</Text>
                    <Text strong>
                      {dashboardData.progress.weeklyProgress}/{dashboardData.progress.weeklyGoal} hrs
                    </Text>
                  </div>
                  <Progress
                    percent={Math.round(
                      (dashboardData.progress.weeklyProgress / dashboardData.progress.weeklyGoal) * 100,
                    )}
                    status={
                      dashboardData.progress.weeklyProgress >= dashboardData.progress.weeklyGoal ? "success" : "active"
                    }
                    strokeColor={{
                      from: "#108ee9",
                      to: "#87d068",
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}
                  >
                    <Text>Monthly Goal</Text>
                    <Text strong>
                      {dashboardData.progress.monthlyProgress}/{dashboardData.progress.monthlyGoal} hrs
                    </Text>
                  </div>
                  <Progress
                    percent={Math.round(
                      (dashboardData.progress.monthlyProgress / dashboardData.progress.monthlyGoal) * 100,
                    )}
                    status={
                      dashboardData.progress.monthlyProgress >= dashboardData.progress.monthlyGoal
                        ? "success"
                        : "active"
                    }
                    strokeColor={{
                      from: "#108ee9",
                      to: "#87d068",
                    }}
                  />
                </div>

                <div style={{ marginTop: 16 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}
                  >
                    <Text>Yearly Goal</Text>
                    <Text strong>
                      {dashboardData.progress.yearlyProgress}/{dashboardData.progress.yearlyGoal} hrs
                    </Text>
                  </div>
                  <Progress
                    percent={Math.round(
                      (dashboardData.progress.yearlyProgress / dashboardData.progress.yearlyGoal) * 100,
                    )}
                    status={
                      dashboardData.progress.yearlyProgress >= dashboardData.progress.yearlyGoal ? "success" : "active"
                    }
                    strokeColor={{
                      from: "#108ee9",
                      to: "#87d068",
                    }}
                  />
                </div>
              </Col>

              <Col xs={24} sm={12}>
                <div style={{ height: 200 }}>
                  <Chart>
                    <Line
                      data={dashboardData.learningAnalytics.weeklyHours}
                      dataKey="hours"
                      xField="day"
                      yField="hours"
                      stroke="#1890ff"
                      strokeWidth={2}
                      dot={{ fill: "#1890ff" }}
                    />
                  </Chart>
                </div>
                <div style={{ textAlign: "center", marginTop: 8 }}>
                  <Space align="center">
                    <Badge color="#1890ff" text="Weekly Learning Hours" />
                    <Divider type="vertical" />
                    <Space>
                      <FireOutlined style={{ color: "#ff4d4f" }} />
                      <Text strong>{dashboardData.stats.streak} day streak</Text>
                    </Space>
                  </Space>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card
            title={
              <div style={{ display: "flex", alignItems: "center" }}>
                <BellOutlined style={{ color: "#722ed1", marginRight: 8 }} />
                <span>Recent Activity</span>
              </div>
            }
            extra={
              <Button type="link" size="small" onClick={() => navigate("/Student-portal/profile")}>
                View All
              </Button>
            }
          >
            {dashboardData.recentActivity.length === 0 ? (
              <Empty description="No recent activity" />
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={dashboardData.recentActivity}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={<Avatar icon={getActivityIcon(item.type)} style={{ backgroundColor: "transparent" }} />}
                      title={<Text strong>{item.description}</Text>}
                      description={
                        <div>
                          <Text type="secondary">{item.course}</Text>
                          <div>
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              {formatDate(item.timestamp)} at {formatTime(item.timestamp)}
                            </Text>
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
      </Row> */}

      {/* Continue Learning Section */}
      {/* <div style={{ marginTop: 24 }}>
        <Title level={4}>Continue Learning</Title>
        <Row gutter={[24, 24]}>
          {dashboardData.recentCourses.map((course) => (
            <Col xs={24} sm={12} lg={8} key={course.id}>
              <Card
                hoverable
                className="course-card"
                cover={
                  <div style={{ position: "relative" }}>
                    <img
                      alt={course.title}
                      src={course.thumbnail || "/placeholder.svg"}
                      style={{ height: 150, objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        padding: "30px 16px 8px",
                      }}
                    >
                      <Progress
                        percent={course.progress}
                        size="small"
                        status={course.progress === 100 ? "success" : "active"}
                        strokeColor="#1890ff"
                        trailColor="rgba(255,255,255,0.3)"
                      />
                    </div>
                  </div>
                }
                actions={[
                  <Button
                    key="continue"
                    type="primary"
                    icon={<PlayCircleOutlined />}
                    onClick={() => navigate(`/Student-portal/video/${course.id}/${course.nextLesson.id}`)}
                  >
                    Continue
                  </Button>,
                  <Button key="details" onClick={() => navigate(`/Student-portal/course/${course.id}`)}>
                    Details
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={course.title}
                  description={
                    <div>
                      <Text type="secondary">Next: {course.nextLesson.title}</Text>
                      <div style={{ marginTop: 8 }}>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          Last accessed: {formatDate(course.lastAccessed)}
                        </Text>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div> */}

      {/* Recommended Courses Carousel */}
      <div style={{ marginTop: 24 }}>
        <Title level={4}>Recommended For You</Title>
        <Card bordered={false}>
          <Carousel autoplay dots={{ className: "carousel-dots" }}>
            {dashboardData.recommendedCourses.map((course) => (
              <div key={course.id}>
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} md={8}>
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      style={{ width: "100%", height: "auto", borderRadius: 8 }}
                    />
                  </Col>
                  <Col xs={24} md={16}>
                    <Title level={4}>{course.title}</Title>
                    <Text type="secondary">{course.instructor}</Text>
                    <div style={{ margin: "12px 0" }}>
                      <Space>
                        <Rate disabled defaultValue={course.rating} style={{ fontSize: 14 }} />
                        <Text>({course.rating})</Text>
                        <Text>{course.students} students</Text>
                      </Space>
                    </div>
                    <div style={{ margin: "12px 0" }}>
                      <Space size={[0, 8]} wrap>
                        {course.tags.map((tag, index) => (
                          <Tag key={index} color="blue">
                            {tag}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                    <div style={{ margin: "12px 0" }}>
                      <Text delete style={{ marginRight: 8 }}>
                        ₹{course.price}
                      </Text>
                      <Text strong style={{ fontSize: 18 }}>
                        ₹{course.discountPrice}
                      </Text>
                    </div>
                    <Button type="primary" size="large" style={{
                      backgroundColor: "#004d4d", // Dark teal
                      color: "#ffffff",           // White text
                      borderColor: "#004d4d"
                    }} onClick={() => navigate(`/Student-portal/course/${course.id}`)}>
                      View Course
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        </Card>
      </div>

      {/* Analytics and Calendar Tabs */}
      {/* <div style={{ marginTop: 24 }}>
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span>
                <RiseOutlined />
                Learning Analytics
              </span>
            }
            key="1"
          >
            <Card>
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={16}>
                  <Title level={5}>Monthly Learning Hours</Title>
                  <div style={{ height: 300 }}>
                    <Chart>
                      <Bar
                        data={dashboardData.learningAnalytics.monthlyProgress}
                        dataKey="hours"
                        xField="month"
                        yField="hours"
                        fill="#1890ff"
                      />
                    </Chart>
                  </div>
                </Col>

                <Col xs={24} lg={8}>
                  <Title level={5}>Learning Distribution</Title>
                  <div style={{ height: 250 }}>
                    <Chart>
                      <Pie
                        data={dashboardData.learningAnalytics.categoryDistribution.map((item) => ({
                          name: item.category,
                          value: item.percentage,
                        }))}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                    </Chart>
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <Statistic
                      title="Quiz Average Score"
                      value={dashboardData.stats.quizAvgScore}
                      suffix="%"
                      valueStyle={{ color: dashboardData.stats.quizAvgScore >= 80 ? "#52c41a" : "#faad14" }}
                    />
                    <Text type="secondary">Based on {dashboardData.stats.quizzesTaken} quizzes taken</Text>
                  </div>
                </Col>
              </Row>

              <Divider />

              <Title level={5}>Skills Growth</Title>
              <Row gutter={[24, 24]}>
                {dashboardData.learningAnalytics.skillsGrowth.map((skill) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={skill.skill}>
                    <Card size="small" bordered={false} style={{ background: "#f9f9f9" }}>
                      <Statistic
                        title={skill.skill}
                        value={skill.level}
                        suffix="%"
                        prefix={
                          skill.growth > 0 ? (
                            <ArrowUpOutlined style={{ color: "#52c41a" }} />
                          ) : (
                            <ArrowDownOutlined style={{ color: "#ff4d4f" }} />
                          )
                        }
                      />
                      <Progress percent={skill.level} size="small" />
                      <Text type="secondary">
                        {skill.growth > 0 ? "+" : ""}
                        {skill.growth}% growth
                      </Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </TabPane>

          <TabPane
            tab={
              <span>
                <CalendarOutlined />
                Calendar & Events
              </span>
            }
            key="2"
          >
            <Card>
              <Calendar dateCellRender={dateCellRender} fullscreen={!isMobile} />

              <Divider>Upcoming Events</Divider>

              <List
                dataSource={dashboardData.upcomingEvents}
                renderItem={(event) => (
                  <List.Item key={event.id} actions={[<Button size="small">Add to Calendar</Button>]}>
                    <List.Item.Meta
                      title={event.title}
                      description={
                        <Space>
                          <CalendarOutlined /> {formatDate(event.date)}
                          <ClockCircleOutlined /> {formatTime(event.date)}
                          <Tag color={getEventTypeColor(event.type)}>{event.type}</Tag>
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </TabPane>

          <TabPane
            tab={
              <span>
                <StarOutlined />
                Achievements
              </span>
            }
            key="3"
          >
            <Card>
              <Row gutter={[24, 24]}>
                {dashboardData.achievements.map((achievement) => (
                  <Col xs={24} sm={12} md={8} key={achievement.id}>
                    <Card
                      hoverable
                      className="achievement-card"
                      style={{
                        textAlign: "center",
                        background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 48,
                          marginBottom: 16,
                          background: "rgba(255, 255, 255, 0.8)",
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 16px",
                        }}
                      >
                        {achievement.icon}
                      </div>
                      <Title level={4}>{achievement.title}</Title>
                      <Paragraph>{achievement.description}</Paragraph>
                      <Text type="secondary">Achieved on {formatDate(achievement.date)}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </TabPane>
        </Tabs>
      </div> */}
    </div>
  )
}

export default Dashboard

