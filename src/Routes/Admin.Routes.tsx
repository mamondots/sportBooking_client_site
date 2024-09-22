import AdminDashboard from "@/Pages/Admin/AdminDashboard/AdminDashboard";
import Booking from "@/Pages/Admin/Booking/Booking";
import CreateFaculty from "@/Pages/Admin/CreateFaculty/CreateFaculty";
import Facilities from "@/Pages/Admin/Facilities/Facilities";
import AllUser from "@/Pages/Admin/User/AllUser/AllUser";
import CreateAdmin from "@/Pages/Admin/User/CreateAdmin/CreateAdmin";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Manage Facilities",
    children: [
      {
        name: "Create Facilities",
        path: "CreateFaculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Facilities",
        path: "faculties",
        element: <Facilities></Facilities>,
      },
    ],
  },

  {
    name: "User",
    children: [
      {
        name: "Create Admin",
        path: "CreateAdmin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "All User",
        path: "user",
        element: <AllUser></AllUser>,
      },
    ],
  },

  {
    name: "Booking",
    path: "booking",
    element: <Booking></Booking>,
  },
];
