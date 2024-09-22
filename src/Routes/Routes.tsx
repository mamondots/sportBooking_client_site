import MainLayout from "@/Layout/MainLayout";
import Sidebar from "@/Layout/Sidebar";
import AboutPage from "@/Pages/AboutPage/AboutPage";
import AllFacilitiesPage from "@/Pages/AllFacilitiesPage/AllFacilitiesPage";
import Blog from "@/Pages/BlogPage/Blog/Blog";
import BookingInfo from "@/Pages/BookingInfo/BookingInfo";
import ContactPage from "@/Pages/ContactPage/ContactPage";
import FacilitiesDetails from "@/Pages/FacilitiesPage/Facilities/FacilitiesDetails";
import HomePage from "@/Pages/HomePage/HomePage";
import SingIn from "@/RegistionPage/SingIn/SingIn";
import SingUp from "@/RegistionPage/SingUp/SingUp";
import { createBrowserRouter } from "react-router-dom";
import { userPaths } from "./User.Routes";
import { adminPaths } from "./Admin.Routes";
import { routeGenerator } from "@/utils/routesGenerator";
import ProtectedRoute from "@/Layout/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/facilities",
        element: <AllFacilitiesPage></AllFacilitiesPage>,
      },
      {
        path: "/facilitie/:id",
        element: <FacilitiesDetails></FacilitiesDetails>,
      },
      {
        path: "/bookingInfo/:id",
        element: <BookingInfo></BookingInfo>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
  {
    path: "/singin",
    element: <SingIn></SingIn>,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Sidebar></Sidebar>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <Sidebar></Sidebar>
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
]);
