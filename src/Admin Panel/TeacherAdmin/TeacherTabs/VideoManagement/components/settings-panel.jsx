import {
  Card,
  Form,
  Input,
  Button,
  Switch,
  Select,
  Divider,
  Typography,
  Tabs,
  Row,
  Col,
  Upload,
  message,
  Avatar,
  Grid,
} from "antd"
import {
  UserOutlined,
  LockOutlined,
  BellOutlined,
  GlobalOutlined,
  UploadOutlined,
  SaveOutlined,
} from "@ant-design/icons"

const { Title, Text } = Typography
const { Option } = Select
const { useBreakpoint } = Grid

const SettingsPanel = ({ isMobile }) => {
  const [profileForm] = Form.useForm()
  const [notificationForm] = Form.useForm()
  const [securityForm] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const screens = useBreakpoint()

  const handleProfileSubmit = (values) => {
    console.log("Profile form values:", values)
    messageApi.success("Profile settings saved successfully")
  }

  const handleNotificationSubmit = (values) => {
    console.log("Notification form values:", values)
    messageApi.success("Notification settings saved successfully")
  }

  const handleSecuritySubmit = (values) => {
    console.log("Security form values:", values)
    messageApi.success("Security settings saved successfully")
  }

  const uploadProps = {
    name: "avatar",
    action: "https://api.example.com/upload",
    showUploadList: false,
    onChange(info) {
      if (info.file.status === "done") {
        messageApi.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === "error") {
        messageApi.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <>
      {contextHolder}
      <Tabs
        defaultActiveKey="profile"
        size={isMobile ? "small" : "middle"}
        items={[
          {
            key: "profile",
            label: (
              <span>
                <UserOutlined /> {!isMobile && "Profile"}
              </span>
            ),
            children: (
              <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
                <Form
                  form={profileForm}
                  layout="vertical"
                  onFinish={handleProfileSubmit}
                  initialValues={{
                    name: "Name",
                    email: "email@gmail.com",
                    title: "eg:JavaScript Developer",
                    department: "IT",
                    bio: "Experienced JavaScript developer with a passion for building dynamic and interactive web applications.",
                  }}
                >
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <Avatar size={isMobile ? 80 : 100} icon={<UserOutlined />} />
                    <div style={{ marginTop: 16 }}>
                      <Upload {...uploadProps}>
                        <Button icon={<UploadOutlined />}>Change Avatar</Button>
                      </Upload>
                    </div>
                  </div>

                  <Row gutter={16}>
                    <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
                      <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: "Please enter your name" }]}
                      >
                        <Input placeholder="Enter your full name" />
                      </Form.Item>
                    </Col>
                    <Col span={isMobile ? 24 : 12}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          { required: true, message: "Please enter your email" },
                          { type: "email", message: "Please enter a valid email" },
                        ]}
                      >
                        <Input placeholder="Enter your email" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={isMobile ? 24 : 12} style={{ marginBottom: isMobile ? 16 : 0 }}>
                      <Form.Item name="title" label="Job Title">
                        <Input placeholder="Enter your job title" />
                      </Form.Item>
                    </Col>
                    <Col span={isMobile ? 24 : 12}>
                      <Form.Item name="department" label="Department">
                        <Select placeholder="Select department">
                          <Option value="Frontend">Frontend</Option>
                          <Option value="Backend">Backend</Option>
                          <Option value="Full Stack">Full Stack</Option>
                          <Option value="DevOps">DevOps</Option>
                          <Option value="Other">Other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item name="bio" label="Bio">
                    <Input.TextArea rows={4} placeholder="Tell us about yourself" />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                      Save Profile
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          // Other tabs remain unchanged
        ]}
      />
    </>
  )
}

export default SettingsPanel


// import { useState } from "react";
// import {
//   Card,
//   Form,
//   Input,
//   Button,
//   Switch,
//   Select,
//   Divider,
//   Typography,
//   Tabs,
//   Row,
//   Col,
//   Upload,
//   message,
//   Avatar,
//   Grid,
//   Space,
//   Modal,
//   Slider,
//   Radio,
//   Collapse,
//   List,
//   Tag,
//   Tooltip,
//   Statistic,
//   Progress,
// } from "antd";
// import {
//   UserOutlined,
//   LockOutlined,
//   BellOutlined,
//   UploadOutlined,
//   SaveOutlined,
//   DeleteOutlined,
//   LogoutOutlined,
//   SecurityScanOutlined,
//   ApiOutlined,
//   DesktopOutlined,
//   CloudOutlined,
//   DatabaseOutlined,
//   CopyOutlined,
// } from "@ant-design/icons";

// const { Title, Text, Paragraph } = Typography;
// const { Option } = Select;
// const { useBreakpoint } = Grid;
// const { Panel } = Collapse;

// const SettingsPanel = ({ isMobile, addNotification }) => {
//   const [profileForm] = Form.useForm();
//   const [notificationForm] = Form.useForm();
//   const [securityForm] = Form.useForm();
//   const [apiForm] = Form.useForm();
//   const [displayForm] = Form.useForm();
//   const [storageForm] = Form.useForm();
//   const [messageApi, contextHolder] = message.useMessage();
//   const screens = useBreakpoint();

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [deleteAccountModalVisible, setDeleteAccountModalVisible] =
//     useState(false);
//   const [apiKeyModalVisible, setApiKeyModalVisible] = useState(false);
//   const [apiKey, setApiKey] = useState(
//     "sk-teacher-portal-xxxxxxxxxxxxxxxxxxxx"
//   );
//   const [videoQuality, setVideoQuality] = useState("auto");
//   const [darkMode, setDarkMode] = useState(false);
//   const [fontScale, setFontScale] = useState(1);
//   const [activeTab, setActiveTab] = useState("profile");

//   // Connected apps mock data
//   const connectedApps = [
//     {
//       id: 1,
//       name: "Google Classroom",
//       connected: true,
//       lastSync: "2023-06-15",
//     },
//     { id: 2, name: "Microsoft Teams", connected: true, lastSync: "2023-06-20" },
//     { id: 3, name: "Canvas LMS", connected: false, lastSync: null },
//     { id: 4, name: "Zoom", connected: true, lastSync: "2023-06-18" },
//   ];

//   const handleProfileSubmit = (values) => {
//     console.log("Profile form values:", values);
//     messageApi.success("Profile settings saved successfully");

//     // Simulate updating user data
//     setTimeout(() => {
//       addNotification({
//         title: "Profile Updated",
//         message: "Your profile information has been updated successfully.",
//         type: "success",
//       });
//     }, 1000);
//   };

//   const handleNotificationSubmit = (values) => {
//     console.log("Notification form values:", values);
//     messageApi.success("Notification settings saved successfully");
//   };

//   const handleSecuritySubmit = (values) => {
//     console.log("Security form values:", values);
//     messageApi.success("Security settings saved successfully");

//     // Simulate security notification
//     setTimeout(() => {
//       addNotification({
//         title: "Password Changed",
//         message:
//           "Your password has been changed successfully. If you didn't make this change, please contact support.",
//         type: "warning",
//       });
//     }, 1000);
//   };

//   const handleApiSubmit = (values) => {
//     console.log("API form values:", values);
//     messageApi.success("API settings saved successfully");
//   };

//   const handleDisplaySubmit = (values) => {
//     console.log("Display form values:", values);
//     messageApi.success("Display settings saved successfully");

//     // Update dark mode
//     setDarkMode(values.darkMode);

//     // Update font scale
//     setFontScale(values.fontScale);

//     // Update video quality
//     setVideoQuality(values.videoQuality);
//   };

//   const handleStorageSubmit = (values) => {
//     console.log("Storage form values:", values);
//     messageApi.success("Storage settings saved successfully");
//   };

//   const generateNewApiKey = () => {
//     // In a real app, this would call an API to generate a new key
//     const newKey =
//       "sk-teacher-portal-" + Math.random().toString(36).substring(2, 14);
//     setApiKey(newKey);
//     messageApi.success("New API key generated successfully");
//   };

//   const uploadProps = {
//     name: "avatar",
//     action: "https://api.example.com/upload",
//     showUploadList: false,
//     onChange(info) {
//       if (info.file.status === "done") {
//         messageApi.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === "error") {
//         messageApi.error(`${info.file.name} file upload failed.`);
//       }
//     },
//   };

//   const handleDeleteAccount = () => {
//     // In a real app, this would call an API to delete the account
//     messageApi.success(
//       "Account deletion request submitted. You will receive an email confirmation."
//     );
//     setDeleteAccountModalVisible(false);
//   };

//   const handleConnectApp = (appId) => {
//     // In a real app, this would initiate OAuth flow
//     messageApi.success(`Connecting to app ${appId}...`);
//   };

//   const handleDisconnectApp = (appId) => {
//     // In a real app, this would disconnect the app
//     messageApi.success(`Disconnected app ${appId}`);
//   };

//   return (
//     <>
//       {contextHolder}
//       <Tabs
//         defaultActiveKey="profile"
//         activeKey={activeTab}
//         onChange={setActiveTab}
//         size={isMobile ? "small" : "middle"}
//         items={[
//           {
//             key: "profile",
//             label: (
//               <span>
//                 <UserOutlined /> {!isMobile && "Profile"}
//               </span>
//             ),
//             children: (
//               <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
//                 <Form
//                   form={profileForm}
//                   layout="vertical"
//                   onFinish={handleProfileSubmit}
//                   initialValues={{
//                     name: "John Doe",
//                     email: "john.doe@example.com",
//                     title: "Science Teacher",
//                     department: "Science",
//                     bio: "Experienced science teacher with a passion for creating engaging educational videos.",
//                     phone: "+1 (555) 123-4567",
//                     website: "https://johndoe-teacher.example.com",
//                   }}
//                 >
//                   <div style={{ textAlign: "center", marginBottom: 24 }}>
//                     <Avatar
//                       size={isMobile ? 80 : 100}
//                       icon={<UserOutlined />}
//                     />
//                     <div style={{ marginTop: 16 }}>
//                       <Upload {...uploadProps}>
//                         <Button icon={<UploadOutlined />}>Change Avatar</Button>
//                       </Upload>
//                     </div>
//                   </div>

//                   <Row gutter={16}>
//                     <Col
//                       span={isMobile ? 24 : 12}
//                       style={{ marginBottom: isMobile ? 16 : 0 }}
//                     >
//                       <Form.Item
//                         name="name"
//                         label="Full Name"
//                         rules={[
//                           { required: true, message: "Please enter your name" },
//                         ]}
//                       >
//                         <Input placeholder="Enter your full name" />
//                       </Form.Item>
//                     </Col>
//                     <Col span={isMobile ? 24 : 12}>
//                       <Form.Item
//                         name="email"
//                         label="Email"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please enter your email",
//                           },
//                           {
//                             type: "email",
//                             message: "Please enter a valid email",
//                           },
//                         ]}
//                       >
//                         <Input placeholder="Enter your email" />
//                       </Form.Item>
//                     </Col>
//                   </Row>

//                   <Row gutter={16}>
//                     <Col
//                       span={isMobile ? 24 : 12}
//                       style={{ marginBottom: isMobile ? 16 : 0 }}
//                     >
//                       <Form.Item name="title" label="Job Title">
//                         <Input placeholder="Enter your job title" />
//                       </Form.Item>
//                     </Col>
//                     <Col span={isMobile ? 24 : 12}>
//                       <Form.Item name="department" label="Department">
//                         <Select placeholder="Select programming language">
//                           <Option value="Java">Java</Option>
//                           <Option value="Python">Python</Option>
//                           <Option value="JavaScript">JavaScript</Option>
//                           <Option value="C++">C++</Option>
//                           <Option value="C#">C#</Option>
//                           <Option value="Ruby">Ruby</Option>
//                           <Option value="PHP">PHP</Option>
//                           <Option value="Swift">Swift</Option>
//                           <Option value="Go">Go</Option>
//                           <Option value="Kotlin">Kotlin</Option>
//                           <Option value="TypeScript">TypeScript</Option>
//                           <Option value="R">R</Option>
//                           <Option value="Other">Other</Option>
//                         </Select>
//                       </Form.Item>
//                     </Col>
//                   </Row>

//                   <Row gutter={16}>
//                     <Col
//                       span={isMobile ? 24 : 12}
//                       style={{ marginBottom: isMobile ? 16 : 0 }}
//                     >
//                       <Form.Item name="phone" label="Phone Number">
//                         <Input placeholder="Enter your phone number" />
//                       </Form.Item>
//                     </Col>
//                     <Col span={isMobile ? 24 : 12}>
//                       <Form.Item name="website" label="Website">
//                         <Input placeholder="Enter your website URL" />
//                       </Form.Item>
//                     </Col>
//                   </Row>

//                   <Form.Item name="bio" label="Bio">
//                     <Input.TextArea
//                       rows={4}
//                       placeholder="Tell us about yourself"
//                     />
//                   </Form.Item>

//                   <Form.Item>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       icon={<SaveOutlined />}
//                     >
//                       Save Profile
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Card>
//             ),
//           },
//           {
//             key: "notifications",
//             label: (
//               <span>
//                 <BellOutlined /> {!isMobile && "Notifications"}
//               </span>
//             ),
//             children: (
//               <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
//                 <Form
//                   form={notificationForm}
//                   layout="vertical"
//                   onFinish={handleNotificationSubmit}
//                   initialValues={{
//                     emailNotifications: true,
//                     commentNotifications: true,
//                     approvalNotifications: true,
//                     newsletterSubscription: false,
//                     studentActivityNotifications: true,
//                     assignmentNotifications: true,
//                     systemUpdates: true,
//                     marketingEmails: false,
//                   }}
//                 >
//                   <Title level={5}>Email Notifications</Title>
//                   <Form.Item name="emailNotifications" valuePropName="checked">
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Receive email notifications for important updates
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Video Comments</Title>
//                   <Form.Item
//                     name="commentNotifications"
//                     valuePropName="checked"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Get notified when someone comments on your videos
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Video Approvals</Title>
//                   <Form.Item
//                     name="approvalNotifications"
//                     valuePropName="checked"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Get notified when your videos are approved or rejected
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Student Activity</Title>
//                   <Form.Item
//                     name="studentActivityNotifications"
//                     valuePropName="checked"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Get notified about important student activities
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Assignment Updates</Title>
//                   <Form.Item
//                     name="assignmentNotifications"
//                     valuePropName="checked"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Get notified about assignment submissions and deadlines
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>System Updates</Title>
//                   <Form.Item name="systemUpdates" valuePropName="checked">
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Receive notifications about system updates and new features
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Newsletter</Title>
//                   <Form.Item
//                     name="newsletterSubscription"
//                     valuePropName="checked"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Receive our monthly newsletter with tips and updates
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Marketing Emails</Title>
//                   <Form.Item name="marketingEmails" valuePropName="checked">
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Receive promotional emails about related products and
//                     services
//                   </Text>

//                   <Form.Item style={{ marginTop: 24 }}>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       icon={<SaveOutlined />}
//                     >
//                       Save Notification Settings
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Card>
//             ),
//           },
//           {
//             key: "security",
//             label: (
//               <span>
//                 <LockOutlined /> {!isMobile && "Security"}
//               </span>
//             ),
//             children: (
//               <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
//                 <Form
//                   form={securityForm}
//                   layout="vertical"
//                   onFinish={handleSecuritySubmit}
//                 >
//                   <Title level={5}>Change Password</Title>
//                   <Form.Item
//                     name="currentPassword"
//                     label="Current Password"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please enter your current password",
//                       },
//                     ]}
//                   >
//                     <Input.Password
//                       placeholder="Enter current password"
//                       visibilityToggle={{
//                         visible: passwordVisible,
//                         onVisibleChange: setPasswordVisible,
//                       }}
//                     />
//                   </Form.Item>

//                   <Form.Item
//                     name="newPassword"
//                     label="New Password"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please enter your new password",
//                       },
//                       {
//                         min: 8,
//                         message: "Password must be at least 8 characters",
//                       },
//                       {
//                         pattern:
//                           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                         message:
//                           "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
//                       },
//                     ]}
//                   >
//                     <Input.Password
//                       placeholder="Enter new password"
//                       visibilityToggle={{
//                         visible: passwordVisible,
//                         onVisibleChange: setPasswordVisible,
//                       }}
//                     />
//                   </Form.Item>

//                   <Form.Item
//                     name="confirmPassword"
//                     label="Confirm New Password"
//                     dependencies={["newPassword"]}
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please confirm your new password",
//                       },
//                       ({ getFieldValue }) => ({
//                         validator(_, value) {
//                           if (
//                             !value ||
//                             getFieldValue("newPassword") === value
//                           ) {
//                             return Promise.resolve();
//                           }
//                           return Promise.reject(
//                             new Error("The two passwords do not match")
//                           );
//                         },
//                       }),
//                     ]}
//                   >
//                     <Input.Password
//                       placeholder="Confirm new password"
//                       visibilityToggle={{
//                         visible: passwordVisible,
//                         onVisibleChange: setPasswordVisible,
//                       }}
//                     />
//                   </Form.Item>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Two-Factor Authentication</Title>
//                   <Form.Item
//                     name="twoFactorAuth"
//                     valuePropName="checked"
//                     initialValue={false}
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Enable two-factor authentication for added security
//                   </Text>

//                   <div style={{ marginTop: 16 }}>
//                     <Button
//                       type="default"
//                       icon={<SecurityScanOutlined />}
//                       onClick={() =>
//                         messageApi.info(
//                           "Two-factor authentication setup wizard will be launched"
//                         )
//                       }
//                       disabled={!securityForm.getFieldValue("twoFactorAuth")}
//                     >
//                       Setup 2FA
//                     </Button>
//                   </div>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Login History</Title>
//                   <List
//                     size="small"
//                     bordered
//                     dataSource={[
//                       {
//                         device: "Windows PC",
//                         location: "New York, USA",
//                         time: "Today, 10:30 AM",
//                         current: true,
//                       },
//                       {
//                         device: "iPhone",
//                         location: "New York, USA",
//                         time: "Yesterday, 8:15 PM",
//                         current: false,
//                       },
//                       {
//                         device: "MacBook Pro",
//                         location: "Boston, USA",
//                         time: "Jun 20, 2023, 3:45 PM",
//                         current: false,
//                       },
//                     ]}
//                     renderItem={(item) => (
//                       <List.Item>
//                         <div>
//                           <div>
//                             <Text strong>{item.device}</Text>
//                             {item.current && (
//                               <Tag color="green" style={{ marginLeft: 8 }}>
//                                 Current
//                               </Tag>
//                             )}
//                           </div>
//                           <div>
//                             <Text type="secondary">
//                               {item.location} • {item.time}
//                             </Text>
//                           </div>
//                         </div>
//                       </List.Item>
//                     )}
//                   />

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Account Actions</Title>
//                   <Space direction="vertical" style={{ width: "100%" }}>
//                     <Button
//                       danger
//                       icon={<DeleteOutlined />}
//                       onClick={() => setDeleteAccountModalVisible(true)}
//                     >
//                       Delete Account
//                     </Button>
//                     <Button
//                       icon={<LogoutOutlined />}
//                       onClick={() => {
//                         Modal.confirm({
//                           title: "Logout from all devices?",
//                           content:
//                             "This will log you out from all devices except this one.",
//                           onOk: () =>
//                             messageApi.success(
//                               "Logged out from all other devices"
//                             ),
//                         });
//                       }}
//                     >
//                       Logout from all devices
//                     </Button>
//                   </Space>

//                   <Form.Item style={{ marginTop: 24 }}>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       icon={<SaveOutlined />}
//                     >
//                       Save Security Settings
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Card>
//             ),
//           },
//           {
//             key: "api",
//             label: (
//               <span>
//                 <ApiOutlined /> {!isMobile && "API"}
//               </span>
//             ),
//             children: (
//               <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
//                 <Form
//                   form={apiForm}
//                   layout="vertical"
//                   onFinish={handleApiSubmit}
//                   initialValues={{
//                     apiEnabled: true,
//                     webhookUrl: "https://example.com/webhook",
//                     allowedOrigins: "example.com,teacherapp.com",
//                   }}
//                 >
//                   <Title level={5}>API Access</Title>
//                   <Form.Item name="apiEnabled" valuePropName="checked">
//                     <Switch
//                       checkedChildren="Enabled"
//                       unCheckedChildren="Disabled"
//                     />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Enable API access for third-party integrations
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>API Key</Title>
//                   <Space direction="vertical" style={{ width: "100%" }}>
//                     <Input.Password
//                       value={apiKey}
//                       readOnly
//                       addonAfter={
//                         <Tooltip title="Copy API Key">
//                           <Button
//                             type="text"
//                             icon={<CopyOutlined />}
//                             onClick={() => {
//                               navigator.clipboard.writeText(apiKey);
//                               messageApi.success("API key copied to clipboard");
//                             }}
//                           />
//                         </Tooltip>
//                       }
//                     />
//                     <Space>
//                       <Button
//                         type="primary"
//                         onClick={() => setApiKeyModalVisible(true)}
//                       >
//                         Generate New Key
//                       </Button>
//                       <Button
//                         onClick={() =>
//                           messageApi.info(
//                             "API documentation will open in a new tab"
//                           )
//                         }
//                       >
//                         View Documentation
//                       </Button>
//                     </Space>
//                   </Space>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Webhook URL</Title>
//                   <Form.Item name="webhookUrl">
//                     <Input placeholder="Enter webhook URL" />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Receive real-time notifications via webhook
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>CORS Settings</Title>
//                   <Form.Item
//                     name="allowedOrigins"
//                     label="Allowed Origins"
//                     help="Comma-separated list of domains allowed to access the API"
//                   >
//                     <Input placeholder="example.com,teacherapp.com" />
//                   </Form.Item>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Connected Applications</Title>
//                   <List
//                     dataSource={connectedApps}
//                     renderItem={(app) => (
//                       <List.Item
//                         actions={[
//                           app.connected ? (
//                             <Button
//                               key="disconnect"
//                               danger
//                               onClick={() => handleDisconnectApp(app.id)}
//                             >
//                               Disconnect
//                             </Button>
//                           ) : (
//                             <Button
//                               key="connect"
//                               type="primary"
//                               onClick={() => handleConnectApp(app.id)}
//                             >
//                               Connect
//                             </Button>
//                           ),
//                         ]}
//                       >
//                         <List.Item.Meta
//                           title={app.name}
//                           description={
//                             app.connected ? (
//                               <Text type="success">
//                                 Connected • Last sync: {app.lastSync}
//                               </Text>
//                             ) : (
//                               <Text type="secondary">Not connected</Text>
//                             )
//                           }
//                         />
//                       </List.Item>
//                     )}
//                   />

//                   <Form.Item style={{ marginTop: 24 }}>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       icon={<SaveOutlined />}
//                     >
//                       Save API Settings
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Card>
//             ),
//           },
//           {
//             key: "display",
//             label: (
//               <span>
//                 <DesktopOutlined /> {!isMobile && "Display"}
//               </span>
//             ),
//             children: (
//               <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
//                 <Form
//                   form={displayForm}
//                   layout="vertical"
//                   onFinish={handleDisplaySubmit}
//                   initialValues={{
//                     darkMode: darkMode,
//                     fontScale: fontScale,
//                     videoQuality: videoQuality,
//                     autoplay: false,
//                     showCaptions: true,
//                   }}
//                 >
//                   <Title level={5}>Theme</Title>
//                   <Form.Item name="darkMode" valuePropName="checked">
//                     <Switch
//                       checkedChildren="Dark"
//                       unCheckedChildren="Light"
//                       onChange={setDarkMode}
//                     />
//                   </Form.Item>
//                   <Text type="secondary">
//                     Toggle between light and dark mode
//                   </Text>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Font Size</Title>
//                   <Form.Item name="fontScale">
//                     <Slider
//                       min={0.8}
//                       max={1.4}
//                       step={0.1}
//                       marks={{
//                         0.8: "Small",
//                         1: "Normal",
//                         1.2: "Large",
//                         1.4: "X-Large",
//                       }}
//                       onChange={setFontScale}
//                     />
//                   </Form.Item>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Video Playback</Title>
//                   <Form.Item name="videoQuality" label="Default Video Quality">
//                     <Radio.Group
//                       onChange={(e) => setVideoQuality(e.target.value)}
//                     >
//                       <Radio value="auto">Auto</Radio>
//                       <Radio value="low">Low (360p)</Radio>
//                       <Radio value="medium">Medium (720p)</Radio>
//                       <Radio value="high">High (1080p)</Radio>
//                     </Radio.Group>
//                   </Form.Item>

//                   <Form.Item
//                     name="autoplay"
//                     valuePropName="checked"
//                     label="Autoplay Videos"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>

//                   <Form.Item
//                     name="showCaptions"
//                     valuePropName="checked"
//                     label="Show Captions"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Accessibility</Title>
//                   <Form.Item
//                     name="highContrast"
//                     valuePropName="checked"
//                     label="High Contrast Mode"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>

//                   <Form.Item
//                     name="reducedMotion"
//                     valuePropName="checked"
//                     label="Reduced Motion"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>

//                   <Form.Item style={{ marginTop: 24 }}>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       icon={<SaveOutlined />}
//                     >
//                       Save Display Settings
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Card>
//             ),
//           },
//           {
//             key: "storage",
//             label: (
//               <span>
//                 <CloudOutlined /> {!isMobile && "Storage"}
//               </span>
//             ),
//             children: (
//               <Card bodyStyle={{ padding: isMobile ? 16 : 24 }}>
//                 <Form
//                   form={storageForm}
//                   layout="vertical"
//                   onFinish={handleStorageSubmit}
//                   initialValues={{
//                     storageProvider: "default",
//                     autoDeleteOldVideos: false,
//                     compressionLevel: "medium",
//                   }}
//                 >
//                   <div style={{ marginBottom: 24 }}>
//                     <Title level={5}>Storage Usage</Title>
//                     <Row gutter={[16, 16]}>
//                       <Col span={isMobile ? 24 : 12}>
//                         <Card>
//                           <Statistic
//                             title="Used Storage"
//                             value="45.8 GB"
//                             suffix="/ 100 GB"
//                           />
//                           <Progress percent={45.8} status="active" />
//                           <div style={{ marginTop: 8 }}>
//                             <Button
//                               type="link"
//                               onClick={() =>
//                                 messageApi.info("Upgrade options will be shown")
//                               }
//                             >
//                               Upgrade Storage
//                             </Button>
//                           </div>
//                         </Card>
//                       </Col>
//                       <Col span={isMobile ? 24 : 12}>
//                         <Card>
//                           <Statistic title="Files" value={256} />
//                           <div style={{ marginTop: 24 }}>
//                             <Text type="secondary">Videos: 128</Text>
//                             <br />
//                             <Text type="secondary">Documents: 85</Text>
//                             <br />
//                             <Text type="secondary">Other: 43</Text>
//                           </div>
//                         </Card>
//                       </Col>
//                     </Row>
//                   </div>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Storage Provider</Title>
//                   <Form.Item name="storageProvider">
//                     <Select>
//                       <Option value="default">
//                         Default (Teacher Portal Storage)
//                       </Option>
//                       <Option value="s3">Amazon S3</Option>
//                       <Option value="gcs">Google Cloud Storage</Option>
//                       <Option value="azure">Azure Blob Storage</Option>
//                     </Select>
//                   </Form.Item>

//                   <Collapse ghost>
//                     <Panel header="Configure External Storage" key="1">
//                       <Form.Item name="externalStorageKey" label="API Key">
//                         <Input.Password placeholder="Enter API key" />
//                       </Form.Item>
//                       <Form.Item
//                         name="externalStorageBucket"
//                         label="Bucket/Container Name"
//                       >
//                         <Input placeholder="Enter bucket name" />
//                       </Form.Item>
//                       <Form.Item name="externalStorageRegion" label="Region">
//                         <Input placeholder="Enter region" />
//                       </Form.Item>
//                     </Panel>
//                   </Collapse>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Title level={5}>Storage Management</Title>
//                   <Form.Item
//                     name="autoDeleteOldVideos"
//                     valuePropName="checked"
//                     label="Auto-delete Old Videos"
//                   >
//                     <Switch checkedChildren="On" unCheckedChildren="Off" />
//                   </Form.Item>

//                   <Form.Item
//                     name="retentionPeriod"
//                     label="Retention Period"
//                     dependencies={["autoDeleteOldVideos"]}
//                   >
//                     <Select
//                       disabled={
//                         !storageForm.getFieldValue("autoDeleteOldVideos")
//                       }
//                     >
//                       <Option value={30}>30 days</Option>
//                       <Option value={60}>60 days</Option>
//                       <Option value={90}>90 days</Option>
//                       <Option value={180}>6 months</Option>
//                       <Option value={365}>1 year</Option>
//                     </Select>
//                   </Form.Item>

//                   <Form.Item name="compressionLevel" label="Video Compression">
//                     <Select>
//                       <Option value="none">None (Original Quality)</Option>
//                       <Option value="low">Low Compression</Option>
//                       <Option value="medium">Medium Compression</Option>
//                       <Option value="high">High Compression</Option>
//                     </Select>
//                   </Form.Item>

//                   <Divider style={{ margin: "16px 0" }} />

//                   <Space>
//                     <Button
//                       icon={<DatabaseOutlined />}
//                       onClick={() =>
//                         messageApi.info(
//                           "Data export will be prepared and emailed to you"
//                         )
//                       }
//                     >
//                       Export All Data
//                     </Button>
//                     <Button
//                       danger
//                       icon={<DeleteOutlined />}
//                       onClick={() => {
//                         Modal.confirm({
//                           title: "Clear All Data",
//                           content:
//                             "This will delete all your videos and files. This action cannot be undone.",
//                           okText: "Delete All",
//                           okType: "danger",
//                           onOk: () =>
//                             messageApi.success(
//                               "All data has been scheduled for deletion"
//                             ),
//                         });
//                       }}
//                     >
//                       Clear All Data
//                     </Button>
//                   </Space>

//                   <Form.Item style={{ marginTop: 24 }}>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       icon={<SaveOutlined />}
//                     >
//                       Save Storage Settings
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Card>
//             ),
//           },
//         ]}
//       />

//       {/* Delete Account Modal */}
//       <Modal
//         title="Delete Account"
//         open={deleteAccountModalVisible}
//         onCancel={() => setDeleteAccountModalVisible(false)}
//         footer={[
//           <Button
//             key="cancel"
//             onClick={() => setDeleteAccountModalVisible(false)}
//           >
//             Cancel
//           </Button>,
//           <Button
//             key="delete"
//             danger
//             type="primary"
//             onClick={handleDeleteAccount}
//           >
//             Delete Account
//           </Button>,
//         ]}
//       >
//         <div>
//           <p>
//             Are you sure you want to delete your account? This action cannot be
//             undone and will result in:
//           </p>
//           <ul>
//             <li>Permanent deletion of all your videos and content</li>
//             <li>Loss of access to all courses and materials</li>
//             <li>Removal of all your personal information from our system</li>
//           </ul>
//           <p>To confirm, please type "DELETE" in the field below:</p>
//           <Input placeholder="Type DELETE to confirm" />
//         </div>
//       </Modal>

//       {/* API Key Modal */}
//       <Modal
//         title="Generate New API Key"
//         open={apiKeyModalVisible}
//         onCancel={() => setApiKeyModalVisible(false)}
//         footer={[
//           <Button key="cancel" onClick={() => setApiKeyModalVisible(false)}>
//             Cancel
//           </Button>,
//           <Button
//             key="generate"
//             type="primary"
//             onClick={() => {
//               generateNewApiKey();
//               setApiKeyModalVisible(false);
//             }}
//           >
//             Generate New Key
//           </Button>,
//         ]}
//       >
//         <div>
//           <p>
//             <strong>Warning:</strong> Generating a new API key will invalidate
//             your current key. Any applications or services using the current key
//             will stop working.
//           </p>
//           <p>Are you sure you want to generate a new API key?</p>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default SettingsPanel;
