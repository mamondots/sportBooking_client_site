/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Modal } from "antd";
import { BiCalendarEdit } from "react-icons/bi";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUpdateFacilitiesMutation } from "@/redux/features/facilities/facilitiesApi";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
interface ApiError {
  data: {
    message: string;
  };
}
const EditModel = ({ facilite }: { facilite: any }) => {
  const { register, handleSubmit } = useForm();
  console.log(facilite);
  const [updatedFacility] = useUpdateFacilitiesMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Facility updating...");
    const dataInfo = {
      ...data,
      pricePerHour: parseFloat(data?.pricePerHour) || 0,
    };
    try {
      const result = await updatedFacility({
        id: facilite._id,
        updatedFacility: dataInfo,
      }).unwrap();
      if (result.success) {
        toast.success("Facility updated", { id: toastId, duration: 1000 });
      }
    } catch (error) {
      console.log(error);
      const apiError = error as ApiError;
      toast.error(apiError?.data?.message || "An error occurred", {
        id: toastId,
        duration: 1000,
      });
    }
    console.log(dataInfo);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        className="p-2 text-base cursor-pointer rounded hover:bg-[#1677FF] hover:text-[#fff] duration-300 border"
        onClick={showModal}
      >
        <BiCalendarEdit />
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div>
          <div>
            <h2 className="text-xl font-bold py-2">Update Facilities</h2>
            <p className=" text-[#6b6b6b]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus.
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center flex-wrap  gap-2 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-medium" htmlFor="">
                      Facility Name
                    </label>
                    <input
                      defaultValue={facilite.name}
                      {...register("name")}
                      className="px-4 py-2 outline-none border w-full rounded"
                      type="text"
                      placeholder="Enter Facility Name..."
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-medium" htmlFor="">
                      Price Per Hour
                    </label>
                    <input
                      defaultValue={facilite.pricePerHour}
                      {...register("pricePerHour")}
                      className="px-4 py-2 outline-none border w-full rounded"
                      type="text"
                      placeholder="Enter Facility Price..."
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-medium" htmlFor="">
                      location
                    </label>
                    <input
                      defaultValue={facilite.location}
                      {...register("location")}
                      className="px-4 py-2 outline-none border w-full rounded"
                      type="text"
                      placeholder="Enter location..."
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm font-medium" htmlFor="">
                    Image
                  </label>
                  <input
                    defaultValue={facilite.img}
                    {...register("img")}
                    className="px-4 py-4 outline-none border w-full rounded"
                    type="text"
                    placeholder="Enter Image Link..."
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm font-medium" htmlFor="">
                    Facility Description
                  </label>
                  <textarea
                    defaultValue={facilite.description}
                    {...register("description")}
                    className="px-4 py-4 outline-none border w-full rounded"
                    rows="5"
                    placeholder="Enter Facility Description..."
                  ></textarea>
                </div>

                <div>
                  <input
                    onClick={handleCancel}
                    className="px-6 py-3 rounded bg-[#001529] text-[#fff] hover:bg-[#084C61] cursor-pointer duration-300"
                    type="submit"
                    value="Create Faculity"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditModel;
