import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login"></Navigate>;
  }

  return <Outlet></Outlet>;
};

export default ProtectedRoute;
