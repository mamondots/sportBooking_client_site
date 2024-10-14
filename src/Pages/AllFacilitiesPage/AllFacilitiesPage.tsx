/* eslint-disable react-hooks/rules-of-hooks */

import { Link } from "react-router-dom";
import FacilitiesCard from "../FacilitiesPage/FacilitiesCard/FacilitiesCard";
import { useGetFacilitiesQuery } from "@/redux/features/facilities/facilitiesApi";

// import { FieldValues, SubmitHandler } from "react-hook-form";
import Lottie from "lottie-react";
import loader from "../../../src/Lottie/Animation - 1725387315784.json";
import { useState } from "react";
import { Pagination } from "antd";

const AllFacilitiesPage = () => {
  const [search, setSearch] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4);
  const queryArgs = [
    { name: "search", value: search },
    { name: "page", value: 2 },
    { name: "limit", value: 12 },
    { name: "minPrice", value: minPrice },
    { name: "maxPrice", value: maxPrice },
    { name: "page", value: currentPage.toString() },
    { name: "limit", value: pageSize.toString() },
  ];

  const { data: facilities, isLoading } = useGetFacilitiesQuery(queryArgs);

  const filterFacilitiesData = facilities?.data?.data?.filter(
    (item: { isDeleted: boolean }) => item.isDeleted !== true
  );

  console.log(filterFacilitiesData);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Lottie className="w-[30vh]" animationData={loader} loop={true} />
      </div>
    );
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  // Handle max price input change
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  // Handle page change
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  return (
    <div className="xl:px-20 px-12 pb-6">
      <div className="bg-[#084C61] bannerBg rounded  py-12 px-12 text-white">
        <div className="z-10 relative">
          <h2 className="text-4xl font-semibold tracking-[2px]">Facility</h2>
          <p className="flex items-center gap-1 py-2 cursor-pointer">
            <Link to="/">
              <span className="hover:text-[#DB3A34] duration-300">Sport</span>
            </Link>
            <span> - </span> <span>Facilities</span>
          </p>
        </div>
      </div>
      <div>
        <form className="pt-8">
          <div className="flex items-center gap-2 justify-between">
            <input
              className="border-2 py-2 px-4 outline-none border-[#084C61] rounded w-full"
              type="text"
              placeholder="Search here ...."
              value={search}
              onChange={handleSearchChange}
            />
            <input
              className="border-2 border-[#084C61] hover:border-[#177E89] py-2 px-4 outline-none bg-[#084C61] hover:bg-[#177E89] duration-300 cursor-pointer text-[#fff] rounded"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
      <div></div>

      <div className="flex items-center justify-between py-4">
        <p className="text-xl font-medium lg:flex md:flex sm:flex hidden">
          Total Ficilities - <span>{filterFacilitiesData?.length}</span>
        </p>
        <div>
          <form>
            <div className="flex items-center lg:flex-row flex-col flex-wrap gap-2">
              <input
                className="border-2 py-2 px-4 outline-none border-[#084C61] rounded"
                type="text"
                placeholder="Min Price"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                className="border-2 py-2 px-4 outline-none border-[#084C61] rounded"
                type="text"
                placeholder="Max Price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
              <input
                className="border-2 w-full lg:w-20  border-[#084C61] hover:border-[#177E89] py-2 px-4 outline-none bg-[#084C61] hover:bg-[#177E89] duration-300 cursor-pointer text-[#fff] rounded"
                type="submit"
                value="Find"
              />
            </div>
          </form>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {
          filterFacilitiesData && filterFacilitiesData.length > 0 ?  {filterFacilitiesData.map(
            (facilite: { _id: Key | null | undefined }) => (
              <FacilitiesCard
                key={facilite._id}
                facilite={facilite}
                img={""}
                name={""}
                description={""}
                pricePerHour={0}
                location={""}
              ></FacilitiesCard>
            )
          )}:( !isLoading && <p>There are no products</p>)
        }
       
      </div> */}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {filterFacilitiesData && filterFacilitiesData.length > 0
          ? filterFacilitiesData.map(
              (facilite: { _id: React.Key | null | undefined }) => (
                <FacilitiesCard
                  key={facilite._id}
                  facilite={facilite}
                  img={""}
                  name={""}
                  description={""}
                  pricePerHour={0}
                  location={""}
                />
              )
            )
          : !isLoading && (
              <p className="flex items-center justify-center py-20">
                There are no products
              </p>
            )}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-8">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filterFacilitiesData?.data?.meta.total || 0} // Use the meta total for the total number of items
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
