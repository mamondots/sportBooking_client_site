/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="xl:px-20 px-12">
      <div className="flex justify-center items-center py-12 flex-col">
        <p className="text-lg font-normal text-[#084C61] capitalize">Blogs</p>
        <h2 className="text-3xl font-bold">Our Recent Blogs</h2>
      </div>

      <div className="pb-12">
        <div>
          {
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {blogs.map((blog, index): any => (
                <div key={index} className="">
                  <div className="group cursor-pointer overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        className="rounded group-hover:scale-110 duration-300"
                        src={blog.image}
                        alt=""
                      />
                    </div>
                    <div className="flex items-center flex-wrap lg:gap-4 md:gap-2 gap-2 py-2 mt-2 text-[#3F3F3F]">
                      <p className="flex items-center space-x-2  font-medium capitalize">
                        <span>
                          <FiUser />
                        </span>
                        <span>{blog.role}</span>
                      </p>
                      <p className="flex items-center space-x-2  font-medium capitalize">
                        <span>
                          <MdOutlineDateRange />
                        </span>
                        <span>{blog.date}</span>
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-medium hover:text-[#177E89] cursor-pointer duration-300">
                        {blog.title}...
                      </h2>

                      <div className="mt-4">
                        <button className=" text-[#262626] font-semibold rounded tracking-[2px] cursor-pointer hover:text-[#177E89] duration-300">
                          Read More...
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>

        <div className="flex items-center justify-center py-6 mt-6">
          <button className="px-12 py-4 hover:bg-[#177E89] cursor-pointer duration-300 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[1px]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
