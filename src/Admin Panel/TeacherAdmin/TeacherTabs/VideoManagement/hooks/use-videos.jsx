

import { useState, useEffect, useCallback } from "react"

// Mock data for initial videos
const initialVideos = [
  {
    id: "video-1",
    title: "Introduction to Java Programming",
    description: "A comprehensive guide to getting started with Java programming.",
    url: "https://example.com/videos/java-intro.mp4",
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
    duration: "30:15",
    uploadDate: "2023-05-15T10:30:00Z",
    status: "Approved",
    views: 1500,
    likes: 120,
    category: "Tutorials",
    tags: ["java", "programming", "beginner"],
    visibility: "Public",
  },
  {
    id: "video-2",
    title: "Python for Data Science",
    description: "Learn how to use Python for data analysis and data science projects.",
    url: "https://example.com/videos/python-data-science.mp4",
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
    duration: "45:40",
    uploadDate: "2023-06-02T14:15:00Z",
    status: "Approved",
    views: 1100,
    likes: 80,
    category: "Courses",
    tags: ["python", "data science", "machine learning"],
    visibility: "Public",
  },
  {
    id: "video-3",
    title: "Advanced Java Techniques",
    description: "Dive deeper into advanced Java concepts like multi-threading and generics.",
    url: "https://example.com/videos/advanced-java.mp4",
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
    duration: "1:10:30",
    uploadDate: "2023-06-10T09:00:00Z",
    status: "Pending",
    views: 650,
    likes: 40,
    category: "Advanced",
    tags: ["java", "advanced", "programming"],
    visibility: "Unlisted",
  },
  {
    id: "video-4",
    title: "Web Development with Python & Flask",
    description: "A workshop on building dynamic web applications using Python and Flask.",
    url: "https://example.com/videos/python-flask.mp4",
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
    duration: "2:00:10",
    uploadDate: "2023-06-15T13:30:00Z",
    status: "Rejected",
    views: 320,
    likes: 15,
    category: "Workshops",
    tags: ["python", "flask", "web development"],
    visibility: "Private",
  },
  {
    id: "video-5",
    title: "Introduction to Machine Learning with Python",
    description: "Get started with machine learning algorithms and models using Python.",
    url: "https://example.com/videos/ml-python.mp4",
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
    duration: "50:00",
    uploadDate: "2023-06-20T11:45:00Z",
    status: "Approved",
    views: 50,
    likes: 75,
    category: "Courses",
    tags: ["python", "machine learning", "ai"],
    visibility: "Public",
  },
]


export const useVideos = () => {
  const [videos, setVideos] = useState(initialVideos)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [sortBy, setSortBy] = useState("uploadDate")
  const [sortOrder, setSortOrder] = useState("desc")

  // Calculate video stats
  const stats = {
    total: videos.length,
    approved: videos.filter((video) => video.status === "Approved").length,
    pending: videos.filter((video) => video.status === "Pending").length,
    rejected: videos.filter((video) => video.status === "Rejected").length,
    totalViews: videos.reduce((sum, video) => sum + video.views, 0),
    totalLikes: videos.reduce((sum, video) => sum + video.likes, 0),
  }

  // Filter videos based on search query and status filter
  const filteredVideos = videos
    .filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesStatus = filterStatus ? video.status === filterStatus : true

      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      // Sort by the selected field and order
      if (sortBy === "title") {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      } else if (sortBy === "views") {
        return sortOrder === "asc" ? a.views - b.views : b.views - a.views
      } else if (sortBy === "likes") {
        return sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes
      } else {
        // Default sort by upload date
        return sortOrder === "asc"
          ? new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
          : new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
      }
    })

  // Fetch videos from API
  const fetchVideos = useCallback(async () => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      const response = await fetch('/api/videos')
      const data = await response.json()
      setVideos(data)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLoading(false)
    } catch (error) {
      console.error("Error fetching videos:", error)
      setLoading(false)
    }
  }, [])

  // Add a new video
  const addVideo = useCallback(async (video) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(video)
      })
      const data = await response.json()

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setVideos((prev) => [...prev, video])
      setLoading(false)
    } catch (error) {
      console.error("Error adding video:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Update an existing video
  const updateVideo = useCallback(async (id, updatedFields) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      const response = await fetch(`/api/videos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields)
      })
      const data = await response.json()

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setVideos((prev) => prev.map((video) => (video.id === id ? { ...video, ...updatedFields } : video)))
      setLoading(false)
    } catch (error) {
      console.error("Error updating video:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Delete a video
  const deleteVideo = useCallback(async (id) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      await fetch(`/api/videos/${id}`, {
        method: 'DELETE'
      })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setVideos((prev) => prev.filter((video) => video.id !== id))
      setLoading(false)
    } catch (error) {
      console.error("Error deleting video:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Update video status
  const updateVideoStatus = useCallback(
    async (id, status) => {
      return updateVideo(id, { status })
    },
    [updateVideo],
  )

  // Load videos on initial mount
  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  return {
    videos,
    loading,
    stats,
    filteredVideos,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    addVideo,
    updateVideo,
    deleteVideo,
    updateVideoStatus,
    fetchVideos,
  }
}

