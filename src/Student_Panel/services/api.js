// import axios from "axios"

// // Create an axios instance with default config
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || "https://api.chamberoflearning.com/v1",
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// })

// // Request interceptor for adding auth token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("auth_token")
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// // Response interceptor for handling errors
// api.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     // Handle token expiration
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("auth_token")
//       localStorage.removeItem("user")
//       window.location.href = "/login"
//     }
//     return Promise.reject(error)
//   },
// )

// // Auth API
// export const authAPI = {
//   login: (email, password) => api.post("/auth/login", { email, password }),
//   register: (userData) => api.post("/auth/register", userData),
//   logout: () => api.post("/auth/logout"),
//   refreshToken: () => api.post("/auth/refresh-token"),
//   forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
//   resetPassword: (token, password) => api.post("/auth/reset-password", { token, password }),
//   getProfile: () => api.get("/auth/profile"),
//   updateProfile: (userData) => api.put("/auth/profile", userData),
//   changePassword: (passwordData) => api.post("/auth/change-password", passwordData),
// }

// // Courses API
// export const coursesAPI = {
//   getAllCourses: (params) => api.get("/courses", { params }),
//   getCourseById: (id) => api.get(`/courses/${id}`),
//   getEnrolledCourses: () => api.get("/courses/enrolled"),
//   enrollCourse: (courseId) => api.post(`/courses/${courseId}/enroll`),
//   getCourseProgress: (courseId) => api.get(`/courses/${courseId}/progress`),
//   updateCourseProgress: (courseId, data) => api.post(`/courses/${courseId}/progress`, data),
//   getRecommendedCourses: () => api.get("/courses/recommended"),
//   searchCourses: (query) => api.get("/courses/search", { params: { query } }),
//   getCourseLessons: (courseId) => api.get(`/courses/${courseId}/lessons`),
//   getCourseReviews: (courseId) => api.get(`/courses/${courseId}/reviews`),
//   addCourseReview: (courseId, reviewData) => api.post(`/courses/${courseId}/reviews`, reviewData),
// }

// // Lessons API
// export const lessonsAPI = {
//   getLessonById: (courseId, lessonId) => api.get(`/courses/${courseId}/lessons/${lessonId}`),
//   markLessonComplete: (courseId, lessonId) => api.post(`/courses/${courseId}/lessons/${lessonId}/complete`),
//   getLessonNotes: (courseId, lessonId) => api.get(`/courses/${courseId}/lessons/${lessonId}/notes`),
//   addLessonNote: (courseId, lessonId, noteData) => api.post(`/courses/${courseId}/lessons/${lessonId}/notes`, noteData),
//   updateLessonNote: (courseId, lessonId, noteId, noteData) =>
//     api.put(`/courses/${courseId}/lessons/${lessonId}/notes/${noteId}`, noteData),
//   deleteLessonNote: (courseId, lessonId, noteId) =>
//     api.delete(`/courses/${courseId}/lessons/${lessonId}/notes/${noteId}`),
//   getLessonDiscussions: (courseId, lessonId) => api.get(`/courses/${courseId}/lessons/${lessonId}/discussions`),
//   addLessonComment: (courseId, lessonId, commentData) =>
//     api.post(`/courses/${courseId}/lessons/${lessonId}/discussions`, commentData),
//   replyToComment: (courseId, lessonId, commentId, replyData) =>
//     api.post(`/courses/${courseId}/lessons/${lessonId}/discussions/${commentId}/replies`, replyData),
// }

// // Videos API
// export const videosAPI = {
//   getVideoById: (videoId) => api.get(`/videos/${videoId}`),
//   getVideoProgress: (videoId) => api.get(`/videos/${videoId}/progress`),
//   updateVideoProgress: (videoId, progressData) => api.post(`/videos/${videoId}/progress`, progressData),
//   getRelatedVideos: (videoId) => api.get(`/videos/${videoId}/related`),
//   likeVideo: (videoId) => api.post(`/videos/${videoId}/like`),
//   unlikeVideo: (videoId) => api.post(`/videos/${videoId}/unlike`),
// }

// // Quizzes API
// export const quizzesAPI = {
//   getCourseQuizzes: (courseId) => api.get(`/courses/${courseId}/quizzes`),
//   getQuizById: (quizId) => api.get(`/quizzes/${quizId}`),
//   submitQuiz: (quizId, answers) => api.post(`/quizzes/${quizId}/submit`, { answers }),
//   getQuizResults: (quizId) => api.get(`/quizzes/${quizId}/results`),
//   getQuizAttempts: (quizId) => api.get(`/quizzes/${quizId}/attempts`),
// }

// // Certificates API
// export const certificatesAPI = {
//   getUserCertificates: () => api.get("/certificates"),
//   getCertificateById: (certificateId) => api.get(`/certificates/${certificateId}`),
//   generateCertificate: (courseId) => api.post(`/courses/${courseId}/certificate`),
//   verifyCertificate: (certificateId) => api.get(`/certificates/${certificateId}/verify`),
// }

// // Dashboard API
// export const dashboardAPI = {
//   getDashboardData: () => api.get("/dashboard"),
//   getLearningAnalytics: () => api.get("/dashboard/analytics"),
//   getNotifications: () => api.get("/notifications"),
//   markNotificationAsRead: (notificationId) => api.put(`/notifications/${notificationId}/read`),
//   markAllNotificationsAsRead: () => api.put("/notifications/read-all"),
//   getUpcomingEvents: () => api.get("/events/upcoming"),
// }

// // Payments API
// export const paymentsAPI = {
//   getPaymentMethods: () => api.get("/payments/methods"),
//   addPaymentMethod: (paymentData) => api.post("/payments/methods", paymentData),
//   removePaymentMethod: (paymentMethodId) => api.delete(`/payments/methods/${paymentMethodId}`),
//   getTransactions: () => api.get("/payments/transactions"),
//   getInvoices: () => api.get("/payments/invoices"),
//   getInvoiceById: (invoiceId) => api.get(`/payments/invoices/${invoiceId}`),
//   makePayment: (courseId, paymentData) => api.post(`/payments/courses/${courseId}`, paymentData),
// }

// // Community API
// export const communityAPI = {
//   getPosts: (params) => api.get("/community/posts", { params }),
//   getPostById: (postId) => api.get(`/community/posts/${postId}`),
//   createPost: (postData) => api.post("/community/posts", postData),
//   updatePost: (postId, postData) => api.put(`/community/posts/${postId}`, postData),
//   deletePost: (postId) => api.delete(`/community/posts/${postId}`),
//   likePost: (postId) => api.post(`/community/posts/${postId}/like`),
//   unlikePost: (postId) => api.post(`/community/posts/${postId}/unlike`),
//   getComments: (postId) => api.get(`/community/posts/${postId}/comments`),
//   addComment: (postId, commentData) => api.post(`/community/posts/${postId}/comments`, commentData),
//   deleteComment: (commentId) => api.delete(`/community/comments/${commentId}`),
// }

// // Resources API
// export const resourcesAPI = {
//   getResources: (params) => api.get("/resources", { params }),
//   getResourceById: (resourceId) => api.get(`/resources/${resourceId}`),
//   downloadResource: (resourceId) => api.get(`/resources/${resourceId}/download`, { responseType: "blob" }),
// }

// export default api

import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL: (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) || "https://api.chamberoflearning.com/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error Response:", error.response.data)

      if (error.response.status === 401) {
        // Handle unauthorized access
        console.error("Unauthorized access")
      } else if (error.response.status === 404) {
        // Handle not found
        console.error("Resource not found")
      } else if (error.response.status === 500) {
        // Handle server error
        console.error("Server error")
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message)
    }

    return Promise.reject(error)
  },
)

// User API
export const userAPI = {
  getUserProfile: () => api.get("/user/profile"),
  updateUserProfile: (userData) => api.put("/user/profile", userData),
  updateUserSettings: (settingsData) => api.put("/user/settings", settingsData),
  getUserStats: () => api.get("/user/stats"),
  getUserAchievements: () => api.get("/user/achievements"),
  getUserCertificates: () => api.get("/user/certificates"),
}

// Courses API
export const coursesAPI = {
  getAllCourses: (params) => api.get("/courses", { params }),
  getCourseById: (id) => api.get(`/courses/${id}`),
  getEnrolledCourses: () => api.get("/courses/enrolled"),
  enrollCourse: (courseId) => api.post(`/courses/${courseId}/enroll`),
  getCourseProgress: (courseId) => api.get(`/courses/${courseId}/progress`),
  updateCourseProgress: (courseId, data) => api.post(`/courses/${courseId}/progress`, data),
  getRecommendedCourses: () => api.get("/courses/recommended"),
  searchCourses: (query) => api.get("/courses/search", { params: { query } }),
  getCourseLessons: (courseId) => api.get(`/courses/${courseId}/lessons`),
  getCourseReviews: (courseId) => api.get(`/courses/${courseId}/reviews`),
  addCourseReview: (courseId, reviewData) => api.post(`/courses/${courseId}/reviews`, reviewData),
  getITCourses: (params) => api.get("/courses/it", { params }),
  getNonITCourses: (params) => api.get("/courses/non-it", { params }),
  toggleCourseWishlist: (courseId) => api.post(`/courses/${courseId}/wishlist/toggle`),
  getWishlistedCourses: () => api.get("/courses/wishlist"),
}

// Lessons API
export const lessonsAPI = {
  getLessonById: (courseId, lessonId) => api.get(`/courses/${courseId}/lessons/${lessonId}`),
  markLessonComplete: (courseId, lessonId) => api.post(`/courses/${courseId}/lessons/${lessonId}/complete`),
  getLessonNotes: (courseId, lessonId) => api.get(`/courses/${courseId}/lessons/${lessonId}/notes`),
  addLessonNote: (courseId, lessonId, noteData) => api.post(`/courses/${courseId}/lessons/${lessonId}/notes`, noteData),
  updateLessonNote: (courseId, lessonId, noteId, noteData) =>
    api.put(`/courses/${courseId}/lessons/${lessonId}/notes/${noteId}`, noteData),
  deleteLessonNote: (courseId, lessonId, noteId) =>
    api.delete(`/courses/${courseId}/lessons/${lessonId}/notes/${noteId}`),
  getLessonDiscussions: (courseId, lessonId) => api.get(`/courses/${courseId}/lessons/${lessonId}/discussions`),
  addLessonComment: (courseId, lessonId, commentData) =>
    api.post(`/courses/${courseId}/lessons/${lessonId}/discussions`, commentData),
  replyToComment: (courseId, lessonId, commentId, replyData) =>
    api.post(`/courses/${courseId}/lessons/${lessonId}/discussions/${commentId}/replies`, replyData),
}

// Videos API
export const videosAPI = {
  getVideoById: (videoId) => api.get(`/videos/${videoId}`),
  getVideoProgress: (videoId) => api.get(`/videos/${videoId}/progress`),
  updateVideoProgress: (videoId, progressData) => api.post(`/videos/${videoId}/progress`, progressData),
  getRelatedVideos: (videoId) => api.get(`/videos/${videoId}/related`),
  likeVideo: (videoId) => api.post(`/videos/${videoId}/like`),
  unlikeVideo: (videoId) => api.post(`/videos/${videoId}/unlike`),
}

// Quizzes API
export const quizzesAPI = {
  getCourseQuizzes: (courseId) => api.get(`/courses/${courseId}/quizzes`),
  getQuizById: (quizId) => api.get(`/quizzes/${quizId}`),
  submitQuiz: (quizId, answers) => api.post(`/quizzes/${quizId}/submit`, { answers }),
  getQuizResults: (quizId) => api.get(`/quizzes/${quizId}/results`),
  getQuizAttempts: (quizId) => api.get(`/quizzes/${quizId}/attempts`),
  getAllQuizzes: (params) => api.get("/quizzes", { params }),
}

// Certificates API
export const certificatesAPI = {
  getUserCertificates: () => api.get("/certificates"),
  getCertificateById: (certificateId) => api.get(`/certificates/${certificateId}`),
  generateCertificate: (courseId) => api.post(`/courses/${courseId}/certificate`),
  verifyCertificate: (certificateId) => api.get(`/certificates/${certificateId}/verify`),
  downloadCertificate: (certificateId) => api.get(`/certificates/${certificateId}/download`, { responseType: "blob" }),
  shareCertificate: (certificateId, platform) => api.post(`/certificates/${certificateId}/share`, { platform }),
}

// Dashboard API
export const dashboardAPI = {
  getDashboardData: () => api.get("/dashboard"),
  getLearningAnalytics: () => api.get("/dashboard/analytics"),
  getNotifications: () => api.get("/notifications"),
  markNotificationAsRead: (notificationId) => api.put(`/notifications/${notificationId}/read`),
  markAllNotificationsAsRead: () => api.put("/notifications/read-all"),
  getUpcomingEvents: () => api.get("/events/upcoming"),
  getRecentActivity: () => api.get("/dashboard/recent-activity"),
  getLearningGoals: () => api.get("/dashboard/learning-goals"),
  updateLearningGoal: (goalData) => api.put("/dashboard/learning-goals", goalData),
}

// Payments API
export const paymentsAPI = {
  getPaymentMethods: () => api.get("/payments/methods"),
  addPaymentMethod: (paymentData) => api.post("/payments/methods", paymentData),
  removePaymentMethod: (paymentMethodId) => api.delete(`/payments/methods/${paymentMethodId}`),
  getTransactions: () => api.get("/payments/transactions"),
  getInvoices: () => api.get("/payments/invoices"),
  getInvoiceById: (invoiceId) => api.get(`/payments/invoices/${invoiceId}`),
  makePayment: (courseId, paymentData) => api.post(`/payments/courses/${courseId}`, paymentData),
  downloadInvoice: (invoiceId) => api.get(`/payments/invoices/${invoiceId}/download`, { responseType: "blob" }),
  // Payment proofs (receipts) – connect to your backend
  getPaymentProofs: () => api.get("/payments/proofs"),
  getPaymentProofById: (proofId) => api.get(`/payments/proofs/${proofId}`),
  downloadPaymentProof: (proofId) => api.get(`/payments/proofs/${proofId}/download`, { responseType: "blob" }),
}

// Community API
export const communityAPI = {
  getPosts: (params) => api.get("/community/posts", { params }),
  getPostById: (postId) => api.get(`/community/posts/${postId}`),
  createPost: (postData) => api.post("/community/posts", postData),
  updatePost: (postId, postData) => api.put(`/community/posts/${postId}`, postData),
  deletePost: (postId) => api.delete(`/community/posts/${postId}`),
  likePost: (postId) => api.post(`/community/posts/${postId}/like`),
  unlikePost: (postId) => api.post(`/community/posts/${postId}/unlike`),
  getComments: (postId) => api.get(`/community/posts/${postId}/comments`),
  addComment: (postId, commentData) => api.post(`/community/posts/${postId}/comments`, commentData),
  deleteComment: (commentId) => api.delete(`/community/comments/${commentId}`),
  getPopularTags: () => api.get("/community/tags/popular"),
  getPopularUsers: () => api.get("/community/users/popular"),
}

// Resources API
export const resourcesAPI = {
  getResources: (params) => api.get("/resources", { params }),
  getResourceById: (resourceId) => api.get(`/resources/${resourceId}`),
  downloadResource: (resourceId) => api.get(`/resources/${resourceId}/download`, { responseType: "blob" }),
  getResourceCategories: () => api.get("/resources/categories"),
  getResourcesByCategory: (categoryId) => api.get(`/resources/categories/${categoryId}`),
  searchResources: (query) => api.get("/resources/search", { params: { query } }),
}

// Sessions / Live courses API – join, recording, notes
export const sessionsAPI = {
  getSessions: (params) => api.get("/sessions", { params }),
  getSessionById: (sessionId) => api.get(`/sessions/${sessionId}`),
  joinSession: (sessionId) => api.post(`/sessions/${sessionId}/join`),
  getRecordingUrl: (sessionId) => api.get(`/sessions/${sessionId}/recording`),
  getNotesUrl: (sessionId) => api.get(`/sessions/${sessionId}/notes`),
}

// Webinars API
export const webinarsAPI = {
  getScheduled: () => api.get("/webinars/scheduled"),
  getCompleted: () => api.get("/webinars/completed"),
  setReminder: (webinarId) => api.post(`/webinars/${webinarId}/reminder`),
  getRecordingUrl: (webinarId) => api.get(`/webinars/${webinarId}/recording`),
}

// Resume / profile documents – file storage or blob URLs
export const resumeAPI = {
  getResume: () => api.get("/user/resume"),
  uploadResume: (formData) => api.post("/user/resume", formData, { headers: { "Content-Type": "multipart/form-data" } }),
  downloadResume: () => api.get("/user/resume/download", { responseType: "blob" }),
}

// Help Center API
export const helpCenterAPI = {
  getFAQs: () => api.get("/help/faqs"),
  getFAQById: (faqId) => api.get(`/help/faqs/${faqId}`),
  getFAQCategories: () => api.get("/help/faq-categories"),
  getFAQsByCategory: (categoryId) => api.get(`/help/faq-categories/${categoryId}`),
  submitSupportTicket: (ticketData) => api.post("/help/tickets", ticketData),
  getUserTickets: () => api.get("/help/tickets"),
  getTicketById: (ticketId) => api.get(`/help/tickets/${ticketId}`),
  addTicketReply: (ticketId, replyData) => api.post(`/help/tickets/${ticketId}/replies`, replyData),
}

// Cart API
export const cartAPI = {
  getCartItems: () => api.get("/cart"),
  addToCart: (courseId) => api.post(`/cart/add/${courseId}`),
  removeFromCart: (courseId) => api.delete(`/cart/remove/${courseId}`),
  clearCart: () => api.delete("/cart/clear"),
  applyCoupon: (couponCode) => api.post("/cart/apply-coupon", { couponCode }),
  removeCoupon: () => api.delete("/cart/remove-coupon"),
  checkout: (paymentData) => api.post("/cart/checkout", paymentData),
}

export default api

