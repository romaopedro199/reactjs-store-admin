import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "@/routes/PublicRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("@/modules/auth/SignIn"));
const SignUp = lazy(() => import("@/modules/auth/SignUp"));
const Products = lazy(() => import("@/modules/products/Products"));

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
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
