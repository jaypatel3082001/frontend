import React, { useMemo } from "react";
import { ReactComponent as Sortbyname } from "../../../svgfile/sortbyname.svg";
import { setCurrentPage } from "../../../reduxfiles/quizredux";
import { useDispatch, useSelector } from "react-redux";

function Tableheader({ sortOrder, setSortOrder }) {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs5);
  const handleSorting = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    dispatch(setCurrentPage(1));
  };
  const sortedData = useMemo(
    () => inputs?.Tablemanuplation?.sortedData,
    [inputs.Tablemanuplation.sortedData]
  );
  console.log(
    "sortedData.quizewiseResult",
    inputs?.Tablemanuplation?.sortedData
  );
  return (
    // <thead>
    //   <tr className="border-b border-gray-400 text-black font-bold uppercase text-sm leading-normal w-full">
    //     <th className="border-x-2 border-gray-300 text-center px-6 lg:w-fit">
    //       Student Number
    //     </th>
    //     <th className="py-3 border-x-2 border-gray-300 text-left lg:w-80">
    //       <div
    //         className="flex justify-center items-center cursor-pointer"
    //         onClick={handleSorting}
    //       >
    //         <div>FirstName</div>
    //         <div className="ml-2">
    //           <Sortbyname className={sortOrder === "asc" ? "rotate-180" : ""} />
    //         </div>
    //       </div>
    //     </th>
    //     <th className="py-3 border-x-2 border-gray-300 text-left lg:w-80">
    //       {" "}
    //       <div className="flex justify-center items-center cursor-pointer">
    //         LastName
    //       </div>
    //     </th>
    //     <th className="px-5 border-x-2 border-gray-300">
    //       <div className="flex justify-center items-center cursor-pointer">
    //         Email ID
    //       </div>
    //     </th>
    //     <th className="px-5 border-x-2 border-gray-300">Exam Date</th>
    //     <th className="px-5 border-x-2 border-gray-300">Total Marks</th>
    //     {sortedData.data &&
    //       sortedData.data[0]?.quizewiseTotalResult?.map((quiz, quizIdx) => (
    //         <th key={quizIdx} className="px-5 border-x-2 border-gray-300">
    //           {quiz.quizename}
    //         </th>
    //       ))}
    //   </tr>
    // </thead>
    <thead>
      <tr className="bg-[#3a6ea5] text-white uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">NUMBER</th>
        <th className="py-3 px-6 text-left">
          {" "}
          <div className="flex  cursor-pointer" onClick={handleSorting}>
            <div> Name</div>
            <div className="ml-2">
              <Sortbyname className={sortOrder === "asc" ? "rotate-180" : ""} />
            </div>
          </div>
        </th>
        <th className="py-3 px-6 text-left">Email ID</th>
        <th className="py-3 px-6 text-left">Exam Date</th>
        <th className="py-3 px-6 text-left">Total Marks</th>
        {sortedData.data &&
          sortedData.data[0]?.quizewiseTotalResult?.map((quiz, quizIdx) => (
            <th key={quizIdx} className="py-3 px-6 text-left">
              {quiz.quizename}
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default Tableheader;
