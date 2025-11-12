
// Mock data for demonstration purposes
const mockCourses = [
  {
    id: "course-1",
    title: "Advanced Web Development with React",
    description: "Master modern web development techniques with React and related technologies.",
    instructor: "Dr. Jane Smith",
    instructorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    thumbnail: "/placeholder.svg?height=300&width=500",
    progress: 75,
    lastAccessed: "2023-10-20T14:30:00Z",
    category: "IT",
    subcategory: "Web Development",
    status: "in-progress",
    isFavorite: true,
    isNew: false,
    totalLessons: 12,
    completedLessons: 9,
    totalDuration: 720,
    completedDuration: 540,
    nextLesson: {
      id: "module-3",
      title: "State Management with Redux"
    },
    certificate: {
      eligible: false,
      earned: false,
      progress: 75
    },
    modules: [
      {
        id: "module-1",
        title: "Introduction to React",
        description: "A comprehensive introduction to React fundamentals.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "/placeholder.svg?height=180&width=320",
        duration: 300,
        isCompleted: true,
        isLocked: false,
        firstTimeViewing: false,
        status: "completed"
      },
      {
        id: "module-2",
        title: "Component Lifecycle",
        description: "Understanding React component lifecycle methods.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "/placeholder.svg?height=180&width=320",
        duration: 420,
        isCompleted: true,
        isLocked: false,
        firstTimeViewing: false,
        status: "completed"
      },
      {
        id: "module-3",
        title: "State Management with Redux",
        description: "Learn how to manage state with Redux.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "/placeholder.svg?height=180&width=320",
        duration: 540,
        isCompleted: false,
        isLocked: false,
        firstTimeViewing: true,
        status: "in-progress"
      },
      {
        id: "module-4",
        title: "Advanced Hooks",
        description: "Deep dive into React Hooks for state and side effects.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "/placeholder.svg?height=180&width=320",
        duration: 480,
        isCompleted: false,
        isLocked: true,
        firstTimeViewing: true,
        status: "locked"
      }
    ]
  }
];

module.exports = { mockCourses };
