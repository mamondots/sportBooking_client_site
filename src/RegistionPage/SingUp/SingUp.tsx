/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/spartLogo.png";
import { FieldValues, useForm } from "react-hook-form";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
const SingUp = () => {
  const [signupUser] = useSignupMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Account");
    try {
      const result = await signupUser(data).unwrap();
      if (result.error) {
        toast.error(result.error.data.message, { id: toastId, duration: 1000 });
      } else {
        toast.success("Crated Account", { id: toastId, duration: 1000 });
        navigate("/");
      }
    } catch (error) {
      toast.error("something went wrong!", { id: toastId, duration: 1000 });
    }
  };
  return (
    <div className="bg-[#F0F0F1] h-screen">
      <div className="flex justify-center items-center flex-col py-12 bg-[#F0F0F1] ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className=" lg:w-2/4 md:w-2/4 w-full lg:px-0 md:px-0 px-12  py-8">
          <div className=" border-l-4 shadow-sm border-l-[#084C61] bg-[#fff]">
            <p className="px-4 py-3 text-base text-[#525252]">
              Register For This Site
            </p>
          </div>

          <div className="border border-[#084c611a] rounded py-4 mt-4 px-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-[2px]">
                <label htmlFor="" className="text-base text-[#525252]">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="border rounded outline-none px-2 py-2 "
                  type="text"
                  placeholder="Name..."
                />
                {errors.name && (
                  <span className="text-[#ce4646]">name is required</span>
                )}
              </div>

              <div className="flex flex-col gap-[2px]">
                <label htmlFor="" className="text-base text-[#525252]">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="border rounded outline-none px-2 py-2 "
                  type="email"
                  placeholder="Email..."
                />
                {errors.email && (
                  <span className="text-[#ce4646]">email is required</span>
                )}
              </div>

              <div className="flex flex-col gap-[2px]">
                <label htmlFor="" className="text-base text-[#525252]">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className="border rounded outline-none px-2 py-2 "
                  type="password"
                  placeholder="Password..."
                />
                {errors.password && (
                  <span className="text-[#ce4646]">password is required</span>
                )}
              </div>

              <div className="lg:flex md:flex gap-2">
                <div className="flex flex-col gap-[2px] w-full">
                  <label htmlFor="" className="text-base text-[#525252]">
                    Phone
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    className="border rounded outline-none px-2 py-2 w-full"
                    type="text"
                    placeholder="Phone..."
                  />
                  {errors.phone && (
                    <span className="text-[#ce4646]">phone is required</span>
                  )}
                </div>

                <div className="flex flex-col gap-[2px] w-full">
                  <label htmlFor="" className="text-base text-[#525252]">
                    Address
                  </label>
                  <input
                    {...register("address", { required: true })}
                    className="border rounded outline-none px-2 py-2 w-full"
                    type="text"
                    placeholder="Address..."
                  />
                  {errors.address && (
                    <span className="text-[#ce4646]">address is required</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-[2px] py-2">
                <p className="text-base text-[#525252]">
                  Registration confirmation will be emailed to you.
                </p>
              </div>
              <div className="pb-2">
                <input
                  className="px-6 py-2 bg-[#084C61] text-[#fff] rounded hover:bg-[#177E89] duration-300 cursor-pointer"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>

          <div className="py-6">
            <p className="flex items-center gap-2 text-base text-[#525252] cursor-pointer">
              <Link to="/singin">
                <span className="hover:text-[#084C61] duration-300">
                  Log in
                </span>
              </Link>
              <span> | </span>
              <span className="hover:text-[#084C61] duration-300">
                Lost your password?
              </span>
            </p>
            <Link to="/">
              <p className="hover:text-[#084C61] duration-300 py-1 font-semibold flex items-center gap-2 cursor-pointer">
                <span>←</span> <span>Go to Sport</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
