import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col bg-gray-950 items-center justify-center h-36 w-auto md:flex-row">
      <div>
        <h3 className="font-Rampart text-5xl text-center text-white">
          Nobel Prize
        </h3>
      </div>
      {/* <div>
        <h4 className=" font-Thai text-4xl text-center mt-5 ml-5 text-white">
          ประจำปี ค.ศ.
        </h4>
      </div> */}
    </div>
  );
};

export default Header;
