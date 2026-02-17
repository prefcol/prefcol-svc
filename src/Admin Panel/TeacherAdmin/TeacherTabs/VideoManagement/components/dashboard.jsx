"use client"
import {
  Row,
  Col,
  Card,
  Statistic,
  Button,
  List,
  Typography,
  Space,
  Tag,
  Avatar,
  Progress,
  Calendar,
  Badge,
} from "antd"
import {
  VideoCameraOutlined,
  PlaySquareOutlined,
  EyeOutlined,
  LikeOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  BellOutlined,
  RightOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const { Title, Text } = Typography

const COLORS = ["#FF7A00", "#00A878", "#0096C7", "#FFB347", "#FF5252"]

const Dashboard = ({ videoStats, playlists, videos, analyticsData, notifications, isMobile, firstName }) => {
  const welcomeName = firstName || "Teacher"
  // Get recent videos
  const recentVideos = [...videos].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)).slice(0, 5)

  // Get top videos by views
  const topVideos = [...videos].sort((a, b) => b.views - a.views).slice(0, 5)

  // Get recent playlists
  const recentPlaylists = [...playlists].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 3)

  // Calculate completion rate
  const completionRate = Math.round((videoStats.approved / (videoStats.total || 1)) * 100)

  // Get today's date
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Generate calendar data
  const getListData = (value) => {
    const day = value.date()
    const month = value.month()

    // Mock data for calendar events
    if (month === today.getMonth()) {
      if (day === today.getDate()) {
        return [
          { type: "success", content: "New video upload" },
          { type: "warning", content: "Review pending videos" },
        ]
      }
      if (day === today.getDate() + 2) {
        return [{ type: "warning", content: "Course deadline" }]
      }
      if (day === today.getDate() - 2) {
        return [{ type: "error", content: "Meeting with admin" }]
      }
    }
    return []
  }

  const dateCellRender = (value) => {
    const listData = getListData(value)
    return (
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  // Prepare data for category distribution chart
  const categoryData = videos.reduce((acc, video) => {
    acc[video.category] = (acc[video.category] || 0) + 1
    return acc
  }, {})

  const categoryChartData = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }))

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={16}>
            <Title level={3} style={{ margin: 0 }}>
              Welcome back, {welcomeName}!
            </Title>
            <Text type="secondary">{formattedDate}</Text>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: isMobile ? "left" : "right" }}>
  <Space direction="vertical">
    <Button type="primary" icon={<UploadOutlined />}>
      Upload Video
    </Button>
    <Button icon={<PlusOutlined />}>Create Playlist</Button>
  </Space>
</Col>
        </Row>
      </div>

      {/* Stats Overview */}
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} md={6}>
          <Card bordered={false} style={{ height: "100%" }}>
            <Statistic
              title="Total Videos"
              value={videoStats.total}
              prefix={<VideoCameraOutlined style={{ color: "#FF7A00" }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {videoStats.approved} approved, {videoStats.pending} pending
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card bordered={false} style={{ height: "100%" }}>
            <Statistic
              title="Total Views"
              value={videoStats.totalViews}
              prefix={<EyeOutlined style={{ color: "#0096C7" }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {analyticsData.summary?.uniqueViewers || 0} unique viewers
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card bordered={false} style={{ height: "100%" }}>
            <Statistic
              title="Playlists"
              value={playlists.length}
              prefix={<PlaySquareOutlined style={{ color: "#00A878" }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {playlists.filter((p) => p.visibility === "Public").length} public playlists
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card bordered={false} style={{ height: "100%" }}>
            <Statistic
              title="Engagement Rate"
              value={analyticsData.summary?.engagementRate || 0}
              precision={1}
              suffix="%"
              prefix={<LikeOutlined style={{ color: "#FFB347" }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {videoStats.totalLikes} total likes
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Main Dashboard Content */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {/* Left Column */}
        <Col xs={24} lg={16}>
          {/* Views Trend */}
          <Card
            title="Views Trend"
            bordered={false}
            style={{ marginBottom: 16 }}
            extra={
              <Button type="link" size="small">
                View Details
              </Button>
            }
          >
            <div style={{ height: isMobile ? 200 : 300 }}>
              {analyticsData.viewsOverTime && analyticsData.viewsOverTime.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData.viewsOverTime} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: isMobile ? 10 : 12 }} />
                    <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#FF7A00" activeDot={{ r: 8 }} strokeWidth={2} />
                    <Line type="monotone" dataKey="uniqueViewers" stroke="#00A878" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Text type="secondary">No data available</Text>
                </div>
              )}
            </div>
          </Card>

          {/* Recent Videos */}
<Card
  title="Recent Videos"
  bordered={false}
  style={{ marginBottom: 16 }}
  extra={
    <Button type="link" size="small" onClick={() => (window.location.hash = "#videos")}>
      View All
    </Button>
  }
>
  <List
    itemLayout="horizontal"
    dataSource={recentVideos}
    renderItem={(video) => (
      <List.Item
        key={video.id}
        actions={[
          <Button key="views" type="link" size="small" icon={<EyeOutlined />}>
            {video.views}
          </Button>,
          <Button key="likes" type="link" size="small" icon={<LikeOutlined />}>
            {video.likes}
          </Button>,
        ]}
        style={{ 
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 12 : 0
        }}
      >
        <div style={{ 
          display: 'flex', 
          width: '100%', 
          ...(isMobile && { 
            flexDirection: 'column',
            alignItems: 'flex-start'
          })
        }}>
          <div style={{ 
            position: "relative", 
            width: isMobile ? '100%' : 80, 
            height: isMobile ? 60 : 45,
            marginBottom: isMobile ? 8 : 0,
            marginRight: isMobile ? 0 : 16
          }}>
            <img
              src={video.thumbnailUrl || "/placeholder.svg"}
              alt={video.title}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                borderRadius: 4,
                ...(isMobile && { borderRadius: 8 })
              }}
            />
          </div>
          
          <div style={{ 
            flex: 1, 
            minWidth: 0,
            ...(isMobile && { width: '100%' })
          }}>
            <a href="#videos" style={{ 
              fontWeight: 500, 
              fontSize: isMobile ? 14 : 16,
              display: 'block',
              marginBottom: 4
            }}>
              {video.title}
            </a>
            <Space 
              direction={isMobile ? "vertical" : "horizontal"} 
              size={isMobile ? 4 : 8}
              style={{ 
                width: '100%',
                ...(isMobile && { alignItems: 'flex-start' })
              }}
            >
              <Text type="secondary" style={{ fontSize: isMobile ? 11 : 12 }}>
                {new Date(video.uploadDate).toLocaleDateString()}
              </Text>
              {getStatusTag(video.status)}
            </Space>
          </div>
        </div>
      </List.Item>
    )}
  />
</Card>

          {/* Calendar (for larger screens) */}
          {!isMobile && (
            <Card
              title="Schedule"
              bordered={false}
              extra={
                <Button type="link" size="small">
                  View Calendar
                </Button>
              }
            >
              <Calendar fullscreen={false} dateCellRender={dateCellRender} />
            </Card>
          )}
        </Col>

        {/* Right Column */}
        <Col xs={24} lg={8}>
          {/* Completion Status */}
          <Card title="Video Status" bordered={false} style={{ marginBottom: 16 }}>
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <Progress
                type="circle"
                percent={completionRate}
                strokeColor={{
                  "0%": "#FF7A00",
                  "100%": "#00A878",
                }}
                width={isMobile ? 120 : 150}
              />
              <div style={{ marginTop: 16 }}>
                <Space direction="vertical">
                  <div>
                    <Tag color="success" icon={<CheckCircleOutlined />}>
                      {videoStats.approved} Approved
                    </Tag>
                  </div>
                  <div>
                    <Tag color="warning" icon={<ClockCircleOutlined />}>
                      {videoStats.pending} Pending
                    </Tag>
                  </div>
                  <div>
                    <Tag color="error" icon={<CloseCircleOutlined />}>
                      {videoStats.rejected} Rejected
                    </Tag>
                  </div>
                </Space>
              </div>
            </div>
          </Card>

          {/* Category Distribution */}
          <Card title="Video Categories" bordered={false} style={{ marginBottom: 16 }}>
            <div style={{ height: 200 }}>
              {categoryChartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Text type="secondary">No data available</Text>
                </div>
              )}
            </div>
          </Card>

          {/* Notifications */}
          <Card
            title="Recent Notifications"
            bordered={false}
            style={{ marginBottom: 16 }}
            extra={
              <Button type="link" size="small" icon={<BellOutlined />}>
                View All
              </Button>
            }
          >
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              renderItem={(notification) => (
                <List.Item key={notification.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          backgroundColor:
                            notification.type === "success"
                              ? "#00A878"
                              : notification.type === "warning"
                                ? "#FFB347"
                                : notification.type === "error"
                                  ? "#FF5252"
                                  : "#0096C7",
                        }}
                        icon={getNotificationIcon(notification.type)}
                      />
                    }
                    title={notification.title}
                    description={
                      <div>
                        <div>{notification.message}</div>
                        <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>
                          {new Date(notification.timestamp).toLocaleString()}
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
              locale={{ emptyText: "No notifications" }}
            />
          </Card>

          {/* Playlists */}
          <Card
            title="Recent Playlists"
            bordered={false}
            extra={
              <Button type="link" size="small" onClick={() => (window.location.hash = "#playlists")}>
                View All
              </Button>
            }
          >
            <List
              itemLayout="horizontal"
              dataSource={recentPlaylists}
              renderItem={(playlist) => (
                <List.Item key={playlist.id} actions={[<Button type="link" size="small" icon={<RightOutlined />} />]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        shape="square"
                        size={40}
                        icon={<PlaySquareOutlined />}
                        style={{ backgroundColor: "#00A878" }}
                      />
                    }
                    title={<a href="#playlists">{playlist.name}</a>}
                    description={
                      <Space>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          {playlist.videoIds.length} videos
                        </Text>
                        <Tag
                          color={
                            playlist.visibility === "Public"
                              ? "green"
                              : playlist.visibility === "Unlisted"
                                ? "orange"
                                : "default"
                          }
                        >
                          {playlist.visibility}
                        </Tag>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

// Helper functions
const getStatusTag = (status) => {
  switch (status) {
    case "Approved":
      return <Tag color="success">Approved</Tag>
    case "Rejected":
      return <Tag color="error">Rejected</Tag>
    case "Pending":
      return <Tag color="warning">Pending</Tag>
    default:
      return <Tag color="default">{status}</Tag>
  }
}

const getNotificationIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircleOutlined />
    case "warning":
      return <ClockCircleOutlined />
    case "error":
      return <CloseCircleOutlined />
    default:
      return <BellOutlined />
  }
}

export default Dashboard

