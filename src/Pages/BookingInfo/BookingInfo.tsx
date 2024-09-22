/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { DatePicker } from "antd";
import { useGetSingleFacilitiesQuery } from "@/redux/features/facilities/facilitiesApi";
const BookingInfo = () => {
  const { id } = useParams();
  const { data: facilites, isLoading } = useGetSingleFacilitiesQuery(id);

  console.log(facilites);
  // const { name, img, location, pricePerHour } = facility;
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="xl:px-20 px-12 pb-6">
      <div className="bg-[#084C61] bannerBg rounded  py-12 px-12 text-white">
        <div className="z-10 relative">
          <h2 className="text-4xl font-semibold tracking-[2px]">
            Booking Info
          </h2>
          <p className="flex items-center gap-1 py-2 cursor-pointer">
            <Link to="/">
              <span className="hover:text-[#DB3A34] duration-300">Sport</span>
            </Link>
            <span> - </span> <span>Booking Info</span>
          </p>
        </div>
      </div>

      <div className="py-8 w-full lg:flex gap-4">
        <div className="lg:w-3/4 w-full">
          <div className="border rounded">
            <div className="flex items-center justify-around text-sm py-2 mt-4 font-medium text-[#262626c5]">
              <p>Image</p>
              <p>Facility Name</p>
              <p>Location</p>
              <p>Price</p>
            </div>

            <div className="flex items-center justify-around text-sm py-2 font-medium text-[#262626c5]">
              <img
                className="w-[9vh] rounded border p-1"
                src={facilites?.data.img}
                alt=""
              />
              <p>{facilites?.data.name}</p>
              <p> {facilites?.data.location}</p>
              <p>${facilites?.data.pricePerHour}/hr</p>
            </div>

            <div className="px-12 mt-6">
              <h2 className="font-semibold  text-[#262626c5]">
                Check Availability
              </h2>

              <div className="py-2">
                <DatePicker size="large" className="w-full"></DatePicker>
              </div>

              <div className="my-6">
                <h2 className="text-xl font-semibold mb-4">Available Slots</h2>

                <div className="flex items-center flex-wrap  gap-2">
                  <p className="px-4 py-2 bg-[#084C61] text-[#fff] rounded text-sm hover:bg-[#177E89] duration-300 cursor-pointer">
                    00-9.00
                  </p>
                  <p className="px-4 py-2 bg-[#084C61] text-[#fff] rounded text-sm hover:bg-[#177E89] duration-300 cursor-pointer">
                    9.00-12.00
                  </p>
                  <p className="px-4 py-2 bg-[#084C61] text-[#fff] rounded text-sm hover:bg-[#177E89] duration-300 cursor-pointer">
                    12.00-14.00
                  </p>
                  <p className="px-4 py-2 bg-[#084C61] text-[#fff] rounded text-sm hover:bg-[#177E89] duration-300 cursor-pointer">
                    14.00-16.00
                  </p>
                  <p className="px-4 py-2 bg-[#084C61] text-[#fff] rounded text-sm hover:bg-[#177E89] duration-300 cursor-pointer">
                    16.00-18.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/4 w-full border rounded py-6 px-4">
          <h2 className="text-xl font-bold text-[#333] pb-2  border-b">
            CheckOut
          </h2>
          <h1 className="font-medium text-[#636363] py-2 mt-2">
            Facility Name : {facilites?.data.name}
          </h1>
          <p className="text-[#636363]">
            Total Price :
            <span className="text-xl font-bold text-[#262626]">
              {" "}
              ${facilites?.data.pricePerHour}/hr
            </span>
          </p>

          <div className="mt-4 py-2">
            <h2 className="mb-2 font-semibold text-[#333] border-b pb-2">
              Booking Slot
            </h2>

            <div>
              <form>
                <div className="grid lg:grid-cols-2 gap-2">
                  <div>
                    <label
                      className="text-sm font-medium text-[#636363] py-1"
                      htmlFor=""
                    >
                      Start Time
                    </label>
                    <input
                      className="w-full px-4 py-2 border outline-none rounded"
                      type="text"
                      placeholder="Enter Start Time.."
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium text-[#636363] py-1"
                      htmlFor=""
                    >
                      End Time
                    </label>
                    <input
                      className="w-full px-4 py-2 border outline-none rounded"
                      type="text"
                      placeholder="Enter End Time.."
                    />
                  </div>
                </div>

                <div className="py-6">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#084C61] text-[#fff] rounded text-sm hover:bg-[#177E89] duration-300 cursor-pointer"
                  >
                    Pay Process
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
