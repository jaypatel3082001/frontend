import React, { useEffect, useState } from "react";
import { ReactComponent as Sortbyname } from "../../../svgfile/sortbyname.svg";
import { setCurrentPage } from "../../../Slices/quizredux";
import { useDispatch } from "react-redux";

function Tableheader({ sortOrder, setSortOrder }) {
  const dispatch = useDispatch();

  const handleSorting = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    dispatch(setCurrentPage(1));
  };

  return (
    <thead>
      <tr className="bg-[#8A6FDF]  text-white uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">NUMBER</th>
        <th className="py-3 px-6 text-left">
          {" "}
          <div className="flex  cursor-pointer" onClick={handleSorting}>
            <div> Name</div>
            <div className="ml-2">
              <Sortbyname
                fill="white"
                className={sortOrder === "asc" ? "rotate-180" : ""}
              />
            </div>
          </div>
        </th>
        <th className="py-3 px-6 text-left">KEY</th>
        <th className="py-3 px-6 text-left">CREATED DATE</th>
        <th className="py-3 px-6 text-left">SHOW</th>
        <th className="py-3 px-6 text-left">Download</th>
        <th className="py-3 px-6 ">ACTION</th>
      </tr>
    </thead>
  );
}

export default Tableheader;
