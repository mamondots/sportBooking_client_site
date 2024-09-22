import { SetStateAction, useState } from "react";
import "./Prize.css";
import MonthPrize from "../MonthPrize/MonthPrize";
import YearPrize from "../YearPrize/YearPrize";
const Prize = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: SetStateAction<number>) => {
    setToggle(index);
  };
  return (
    <div className="xl:px-20 px-12 py-6">
      <div className="py-6 flex items-center justify-center text-center flex-col">
        <p className="text-[#084C61] text-lg">Pricing Plan</p>
        <h2 className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl  font-semibold leading-[1.1] text-[#3F3F3F] py-2">
          Our exclusive offer
        </h2>
      </div>

      <div>
        <div className="flex items-center justify-center">
          <div className="border flex gap-2 rounded px-4 py-2 border-[#084c613f]">
            <button
              onClick={() => toggleTab(1)}
              className={
                toggle === 1
                  ? "px-6 py-3 bg-[#084C61] text-[#fff] rounded tracking-[1px]"
                  : "px-6 py-3  text-[#084C61] rounded tracking-[1px]"
              }
            >
              Per Month
            </button>

            <button
              onClick={() => toggleTab(2)}
              className={
                toggle === 2
                  ? "px-6 py-3 bg-[#084C61] text-[#fff] rounded tracking-[1px]"
                  : "px-6 py-3 text-[#084C61] rounded tracking-[1px]"
              }
            >
              Per Year
            </button>
          </div>
        </div>

        <div className="mt-12 py-8 lg:px-20">
          <div className={toggle === 1 ? "content active-content" : "content"}>
            <MonthPrize></MonthPrize>
          </div>

          <div className={toggle === 2 ? "content active-content" : "content"}>
            <YearPrize></YearPrize>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
