import React from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function Main({ setIsLoggedIn }) {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        {/* ----------navbar--------------------------- */}
        <div className="w-full bg-[#EEEEEE] ml-64">
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
          </div>
          <div className="p-5">
            <div className="flex gap-4">
              {/* First box */}
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-gray-700">Total Question</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>

              {/* Second box */}
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
                <div className="text-center text-gray-700 font-semibold">
                  Total Quiz
                </div>
                <div className="flex justify-center mt-3">
                  <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-gray-700">Total Section</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-gray-700">Total Result</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
