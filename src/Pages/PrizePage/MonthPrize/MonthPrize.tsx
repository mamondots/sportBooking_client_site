import { AiOutlineDingding } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

const MonthPrize = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div className="border p-6 rounded">
        <div className="flex items-center justify-center flex-col">
          <div className="py-4">
            <p className="p-2 bg-[#084C61] text-[#fff] text-4xl rounded">
              <AiOutlineDingding />
            </p>
          </div>
          <p className="flex items-center justify-center font-bold text-xl text-[#3F3F3F]">
            <span>$</span>
            <span className="text-4xl">59</span>
            <span>/Mo</span>
          </p>
          <h2 className="text-xl text-[#3F3F3F] font-medium py-1">Junior</h2>
          <p className="text-[#3F3F3F]">Persons aged 18 and under.</p>
        </div>

        <div className="py-4 flex flex-col gap-2 text-[#3F3F3F]">
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">Weekday</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">9 hole course</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">10% Discount</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              One-time free training
            </span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              100 free balls per day
            </span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              Course and facility access
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center py-2">
          <button className="px-6 py-3 hover:bg-[#177E89] cursor-pointer duration-300 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[1px]">
            Get Membership
          </button>
        </div>
      </div>
      <div className="border bg-[#084C61] p-6 rounded text-[#fff]">
        <div className="flex items-center justify-center flex-col">
          <div className="py-4">
            <p className="p-2 bg-[#fff] text-[#084C61] text-4xl rounded">
              <AiOutlineDingding />
            </p>
          </div>
          <p className="flex items-center justify-center font-bold text-xl text-[#fff]">
            <span>$</span>
            <span className="text-4xl">99</span>
            <span>/Mo</span>
          </p>
          <h2 className="text-xl  font-medium py-1">Intermediate</h2>
          <p className="">For adults over 25 years.</p>
        </div>

        <div className="py-4 flex flex-col gap-2">
          <p className="flex  items-center space-x-2">
            <span className="bg-[#fff] p-[2px] text-sm text-[#084C61] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">Weekday</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#fff] p-[2px] text-sm text-[#084C61] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">9 hole course</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#fff] p-[2px] text-sm text-[#084C61] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">10% Discount</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#fff] p-[2px] text-sm text-[#084C61] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              One-time free training
            </span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#fff] p-[2px] text-sm text-[#084C61] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              100 free balls per day
            </span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#fff] p-[2px] text-sm text-[#084C61] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              Course and facility access
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center py-2">
          <button className="px-6 py-3 hover:bg-[#177E89] hover:text-[#fff] cursor-pointer duration-300 bg-[#fff] text-[#084C61] font-semibold rounded tracking-[1px]">
            Get Membership
          </button>
        </div>
      </div>
      <div className="border p-6 rounded">
        <div className="flex items-center justify-center flex-col">
          <div className="py-4">
            <p className="p-2 bg-[#084C61] text-[#fff] text-4xl rounded">
              <AiOutlineDingding />
            </p>
          </div>
          <p className="flex items-center justify-center font-bold text-xl text-[#3F3F3F]">
            <span>$</span>
            <span className="text-4xl">199</span>
            <span>/Mo</span>
          </p>
          <h2 className="text-xl text-[#3F3F3F] font-medium py-1">
            Professional
          </h2>
          <p className="text-[#3F3F3F]">For adults over 30+ years.</p>
        </div>

        <div className="py-4 flex flex-col gap-2 text-[#3F3F3F]">
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">Weekday</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">9 hole course</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">10% Discount</span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              One-time free training
            </span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              100 free balls per day
            </span>
          </p>
          <p className="flex  items-center space-x-2">
            <span className="bg-[#084C61] p-[2px] text-sm text-[#fff] rounded">
              <FaCheck />
            </span>
            <span className="font-medium tracking-[1px]">
              Course and facility access
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center py-2">
          <button className="px-6 py-3 hover:bg-[#177E89] cursor-pointer duration-300 bg-[#084C61] text-[#fff] font-semibold rounded tracking-[1px]">
            Get Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthPrize;
