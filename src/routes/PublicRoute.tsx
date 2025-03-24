import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";

const PublicRoute = () => {
  // const user = useSelector((state: RootState) => state.auth.user);
  const user = null;
  return user ? <Navigate to="/products" /> : <Outlet />;
};

export default PublicRoute;
