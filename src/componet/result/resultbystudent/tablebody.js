import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function Tablebody({ offset, formatDate }) {
  const inputs = useSelector((state) => state.inputs5);

  const sortedData = useMemo(() => {
    return Array.isArray(inputs?.Tablemanuplation?.sortedData)
      ? inputs.Tablemanuplation.sortedData
      : [];
  }, [inputs.Tablemanuplation.sortedData]);

  console.log("sortedData", sortedData);

  if (inputs.Tablemanuplation.isLoading) {
    return (
      <tbody>
        <tr className="border-b border-gray-400">
          <td
            colSpan="6"
            className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
          >
            Loading ...
          </td>
        </tr>
      </tbody>
    );
  }

  if (sortedData.length === 0) {
    return (
      <tbody>
        <tr className="border-b border-gray-400">
          <td
            colSpan="6"
            className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
          >
            No data found
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="text-gray-600 text-md font-semibold w-full">
      {sortedData.map((info, ind) => (
        <tr
          key={ind}
          className="border-b border-gray-200 hover:bg-gray-200 w-full"
        >
          <td className="py-3 px-6 text-left flex items-center">
            {offset + ind + 1}
          </td>
          <td className="py-3 px-6 text-left">
            {info.firstname} {info.lastname}
          </td>
          <td className="py-3 px-6 text-left">{info.userEmail}</td>
          <td className="py-3 px-6 text-left">{formatDate(info.createdAt)}</td>

          {/* Mapping through quizewiseResult and rendering each result */}
          {info.quizewiseResult?.map((q, qind) => (
            <td
              key={qind}
              className={`py-3 px-6 text-left ${
                q.status === "fail" ? "bg-red-500 text-white" : ""
              }`}
            >
              {q.weitage} / {info.quizewiseTotalResult[qind]?.weitage}
            </td>
          ))}

          <td className="py-3 px-6 text-left">{info.quizeWiseStatus}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Tablebody;
