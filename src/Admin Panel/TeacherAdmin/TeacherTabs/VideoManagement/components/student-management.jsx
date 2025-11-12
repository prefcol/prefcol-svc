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
//   Typography,
//   Statistic,
//   message,
//   Divider,
//   List,
//   Avatar,
//   Tabs,
//   Badge,
// } from "antd"
// import {
//   SearchOutlined,
//   FilterOutlined,
//   MoreOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   EyeOutlined,
//   UserAddOutlined,
//   MailOutlined,
//   TeamOutlined,
//   CheckCircleOutlined,
//   ClockCircleOutlined,
//   BookOutlined,
//   VideoCameraOutlined,
//   FileTextOutlined,
//   DownloadOutlined,
//   UploadOutlined,
// } from "@ant-design/icons"

// const { Title, Text } = Typography
// const { Option } = Select
// const { confirm } = Modal

// // Mock data for students
// const initialStudents = [
//   {
//     id: "student-1",
//     name: "Emma Johnson",
//     email: "emma.johnson@example.com",
//     enrollmentDate: "2023-01-15",
//     status: "Active",
//     grade: "10th Grade",
//     coursesEnrolled: 3,
//     lastActive: "2023-06-25T14:30:00Z",
//     progress: 78,
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: "student-2",
//     name: "Michael Chen",
//     email: "michael.chen@example.com",
//     enrollmentDate: "2023-02-10",
//     status: "Active",
//     grade: "11th Grade",
//     coursesEnrolled: 4,
//     lastActive: "2023-06-24T09:15:00Z",
//     progress: 92,
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: "student-3",
//     name: "Sophia Rodriguez",
//     email: "sophia.rodriguez@example.com",
//     enrollmentDate: "2023-01-20",
//     status: "Inactive",
//     grade: "9th Grade",
//     coursesEnrolled: 2,
//     lastActive: "2023-05-15T11:45:00Z",
//     progress: 45,
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: "student-4",
//     name: "James Wilson",
//     email: "james.wilson@example.com",
//     enrollmentDate: "2023-03-05",
//     status: "Active",
//     grade: "12th Grade",
//     coursesEnrolled: 5,
//     lastActive: "2023-06-26T16:20:00Z",
//     progress: 85,
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: "student-5",
//     name: "Olivia Kim",
//     email: "olivia.kim@example.com",
//     enrollmentDate: "2023-02-28",
//     status: "Active",
//     grade: "10th Grade",
//     coursesEnrolled: 3,
//     lastActive: "2023-06-23T13:10:00Z",
//     progress: 67,
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
// ]

// const StudentManagement = ({ isMobile }) => {
//   const [students, setStudents] = useState(initialStudents)
//   const [loading, setLoading] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [filterStatus, setFilterStatus] = useState("")
//   const [filterGrade, setFilterGrade] = useState("")
//   const [isAddModalVisible, setIsAddModalVisible] = useState(false)
//   const [isViewModalVisible, setIsViewModalVisible] = useState(false)
//   const [selectedStudent, setSelectedStudent] = useState(null)
//   const [form] = Form.useForm()
//   const [messageApi, contextHolder] = message.useMessage()
//   const [filtersVisible, setFiltersVisible] = useState(false)

//   // Filter students based on search query and filters
//   const filteredStudents = students.filter((student) => {
//     const matchesSearch =
//       student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.email.toLowerCase().includes(searchQuery.toLowerCase())

//     const matchesStatus = filterStatus ? student.status === filterStatus : true
//     const matchesGrade = filterGrade ? student.grade === filterGrade : true

//     return matchesSearch && matchesStatus && matchesGrade
//   })

//   // Stats for students
//   const stats = {
//     total: students.length,
//     active: students.filter((student) => student.status === "Active").length,
//     inactive: students.filter((student) => student.status === "Inactive").length,
//     averageProgress: Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length),
//   }

//   const handleSearch = (value) => {
//     setSearchQuery(value)
//   }

//   const handleFilterStatusChange = (value) => {
//     setFilterStatus(value)
//   }

//   const handleFilterGradeChange = (value) => {
//     setFilterGrade(value)
//   }

//   const showAddModal = () => {
//     form.resetFields()
//     setIsAddModalVisible(true)
//   }

//   const showViewModal = (student) => {
//     setSelectedStudent(student)
//     setIsViewModalVisible(true)
//   }

//   const handleDeleteStudent = (student) => {
//     confirm({
//       title: `Are you sure you want to remove ${student.name}?`,
//       content: "This action cannot be undone.",
//       okText: "Yes, Remove",
//       okType: "danger",
//       cancelText: "Cancel",
//       onOk: async () => {
//         try {
//           setLoading(true)
//           // Simulate API call
//           await new Promise((resolve) => setTimeout(resolve, 500))
//           setStudents((prev) => prev.filter((s) => s.id !== student.id))
//           messageApi.success("Student removed successfully")
//           setLoading(false)
//         } catch (error) {
//           messageApi.error("Failed to remove student")
//           console.error("Delete error:", error)
//           setLoading(false)
//         }
//       },
//     })
//   }

//   const handleAddSubmit = async (values) => {
//     try {
//       setLoading(true)
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 500))

//       const newStudent = {
//         id: `student-${Date.now()}`,
//         name: values.name,
//         email: values.email,
//         enrollmentDate: values.enrollmentDate || new Date().toISOString().split("T")[0],
//         status: values.status || "Active",
//         grade: values.grade,
//         coursesEnrolled: 0,
//         lastActive: new Date().toISOString(),
//         progress: 0,
//         avatar: "/placeholder.svg?height=100&width=100",
//       }

//       setStudents((prev) => [...prev, newStudent])
//       setIsAddModalVisible(false)
//       form.resetFields()
//       messageApi.success("Student added successfully")
//       setLoading(false)
//     } catch (error) {
//       messageApi.error("Failed to add student")
//       console.error("Add error:", error)
//       setLoading(false)
//     }
//   }

//   const columns = [
//     {
//       title: "Student",
//       dataIndex: "name",
//       key: "name",
//       render: (text, record) => (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <Avatar src={record.avatar} size={40} style={{ marginRight: 12 }} />
//           <div>
//             <div style={{ fontWeight: "bold" }}>{text}</div>
//             <div style={{ fontSize: 12, color: "#666" }}>{record.email}</div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Grade",
//       dataIndex: "grade",
//       key: "grade",
//       responsive: ["md"],
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => <Tag color={status === "Active" ? "success" : "default"}>{status}</Tag>,
//       responsive: ["md"],
//     },
//     {
//       title: "Courses",
//       dataIndex: "coursesEnrolled",
//       key: "coursesEnrolled",
//       responsive: ["lg"],
//     },
//     {
//       title: "Progress",
//       dataIndex: "progress",
//       key: "progress",
//       render: (progress) => (
//         <div style={{ width: 120 }}>
//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
//             <span style={{ fontSize: 12 }}>{progress}%</span>
//           </div>
//           <div
//             style={{
//               height: 8,
//               backgroundColor: "#f0f0f0",
//               borderRadius: 4,
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 height: "100%",
//                 width: `${progress}%`,
//                 backgroundColor: progress < 50 ? "#FF5252" : progress < 75 ? "#FFB347" : "#00A878",
//                 borderRadius: 4,
//               }}
//             />
//           </div>
//         </div>
//       ),
//       responsive: ["md"],
//     },
//     {
//       title: "Last Active",
//       dataIndex: "lastActive",
//       key: "lastActive",
//       render: (date) => new Date(date).toLocaleDateString(),
//       responsive: ["lg"],
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <Dropdown
//           overlay={
//             <Menu
//               items={[
//                 {
//                   key: "1",
//                   icon: <EyeOutlined />,
//                   label: "View Details",
//                   onClick: () => showViewModal(record),
//                 },
//                 {
//                   key: "2",
//                   icon: <EditOutlined />,
//                   label: "Edit",
//                   onClick: () => messageApi.info("Edit functionality coming soon"),
//                 },
//                 {
//                   key: "3",
//                   icon: <MailOutlined />,
//                   label: "Send Message",
//                   onClick: () => messageApi.info("Message functionality coming soon"),
//                 },
//                 {
//                   type: "divider",
//                 },
//                 {
//                   key: "4",
//                   icon: <DeleteOutlined />,
//                   label: "Remove",
//                   danger: true,
//                   onClick: () => handleDeleteStudent(record),
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
//         dataSource={filteredStudents}
//         loading={loading}
//         renderItem={(student) => (
//           <List.Item
//             key={student.id}
//             actions={[
//               <Button key="view" type="text" icon={<EyeOutlined />} onClick={() => showViewModal(student)} />,
//               <Dropdown
//                 key="more"
//                 overlay={
//                   <Menu
//                     items={[
//                       {
//                         key: "1",
//                         icon: <EditOutlined />,
//                         label: "Edit",
//                         onClick: () => messageApi.info("Edit functionality coming soon"),
//                       },
//                       {
//                         key: "2",
//                         icon: <MailOutlined />,
//                         label: "Send Message",
//                         onClick: () => messageApi.info("Message functionality coming soon"),
//                       },
//                       {
//                         key: "3",
//                         icon: <DeleteOutlined />,
//                         label: "Remove",
//                         danger: true,
//                         onClick: () => handleDeleteStudent(student),
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
//               avatar={<Avatar src={student.avatar} size={50} />}
//               title={<Text strong>{student.name}</Text>}
//               description={
//                 <div>
//                   <div>{student.email}</div>
//                   <Space style={{ marginTop: 8 }}>
//                     <Tag color={student.status === "Active" ? "success" : "default"}>{student.status}</Tag>
//                     <Text type="secondary">{student.grade}</Text>
//                   </Space>
//                   <div style={{ marginTop: 8 }}>
//                     <Text type="secondary">Progress: {student.progress}%</Text>
//                     <div
//                       style={{
//                         height: 6,
//                         backgroundColor: "#f0f0f0",
//                         borderRadius: 3,
//                         overflow: "hidden",
//                         marginTop: 4,
//                       }}
//                     >
//                       <div
//                         style={{
//                           height: "100%",
//                           width: `${student.progress}%`,
//                           backgroundColor:
//                             student.progress < 50 ? "#FF5252" : student.progress < 75 ? "#FFB347" : "#00A878",
//                           borderRadius: 3,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               }
//             />
//           </List.Item>
//         )}
//         pagination={{
//           pageSize: 10,
//           showSizeChanger: true,
//           showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} students`,
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
//             <Statistic
//               title="Total Students"
//               value={stats.total}
//               prefix={<TeamOutlined style={{ color: "#FF7A00" }} />}
//             />
//           </Col>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic
//               title="Active Students"
//               value={stats.active}
//               valueStyle={{ color: "#00A878" }}
//               prefix={<CheckCircleOutlined />}
//             />
//           </Col>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic
//               title="Inactive Students"
//               value={stats.inactive}
//               valueStyle={{ color: "#999" }}
//               prefix={<ClockCircleOutlined />}
//             />
//           </Col>
//           <Col xs={12} sm={12} md={6} lg={6}>
//             <Statistic
//               title="Average Progress"
//               value={stats.averageProgress}
//               suffix="%"
//               prefix={<BookOutlined style={{ color: "#0096C7" }} />}
//             />
//           </Col>
//         </Row>
//       </Card>

//       <Divider style={{ margin: "16px 0" }} />

//       {isMobile ? (
//         <>
//           <Space style={{ marginBottom: 16, width: "100%" }}>
//             <Input
//               placeholder="Search students"
//               prefix={<SearchOutlined />}
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//               style={{ flex: 1 }}
//               allowClear
//             />
//             <Button icon={<FilterOutlined />} onClick={() => setFiltersVisible(!filtersVisible)} />
//             <Button type="primary" icon={<UserAddOutlined />} onClick={showAddModal} />
//           </Space>

//           {filtersVisible && (
//             <Card style={{ marginBottom: 16 }}>
//               <Space direction="vertical" style={{ width: "100%" }}>
//                 <Select
//                   placeholder="Filter by status"
//                   style={{ width: "100%" }}
//                   onChange={handleFilterStatusChange}
//                   value={filterStatus || undefined}
//                   allowClear
//                 >
//                   <Option value="Active">Active</Option>
//                   <Option value="Inactive">Inactive</Option>
//                 </Select>
//                 <Select
//                   placeholder="Filter by grade"
//                   style={{ width: "100%" }}
//                   onChange={handleFilterGradeChange}
//                   value={filterGrade || undefined}
//                   allowClear
//                 >
//                   <Option value="9th Grade">9th Grade</Option>
//                   <Option value="10th Grade">10th Grade</Option>
//                   <Option value="11th Grade">11th Grade</Option>
//                   <Option value="12th Grade">12th Grade</Option>
//                 </Select>
//               </Space>
//             </Card>
//           )}

//           {renderMobileList()}
//         </>
//       ) : (
//         <>
//           <Space style={{ marginBottom: 16, width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
//             <Space wrap>
//               <Input
//                 placeholder="Search students"
//                 prefix={<SearchOutlined />}
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 style={{ width: 250 }}
//                 allowClear
//               />
//               <Select
//                 placeholder="Filter by status"
//                 style={{ width: 150 }}
//                 onChange={handleFilterStatusChange}
//                 value={filterStatus || undefined}
//                 allowClear
//               >
//                 <Option value="Active">Active</Option>
//                 <Option value="Inactive">Inactive</Option>
//               </Select>
//               <Select
//                 placeholder="Filter by grade"
//                 style={{ width: 150 }}
//                 onChange={handleFilterGradeChange}
//                 value={filterGrade || undefined}
//                 allowClear
//               >
//                 <Option value="9th Grade">9th Grade</Option>
//                 <Option value="10th Grade">10th Grade</Option>
//                 <Option value="11th Grade">11th Grade</Option>
//                 <Option value="12th Grade">12th Grade</Option>
//               </Select>
//             </Space>
//             <Space>
//               <Button icon={<UploadOutlined />}>Import</Button>
//               <Button icon={<DownloadOutlined />}>Export</Button>
//               <Button type="primary" icon={<UserAddOutlined />} onClick={showAddModal}>
//                 Add Student
//               </Button>
//             </Space>
//           </Space>

//           <Table
//             dataSource={filteredStudents}
//             columns={columns}
//             rowKey="id"
//             loading={loading}
//             pagination={{
//               pageSize: 10,
//               showSizeChanger: true,
//               showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} students`,
//             }}
//             scroll={{ x: "max-content" }}
//           />
//         </>
//       )}

//       {/* Add Student Modal */}
//       <Modal
//         title="Add New Student"
//         open={isAddModalVisible}
//         onCancel={() => setIsAddModalVisible(false)}
//         footer={null}
//         width={isMobile ? "95%" : 600}
//         centered
//       >
//         <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
//           <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter student name" }]}>
//             <Input placeholder="Enter student name" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               { required: true, message: "Please enter email" },
//               { type: "email", message: "Please enter a valid email" },
//             ]}
//           >
//             <Input placeholder="Enter student email" />
//           </Form.Item>

//           <Row gutter={16}>
//             <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
//               <Form.Item name="grade" label="Grade" rules={[{ required: true, message: "Please select grade" }]}>
//                 <Select placeholder="Select grade">
//                   <Option value="9th Grade">9th Grade</Option>
//                   <Option value="10th Grade">10th Grade</Option>
//                   <Option value="11th Grade">11th Grade</Option>
//                   <Option value="12th Grade">12th Grade</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={isMobile ? 24 : 12}>
//               <Form.Item name="status" label="Status" initialValue="Active">
//                 <Select placeholder="Select status">
//                   <Option value="Active">Active</Option>
//                   <Option value="Inactive">Inactive</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item>
//             <Space style={{ width: "100%", justifyContent: "flex-end" }}>
//               <Button onClick={() => setIsAddModalVisible(false)}>Cancel</Button>
//               <Button type="primary" htmlType="submit">
//                 Add Student
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* View Student Modal */}
//       {selectedStudent && (
//         <Modal
//           title="Student Details"
//           open={isViewModalVisible}
//           onCancel={() => setIsViewModalVisible(false)}
//           width={isMobile ? "95%" : 700}
//           footer={[
//             <Button key="close" onClick={() => setIsViewModalVisible(false)}>
//               Close
//             </Button>,
//             <Button
//               key="edit"
//               type="primary"
//               icon={<EditOutlined />}
//               onClick={() => {
//                 setIsViewModalVisible(false)
//                 messageApi.info("Edit functionality coming soon")
//               }}
//             >
//               Edit
//             </Button>,
//           ]}
//           centered
//         >
//           <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 20 }}>
//             <div style={{ textAlign: "center" }}>
//               <Avatar src={selectedStudent.avatar} size={100} style={{ marginBottom: 16 }} />
//               <div>
//                 <Tag color={selectedStudent.status === "Active" ? "success" : "default"}>{selectedStudent.status}</Tag>
//               </div>
//             </div>

//             <div style={{ flex: 1 }}>
//               <Title level={4}>{selectedStudent.name}</Title>
//               <Text type="secondary">{selectedStudent.email}</Text>

//               <Divider style={{ margin: "16px 0" }} />

//               <Row gutter={[16, 16]}>
//                 <Col span={12}>
//                   <Text type="secondary">Grade:</Text>
//                   <div>
//                     <strong>{selectedStudent.grade}</strong>
//                   </div>
//                 </Col>
//                 <Col span={12}>
//                   <Text type="secondary">Enrollment Date:</Text>
//                   <div>
//                     <strong>{new Date(selectedStudent.enrollmentDate).toLocaleDateString()}</strong>
//                   </div>
//                 </Col>
//                 <Col span={12}>
//                   <Text type="secondary">Courses Enrolled:</Text>
//                   <div>
//                     <strong>{selectedStudent.coursesEnrolled}</strong>
//                   </div>
//                 </Col>
//                 <Col span={12}>
//                   <Text type="secondary">Last Active:</Text>
//                   <div>
//                     <strong>{new Date(selectedStudent.lastActive).toLocaleString()}</strong>
//                   </div>
//                 </Col>
//               </Row>

//               <Divider style={{ margin: "16px 0" }} />

//               <div>
//                 <Text type="secondary">Progress:</Text>
//                 <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
//                   <div style={{ flex: 1 }}>
//                     <div
//                       style={{
//                         height: 10,
//                         backgroundColor: "#f0f0f0",
//                         borderRadius: 5,
//                         overflow: "hidden",
//                       }}
//                     >
//                       <div
//                         style={{
//                           height: "100%",
//                           width: `${selectedStudent.progress}%`,
//                           backgroundColor:
//                             selectedStudent.progress < 50
//                               ? "#FF5252"
//                               : selectedStudent.progress < 75
//                                 ? "#FFB347"
//                                 : "#00A878",
//                           borderRadius: 5,
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <strong>{selectedStudent.progress}%</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Tabs
//             style={{ marginTop: 24 }}
//             items={[
//               {
//                 key: "courses",
//                 label: (
//                   <span>
//                     <BookOutlined /> Courses
//                   </span>
//                 ),
//                 children: (
//                   <List
//                     dataSource={[
//                       { id: 1, name: "Introduction to Biology", progress: 85 },
//                       { id: 2, name: "Advanced Mathematics", progress: 72 },
//                       { id: 3, name: "World History", progress: 65 },
//                     ]}
//                     renderItem={(item) => (
//                       <List.Item key={item.id}>
//                         <List.Item.Meta
//                           avatar={<Avatar icon={<BookOutlined />} style={{ backgroundColor: "#00A878" }} />}
//                           title={item.name}
//                           description={
//                             <div style={{ width: "100%" }}>
//                               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                                 <span>Progress: {item.progress}%</span>
//                               </div>
//                               <div
//                                 style={{
//                                   height: 6,
//                                   backgroundColor: "#f0f0f0",
//                                   borderRadius: 3,
//                                   overflow: "hidden",
//                                   marginTop: 4,
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     height: "100%",
//                                     width: `${item.progress}%`,
//                                     backgroundColor:
//                                       item.progress < 50 ? "#FF5252" : item.progress < 75 ? "#FFB347" : "#00A878",
//                                     borderRadius: 3,
//                                   }}
//                                 />
//                               </div>
//                             </div>
//                           }
//                         />
//                       </List.Item>
//                     )}
//                   />
//                 ),
//               },
//               {
//                 key: "videos",
//                 label: (
//                   <span>
//                     <VideoCameraOutlined /> Videos
//                   </span>
//                 ),
//                 children: (
//                   <List
//                     dataSource={[
//                       { id: 1, name: "Cell Structure and Function", watched: true, date: "2023-06-20" },
//                       { id: 2, name: "Quadratic Equations", watched: true, date: "2023-06-18" },
//                       { id: 3, name: "World War II Overview", watched: false, date: null },
//                     ]}
//                     renderItem={(item) => (
//                       <List.Item key={item.id}>
//                         <List.Item.Meta
//                           avatar={<Avatar icon={<VideoCameraOutlined />} style={{ backgroundColor: "#FF7A00" }} />}
//                           title={item.name}
//                           description={
//                             <div>
//                               {item.watched ? (
//                                 <Badge status="success" text={`Watched on ${item.date}`} />
//                               ) : (
//                                 <Badge status="default" text="Not watched yet" />
//                               )}
//                             </div>
//                           }
//                         />
//                       </List.Item>
//                     )}
//                   />
//                 ),
//               },
//               {
//                 key: "assignments",
//                 label: (
//                   <span>
//                     <FileTextOutlined /> Assignments
//                   </span>
//                 ),
//                 children: (
//                   <List
//                     dataSource={[
//                       { id: 1, name: "Biology Lab Report", status: "Completed", grade: "A", date: "2023-06-15" },
//                       { id: 2, name: "Math Problem Set", status: "Completed", grade: "B+", date: "2023-06-10" },
//                       { id: 3, name: "History Essay", status: "Pending", grade: null, date: "2023-06-30" },
//                     ]}
//                     renderItem={(item) => (
//                       <List.Item
//                         key={item.id}
//                         actions={[
//                           item.status === "Completed" ? (
//                             <Tag color="success" key={item.id}>
//                               Grade: {item.grade}
//                             </Tag>
//                           ) : (
//                             <Tag color="warning">Due: {item.date}</Tag>
//                           ),
//                         ]}
//                       >
//                         <List.Item.Meta
//                           avatar={<Avatar icon={<FileTextOutlined />} style={{ backgroundColor: "#0096C7" }} />}
//                           title={item.name}
//                           description={
//                             <Badge status={item.status === "Completed" ? "success" : "processing"} text={item.status} />
//                           }
//                         />
//                       </List.Item>
//                     )}
//                   />
//                 ),
//               },
//             ]}
//           />
//         </Modal>
//       )}
//     </>
//   )
// }

// export default StudentManagement

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
  Typography,
  Statistic,
  message,
  Divider,
  List,
  Avatar,
  Tabs,
  Badge,
  Drawer,
  Empty,
} from "antd"
import {
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserAddOutlined,
  MailOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  BookOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  DownloadOutlined,
  UploadOutlined,
  CloseOutlined,
} from "@ant-design/icons"

const { Title, Text } = Typography
const { Option } = Select
const { confirm } = Modal

// Mock data for students
const initialStudents = [
  {
    id: "student-1",
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    enrollmentDate: "2023-01-15",
    status: "Active",
    grade: "10th Grade",
    coursesEnrolled: 3,
    lastActive: "2023-06-25T14:30:00Z",
    progress: 78,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "student-2",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    enrollmentDate: "2023-02-10",
    status: "Active",
    grade: "11th Grade",
    coursesEnrolled: 4,
    lastActive: "2023-06-24T09:15:00Z",
    progress: 92,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "student-3",
    name: "Sophia Rodriguez",
    email: "sophia.rodriguez@example.com",
    enrollmentDate: "2023-01-20",
    status: "Inactive",
    grade: "9th Grade",
    coursesEnrolled: 2,
    lastActive: "2023-05-15T11:45:00Z",
    progress: 45,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "student-4",
    name: "James Wilson",
    email: "james.wilson@example.com",
    enrollmentDate: "2023-03-05",
    status: "Active",
    grade: "12th Grade",
    coursesEnrolled: 5,
    lastActive: "2023-06-26T16:20:00Z",
    progress: 85,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "student-5",
    name: "Olivia Kim",
    email: "olivia.kim@example.com",
    enrollmentDate: "2023-02-28",
    status: "Active",
    grade: "10th Grade",
    coursesEnrolled: 3,
    lastActive: "2023-06-23T13:10:00Z",
    progress: 67,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const StudentManagement = ({ isMobile }) => {
  const [students, setStudents] = useState(initialStudents)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [filterGrade, setFilterGrade] = useState("")
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [isViewModalVisible, setIsViewModalVisible] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const [isFilterDrawerVisible, setIsFilterDrawerVisible] = useState(false)

  // Filter students based on search query and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus ? student.status === filterStatus : true
    const matchesGrade = filterGrade ? student.grade === filterGrade : true

    return matchesSearch && matchesStatus && matchesGrade
  })

  // Stats for students
  const stats = {
    total: students.length,
    active: students.filter((student) => student.status === "Active").length,
    inactive: students.filter((student) => student.status === "Inactive").length,
    averageProgress: Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length),
  }

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleFilterStatusChange = (value) => {
    setFilterStatus(value)
  }

  const handleFilterGradeChange = (value) => {
    setFilterGrade(value)
  }

  const showAddModal = () => {
    form.resetFields()
    setIsAddModalVisible(true)
  }

  const showViewModal = (student) => {
    setSelectedStudent(student)
    setIsViewModalVisible(true)
  }

  const handleDeleteStudent = (student) => {
    confirm({
      title: `Are you sure you want to remove ${student.name}?`,
      content: "This action cannot be undone.",
      okText: "Yes, Remove",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setLoading(true)
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 500))
          setStudents((prev) => prev.filter((s) => s.id !== student.id))
          messageApi.success("Student removed successfully")
          setLoading(false)
        } catch (error) {
          messageApi.error("Failed to remove student")
          console.error("Delete error:", error)
          setLoading(false)
        }
      },
    })
  }

  const handleAddSubmit = async (values) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newStudent = {
        id: `student-${Date.now()}`,
        name: values.name,
        email: values.email,
        enrollmentDate: values.enrollmentDate || new Date().toISOString().split("T")[0],
        status: values.status || "Active",
        grade: values.grade,
        coursesEnrolled: 0,
        lastActive: new Date().toISOString(),
        progress: 0,
        avatar: "/placeholder.svg?height=100&width=100",
      }

      setStudents((prev) => [...prev, newStudent])
      setIsAddModalVisible(false)
      form.resetFields()
      messageApi.success("Student added successfully")
      setLoading(false)
    } catch (error) {
      messageApi.error("Failed to add student")
      console.error("Add error:", error)
      setLoading(false)
    }
  }

  // Desktop table columns
  const desktopColumns = [
    {
      title: "Student",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} size={40} style={{ marginRight: 12 }} />
          <div>
            <div style={{ fontWeight: "bold", fontSize: 14 }}>{text}</div>
            <div style={{ fontSize: 12, color: "#666" }}>{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={status === "Active" ? "success" : "default"}>{status}</Tag>,
      responsive: ["md"],
    },
    {
      title: "Courses",
      dataIndex: "coursesEnrolled",
      key: "coursesEnrolled",
      responsive: ["lg"],
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress) => (
        <div style={{ width: 120 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 12 }}>{progress}%</span>
          </div>
          <div
            style={{
              height: 8,
              backgroundColor: "#f0f0f0",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: progress < 50 ? "#FF5252" : progress < 75 ? "#FFB347" : "#00A878",
                borderRadius: 4,
              }}
            />
          </div>
        </div>
      ),
      responsive: ["md"],
    },
    {
      title: "Last Active",
      dataIndex: "lastActive",
      key: "lastActive",
      render: (date) => new Date(date).toLocaleDateString(),
      responsive: ["lg"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  key: "1",
                  icon: <EyeOutlined />,
                  label: "View Details",
                  onClick: () => showViewModal(record),
                },
                {
                  key: "2",
                  icon: <EditOutlined />,
                  label: "Edit",
                  onClick: () => messageApi.info("Edit functionality coming soon"),
                },
                {
                  key: "3",
                  icon: <MailOutlined />,
                  label: "Send Message",
                  onClick: () => messageApi.info("Message functionality coming soon"),
                },
                {
                  type: "divider",
                },
                {
                  key: "4",
                  icon: <DeleteOutlined />,
                  label: "Remove",
                  danger: true,
                  onClick: () => handleDeleteStudent(record),
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

  // Tablet optimized columns
  const tabletColumns = [
    {
      title: "Student",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} size={36} style={{ marginRight: 10 }} />
          <div>
            <div style={{ fontWeight: "bold", fontSize: 13 }}>{text}</div>
            <div style={{ fontSize: 11, color: "#666" }}>{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={status === "Active" ? "success" : "default"}>{status}</Tag>,
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress) => (
        <div style={{ width: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 11 }}>{progress}%</span>
          </div>
          <div
            style={{
              height: 6,
              backgroundColor: "#f0f0f0",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: progress < 50 ? "#FF5252" : progress < 75 ? "#FFB347" : "#00A878",
                borderRadius: 3,
              }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
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
                  onClick: () => messageApi.info("Edit functionality coming soon"),
                },
                {
                  key: "3",
                  icon: <DeleteOutlined />,
                  label: "Remove",
                  danger: true,
                  onClick: () => handleDeleteStudent(record),
                },
              ]}
            />
          }
          trigger={["click"]}
        >
          <Button type="text" icon={<MoreOutlined />} size="small" />
        </Dropdown>
      ),
    },
  ]

  // Mobile card view with status tag below name and email
  const renderMobileView = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredStudents.map((student) => (
          <Card
            key={student.id}
            style={{ 
              border: '1px solid #f0f0f0', 
              borderRadius: '8px',
              padding: '0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '16px'
            }}>
              {/* Student Info - Status tag now below name and email */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '16px',
                marginBottom: '16px'
              }}>
                <Avatar 
                  src={student.avatar} 
                  size={48} 
                  style={{ flexShrink: 0 }}
                />
                <div style={{ 
                  flex: 1, 
                  minWidth: 0
                }}>
                  <Text strong style={{ fontSize: '16px', lineHeight: '1.4', display: 'block' }}>
                    {student.name}
                  </Text>
                  <Text 
                    type="secondary" 
                    style={{ 
                      fontSize: '13px', 
                      marginTop: '4px',
                      display: 'block',
                      wordBreak: 'break-all'
                    }}
                  >
                    {student.email}
                  </Text>
                  {/* Status tag moved below name and email */}
                  <div style={{ marginTop: '8px' }}>
                    <Tag 
                      color={student.status === "Active" ? "success" : "default"}
                      style={{ 
                        fontSize: '12px', 
                        padding: '4px 12px',
                        fontWeight: 500,
                        display: 'inline-block'
                      }}
                    >
                      {student.status}
                    </Tag>
                  </div>
                </div>
              </div>
              
              {/* Student Details */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Grade</Text>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>{student.grade}</div>
                </div>
                <div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Courses</Text>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>{student.coursesEnrolled}</div>
                </div>
                <div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Last Active</Text>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>
                    {new Date(student.lastActive).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Progress</Text>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>{student.progress}%</div>
                  <div
                    style={{
                      height: '6px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      marginTop: '8px'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${student.progress}%`,
                        backgroundColor: student.progress < 50 ? '#FF5252' : student.progress < 75 ? '#FFB347' : '#00A878',
                        borderRadius: '3px',
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                gap: '12px',
                paddingTop: '12px',
                borderTop: '1px solid #f0f0f0',
                marginTop: '12px'
              }}>
                <Button 
                  type="text" 
                  icon={<EyeOutlined />} 
                  size="small"
                  onClick={() => showViewModal(student)}
                  style={{ 
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View
                </Button>
                <Dropdown
                  overlay={
                    <Menu
                      items={[
                        {
                          key: "1",
                          icon: <EditOutlined />,
                          label: "Edit",
                          onClick: () => messageApi.info("Edit functionality coming soon"),
                        },
                        {
                          key: "2",
                          icon: <MailOutlined />,
                          label: "Message",
                          onClick: () => messageApi.info("Message functionality coming soon"),
                        },
                        {
                          key: "3",
                          icon: <DeleteOutlined />,
                          label: "Remove",
                          danger: true,
                          onClick: () => handleDeleteStudent(student),
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
          </Card>
        ))}
        
        {filteredStudents.length === 0 && !loading && (
          <Empty 
            description="No students found" 
            style={{ 
              marginTop: '24px',
              padding: '32px',
              textAlign: 'center'
            }} 
          />
        )}
      </div>
    )
  }

  return (
    <>
      {contextHolder}
      <Card bordered={false} bodyStyle={{ padding: isMobile ? 12 : 24 }}>
        <Row gutter={[isMobile ? 8 : 16, isMobile ? 8 : 16]}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic
              title="Total Students"
              value={stats.total}
              prefix={<TeamOutlined style={{ color: "#FF7A00" }} />}
              valueStyle={{ fontSize: isMobile ? 20 : 24 }}
              titleStyle={{ fontSize: isMobile ? 12 : 14 }}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic
              title="Active Students"
              value={stats.active}
              valueStyle={{ color: "#00A878", fontSize: isMobile ? 20 : 24 }}
              prefix={<CheckCircleOutlined />}
              titleStyle={{ fontSize: isMobile ? 12 : 14 }}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic
              title="Inactive Students"
              value={stats.inactive}
              valueStyle={{ color: "#999", fontSize: isMobile ? 20 : 24 }}
              prefix={<ClockCircleOutlined />}
              titleStyle={{ fontSize: isMobile ? 12 : 14 }}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Statistic
              title="Average Progress"
              value={stats.averageProgress}
              suffix="%"
              prefix={<BookOutlined style={{ color: "#0096C7" }} />}
              valueStyle={{ fontSize: isMobile ? 20 : 24 }}
              titleStyle={{ fontSize: isMobile ? 12 : 14 }}
            />
          </Col>
        </Row>
      </Card>

      <Divider style={{ margin: isMobile ? "12px 0" : "16px 0" }} />

      {isMobile ? (
        <>
          <Space 
            direction="vertical" 
            size={12} 
            style={{ 
              width: "100%",
              marginBottom: 16
            }}
          >
            <Input
              placeholder="Search students"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
              size="middle"
            />
            
            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
              <Button 
                icon={<FilterOutlined />} 
                onClick={() => setIsFilterDrawerVisible(true)}
                size="middle"
              >
                Filters
              </Button>
              <Button 
                type="primary" 
                icon={<UserAddOutlined />} 
                onClick={showAddModal}
                size="middle"
              >
                Add
              </Button>
            </Space>
          </Space>

          {renderMobileView()}
          
          {/* Pagination info for mobile */}
          {filteredStudents.length > 0 && (
            <div style={{ 
              marginTop: '16px', 
              textAlign: 'center', 
              color: '#8c8c8c',
              fontSize: '13px'
            }}>
              Showing {filteredStudents.length} of {students.length} students
            </div>
          )}
        </>
      ) : (
        <>
          <Space style={{ 
            marginBottom: 16, 
            width: "100%", 
            justifyContent: "space-between", 
            flexWrap: "wrap",
            gap: 16
          }}>
            <Space wrap size={16}>
              <Input
                placeholder="Search students"
                prefix={<SearchOutlined />}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 250 }}
                allowClear
                size="large"
              />
              <Select
                placeholder="Filter by status"
                style={{ width: 150 }}
                onChange={handleFilterStatusChange}
                value={filterStatus || undefined}
                allowClear
                size="large"
              >
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
              <Select
                placeholder="Filter by grade"
                style={{ width: 150 }}
                onChange={handleFilterGradeChange}
                value={filterGrade || undefined}
                allowClear
                size="large"
              >
                <Option value="9th Grade">9th Grade</Option>
                <Option value="10th Grade">10th Grade</Option>
                <Option value="11th Grade">11th Grade</Option>
                <Option value="12th Grade">12th Grade</Option>
              </Select>
            </Space>
            <Space size={16}>
              <Button icon={<UploadOutlined />}>Import</Button>
              <Button icon={<DownloadOutlined />}>Export</Button>
              <Button type="primary" icon={<UserAddOutlined />} onClick={showAddModal}>
                Add Student
              </Button>
            </Space>
          </Space>

          <Table
            dataSource={filteredStudents}
            columns={window.innerWidth < 768 ? tabletColumns : desktopColumns}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} students`,
            }}
            scroll={{ x: window.innerWidth < 768 ? 600 : "max-content" }}
            size={window.innerWidth < 768 ? "small" : "middle"}
          />
        </>
      )}

      {/* Filter Drawer for Mobile */}
      <Drawer
        title="Filters"
        placement="right"
        onClose={() => setIsFilterDrawerVisible(false)}
        open={isFilterDrawerVisible}
        width={isMobile ? '85%' : 400}
      >
        <Space direction="vertical" style={{ width: "100%" }} size={16}>
          <Select
            placeholder="Filter by status"
            style={{ width: "100%" }}
            onChange={handleFilterStatusChange}
            value={filterStatus || undefined}
            allowClear
            size="large"
          >
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
          <Select
            placeholder="Filter by grade"
            style={{ width: "100%" }}
            onChange={handleFilterGradeChange}
            value={filterGrade || undefined}
            allowClear
            size="large"
          >
            <Option value="9th Grade">9th Grade</Option>
            <Option value="10th Grade">10th Grade</Option>
            <Option value="11th Grade">11th Grade</Option>
            <Option value="12th Grade">12th Grade</Option>
          </Select>
          <Button 
            type="primary" 
            onClick={() => setIsFilterDrawerVisible(false)}
            style={{ width: '100%' }}
          >
            Apply Filters
          </Button>
        </Space>
      </Drawer>

      {/* Add Student Modal */}
      <Modal
        title="Add New Student"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={null}
        width={isMobile ? "95%" : 600}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
          <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter student name" }]}>
            <Input placeholder="Enter student name" size={isMobile ? "middle" : "large"} />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter student email" size={isMobile ? "middle" : "large"} />
          </Form.Item>

          <Row gutter={isMobile ? 8 : 16}>
            <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
              <Form.Item name="grade" label="Grade" rules={[{ required: true, message: "Please select grade" }]}>
                <Select placeholder="Select grade" size={isMobile ? "middle" : "large"}>
                  <Option value="9th Grade">9th Grade</Option>
                  <Option value="10th Grade">10th Grade</Option>
                  <Option value="11th Grade">11th Grade</Option>
                  <Option value="12th Grade">12th Grade</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={isMobile ? 24 : 12}>
              <Form.Item name="status" label="Status" initialValue="Active">
                <Select placeholder="Select status" size={isMobile ? "middle" : "large"}>
                  <Option value="Active">Active</Option>
                  <Option value="Inactive">Inactive</Option>
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
                onClick={() => setIsAddModalVisible(false)}
                size={isMobile ? "middle" : "large"}
                block={isMobile}
              >
                Cancel
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                size={isMobile ? "middle" : "large"}
                block={isMobile}
              >
                Add Student
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* View Student Modal */}
      {selectedStudent && (
        <Modal
          title="Student Details"
          open={isViewModalVisible}
          onCancel={() => setIsViewModalVisible(false)}
          width={isMobile ? "95%" : 700}
          footer={[
            <Button 
              key="close" 
              onClick={() => setIsViewModalVisible(false)}
              size={isMobile ? "middle" : "large"}
              block={isMobile}
            >
              Close
            </Button>,
            <Button
              key="edit"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => {
                setIsViewModalVisible(false)
                messageApi.info("Edit functionality coming soon")
              }}
              size={isMobile ? "middle" : "large"}
              block={isMobile}
            >
              Edit
            </Button>,
          ]}
          centered
        >
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row", 
            gap: isMobile ? 16 : 20,
            padding: isMobile ? 0 : '0 16px'
          }}>
            <div style={{ 
              textAlign: "center",
              marginBottom: isMobile ? 16 : 0
            }}>
              <Avatar 
                src={selectedStudent.avatar} 
                size={isMobile ? 80 : 100} 
                style={{ marginBottom: 16 }} 
              />
              <div>
                <Tag 
                  color={selectedStudent.status === "Active" ? "success" : "default"}
                  style={{ 
                    fontSize: isMobile ? 12 : 14,
                    padding: isMobile ? '4px 12px' : '6px 16px'
                  }}
                >
                  {selectedStudent.status}
                </Tag>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <Title level={isMobile ? 4 : 3} style={{ 
                fontSize: isMobile ? 20 : 24,
                marginBottom: isMobile ? 8 : 16
              }}>
                {selectedStudent.name}
              </Title>
              <Text type="secondary" style={{ fontSize: isMobile ? 14 : 16 }}>
                {selectedStudent.email}
              </Text>

              <Divider style={{ margin: isMobile ? "12px 0" : "16px 0" }} />

              <Row gutter={[isMobile ? 8 : 16, isMobile ? 8 : 16]}>
                <Col span={12}>
                  <Text type="secondary" style={{ fontSize: isMobile ? 12 : 14 }}>Grade:</Text>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 16 }}>{selectedStudent.grade}</strong>
                  </div>
                </Col>
                <Col span={12}>
                  <Text type="secondary" style={{ fontSize: isMobile ? 12 : 14 }}>Enrollment Date:</Text>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 16 }}>
                      {new Date(selectedStudent.enrollmentDate).toLocaleDateString()}
                    </strong>
                  </div>
                </Col>
                <Col span={12}>
                  <Text type="secondary" style={{ fontSize: isMobile ? 12 : 14 }}>Courses Enrolled:</Text>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 16 }}>{selectedStudent.coursesEnrolled}</strong>
                  </div>
                </Col>
                <Col span={12}>
                  <Text type="secondary" style={{ fontSize: isMobile ? 12 : 14 }}>Last Active:</Text>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 16 }}>
                      {new Date(selectedStudent.lastActive).toLocaleString()}
                    </strong>
                  </div>
                </Col>
              </Row>

              <Divider style={{ margin: isMobile ? "12px 0" : "16px 0" }} />

              <div>
                <Text type="secondary" style={{ fontSize: isMobile ? 14 : 16 }}>Progress:</Text>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: isMobile ? 8 : 12 }}>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        height: isMobile ? 8 : 10,
                        backgroundColor: "#f0f0f0",
                        borderRadius: isMobile ? 4 : 5,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${selectedStudent.progress}%`,
                          backgroundColor:
                            selectedStudent.progress < 50
                              ? "#FF5252"
                              : selectedStudent.progress < 75
                                ? "#FFB347"
                                : "#00A878",
                          borderRadius: isMobile ? 4 : 5,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 16 }}>{selectedStudent.progress}%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs
            style={{ marginTop: isMobile ? 16 : 24 }}
            items={[
              {
                key: "courses",
                label: (
                  <span>
                    <BookOutlined /> Courses
                  </span>
                ),
                children: (
                  <List
                    dataSource={[
                      { id: 1, name: "Introduction to Biology", progress: 85 },
                      { id: 2, name: "Advanced Mathematics", progress: 72 },
                      { id: 3, name: "World History", progress: 65 },
                    ]}
                    renderItem={(item) => (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          avatar={
                            <Avatar 
                              icon={<BookOutlined />} 
                              style={{ 
                                backgroundColor: "#00A878",
                                width: isMobile ? 36 : 40,
                                height: isMobile ? 36 : 40,
                                fontSize: isMobile ? 14 : 16
                              }} 
                            />
                          }
                          title={
                            <Text style={{ 
                              fontSize: isMobile ? 14 : 16,
                              fontWeight: 500
                            }}>
                              {item.name}
                            </Text>
                          }
                          description={
                            <div style={{ width: "100%", marginTop: isMobile ? 4 : 6 }}>
                              <div style={{ 
                                display: "flex", 
                                justifyContent: "space-between",
                                fontSize: isMobile ? 12 : 13,
                                marginBottom: isMobile ? 2 : 4
                              }}>
                                <span>Progress: {item.progress}%</span>
                              </div>
                              <div
                                style={{
                                  height: isMobile ? 5 : 6,
                                  backgroundColor: "#f0f0f0",
                                  borderRadius: isMobile ? 2 : 3,
                                  overflow: "hidden",
                                  marginTop: isMobile ? 2 : 4,
                                }}
                              >
                                <div
                                  style={{
                                    height: "100%",
                                    width: `${item.progress}%`,
                                    backgroundColor:
                                      item.progress < 50 ? "#FF5252" : item.progress < 75 ? "#FFB347" : "#00A878",
                                    borderRadius: isMobile ? 2 : 3,
                                  }}
                                />
                              </div>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                ),
              },
              {
                key: "videos",
                label: (
                  <span>
                    <VideoCameraOutlined /> Videos
                  </span>
                ),
                children: (
                  <List
                    dataSource={[
                      { id: 1, name: "Cell Structure and Function", watched: true, date: "2023-06-20" },
                      { id: 2, name: "Quadratic Equations", watched: true, date: "2023-06-18" },
                      { id: 3, name: "World War II Overview", watched: false, date: null },
                    ]}
                    renderItem={(item) => (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          avatar={
                            <Avatar 
                              icon={<VideoCameraOutlined />} 
                              style={{ 
                                backgroundColor: "#FF7A00",
                                width: isMobile ? 36 : 40,
                                height: isMobile ? 36 : 40,
                                fontSize: isMobile ? 14 : 16
                              }} 
                            />
                          }
                          title={
                            <Text style={{ 
                              fontSize: isMobile ? 14 : 16,
                              fontWeight: 500
                            }}>
                              {item.name}
                            </Text>
                          }
                          description={
                            <div style={{ marginTop: isMobile ? 4 : 6 }}>
                              {item.watched ? (
                                <Badge 
                                  status="success" 
                                  text={`Watched on ${item.date}`} 
                                  style={{ fontSize: isMobile ? 12 : 13 }}
                                />
                              ) : (
                                <Badge 
                                  status="default" 
                                  text="Not watched yet" 
                                  style={{ fontSize: isMobile ? 12 : 13 }}
                                />
                              )}
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                ),
              },
              {
                key: "assignments",
                label: (
                  <span>
                    <FileTextOutlined /> Assignments
                  </span>
                ),
                children: (
                  <List
                    dataSource={[
                      { id: 1, name: "Biology Lab Report", status: "Completed", grade: "A", date: "2023-06-15" },
                      { id: 2, name: "Math Problem Set", status: "Completed", grade: "B+", date: "2023-06-10" },
                      { id: 3, name: "History Essay", status: "Pending", grade: null, date: "2023-06-30" },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        key={item.id}
                        actions={[
                          item.status === "Completed" ? (
                            <Tag 
                              color="success" 
                              key={item.id}
                              style={{ 
                                fontSize: isMobile ? 11 : 12,
                                padding: isMobile ? '2px 8px' : '4px 10px'
                              }}
                            >
                              Grade: {item.grade}
                            </Tag>
                          ) : (
                            <Tag 
                              color="warning"
                              style={{ 
                                fontSize: isMobile ? 11 : 12,
                                padding: isMobile ? '2px 8px' : '4px 10px'
                              }}
                            >
                              Due: {item.date}
                            </Tag>
                          ),
                        ]}
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar 
                              icon={<FileTextOutlined />} 
                              style={{ 
                                backgroundColor: "#0096C7",
                                width: isMobile ? 36 : 40,
                                height: isMobile ? 36 : 40,
                                fontSize: isMobile ? 14 : 16
                              }} 
                            />
                          }
                          title={
                            <Text style={{ 
                              fontSize: isMobile ? 14 : 16,
                              fontWeight: 500
                            }}>
                              {item.name}
                            </Text>
                          }
                          description={
                            <Badge 
                              status={item.status === "Completed" ? "success" : "processing"} 
                              text={item.status}
                              style={{ fontSize: isMobile ? 12 : 13 }}
                            />
                          }
                        />
                      </List.Item>
                    )}
                  />
                ),
              },
            ]}
            size={isMobile ? "small" : "default"}
          />
        </Modal>
      )}
    </>
  )
}

export default StudentManagement