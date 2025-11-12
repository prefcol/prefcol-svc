// "use client"
// import { Modal, Typography, Space, Tag, Button, Divider, Descriptions, Row, Col } from "antd"
// import {
//   EditOutlined,
//   ShareAltOutlined,
//   EyeOutlined,
//   LikeOutlined,
//   ClockCircleOutlined,
//   CalendarOutlined,
// } from "@ant-design/icons"

// const { Title, Text } = Typography

// const VideoPreviewModal = ({ video, visible, onClose, onEdit, isMobile }) => {
//   const getStatusTag = (status) => {
//     switch (status) {
//       case "Approved":
//         return <Tag color="success">Approved</Tag>
//       case "Rejected":
//         return <Tag color="error">Rejected</Tag>
//       case "Pending":
//         return <Tag color="warning">Pending</Tag>
//       default:
//         return <Tag color="default">{status}</Tag>
//     }
//   }

//   return (
//     <Modal
//       title={video.title}
//       open={visible}
//       onCancel={onClose}
//       width={isMobile ? "95%" : 800}
//       centered
//       footer={[
//         <Button key="close" onClick={onClose}>
//           Close
//         </Button>,
//         <Button key="share" icon={<ShareAltOutlined />}>
//           Share
//         </Button>,
//         <Button key="edit" type="primary" icon={<EditOutlined />} onClick={onEdit}>
//           Edit
//         </Button>,
//       ]}
//     >
//       <div style={{ marginBottom: 16 }}>
//         <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
//           <video
//             src={video.url}
//             poster={video.thumbnailUrl}
//             controls
//             style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>
//       </div>

//       <Space style={{ marginBottom: 16, flexWrap: "wrap" }}>
//         <Tag color="blue">{video.category}</Tag>
//         {getStatusTag(video.status)}
//         <Tag color={video.visibility === "Public" ? "green" : video.visibility === "Unlisted" ? "orange" : "default"}>
//           {video.visibility}
//         </Tag>
//       </Space>

//       <Divider style={{ margin: "16px 0" }} />

//       <Row gutter={[16, 16]}>
//         <Col xs={12} sm={12} md={6}>
//           <div style={{ textAlign: "center" }}>
//             <Space direction="vertical" size={0}>
//               <EyeOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
//               <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
//                 {video.views}
//               </Title>
//               <Text type="secondary">Views</Text>
//             </Space>
//           </div>
//         </Col>
//         <Col xs={12} sm={12} md={6}>
//           <div style={{ textAlign: "center" }}>
//             <Space direction="vertical" size={0}>
//               <LikeOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
//               <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
//                 {video.likes}
//               </Title>
//               <Text type="secondary">Likes</Text>
//             </Space>
//           </div>
//         </Col>
//         <Col xs={12} sm={12} md={6}>
//           <div style={{ textAlign: "center" }}>
//             <Space direction="vertical" size={0}>
//               <ClockCircleOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
//               <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
//                 {video.duration}
//               </Title>
//               <Text type="secondary">Duration</Text>
//             </Space>
//           </div>
//         </Col>
//         <Col xs={12} sm={12} md={6}>
//           <div style={{ textAlign: "center" }}>
//             <Space direction="vertical" size={0}>
//               <CalendarOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
//               <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
//                 {new Date(video.uploadDate).toLocaleDateString()}
//               </Title>
//               <Text type="secondary">Upload Date</Text>
//             </Space>
//           </div>
//         </Col>
//       </Row>

//       <Divider style={{ margin: "16px 0" }} />

//       <Descriptions
//         title="Video Details"
//         layout={isMobile ? "vertical" : "horizontal"}
//         bordered
//         column={isMobile ? 1 : 3}
//         size={isMobile ? "small" : "default"}
//       >
//         <Descriptions.Item label="Description" span={3}>
//           {video.description || "No description provided."}
//         </Descriptions.Item>
//         <Descriptions.Item label="Tags">
//           {video.tags && video.tags.length > 0 ? (
//             <Space wrap>
//               {video.tags.map((tag) => (
//                 <Tag key={tag}>{tag}</Tag>
//               ))}
//             </Space>
//           ) : (
//             "No tags"
//           )}
//         </Descriptions.Item>
//         <Descriptions.Item label="Video ID">{video.id}</Descriptions.Item>
//         <Descriptions.Item label="URL">
//           <a href={video.url} target="_blank" rel="noopener noreferrer">
//             {video.url}
//           </a>
//         </Descriptions.Item>
//       </Descriptions>
//     </Modal>
//   )
// }

// export default VideoPreviewModal




"use client"
import { useState, useRef, useEffect } from "react"
import { Modal, Typography, Space, Tag, Button, Divider, Descriptions, Row, Col, Slider, Tooltip, message } from "antd"
import {
  EditOutlined,
  ShareAltOutlined,
  EyeOutlined,
  LikeOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  SoundOutlined,
  FullscreenOutlined,
  DownloadOutlined,
  CopyOutlined,
} from "@ant-design/icons"

const { Title, Text } = Typography

const VideoPreviewModal = ({ video, visible, onClose, onEdit, isMobile }) => {
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const videoRef = useRef(null)
  const progressInterval = useRef(null)

  useEffect(() => {
    if (visible) {
      // Reset state when modal opens
      setPlaying(false)
      setCurrentTime(0)
      setDuration(0)
    } else {
      // Clean up when modal closes
      if (videoRef.current) {
        videoRef.current.pause()
      }
      clearInterval(progressInterval.current)
    }
  }, [visible])

  useEffect(() => {
    // Clean up interval on unmount
    return () => {
      clearInterval(progressInterval.current)
    }
  }, [])

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause()
        clearInterval(progressInterval.current)
      } else {
        videoRef.current
          .play()
          .then(() => {
            // Start tracking progress
            progressInterval.current = setInterval(() => {
              setCurrentTime(videoRef.current.currentTime)
            }, 1000)
          })
          .catch((error) => {
            console.error("Video playback error:", error)
            messageApi.error("Failed to play video. Please try again.")
          })
      }
      setPlaying(!playing)
    }
  }

  const handleProgressChange = (value) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value
      setCurrentTime(value)
    }
  }

  const handleVolumeChange = (value) => {
    if (videoRef.current) {
      videoRef.current.volume = value
      setVolume(value)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen()
      }
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const getStatusTag = (status) => {
    switch (status) {
      case "Approved":
        return <Tag color="success">Approved</Tag>
      case "Rejected":
        return <Tag color="error">Rejected</Tag>
      case "Pending":
        return <Tag color="warning">Pending</Tag>
      default:
        return <Tag color="default">{status}</Tag>
    }
  }

  const handleShare = () => {
    // In a real app, this would generate a shareable link
    const shareLink = `https://example.com/videos/${video.id}`

    // Copy to clipboard
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        messageApi.success("Link copied to clipboard!")
      })
      .catch(() => {
        messageApi.error("Failed to copy link")
      })
  }

  const handleDownload = () => {
    // In a real app, this would trigger a download
    messageApi.success("Video download started")
  }

  return (
    <Modal
      title={video.title}
      open={visible}
      onCancel={onClose}
      width={isMobile ? "95%" : 800}
      centered
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="share" icon={<ShareAltOutlined />} onClick={handleShare}>
          Share
        </Button>,
        <Button key="edit" type="primary" icon={<EditOutlined />} onClick={onEdit}>
          Edit
        </Button>,
      ]}
    >
      {contextHolder}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            backgroundColor: "#000",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={video.url}
            poster={video.thumbnailUrl}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
          />

          {/* Custom video controls */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "8px 16px",
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {/* Progress bar */}
            <Slider
              value={currentTime}
              max={duration || 100}
              onChange={handleProgressChange}
              tooltip={{ formatter: (value) => formatTime(value) }}
              style={{ margin: 0 }}
            />

            {/* Controls */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Space>
                <Button
                  type="text"
                  icon={playing ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                  onClick={togglePlay}
                  style={{ color: "white" }}
                />

                <div style={{ position: "relative" }}>
                  <Button
                    type="text"
                    icon={<SoundOutlined />}
                    onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                    style={{ color: "white" }}
                  />

                  {showVolumeSlider && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 40,
                        height: 100,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        padding: "8px 0",
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Slider
                        vertical
                        value={volume}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={handleVolumeChange}
                        style={{ height: 80 }}
                      />
                    </div>
                  )}
                </div>

                <Text style={{ color: "white" }}>
                  {formatTime(currentTime)} / {formatTime(duration || 0)}
                </Text>
              </Space>

              <Space>
                <Tooltip title="Download">
                  <Button type="text" icon={<DownloadOutlined />} onClick={handleDownload} style={{ color: "white" }} />
                </Tooltip>
                <Tooltip title="Fullscreen">
                  <Button
                    type="text"
                    icon={<FullscreenOutlined />}
                    onClick={toggleFullscreen}
                    style={{ color: "white" }}
                  />
                </Tooltip>
              </Space>
            </div>
          </div>

          {/* Play button overlay (when paused) */}
          {!playing && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={togglePlay}
            >
              <PlayCircleOutlined style={{ fontSize: 64, color: "white", opacity: 0.8 }} />
            </div>
          )}
        </div>
      </div>

      <Space style={{ marginBottom: 16, flexWrap: "wrap" }}>
        {getStatusTag(video.status)}
        <Tag color="blue">{video.category}</Tag>
        <Tag color={video.visibility === "Public" ? "green" : video.visibility === "Unlisted" ? "orange" : "default"}>
          {video.visibility}
        </Tag>
      </Space>

      <Divider style={{ margin: "16px 0" }} />

      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <Space direction="vertical" size={0}>
              <EyeOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
              <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
                {video.views}
              </Title>
              <Text type="secondary">Views</Text>
            </Space>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <Space direction="vertical" size={0}>
              <LikeOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
              <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
                {video.likes}
              </Title>
              <Text type="secondary">Likes</Text>
            </Space>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <Space direction="vertical" size={0}>
              <ClockCircleOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
              <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
                {video.duration}
              </Title>
              <Text type="secondary">Duration</Text>
            </Space>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <Space direction="vertical" size={0}>
              <CalendarOutlined style={{ fontSize: isMobile ? 20 : 24 }} />
              <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
                {new Date(video.uploadDate).toLocaleDateString()}
              </Title>
              <Text type="secondary">Upload Date</Text>
            </Space>
          </div>
        </Col>
      </Row>

      <Divider style={{ margin: "16px 0" }} />

      <Descriptions
        title="Video Details"
        layout={isMobile ? "vertical" : "horizontal"}
        bordered
        column={isMobile ? 1 : 3}
        size={isMobile ? "small" : "default"}
      >
        <Descriptions.Item label="Description" span={3}>
          {video.description || "No description provided."}
        </Descriptions.Item>
        <Descriptions.Item label="Tags">
          {video.tags && video.tags.length > 0 ? (
            <Space wrap>
              {video.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Space>
          ) : (
            "No tags"
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Video ID">{video.id}</Descriptions.Item>
        <Descriptions.Item label="URL">
          <Space>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.url.substring(0, 30)}...
            </a>
            <Button
              type="text"
              icon={<CopyOutlined />}
              onClick={() => {
                navigator.clipboard
                  .writeText(video.url)
                  .then(() => messageApi.success("URL copied to clipboard"))
                  .catch(() => messageApi.error("Failed to copy URL"))
              }}
            />
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}

export default VideoPreviewModal

