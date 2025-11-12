// import { useState } from "react"
// import {
//   Card,
//   Row,
//   Col,
//   Statistic,
//   Select,
//   DatePicker,
//   Button,
//   Space,
//   Table,
//   Tabs,
//   Empty,
//   Spin,
//   Typography,
//   Divider,
//   Grid,
// } from "antd"
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Cell,
// } from "recharts"
// import { EyeOutlined, LikeOutlined, ClockCircleOutlined, UserOutlined, ReloadOutlined } from "@ant-design/icons"

// const { RangePicker } = DatePicker
// const { Title, Text } = Typography
// const { useBreakpoint } = Grid

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

// const VideoAnalytics = ({ analyticsData, loading, timeRange, setTimeRange, onRefresh, videos, isMobile }) => {
//   const [selectedVideo, setSelectedVideo] = useState("all")
//   const screens = useBreakpoint()

//   const handleTimeRangeChange = (value) => {
//     setTimeRange(value)
//   }

//   const handleVideoChange = (value) => {
//     setSelectedVideo(value)
//   }

//   const getTopVideos = () => {
//     return videos
//       .slice()
//       .sort((a, b) => b.views - a.views)
//       .slice(0, 5)
//       .map((video) => ({
//         id: video.id,
//         title: video.title,
//         views: video.views,
//         likes: video.likes,
//       }))
//   }

//   const renderViewsChart = () => {
//     if (!analyticsData.viewsOverTime || analyticsData.viewsOverTime.length === 0) {
//       return <Empty description="No views data available" />
//     }

//     return (
//       <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
//         <LineChart data={analyticsData.viewsOverTime} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" tick={{ fontSize: isMobile ? 10 : 12 }} />
//           <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
//           <Tooltip />
//           <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
//           <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uniqueViewers" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     )
//   }

//   const renderEngagementChart = () => {
//     if (!analyticsData.engagement || analyticsData.engagement.length === 0) {
//       return <Empty description="No engagement data available" />
//     }

//     return (
//       <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
//         <BarChart data={analyticsData.engagement} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" tick={{ fontSize: isMobile ? 10 : 12 }} />
//           <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
//           <Tooltip />
//           <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
//           <Bar dataKey="likes" fill="#8884d8" />
//           <Bar dataKey="comments" fill="#82ca9d" />
//           <Bar dataKey="shares" fill="#ffc658" />
//         </BarChart>
//       </ResponsiveContainer>
//     )
//   }

//   const renderDeviceChart = () => {
//     if (!analyticsData.deviceBreakdown || analyticsData.deviceBreakdown.length === 0) {
//       return <Empty description="No device data available" />
//     }

//     return (
//       <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
//         <PieChart>
//           <Pie
//             data={analyticsData.deviceBreakdown}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             outerRadius={isMobile ? 70 : 100}
//             fill="#8884d8"
//             dataKey="value"
//             label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//           >
//             {analyticsData.deviceBreakdown.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
//         </PieChart>
//       </ResponsiveContainer>
//     )
//   }

//   const renderTopVideosTable = () => {
//     const columns = [
//       {
//         title: "Title",
//         dataIndex: "title",
//         key: "title",
//         ellipsis: true,
//       },
//       {
//         title: "Views",
//         dataIndex: "views",
//         key: "views",
//         sorter: (a, b) => a.views - b.views,
//         defaultSortOrder: "descend",
//         width: 100,
//       },
//       {
//         title: "Likes",
//         dataIndex: "likes",
//         key: "likes",
//         sorter: (a, b) => a.likes - b.likes,
//         width: 100,
//       },
//     ]

//     return (
//       <Table
//         dataSource={getTopVideos()}
//         columns={columns}
//         rowKey="id"
//         pagination={false}
//         size="small"
//         scroll={{ x: "max-content" }}
//       />
//     )
//   }

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: isMobile ? 200 : 400 }}>
//         <Spin size="large" tip="Loading analytics data..." />
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Space style={{ marginBottom: 24, width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
//         <Space wrap>
//           <Select style={{ width: isMobile ? 120 : 150 }} value={timeRange} onChange={handleTimeRangeChange}>
//             <Select.Option value="7d">Last 7 Days</Select.Option>
//             <Select.Option value="30d">Last 30 Days</Select.Option>
//             <Select.Option value="90d">Last 90 Days</Select.Option>
//             <Select.Option value="1y">Last Year</Select.Option>
//           </Select>
//           <Select
//             style={{ width: isMobile ? 150 : 200 }}
//             value={selectedVideo}
//             onChange={handleVideoChange}
//             placeholder="Select video"
//             showSearch
//             optionFilterProp="children"
//           >
//             <Select.Option value="all">All Videos</Select.Option>
//             {videos.map((video) => (
//               <Select.Option key={video.id} value={video.id}>
//                 {video.title}
//               </Select.Option>
//             ))}
//           </Select>
//         </Space>
//         <Button icon={<ReloadOutlined />} onClick={onRefresh}>
//           {!isMobile && "Refresh"}
//         </Button>
//       </Space>

//       <Row gutter={[16, 16]}>
//         <Col xs={12} sm={12} md={6}>
//           <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//             <Statistic title="Total Views" value={analyticsData.summary?.totalViews || 0} prefix={<EyeOutlined />} />
//           </Card>
//         </Col>
//         <Col xs={12} sm={12} md={6}>
//           <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//             <Statistic
//               title="Total Watch Time"
//               value={analyticsData.summary?.totalWatchTime || 0}
//               suffix="mins"
//               prefix={<ClockCircleOutlined />}
//             />
//           </Card>
//         </Col>
//         <Col xs={12} sm={12} md={6}>
//           <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//             <Statistic
//               title="Unique Viewers"
//               value={analyticsData.summary?.uniqueViewers || 0}
//               prefix={<UserOutlined />}
//             />
//           </Card>
//         </Col>
//         <Col xs={12} sm={12} md={6}>
//           <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//             <Statistic
//               title="Engagement Rate"
//               value={analyticsData.summary?.engagementRate || 0}
//               suffix="%"
//               prefix={<LikeOutlined />}
//               precision={1}
//             />
//           </Card>
//         </Col>
//       </Row>

//       <Divider style={{ margin: "16px 0" }} />

//       <Tabs
//         defaultActiveKey="views"
//         size={isMobile ? "small" : "middle"}
//         items={[
//           {
//             key: "views",
//             label: "Views Over Time",
//             children: (
//               <Card title="Views Trend" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//                 {renderViewsChart()}
//               </Card>
//             ),
//           },
//           {
//             key: "engagement",
//             label: "Engagement",
//             children: (
//               <Card title="Engagement Metrics" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//                 {renderEngagementChart()}
//               </Card>
//             ),
//           },
//           {
//             key: "devices",
//             label: "Devices",
//             children: (
//               <Card title="Device Breakdown" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//                 {renderDeviceChart()}
//               </Card>
//             ),
//           },
//           {
//             key: "topVideos",
//             label: "Top Videos",
//             children: (
//               <Card title="Top Performing Videos" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//                 {renderTopVideosTable()}
//               </Card>
//             ),
//           },
//         ]}
//       />

//       <Divider style={{ margin: "16px 0" }} />

//       <Row gutter={[16, 16]}>
//         <Col span={24}>
//           <Card title="Audience Demographics" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//             <Row gutter={[16, 16]}>
//               <Col xs={24} md={12}>
//                 <Title level={5}>Age Distribution</Title>
//                 {analyticsData.demographics?.ageDistribution ? (
//                   <ResponsiveContainer width="100%" height={isMobile ? 150 : 200}>
//                     <BarChart data={analyticsData.demographics.ageDistribution}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="age" tick={{ fontSize: isMobile ? 10 : 12 }} />
//                       <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
//                       <Tooltip />
//                       <Bar dataKey="percentage" fill="#8884d8" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 ) : (
//                   <Empty description="No age data available" />
//                 )}
//               </Col>
//               <Col xs={24} md={12}>
//                 <Title level={5}>Geographic Distribution</Title>
//                 {analyticsData.demographics?.geoDistribution ? (
//                   <ResponsiveContainer width="100%" height={isMobile ? 150 : 200}>
//                     <PieChart>
//                       <Pie
//                         data={analyticsData.demographics.geoDistribution}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={isMobile ? 60 : 80}
//                         fill="#8884d8"
//                         dataKey="value"
//                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       >
//                         {analyticsData.demographics.geoDistribution.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 ) : (
//                   <Empty description="No geographic data available" />
//                 )}
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default VideoAnalytics

import { useState } from "react"
import {
  Card,
  Row,
  Col,
  Statistic,
  Select,
  DatePicker,
  Button,
  Space,
  Table,
  Tabs,
  Empty,
  Spin,
  Typography,
  Divider,
  Grid,
} from "antd"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { EyeOutlined, LikeOutlined, ClockCircleOutlined, UserOutlined, ReloadOutlined } from "@ant-design/icons"

const { RangePicker } = DatePicker
const { Title, Text } = Typography
const { useBreakpoint } = Grid

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

const VideoAnalytics = ({ analyticsData, loading, timeRange, setTimeRange, onRefresh, videos, isMobile }) => {
  const [selectedVideo, setSelectedVideo] = useState("all")
  const screens = useBreakpoint()

  const handleTimeRangeChange = (value) => {
    setTimeRange(value)
  }

  const handleVideoChange = (value) => {
    setSelectedVideo(value)
  }

  const getTopVideos = () => {
    return videos
      .slice()
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)
      .map((video) => ({
        id: video.id,
        title: video.title,
        views: video.views,
        likes: video.likes,
      }))
  }

  const renderViewsChart = () => {
    if (!analyticsData.viewsOverTime || analyticsData.viewsOverTime.length === 0) {
      return <Empty description="No views data available" />
    }

    return (
      <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
        <LineChart data={analyticsData.viewsOverTime} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: isMobile ? 10 : 12 }} />
          <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
          <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uniqueViewers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  const renderEngagementChart = () => {
    if (!analyticsData.engagement || analyticsData.engagement.length === 0) {
      return <Empty description="No engagement data available" />
    }

    return (
      <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
        <BarChart data={analyticsData.engagement} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: isMobile ? 10 : 12 }} />
          <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
          <Bar dataKey="likes" fill="#8884d8" />
          <Bar dataKey="comments" fill="#82ca9d" />
          <Bar dataKey="shares" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  const renderDeviceChart = () => {
    if (!analyticsData.deviceBreakdown || analyticsData.deviceBreakdown.length === 0) {
      return <Empty description="No device data available" />
    }

    return (
      <ResponsiveContainer width="100%" height={isMobile ? 300 : 300}>
        <PieChart>
          <Pie
            data={analyticsData.deviceBreakdown}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={isMobile ? 80 : 100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {analyticsData.deviceBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              fontSize: isMobile ? 12 : 14,
              padding: isMobile ? 8 : 10 
            }}
          />
          <Legend 
            wrapperStyle={{ 
              fontSize: isMobile ? 11 : 12,
              paddingTop: isMobile ? 10 : 0
            }} 
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }

  const renderTopVideosTable = () => {
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        ellipsis: true,
      },
      {
        title: "Views",
        dataIndex: "views",
        key: "views",
        sorter: (a, b) => a.views - b.views,
        defaultSortOrder: "descend",
        width: 100,
      },
      {
        title: "Likes",
        dataIndex: "likes",
        key: "likes",
        sorter: (a, b) => a.likes - b.likes,
        width: 100,
      },
    ]

    return (
      <Table
        dataSource={getTopVideos()}
        columns={columns}
        rowKey="id"
        pagination={false}
        size="small"
        scroll={{ x: "max-content" }}
      />
    )
  }

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: isMobile ? 200 : 400 }}>
        <Spin size="large" tip="Loading analytics data..." />
      </div>
    )
  }

  return (
    <div>
      <Space style={{ marginBottom: 24, width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Space wrap>
          <Select style={{ width: isMobile ? 120 : 150 }} value={timeRange} onChange={handleTimeRangeChange}>
            <Select.Option value="7d">Last 7 Days</Select.Option>
            <Select.Option value="30d">Last 30 Days</Select.Option>
            <Select.Option value="90d">Last 90 Days</Select.Option>
            <Select.Option value="1y">Last Year</Select.Option>
          </Select>
          <Select
            style={{ width: isMobile ? 150 : 200 }}
            value={selectedVideo}
            onChange={handleVideoChange}
            placeholder="Select video"
            showSearch
            optionFilterProp="children"
          >
            <Select.Option value="all">All Videos</Select.Option>
            {videos.map((video) => (
              <Select.Option key={video.id} value={video.id}>
                {video.title}
              </Select.Option>
            ))}
          </Select>
        </Space>
        <Button icon={<ReloadOutlined />} onClick={onRefresh}>
          {!isMobile && "Refresh"}
        </Button>
      </Space>

      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} md={6}>
          <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
            <Statistic title="Total Views" value={analyticsData.summary?.totalViews || 0} prefix={<EyeOutlined />} />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
            <Statistic
              title="Total Watch Time"
              value={analyticsData.summary?.totalWatchTime || 0}
              suffix="mins"
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
            <Statistic
              title="Unique Viewers"
              value={analyticsData.summary?.uniqueViewers || 0}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card bodyStyle={{ padding: isMobile ? 12 : 24 }}>
            <Statistic
              title="Engagement Rate"
              value={analyticsData.summary?.engagementRate || 0}
              suffix="%"
              prefix={<LikeOutlined />}
              precision={1}
            />
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: "16px 0" }} />

      <Tabs
        defaultActiveKey="views"
        size={isMobile ? "small" : "middle"}
        items={[
          {
            key: "views",
            label: "Views Over Time",
            children: (
              <Card title="Views Trend" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
                {renderViewsChart()}
              </Card>
            ),
          },
          {
            key: "engagement",
            label: "Engagement",
            children: (
              <Card title="Engagement Metrics" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
                {renderEngagementChart()}
              </Card>
            ),
          },
          {
            key: "devices",
            label: "Devices",
            children: (
              <Card title="Device Breakdown" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
                {renderDeviceChart()}
              </Card>
            ),
          },
          {
            key: "topVideos",
            label: "Top Videos",
            children: (
              <Card title="Top Performing Videos" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
                {renderTopVideosTable()}
              </Card>
            ),
          },
        ]}
      />

      <Divider style={{ margin: "16px 0" }} />

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Audience Demographics" bodyStyle={{ padding: isMobile ? 12 : 24 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Title level={5}>Age Distribution</Title>
                {analyticsData.demographics?.ageDistribution ? (
                  <ResponsiveContainer width="100%" height={isMobile ? 300 : 300}>
                    <BarChart data={analyticsData.demographics.ageDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="age" 
                        tick={{ fontSize: isMobile ? 10 : 12 }} 
                        interval={isMobile ? 1 : 0}
                        height={isMobile ? 40 : 30}
                      />
                      <YAxis 
                        tick={{ fontSize: isMobile ? 10 : 12 }} 
                        width={isMobile ? 45 : 60}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          fontSize: isMobile ? 12 : 14,
                          padding: isMobile ? 8 : 10 
                        }}
                      />
                      <Bar 
                        dataKey="percentage" 
                        fill="#8884d8" 
                        barSize={isMobile ? 25 : 30}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <Empty description="No age data available" />
                )}
              </Col>
              <Col xs={24} md={12}>
                <Title level={5}>Geographic Distribution</Title>
                {analyticsData.demographics?.geoDistribution ? (
                  <ResponsiveContainer width="100%" height={isMobile ? 300 : 300}>
                    <PieChart>
                      <Pie
                        data={analyticsData.demographics.geoDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={isMobile ? 80 : 90}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={true}
                      >
                        {analyticsData.demographics.geoDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          fontSize: isMobile ? 12 : 14,
                          padding: isMobile ? 8 : 10 
                        }}
                      />
                      <Legend 
                        wrapperStyle={{ 
                          fontSize: isMobile ? 11 : 12,
                          paddingTop: isMobile ? 10 : 0
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <Empty description="No geographic data available" />
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default VideoAnalytics