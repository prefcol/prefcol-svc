import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

/**
 * Signs the user out and redirects to home.
 * Used for /teacher-admin/logout route.
 */
export default function LogoutPage() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/" replace />;
}
