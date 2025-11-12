// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   List,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // //   Statistic,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   TrophyOutlined,
// // //   BookOutlined,
// // //   ClockCircleOutlined,
// // //   EnvironmentOutlined,
// // //   GlobalOutlined,
// // //   CheckCircleOutlined,
// // // } from "@ant-design/icons"
// // // import { useAuth } from "../../Contexts/AuthContext" 

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   // const { user, updateProfile } = useAuth()
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //  const {user } = useAuth()
// // //    const getInitial = () => {
// // //     if (!user?.userName) return '?'
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //     const stringToColor = (str) => {
// // //   let hash = 0
// // //   for (let i = 0; i < str.length; i++) {
// // //     hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //   }
// // //   const hue = Math.abs(hash) % 360
// // //   return `hsl(${hue}, 60%, 70%)`
// // // }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         // In a real app, this would be an API call
// // //         await new Promise((resolve) => setTimeout(resolve, 1000))

// // //         // Mock profile data
// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.name || "Student Name",
// // //             email: user?.email || "student@gmail.com",
// // //             phone: "+91 1234567890",
// // //             location: "Tamil Nadu, India",
// // //             bio: "Passionate learner with interests in web development, data science, and artificial intelligence. Always looking to expand my knowledge and skills.",
// // //             website: "https://StudentName.portfolio.com",
// // //             socialLinks: {
// // //               linkedin: "https://linkedin.com/in/studentName",
// // //               github: "https://github.com/studentName",
// // //               twitter: "https://twitter.com/studentName",
// // //             },
// // //           },
// // //           learningStats: {
// // //             enrolledCourses: 5,
// // //             completedCourses: 2,
// // //             certificatesEarned: 2,
// // //             totalHoursLearned: 28,
// // //             quizzesTaken: 12,
// // //             quizAvgScore: 85,
// // //             streak: 5,
// // //           },
// // //           achievements: [
// // //             {
// // //               id: 1,
// // //               title: "Fast Learner",
// // //               description: "Completed 5 lessons in a single day",
// // //               date: "2023-10-15",
// // //               icon: "🚀",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "Quiz Master",
// // //               description: "Scored 100% on 3 consecutive quizzes",
// // //               date: "2023-09-28",
// // //               icon: "🏆",
// // //             },
// // //             {
// // //               id: 3,
// // //               title: "Consistent Learner",
// // //               description: "Maintained a 5-day learning streak",
// // //               date: "2023-10-20",
// // //               icon: "🔥",
// // //             },
// // //           ],
// // //           certificates: [
// // //             {
// // //               id: 1,
// // //               title: "Advanced Web Development with React",
// // //               issueDate: "2023-10-15",
// // //               instructor: "Dr. Jane Smith",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "UI/UX Design Principles",
// // //               issueDate: "2023-09-28",
// // //               instructor: "Alex Chen",
// // //             },
// // //           ],
// // //         }

// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //         //   name: user.personalInfo.name,
// // //         //   email: user.personalInfo.email,
// // //           phone: mockData.personalInfo.phone,
// // //           location: mockData.personalInfo.location,
// // //           bio: mockData.personalInfo.bio,
// // //           website: mockData.personalInfo.website,
// // //           linkedin: mockData.personalInfo.socialLinks.linkedin,
// // //           github: mockData.personalInfo.socialLinks.github,
// // //           twitter: mockData.personalInfo.socialLinks.twitter,
// // //         })

// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   const handleUpdateProfile = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In a real app, this would be an API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))

// // //       // Update profile data
// // //       const updatedProfileData = {
// // //         ...profileData,
// // //         personalInfo: {
// // //           ...profileData.personalInfo,
// // //           name: values.name,
// // //           email: values.email,
// // //           phone: values.phone,
// // //           location: values.location,
// // //           bio: values.bio,
// // //           website: values.website,
// // //           socialLinks: {
// // //             linkedin: values.linkedin,
// // //             github: values.github,
// // //             twitter: values.twitter,
// // //           },
// // //         },
// // //       }

// // //       setProfileData(updatedProfileData)

// // //       // Update user context
// // //       await updateProfile({
// // //         name: values.name,
// // //         email: values.email,
// // //       })

// // //       message.success("Profile updated successfully!")
// // //       setEditMode(false)
// // //     } catch (error) {
// // //       console.error("Error updating profile:", error)
// // //       message.error("Failed to update profile")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In a real app, this would be an API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))
// // //       message.success("Password changed successfully!")
// // //       form.resetFields(["currentPassword", "newPassword", "confirmPassword"])
// // //     } catch (error) {
// // //       console.error("Error changing password:", error)
// // //       message.error("Failed to change password")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar src={user?.avatar} icon={!user?.avatar && <span>{getInitial()}</span>} size={100} style={{backgroundColor: stringToColor(user?.userName || "Student")}} />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>

// // //               <div style={{ margin: "16px 0" }}>
// // //                 <Upload
// // //                   name="avatar"
// // //                   showUploadList={false}
// // //                   beforeUpload={() => {
// // //                     message.info("Avatar upload will be implemented soon.")
// // //                     return false
// // //                   }}
// // //                 >
// // //                   <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                 </Upload>
// // //               </div>

// // //               <Divider />

// // //               <div style={{ textAlign: "left" }}>
// // //                 {/* <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Learning Stats</Text>
// // //                 </div>

// // //                 <Row gutter={[16, 16]}>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Enrolled Courses"
// // //                       value={profileData?.learningStats.enrolledCourses}
// // //                       prefix={<BookOutlined />}
// // //                     />
// // //                   </Col>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Completed"
// // //                       value={profileData?.learningStats.completedCourses}
// // //                       prefix={<CheckCircleOutlined />}
// // //                     />
// // //                   </Col>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Certificates"
// // //                       value={profileData?.learningStats.certificatesEarned}
// // //                       prefix={<TrophyOutlined />}
// // //                     />
// // //                   </Col>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Hours Learned"
// // //                       value={profileData?.learningStats.totalHoursLearned}
// // //                       prefix={<ClockCircleOutlined />}
// // //                       suffix="hrs"
// // //                     />
// // //                   </Col>
// // //                 </Row>

// // //                 <Divider /> */}

// // //                 <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Contact Information</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.location}</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <GlobalOutlined style={{ marginRight: 8 }} />
// // //                   <a href={profileData?.personalInfo.website} target="_blank" rel="noopener noreferrer">
// // //                     {profileData?.personalInfo.website}
// // //                   </a>
// // //                 </div>

// // //                 {/* <Divider />

// // //                 <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Social Profiles</Text>
// // //                 </div>

// // //                 <Space direction="vertical">
// // //                   <Button
// // //                     type="link"
// // //                     icon={<i className="fab fa-linkedin" />}
// // //                     href={profileData?.personalInfo.socialLinks.linkedin}
// // //                     target="_blank"
// // //                   >
// // //                     LinkedIn
// // //                   </Button>

// // //                   <Button
// // //                     type="link"
// // //                     icon={<i className="fab fa-github" />}
// // //                     href={profileData?.personalInfo.socialLinks.github}
// // //                     target="_blank"
// // //                   >
// // //                     GitHub
// // //                   </Button>

// // //                   <Button
// // //                     type="link"
// // //                     icon={<i className="fab fa-twitter" />}
// // //                     href={profileData?.personalInfo.socialLinks.twitter}
// // //                     target="_blank"
// // //                   >
// // //                     Twitter
// // //                   </Button>
// // //                 </Space> */}
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab} className="custom-tabs">
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           name="name"
// // //                           label="Full Name"
// // //                           rules={[{ required: true, message: "Please enter your name" }]}
// // //                         >
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           name="email"
// // //                           label="Email"
// // //                           rules={[
// // //                             { required: true, message: "Please enter your email" },
// // //                             { type: "email", message: "Please enter a valid email" },
// // //                           ]}
// // //                         >
// // //                           <Input prefix={<MailOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="phone" label="Phone Number">
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="location" label="Location">
// // //                           <Input prefix={<EnvironmentOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Form.Item name="bio" label="Bio">
// // //                       <Input.TextArea rows={4} />
// // //                     </Form.Item>

// // //                     <Form.Item name="website" label="Website">
// // //                       <Input prefix={<GlobalOutlined />} />
// // //                     </Form.Item>

// // //                     {/* <Divider>Social Links</Divider>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={8}>
// // //                         <Form.Item name="linkedin" label="LinkedIn">
// // //                           <Input prefix={<i className="fab fa-linkedin" />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={8}>
// // //                         <Form.Item name="github" label="GitHub">
// // //                           <Input prefix={<i className="fab fa-github" />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={8}>
// // //                         <Form.Item name="twitter" label="Twitter">
// // //                           <Input prefix={<i className="fab fa-twitter" />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row> */}

// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //     backgroundColor: '#006666', // normal dark teal
// // //     color: 'white',
// // //     borderColor: '#006666',
// // //   }}>
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false) } className="custom-hover-teal-btn">Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div
// // //                       style={{
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                         marginBottom: 16,
// // //                       }}
// // //                     >
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button type="primary" icon={<EditOutlined />} onClick={() => setEditMode(true)} style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>

// // //                     <Paragraph>{profileData?.personalInfo.bio}</Paragraph>

// // //                     <Divider />

// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div>
// // //                             <Text strong>{user?.userName}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email</Text>
// // //                           <div>
// // //                             <Text strong>{user?.mailId}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div>
// // //                             <Text strong>{profileData?.personalInfo.phone}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Location</Text>
// // //                           <div>
// // //                             <Text strong>{profileData?.personalInfo.location}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title level={4} style={{color:"white", background:""}}>Change Password</Title>
// // //                 <Form layout="vertical" onFinish={handleChangePassword}>
// // //                   <Form.Item
// // //                     name="currentPassword"
// // //                     label="Current Password"
// // //                     rules={[{ required: true, message: "Please enter your current password" }]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     name="newPassword"
// // //                     label="New Password"
// // //                     rules={[
// // //                       { required: true, message: "Please enter your new password" },
// // //                       { min: 8, message: "Password must be at least 8 characters" },
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     name="confirmPassword"
// // //                     label="Confirm New Password"
// // //                     rules={[
// // //                       { required: true, message: "Please confirm your new password" },
// // //                       ({ getFieldValue }) => ({
// // //                         validator(_, value) {
// // //                           if (!value || getFieldValue("newPassword") === value) {
// // //                             return Promise.resolve()
// // //                           }
// // //                           return Promise.reject(new Error("The two passwords do not match"))
// // //                         },
// // //                       }),
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item>
// // //                     <Button type="primary" htmlType="submit" loading={loading}  style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>

// // //                 <Divider />

// // //                 <Title level={4}>Two-Factor Authentication</Title>
// // //                 <Paragraph>
// // //                   Add an extra layer of security to your account by enabling two-factor authentication.
// // //                 </Paragraph>
// // //                 <Button type="primary" style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>Enable 2FA</Button>
// // //               </TabPane>

// // //               {/* <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <TrophyOutlined />
// // //                     Achievements
// // //                   </span>
// // //                 }
// // //                 key="3"
// // //               >
// // //                 <Title level={4}>Your Achievements</Title>
// // //                 <Paragraph>Track your learning milestones and achievements.</Paragraph>

// // //                 <List
// // //                   itemLayout="horizontal"
// // //                   dataSource={profileData?.achievements}
// // //                   renderItem={(item) => (
// // //                     <List.Item>
// // //                       <List.Item.Meta
// // //                         avatar={<Avatar style={{ backgroundColor: "#1890ff", fontSize: 24 }}>{item.icon}</Avatar>}
// // //                         title={item.title}
// // //                         description={
// // //                           <div>
// // //                             <Text>{item.description}</Text>
// // //                             <div>
// // //                               <Text type="secondary">Achieved on {new Date(item.date).toLocaleDateString()}</Text>
// // //                             </div>
// // //                           </div>
// // //                         }
// // //                       />
// // //                     </List.Item>
// // //                   )}
// // //                 />

// // //                 <Divider />

// // //                 <Title level={4}>Certificates</Title>
// // //                 <List
// // //                   grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
// // //                   dataSource={profileData?.certificates}
// // //                   renderItem={(item) => (
// // //                     <List.Item>
// // //                       <Card hoverable>
// // //                         <div style={{ display: "flex", alignItems: "center" }}>
// // //                           <TrophyOutlined style={{ fontSize: 24, color: "#faad14", marginRight: 16 }} />
// // //                           <div>
// // //                             <Text strong>{item.title}</Text>
// // //                             <div>
// // //                               <Text type="secondary">Issued on {new Date(item.issueDate).toLocaleDateString()}</Text>
// // //                             </div>
// // //                             <div>
// // //                               <Text type="secondary">Instructor: {item.instructor}</Text>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </Card>
// // //                     </List.Item>
// // //                   )}
// // //                 />
// // //               </TabPane> */}
// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   List,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // //   Statistic,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   TrophyOutlined,
// // //   BookOutlined,
// // //   ClockCircleOutlined,
// // //   EnvironmentOutlined,
// // //   GlobalOutlined,
// // //   CheckCircleOutlined,
// // // } from "@ant-design/icons"
// // // import { useAuth } from "../../Contexts/AuthContext" 

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   // const { user, updateProfile } = useAuth()
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //  const {user } = useAuth()
// // //    const getInitial = () => {
// // //     if (!user?.userName) return '?'
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //     const stringToColor = (str) => {
// // //   let hash = 0
// // //   for (let i = 0; i < str.length; i++) {
// // //     hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //   }
// // //   const hue = Math.abs(hash) % 360
// // //   return `hsl(${hue}, 60%, 70%)`
// // // }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         // In a real app, this would be an API call
// // //         await new Promise((resolve) => setTimeout(resolve, 1000))

// // //         // Mock profile data
// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.name || "Student Name",
// // //             email: user?.email || "student@gmail.com",
// // //             phone: "+91 1234567890",
// // //             location: "Tamil Nadu, India",
// // //             bio: "Passionate learner with interests in web development, data science, and artificial intelligence. Always looking to expand my knowledge and skills.",
// // //             website: "https://StudentName.portfolio.com",
// // //             socialLinks: {
// // //               linkedin: "https://linkedin.com/in/studentName",
// // //               github: "https://github.com/studentName",
// // //               twitter: "https://twitter.com/studentName",
// // //             },
// // //           },
// // //           learningStats: {
// // //             enrolledCourses: 5,
// // //             completedCourses: 2,
// // //             certificatesEarned: 2,
// // //             totalHoursLearned: 28,
// // //             quizzesTaken: 12,
// // //             quizAvgScore: 85,
// // //             streak: 5,
// // //           },
// // //           achievements: [
// // //             {
// // //               id: 1,
// // //               title: "Fast Learner",
// // //               description: "Completed 5 lessons in a single day",
// // //               date: "2023-10-15",
// // //               icon: "🚀",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "Quiz Master",
// // //               description: "Scored 100% on 3 consecutive quizzes",
// // //               date: "2023-09-28",
// // //               icon: "🏆",
// // //             },
// // //             {
// // //               id: 3,
// // //               title: "Consistent Learner",
// // //               description: "Maintained a 5-day learning streak",
// // //               date: "2023-10-20",
// // //               icon: "🔥",
// // //             },
// // //           ],
// // //           certificates: [
// // //             {
// // //               id: 1,
// // //               title: "Advanced Web Development with React",
// // //               issueDate: "2023-10-15",
// // //               instructor: "Dr. Jane Smith",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "UI/UX Design Principles",
// // //               issueDate: "2023-09-28",
// // //               instructor: "Alex Chen",
// // //             },
// // //           ],
// // //         }

// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //         //   name: user.personalInfo.name,
// // //         //   email: user.personalInfo.email,
// // //           phone: mockData.personalInfo.phone,
// // //           location: mockData.personalInfo.location,
// // //           bio: mockData.personalInfo.bio,
// // //           website: mockData.personalInfo.website,
// // //           linkedin: mockData.personalInfo.socialLinks.linkedin,
// // //           github: mockData.personalInfo.socialLinks.github,
// // //           twitter: mockData.personalInfo.socialLinks.twitter,
// // //         })

// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   const handleUpdateProfile = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In a real app, this would be an API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))

// // //       // Update profile data
// // //       const updatedProfileData = {
// // //         ...profileData,
// // //         personalInfo: {
// // //           ...profileData.personalInfo,
// // //           name: values.name,
// // //           email: values.email,
// // //           phone: values.phone,
// // //           location: values.location,
// // //           bio: values.bio,
// // //           website: values.website,
// // //           socialLinks: {
// // //             linkedin: values.linkedin,
// // //             github: values.github,
// // //             twitter: values.twitter,
// // //           },
// // //         },
// // //       }

// // //       setProfileData(updatedProfileData)

// // //       // Update user context
// // //       await updateProfile({
// // //         name: values.name,
// // //         email: values.email,
// // //       })

// // //       message.success("Profile updated successfully!")
// // //       setEditMode(false)
// // //     } catch (error) {
// // //       console.error("Error updating profile:", error)
// // //       message.error("Failed to update profile")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In a real app, this would be an API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))
// // //       message.success("Password changed successfully!")
// // //       form.resetFields(["currentPassword", "newPassword", "confirmPassword"])
// // //     } catch (error) {
// // //       console.error("Error changing password:", error)
// // //       message.error("Failed to change password")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar src={user?.avatar} icon={!user?.avatar && <span>{getInitial()}</span>} size={100} style={{backgroundColor: stringToColor(user?.userName || "Student")}} />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>

// // //               <div style={{ margin: "16px 0" }}>
// // //                 <Upload
// // //                   name="avatar"
// // //                   showUploadList={false}
// // //                   beforeUpload={() => {
// // //                     message.info("Avatar upload will be implemented soon.")
// // //                     return false
// // //                   }}
// // //                 >
// // //                   <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                 </Upload>
// // //               </div>

// // //               <Divider />

// // //               <div style={{ textAlign: "left" }}>
               

// // //                 <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Contact Information</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.location}</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <GlobalOutlined style={{ marginRight: 8 }} />
// // //                   <a href={profileData?.personalInfo.website} target="_blank" rel="noopener noreferrer">
// // //                     {profileData?.personalInfo.website}
// // //                   </a>
// // //                 </div>

// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab} className="custom-tabs">
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           name="name"
// // //                           label="Full Name"
// // //                           rules={[{ required: true, message: "Please enter your name" }]}
// // //                         >
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           name="email"
// // //                           label="Email"
// // //                           rules={[
// // //                             { required: true, message: "Please enter your email" },
// // //                             { type: "email", message: "Please enter a valid email" },
// // //                           ]}
// // //                         >
// // //                           <Input prefix={<MailOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="phone" label="Phone Number">
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="location" label="Location">
// // //                           <Input prefix={<EnvironmentOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Form.Item name="bio" label="Bio">
// // //                       <Input.TextArea rows={4} />
// // //                     </Form.Item>

// // //                     <Form.Item name="website" label="Website">
// // //                       <Input prefix={<GlobalOutlined />} />
// // //                     </Form.Item>


// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //     backgroundColor: '#006666', // normal dark teal
// // //     color: 'white',
// // //     borderColor: '#006666',
// // //   }}>
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false) } className="custom-hover-teal-btn">Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div
// // //                       style={{
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                         marginBottom: 16,
// // //                       }}
// // //                     >
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button type="primary" icon={<EditOutlined />} onClick={() => setEditMode(true)} style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>

// // //                     <Paragraph>{profileData?.personalInfo.bio}</Paragraph>

// // //                     <Divider />

// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div>
// // //                             <Text strong>{user?.userName}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email</Text>
// // //                           <div>
// // //                             <Text strong>{user?.mailId}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div>
// // //                             <Text strong>{profileData?.personalInfo.phone}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Location</Text>
// // //                           <div>
// // //                             <Text strong>{profileData?.personalInfo.location}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile

// // // "use client"
// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   List,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   EnvironmentOutlined,
// // // } from "@ant-design/icons"
// // // import { useAuth } from "../../Contexts/AuthContext"

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // // API Endpoints
// // // const FORGET_PASSWORD_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/forgetPassword" 
// // // const VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp" 
// // // const RESEND_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend-otp" 

// // // const Profile = ({ windowWidth }) => {
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [otpSent, setOtpSent] = useState(false)
// // //   const [otpVerified, setOtpVerified] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //   const { user, updateProfile } = useAuth()

// // //   // Utility functions
// // //   const getInitial = () => {
// // //     if (!user?.userName) return '?'
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //   const stringToColor = (str) => {
// // //     let hash = 0
// // //     for (let i = 0; i < str.length; i++) {
// // //       hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //     }
// // //     const hue = Math.abs(hash) % 360
// // //     return `hsl(${hue}, 60%, 70%)`
// // //   }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         await new Promise((resolve) => setTimeout(resolve, 1000))
// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.name || "Student Name",
// // //             email: user?.email || "student@gmail.com",
// // //             phone: "+91 1234567890",
// // //             location: "Tamil Nadu, India",
// // //             bio: "Passionate learner...",
// // //             website: "https://StudentName.portfolio.com", 
// // //           },
// // //         }
// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //           phone: mockData.personalInfo.phone,
// // //           location: mockData.personalInfo.location,
// // //           bio: mockData.personalInfo.bio,
// // //           website: mockData.personalInfo.website,
// // //         })
// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }
// // //     fetchProfileData()
// // //   }, [user, form])

// // //   // Handle send OTP
// // //   const handleSendOTP = async (values) => {
// // //     debugger;
// // //     setLoading(true)
// // //     try {
// // //       const res = await fetch(FORGET_PASSWORD_URL, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ mailId: values.email }),
// // //       })

// // //       const result = await res.json()
// // //       if (result.success) {
// // //         message.success(result.message || "OTP sent successfully.")
// // //         setOtpSent(true)
// // //       } else {
// // //         message.error(result.message || "Failed to send OTP.")
// // //       }
// // //     } catch (err) {
// // //       message.error("Network error. Please try again later.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // Handle resend OTP
// // //   const handleResendOTP = async () => {
// // //     const email = form.getFieldValue("email")
// // //     if (!email) {
// // //       message.warning("Please enter your email first.")
// // //       return
// // //     }

// // //     setLoading(true)
// // //     try {
// // //       const res = await fetch(RESEND_OTP_URL, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email }),
// // //       })

// // //       const result = await res.json()
// // //       if (result.success) {
// // //         message.success(result.message || "OTP resent successfully.")
// // //       } else {
// // //         message.error(result.message || "Failed to resend OTP.")
// // //       }
// // //     } catch (err) {
// // //       message.error("Network error. Please try again later.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // Handle verify OTP
// // //   const handleVerifyOTP = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       const res = await fetch(VERIFY_OTP_URL, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email: values.email, otp: values.otp }),
// // //       })

// // //       const result = await res.json()
// // //       if (result.success) {
// // //         message.success(result.message || "OTP verified successfully.")
// // //         setOtpVerified(true)
// // //       } else {
// // //         message.error(result.message || "Invalid OTP.")
// // //       }
// // //     } catch (err) {
// // //       message.error("Network error. Please try again later.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // Handle change password
// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In real app, call actual reset password API here
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))
// // //       message.success("Password changed successfully!")
// // //       form.resetFields(["email", "otp", "newPassword", "confirmPassword"])
// // //       setOtpSent(false)
// // //       setOtpVerified(false)
// // //       setActiveTab("1") // Switch back to profile tab
// // //     } catch (err) {
// // //       message.error("Failed to change password.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         <Col xs={24} lg={8}>
// // //           {/* Left Profile Card */}
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar src={user?.avatar} icon={!user?.avatar && <span>{getInitial()}</span>} size={100} style={{ backgroundColor: stringToColor(user?.userName || "Student") }} />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>{user?.userName}</Title>
// // //               <Text type="secondary">{user?.mailId}</Text>
// // //               <div style={{ margin: "16px 0" }}>
// // //                 <Upload
// // //                   name="avatar"
// // //                   showUploadList={false}
// // //                   beforeUpload={() => {
// // //                     message.info("Avatar upload will be implemented soon.")
// // //                     return false
// // //                   }}
// // //                 >
// // //                   <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                 </Upload>
// // //               </div>
// // //               <Divider />
// // //               <div style={{ textAlign: "left" }}>
// // //                 <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Contact Information</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.location}</Text>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>
// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab}>
// // //               {/* PROFILE TAB */}
// // //               <TabPane
// // //                 tab={
// // //                   <span><UserOutlined /> Profile</span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
// // //                           <Input prefix={<MailOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="phone" label="Phone Number">
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="location" label="Location">
// // //                           <Input prefix={<EnvironmentOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24}>
// // //                         <Form.Item name="bio" label="Bio">
// // //                           <Input.TextArea rows={4} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>
// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //                           backgroundColor: '#006666',
// // //                           color: 'white',
// // //                           borderColor: '#006666'
// // //                         }}>
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button type="primary" icon={<EditOutlined />} onClick={() => setEditMode(true)} style={{
// // //                         backgroundColor: '#006666',
// // //                         color: 'white',
// // //                         borderColor: '#003d3d'
// // //                       }}>
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>
// // //                     <Paragraph>{profileData?.personalInfo.bio}</Paragraph>
// // //                     <Divider />
// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}><div><Text type="secondary">Full Name</Text><div><Text strong>{user?.userName}</Text></div></div></Col>
// // //                       <Col xs={24} md={12}><div><Text type="secondary">Email</Text><div><Text strong>{user?.mailId}</Text></div></div></Col>
// // //                       <Col xs={24} md={12}><div><Text type="secondary">Phone</Text><div><Text strong>{profileData?.personalInfo.phone}</Text></div></div></Col>
// // //                       <Col xs={24} md={12}><div><Text type="secondary">Location</Text><div><Text strong>{profileData?.personalInfo.location}</Text></div></div></Col>
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               {/* PASSWORD RESET TAB */}
// // // {/*               <TabPane
// // //                 tab={
// // //                   <span><LockOutlined /> Change Password</span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Form form={form} layout="vertical" onFinish={otpSent ? (otpVerified ? handleChangePassword : handleVerifyOTP) : handleSendOTP}>
// // //                   {!otpSent ? (
// // //                     <>
// // //                       <Form.Item name="email" label="Enter your email" rules={[{ required: true, type: 'email' }]}>
// // //                         <Input prefix={<MailOutlined />} placeholder="example@example.com" />
// // //                       </Form.Item>
// // //                       <Form.Item>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //                           backgroundColor: '#006666',
// // //                           color: 'white',
// // //                           borderColor: '#006666'
// // //                         }}>
// // //                           Send OTP
// // //                         </Button>
// // //                       </Form.Item>
// // //                     </>
// // //                   ) : !otpVerified ? (
// // //                     <>
// // //                       <Form.Item name="otp" label="Enter OTP" rules={[{ required: true }]}>
// // //                         <Input placeholder="123456" />
// // //                       </Form.Item>
// // //                       <Form.Item>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //                           backgroundColor: '#006666',
// // //                           color: 'white',
// // //                           borderColor: '#006666'
// // //                         }}>
// // //                           Verify OTP
// // //                         </Button>
// // //                       </Form.Item>
// // //                       <Button type="link" onClick={handleResendOTP} loading={loading}>
// // //                         Resend OTP
// // //                       </Button>
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       <Form.Item name="newPassword" label="New Password" rules={[{ required: true, min: 6 }]}>
// // //                         <Input.Password prefix={<LockOutlined />} placeholder="••••••" />
// // //                       </Form.Item>
// // //                       <Form.Item name="confirmPassword" label="Confirm Password" dependencies={['newPassword']} rules={[
// // //                         { required: true },
// // //                         ({ getFieldValue }) => ({
// // //                           validator(_, value) {
// // //                             if (!value || getFieldValue('newPassword') === value) {
// // //                               return Promise.resolve()
// // //                             }
// // //                             return Promise.reject(new Error('Passwords do not match!'))
// // //                           },
// // //                         }),
// // //                       ]}>
// // //                         <Input.Password prefix={<LockOutlined />} placeholder="••••••" />
// // //                       </Form.Item>
// // //                       <Form.Item>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //                           backgroundColor: '#006666',
// // //                           color: 'white',
// // //                           borderColor: '#006666'
// // //                         }}>
// // //                           Change Password
// // //                         </Button>
// // //                       </Form.Item>
// // //                     </>
// // //                   )}
// // //                 </Form>
// // //               </TabPane> */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title level={4} style={{color:"white", background:""}}>Change Password</Title>
// // //                 <Form layout="vertical" onFinish={handleChangePassword}>
// // //                   <Form.Item
// // //                     name="currentPassword"
// // //                     label="Current Password"
// // //                     rules={[{ required: true, message: "Please enter your current password" }]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     name="newPassword"
// // //                     label="New Password"
// // //                     rules={[
// // //                       { required: true, message: "Please enter your new password" },
// // //                       { min: 8, message: "Password must be at least 8 characters" },
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     name="confirmPassword"
// // //                     label="Confirm New Password"
// // //                     rules={[
// // //                       { required: true, message: "Please confirm your new password" },
// // //                       ({ getFieldValue }) => ({
// // //                         validator(_, value) {
// // //                           if (!value || getFieldValue("newPassword") === value) {
// // //                             return Promise.resolve()
// // //                           }
// // //                           return Promise.reject(new Error("The two passwords do not match"))
// // //                         },
// // //                       }),
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item>
// // //                     <Button type="primary" htmlType="submit" loading={loading}  style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>

// // //                 <Divider />

// // //                 <Title level={4}>Two-Factor Authentication</Title>
// // //                 <Paragraph>
// // //                   Add an extra layer of security to your account by enabling two-factor authentication.
// // //                 </Paragraph>
// // //                 <Button type="primary" style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>Enable 2FA</Button>
// // //               </TabPane>

// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile


// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   List,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // //   Statistic,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   TrophyOutlined,
// // //   BookOutlined,
// // //   ClockCircleOutlined,
// // //   EnvironmentOutlined,
// // //   GlobalOutlined,
// // //   CheckCircleOutlined,
// // // } from "@ant-design/icons"
// // // import { useAuth } from "../../Contexts/AuthContext" 

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   // const { user, updateProfile } = useAuth()
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //  const {user } = useAuth()
// // //    const getInitial = () => {
// // //     if (!user?.userName) return '?'
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //     const stringToColor = (str) => {
// // //   let hash = 0
// // //   for (let i = 0; i < str.length; i++) {
// // //     hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //   }
// // //   const hue = Math.abs(hash) % 360
// // //   return `hsl(${hue}, 60%, 70%)`
// // // }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         // In a real app, this would be an API call
// // //         await new Promise((resolve) => setTimeout(resolve, 1000))

// // //         // Mock profile data
// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.name || "Student Name",
// // //             email: user?.email || "student@gmail.com",
// // //             phone: "+91 1234567890",
// // //             location: "Tamil Nadu, India",
// // //             bio: "Passionate learner with interests in web development, data science, and artificial intelligence. Always looking to expand my knowledge and skills.",
// // //             website: "https://StudentName.portfolio.com",
// // //             socialLinks: {
// // //               linkedin: "https://linkedin.com/in/studentName",
// // //               github: "https://github.com/studentName",
// // //               twitter: "https://twitter.com/studentName",
// // //             },
// // //           },
// // //           learningStats: {
// // //             enrolledCourses: 5,
// // //             completedCourses: 2,
// // //             certificatesEarned: 2,
// // //             totalHoursLearned: 28,
// // //             quizzesTaken: 12,
// // //             quizAvgScore: 85,
// // //             streak: 5,
// // //           },
// // //           achievements: [
// // //             {
// // //               id: 1,
// // //               title: "Fast Learner",
// // //               description: "Completed 5 lessons in a single day",
// // //               date: "2023-10-15",
// // //               icon: "🚀",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "Quiz Master",
// // //               description: "Scored 100% on 3 consecutive quizzes",
// // //               date: "2023-09-28",
// // //               icon: "🏆",
// // //             },
// // //             {
// // //               id: 3,
// // //               title: "Consistent Learner",
// // //               description: "Maintained a 5-day learning streak",
// // //               date: "2023-10-20",
// // //               icon: "🔥",
// // //             },
// // //           ],
// // //           certificates: [
// // //             {
// // //               id: 1,
// // //               title: "Advanced Web Development with React",
// // //               issueDate: "2023-10-15",
// // //               instructor: "Dr. Jane Smith",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "UI/UX Design Principles",
// // //               issueDate: "2023-09-28",
// // //               instructor: "Alex Chen",
// // //             },
// // //           ],
// // //         }

// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //         //   name: user.personalInfo.name,
// // //         //   email: user.personalInfo.email,
// // //           phone: mockData.personalInfo.phone,
// // //           location: mockData.personalInfo.location,
// // //           bio: mockData.personalInfo.bio,
// // //           website: mockData.personalInfo.website,
// // //           linkedin: mockData.personalInfo.socialLinks.linkedin,
// // //           github: mockData.personalInfo.socialLinks.github,
// // //           twitter: mockData.personalInfo.socialLinks.twitter,
// // //         })

// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   const handleUpdateProfile = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In a real app, this would be an API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))

// // //       // Update profile data
// // //       const updatedProfileData = {
// // //         ...profileData,
// // //         personalInfo: {
// // //           ...profileData.personalInfo,
// // //           name: values.name,
// // //           email: values.email,
// // //           phone: values.phone,
// // //           location: values.location,
// // //           bio: values.bio,
// // //           website: values.website,
// // //           socialLinks: {
// // //             linkedin: values.linkedin,
// // //             github: values.github,
// // //             twitter: values.twitter,
// // //           },
// // //         },
// // //       }

// // //       setProfileData(updatedProfileData)

// // //       // Update user context
// // //       await updateProfile({
// // //         name: values.name,
// // //         email: values.email,
// // //       })

// // //       message.success("Profile updated successfully!")
// // //       setEditMode(false)
// // //     } catch (error) {
// // //       console.error("Error updating profile:", error)
// // //       message.error("Failed to update profile")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       // In a real app, this would be an API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))
// // //       message.success("Password changed successfully!")
// // //       form.resetFields(["currentPassword", "newPassword", "confirmPassword"])
// // //     } catch (error) {
// // //       console.error("Error changing password:", error)
// // //       message.error("Failed to change password")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar src={user?.avatar} icon={!user?.avatar && <span>{getInitial()}</span>} size={100} style={{backgroundColor: stringToColor(user?.userName || "Student")}} />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>

// // //               <div style={{ margin: "16px 0" }}>
// // //                 <Upload
// // //                   name="avatar"
// // //                   showUploadList={false}
// // //                   beforeUpload={() => {
// // //                     message.info("Avatar upload will be implemented soon.")
// // //                     return false
// // //                   }}
// // //                 >
// // //                   <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                 </Upload>
// // //               </div>

// // //               <Divider />

// // //               <div style={{ textAlign: "left" }}>
// // //                 {/* <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Learning Stats</Text>
// // //                 </div>

// // //                 <Row gutter={[16, 16]}>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Enrolled Courses"
// // //                       value={profileData?.learningStats.enrolledCourses}
// // //                       prefix={<BookOutlined />}
// // //                     />
// // //                   </Col>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Completed"
// // //                       value={profileData?.learningStats.completedCourses}
// // //                       prefix={<CheckCircleOutlined />}
// // //                     />
// // //                   </Col>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Certificates"
// // //                       value={profileData?.learningStats.certificatesEarned}
// // //                       prefix={<TrophyOutlined />}
// // //                     />
// // //                   </Col>
// // //                   <Col span={12}>
// // //                     <Statistic
// // //                       title="Hours Learned"
// // //                       value={profileData?.learningStats.totalHoursLearned}
// // //                       prefix={<ClockCircleOutlined />}
// // //                       suffix="hrs"
// // //                     />
// // //                   </Col>
// // //                 </Row>

// // //                 <Divider /> */}

// // //                 <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Contact Information</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.location}</Text>
// // //                 </div>

// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <GlobalOutlined style={{ marginRight: 8 }} />
// // //                   <a href={profileData?.personalInfo.website} target="_blank" rel="noopener noreferrer">
// // //                     {profileData?.personalInfo.website}
// // //                   </a>
// // //                 </div>

// // //                 {/* <Divider />

// // //                 <div style={{ marginBottom: 16 }}>
// // //                   <Text strong>Social Profiles</Text>
// // //                 </div>

// // //                 <Space direction="vertical">
// // //                   <Button
// // //                     type="link"
// // //                     icon={<i className="fab fa-linkedin" />}
// // //                     href={profileData?.personalInfo.socialLinks.linkedin}
// // //                     target="_blank"
// // //                   >
// // //                     LinkedIn
// // //                   </Button>

// // //                   <Button
// // //                     type="link"
// // //                     icon={<i className="fab fa-github" />}
// // //                     href={profileData?.personalInfo.socialLinks.github}
// // //                     target="_blank"
// // //                   >
// // //                     GitHub
// // //                   </Button>

// // //                   <Button
// // //                     type="link"
// // //                     icon={<i className="fab fa-twitter" />}
// // //                     href={profileData?.personalInfo.socialLinks.twitter}
// // //                     target="_blank"
// // //                   >
// // //                     Twitter
// // //                   </Button>
// // //                 </Space> */}
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab} className="custom-tabs">
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           name="name"
// // //                           label="Full Name"
// // //                           rules={[{ required: true, message: "Please enter your name" }]}
// // //                         >
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           name="email"
// // //                           label="Email"
// // //                           rules={[
// // //                             { required: true, message: "Please enter your email" },
// // //                             { type: "email", message: "Please enter a valid email" },
// // //                           ]}
// // //                         >
// // //                           <Input prefix={<MailOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="phone" label="Phone Number">
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item name="location" label="Location">
// // //                           <Input prefix={<EnvironmentOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Form.Item name="bio" label="Bio">
// // //                       <Input.TextArea rows={4} />
// // //                     </Form.Item>

// // //                     <Form.Item name="website" label="Website">
// // //                       <Input prefix={<GlobalOutlined />} />
// // //                     </Form.Item>

// // //                     {/* <Divider>Social Links</Divider>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={8}>
// // //                         <Form.Item name="linkedin" label="LinkedIn">
// // //                           <Input prefix={<i className="fab fa-linkedin" />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={8}>
// // //                         <Form.Item name="github" label="GitHub">
// // //                           <Input prefix={<i className="fab fa-github" />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={8}>
// // //                         <Form.Item name="twitter" label="Twitter">
// // //                           <Input prefix={<i className="fab fa-twitter" />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row> */}

// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //     backgroundColor: '#006666', // normal dark teal
// // //     color: 'white',
// // //     borderColor: '#006666',
// // //   }}>
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false) } className="custom-hover-teal-btn">Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div
// // //                       style={{
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                         marginBottom: 16,
// // //                       }}
// // //                     >
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button type="primary" icon={<EditOutlined />} onClick={() => setEditMode(true)} style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>

// // //                     <Paragraph>{profileData?.personalInfo.bio}</Paragraph>

// // //                     <Divider />

// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div>
// // //                             <Text strong>{user?.userName}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email</Text>
// // //                           <div>
// // //                             <Text strong>{user?.mailId}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div>
// // //                             <Text strong>{profileData?.personalInfo.phone}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Location</Text>
// // //                           <div>
// // //                             <Text strong>{profileData?.personalInfo.location}</Text>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title level={4} style={{color:"white", background:""}}>Change Password</Title>
// // //                 <Form layout="vertical" onFinish={handleChangePassword}>
// // //                   <Form.Item
// // //                     name="currentPassword"
// // //                     label="Current Password"
// // //                     rules={[{ required: true, message: "Please enter your current password" }]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     name="newPassword"
// // //                     label="New Password"
// // //                     rules={[
// // //                       { required: true, message: "Please enter your new password" },
// // //                       { min: 8, message: "Password must be at least 8 characters" },
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     name="confirmPassword"
// // //                     label="Confirm New Password"
// // //                     rules={[
// // //                       { required: true, message: "Please confirm your new password" },
// // //                       ({ getFieldValue }) => ({
// // //                         validator(_, value) {
// // //                           if (!value || getFieldValue("newPassword") === value) {
// // //                             return Promise.resolve()
// // //                           }
// // //                           return Promise.reject(new Error("The two passwords do not match"))
// // //                         },
// // //                       }),
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item>
// // //                     <Button type="primary" htmlType="submit" loading={loading}  style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>

// // //                 <Divider />

// // //                 <Title level={4}>Two-Factor Authentication</Title>
// // //                 <Paragraph>
// // //                   Add an extra layer of security to your account by enabling two-factor authentication.
// // //                 </Paragraph>
// // //                 <Button type="primary" style={{
// // //     backgroundColor: '#006666', // very dark teal
// // //     color: 'white',
// // //     borderColor: '#003d3d',
// // //   }}>Enable 2FA</Button>
// // //               </TabPane>

// // //               {/* <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <TrophyOutlined />
// // //                     Achievements
// // //                   </span>
// // //                 }
// // //                 key="3"
// // //               >
// // //                 <Title level={4}>Your Achievements</Title>
// // //                 <Paragraph>Track your learning milestones and achievements.</Paragraph>

// // //                 <List
// // //                   itemLayout="horizontal"
// // //                   dataSource={profileData?.achievements}
// // //                   renderItem={(item) => (
// // //                     <List.Item>
// // //                       <List.Item.Meta
// // //                         avatar={<Avatar style={{ backgroundColor: "#1890ff", fontSize: 24 }}>{item.icon}</Avatar>}
// // //                         title={item.title}
// // //                         description={
// // //                           <div>
// // //                             <Text>{item.description}</Text>
// // //                             <div>
// // //                               <Text type="secondary">Achieved on {new Date(item.date).toLocaleDateString()}</Text>
// // //                             </div>
// // //                           </div>
// // //                         }
// // //                       />
// // //                     </List.Item>
// // //                   )}
// // //                 />

// // //                 <Divider />

// // //                 <Title level={4}>Certificates</Title>
// // //                 <List
// // //                   grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
// // //                   dataSource={profileData?.certificates}
// // //                   renderItem={(item) => (
// // //                     <List.Item>
// // //                       <Card hoverable>
// // //                         <div style={{ display: "flex", alignItems: "center" }}>
// // //                           <TrophyOutlined style={{ fontSize: 24, color: "#faad14", marginRight: 16 }} />
// // //                           <div>
// // //                             <Text strong>{item.title}</Text>
// // //                             <div>
// // //                               <Text type="secondary">Issued on {new Date(item.issueDate).toLocaleDateString()}</Text>
// // //                             </div>
// // //                             <div>
// // //                               <Text type="secondary">Instructor: {item.instructor}</Text>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </Card>
// // //                     </List.Item>
// // //                   )}
// // //                 />
// // //               </TabPane> */}
// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile


// // // "use client"
// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   List,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   TrophyOutlined,
// // //   BookOutlined,
// // //   ClockCircleOutlined,
// // //   EnvironmentOutlined,
// // //   GlobalOutlined,
// // //   CheckCircleOutlined,
// // // } from "@ant-design/icons"
// // // import { useAuth } from "../../Contexts/AuthContext"

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const isMobile = windowWidth < 768

// // //   const { user } = useAuth()

// // //   const getInitial = () => {
// // //     if (!user?.userName) return '?'
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //   const stringToColor = (str) => {
// // //     let hash = 0
// // //     for (let i = 0; i < str.length; i++) {
// // //       hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //     }
// // //     const hue = Math.abs(hash) % 360
// // //     return `hsl(${hue}, 60%, 70%)`
// // //   }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         await new Promise((resolve) => setTimeout(resolve, 1000))
// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.name || "Student Name",
// // //             email: user?.email || "student@gmail.com",
// // //             phone: "+91 1234567890",
// // //             address: "123 Main St, Cityville, Tamil Nadu, India",
// // //             gender: "female",
// // //             dob: "2000-01-01",
// // //             bio: "Passionate learner interested in web development, AI, and data science.",
// // //             website: "https://student.portfolio.com ",
// // //           },
// // //           learningStats: {
// // //             enrolledCourses: 5,
// // //             completedCourses: 2,
// // //             certificatesEarned: 2,
// // //             totalHoursLearned: 28,
// // //             quizzesTaken: 12,
// // //             quizAvgScore: 85,
// // //             streak: 5,
// // //           },
// // //           achievements: [
// // //             {
// // //               id: 1,
// // //               title: "Fast Learner",
// // //               description: "Completed 5 lessons in a single day",
// // //               date: "2023-10-15",
// // //               icon: "🚀",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "Quiz Master",
// // //               description: "Scored 100% on 3 consecutive quizzes",
// // //               date: "2023-09-28",
// // //               icon: "🏆",
// // //             },
// // //             {
// // //               id: 3,
// // //               title: "Consistent Learner",
// // //               description: "Maintained a 5-day learning streak",
// // //               date: "2023-10-20",
// // //               icon: "🔥",
// // //             },
// // //           ],
// // //         }

// // //         setProfileData(mockData)

// // //         form.setFieldsValue({
// // //           name: mockData.personalInfo.name,
// // //           email: mockData.personalInfo.email,
// // //           phone: mockData.personalInfo.phone,
// // //           address: mockData.personalInfo.address,
// // //           gender: mockData.personalInfo.gender,
// // //           dob: mockData.personalInfo.dob,
// // //           bio: mockData.personalInfo.bio,
// // //           website: mockData.personalInfo.website,
// // //         })

// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   const handleUpdateProfile = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))

// // //       const updatedProfileData = {
// // //         ...profileData,
// // //         personalInfo: {
// // //           ...profileData.personalInfo,
// // //           name: values.name,
// // //           email: values.email,
// // //           phone: values.phone,
// // //           address: values.address,
// // //           gender: values.gender,
// // //           dob: values.dob,
// // //           bio: values.bio,
// // //           website: values.website,
// // //         },
// // //       }

// // //       setProfileData(updatedProfileData)

// // //       message.success("Profile updated successfully!")
// // //       setEditMode(false)
// // //     } catch (error) {
// // //       console.error("Error updating profile:", error)
// // //       message.error("Failed to update profile")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       await new Promise((resolve) => setTimeout(resolve, 1000))
// // //       message.success("Password changed successfully!")
// // //       form.resetFields(["currentPassword", "newPassword", "confirmPassword"])
// // //     } catch (error) {
// // //       console.error("Error changing password:", error)
// // //       message.error("Failed to change password")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar src={user?.avatar} icon={!user?.avatar && <span>{getInitial()}</span>} size={100} style={{ backgroundColor: stringToColor(user?.userName || "Student") }} />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>
// // //               <div style={{ margin: "16px 0" }}>
// // //                 <Upload
// // //                   name="avatar"
// // //                   showUploadList={false}
// // //                   beforeUpload={() => {
// // //                     message.info("Avatar upload will be implemented soon.")
// // //                     return false
// // //                   }}
// // //                 >
// // //                   <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                 </Upload>
// // //               </div>
// // //               <Divider />
// // //               <div style={{ textAlign: "left" }}>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.address}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <GlobalOutlined style={{ marginRight: 8 }} />
// // //                   <a href={profileData?.personalInfo.website} target="_blank" rel="noopener noreferrer">
// // //                     {profileData?.personalInfo.website}
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab} className="custom-tabs">
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
// // //                           <Input prefix={<MailOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Phone Number" name="phone">
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
// // //                           <select className="ant-input" style={{ height: "38px" }}>
// // //                             <option value="">Select Gender</option>
// // //                             <option value="male">Male</option>
// // //                             <option value="female">Female</option>
// // //                             <option value="other">Other</option>
// // //                             <option value="prefer_not_to_say">Prefer not to say</option>
// // //                           </select>
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
// // //                           <Input type="date" />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Address" name="address" rules={[{ required: true }]}>
// // //                           <Input.TextArea rows={2} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>
// // //                     <Form.Item label="Bio" name="bio">
// // //                       <Input.TextArea rows={4} />
// // //                     </Form.Item>
// // //                     <Form.Item label="Website" name="website">
// // //                       <Input prefix={<GlobalOutlined />} />
// // //                     </Form.Item>
// // //                     <Form.Item label="Upload Resume" name="resume">
// // //                       <Upload beforeUpload={() => false} maxCount={1}>
// // //                         <Button icon={<UploadOutlined />}>Click to Upload</Button>
// // //                       </Upload>
// // //                     </Form.Item>
// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button type="primary" htmlType="submit" loading={loading} style={{
// // //                           backgroundColor: '#006666',
// // //                           color: 'white',
// // //                           borderColor: '#006666',
// // //                         }}>
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div style={{
// // //                       display: "flex",
// // //                       justifyContent: "space-between",
// // //                       alignItems: "center",
// // //                       marginBottom: 16,
// // //                     }}>
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button type="primary" icon={<EditOutlined />} onClick={() => setEditMode(true)} style={{
// // //                         backgroundColor: '#006666',
// // //                         color: 'white',
// // //                         borderColor: '#003d3d',
// // //                       }}>
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>
// // //                     <Paragraph>{profileData?.personalInfo.bio}</Paragraph>
// // //                     <Divider />
// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.name}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.email}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.phone}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Gender</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.gender}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Date of Birth</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.dob}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Address</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.address}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title level={4} style={{ color: "white", background: "#006666", padding: "8px 12px", borderRadius: 4 }}>Change Password</Title>
// // //                 <Form layout="vertical" onFinish={handleChangePassword}>
// // //                   <Form.Item label="Current Password" name="currentPassword" rules={[{ required: true }]}>
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>
// // //                   <Form.Item label="New Password" name="newPassword" rules={[
// // //                     { required: true },
// // //                     { min: 8, message: "Password must be at least 8 characters" }
// // //                   ]}>
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>
// // //                   <Form.Item label="Confirm New Password" name="confirmPassword" rules={[{ required: true }]}>
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>
// // //                   <Form.Item>
// // //                     <Button type="primary" htmlType="submit" loading={loading} style={{
// // //                       backgroundColor: '#006666',
// // //                       color: 'white',
// // //                       borderColor: '#003d3d',
// // //                     }}>
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>
// // //               </TabPane>
// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   EnvironmentOutlined,
// // //   GlobalOutlined,
// // // } from "@ant-design/icons"
// // // import axios from "axios"
// // // import { useAuth } from "../../Contexts/AuthContext"

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const [passwordForm] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //   const { user } = useAuth()

// // //   const getInitial = () => {
// // //     if (!user?.userName) return "?"
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //   const stringToColor = (str) => {
// // //     let hash = 0
// // //     for (let i = 0; i < str.length; i++) {
// // //       hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //     }
// // //     const hue = Math.abs(hash) % 360
// // //     return `hsl(${hue}, 60%, 70%)`
// // //   }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         await new Promise((resolve) => setTimeout(resolve, 800))

// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.userName || "Student Name",
// // //             email: user?.mailId || "student@gmail.com",
// // //             alternateEmail: "alternate@example.com",
// // //             phone: "+91 9876543210",
// // //             address: "123 Main St, Cityville, Tamil Nadu, India",
// // //             gender: "female",
// // //             dob: "2000-01-01",
// // //             bio: "Passionate learner interested in web development and AI.",
// // //             website: "https://student.portfolio.com",
// // //             avatarUrl: user?.avatar || "",
// // //             resumeUrl: "",
// // //           },
// // //           learningStats: {
// // //             enrolledCourses: 5,
// // //             completedCourses: 2,
// // //             certificatesEarned: 2,
// // //             totalHoursLearned: 28,
// // //             quizzesTaken: 12,
// // //             quizAvgScore: 85,
// // //             streak: 5,
// // //           },
// // //           achievements: [
// // //             {
// // //               id: 1,
// // //               title: "Fast Learner",
// // //               description: "Completed 5 lessons in a single day",
// // //               date: "2023-10-15",
// // //               icon: "🚀",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "Quiz Master",
// // //               description: "Scored 100% on 3 consecutive quizzes",
// // //               date: "2023-09-28",
// // //               icon: "🏆",
// // //             },
// // //             {
// // //               id: 3,
// // //               title: "Consistent Learner",
// // //               description: "Maintained a 5-day learning streak",
// // //               date: "2023-10-20",
// // //               icon: "🔥",
// // //             },
// // //           ],
// // //         }

// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //           name: mockData.personalInfo.name,
// // //           email: mockData.personalInfo.email,
// // //           alternateEmail: mockData.personalInfo.alternateEmail,
// // //           phone: mockData.personalInfo.phone,
// // //           address: mockData.personalInfo.address,
// // //           gender: mockData.personalInfo.gender,
// // //           dob: mockData.personalInfo.dob,
// // //           bio: mockData.personalInfo.bio,
// // //           website: mockData.personalInfo.website,
// // //         })
// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   // ✅ Profile Update API
// // //   const handleUpdateProfile = async (values) => {
// // //     setLoading(true)
// // //     const formData = new FormData()

// // //     try {
// // //       formData.append("fullName", values.name)
// // //       formData.append("mobileNumber", values.phone)
// // //       formData.append("gender", values.gender)
// // //       formData.append("dateOfBirth", values.dob)
// // //       formData.append("address", values.address)
// // //       formData.append("bio", values.bio || "")
// // //       formData.append("website", values.website || "")
// // //       formData.append("alternateEmailId", values.alternateEmail)

// // //       if (values.avatar?.fileList && values.avatar.fileList.length > 0) {
// // //         formData.append("profilePhoto", values.avatar.fileList[0].originFileObj)
// // //       }
// // //       if (values.resume?.fileList && values.resume.fileList.length > 0) {
// // //         formData.append("resume", values.resume.fileList[0].originFileObj)
// // //       }

// // //       // 🔑 Send mailId for backend to identify user
// // //       formData.append("mailId", user?.mailId)

// // //       await axios.put(
// // //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
// // //         formData,
// // //         {
// // //           headers: {
// // //             "Content-Type": "multipart/form-data",
// // //             Authorization: `Bearer ${user?.token || ""}`,
// // //           },
// // //         }
// // //       )

// // //       const updatedProfileData = {
// // //         ...profileData,
// // //         personalInfo: {
// // //           ...profileData.personalInfo,
// // //           name: values.name,
// // //           phone: values.phone,
// // //           gender: values.gender,
// // //           dob: values.dob,
// // //           address: values.address,
// // //           bio: values.bio,
// // //           website: values.website,
// // //           alternateEmail: values.alternateEmail,
// // //           avatarUrl:
// // //             values.avatar?.fileList?.[0]?.thumbUrl ||
// // //             values.avatar?.fileList?.[0]?.url ||
// // //             profileData.personalInfo.avatarUrl,
// // //           resumeUrl:
// // //             values.resume?.fileList?.[0]?.thumbUrl ||
// // //             values.resume?.fileList?.[0]?.url ||
// // //             profileData.personalInfo.resumeUrl,
// // //         },
// // //       }

// // //       setProfileData(updatedProfileData)
// // //       message.success("Profile updated successfully!")
// // //       setEditMode(false)
// // //     } catch (error) {
// // //       console.error("Error updating profile:", error)
// // //       message.error(
// // //         error.response?.data?.message ||
// // //         "Failed to update profile. Please try again."
// // //       )
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // ✅ Password Change API
// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       const payload = {
// // //         mailId: user?.mailId, // Send user's email for identification
// // //         password: values.currentPassword,
// // //         newPassword: values.newPassword,
// // //         confirmNewPassword: values.confirmNewPassword,
// // //       }

// // //       await axios.post(
// // //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
// // //         payload,
// // //         {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${user?.token || ""}`,
// // //           },
// // //         }
// // //       )

// // //       message.success("Password changed successfully!")
// // //       passwordForm.resetFields()
// // //     } catch (error) {
// // //       console.error("Password change error:", error)
// // //       message.error(
// // //         error.response?.data?.message ||
// // //         "Failed to change password. Please check your current password and try again."
// // //       )
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         {/* Left Column: Avatar & Info */}
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar
// // //                 src={profileData?.personalInfo.avatarUrl}
// // //                 icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
// // //                 size={100}
// // //                 style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
// // //               />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>

// // //               {editMode && (
// // //                 <div style={{ margin: "16px 0" }}>
// // //                   <Form.Item name="avatar" noStyle valuePropName="fileList" getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}>
// // //                     <Upload
// // //                       name="avatar"
// // //                       listType="picture-circle"
// // //                       maxCount={1}
// // //                       beforeUpload={(file) => {
// // //                         const isImage = file.type.startsWith("image/")
// // //                         if (!isImage) {
// // //                           message.error("Please upload an image file.")
// // //                           return Upload.LIST_IGNORE
// // //                         }
// // //                         return true
// // //                       }}
// // //                     >
// // //                       <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                     </Upload>
// // //                   </Form.Item>
// // //                 </div>
// // //               )}

// // //               <Divider />
// // //               <div style={{ textAlign: "left" }}>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.address}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <GlobalOutlined style={{ marginRight: 8 }} />
// // //                   <a
// // //                     href={profileData?.personalInfo.website}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     {profileData?.personalInfo.website}
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         {/* Right Column: Tabs */}
// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab}>
// // //               {/* Profile Tab */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Email ID (Login)" name="email">
// // //                           <Input prefix={<MailOutlined />} disabled />
// // //                           <Text type="secondary" style={{ fontSize: 12 }}>
// // //                             Cannot be edited here. Contact support.
// // //                           </Text>
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           label="Alternate Email ID"
// // //                           name="alternateEmail"
// // //                           rules={[{ type: "email", message: "Enter a valid email" }]}
// // //                         >
// // //                           <Input />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
// // //                           <select className="ant-input" style={{ height: "38px" }}>
// // //                             <option value="">Select Gender</option>
// // //                             <option value="male">Male</option>
// // //                             <option value="female">Female</option>
// // //                             <option value="other">Other</option>
// // //                             <option value="prefer_not_to_say">Prefer not to say</option>
// // //                           </select>
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
// // //                           <Input type="date" />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Form.Item label="Address" name="address" rules={[{ required: true }]}>
// // //                       <Input.TextArea rows={2} />
// // //                     </Form.Item>

// // //                     <Form.Item label="Bio" name="bio">
// // //                       <Input.TextArea rows={4} />
// // //                     </Form.Item>

// // //                     <Form.Item label="Website" name="website">
// // //                       <Input prefix={<GlobalOutlined />} />
// // //                     </Form.Item>

// // //                     <Form.Item label="Resume / CV Upload" name="resume" valuePropName="fileList" getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}>
// // //                       <Upload beforeUpload={() => false} maxCount={1} accept=".pdf,.doc,.docx">
// // //                         <Button icon={<UploadOutlined />}>Upload Resume (PDF/DOC)</Button>
// // //                       </Upload>
// // //                     </Form.Item>

// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button
// // //                           type="primary"
// // //                           htmlType="submit"
// // //                           loading={loading}
// // //                           style={{
// // //                             backgroundColor: "#006666",
// // //                             borderColor: "#003d3d",
// // //                           }}
// // //                         >
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div style={{
// // //                       display: "flex",
// // //                       justifyContent: "space-between",
// // //                       alignItems: "center",
// // //                       marginBottom: 16,
// // //                     }}>
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button
// // //                         type="primary"
// // //                         icon={<EditOutlined />}
// // //                         onClick={() => setEditMode(true)}
// // //                         style={{
// // //                           backgroundColor: "#006666",
// // //                           borderColor: "#003d3d",
// // //                         }}
// // //                       >
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>

// // //                     <Paragraph>{profileData?.personalInfo.bio}</Paragraph>
// // //                     <Divider />

// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.name}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email ID (Login)</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.email}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Alternate Email</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.alternateEmail}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.phone}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Gender</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.gender}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Date of Birth</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.dob}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Address</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.address}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Website</Text>
// // //                           <div>
// // //                             <a
// // //                               href={profileData?.personalInfo.website}
// // //                               target="_blank"
// // //                               rel="noopener noreferrer"
// // //                             >
// // //                               {profileData?.personalInfo.website}
// // //                             </a>
// // //                           </div>
// // //                         </div>
// // //                       </Col>
// // //                       {profileData?.personalInfo.resumeUrl && (
// // //                         <Col xs={24} md={12}>
// // //                           <div style={{ marginBottom: 16 }}>
// // //                             <Text type="secondary">Resume</Text>
// // //                             <div>
// // //                               <a
// // //                                 href={profileData.personalInfo.resumeUrl}
// // //                                 target="_blank"
// // //                                 rel="noopener noreferrer"
// // //                               >
// // //                                 View Resume
// // //                               </a>
// // //                             </div>
// // //                           </div>
// // //                         </Col>
// // //                       )}
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               {/* Security Tab */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title
// // //                   level={4}
// // //                   style={{
// // //                     color: "white",
// // //                     background: "#006666",
// // //                     padding: "8px 12px",
// // //                     borderRadius: 4,
// // //                   }}
// // //                 >
// // //                   Change Password
// // //                 </Title>
// // //                 <Form
// // //                   form={passwordForm}
// // //                   layout="vertical"
// // //                   onFinish={handleChangePassword}
// // //                 >
// // //                   <Form.Item
// // //                     label="Current Password"
// // //                     name="currentPassword"
// // //                     rules={[{ required: true, message: "Enter your current password" }]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     label="New Password"
// // //                     name="newPassword"
// // //                     rules={[
// // //                       { required: true, message: "Enter a new password" },
// // //                       { min: 8, message: "Password must be at least 8 characters" },
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     label="Confirm New Password"
// // //                     name="confirmNewPassword"
// // //                     dependencies={["newPassword"]}
// // //                     rules={[
// // //                       { required: true, message: "Please confirm your new password" },
// // //                       ({ getFieldValue }) => ({
// // //                         validator(_, value) {
// // //                           if (!value || getFieldValue("newPassword") === value) {
// // //                             return Promise.resolve()
// // //                           }
// // //                           return Promise.reject(new Error("The two passwords do not match!"))
// // //                         },
// // //                       }),
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item>
// // //                     <Button
// // //                       type="primary"
// // //                       htmlType="submit"
// // //                       loading={loading}
// // //                       style={{
// // //                         backgroundColor: "#006666",
// // //                         borderColor: "#003d3d",
// // //                       }}
// // //                     >
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>
// // //               </TabPane>
// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   EnvironmentOutlined,
// // // } from "@ant-design/icons"
// // // import axios from "axios"
// // // import { useAuth } from "../../Contexts/AuthContext"

// // // const { Title, Text, Paragraph } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const [passwordForm] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //   const { user } = useAuth()

// // //   const getInitial = () => {
// // //     if (!user?.userName) return "?"
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //   const stringToColor = (str) => {
// // //     let hash = 0
// // //     for (let i = 0; i < str.length; i++) {
// // //       hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //     }
// // //     const hue = Math.abs(hash) % 360
// // //     return `hsl(${hue}, 60%, 70%)`
// // //   }

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         await new Promise((resolve) => setTimeout(resolve, 800))

// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.userName || "Student Name",
// // //             email: user?.mailId || "student@gmail.com",
// // //             alternateEmail: "alternate@example.com",
// // //             phone: "+91 9876543210",
// // //             address: "123 Main St, Cityville, Tamil Nadu, India",
// // //             gender: "female",
// // //             dob: "2000-01-01",
// // //             avatarUrl: user?.avatar || "",
// // //             resumeUrl: "",
// // //           },
// // //           learningStats: {
// // //             enrolledCourses: 5,
// // //             completedCourses: 2,
// // //             certificatesEarned: 2,
// // //             totalHoursLearned: 28,
// // //             quizzesTaken: 12,
// // //             quizAvgScore: 85,
// // //             streak: 5,
// // //           },
// // //           achievements: [
// // //             {
// // //               id: 1,
// // //               title: "Fast Learner",
// // //               description: "Completed 5 lessons in a single day",
// // //               date: "2023-10-15",
// // //               icon: "🚀",
// // //             },
// // //             {
// // //               id: 2,
// // //               title: "Quiz Master",
// // //               description: "Scored 100% on 3 consecutive quizzes",
// // //               date: "2023-09-28",
// // //               icon: "🏆",
// // //             },
// // //             {
// // //               id: 3,
// // //               title: "Consistent Learner",
// // //               description: "Maintained a 5-day learning streak",
// // //               date: "2023-10-20",
// // //               icon: "🔥",
// // //             },
// // //           ],
// // //         }

// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //           name: mockData.personalInfo.name,
// // //           email: mockData.personalInfo.email,
// // //           alternateEmail: mockData.personalInfo.alternateEmail,
// // //           phone: mockData.personalInfo.phone,
// // //           address: mockData.personalInfo.address,
// // //           gender: mockData.personalInfo.gender,
// // //           dob: mockData.personalInfo.dob,
// // //         })
// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   // ✅ Update Profile API
// // //   const handleUpdateProfile = async (values) => {
// // //     setLoading(true)
// // //     const formData = new FormData()

// // //     try {
// // //       formData.append("fullName", values.name)
// // //       formData.append("mobileNumber", values.phone)
// // //       formData.append("gender", values.gender)
// // //       formData.append("dateOfBirth", values.dob)
// // //       formData.append("address", values.address)
// // //       formData.append("alternateEmailId", values.alternateEmail)

// // //       if (values.avatar?.fileList && values.avatar.fileList.length > 0) {
// // //         formData.append("profilePhoto", values.avatar.fileList[0].originFileObj)
// // //       }
// // //       if (values.resume?.fileList && values.resume.fileList.length > 0) {
// // //         formData.append("resume", values.resume.fileList[0].originFileObj)
// // //       }

// // //       // 🔑 Send mailId for identification
// // //       formData.append("mailId", user?.mailId)

// // //       await axios.put(
// // //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
// // //         formData,
// // //         {
// // //           headers: {
// // //             "Content-Type": "multipart/form-data",
// // //             Authorization: `Bearer ${user?.token || ""}`,
// // //           },
// // //         }
// // //       )

// // //       const updatedProfileData = {
// // //         ...profileData,
// // //         personalInfo: {
// // //           ...profileData.personalInfo,
// // //           name: values.name,
// // //           phone: values.phone,
// // //           gender: values.gender,
// // //           dob: values.dob,
// // //           address: values.address,
// // //           alternateEmail: values.alternateEmail,
// // //           avatarUrl:
// // //             values.avatar?.fileList?.[0]?.thumbUrl ||
// // //             values.avatar?.fileList?.[0]?.url ||
// // //             profileData.personalInfo.avatarUrl,
// // //           resumeUrl:
// // //             values.resume?.fileList?.[0]?.thumbUrl ||
// // //             values.resume?.fileList?.[0]?.url ||
// // //             profileData.personalInfo.resumeUrl,
// // //         },
// // //       }

// // //       setProfileData(updatedProfileData)
// // //       message.success("Profile updated successfully!")
// // //       setEditMode(false)
// // //     } catch (error) {
// // //       console.error("Error updating profile:", error)
// // //       message.error(
// // //         error.response?.data?.message ||
// // //         "Failed to update profile. Please try again."
// // //       )
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // ✅ Change Password API
// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       const payload = {
// // //         mailId: user?.mailId,
// // //         password: values.currentPassword,
// // //         newPassword: values.newPassword,
// // //         confirmNewPassword: values.confirmNewPassword,
// // //       }

// // //       await axios.post(
// // //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
// // //         payload,
// // //         {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${user?.token || ""}`,
// // //           },
// // //         }
// // //       )

// // //       message.success("Password changed successfully!")
// // //       passwordForm.resetFields()
// // //     } catch (error) {
// // //       console.error("Password change error:", error)
// // //       message.error(
// // //         error.response?.data?.message ||
// // //         "Failed to change password. Please check your current password and try again."
// // //       )
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         {/* Left Column: Avatar & Info */}
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar
// // //                 src={profileData?.personalInfo.avatarUrl}
// // //                 icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
// // //                 size={100}
// // //                 style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
// // //               />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>

// // //               {editMode && (
// // //                 <div style={{ margin: "16px 0" }}>
// // //                   <Form.Item name="avatar" noStyle valuePropName="fileList" getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}>
// // //                     <Upload
// // //                       name="avatar"
// // //                       listType="picture-circle"
// // //                       maxCount={1}
// // //                       beforeUpload={(file) => {
// // //                         const isImage = file.type.startsWith("image/")
// // //                         if (!isImage) {
// // //                           message.error("Please upload an image file.")
// // //                           return Upload.LIST_IGNORE
// // //                         }
// // //                         return true
// // //                       }}
// // //                     >
// // //                       <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                     </Upload>
// // //                   </Form.Item>
// // //                 </div>
// // //               )}

// // //               <Divider />
// // //               <div style={{ textAlign: "left" }}>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.address}</Text>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         {/* Right Column: Tabs */}
// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab}>
// // //               {/* Profile Tab */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Email ID (Login)" name="email">
// // //                           <Input prefix={<MailOutlined />} disabled />
// // //                           <Text type="secondary" style={{ fontSize: 12 }}>
// // //                             Cannot be edited here. Contact support.
// // //                           </Text>
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           label="Alternate Email ID"
// // //                           name="alternateEmail"
// // //                           rules={[{ type: "email", message: "Enter a valid email" }]}
// // //                         >
// // //                           <Input />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
// // //                           <select className="ant-input" style={{ height: "38px" }}>
// // //                             <option value="">Select Gender</option>
// // //                             <option value="male">Male</option>
// // //                             <option value="female">Female</option>
// // //                             <option value="other">Other</option>
// // //                             <option value="prefer_not_to_say">Prefer not to say</option>
// // //                           </select>
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
// // //                           <Input type="date" />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Form.Item label="Address" name="address" rules={[{ required: true }]}>
// // //                       <Input.TextArea rows={2} />
// // //                     </Form.Item>

// // //                     <Form.Item label="Resume / CV Upload" name="resume" valuePropName="fileList" getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}>
// // //                       <Upload beforeUpload={() => false} maxCount={1} accept=".pdf,.doc,.docx">
// // //                         <Button icon={<UploadOutlined />}>Upload Resume (PDF/DOC)</Button>
// // //                       </Upload>
// // //                     </Form.Item>

// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button
// // //                           type="primary"
// // //                           htmlType="submit"
// // //                           loading={loading}
// // //                           style={{
// // //                             backgroundColor: "#006666",
// // //                             borderColor: "#003d3d",
// // //                           }}
// // //                         >
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div style={{
// // //                       display: "flex",
// // //                       justifyContent: "space-between",
// // //                       alignItems: "center",
// // //                       marginBottom: 16,
// // //                     }}>
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button
// // //                         type="primary"
// // //                         icon={<EditOutlined />}
// // //                         onClick={() => setEditMode(true)}
// // //                         style={{
// // //                           backgroundColor: "#006666",
// // //                           borderColor: "#003d3d",
// // //                         }}
// // //                       >
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>

// // //                     <Divider />

// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.name}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email ID (Login)</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.email}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Alternate Email</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.alternateEmail}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.phone}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Gender</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.gender}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Date of Birth</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.dob}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Address</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.address}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       {profileData?.personalInfo.resumeUrl && (
// // //                         <Col xs={24} md={12}>
// // //                           <div style={{ marginBottom: 16 }}>
// // //                             <Text type="secondary">Resume</Text>
// // //                             <div>
// // //                               <a
// // //                                 href={profileData.personalInfo.resumeUrl}
// // //                                 target="_blank"
// // //                                 rel="noopener noreferrer"
// // //                               >
// // //                                 View Resume
// // //                               </a>
// // //                             </div>
// // //                           </div>
// // //                         </Col>
// // //                       )}
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               {/* Security Tab */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title
// // //                   level={4}
// // //                   style={{
// // //                     color: "white",
// // //                     background: "#006666",
// // //                     padding: "8px 12px",
// // //                     borderRadius: 4,
// // //                   }}
// // //                 >
// // //                   Change Password
// // //                 </Title>
// // //                 <Form
// // //                   form={passwordForm}
// // //                   layout="vertical"
// // //                   onFinish={handleChangePassword}
// // //                 >
// // //                   <Form.Item
// // //                     label="Current Password"
// // //                     name="currentPassword"
// // //                     rules={[{ required: true, message: "Enter your current password" }]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     label="New Password"
// // //                     name="newPassword"
// // //                     rules={[
// // //                       { required: true, message: "Enter a new password" },
// // //                       { min: 8, message: "Password must be at least 8 characters" },
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     label="Confirm New Password"
// // //                     name="confirmNewPassword"
// // //                     dependencies={["newPassword"]}
// // //                     rules={[
// // //                       { required: true, message: "Please confirm your new password" },
// // //                       ({ getFieldValue }) => ({
// // //                         validator(_, value) {
// // //                           if (!value || getFieldValue("newPassword") === value) {
// // //                             return Promise.resolve()
// // //                           }
// // //                           return Promise.reject(new Error("The two passwords do not match!"))
// // //                         },
// // //                       }),
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item>
// // //                     <Button
// // //                       type="primary"
// // //                       htmlType="submit"
// // //                       loading={loading}
// // //                       style={{
// // //                         backgroundColor: "#006666",
// // //                         borderColor: "#003d3d",
// // //                       }}
// // //                     >
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>
// // //               </TabPane>
// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Card,
// // //   Typography,
// // //   Tabs,
// // //   Form,
// // //   Input,
// // //   Button,
// // //   Upload,
// // //   Avatar,
// // //   Row,
// // //   Col,
// // //   Divider,
// // //   Space,
// // //   message,
// // //   Skeleton,
// // // } from "antd"
// // // import {
// // //   UserOutlined,
// // //   MailOutlined,
// // //   PhoneOutlined,
// // //   EditOutlined,
// // //   UploadOutlined,
// // //   LockOutlined,
// // //   EnvironmentOutlined,
// // // } from "@ant-design/icons"
// // // import axios from "axios"
// // // import { useAuth } from "../../Contexts/AuthContext"

// // // const { Title, Text } = Typography
// // // const { TabPane } = Tabs

// // // const Profile = ({ windowWidth }) => {
// // //   const [loading, setLoading] = useState(true)
// // //   const [profileData, setProfileData] = useState(null)
// // //   const [activeTab, setActiveTab] = useState("1")
// // //   const [editMode, setEditMode] = useState(false)
// // //   const [form] = Form.useForm()
// // //   const [passwordForm] = Form.useForm()
// // //   const isMobile = windowWidth < 768
// // //   const { user } = useAuth()

// // //   // Generate initial for avatar
// // //   const getInitial = () => {
// // //     if (!user?.userName) return "?"
// // //     return user.userName.trim().charAt(0).toUpperCase()
// // //   }

// // //   // Generate color based on user name
// // //   const stringToColor = (str) => {
// // //     let hash = 0
// // //     for (let i = 0; i < str.length; i++) {
// // //       hash = str.charCodeAt(i) + ((hash << 5) - hash)
// // //     }
// // //     const hue = Math.abs(hash) % 360
// // //     return `hsl(${hue}, 60%, 70%)`
// // //   }

// // //   // Fetch mock profile data
// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       setLoading(true)
// // //       try {
// // //         await new Promise((resolve) => setTimeout(resolve, 800)) // Simulate API delay

// // //         const mockData = {
// // //           personalInfo: {
// // //             name: user?.userName || "Student Name",
// // //             email: user?.mailId || "student@gmail.com",
// // //             alternateEmail: "alternate@example.com",
// // //             phone: "+91 9876543210",
// // //             address: "123 Main St, Cityville, Tamil Nadu, India",
// // //             gender: "female",
// // //             dob: "2000-01-01",
// // //             avatarUrl: user?.avatar || "",
// // //             resumeUrl: "",
// // //           },
// // //         }

// // //         setProfileData(mockData)
// // //         form.setFieldsValue({
// // //           name: mockData.personalInfo.name,
// // //           email: mockData.personalInfo.email,
// // //           alternateEmail: mockData.personalInfo.alternateEmail,
// // //           phone: mockData.personalInfo.phone,
// // //           address: mockData.personalInfo.address,
// // //           gender: mockData.personalInfo.gender,
// // //           dob: mockData.personalInfo.dob,
// // //         })
// // //         setLoading(false)
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error)
// // //         message.error("Failed to load profile data")
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProfileData()
// // //   }, [user, form])

// // //   // ✅ Handle Profile Update (with multipart file upload)
// // //   // // const handleUpdateProfile = async (values) => {
// // //   // //   setLoading(true)
// // //   // //   const formData = new FormData()

// // //   // //   try {
// // //   // //     // Append text fields
// // //   // //     formData.append("fullName", values.name)
// // //   // //     formData.append("mobileNumber", values.phone)
// // //   // //     formData.append("gender", values.gender)
// // //   // //     formData.append("dateOfBirth", values.dob)
// // //   // //     formData.append("address", values.address)
// // //   // //     formData.append("alternateEmailId", values.alternateEmail)
// // //   // //     formData.append("mailId", user?.mailId) // 🔑 For backend to identify user

// // //   // //     // Handle file uploads
// // //   // //     if (values.avatar?.fileList && values.avatar.fileList.length > 0) {
// // //   // //       formData.append("profilePhoto", values.avatar.fileList[0].originFileObj)
// // //   // //     }
// // //   // //     if (values.resume?.fileList && values.resume.fileList.length > 0) {
// // //   // //       formData.append("resume", values.resume.fileList[0].originFileObj)
// // //   // //     }

// // //   // //     // 🌐 API Call: Update Profile
// // //   // //     await axios.put(
// // //   // //       "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
// // //   // //       formData,
// // //   // //       {
// // //   // //         headers: {
// // //   // //           "Content-Type": "multipart/form-data",
// // //   // //           Authorization: `Bearer ${user?.token || ""}`,
// // //   // //         },
// // //   // //       }
// // //   // //     )

// // //   // //     // ✅ Update local state after success
// // //   // //     const updatedProfileData = {
// // //   // //       ...profileData,
// // //   // //       personalInfo: {
// // //   // //         ...profileData.personalInfo,
// // //   // //         name: values.name,
// // //   // //         phone: values.phone,
// // //   // //         gender: values.gender,
// // //   // //         dob: values.dob,
// // //   // //         address: values.address,
// // //   // //         alternateEmail: values.alternateEmail,
// // //   // //         avatarUrl:
// // //   // //           values.avatar?.fileList?.[0]?.thumbUrl ||
// // //   // //           values.avatar?.fileList?.[0]?.url ||
// // //   // //           profileData.personalInfo.avatarUrl,
// // //   // //         resumeUrl:
// // //   // //           values.resume?.fileList?.[0]?.thumbUrl ||
// // //   // //           values.resume?.fileList?.[0]?.url ||
// // //   // //           profileData.personalInfo.resumeUrl,
// // //   // //       },
// // //   // //     }

// // //   //     setProfileData(updatedProfileData)
// // //   //     message.success("Profile updated successfully!")
// // //   //     setEditMode(false)
// // //   //   } catch (error) {
// // //   //     console.error("Error updating profile:", error)
// // //   //     message.error(
// // //   //       error.response?.data?.message ||
// // //   //       "Failed to update profile. Please try again."
// // //   //     )
// // //   //   } finally {
// // //   //     setLoading(false)
// // //   //   }
// // //   // }

// // //   const handleUpdateProfile = async (values) => {
// // //   setLoading(true)
// // //   const formData = new FormData()

// // //   try {
// // //     // Append text fields
// // //     formData.append("fullName", values.name)
// // //     formData.append("mobileNumber", values.phone)
// // //     formData.append("gender", values.gender)
// // //     formData.append("dateOfBirth", values.dob)
// // //     formData.append("address", values.address)
// // //     formData.append("alternateEmailId", values.alternateEmail)
// // //     formData.append("mailId", user?.mailId) // For backend lookup

// // //     // Handle file uploads
// // //     if (values.avatar?.fileList && values.avatar.fileList.length > 0) {
// // //       formData.append("profilePhoto", values.avatar.fileList[0].originFileObj)
// // //     }
// // //     if (values.resume?.fileList && values.resume.fileList.length > 0) {
// // //       formData.append("resume", values.resume.fileList[0].originFileObj)
// // //     }

// // //     // 🚫 DO NOT set Content-Type manually
// // //     // await axios.put(
// // //     //   "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
// // //     //   formData,
// // //     //   {
// // //     //     headers: {
// // //     //       // ❌ Remove "Content-Type": "multipart/form-data"
// // //     //       // Let browser set it automatically with boundary
// // //     //       Authorization: `Bearer ${user?.token || ""}`,
// // //     //     },
// // //     //   }
// // //     // )
// // //     await axios.put(
// // //   "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
// // //   formData,
// // //   {
// // //     headers: {
// // //       Authorization: `Bearer ${user?.token || ""}`,
// // //       // 🚫 No Content-Type here!
// // //     },
// // //   }
// // // )

// // //     // ✅ Update local state
// // //     const updatedProfileData = {
// // //       ...profileData,
// // //       personalInfo: {
// // //         ...profileData.personalInfo,
// // //         name: values.name,
// // //         phone: values.phone,
// // //         gender: values.gender,
// // //         dob: values.dob,
// // //         address: values.address,
// // //         alternateEmail: values.alternateEmail,
// // //         avatarUrl:
// // //           values.avatar?.fileList?.[0]?.thumbUrl ||
// // //           values.avatar?.fileList?.[0]?.url ||
// // //           profileData.personalInfo.avatarUrl,
// // //         resumeUrl:
// // //           values.resume?.fileList?.[0]?.thumbUrl ||
// // //           values.resume?.fileList?.[0]?.url ||
// // //           profileData.personalInfo.resumeUrl,
// // //       },
// // //     }

// // //     setProfileData(updatedProfileData)
// // //     message.success("Profile updated successfully!")
// // //     setEditMode(false)
// // //   } catch (error) {
// // //     console.error("Error updating profile:", error)
// // //     message.error(
// // //       error.response?.data?.message ||
// // //       "Failed to update profile. Please try again."
// // //     )
// // //   } finally {
// // //     setLoading(false)
// // //   }
// // // }

// // //   // ✅ Handle Password Change
// // //   const handleChangePassword = async (values) => {
// // //     setLoading(true)
// // //     try {
// // //       const payload = {
// // //         mailId: user?.mailId,
// // //         password: values.currentPassword,
// // //         newPassword: values.newPassword,
// // //         confirmNewPassword: values.confirmNewPassword,
// // //       }

// // //       await axios.post(
// // //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
// // //         payload,
// // //         {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${user?.token || ""}`,
// // //           },
// // //         }
// // //       )

// // //       message.success("Password changed successfully!")
// // //       passwordForm.resetFields()
// // //     } catch (error) {
// // //       console.error("Password change error:", error)
// // //       message.error(
// // //         error.response?.data?.message ||
// // //         "Failed to change password. Please check your current password and try again."
// // //       )
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // Show skeleton while loading
// // //   if (loading && !profileData) {
// // //     return (
// // //       <Card style={{ margin: "24px 0" }}>
// // //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="profile-container" style={{ padding: "24px" }}>
// // //       <Row gutter={[24, 24]}>
// // //         {/* Left Column: Avatar & Info */}
// // //         <Col xs={24} lg={8}>
// // //           <Card bordered={false}>
// // //             <div style={{ textAlign: "center" }}>
// // //               <Avatar
// // //                 src={profileData?.personalInfo.avatarUrl}
// // //                 icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
// // //                 size={100}
// // //                 style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
// // //               />
// // //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// // //                 {user?.userName}
// // //               </Title>
// // //               <Text type="secondary">{user?.mailId}</Text>

// // //               {/* Edit Mode: Upload Avatar */}
// // //               {editMode && (
// // //                 <div style={{ margin: "16px 0" }}>
// // //                   <Form.Item name="avatar" noStyle valuePropName="fileList" getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}>
// // //                     <Upload
// // //                       name="avatar"
// // //                       listType="picture-circle"
// // //                       maxCount={1}
// // //                       beforeUpload={(file) => {
// // //                         const isImage = file.type.startsWith("image/")
// // //                         if (!isImage) {
// // //                           message.error("Please upload an image file (JPG/PNG).")
// // //                           return Upload.LIST_IGNORE
// // //                         }
// // //                         return true
// // //                       }}
// // //                     >
// // //                       <Button icon={<UploadOutlined />}>Change Avatar</Button>
// // //                     </Upload>
// // //                   </Form.Item>
// // //                 </div>
// // //               )}

// // //               <Divider />
// // //               <div style={{ textAlign: "left" }}>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <PhoneOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.phone}</Text>
// // //                 </div>
// // //                 <div style={{ marginBottom: 8 }}>
// // //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// // //                   <Text>{profileData?.personalInfo.address}</Text>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         {/* Right Column: Tabs */}
// // //         <Col xs={24} lg={16}>
// // //           <Card bordered={false}>
// // //             <Tabs activeKey={activeTab} onChange={setActiveTab}>
// // //               {/* Profile Tab */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <UserOutlined />
// // //                     Profile
// // //                   </span>
// // //                 }
// // //                 key="1"
// // //               >
// // //                 {editMode ? (
// // //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
// // //                           <Input prefix={<UserOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Email ID (Login)" name="email">
// // //                           <Input prefix={<MailOutlined />} disabled />
// // //                           <Text type="secondary" style={{ fontSize: 12 }}>
// // //                             Cannot be edited here. Contact support.
// // //                           </Text>
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item
// // //                           label="Alternate Email ID"
// // //                           name="alternateEmail"
// // //                           rules={[{ type: "email", message: "Enter a valid email" }]}
// // //                         >
// // //                           <Input />
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
// // //                           <Input prefix={<PhoneOutlined />} />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Row gutter={16}>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
// // //                           <select className="ant-input" style={{ height: "38px" }}>
// // //                             <option value="">Select Gender</option>
// // //                             <option value="male">Male</option>
// // //                             <option value="female">Female</option>
// // //                             <option value="other">Other</option>
// // //                             <option value="prefer_not_to_say">Prefer not to say</option>
// // //                           </select>
// // //                         </Form.Item>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
// // //                           <Input type="date" />
// // //                         </Form.Item>
// // //                       </Col>
// // //                     </Row>

// // //                     <Form.Item label="Address" name="address" rules={[{ required: true }]}>
// // //                       <Input.TextArea rows={2} />
// // //                     </Form.Item>

// // //                     {/* Resume Upload */}
// // //                     <Form.Item label="Resume / CV Upload" name="resume" valuePropName="fileList" getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}>
// // //                       <Upload beforeUpload={() => false} maxCount={1} accept=".pdf,.doc,.docx">
// // //                         <Button icon={<UploadOutlined />}>Upload Resume (PDF/DOC)</Button>
// // //                       </Upload>
// // //                     </Form.Item>

// // //                     <Form.Item>
// // //                       <Space>
// // //                         <Button
// // //                           type="primary"
// // //                           htmlType="submit"
// // //                           loading={loading}
// // //                           style={{
// // //                             backgroundColor: "#006666",
// // //                             borderColor: "#003d3d",
// // //                           }}
// // //                         >
// // //                           Save Changes
// // //                         </Button>
// // //                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
// // //                       </Space>
// // //                     </Form.Item>
// // //                   </Form>
// // //                 ) : (
// // //                   <div>
// // //                     <div style={{
// // //                       display: "flex",
// // //                       justifyContent: "space-between",
// // //                       alignItems: "center",
// // //                       marginBottom: 16,
// // //                     }}>
// // //                       <Title level={4}>Personal Information</Title>
// // //                       <Button
// // //                         type="primary"
// // //                         icon={<EditOutlined />}
// // //                         onClick={() => setEditMode(true)}
// // //                         style={{
// // //                           backgroundColor: "#006666",
// // //                           borderColor: "#003d3d",
// // //                         }}
// // //                       >
// // //                         Edit Profile
// // //                       </Button>
// // //                     </div>

// // //                     <Divider />

// // //                     <Row gutter={[16, 16]}>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Full Name</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.name}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Email ID (Login)</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.email}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Alternate Email</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.alternateEmail}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Phone</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.phone}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Gender</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.gender}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24} md={12}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Date of Birth</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.dob}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       <Col xs={24}>
// // //                         <div style={{ marginBottom: 16 }}>
// // //                           <Text type="secondary">Address</Text>
// // //                           <div><Text strong>{profileData?.personalInfo.address}</Text></div>
// // //                         </div>
// // //                       </Col>
// // //                       {profileData?.personalInfo.resumeUrl && (
// // //                         <Col xs={24} md={12}>
// // //                           <div style={{ marginBottom: 16 }}>
// // //                             <Text type="secondary">Resume</Text>
// // //                             <div>
// // //                               <a
// // //                                 href={profileData.personalInfo.resumeUrl}
// // //                                 target="_blank"
// // //                                 rel="noopener noreferrer"
// // //                               >
// // //                                 View Resume
// // //                               </a>
// // //                             </div>
// // //                           </div>
// // //                         </Col>
// // //                       )}
// // //                     </Row>
// // //                   </div>
// // //                 )}
// // //               </TabPane>

// // //               {/* Security Tab */}
// // //               <TabPane
// // //                 tab={
// // //                   <span>
// // //                     <LockOutlined />
// // //                     Security
// // //                   </span>
// // //                 }
// // //                 key="2"
// // //               >
// // //                 <Title
// // //                   level={4}
// // //                   style={{
// // //                     color: "white",
// // //                     background: "#006666",
// // //                     padding: "8px 12px",
// // //                     borderRadius: 4,
// // //                   }}
// // //                 >
// // //                   Change Password
// // //                 </Title>
// // //                 <Form
// // //                   form={passwordForm}
// // //                   layout="vertical"
// // //                   onFinish={handleChangePassword}
// // //                 >
// // //                   <Form.Item
// // //                     label="Current Password"
// // //                     name="currentPassword"
// // //                     rules={[{ required: true, message: "Enter your current password" }]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     label="New Password"
// // //                     name="newPassword"
// // //                     rules={[
// // //                       { required: true, message: "Enter a new password" },
// // //                       { min: 8, message: "Password must be at least 8 characters" },
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item
// // //                     label="Confirm New Password"
// // //                     name="confirmNewPassword"
// // //                     dependencies={["newPassword"]}
// // //                     rules={[
// // //                       { required: true, message: "Please confirm your new password" },
// // //                       ({ getFieldValue }) => ({
// // //                         validator(_, value) {
// // //                           if (!value || getFieldValue("newPassword") === value) {
// // //                             return Promise.resolve()
// // //                           }
// // //                           return Promise.reject(new Error("The two passwords do not match!"))
// // //                         },
// // //                       }),
// // //                     ]}
// // //                   >
// // //                     <Input.Password prefix={<LockOutlined />} />
// // //                   </Form.Item>

// // //                   <Form.Item>
// // //                     <Button
// // //                       type="primary"
// // //                       htmlType="submit"
// // //                       loading={loading}
// // //                       style={{
// // //                         backgroundColor: "#006666",
// // //                         borderColor: "#003d3d",
// // //                       }}
// // //                     >
// // //                       Change Password
// // //                     </Button>
// // //                   </Form.Item>
// // //                 </Form>
// // //               </TabPane>
// // //             </Tabs>
// // //           </Card>
// // //         </Col>
// // //       </Row>
// // //     </div>
// // //   )
// // // }

// // // export default Profile

// // "use client"

// // import { useState, useEffect } from "react"
// // import {
// //   Card,
// //   Typography,
// //   Tabs,
// //   Form,
// //   Input,
// //   Button,
// //   Avatar,
// //   Row,
// //   Col,
// //   Divider,
// //   Space,
// //   message,
// //   Skeleton,
// // } from "antd"
// // import {
// //   UserOutlined,
// //   MailOutlined,
// //   PhoneOutlined,
// //   EditOutlined,
// //   LockOutlined,
// //   EnvironmentOutlined,
// // } from "@ant-design/icons"
// // import axios from "axios"
// // import { useAuth } from "../../Contexts/AuthContext"

// // const { Title, Text } = Typography
// // const { TabPane } = Tabs

// // const Profile = ({ windowWidth }) => {
// //   const [loading, setLoading] = useState(true)
// //   const [profileData, setProfileData] = useState(null)
// //   const [activeTab, setActiveTab] = useState("1")
// //   const [editMode, setEditMode] = useState(false)
// //   const [form] = Form.useForm()
// //   const [passwordForm] = Form.useForm()
// //   const isMobile = windowWidth < 768
// //   const { user } = useAuth()

// //   // Generate initial for avatar
// //   const getInitial = () => {
// //     if (!user?.userName) return "?"
// //     return user.userName.trim().charAt(0).toUpperCase()
// //   }

// //   // Generate color based on user name
// //   const stringToColor = (str) => {
// //     let hash = 0
// //     for (let i = 0; i < str.length; i++) {
// //       hash = str.charCodeAt(i) + ((hash << 5) - hash)
// //     }
// //     const hue = Math.abs(hash) % 360
// //     return `hsl(${hue}, 60%, 70%)`
// //   }

// //   // Fetch mock profile data
// //   useEffect(() => {
// //     const fetchProfileData = async () => {
// //       setLoading(true)
// //       try {
// //         await new Promise((resolve) => setTimeout(resolve, 800)) // Simulate API delay

// //         const mockData = {
// //           personalInfo: {
// //             name: user?.userName || "Student Name",
// //             email: user?.mailId || "student@gmail.com",
// //             alternateEmail: "alternate@example.com",
// //             phone: "+91 9876543210",
// //             address: "123 Main St, Cityville, Tamil Nadu, India",
// //             gender: "female",
// //             dob: "2000-01-01",
// //             avatarUrl: user?.avatar || "",
// //           },
// //         }

// //         setProfileData(mockData)
// //         form.setFieldsValue({
// //           name: mockData.personalInfo.name,
// //           email: mockData.personalInfo.email,
// //           alternateEmail: mockData.personalInfo.alternateEmail,
// //           phone: mockData.personalInfo.phone,
// //           address: mockData.personalInfo.address,
// //           gender: mockData.personalInfo.gender,
// //           dob: mockData.personalInfo.dob,
// //         })
// //         setLoading(false)
// //       } catch (error) {
// //         console.error("Error fetching profile data:", error)
// //         message.error("Failed to load profile data")
// //         setLoading(false)
// //       }
// //     }

// //     fetchProfileData()
// //   }, [user, form])

// //   // ✅ Handle Profile Update (JSON only)
// //   const handleUpdateProfile = async (values) => {
// //     setLoading(true)
// //     try {
// //       const payload = {
// //         mailId: user?.mailId, // Required for backend lookup
// //         fullName: values.name,
// //         mobileNumber: values.phone,
// //         gender: values.gender,
// //         dateOfBirth: values.dob,
// //         address: values.address,
// //         alternateEmailId: values.alternateEmail,
// //       }

// //       await axios.put(
// //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
// //         payload,
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${user?.token || ""}`,
// //           },
// //         }
// //       )

// //       // ✅ Update local state
// //       const updatedProfileData = {
// //         ...profileData,
// //         personalInfo: {
// //           ...profileData.personalInfo,
// //           name: values.name,
// //           phone: values.phone,
// //           gender: values.gender,
// //           dob: values.dob,
// //           address: values.address,
// //           alternateEmail: values.alternateEmail,
// //         },
// //       }

// //       setProfileData(updatedProfileData)
// //       message.success("Profile updated successfully!")
// //       setEditMode(false)
// //     } catch (error) {
// //       console.error("Error updating profile:", error)
// //       message.error(
// //         error.response?.data?.message ||
// //         "Failed to update profile. Please try again."
// //       )
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   // ✅ Handle Password Change
// //   const handleChangePassword = async (values) => {
// //     setLoading(true)
// //     try {
// //       const payload = {
// //         mailId: user?.mailId,
// //         password: values.currentPassword,
// //         newPassword: values.newPassword,
// //         confirmNewPassword: values.confirmNewPassword,
// //       }

// //       await axios.post(
// //         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
// //         payload,
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${user?.token || ""}`,
// //           },
// //         }
// //       )

// //       message.success("Password changed successfully!")
// //       passwordForm.resetFields()
// //     } catch (error) {
// //       console.error("Password change error:", error)
// //       message.error(
// //         error.response?.data?.message ||
// //         "Failed to change password. Please check your current password and try again."
// //       )
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   // Show skeleton while loading
// //   if (loading && !profileData) {
// //     return (
// //       <Card style={{ margin: "24px 0" }}>
// //         <Skeleton avatar paragraph={{ rows: 4 }} active />
// //       </Card>
// //     )
// //   }

// //   return (
// //     <div className="profile-container" style={{ padding: "24px" }}>
// //       <Row gutter={[24, 24]}>
// //         {/* Left Column: Avatar & Info */}
// //         <Col xs={24} lg={8}>
// //           <Card bordered={false}>
// //             <div style={{ textAlign: "center" }}>
// //               <Avatar
// //                 src={profileData?.personalInfo.avatarUrl}
// //                 icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
// //                 size={100}
// //                 style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
// //               />
// //               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
// //                 {user?.userName}
// //               </Title>
// //               <Text type="secondary">{user?.mailId}</Text>

// //               {/* Removed: Change Avatar Upload */}
// //               {/* Removed: Resume Upload */}

// //               <Divider />
// //               <div style={{ textAlign: "left" }}>
// //                 <div style={{ marginBottom: 8 }}>
// //                   <PhoneOutlined style={{ marginRight: 8 }} />
// //                   <Text>{profileData?.personalInfo.phone}</Text>
// //                 </div>
// //                 <div style={{ marginBottom: 8 }}>
// //                   <EnvironmentOutlined style={{ marginRight: 8 }} />
// //                   <Text>{profileData?.personalInfo.address}</Text>
// //                 </div>
// //               </div>
// //             </div>
// //           </Card>
// //         </Col>

// //         {/* Right Column: Tabs */}
// //         <Col xs={24} lg={16}>
// //           <Card bordered={false}>
// //             <Tabs activeKey={activeTab} onChange={setActiveTab}>
// //               {/* Profile Tab */}
// //               <TabPane
// //                 tab={
// //                   <span>
// //                     <UserOutlined />
// //                     Profile
// //                   </span>
// //                 }
// //                 key="1"
// //               >
// //                 {editMode ? (
// //                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
// //                     <Row gutter={16}>
// //                       <Col xs={24} md={12}>
// //                         <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
// //                           <Input prefix={<UserOutlined />} />
// //                         </Form.Item>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <Form.Item label="Email ID (Login)" name="email">
// //                           <Input prefix={<MailOutlined />} disabled />
// //                           <Text type="secondary" style={{ fontSize: 12 }}>
// //                             Cannot be edited here. Contact support.
// //                           </Text>
// //                         </Form.Item>
// //                       </Col>
// //                     </Row>

// //                     <Row gutter={16}>
// //                       <Col xs={24} md={12}>
// //                         <Form.Item
// //                           label="Alternate Email ID"
// //                           name="alternateEmail"
// //                           rules={[{ type: "email", message: "Enter a valid email" }]}
// //                         >
// //                           <Input />
// //                         </Form.Item>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
// //                           <Input prefix={<PhoneOutlined />} />
// //                         </Form.Item>
// //                       </Col>
// //                     </Row>

// //                     <Row gutter={16}>
// //                       <Col xs={24} md={12}>
// //                         <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
// //                           <select className="ant-input" style={{ height: "38px" }}>
// //                             <option value="">Select Gender</option>
// //                             <option value="male">Male</option>
// //                             <option value="female">Female</option>
// //                             <option value="other">Other</option>
// //                             <option value="prefer_not_to_say">Prefer not to say</option>
// //                           </select>
// //                         </Form.Item>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
// //                           <Input type="date" />
// //                         </Form.Item>
// //                       </Col>
// //                     </Row>

// //                     <Form.Item label="Address" name="address" rules={[{ required: true }]}>
// //                       <Input.TextArea rows={2} />
// //                     </Form.Item>

// //                     <Form.Item>
// //                       <Space>
// //                         <Button
// //                           type="primary"
// //                           htmlType="submit"
// //                           loading={loading}
// //                           style={{
// //                             backgroundColor: "#006666",
// //                             borderColor: "#003d3d",
// //                           }}
// //                         >
// //                           Save Changes
// //                         </Button>
// //                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
// //                       </Space>
// //                     </Form.Item>
// //                   </Form>
// //                 ) : (
// //                   <div>
// //                     <div style={{
// //                       display: "flex",
// //                       justifyContent: "space-between",
// //                       alignItems: "center",
// //                       marginBottom: 16,
// //                     }}>
// //                       <Title level={4}>Personal Information</Title>
// //                       <Button
// //                         type="primary"
// //                         icon={<EditOutlined />}
// //                         onClick={() => setEditMode(true)}
// //                         style={{
// //                           backgroundColor: "#006666",
// //                           borderColor: "#003d3d",
// //                         }}
// //                       >
// //                         Edit Profile
// //                       </Button>
// //                     </div>

// //                     <Divider />

// //                     <Row gutter={[16, 16]}>
// //                       <Col xs={24} md={12}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Full Name</Text>
// //                           <div><Text strong>{profileData?.personalInfo.name}</Text></div>
// //                         </div>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Email ID (Login)</Text>
// //                           <div><Text strong>{profileData?.personalInfo.email}</Text></div>
// //                         </div>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Alternate Email</Text>
// //                           <div><Text strong>{profileData?.personalInfo.alternateEmail}</Text></div>
// //                         </div>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Phone</Text>
// //                           <div><Text strong>{profileData?.personalInfo.phone}</Text></div>
// //                         </div>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Gender</Text>
// //                           <div><Text strong>{profileData?.personalInfo.gender}</Text></div>
// //                         </div>
// //                       </Col>
// //                       <Col xs={24} md={12}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Date of Birth</Text>
// //                           <div><Text strong>{profileData?.personalInfo.dob}</Text></div>
// //                         </div>
// //                       </Col>
// //                       <Col xs={24}>
// //                         <div style={{ marginBottom: 16 }}>
// //                           <Text type="secondary">Address</Text>
// //                           <div><Text strong>{profileData?.personalInfo.address}</Text></div>
// //                         </div>
// //                       </Col>
// //                     </Row>
// //                   </div>
// //                 )}
// //               </TabPane>

// //               {/* Security Tab */}
// //               <TabPane
// //                 tab={
// //                   <span>
// //                     <LockOutlined />
// //                     Security
// //                   </span>
// //                 }
// //                 key="2"
// //               >
// //                 <Title
// //                   level={4}
// //                   style={{
// //                     color: "white",
// //                     background: "#006666",
// //                     padding: "8px 12px",
// //                     borderRadius: 4,
// //                   }}
// //                 >
// //                   Change Password
// //                 </Title>
// //                 <Form
// //                   form={passwordForm}
// //                   layout="vertical"
// //                   onFinish={handleChangePassword}
// //                 >
// //                   <Form.Item
// //                     label="Current Password"
// //                     name="currentPassword"
// //                     rules={[{ required: true, message: "Enter your current password" }]}
// //                   >
// //                     <Input.Password prefix={<LockOutlined />} />
// //                   </Form.Item>

// //                   <Form.Item
// //                     label="New Password"
// //                     name="newPassword"
// //                     rules={[
// //                       { required: true, message: "Enter a new password" },
// //                       { min: 8, message: "Password must be at least 8 characters" },
// //                     ]}
// //                   >
// //                     <Input.Password prefix={<LockOutlined />} />
// //                   </Form.Item>

// //                   <Form.Item
// //                     label="Confirm New Password"
// //                     name="confirmNewPassword"
// //                     dependencies={["newPassword"]}
// //                     rules={[
// //                       { required: true, message: "Please confirm your new password" },
// //                       ({ getFieldValue }) => ({
// //                         validator(_, value) {
// //                           if (!value || getFieldValue("newPassword") === value) {
// //                             return Promise.resolve()
// //                           }
// //                           return Promise.reject(new Error("The two passwords do not match!"))
// //                         },
// //                       }),
// //                     ]}
// //                   >
// //                     <Input.Password prefix={<LockOutlined />} />
// //                   </Form.Item>

// //                   <Form.Item>
// //                     <Button
// //                       type="primary"
// //                       htmlType="submit"
// //                       loading={loading}
// //                       style={{
// //                         backgroundColor: "#006666",
// //                         borderColor: "#003d3d",
// //                       }}
// //                     >
// //                       Change Password
// //                     </Button>
// //                   </Form.Item>
// //                 </Form>
// //               </TabPane>
// //             </Tabs>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </div>
// //   )
// // }

// // export default Profile

// // src/Student_Panel/pages/Profile.jsx
// "use client"

// import { useState, useEffect } from "react"
// import {
//   Card,
//   Typography,
//   Tabs,
//   Form,
//   Input,
//   Button,
//   Avatar,
//   Row,
//   Col,
//   Divider,
//   Space,
//   message,
//   Skeleton,
// } from "antd"
// import {
//   UserOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   EditOutlined,
//   LockOutlined,
//   EnvironmentOutlined,
// } from "@ant-design/icons"
// import axios from "axios"
// import { useAuth } from "../../Contexts/AuthContext"
// import { useGlobalStore } from "../contexts/GlobalStore"

// const { Title, Text } = Typography
// const { TabPane } = Tabs

// const Profile = ({ windowWidth }) => {
//   const [loading, setLoading] = useState(true)
//   const [profileData, setProfileData] = useState(null)
//   const [activeTab, setActiveTab] = useState("1")
//   const [editMode, setEditMode] = useState(false)
//   const [form] = Form.useForm()
//   const [passwordForm] = Form.useForm()
//   const isMobile = windowWidth < 768
//   const { user } = useAuth()
//   const { enrolledCourses, courses, progress } = useGlobalStore()

//   const getInitial = () => user?.userName?.trim().charAt(0).toUpperCase() || "?"

//   const stringToColor = (str) => {
//     let hash = 0
//     for (let i = 0; i < str.length; i++) {
//       hash = str.charCodeAt(i) + ((hash << 5) - hash)
//     }
//     const hue = Math.abs(hash) % 360
//     return `hsl(${hue}, 60%, 70%)`
//   }

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       setLoading(true)
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 800))

//         const mockData = {
//           personalInfo: {
//             name: user?.userName || "Student Name",
//             email: user?.mailId || "student@gmail.com",
//             alternateEmail: "alternate@example.com",
//             phone: "+91 9876543210",
//             address: "123 Main St, Cityville, Tamil Nadu, India",
//             gender: "female",
//             dob: "2000-01-01",
//             avatarUrl: user?.avatar || "",
//           },
//         }

//         setProfileData(mockData)
//         form.setFieldsValue({
//           name: mockData.personalInfo.name,
//           email: mockData.personalInfo.email,
//           alternateEmail: mockData.personalInfo.alternateEmail,
//           phone: mockData.personalInfo.phone,
//           address: mockData.personalInfo.address,
//           gender: mockData.personalInfo.gender,
//           dob: mockData.personalInfo.dob,
//         })
//         setLoading(false)
//       } catch (error) {
//         console.error("Error fetching profile data:", error)
//         message.error("Failed to load profile data")
//         setLoading(false)
//       }
//     }

//     fetchProfileData()
//   }, [user, form])

//   const handleUpdateProfile = async (values) => {
//     setLoading(true)
//     try {
//       const payload = {
//         mailId: user?.mailId,
//         fullName: values.name,
//         mobileNumber: values.phone,
//         gender: values.gender,
//         dateOfBirth: values.dob,
//         address: values.address,
//         alternateEmailId: values.alternateEmail,
//       }

//       await axios.put(
//         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
//         payload,
//         { headers: { "Content-Type": "application/json", Authorization: `Bearer ${user?.token || ""}` } }
//       )

//       const updatedProfileData = {
//         ...profileData,
//         personalInfo: {
//           ...profileData.personalInfo,
//           name: values.name,
//           phone: values.phone,
//           gender: values.gender,
//           dob: values.dob,
//           address: values.address,
//           alternateEmail: values.alternateEmail,
//         },
//       }

//       setProfileData(updatedProfileData)
//       message.success("Profile updated successfully!")
//       setEditMode(false)
//     } catch (error) {
//       console.error("Error updating profile:", error)
//       message.error(error.response?.data?.message || "Failed to update profile.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleChangePassword = async (values) => {
//     setLoading(true)
//     try {
//       const payload = {
//         mailId: user?.mailId,
//         password: values.currentPassword,
//         newPassword: values.newPassword,
//         confirmNewPassword: values.confirmNewPassword,
//       }

//       await axios.post(
//         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
//         payload,
//         { headers: { "Content-Type": "application/json", Authorization: `Bearer ${user?.token || ""}` } }
//       )

//       message.success("Password changed successfully!")
//       passwordForm.resetFields()
//     } catch (error) {
//       console.error("Password change error:", error)
//       message.error(error.response?.data?.message || "Failed to change password.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (loading && !profileData) {
//     return <Card style={{ margin: "24px 0" }}><Skeleton avatar paragraph={{ rows: 4 }} active /></Card>
//   }

//   // Compute learning stats from global store
//   const completedCourses = enrolledCourses.filter(id => {
//     const c = courses.find(x => x.id === id);
//     const p = progress[id];
//     return c && p && p.completedVideos.size === c.videos.length;
//   });

//   return (
//     <div className="profile-container" style={{ padding: "24px" }}>
//       <Row gutter={[24, 24]}>
//         <Col xs={24} lg={8}>
//           <Card bordered={false}>
//             <div style={{ textAlign: "center" }}>
//               <Avatar
//                 src={profileData?.personalInfo.avatarUrl}
//                 icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
//                 size={100}
//                 style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
//               />
//               <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
//                 {user?.userName}
//               </Title>
//               <Text type="secondary">{user?.mailId}</Text>
//               <Divider />
//               <div style={{ textAlign: "left" }}>
//                 <div style={{ marginBottom: 8 }}>
//                   <PhoneOutlined style={{ marginRight: 8 }} />
//                   <Text>{profileData?.personalInfo.phone}</Text>
//                 </div>
//                 <div style={{ marginBottom: 8 }}>
//                   <EnvironmentOutlined style={{ marginRight: 8 }} />
//                   <Text>{profileData?.personalInfo.address}</Text>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </Col>

//         <Col xs={24} lg={16}>
//           <Card bordered={false}>
//             <Tabs activeKey={activeTab} onChange={setActiveTab}>
//               <TabPane tab={<span><UserOutlined /> Profile</span>} key="1">
//                 {editMode ? (
//                   <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
//                     {/* Form fields same as original */}
//                     <Row gutter={16}>
//                       <Col xs={24} md={12}>
//                         <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
//                           <Input prefix={<UserOutlined />} />
//                         </Form.Item>
//                       </Col>
//                       <Col xs={24} md={12}>
//                         <Form.Item label="Email ID (Login)" name="email">
//                           <Input prefix={<MailOutlined />} disabled />
//                         </Form.Item>
//                       </Col>
//                     </Row>
//                     <Row gutter={16}>
//                       <Col xs={24} md={12}>
//                         <Form.Item label="Alternate Email ID" name="alternateEmail" rules={[{ type: "email" }]}>
//                           <Input />
//                         </Form.Item>
//                       </Col>
//                       <Col xs={24} md={12}>
//                         <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
//                           <Input prefix={<PhoneOutlined />} />
//                         </Form.Item>
//                       </Col>
//                     </Row>
//                     <Row gutter={16}>
//                       <Col xs={24} md={12}>
//                         <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
//                           <select className="ant-input" style={{ height: "38px" }}>
//                             <option value="">Select Gender</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="other">Other</option>
//                             <option value="prefer_not_to_say">Prefer not to say</option>
//                           </select>
//                         </Form.Item>
//                       </Col>
//                       <Col xs={24} md={12}>
//                         <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
//                           <Input type="date" />
//                         </Form.Item>
//                       </Col>
//                     </Row>
//                     <Form.Item label="Address" name="address" rules={[{ required: true }]}>
//                       <Input.TextArea rows={2} />
//                     </Form.Item>
//                     <Form.Item>
//                       <Space>
//                         <Button type="primary" htmlType="submit" loading={loading} style={{ backgroundColor: "#006666", borderColor: "#003d3d" }}>
//                           Save Changes
//                         </Button>
//                         <Button onClick={() => setEditMode(false)}>Cancel</Button>
//                       </Space>
//                     </Form.Item>
//                   </Form>
//                 ) : (
//                   <div>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
//                       <Title level={4}>Personal Information</Title>
//                       <Button type="primary" icon={<EditOutlined />} onClick={() => setEditMode(true)} style={{ backgroundColor: "#006666", borderColor: "#003d3d" }}>
//                         Edit Profile
//                       </Button>
//                     </div>
//                     <Divider />
//                     <Row gutter={[16, 16]}>
//                       <Col xs={24} md={12}>
//                         <Text type="secondary">Full Name</Text>
//                         <Text strong>{profileData?.personalInfo.name}</Text>
//                       </Col>
//                       <Col xs={24} md={12}>
//                         <Text type="secondary">Email ID (Login)</Text>
//                         <Text strong>{profileData?.personalInfo.email}</Text>
//                       </Col>
//                       {/* ... other fields */}
//                     </Row>
//                   </div>
//                 )}
//               </TabPane>

//               <TabPane tab={<span><LockOutlined /> Security</span>} key="2">
//                 <Title level={4} style={{ color: "white", background: "#006666", padding: "8px 12px", borderRadius: 4 }}>Change Password</Title>
//                 <Form form={passwordForm} layout="vertical" onFinish={handleChangePassword}>
//                   <Form.Item label="Current Password" name="currentPassword" rules={[{ required: true }]}>
//                     <Input.Password prefix={<LockOutlined />} />
//                   </Form.Item>
//                   <Form.Item label="New Password" name="newPassword" rules={[{ required: true }, { min: 8 }]}>
//                     <Input.Password prefix={<LockOutlined />} />
//                   </Form.Item>
//                   <Form.Item label="Confirm New Password" name="confirmNewPassword" dependencies={["newPassword"]} rules={[
//                     { required: true },
//                     ({ getFieldValue }) => ({
//                       validator(_, value) {
//                         if (!value || getFieldValue("newPassword") === value) return Promise.resolve();
//                         return Promise.reject(new Error("Passwords do not match!"));
//                       },
//                     }),
//                   ]}>
//                     <Input.Password prefix={<LockOutlined />} />
//                   </Form.Item>
//                   <Form.Item>
//                     <Button type="primary" htmlType="submit" loading={loading} style={{ backgroundColor: "#006666", borderColor: "#003d3d" }}>
//                       Change Password
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </TabPane>
//             </Tabs>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default Profile

"use client";

import { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Tabs,
  Form,
  Input,
  Button,
  Avatar,
  Row,
  Col,
  Divider,
  Space,
  message,
  Skeleton,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EditOutlined,
  LockOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Profile = ({ windowWidth }) => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [activeTab, setActiveTab] = useState("1");
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const isMobile = windowWidth < 768;
  const { user } = useAuth();
  const { enrolledCourses, courses, progress } = useGlobalStore();

  const getInitial = () => user?.userName?.trim().charAt(0).toUpperCase() || "?";

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 60%, 70%)`;
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockData = {
          personalInfo: {
            name: user?.userName || "Student Name",
            email: user?.mailId || "student@gmail.com",
            alternateEmail: "alternate@example.com",
            phone: "+91 9876543210",
            address: "123 Main St, Cityville, Tamil Nadu, India",
            gender: "female",
            dob: "2000-01-01",
            avatarUrl: user?.avatar || "",
          },
        };

        setProfileData(mockData);
        form.setFieldsValue({
          name: mockData.personalInfo.name,
          email: mockData.personalInfo.email,
          alternateEmail: mockData.personalInfo.alternateEmail,
          phone: mockData.personalInfo.phone,
          address: mockData.personalInfo.address,
          gender: mockData.personalInfo.gender,
          dob: mockData.personalInfo.dob,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        message.error("Failed to load profile data");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user, form]);

  const handleUpdateProfile = async (values) => {
    setLoading(true);
    try {
      const payload = {
        mailId: user?.mailId,
        fullName: values.name,
        mobileNumber: values.phone,
        gender: values.gender,
        dateOfBirth: values.dob,
        address: values.address,
        alternateEmailId: values.alternateEmail,
      };

      await axios.put(
        "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/updateProfile",
        payload,
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${user?.token || ""}` } }
      );

      const updatedProfileData = {
        ...profileData,
        personalInfo: {
          ...profileData.personalInfo,
          name: values.name,
          phone: values.phone,
          gender: values.gender,
          dob: values.dob,
          address: values.address,
          alternateEmail: values.alternateEmail,
        },
      };

      setProfileData(updatedProfileData);
      message.success("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error(error.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (values) => {
    setLoading(true);
    try {
      const payload = {
        mailId: user?.mailId,
        password: values.currentPassword,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword,
      };

      await axios.post(
        "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
        payload,
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${user?.token || ""}` } }
      );

      message.success("Password changed successfully!");
      passwordForm.resetFields();
    } catch (error) {
      console.error("Password change error:", error);
      message.error(error.response?.data?.message || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profileData) {
    return (
      <div style={{ padding: "24px" }}>
        <Card><Skeleton avatar paragraph={{ rows: 4 }} active /></Card>
      </div>
    );
  }

  // Compute learning stats
  const completedCourses = enrolledCourses.filter((id) => {
    const c = courses.find((x) => x.id === id);
    const p = progress[id];
    return c && p && p.completedVideos.size === c.videos.length;
  });

  // === RENDER ===
  return (
    <div className="profile-container" style={{ padding: isMobile ? "16px" : "24px" }}>
      {/* On mobile: Avatar section at top */}
      {isMobile && (
        <Card bordered={false} style={{ marginBottom: 24 }}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              src={profileData?.personalInfo.avatarUrl}
              icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
              size={80}
              style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
            />
            <Title level={5} style={{ marginTop: 12, marginBottom: 4 }}>
              {user?.userName}
            </Title>
            <Text type="secondary" style={{ fontSize: "14px" }}>
              {user?.mailId}
            </Text>
            <Divider style={{ margin: "12px 0" }} />
            <div style={{ textAlign: "left", fontSize: "14px" }}>
              <div style={{ marginBottom: 6 }}>
                <PhoneOutlined style={{ marginRight: 6, fontSize: "14px" }} />
                <Text>{profileData?.personalInfo.phone}</Text>
              </div>
              <div>
                <EnvironmentOutlined style={{ marginRight: 6, fontSize: "14px" }} />
                <Text>{profileData?.personalInfo.address}</Text>
              </div>
            </div>
          </div>
        </Card>
      )}

      <Row gutter={[24, 24]}>
        {/* Desktop-only: Avatar sidebar */}
        {!isMobile && (
          <Col xs={24} lg={8}>
            <Card bordered={false}>
              <div style={{ textAlign: "center" }}>
                <Avatar
                  src={profileData?.personalInfo.avatarUrl}
                  icon={!profileData?.personalInfo.avatarUrl && <span>{getInitial()}</span>}
                  size={100}
                  style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
                />
                <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
                  {user?.userName}
                </Title>
                <Text type="secondary">{user?.mailId}</Text>
                <Divider />
                <div style={{ textAlign: "left" }}>
                  <div style={{ marginBottom: 8 }}>
                    <PhoneOutlined style={{ marginRight: 8 }} />
                    <Text>{profileData?.personalInfo.phone}</Text>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <EnvironmentOutlined style={{ marginRight: 8 }} />
                    <Text>{profileData?.personalInfo.address}</Text>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        )}

        {/* Main content: Tabs */}
        <Col xs={24} lg={isMobile ? 24 : 16}>
          <Card bordered={false}>
            <Tabs activeKey={activeTab} onChange={setActiveTab} tabBarStyle={{ marginBottom: 20 }}>
              <TabPane tab={<span><UserOutlined /> Profile</span>} key="1">
                {editMode ? (
                  <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
                          <Input prefix={<UserOutlined />} size={isMobile ? "large" : "default"} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label="Email ID (Login)" name="email">
                          <Input prefix={<MailOutlined />} disabled size={isMobile ? "large" : "default"} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Form.Item label="Alternate Email ID" name="alternateEmail" rules={[{ type: "email" }]}>
                          <Input size={isMobile ? "large" : "default"} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
                          <Input prefix={<PhoneOutlined />} size={isMobile ? "large" : "default"} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
                          <select
                            className="ant-input"
                            style={{ height: isMobile ? "44px" : "38px" }}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer_not_to_say">Prefer not to say</option>
                          </select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
                          <Input type="date" size={isMobile ? "large" : "default"} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                      <Input.TextArea rows={isMobile ? 3 : 2} />
                    </Form.Item>
                    <Form.Item>
                      <Space direction={isMobile ? "vertical" : "horizontal"} style={{ width: isMobile ? "100%" : "auto" }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loading}
                          size={isMobile ? "large" : "default"}
                          style={{ backgroundColor: "#006666", borderColor: "#003d3d", width: isMobile ? "100%" : "auto" }}
                        >
                          Save Changes
                        </Button>
                        <Button
                          onClick={() => setEditMode(false)}
                          size={isMobile ? "large" : "default"}
                          style={{ width: isMobile ? "100%" : "auto" }}
                        >
                          Cancel
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                ) : (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                      <Title level={4} style={{ margin: 0 }}>Personal Information</Title>
                      <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => setEditMode(true)}
                        size={isMobile ? "large" : "default"}
                        style={{ backgroundColor: "#006666", borderColor: "#003d3d" }}
                      >
                        Edit Profile
                      </Button>
                    </div>
                    <Divider />
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Text type="secondary">Full Name : </Text>
                        <Text strong>{profileData?.personalInfo.name}</Text>
                      </Col>
                      <Col xs={24} md={12}>
                        <Text type="secondary">Email ID (Login) : </Text>
                        <Text strong>{profileData?.personalInfo.email}</Text>
                      </Col>
                      <Col xs={24} md={12}>
                        <Text type="secondary">Alternate Email : </Text>
                        <Text strong>{profileData?.personalInfo.alternateEmail}</Text>
                      </Col>
                      <Col xs={24} md={12}>
                        <Text type="secondary">Phone Number : </Text>
                        <Text strong>{profileData?.personalInfo.phone}</Text>
                      </Col>
                      <Col xs={24} md={12}>
                        <Text type="secondary">Gender : </Text>
                        <Text strong>{profileData?.personalInfo.gender}</Text>
                      </Col>
                      <Col xs={24} md={12}>
                        <Text type="secondary">Date of Birth : </Text>
                        <Text strong>{profileData?.personalInfo.dob}</Text>
                      </Col>
                      <Col xs={24}>
                        <Text type="secondary">Address : </Text>
                        <Text strong>{profileData?.personalInfo.address}</Text>
                      </Col>
                    </Row>
                  </div>
                )}
              </TabPane>

              <TabPane tab={<span><LockOutlined /> Security</span>} key="2">
                <Title
                  level={4}
                  style={{
                    background: "#006666",
                    color: "white",
                    padding: "10px 16px",
                    borderRadius: 6,
                    marginBottom: 20,
                    fontSize: isMobile ? "18px" : "20px",
                  }}
                >
                  Change Password
                </Title>
                <Form form={passwordForm} layout="vertical" onFinish={handleChangePassword}>
                  <Form.Item label="Current Password" name="currentPassword" rules={[{ required: true }]}>
                    <Input.Password prefix={<LockOutlined />} size={isMobile ? "large" : "default"} />
                  </Form.Item>
                  <Form.Item label="New Password" name="newPassword" rules={[{ required: true }, { min: 8 }]}>
                    <Input.Password prefix={<LockOutlined />} size={isMobile ? "large" : "default"} />
                  </Form.Item>
                  <Form.Item
                    label="Confirm New Password"
                    name="confirmNewPassword"
                    dependencies={["newPassword"]}
                    rules={[
                      { required: true },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("newPassword") === value) return Promise.resolve();
                          return Promise.reject(new Error("Passwords do not match!"));
                        },
                      }),
                    ]}
                  >
                    <Input.Password prefix={<LockOutlined />} size={isMobile ? "large" : "default"} />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      size={isMobile ? "large" : "default"}
                      style={{ backgroundColor: "#006666", borderColor: "#003d3d", width: isMobile ? "100%" : "auto" }}
                    >
                      Change Password
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;