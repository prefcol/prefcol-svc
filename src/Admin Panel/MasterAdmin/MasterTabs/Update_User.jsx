// // import React from 'react'

// // const Update_User = () => {
// //   return (
// //     <div>Update_User</div>
// //   )
// // }

// // export default Update_User

// // src/pages/UpdateTeacher.jsx (adjust path as needed)
// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Form,
//   Input,
//   Select,
//   Button,
//   Card,
//   Avatar,
//   Space,
//   InputNumber,
//   ConfigProvider,
//   message
// } from "antd";
// import {
//   EditOutlined,
//   EyeOutlined,
//   EyeInvisibleOutlined,
//   LeftOutlined
// } from "@ant-design/icons";
// import { useNavigate, useParams } from "react-router-dom";

// const { Content } = Layout;
// const { Option } = Select;

// // Custom theme
// const customTheme = {
//   token: {
//     colorPrimary: "#FF7A00",
//     colorBgContainer: "#ffffff",
//     colorText: "#333333",
//     colorTextSecondary: "#666666",
//     colorBorder: "#e0e0e0",
//     borderRadius: 8,
//   },
//   components: {
//     Button: {
//       colorPrimary: "#FF7A00",
//       colorPrimaryHover: "#e06700",
//       colorPrimaryActive: "#c05500",
//     }
//   }
// };

// // Mock API - replace with real API call
// const fetchTeacherById = (id) => {
//   // Simulate API delay
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const mockTeachers = [
//         {
//           id: "1",
//           name: "Karthiga",
//           email: "karthiga@example.com",
//           subject: "Computer Science",
//           phone: "7894561230",
//           username: "karthiga",
//           status: "active",
//         },
//         {
//           id: "2",
//           name: "Radhika",
//           email: "radhika@example.com",
//           subject: "Geography",
//           phone: "4567890123",
//           username: "radhika",
//           status: "active",
//         },
//         {
//           id: "3",
//           name: "Demo",
//           email: "demo@example.com",
//           subject: "Geography",
//           phone: "4567890123",
//           username: "demo",
//           status: "inactive",
//         }
//       ];
//       const teacher = mockTeachers.find(t => t.id === id);
//       resolve(teacher || null);
//     }, 400);
//   });
// };

// // Mock API - replace with real update API
// const updateTeacherApi = (id, data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Updating teacher", id, data);
//       resolve(true);
//     }, 600);
//   });
// };

// const SUBJECTS = [
//   "Software Development",
//   "Web Development",
//   "Data Science",
//   "Cybersecurity",
//   "Cloud Computing",
//   "DevOps",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Blockchain Technology",
//   "Computer Networking",
//   "Database Management",
//   "Mathematics",
//   "Science",
//   "English",
//   "History",
//   "Geography",
//   "Physical Education",
//   "Art",
//   "Music"
// ];

// const UpdateTeacher = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [teacher, setTeacher] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get teacher ID from URL: /update/:id

//   // Fetch teacher data on mount
//   useEffect(() => {
//     const loadTeacher = async () => {
//       if (!id) {
//         message.error("Invalid teacher ID");
//         navigate("/master-admin/user-management/update");
//         return;
//       }

//       setLoading(true);
//       try {
//         const data = await fetchTeacherById(id);
//         if (data) {
//           setTeacher(data);
//           form.setFieldsValue({
//             ...data,
//             phone: data.phone ? Number(data.phone) : null,
//           });
//         } else {
//           message.error("Teacher not found");
//           navigate("/master-admin/user-management/update");
//         }
//       } catch (error) {
//         console.error("Failed to load teacher:", error);
//         message.error("Failed to load teacher data");
//         navigate("/master-admin/user-management/update");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTeacher();
//   }, [id, form, navigate]);

//   const handleUpdate = async (values) => {
//     const { password, confirmPassword, ...updateData } = values;

//     // Prepare payload
//     const payload = {
//       ...updateData,
//       phone: updateData.phone ? String(updateData.phone) : teacher.phone,
//     };

//     // Only include password if provided
//     if (password && password.trim() !== "") {
//       payload.password = password;
//     }

//     setLoading(true);
//     try {
//       await updateTeacherApi(id, payload);
//       message.success("Teacher updated successfully!");
//       navigate("/master-admin/user-management/update"); // Go back to list
//     } catch (error) {
//       console.error("Update failed:", error);
//       message.error("Failed to update teacher");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     navigate("/master-admin/user-management/update");
//   };

//   return (
//     <ConfigProvider theme={customTheme}>
//       <Content style={{ margin: "24px 16px", padding: 24, minHeight: "100vh" }}>
//         <Card
//           title={
//             <Space>
//               <Button 
//                 type="text" 
//                 icon={<LeftOutlined />} 
//                 onClick={handleCancel}
//                 style={{ marginLeft: -12 }}
//               />
//               Update Teacher
//             </Space>
//           }
//           bordered={false}
//           headStyle={{ backgroundColor: "#FF7A00", color: "white", fontSize: "18px" }}
//         >
//           {teacher ? (
//             <Form
//               form={form}
//               layout="vertical"
//               onFinish={handleUpdate}
//               initialValues={{
//                 status: "active",
//                 ...teacher,
//                 phone: teacher.phone ? Number(teacher.phone) : null,
//               }}
//             >
//               <h3 style={{ marginBottom: 16 }}>Edit Teacher Details</h3>
              
//               <Form.Item
//                 name="name"
//                 label="Full Name"
//                 rules={[{ required: true, message: "Please enter name!" }]}
//               >
//                 <Input placeholder="Enter teacher's full name" />
//               </Form.Item>

//               <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[
//                   { required: true, message: "Please enter email!" },
//                   { type: "email", message: "Please enter valid email!" }
//                 ]}
//               >
//                 <Input placeholder="Enter email address" />
//               </Form.Item>

//               <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//                 <Form.Item
//                   name="subject"
//                   label="Subject"
//                   style={{ flex: 1, minWidth: 200 }}
//                 >
//                   <Select placeholder="Select subject">
//                     {SUBJECTS.map(subject => (
//                       <Option key={subject} value={subject}>{subject}</Option>
//                     ))}
//                   </Select>
//                 </Form.Item>

//                 <Form.Item
//                   name="phone"
//                   label="Phone Number"
//                   style={{ flex: 1, minWidth: 200 }}
//                 >
//                   <InputNumber
//                     style={{ width: "100%" }}
//                     addonBefore="+91"
//                     placeholder="Phone number"
//                   />
//                 </Form.Item>
//               </div>

//               <h4 style={{ marginTop: 24, marginBottom: 16 }}>Login Credentials</h4>

//               <Form.Item
//                 name="username"
//                 label="Username"
//                 rules={[{ required: true, message: "Please enter username!" }]}
//               >
//                 <Input placeholder="Username" />
//               </Form.Item>

//               <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//                 <Form.Item
//                   name="password"
//                   label="New Password (Optional)"
//                   style={{ flex: 1, minWidth: 200 }}
//                   rules={[{ min: 6, message: "Password must be at least 6 characters" }]}
//                 >
//                   <Input.Password
//                     placeholder="Leave blank to keep current password"
//                     iconRender={(visible) =>
//                       visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
//                     }
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   name="confirmPassword"
//                   label="Confirm New Password"
//                   style={{ flex: 1, minWidth: 200 }}
//                   dependencies={['password']}
//                   rules={[
//                     ({ getFieldValue }) => ({
//                       validator(_, value) {
//                         if (!value || getFieldValue('password') === value) {
//                           return Promise.resolve();
//                         }
//                         return Promise.reject(new Error('Passwords do not match!'));
//                       },
//                     }),
//                   ]}
//                 >
//                   <Input.Password
//                     placeholder="Confirm password"
//                     iconRender={(visible) =>
//                       visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
//                     }
//                   />
//                 </Form.Item>
//               </div>

//               <Form.Item name="status" label="Status">
//                 <Select>
//                   <Option value="active">Active</Option>
//                   <Option value="inactive">Inactive</Option>
//                   <Option value="pending">Pending</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item>
//                 <Space>
//                   <Button 
//                     type="primary" 
//                     htmlType="submit" 
//                     icon={<EditOutlined />} 
//                     loading={loading}
//                   >
//                     Update Teacher
//                   </Button>
//                   <Button onClick={handleCancel} disabled={loading}>
//                     Cancel
//                   </Button>
//                 </Space>
//               </Form.Item>
//             </Form>
//           ) : (
//             <div style={{ textAlign: "center", padding: "40px 0" }}>
//               {loading ? (
//                 <p>Loading teacher data...</p>
//               ) : (
//                 <p>Teacher not found.</p>
//               )}
//             </div>
//           )}
//         </Card>
//       </Content>
//     </ConfigProvider>
//   );
// };

// export default UpdateTeacher;

// src/pages/UpdateTeacher.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  Button,
  Card,
  Avatar,
  Space,
  InputNumber,
  ConfigProvider,
  message
} from "antd";
import {
  EditOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  LeftOutlined
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

// Custom theme
const customTheme = {
  token: {
    colorPrimary: "#FF7A00",
    colorBgContainer: "#ffffff",
    colorText: "#333333",
    colorTextSecondary: "#666666",
    colorBorder: "#e0e0e0",
    borderRadius: 8,
  },
  components: {
    Button: {
      colorPrimary: "#FF7A00",
      colorPrimaryHover: "#e06700",
      colorPrimaryActive: "#c05500",
    }
  }
};

// Mock API - uses STRING IDs to match URL params
const fetchTeacherById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockTeachers = [
        {
          id: "1",
          name: "Karthiga",
          email: "karthiga@example.com",
          subject: "Computer Science",
          phone: "7894561230",
          username: "karthiga",
          status: "active",
        },
        {
          id: "2",
          name: "Radhika",
          email: "radhika@example.com",
          subject: "Geography",
          phone: "4567890123",
          username: "radhika",
          status: "active",
        },
        {
          id: "3",
          name: "Demo",
          email: "demo@example.com",
          subject: "Geography",
          phone: "4567890123",
          username: "demo",
          status: "inactive",
        }
      ];
      const teacher = mockTeachers.find(t => t.id === id);
      resolve(teacher || null);
    }, 400);
  });
};

// Mock API - replace with real update API later
const updateTeacherApi = (id, data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Updating teacher", id, data);
      resolve(true);
    }, 600);
  });
};

const SUBJECTS = [
  "Software Development",
  "Web Development",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Artificial Intelligence",
  "Machine Learning",
  "Blockchain Technology",
  "Computer Networking",
  "Database Management",
  "Mathematics",
  "Science",
  "English",
  "History",
  "Geography",
  "Physical Education",
  "Art",
  "Music"
];

const UpdateTeacher = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [teacher, setTeacher] = useState(null);
  
  const navigate = useNavigate();
  const { id } = useParams(); // URL param is always a string

  // Fetch teacher data on mount
  useEffect(() => {
    const loadTeacher = async () => {
      if (!id) {
        message.error("Invalid teacher ID");
        navigate("/master-admin/user-management/update");
        return;
      }

      setLoading(true);
      try {
        const data = await fetchTeacherById(id);
        if (data) {
          setTeacher(data);
          form.setFieldsValue({
            ...data,
            phone: data.phone ? Number(data.phone) : null,
          });
        } else {
          message.error("Teacher not found");
          navigate("/master-admin/user-management/update");
        }
      } catch (error) {
        console.error("Failed to load teacher:", error);
        message.error("Failed to load teacher data");
        navigate("/master-admin/user-management/update");
      } finally {
        setLoading(false);
      }
    };

    loadTeacher();
  }, [id, form, navigate]);

  const handleUpdate = async (values) => {
    const { password, confirmPassword, ...updateData } = values;

    // Prepare payload
    const payload = {
      ...updateData,
      phone: updateData.phone ? String(updateData.phone) : teacher.phone,
    };

    // Only include password if provided
    if (password && password.trim() !== "") {
      payload.password = password;
    }

    setLoading(true);
    try {
      await updateTeacherApi(id, payload);
      message.success("Teacher updated successfully!");
      navigate("/master-admin/user-management/update"); // Go back to list
    } catch (error) {
      console.error("Update failed:", error);
      message.error("Failed to update teacher");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/master-admin/user-management/update");
  };

  return (
    <ConfigProvider theme={customTheme}>
      <Content style={{ margin: "24px 16px", padding: 24, minHeight: "100vh" }}>
        <Card
          title={
            <Space size="middle">
              <Button 
                type="text" 
                icon={<LeftOutlined />} 
                onClick={handleCancel}
                style={{ 
                  marginLeft: -12,
                  color: "#FF7A00",
                  fontWeight: "bold"
                }}
              >
                Back
              </Button>
              Update Teacher
            </Space>
          }
          bordered={false}
          headStyle={{ 
            backgroundColor: "#FF7A00", 
            color: "white", 
            fontSize: "18px",
            display: "flex",
            alignItems: "center"
          }}
        >
          {teacher ? (
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdate}
            >
              <h3 style={{ marginBottom: 16 }}>Edit Teacher Details</h3>
              
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter name!" }]}
              >
                <Input placeholder="Enter teacher's full name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter email!" },
                  { type: "email", message: "Please enter valid email!" }
                ]}
              >
                <Input placeholder="Enter email address" />
              </Form.Item>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Form.Item
                  name="subject"
                  label="Subject"
                  style={{ flex: 1, minWidth: 200 }}
                >
                  <Select placeholder="Select subject">
                    {SUBJECTS.map(subject => (
                      <Option key={subject} value={subject}>{subject}</Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  style={{ flex: 1, minWidth: 200 }}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    addonBefore="+91"
                    placeholder="Phone number"
                    min={0}
                  />
                </Form.Item>
              </div>

              <h4 style={{ marginTop: 24, marginBottom: 16 }}>Login Credentials</h4>

              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: "Please enter username!" }]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Form.Item
                  name="password"
                  label="New Password (Optional)"
                  style={{ flex: 1, minWidth: 200 }}
                  rules={[{ min: 6, message: "Password must be at least 6 characters" }]}
                >
                  <Input.Password
                    placeholder="Leave blank to keep current password"
                    iconRender={(visible) =>
                      visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="Confirm New Password"
                  style={{ flex: 1, minWidth: 200 }}
                  dependencies={['password']}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm password"
                    iconRender={(visible) =>
                      visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </div>

              <Form.Item 
                name="status" 
                label="Status"
                initialValue="active"
              >
                <Select>
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                  <Option value="pending">Pending</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Space size="middle">
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    icon={<EditOutlined />} 
                    loading={loading}
                    size="large"
                  >
                    Update Teacher
                  </Button>
                  <Button 
                    onClick={handleCancel} 
                    disabled={loading}
                    size="large"
                  >
                    Cancel
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          ) : (
            <div style={{ 
              textAlign: "center", 
              padding: "40px 0",
              color: "#666"
            }}>
              {loading ? (
                <p>Loading teacher data...</p>
              ) : (
                <p>Teacher not found. Please check the ID and try again.</p>
              )}
            </div>
          )}
        </Card>
      </Content>
    </ConfigProvider>
  );
};

export default UpdateTeacher;