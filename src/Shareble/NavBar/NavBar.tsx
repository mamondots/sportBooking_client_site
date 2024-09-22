import logo from "../../assets/img/spartLogo.png";
import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/img/userImg.jpg";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  /* <h3 className="hidden">https://softivuslab.com/wp/golftio/</h3> */
  const [isOpen, setIsOpen] = useState(false);

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="xl:px-20 px-12 py-6">
      <div className="computer-device">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="lg:flex hidden items-center justify-center xl:gap-8 gap-4">
            <ul className="flex items-center justify-center space-x-6 text-base font-medium">
              <li>
                <Link to="/">
                  <a
                    href=""
                    className="tracking-[1px] hover:text-[#084C61] duration-300"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a
                    href=""
                    className="tracking-[1px]  hover:text-[#084C61] duration-300"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/facilities">
                  <a
                    href=""
                    className="tracking-[1px]  hover:text-[#084C61] duration-300"
                  >
                    Facility
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href=""
                  className="tracking-[1px]  hover:text-[#084C61] duration-300"
                >
                  Booking
                </a>
              </li>
              <li>
                <Link to="/blog">
                  <a
                    href=""
                    className="tracking-[1px]  hover:text-[#084C61] duration-300"
                  >
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href=""
                    className="tracking-[1px]  hover:text-[#084C61] duration-300"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>

            {user ? (
              <div className="relative group duration-300">
                <div className="cursor-pointer">
                  <img
                    className="w-[35px] h-[35px] rounded-full border border-[#084c6177]"
                    src={userImg}
                    alt=""
                  />
                </div>

                <div className="flex group-hover:top-12 opacity-0 group-hover:opacity-100 duration-300 flex-col gap-2 rounded top-10 right-[-60px] absolute bg-[#084C61] z-50 w-[30vh] p-4">
                  {/* {user?.role === "admin" && (
                    <p>
                      <NavLink to="/admin/dashboard"> Admin Dashboard</NavLink>
                    </p>
                  )}
                  {user?.role === "user" && (
                    <p>
                      <NavLink to="/user/dashboard"> User Dashboard</NavLink>
                    </p>
                  )} */}

                  {user && (
                    <li className="flex">
                      <Link
                        to={
                          user?.role === "admin"
                            ? `/admin/dashboard`
                            : `/user/dashboard`
                        }
                        className="flex items-center -mb-1 border-b-2 border-transparent border-blue-600 text-[17px]"
                      >
                        <p className="flex items-center gap-1 text-[#fff]  cursor-pointer">
                          <span>
                            <MdManageAccounts />
                          </span>{" "}
                          <span>Your Account</span>
                        </p>
                      </Link>
                    </li>
                  )}

                  <p
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-[#fff]  cursor-pointer"
                  >
                    <span>
                      <IoMdLogOut />
                    </span>{" "}
                    <span>Log Out</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center xl:gap-4 gap-2">
                <Link to="/singin">
                  <button className="px-6 py-2 text-lg font-medium tracking-[1px] rounded border border-[#3f3f3f6c] hover:border-transparent hover:bg-[#084C61] hover:text-[#fff] duration-300">
                    Sing In
                  </button>
                </Link>
                <Link to="/singup">
                  <button className="px-6 py-2 text-lg font-medium tracking-[1px] rounded bg-[#084C61] text-[#fff] hover:bg-[#177E89]  duration-300">
                    Sing Up
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="lg:hidden block">
            <p
              onClick={() => setIsOpen(true)}
              className="text-2xl border p-1 hover:bg-[#0E7A31] hover:text-[#fff] duration-300 cursor-pointer"
            >
              <MdMenu />
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mobile-device lg:hidden fixed duration-300 z-50 top-0 left-0 bg-[#a5a6a344] w-full h-screen ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="lg:w-1/3 md:w-2/3 sm:w-2/3 w-full bg-[#fff] h-screen px-12 py-6 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <img src={logo} alt="" />
            <p
              onClick={() => setIsOpen(false)}
              className="text-2xl border p-1 hover:bg-[#0E7A31] hover:text-[#fff] duration-300 cursor-pointer"
            >
              <HiMiniXMark />
            </p>
          </div>

          <div className="">
            <ul className="font-semibold flex flex-col gap-2 cursor-pointer">
              <li className="w-full py-3 bg-[#084c6127] px-4 rounded">
                <a
                  href=""
                  className="tracking-[1px] hover:text-[#0E7A31] duration-300"
                >
                  Home
                </a>
              </li>
              <li className="w-full py-3 bg-[#084c6127] px-4 rounded">
                <a
                  href=""
                  className="tracking-[1px]  hover:text-[#0E7A31] duration-300"
                >
                  About
                </a>
              </li>
              <li className="w-full py-3 bg-[#084c6127] px-4 rounded">
                <a
                  href=""
                  className="tracking-[1px]  hover:text-[#0E7A31] duration-300"
                >
                  Facility
                </a>
              </li>
              <li className="w-full py-3 bg-[#084c6127] px-4 rounded">
                <a
                  href=""
                  className="tracking-[1px]  hover:text-[#0E7A31] duration-300"
                >
                  Booking
                </a>
              </li>
              <li className="w-full py-3 bg-[#084c6127] px-4 rounded">
                <a
                  href=""
                  className="tracking-[1px]  hover:text-[#0E7A31] duration-300"
                >
                  Blogs
                </a>
              </li>
              <li className="w-full py-3 bg-[#084c6127] px-4 rounded">
                <a
                  href=""
                  className="tracking-[1px]  hover:text-[#0E7A31] duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-2 mt-8">
              <button className="px-6 py-2 text-lg font-medium tracking-[1px] rounded border border-[#3f3f3f6c] hover:border-transparent hover:bg-[#0E7A31] hover:text-[#fff] duration-300">
                Sing In
              </button>
              <button className="px-6 py-2 text-lg font-medium tracking-[1px] rounded bg-[#0E7A31] text-[#fff] hover:bg-[#414141]  duration-300">
                Sing Up
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <a className="p-2 border border-[#CEEED9] text-[#0E7A31] cursor-pointer text-lg hover:bg-[#0E7A31] hover:text-[#fff] duration-300">
              <FaLinkedinIn />
            </a>
            <a className="p-2 border border-[#CEEED9] text-[#0E7A31] cursor-pointer text-lg hover:bg-[#0E7A31] hover:text-[#fff] duration-300">
              <FaTwitter />
            </a>
            <a className="p-2 border border-[#CEEED9] text-[#0E7A31] cursor-pointer text-lg hover:bg-[#0E7A31] hover:text-[#fff] duration-300">
              <FaGithub />
            </a>
            <a className="p-2 border border-[#CEEED9] text-[#0E7A31] cursor-pointer text-lg hover:bg-[#0E7A31] hover:text-[#fff] duration-300">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
