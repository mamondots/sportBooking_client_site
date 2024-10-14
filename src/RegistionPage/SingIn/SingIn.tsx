import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/spartLogo.png";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/app/hooks";
import { toast } from "sonner";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { ApiError } from "@/type/global";

const SingIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Login In...");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      if (res.success) {
        const loginUser = verifyToken(res.token) as TUser;
        dispatch(
          setUser({
            user: loginUser,
            token: res.token,
          })
        );
        toast.success("Login Success", { id: toastId, duration: 1000 });
        navigate("/");
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
    <div className="bg-[#F0F0F1] h-screen">
      <div className="flex justify-center items-center flex-col py-12 bg-[#F0F0F1] ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className=" lg:w-2/4 md:w-2/4 w-full lg:px-0 md:px-0 px-12  py-8">
          <div className=" border-l-4 shadow-sm border-l-[#084C61] bg-[#fff]">
            <p className="px-4 py-3 text-base text-[#525252]">
              Welcome Back to Sport
            </p>
          </div>

          <div className="border border-[#084c611a] rounded py-4 mt-4 px-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
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
                  <span className="text-[#ce4646]">This field is required</span>
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
                  <span className="text-[#ce4646]">This field is required</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  className="px-6 py-2 bg-[#084C61] text-[#fff] rounded hover:bg-[#177E89] duration-300 cursor-pointer"
                  type="submit"
                  value="Sing In"
                />
              </div>
            </form>
          </div>

          <div className="py-6">
            <p className="flex items-center gap-2 text-base text-[#525252] cursor-pointer">
              <Link to="/singup">
                <span className="hover:text-[#084C61] duration-300">
                  Sing Up
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

export default SingIn;
