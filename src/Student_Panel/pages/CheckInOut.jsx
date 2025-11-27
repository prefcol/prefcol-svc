import Header from "../components/Header";
import UserCard from "../components/ui/UserCard";
import ScheduleCard from "../components/ScheduleCard";
import AttendanceTable from "../components/AttendanceTable";
import { useAuth } from "../../Contexts/AuthContext";

const Dashboard = () => {
  const scheduleData = [
    { title: "Java Programming Language", instructor: "Vimal Kanna", time: "9:00 AM - 11:00 AM" },
    { title: "Structured Query Language", instructor: "Karthiga R", time: "11:15 AM - 1:15 PM" },
    { title: "Web Technology", instructor: "Vijay Krishna Raj R", time: "2:15 PM - 4:15 PM" },
    { title: "Graphic Design", instructor: "Poovitha S", time: "4:30 PM - 6:30 PM" },
  ];

  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Check-In/Out Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, <span>{user.userName}</span></p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <UserCard name={user.userName} role={user.role} initials="KR" />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-1">Today's Schedule</h2>
                <p className="text-sm text-muted-foreground">Overview of your classes today</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {scheduleData.map((schedule, index) => (
                  <ScheduleCard key={index} {...schedule} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Attendance Records (Day-wise)</h2>
          <AttendanceTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
