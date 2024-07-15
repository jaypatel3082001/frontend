import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function Tablebody({ offset, formatDate, resultBy }) {
  const inputs = useSelector((state) => state.inputs5);

  const sortedData = useMemo(() => {
    return Array.isArray(inputs?.Tablemanuplation?.sortedData)
      ? inputs.Tablemanuplation.sortedData
      : [];
  }, [inputs.Tablemanuplation.sortedData]);

  console.log("sortedData", inputs?.Tablemanuplation?.sortedData);

  if (inputs.Tablemanuplation.isLoading) {
    return (
      <tbody>
        <tr className="border-b border-gray-400">
          <td
            colSpan="7"
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
    <>
      {resultBy === "Section" ? (
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
              <td className="py-3 px-6 text-left">
                {formatDate(info.createdAt)}
              </td>

              {info.sectionwiseResult?.map((q, qind) => (
                <td key={qind} className="py-3 px-6 text-left">
                  {" "}
                  <span
                    className={`${
                      q.status === "fail"
                        ? "bg-red-500  px-3 py-1 text-white rounded "
                        : "bg-green-500  px-3 py-1 text-white rounded"
                    }`}
                  >
                    {q.weitage} / {info.sectionwiseTotalResult[qind]?.weitage}
                  </span>
                </td>
              ))}
              <td
                className={`py-3 px-6 text-left ${
                  info.sectionWiseStatus === "fail"
                    ? "text-red-500 font-semibold text-base"
                    : "text-green-500 font-semibold text-base"
                }`}
              >
                {" "}
                {info.sectionWiseStatus.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
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
              <td className="py-3 px-6 text-left">
                {formatDate(info.createdAt)}
              </td>

              <td className="py-3 px-6 text-left ">
                <span
                  className={`${
                    info.status === "fail"
                      ? "bg-red-500  px-3 py-1 text-white rounded "
                      : "bg-green-500 px-3 py-1 text-white rounded"
                  }`}
                >
                  {info.result}/{info.totalResult}
                </span>
              </td>

              <td
                className={`py-3 px-6 text-left ${
                  info.status === "fail"
                    ? "text-red-500 font-semibold text-base"
                    : "text-green-500 font-semibold text-base"
                }`}
              >
                {info.status.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
}

export default Tablebody;
