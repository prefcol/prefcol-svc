import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Send, LogIn, Calendar, Users } from "lucide-react";
import Header from "../components/Header";
import { useEffect } from "react";

const MentorConnect = () => {
 
  const [selectedCourse, setSelectedCourse] = useState("Java Programming Language");
  const [selectedMentor, setSelectedMentor] = useState("Vimal Kanna");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: `You are now connected with ${selectedMentor} for ${selectedCourse}. Say hi 👋`,
      sender: "mentor",
    },
  ]);
  useEffect(() => {
    setMessages([
      {
        text: `You are now connected with ${selectedMentor} for ${selectedCourse}. Say hi 👋`,
        sender: "mentor",
      },
    ]);
  }, [selectedMentor, selectedCourse]);
  const [placeholder, setPlaceholder] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 640
      ? `Message ${selectedMentor}...`
      : `Message ${selectedMentor} about ${selectedCourse}...`
  );

  useEffect(() => {
    const updatePlaceholder = () => {
      const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
      setPlaceholder(
        isMobile
          ? `Message ${selectedMentor}...`
          : `Message ${selectedMentor} about ${selectedCourse}...`
      );
    };

    // update on mount and when mentor/course change
    updatePlaceholder();

    // listen for resizes (to adapt when rotating/resizing)
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, [selectedMentor, selectedCourse]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");

    // Simulate mentor response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `Thanks for your message. ${selectedMentor} will reply soon. Meanwhile, here's a quick tip for ${selectedCourse}: start by reviewing the fundamentals and asking specific questions.`,
          sender: "mentor",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Mentor Connect</h1>
          <p className="text-muted-foreground">Connect with mentors and get guidance</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6 lg:col-span-1 h-fit overflow-visible">
  <div className="space-y-6">
    <div>
      <label className="text-sm font-medium mb-2 block">Select Course</label>
      <Select value={selectedCourse} onValueChange={setSelectedCourse}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent 
          position="popper" 
          sideOffset={5} 
          className="z-50 bg-white text-popover-foreground border rounded-md"
        >
          <SelectItem value="Java Programming Language">Java Programming Language</SelectItem>
          <SelectItem value="Structured Query Language">Structured Query Language</SelectItem>
          <SelectItem value="Web Technology">Web Technology</SelectItem>
          <SelectItem value="Graphic Design">Graphic Design</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div>
      <label className="text-sm font-medium mb-2 block">Select Mentor</label>
      <Select value={selectedMentor} onValueChange={setSelectedMentor}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent 
          position="popper" 
          sideOffset={5} 
          className="z-50 bg-white text-popover-foreground border rounded-md"
        >
          <SelectItem value="Vimal Kanna">Vimal Kanna</SelectItem>
          <SelectItem value="Karthiga R">Karthiga R</SelectItem>
          <SelectItem value="Vijay Krishna Raj R">Vijay Krishna Raj R</SelectItem>
          <SelectItem value="Poovitha S">Poovitha S</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</Card>

          <Card className="lg:col-span-2 flex flex-col h-[600px]">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder={placeholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-success hover:bg-success/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MentorConnect;
