import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TFicilites = {
  img: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  facilite: any;
};

const FacilitiesCard = ({ facilite }: TFicilites) => {
  const { img, name, description, pricePerHour, _id } = facilite;
  return (
    <div className="border p-2 rounded group cursor-pointer">
      <div className="mt-2 overflow-hidden">
        <img
          className="rounded group-hover:scale-110 duration-300"
          src={img}
          alt=""
        />
      </div>
      <div className="py-2">
        <div className="">
          <h2 className="font-semibold py-2">{name}</h2>
          <p className="text-lg font-semibold text-[#084C61]">
            ${pricePerHour}
          </p>
        </div>
        <p className="text-[#585858] py-1">{description.slice(0, 60)}...</p>
      </div>

      <div className="py-2">
        <Link to={`/facilitie/${_id}`}>
          <button className="px-4 py-3 group-hover:bg-[#177E89] duration-300 bg-[#084C61] text-[#fff] rounded tracking-[1px] text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FacilitiesCard;
