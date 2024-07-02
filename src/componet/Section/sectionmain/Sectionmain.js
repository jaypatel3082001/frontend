import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../fixdata/sidebar";
import Navbar from "../../fixdata/navbar";
import AddSection from "../addsection";
import CustomDatePicker from "../../../util/CoustomDatePicker";
import {
  toggleModal,
  setIsloading,
  setTotalPage,
  setSortedData,
  setCurrentPage,
  setIdstores,
  setDateRangeSectione,
} from "../../../reduxfiles/Sectionslice";
import Tableheader from "./tableheader";
import Tablebody from "./tablebody";
import Showquestionbox from "./showquestionbox";
import { useDispatch, useSelector } from "react-redux";
import { serializedSelectionDatePicker } from "../../../util/utility";

function Sectionmain({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs2);

  // Memoized sortByOptions array
  const sortByOptions = useMemo(() => [10, 15, 20, 25], []);

  const urloFe = `https://quiz-krishang.vercel.app/search/getsearchAll`; //api
  const [limit, setLimit] = useState(10);
  const sortBy = "createdAt";
  let type = "quiz";

  // Date format function
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const startDate =
    formatDate(inputs.dateRange[0].startDate) + "T00:00:00.000Z";
  const endDate =
    formatDate(inputs.dateRange[0].endDate || new Date()) + "T23:59:59.000Z";

  const formatstartDate = inputs.dateRange[0].startDate;
  const formatendDate = inputs.dateRange[0].endDate;

  // Search state
  const [search, setsearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination calculations
  const indexOfLastRow = inputs.Tablemanuplation.currentPage * limit;
  const offset = indexOfLastRow - limit;
  const totalPage = Math.ceil(
    inputs.Tablemanuplation.sortedData.totalCount / limit
  );

  // Dispatch totalPage initially
  useEffect(() => {
    dispatch(setTotalPage(totalPage));
  }, [dispatch, totalPage]);

  // Handle limit change
  const handleLimit = useCallback(
    (e) => {
      setLimit(e.target.value);
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  // Fetch sorted data from API
  const fetchsortData = useCallback(async () => {
    try {
      dispatch(setIsloading(true));

      const params = new URLSearchParams({
        search,
        limit,
        sortBy,
        sortOrder,
        startDate,
        endDate,
        type,
        offset,
      });

      const response = await fetch(`${urloFe}?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      dispatch(setSortedData(result));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      dispatch(setIsloading(false));
    }
  }, [
    dispatch,
    search,
    limit,
    offset,
    type,
    sortBy,
    sortOrder,
    startDate,
    endDate,
  ]);

  // Fetch data on component mount and when dependencies change
  useEffect(() => {
    fetchsortData();
  }, [fetchsortData]);

  // Show question details
  const showQuestion = useCallback(
    (id) => {
      dispatch(setIdstores(id));
      dispatch(toggleModal(!inputs.openpop));
      localStorage.setItem("SectionId", id);
    },
    [dispatch, inputs.openpop]
  );

  // Handle search input change
  const handleChange = useCallback(
    (e) => {
      setsearch(e.target.value);
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  const handleDateRangePicker = (ranges) => {
    const serializedSelection = serializedSelectionDatePicker(ranges);
    dispatch(setDateRangeSectione([serializedSelection]));
  };

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-white-200">
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <div className="w-full px-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-10 bg-gray-200 p-2 md:p-4">
              <div className="flex items-center">
                <div className="mr-2 font-bold">Date :- </div>
                <div className=" bg-white rounded-xl p-2">
                  <div className="flex items-center">
                    <CustomDatePicker
                      inputs={inputs}
                      onDateRangeChange={handleDateRangePicker}
                    />
                    <div className="flex items-center ml-2">
                      <div className="text-gray-700 font-bold">
                        {formatendDate
                          ? formatDate(formatstartDate)
                          : "YY/MM/DD"}
                      </div>
                      <div className="mx-2 text-gray-500 font-bold">To</div>
                      <div className="text-gray-700 font-bold">
                        {formatendDate ? formatDate(formatendDate) : "YY/MM/DD"}
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
                <span className="fw-bold me-2">Sort by :</span>
                <select onChange={handleLimit}>
                  {sortByOptions.map((sortByOption, index) => (
                    <option key={index}>{sortByOption}</option>
                  ))}
                </select>
              </div>
              <Link to="/Sectionform">
                <div className="btn btn-primary mr-5 flex">
                  <span>ADD Section</span>
                  <span>
                    <AddSection />
                  </span>
                </div>
              </Link>
            </div>

            <table className="min-w-full bg-white border border-gray-300">
              <Tableheader sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <Tablebody
                formatDate={formatDate}
                offset={offset}
                showQuestion={showQuestion}
              />
            </table>

            <Showquestionbox showQuestion={showQuestion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionmain;
