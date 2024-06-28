import React, { useMemo } from "react";
import { ReactComponent as Popbox } from "../../../svgfile/Popbox.svg";
import Createmainpagination from "../pagination/createmainpagination";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Tablebody({ offset }) {
  const inputs = useSelector((state) => state.inputs4);
  const Navigate = useNavigate();
  // Memoize sortedData to prevent unnecessary re-rendering
  const sortedData = useMemo(
    () => inputs?.Tablemanuplation?.sortedData?.data,
    [inputs.Tablemanuplation.sortedData.data]
  );

  // Memoize isLoading for conditional rendering
  const isLoading = useMemo(
    () => inputs?.Tablemanuplation?.isLoading,
    [inputs.Tablemanuplation.isLoading]
  );
  const handleResult = (id) => {
    localStorage.setItem("resultsectionId", id);

    Navigate("/resultstudentmain");
  };

  return (
    <tbody>
      {isLoading ? (
        <tr className="border-b border-gray-400">
          <td
            colSpan="5"
            className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
          >
            Loading ...
          </td>
        </tr>
      ) : sortedData?.length === 0 ? (
        <tr className="border-b border-gray-400">
          <td
            colSpan="5"
            className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
          >
            No data found
          </td>
        </tr>
      ) : (
        <>
          {sortedData?.map((info, ind) => (
            <tr
              key={info._id}
              className="border-b border-gray-400 font-semibold"
            >
              <td className="text-center whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300">
                {offset + ind + 1}
              </td>
              <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-64">
                <div className="max-w-full truncate">{info.sectionName}</div>
              </td>

              <td
                className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200 relative"
                onClick={() => {
                  handleResult(info._id);
                }}
              >
                <div className="flex justify-center">
                  <Popbox />
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-400">
            <td></td>
            <td>
              <div className="flex justify-center ">
                <Createmainpagination />
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </>
      )}
    </tbody>
  );
}

export default Tablebody;
