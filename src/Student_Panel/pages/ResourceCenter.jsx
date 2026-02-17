import { useState } from "react";
import { Card, Row, Col, Button, Space, Tag, Input, Empty, message } from "antd";
import { DownloadOutlined, BookOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { downloadResourceFile } from "../services/studentPortalApi";

const ResourceCenter = () => {
  const [resources] = useState([
    {
      id: "1",
      title: "JavaScript Cheat Sheet",
      type: "PDF",
      category: "JavaScript",
      downloads: 1245,
      rating: 4.8,
      size: "2.4 MB",
    },
    {
      id: "2",
      title: "React Component Lifecycle Guide",
      type: "PDF",
      category: "React",
      downloads: 892,
      rating: 4.7,
      size: "1.8 MB",
    },
    {
      id: "3",
      title: "CSS Layout Techniques Video",
      type: "Video",
      category: "CSS",
      downloads: 567,
      rating: 4.6,
      size: "456 MB",
    },
    {
      id: "4",
      title: "Web Development Best Practices",
      type: "E-Book",
      category: "General",
      downloads: 2103,
      rating: 4.9,
      size: "5.2 MB",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [filteredResources, setFilteredResources] = useState(resources);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = resources.filter((r) =>
      r.title.toLowerCase().includes(value.toLowerCase()) ||
      r.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "PDF":
        return <BookOutlined />;
      case "Video":
        return <PlayCircleOutlined />;
      case "E-Book":
        return <BookOutlined />;
      default:
        return <DownloadOutlined />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "PDF":
        return "red";
      case "Video":
        return "blue";
      case "E-Book":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Resource Center</h2>
        <p>Download and access learning resources</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Input
          placeholder="Search resources..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: "100%" }}
        />
      </Card>

      <Row gutter={[16, 16]}>
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <Col xs={24} sm={12} md={6} key={resource.id}>
              <Card hoverable>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <h4 style={{ margin: 0 }}>{resource.title}</h4>

                  <Space>
                    <Tag icon={getTypeIcon(resource.type)} color={getTypeColor(resource.type)}>
                      {resource.type}
                    </Tag>
                    <Tag>{resource.category}</Tag>
                  </Space>

                  <p style={{ color: "#666", fontSize: 12, margin: 0 }}>
                    {resource.downloads} downloads • {resource.rating} ⭐
                  </p>

                  <p style={{ color: "#999", fontSize: 12, margin: 0 }}>
                    Size: {resource.size}
                  </p>

                  <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    block
                    onClick={async () => {
                      const ok = await downloadResourceFile(resource.id, `${resource.title}.${resource.type === "Video" ? "mp4" : "pdf"}`);
                      if (ok) message.success("Download started");
                      else message.info(`Downloading ${resource.title}... (connect API for real file)`);
                    }}
                  >
                    Download
                  </Button>
                </Space>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={24}>
            <Empty description="No resources found" />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ResourceCenter;
