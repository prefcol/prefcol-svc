// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { HelmetProvider } from "react-helmet-async";
// import { AuthProvider } from "./Contexts/AuthContext.jsx";
// import 'antd/dist/reset.css'; // Ensures proper styling
// import { CourseProvider } from "./Contexts/CourseContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <HelmetProvider>
//     <AuthProvider>
//     <React.StrictMode>
//       <CourseProvider>
//       <App />
//       </CourseProvider>
//     </React.StrictMode>
//     </AuthProvider>
//   </HelmetProvider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import "antd/dist/reset.css"; // Ensures proper styling
import { CourseProvider } from "./Contexts/CourseContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <AuthProvider>
      <React.StrictMode>
        <CourseProvider>
          <App />
        </CourseProvider>
      </React.StrictMode>
    </AuthProvider>
  </HelmetProvider>
);
