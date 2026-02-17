import { useState } from "react";
import { Card, Row, Col, Statistic, Badge, Button, Space, Empty, List } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, LineChartOutlined } from "@ant-design/icons";

const WeeklyTest = () => {
  const [tests] = useState([
    {
      id: "1",
      title: "Week 1: JavaScript Fundamentals",
      week: "Week 1",
      questions: 50,
      duration: "2 hours",
      score: "88%",
      status: "completed",
      date: "2024-01-28",
    },
    {
      id: "2",
      title: "Week 2: DOM Manipulation",
      week: "Week 2",
      questions: 50,
      duration: "2 hours",
      score: "92%",
      status: "completed",
      date: "2024-02-04",
    },
    {
      id: "3",
      title: "Week 3: Asynchronous JavaScript",
      week: "Week 3",
      questions: 50,
      duration: "2 hours",
      score: null,
      status: "scheduled",
      date: "2024-02-11",
    },
  ]);

  const [stats] = useState({
    completed: 2,
    pending: 1,
    averageScore: 90,
    improvements: "↑ 4%",
  });

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Weekly Tests</h2>
        <p>Comprehensive assessments to track your progress</p>
      </div>

      {/* Stats */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="Completed"
              value={stats.completed}
              prefix={<CheckCircleOutlined style={{ color: "green" }} />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="Pending"
              value={stats.pending}
              prefix={<ClockCircleOutlined style={{ color: "orange" }} />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Avg Score" value={stats.averageScore} suffix="%" />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="Improvement"
              value={stats.improvements}
              prefix={<LineChartOutlined style={{ color: "green" }} />}
            />
          </Card>
        </Col>
      </Row>

      {/* Test List */}
      {tests.length > 0 ? (
        <List
          dataSource={tests}
          renderItem={(test) => (
            <Card key={test.id} style={{ marginBottom: 16 }}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ margin: 0 }}>{test.title}</h4>
                  <Badge status={test.status === "completed" ? "success" : "warning"}
                    text={test.status.charAt(0).toUpperCase() + test.status.slice(1)} />
                </div>

                <p style={{ color: "#666", margin: 0 }}>
                  {test.date} • {test.questions} Questions • {test.duration}
                </p>

                {test.score && (
                  <p style={{ margin: 0 }}>
                    <strong>Score:</strong> {test.score}
                  </p>
                )}

                <Button
                  type="primary"
                  disabled={test.status === "completed"}
                  block
                >
                  {test.status === "completed" ? "Completed" : "Start Test"}
                </Button>
              </Space>
            </Card>
          )}
        />
      ) : (
        <Empty description="No weekly tests available" />
      )}
    </div>
  );
};

export default WeeklyTest;
