// src/pages/MyInterests.jsx
import React from 'react';
import {
  Tabs,
  Card,
  Empty,
  Row,
  Col,
  Button,
  Tag,
  Typography,
  Badge,
} from 'antd';
import {
  HeartFilled,
  MessageOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  BookOutlined,
} from '@ant-design/icons';
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const MyInterests = () => {
  const { courses, wishlist, enquiries = [], dispatch } = useGlobalStore();
  const navigate = useNavigate();

  // Map IDs to full course objects
  const wishlistCourses = wishlist
    .map(id => courses.find(course => course.id === id))
    .filter(Boolean);

  // ✅ CORRECT
const enquiredCourses = enquiries
  .map(enquiry => courses.find(c => c.id === enquiry.courseId)) // ← enquiry.courseId
  .filter(Boolean);

 // In MyInterests.jsx
const handleViewCourse = (courseId) => {
  // ✅ Use absolute path to match your nested routes
  navigate(`/Student-portal/course/${courseId}`);
};

  const handleRemoveFromWishlist = (courseId, e) => {
    e.stopPropagation();
    dispatch({ type: 'REMOVE_FROM_WISHLIST', courseId });
  };

  const handleRemoveEnquiry = (courseId, e) => {
    e.stopPropagation();
    dispatch({ type: 'REMOVE_ENQUIRY', courseId }); // ✅ Now works!
  };

  const renderCourseCard = (course, type) => (
    <Col xs={24} sm={12} lg={8} key={course.id}>
      <Card
        hoverable
        style={{ borderRadius: 8, overflow: 'hidden' }}
        cover={
          <div style={{ height: 160, overflow: 'hidden' }}>
            <img
              alt={course.title}
              src={course.thumbnail}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        }
        actions={[
          <Button
            type="link"
            icon={<ArrowRightOutlined />}
            onClick={() => handleViewCourse(course.id)}
            size="small"
          >
            View Course
          </Button>,
          <Button
            type="text"
            danger
            onClick={(e) =>
              type === 'wishlist'
                ? handleRemoveFromWishlist(course.id, e)
                : handleRemoveEnquiry(course.id, e)
            }
            size="small"
          >
            Remove
          </Button>,
        ]}
      >
        <Card.Meta
          title={
            <Text strong ellipsis>
              {course.title}
            </Text>
          }
          description={
            <div style={{ marginTop: 8 }}>
              <div style={{ marginBottom: 8 }}>
                <Tag color={course.category === 'IT' ? 'blue' : 'purple'}>
                  {course.subcategory}
                </Tag>
                <Tag color="geekblue">{course.level}</Tag>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                <span>
                  <BookOutlined /> {course.totalLessons} lessons
                </span>
                <span>
                  <ClockCircleOutlined /> {Math.round(course.totalDuration / 60)}h
                </span>
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>
                {type === 'wishlist'
                  ? 'Saved for later'
                  : 'Enquired about this course'}
              </div>
            </div>
          }
        />
      </Card>
    </Col>
  );

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={3} style={{ color: '#004d4d', marginBottom: 8 }}>
        My Interests
      </Title>
      <Text type="secondary">
        Courses you've saved or enquired about
      </Text>

      <Tabs
        defaultActiveKey="1"
        style={{ marginTop: 24 }}
        items={[ {
            label: (
              <span>
                <MessageOutlined style={{ color: '#1890ff', marginRight: 6 }} />
                Enquired{' '}
                <Badge
                  count={enquiredCourses.length}
                  style={{ backgroundColor: '#1890ff', marginLeft: 4 }}
                />
              </span>
            ),
            key: '1',
            children: enquiredCourses.length > 0 ? (
              <Row gutter={[24, 24]}>{enquiredCourses.map(course => renderCourseCard(course, 'enquiry'))}</Row>
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="You haven't enquired about any courses yet"
              />
            ),
          },
          {
            label: (
              <span>
                <HeartFilled style={{ color: '#ff4d4f', marginRight: 6 }} />
                Wishlist{' '}
                <Badge
                  count={wishlistCourses.length}
                  style={{ backgroundColor: '#ff4d4f', marginLeft: 4 }}
                />
              </span>
            ),
            key: '2',
            children: wishlistCourses.length > 0 ? (
              <Row gutter={[24, 24]}>{wishlistCourses.map(course => renderCourseCard(course, 'wishlist'))}</Row>
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No courses in your wishlist"
              />
            ),
          },
          
        ]}
      />
    </div>
  );
};

export default MyInterests;