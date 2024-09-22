import { AppDispatch, RootState } from "@/redux/app/store";
import { setSearch } from "@/redux/features/facilities/facilitiesSlice";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const JustSeach = () => {
  // const dispatch = useDispatch();
  // const search = useSelector((state: RootState) => state.search.search);
  // const [searchInput, setSearchInput] = useState<string>(search);

  // useEffect(() => {
  //   setSearchInput(search); // Sync local state with Redux state if it changes
  // }, [search]);

  // // Handler to update search input and dispatch the setSearch action
  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const newSearch = e.target.value;
  //   setSearchInput(newSearch); // Update local state
  // };

  // // Handler for form submission
  // const handleSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault(); // Prevent default form submission behavior

  //   dispatch(
  //     setSearch(

  //       setFieldQuery((prev: any[], value: any) => [
  //         ...prev.filter((q: { name: string }) => q.name !== "search"),
  //         { name: "search", value: value },
  //         { name: "page", value: 1 },
  //       ]) || ""
  //     )
  //   ); // Dispatch action to update Redux state
  // };

  // //   const handleSearch = (e: { target: any; preventDefault: () => void }) => {
  // //     e.preventDefault();
  // //     const newValue = e.target.value;
  // //     setSearchs(newValue);
  // //     dispatch(setSearch({ search: newValue }));
  // //     console.log(newValue);
  // //   };

  const dispatch: AppDispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.facility);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  // const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch(
  //     setFilter({ filter: { ...filter, minPrice: Number(e.target.value) } })
  //   );
  // };

  // const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch(
  //     setFilter({ filter: { ...filter, maxPrice: Number(e.target.value) } })
  //   );
  // };
  return (
    <div>
      <form className="pt-8">
        <div className="flex items-center gap-2 justify-between">
          <input
            value={search}
            onChange={handleSearchChange}
            className="border-2 py-2 px-4 outline-none border-[#084C61] rounded w-full"
            type="text"
            placeholder="Search here ...."
          />
          <input
            className="border-2 border-[#084C61] hover:border-[#177E89] py-2 px-4 outline-none bg-[#084C61] hover:bg-[#177E89] duration-300 cursor-pointer text-[#fff] rounded"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default JustSeach;
