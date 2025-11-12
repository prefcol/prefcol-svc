"use client"

import { useState, useEffect, useCallback } from "react"

// Mock data for initial playlists
const initialPlaylists = [
  {
    id: "playlist-1",
    name: "Java Programming Basics",
    description: "Learn the foundational concepts of Java programming.",
    visibility: "Public",
    category: "Lectures",
    createdAt: "2023-05-20T10:00:00Z",
    updatedAt: "2023-06-15T14:30:00Z",
    videoIds: ["video-1", "video-3"],
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "playlist-2",
    name: "Python for Data Science",
    description: "A collection of Python tutorials for data analysis and machine learning.",
    visibility: "Public",
    category: "Courses",
    createdAt: "2023-06-01T09:15:00Z",
    updatedAt: "2023-06-10T11:45:00Z",
    videoIds: ["video-2", "video-5"],
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "playlist-3",
    name: "Advanced Java Concepts",
    description: "Advanced topics in Java including multi-threading and design patterns.",
    visibility: "Private",
    category: "Advanced",
    createdAt: "2023-06-05T15:30:00Z",
    updatedAt: "2023-06-20T08:20:00Z",
    videoIds: ["video-3"],
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "playlist-4",
    name: "Machine Learning with Python",
    description: "Step-by-step tutorials on building machine learning models using Python.",
    visibility: "Public",
    category: "Courses",
    createdAt: "2023-06-10T12:00:00Z",
    updatedAt: "2023-06-18T09:00:00Z",
    videoIds: ["video-4", "video-5"],
    thumbnailUrl: "/placeholder.svg?height=180&width=320",
  }
]


export const usePlaylists = () => {
  const [playlists, setPlaylists] = useState(initialPlaylists)
  const [loading, setLoading] = useState(false)

  // Fetch playlists from API
  const fetchPlaylists = useCallback(async () => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/playlists')
      // const data = await response.json()
      // setPlaylists(data)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLoading(false)
    } catch (error) {
      console.error("Error fetching playlists:", error)
      setLoading(false)
    }
  }, [])

  // Add a new playlist
  const addPlaylist = useCallback(async (playlist) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/playlists', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(playlist)
      // })
      // const data = await response.json()

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setPlaylists((prev) => [...prev, playlist])
      setLoading(false)
    } catch (error) {
      console.error("Error adding playlist:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Update an existing playlist
  const updatePlaylist = useCallback(async (id, updatedFields) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/playlists/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedFields)
      // })
      // const data = await response.json()

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setPlaylists((prev) =>
        prev.map((playlist) =>
          playlist.id === id ? { ...playlist, ...updatedFields, updatedAt: new Date().toISOString() } : playlist,
        ),
      )
      setLoading(false)
    } catch (error) {
      console.error("Error updating playlist:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Delete a playlist
  const deletePlaylist = useCallback(async (id) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // await fetch(`/api/playlists/${id}`, {
      //   method: 'DELETE'
      // })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setPlaylists((prev) => prev.filter((playlist) => playlist.id !== id))
      setLoading(false)
    } catch (error) {
      console.error("Error deleting playlist:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Add a video to a playlist
  const addVideoToPlaylist = useCallback(async (playlistId, videoId) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/playlists/${playlistId}/videos`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ videoId })
      // })
      // const data = await response.json()

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setPlaylists((prev) =>
        prev.map((playlist) => {
          if (playlist.id === playlistId && !playlist.videoIds.includes(videoId)) {
            return {
              ...playlist,
              videoIds: [...playlist.videoIds, videoId],
              updatedAt: new Date().toISOString(),
            }
          }
          return playlist
        }),
      )
      setLoading(false)
    } catch (error) {
      console.error("Error adding video to playlist:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Remove a video from a playlist
  const removeVideoFromPlaylist = useCallback(async (playlistId, videoId) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // await fetch(`/api/playlists/${playlistId}/videos/${videoId}`, {
      //   method: 'DELETE'
      // })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setPlaylists((prev) =>
        prev.map((playlist) => {
          if (playlist.id === playlistId) {
            return {
              ...playlist,
              videoIds: playlist.videoIds.filter((id) => id !== videoId),
              updatedAt: new Date().toISOString(),
            }
          }
          return playlist
        }),
      )
      setLoading(false)
    } catch (error) {
      console.error("Error removing video from playlist:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Reorder videos in a playlist
  const reorderPlaylistVideos = useCallback(async (playlistId, videoIds) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/playlists/${playlistId}/reorder`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ videoIds })
      // })
      // const data = await response.json()

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setPlaylists((prev) =>
        prev.map((playlist) => {
          if (playlist.id === playlistId) {
            return {
              ...playlist,
              videoIds,
              updatedAt: new Date().toISOString(),
            }
          }
          return playlist
        }),
      )
      setLoading(false)
    } catch (error) {
      console.error("Error reordering playlist videos:", error)
      setLoading(false)
      throw error
    }
  }, [])

  // Load playlists on initial mount
  useEffect(() => {
    fetchPlaylists()
  }, [fetchPlaylists])

  return {
    playlists,
    loading,
    addPlaylist,
    updatePlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    reorderPlaylistVideos,
    fetchPlaylists,
  }
}

