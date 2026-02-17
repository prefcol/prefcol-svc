import { useState } from "react";
import { Card, Row, Col, Button, Tag, Progress, Empty, Modal, Radio, message } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

const MOCK_QUESTIONS = [
  { id: 1, q: "What is a closure in JavaScript?", options: ["A function inside another function", "A loop", "A variable", "A class"], correct: 0 },
  { id: 2, q: "Which hook is used for side effects?", options: ["useState", "useEffect", "useContext", "useRef"], correct: 1 },
  { id: 3, q: "What does REST stand for?", options: ["Representational State Transfer", "Remote Execution", "Resource Endpoint", "None"], correct: 0 },
];

const QuizBoard = () => {
  const [quizzes] = useState([
    {
      id: "1",
      title: "JavaScript Basics Quiz",
      course: "JavaScript Fundamentals",
      questions: 20,
      timeLimit: "30 mins",
      score: "95%",
      status: "completed",
      attempts: 2,
    },
    {
      id: "2",
      title: "React Hooks Quiz",
      course: "Advanced React",
      questions: 25,
      timeLimit: "45 mins",
      score: "88%",
      status: "completed",
      attempts: 1,
    },
    {
      id: "3",
      title: "REST APIs Quiz",
      course: "Web Development Bootcamp",
      questions: 30,
      timeLimit: "1 hr",
      score: null,
      status: "pending",
      attempts: 0,
    },
  ]);

  const [quizModal, setQuizModal] = useState({ open: false, quiz: null });
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const getStatusTag = (status) => {
    switch (status) {
      case "completed":
        return <Tag icon={<CheckCircleOutlined />} color="success">Completed</Tag>;
      case "pending":
        return <Tag icon={<ClockCircleOutlined />} color="warning">Pending</Tag>;
      default:
        return <Tag>{status}</Tag>;
    }
  };

  const handleStartQuiz = (quiz) => {
    setQuizModal({ open: true, quiz });
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const handleSubmitQuiz = () => {
    let correct = 0;
    MOCK_QUESTIONS.forEach((ques, idx) => {
      if (Number(answers[ques.id]) === ques.correct) correct++;
    });
    setScore(Math.round((correct / MOCK_QUESTIONS.length) * 100));
    setSubmitted(true);
    message.success("Quiz submitted!");
  };

  const closeQuizModal = () => {
    setQuizModal({ open: false, quiz: null });
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Quiz Board</h2>
        <p>Manage and take your quizzes</p>
      </div>

      <Row gutter={[16, 16]}>
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <Col xs={24} sm={12} md={8} key={quiz.id}>
              <Card hoverable>
                <div style={{ marginBottom: 16 }}>
                  <h3>{quiz.title}</h3>
                  <p style={{ color: "#666", fontSize: 12 }}>{quiz.course}</p>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <p>
                    <strong>Questions:</strong> {quiz.questions} | <strong>Time:</strong> {quiz.timeLimit}
                  </p>
                  {quiz.score && (
                    <div>
                      <p><strong>Your Score:</strong> {quiz.score}</p>
                      <Progress percent={parseInt(quiz.score)} />
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: 12 }}>
                  {getStatusTag(quiz.status)}
                  <span style={{ marginLeft: 8, fontSize: 12, color: "#666" }}>
                    Attempts: {quiz.attempts}
                  </span>
                </div>

                <Button
                  type="primary"
                  block
                  icon={<PlayCircleOutlined />}
                  onClick={() => handleStartQuiz(quiz)}
                >
                  {quiz.status === "completed" ? "Retake" : "Start Quiz"}
                </Button>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={24}>
            <Empty description="No quizzes available" />
          </Col>
        )}
      </Row>

      <Modal
        title={quizModal.quiz ? `${quizModal.quiz.title} – Quiz` : "Quiz"}
        open={quizModal.open}
        onCancel={closeQuizModal}
        width={600}
        footer={
          !submitted
            ? [
                <Button key="cancel" onClick={closeQuizModal}>Cancel</Button>,
                <Button key="submit" type="primary" onClick={handleSubmitQuiz}>
                  Submit Quiz
                </Button>,
              ]
            : [
                <Button key="close" type="primary" onClick={closeQuizModal}>Close</Button>,
              ]
        }
      >
        {quizModal.quiz && !submitted && (
          <div style={{ marginBottom: 16 }}>
            {MOCK_QUESTIONS.map((ques) => (
              <div key={ques.id} style={{ marginBottom: 16 }}>
                <p><strong>{ques.q}</strong></p>
                <Radio.Group
                  value={answers[ques.id]}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [ques.id]: e.target.value }))}
                >
                  {ques.options.map((opt, i) => (
                    <Radio key={i} value={i} style={{ display: "block", marginBottom: 4 }}>{opt}</Radio>
                  ))}
                </Radio.Group>
              </div>
            ))}
          </div>
        )}
        {submitted && score !== null && (
          <div style={{ textAlign: "center", padding: 24 }}>
            <p>Your score: <strong>{score}%</strong></p>
            <Progress type="circle" percent={score} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QuizBoard;
