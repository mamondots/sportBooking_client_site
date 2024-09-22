import { FaGolfBall } from "react-icons/fa";
import { SiTrainerroad } from "react-icons/si";
import { IoIosFitness } from "react-icons/io";
import { FaPersonSwimming } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillAudio } from "react-icons/ai";

import { GiBurningRoundShot } from "react-icons/gi";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="xl:px-20 px-12">
      <div className="bg-[#084C61] bannerBg relative z-10 rounded text-center py-24 text-[#fff]">
        <h2 className="lg:text-4xl relative z-10 md:text-2xl text-xl font-semibold py-1">
          Search For Sports &
        </h2>
        <h2 className="lg:text-4xl relative z-10 md:text-2xl text-xl font-bold px-4">
          Find Verified Facility Near You
        </h2>
        <p className="py-2 relative z-10 lg:px-0 md:px-0 sm:px-0 px-8">
          We Have 400 Thousand Facility on Booking
        </p>
        <button className="bg-[#DB3A34] relative z-10 hover:bg-[#177E89] cursor-pointer duration-300 text-[#fff] text-lg rounded font-semibold px-8 py-3 mt-4">
          Book Now
        </button>
      </div>

      <div className="py-4">
        <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 gap-2">
          <div className="bg-[#fff] group hover:bg-[#DB3A34] rounded hover:border-transparent hover:text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl group-hover:text-[#fff] duration-300 py-2 text-[#084C61]">
              <FaGolfBall />
            </p>
            <h2 className="font-semibold">Golf Course</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>

          <div className="bg-[#fff] group hover:bg-[#DB3A34] rounded hover:border-transparent hover:text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl group-hover:text-[#fff] duration-300 py-2 text-[#084C61]">
              <SiTrainerroad />
            </p>
            <h2 className="font-semibold">Expert Trainer</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>

          <div className="bg-[#fff] group hover:bg-[#DB3A34] rounded hover:border-transparent hover:text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl group-hover:text-[#fff] duration-300 py-2 text-[#084C61]">
              <IoIosFitness />
            </p>
            <h2 className="font-semibold">Fitnes Center</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>

          <div className="bg-[#fff] group hover:bg-[#DB3A34] rounded hover:border-transparent hover:text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl group-hover:text-[#fff] duration-300 py-2 text-[#084C61]">
              <FaPersonSwimming />
            </p>
            <h2 className="font-semibold">Swimming</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>

          <div className="bg-[#fff] group hover:bg-[#DB3A34] rounded hover:border-transparent hover:text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl group-hover:text-[#fff] duration-300 py-2 text-[#084C61]">
              <MdRestaurantMenu />
            </p>
            <h2 className="font-semibold">Restaurant</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>

          <div className="bg-[#fff] group hover:bg-[#DB3A34] rounded hover:border-transparent hover:text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl group-hover:text-[#fff] duration-300 py-2 text-[#084C61]">
              <AiFillAudio />
            </p>
            <h2 className="font-semibold">Locker Room</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>

          <div className="bg-[#DB3A34] rounded  text-[#fff] duration-300 cursor-pointer px-6 py-2 border border-[#084c612d]">
            <p className="text-2xl text-[#fff] duration-300 py-2">
              <GiBurningRoundShot />
            </p>
            <h2 className="font-semibold">Best Ground</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
