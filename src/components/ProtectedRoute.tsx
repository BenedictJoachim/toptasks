import React from "react";
import { Navigate } from "react-router-dom";
import { AppwriteService } from "../services/AppwwriteServices";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const [user, setUser] = React.useState<any | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AppwriteService.getUser();
        setUser(userData);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <Navigate to="/" replace />;
  if (role && user.role !== role) return <p>Access Denied</p>;

  return <>{children}</>;
};

export default ProtectedRoute;
