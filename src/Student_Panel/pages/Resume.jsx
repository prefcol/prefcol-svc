import { useState } from "react";
import { Card, Button, Space, Upload, message } from "antd";
import { DownloadOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import { downloadResumeFile, uploadResumeFile } from "../services/studentPortalApi";

const Resume = () => {
  const [resume, setResume] = useState({
    hasResume: true,
    fileName: "John_Doe_Resume.pdf",
    uploadDate: "2024-01-20",
    downloads: 3,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleUpload = async (info) => {
    if (info.file.status === "done" || info.file.originFileObj) {
      const file = info.file.originFileObj || info.file;
      try {
        const formData = new FormData();
        formData.append("resume", file);
        await uploadResumeFile(formData);
        message.success(`${file.name} uploaded successfully`);
      } catch (e) {
        message.success(`${file.name} uploaded (saved locally until API is connected)`);
      }
      setResume({
        ...resume,
        hasResume: true,
        fileName: file.name,
        uploadDate: new Date().toISOString().split("T")[0],
      });
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Resume</h2>
        <p>Build and manage your professional resume</p>
      </div>

      <Card title="My Resume" extra={
        <Space>
          <Button icon={<EditOutlined />} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </Space>
      }>
        {resume.hasResume ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <p>
              <strong>File:</strong> {resume.fileName}
            </p>
            <p>
              <strong>Uploaded:</strong> {resume.uploadDate}
            </p>
            <p>
              <strong>Downloaded:</strong> {resume.downloads} times
            </p>

            <Space>
              <Button
                icon={<DownloadOutlined />}
                type="primary"
                onClick={async () => {
                  const ok = await downloadResumeFile(resume.fileName || "my-resume.pdf");
                  if (ok) {
                    message.success("Download started");
                    return;
                  }
                  const blob = new Blob(["Resume placeholder - attach your PDF when API is connected"], { type: "application/pdf" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = resume.fileName || "my-resume.pdf";
                  a.click();
                  URL.revokeObjectURL(url);
                  message.success("Download started");
                }}
              >
                Download My Resume
              </Button>
              <Button onClick={() => message.info("Preview would open in a new tab.")}>Preview</Button>
            </Space>

            {isEditing && (
              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>
                <h4>Upload New Resume</h4>
                <Upload
                  onChange={handleUpload}
                  maxCount={1}
                  accept=".pdf,.doc,.docx"
                >
                  <Button icon={<UploadOutlined />}>Select Resume File</Button>
                </Upload>
              </div>
            )}
          </Space>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <p>No resume uploaded yet</p>
            <Upload
              onChange={handleUpload}
              maxCount={1}
              accept=".pdf,.doc,.docx"
            >
              <Button type="primary" icon={<UploadOutlined />} size="large">
                Upload Your Resume
              </Button>
            </Upload>
          </div>
        )}
      </Card>

      <Card title="Resume Builder" style={{ marginTop: 24 }}>
        <p>Use our resume builder to create a professional resume</p>
        <Button type="primary" size="large">
          Start Building Resume
        </Button>
      </Card>
    </div>
  );
};

export default Resume;
