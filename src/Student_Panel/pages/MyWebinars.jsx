import { useState } from "react";
import { Card, Tabs, List, Button, Space, Empty, message } from "antd";
import { PlayCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import { setWebinarReminder, getWebinarRecordingUrl } from "../services/studentPortalApi";

const MyWebinars = () => {
  const [scheduled] = useState([
    { id: "1", title: "Advanced React Patterns", speaker: "Dr. Emma Thompson", date: "2024-02-15", time: "3:00 PM - 4:30 PM", attendees: 245, meetingLink: null },
    { id: "2", title: "Web Performance Optimization", speaker: "Prof. Michael Chen", date: "2024-02-20", time: "2:00 PM - 3:30 PM", attendees: 189, meetingLink: null },
  ]);

  const [completed] = useState([
    { id: "1", title: "JavaScript Best Practices", speaker: "Sarah Wilson", date: "2024-01-25", duration: "1.5 hours", attendees: 312, rating: 4.8, recording: "https://www.w3.org/WAI/WCAG21/Techniques/html/Examples/audio/audio.html" },
    { id: "2", title: "CSS Tricks for Modern Design", speaker: "James Brown", date: "2024-02-01", duration: "1 hour", attendees: 267, rating: 4.6, recording: "https://www.w3.org/WAI/WCAG21/Techniques/html/Examples/audio/audio.html" },
  ]);

  const handleSetReminder = async (webinar) => {
    const ok = await setWebinarReminder(webinar.id);
    if (ok) message.success("Reminder set with server.");
    else message.success(`Reminder set for "${webinar.title}" on ${webinar.date} at ${webinar.time}`);
  };

  const handleWatchRecording = async (webinar) => {
    const apiUrl = await getWebinarRecordingUrl(webinar.id);
    const url = apiUrl || (webinar.recording && webinar.recording !== "#" ? webinar.recording : null);
    if (url) {
      window.open(url, "_blank");
      message.success("Opening recording");
    } else {
      message.info("Recording will be available soon.");
    }
  };

  const tabItems = [
    {
      key: "scheduled",
      label: "Scheduled",
      children: (
        scheduled.length > 0 ? (
          <List
            dataSource={scheduled}
            renderItem={(webinar) => (
              <Card key={webinar.id} style={{ marginBottom: 16 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <h4 style={{ margin: 0 }}>{webinar.title}</h4>
                  <p style={{ color: "#666", margin: 0 }}>
                    <strong>Speaker:</strong> {webinar.speaker}
                  </p>
                  <p style={{ margin: 0 }}>
                    <CalendarOutlined /> {webinar.date} at {webinar.time}
                  </p>
                  <p style={{ color: "#666", margin: 0 }}>
                    {webinar.attendees} people registered
                  </p>
                  <Button type="primary" icon={<PlayCircleOutlined />} block onClick={() => handleSetReminder(webinar)}>
                    Set Reminder
                  </Button>
                </Space>
              </Card>
            )}
          />
        ) : (
          <Empty description="No scheduled webinars" />
        )
      ),
    },
    {
      key: "completed",
      label: "Completed",
      children: (
        completed.length > 0 ? (
          <List
            dataSource={completed}
            renderItem={(webinar) => (
              <Card key={webinar.id} style={{ marginBottom: 16 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <h4 style={{ margin: 0 }}>{webinar.title}</h4>
                  <p style={{ color: "#666", margin: 0 }}>
                    <strong>Speaker:</strong> {webinar.speaker}
                  </p>
                  <p style={{ margin: 0 }}>
                    {webinar.date} • {webinar.duration}
                  </p>
                  <p style={{ color: "#666", margin: 0 }}>
                    {webinar.attendees} people attended • Rating: {webinar.rating} ⭐
                  </p>
                  <Button icon={<PlayCircleOutlined />} onClick={() => handleWatchRecording(webinar)}>
                    Watch Recording
                  </Button>
                </Space>
              </Card>
            )}
          />
        ) : (
          <Empty description="No completed webinars" />
        )
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2>My Webinars</h2>
        <p>Attend live webinars and watch recordings</p>
      </div>

      <Card>
        <Tabs items={tabItems} />
      </Card>
    </div>
  );
};

export default MyWebinars;
