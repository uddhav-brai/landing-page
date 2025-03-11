// src/routes/ProtectedRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { protectedRoutes } from "./routesConfig";
import { Suspense } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { isAuthenticated } from "../utills/auth"; // Utility to check if user is logged in

const ProtectedRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {protectedRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              isAuthenticated() ? (
                <route.component />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default ProtectedRoutes;
