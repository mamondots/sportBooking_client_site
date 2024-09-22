import { FaApple, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import logo from "../../assets/img/footerlogo.png";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-2 bg-[#084C61] text-white xl:px-16 px-12 py-6">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:col-span-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-12 mx-auto py-8">
        <div>
          <img className="w-40" src={logo} alt="" />
          <div className="mt-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry...
            </p>
          </div>

          <div className="flex  items-center gap-2 py-6">
            <p className="border border-[#fff] p-2 hover:bg-[#fff] hover:text-[#084C61] cursor-pointer duration-300 text-[#fff] text-sm rounded">
              <FaFacebookF />
            </p>
            <p className="border border-[#fff] p-2 hover:bg-[#fff] hover:text-[#084C61] cursor-pointer duration-300 text-[#fff] text-sm rounded">
              <FaInstagramSquare />
            </p>
            <p className="border border-[#fff] p-2 hover:bg-[#fff] hover:text-[#084C61] cursor-pointer duration-300 text-[#fff] text-sm rounded">
              <FaTwitter />
            </p>

            <p className="border border-[#fff] p-2 hover:bg-[#fff] hover:text-[#084C61] cursor-pointer duration-300 text-[#fff] text-sm rounded">
              <FaLinkedinIn />
            </p>
          </div>
        </div>
        <div className="lg:ml-8">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-4 text-[#ccc] space-y-2">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Facilites</a>
            </li>
            <li>
              <a href="#">Prizing</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Support</h2>
          <ul className="mt-4 text-[#ccc] space-y-2">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Our Locations</h2>
          <ul className="mt-4 text-[#ccc] space-y-2">
            <li>
              <a href="#">Bangladesh</a>
            </li>
            <li>
              <a href="#">Japan</a>
            </li>
            <li>
              <a href="#">India</a>
            </li>
            <li>
              <a href="#">Enlind</a>
            </li>
            <li>
              <a href="#">Austiral</a>
            </li>
            <li>
              <a href="#">China</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Download</h2>
          <div className="my-4">
            <button className="bg-[#fff] text-[#262626] px-4 py-2 rounded">
              <div className="flex items-center gap-2">
                <FaApple className="text-2xl" />
                <div>
                  <small>Download on the</small>
                  <p>App Store</p>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className="bg-[#fff] text-[#262626] px-4 py-2 rounded">
              <div className="flex items-center gap-2">
                <IoLogoGooglePlaystore className="text-2xl" />
                <div>
                  <small>Download on the</small>
                  <p>App Store</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-8 border-[#ffffff0c] border-t">
        <p className="text-[#c4c3c3]">
          © 2024ports - All rights reserved almamon757@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
