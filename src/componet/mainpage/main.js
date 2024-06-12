import React from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function Main({ setIsLoggedIn }) {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        {/* ----------navbar--------------------------- */}
        <div className=" w-full ">
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
