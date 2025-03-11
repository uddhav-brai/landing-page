// src/routes/routesConfig.ts
import { lazy } from "react";

const LogIn = lazy(() => import("../pages/Auth/LogIn"));

const Home = lazy(() => import("../pages/public/LandingPage"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));

const Dashboard = lazy(() => import("../pages/public/LandingPage"));

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LogIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export const protectedRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
