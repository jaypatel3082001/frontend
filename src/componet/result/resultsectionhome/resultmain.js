import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../fixdata/sidebar";
import Navbar from "../../fixdata/navbar";
import Addquiz from "../../Quize/addquiz";
import CustomDatePicker from "../../../util/CoustomDatePicker";
import {
  setIsloading,
  setTotalPage,
  setSortedData,
  setCurrentPage,
  setDateRangeresult,
  setTotalCount,
} from "../../../reduxfiles/result";
import Tableheader from "./tableheader";
import Tablebody from "./tablebody";

import { useDispatch, useSelector } from "react-redux";
// import { setTotalCount } from "../../../reduxfiles/sectionSlice";
import { serializedSelectionDatePicker } from "../../../util/utility";

function Sectionmain({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs4);
  const sortByOptions = [10, 15, 20, 25];
  const urloFe = `https://quiz-krishang.vercel.app/search/getsearchAll`;
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const type = "section";

  const startDate = useMemo(
    () => formatDate(inputs.dateRange[0].startDate) + "T00:00:00.000Z",
    [inputs.dateRange]
  );
  const endDate = useMemo(
    () =>
      formatDate(inputs.dateRange[0].endDate || new Date()) + "T23:59:59.000Z",
    [inputs.dateRange]
  );

  // Memoized total page calculation
  const totalPage = useMemo(
    () => Math.ceil(inputs.Tablemanuplation.totalCount / limit),
    [inputs.Tablemanuplation.totalCount, limit]
  );

  // Dispatch total page on totalPage change
  useEffect(() => {
    dispatch(setTotalPage(totalPage));
  }, [dispatch, totalPage]);

  // Fetch data with memoized fetch function
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

  // Effect to fetch data on component mount and when dependencies change
  useEffect(() => {
    fetchsortData();
  }, [fetchsortData]);

  // Handler to update limit and reset page
  const handleLimit = useCallback(
    (e) => {
      setLimit(Number(e.target.value));
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  // Handler to update search and reset page
  const handleChange = useCallback(
    (e) => {
      setSearch(e.target.value);
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  // Function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const handleDateRangePicker = (ranges) => {
    const serializedSelection = serializedSelectionDatePicker(ranges);
    dispatch(setDateRangeresult([serializedSelection]));
  };
  return (
    <div className="App bg">
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-gray-100">
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
          </div>
          <div className="w-full px-8 py-12 ">
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-5 bg-gray-400 p-2 md:p-4">
              {/* Date picker and search input */}
              <div className="flex items-center">
                <div className="mr-2 font-bold">Date :- </div>
                <div className="bg-white rounded-xl p-2">
                  <div className="flex items-center">
                    <div>
                      <CustomDatePicker
                        inputs={inputs}
                        onDateRangeChange={handleDateRangePicker}
                      />
                    </div>
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
              {/* Search input */}
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
              {/* Limit selector */}
              <div className="">
                <span className="fw-bold me-2">Sort by :</span>
                <select onChange={handleLimit}>
                  {sortByOptions.map((sortByOption, index) => (
                    <option key={index}>{sortByOption}</option>
                  ))}
                </select>
              </div>
              {/* Add Section button */}
              <Link to="/QuizetoSectionName">
                <div className="btn btn-primary mr-5 flex">
                  <span>ADD SECTION</span>
                  <span>
                    <Addquiz />
                  </span>
                </div>
              </Link>
            </div>
            {/* Table component */}
            <table className="min-w-full bg-white border border border-gray-300">
              <Tableheader sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <Tablebody
                formatDate={formatDate}
                offset={inputs.Tablemanuplation.currentPage * limit - limit}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionmain;
