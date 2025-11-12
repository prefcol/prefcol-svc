// "use client"

// import { useState } from "react"
// import {
//   Table,
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
//   Typography,
//   List,
//   Avatar,
//   Divider,
//   message,
//   Empty,
//   Collapse,
// } from "antd"
// import {
//   SearchOutlined,
//   MoreOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   EyeOutlined,
//   ShareAltOutlined,
//   PlusOutlined,
//   PlaySquareOutlined,
//   VideoCameraOutlined,
//   MenuOutlined,
// } from "@ant-design/icons"
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

// const { Title, Text } = Typography
// const { Option } = Select
// const { confirm } = Modal
// const { Panel } = Collapse

// const PlaylistManagement = ({
//   playlists,
//   videos,
//   loading,
//   onAdd,
//   onUpdate,
//   onDelete,
//   onAddVideo,
//   onRemoveVideo,
//   onReorderVideos,
//   onRefresh,
//   isMobile,
// }) => {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)
//   const [isEditModalVisible, setIsEditModalVisible] = useState(false)
//   const [isViewModalVisible, setIsViewModalVisible] = useState(false)
//   const [selectedPlaylist, setSelectedPlaylist] = useState(null)
//   const [form] = Form.useForm()
//   const [messageApi, contextHolder] = message.useMessage()

//   const filteredPlaylists = playlists.filter((playlist) =>
//     playlist.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   const handleSearch = (value) => {
//     setSearchQuery(value)
//   }

//   const showCreateModal = () => {
//     form.resetFields()
//     setIsCreateModalVisible(true)
//   }

//   const showEditModal = (playlist) => {
//     setSelectedPlaylist(playlist)
//     form.setFieldsValue({
//       name: playlist.name,
//       description: playlist.description,
//       visibility: playlist.visibility,
//       category: playlist.category,
//     })
//     setIsEditModalVisible(true)
//   }

//   const showViewModal = (playlist) => {
//     setSelectedPlaylist(playlist)
//     setIsViewModalVisible(true)
//   }

//   const handleDeletePlaylist = (playlist) => {
//     confirm({
//       title: `Are you sure you want to delete "${playlist.name}"?`,
//       content: "This action cannot be undone.",
//       okText: "Yes, Delete",
//       okType: "danger",
//       cancelText: "Cancel",
//       onOk: async () => {
//         try {
//           await onDelete(playlist.id)
//           messageApi.success("Playlist deleted successfully")
//         } catch (error) {
//           messageApi.error("Failed to delete playlist")
//           console.error("Delete error:", error)
//         }
//       },
//     })
//   }

//   const handleCreateSubmit = async (values) => {
//     try {
//       const newPlaylist = {
//         id: `playlist-${Date.now()}`,
//         name: values.name,
//         description: values.description || "",
//         visibility: values.visibility || "Private",
//         category: values.category || "Other",
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         videoIds: [],
//         thumbnailUrl: "/placeholder.svg?height=180&width=320",
//       }

//       await onAdd(newPlaylist)
//       setIsCreateModalVisible(false)
//       form.resetFields()
//       messageApi.success("Playlist created successfully")
//     } catch (error) {
//       messageApi.error("Failed to create playlist")
//       console.error("Create error:", error)
//     }
//   }

//   const handleEditSubmit = async (values) => {
//     if (!selectedPlaylist) return

//     try {
//       await onUpdate(selectedPlaylist.id, {
//         name: values.name,
//         description: values.description,
//         visibility: values.visibility,
//         category: values.category,
//         updatedAt: new Date().toISOString(),
//       })
//       setIsEditModalVisible(false)
//       messageApi.success("Playlist updated successfully")
//     } catch (error) {
//       messageApi.error("Failed to update playlist")
//       console.error("Update error:", error)
//     }
//   }

//   const handleRemoveVideo = async (playlistId, videoId) => {
//     try {
//       await onRemoveVideo(playlistId, videoId)
//       if (selectedPlaylist && selectedPlaylist.id === playlistId) {
//         setSelectedPlaylist({
//           ...selectedPlaylist,
//           videoIds: selectedPlaylist.videoIds.filter((id) => id !== videoId),
//         })
//       }
//       messageApi.success("Video removed from playlist")
//     } catch (error) {
//       messageApi.error("Failed to remove video")
//       console.error("Remove error:", error)
//     }
//   }

//   const handleDragEnd = async (result) => {
//     if (!result.destination || !selectedPlaylist) return

//     const items = Array.from(selectedPlaylist.videoIds)
//     const [reorderedItem] = items.splice(result.source.index, 1)
//     items.splice(result.destination.index, 0, reorderedItem)

//     try {
//       setSelectedPlaylist({
//         ...selectedPlaylist,
//         videoIds: items,
//       })
//       await onReorderVideos(selectedPlaylist.id, items)
//       messageApi.success("Playlist order updated")
//     } catch (error) {
//       messageApi.error("Failed to update order")
//       console.error("Reorder error:", error)
//     }
//   }

//   const getPlaylistVideos = (videoIds) => {
//     return videoIds.map((id) => videos.find((video) => video.id === id)).filter(Boolean)
//   }

//   const columns = [
//     {
//       title: "Thumbnail",
//       dataIndex: "thumbnailUrl",
//       key: "thumbnailUrl",
//       width: 120,
//       render: (thumbnailUrl, record) => (
//         <div style={{ position: "relative", cursor: "pointer" }} onClick={() => showViewModal(record)}>
//           <img
//             src={thumbnailUrl || "/placeholder.svg?height=60&width=100"}
//             alt={record.name}
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
//             <PlaySquareOutlined style={{ fontSize: 24 }} />
//           </div>
//         </div>
//       ),
//       responsive: ["md"],
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name),
//       render: (text, record) => (
//         <div>
//           {isMobile && (
//             <div style={{ position: "relative", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>
//               <img
//                 src={record.thumbnailUrl || "/placeholder.svg?height=60&width=100"}
//                 alt={record.name}
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
//                 <PlaySquareOutlined style={{ fontSize: 24 }} />
//               </div>
//             </div>
//           )}
//           <Text strong>{text}</Text>
//           <div>
//             <Text type="secondary" style={{ fontSize: "12px" }}>
//               {record.videoIds.length} videos • Created {new Date(record.createdAt).toLocaleDateString()}
//             </Text>
//           </div>
//           {isMobile && (
//             <div style={{ marginTop: 8 }}>
//               <Tag color="blue">{record.category}</Tag>
//               <Tag
//                 color={record.visibility === "Public" ? "green" : record.visibility === "Unlisted" ? "orange" : "gray"}
//               >
//                 {record.visibility}
//               </Tag>
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
//       title: "Videos",
//       key: "videos",
//       width: 100,
//       render: (_, record) => (
//         <Button type="text" icon={<VideoCameraOutlined />} onClick={() => showViewModal(record)}>
//           {record.videoIds.length}
//         </Button>
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
//                   label: "View",
//                   onClick: () => showViewModal(record),
//                 },
//                 {
//                   key: "2",
//                   icon: <EditOutlined />,
//                   label: "Edit",
//                   onClick: () => showEditModal(record),
//                 },
//                 {
//                   key: "3",
//                   icon: <ShareAltOutlined />,
//                   label: "Share",
//                   onClick: () => messageApi.info("Share functionality coming soon"),
//                 },
//                 {
//                   type: "divider",
//                 },
//                 {
//                   key: "4",
//                   icon: <DeleteOutlined />,
//                   label: "Delete",
//                   danger: true,
//                   onClick: () => handleDeletePlaylist(record),
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
//         dataSource={filteredPlaylists}
//         loading={loading}
//         renderItem={(playlist) => (
//           <List.Item
//             key={playlist.id}
//             actions={[
//               <Button key="view" type="text" icon={<EyeOutlined />} onClick={() => showViewModal(playlist)} />,
//               <Button key="edit" type="text" icon={<EditOutlined />} onClick={() => showEditModal(playlist)} />,
//               <Dropdown
//                 key="more"
//                 overlay={
//                   <Menu
//                     items={[
//                       {
//                         key: "1",
//                         icon: <ShareAltOutlined />,
//                         label: "Share",
//                         onClick: () => messageApi.info("Share functionality coming soon"),
//                       },
//                       {
//                         key: "2",
//                         icon: <DeleteOutlined />,
//                         label: "Delete",
//                         danger: true,
//                         onClick: () => handleDeletePlaylist(playlist),
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
//                 <div style={{ position: "relative", cursor: "pointer" }} onClick={() => showViewModal(playlist)}>
//                   <img
//                     src={playlist.thumbnailUrl || "/placeholder.svg?height=80&width=120"}
//                     alt={playlist.name}
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
//                     <PlaySquareOutlined style={{ fontSize: 24 }} />
//                   </div>
//                 </div>
//               }
//               title={<Text strong>{playlist.name}</Text>}
//               description={
//                 <div>
//                   <Text type="secondary" style={{ fontSize: "12px" }}>
//                     {playlist.videoIds.length} videos • Created {new Date(playlist.createdAt).toLocaleDateString()}
//                   </Text>
//                   <div style={{ marginTop: 8 }}>
//                     <Tag color="blue">{playlist.category}</Tag>
//                     <Tag
//                       color={
//                         playlist.visibility === "Public"
//                           ? "green"
//                           : playlist.visibility === "Unlisted"
//                             ? "orange"
//                             : "gray"
//                       }
//                     >
//                       {playlist.visibility}
//                     </Tag>
//                   </div>
//                 </div>
//               }
//             />
//           </List.Item>
//         )}
//         pagination={{
//           pageSize: 10,
//           showSizeChanger: true,
//           showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} playlists`,
//         }}
//       />
//     )
//   }

//   return (
//     <>
//       {contextHolder}
//       <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between" }}>
//         <Input
//           placeholder="Search playlists"
//           prefix={<SearchOutlined />}
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)}
//           style={{ width: isMobile ? "70%" : 250 }}
//           allowClear
//         />
//         <Button type="primary" icon={<PlusOutlined />} onClick={showCreateModal}>
//           {!isMobile && "Create Playlist"}
//         </Button>
//       </Space>

//       {isMobile ? (
//         renderMobileList()
//       ) : (
//         <Table
//           dataSource={filteredPlaylists}
//           columns={columns}
//           rowKey="id"
//           loading={loading}
//           pagination={{
//             pageSize: 10,
//             showSizeChanger: true,
//             showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} playlists`,
//           }}
//           scroll={{ x: "max-content" }}
//         />
//       )}

//       {/* Create Modal */}
//       <Modal
//         title="Create New Playlist"
//         open={isCreateModalVisible}
//         onCancel={() => setIsCreateModalVisible(false)}
//         footer={null}
//         width={isMobile ? "95%" : 600}
//         centered
//       >
//         <Form form={form} layout="vertical" onFinish={handleCreateSubmit}>
//           <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter a name" }]}>
//             <Input placeholder="Enter playlist name" />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <Input.TextArea placeholder="Enter playlist description" rows={4} />
//           </Form.Item>

//           <Row gutter={16}>
//             <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
//               <Form.Item name="category" label="Category" initialValue="Other">
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

//           <Form.Item>
//             <Space style={{ width: "100%", justifyContent: "flex-end" }}>
//               <Button onClick={() => setIsCreateModalVisible(false)}>Cancel</Button>
//               <Button type="primary" htmlType="submit">
//                 Create
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* Edit Modal */}
//       <Modal
//         title="Edit Playlist"
//         open={isEditModalVisible}
//         onCancel={() => setIsEditModalVisible(false)}
//         footer={null}
//         width={isMobile ? "95%" : 600}
//         centered
//       >
//         <Form form={form} layout="vertical" onFinish={handleEditSubmit}>
//           <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter a name" }]}>
//             <Input placeholder="Enter playlist name" />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <Input.TextArea placeholder="Enter playlist description" rows={4} />
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

//       {/* View Modal */}
//       <Modal
//         title={selectedPlaylist?.name || "Playlist"}
//         open={isViewModalVisible}
//         onCancel={() => setIsViewModalVisible(false)}
//         width={isMobile ? "95%" : 700}
//         centered
//         footer={[
//           <Button key="back" onClick={() => setIsViewModalVisible(false)}>
//             Close
//           </Button>,
//           <Button
//             key="edit"
//             type="primary"
//             onClick={() => {
//               setIsViewModalVisible(false)
//               if (selectedPlaylist) showEditModal(selectedPlaylist)
//             }}
//           >
//             Edit Playlist
//           </Button>,
//         ]}
//       >
//         {selectedPlaylist && (
//           <>
//             <div style={{ marginBottom: 16 }}>
//               <Text type="secondary">{selectedPlaylist.description}</Text>
//               <div style={{ marginTop: 8 }}>
//                 <Tag color="blue">{selectedPlaylist.category}</Tag>
//                 <Tag
//                   color={
//                     selectedPlaylist.visibility === "Public"
//                       ? "green"
//                       : selectedPlaylist.visibility === "Unlisted"
//                         ? "orange"
//                         : "gray"
//                   }
//                 >
//                   {selectedPlaylist.visibility}
//                 </Tag>
//                 <Tag>{selectedPlaylist.videoIds.length} videos</Tag>
//               </div>
//             </div>

//             <Divider orientation="left">Videos</Divider>

//             {selectedPlaylist.videoIds.length === 0 ? (
//               <Empty description="No videos in this playlist" />
//             ) : (
//               <DragDropContext onDragEnd={handleDragEnd}>
//                 <Droppable droppableId="playlist-videos">
//                   {(provided) => (
//                     <div {...provided.droppableProps} ref={provided.innerRef}>
//                       <List
//                         dataSource={getPlaylistVideos(selectedPlaylist.videoIds)}
//                         renderItem={(video, index) => (
//                           <Draggable key={video.id} draggableId={video.id} index={index}>
//                             {(provided) => (
//                               <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                 <List.Item
//                                   actions={[
//                                     <Button
//                                       key="remove"
//                                       type="text"
//                                       danger
//                                       icon={<DeleteOutlined />}
//                                       onClick={() => handleRemoveVideo(selectedPlaylist.id, video.id)}
//                                     />,
//                                   ]}
//                                 >
//                                   <List.Item.Meta
//                                     avatar={
//                                       <div style={{ position: "relative" }}>
//                                         <Avatar shape="square" size={isMobile ? 48 : 64} src={video.thumbnailUrl} />
//                                         <MenuOutlined
//                                           style={{
//                                             position: "absolute",
//                                             top: 0,
//                                             left: 0,
//                                             padding: 4,
//                                             background: "rgba(0,0,0,0.5)",
//                                             color: "white",
//                                             borderRadius: "0 0 4px 0",
//                                           }}
//                                         />
//                                       </div>
//                                     }
//                                     title={
//                                       <div style={{ display: "flex", alignItems: "center" }}>
//                                         <span style={{ marginRight: 8 }}>{index + 1}.</span>
//                                         {video.title}
//                                       </div>
//                                     }
//                                     description={
//                                       <div>
//                                         <Text type="secondary">{video.duration}</Text>
//                                         <div>{getStatusTag(video.status)}</div>
//                                       </div>
//                                     }
//                                   />
//                                 </List.Item>
//                               </div>
//                             )}
//                           </Draggable>
//                         )}
//                       />
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Droppable>
//               </DragDropContext>
//             )}
//           </>
//         )}
//       </Modal>
//     </>
//   )
// }

// const getStatusTag = (status) => {
//   switch (status) {
//     case "Approved":
//       return <Tag color="success">Approved</Tag>
//     case "Rejected":
//       return <Tag color="error">Rejected</Tag>
//     case "Pending":
//       return <Tag color="warning">Pending</Tag>
//     default:
//       return <Tag color="default">{status}</Tag>
//   }
// }

// export default PlaylistManagement

"use client"

import { useState, useEffect } from "react"
import {
  Table,
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
  List,
  Avatar,
  Divider,
  message,
  Empty,
  Card,
  Collapse,
} from "antd"
import {
  SearchOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  ShareAltOutlined,
  PlusOutlined,
  PlaySquareOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const { Title, Text } = Typography
const { Option } = Select
const { confirm } = Modal
const { Panel } = Collapse

const PlaylistManagement = ({
  playlists,
  videos,
  loading,
  onAdd,
  onUpdate,
  onDelete,
  onAddVideo,
  onRemoveVideo,
  onReorderVideos,
  onRefresh,
  isMobile,
}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isViewModalVisible, setIsViewModalVisible] = useState(false)
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const showCreateModal = () => {
    form.resetFields()
    setIsCreateModalVisible(true)
  }

  const showEditModal = (playlist) => {
    setSelectedPlaylist(playlist)
    form.setFieldsValue({
      name: playlist.name,
      description: playlist.description,
      visibility: playlist.visibility,
      category: playlist.category,
    })
    setIsEditModalVisible(true)
  }

  const showViewModal = (playlist) => {
    setSelectedPlaylist(playlist)
    setIsViewModalVisible(true)
  }

  const handleDeletePlaylist = (playlist) => {
    confirm({
      title: `Are you sure you want to delete "${playlist.name}"?`,
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await onDelete(playlist.id)
          messageApi.success("Playlist deleted successfully")
        } catch (error) {
          messageApi.error("Failed to delete playlist")
          console.error("Delete error:", error)
        }
      },
    })
  }

  const handleCreateSubmit = async (values) => {
    try {
      const newPlaylist = {
        id: `playlist-${Date.now()}`,
        name: values.name,
        description: values.description || "",
        visibility: values.visibility || "Private",
        category: values.category || "Other",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        videoIds: [],
        thumbnailUrl: "/placeholder.svg?height=180&width=320",
      }

      await onAdd(newPlaylist)
      setIsCreateModalVisible(false)
      form.resetFields()
      messageApi.success("Playlist created successfully")
    } catch (error) {
      messageApi.error("Failed to create playlist")
      console.error("Create error:", error)
    }
  }

  const handleEditSubmit = async (values) => {
    if (!selectedPlaylist) return

    try {
      await onUpdate(selectedPlaylist.id, {
        name: values.name,
        description: values.description,
        visibility: values.visibility,
        category: values.category,
        updatedAt: new Date().toISOString(),
      })
      setIsEditModalVisible(false)
      messageApi.success("Playlist updated successfully")
    } catch (error) {
      messageApi.error("Failed to update playlist")
      console.error("Update error:", error)
    }
  }

  const handleRemoveVideo = async (playlistId, videoId) => {
    try {
      await onRemoveVideo(playlistId, videoId)
      if (selectedPlaylist && selectedPlaylist.id === playlistId) {
        setSelectedPlaylist({
          ...selectedPlaylist,
          videoIds: selectedPlaylist.videoIds.filter((id) => id !== videoId),
        })
      }
      messageApi.success("Video removed from playlist")
    } catch (error) {
      messageApi.error("Failed to remove video")
      console.error("Remove error:", error)
    }
  }

  const handleDragEnd = async (result) => {
    if (!result.destination || !selectedPlaylist) return

    const items = Array.from(selectedPlaylist.videoIds)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    try {
      setSelectedPlaylist({
        ...selectedPlaylist,
        videoIds: items,
      })
      await onReorderVideos(selectedPlaylist.id, items)
      messageApi.success("Playlist order updated")
    } catch (error) {
      messageApi.error("Failed to update order")
      console.error("Reorder error:", error)
    }
  }

  const getPlaylistVideos = (videoIds) => {
    return videoIds.map((id) => videos.find((video) => video.id === id)).filter(Boolean)
  }

  // Desktop table columns
  const desktopColumns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      width: 120,
      render: (thumbnailUrl, record) => (
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => showViewModal(record)}>
          <img
            src={thumbnailUrl || "/placeholder.svg?height=60&width=100"}
            alt={record.name}
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
            <PlaySquareOutlined style={{ fontSize: 24 }} />
          </div>
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <div>
          <Text strong style={{ fontSize: 16 }}>{text}</Text>
          <div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              {record.videoIds.length} videos • Created {new Date(record.createdAt).toLocaleDateString()}
            </Text>
          </div>
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
    },
    {
      title: "Videos",
      key: "videos",
      width: 100,
      render: (_, record) => (
        <Button type="text" icon={<VideoCameraOutlined />} onClick={() => showViewModal(record)}>
          {record.videoIds.length}
        </Button>
      ),
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
                  label: "View",
                  onClick: () => showViewModal(record),
                },
                {
                  key: "2",
                  icon: <EditOutlined />,
                  label: "Edit",
                  onClick: () => showEditModal(record),
                },
                {
                  key: "3",
                  icon: <ShareAltOutlined />,
                  label: "Share",
                  onClick: () => messageApi.info("Share functionality coming soon"),
                },
                {
                  type: "divider",
                },
                {
                  key: "4",
                  icon: <DeleteOutlined />,
                  label: "Delete",
                  danger: true,
                  onClick: () => handleDeletePlaylist(record),
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

  // Mobile card view
  const renderMobileView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {filteredPlaylists.map((playlist) => (
        <Card
          key={playlist.id}
          bodyStyle={{ padding: "8px 10px" }}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          {/* Wrapper for image + content */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "8px",
              alignItems: "stretch",
            }}
          >
            {/* Thumbnail Section */}
            <div
              style={{
                width: "100%",
                height:
                  window.innerWidth < 480
                    ? "140px"
                    : window.innerWidth < 768
                    ? "160px"
                    : "180px",
                position: "relative",
                borderRadius: "6px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => showViewModal(playlist)}
            >
              <img
                src={
                  playlist.thumbnailUrl ||
                  "/placeholder.svg?height=150&width=240"
                }
                alt={playlist.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  background: "rgba(0,0,0,0.45)",
                  borderRadius: "50%",
                  padding: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlaySquareOutlined style={{ fontSize: 22 }} />
              </div>
            </div>

            {/* Playlist Details Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "6px",
                marginTop: isMobile ? "6px" : "0",
              }}
            >
              <div>
                <Text
                  strong
                  style={{
                    fontSize: "15px",
                    display: "block",
                    marginBottom: "2px",
                    lineHeight: "1.3",
                  }}
                >
                  {playlist.name}
                </Text>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  {playlist.videoIds.length} videos •{" "}
                  {new Date(playlist.createdAt).toLocaleDateString()}
                </Text>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                  marginTop: "6px",
                }}
              >
                <Tag
                  color="blue"
                  style={{
                    fontSize: "11px",
                    padding: "2px 6px",
                    borderRadius: "6px",
                  }}
                >
                  {playlist.category}
                </Tag>
                <Tag
                  color={
                    playlist.visibility === "Public"
                      ? "green"
                      : playlist.visibility === "Unlisted"
                      ? "orange"
                      : "gray"
                  }
                  style={{
                    fontSize: "11px",
                    padding: "2px 6px",
                    borderRadius: "6px",
                  }}
                >
                  {playlist.visibility}
                </Tag>
              </div>

              {/* Actions Section */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <Button
                  type="text"
                  icon={<VideoCameraOutlined />}
                  onClick={() => showViewModal(playlist)}
                  size="small"
                  style={{ color: "#004d40" }}
                >
                  {playlist.videoIds.length}
                </Button>

                <Dropdown
                  overlay={
                    <Menu
                      items={[
                        {
                          key: "1",
                          icon: <EyeOutlined />,
                          label: "View",
                          onClick: () => showViewModal(playlist),
                        },
                        {
                          key: "2",
                          icon: <EditOutlined />,
                          label: "Edit",
                          onClick: () => showEditModal(playlist),
                        },
                        {
                          key: "3",
                          icon: <ShareAltOutlined />,
                          label: "Share",
                          onClick: () =>
                            messageApi.info("Share functionality coming soon"),
                        },
                        { type: "divider" },
                        {
                          key: "4",
                          icon: <DeleteOutlined />,
                          label: "Delete",
                          danger: true,
                          onClick: () => handleDeletePlaylist(playlist),
                        },
                      ]}
                    />
                  }
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <Button type="text" icon={<MoreOutlined />} size="small" />
                </Dropdown>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {filteredPlaylists.length === 0 && !loading && (
        <Empty description="No playlists found" style={{ marginTop: "24px" }} />
      )}
    </div>
  );
};

  return (
    <>
      {contextHolder}
      <Space style={{ 
        marginBottom: isMobile ? 16 : 24, 
        width: "100%", 
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "stretch" : "center",
        gap: isMobile ? 12 : 0
      }}>
        <Input
          placeholder="Search playlists"
          prefix={<SearchOutlined />}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ 
            width: isMobile ? "100%" : 300,
          }}
          allowClear
          size={isMobile ? "middle" : "large"}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={showCreateModal}
          size={isMobile ? "middle" : "large"}
          style={{ 
            width: isMobile ? "100%" : "auto",
            height: isMobile ? "40px" : "auto"
          }}
        >
          {isMobile ? "New Playlist" : "Create Playlist"}
        </Button>
      </Space>

      {/* Render different views based on device */}
      {isMobile ? (
        <>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div className="ant-spin ant-spin-spinning">
                <span className="ant-spin-dot ant-spin-dot-spin">
                  <i className="ant-spin-dot-item"></i>
                  <i className="ant-spin-dot-item"></i>
                  <i className="ant-spin-dot-item"></i>
                  <i className="ant-spin-dot-item"></i>
                </span>
              </div>
            </div>
          ) : (
            renderMobileView()
          )}
          
          {/* Simple pagination for mobile */}
          {filteredPlaylists.length > 0 && (
            <div style={{ 
              marginTop: '24px', 
              textAlign: 'center', 
              color: '#8c8c8c',
              fontSize: '14px'
            }}>
              Showing {filteredPlaylists.length} of {playlists.length} playlists
            </div>
          )}
        </>
      ) : (
        <Table
          dataSource={filteredPlaylists}
          columns={desktopColumns}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} playlists`,
          }}
          scroll={{ x: 'max-content' }}
          size="middle"
          style={{ 
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        />
      )}

      {/* Create Modal */}
      <Modal
        title="Create New Playlist"
        open={isCreateModalVisible}
        onCancel={() => setIsCreateModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 600}
        centered
        styles={{
          body: {
            padding: isMobile ? 16 : 24,
          }
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleCreateSubmit}>
          <Form.Item 
            name="name" 
            label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Name</span>} 
            rules={[{ required: true, message: "Please enter a name" }]}
          >
            <Input 
              placeholder="Enter playlist name" 
              size={isMobile ? "middle" : "large"}
            />
          </Form.Item>

          <Form.Item 
            name="description" 
            label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Description</span>}
          >
            <Input.TextArea 
              placeholder="Enter playlist description" 
              rows={isMobile ? 3 : 4} 
              size={isMobile ? "middle" : "large"}
            />
          </Form.Item>

          <Row gutter={isMobile ? 8 : 16}>
            <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 12 : 16 }}>
              <Form.Item 
                name="category" 
                label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Category</span>} 
                initialValue="Other"
              >
                <Select 
                  placeholder="Select category"
                  size={isMobile ? "middle" : "large"}
                >
                  <Option value="Lectures">Lectures</Option>
                  <Option value="Tutorials">Tutorials</Option>
                  <Option value="Workshops">Workshops</Option>
                  <Option value="Presentations">Presentations</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item 
                name="visibility" 
                label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Visibility</span>} 
                initialValue="Private"
              >
                <Select 
                  placeholder="Select visibility"
                  size={isMobile ? "middle" : "large"}
                >
                  <Option value="Public">Public</Option>
                  <Option value="Unlisted">Unlisted</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Space 
              style={{ 
                width: "100%", 
                justifyContent: "flex-end",
                flexDirection: isMobile ? "column-reverse" : "row",
                gap: isMobile ? 12 : 0
              }}
            >
              <Button 
                onClick={() => setIsCreateModalVisible(false)}
                size={isMobile ? "middle" : "large"}
                block={isMobile}
                style={{ 
                  height: isMobile ? '40px' : 'auto'
                }}
              >
                Cancel
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                size={isMobile ? "middle" : "large"}
                block={isMobile}
                style={{ 
                  height: isMobile ? '40px' : 'auto'
                }}
              >
                Create
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Playlist"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 600}
        centered
        styles={{
          body: {
            padding: isMobile ? 16 : 24,
          }
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleEditSubmit}>
          <Form.Item 
            name="name" 
            label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Name</span>} 
            rules={[{ required: true, message: "Please enter a name" }]}
          >
            <Input 
              placeholder="Enter playlist name" 
              size={isMobile ? "middle" : "large"}
            />
          </Form.Item>

          <Form.Item 
            name="description" 
            label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Description</span>}
          >
            <Input.TextArea 
              placeholder="Enter playlist description" 
              rows={isMobile ? 3 : 4} 
              size={isMobile ? "middle" : "large"}
            />
          </Form.Item>

          <Row gutter={isMobile ? 8 : 16}>
            <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 12 : 16 }}>
              <Form.Item 
                name="category" 
                label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Category</span>}
              >
                <Select 
                  placeholder="Select category"
                  size={isMobile ? "middle" : "large"}
                >
                  <Option value="Lectures">Lectures</Option>
                  <Option value="Tutorials">Tutorials</Option>
                  <Option value="Workshops">Workshops</Option>
                  <Option value="Presentations">Presentations</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item 
                name="visibility" 
                label={<span style={{ fontSize: isMobile ? 14 : 16 }}>Visibility</span>}
              >
                <Select 
                  placeholder="Select visibility"
                  size={isMobile ? "middle" : "large"}
                >
                  <Option value="Public">Public</Option>
                  <Option value="Unlisted">Unlisted</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Space 
              style={{ 
                width: "100%", 
                justifyContent: "flex-end",
                flexDirection: isMobile ? "column-reverse" : "row",
                gap: isMobile ? 12 : 0
              }}
            >
              <Button 
                onClick={() => setIsEditModalVisible(false)}
                size={isMobile ? "middle" : "large"}
                block={isMobile}
                style={{ 
                  height: isMobile ? '40px' : 'auto'
                }}
              >
                Cancel
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                size={isMobile ? "middle" : "large"}
                block={isMobile}
                style={{ 
                  height: isMobile ? '40px' : 'auto'
                }}
              >
                Save Changes
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* View Modal */}
      <Modal
        title={selectedPlaylist?.name || "Playlist"}
        open={isViewModalVisible}
        onCancel={() => setIsViewModalVisible(false)}
        width={isMobile ? "95%" : 700}
        centered
        footer={[
          <Button 
            key="back" 
            onClick={() => setIsViewModalVisible(false)}
            size={isMobile ? "middle" : "large"}
            block={isMobile}
            style={{ 
              height: isMobile ? '40px' : 'auto',
              flex: isMobile ? 1 : 'auto'
            }}
          >
            Close
          </Button>,
          <Button
            key="edit"
            type="primary"
            onClick={() => {
              setIsViewModalVisible(false)
              if (selectedPlaylist) showEditModal(selectedPlaylist)
            }}
            size={isMobile ? "middle" : "large"}
            block={isMobile}
            style={{ 
              height: isMobile ? '40px' : 'auto',
              flex: isMobile ? 1 : 'auto'
            }}
          >
            Edit Playlist
          </Button>,
        ]}
        styles={{
          body: {
            padding: isMobile ? 16 : 24,
          }
        }}
      >
        {selectedPlaylist && (
          <>
            <div style={{ marginBottom: isMobile ? 16 : 24 }}>
              <Text 
                type="secondary" 
                style={{ fontSize: isMobile ? 14 : 16, display: 'block', marginBottom: 8 }}
              >
                {selectedPlaylist.description || "No description provided"}
              </Text>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 8,
                marginTop: isMobile ? 8 : 12 
              }}>
                <Tag 
                  color="blue"
                  style={{ 
                    fontSize: isMobile ? 11 : 12,
                    padding: isMobile ? '2px 8px' : '4px 10px'
                  }}
                >
                  {selectedPlaylist.category}
                </Tag>
                <Tag
                  color={
                    selectedPlaylist.visibility === "Public"
                      ? "green"
                      : selectedPlaylist.visibility === "Unlisted"
                        ? "orange"
                        : "gray"
                  }
                  style={{ 
                    fontSize: isMobile ? 11 : 12,
                    padding: isMobile ? '2px 8px' : '4px 10px'
                  }}
                >
                  {selectedPlaylist.visibility}
                </Tag>
                <Tag 
                  style={{ 
                    fontSize: isMobile ? 11 : 12,
                    padding: isMobile ? '2px 8px' : '4px 10px'
                  }}
                >
                  {selectedPlaylist.videoIds.length} videos
                </Tag>
              </div>
            </div>

            <Divider 
              orientation="left"
              style={{ 
                fontSize: isMobile ? 16 : 18,
                margin: isMobile ? "16px 0" : "24px 0",
                borderColor: '#e8e8e8'
              }}
            >
              Videos
            </Divider>

            {selectedPlaylist.videoIds.length === 0 ? (
              <Empty 
                description={
                  <span style={{ fontSize: isMobile ? 14 : 16 }}>
                    No videos in this playlist
                  </span>
                } 
                style={{ padding: isMobile ? 24 : 40 }}
              />
            ) : (
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="playlist-videos">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <List
                        dataSource={getPlaylistVideos(selectedPlaylist.videoIds)}
                        renderItem={(video, index) => (
                          <Draggable key={video.id} draggableId={video.id} index={index}>
                            {(provided) => (
                              <div 
                                ref={provided.innerRef} 
                                {...provided.draggableProps} 
                                style={{
                                  marginBottom: '8px',
                                  borderRadius: '6px',
                                  border: '1px solid #f0f0f0',
                                  background: '#fafafa',
                                  ...provided.draggableProps.style
                                }}
                              >
                                <List.Item
                                  actions={[
                                    <Button
                                      key="remove"
                                      type="text"
                                      danger
                                      icon={<DeleteOutlined />}
                                      onClick={() => handleRemoveVideo(selectedPlaylist.id, video.id)}
                                      size={isMobile ? "small" : "middle"}
                                    />,
                                  ]}
                                  style={{ 
                                    padding: isMobile ? '12px 16px' : '16px 24px',
                                    alignItems: 'center'
                                  }}
                                >
                                  <List.Item.Meta
                                    avatar={
                                      <div style={{ position: "relative" }}>
                                        <Avatar 
                                          shape="square" 
                                          size={isMobile ? 48 : 64} 
                                          src={video.thumbnailUrl} 
                                          style={{ borderRadius: '4px' }}
                                        />
                                        <MenuOutlined
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            padding: isMobile ? 3 : 5,
                                            background: "rgba(0,0,0,0.5)",
                                            color: "white",
                                            borderRadius: "0 0 4px 0",
                                            fontSize: isMobile ? 14 : 16
                                          }}
                                        />
                                      </div>
                                    }
                                    title={
                                      <div style={{ display: "flex", alignItems: "center", flexWrap: 'wrap' }}>
                                        <span style={{ 
                                          marginRight: 8, 
                                          fontSize: isMobile ? 13 : 14,
                                          fontWeight: 500
                                        }}>
                                          {index + 1}.
                                        </span>
                                        <span style={{ 
                                          fontSize: isMobile ? 14 : 16,
                                          wordBreak: 'break-word'
                                        }}>
                                          {video.title}
                                        </span>
                                      </div>
                                    }
                                    description={
                                      <div style={{ marginTop: 4 }}>
                                        <Text 
                                          type="secondary" 
                                          style={{ fontSize: isMobile ? 12 : 13 }}
                                        >
                                          {video.duration}
                                        </Text>
                                        <div style={{ marginTop: 4 }}>
                                          {getStatusTag(video.status, isMobile)}
                                        </div>
                                      </div>
                                    }
                                  />
                                </List.Item>
                              </div>
                            )}
                          </Draggable>
                        )}
                        style={{ 
                          padding: 0 
                        }}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </>
        )}
      </Modal>
    </>
  )
}

const getStatusTag = (status, isMobile = false) => {
  switch (status) {
    case "Approved":
      return <Tag color="success" style={{ fontSize: isMobile ? 11 : 12, padding: isMobile ? '2px 8px' : '4px 10px' }}>Approved</Tag>
    case "Rejected":
      return <Tag color="error" style={{ fontSize: isMobile ? 11 : 12, padding: isMobile ? '2px 8px' : '4px 10px' }}>Rejected</Tag>
    case "Pending":
      return <Tag color="warning" style={{ fontSize: isMobile ? 11 : 12, padding: isMobile ? '2px 8px' : '4px 10px' }}>Pending</Tag>
    default:
      return <Tag color="default" style={{ fontSize: isMobile ? 11 : 12, padding: isMobile ? '2px 8px' : '4px 10px' }}>{status}</Tag>
  }
}

export default PlaylistManagement
