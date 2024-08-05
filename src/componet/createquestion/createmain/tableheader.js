import React, { useMemo } from "react";
import { ReactComponent as Sortbyname } from "../../../svgfile/sortbyname.svg";

function Tableheader({ sortOrder, setSortOrder }) {
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <thead>
        <tr className="bg-[#8A6FDF] text-white uppercase text-sm leading-normal">
          <th className="py-3 px-6  border">NUMBER</th>
          <th className="py-3 px-6   border">
            {" "}
            <div
              className="flex justify-center  cursor-pointer"
              onClick={toggleSortOrder}
            >
              <div>Question Name</div>
              <div className="ml-2">
                <Sortbyname
                  fill="white"
                  className={sortOrder === "asc" ? "rotate-180" : ""}
                />
              </div>
            </div>
          </th>
          <th className="py-3 px-6   border">CREATED DATE</th>
          <th className="py-3 px-6   border">SHOW</th>
          <th className="py-3 px-6    border  ">ACTION</th>
        </tr>
      </thead>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>number</th>
          </tr>
          <tbody>
            <tr>
              <td>vinay</td>
              <td>8141415252</td>
            </tr>
            <tr>
              <td>jay</td>
              <td>8980973105</td>
            </tr>
            <tr>
              <td>aaa</td>
              <td>7069949913</td>
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
}

export default Tableheader;
