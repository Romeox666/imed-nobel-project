import React from "react";

const Header = (props) => {
  const {titleYear} = props ;
  return (
    <div className="flex bg-gray-950 items-center justify-center text-center h-36 w-auto ">
      <h1 className="text-4xl text-white font-mono">
        {titleYear ? `Nobel Prize ประจำปี ค.ศ. ${titleYear}` : "Nobel Prize"}
      </h1>
    </div>
  );
};

export default Header;
