
import { Form, Input, Select, Button, Space, Upload, message, Row, Col } from "antd"
import { UploadOutlined } from "@ant-design/icons"

const { Option } = Select

const VideoDetailsForm = ({ video, onSubmit, onCancel, isMobile }) => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const uploadProps = {
    name: "thumbnail",
    action: "https://api.example.com/upload",
    onChange(info) {
      if (info.file.status === "done") {
        messageApi.success(`${info.file.name} file uploaded successfully`)
        form.setFieldsValue({ thumbnailUrl: info.file.response.url })
      } else if (info.file.status === "error") {
        messageApi.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        initialValues={
          video
            ? {
                title: video.title,
                description: video.description,
                category: video.category,
                tags: video.tags,
                visibility: video.visibility,
              }
            : {
                visibility: "Private",
                category: "Other",
              }
        }
      >
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

        {!video && (
          <Form.Item name="thumbnailUrl" label="Thumbnail" extra="Upload a custom thumbnail image">
            <Upload {...uploadProps} maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
            </Upload>
          </Form.Item>
        )}

        <Form.Item>
          <Space style={{ width: "100%", justifyContent: "flex-end" }}>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              {video ? "Save Changes" : "Create Video"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default VideoDetailsForm

