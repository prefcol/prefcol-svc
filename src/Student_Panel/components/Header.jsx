// import { Link, useLocation } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { LogIn, Calendar, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const isActive = (path) => location.pathname === path;

//     const activeClass = (path) =>
//         isActive(path) ? "bg-white text-teal-900 font-bold hover:bg-white" : "text-white font-bold border hover:bg-teal-100/10";

//     return (
//         <header className="bg-teal-900 text-white py-4 px-6">
//             <nav className="flex justify-end gap-3">
//                   <Link to="/Student-portal/check-in-out">
//                     <Button
//                         variant="ghost"
//                         size="sm"
//                         className={activeClass("/Student-portal/check-in-out")}
//                     >
                      
//                         <LogIn className="w-6 h-6 mr-2" />
//                         Check-In/Out
                       
//                     </Button>
//                  </Link>
//                 <Link to="/Student-portal/calendar">
//                     <Button
//                         variant="ghost"
//                         size="sm"
//                         className={activeClass("/Student-portal/calendar")}
//                     >
//                         <Calendar className="w-6 h-6 mr-2" />
//                         Calendar
//                     </Button>
//                 </Link>
//                 <Link to="/Student-portal/mentor-connect">
//                     <Button
//                         variant="ghost"
//                         size="sm"
//                         className={activeClass("/Student-portal/mentor-connect")}
//                     >
//                         <Users className="w-6 h-6 mr-2" />
//                         Mentor Connect
//                     </Button>
//                 </Link>
//             </nav>
//         </header>
//     );
// };

// export default Header;

import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LogIn, Calendar, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const activeClass = (path) =>
    isActive(path)
      ? "bg-white text-teal-900 font-bold hover:bg-white"
      : "text-white font-bold border hover:bg-teal-100/10";

  return (
    <header className="bg-teal-900 text-white py-4 px-6 sticky top-0 z-50">

      
      {/* Top bar with hamburger button (mobile) */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="font-bold text-lg">Student Portal</h1>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-end gap-3">
        <Link to="/Student-portal/check-in-out">
          <Button variant="ghost" size="sm" className={activeClass("/Student-portal/check-in-out")}>
            <LogIn className="w-6 h-6 mr-2" />
            Check-In/Out
          </Button>
        </Link>

        <Link to="/Student-portal/calendar">
          <Button variant="ghost" size="sm" className={activeClass("/Student-portal/calendar")}>
            <Calendar className="w-6 h-6 mr-2" />
            Calendar
          </Button>
        </Link>

        <Link to="/Student-portal/mentor-connect">
          <Button variant="ghost" size="sm" className={activeClass("/Student-portal/mentor-connect")}>
            <Users className="w-6 h-6 mr-2" />
            Mentor Connect
          </Button>
        </Link>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="flex flex-col mt-4 gap-3 md:hidden animate-slide-down">
          <Link to="/Student-portal/check-in-out">
            <Button
              variant="ghost"
              size="sm"
              className={`w-full justify-start ${activeClass("/Student-portal/check-in-out")}`}
              onClick={() => setMenuOpen(false)}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Check-In/Out
            </Button>
          </Link>

          <Link to="/Student-portal/calendar">
            <Button
              variant="ghost"
              size="sm"
              className={`w-full justify-start ${activeClass("/Student-portal/calendar")}`}
              onClick={() => setMenuOpen(false)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Calendar
            </Button>
          </Link>

          <Link to="/Student-portal/mentor-connect">
            <Button
              variant="ghost"
              size="sm"
              className={`w-full justify-start ${activeClass("/Student-portal/mentor-connect")}`}
              onClick={() => setMenuOpen(false)}
            >
              <Users className="w-5 h-5 mr-2" />
              Mentor Connect
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
