"use client"

import { useState, useCallback } from "react"

// Mock data for notifications
const initialNotifications = [
  {
    id: "notification-1",
    title: "Video Approved",
    message: "Your video 'Introduction to Java Programming' has been approved.",
    type: "success",
    read: false,
    timestamp: "2023-06-25T14:30:00Z",
    relatedId: "video-1",
  },
  {
    id: "notification-2",
    title: "New Comment",
    message: "John Doe commented on your video 'Python for Data Science'.",
    type: "info",
    read: false,
    timestamp: "2023-06-24T10:15:00Z",
    relatedId: "video-2",
  },
  {
    id: "notification-3",
    title: "Playlist Shared",
    message: "Dr. Emily Green shared the playlist 'Java Programming Basics' with you.",
    type: "info",
    read: true,
    timestamp: "2023-06-23T09:45:00Z",
    relatedId: "playlist-1",
  },
  {
    id: "notification-4",
    title: "Video Rejected",
    message: "Your video 'Web Development with Python & Flask' has been rejected. Please review the feedback.",
    type: "error",
    read: false,
    timestamp: "2023-06-22T16:20:00Z",
    relatedId: "video-4",
  },
  {
    id: "notification-5",
    title: "New Assignment Created",
    message: "A new assignment 'Java OOP Concepts' has been created for you.",
    type: "warning",
    read: true,
    timestamp: "2023-06-21T11:30:00Z",
    relatedId: "assignment-1",
  },
  {
    id: "notification-6",
    title: "Course Update",
    message: "The course 'Machine Learning with Python' has been updated with new content.",
    type: "info",
    read: false,
    timestamp: "2023-06-20T14:00:00Z",
    relatedId: "course-1",
  },
]

export const useNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [loading, setLoading] = useState(false)

  // Calculate unread count
  const unreadCount = notifications.filter((notification) => !notification.read).length

  // Fetch notifications
  const fetchNotifications = useCallback(async () => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/notifications');
      // const data = await response.json();
      // setNotifications(data);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800))
      setLoading(false)
    } catch (error) {
      console.error("Error fetching notifications:", error)
      setLoading(false)
    }
  }, [])

  // Mark notification as read
  const markAsRead = useCallback(async (id) => {
    try {
      // In a real app, this would be an API call
      // await fetch(`/api/notifications/${id}/read`, {
      //   method: 'PUT'
      // });

      // Update local state
      setNotifications((prev) =>
        prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
      )
    } catch (error) {
      console.error("Error marking notification as read:", error)
    }
  }, [])

  // Mark all notifications as read
  const markAllAsRead = useCallback(async () => {
    try {
      // In a real app, this would be an API call
      // await fetch('/api/notifications/read-all', {
      //   method: 'PUT'
      // });

      // Update local state
      setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
    } catch (error) {
      console.error("Error marking all notifications as read:", error)
    }
  }, [])

  // Clear all notifications
  const clearNotifications = useCallback(async () => {
    try {
      // In a real app, this would be an API call
      // await fetch('/api/notifications/clear', {
      //   method: 'DELETE'
      // });

      // Update local state
      setNotifications([])
    } catch (error) {
      console.error("Error clearing notifications:", error)
    }
  }, [])

  // Add a new notification (for testing)
  const addNotification = useCallback((notification) => {
    setNotifications((prev) => [
      {
        id: `notification-${Date.now()}`,
        read: false,
        timestamp: new Date().toISOString(),
        ...notification,
      },
      ...prev,
    ])
  }, [])

  return {
    notifications,
    loading,
    unreadCount,
    fetchNotifications,
    markAsRead,
    markAllAsRead,
    clearNotifications,
    addNotification,
  }
}

