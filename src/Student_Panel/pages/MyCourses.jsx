

// "use client";

// import { useState, useEffect } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Typography,
//   Button,
//   Space,
//   Tabs,
//   Tag,
//   Progress,
//   Empty,
//   Input,
//   Select,
//   Pagination,
//   Dropdown,
//   Menu,
//   message,
//   List,
//   Avatar,
//   Badge,
//   Statistic,
// } from "antd";
// import {
//   PlayCircleOutlined,
//   ClockCircleOutlined,
//   BookOutlined,
//   CheckCircleOutlined,
//   MoreOutlined,
//   TrophyOutlined,
//   HeartOutlined,
//   HeartFilled,
//   SearchOutlined,
//   FileDoneOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import { useGlobalStore } from "../contexts/GlobalStore";

// const { Title, Text, Paragraph } = Typography;
// const { Search } = Input;
// const { Option } = Select;
// const { TabPane } = Tabs;

// export default function MyCourses({ windowWidth }) {
//   const { courses, enrolledCourses, progress, assignments, dispatch } = useGlobalStore();
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortBy, setSortBy] = useState("recent");
//   const [filterCategory, setFilterCategory] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(9);
//   const [expandedVideoId, setExpandedVideoId] = useState(null);
//   const [showPlayer, setShowPlayer] = useState(false);
//   const [activeVideo, setActiveVideo] = useState(null);

//   const navigate = useNavigate();
//   const isMobile = windowWidth < 768;
//   const TEAL_900 = "#004d4d";
// const WHITE = "#ffffff";

//   // Compute enriched course data
//   const [courseData, setCourseData] = useState([]);
//   useEffect(() => {
//     const enriched = enrolledCourses
//       .map(id => {
//         const course = courses.find(c => c.id === id);
//         if (!course) return null;

//         const prog = progress[course.id] || { completedVideos: [] };
//         const completedCount = prog.completedVideos.length;
//         const totalVideos = course.videos?.length || 0;
//         const progressPercent = totalVideos > 0 ? Math.round((completedCount / totalVideos) * 100) : 0;

//         return {
//           ...course,
//           progress: progressPercent,
//           completedLessons: completedCount,
//           completedDuration: prog.completedVideos.reduce((sum, vidId) => {
//             const vid = course.videos?.find(v => v.id === vidId);
//             return sum + (vid?.duration || 0);
//           }, 0),
//           status: progressPercent === 100 ? "completed" : "in-progress",
//           lastAccessed: prog.lastAccessed || new Date().toISOString(),
//         };
//       })
//       .filter(Boolean);

//     setCourseData(enriched);
//   }, [courses, enrolledCourses, progress]);

//   // Apply filters & sorting
//   useEffect(() => {
//     filterAndSortCourses();
//   }, [activeTab, searchQuery, sortBy, filterCategory, courseData]);

//   const filterAndSortCourses = () => {
//     let filtered = courseData

//     if (activeTab === "in-progress") filtered = filtered.filter(c => c.status === "in-progress");
//     if (activeTab === "completed") filtered = filtered.filter(c => c.status === "completed");
//     if (activeTab === "favorites") filtered = filtered.filter(c => c.isFavorite);

//     if (searchQuery) {
//       const q = searchQuery.toLowerCase();
//       filtered = filtered.filter(c =>
//         c.title.toLowerCase().includes(q) ||
//         c.description?.toLowerCase().includes(q) ||
//         c.instructor.toLowerCase().includes(q)
//       );
//     }

//     if (filterCategory !== "all") {
//       filtered = filtered.filter(c => c.category === filterCategory);
//     }

//     if (sortBy === "recent") {
//       filtered.sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed));
//     } else if (sortBy === "title-asc") {
//       filtered.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortBy === "title-desc") {
//       filtered.sort((a, b) => b.title.localeCompare(a.title));
//     } else if (sortBy === "progress") {
//       filtered.sort((a, b) => b.progress - a.progress);
//     }

//     setFilteredCourses(filtered);
//   };

//   const toggleFavorite = (courseId) => {
//     message.info("Favorite toggle not implemented in global store yet");
//   };

//   const handleOpenVideo = (course, video) => {
//     if (!video) {
//       message.warning("No video available.");
//       return;
//     }
//     setActiveVideo({ course, video });
//     setShowPlayer(true);
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   const formatDuration = (minutes) => {
//     const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return `${hours}h ${mins}m`;
//   };

//   const renderCourseCard = (course) => {
//     // 🔹 FIX: Use .includes() instead of .has()
//     const nextVideo = course.videos?.find(v => {
//       const prog = progress[course.id];
//       return prog ? !prog.completedVideos.includes(v.id) : v.id === course.videos[0].id;
//     }) || course.videos?.[0];

//     return (
//       <Card
//         hoverable
//         cover={
//           <div style={{ position: "relative" }}>
//             <img
//               alt={course.title}
//               src={course.thumbnail}
//               style={{ height: 200, objectFit: "cover", width: "100%" }}
//             />
//             {course.status === "completed" && <Badge.Ribbon text="Certificate Earned" color="gold" />}
//             <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "30px 16px 8px" }}>
//               <Progress percent={course.progress} size="small" status={course.progress === 100 ? "success" : "active"} />
//             </div>
//           </div>
//         }
//         actions={[
//           course.status === "completed" ? (
//             <Button type="primary" icon={<TrophyOutlined />} onClick={() => navigate("/Student-portal/certificates")} key="cert"  style={{
//                       backgroundColor: TEAL_900,
//                       borderColor: TEAL_900,
//                       color: WHITE,
//                     }}>
//               View Certificate
//             </Button>
//           ) : (
//             <Button type="primary" icon={<PlayCircleOutlined />} onClick={() => handleOpenVideo(course, nextVideo)} key="continue"  style={{
//                       backgroundColor: TEAL_900,
//                       borderColor: TEAL_900,
//                       color: WHITE,
//                     }}>
//               Continue
//             </Button>
//           ),
//         ]}
//       >
//         <Card.Meta
//           title={<Text ellipsis>{course.title}</Text>}
//           description={
//             <Space direction="vertical" size="small" style={{ width: "100%" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <Avatar src={course.instructorAvatar} size="small" />
//                 <Text type="secondary" ellipsis>{course.instructor}</Text>
//               </div>
//               <div>
//                 <Tag color={course.category === "IT" ? "blue" : "purple"}>{course.subcategory}</Tag>
//                 <Tag color={course.status === "completed" ? "success" : "processing"}>{course.status === "completed" ? "Completed" : "In Progress"}</Tag>
//               </div>
//               <Text type="secondary" style={{ fontSize: 12 }}>
//                 <ClockCircleOutlined style={{ marginRight: 4 }} /> Last accessed: {formatDate(course.lastAccessed)}
//               </Text>
//               <Text type="secondary" style={{ fontSize: 12 }}>
//                 <BookOutlined style={{ marginRight: 4 }} /> {course.completedLessons}/{course.totalLessons} lessons
//               </Text>
//               <Text type="secondary" style={{ fontSize: 12 }}>
//                 <ClockCircleOutlined style={{ marginRight: 4 }} /> {formatDuration(course.completedDuration)} / {formatDuration(course.totalDuration)}
//               </Text>
//             </Space>
//           }
//         />
//       </Card>
//     );
//   };

//   return (
//     <div className="my-courses-container" style={{ padding: "24px" }}>
//       <Title level={4}>My Courses</Title>
//       <Paragraph type="secondary">Access and manage all your enrolled courses</Paragraph>

//       {/* Stats */}
//       <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
//         <Col xs={24} sm={12} md={12} lg={8} xl={4}>
//           <Card><Statistic title="Total Courses" value={enrolledCourses.length} prefix={<BookOutlined />} /></Card>
//         </Col>
//         <Col xs={24} sm={12} md={12} lg={8} xl={4}>
//           <Card>
//             <Statistic
//               title="Completed"
//               // 🔹 FIX: Use .length instead of .size
//               value={enrolledCourses.filter(id => {
//                 const c = courses.find(x => x.id === id);
//                 const p = progress[id];
//                 return c && p && p.completedVideos.length === (c.videos?.length || 0);
//               }).length}
//               prefix={<CheckCircleOutlined />}
//             />
//           </Card>
//         </Col>
//       </Row>

//       {/* Tabs & Filters */}
//       <Tabs activeKey={activeTab} onChange={setActiveTab} style={{ marginBottom: 24 }}>
//         <TabPane tab="All Courses" key="all" />
//         <TabPane tab="In Progress" key="in-progress" />
//         <TabPane tab="Completed" key="completed" />
//       </Tabs>

//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, flexDirection: isMobile ? "column" : "row", gap: isMobile ? 16 : 0 }}>
//         <Search placeholder="Search courses..." onSearch={setSearchQuery} style={{ width: isMobile ? "100%" : 300 }} prefix={<SearchOutlined />} />
//         <Space wrap>
//           <Select defaultValue="all" style={{ width: 150 }} onChange={setFilterCategory}>
//             <Option value="all">All Categories</Option>
//             <Option value="IT">IT Courses</Option>
//             <Option value="Non-IT">Non-IT Courses</Option>
//           </Select>
//           <Select defaultValue="recent" style={{ width: 150 }} onChange={setSortBy}>
//             <Option value="recent">Recently Accessed</Option>
//             <Option value="title-asc">Title (A-Z)</Option>
//             <Option value="title-desc">Title (Z-A)</Option>
//             <Option value="progress">Progress</Option>
//           </Select>
//         </Space>
//       </div>

//       {/* Courses */}
//       {filteredCourses.length === 0 ? (
//         <Empty description="No courses found" />
//       ) : (
//         <>
//           <Row gutter={[24, 24]}>
//             {filteredCourses
//               .slice((currentPage - 1) * pageSize, currentPage * pageSize)
//               .map(course => (
//                 <Col xs={24} sm={12} lg={8} key={course.id}>
//                   {renderCourseCard(course)}
//                 </Col>
//               ))}
//           </Row>
//           {filteredCourses.length > pageSize && (
//             <div style={{ textAlign: "center", marginTop: 24 }}>
//               <Pagination
//                 current={currentPage}
//                 pageSize={pageSize}
//                 total={filteredCourses.length}
//                 onChange={(page) => setCurrentPage(page)}
//                 showSizeChanger
//                 onShowSizeChange={(_, size) => {
//                   setCurrentPage(1);
//                   setPageSize(size);
//                 }}
//               />
//             </div>
//           )}
//         </>
//       )}

//       {/* Video Player Modal */}
//       {showPlayer && activeVideo && (
//         <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.85)", zIndex: 1001, display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <div style={{ backgroundColor: "white", borderRadius: 8, maxWidth: "900px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
//             <div style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0" }}>
//               <Title level={5} style={{ margin: 0 }}>{activeVideo.video.title}</Title>
//               <Button type="text" onClick={() => setShowPlayer(false)}>✕</Button>
//             </div>
//             <div style={{ padding: "16px" }}>
//               {activeVideo.video.url ? (
//                 <video
//                   controls
//                   width="100%"
//                   style={{ borderRadius: 8, backgroundColor: "#000" }}
//                   src={activeVideo.video.url}
//                   onEnded={() => {
//                     dispatch({ type: "COMPLETE_VIDEO", courseId: activeVideo.course.id, videoId: activeVideo.video.id });
//                     message.success("Video completed!");
//                     setShowPlayer(false);
//                   }}
//                 />
//               ) : (
//                 <div style={{ padding: 24 }}>
//                   <Text type="warning">No video URL available for this lesson.</Text>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Space,
  Tabs,
  Tag,
  Progress,
  Empty,
  Input,
  Select,
  Pagination,
  Dropdown,
  Menu,
  message,
  List,
  Avatar,
  Badge,
  Statistic,
} from "antd";
import {
  PlayCircleOutlined,
  ClockCircleOutlined,
  BookOutlined,
  CheckCircleOutlined,
  MoreOutlined,
  TrophyOutlined,
  HeartOutlined,
  HeartFilled,
  SearchOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store
import VideoPlayerModal from "../components/VideoPlayerModal";

const { Title, Text, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

export default function MyCourses({ windowWidth }) {
  const { courses, enrolledCourses, progress, assignments, dispatch } = useGlobalStore();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [expandedVideoId, setExpandedVideoId] = useState(null);
  // const [showPlayer, setShowPlayer] = useState(false);
  // const [activeVideo, setActiveVideo] = useState(null);
  const [videoModal, setVideoModal] = useState({
  open: false,
  course: null,
  video: null
});

  const navigate = useNavigate();
  const isMobile = windowWidth < 768;
  const TEAL_900 = "#004d4d";
const WHITE = "#ffffff";

  // Compute enriched course data
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const enriched = enrolledCourses
      .map(id => {
        const course = courses.find(c => c.id === id);
        if (!course) return null;

        const prog = progress[course.id] || { completedVideos: [] };
        const completedCount = prog.completedVideos.length;
        const totalVideos = course.videos?.length || 0;
        const progressPercent = totalVideos > 0 ? Math.round((completedCount / totalVideos) * 100) : 0;

        return {
          ...course,
          progress: progressPercent,
          completedLessons: completedCount,
          completedDuration: prog.completedVideos.reduce((sum, vidId) => {
            const vid = course.videos?.find(v => v.id === vidId);
            return sum + (vid?.duration || 0);
          }, 0),
          status: progressPercent === 100 ? "completed" : "in-progress",
          lastAccessed: prog.lastAccessed || new Date().toISOString(),
        };
      })
      .filter(Boolean);

    setCourseData(enriched);
  }, [courses, enrolledCourses, progress]);

  // Apply filters & sorting
  useEffect(() => {
    filterAndSortCourses();
  }, [activeTab, searchQuery, sortBy, filterCategory, courseData]);

  const filterAndSortCourses = () => {
    let filtered = courseData

    if (activeTab === "in-progress") filtered = filtered.filter(c => c.status === "in-progress");
    if (activeTab === "completed") filtered = filtered.filter(c => c.status === "completed");
    if (activeTab === "favorites") filtered = filtered.filter(c => c.isFavorite);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q)
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(c => c.category === filterCategory);
    }

    if (sortBy === "recent") {
      filtered.sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed));
    } else if (sortBy === "title-asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "progress") {
      filtered.sort((a, b) => b.progress - a.progress);
    }

    setFilteredCourses(filtered);
  };

  const toggleFavorite = (courseId) => {
    message.info("Favorite toggle not implemented in global store yet");
  };

const handleOpenVideo = (course, video) => {
  if (!video) {
    message.warning("No video available.");
    return;
  }
  setVideoModal({
    open: true,
    course,
    video
  });
};
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const renderCourseCard = (course) => {
    // 🔹 FIX: Use .includes() instead of .has()
    const nextVideo = course.videos?.find(v => {
      const prog = progress[course.id];
      return prog ? !prog.completedVideos.includes(v.id) : v.id === course.videos[0].id;
    }) || course.videos?.[0];

    return (
      <Card
        hoverable
        cover={
          <div style={{ position: "relative" }}>
            <img
              alt={course.title}
              src={course.thumbnail}
              style={{ height: 200, objectFit: "cover", width: "100%" }}
            />
            {course.status === "completed" && <Badge.Ribbon text="Certificate Earned" color="gold" />}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "30px 16px 8px" }}>
              <Progress percent={course.progress} size="small" status={course.progress === 100 ? "success" : "active"} />
            </div>
          </div>
        }
        actions={[
          course.status === "completed" ? (
            <>
            <Button type="primary" icon={<TrophyOutlined />} onClick={() => navigate("/Student-portal/certificates")} key="cert"  style={{
                      backgroundColor: TEAL_900,
                      borderColor: TEAL_900,
                      color: WHITE,
                    }}>
              View Certificate
            </Button>
            <Button type="default" icon={<BookOutlined />} onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)} key="details" style={{
              marginLeft: 8,
              backgroundColor: TEAL_900,
              borderColor: TEAL_900,
              color: WHITE,
            }}>
              Syllabus
            </Button></>
          ) : (
            <>
            <Button type="primary" icon={<PlayCircleOutlined />} onClick={() => handleOpenVideo(course, nextVideo)} key="continue"  style={{
                      backgroundColor: TEAL_900,
                      borderColor: TEAL_900,
                      color: WHITE,
                    }}>
              Continue
            </Button>
            <Button type="default" icon={<BookOutlined />} onClick={() => navigate(`/Student-portal/syllabus/${course.id}`)} key="details" style={{
              margin: 8,
             backgroundColor: TEAL_900,
              borderColor: TEAL_900,
              color: WHITE,
            }}>
              Syllabus
            </Button></>
          ),
        ]}
      >
        <Card.Meta
          title={<Text ellipsis>{course.title}</Text>}
          description={
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Avatar src={course.instructorAvatar} size="small" />
                <Text type="secondary" ellipsis>{course.instructor}</Text>
              </div>
              <div>
                <Tag color={course.category === "IT" ? "blue" : "purple"}>{course.subcategory}</Tag>
                <Tag color={course.status === "completed" ? "success" : "processing"}>{course.status === "completed" ? "Completed" : "In Progress"}</Tag>
              </div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                <ClockCircleOutlined style={{ marginRight: 4 }} /> Last accessed: {formatDate(course.lastAccessed)}
              </Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                <BookOutlined style={{ marginRight: 4 }} /> {course.completedLessons}/{course.totalLessons} lessons
              </Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                <ClockCircleOutlined style={{ marginRight: 4 }} /> {formatDuration(course.completedDuration)} / {formatDuration(course.totalDuration)}
              </Text>
            </Space>
          }
        />
      </Card>
    );
  };

  return (
    <div className="my-courses-container" style={{ padding: "24px" }}>
      <Title level={4}>My Courses</Title>
      <Paragraph type="secondary">Access and manage all your enrolled courses</Paragraph>

      {/* Stats */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={12} lg={8} xl={4}>
          <Card><Statistic title="Total Courses" value={enrolledCourses.length} prefix={<BookOutlined />} /></Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={4}>
          <Card>
            <Statistic
              title="Completed"
              // 🔹 FIX: Use .length instead of .size
              value={enrolledCourses.filter(id => {
                const c = courses.find(x => x.id === id);
                const p = progress[id];
                return c && p && p.completedVideos.length === (c.videos?.length || 0);
              }).length}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Tabs & Filters */}
      <Tabs activeKey={activeTab} onChange={setActiveTab} style={{ marginBottom: 24 }}>
        <TabPane tab="All Courses" key="all" />
        <TabPane tab="In Progress" key="in-progress" />
        <TabPane tab="Completed" key="completed" />
      </Tabs>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, flexDirection: isMobile ? "column" : "row", gap: isMobile ? 16 : 0 }}>
        <Search placeholder="Search courses..." onSearch={setSearchQuery} style={{ width: isMobile ? "100%" : 300 }} prefix={<SearchOutlined />} />
        <Space wrap>
          <Select defaultValue="all" style={{ width: 150 }} onChange={setFilterCategory}>
            <Option value="all">All Categories</Option>
            <Option value="IT">IT Courses</Option>
            <Option value="Non-IT">Non-IT Courses</Option>
          </Select>
          <Select defaultValue="recent" style={{ width: 150 }} onChange={setSortBy}>
            <Option value="recent">Recently Accessed</Option>
            <Option value="title-asc">Title (A-Z)</Option>
            <Option value="title-desc">Title (Z-A)</Option>
            <Option value="progress">Progress</Option>
          </Select>
        </Space>
      </div>

      {/* Courses */}
      {filteredCourses.length === 0 ? (
        <Empty description="No courses found" />
      ) : (
        <>
          <Row gutter={[24, 24]}>
            {filteredCourses
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map(course => (
                <Col xs={24} sm={12} lg={8} key={course.id}>
                  {renderCourseCard(course)}
                </Col>
              ))}
          </Row>
          {filteredCourses.length > pageSize && (
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredCourses.length}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger
                onShowSizeChange={(_, size) => {
                  setCurrentPage(1);
                  setPageSize(size);
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Video Player Modal */}
    {/* Reusable Video Player Modal */}
<VideoPlayerModal
  open={videoModal.open}
  onClose={() => setVideoModal({ open: false, course: null, video: null })}
  course={videoModal.course}
  video={videoModal.video}
  dispatch={dispatch}
/>
    </div>
  );
}