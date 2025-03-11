// src/routes/PublicRoutes.tsx
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routesConfig";
import { Suspense } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner"; // Add a loading spinner for lazy loading

const PublicRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default PublicRoutes;
