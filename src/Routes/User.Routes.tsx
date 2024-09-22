import MyBooking from "@/Pages/User/MyBooking/MyBooking";
import UserDashboard from "@/Pages/User/UserDashboard/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },

  {
    name: "MyBooking",
    path: "MyBooking",
    element: <MyBooking></MyBooking>,
  },
];
