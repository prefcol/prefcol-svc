 // src/pages/RolesPermissions.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Layout,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Switch,
  Space,
  Tag,
  ConfigProvider,
  message,
  Typography
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// Custom theme
const customTheme = {
  token: {
    colorPrimary: "#FF7A00",
    colorBgContainer: "#ffffff",
    colorText: "#333333",
    borderRadius: 8,
  },
  components: {
    Button: {
      colorPrimary: "#FF7A00",
      colorPrimaryHover: "#e06700",
    },
    Table: {
      headerBg: "#fafafa",
      rowHoverBg: "#fff2e8",
    }
  }
};

// Default permissions structure
const PERMISSION_CATEGORIES = [
  {
    key: "user_management",
    name: "User Management",
    permissions: [
      { key: "create_user", name: "Create User" },
      { key: "update_user", name: "Update User" },
      { key: "delete_user", name: "Delete User" },
      { key: "manage_roles", name: "Manage Roles" }
    ]
  },
  {
    key: "course_content",
    name: "Course & Content",
    permissions: [
      { key: "upload_videos", name: "Upload Videos" },
      { key: "manage_courses", name: "Manage Courses" },
      { key: "restrict_access", name: "Restrict Access" },
      { key: "video_organization", name: "Video Organization" }
    ]
  },
  {
    key: "analytics",
    name: "Analytics",
    permissions: [
      { key: "student_performance", name: "Student Performance" },
      { key: "teacher_effectiveness", name: "Teacher Effectiveness" },
      { key: "platform_usage", name: "Platform Usage" }
    ]
  },
  {
    key: "system_settings",
    name: "System Settings",
    permissions: [
      { key: "payment_gateway", name: "Payment Gateway" },
      { key: "notification_templates", name: "Notification Templates" },
      { key: "platform_preferences", name: "Platform Preferences" }
    ]
  },
  {
    key: "audit_logs",
    name: "Audit Logs",
    permissions: [
      { key: "view_logs", name: "View Logs" },
      { key: "accountability", name: "Accountability" }
    ]
  },
  {
    key: "support",
    name: "Support",
    permissions: [
      { key: "manage_requests", name: "Manage Requests" }
    ]
  }
];

// localStorage helpers
const getRolesFromStorage = () => {
  try {
    const saved = localStorage.getItem("roles");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to parse roles", e);
    return [];
  }
};

const saveRolesToStorage = (roles) => {
  try {
    localStorage.setItem("roles", JSON.stringify(roles));
  } catch (e) {
    console.error("Failed to save roles", e);
    message.error("Failed to save data");
  }
};

const getDefaultRoles = () => [
  {
    id: "1",
    name: "Super Admin",
    description: "Full access to all features",
    permissions: PERMISSION_CATEGORIES.flatMap(cat => 
      cat.permissions.map(p => p.key)
    ),
    isSystem: true
  },
  {
    id: "2",
    name: "Content Manager",
    description: "Manages courses and videos",
    permissions: [
      "upload_videos",
      "manage_courses",
      "video_organization"
    ],
    isSystem: false
  },
  {
    id: "3",
    name: "Support Agent",
    description: "Handles user support requests",
    permissions: ["manage_requests"],
    isSystem: false
  }
];

const RolesPermissions = () => {
  const [roles, setRoles] = useState(() => {
    const saved = getRolesFromStorage();
    return saved.length > 0 ? saved : getDefaultRoles();
  });
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Persist to localStorage
  useEffect(() => {
    saveRolesToStorage(roles);
  }, [roles]);

  // Handle create/edit
  const handleSave = (values) => {
    const allPermissions = values.permissions || [];
    
    const roleData = {
      id: isEditing ? editingRole.id : String(Date.now()),
      name: values.name,
      description: values.description,
      permissions: allPermissions,
      isSystem: isEditing ? editingRole.isSystem : false
    };

    if (isEditing) {
      setRoles(roles.map(r => r.id === editingRole.id ? roleData : r));
      message.success("Role updated successfully!");
    } else {
      setRoles([...roles, roleData]);
      message.success("Role created successfully!");
    }

    setIsModalVisible(false);
    form.resetFields();
  };

  // Handle delete
  const handleDelete = (role) => {
    if (role.isSystem) {
      message.error("Cannot delete system roles!");
      return;
    }
    
    setRoles(roles.filter(r => r.id !== role.id));
    message.success(`Role "${role.name}" deleted successfully!`);
  };

  // Open modal for create
  const showCreateModal = () => {
    setIsEditing(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  // Open modal for edit
  const showEditModal = (role) => {
    setIsEditing(true);
    setEditingRole(role);
    form.setFieldsValue({
      name: role.name,
      description: role.description,
      permissions: role.permissions
    });
    setIsModalVisible(true);
  };

  // Columns for table
  const columns = [
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Text strong>{text}</Text>
          {record.isSystem && (
            <Tag color="gold">System</Tag>
          )}
        </Space>
      )
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 300
    },
    {
      title: "Permissions",
      key: "permissions",
      render: (_, record) => (
        <Text type="secondary" style={{ fontSize: "12px" }}>
          {record.permissions.length} permissions granted
        </Text>
      )
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => showEditModal(record)}
            style={{ color: "#FF7A00" }}
            disabled={record.isSystem}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
            disabled={record.isSystem}
          />
        </Space>
      )
    }
  ];

  return (
    <ConfigProvider theme={customTheme}>
      <Content style={{ margin: "24px 16px", padding: 24, minHeight: "100vh" }}>
        <Card
          title="Roles & Permissions"
          extra={
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={showCreateModal}
            >
              Create Role
            </Button>
          }
          bordered={false}
          headStyle={{ backgroundColor: "#FF7A00", color: "white", fontSize: "18px" }}
        >
          <Table
            dataSource={roles}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>

        {/* Role Modal */}
        <Modal
          title={isEditing ? "Edit Role" : "Create New Role"}
          open={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            form.resetFields();
          }}
          footer={null}
          width={800}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSave}
            initialValues={{
              permissions: []
            }}
          >
            <Form.Item
              name="name"
              label="Role Name"
              rules={[{ required: true, message: "Please enter role name!" }]}
            >
              <Input placeholder="e.g., Content Manager" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter description!" }]}
            >
              <Input.TextArea 
                placeholder="Brief description of this role's purpose" 
                rows={2} 
              />
            </Form.Item>

            <Form.Item
              name="permissions"
              label="Permissions"
              rules={[{ required: true, message: "Please select at least one permission!" }]}
            >
              <Select
                mode="multiple"
                placeholder="Select permissions"
                style={{ width: "100%" }}
                optionLabelProp="label"
              >
                {PERMISSION_CATEGORIES.map(category => (
                  <Select.OptGroup key={category.key} label={category.name}>
                    {category.permissions.map(perm => (
                      <Select.Option 
                        key={perm.key} 
                        value={perm.key}
                        label={perm.name}
                      >
                        <Space>
                          <CheckCircleOutlined style={{ color: "#52c41a" }} />
                          {perm.name}
                        </Space>
                      </Select.Option>
                    ))}
                  </Select.OptGroup>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  {isEditing ? "Update Role" : "Create Role"}
                </Button>
                <Button 
                  onClick={() => {
                    setIsModalVisible(false);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </ConfigProvider>
  );
};

export default RolesPermissions;