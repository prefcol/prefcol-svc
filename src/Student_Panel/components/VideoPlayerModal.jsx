

// src/components/VideoPlayerModal.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Modal, Typography, message, Spin, Button } from 'antd';
import { CloseOutlined, ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function VideoPlayerModal({ 
  open, 
  onClose, 
  course, 
  video,
  dispatch
}) {
  if (!open || !video || !course) return null;

  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lastTimeRef = useRef(0);

  // Handle video completion
  const handleVideoEnd = () => {
    dispatch({
      type: "COMPLETE_VIDEO",
      courseId: course.id,
      videoId: video.id
    });
    message.success("Video completed!");
    onClose();
  };

  // Prevent skipping
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;

    if (currentTime < lastTimeRef.current - 1) {
      videoRef.current.currentTime = lastTimeRef.current;
      return;
    }
    if (currentTime > lastTimeRef.current + 2 && lastTimeRef.current > 0) {
      videoRef.current.currentTime = lastTimeRef.current;
      return;
    }
    if (currentTime > lastTimeRef.current) {
      lastTimeRef.current = currentTime;
    }
  };

  const handleLoadedData = () => setIsLoading(false);
  const handleError = (e) => {
    setIsLoading(false);
    console.error("Video error:", e);
    message.error("Failed to load video");
  };

  // Toggle fullscreen manually (optional fallback)
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Listen for native fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={window.innerWidth > 768 ? '85%' : '95%'}
      style={{
        top: 24,
        maxWidth: '1200px',
      }}
      bodyStyle={{
        padding: 0,
        backgroundColor: '#000',
        borderRadius: 8,
      }}
      closeIcon={<CloseOutlined style={{ color: '#fff' }} />}
      centered
    >
      {/* Header */}
      <div 
        style={{ 
          padding: '12px 16px', 
          backgroundColor: '#111',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #333'
        }}
      >
        <Title
          level={5}
          style={{
            margin: 0,
            color: '#fff',
            fontSize: '16px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1,
          }}
        >
          {video.title}
        </Title>

        {/* Fullscreen Toggle Button */}
        <Button 
          type="text" 
          size="small" 
          icon={isFullscreen ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
          onClick={toggleFullscreen}
          style={{ color: '#fff' }}
        />
      </div>

      {/* Video Area - Fills Remaining Height */}
      <div
        style={{
          height: 'calc(100vh - 200px)',
          minHeight: '300px',
          maxHeight: '70vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        {video.url ? (
          <>
            {isLoading && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  zIndex: 10,
                }}
              >
                <Spin size="large" />
              </div>
            )}
            <video
              ref={videoRef}
              controls
              controlsList="nodownload noremoteplayback" // ✅ Removed nofullscreen
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                outline: 'none',
                backgroundColor: '#000',
                objectFit: 'cover',
                transition: 'transform 0.2s ease',
              }}
              src={video.url}
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              onLoadedData={handleLoadedData}
              onError={handleError}
              preload="metadata"
            />
          </>
        ) : (
          <div
            style={{
              padding: '20px',
              textAlign: 'center',
              color: '#ff4d4f',
              backgroundColor: '#141414',
              width: '100%',
            }}
          >
            No video URL available for this lesson.
          </div>
        )}
      </div>
    </Modal>
  );
}