// "use client"

// import { Navigate, useLocation } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
// import { Spin } from "antd"

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth()
//   const location = useLocation()

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <Spin size="large" tip="Loading..." />
//       </div>
//     )
//   }

//   if (!user) {
//     // Redirect to login page with return URL
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />
//   }

//   return children
// }

// export default PrivateRoute

// "use client"
// import { Navigate, useLocation } from "react-router-dom"
// import { Spin } from "antd"
// import { useAuth } from "../contexts/AuthContext"

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth()
//   const location = useLocation()

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <Spin size="large" tip="Loading..." />
//       </div>
//     )
//   }

//   // Since we're auto-initializing the user, this should rarely happen
//   if (!user) {
//     return <Navigate to="/Student-portal/dashboard" replace />
//   }

//   return children
// }

// export default PrivateRoute

"use client"
import { useAuth } from "../../Contexts/AuthContext"

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth()

  // Since we're removing login functionality, we'll always consider the user as authenticated
  // This component now just passes through to the children
  return children
}

export default PrivateRoute

