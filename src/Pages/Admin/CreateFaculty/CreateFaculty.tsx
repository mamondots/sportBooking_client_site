import { useAddFacilityMutation } from "@/redux/features/facilities/facilitiesApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface ApiError {
  data: {
    message: string;
  };
}

const CreateFaculty = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addFacility] = useAddFacilityMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Facility Creating...");
    const dataInfo = {
      ...data,
      pricePerHour: parseFloat(data?.pricePerHour) || 0,
    };
    console.log(dataInfo);

    try {
      const result = await addFacility(dataInfo).unwrap();
      if (result.success) {
        toast.success("Facility Created", { id: toastId, duration: 1000 });
      }
    } catch (error) {
      console.log(error);
      const apiError = error as ApiError;
      toast.error(apiError?.data?.message || "An error occurred", {
        id: toastId,
        duration: 1000,
      });
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold py-2">Create Facilities</h2>
        <p className="lg:pr-52 text-[#6b6b6b]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          fugiat reiciendis voluptates perspiciatis ex accusantium in ratione
          illum quisquam nostrum deserunt, eum aut incidunt facere!
        </p>
      </div>

      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium" htmlFor="">
                  Facility Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="px-4 py-2 outline-none border w-full rounded"
                  type="text"
                  placeholder="Enter Facility Name..."
                />
                {errors.name && (
                  <span className="text-[#ce4646]">This field is required</span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium" htmlFor="">
                  Price Per Hour
                </label>
                <input
                  {...register("pricePerHour", { required: true })}
                  className="px-4 py-2 outline-none border w-full rounded"
                  type="text"
                  placeholder="Enter Facility Price..."
                />
                {errors.pricePerHour && (
                  <span className="text-[#ce4646]">This field is required</span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium" htmlFor="">
                  location
                </label>
                <input
                  {...register("location", { required: true })}
                  className="px-4 py-2 outline-none border w-full rounded"
                  type="text"
                  placeholder="Enter location..."
                />
                {errors.location && (
                  <span className="text-[#ce4646]">This field is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium" htmlFor="">
                Image
              </label>
              <input
                {...register("img", { required: true })}
                className="px-4 py-4 outline-none border w-full rounded"
                type="text"
                placeholder="Enter Image Link..."
              />
              {errors.img && (
                <span className="text-[#ce4646]">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium" htmlFor="">
                Facility Description
              </label>
              <textarea
                {...register("description", { required: true })}
                className="px-4 py-4 outline-none border w-full rounded"
                rows="5"
                placeholder="Enter Facility Description..."
              ></textarea>
              {errors.description && (
                <span className="text-[#ce4646]">This field is required</span>
              )}
            </div>

            <div>
              <input
                className="px-6 py-3 rounded bg-[#001529] text-[#fff] hover:bg-[#084C61] cursor-pointer duration-300"
                type="submit"
                value="Create Faculity"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFaculty;
