import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Filters = (props) => {
  
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [inputValue, setInputValue] = useState("");
  
  const [years, setYears] = useState([]);
  const [prizeAmount, setPrizeAmount] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    fetchYears();
  }, []);

  const fetchYears = async () => {
    const currentYear = new Date().getFullYear();
    const yearsList = Array.from(
      { length: currentYear - 1900 },
      (_, index) => currentYear - index
    );
    setYears(yearsList);
  };

  async function getAmount() {
    props.loading(true);
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
        props.loading(false);
      });
    props.handleClick(selectedYear);
  }

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-auto px-10 bg-filter">
      <div className="flex flex-col w-auto md:flex-row ">
        <div className="w-auto font-Inconsolata h-80">
          <div
            onClick={() => setOpen(!open)}
            className={`bg-white w-full p-2 flex items-center justify-between rounded ${
              !selected && "text-gray-700 font-Inconsolata"
            }`}
          >
            {selectedYear ? selectedYear : "Select Years"}
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
                placeholder="Enter Years"
                className="placeholder:text-gray-700 p-2 outline-none font-Inconsolata"
              />
            </div>

            {years.map((year, index) => (
              <li
                key={index}
                className={`p-4 font-Inconsolata text-sm hover:bg-gray-400 hover:text-black cursor-pointer
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
            onClick={getAmount}
            className="bg-dark-gold hover:bg-gold text-white h-10 w-20 font-Inconsolata ml-20 mb-8 rounded md:py-2 md:px-4 md:ml-2 "
          >
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white p-2 rounded-xl">
        <p className="text-black font-Inconsolata">
          Total prizeAmount : {prizeAmount}
        </p>
      </div>
    </div>
  );
};

export default Filters;
