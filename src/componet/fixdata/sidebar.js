import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-full bg-slate-400 w-52  p-4  ">
      <div className="ml-8">
        <div className="sidebar-header flex  items-center  ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="20px"
              width="20px"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
          <div className="ml-4"> Admin</div>
        </div>
        <div className="mt-8 p-0">
          <div className="m-0 p-0">
            <ul className="">
              <Link to="/" className="mt-5 flex">
                Home
              </Link>
              <Link to="/createmain" className="mt-5 flex">
                Add-question
              </Link>
              <Link to="/Quizmain" className="mt-5 flex">
                Quize
              </Link>
              <Link to="/Sectionmain" className="mt-5 flex">
                Section
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
