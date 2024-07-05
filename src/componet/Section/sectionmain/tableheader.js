import React, { useMemo, useCallback } from "react";
import { ReactComponent as Sortbyname } from "../../../svgfile/sortbyname.svg";

function Tableheader({ sortOrder, setSortOrder }) {
  const toggleSortOrder = useCallback(() => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }, [sortOrder, setSortOrder]);

  const rotatedClass = useMemo(
    () => (sortOrder === "asc" ? "rotate-180" : ""),
    [sortOrder]
  );

  return (
    // <thead>
    //   <tr className="border-b border-gray-400 text-black font-bold uppercase text-sm leading-normal w-full">
    //     <th className="border-x-2 border-gray-300 text-center px-6 lg:w-fit">
    //       Section Number
    //     </th>
    //     <th className="py-3 border-x-2 border-gray-300 text-left lg:w-full">
    //       <div
    //         className="flex justify-center items-center cursor-pointer"
    //         onClick={toggleSortOrder}
    //       >
    //         <div>Section Name</div>
    //         <div className="ml-2">
    //           <Sortbyname className={rotatedClass} />
    //         </div>
    //       </div>
    //     </th>
    //     <th className="px-5">Created Date</th>
    //     <th
    //       className="py-3 px-5 border-x-2 border-gray-300 text-left lg:w-fit"
    //       colSpan="2"
    //     >
    //       Action
    //     </th>
    //   </tr>
    // </thead>
    <thead>
      <tr className="bg-[#3a6ea5] text-white uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">NUMBER</th>
        <th className="py-3 px-6 text-left">
          {" "}
          <div className="flex  cursor-pointer" onClick={toggleSortOrder}>
            <div>Section Name</div>
            <div className="ml-2">
              <Sortbyname className={sortOrder === "asc" ? "rotate-180" : ""} />
            </div>
          </div>
        </th>
        <th className="py-3 px-6 text-left">CREATED DATE</th>
        <th className="py-3 px-6 text-left">SHOW</th>
        <th className="py-3 px-6 ">ACTION</th>
      </tr>
    </thead>
  );
}

export default Tableheader;
