import { useState } from "react";
import { Card, Row, Col, Avatar, Button, Space, Statistic, Empty } from "antd";
import { LikeOutlined, CommentOutlined, ShareAltOutlined, UserOutlined } from "@ant-design/icons";

const FALLBACK_AVATAR = "https://api.dicebear.com/7.x/avataaars/svg?seed=default";

const SocialDashboard = () => {
  const [avatarErrors, setAvatarErrors] = useState({});
  const [posts] = useState([
    {
      id: "1",
      author: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      timestamp: "2 hours ago",
      content: "Just completed the Web Development Bootcamp! Excited to apply these skills.",
      likes: 125,
      comments: 23,
      shares: 8,
    },
    {
      id: "2",
      author: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      timestamp: "5 hours ago",
      content: "Anyone interested in a study group for Advanced JavaScript?",
      likes: 89,
      comments: 34,
      shares: 12,
    },
  ]);

  const [stats] = useState({
    followers: 245,
    following: 189,
    posts: 42,
    engagement: 3.2,
  });

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Social Dashboard</h2>
        <p>Connect with fellow students and share your learning journey</p>
      </div>

      {/* Stats */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Followers" value={stats.followers} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Following" value={stats.following} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Posts" value={stats.posts} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Engagement" value={`${stats.engagement}%`} />
          </Card>
        </Col>
      </Row>

      {/* Posts */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 16 }}>
              <Space>
                <Avatar
                  src={avatarErrors[post.id] ? null : post.avatar}
                  icon={avatarErrors[post.id] ? <UserOutlined /> : undefined}
                  onError={() => setAvatarErrors((prev) => ({ ...prev, [post.id]: true }))}
                />
                <div>
                  <h4 style={{ margin: 0 }}>{post.author}</h4>
                  <p style={{ margin: 0, fontSize: 12, color: "#666" }}>{post.timestamp}</p>
                </div>
              </Space>
            </div>

            <p>{post.content}</p>

            <Space split="|" style={{ marginTop: 16, width: "100%" }}>
              <Button icon={<LikeOutlined />} type="text">
                {post.likes} Likes
              </Button>
              <Button icon={<CommentOutlined />} type="text">
                {post.comments} Comments
              </Button>
              <Button icon={<ShareAltOutlined />} type="text">
                {post.shares} Shares
              </Button>
            </Space>
          </Card>
        ))
      ) : (
        <Empty description="No posts yet" />
      )}
    </div>
  );
};

export default SocialDashboard;
