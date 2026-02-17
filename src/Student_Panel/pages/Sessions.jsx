import { useState, useMemo } from "react";
import { Card, Button, Space, Empty, Row, Col, Divider, message } from "antd";
import { VideoCameraOutlined, PlayCircleOutlined, FileTextOutlined } from "@ant-design/icons";
import { joinSession, getSessionRecordingUrl, getSessionNotesUrl } from "../services/studentPortalApi";

/**
 * SessionStatusBadge - Reusable component for session status display
 * Supports: "live", "upcoming", "recorded", "completed"
 */
const SessionStatusBadge = ({ status, sessionType = "online" }) => {
  const statusConfig = {
    live: { color: "#DC2626", icon: "🔴", label: "Live Now" },
    upcoming: { color: "#F59E0B", icon: "⏱", label: "Upcoming" },
    recorded: { color: "#6366F1", icon: "🎬", label: "Recorded" },
    completed: { color: "#10B981", icon: "✓", label: "Completed" },
  };

  const config = statusConfig[status];
  return (
    <Tag color={config.color} style={{ fontWeight: 600, fontSize: "12px" }}>
      {config.icon} {config.label}
    </Tag>
  );
};

/**
 * SessionCard - Reusable card component for responsive, mobile-friendly session display
 * Replaces table rows for better mobile UX while maintaining desktop visibility
 */
const SessionCard = ({ session, onJoin, onWatch, onViewNotes }) => {
  const isLive = session.status === "live";
  const isUpcoming = session.status === "upcoming";
  const isRecorded = session.status === "recorded";
  const isCompleted = session.status === "completed";

  return (
    <Card
      style={{
        marginBottom: "12px",
        borderLeft: isLive ? "4px solid #DC2626" : "4px solid #E5E7EB",
        background: isLive ? "#FEF2F2" : "#ffffff",
        animation: isLive ? "pulse 2s infinite" : "none",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      <Row justify="space-between" align="middle" gutter={16} wrap>
        <Col flex="auto">
          <div style={{ marginBottom: "8px" }}>
            <SessionStatusBadge status={session.status} sessionType={session.sessionType} />
          </div>
          <h4 style={{ margin: "8px 0 4px 0", color: "#0F172A", fontSize: "16px", fontWeight: 600 }}>
            {session.course}
          </h4>
          <p style={{ margin: "4px 0", color: "#6B7280", fontSize: "13px" }}>
            👨‍🏫 Mentor: {session.mentor}
          </p>
          <p style={{ margin: "4px 0", color: "#6B7280", fontSize: "13px" }}>
            📅 {session.date} • {session.time}
          </p>
          {session.sessionType && (
            <p style={{ margin: "4px 0", color: "#6B7280", fontSize: "12px" }}>
              📍 {session.sessionType.charAt(0).toUpperCase() + session.sessionType.slice(1)}
            </p>
          )}
        </Col>

        <Col style={{ minWidth: "180px" }}>
          <Space direction="vertical" style={{ width: "100%" }} size="small">
            {isLive && (
              <Button 
                type="primary" 
                icon={<VideoCameraOutlined />} 
                block
                danger
                aria-label={`Join ${session.course} live session with ${session.mentor}`}
                onClick={() => onJoin?.(session.id)}
              >
                Join Live
              </Button>
            )}
            {isUpcoming && (
              <Button 
                type="primary" 
                icon={<VideoCameraOutlined />} 
                block
                aria-label={`Add ${session.course} session to calendar`}
                onClick={() => onJoin?.(session.id)}
              >
                Add to Calendar
              </Button>
            )}
            {isRecorded && (
              <Button 
                type="default" 
                icon={<PlayCircleOutlined />} 
                block
                aria-label={`Watch recording of ${session.course} session`}
                onClick={() => onWatch?.(session.id)}
              >
                Watch
              </Button>
            )}
            {isCompleted && session.recordingUrl && (
              <Button 
                type="default" 
                icon={<PlayCircleOutlined />} 
                block
                size="small"
                aria-label={`Watch recording of completed ${session.course} session`}
                onClick={() => onWatch?.(session.id)}
              >
                View Recording
              </Button>
            )}
            {(isCompleted || isRecorded) && (
              <Button 
                type="text" 
                icon={<FileTextOutlined />} 
                block
                size="small"
                aria-label={`View notes from ${session.course} session`}
                onClick={() => onViewNotes?.(session.id)}
              >
                View Notes
              </Button>
            )}
            {isCompleted && session.rating && (
              <div style={{ fontSize: "12px", color: "#6B7280", textAlign: "center" }}>
                Rating: {session.rating} ⭐
              </div>
            )}
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

/**
 * SessionGroup - Groups sessions by category with header
 */
const SessionGroup = ({ title, description, sessions, onJoin, onWatch, onViewNotes, emptyMessage }) => {
  if (sessions.length === 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ marginBottom: "12px" }}>
        <h3 style={{ margin: "0 0 4px 0", color: "#0F172A", fontSize: "18px", fontWeight: 600 }}>
          {title} ({sessions.length})
        </h3>
        {description && (
          <p style={{ margin: "4px 0 0 0", color: "#6B7280", fontSize: "13px" }}>
            {description}
          </p>
        )}
      </div>
      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          session={session}
          onJoin={onJoin}
          onWatch={onWatch}
          onViewNotes={onViewNotes}
        />
      ))}
    </div>
  );
};

const Sessions = () => {
  // Mock data - replace with API call in production
  const [sessions] = useState([
    {
      id: "1",
      mentor: "Dr. Sarah Wilson",
      course: "Web Development",
      date: "2024-02-10",
      time: "2:00 PM - 3:00 PM",
      status: "completed",
      sessionType: "online",
      rating: 5,
      recordingUrl: "/recordings/web-dev-1.mp4",
      notesUrl: "/notes/web-dev-1.pdf",
    },
    {
      id: "2",
      mentor: "Prof. James Brown",
      course: "Advanced JavaScript",
      date: "2024-02-22",
      time: "3:30 PM - 4:30 PM",
      status: "live",
      sessionType: "online",
      rating: null,
      recordingUrl: null,
    },
    {
      id: "3",
      mentor: "Dr. Sarah Wilson",
      course: "React Fundamentals",
      date: "2024-02-25",
      time: "1:00 PM - 2:00 PM",
      status: "upcoming",
      sessionType: "hybrid",
      rating: null,
    },
    {
      id: "4",
      mentor: "Mr. Rajesh Kumar",
      course: "CSS Mastery",
      date: "2024-02-20",
      time: "10:00 AM - 11:00 AM",
      status: "recorded",
      sessionType: "offline",
      rating: null,
      recordingUrl: "/recordings/css-mastery-1.mp4",
      notesUrl: "/notes/css-mastery-1.pdf",
    },
  ]);

  // Memoized session grouping - optimized to prevent unnecessary recalculations
  const groupedSessions = useMemo(() => {
    const live = sessions.filter((s) => s.status === "live");
    const upcoming = sessions.filter((s) => s.status === "upcoming");
    const recorded = sessions.filter((s) => s.status === "recorded");
    const completed = sessions.filter((s) => s.status === "completed");

    return { live, upcoming, recorded, completed };
  }, [sessions]);

  const getSessionById = (id) => sessions.find((s) => s.id === id);

  const handleJoinSession = async (sessionId) => {
    const session = getSessionById(sessionId);
    const joined = await joinSession(sessionId);
    if (session?.status === "live") {
      if (joined) message.success(`Joining live session: ${session.course}`);
      else message.success(`Joining live session: ${session.course}. Meeting link would open when API is connected.`);
    } else if (session?.status === "upcoming") {
      message.success(`Reminder set for: ${session.course} on ${session.date} at ${session.time}`);
    }
  };

  const handleWatchRecording = async (sessionId) => {
    const session = getSessionById(sessionId);
    const apiUrl = await getSessionRecordingUrl(sessionId);
    const url = apiUrl || session?.recordingUrl;
    if (url) {
      window.open(url, "_blank");
      message.success("Opening recording");
    } else {
      message.info("Recording will be available soon.");
    }
  };

  const handleViewNotes = async (sessionId) => {
    const session = getSessionById(sessionId);
    const apiUrl = await getSessionNotesUrl(sessionId);
    const url = apiUrl || session?.notesUrl;
    if (url) {
      window.open(url, "_blank");
      message.success("Opening notes");
    } else {
      message.info("Notes will be available soon.");
    }
  };

  const totalSessions = sessions.length;
  const hasAnySessions = totalSessions > 0;

  return (
    <div style={{ padding: "24px" }} role="region" aria-label="Mentoring sessions dashboard">
      <Card
        title={
          <div>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
              🎓 Your Mentoring Sessions
            </h2>
            <p style={{ margin: "4px 0 0 0", color: "#6B7280", fontSize: "13px" }}>
              {totalSessions} session{totalSessions !== 1 ? "s" : ""} in your schedule
            </p>
          </div>
        }
        bordered={false}
        style={{ borderRadius: "12px" }}
      >
        {!hasAnySessions ? (
          <Empty
            description={
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <h3 style={{ color: "#6B7280", marginBottom: "8px" }}>No sessions scheduled yet</h3>
                <p style={{ color: "#9CA3AF", fontSize: "13px", marginBottom: "12px" }}>
                  Book a session with a mentor to get started or check back soon!
                </p>
                <Button type="primary">Explore Mentors</Button>
              </div>
            }
          />
        ) : (
          <>
            {/* Live Sessions - Always on top with visual prominence */}
            {groupedSessions.live.length > 0 && (
              <>
                <SessionGroup
                  title="🔴 Live Now"
                  description="Join a session in progress"
                  sessions={groupedSessions.live}
                  onJoin={handleJoinSession}
                  onWatch={handleWatchRecording}
                  onViewNotes={handleViewNotes}
                />
                <Divider />
              </>
            )}

            {/* Upcoming Sessions */}
            {groupedSessions.upcoming.length > 0 && (
              <>
                <SessionGroup
                  title="⏱ Upcoming"
                  description="Sessions scheduled for you"
                  sessions={groupedSessions.upcoming}
                  onJoin={handleJoinSession}
                  onWatch={handleWatchRecording}
                  onViewNotes={handleViewNotes}
                />
                <Divider />
              </>
            )}

            {/* Recorded Sessions */}
            {groupedSessions.recorded.length > 0 && (
              <>
                <SessionGroup
                  title="🎬 Recorded Sessions"
                  description="Watch sessions on your own time"
                  sessions={groupedSessions.recorded}
                  onJoin={handleJoinSession}
                  onWatch={handleWatchRecording}
                  onViewNotes={handleViewNotes}
                />
                <Divider />
              </>
            )}

            {/* Completed Sessions */}
            {groupedSessions.completed.length > 0 && (
              <SessionGroup
                title="✓ Completed"
                description="Sessions you've already attended"
                sessions={groupedSessions.completed}
                onJoin={handleJoinSession}
                onWatch={handleWatchRecording}
                onViewNotes={handleViewNotes}
              />
            )}
          </>
        )}
      </Card>

      {/* Inline styles for live pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
      `}</style>
    </div>
  );
};

export default Sessions;
