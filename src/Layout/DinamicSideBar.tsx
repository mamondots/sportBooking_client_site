import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import logo from "../assets/img/footerlogo.png";
import { adminPaths } from "@/Routes/Admin.Routes";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { Menu } from "antd";
import { userPaths } from "@/Routes/User.Routes";
import { useAppSelector } from "@/redux/app/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DinamicSideBar = () => {
  const loginUser = useAppSelector(selectCurrentUser);

  const role = loginUser?.role;

  console.log(role);
  // const role = "admin";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="flex items-center justify-center py-4">
        <Link to="/">
          <img className="w-[120px]" src={logo} alt="" />
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default DinamicSideBar;
