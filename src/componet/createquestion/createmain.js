import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import Addquiz from "./addquestion";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Upboxuparrow } from "../../svgfile/boxuparrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../reduxfiles/InputSlice";
import Createmainpagination from "./pagination/createmainpagination";
import { ReactComponent as Option } from "../../svgfile/option.svg";
import { ReactComponent as Popbox } from "../../svgfile/Popbox.svg";

function Createmain({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";
  const [display, setDisplay] = useState(false);
  const [idstore, setIdstore] = useState(null);
  const [idstores, setIdstores] = useState(null);
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs);
  // *********search*********
  const [searchquestionname, setSearchquestionName] = useState("");
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        item.question &&
        item.question.toLowerCase().includes(searchquestionname.toLowerCase())
    );

    setSortedData(filteredData);
  }, [searchquestionname, data]);
  // ************pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentData = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPage = Math.ceil(sortedData.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== "..." && pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };

  const handleClicktd = (id) => {
    setDisplay(!display);
    setIdstore(id);
  };

  const showQuestion = (id) => {
    setIdstores(id);
    dispatch(toggleModal(!inputs.openpop));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://quiz-krishang.vercel.app/questions/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
      fetchData();
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  const handleEditClick = (id) => {
    const questionToUpdate = data.find((question) => question._id === id);
    navigate("/questionadd", { state: { itemToEdit: questionToUpdate } });
  };

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-white-200">
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
          </div>
          <div>
            <Addquiz />
          </div>
          <div className="me-3 my-3 my-md-0">
            <input
              type="text"
              className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
              value={searchquestionname}
              onChange={(e) => setSearchquestionName(e.target.value)}
            />
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="border-b border-gray-400 text-black font-bold uppercase text-sm leading-normal w-full ">
                <th className=" border-x-2 border-gray-300 text-center px-6 lg:w-fit">
                  Question Number
                </th>
                <th className="py-3 border-x-2 border-gray-300   text-left lg:w-full">
                  <div className="flex justify-center">Question Name</div>
                </th>
                <th className="py-3 px-5 border-x-2 border-gray-300  text-left lg:w-fit"></th>
                <th className="py-3 px-5 border-x-2 border-gray-300 text-left lg:w-fit"></th>
              </tr>
            </thead>

            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <>
                {currentData.map((info, ind) => (
                  <tbody key={info._id} className="text-black font-semibold">
                    <tr className="border-b border-gray-400">
                      <td className="text-center whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300">
                        {indexOfFirstRow + ind + 1}
                      </td>
                      <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-64">
                        <div className="max-w-full truncate">
                          {info.question}
                        </div>
                      </td>
                      <td
                        className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200"
                        onClick={() => showQuestion(info._id)}
                      >
                        {" "}
                        <div className="flex justify-center">
                          <Popbox />
                        </div>
                      </td>
                      <td
                        className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200 relative"
                        onClick={() => handleClicktd(info._id)}
                      >
                        <div className="flex justify-center">
                          <Option />
                        </div>
                        {display && idstore === info._id && (
                          <div
                            role="tooltip"
                            className="absolute shadow show popover bs-popover-bottom bg-white border rounded"
                            style={{
                              top: "100%",
                              left: "46%",
                              transform: "translateX(-50%)",
                            }}
                          >
                            <div
                              className="popover-arrow"
                              style={{
                                position: "absolute",
                                top: "-8px",
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                            >
                              <Upboxuparrow />
                            </div>
                            <div className="d-flex flex-column p-2 popover-body">
                              <ul className="action-menu-list space-y-2">
                                <li
                                  className="cursor-pointer hover:bg-gray-200 p-1 rounded"
                                  onClick={() => handleEditClick(info._id)}
                                >
                                  Edit
                                </li>
                                <li className="cursor-pointer hover:bg-gray-200 p-1 rounded">
                                  Archive
                                </li>
                                <li
                                  className="cursor-pointer hover:bg-gray-200 p-1 rounded"
                                  onClick={() => handleDelete(info._id)}
                                >
                                  Delete
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))}
                <tfoot>
                  <tr className="bg-gray-200 font-bold  leading-normal w-full">
                    <td className="hidden md:table-cell w-fit "></td>
                    <td className="w-full md:w-1/2 lg:w-1/6  ">
                      <div className="flex justify-center ">
                        <Createmainpagination
                          currentPage={currentPage}
                          totalPage={totalPage}
                          handlePageChange={handlePageChange}
                        />
                      </div>
                    </td>
                    <td className="hidden md:table-cell w-fit"></td>
                    <td className="hidden lg:table-cell w-fit"></td>
                  </tr>
                </tfoot>

                {data.map(
                  (info, ind) =>
                    idstores === info._id &&
                    inputs?.openpop === true && (
                      <div
                        key={info._id}
                        className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
                      >
                        <div className="bg-white w-3/4 md:w-1/2 xl:w-1/3 p-6 rounded-lg shadow-lg">
                          <div className="flex justify-between">
                            <div className="font-bold text-xl">
                              Mark: {info.weightage}
                            </div>
                            <div
                              className="cursor-pointer"
                              onClick={() => showQuestion(info._id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                height="35px"
                                width="35px"
                              >
                                <path
                                  fill="#64748B"
                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="font-bold text-xl mb-4 mt-4">
                            <span className="break-words">{info.question}</span>
                          </div>
                          <div className="mb-4">
                            <label className="flex items-center mb-2">
                              <input
                                type="radio"
                                name={`option${ind}`}
                                className="mr-2"
                              />
                              <span className="text-xl">{info.option1}</span>
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="radio"
                                name={`option${ind}`}
                                className="mr-2"
                              />
                              <span className="text-xl">{info.option2}</span>
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="radio"
                                name={`option${ind}`}
                                className="mr-2"
                              />
                              <span className="text-xl">{info.option3}</span>
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="radio"
                                name={`option${ind}`}
                                className="mr-2"
                              />
                              <span className="text-xl">{info.option4}</span>
                            </label>
                          </div>
                          <div className="border-t pt-4">
                            <span className="text-xl">
                              Answer: {info.answer}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Createmain;
