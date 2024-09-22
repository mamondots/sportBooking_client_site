import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import man1 from "../../assets/img/man1.png";
import man2 from "../../assets/img/man2.png";
import man3 from "../../assets/img/man3.png";
import man4 from "../../assets/img/man4.png";

const Team = () => {
  return (
    <div className="xl:px-20 px-12">
      <div className="">
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl text-[#177E89] font-semibold">Our Team</p>
          <h2 className="lg:text-6xl md:text-6xl text-3xl font-semibold text-[#3F3F3F] py-3 lg:leading-[65px]">
            Meet Our Experts
          </h2>
          <p className="text-[#6b6a6a] text-lg lg:px-72 text-center">
            Our Sports Club is a club with a history that goes back to XX
            century. From a cricket club to soccer tournaments
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-8 mt-8 cursor-pointer">
          <div className="group">
            <div className="border rounded overflow-hidden">
              <img
                className="rounded group-hover:scale-110 duration-300 w-full"
                src={man1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center py-4 flex-col">
              <h2 className="text-2xl font-bold">Al Mamon</h2>
              <p className="text-[#6b6a6a] text-lg ">Cricket</p>

              <div className="flex justify-center items-center gap-2 py-2">
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaFacebookF />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaInstagramSquare />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaTwitter />
                </p>

                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="border rounded overflow-hidden">
              <img
                className="rounded group-hover:scale-110 duration-300 w-full"
                src={man2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center py-4 flex-col">
              <h2 className="text-2xl font-bold">Mariah Tah</h2>
              <p className="text-[#6b6a6a] text-lg ">Golfir</p>

              <div className="flex justify-center items-center gap-2 py-2">
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaFacebookF />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaInstagramSquare />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaTwitter />
                </p>

                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="border rounded overflow-hidden">
              <img
                className="rounded group-hover:scale-110 duration-300 w-full"
                src={man3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center py-4 flex-col">
              <h2 className="text-2xl font-bold">Riaz Shikder</h2>
              <p className="text-[#6b6a6a] text-lg ">Footboller</p>

              <div className="flex justify-center items-center gap-2 py-2">
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaFacebookF />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaInstagramSquare />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaTwitter />
                </p>

                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="border rounded overflow-hidden">
              <img
                className="rounded group-hover:scale-110 duration-300 w-full"
                src={man4}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center py-4 flex-col">
              <h2 className="text-2xl font-bold">Fathama Khaton</h2>
              <p className="text-[#6b6a6a] text-lg ">Gollfer</p>

              <div className="flex justify-center items-center gap-2 py-2">
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaFacebookF />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaInstagramSquare />
                </p>
                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
                  <FaTwitter />
                </p>

                <p className="border border-[#084C61] p-1 hover:bg-[#084C61] hover:text-[#fff] cursor-pointer duration-300 text-[#084C61] rounded">
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

export default Team;
