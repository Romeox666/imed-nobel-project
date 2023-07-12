import React from "react";

const Header = (props) => {
  const { titleYear } = props;
  return (
    <div className="flex  flex-col bg-header items-center justify-between text-center h-36 w-auto px-10 py-5 md:flex-row">
      <h1 className="text-5xl text-dark-gold font-Monoton">Nobel Prize</h1>
      <h1 className="text-2xl text-black font-Thai">
        {titleYear ? `ประจำปี ค.ศ. ${titleYear}` : " "}
      </h1>
    </div>
  );
};

export default Header;
