import { useState } from "react";
import { Card, Row, Col, Button, Space, Tag, Rate, Input, Select, Empty, message } from "antd";
import { ShoppingCartOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useGlobalStore } from "../contexts/GlobalStore";

const PLACEHOLDER_IMAGE = "https://placehold.co/400x220/f0f0f0/999?text=Course";

const CourseCatalog = () => {
  const { courses: globalCourses, wishlist, dispatch } = useGlobalStore();
  const [localCourses] = useState([
    { id: "cat-1", title: "Web Development Bootcamp", instructor: "John Doe", price: "$499", rating: 4.8, students: 1250, image: PLACEHOLDER_IMAGE, category: "IT", level: "Beginner", status: "active" },
    { id: "cat-2", title: "Advanced JavaScript", instructor: "Jane Smith", price: "$299", rating: 4.6, students: 890, image: PLACEHOLDER_IMAGE, category: "IT", level: "Intermediate", status: "active" },
    { id: "cat-3", title: "Digital Marketing Essentials", instructor: "Mike Johnson", price: "$199", rating: 4.5, students: 650, image: PLACEHOLDER_IMAGE, category: "Non-IT", level: "Beginner", status: "active" },
  ]);
  const courses = globalCourses?.length > 0 ? globalCourses.map((c) => ({ id: c.id, title: c.title, instructor: c.instructor, price: c.price ?? "$0", rating: c.rating ?? 4.5, students: c.students ?? 0, image: typeof c.thumbnail === "string" ? c.thumbnail : PLACEHOLDER_IMAGE, category: c.category || "IT", level: "Beginner", status: "active" })) : localCourses;

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleSearch = (value) => {
    setSearchText(value);
    filterCourses(value, categoryFilter);
  };

  const handleCategoryFilter = (value) => {
    setCategoryFilter(value);
    filterCourses(searchText, value);
  };

  const filterCourses = (search, category) => {
    let filtered = courses;
    if (search) filtered = filtered.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));
    if (category) filtered = filtered.filter((c) => c.category === category);
    setFilteredCourses(filtered);
  };

  const handleEnroll = (courseId) => {
    if (typeof dispatch === "function") {
      dispatch({ type: "ENROLL_IN_COURSE", courseId });
      message.success("Enrolled successfully!");
    } else {
      message.info("Enrollment will be available when connected to your account.");
    }
  };

  const handleWishlist = (courseId) => {
    if (typeof dispatch === "function") {
      dispatch({ type: "TOGGLE_WISHLIST", courseId });
      message.success(wishlist?.includes(courseId) ? "Removed from wishlist" : "Added to wishlist");
    } else {
      message.info("Wishlist will be available when connected.");
    }
  };

  const getImageSrc = (course) => (imageErrors[course.id] ? PLACEHOLDER_IMAGE : (course.image || PLACEHOLDER_IMAGE));

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>Course Catalog</h2>
        <p>Explore and enroll in new courses</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Input
              placeholder="Search courses..."
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={24} sm={12}>
            <Select
              placeholder="Filter by category"
              style={{ width: "100%" }}
              onChange={handleCategoryFilter}
              options={[
                { label: "All Categories", value: null },
                { label: "IT", value: "IT" },
                { label: "Non-IT", value: "Non-IT" },
              ]}
            />
          </Col>
        </Row>
      </Card>

      <Row gutter={[16, 16]}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Col xs={24} sm={12} md={8} key={course.id}>
              <Card
                hoverable
                cover={
                  <div style={{ height: 180, background: "#f0f0f0", overflow: "hidden" }}>
                    <img
                      src={getImageSrc(course)}
                      alt={course.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={() => setImageErrors((prev) => ({ ...prev, [course.id]: true }))}
                    />
                  </div>
                }
              >
                <div style={{ marginBottom: 12 }}>
                  <h3>{course.title}</h3>
                  <p style={{ color: "#666", fontSize: 12 }}>by {course.instructor}</p>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <Rate disabled defaultValue={course.rating} />
                  <span style={{ marginLeft: 8, fontSize: 12, color: "#666" }}>
                    {course.rating} ({course.students} students)
                  </span>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <Tag color="blue">{course.level}</Tag>
                  <Tag color="cyan">{course.category}</Tag>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <h4 style={{ margin: 0 }}>{course.price}</h4>
                </div>

                <Space style={{ width: "100%", justifyContent: "space-between" }}>
                  <Button type="primary" icon={<ShoppingCartOutlined />} onClick={() => handleEnroll(course.id)}>
                    Enroll
                  </Button>
                  <Button
                    icon={wishlist?.includes(course.id) ? <HeartFilled style={{ color: "#ff4d4f" }} /> : <HeartOutlined />}
                    onClick={() => handleWishlist(course.id)}
                  />
                </Space>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={24}>
            <Empty description="No courses found" />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default CourseCatalog;
