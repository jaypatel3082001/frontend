import React, { useEffect, useRef } from "react";

import { ReactComponent as Popbox } from "../../../svgfile/Popbox.svg";

import Createmainpagination from "../pagination/createmainpagination";

import { useSelector, useDispatch } from "react-redux";
import { setIsloading, setData } from "../../../reduxfiles/quizeSlice";

function Tablebody({ offset }) {
  const url = "https://quiz-krishang.vercel.app/result/getall";

  const inputs = useSelector((state) => state.inputs4);
  const dispatch = useDispatch();
  //************id store */

  const Idstore = (id) => {
    localStorage.setItem("Section", id);
  };

  // ********** data featch ********************
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      dispatch(setIsloading(true));
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      dispatch(setData(result.data));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      dispatch(setIsloading(false));
    }
  };

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
  ) : inputs.Tablemanuplation.sortedData?.data?.length === 0 ? (
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
      {inputs.Tablemanuplation.sortedData?.map((info, ind) => (
        <tr key={info._id} className="border-b border-gray-400">
          <td className="text-center whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300">
            {offset + ind + 1}
          </td>
          <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-64">
            <div className="max-w-full truncate"> {info.section.name}</div>
          </td>

          <td>
            <div className="flex justify-center" onClick={Idstore}>
              <Popbox />
            </div>
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
