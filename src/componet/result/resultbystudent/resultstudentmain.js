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

import { setTotalCount } from "../../../reduxfiles/resultstudentSlice";
import { serializedSelectionDatePicker } from "../../../util/utility";
import { setDateRangeresultstudent } from "../../../reduxfiles/resultstudentSlice";
import Createmainpagination from "../pagination/studentpagination";
import { useNavigate } from "react-router-dom";

function Resultstudentmain({ setIsLoggedIn }) {
  const resultsectionId = localStorage.getItem("resultsectionId");
  console.log(resultsectionId, "resultsectionId");
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs5);

  const sortByOptions = [5, 10, 15, 20];
  const urloFe = `https://quiz-krishang.vercel.app/search/getsearchsection/${resultsectionId}`;
  const [limit, setLimit] = useState(5);
  const [resultBy, setResult] = useState("");
  const sortBy = "createdAt";
  let type = "result";

  let mainstatus = "";
  console.log("sdata", inputs.Tablemanuplation.sortedData);

  const startDate =
    formatDate(inputs.dateRange[0].startDate) + "T00:00:00.000Z";
  const endDate =
    formatDate(inputs.dateRange[0].endDate || new Date()) + "T23:59:59.000Z";

  const [search, setsearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [status, setStatus] = useState("Quiz");
  const indexOfLastRow = inputs.Tablemanuplation.currentPage * limit;
  const offset = indexOfLastRow - limit;
  const totalPage = Math.ceil(inputs.Tablemanuplation.totalCount / limit);

  dispatch(setTotalPage(totalPage));
  console.log(inputs.Tablemanuplation.sortedData, "asasas");
  const handleLimit = (e) => {
    setLimit(e.target.value);
    dispatch(setCurrentPage(1));
  };
  const handleResult = (e) => {
    setResult(e.target.value);
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
        resultBy,
        startDate,
        endDate,
        status,
        mainstatus,
        type,
        offset: inputs.Tablemanuplation.currentPage * limit - limit,
      });

      const response = await fetch(`${urloFe}?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("dsdd");
      dispatch(setSortedData(result.data));
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
    status,
    startDate,
    type,
    status,
    mainstatus,
    inputs.Tablemanuplation.currentPage,
  ]);

  useEffect(() => {
    fetchsortData();
  }, [
    search,
    limit,
    offset,
    type,
    status,
    mainstatus,
    sortBy,
    resultBy,
    sortOrder,
    status,
    startDate,
    endDate,
  ]);

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
        <div className="w-full bg-[#EEEEEE] ml-64">
          <Navbar setIsLoggedIn={setIsLoggedIn} />

          <div className="bg-white rounded shadow-md m-4 p-4 ">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold">QUIZ</div>
              <div className="flex space-x-2">
                <button className="bg-[#004e98] hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Import
                </button>
                <button className="bg-[#004e98] text-white px-4 py-2 rounded hover:bg-blue-600">
                  Export
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2 mt-3">
              <div className="flex items-center">
                <div className="mr-2 font-bold">Date :- </div>
                <div className=" bg-white rounded-xl p-2">
                  <div className="flex items-center">
                    <div>
                      <CustomDatePicker
                        inputs={inputs}
                        onDateRangeChange={handleDateRangePicker}
                      />
                    </div>
                    <div className="flex items-center ml-2">
                      <div className="text-gray-700 font-bold">
                        {inputs.dateRange[0].startDate
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
                <label className="font-bold ml-2">Search: </label>
                <input
                  type="text"
                  className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 md:ml-4"
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <span className="fw-bold me-2">Result by :</span>
                <select
                  onChange={handleResult}
                  className="border border-gray-800"
                >
                  <option value="Quiz">Quizwise Result</option>
                  <option value="Section">Sectionwise Result</option>
                </select>
              </div>
              <div className="">
                <span className="fw-bold me-2">Sort by :</span>
                <select
                  onChange={handleLimit}
                  className="border border-gray-800"
                >
                  {sortByOptions.map((sortByOption, index) => (
                    <option key={index}>{sortByOption}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <table className="min-w-full bg-white border border-gray-200">
                <Tableheader
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setStatus={setStatus}
                  resultBy={resultBy}
                  status={status}
                />

                <Tablebody
                  formatDate={formatDate}
                  offset={inputs.Tablemanuplation.currentPage * limit - limit}
                  resultBy={resultBy}
                  Question={showQuestion}
                />
              </table>
            </div>
            <div className="flex justify-between items-center mt-2 z-0">
              <span>
                Page{" "}
                {inputs.Tablemanuplation.sortedData?.length === 0
                  ? 0
                  : inputs.Tablemanuplation.currentPage}
                of {totalPage}
              </span>

              <div className="flex space-x-2">
                <Createmainpagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultstudentmain;
