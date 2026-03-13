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

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          maxWidth: "600px",
          margin: "2rem auto",
        }}>
          <h1 style={{ color: "#c53030", marginBottom: "1rem" }}>Something went wrong</h1>
          <p style={{ color: "#4a5568", marginBottom: "1rem" }}>
            The app failed to load. Check the browser console (F12 → Console) for details.
          </p>
          <pre style={{
            background: "#f7fafc",
            padding: "1rem",
            borderRadius: "8px",
            overflow: "auto",
            fontSize: "12px",
          }}>
            {this.state.error?.message || String(this.state.error)}
          </pre>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              background: "#319795",
              color: "white",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <HelmetProvider>
      <AuthProvider>
        <React.StrictMode>
          <CourseProvider>
            <App />
          </CourseProvider>
        </React.StrictMode>
      </AuthProvider>
    </HelmetProvider>
  </ErrorBoundary>
);
