"use client"

import { useState, useEffect } from "react"
import {
  Card,
  Typography,
  Tabs,
  Form,
  Button,
  Switch,
  Select,
  Radio,
  Divider,
  List,
  message,
  Skeleton,
  Modal,
  Tag,
} from "antd"
import { BellOutlined, LockOutlined, EyeOutlined, DeleteOutlined, CreditCardOutlined } from "@ant-design/icons"
import { useAuth } from "../../Contexts/AuthContext"
import { useTheme } from "../contexts/ThemeContext"

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
const { Option } = Select

const Settings = ({ windowWidth }) => {
  const { user } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [settingsData, setSettingsData] = useState(null)
  const [activeTab, setActiveTab] = useState("1")
  const [form] = Form.useForm()
  const isMobile = windowWidth < 768

  useEffect(() => {
    const fetchSettingsData = async () => {
      setLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock settings data
        const mockData = {
          notifications: {
            emailNotifications: true,
            courseUpdates: true,
            newCourses: true,
            promotions: false,
            reminders: true,
            newsletter: true,
          },
          appearance: {
            theme: theme,
            fontSize: "medium",
            language: "en",
          },
          privacy: {
            profileVisibility: "public",
            showCourseProgress: true,
            showAchievements: true,
            allowDataCollection: true,
          },
          paymentMethods: [
            {
              id: 1,
              type: "credit_card",
              name: "Visa ending in 4242",
              expiryDate: "12/2025",
              isDefault: true,
            },
            {
              id: 2,
              type: "paypal",
              name: "PayPal - john.doe@example.com",
              isDefault: false,
            },
          ],
        }

        setSettingsData(mockData)
        form.setFieldsValue({
          emailNotifications: mockData.notifications.emailNotifications,
          courseUpdates: mockData.notifications.courseUpdates,
          newCourses: mockData.notifications.newCourses,
          promotions: mockData.notifications.promotions,
          reminders: mockData.notifications.reminders,
          newsletter: mockData.notifications.newsletter,
          theme: mockData.appearance.theme,
          fontSize: mockData.appearance.fontSize,
          language: mockData.appearance.language,
          profileVisibility: mockData.privacy.profileVisibility,
          showCourseProgress: mockData.privacy.showCourseProgress,
          showAchievements: mockData.privacy.showAchievements,
          allowDataCollection: mockData.privacy.allowDataCollection,
        })

        setLoading(false)
      } catch (error) {
        console.error("Error fetching settings data:", error)
        message.error("Failed to load settings data")
        setLoading(false)
      }
    }

    fetchSettingsData()
  }, [theme, form])

  const handleUpdateNotifications = async (values) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update settings data
      const updatedSettingsData = {
        ...settingsData,
        notifications: {
          emailNotifications: values.emailNotifications,
          courseUpdates: values.courseUpdates,
          newCourses: values.newCourses,
          promotions: values.promotions,
          reminders: values.reminders,
          newsletter: values.newsletter,
        },
      }

      setSettingsData(updatedSettingsData)
      message.success("Notification settings updated successfully!")
    } catch (error) {
      console.error("Error updating notification settings:", error)
      message.error("Failed to update notification settings")
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateAppearance = async (values) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update settings data
      const updatedSettingsData = {
        ...settingsData,
        appearance: {
          theme: values.theme,
          fontSize: values.fontSize,
          language: values.language,
        },
      }

      setSettingsData(updatedSettingsData)

      // Toggle theme if changed
      if (values.theme !== theme) {
        toggleTheme()
      }

      message.success("Appearance settings updated successfully!")
    } catch (error) {
      console.error("Error updating appearance settings:", error)
      message.error("Failed to update appearance settings")
    } finally {
      setLoading(false)
    }
  }

  const handleUpdatePrivacy = async (values) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update settings data
      const updatedSettingsData = {
        ...settingsData,
        privacy: {
          profileVisibility: values.profileVisibility,
          showCourseProgress: values.showCourseProgress,
          showAchievements: values.showAchievements,
          allowDataCollection: values.allowDataCollection,
        },
      }

      setSettingsData(updatedSettingsData)
      message.success("Privacy settings updated successfully!")
    } catch (error) {
      console.error("Error updating privacy settings:", error)
      message.error("Failed to update privacy settings")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAccount = () => {
    // Show confirmation modal
    Modal.confirm({
      title: "Delete Account",
      content: "Are you sure you want to delete your account? This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        setLoading(true)
        try {
          // In a real app, this would be an API call
          await new Promise((resolve) => setTimeout(resolve, 1000))
          message.success("Account deleted successfully!")
          // Redirect to login page
          window.location.href = "/Student-portal/login"
        } catch (error) {
          console.error("Error deleting account:", error)
          message.error("Failed to delete account")
        } finally {
          setLoading(false)
        }
      },
    })
  }

  const handleSetDefaultPaymentMethod = (id) => {
    setSettingsData({
      ...settingsData,
      paymentMethods: settingsData.paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    })
    message.success("Default payment method updated")
  }

  const handleRemovePaymentMethod = (id) => {
    setSettingsData({
      ...settingsData,
      paymentMethods: settingsData.paymentMethods.filter((method) => method.id !== id),
    })
    message.success("Payment method removed")
  }

  if (loading && !settingsData) {
    return (
      <Card style={{ margin: "24px 0" }}>
        <Skeleton paragraph={{ rows: 6 }} active />
      </Card>
    )
  }

  return (
    <div className="settings-container" style={{ padding: "24px" }}>
      <Card bordered={false}>
        <Title level={4}>Account Settings</Title>
        <Paragraph type="secondary">Manage your account settings and preferences</Paragraph>

        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span>
                <BellOutlined />
                Notifications
              </span>
            }
            key="1"
          >
            <Form form={form} layout="vertical" onFinish={handleUpdateNotifications}>
              <Title level={5}>Email Notifications</Title>
              <Paragraph type="secondary">Manage which emails you receive from Prefcol Edutech Solutions</Paragraph>

              <Form.Item name="emailNotifications" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Enable email notifications</Text>
              </Form.Item>

              <Divider />

              <Form.Item name="courseUpdates" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Course updates and announcements</Text>
              </Form.Item>

              <Form.Item name="newCourses" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>New course recommendations</Text>
              </Form.Item>

              <Form.Item name="promotions" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Promotions and discounts</Text>
              </Form.Item>

              <Form.Item name="reminders" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Learning reminders</Text>
              </Form.Item>

              <Form.Item name="newsletter" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Weekly newsletter</Text>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane
            tab={
              <span>
                <EyeOutlined />
                Appearance
              </span>
            }
            key="2"
          >
            <Form form={form} layout="vertical" onFinish={handleUpdateAppearance}>
              <Title level={5}>Display Settings</Title>
              <Paragraph type="secondary">Customize how Prefcol Edutech Solutions looks for you</Paragraph>

              <Form.Item name="theme" label="Theme">
                <Radio.Group>
                  <Radio value="light">Light</Radio>
                  <Radio value="dark">Dark</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="fontSize" label="Font Size">
                <Select>
                  <Option value="small">Small</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="large">Large</Option>
                </Select>
              </Form.Item>

              <Form.Item name="language" label="Language">
                <Select>
                  <Option value="en">English</Option>
                  <Option value="es">Spanish</Option>
                  <Option value="fr">French</Option>
                  <Option value="de">German</Option>
                  <Option value="zh">Chinese</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane
            tab={
              <span>
                <LockOutlined />
                Privacy
              </span>
            }
            key="3"
          >
            <Form form={form} layout="vertical" onFinish={handleUpdatePrivacy}>
              <Title level={5}>Privacy Settings</Title>
              <Paragraph type="secondary">Control your privacy and data settings</Paragraph>

              <Form.Item name="profileVisibility" label="Profile Visibility">
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                  <Radio value="friends">Friends Only</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="showCourseProgress" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Show my course progress to others</Text>
              </Form.Item>

              <Form.Item name="showAchievements" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Show my achievements to others</Text>
              </Form.Item>

              <Divider />

              <Title level={5}>Data Settings</Title>

              <Form.Item name="allowDataCollection" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
                <Text style={{ marginLeft: 8 }}>Allow data collection to improve your experience</Text>
              </Form.Item>

              <Paragraph type="secondary">
                We collect data to personalize your learning experience and improve our platform. You can opt out at any
                time, but this may limit some personalization features.
              </Paragraph>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Save Changes
                </Button>
              </Form.Item>
            </Form>

            <Divider />

            <Title level={5}>Account Actions</Title>
            <Paragraph type="secondary">Permanent actions for your account</Paragraph>

            <Button danger icon={<DeleteOutlined />} onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          </TabPane>

          <TabPane
            tab={
              <span>
                <CreditCardOutlined />
                Payment Methods
              </span>
            }
            key="4"
          >
            <Title level={5}>Your Payment Methods</Title>
            <Paragraph type="secondary">Manage your payment methods for course purchases</Paragraph>

            <List
              itemLayout="horizontal"
              dataSource={settingsData?.paymentMethods}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    !item.isDefault && (
                      <Button type="link" onClick={() => handleSetDefaultPaymentMethod(item.id)}>
                        Set as Default
                      </Button>
                    ),
                    <Button type="link" danger onClick={() => handleRemovePaymentMethod(item.id)}>
                      Remove
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      item.type === "credit_card" ? (
                        <CreditCardOutlined style={{ fontSize: 24 }} />
                      ) : (
                        <img src="/placeholder.svg?height=24&width=24" alt="PayPal" style={{ width: 24, height: 24 }} />
                      )
                    }
                    title={
                      <div>
                        {item.name}
                        {item.isDefault && (
                          <Tag color="blue" style={{ marginLeft: 8 }}>
                            Default
                          </Tag>
                        )}
                      </div>
                    }
                    description={item.type === "credit_card" ? `Expires: ${item.expiryDate}` : "PayPal Account"}
                  />
                </List.Item>
              )}
            />

            <Divider />

            <Button type="primary" icon={<CreditCardOutlined />}>
              Add Payment Method
            </Button>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
}

export default Settings

