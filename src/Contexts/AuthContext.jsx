

// src/Contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},      // ✅ Simple login (for post-OTP)
  logout: () => {},
  showForm: false,
  setShowForm: () => {},
  redirect: null,
  setRedirect: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
  try {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Failed to parse stored user", error);
    return null;
  }
});

  const [showForm, setShowForm] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.removeItem("user");
  }
}, [user]);

  // ✅ SIMPLE LOGIN (called after OTP success in AuthSystem)
  const login = (userData) => {
    setUser(userData);
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
    // localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        showForm,
        setShowForm,
        redirect,
        setRedirect,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};