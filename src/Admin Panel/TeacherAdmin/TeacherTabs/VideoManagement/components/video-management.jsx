// "use client"

// import { useState } from "react"
// import {
//   Table,
//   Card,
//   Button,
//   Input,
//   Space,
//   Tag,
//   Dropdown,
//   Menu,
//   Modal,
//   Form,
//   Select,
//   Row,
//   Col,
//   Tooltip,
//   Typography,
//   Statistic,
//   Upload,
//   message,
//   Divider,
//   List,
//   Collapse,
//   Grid,
// } from "antd"
// import {
//   SearchOutlined,
//   FilterOutlined,
//   MoreOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   EyeOutlined,
//   ShareAltOutlined,
//   PlusOutlined,
//   CloudUploadOutlined,
//   PlayCircleOutlined,
//   CheckCircleOutlined,
//   CloseCircleOutlined,
//   ClockCircleOutlined,
//   InboxOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons"
// import VideoPreviewModal from "./video-preview-modal"

// const { Title, Text } = Typography
// const { Option } = Select
// const { Dragger } = Upload
// const { confirm } = Modal
// const { Panel } = Collapse
// const { useBreakpoint } = Grid

// const VideoManagement = ({
//   videos,
//   loading,
//   searchQuery,
//   setSearchQuery,
//   filterStatus,
//   setFilterStatus,
//   sortBy,
//   setSortBy,
//   sortOrder,
//   setSortOrder,
//   onAdd,
//   onUpdate,
//   onDelete,
//   onStatusChange,
//   onRefresh,
//   playlists,
//   addToPlaylist,
//   stats,
//   isMobile,
// }) => {
//   const [isUploadModalVisible, setIsUploadModalVisible] = useState(false)
//   const [isEditModalVisible, setIsEditModalVisible] = useState(false)
//   const [isPreviewModalVisible, setIsPreviewModalVisible] = useState(false)
//   const [selectedVideo, setSelectedVideo] = useState(null)
//   const [form] = Form.useForm()
//   const [messageApi, contextHolder] = message.useMessage()
//   const [filtersVisible, setFiltersVisible] = useState(false)

//   const screens = useBreakpoint()
//   const isTablet = !screens.lg && screens.md

//   const handleSearch = (value) => {
//     setSearchQuery(value)
//   }

//   const handleFilterChange = (value) => {
//     setFilterStatus(value)
//   }

//   const handleSortChange = (value) => {
//     const [field, order] = value.split("-")
//     setSortBy(field)
//     setSortOrder(order)
//   }

//   const showUploadModal = () => {
//     setIsUploadModalVisible(true)
//   }

//   const showEditModal = (video) => {
//     setSelectedVideo(video)
//     form.setFieldsValue({
//       title: video.title,
//       description: video.description,
//       category: video.category,
//       tags: video.tags,
//       visibility: video.visibility,
//     })
//     setIsEditModalVisible(true)
//   }

//   const showPreviewModal = (video) => {
//     setSelectedVideo(video)
//     setIsPreviewModalVisible(true)
//   }

//   const handleDeleteVideo = (video) => {
//     confirm({
//       title: `Are you sure you want to delete "${video.title}"?`,
//       content: "This action cannot be undone.",
//       okText: "Yes, Delete",
//       okType: "danger",
//       cancelText: "Cancel",
//       onOk: async () => {
//         try {
//           await onDelete(video.id)
//           messageApi.success("Video deleted successfully")
//         } catch (error) {
//           messageApi.error("Failed to delete video")
//           console.error("Delete error:", error)
//         }
//       },
//     })
//   }

//   const handleStatusChange = async (videoId, status) => {
//     try {
//       await onStatusChange(videoId, status)
//       messageApi.success(`Video marked as ${status}`)
//     } catch (error) {
//       messageApi.error("Failed to update status")
//       console.error("Status update error:", error)
//     }
//   }

//   const handleAddToPlaylist = async (videoId, playlistId) => {
//     try {
//       await addToPlaylist(playlistId, videoId)
//       messageApi.success("Added to playlist")
//     } catch (error) {
//       messageApi.error("Failed to add to playlist")
//       console.error("Add to playlist error:", error)
//     }
//   }

//   const handleUploadSubmit = async (values) => {
//     try {
//       const newVideo = {
//         id: `video-${Date.now()}`,
//         title: values.title,
//         description: values.description,
//         url: values.url || "https://example.com/placeholder-video.mp4",
//         thumbnailUrl: values.thumbnailUrl || "/placeholder.svg?height=180&width=320",
//         duration: values.duration || "10:00",
//         uploadDate: new Date().toISOString(),
//         status: "Pending",
//         views: 0,
//         likes: 0,
//         category: values.category,
//         tags: values.tags || [],
//         visibility: values.visibility || "Private",
//       }

//       await onAdd(newVideo)
//       setIsUploadModalVisible(false)
//       form.resetFields()
//       messageApi.success("Video uploaded successfully")
//     } catch (error) {
//       messageApi.error("Failed to upload video")
//       console.error("Upload error:", error)
//     }
//   }

//   const handleEditSubmit = async (values) => {
//     if (!selectedVideo) return

//     try {
//       await onUpdate(selectedVideo.id, {
//         title: values.title,
//         description: values.description,
//         category: values.category,
//         tags: values.tags,
//         visibility: values.visibility,
//       })
//       setIsEditModalVisible(false)
//       messageApi.success("Video updated successfully")
//     } catch (error) {
//       messageApi.error("Failed to update video")
//       console.error("Update error:", error)
//     }
//   }

//   const uploadProps = {
//     name: "file",
//     multiple: false,
//     action: "https://api.example.com/upload",
//     onChange(info) {
//       const { status } = info.file
//       if (status === "done") {
//         messageApi.success(`${info.file.name} file uploaded successfully.`)
//         form.setFieldsValue({ url: info.file.response.url })
//       } else if (status === "error") {
//         messageApi.error(`${info.file.name} file upload failed.`)
//       }
//     },
//   }

//   const getStatusTag = (status) => {
//     switch (status) {
//       case "Approved":
//         return (
//           <Tag icon={<CheckCircleOutlined />} color="success">
//             Approved
//           </Tag>
//         )
//       case "Rejected":
//         return (
//           <Tag icon={<CloseCircleOutlined />} color="error">
//             Rejected
//           </Tag>
//         )
//       case "Pending":
//         return (
//           <Tag icon={<ClockCircleOutlined />} color="warning">
//             Pending
//           </Tag>
//         )
//       default:
//         return <Tag color="default">{status}</Tag>
//     }
//   }

//   const columns = [
//     {
//       title: "Thumbnail",
//       dataIndex: "thumbnailUrl",
//       key: "thumbnailUrl",
//       width: 120,
//       render: (thumbnailUrl, record) => (
//         <div style={{ position: "relative", cursor: "pointer" }} onClick={() => showPreviewModal(record)}>
//           <img
//             src={thumbnailUrl || "/placeholder.svg?height=60&width=100"}
//             alt={record.title}
//             style={{ width: 100, height: 60, objectFit: "cover", borderRadius: 4 }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               color: "white",
//               textShadow: "0 0 5px rgba(0,0,0,0.7)",
//             }}
//           >
//             <PlayCircleOutlined style={{ fontSize: 24 }} />
//           </div>
//         </div>
//       ),
//       responsive: ["md"],
//     },
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//       sorter: true,
//       render: (text, record) => (
//         <div>
//           {isMobile && (
//             <div style={{ position: "relative", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>
//               <img
//                 src={record.thumbnailUrl || "/placeholder.svg?height=60&width=100"}
//                 alt={record.title}
//                 style={{ width: 100, height: 60, objectFit: "cover", borderRadius: 4 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   color: "white",
//                   textShadow: "0 0 5px rgba(0,0,0,0.7)",
//                 }}
//               >
//                 <PlayCircleOutlined style={{ fontSize: 24 }} />
//               </div>
//             </div>
//           )}
//           <Text strong>{text}</Text>
//           <div>
//             <Text type="secondary" style={{ fontSize: "12px" }}>
//               {record.duration} • {new Date(record.uploadDate).toLocaleDateString()}
//             </Text>
//           </div>
//           {isMobile && (
//             <div style={{ marginTop: 8 }}>
//               {getStatusTag(record.status)}
//               <Tag color="blue">{record.category}</Tag>
//               <div style={{ marginTop: 4 }}>
//                 <Space>
//                   <Tooltip title="Views">
//                     <span>
//                       <EyeOutlined /> {record.views}
//                     </span>
//                   </Tooltip>
//                   <Tooltip title="Likes">
//                     <span>👍 {record.likes}</span>
//                   </Tooltip>
//                 </Space>
//               </div>
//             </div>
//           )}
//         </div>
//       ),
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//       key: "category",
//       width: 120,
//       filters: [
//         { text: "Lectures", value: "Lectures" },
//         { text: "Tutorials", value: "Tutorials" },
//         { text: "Workshops", value: "Workshops" },
//         { text: "Presentations", value: "Presentations" },
//         { text: "Other", value: "Other" },
//       ],
//       render: (category) => <Tag color="blue">{category}</Tag>,
//       responsive: ["lg"],
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       width: 120,
//       filters: [
//         { text: "Approved", value: "Approved" },
//         { text: "Rejected", value: "Rejected" },
//         { text: "Pending", value: "Pending" },
//       ],
//       render: (status) => getStatusTag(status),
//       responsive: ["md"],
//     },
//     {
//       title: "Visibility",
//       dataIndex: "visibility",
//       key: "visibility",
//       width: 120,
//       filters: [
//         { text: "Public", value: "Public" },
//         { text: "Unlisted", value: "Unlisted" },
//         { text: "Private", value: "Private" },
//       ],
//       render: (visibility) => {
//         const color = visibility === "Public" ? "green" : visibility === "Unlisted" ? "orange" : "gray"
//         return <Tag color={color}>{visibility}</Tag>
//       },
//       responsive: ["lg"],
//     },
//     {
//       title: "Stats",
//       key: "stats",
//       width: 120,
//       render: (_, record) => (
//         <Space>
//           <Tooltip title="Views">
//             <span>
//               <EyeOutlined /> {record.views}
//             </span>
//           </Tooltip>
//           <Tooltip title="Likes">
//             <span>👍 {record.likes}</span>
//           </Tooltip>
//         </Space>
//       ),
//       responsive: ["md"],
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       width: 80,
//       render: (_, record) => (
//         <Dropdown
//           overlay={
//             <Menu
//               items={[
//                 {
//                   key: "1",
//                   icon: <EyeOutlined />,
//                   label: "Preview",
//                   onClick: () => showPreviewModal(record),
//                 },
//                 {
//                   key: "2",
//                   icon: <EditOutlined />,
//                   label: "Edit",
//                   onClick: () => showEditModal(record),
//                 },
//                 {
//                   key: "3",
//                   icon: <CheckCircleOutlined />,
//                   label: "Approve",
//                   onClick: () => handleStatusChange(record.id, "Approved"),
//                 },
//                 {
//                   key: "4",
//                   icon: <CloseCircleOutlined />,
//                   label: "Reject",
//                   onClick: () => handleStatusChange(record.id, "Rejected"),
//                 },
//                 {
//                   type: "divider",
//                 },
//                 {
//                   key: "5",
//                   icon: <ShareAltOutlined />,
//                   label: "Share",
//                   onClick: () => messageApi.info("Share functionality coming soon"),
//                 },
//                 {
//                   key: "6",
//                   icon: <PlusOutlined />,
//                   label: "Add to Playlist",
//                   children: playlists.map((playlist) => ({
//                     key: `playlist-${playlist.id}`,
//                     label: playlist.name,
//                     onClick: () => handleAddToPlaylist(record.id, playlist.id),
//                   })),
//                 },
//                 {
//                   type: "divider",
//                 },
//                 {
//                   key: "7",
//                   icon: <DeleteOutlined />,
//                   label: "Delete",
//                   danger: true,
//                   onClick: () => handleDeleteVideo(record),
//                 },
//               ]}
//             />
//           }
//           trigger={["click"]}
//         >
//           <Button type="text" icon={<MoreOutlined />} />
//         </Dropdown>
//       ),
//     },
//   ]

//   // Mobile list view
//   const renderMobileList = () => {
//     return (
//       <List
//         dataSource={videos}
//         loading={loading}
//         renderItem={(video) => (
//           <List.Item
//             key={video.id}
//             actions={[
//               <Button key="view" type="text" icon={<EyeOutlined />} onClick={() => showPreviewModal(video)} />,
//               <Button key="edit" type="text" icon={<EditOutlined />} onClick={() => showEditModal(video)} />,
//               <Dropdown
//                 key="more"
//                 overlay={
//                   <Menu
//                     items={[
//                       {
//                         key: "1",
//                         icon: <CheckCircleOutlined />,
//                         label: "Approve",
//                         onClick: () => handleStatusChange(video.id, "Approved"),
//                       },
//                       {
//                         key: "2",
//                         icon: <CloseCircleOutlined />,
//                         label: "Reject",
//                         onClick: () => handleStatusChange(video.id, "Rejected"),
//                       },
//                       {
//                         key: "3",
//                         icon: <ShareAltOutlined />,
//                         label: "Share",
//                         onClick: () => messageApi.info("Share functionality coming soon"),
//                       },
//                       {
//                         key: "4",
//                         icon: <PlusOutlined />,
//                         label: "Add to Playlist",
//                         children: playlists.map((playlist) => ({
//                           key: `playlist-${playlist.id}`,
//                           label: playlist.name,
//                           onClick: () => handleAddToPlaylist(video.id, playlist.id),
//                         })),
//                       },
//                       {
//                         key: "5",
//                         icon: <DeleteOutlined />,
//                         label: "Delete",
//                         danger: true,
//                         onClick: () => handleDeleteVideo(video),
//                       },
//                     ]}
//                   />
//                 }
//                 trigger={["click"]}
//               >
//                 <Button type="text" icon={<MoreOutlined />} />
//               </Dropdown>,
//             ]}
//           >
//             <List.Item.Meta
//               avatar={
//                 <div style={{ position: "relative", cursor: "pointer" }} onClick={() => showPreviewModal(video)}>
//                   <img
//                     src={video.thumbnailUrl || "/placeholder.svg?height=80&width=120"}
//                     alt={video.title}
//                     style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 4 }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "50%",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                       color: "white",
//                       textShadow: "0 0 5px rgba(0,0,0,0.7)",
//                     }}
//                   >
//                     <PlayCircleOutlined style={{ fontSize: 24 }} />
//                   </div>
//                 </div>
//               }
//               title={<Text strong>{video.title}</Text>}
//               description={
//                 <div>
//                   <Text type="secondary" style={{ fontSize: "12px" }}>
//                     {video.duration} • {new Date(video.uploadDate).toLocaleDateString()}
//                   </Text>
//                   <div style={{ marginTop: 8 }}>
//                     {getStatusTag(video.status)}
//                     <Tag color="blue">{video.category}</Tag>
//                   </div>
//                   <div style={{ marginTop: 4 }}>
//                     <Space>
//                       <Tooltip title="Views">
//                         <span>
//                           <EyeOutlined /> {video.views}
//                         </span>
//                       </Tooltip>
//                       <Tooltip title="Likes">
//                         <span>👍 {video.likes}</span>
//                       </Tooltip>
//                     </Space>
//                   </div>
//                 </div>
//               }
//             />
//           </List.Item>
//         )}
//         pagination={{
//           pageSize: 10,
//           showSizeChanger: true,
//           showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} videos`,
//         }}
//       />
//     )
//   }

//   return (
//     <>
//       {contextHolder}
//       <Card bordered={false} bodyStyle={{ padding: isMobile ? 12 : 24 }}>
//         <Row gutter={[16, 16]}>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic title="Total Videos" value={stats.total} prefix={<VideoCameraOutlined />} />
//           </Col>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic
//               title="Approved"
//               value={stats.approved}
//               valueStyle={{ color: "#3f8600" }}
//               prefix={<CheckCircleOutlined />}
//             />
//           </Col>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic
//               title="Pending"
//               value={stats.pending}
//               valueStyle={{ color: "#faad14" }}
//               prefix={<ClockCircleOutlined />}
//             />
//           </Col>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic title="Total Views" value={stats.totalViews} prefix={<EyeOutlined />} />
//           </Col>
//         </Row>
//       </Card>

//       <Divider style={{ margin: "16px 0" }} />

//       {isMobile ? (
//         <>
//           <Space style={{ marginBottom: 16, width: "100%" }}>
//             <Input
//               placeholder="Search videos"
//               prefix={<SearchOutlined />}
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//               style={{ flex: 1 }}
//               allowClear
//             />
//             <Button icon={<FilterOutlined />} onClick={() => setFiltersVisible(!filtersVisible)} />
//           </Space>

//           <Collapse activeKey={filtersVisible ? ["1"] : []} ghost style={{ marginBottom: 16 }}>
//             <Panel key="1" header={null} showArrow={false}>
//               <Space direction="vertical" style={{ width: "100%" }}>
//                 <Select
//                   placeholder="Filter by status"
//                   style={{ width: "100%" }}
//                   onChange={handleFilterChange}
//                   value={filterStatus || undefined}
//                   allowClear
//                 >
//                   <Option value="Approved">Approved</Option>
//                   <Option value="Pending">Pending</Option>
//                   <Option value="Rejected">Rejected</Option>
//                 </Select>
//                 <Select
//                   placeholder="Sort by"
//                   style={{ width: "100%" }}
//                   onChange={handleSortChange}
//                   value={sortBy && sortOrder ? `${sortBy}-${sortOrder}` : undefined}
//                 >
//                   <Option value="uploadDate-desc">Newest First</Option>
//                   <Option value="uploadDate-asc">Oldest First</Option>
//                   <Option value="title-asc">Title A-Z</Option>
//                   <Option value="title-desc">Title Z-A</Option>
//                   <Option value="views-desc">Most Views</Option>
//                   <Option value="likes-desc">Most Likes</Option>
//                 </Select>
//               </Space>
//             </Panel>
//           </Collapse>

//           {renderMobileList()}
//         </>
//       ) : (
//         <>
//           <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
//             <Space wrap>
//               <Input
//                 placeholder="Search videos"
//                 prefix={<SearchOutlined />}
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 style={{ width: isTablet ? 180 : 250 }}
//                 allowClear
//               />
//               <Select
//                 placeholder="Filter by status"
//                 style={{ width: isTablet ? 130 : 150 }}
//                 onChange={handleFilterChange}
//                 value={filterStatus || undefined}
//                 allowClear
//               >
//                 <Option value="Approved">Approved</Option>
//                 <Option value="Pending">Pending</Option>
//                 <Option value="Rejected">Rejected</Option>
//               </Select>
//               <Select
//                 placeholder="Sort by"
//                 style={{ width: isTablet ? 130 : 150 }}
//                 onChange={handleSortChange}
//                 value={sortBy && sortOrder ? `${sortBy}-${sortOrder}` : undefined}
//               >
//                 <Option value="uploadDate-desc">Newest First</Option>
//                 <Option value="uploadDate-asc">Oldest First</Option>
//                 <Option value="title-asc">Title A-Z</Option>
//                 <Option value="title-desc">Title Z-A</Option>
//                 <Option value="views-desc">Most Views</Option>
//                 <Option value="likes-desc">Most Likes</Option>
//               </Select>
//             </Space>
//             <Button type="primary" icon={<CloudUploadOutlined />} onClick={showUploadModal}>
//               Upload Video
//             </Button>
//           </Space>

//           <Table
//             dataSource={videos}
//             columns={columns}
//             rowKey="id"
//             loading={loading}
//             pagination={{
//               pageSize: 10,
//               showSizeChanger: true,
//               showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} videos`,
//             }}
//             scroll={{ x: "max-content" }}
//           />
//         </>
//       )}

//       {/* Upload Modal */}
//       <Modal
//         title="Upload New Video"
//         open={isUploadModalVisible}
//         onCancel={() => setIsUploadModalVisible(false)}
//         footer={null}
//         width={isMobile ? "95%" : 700}
//         centered
//       >
//         <Form form={form} layout="vertical" onFinish={handleUploadSubmit}>
//           <Dragger {...uploadProps} style={{ marginBottom: 24 }}>
//             <p className="ant-upload-drag-icon">
//               <InboxOutlined />
//             </p>
//             <p className="ant-upload-text">Click or drag video file to this area to upload</p>
//             <p className="ant-upload-hint">Support for MP4, MOV, AVI, or WebM. Max file size: 2GB</p>
//           </Dragger>

//           <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title" }]}>
//             <Input placeholder="Enter video title" />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <Input.TextArea placeholder="Enter video description" rows={4} />
//           </Form.Item>

//           <Row gutter={16}>
//             <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
//               <Form.Item
//                 name="category"
//                 label="Category"
//                 rules={[{ required: true, message: "Please select a category" }]}
//               >
//                 <Select placeholder="Select category">
//                   <Option value="Lectures">Lectures</Option>
//                   <Option value="Tutorials">Tutorials</Option>
//                   <Option value="Workshops">Workshops</Option>
//                   <Option value="Presentations">Presentations</Option>
//                   <Option value="Other">Other</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={isMobile ? 24 : 12}>
//               <Form.Item name="visibility" label="Visibility" initialValue="Private">
//                 <Select placeholder="Select visibility">
//                   <Option value="Public">Public</Option>
//                   <Option value="Unlisted">Unlisted</Option>
//                   <Option value="Private">Private</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item name="tags" label="Tags">
//             <Select mode="tags" placeholder="Add tags" style={{ width: "100%" }} />
//           </Form.Item>

//           <Form.Item>
//             <Space style={{ width: "100%", justifyContent: "flex-end" }}>
//               <Button onClick={() => setIsUploadModalVisible(false)}>Cancel</Button>
//               <Button type="primary" htmlType="submit">
//                 Upload
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* Edit Modal */}
//       <Modal
//         title="Edit Video"
//         open={isEditModalVisible}
//         onCancel={() => setIsEditModalVisible(false)}
//         footer={null}
//         width={isMobile ? "95%" : 600}
//         centered
//       >
//         <Form form={form} layout="vertical" onFinish={handleEditSubmit}>
//           <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title" }]}>
//             <Input placeholder="Enter video title" />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <Input.TextArea placeholder="Enter video description" rows={4} />
//           </Form.Item>

//           <Row gutter={16}>
//             <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
//               <Form.Item name="category" label="Category">
//                 <Select placeholder="Select category">
//                   <Option value="Lectures">Lectures</Option>
//                   <Option value="Tutorials">Tutorials</Option>
//                   <Option value="Workshops">Workshops</Option>
//                   <Option value="Presentations">Presentations</Option>
//                   <Option value="Other">Other</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={isMobile ? 24 : 12}>
//               <Form.Item name="visibility" label="Visibility">
//                 <Select placeholder="Select visibility">
//                   <Option value="Public">Public</Option>
//                   <Option value="Unlisted">Unlisted</Option>
//                   <Option value="Private">Private</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item name="tags" label="Tags">
//             <Select mode="tags" placeholder="Add tags" style={{ width: "100%" }} />
//           </Form.Item>

//           <Form.Item>
//             <Space style={{ width: "100%", justifyContent: "flex-end" }}>
//               <Button onClick={() => setIsEditModalVisible(false)}>Cancel</Button>
//               <Button type="primary" htmlType="submit">
//                 Save Changes
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* Preview Modal */}
//       {selectedVideo && (
//         <VideoPreviewModal
//           video={selectedVideo}
//           visible={isPreviewModalVisible}
//           onClose={() => setIsPreviewModalVisible(false)}
//           onEdit={() => {
//             setIsPreviewModalVisible(false)
//             showEditModal(selectedVideo)
//           }}
//           isMobile={isMobile}
//         />
//       )}
//     </>
//   )
// }

// export default VideoManagement

"use client"

import { useState } from "react"
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
  Tooltip,
  Typography,
  Statistic,
  Upload,
  message,
  Divider,
  List,
  Collapse,
  Grid,
} from "antd"
import {
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  ShareAltOutlined,
  PlusOutlined,
  CloudUploadOutlined,
  PlayCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  InboxOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import VideoPreviewModal from "./video-preview-modal"

const { Title, Text } = Typography
const { Option } = Select
const { Dragger } = Upload
const { confirm } = Modal
const { Panel } = Collapse
const { useBreakpoint } = Grid

const VideoManagement = ({
  videos,
  loading,
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  onAdd,
  onUpdate,
  onDelete,
  onStatusChange,
  onRefresh,
  playlists,
  addToPlaylist,
  stats,
  isMobile,
}) => {
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isPreviewModalVisible, setIsPreviewModalVisible] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const [filtersVisible, setFiltersVisible] = useState(false)

  const screens = useBreakpoint()
  const isTablet = !screens.lg && screens.md

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleFilterChange = (value) => {
    setFilterStatus(value)
  }

  const handleSortChange = (value) => {
    const [field, order] = value.split("-")
    setSortBy(field)
    setSortOrder(order)
  }

  const showUploadModal = () => {
    setIsUploadModalVisible(true)
  }

  const showEditModal = (video) => {
    setSelectedVideo(video)
    form.setFieldsValue({
      title: video.title,
      description: video.description,
      category: video.category,
      tags: video.tags,
      visibility: video.visibility,
    })
    setIsEditModalVisible(true)
  }

  const showPreviewModal = (video) => {
    setSelectedVideo(video)
    setIsPreviewModalVisible(true)
  }

  const handleDeleteVideo = (video) => {
    confirm({
      title: `Are you sure you want to delete "${video.title}"?`,
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await onDelete(video.id)
          messageApi.success("Video deleted successfully")
        } catch (error) {
          messageApi.error("Failed to delete video")
          console.error("Delete error:", error)
        }
      },
    })
  }

  const handleStatusChange = async (videoId, status) => {
    try {
      await onStatusChange(videoId, status)
      messageApi.success(`Video marked as ${status}`)
    } catch (error) {
      messageApi.error("Failed to update status")
      console.error("Status update error:", error)
    }
  }

  const handleAddToPlaylist = async (videoId, playlistId) => {
    try {
      await addToPlaylist(playlistId, videoId)
      messageApi.success("Added to playlist")
    } catch (error) {
      messageApi.error("Failed to add to playlist")
      console.error("Add to playlist error:", error)
    }
  }

  const handleUploadSubmit = async (values) => {
    try {
      const newVideo = {
        id: `video-${Date.now()}`,
        title: values.title,
        description: values.description,
        url: values.url || "https://example.com/placeholder-video.mp4",
        thumbnailUrl: values.thumbnailUrl || "/placeholder.svg?height=180&width=320",
        duration: values.duration || "10:00",
        uploadDate: new Date().toISOString(),
        status: "Pending",
        views: 0,
        likes: 0,
        category: values.category,
        tags: values.tags || [],
        visibility: values.visibility || "Private",
      }

      await onAdd(newVideo)
      setIsUploadModalVisible(false)
      form.resetFields()
      messageApi.success("Video uploaded successfully")
    } catch (error) {
      messageApi.error("Failed to upload video")
      console.error("Upload error:", error)
    }
  }

  const handleEditSubmit = async (values) => {
    if (!selectedVideo) return

    try {
      await onUpdate(selectedVideo.id, {
        title: values.title,
        description: values.description,
        category: values.category,
        tags: values.tags,
        visibility: values.visibility,
      })
      setIsEditModalVisible(false)
      messageApi.success("Video updated successfully")
    } catch (error) {
      messageApi.error("Failed to update video")
      console.error("Update error:", error)
    }
  }

  const uploadProps = {
    name: "file",
    multiple: false,
    action: "https://api.example.com/upload",
    onChange(info) {
      const { status } = info.file
      if (status === "done") {
        messageApi.success(`${info.file.name} file uploaded successfully.`)
        form.setFieldsValue({ url: info.file.response.url })
      } else if (status === "error") {
        messageApi.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  const getStatusTag = (status) => {
    switch (status) {
      case "Approved":
        return (
          <Tag icon={<CheckCircleOutlined />} color="success">
            Approved
          </Tag>
        )
      case "Rejected":
        return (
          <Tag icon={<CloseCircleOutlined />} color="error">
            Rejected
          </Tag>
        )
      case "Pending":
        return (
          <Tag icon={<ClockCircleOutlined />} color="warning">
            Pending
          </Tag>
        )
      default:
        return <Tag color="default">{status}</Tag>
    }
  }

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      width: 120,
      render: (thumbnailUrl, record) => (
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => showPreviewModal(record)}>
          <img
            src={thumbnailUrl || "/placeholder.svg?height=60&width=100"}
            alt={record.title}
            style={{ width: 100, height: 60, objectFit: "cover", borderRadius: 4 }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textShadow: "0 0 5px rgba(0,0,0,0.7)",
            }}
          >
            <PlayCircleOutlined style={{ fontSize: 24 }} />
          </div>
        </div>
      ),
      responsive: ["md"],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: true,
      render: (text, record) => (
        <div>
          {isMobile && (
            <div style={{ position: "relative", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>
              <img
                src={record.thumbnailUrl || "/placeholder.svg?height=60&width=100"}
                alt={record.title}
                style={{ width: 100, height: 60, objectFit: "cover", borderRadius: 4 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textShadow: "0 0 5px rgba(0,0,0,0.7)",
                }}
              >
                <PlayCircleOutlined style={{ fontSize: 24 }} />
              </div>
            </div>
          )}
          <Text strong>{text}</Text>
          <div>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {record.duration} • {new Date(record.uploadDate).toLocaleDateString()}
            </Text>
          </div>
          {isMobile && (
            <div style={{ marginTop: 8 }}>
              {getStatusTag(record.status)}
              <Tag color="blue">{record.category}</Tag>
              <div style={{ marginTop: 4 }}>
                <Space>
                  <Tooltip title="Views">
                    <span>
                      <EyeOutlined /> {record.views}
                    </span>
                  </Tooltip>
                  <Tooltip title="Likes">
                    <span>👍 {record.likes}</span>
                  </Tooltip>
                </Space>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 120,
      filters: [
        { text: "Lectures", value: "Lectures" },
        { text: "Tutorials", value: "Tutorials" },
        { text: "Workshops", value: "Workshops" },
        { text: "Presentations", value: "Presentations" },
        { text: "Other", value: "Other" },
      ],
      render: (category) => <Tag color="blue">{category}</Tag>,
      responsive: ["lg"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      filters: [
        { text: "Approved", value: "Approved" },
        { text: "Rejected", value: "Rejected" },
        { text: "Pending", value: "Pending" },
      ],
      render: (status) => getStatusTag(status),
      responsive: ["md"],
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
      key: "visibility",
      width: 120,
      filters: [
        { text: "Public", value: "Public" },
        { text: "Unlisted", value: "Unlisted" },
        { text: "Private", value: "Private" },
      ],
      render: (visibility) => {
        const color = visibility === "Public" ? "green" : visibility === "Unlisted" ? "orange" : "gray"
        return <Tag color={color}>{visibility}</Tag>
      },
      responsive: ["lg"],
    },
    {
      title: "Stats",
      key: "stats",
      width: 120,
      render: (_, record) => (
        <Space>
          <Tooltip title="Views">
            <span>
              <EyeOutlined /> {record.views}
            </span>
          </Tooltip>
          <Tooltip title="Likes">
            <span>👍 {record.likes}</span>
          </Tooltip>
        </Space>
      ),
      responsive: ["md"],
    },
    {
      title: "Actions",
      key: "actions",
      width: 80,
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  key: "1",
                  icon: <EyeOutlined />,
                  label: "Preview",
                  onClick: () => showPreviewModal(record),
                },
                {
                  key: "2",
                  icon: <EditOutlined />,
                  label: "Edit",
                  onClick: () => showEditModal(record),
                },
                {
                  key: "3",
                  icon: <CheckCircleOutlined />,
                  label: "Approve",
                  onClick: () => handleStatusChange(record.id, "Approved"),
                },
                {
                  key: "4",
                  icon: <CloseCircleOutlined />,
                  label: "Reject",
                  onClick: () => handleStatusChange(record.id, "Rejected"),
                },
                {
                  type: "divider",
                },
                {
                  key: "5",
                  icon: <ShareAltOutlined />,
                  label: "Share",
                  onClick: () => messageApi.info("Share functionality coming soon"),
                },
                {
                  key: "6",
                  icon: <PlusOutlined />,
                  label: "Add to Playlist",
                  children: playlists.map((playlist) => ({
                    key: `playlist-${playlist.id}`,
                    label: playlist.name,
                    onClick: () => handleAddToPlaylist(record.id, playlist.id),
                  })),
                },
                {
                  type: "divider",
                },
                {
                  key: "7",
                  icon: <DeleteOutlined />,
                  label: "Delete",
                  danger: true,
                  onClick: () => handleDeleteVideo(record),
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
  ]

  // Mobile list view with single column layout
  const renderMobileList = () => {
    return (
      <List
        dataSource={videos}
        loading={loading}
        renderItem={(video) => (
          <List.Item
            key={video.id}
            style={{ 
              padding: '16px', 
              border: '1px solid #f0f0f0', 
              borderRadius: 8, 
              marginBottom: 16,
              backgroundColor: '#fff'
            }}
          >
            {/* Thumbnail - Full width */}
            <div style={{ marginBottom: 16 }}>
              <div 
                style={{ 
                  position: "relative", 
                  cursor: "pointer",
                  width: '100%',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  height: 0,
                  borderRadius: 8,
                  overflow: 'hidden'
                }} 
                onClick={() => showPreviewModal(video)}
              >
                <img
                  src={video.thumbnailUrl || "/placeholder.svg?height=180&width=320"}
                  alt={video.title}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: "cover" 
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textShadow: "0 0 5px rgba(0,0,0,0.7)",
                  }}
                >
                  <PlayCircleOutlined style={{ fontSize: 32 }} />
                </div>
              </div>
            </div>

            {/* Title and Basic Info - Full width */}
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ fontSize: 18, display: 'block', marginBottom: 4 }}>
                {video.title}
              </Text>
              <Text type="secondary" style={{ fontSize: 14 }}>
                {video.duration} • {new Date(video.uploadDate).toLocaleDateString()}
              </Text>
            </div>

            {/* Status, Category, Visibility - Full width, stacked */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 8 }}>
                {getStatusTag(video.status)}
              </div>
              <div style={{ marginBottom: 8 }}>
                <Tag color="blue" style={{ marginRight: 8 }}>
                  {video.category}
                </Tag>
                <Tag 
                  color={video.visibility === "Public" ? "green" : video.visibility === "Unlisted" ? "orange" : "gray"}
                >
                  {video.visibility}
                </Tag>
              </div>
            </div>

            {/* Stats - Full width */}
            <div style={{ marginBottom: 16 }}>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Text type="secondary">
                  <EyeOutlined style={{ marginRight: 6 }} /> {video.views} views
                </Text>
                <Text type="secondary">
                  <span style={{ marginRight: 6 }}>👍</span> {video.likes} likes
                </Text>
              </Space>
            </div>

            {/* Tags - Full width */}
            {video.tags && video.tags.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <Text strong style={{ display: 'block', marginBottom: 8 }}>Tags:</Text>
                <Space wrap>
                  {video.tags.map((tag, index) => (
                    <Tag key={index} color="default">
                      {tag}
                    </Tag>
                  ))}
                </Space>
              </div>
            )}

            {/* Action Buttons - Full width, stacked */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 8,
              paddingTop: 16,
              borderTop: '1px solid #f0f0f0'
            }}>
              <Button 
                icon={<EyeOutlined />}
                onClick={() => showPreviewModal(video)}
                block
              >
                Preview
              </Button>
              <Button 
                icon={<EditOutlined />}
                onClick={() => showEditModal(video)}
                block
              >
                Edit
              </Button>
              <Dropdown
                overlay={
                  <Menu
                    items={[
                      {
                        key: "1",
                        icon: <CheckCircleOutlined />,
                        label: "Approve",
                        onClick: () => handleStatusChange(video.id, "Approved"),
                      },
                      {
                        key: "2",
                        icon: <CloseCircleOutlined />,
                        label: "Reject",
                        onClick: () => handleStatusChange(video.id, "Rejected"),
                      },
                      {
                        key: "3",
                        icon: <ShareAltOutlined />,
                        label: "Share",
                        onClick: () => messageApi.info("Share functionality coming soon"),
                      },
                      {
                        key: "4",
                        icon: <PlusOutlined />,
                        label: "Add to Playlist",
                        children: playlists.map((playlist) => ({
                          key: `playlist-${playlist.id}`,
                          label: playlist.name,
                          onClick: () => handleAddToPlaylist(video.id, playlist.id),
                        })),
                      },
                      {
                        type: "divider",
                      },
                      {
                        key: "5",
                        icon: <DeleteOutlined />,
                        label: "Delete",
                        danger: true,
                        onClick: () => handleDeleteVideo(video),
                      },
                    ]}
                  />
                }
                trigger={["click"]}
                placement="bottom"
              >
                <Button icon={<MoreOutlined />} block>
                  More Actions
                </Button>
              </Dropdown>
            </div>
          </List.Item>
        )}
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
        }}
      />
    )
  }

  return (
    <>
      {contextHolder}
      <Card bordered={false} bodyStyle={{ padding: isMobile ? 12 : 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic title="Total Videos" value={stats.total} prefix={<VideoCameraOutlined />} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic
              title="Approved"
              value={stats.approved}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CheckCircleOutlined />}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic
              title="Pending"
              value={stats.pending}
              valueStyle={{ color: "#faad14" }}
              prefix={<ClockCircleOutlined />}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic title="Total Views" value={stats.totalViews} prefix={<EyeOutlined />} />
          </Col>
        </Row>
      </Card>

      <Divider style={{ margin: isMobile ? "12px 0" : "16px 0" }} />

      {isMobile ? (
        <>
          <Space direction="vertical" style={{ marginBottom: 16, width: "100%" }} size="middle">
            <Input
              placeholder="Search videos"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
              size="large"
            />
            <Button 
              icon={<FilterOutlined />} 
              onClick={() => setFiltersVisible(!filtersVisible)}
              block
            >
              {filtersVisible ? "Hide Filters" : "Show Filters"}
            </Button>
          </Space>

          <Collapse 
            activeKey={filtersVisible ? ["1"] : []} 
            ghost 
            style={{ marginBottom: 24 }}
            onChange={(key) => setFiltersVisible(key.length > 0)}
          >
            <Panel 
              key="1" 
              header={
                <Text strong>
                  <FilterOutlined /> Filters & Sort
                </Text>
              }
              showArrow={true}
            >
              <Space direction="vertical" style={{ width: "100%" }} size="middle">
                <Select
                  placeholder="Filter by status"
                  style={{ width: "100%" }}
                  onChange={handleFilterChange}
                  value={filterStatus || undefined}
                  allowClear
                  size="large"
                >
                  <Option value="Approved">Approved</Option>
                  <Option value="Pending">Pending</Option>
                  <Option value="Rejected">Rejected</Option>
                </Select>
                <Select
                  placeholder="Sort by"
                  style={{ width: "100%" }}
                  onChange={handleSortChange}
                  value={sortBy && sortOrder ? `${sortBy}-${sortOrder}` : undefined}
                  size="large"
                >
                  <Option value="uploadDate-desc">Newest First</Option>
                  <Option value="uploadDate-asc">Oldest First</Option>
                  <Option value="title-asc">Title A-Z</Option>
                  <Option value="title-desc">Title Z-A</Option>
                  <Option value="views-desc">Most Views</Option>
                  <Option value="likes-desc">Most Likes</Option>
                </Select>
              </Space>
            </Panel>
          </Collapse>

          {renderMobileList()}
        </>
      ) : (
        <>
          <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
            <Space wrap>
              <Input
                placeholder="Search videos"
                prefix={<SearchOutlined />}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: isTablet ? 180 : 250 }}
                allowClear
              />
              <Select
                placeholder="Filter by status"
                style={{ width: isTablet ? 130 : 150 }}
                onChange={handleFilterChange}
                value={filterStatus || undefined}
                allowClear
              >
                <Option value="Approved">Approved</Option>
                <Option value="Pending">Pending</Option>
                <Option value="Rejected">Rejected</Option>
              </Select>
              <Select
                placeholder="Sort by"
                style={{ width: isTablet ? 130 : 150 }}
                onChange={handleSortChange}
                value={sortBy && sortOrder ? `${sortBy}-${sortOrder}` : undefined}
              >
                <Option value="uploadDate-desc">Newest First</Option>
                <Option value="uploadDate-asc">Oldest First</Option>
                <Option value="title-asc">Title A-Z</Option>
                <Option value="title-desc">Title Z-A</Option>
                <Option value="views-desc">Most Views</Option>
                <Option value="likes-desc">Most Likes</Option>
              </Select>
            </Space>
            <Button type="primary" icon={<CloudUploadOutlined />} onClick={showUploadModal}>
              Upload Video
            </Button>
          </Space>

          <Table
            dataSource={videos}
            columns={columns}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} videos`,
            }}
            scroll={{ x: "max-content" }}
          />
        </>
      )}

      {/* Upload Modal */}
      <Modal
        title="Upload New Video"
        open={isUploadModalVisible}
        onCancel={() => setIsUploadModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 700}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleUploadSubmit}>
          <Dragger {...uploadProps} style={{ marginBottom: 24 }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag video file to this area to upload</p>
            <p className="ant-upload-hint">Support for MP4, MOV, AVI, or WebM. Max file size: 2GB</p>
          </Dragger>

          <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title" }]}>
            <Input placeholder="Enter video title" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter video description" rows={4} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Please select a category" }]}
              >
                <Select placeholder="Select category">
                  <Option value="Lectures">Lectures</Option>
                  <Option value="Tutorials">Tutorials</Option>
                  <Option value="Workshops">Workshops</Option>
                  <Option value="Presentations">Presentations</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item name="visibility" label="Visibility" initialValue="Private">
                <Select placeholder="Select visibility">
                  <Option value="Public">Public</Option>
                  <Option value="Unlisted">Unlisted</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="tags" label="Tags">
            <Select mode="tags" placeholder="Add tags" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button onClick={() => setIsUploadModalVisible(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Upload
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Video"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 600}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleEditSubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title" }]}>
            <Input placeholder="Enter video title" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter video description" rows={4} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
              <Form.Item name="category" label="Category">
                <Select placeholder="Select category">
                  <Option value="Lectures">Lectures</Option>
                  <Option value="Tutorials">Tutorials</Option>
                  <Option value="Workshops">Workshops</Option>
                  <Option value="Presentations">Presentations</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item name="visibility" label="Visibility">
                <Select placeholder="Select visibility">
                  <Option value="Public">Public</Option>
                  <Option value="Unlisted">Unlisted</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="tags" label="Tags">
            <Select mode="tags" placeholder="Add tags" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button onClick={() => setIsEditModalVisible(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* Preview Modal */}
      {selectedVideo && (
        <VideoPreviewModal
          video={selectedVideo}
          visible={isPreviewModalVisible}
          onClose={() => setIsPreviewModalVisible(false)}
          onEdit={() => {
            setIsPreviewModalVisible(false)
            showEditModal(selectedVideo)
          }}
          isMobile={isMobile}
        />
      )}
    </>
  )
}

export default VideoManagement