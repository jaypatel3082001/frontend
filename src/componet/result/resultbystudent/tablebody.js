import React, { useEffect, useMemo, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

function Tablebody({ offset, formatDate }) {
  const inputs = useSelector((state) => state.inputs5);

  const sortedData = useMemo(
    () => inputs?.Tablemanuplation?.sortedData,
    [inputs.Tablemanuplation.sortedData]
  );

  console.log("sortedDataaahhhaaaaaaaaa", sortedData.totalCount);

  return inputs.Tablemanuplation.isLoading ? (
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
  ) : sortedData.data?.length === 0 ? (
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
  ) : (
    // <>
    //   {sortedData.data?.map((info, ind) => (
    //     <tr key={info._id} className="border-b border-gray-400">
    //       <td className="text-center whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300">
    //         {offset + ind + 1}
    //       </td>
    //       <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-80">
    //         <div className="max-w-full truncate text-center">
    //           {" "}
    //           {info.firstname}
    //         </div>
    //       </td>
    //       <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-80">
    //         <div className="max-w-full truncate text-center">
    //           {" "}
    //           {info.lastname}
    //         </div>
    //       </td>
    //       <td className="text-center border-x-2 py-3 px-6 border-gray-300">
    //         {info.userEmail}
    //       </td>
    //       <td className="text-center border-x-2 border-gray-300">
    //         {formatDate(info.createdAt)}
    //       </td>
    //       <td className="text-center border-x-2 border-gray-300">
    //         {info.result} / {info.TotalResult}{" "}
    //       </td>
    //       {info.quizewiseResult?.map((index, indexIdx) => (
    //         <td
    //           key={indexIdx}
    //           className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200"
    //         >
    //           {index.weitage} / {info.quizewiseTotalResult[indexIdx]?.weitage}
    //         </td>
    //       ))}
    //     </tr>
    //   ))}
    // </>
    <tbody className="text-gray-600 text-md font-semibold w-full">
      {sortedData.data?.map((info, ind) => (
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

          <td className="py-3 px-6 text-left">
            {info.result} / {info.TotalResult}{" "}
          </td>
          {info.quizewiseResult?.map((index, indexIdx) => (
            <td key={indexIdx} className="py-3 px-6 text-left">
              {index.weitage} / {info.quizewiseTotalResult[indexIdx]?.weitage}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default Tablebody;
