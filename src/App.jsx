import React from "react";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Detail from "./Components/Detail";
import { useState } from "react";

function App() {
  const [titleYear, setTitleYear] = useState("");

  const handleClick = (e) => {
    setTitleYear(e);
    console.log(e);
  };

  return (
    <>
      <div>
          <Header titleYear={titleYear}/>
          <div className="flex flex-col md:flex-row">
          <Filter handleClick={handleClick}/>
          <Detail />
          </div>
      </div>
    </>
  );
}

export default App;
