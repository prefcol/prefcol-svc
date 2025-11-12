"use client"

import { useState, useEffect, useMemo } from "react"

// Mock data for initial videos
const mockVideos = [

    {
      id: "1",
      name: "intro-to-web-dev.mp4",
      title: "Introduction to Web Development",
      description: "Learn the basics of web development using HTML, CSS, and JavaScript.",
      category: "IT Courses",
      tags: ["web development", "HTML", "CSS", "JavaScript"],
      status: "Approved",
      uploadDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      uploader: "Mr. Anderson",
      duration: 2100, // 35:00
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Web+Development",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      size: 300000000, // 300MB
      views: 150,
    },
    {
      id: "2",
      name: "cybersecurity-fundamentals.mp4",
      title: "Cybersecurity Fundamentals",
      description: "Understand the essentials of cybersecurity and data protection.",
      category: "IT Courses",
      tags: ["cybersecurity", "network security", "data protection"],
      status: "Approved",
      uploadDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      uploader: "Dr. Patel",
      duration: 1800, // 30:00
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Cybersecurity",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      size: 280000000, // 280MB
      views: 102,
    },
    {
      id: "3",
      name: "python-data-science.mp4",
      title: "Python for Data Science",
      description: "Master Python libraries like NumPy, Pandas, and Matplotlib for data analysis.",
      category: "IT Courses",
      tags: ["Python", "data science", "machine learning"],
      status: "Pending",
      uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      uploader: "Ms. Lee",
      duration: 2700, // 45:00
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Data+Science",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      size: 350000000, // 350MB
      views: 78,
    },
    {
      id: "4",
      name: "cloud-computing-basics.mp4",
      title: "Cloud Computing Basics",
      description: "An introductory guide to cloud computing services and deployment models.",
      category: "IT Courses",
      tags: ["cloud computing", "AWS", "Azure", "GCP"],
      status: "Rejected",
      uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      uploader: "Mr. Chang",
      duration: 2400, // 40:00
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Cloud+Computing",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      size: 400000000, // 400MB
      views: 45,
    },
  ];
  


export function useVideos() {
  const [videos, setVideos] = useState(mockVideos)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [sortBy, setSortBy] = useState("uploadDate")
  const [sortOrder, setSortOrder] = useState("desc")

  // Calculate stats
  const stats = useMemo(() => {
    const total = videos.length
    const approved = videos.filter((video) => video.status === "Approved").length
    const rejected = videos.filter((video) => video.status === "Rejected").length
    const pending = videos.filter((video) => video.status === "Pending").length

    return {
      total,
      approved,
      rejected,
      pending,
    }
  }, [videos])

  // Filter and sort videos
  const filteredVideos = useMemo(() => {
    return videos
      .filter(
        (video) =>
          (filterStatus === "All" || video.status === filterStatus) &&
          (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (video.description && video.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (video.tags && video.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))),
      )
      .sort((a, b) => {
        if (sortBy === "title") {
          return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        } else if (sortBy === "status") {
          return sortOrder === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)
        } else if (sortBy === "category") {
          return sortOrder === "asc"
            ? (a.category || "").localeCompare(b.category || "")
            : (b.category || "").localeCompare(a.category || "")
        } else if (sortBy === "duration") {
          return sortOrder === "asc" ? a.duration - b.duration : b.duration - a.duration
        } else if (sortBy === "views") {
          return sortOrder === "asc" ? a.views - b.views : b.views - a.views
        } else {
          // Default: sort by uploadDate
          return sortOrder === "asc"
            ? new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
            : new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
        }
      })
  }, [videos, searchQuery, filterStatus, sortBy, sortOrder])

  // Fetch videos (simulated)
  const fetchVideos = async () => {
    setLoading(true)
    try {
      // In a real application, this would be an API call
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Keep using mock data for now
    } catch (error) {
      console.error("Error fetching videos:", error)
    } finally {
      setLoading(false)
    }
  }

  // Add a new video
  const addVideo = (video) => {
    setVideos((prev) => [...prev, video])
  }

  // Update video details
  const updateVideo = async (videoId, details) => {
    // In a real application, this would be an API call
    setVideos((prev) => prev.map((video) => (video.id === videoId ? { ...video, ...details } : video)))

    return true
  }

  // Delete a video
  const deleteVideo = async (videoId) => {
    // In a real application, this would be an API call
    setVideos((prev) => prev.filter((video) => video.id !== videoId))

    return true
  }

  // Update video status
  const updateVideoStatus = async (videoId, status) => {
    return updateVideo(videoId, { status })
  }

  // Initial fetch
  useEffect(() => {
    fetchVideos()
  }, [])

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

