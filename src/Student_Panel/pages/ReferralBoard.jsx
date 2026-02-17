import { useState } from "react";
import { Card, Row, Col, Button, Space, Statistic, List, message, Modal, Input } from "antd";
import { CopyOutlined, ShareAltOutlined, GiftOutlined, UserAddOutlined } from "@ant-design/icons";

const ReferralBoard = () => {
  const [referralCode] = useState("REFER2024");
  const [stats] = useState({
    totalReferrals: 12,
    successfulReferrals: 8,
    pendingReferrals: 4,
    earnedRewards: "$240",
  });

  const [referrals] = useState([
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "completed",
      enrolledDate: "2024-01-15",
      reward: "50% course discount",
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      status: "completed",
      enrolledDate: "2024-01-20",
      reward: "50% course discount",
    },
    {
      id: "3",
      name: "Carol Williams",
      email: "carol@example.com",
      status: "pending",
      enrolledDate: null,
      reward: "Pending verification",
    },
  ]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    message.success("Referral code copied!");
  };

  const handleShareReferral = () => {
    Modal.info({
      title: "Share Your Referral Code",
      content: (
        <div>
          <p>Send this code to your friends:</p>
          <Input value={referralCode} addonAfter={<CopyOutlined onClick={handleCopyCode} />} />
          <p style={{ marginTop: 16 }}>Or share your referral link:</p>
          <Input value={`https://prefcol.com/ref=${referralCode}`} addonAfter={<CopyOutlined />} />
        </div>
      ),
    });
  };

  const getStatusColor = (status) => {
    return status === "completed" ? "success" : "processing";
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Referral Board</h2>
        <p>Earn rewards by referring friends to our platform</p>
      </div>

      {/* Referral Stats */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Total Referrals" value={stats.totalReferrals} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Successful" value={stats.successfulReferrals} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Pending" value={stats.pendingReferrals} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Earned Rewards" value={stats.earnedRewards} />
          </Card>
        </Col>
      </Row>

      {/* Your Referral Code */}
      <Card style={{ marginBottom: 24 }} title="Your Referral Code">
        <Space direction="vertical" style={{ width: "100%" }}>
          <p>Share your unique code and earn rewards when your friends enroll!</p>

          <Card style={{ backgroundColor: "#f0f5ff", padding: "20px", textAlign: "center" }}>
            <h2 style={{ margin: 0, fontFamily: "monospace" }}>{referralCode}</h2>
          </Card>

          <Space>
            <Button
              type="primary"
              icon={<CopyOutlined />}
              onClick={handleCopyCode}
            >
              Copy Code
            </Button>
            <Button
              icon={<ShareAltOutlined />}
              onClick={handleShareReferral}
            >
              Share
            </Button>
          </Space>
        </Space>
      </Card>

      {/* Referral Rewards */}
      <Card style={{ marginBottom: 24 }} title="Referral Rewards">
        <List
          dataSource={[
            { action: "Friend completes 1st course", reward: "$20 credit" },
            { action: "Friend purchases any course", reward: "$10 credit" },
            { action: "Refer 5 friends", reward: "Free 1-month premium" },
            { action: "Refer 10 friends", reward: "Free 3-month premium" },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.action}
                description={<Tag color="gold">{item.reward}</Tag>}
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Referral History */}
      <Card title="Your Referrals">
        <List
          dataSource={referrals}
          renderItem={(referral) => (
            <List.Item>
              <List.Item.Meta
                title={referral.name}
                description={
                  <Space>
                    <span>{referral.email}</span>
                    <Tag color={getStatusColor(referral.status)}>
                      {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                    </Tag>
                  </Space>
                }
              />
              <div>
                <p style={{ margin: 0, fontSize: 12 }}>
                  {referral.enrolledDate ? `Enrolled: ${referral.enrolledDate}` : "Pending"}
                </p>
                <p style={{ margin: "4px 0 0 0", color: "#666", fontSize: 12 }}>
                  {referral.reward}
                </p>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default ReferralBoard;
