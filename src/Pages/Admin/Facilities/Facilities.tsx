import {
  useDeleteFacilitiesMutation,
  useGetFacilitiesQuery,
} from "@/redux/features/facilities/facilitiesApi";

import { MdDeleteSweep } from "react-icons/md";

import Lottie from "lottie-react";
import loader from "../../../Lottie/Animation - 1725387315784.json";
import ViewModel from "@/Modal/ViewModel/ViewModel";
import EditModel from "@/Modal/EditModel/EditModel";
import { message } from "antd";
const Facilities = () => {
  const { data: facilities, isLoading } = useGetFacilitiesQuery("");
  const [deleteFacility] = useDeleteFacilitiesMutation();

  const filterFacilitiesData = facilities?.data?.data?.filter(
    (item: { isDeleted: boolean }) => item.isDeleted !== true
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Lottie className="w-[30vh]" animationData={loader} loop={true} />
      </div>
    );
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteFacility(id).unwrap();
      message.success("Facility deleted successfully");
    } catch (error) {
      console.log(error);
      message.error("Failed to delete facility");
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-bold py-2">Manage All Facilities</h2>
        <p className="lg:pr-52 text-[#6b6b6b]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          fugiat reiciendis voluptates perspiciatis ex accusantium in ratione
          illum quisquam nostrum deserunt, eum aut incidunt facere!
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 border-b pb-4 justify-items-center items-center">
        <p>Index</p>
        <p>Image</p>
        <p>Name</p>
        <p>Location</p>
        <p>Price Per Hour</p>
        <p>Action</p>
      </div>

      <div className="mt-2 ">
        {filterFacilitiesData && filterFacilitiesData.length > 0
          ? filterFacilitiesData.map(
              (
                facilite: {
                  [x: string]: string | undefined;
                },
                index: number
              ) => (
                <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 space-y-2 border-b pb-2 justify-items-center items-center text-center">
                  <p>{index + 1}</p>
                  <img className="w-12" src={facilite.img} alt="" />
                  <p>{facilite.name}</p>
                  <p>{facilite.location}</p>
                  <p>${facilite.pricePerHour}</p>
                  <div className="grid lg:grid-cols-3 gap-2">
                    <p>
                      <ViewModel facilite={facilite}></ViewModel>
                    </p>
                    <p>
                      <EditModel facilite={facilite}></EditModel>
                    </p>
                    <p
                      onClick={() => handleDelete(facilite._id)}
                      className="p-2 text-base cursor-pointer rounded hover:bg-[red] hover:text-[#fff] duration-300 border"
                    >
                      <MdDeleteSweep />
                    </p>
                  </div>
                </div>
              )
            )
          : !isLoading && (
              <p className="flex items-center justify-center py-20">
                There are no products
              </p>
            )}
      </div>
    </div>
  );
};

export default Facilities;
