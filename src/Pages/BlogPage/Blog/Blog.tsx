import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard/BlogCard";
import { CiSearch } from "react-icons/ci";
import blog1 from "../../../assets/img/blog1.jpg";
import blog2 from "../../../assets/img/blog2.jpg";
import blog3 from "../../../assets/img/blog3.jpg";
import blog4 from "../../../assets/img/blog4.jpg";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div>
      <div className="xl:px-20 px-12">
        <div className="bg-[#084C61] bannerBg rounded  py-12 px-12 text-white">
          <div className="z-10 relative">
            <h2 className="text-4xl font-semibold tracking-[2px]">Blog</h2>
            <p className="flex items-center gap-1 py-2 cursor-pointer">
              <Link to="/">
                <span className="hover:text-[#DB3A34] duration-300">Sport</span>
              </Link>
              <span> - </span> <span>Blog</span>
            </p>
          </div>
        </div>

        <div className="py-12">
          <div className="lg:flex gap-12">
            <div className="lg:w-3/4 w-full grid gap-8">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog}></BlogCard>
              ))}
            </div>

            <div className="lg:w-2/4 w-full">
              <h2 className="text-xl font-medium">Search..</h2>
              <div>
                <form className="mt-2">
                  <div className="flex items-center justify-between relative">
                    <input
                      className="w-full border px-4 py-2 outline-none"
                      type="text"
                      placeholder="Serach here...."
                    />
                    <p className="absolute right-2 rounded font-bold hover:bg-[#177E89] cursor-pointer duration-300 p-2 bg-[#084C61] text-lg text-[#fff]">
                      <CiSearch />
                    </p>
                  </div>
                </form>
              </div>
              <h2 className="py-8 mt-4 text-2xl font-semibold">
                Recent Blog Posts
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="w-[22vh]">
                    <img className="rounded" src={blog1} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold py-2">
                      Play Golftio golf club,
                    </h2>
                    <p className="font-semibold text-[#747373] text-lg">
                      July 01, 2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-[22vh]">
                    <img className="rounded" src={blog2} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold py-2">
                      Discount Golf Clubs &
                    </h2>
                    <p className="font-semibold text-[#747373] text-lg">
                      July 01, 2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-[22vh]">
                    <img className="rounded" src={blog3} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold py-2">
                      Shop Golf Clubs Today
                    </h2>
                    <p className="font-semibold text-[#747373] text-lg">
                      July 01, 2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-[22vh]">
                    <img className="rounded" src={blog4} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold py-2">
                      The 10 most bizarre
                    </h2>
                    <p className="font-semibold text-[#747373] text-lg">
                      July 01, 2024
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="py-8 mt-4 text-2xl font-semibold lg:text-left text-center">
                Popular Tags
              </h2>

              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 capitalize text-center">
                <p className="border py-2 font-semibold hover:bg-[#084C61] duration-300 cursor-pointer hover:text-[#fff]">
                  facility
                </p>
                <p className="border py-2 font-semibold hover:bg-[#084C61] duration-300 cursor-pointer hover:text-[#fff]">
                  gallery
                </p>
                <p className="border py-2 font-semibold hover:bg-[#084C61] duration-300 cursor-pointer hover:text-[#fff]">
                  golf
                </p>
                <p className="border py-2 font-semibold hover:bg-[#084C61] duration-300 cursor-pointer hover:text-[#fff]">
                  shop
                </p>
                <p className="border py-2 font-semibold hover:bg-[#084C61] duration-300 cursor-pointer hover:text-[#fff]">
                  Training
                </p>
              </div>

              <h2 className="py-4 mt-8 text-2xl font-semibold lg:text-left text-center">
                Follow Our Journey
              </h2>

              <div className="flex  items-center lg:justify-start justify-center gap-2 py-2">
                <p className="border border-[#084C61] p-2 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaFacebookF />
                </p>
                <p className="border border-[#084C61] p-2 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaInstagramSquare />
                </p>
                <p className="border border-[#084C61] p-2 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaTwitter />
                </p>

                <p className="border border-[#084C61] p-2 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
