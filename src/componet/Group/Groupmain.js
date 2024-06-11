import React from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link } from "react-router-dom";

function Groupmain({ setIsLoggedIn }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div className="flex justify-between mt-5">
          <div></div>
          <div className=" flex items-center flex-col p-2  bg-blue-300">
            <div>Quize to Group</div>
            <Link to="/QuizetoGroup">
              <button className="bg-red-300 w-fit mt-1" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="25px"
                  width="25px"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-slate-300 m-5 rounded-md">
          <h1 className="fw-bold text-2xl flex justify-center border-b-2 w-full p-2">
            Add the Quiz
          </h1>
          <div className=" py-2 px-9 ">
            <h1 className="fw-bold text-xl mt-3 mb-4">opt1</h1>
            <h1 className="fw-bold text-xl mt-3 mb-4">opt1</h1>
            <h1 className="fw-bold text-xl mt-3 mb-4">opt1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groupmain;
