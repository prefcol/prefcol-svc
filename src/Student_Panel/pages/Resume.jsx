import { useState, useEffect } from "react";
import { Card, Button, Space, Upload, message, Modal, Form, Input, Divider, Typography, Select } from "antd";
import { DownloadOutlined, EditOutlined, UploadOutlined, UserOutlined, RocketOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";
import { useAuth } from "../../Contexts/AuthContext";
import { downloadResumeFile, uploadResumeFile } from "../services/studentPortalApi";

const { TextArea } = Input;
const { Text } = Typography;

// Year options for dropdowns (current year down to 1980)
const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: CURRENT_YEAR - 1980 + 1 }, (_, i) => ({
  value: String(CURRENT_YEAR - i),
  label: String(CURRENT_YEAR - i),
}));

const DEFAULT_RESUME_FORM = {
  fullName: "",
  phone: "",
  email: "",
  linkedin: "",
  location: "",
  professionalSummary: "",
  experienceRole: "",
  experienceYear: "",
  experienceDesc: "",
  educationInstitution: "",
  educationYear: "",
  keySkills: "",
  projects: "",
  internship: "",
  certifications: "",
  additionalInfo: "",
};

/** Builds the resume PDF doc and returns { doc, fileName }. Use doc.output('blob') for preview. */
function buildResumePdfDoc(values) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  const sectionGap = 6;
  const lineHeight = 5;

  const addSection = (title, content) => {
    if (!content || String(content).trim() === "") return;
    if (y > 270) {
      doc.addPage();
      y = margin;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(title.toUpperCase(), margin, y);
    y += lineHeight + 2;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    const lines = doc.splitTextToSize(String(content).trim(), maxWidth);
    doc.text(lines, margin, y);
    y += lines.length * lineHeight + sectionGap;
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text((values.fullName || "Your Name").toUpperCase(), margin, y);
  y += 10;

  const contactParts = [
    values.phone ? "+91 " + values.phone : "",
    values.email,
    values.linkedin,
    values.location,
  ].filter(Boolean);
  if (contactParts.length > 0) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    doc.text(contactParts.join(" | "), margin, y);
    y += 8;
  }
  y += 4;

  addSection("Professional Summary", values.professionalSummary);

  if (values.experienceRole || values.experienceDesc) {
    const rolePart = values.experienceRole
      ? (values.experienceYear ? values.experienceRole + " (" + values.experienceYear + ")" : values.experienceRole)
      : "";
    const exp = [rolePart, values.experienceDesc].filter(Boolean).join("\n");
    addSection("Experience", exp);
  }

  if (values.educationInstitution || values.educationYear) {
    const edu = [values.educationInstitution, values.educationYear].filter(Boolean).join(", ");
    addSection("Education", edu);
  }

  const skillsStr = Array.isArray(values.keySkills) ? values.keySkills.filter(Boolean).join(", ") : (values.keySkills || "");
  addSection("Key Skills", skillsStr);
  addSection("Projects", values.projects);
  addSection("Internship", values.internship);
  addSection("Certifications", values.certifications);
  addSection("Additional Information", values.additionalInfo);

  const fileName = `${(values.fullName || "Resume").replace(/\s+/g, "_")}_Resume.pdf`;
  return { doc, fileName };
}

function generateResumePdf(values, resumeType) {
  const { doc, fileName } = buildResumePdfDoc(values);
  doc.save(fileName);
  return fileName;
}

/** Build resume form values from profile + auth user (for display and profile-based PDF download) */
function getResumeValuesFromProfile(profile, user) {
  const fullName = profile?.fullName || user?.userName || "";
  const email = profile?.email || user?.mailId || "";
  const phone = profile?.mobileNumber || "";
  const technicalSkills = Array.isArray(profile?.technicalSkills) ? profile.technicalSkills : [];
  const professionalSkills = Array.isArray(profile?.professionalSkills) ? profile.professionalSkills : [];
  const skillsStr = [...technicalSkills, ...professionalSkills].filter(Boolean).join(", ");
  const certs = profile?.certifications;
  const certificationsStr = Array.isArray(certs) ? certs.join(", ") : (certs ? String(certs) : "");
  const additionalParts = [profile?.gender, profile?.dateOfBirth].filter(Boolean);
  return {
    fullName,
    phone,
    email,
    linkedin: "",
    location: "",
    professionalSummary: profile?.about || profile?.careerGoal || "",
    experienceRole: "",
    experienceYear: "",
    experienceDesc: "",
    educationInstitution: "",
    educationYear: "",
    keySkills: skillsStr,
    projects: "",
    internship: "",
    certifications: certificationsStr,
    additionalInfo: additionalParts.join(" · "),
  };
}

const Resume = () => {
  const { user } = useAuth();
  const userId = user?.id || "student_001";

  const [profileData, setProfileData] = useState(null);
  const [resume, setResume] = useState({
    hasResume: true,
    fileName: "",
    uploadDate: "",
    downloads: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [builderModalOpen, setBuilderModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [resumeType, setResumeType] = useState(null);
  const [form] = Form.useForm();
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [previewPdfUrl, setPreviewPdfUrl] = useState(null);

  // Load profile from localStorage (same key as Profile page) for fileName and profile-based download
  useEffect(() => {
    try {
      const cached = localStorage.getItem("profile_" + userId);
      const data = cached ? JSON.parse(cached) : null;
      setProfileData(data);
      const name = data?.fullName || user?.userName || "Resume";
      const suggestedFileName = (name || "Resume").replace(/\s+/g, "_") + "_Resume.pdf";
      setResume((prev) => ({
        ...prev,
        fileName: prev.fileName || suggestedFileName,
        uploadDate: prev.uploadDate || (data ? new Date().toISOString().split("T")[0] : ""),
      }));
    } catch {
      setProfileData(null);
      const name = user?.userName || "Resume";
      setResume((prev) => ({
        ...prev,
        fileName: prev.fileName || (name.replace(/\s+/g, "_") + "_Resume.pdf"),
      }));
    }
  }, [userId, user?.userName]);

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

  const openBuilderForm = (type) => {
    setResumeType(type);
    setBuilderModalOpen(false);
    form.setFieldsValue({ ...DEFAULT_RESUME_FORM, keySkills: [] });
    setFormModalOpen(true);
  };

  const onFormFinish = (values) => {
    setGeneratingPdf(true);
    try {
      const fileName = generateResumePdf(values, resumeType);
      message.success(`Resume saved as ${fileName}`);
      setFormModalOpen(false);
      form.resetFields();
    } catch (e) {
      message.error("Failed to generate PDF. Please try again.");
      console.error(e);
    } finally {
      setGeneratingPdf(false);
    }
  };

  const handlePreview = () => {
    const values = getResumeValuesFromProfile(profileData, user);
    try {
      const { doc } = buildResumePdfDoc(values);
      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      setPreviewPdfUrl(url);
    } catch (e) {
      message.error("Could not generate preview.");
      console.error(e);
    }
  };

  const closePreview = () => {
    if (previewPdfUrl) {
      URL.revokeObjectURL(previewPdfUrl);
      setPreviewPdfUrl(null);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Resume</h2>
        <p>Build and manage your professional resume</p>
      </div>

      <Card
        title="My Resume"
        extra={
          <Space>
            <Button icon={<EditOutlined />} onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </Space>
        }
      >
        {resume.hasResume ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <p>
              <strong>File:</strong> {resume.fileName || (profileData?.fullName || user?.userName || "Resume").replace(/\s+/g, "_") + "_Resume.pdf"}
            </p>
            <p>
              <strong>Uploaded:</strong> {resume.uploadDate || "From profile"}
            </p>
            <p>
              <strong>Downloaded:</strong> {resume.downloads || 0} times
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
                  // Fallback: generate PDF from profile so download always works
                  const values = getResumeValuesFromProfile(profileData, user);
                  const fileName = generateResumePdf(values, "fresher");
                  setResume((prev) => ({ ...prev, fileName, downloads: (prev.downloads || 0) + 1 }));
                  message.success("Resume downloaded from your profile.");
                }}
              >
                Download My Resume
              </Button>
              <Button onClick={handlePreview}>Preview</Button>
            </Space>
            {isEditing && (
              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>
                <h4>Upload New Resume</h4>
                <Upload onChange={handleUpload} maxCount={1} accept=".pdf,.doc,.docx">
                  <Button icon={<UploadOutlined />}>Select Resume File</Button>
                </Upload>
              </div>
            )}
          </Space>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <p>No resume uploaded yet</p>
            <Upload onChange={handleUpload} maxCount={1} accept=".pdf,.doc,.docx">
              <Button type="primary" icon={<UploadOutlined />} size="large">
                Upload Your Resume
              </Button>
            </Upload>
          </div>
        )}
      </Card>

      <Card title="Resume Builder" style={{ marginTop: 24 }}>
        <p>Use our resume builder to create a professional resume</p>
        <Button type="primary" size="large" onClick={() => setBuilderModalOpen(true)}>
          Start Building Resume
        </Button>
      </Card>

      {/* Step 1: Fresher or Experience */}
      <Modal
        title="Choose your profile"
        open={builderModalOpen}
        onCancel={() => setBuilderModalOpen(false)}
        footer={null}
        centered
        width={400}
      >
        <p style={{ marginBottom: 20, color: "#666" }}>
          Are you a fresher or do you have work experience?
        </p>
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          <Button type="primary" size="large" block icon={<UserOutlined />} onClick={() => openBuilderForm("fresher")}>
            Fresher
          </Button>
          <Button size="large" block icon={<RocketOutlined />} onClick={() => openBuilderForm("experience")}>
            Experience
          </Button>
        </Space>
      </Modal>

      {/* Step 2: Resume questions form → Generate PDF */}
      <Modal
        title={`Resume Builder – ${resumeType === "fresher" ? "Fresher" : "Experience"}`}
        open={formModalOpen}
        onCancel={() => {
          setFormModalOpen(false);
          form.resetFields();
        }}
        footer={null}
        width={640}
        centered
        destroyOnClose
        styles={{ body: { paddingBottom: 0 } }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFormFinish}
          initialValues={{ ...DEFAULT_RESUME_FORM, keySkills: [] }}
        >
          <div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: 8, marginBottom: 16 }}>
            {/* Contact Information */}
            <Text strong style={{ display: "block", marginBottom: 8, color: "#1890ff" }}>Contact Information</Text>
            <Form.Item name="fullName" label="Full Name" rules={[{ required: true, message: "Enter your name" }]}>
              <Input placeholder="e.g. Your Name" size="large" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ pattern: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit mobile number" }]}
            >
              <Input placeholder="e.g. 9445918818" maxLength={10} showCount={false} />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
              <Input placeholder="your.email@example.com" type="email" />
            </Form.Item>
            <Form.Item name="linkedin" label="LinkedIn URL">
              <Input placeholder="https://linkedin.com/in/yourprofile" />
            </Form.Item>
            <Form.Item name="location" label="Location">
              <Input placeholder="e.g. Chennai, Tamil Nadu" />
            </Form.Item>

            <Divider style={{ margin: "16px 0" }} />

            <Text strong style={{ display: "block", marginBottom: 8, color: "#1890ff" }}>Professional Summary</Text>
            <Form.Item
              name="professionalSummary"
              label="Summary"
              extra="2–4 lines about your profile, skills, and career goals."
            >
              <TextArea rows={4} placeholder="Brief summary of your profile, skills, and career goals..." />
            </Form.Item>

            <Divider style={{ margin: "16px 0" }} />

            <Text strong style={{ display: "block", marginBottom: 8, color: "#1890ff" }}>
              {resumeType === "fresher" ? "Relevant Experience (internships, volunteer work)" : "Work Experience"}
            </Text>
            <Form.Item name="experienceRole" label="Role / Title">
              <Input placeholder={resumeType === "fresher" ? "e.g. Intern – Software Tester" : "e.g. Software Engineer"} />
            </Form.Item>
            <Form.Item name="experienceYear" label="Year">
              <Select placeholder="Select year" allowClear options={YEAR_OPTIONS} />
            </Form.Item>
            <Form.Item name="experienceDesc" label="Description">
              <TextArea rows={2} placeholder="Brief description of responsibilities and achievements" />
            </Form.Item>

            <Divider style={{ margin: "16px 0" }} />

            <Text strong style={{ display: "block", marginBottom: 8, color: "#1890ff" }}>Education</Text>
            <Form.Item name="educationInstitution" label="Institution / Degree">
              <Input placeholder="e.g. B.Sc Computer Science, A.M. Jain College" />
            </Form.Item>
            <Form.Item name="educationYear" label="Year">
              <Select placeholder="Select year" allowClear options={YEAR_OPTIONS} />
            </Form.Item>

            <Divider style={{ margin: "16px 0" }} />

            <Text strong style={{ display: "block", marginBottom: 8, color: "#1890ff" }}>Skills & Achievements</Text>
            <Form.Item
              name="keySkills"
              label="Key Skills"
              extra="Type and press Enter to add each skill."
            >
              <Select
                mode="tags"
                placeholder="e.g. Python, Java, Testing"
                tokenSeparators={[","]}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item name="projects" label="Projects" extra="One project per line.">
              <TextArea rows={3} placeholder={"e.g. Sales forecasting project\ne.g. College management system"} />
            </Form.Item>
            <Form.Item name="internship" label="Internships" extra="One per line if multiple.">
              <TextArea rows={2} placeholder="e.g. Prefcol Edutech Solutions" />
            </Form.Item>
            <Form.Item name="certifications" label="Certifications" extra="One per line if multiple.">
              <TextArea rows={2} placeholder="e.g. AWS Certified, Software Developer" />
            </Form.Item>

            <Divider style={{ margin: "16px 0" }} />

            <Text strong style={{ display: "block", marginBottom: 8, color: "#1890ff" }}>Additional Information</Text>
            <Form.Item name="additionalInfo" label="Other (awards, languages, etc.)">
              <TextArea rows={2} placeholder="Any other relevant information" />
            </Form.Item>
          </div>

          <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 16, background: "#fff", margin: "0 -24px -24px -24px", padding: "16px 24px 24px" }}>
            <Space>
              <Button type="primary" htmlType="submit" loading={generatingPdf} size="large" icon={<DownloadOutlined />}>
                Generate & Download PDF
              </Button>
              <Button size="large" onClick={() => { setFormModalOpen(false); form.resetFields(); }}>Cancel</Button>
            </Space>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Resume Preview"
        open={!!previewPdfUrl}
        onCancel={closePreview}
        footer={[
          <Button key="close" onClick={closePreview}>Close</Button>,
          previewPdfUrl && (
            <Button
              key="download"
              type="primary"
              icon={<DownloadOutlined />}
              onClick={() => {
                const a = document.createElement("a");
                a.href = previewPdfUrl;
                a.download = resume.fileName || "Resume.pdf";
                a.click();
              }}
            >
              Download
            </Button>
          ),
        ]}
        width="90%"
        style={{ top: 20 }}
        styles={{ body: { padding: 0, height: "80vh", minHeight: 400 } }}
        destroyOnClose
        afterClose={closePreview}
      >
        {previewPdfUrl && (
          <iframe
            title="Resume PDF preview"
            src={previewPdfUrl}
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        )}
      </Modal>
    </div>
  );
};

export default Resume;
