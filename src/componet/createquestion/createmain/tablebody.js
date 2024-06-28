import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { ReactComponent as Option } from "../../../svgfile/option.svg";
import { ReactComponent as Popbox } from "../../../svgfile/Popbox.svg";
import { ReactComponent as Upboxuparrow } from "../../../svgfile/boxuparrow.svg";
import Createmainpagination from "../pagination/createmainpagination";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setIdstore,
  setDisplay,
  setIsloading,
  setData,
} from "../../../reduxfiles/InputSlice";

function Tablebody({ formatDate, offset, showQuestion }) {
  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";
  const navigate = useNavigate();
  const inputs = useSelector((state) => state.inputs);
  const dispatch = useDispatch();

  // Memoized fetchData function
  const fetchData = useCallback(async () => {
    try {
      dispatch(setIsloading(true));
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      dispatch(setData(result));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      dispatch(setIsloading(false));
    }
  }, [dispatch]);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoized mapped data
  const sortedData = useMemo(
    () => inputs.Tablemanuplation.sortedData?.data,
    [inputs.Tablemanuplation.sortedData?.data]
  );

  // Memoized event handlers
  const handleEditClick = useCallback(
    (id) => {
      const questionToUpdate = sortedData.find(
        (question) => question._id === id
      );
      navigate("/questionadd", { state: { itemToEdit: questionToUpdate } });
    },
    [navigate, sortedData]
  );

  const handleDelete = useCallback(
    async (id) => {
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
    },
    [fetchData]
  );

  const handleClicktd = useCallback(
    (id) => {
      dispatch(setDisplay(!inputs.Tablemanuplation.display));
      dispatch(setIdstore(id));
    },
    [dispatch, inputs.Tablemanuplation.display]
  );

  // Outside click box close
  function useClickOutside(ref, callback) {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback]);
  }

  const calendarRef = useRef(null);
  useClickOutside(calendarRef, () => {
    dispatch(setDisplay(false));
  });

  return inputs.Tablemanuplation.isLoading ? (
    <tbody>
      <tr className="border-b border-gray-400">
        <td
          colSpan="5"
          className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
        >
          Loading ...
        </td>
      </tr>
    </tbody>
  ) : sortedData?.length === 0 ? (
    <tbody>
      <tr className="border-b border-gray-400">
        <td
          colSpan="5"
          className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
        >
          No data found
        </td>
      </tr>
    </tbody>
  ) : (
    <tbody className="text-black font-semibold">
      {sortedData?.map((info, ind) => (
        <tr key={info._id} className="border-b border-gray-400">
          <td className="text-center whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300">
            {offset + ind + 1}
          </td>
          <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-64">
            <div className="max-w-full truncate">{info.question}</div>
          </td>
          <td className="text-center">{formatDate(info.createdAt)}</td>
          <td
            className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200"
            onClick={() => showQuestion(info._id)}
          >
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
            {inputs.Tablemanuplation.display &&
              inputs.Tablemanuplation.idstore === info._id && (
                <div
                  ref={calendarRef}
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
      ))}
      <tr className="bg-gray-200">
        <td></td>
        <div className="flex justify-center ">
          <Createmainpagination />
        </div>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

export default Tablebody;
