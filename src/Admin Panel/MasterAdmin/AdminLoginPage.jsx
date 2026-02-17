import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

export const ADMIN_EMAIL = "prefcoledutech@gmail.com";

/** True if the logged-in user is the admin (master admin panel). */
export function isAdminUser(user) {
  if (!user) return false;
  const email = (user.mailId || user.email || "").trim().toLowerCase();
  return email === ADMIN_EMAIL;
}

/**
 * Protects master-admin routes: only allow access if the user is signed in
 * with the admin email (via main Sign in). Otherwise redirect to home.
 */
export function AdminGuard({ children }) {
  const { user } = useAuth();
  if (!isAdminUser(user)) return <Navigate to="/" replace />;
  return children;
}
