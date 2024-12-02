import { Navigate, Outlet } from "react-router-dom";
// import Layout from "../layout/Layout";

const ProtectedRoutes = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
