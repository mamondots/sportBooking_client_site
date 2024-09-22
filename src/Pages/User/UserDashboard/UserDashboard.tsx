import Lottie from "lottie-react";
import animated from "../../../Lottie/WWv9hSHDXe.json";
import animated2 from "../../../Lottie/fTLXnGrepd.json";
import animated3 from "../../../Lottie/byYgZ73ntu.json";
import animated4 from "../../../Lottie/3taRwUhNQl.json";
import { useAppSelector } from "@/redux/app/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const UserDashboard = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap  gap-6">
        <div className="lg:w-3/5 border p-6 flex items-center justify-center gap-6">
          <div>
            <h2 className="text-xl font-medium">Welcome to your dashboard</h2>
            <p className="py-2 text-[#575757]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsum nihil excepturi. Totam porro, doloribus nobis pariatur
              blanditiis laborum quam deserunt, molestias aut tempore esse
              quibusdam repudiandae, tempora labore nihil?
            </p>
          </div>
          <Lottie animationData={animated} loop={true} />
        </div>

        <div className="border lg:w-2/5 px-8">
          <p className=" py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            totam aspernatur minus! Laborum quia cum, ad corporis, facere rerum
            quaerat veniam saepe.
          </p>
          <h2 className="text-lg font-bold">{user?.email}</h2>
          <p className="font-medium">{user?.role}</p>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <div className="flex border shadow items-center justify-center gap-4">
          <div>
            <p className="font-bold text-xl">My Bookings</p>
            <p>15%</p>
          </div>
          <div className="w-40">
            <Lottie animationData={animated2} loop={true} />
          </div>
        </div>

        <div className="flex border shadow items-center justify-center gap-4">
          <div>
            <p className="font-bold text-base">Confirom Booking</p>
            <p>10%</p>
          </div>
          <div className="w-40">
            <Lottie animationData={animated3} loop={true} />
          </div>
        </div>

        <div className="flex border shadow items-center justify-center gap-4">
          <div>
            <p className="font-bold text-base">Pending Bookings</p>
            <p>5%</p>
          </div>
          <div className="w-40">
            <Lottie animationData={animated4} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
