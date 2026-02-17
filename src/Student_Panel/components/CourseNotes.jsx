// "use client"

// import { useState, useEffect } from "react"
// import { Input, Button, List, Typography, Divider, Empty, Popconfirm, message } from "antd"
// import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons"

// const { TextArea } = Input
// const { Title, Text } = Typography

// const CourseNotes = ({ courseId, lessonId }) => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState("")
//   const [editingNote, setEditingNote] = useState(null)
//   const [editText, setEditText] = useState("")

//   useEffect(() => {
//     // Load notes from localStorage (in a real app, this would come from a database)
//     const savedNotes = JSON.parse(localStorage.getItem(`notes_${courseId}_${lessonId}`) || "[]")
//     setNotes(savedNotes)
//   }, [courseId, lessonId])

//   const saveNotes = (updatedNotes) => {
//     localStorage.setItem(`notes_${courseId}_${lessonId}`, JSON.stringify(updatedNotes))
//     setNotes(updatedNotes)
//   }

//   const handleAddNote = () => {
//     if (!newNote.trim()) {
//       message.warning("Please enter a note")
//       return
//     }

//     const newNoteObj = {
//       id: Date.now(),
//       text: newNote,
//       timestamp: new Date().toISOString(),
//     }

//     const updatedNotes = [...notes, newNoteObj]
//     saveNotes(updatedNotes)
//     setNewNote("")
//     message.success("Note added successfully")
//   }

//   const handleEditNote = (note) => {
//     setEditingNote(note.id)
//     setEditText(note.text)
//   }

//   const handleSaveEdit = () => {
//     if (!editText.trim()) {
//       message.warning("Note cannot be empty")
//       return
//     }

//     const updatedNotes = notes.map((note) =>
//       note.id === editingNote ? { ...note, text: editText, edited: true } : note,
//     )

//     saveNotes(updatedNotes)
//     setEditingNote(null)
//     setEditText("")
//     message.success("Note updated successfully")
//   }

//   const handleCancelEdit = () => {
//     setEditingNote(null)
//     setEditText("")
//   }

//   const handleDeleteNote = (noteId) => {
//     const updatedNotes = notes.filter((note) => note.id !== noteId)
//     saveNotes(updatedNotes)
//     message.success("Note deleted successfully")
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleString()
//   }

//   return (
//     <div className="course-notes">
//       <div className="add-note-section" style={{ marginBottom: 16 }}>
//         <TextArea
//           value={newNote}
//           onChange={(e) => setNewNote(e.target.value)}
//           placeholder="Add a new note..."
//           autoSize={{ minRows: 3, maxRows: 6 }}
//           style={{ marginBottom: 8 }}
//         />
//         <Button type="primary" onClick={handleAddNote} disabled={!newNote.trim()}>
//           Add Note
//         </Button>
//       </div>

//       <Divider />

//       {notes.length === 0 ? (
//         <Empty description="No notes yet. Add your first note above!" />
//       ) : (
//         <List
//           itemLayout="vertical"
//           dataSource={notes}
//           renderItem={(note) => (
//             <List.Item
//               key={note.id}
//               actions={
//                 editingNote === note.id
//                   ? [
//                       <Button key="save" icon={<SaveOutlined />} type="link" onClick={handleSaveEdit}>
//                         Save
//                       </Button>,
//                       <Button key="cancel" icon={<CloseOutlined />} type="link" onClick={handleCancelEdit}>
//                         Cancel
//                       </Button>,
//                     ]
//                   : [
//                       <Button key="edit" icon={<EditOutlined />} type="link" onClick={() => handleEditNote(note)}>
//                         Edit
//                       </Button>,
//                       <Popconfirm
//                         title="Are you sure you want to delete this note?"
//                         onConfirm={() => handleDeleteNote(note.id)}
//                         okText="Yes"
//                         cancelText="No"
//                       >
//                         <Button key="delete" icon={<DeleteOutlined />} type="link" danger>
//                           Delete
//                         </Button>
//                       </Popconfirm>,
//                     ]
//               }
//             >
//               {editingNote === note.id ? (
//                 <TextArea
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                   autoSize={{ minRows: 2, maxRows: 6 }}
//                 />
//               ) : (
//                 <>
//                   <div style={{ whiteSpace: "pre-wrap" }}>{note.text}</div>
//                   <div style={{ marginTop: 8 }}>
//                     <Text type="secondary" style={{ fontSize: 12 }}>
//                       {formatDate(note.timestamp)}
//                       {note.edited && " (edited)"}
//                     </Text>
//                   </div>
//                 </>
//               )}
//             </List.Item>
//           )}
//         />
//       )}
//     </div>
//   )
// }

// export default CourseNotes

"use client"

import { useState, useEffect } from "react"
import { Card, Typography, Input, Button, List, Divider, Tag, Tooltip, message } from "antd"
import { EditOutlined, DeleteOutlined, SaveOutlined, PushpinOutlined, PushpinFilled } from "@ant-design/icons"
import axios from "axios"

const { Title, Text, Paragraph } = Typography
const { TextArea } = Input

// Add responsive styles to the notes component
const getResponsiveStyles = () => ({
  notesList: {
    maxHeight: window.innerWidth < 768 ? "300px" : "500px",
    overflowY: "auto",
    padding: window.innerWidth < 576 ? "8px 4px" : "16px",
  },
  noteItem: {
    padding: window.innerWidth < 576 ? "8px" : "16px",
    marginBottom: window.innerWidth < 576 ? "8px" : "16px",
  },
  noteActions: {
    flexDirection: window.innerWidth < 576 ? "column" : "row",
    alignItems: window.innerWidth < 576 ? "flex-start" : "center",
    gap: window.innerWidth < 576 ? "8px" : "16px",
  },
})

const CourseNotes = ({ courseId, videoId, currentTime }) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [editingNoteId, setEditingNoteId] = useState(null)
  const [editingContent, setEditingContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles())

  useEffect(() => {
    fetchNotes()

    // Update responsive styles on window resize
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [courseId])

  const fetchNotes = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/notes/${courseId}`)
      setNotes(response.data)
    } catch (error) {
      console.error("Error fetching notes:", error)
      message.error("Failed to load notes")
    } finally {
      setLoading(false)
    }
  }

  const addNote = async () => {
    if (!newNote.trim()) return

    const noteData = {
      content: newNote,
      courseId,
      videoId,
      videoTimestamp: currentTime ? formatTime(currentTime) : undefined,
      isPinned: false,
    }

    try {
      const response = await axios.post(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/notes`, noteData)
      setNotes([...notes, response.data])
      setNewNote("")
      message.success("Note added successfully")
    } catch (error) {
      console.error("Error adding note:", error)
      message.error("Failed to add note")
    }
  }

  const updateNote = async (noteId) => {
    try {
      await axios.put(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/notes/${noteId}`, {
        content: editingContent,
      })

      setNotes(notes.map((note) => (note.id === noteId ? { ...note, content: editingContent } : note)))

      setEditingNoteId(null)
      message.success("Note updated successfully")
    } catch (error) {
      console.error("Error updating note:", error)
      message.error("Failed to update note")
    }
  }

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/notes/${noteId}`)
      setNotes(notes.filter((note) => note.id !== noteId))
      message.success("Note deleted successfully")
    } catch (error) {
      console.error("Error deleting note:", error)
      message.error("Failed to delete note")
    }
  }

  const togglePin = async (noteId, currentPinStatus) => {
    try {
      await axios.put(`${(import.meta.env?.VITE_API_URL || "https://api.chamberoflearning.com/v1")}/api/notes/${noteId}/pin`, {
        isPinned: !currentPinStatus,
      })

      setNotes(notes.map((note) => (note.id === noteId ? { ...note, isPinned: !note.isPinned } : note)))

      message.success(`Note ${!currentPinStatus ? "pinned" : "unpinned"} successfully`)
    } catch (error) {
      console.error("Error toggling pin status:", error)
      message.error("Failed to update pin status")
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const startEditing = (note) => {
    setEditingNoteId(note.id)
    setEditingContent(note.content)
  }

  // Sort notes: pinned first, then by timestamp (newest first)
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })

  return (
    <Card title={<Title level={4}>Course Notes</Title>} className="course-notes-card" loading={loading}>
      <div className="add-note-section">
        <TextArea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note..."
          autoSize={{ minRows: 2, maxRows: 6 }}
          className="note-input"
        />
        <div className="note-actions" style={responsiveStyles.noteActions}>
          {currentTime && (
            <Tag color="blue" className="timestamp-tag">
              Current Time: {formatTime(currentTime)}
            </Tag>
          )}
          <Button type="primary" onClick={addNote} disabled={!newNote.trim()}>
            Add Note
          </Button>
        </div>
      </div>

      <Divider />

      <List
        itemLayout="vertical"
        dataSource={sortedNotes}
        locale={{ emptyText: "No notes yet. Start taking notes to track your learning!" }}
        className="notes-list"
        style={responsiveStyles.notesList}
        renderItem={(note) => (
          <List.Item
            key={note.id}
            actions={[
              <Tooltip title={note.isPinned ? "Unpin note" : "Pin note"} key="pin-action">
                <Button
                  type="text"
                  icon={note.isPinned ? <PushpinFilled /> : <PushpinOutlined />}
                  onClick={() => togglePin(note.id, note.isPinned)}
                />
              </Tooltip>,
              <Tooltip title="Edit note" key="edit-action">
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => startEditing(note)}
                  disabled={editingNoteId !== null}
                />
              </Tooltip>,
              <Tooltip title="Delete note" key="delete-action">
                <Button type="text" danger icon={<DeleteOutlined />} onClick={() => deleteNote(note.id)} />
              </Tooltip>,
            ]}
            className={`note-item ${note.isPinned ? "pinned-note" : ""}`}
            style={responsiveStyles.noteItem}
          >
            {editingNoteId === note.id ? (
              <div className="edit-note-container">
                <TextArea
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  className="edit-note-input"
                />
                <div className="edit-actions">
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={() => updateNote(note.id)}
                    disabled={!editingContent.trim()}
                  >
                    Save
                  </Button>
                  <Button onClick={() => setEditingNoteId(null)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <>
                <Paragraph className="note-content">{note.content}</Paragraph>
                <div className="note-meta">
                  <Text type="secondary" className="note-timestamp">
                    {new Date(note.timestamp).toLocaleString()}
                  </Text>
                  {note.videoTimestamp && (
                    <Tag color="green" className="video-timestamp">
                      Video: {note.videoTimestamp}
                    </Tag>
                  )}
                </div>
              </>
            )}
          </List.Item>
        )}
      />
    </Card>
  )
}

export default CourseNotes

