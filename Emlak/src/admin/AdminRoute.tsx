import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type AdminRouteProps = {
  isAuth: boolean;
  children: JSX.Element;
};

const AdminRoute: React.FC<AdminRouteProps> = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default AdminRoute;
