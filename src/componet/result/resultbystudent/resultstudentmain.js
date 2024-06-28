// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "../../fixdata/sidebar";
// import Navbar from "../../fixdata/navbar";
// import Addquiz from "../../Quize/addquiz";
// import CustomDatePicker from "../../../util/CoustomDatePicker";
// import {
//   toggleModal,
//   setIsloading,
//   setTotalPage,
//   setSortedData,
//   setCurrentPage,
//   setIdstores,
// } from "../../../reduxfiles/quizeSlice";
// import Tableheader from "./tableheader";
// import Tablebody from "./tablebody";
// import Showquestionbox from "./showquestionbox";
// import { useDispatch, useSelector } from "react-redux";
// import { setTotalCount } from "../../../reduxfiles/sectionSlice";
// import { serializedSelectionDatePicker } from "../../../util/utility";
// import { setDateRangeresultstudent } from "../../../reduxfiles/resultstudentSlice";

// function Resultstudentmain({ setIsLoggedIn }) {
//   const resultsectionId = localStorage.getItem("resultsectionId");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const inputs = useSelector((state) => state.inputs5);
//   const sortByOptions = [5, 10, 15, 20];
//   const urloFe = `https://quiz-krishang.vercel.app/search/getsearchsection/${resultsectionId}`; //api
//   const [limit, setLimit] = useState(5);
//   const sortBy = "createdAt";
//   let type = "result";
//   const startDate =
//     formatDate(inputs.dateRange[0].startDate) + "T00:00:00.000Z";

//   const endDate =
//     formatDate(inputs.dateRange[0].endDate || new Date()) + "T23:59:59.000Z";

//   //********************************************* */

//   // ****************  date formate  ********************
//   console.log("cccccuuuuc", inputs.Tablemanuplation.sortedData);
//   function formatDate(dateString) {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   }
//   // *********search*********
//   const [search, setsearch] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   // ************pagination

//   const indexOfLastRow = inputs.Tablemanuplation.currentPage * limit; // 2 * 5 = 10
//   const offset = indexOfLastRow - limit; // 10 -5 = 5

//   const totalPage = Math.ceil(inputs.Tablemanuplation.totalCount / limit);

//   dispatch(setTotalPage(totalPage));

//   //********************************************************* */

//   const handleLimit = (e) => {
//     setLimit(e.target.value);
//     dispatch(setCurrentPage(1));
//   };

//   // ************ sort data api **************************

//   const fetchsortData = async () => {
//     try {
//       dispatch(setIsloading(true));
//       console.log("sdttsds");
//       const params = new URLSearchParams({
//         search,
//         limit,
//         sortBy,
//         sortOrder,
//         startDate,
//         endDate,
//         type,
//         offset,
//       });

//       const response = await fetch(`${urloFe}?${params.toString()}`);

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const result = await response.json();

//       dispatch(setSortedData(result));
//       dispatch(setTotalCount(result.totalCount));
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     } finally {
//       dispatch(setIsloading(false));
//     }
//   };

//   useEffect(() => {
//     fetchsortData();
//   }, [search, limit, offset, type, sortBy, sortOrder, startDate, endDate]);

//   // ************ show question ************************
//   const showQuestion = (id) => {
//     dispatch(setIdstores(id));
//     dispatch(toggleModal(!inputs.openpop));

//     localStorage.setItem("sectionId", id);
//   };

//   const handleChange = (e) => {
//     setsearch(e.target.value);
//     dispatch(setCurrentPage(1));
//   };

//   const handleDateRangePicker = (ranges) => {
//     const serializedSelection = serializedSelectionDatePicker(ranges);
//     dispatch(setDateRangeresultstudent([serializedSelection]));
//   };
//   return (
//     <div className="App">
//       <div className="flex">
//         <Sidebar />
//         <div className="w-full bg-white-200">
//           <div>
//             <Navbar setIsLoggedIn={setIsLoggedIn} />
//           </div>
//           <div className="w-full px-3 bg-gray-200">
//             <div className="flex flex-col md:flex-row md:justify-between items-center mt-5 bg-gray-200 p-2 md:p-4">
//               <div className="flex items-center">
//                 <div className="mr-2 font-bold">Date :- </div>
//                 <div className=" bg-white rounded-xl p-2">
//                   <div className="flex items-center">
//                     <div>
//                       <CustomDatePicker
//                         inputs={inputs}
//                         onDateRangeChange={handleDateRangePicker}
//                       />
//                     </div>
//                     <div className="flex items-center ml-2">
//                       <div className="text-gray-700 font-bold">
//                         {inputs.dateRange[0].endDate
//                           ? formatDate(inputs.dateRange[0].startDate)
//                           : "YY/MM/DD"}
//                       </div>
//                       <div className="mx-2 text-gray-500 font-bold">To</div>
//                       <div className="text-gray-700 font-bold">
//                         {inputs.dateRange[0].endDate
//                           ? formatDate(inputs.dateRange[0].endDate)
//                           : "YY/MM/DD"}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center mb-2 md:mb-0">
//                 <label className="font-bold ml-2">Search: </label>
//                 <input
//                   type="text"
//                   className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 md:ml-4"
//                   placeholder="Search"
//                   value={search}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="">
//                 <span className="fw-bold me-2">Sort by :</span>
//                 <select onChange={handleLimit}>
//                   {sortByOptions?.map((sortByOption, index) => {
//                     return <option key={index}>{sortByOption}</option>;
//                   })}
//                 </select>
//               </div>
//             </div>

//             <table className="min-w-full bg-white border border-gray-300">
//               <Tableheader sortOrder={sortOrder} setSortOrder={setSortOrder} />

//               <Tablebody
//                 formatDate={formatDate}
//                 offset={offset}
//                 showQuestion={showQuestion}
//               />
//             </table>

//             <Showquestionbox showQuestion={showQuestion} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resultstudentmain;
import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../fixdata/sidebar";
import Navbar from "../../fixdata/navbar";
import CustomDatePicker from "../../../util/CoustomDatePicker";
import {
  toggleModal,
  setIsloading,
  setTotalPage,
  setSortedData,
  setCurrentPage,
  setIdstores,
} from "../../../reduxfiles/resultstudentSlice";
import Tableheader from "./tableheader";
import Tablebody from "./tablebody";
import Showquestionbox from "./showquestionbox";
import { setTotalCount } from "../../../reduxfiles/resultstudentSlice";
import { serializedSelectionDatePicker } from "../../../util/utility";
import { setDateRangeresultstudent } from "../../../reduxfiles/resultstudentSlice";
import Createmainpagination from "../pagination/studentpagination";

function Resultstudentmain({ setIsLoggedIn }) {
  const resultsectionId = localStorage.getItem("resultsectionId");
  console.log(resultsectionId, "resultsectionId");

  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs5);

  const sortByOptions = [5, 10, 15, 20];
  const urloFe = `https://quiz-krishang.vercel.app/search/getsearchsection/${resultsectionId}`;
  const [limit, setLimit] = useState(5);
  const sortBy = "createdAt";
  let type = "result";
  console.log("sdata", inputs.Tablemanuplation.sortedData);

  const startDate =
    formatDate(inputs.dateRange[0].startDate) + "T00:00:00.000Z";
  const endDate =
    formatDate(inputs.dateRange[0].endDate || new Date()) + "T23:59:59.000Z";

  const [search, setsearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const indexOfLastRow = inputs.Tablemanuplation.currentPage * limit;
  const offset = indexOfLastRow - limit;
  const totalPage = Math.ceil(inputs.Tablemanuplation.totalCount / limit);

  dispatch(setTotalPage(totalPage));

  const handleLimit = (e) => {
    setLimit(e.target.value);
    dispatch(setCurrentPage(1));
  };

  const fetchsortData = useCallback(async () => {
    try {
      dispatch(setIsloading(true));

      const params = new URLSearchParams({
        search,
        limit,
        sortBy: "createdAt",
        sortOrder,
        startDate,
        endDate,
        type,
        offset: inputs.Tablemanuplation.currentPage * limit - limit,
      });

      const response = await fetch(`${urloFe}?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("dsdd");
      dispatch(setSortedData(result));
      dispatch(setTotalCount(result.totalCount));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      dispatch(setIsloading(false));
    }
  }, [
    dispatch,
    endDate,
    limit,
    search,
    sortOrder,
    startDate,
    type,
    inputs.Tablemanuplation.currentPage,
  ]);

  useEffect(() => {
    fetchsortData();
  }, [search, limit, offset, type, sortBy, sortOrder, startDate, endDate]);

  const showQuestion = (id) => {
    dispatch(setIdstores(id));
    dispatch(toggleModal(!inputs.openpop));
    localStorage.setItem("sectionId", id);
  };

  const handleChange = (e) => {
    setsearch(e.target.value);
    dispatch(setCurrentPage(1));
  };

  const handleDateRangePicker = (ranges) => {
    const serializedSelection = serializedSelectionDatePicker(ranges);
    dispatch(setDateRangeresultstudent([serializedSelection]));
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-white-200">
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <div className="w-full px-3 bg-gray-200">
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-5 bg-gray-200 p-2 md:p-4">
              <div className="flex items-center">
                <div className="mr-2 font-bold">Date:</div>
                <div className="bg-white rounded-xl p-2">
                  <div className="flex items-center">
                    <CustomDatePicker
                      inputs={inputs}
                      onDateRangeChange={handleDateRangePicker}
                    />
                    <div className="flex items-center ml-2">
                      <div className="text-gray-700 font-bold">
                        {inputs.dateRange[0].endDate
                          ? formatDate(inputs.dateRange[0].startDate)
                          : "YY/MM/DD"}
                      </div>
                      <div className="mx-2 text-gray-500 font-bold">To</div>
                      <div className="text-gray-700 font-bold">
                        {inputs.dateRange[0].endDate
                          ? formatDate(inputs.dateRange[0].endDate)
                          : "YY/MM/DD"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <label className="font-bold ml-2">Search:</label>
                <input
                  type="text"
                  className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 md:ml-4"
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                />
              </div>
              <div>
                <span className="fw-bold me-2">Sort by:</span>
                <select onChange={handleLimit}>
                  {sortByOptions.map((sortByOption, index) => (
                    <option key={index} value={sortByOption}>
                      {sortByOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <table className="min-w-full bg-white border border-gray-300">
              <Tableheader sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <Tablebody
                formatDate={formatDate}
                offset={offset}
                showQuestion={showQuestion}
              />
            </table>

            <div className="flex justify-center">
              {" "}
              <Createmainpagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultstudentmain;
