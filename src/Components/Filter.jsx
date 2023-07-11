import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [years, setYears] = useState([]);
  const [prizeAmount, setPrizeAmount] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    fetchYears();
  }, []);

  const fetchYears = async () => {
    const currentYear = new Date().getFullYear();
    const yearsList = Array.from(
      { length: currentYear - 1900 + 1 },
      (_, index) => currentYear - index
    );
    setYears(yearsList);
  };

  async function getamount() {
    await axios
      .get(
        `http://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${selectedYear}`
      )
      .then((res) => {
        const totalPrizeAmount = res.data.nobelPrizes.reduce(
          (sum, prize) => sum + prize.prizeAmount,
          0
        );
        setPrizeAmount(totalPrizeAmount);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-auto px-10 bg-gray-900">
      <div className="flex flex-row w-auto">
        <div className="w-auto font-medium h-80">
          <div
            onClick={() => setOpen(!open)}
            className={`bg-white w-full p-2 flex items-center justify-between rounded ${
              !selected && "text-gray-700 font-mono"
            }`}
          >
            {selectedYear 
                ? selectedYear
              : "Select Years"}
            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
          </div>
          <ul
            className={`bg-white mt-2 overflow-y-auto ${
              open ? "max-h-60" : "max-h-0"
            } `}
          >
            <div className="flex items-center px-2 sticky top-0 bg-white">
              <AiOutlineSearch size={18} className="text-gray-700" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toString())}
                placeholder="Enter A.D."
                className="placeholder:text-gray-700 p-2 outline-none font-mono"
              />
            </div>

            {years.map((year, index) => (
              <li
                key={index}
                className={`p-4 font-mono text-sm hover:bg-sky-600 hover:text-white
            ${
              year.toString() === selected?.toString() &&
              "bg-sky-600 text-white"
            }
            ${year.toString().startsWith(inputValue) ? "block" : "hidden"}`}
                onClick={() => {
                  if (year?.toString() !== selected.toString()) {
                    setSelectedYear(year);
                    setOpen(false);
                  }
                }}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={getamount}
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 h-10 w-20 rounded "
          >
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white p-2 rounded-xl">
        <p className="text-black font-mono">
          Total prizeAmount : {prizeAmount}
        </p>
      </div>
    </div>
  );
};

export default Filter;
