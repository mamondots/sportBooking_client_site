import { Link, useParams } from "react-router-dom";
// import details from "../../../assets/img/details.jpg";
import { MdDateRange } from "react-icons/md";
import { useGetSingleFacilitiesQuery } from "@/redux/features/facilities/facilitiesApi";

const FacilitiesDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleFacilitiesQuery(id);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  const { data: facilites } = data;
  console.log(facilites);
  return (
    <div className="xl:px-20 px-12 pb-6">
      <div className="bg-[#084C61] bannerBg rounded  py-12 px-12 text-white">
        <div className="z-10 relative">
          <h2 className="text-4xl font-semibold tracking-[2px]">Facility</h2>
          <p className="flex items-center gap-1 py-2 cursor-pointer">
            <Link to="/">
              <span className="hover:text-[#DB3A34] duration-300">Sport</span>
            </Link>
            <span> - </span> <span>Greenwood Park Tennis Courts</span>
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 py-12">
        <div className="border p-2 rounded">
          <img className="rounded" src={facilites?.img} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-medium py-2">{facilites?.name}</h2>
          <p className="text-lg text-[#555454]">
            Location : {facilites?.location}
          </p>
          <p className="py-2 text-lg font-bold">
            <span className="text-base font-normal">Price Per Hour :</span> $
            {facilites?.pricePerHour}
          </p>
          <p className="text-[#555454] py-2">{facilites?.description}</p>

          <div className="py-12">
            <Link to={`/bookingInfo/${facilites?._id}`}>
              <button className="bg-[#084C61] hover:bg-[#177E89] cursor-pointer duration-300 hover:text-[#fff] text-[#dbdada] px-4 py-2 rounded flex items-center gap-1">
                <span>
                  <MdDateRange />
                </span>
                <span>Book Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
