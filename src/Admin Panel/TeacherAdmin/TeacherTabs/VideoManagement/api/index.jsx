// // API endpoints for the teacher portal

// // Base URL for API requests
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.teacherportal.example.com"

// // Helper function for making API requests
// const fetchAPI = async (endpoint, options = {}) => {
//   try {
//     const url = `${API_BASE_URL}${endpoint}`

//     // Default options
//     const defaultOptions = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }

//     const response = await fetch(url, { ...defaultOptions, ...options })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "API request failed")
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("API Error:", error)
//     throw error
//   }
// }

// // Videos API
// export const videosAPI = {
//   // Get all videos
//   getVideos: async (params = {}) => {
//     const queryParams = new URLSearchParams(params).toString()
//     return fetchAPI(`/videos?${queryParams}`)
//   },

//   // Get a single video by ID
//   getVideo: async (id) => {
//     return fetchAPI(`/videos/${id}`)
//   },

//   // Create a new video
//   createVideo: async (videoData) => {
//     return fetchAPI("/videos", {
//       method: "POST",
//       body: JSON.stringify(videoData),
//     })
//   },

//   // Update a video
//   updateVideo: async (id, videoData) => {
//     return fetchAPI(`/videos/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(videoData),
//     })
//   },

//   // Delete a video
//   deleteVideo: async (id) => {
//     return fetchAPI(`/videos/${id}`, {
//       method: "DELETE",
//     })
//   },

//   // Update video status
//   updateVideoStatus: async (id, status) => {
//     return fetchAPI(`/videos/${id}/status`, {
//       method: "PUT",
//       body: JSON.stringify({ status }),
//     })
//   },
// }

// // Playlists API
// export const playlistsAPI = {
//   // Get all playlists
//   getPlaylists: async (params = {}) => {
//     const queryParams = new URLSearchParams(params).toString()
//     return fetchAPI(`/playlists?${queryParams}`)
//   },

//   // Get a single playlist by ID
//   getPlaylist: async (id) => {
//     return fetchAPI(`/playlists/${id}`)
//   },

//   // Create a new playlist
//   createPlaylist: async (playlistData) => {
//     return fetchAPI("/playlists", {
//       method: "POST",
//       body: JSON.stringify(playlistData),
//     })
//   },

//   // Update a playlist
//   updatePlaylist: async (id, playlistData) => {
//     return fetchAPI(`/playlists/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(playlistData),
//     })
//   },

//   // Delete a playlist
//   deletePlaylist: async (id) => {
//     return fetchAPI(`/playlists/${id}`, {
//       method: "DELETE",
//     })
//   },

//   // Add video to playlist
//   addVideoToPlaylist: async (playlistId, videoId) => {
//     return fetchAPI(`/playlists/${playlistId}/videos`, {
//       method: "POST",
//       body: JSON.stringify({ videoId }),
//     })
//   },

//   // Remove video from playlist
//   removeVideoFromPlaylist: async (playlistId, videoId) => {
//     return fetchAPI(`/playlists/${playlistId}/videos/${videoId}`, {
//       method: "DELETE",
//     })
//   },

//   // Reorder videos in playlist
//   reorderPlaylistVideos: async (playlistId, videoIds) => {
//     return fetchAPI(`/playlists/${playlistId}/reorder`, {
//       method: "PUT",
//       body: JSON.stringify({ videoIds }),
//     })
//   },
// }

// // Analytics API
// export const analyticsAPI = {
//   // Get analytics data
//   getAnalytics: async (params = {}) => {
//     const queryParams = new URLSearchParams(params).toString()
//     return fetchAPI(`/analytics?${queryParams}`)
//   },

//   // Get video-specific analytics
//   getVideoAnalytics: async (videoId, params = {}) => {
//     const queryParams = new URLSearchParams(params).toString()
//     return fetchAPI(`/analytics/videos/${videoId}?${queryParams}`)
//   },
// }

// // Students API
// export const studentsAPI = {
//   // Get all students
//   getStudents: async (params = {}) => {
//     const queryParams = new URLSearchParams(params).toString()
//     return fetchAPI(`/students?${queryParams}`)
//   },

//   // Get a single student by ID
//   getStudent: async (id) => {
//     return fetchAPI(`/students/${id}`)
//   },

//   // Create a new student
//   createStudent: async (studentData) => {
//     return fetchAPI("/students", {
//       method: "POST",
//       body: JSON.stringify(studentData),
//     })
//   },

//   // Update a student
//   updateStudent: async (id, studentData) => {
//     return fetchAPI(`/students/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(studentData),
//     })
//   },

//   // Delete a student
//   deleteStudent: async (id) => {
//     return fetchAPI(`/students/${id}`, {
//       method: "DELETE",
//     })
//   },
// }

// // Courses API
// export const coursesAPI = {
//   // Get all courses
//   getCourses: async (params = {}) => {
//     const queryParams = new URLSearchParams(params).toString()
//     return fetchAPI(`/courses?${queryParams}`)
//   },

//   // Get a single course by ID
//   getCourse: async (id) => {
//     return fetchAPI(`/courses/${id}`)
//   },

//   // Create a new course
//   createCourse: async (courseData) => {
//     return fetchAPI("/courses", {
//       method: "POST",
//       body: JSON.stringify(courseData),
//     })
//   },

//   // Update a course
//   updateCourse: async (id, courseData) => {
//     return fetchAPI(`/courses/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(courseData),
//     })
//   },

//   // Delete a course
//   deleteCourse: async (id) => {
//     return fetchAPI(`/courses/${id}`, {
//       method: "DELETE",
//     })
//   },
// }

// // Assignments API
// export const assignmentsAPI = {
//   // Get all assignments
//   getAssignments: async (params = {}) => {
//     const queryParams = new URLSearchParams(params).toString();
//     return fetchAPI(`/assignments?${queryParams}`);
//   },
  
//   // Get a single assignment by ID
//   getAssignment: async (id) => {
//     return fetchAPI(`/assignments/${id}`);
//   },
  
//   // Create a new assignment
//   createAssignment: async (assignmentData) => {
//         return fetchAPI('/assignments', {
//           method: 'POST',
//           body: JSON.stringify(assignmentData)
//         });
//       },
//     };




// API endpoints for the teacher portal

// Base URL for API requests
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.teacherportal.example.com"

// Helper function for making API requests
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`

    // Default options
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    const response = await fetch(url, { ...defaultOptions, ...options })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "API request failed")
    }

    return await response.json()
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}

// Videos API
export const videosAPI = {
  // Get all videos
  getVideos: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/videos?${queryParams}`)
  },

  // Get a single video by ID
  getVideo: async (id) => {
    return fetchAPI(`/videos/${id}`)
  },

  // Create a new video
  createVideo: async (videoData) => {
    return fetchAPI("/videos", {
      method: "POST",
      body: JSON.stringify(videoData),
    })
  },

  // Update a video
  updateVideo: async (id, videoData) => {
    return fetchAPI(`/videos/${id}`, {
      method: "PUT",
      body: JSON.stringify(videoData),
    })
  },

  // Delete a video
  deleteVideo: async (id) => {
    return fetchAPI(`/videos/${id}`, {
      method: "DELETE",
    })
  },

  // Update video status
  updateVideoStatus: async (id, status) => {
    return fetchAPI(`/videos/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    })
  },

  // Upload video file
  uploadVideo: async (formData, onProgress) => {
    const xhr = new XMLHttpRequest()

    return new Promise((resolve, reject) => {
      xhr.open("POST", `${API_BASE_URL}/videos/upload`)
      xhr.setRequestHeader("Authorization", `Bearer ${localStorage.getItem("token")}`)

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          const percentComplete = Math.round((event.loaded / event.total) * 100)
          onProgress(percentComplete)
        }
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error(`Upload failed with status ${xhr.status}`))
        }
      }

      xhr.onerror = () => {
        reject(new Error("Upload failed"))
      }

      xhr.send(formData)
    })
  },

  // Get video analytics
  getVideoAnalytics: async (id, params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/videos/${id}/analytics?${queryParams}`)
  },

  // Add comment to video
  addComment: async (id, comment) => {
    return fetchAPI(`/videos/${id}/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
    })
  },

  // Get video comments
  getComments: async (id) => {
    return fetchAPI(`/videos/${id}/comments`)
  },
}

// Playlists API
export const playlistsAPI = {
  // Get all playlists
  getPlaylists: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/playlists?${queryParams}`)
  },

  // Get a single playlist by ID
  getPlaylist: async (id) => {
    return fetchAPI(`/playlists/${id}`)
  },

  // Create a new playlist
  createPlaylist: async (playlistData) => {
    return fetchAPI("/playlists", {
      method: "POST",
      body: JSON.stringify(playlistData),
    })
  },

  // Update a playlist
  updatePlaylist: async (id, playlistData) => {
    return fetchAPI(`/playlists/${id}`, {
      method: "PUT",
      body: JSON.stringify(playlistData),
    })
  },

  // Delete a playlist
  deletePlaylist: async (id) => {
    return fetchAPI(`/playlists/${id}`, {
      method: "DELETE",
    })
  },

  // Add video to playlist
  addVideoToPlaylist: async (playlistId, videoId) => {
    return fetchAPI(`/playlists/${playlistId}/videos`, {
      method: "POST",
      body: JSON.stringify({ videoId }),
    })
  },

  // Remove video from playlist
  removeVideoFromPlaylist: async (playlistId, videoId) => {
    return fetchAPI(`/playlists/${playlistId}/videos/${videoId}`, {
      method: "DELETE",
    })
  },

  // Reorder videos in playlist
  reorderPlaylistVideos: async (playlistId, videoIds) => {
    return fetchAPI(`/playlists/${playlistId}/reorder`, {
      method: "PUT",
      body: JSON.stringify({ videoIds }),
    })
  },

  // Share playlist
  sharePlaylist: async (playlistId, recipients, message) => {
    return fetchAPI(`/playlists/${playlistId}/share`, {
      method: "POST",
      body: JSON.stringify({ recipients, message }),
    })
  },
}

// Analytics API
export const analyticsAPI = {
  // Get analytics data
  getAnalytics: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/analytics?${queryParams}`)
  },

  // Get video-specific analytics
  getVideoAnalytics: async (videoId, params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/analytics/videos/${videoId}?${queryParams}`)
  },

  // Get student engagement analytics
  getStudentEngagement: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/analytics/student-engagement?${queryParams}`)
  },

  // Export analytics data
  exportAnalytics: async (format = "csv", params = {}) => {
    const queryParams = new URLSearchParams({ ...params, format }).toString()
    return fetchAPI(`/analytics/export?${queryParams}`)
  },
}

// Students API
export const studentsAPI = {
  // Get all students
  getStudents: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/students?${queryParams}`)
  },

  // Get a single student by ID
  getStudent: async (id) => {
    return fetchAPI(`/students/${id}`)
  },

  // Create a new student
  createStudent: async (studentData) => {
    return fetchAPI("/students", {
      method: "POST",
      body: JSON.stringify(studentData),
    })
  },

  // Update a student
  updateStudent: async (id, studentData) => {
    return fetchAPI(`/students/${id}`, {
      method: "PUT",
      body: JSON.stringify(studentData),
    })
  },

  // Delete a student
  deleteStudent: async (id) => {
    return fetchAPI(`/students/${id}`, {
      method: "DELETE",
    })
  },

  // Get student progress
  getStudentProgress: async (id) => {
    return fetchAPI(`/students/${id}/progress`)
  },

  // Get student activity
  getStudentActivity: async (id, params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/students/${id}/activity?${queryParams}`)
  },

  // Enroll student in course
  enrollStudent: async (studentId, courseId) => {
    return fetchAPI(`/students/${studentId}/enroll`, {
      method: "POST",
      body: JSON.stringify({ courseId }),
    })
  },

  // Unenroll student from course
  unenrollStudent: async (studentId, courseId) => {
    return fetchAPI(`/students/${studentId}/courses/${courseId}`, {
      method: "DELETE",
    })
  },

  // Import students (bulk)
  importStudents: async (studentsData) => {
    return fetchAPI("/students/import", {
      method: "POST",
      body: JSON.stringify({ students: studentsData }),
    })
  },
}

// Courses API
export const coursesAPI = {
  // Get all courses
  getCourses: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/courses?${queryParams}`)
  },

  // Get a single course by ID
  getCourse: async (id) => {
    return fetchAPI(`/courses/${id}`)
  },

  // Create a new course
  createCourse: async (courseData) => {
    return fetchAPI("/courses", {
      method: "POST",
      body: JSON.stringify(courseData),
    })
  },

  // Update a course
  updateCourse: async (id, courseData) => {
    return fetchAPI(`/courses/${id}`, {
      method: "PUT",
      body: JSON.stringify(courseData),
    })
  },

  // Delete a course
  deleteCourse: async (id) => {
    return fetchAPI(`/courses/${id}`, {
      method: "DELETE",
    })
  },

  // Get course students
  getCourseStudents: async (id) => {
    return fetchAPI(`/courses/${id}/students`)
  },

  // Add content to course
  addCourseContent: async (courseId, contentData) => {
    return fetchAPI(`/courses/${courseId}/content`, {
      method: "POST",
      body: JSON.stringify(contentData),
    })
  },

  // Get course content
  getCourseContent: async (courseId) => {
    return fetchAPI(`/courses/${courseId}/content`)
  },

  // Update course content
  updateCourseContent: async (courseId, contentId, contentData) => {
    return fetchAPI(`/courses/${courseId}/content/${contentId}`, {
      method: "PUT",
      body: JSON.stringify(contentData),
    })
  },

  // Delete course content
  deleteCourseContent: async (courseId, contentId) => {
    return fetchAPI(`/courses/${courseId}/content/${contentId}`, {
      method: "DELETE",
    })
  },
}

// Assignments API
export const assignmentsAPI = {
  // Get all assignments
  getAssignments: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    return fetchAPI(`/assignments?${queryParams}`)
  },

  // Get a single assignment by ID
  getAssignment: async (id) => {
    return fetchAPI(`/assignments/${id}`)
  },

  // Create a new assignment
  createAssignment: async (assignmentData) => {
    return fetchAPI("/assignments", {
      method: "POST",
      body: JSON.stringify(assignmentData),
    })
  },

  // Update an assignment
  updateAssignment: async (id, assignmentData) => {
    return fetchAPI(`/assignments/${id}`, {
      method: "PUT",
      body: JSON.stringify(assignmentData),
    })
  },

  // Delete an assignment
  deleteAssignment: async (id) => {
    return fetchAPI(`/assignments/${id}`, {
      method: "DELETE",
    })
  },

  // Get assignment submissions
  getSubmissions: async (assignmentId) => {
    return fetchAPI(`/assignments/${assignmentId}/submissions`)
  },

  // Grade submission
  gradeSubmission: async (assignmentId, submissionId, gradeData) => {
    return fetchAPI(`/assignments/${assignmentId}/submissions/${submissionId}/grade`, {
      method: "POST",
      body: JSON.stringify(gradeData),
    })
  },
}

// Notifications API
export const notificationsAPI = {
  // Get all notifications
  getNotifications: async () => {
    return fetchAPI("/notifications")
  },

  // Mark notification as read
  markAsRead: async (id) => {
    return fetchAPI(`/notifications/${id}/read`, {
      method: "PUT",
    })
  },

  // Mark all notifications as read
  markAllAsRead: async () => {
    return fetchAPI("/notifications/read-all", {
      method: "PUT",
    })
  },

  // Delete notification
  deleteNotification: async (id) => {
    return fetchAPI(`/notifications/${id}`, {
      method: "DELETE",
    })
  },

  // Clear all notifications
  clearNotifications: async () => {
    return fetchAPI("/notifications/clear", {
      method: "DELETE",
    })
  },

  // Update notification settings
  updateSettings: async (settings) => {
    return fetchAPI("/notifications/settings", {
      method: "PUT",
      body: JSON.stringify(settings),
    })
  },
}

// User API
export const userAPI = {
  // Get current user
  getCurrentUser: async () => {
    return fetchAPI("/user")
  },

  // Update user profile
  updateProfile: async (profileData) => {
    return fetchAPI("/user/profile", {
      method: "PUT",
      body: JSON.stringify(profileData),
    })
  },

  // Change password
  changePassword: async (passwordData) => {
    return fetchAPI("/user/password", {
      method: "PUT",
      body: JSON.stringify(passwordData),
    })
  },

  // Get user settings
  getSettings: async () => {
    return fetchAPI("/user/settings")
  },

  // Update user settings
  updateSettings: async (settingsData) => {
    return fetchAPI("/user/settings", {
      method: "PUT",
      body: JSON.stringify(settingsData),
    })
  },

  // Delete account
  deleteAccount: async () => {
    return fetchAPI("/user", {
      method: "DELETE",
    })
  },
}

// Search API
export const searchAPI = {
  // Global search
  search: async (query, filters = {}) => {
    const queryParams = new URLSearchParams({
      q: query,
      ...filters,
    }).toString()
    return fetchAPI(`/search?${queryParams}`)
  },

  // Search videos
  searchVideos: async (query, filters = {}) => {
    const queryParams = new URLSearchParams({
      q: query,
      ...filters,
    }).toString()
    return fetchAPI(`/search/videos?${queryParams}`)
  },

  // Search playlists
  searchPlaylists: async (query, filters = {}) => {
    const queryParams = new URLSearchParams({
      q: query,
      ...filters,
    }).toString()
    return fetchAPI(`/search/playlists?${queryParams}`)
  },

  // Search students
  searchStudents: async (query, filters = {}) => {
    const queryParams = new URLSearchParams({
      q: query,
      ...filters,
    }).toString()
    return fetchAPI(`/search/students?${queryParams}`)
  },
}

export default {
  videosAPI,
  playlistsAPI,
  analyticsAPI,
  studentsAPI,
  coursesAPI,
  assignmentsAPI,
  notificationsAPI,
  userAPI,
  searchAPI,
}

