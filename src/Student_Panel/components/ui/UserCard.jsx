// import { useState, useEffect } from "react";
// import { Card } from "./Card";
// import { Button } from "./button";
// import { Avatar, AvatarFallback } from "./avatar";

// const UserCard = ({ name, role, initials }) => {
//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     let interval;
//     if (isCheckedIn) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isCheckedIn]);

//   const formatTime = (seconds) => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   const handleCheckInOut = () => {
//     if (!isCheckedIn) {
//       setIsCheckedIn(true);
//       setTimer(0);
//     } else {
//       setIsCheckedIn(false);
//     }
//   };

//   return (
//     <Card className="p-6">
//       <div className="flex items-center gap-4 mb-4">
//         <Avatar className="w-16 h-16 bg-muted">
//           <AvatarFallback className="text-xl font-semibold">{initials}</AvatarFallback>
//         </Avatar>
//         <div>
//           <h3 className="font-semibold text-lg">{name}</h3>
//           <p className="text-sm text-muted-foreground">{role}</p>
//         </div>
//       </div>
//       <div className="space-y-3">
//         <div>
//           <p className="text-sm text-muted-foreground mb-1">
//             {isCheckedIn ? "Check in Hours" : "Checked in since"}
//           </p>
//           <p className="text-xl font-mono font-semibold text-success">
//             {isCheckedIn ? formatTime(timer) : "-- : -- : --"}
//           </p>
//         </div>
//         <Button
//           onClick={handleCheckInOut}
//           className={isCheckedIn ? "w-full bg-destructive hover:bg-destructive/90" : "w-full bg-success hover:bg-success/90"}
//         >
//           {isCheckedIn ? "Check-Out" : "Check-In"}
//         </Button>
//       </div>
//     </Card>
//   );
// };

// export default UserCard;
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useAuth } from "../../../Contexts/AuthContext";


const UserCard = ({ name, role, initials }) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [timer, setTimer] = useState(0);
const {user}= useAuth();
 const getInitial = () => user?.userName?.trim().charAt(0).toUpperCase() || "?";

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 60%, 70%)`;
  };
  useEffect(() => {
    let interval;
    if (isCheckedIn) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCheckedIn]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCheckInOut = () => {
    if (!isCheckedIn) {
      setIsCheckedIn(true);
      setTimer(0);
    } else {
      setIsCheckedIn(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 mb-4">
     

<Avatar 
  className="w-20 h-20" 
  style={{ backgroundColor: stringToColor(user?.userName || "Student") }}
>
  {/* <AvatarImage src={profileData?.personalInfo.avatarUrl} /> */}

  {/* Fallback only if image is missing */}
  <AvatarFallback className="text-xl font-semibold text-white flex items-center justify-center">
    {getInitial()}
  </AvatarFallback>
</Avatar>

        <div>
          <h3 className="font-semibold text-lg">{user?.userName || "Student"}</h3>
          <p className="text-sm text-muted-foreground">{user?.role || "Student"}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-md" style={{ backgroundColor: "#ECFDF5" }}>
          <p className="text-sm text-muted-foreground mb-1">
            {isCheckedIn ? "Checked In Time" : "Not Checked In"}
          </p>
          <p className="text-xl font-mono font-semibold text-success">
            {isCheckedIn ? formatTime(timer) : "-- : -- : --"}
          </p>
        </div>

        <Button
          onClick={handleCheckInOut}
          className={`w-full text-white ${
            isCheckedIn
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-800 hover:bg-green-500"
          }`}
        >
          {isCheckedIn ? "Check-Out" : "Check-In"}
        </Button>
      </div>
    </Card>
  );
};

export default UserCard;
