import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "@/routes/public-route";
import PrivateRoute from "@/routes/private-route";
import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("@/modules/auth/sign-in"));
const SignUp = lazy(() => import("@/modules/auth/sign-up"));
const Dashboard = lazy(() => import("@/modules/dashboard"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
