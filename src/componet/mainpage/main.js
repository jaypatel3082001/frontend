import React from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function Main() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        {/* ----------navbar--------------------------- */}
        <div className=" w-full mr-2">
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
