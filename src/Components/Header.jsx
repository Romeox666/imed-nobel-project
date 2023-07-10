import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center h-36 w-auto md:flex-row bg-gray-800">
      <div>
        <h3 className="font-Rampart text-5xl text-center text-white">
          Nobel Prize
        </h3>
      </div>
      <div>
        <h4 className=" font-Thai text-3xl text-center mt-5 ml-5 text-white">
          ประจำปี ค.ศ.
        </h4>
      </div>
    </div>
  );
};

export default Header;
