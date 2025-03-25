import AppLayout from "@/modules/core/components/layout/AppLayout";
import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";

const PrivateRoute = () => {
  // const user = useSelector((state: RootState) => state.auth.user);
  const user = true;
  return user ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
