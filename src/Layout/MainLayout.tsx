import Footer from "@/Shareble/Footer/Footer";
import Navbar from "@/Shareble/NavBar/NavBar";
import ScrollToTop from "@/utils/ScrollToTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
