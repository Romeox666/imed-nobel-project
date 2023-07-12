import React from "react";
import Header from "./Components/Header";
import Filters from "./Components/Filters";
import Details from "./Components/Details";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";

function App() {
  const [titleYear, setTitleYear] = useState("");
  const [loadings, setLoadings] = useState(false);

  const loading = (e) => {
    setLoadings(e);
  };

  const handleClick = (e) => {
    setTitleYear(e);
    console.log(e);
  };

  return (
    <>
      <div className="relative">
        <Header titleYear={titleYear} />
        <div className="flex flex-col md:flex-row">
          <Filters handleClick={handleClick} loading={loading} />
          <Details />
        </div>
        {loadings ? (
          <div className="absolute left-2/4 top-2/4">
            <Spinner className="h-12 w-12" />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
