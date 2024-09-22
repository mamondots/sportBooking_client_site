import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { role, date, comment, title, image, description } = blog;
  return (
    <div>
      <div>
        <img className="rounded" src={image} alt="" />
      </div>
      <div className="flex items-center flex-wrap lg:gap-4 md:gap-2 gap-2 py-4 mt-2 text-[#3F3F3F]">
        <p className="flex items-center space-x-2 text-lg font-medium capitalize">
          <span>
            <FiUser />
          </span>
          <span>{role}</span>
        </p>
        <p className="flex items-center space-x-2 text-lg font-medium capitalize">
          <span>
            <MdOutlineDateRange />
          </span>
          <span>{date}</span>
        </p>
        <p className="flex items-center space-x-2 text-lg font-medium capitalize">
          <span>
            <FaRegComment />
          </span>
          <span>{comment} No Comment</span>
        </p>
      </div>

      <div>
        <h2 className="lg:text-3xl text-2xl font-medium hover:text-[#177E89] cursor-pointer duration-300">
          {title}...
        </h2>
        <p className=" text-[#3F3F3F] py-2 text-lg mt-2">{description}</p>

        <div className="mt-4">
          <button className="px-6 py-3 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[2px] cursor-pointer hover:bg-[#177E89] duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
