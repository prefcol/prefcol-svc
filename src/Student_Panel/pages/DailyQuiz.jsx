import { useState } from "react";
import { Card, Row, Col, Statistic, Badge, Button, Space, Empty, List } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

const DailyQuiz = () => {
  // Start with no daily quizzes; will be populated from backend later
  const [quizzes] = useState([]);

  const [stats] = useState({
    completed: 0,
    pending: 0,
    streak: 0,
    averageScore: 0,
  });

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Daily Quiz</h2>
        <p>Complete daily quizzes to strengthen your learning</p>
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
            <Statistic title="Current Streak" value={stats.streak} suffix="days" />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic title="Avg Score" value={stats.averageScore} suffix="%" />
          </Card>
        </Col>
      </Row>

      {/* Quiz List */}
      {quizzes.length > 0 ? (
        <List
          dataSource={quizzes}
          renderItem={(quiz) => (
            <Card key={quiz.id} style={{ marginBottom: 16 }}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ margin: 0 }}>{quiz.title}</h4>
                  <Badge status={quiz.status === "completed" ? "success" : "processing"}
                    text={quiz.status.charAt(0).toUpperCase() + quiz.status.slice(1)} />
                </div>

                <p style={{ color: "#666", margin: 0 }}>
                  {quiz.date} • {quiz.questions} Questions • {quiz.timeLimit}
                </p>

                {quiz.score && (
                  <p style={{ margin: 0 }}>
                    <strong>Score:</strong> {quiz.score}
                  </p>
                )}

                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  disabled={quiz.status === "completed"}
                  block
                >
                  {quiz.status === "completed" ? "Completed" : "Start Quiz"}
                </Button>
              </Space>
            </Card>
          )}
        />
      ) : (
        <Empty description="No daily quizzes available" />
      )}
    </div>
  );
};

export default DailyQuiz;
