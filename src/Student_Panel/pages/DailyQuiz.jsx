import { useState } from "react";
import { Card, Row, Col, Statistic, Badge, Button, Space, Empty, List } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

const DailyQuiz = () => {
  const [quizzes] = useState([
    {
      id: "1",
      title: "JavaScript Basics - Day 1",
      date: "2024-02-05",
      questions: 10,
      timeLimit: "15 mins",
      score: "100%",
      status: "completed",
    },
    {
      id: "2",
      title: "Variables and Data Types",
      date: "2024-02-06",
      questions: 10,
      timeLimit: "15 mins",
      score: "90%",
      status: "completed",
    },
    {
      id: "3",
      title: "Functions and Scope",
      date: "2024-02-07",
      questions: 10,
      timeLimit: "15 mins",
      score: null,
      status: "pending",
    },
  ]);

  const [stats] = useState({
    completed: 2,
    pending: 1,
    streak: 2,
    averageScore: 95,
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
