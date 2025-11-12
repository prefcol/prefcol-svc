

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Layout, Button, Input, Space, Badge, Dropdown, Avatar, Typography, Menu, Switch, message
// } from "antd"
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   SearchOutlined,
//   BellOutlined,
//   UserOutlined,
//   SettingOutlined,
//   QuestionCircleOutlined,
//   SunOutlined,
//   MoonOutlined,
//   GlobalOutlined,
//   ShoppingCartOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons"
// import { Link, useNavigate } from "react-router-dom"
// import { useTheme } from "../contexts/ThemeContext"
// import { useAuth } from "../../Contexts/AuthContext" // ✅ Import Auth Context

// const { Header } = Layout
// const { Text } = Typography

// const TopNav = ({ collapsed, setCollapsed, isMobile, userData}) => {

//   const navigate = useNavigate()
//   const { theme, toggleTheme } = useTheme()
//   const { logout, user } = useAuth() // ✅ Use logout from AuthContext
//   const [searchVisible, setSearchVisible] = useState(false)
//   const [notifications, setNotifications] = useState([])
//   const [cartItems, setCartItems] = useState([])
//   const [loading, setLoading] = useState(false)
//       const getInitial = () => {
//     if (!user?.userName) return '?'
//     return user.userName.trim().charAt(0).toUpperCase()
//   }

//   const stringToColor = (str) => {
//   let hash = 0
//   for (let i = 0; i < str.length; i++) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash)
//   }
//   const hue = Math.abs(hash) % 360
//   return `hsl(${hue}, 60%, 70%)`
// }

//   useEffect(() => {
//     fetchNotifications()
//     fetchCartItems()
//   }, [])

//   const fetchNotifications = async () => {
//     try {
//       setLoading(true)
//       const mockNotifications = [
//         { id: 1, title: "New Course Available", description: "Check out our new course on Machine Learning!", time: "2 hours ago", read: false },
//         { id: 2, title: "Assignment Reminder", description: "Your React project is due tomorrow.", time: "5 hours ago", read: false },
//         { id: 3, title: "Certificate Ready", description: "Your Web Development certificate is ready to download.", time: "1 day ago", read: true },
//       ]
//       setNotifications(mockNotifications)
//     } catch {
//       message.error("Failed to load notifications")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fetchCartItems = async () => {
//     try {
//       setLoading(true)
//       const mockCartItems = [
//         { id: 1, title: "Advanced Web Development with React", price: 39.99 },
//         { id: 2, title: "Python for Data Science", price: 44.99 },
//       ]
//       setCartItems(mockCartItems)
//     } catch {
//       message.error("Failed to load cart items")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const markAllNotificationsAsRead = () => {
//     setNotifications(notifications.map(n => ({ ...n, read: true })))
//     message.success("All notifications marked as read")
//   }

//   const unreadCount = notifications.filter(n => !n.read).length

//   const notificationMenu = (
//     <Menu
//       style={{ width: 320 }}
//       items={[
//       {
//         key: "notification-header",
//         label: (
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <Text strong>Notifications</Text>
//           <Button type="link" size="small" onClick={markAllNotificationsAsRead}>
//           Mark all as read
//           </Button>
//         </div>
//         ),
//       },
//       { type: "divider" },
//       ...notifications.map(n => ({
//         key: `notification-${n.id}`,
//         label: (
//         <div style={{
//           padding: "8px 0",
//           opacity: n.read ? 0.7 : 1,
//           backgroundColor: n.read ? "transparent" : "rgba(24, 144, 255, 0.05)"
//         }}>
//           <Text strong>{n.title}</Text>
//           <Text type="secondary" style={{ display: "block", fontSize: 12 }}>{n.description}</Text>
//           <Text type="secondary" style={{ fontSize: 11 }}>{n.time}</Text>
//         </div>
//         )
//       })),
//       { type: "divider" },
//       {
//         key: "view-all",
//         label: <Button type="link" block onClick={() => navigate("/Student-portal/notifications")}>View All Notifications</Button>,
//       }
//       ]}
//     />
//     )

//   const userMenu = (
//     <Menu
//       items={[
//         { key: "profile", icon: <UserOutlined />, label: <Link to="/Student-portal/profile">My Profile</Link> },

//         {
//           key: "logout",
//           icon: <LogoutOutlined />,
//           label: <span onClick={() => {
//             logout()
//             navigate("/")
//             message.success("Logged out successfully")
//           }}>Logout</span>,
//         },
//       ]}
//     />
//   )

//   const cartMenu = (
//     <Menu
//       style={{ width: 300 }}
//       items={[
//         {
//           key: "cart-header",
//           label: (
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <Text strong>Shopping Cart</Text>
//               <Text>{cartItems.length} items</Text>
//             </div>
//           ),
//         },
//         { type: "divider" },
//         ...cartItems.map(item => ({
//           key: `cart-item-${item.id}`,
//           label: (
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <div>
//                 <Text ellipsis style={{ maxWidth: 180 }}>{item.title}</Text>
//                 <Text type="secondary">${item.price}</Text>
//               </div>
//               <Button
//                 size="small"
//                 danger
//                 onClick={e => {
//                   e.stopPropagation()
//                   setCartItems(cartItems.filter(c => c.id !== item.id))
//                   message.success("Item removed from cart")
//                 }}
//               >Remove</Button>
//             </div>
//           )
//         })),
//         { type: "divider" },
//         {
//           key: "cart-total",
//           label: (
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <Text strong>Total:</Text>
//               <Text strong>${cartItems.reduce((sum, i) => sum + i.price, 0).toFixed(2)}</Text>
//             </div>
//           ),
//         },
//         {
//           key: "cart-checkout",
//           label: <Button type="primary" block onClick={() => navigate("/Student-portal/payment")}>Checkout</Button>,
//         },
//         {
//           key: "view-cart",
//           label: <Button type="link" block onClick={() => navigate("/Student-portal/cart")}>View Cart</Button>,
//         },
//       ]}
//     />
//   )

//   return (
//     <Header style={{
//       padding: 0,
//       background: theme === "dark" ? "#1f1f1f" : "#fff",
//       position: "sticky",
//       top: 0,
//       zIndex: 999,
//       width: "100%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       boxShadow: "0 1px 4px rgba(0,21,41,0.08)"
//     }}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <Button
//           type="text"
//           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           onClick={() => setCollapsed(!collapsed)}
//           style={{ fontSize: 16, width: 64, height: 64 }}
//         />
//         {!isMobile && !searchVisible && (
//           <Text strong style={{ fontSize: 13, marginLeft: 16, color: theme === "dark" ? "#fff" : undefined }}>
//             Prefcol Edutech Solutions
//           </Text>
//         )}
//         {(searchVisible || !isMobile) && (
//           <div style={{ padding: "0 16px", maxWidth: isMobile ? "calc(100vw - 170px)" : 300 }}>
//             <Input
//               placeholder="Search courses, lessons..."
//               prefix={<SearchOutlined />}
//               style={{ borderRadius: 4 }}
//               onBlur={() => isMobile && setSearchVisible(false)}
//               autoFocus={isMobile && searchVisible}
//             />
//           </div>
//         )}
//       </div>

//       <div style={{ display: "flex", alignItems: "center", paddingRight: 16 }}>
//         {isMobile && !searchVisible && (
//           <Button type="text" icon={<SearchOutlined />} onClick={() => setSearchVisible(true)} style={{ marginRight: 8 }} />
//         )}

//         <Space size="large">
//           <Dropdown overlay={cartMenu} trigger={["click"]} placement="bottomRight" arrow>
//             <Badge count={cartItems.length} size="small">
//               <Button type="text" icon={<ShoppingCartOutlined style={{ fontSize: 20 }} />} />
//             </Badge>
//           </Dropdown>

//           <Dropdown overlay={notificationMenu} trigger={["click"]} placement="bottomRight" arrow>
//             <Badge count={unreadCount} size="small">
//               <Button type="text" icon={<BellOutlined style={{ fontSize: 20 }} />} />
//             </Badge>
//           </Dropdown>

//           <Dropdown overlay={userMenu} trigger={["click"]} placement="bottomRight" arrow>
//             <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
//               <Avatar src={user?.avatar}  icon={!user?.avatar && <span>{getInitial()}</span>} style={{ backgroundColor: stringToColor(user?.userName || "Student"), marginRight: isMobile ? 0 : 8 }} />
//               {!isMobile && (
//                 <span style={{ color: theme === "dark" ? "#fff" : undefined }}>
//                   {user?.userName || "Student"}
//                 </span>
//               )}
//             </div>
//           </Dropdown>
//         </Space>
//       </div>
//     </Header>
//   )
// }

// export default TopNav

"use client";

import { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Input,
  Space,
  Badge,
  Dropdown,
  Avatar,
  Typography,
  Menu,
  message,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../../Contexts/AuthContext"; // ✅ Import Auth Context
import {useGlobalStore} from "../contexts/GlobalStore"; // ✅ Default import to match module export
const { Header } = Layout;
const { Text } = Typography;

const TopNav = ({ collapsed, setCollapsed, isMobile, userData }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { logout, user } = useAuth(); // ✅ Use logout from AuthContext
  const [searchVisible, setSearchVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
const { courses, assignments, progress } = useGlobalStore(); // ✅ Get assignments from store
  const getInitial = () => {
    if (!user?.userName) return "?";
    return user.userName.trim().charAt(0).toUpperCase();
  };

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 60%, 70%)`;
  };

 useEffect(() => {
    const generateAssignmentNotifications = () => {
      const pendingAssignments = assignments.filter(a => a.status === "pending");
      
      const assignmentNotifications = pendingAssignments.map(assignment => {
        const course = courses.find(c => c.id === assignment.courseId);
        return {
          id: `assign-${assignment.id}`,
          type: "assignment",
          title: "Assignment Due Soon",
          description: `Complete your assignment for "${course?.title || 'Unknown Course'}"`,
          time: assignment.dueDate 
            ? `Due: ${new Date(assignment.dueDate).toLocaleDateString()}`
            : "Due soon",
          read: false,
          courseId: assignment.courseId,
          assignmentId: assignment.id
        };
      });

      // You can also add other notification types here
      setNotifications(assignmentNotifications);
    };

    generateAssignmentNotifications();
  }, [assignments, courses]); 

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    message.success("All notifications marked as read");
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const notificationMenu = (
  <Menu
    style={{ width: 320 }}
    items={[
      {
        key: "notification-header",
        label: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text strong>Notifications</Text>
            {notifications.length > 0 && (
              <Button type="link" size="small" onClick={markAllNotificationsAsRead}>
                Mark all as read
              </Button>
            )}
          </div>
        ),
      },
      { type: "divider" },
      ...(notifications.length > 0 
        ? notifications.map((n) => ({
            key: n.id,
            label: (
              <div
                style={{
                  padding: "8px 0",
                  opacity: n.read ? 0.7 : 1,
                  backgroundColor: n.read ? "transparent" : "rgba(24, 144, 255, 0.05)",
                  cursor: "pointer"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (n.type === "assignment" && n.courseId) {
                    navigate(`/Student-portal/assignments?courseId=${n.courseId}`);
                  }
                }}
              >
                <Text strong>{n.title}</Text>
                <Text type="secondary" style={{ display: "block", fontSize: 12 }}>
                  {n.description}
                </Text>
                <Text type="secondary" style={{ fontSize: 11 }}>{n.time}</Text>
              </div>
            ),
          }))
        : [{
            key: "no-notifications",
            label: <Text type="secondary" style={{ padding: "8px 0", display: "block" }}>No pending assignments</Text>
          }]
      ),
      { type: "divider" },
      {
        key: "view-all",
        label: (
          <Button
            type="link"
            block
            onClick={() => navigate("/Student-portal/assignments")}
          >
            View All Assignments
          </Button>
        ),
      },
    ]}
  />
);

  const userMenu = (
    <Menu
      items={[
        {
          key: "profile",
          icon: <UserOutlined />,
          label: <Link to="/Student-portal/profile">My Profile</Link>,
        },
        {
          key: "logout",
          icon: <LogoutOutlined />,
          label: (
            <span
              onClick={() => {
                logout();
                navigate("/");
                message.success("Logged out successfully");
              }}
            >
              Logout
            </span>
          ),
        },
      ]}
    />
  );

  return (
    <Header
      style={{
        padding: 0,
        background: theme === "dark" ? "#1f1f1f" : "#fff",
        position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0,21,41,0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: 16, width: 64, height: 64 }}
        />
        {!isMobile && !searchVisible && (
          <Text
            strong
            style={{
              fontSize: 13,
              marginLeft: 16,
              color: theme === "dark" ? "#fff" : undefined,
            }}
          >
            Prefcol Edutech Solutions
          </Text>
        )}
        {(searchVisible || !isMobile) && (
          <div
            style={{
              padding: "0 16px",
              maxWidth: isMobile ? "calc(100vw - 170px)" : 300,
            }}
          >
            <Input
              placeholder="Search courses, lessons..."
              prefix={<SearchOutlined />}
              style={{ borderRadius: 4 }}
              onBlur={() => isMobile && setSearchVisible(false)}
              autoFocus={isMobile && searchVisible}
            />
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", paddingRight: 16 }}>
        {isMobile && !searchVisible && (
          <Button
            type="text"
            icon={<SearchOutlined />}
            onClick={() => setSearchVisible(true)}
            style={{ marginRight: 8 }}
          />
        )}

        <Space size="large">
          {/* 🚫 Cart removed — only notifications and user remain */}
          <Dropdown
            overlay={notificationMenu}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <Badge count={unreadCount} size="small">
              <Button
                type="text"
                icon={<BellOutlined style={{ fontSize: 20 }} />}
              />
            </Badge>
          </Dropdown>

          <Dropdown
            overlay={userMenu}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                src={user?.avatar}
                icon={!user?.avatar && <span>{getInitial()}</span>}
                style={{
                  backgroundColor: stringToColor(user?.userName || "Student"),
                  marginRight: isMobile ? 0 : 8,
                }}
              />
              {!isMobile && (
                <span style={{ color: theme === "dark" ? "#fff" : undefined }}>
                  {user?.userName || "Student"}
                </span>
              )}
            </div>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
};

export default TopNav; 