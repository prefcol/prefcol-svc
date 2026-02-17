// "use client"

// import { useState, useEffect } from "react"
// import { Input, Button, List, Typography, Space, Avatar, Divider, Empty, message, Comment, Tooltip, Tag } from "antd"
// import { LikeOutlined, CommentOutlined, SendOutlined, UserOutlined } from "@ant-design/icons"
// import { useAuth } from "../contexts/AuthContext"

// const { TextArea } = Input
// const { Title, Text, Paragraph } = Typography

// const CourseDiscussion = ({ courseId, lessonId }) => {
//   const { user } = useAuth()
//   const [comments, setComments] = useState([])
//   const [newComment, setNewComment] = useState("")
//   const [replyTo, setReplyTo] = useState(null)
//   const [replyText, setReplyText] = useState("")

//   useEffect(() => {
//     // In a real app, this would be an API call
//     // For demo purposes, we'll use mock data
//     const mockComments = [
//       {
//         id: 1,
//         author: {
//           name: "John Doe",
//           avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         },
//         content: "This lesson was really helpful! I especially liked the explanation about state management.",
//         timestamp: new Date(Date.now() - 3600000).toISOString(),
//         likes: 5,
//         dislikes: 0,
//         replies: [
//           {
//             id: 3,
//             author: {
//               name: "Instructor Jane",
//               avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//               isInstructor: true,
//             },
//             content: "Thank you for your feedback, John! I'm glad you found it helpful.",
//             timestamp: new Date(Date.now() - 1800000).toISOString(),
//             likes: 2,
//             dislikes: 0,
//           },
//         ],
//       },
//       {
//         id: 2,
//         author: {
//           name: "Sarah Wilson",
//           avatar: "https://randomuser.me/api/portraits/women/32.jpg",
//         },
//         content: "I'm having trouble understanding the concept at 14:35. Could someone explain it in simpler terms?",
//         timestamp: new Date(Date.now() - 7200000).toISOString(),
//         likes: 0,
//         dislikes: 0,
//         replies: [],
//       },
//     ]

//     setComments(mockComments)
//   }, [courseId, lessonId])

//   const handleAddComment = () => {
//     if (!newComment.trim()) {
//       message.warning("Please enter a comment")
//       return
//     }

//     const newCommentObj = {
//       id: Date.now(),
//       author: {
//         name: user?.name || "Anonymous User",
//         avatar: user?.avatar || null,
//       },
//       content: newComment,
//       timestamp: new Date().toISOString(),
//       likes: 0,
//       dislikes: 0,
//       replies: [],
//     }

//     setComments([newCommentObj, ...comments])
//     setNewComment("")
//     message.success("Comment added successfully")
//   }

//   const handleAddReply = (commentId) => {
//     if (!replyText.trim()) {
//       message.warning("Please enter a reply")
//       return
//     }

//     const newReply = {
//       id: Date.now(),
//       author: {
//         name: user?.name || "Anonymous User",
//         avatar: user?.avatar || null,
//       },
//       content: replyText,
//       timestamp: new Date().toISOString(),
//       likes: 0,
//       dislikes: 0,
//     }

//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: [...comment.replies, newReply],
//         }
//       }
//       return comment
//     })

//     setComments(updatedComments)
//     setReplyTo(null)
//     setReplyText("")
//     message.success("Reply added successfully")
//   }

//   const handleLike = (commentId, isReply = false, parentId = null) => {
//     if (isReply) {
//       const updatedComments = comments.map((comment) => {
//         if (comment.id === parentId) {
//           return {
//             ...comment,
//             replies: comment.replies.map((reply) => {
//               if (reply.id === commentId) {
//                 return { ...reply, likes: reply.likes + 1 }
//               }
//               return reply
//             }),
//           }
//         }
//         return comment
//       })
//       setComments(updatedComments)
//     } else {
//       const updatedComments = comments.map((comment) => {
//         if (comment.id === commentId) {
//           return { ...comment, likes: comment.likes + 1 }
//         }
//         return comment
//       })
//       setComments(updatedComments)
//     }
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     const now = new Date()
//     const diffMs = now - date
//     const diffSec = Math.floor(diffMs / 1000)
//     const diffMin = Math.floor(diffSec / 60)
//     const diffHour = Math.floor(diffMin / 60)
//     const diffDay = Math.floor(diffHour / 24)

//     if (diffSec < 60) {
//       return "just now"
//     } else if (diffMin < 60) {
//       return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`
//     } else if (diffHour < 24) {
//       return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`
//     } else if (diffDay < 7) {
//       return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`
//     } else {
//       return date.toLocaleDateString()
//     }
//   }

//   return (
//     <div className="course-discussion">
//       <div className="add-comment-section" style={{ marginBottom: 16 }}>
//         <TextArea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment or question..."
//           autoSize={{ minRows: 2, maxRows: 6 }}
//           style={{ marginBottom: 8 }}
//         />
//         <Button type="primary" icon={<SendOutlined />} onClick={handleAddComment} disabled={!newComment.trim()}>
//           Post Comment
//         </Button>
//       </div>

//       <Divider />

//       {comments.length === 0 ? (
//         <Empty description="No comments yet. Be the first to start the discussion!" />
//       ) : (
//         <List
//           itemLayout="vertical"
//           dataSource={comments}
//           renderItem={(comment) => (
//             <List.Item key={comment.id} style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: 16 }}>
//               <Comment
//                 author={
//                   <Space>
//                     <Text strong>{comment.author.name}</Text>
//                     {comment.author.isInstructor && <Tag color="blue">Instructor</Tag>}
//                   </Space>
//                 }
//                 avatar={<Avatar src={comment.author.avatar} icon={!comment.author.avatar && <UserOutlined />} />}
//                 content={<Paragraph style={{ whiteSpace: "pre-wrap" }}>{comment.content}</Paragraph>}
//                 datetime={
//                   <Tooltip title={new Date(comment.timestamp).toLocaleString()}>
//                     <span>{formatDate(comment.timestamp)}</span>
//                   </Tooltip>
//                 }
//                 actions={[
//                   <Button key="like" type="text" icon={<LikeOutlined />} onClick={() => handleLike(comment.id)}>
//                     {comment.likes > 0 && comment.likes}
//                   </Button>,
//                   <Button key="reply" type="text" icon={<CommentOutlined />} onClick={() => setReplyTo(comment.id)}>
//                     Reply
//                   </Button>,
//                 ]}
//               />

//               {/* Replies */}
//               {comment.replies.length > 0 && (
//                 <div style={{ marginLeft: 44, marginTop: 16 }}>
//                   <List
//                     itemLayout="vertical"
//                     dataSource={comment.replies}
//                     renderItem={(reply) => (
//                       <List.Item key={reply.id} style={{ borderBottom: "none" }}>
//                         <Comment
//                           author={
//                             <Space>
//                               <Text strong>{reply.author.name}</Text>
//                               {reply.author.isInstructor && <Tag color="blue">Instructor</Tag>}
//                             </Space>
//                           }
//                           avatar={<Avatar src={reply.author.avatar} icon={!reply.author.avatar && <UserOutlined />} />}
//                           content={<Paragraph style={{ whiteSpace: "pre-wrap" }}>{reply.content}</Paragraph>}
//                           datetime={
//                             <Tooltip title={new Date(reply.timestamp).toLocaleString()}>
//                               <span>{formatDate(reply.timestamp)}</span>
//                             </Tooltip>
//                           }
//                           actions={[
//                             <Button
//                               key="like"
//                               type="text"
//                               icon={<LikeOutlined />}
//                               onClick={() => handleLike(reply.id, true, comment.id)}
//                             >
//                               {reply.likes > 0 && reply.likes}
//                             </Button>,
//                           ]}
//                         />
//                       </List.Item>
//                     )}
//                   />
//                 </div>
//               )}

//               {/* Reply form */}
//               {replyTo === comment.id && (
//                 <div style={{ marginLeft: 44, marginTop: 16 }}>
//                   <TextArea
//                     value={replyText}
//                     onChange={(e) => setReplyText(e.target.value)}
//                     placeholder="Write a reply..."
//                     autoSize={{ minRows: 2, maxRows: 4 }}
//                     style={{ marginBottom: 8 }}
//                   />
//                   <Space>
//                     <Button
//                       type="primary"
//                       size="small"
//                       onClick={() => handleAddReply(comment.id)}
//                       disabled={!replyText.trim()}
//                     >
//                       Post Reply
//                     </Button>
//                     <Button
//                       size="small"
//                       onClick={() => {
//                         setReplyTo(null)
//                         setReplyText("")
//                       }}
//                     >
//                       Cancel
//                     </Button>
//                   </Space>
//                 </div>
//               )}
//             </List.Item>
//           )}
//         />
//       )}
//     </div>
//   )
// }

// export default CourseDiscussion

// // "use client"

// // import type React from "react"
// // import { useState, useEffect, useRef } from "react"
// // import { Card, Typography, Input, Button, List, Avatar, Divider, Tag, Tooltip, message, Dropdown, Menu } from "antd"
// // import {
// //   SendOutlined,
// //   LikeOutlined,
// //   LikeFilled,
// //   DislikeOutlined,
// //   DislikeFilled,
// //   MoreOutlined,
// //   FlagOutlined,
// // } from "@ant-design/icons"
// // import axios from "axios"
// // import { useAuth } from "../contexts/AuthContext"

// // const { Title, Text, Paragraph } = Typography
// // const { TextArea } = Input

// // interface Comment {
// //   id: string
// //   content: string
// //   timestamp: string
// //   userId: string
// //   userName: string
// //   userAvatar: string
// //   likes: number
// //   dislikes: number
// //   userReaction?: "like" | "dislike" | null
// //   replies: Reply[]
// //   videoTimestamp?: string
// // }

// // interface Reply {
// //   id: string
// //   content: string
// //   timestamp: string
// //   userId: string
// //   userName: string
// //   userAvatar: string
// //   likes: number
// //   dislikes: number
// //   userReaction?: "like" | "dislike" | null
// // }

// // interface CourseDiscussionProps {
// //   courseId: string
// //   videoId?: string
// //   currentTime?: number
// // }

// // const CourseDiscussion: React.FC<CourseDiscussionProps> = ({ courseId, videoId, currentTime }) => {
// //   const { currentUser } = useAuth()
// //   const [comments, setComments] = useState<Comment[]>([])
// //   const [newComment, setNewComment] = useState("")
// //   const [replyingTo, setReplyingTo] = useState<string | null>(null)
// //   const [replyContent, setReplyContent] = useState("")
// //   const [loading, setLoading] = useState(false)
// //   const [filter, setFilter] = useState<"all" | "recent" | "popular">("all")
// //   const commentEndRef = useRef<HTMLDivElement>(null)

// //   useEffect(() => {
// //     fetchComments()
// //   }, [courseId, videoId, filter])

// //   const fetchComments = async () => {
// //     setLoading(true)
// //     try {
// //       const response = await axios.get(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${courseId}`, {
// //         params: { videoId, filter },
// //       })
// //       setComments(response.data)
// //     } catch (error) {
// //       console.error("Error fetching comments:", error)
// //       message.error("Failed to load discussion")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const addComment = async () => {
// //     if (!newComment.trim()) return

// //     const commentData = {
// //       content: newComment,
// //       courseId,
// //       videoId,
// //       videoTimestamp: currentTime ? formatTime(currentTime) : undefined,
// //     }

// //     try {
// //       const response = await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions`, commentData)
// //       setComments([response.data, ...comments])
// //       setNewComment("")
// //       message.success("Comment added successfully")
// //       scrollToBottom()
// //     } catch (error) {
// //       console.error("Error adding comment:", error)
// //       message.error("Failed to add comment")
// //     }
// //   }

// //   const addReply = async (commentId: string) => {
// //     if (!replyContent.trim()) return

// //     try {
// //       const response = await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${commentId}/replies`, {
// //         content: replyContent,
// //       })

// //       setComments(
// //         comments.map((comment) =>
// //           comment.id === commentId ? { ...comment, replies: [...comment.replies, response.data] } : comment,
// //         ),
// //       )

// //       setReplyingTo(null)
// //       setReplyContent("")
// //       message.success("Reply added successfully")
// //     } catch (error) {
// //       console.error("Error adding reply:", error)
// //       message.error("Failed to add reply")
// //     }
// //   }

// //   const handleReaction = async (itemId: string, type: "like" | "dislike", isReply: boolean, parentId?: string) => {
// //     try {
// //       const endpoint = isReply
// //         ? `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/replies/${itemId}/reaction`
// //         : `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${itemId}/reaction`

// //       const response = await axios.post(endpoint, { type })

// //       if (isReply && parentId) {
// //         setComments(
// //           comments.map((comment) =>
// //             comment.id === parentId
// //               ? {
// //                   ...comment,
// //                   replies: comment.replies.map((reply) =>
// //                     reply.id === itemId ? { ...reply, ...response.data } : reply,
// //                   ),
// //                 }
// //               : comment,
// //           ),
// //         )
// //       } else {
// //         setComments(comments.map((comment) => (comment.id === itemId ? { ...comment, ...response.data } : comment)))
// //       }
// //     } catch (error) {
// //       console.error("Error updating reaction:", error)
// //       message.error("Failed to update reaction")
// //     }
// //   }

// //   const reportItem = async (itemId: string, isReply: boolean) => {
// //     try {
// //       const endpoint = isReply
// //         ? `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/replies/${itemId}/report`
// //         : `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${itemId}/report`

// //       await axios.post(endpoint)
// //       message.success("Report submitted successfully")
// //     } catch (error) {
// //       console.error("Error reporting item:", error)
// //       message.error("Failed to submit report")
// //     }
// //   }

// //   const formatTime = (seconds: number): string => {
// //     const mins = Math.floor(seconds / 60)
// //     const secs = Math.floor(seconds % 60)
// //     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
// //   }

// //   const scrollToBottom = () => {
// //     commentEndRef.current?.scrollIntoView({ behavior: "smooth" })
// //   }

// //   const getFilteredComments = () => {
// //     const filteredComments = [...comments]

// //     switch (filter) {
// //       case "recent":
// //         return filteredComments.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
// //       case "popular":
// //         return filteredComments.sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes))
// //       default:
// //         return filteredComments
// //     }
// //   }

// //   const renderActionMenu = (itemId: string, isReply: boolean) => (
// //     <Menu>
// //       <Menu.Item key="report" onClick={() => reportItem(itemId, isReply)}>
// //         <FlagOutlined /> Report
// //       </Menu.Item>
// //     </Menu>
// //   )

// //   return (
// //     <Card
// //       title={
// //         <div className="discussion-header">
// //           <Title level={4}>Course Discussion</Title>
// //           <div className="filter-options">
// //             <Button type={filter === "all" ? "primary" : "text"} size="small" onClick={() => setFilter("all")}>
// //               All
// //             </Button>
// //             <Button type={filter === "recent" ? "primary" : "text"} size="small" onClick={() => setFilter("recent")}>
// //               Recent
// //             </Button>
// //             <Button type={filter === "popular" ? "primary" : "text"} size="small" onClick={() => setFilter("popular")}>
// //               Popular
// //             </Button>
// //           </div>
// //         </div>
// //       }
// //       className="course-discussion-card"
// //       loading={loading}
// //     >
// //       <div className="add-comment-section">
// //         <TextArea
// //           value={newComment}
// //           onChange={(e) => setNewComment(e.target.value)}
// //           placeholder="Add to the discussion..."
// //           autoSize={{ minRows: 2, maxRows: 6 }}
// //           className="comment-input"
// //         />
// //         <div className="comment-actions">
// //           {currentTime && (
// //             <Tag color="blue" className="timestamp-tag">
// //               Current Time: {formatTime(currentTime)}
// //             </Tag>
// //           )}
// //           <Button type="primary" icon={<SendOutlined />} onClick={addComment} disabled={!newComment.trim()}>
// //             Post
// //           </Button>
// //         </div>
// //       </div>

// //       <Divider />

// //       <List
// //         itemLayout="vertical"
// //         dataSource={getFilteredComments()}
// //         locale={{ emptyText: "No comments yet. Be the first to start the discussion!" }}
// //         renderItem={(comment) => (
// //           <List.Item key={comment.id} className="comment-item">
// //             <div className="comment-header">
// //               <div className="user-info">
// //                 <Avatar src={comment.userAvatar} alt={comment.userName} />
// //                 <Text strong>{comment.userName}</Text>
// //               </div>
// //               <div className="comment-actions">
// //                 <Dropdown overlay={renderActionMenu(comment.id, false)} trigger={["click"]}>
// //                   <Button type="text" icon={<MoreOutlined />} />
// //                 </Dropdown>
// //               </div>
// //             </div>

// //             <Paragraph className="comment-content">{comment.content}</Paragraph>

// //             <div className="comment-meta">
// //               <Text type="secondary" className="comment-timestamp">
// //                 {new Date(comment.timestamp).toLocaleString()}
// //               </Text>
// //               {comment.videoTimestamp && (
// //                 <Tag color="green" className="video-timestamp">
// //                   Video: {comment.videoTimestamp}
// //                 </Tag>
// //               )}
// //             </div>

// //             <div className="reaction-buttons">
// //               <Tooltip title="Like">
// //                 <Button
// //                   type="text"
// //                   icon={comment.userReaction === "like" ? <LikeFilled /> : <LikeOutlined />}
// //                   onClick={() => handleReaction(comment.id, "like", false)}
// //                 >
// //                   {comment.likes}
// //                 </Button>
// //               </Tooltip>
// //               <Tooltip title="Dislike">
// //                 <Button
// //                   type="text"
// //                   icon={comment.userReaction === "dislike" ? <DislikeFilled /> : <DislikeOutlined />}
// //                   onClick={() => handleReaction(comment.id, "dislike", false)}
// //                 >
// //                   {comment.dislikes}
// //                 </Button>
// //               </Tooltip>
// //               <Button type="link" onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}>
// //                 {replyingTo === comment.id ? "Cancel" : "Reply"}
// //               </Button>
// //             </div>

// //             {replyingTo === comment.id && (
// //               <div className="reply-container">
// //                 <TextArea
// //                   value={replyContent}
// //                   onChange={(e) => setReplyContent(e.target.value)}
// //                   placeholder="Write a reply..."
// //                   autoSize={{ minRows: 2, maxRows: 4 }}
// //                   className="reply-input"
// //                 />
// //                 <Button
// //                   type="primary"
// //                   size="small"
// //                   onClick={() => addReply(comment.id)}
// //                   disabled={!replyContent.trim()}
// //                 >
// //                   Reply
// //                 </Button>
// //               </div>
// //             )}

// //             {comment.replies.length > 0 && (
// //               <List
// //                 itemLayout="vertical"
// //                 dataSource={comment.replies}
// //                 className="replies-list"
// //                 renderItem={(reply) => (
// //                   <List.Item key={reply.id} className="reply-item">
// //                     <div className="reply-header">
// //                       <div className="user-info">
// //                         <Avatar src={reply.userAvatar} alt={reply.userName} size="small" />
// //                         <Text strong>{reply.userName}</Text>
// //                       </div>
// //                       <div className="reply-actions">
// //                         <Dropdown overlay={renderActionMenu(reply.id, true)} trigger={["click"]}>
// //                           <Button type="text" size="small" icon={<MoreOutlined />} />
// //                         </Dropdown>
// //                       </div>
// //                     </div>

// //                     <Paragraph className="reply-content">{reply.content}</Paragraph>

// //                     <div className="reply-meta">
// //                       <Text type="secondary" className="reply-timestamp">
// //                         {new Date(reply.timestamp).toLocaleString()}
// //                       </Text>
// //                     </div>

// //                     <div className="reaction-buttons">
// //                       <Tooltip title="Like">
// //                         <Button
// //                           type="text"
// //                           size="small"
// //                           icon={reply.userReaction === "like" ? <LikeFilled /> : <LikeOutlined />}
// //                           onClick={() => handleReaction(reply.id, "like", true, comment.id)}
// //                         >
// //                           {reply.likes}
// //                         </Button>
// //                       </Tooltip>
// //                       <Tooltip title="Dislike">
// //                         <Button
// //                           type="text"
// //                           size="small"
// //                           icon={reply.userReaction === "dislike" ? <DislikeFilled /> : <DislikeOutlined />}
// //                           onClick={() => handleReaction(reply.id, "dislike", true, comment.id)}
// //                         >
// //                           {reply.dislikes}
// //                         </Button>
// //                       </Tooltip>
// //                     </div>
// //                   </List.Item>
// //                 )}
// //               />
// //             )}
// //           </List.Item>
// //         )}
// //       />
// //       <div ref={commentEndRef} />
// //     </Card>
// //   )
// // }

// // export default CourseDiscussion

"use client"

import { useState, useEffect, useRef } from "react"
import { Card, Typography, Input, Button, List, Avatar, Divider, Tag, Tooltip, message, Dropdown, Menu } from "antd"
import {
  SendOutlined,
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
  MoreOutlined,
  FlagOutlined,
} from "@ant-design/icons"
import axios from "axios"
import { useAuth } from "../../Contexts/AuthContext"

const { Title, Text, Paragraph } = Typography
const { TextArea } = Input

// Add responsive styles to the discussion component
const getResponsiveStyles = () => ({
  discussionContainer: {
    padding: window.innerWidth < 576 ? "8px 4px" : "16px",
  },
  commentItem: {
    padding: window.innerWidth < 576 ? "8px" : "16px",
    marginBottom: window.innerWidth < 576 ? "8px" : "16px",
  },
  commentActions: {
    flexDirection: window.innerWidth < 576 ? "column" : "row",
    alignItems: window.innerWidth < 576 ? "flex-start" : "center",
    gap: window.innerWidth < 576 ? "8px" : "16px",
  },
  replyContainer: {
    padding: window.innerWidth < 576 ? "8px 4px" : "16px",
  },
})

const CourseDiscussion = ({ courseId, videoId, currentTime }) => {
  const { currentUser } = useAuth()
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyContent, setReplyContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("all")
  const commentEndRef = useRef(null)
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles())

  useEffect(() => {
    fetchComments()

    // Update responsive styles on window resize
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [courseId, videoId, filter])

  const fetchComments = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${courseId}`, {
        params: { videoId, filter },
      })
      setComments(response.data)
    } catch (error) {
      console.error("Error fetching comments:", error)
      message.error("Failed to load discussion")
    } finally {
      setLoading(false)
    }
  }

  const addComment = async () => {
    if (!newComment.trim()) return

    const commentData = {
      content: newComment,
      courseId,
      videoId,
      videoTimestamp: currentTime ? formatTime(currentTime) : undefined,
    }

    try {
      const response = await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions`, commentData)
      setComments([response.data, ...comments])
      setNewComment("")
      message.success("Comment added successfully")
      scrollToBottom()
    } catch (error) {
      console.error("Error adding comment:", error)
      message.error("Failed to add comment")
    }
  }

  const addReply = async (commentId) => {
    if (!replyContent.trim()) return

    try {
      const response = await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${commentId}/replies`, {
        content: replyContent,
      })

      setComments(
        comments.map((comment) =>
          comment.id === commentId ? { ...comment, replies: [...comment.replies, response.data] } : comment,
        ),
      )

      setReplyingTo(null)
      setReplyContent("")
      message.success("Reply added successfully")
    } catch (error) {
      console.error("Error adding reply:", error)
      message.error("Failed to add reply")
    }
  }

  const handleReaction = async (itemId, type, isReply, parentId) => {
    try {
      const endpoint = isReply
        ? `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/replies/${itemId}/reaction`
        : `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${itemId}/reaction`

      const response = await axios.post(endpoint, { type })

      if (isReply && parentId) {
        setComments(
          comments.map((comment) =>
            comment.id === parentId
              ? {
                  ...comment,
                  replies: comment.replies.map((reply) =>
                    reply.id === itemId ? { ...reply, ...response.data } : reply,
                  ),
                }
              : comment,
          ),
        )
      } else {
        setComments(comments.map((comment) => (comment.id === itemId ? { ...comment, ...response.data } : comment)))
      }
    } catch (error) {
      console.error("Error updating reaction:", error)
      message.error("Failed to update reaction")
    }
  }

  const reportItem = async (itemId, isReply) => {
    try {
      const endpoint = isReply
        ? `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/replies/${itemId}/report`
        : `${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/discussions/${itemId}/report`

      await axios.post(endpoint)
      message.success("Report submitted successfully")
    } catch (error) {
      console.error("Error reporting item:", error)
      message.error("Failed to submit report")
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const scrollToBottom = () => {
    commentEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const getFilteredComments = () => {
    const filteredComments = [...comments]

    switch (filter) {
      case "recent":
        return filteredComments.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      case "popular":
        return filteredComments.sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes))
      default:
        return filteredComments
    }
  }

  const renderActionMenu = (itemId, isReply) => (
    <Menu>
      <Menu.Item key="report" onClick={() => reportItem(itemId, isReply)}>
        <FlagOutlined /> Report
      </Menu.Item>
    </Menu>
  )

  return (
    <Card
      title={
        <div className="discussion-header">
          <Title level={4}>Course Discussion</Title>
          <div className="filter-options">
            <Button type={filter === "all" ? "primary" : "text"} size="small" onClick={() => setFilter("all")}>
              All
            </Button>
            <Button type={filter === "recent" ? "primary" : "text"} size="small" onClick={() => setFilter("recent")}>
              Recent
            </Button>
            <Button type={filter === "popular" ? "primary" : "text"} size="small" onClick={() => setFilter("popular")}>
              Popular
            </Button>
          </div>
        </div>
      }
      className="course-discussion-card"
      loading={loading}
      style={responsiveStyles.discussionContainer}
    >
      <div className="add-comment-section">
        <TextArea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add to the discussion..."
          autoSize={{ minRows: 2, maxRows: 6 }}
          className="comment-input"
        />
        <div className="comment-actions" style={responsiveStyles.commentActions}>
          {currentTime && (
            <Tag color="blue" className="timestamp-tag">
              Current Time: {formatTime(currentTime)}
            </Tag>
          )}
          <Button type="primary" icon={<SendOutlined />} onClick={addComment} disabled={!newComment.trim()}>
            Post
          </Button>
        </div>
      </div>

      <Divider />

      <List
        itemLayout="vertical"
        dataSource={getFilteredComments()}
        locale={{ emptyText: "No comments yet. Be the first to start the discussion!" }}
        renderItem={(comment) => (
          <List.Item key={comment.id} className="comment-item" style={responsiveStyles.commentItem}>
            <div className="comment-header">
              <div className="user-info">
                <Avatar src={comment.userAvatar} alt={comment.userName} />
                <Text strong>{comment.userName}</Text>
              </div>
              <div className="comment-actions">
                <Dropdown overlay={renderActionMenu(comment.id, false)} trigger={["click"]}>
                  <Button type="text" icon={<MoreOutlined />} />
                </Dropdown>
              </div>
            </div>

            <Paragraph className="comment-content">{comment.content}</Paragraph>

            <div className="comment-meta">
              <Text type="secondary" className="comment-timestamp">
                {new Date(comment.timestamp).toLocaleString()}
              </Text>
              {comment.videoTimestamp && (
                <Tag color="green" className="video-timestamp">
                  Video: {comment.videoTimestamp}
                </Tag>
              )}
            </div>

            <div className="reaction-buttons">
              <Tooltip title="Like">
                <Button
                  type="text"
                  icon={comment.userReaction === "like" ? <LikeFilled /> : <LikeOutlined />}
                  onClick={() => handleReaction(comment.id, "like", false)}
                >
                  {comment.likes}
                </Button>
              </Tooltip>
              <Tooltip title="Dislike">
                <Button
                  type="text"
                  icon={comment.userReaction === "dislike" ? <DislikeFilled /> : <DislikeOutlined />}
                  onClick={() => handleReaction(comment.id, "dislike", false)}
                >
                  {comment.dislikes}
                </Button>
              </Tooltip>
              <Button type="link" onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}>
                {replyingTo === comment.id ? "Cancel" : "Reply"}
              </Button>
            </div>

            {replyingTo === comment.id && (
              <div className="reply-container" style={responsiveStyles.replyContainer}>
                <TextArea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Write a reply..."
                  autoSize={{ minRows: 2, maxRows: 4 }}
                  className="reply-input"
                />
                <Button
                  type="primary"
                  size="small"
                  onClick={() => addReply(comment.id)}
                  disabled={!replyContent.trim()}
                >
                  Reply
                </Button>
              </div>
            )}

            {comment.replies.length > 0 && (
              <List
                itemLayout="vertical"
                dataSource={comment.replies}
                className="replies-list"
                renderItem={(reply) => (
                  <List.Item key={reply.id} className="reply-item">
                    <div className="reply-header">
                      <div className="user-info">
                        <Avatar src={reply.userAvatar} alt={reply.userName} size="small" />
                        <Text strong>{reply.userName}</Text>
                      </div>
                      <div className="reply-actions">
                        <Dropdown overlay={renderActionMenu(reply.id, true)} trigger={["click"]}>
                          <Button type="text" size="small" icon={<MoreOutlined />} />
                        </Dropdown>
                      </div>
                    </div>

                    <Paragraph className="reply-content">{reply.content}</Paragraph>

                    <div className="reply-meta">
                      <Text type="secondary" className="reply-timestamp">
                        {new Date(reply.timestamp).toLocaleString()}
                      </Text>
                    </div>

                    <div className="reaction-buttons">
                      <Tooltip title="Like">
                        <Button
                          type="text"
                          size="small"
                          icon={reply.userReaction === "like" ? <LikeFilled /> : <LikeOutlined />}
                          onClick={() => handleReaction(reply.id, "like", true, comment.id)}
                        >
                          {reply.likes}
                        </Button>
                      </Tooltip>
                      <Tooltip title="Dislike">
                        <Button
                          type="text"
                          size="small"
                          icon={reply.userReaction === "dislike" ? <DislikeFilled /> : <DislikeOutlined />}
                          onClick={() => handleReaction(reply.id, "dislike", true, comment.id)}
                        >
                          {reply.dislikes}
                        </Button>
                      </Tooltip>
                    </div>
                  </List.Item>
                )}
              />
            )}
          </List.Item>
        )}
      />
      <div ref={commentEndRef} />
    </Card>
  )
}

export default CourseDiscussion

