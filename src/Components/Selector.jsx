import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Selector = () => {
  const [years, setYears] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((res) => {
        const numAscending = [...res.data.nobelPrizes].sort(
          (a, b) => b.awardYear - a.awardYear
        );

        let newArr = numAscending.map(function (val, index) {
          return Number(val.awardYear);
        });

        let convert = removeDuplicateStrings(newArr);
        setYears(convert);
      });
  }

  function removeDuplicateStrings(inputArray) {
    return [...new Set(inputArray)];
  }

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700 font-mono"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select A.D."}
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
            onChange={(e) =>
              setInputValue(e.target.value.toString().toLowerCase())
            }
            placeholder="Enter A.D."
            className="placeholder:text-gray-700 p-2 outline-none font-mono"
          />
        </div>
        {years.map((year, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              year.toString().toLowerCase() ===
                selected?.toString().toLowerCase() && "bg-sky-600 text-white"
            }
            ${
              year.toString().toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                year?.toString().toLowerCase() !==
                selected.toString().toLowerCase()
              ) {
                setSelected(year);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
