// src/routes/index.tsx
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* Protected Routes */}
      <Route path="/dashboard/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
