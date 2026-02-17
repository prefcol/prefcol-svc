import React from 'react';
import { Row, Col, Button, Card, Tag, Space, Typography, List } from 'antd';
import { RocketOutlined, FundProjectionScreenOutlined, TeamOutlined, ReadOutlined } from '@ant-design/icons';
import './Homepage.css';

const { Title, Text, Paragraph } = Typography;

export default function Homepage({ onStartDemo }) {
  return (
    <div className="hc-hero">
      <div className="hc-trust">5,000+ learners • 300+ hiring partners • 72% placed/promoted</div>

      <Row className="hc-hero-inner" align="middle" gutter={32}>
        <Col xs={24} md={12}>
          <div className="hc-hero-copy">
            <Title level={1} className="hc-title">
              Stop learning. Start getting hired.
            </Title>
            <Paragraph className="hc-sub">
              Career paths and enterprise programs built for fast, measurable outcomes—project work,
              mentor-led coaching, and employer-validated hiring pipelines for students, professionals,
              and teams.
            </Paragraph>

            <Space size="middle" className="hc-ctas">
              <Button type="primary" size="large" onClick={onStartDemo}>
                Start Free Demo
              </Button>
              <Button type="default" size="large" href="#how-it-works">
                See How It Works
              </Button>
            </Space>

            <div className="hc-audience">
              <Tag color="#2563EB">Students</Tag>
              <Tag color="#16A34A">Working Pros</Tag>
              <Tag color="#7C3AED">Businesses</Tag>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="hc-hero-mock">
            <div className="hc-mock-card">
              <div className="hc-mock-header">Full Stack Track • Week 4</div>
              <div className="hc-mock-body">
                <div className="hc-stat">Project: Live Job Board</div>
                <div className="hc-progress">65% complete • Interview prep unlocked</div>
              </div>
              <div className="hc-mock-cta">Certificate • Portfolio</div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="hc-section">
        <Row gutter={24}>
          <Col xs={24} md={8}>
            <Card className="hc-card">
              <div className="hc-card-icon"><RocketOutlined /></div>
              <Title level={4}>Employer Projects</Title>
              <Text>Work on live briefs from hiring partners—real portfolio, real interviews.</Text>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card className="hc-card">
              <div className="hc-card-icon"><FundProjectionScreenOutlined /></div>
              <Title level={4}>Interview-Ready Prep</Title>
              <Text>Mock interviews and 1:1 coaching to turn projects into job offers.</Text>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card className="hc-card">
              <div className="hc-card-icon"><TeamOutlined /></div>
              <Title level={4}>Enterprise ROI</Title>
              <Text>Deploy cohorts, measure skill gains, and reduce onboarding time.</Text>
            </Card>
          </Col>
        </Row>
      </div>

      <div id="social-proof" className="hc-section hc-social">
        <Row gutter={24} align="middle">
          <Col xs={24} md={8}>
            <div className="hc-metrics">
              <div className="hc-metric">5,000+</div>
              <div className="hc-metric-label">Learners trained</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="hc-metrics">
              <div className="hc-metric">300+</div>
              <div className="hc-metric-label">Hiring partners</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="hc-metrics">
              <div className="hc-metric">72%</div>
              <div className="hc-metric-label">Placed or promoted</div>
            </div>
          </Col>
        </Row>

        <div className="hc-testimonials">
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={[
              { name: 'Priya S.', role: 'Student', quote: 'Built three apps, got 4 interviews, landed an offer in 6 weeks.' },
              { name: 'Arun M.', role: 'Dev', quote: 'Finished Backend→Cloud track and promoted in 3 months.' },
              { name: 'Neha K.', role: 'HR Manager', quote: 'Reskilled 120 staff—onboarding time down 40%.' },
            ]}
            renderItem={item => (
              <List.Item>
                <Card>
                  <Text strong>{item.name}</Text>
                  <div className="hc-role">{item.role}</div>
                  <Paragraph className="hc-quote">"{item.quote}"</Paragraph>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>

      <div id="how-it-works" className="hc-section hc-steps">
        <Title level={3}>How it works</Title>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Card className="hc-step">
              <div className="hc-step-num">1</div>
              <Title level={5}>Choose a fast career path</Title>
              <Text>8–12 week micro-paths designed to target hires and promotions.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="hc-step">
              <div className="hc-step-num">2</div>
              <Title level={5}>Build employer projects</Title>
              <Text>Mentor feedback, peer reviews, and hiring partner briefs.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="hc-step">
              <div className="hc-step-num">3</div>
              <Title level={5}>Get hired or prove ROI</Title>
              <Text>Demo-ready portfolio, interview support, and enterprise metrics.</Text>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="hc-final-cta">
        <Title level={3}>Ready to change a career or team—today?</Title>
        <Space>
          <Button type="primary" size="large" onClick={onStartDemo}>Start Free Demo</Button>
          <Button size="large" href="/enterprise-demo">Schedule a 15‑min Demo for Teams</Button>
        </Space>
      </div>
    </div>
  );
}
