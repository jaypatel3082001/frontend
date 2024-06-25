import React from "react";
import { ReactComponent as Sortbyname } from "../../../svgfile/sortbyname.svg";

function Tableheader({ sortOrder, setSortOrder }) {
  return (
    <thead>
      <tr className="border-b border-gray-400 text-black font-bold uppercase text-sm leading-normal w-full">
        <th className="border-x-2 border-gray-300 text-center px-6 lg:w-fit">
          Quize Number
        </th>
        <th className="py-3 border-x-2 border-gray-300 text-left lg:w-full">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            <div>Quize Name</div>
            <div className="ml-2">
              <Sortbyname className={sortOrder === "asc" ? "rotate-180" : ""} />
            </div>
          </div>
        </th>
        <th className="px-5">Created Date</th>
        <th
          className="py-3 px-5 border-x-2 border-gray-300 text-left lg:w-fit"
          colSpan="2"
        >
          Action
        </th>
      </tr>
    </thead>
  );
}

export default Tableheader;
