import React from "react";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Detail from "./Components/Detail";

function App() {
  return (
    <>
      <div>
          <Header />
          <div className="flex">
          <Filter />
          <Detail />
          </div>
      </div>
    </>
  );
}

export default App;
