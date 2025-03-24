import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "@/routes/PublicRoute";
import PrivateRoute from "@/routes/PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<div>Login</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/signup" element={<div>Signup</div>} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<div>Private Route</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
