import Lottie from "lottie-react";
import join from "../../../src/Lottie/Animation - 1724872447423.json";
import select from "../../../src/Lottie/Animation - 1724872514558.json";
import Booking from "../../../src/Lottie/Animation - 1724872810555.json";

const HowWorks = () => {
  return (
    <div className="xl:px-20 px-12 py-6">
      <div className="flex justify-center items-center py-12 flex-col">
        <p className="text-lg font-normal text-[#084C61] capitalize">guide</p>
        <h2 className="text-3xl font-bold">How It Works</h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pb-8">
        <div className="border flex items-center justify-center flex-col text-center px-10 cursor-pointer rounded group">
          <div className="w-40 py-4">
            <Lottie animationData={join} loop={true} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Join Us</h2>
            <p className="py-4 text-[#535353]">
              Quick and Easy Registration: Get started on our software platform
              with a simple account creation process.
            </p>

            <button className="px-6 rounded py-3 bg-[#084C61] group-hover:bg-[#177E89] duration-300 text-[#fff] cursor-pointer text-sm tracking-[1px] mb-4">
              Registration Now
            </button>
          </div>
        </div>

        <div className="border flex items-center justify-center flex-col text-center px-10 cursor-pointer rounded group">
          <div className="w-40 py-4">
            <Lottie animationData={select} loop={true} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Go To Facilities</h2>
            <p className="py-4 text-[#535353]">
              Quick and Easy Registration: Get started on our software platform
              with a simple account creation process.
            </p>

            <button className="px-6 rounded py-3 bg-[#084C61] group-hover:bg-[#177E89] duration-300 text-[#fff] cursor-pointer text-sm tracking-[1px] mb-4">
              Registration Now
            </button>
          </div>
        </div>

        <div className="border flex items-center justify-center flex-col text-center px-10 cursor-pointer rounded group">
          <div className="w-40 py-4">
            <Lottie animationData={Booking} loop={true} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Booking Process</h2>
            <p className="py-4 text-[#535353]">
              Quick and Easy Registration: Get started on our software platform
              with a simple account creation process.
            </p>

            <button className="px-6 rounded py-3 bg-[#084C61] group-hover:bg-[#177E89] duration-300 text-[#fff] cursor-pointer text-sm tracking-[1px] mb-4">
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
