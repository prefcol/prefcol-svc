// API service for handling all API requests
// This is a mock implementation - replace with your actual API service

const mockCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js and more.",
    instructor: "John Smith",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 99.99,
    discountPrice: 49.99,
    rating: 4.8,
    students: 12500,
    duration: "42h",
    level: "Beginner",
    category: "Web Development",
    subcategories: ["HTML", "CSS", "JavaScript", "React"],
    bestseller: true,
    featured: true,
    lastUpdated: "2023-10-15",
  },
  {
    id: "2",
    title: "Python for Data Science and Machine Learning",
    description: "Master Python for data analysis, visualization, and machine learning with real-world projects.",
    instructor: "Sarah Johnson",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 129.99,
    discountPrice: 69.99,
    rating: 4.7,
    students: 8900,
    duration: "38h",
    level: "Intermediate",
    category: "Data Science",
    subcategories: ["Python", "Machine Learning", "Data Analysis"],
    bestseller: true,
    featured: true,
    lastUpdated: "2023-11-05",
  },
  {
    id: "3",
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts and practices to protect systems and networks.",
    instructor: "Michael Chen",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 89.99,
    rating: 4.5,
    students: 5600,
    duration: "28h",
    level: "Beginner",
    category: "Cybersecurity",
    subcategories: ["Network Security", "Ethical Hacking"],
    bestseller: false,
    featured: false,
    lastUpdated: "2023-09-20",
  },
  {
    id: "4",
    title: "AWS Certified Solutions Architect",
    description: "Prepare for the AWS Solutions Architect certification with hands-on labs and practice exams.",
    instructor: "David Wilson",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 149.99,
    discountPrice: 79.99,
    rating: 4.9,
    students: 7200,
    duration: "32h",
    level: "Advanced",
    category: "Cloud Computing",
    subcategories: ["AWS", "Cloud Architecture"],
    bestseller: true,
    featured: true,
    lastUpdated: "2023-12-01",
  },
  {
    id: "5",
    title: "DevOps Engineering: CI/CD with Jenkins",
    description: "Master continuous integration and deployment with Jenkins, Docker, and Kubernetes.",
    instructor: "Emily Rodriguez",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 119.99,
    rating: 4.6,
    students: 4800,
    duration: "26h",
    level: "Intermediate",
    category: "DevOps",
    subcategories: ["Jenkins", "Docker", "Kubernetes"],
    bestseller: false,
    featured: true,
    lastUpdated: "2023-10-10",
  },
  {
    id: "6",
    title: "Networking Fundamentals",
    description: "Learn the basics of computer networking, protocols, and infrastructure.",
    instructor: "Robert Taylor",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 79.99,
    discountPrice: 39.99,
    rating: 4.4,
    students: 3500,
    duration: "22h",
    level: "Beginner",
    category: "Networking",
    subcategories: ["TCP/IP", "Routing", "Switching"],
    bestseller: false,
    featured: false,
    lastUpdated: "2023-08-15",
  },
  {
    id: "7",
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile apps for iOS and Android using Flutter and Dart.",
    instructor: "Jessica Lee",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 109.99,
    discountPrice: 59.99,
    rating: 4.7,
    students: 6200,
    duration: "30h",
    level: "Intermediate",
    category: "Mobile Development",
    subcategories: ["Flutter", "Dart", "iOS", "Android"],
    bestseller: true,
    featured: false,
    lastUpdated: "2023-11-20",
  },
  {
    id: "8",
    title: "Database Design and SQL",
    description: "Master database design principles and SQL for efficient data management.",
    instructor: "Thomas Brown",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 89.99,
    rating: 4.5,
    students: 4100,
    duration: "24h",
    level: "Beginner",
    category: "Databases",
    subcategories: ["SQL", "Database Design", "PostgreSQL"],
    bestseller: false,
    featured: true,
    lastUpdated: "2023-09-05",
  },
  {
    id: "9",
    title: "IT Support Specialist Training",
    description: "Comprehensive training for IT support roles covering hardware, software, and troubleshooting.",
    instructor: "Amanda Garcia",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    thumbnail: "/placeholder.svg?height=150&width=300",
    price: 69.99,
    discountPrice: 34.99,
    rating: 4.6,
    students: 5800,
    duration: "36h",
    level: "Beginner",
    category: "IT Support",
    subcategories: ["Hardware", "Software", "Troubleshooting"],
    bestseller: true,
    featured: false,
    lastUpdated: "2023-10-25",
  },
]

const mockInstructors = [
  {
    id: "1",
    name: "John Smith",
    title: "Web Development Expert",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.8,
    courses: 12,
    students: 45000,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "Data Science Instructor",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.7,
    courses: 8,
    students: 32000,
  },
  {
    id: "3",
    name: "Michael Chen",
    title: "Cybersecurity Specialist",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    courses: 6,
    students: 28000,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    title: "DevOps Engineer",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.6,
    courses: 5,
    students: 18000,
  },
]

const mockCategories = [
  {
    id: "1",
    name: "Web Development",
    courses: 120,
    color: "#1890ff",
  },
  {
    id: "2",
    name: "Data Science",
    courses: 85,
    color: "#52c41a",
  },
  {
    id: "3",
    name: "Cybersecurity",
    courses: 64,
    color: "#fa8c16",
  },
  {
    id: "4",
    name: "Cloud Computing",
    courses: 72,
    color: "#722ed1",
  },
  {
    id: "5",
    name: "DevOps",
    courses: 48,
    color: "#eb2f96",
  },
  {
    id: "6",
    name: "Networking",
    courses: 56,
    color: "#13c2c2",
  },
]

// API service implementation
const apiService = {
  // Course related endpoints
  getCourses: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { data: mockCourses }
  },

  getFeaturedCourses: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return { data: mockCourses.filter((course) => course.featured) }
  },

  getCourseDetails: async (courseId) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const course = mockCourses.find((c) => c.id === courseId)
    return { data: course }
  },

  // User related endpoints
  getUserWishlist: async (userId) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return { data: ["1", "4", "7"] }
  },

  getUserCart: async (userId) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return { data: ["2", "5"] }
  },

  toggleWishlist: async (userId, courseId) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return { success: true }
  },

  addToCart: async (userId, courseId) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return { success: true }
  },

  // Instructor related endpoints
  getPopularInstructors: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 700))
    return { data: mockInstructors }
  },

  // Category related endpoints
  getTopCategories: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { data: mockCategories }
  },

  // Analytics related endpoints
  trackSearch: async (userId, query, category) => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return { success: true }
  },

  trackCourseView: async (userId, courseId, source) => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return { success: true }
  },
}

export default apiService
