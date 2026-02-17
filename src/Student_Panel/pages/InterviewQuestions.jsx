import { useState } from "react";
import { Card, List, Button, Space, Badge, Collapse, Empty } from "antd";
import { CheckCircleOutlined, BookOutlined } from "@ant-design/icons";

const InterviewQuestions = () => {
  const [categories] = useState([
    {
      id: "1",
      title: "JavaScript Fundamentals",
      difficulty: "Beginner",
      questions: 25,
      completed: 15,
      color: "blue",
    },
    {
      id: "2",
      title: "React Advanced Concepts",
      difficulty: "Intermediate",
      questions: 30,
      completed: 20,
      color: "green",
    },
    {
      id: "3",
      title: "System Design",
      difficulty: "Advanced",
      questions: 20,
      completed: 5,
      color: "orange",
    },
  ]);

  const [questions] = useState([
    {
      id: "1",
      category: "JavaScript Fundamentals",
      question: "What is the difference between let, const, and var?",
      difficulty: "Beginner",
      answered: true,
      myAnswer: "var is function-scoped, let and const are block-scoped...",
    },
    {
      id: "2",
      category: "JavaScript Fundamentals",
      question: "Explain closure in JavaScript",
      difficulty: "Beginner",
      answered: true,
      myAnswer: "A closure is a function that has access to variables...",
    },
    {
      id: "3",
      category: "React Advanced Concepts",
      question: "What are React hooks and their limitations?",
      difficulty: "Intermediate",
      answered: false,
    },
  ]);

  const items = categories.map((category) => ({
    key: category.id,
    label: (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <span>{category.title} ({category.difficulty})</span>
        <span style={{ fontSize: 12, color: "#999" }}>
          {category.completed}/{category.questions} completed
        </span>
      </div>
    ),
    children: (
      <List
        dataSource={questions.filter((q) => q.category === category.title)}
        renderItem={(question) => (
          <Card key={question.id} style={{ marginBottom: 12 }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <h4 style={{ margin: 0, flex: 1 }}>{question.question}</h4>
                {question.answered && (
                  <Badge icon={<CheckCircleOutlined />} status="success" text="Answered" />
                )}
              </div>

              {question.answered && (
                <div style={{ backgroundColor: "#f5f5f5", padding: 12, borderRadius: 4 }}>
                  <p style={{ fontSize: 12, color: "#666", margin: 0, marginBottom: 8 }}>Your Answer:</p>
                  <p style={{ margin: 0 }}>{question.myAnswer}</p>
                </div>
              )}

              <Space>
                <Button type="primary" icon={<BookOutlined />}>
                  {question.answered ? "View" : "Answer"} Question
                </Button>
                {question.answered && (
                  <Button>View Model Answer</Button>
                )}
              </Space>
            </Space>
          </Card>
        )}
      />
    ),
  }));

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Interview Questions</h2>
        <p>Practice common interview questions and improve your skills</p>
      </div>

      <Card>
        <Collapse items={items} />
      </Card>
    </div>
  );
};

export default InterviewQuestions;
