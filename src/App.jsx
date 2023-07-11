import React from "react";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Detail from "./Components/Detail";

function App() {
  return (
    <>
      <div>
          <Header />
          <div className="flex flex-col md:flex-row">
          <Filter />
          <Detail />
          </div>
      </div>
    </>
  );
}

export default App;
