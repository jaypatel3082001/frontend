import React, { useEffect, useCallback, useRef } from "react";
import { ReactComponent as Option } from "../../../svgfile/option.svg";
import { ReactComponent as Popbox } from "../../../svgfile/Popbox.svg";
import { ReactComponent as Upboxuparrow } from "../../../svgfile/boxuparrow.svg";
import { ReactComponent as Key } from "../../../svgfile/key.svg";
import Createmainpagination from "../pagination/createmainpagination";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setIdstores,
  setIdstore,
  setDisplay,
  setIsloading,
  setData,
  setCurrentPage,
  toggleModal,
  toggleModalkey,
  setIdkeystores,
  setKeyData,
} from "../../../reduxfiles/quizredux";

function Tablebody({ formatDate, offset, showQuestion }) {
  const url = "https://quiz-krishang.vercel.app/section/read";
  const navigate = useNavigate();
  const inputs = useSelector((state) => state.inputs3);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      dispatch(setData(result.data));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
    }
  }, [dispatch, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const handleShowkey = useCallback(
  //   async (id) => {
  //     dispatch(setIdkeystores({ sectionId: `${id}` }));

  //     try {
  //       const response = await fetch(
  //         "https://quiz-krishang.vercel.app/key/generatekey",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             sectionId: `${id}`,
  //           }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }

  //     dispatch(toggleModalkey(!inputs.keyopenpop));
  //     localStorage.setItem("keyQuizeId", id);
  //   },
  //   [dispatch, inputs.keyopenpop]
  // );
  const handleShowkey = useCallback(
    async (id) => {
      dispatch(setIdkeystores(id));
      localStorage.setItem("keyQuizeId", id);
      dispatch(toggleModalkey(!inputs.keyopenpop));
    },
    [dispatch, inputs.keyopenpop]
  );
  const handleEditClick = useCallback(
    (id) => {
      const sectionToUpdate = inputs.Tablemanuplation.data.find(
        (section) => section._id === id
      );
      navigate("/AddQuiz", {
        state: { itemToEdit: sectionToUpdate },
      });
    },
    [inputs.Tablemanuplation.data, navigate]
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `https://quiz-krishang.vercel.app/section/delete/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        await response.json();
        fetchData();
        dispatch(setCurrentPage(1));
      } catch (error) {
        console.error("Fetch operation error:", error);
      }
      navigate(0);
    },
    [fetchData, dispatch]
  );

  const handleClicktd = useCallback(
    (id) => {
      dispatch(setDisplay(!inputs.Tablemanuplation.display));
      dispatch(setIdstore(id));
    },
    [dispatch, inputs.Tablemanuplation.display]
  );

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

  return inputs?.Tablemanuplation?.isLoading ? (
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
  ) : inputs?.Tablemanuplation?.sortedData?.data?.length === 0 ? (
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
    // <tbody className="text-black font-semibold ">
    //   {inputs?.Tablemanuplation?.sortedData?.data?.map((info, ind) => (
    //     <tr key={info._id} className="border-b border-gray-400">
    //       <td className="text-center whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300">
    //         {offset + ind + 1}
    //       </td>
    //       <td className="py-3 px-6 text-left hover:bg-gray-200 border-x-2 border-gray-300 max-w-64">
    //         <div className="max-w-full truncate"> {info.sectionName}</div>
    //       </td>
    //       <td className="hover:bg-gray-200 cursor-pointer border-x-2 border-gray-300">
    //         <div
    //           className="flex justify-center "
    //           onClick={() => handleShowkey(info._id)}
    //         >
    //           <Key />
    //         </div>
    //       </td>
    //       <td className="text-center border-x-2 border-gray-300 hover:bg-gray-200">
    //         {formatDate(info.createdAt)}
    //       </td>
    //       <td
    //         className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200"
    //         onClick={() => showQuestion(info._id)}
    //       >
    //         <div className="flex justify-center">
    //           <Popbox />
    //         </div>
    //       </td>
    //       <td
    //         className="text-center cursor-pointer border-x-2 border-gray-300 hover:bg-gray-200 relative"
    //         onClick={() => handleClicktd(info._id)}
    //       >
    //         <div className="flex justify-center">
    //           <Option />
    //         </div>
    //         {inputs?.Tablemanuplation?.display &&
    //           inputs?.Tablemanuplation?.idstore === info._id && (
    //             <div
    //               ref={calendarRef}
    //               role="tooltip"
    //               className="absolute shadow show popover bs-popover-bottom bg-white border rounded"
    //               style={{
    //                 top: "100%",
    //                 left: "46%",
    //                 transform: "translateX(-50%)",
    //               }}
    //             >
    //               <div
    //                 className="popover-arrow"
    //                 style={{
    //                   position: "absolute",
    //                   top: "-8px",
    //                   left: "50%",
    //                   transform: "translateX(-50%)",
    //                 }}
    //               >
    //                 <Upboxuparrow />
    //               </div>
    //               <div className="d-flex flex-column p-2 popover-body">
    //                 <ul className="action-menu-list space-y-2">
    //                   <li
    //                     className="cursor-pointer hover:bg-gray-200 p-1 rounded"
    //                     onClick={() => handleEditClick(info._id)}
    //                   >
    //                     Edit
    //                   </li>
    //                   <li
    //                     className="cursor-pointer hover:bg-gray-200 p-1 rounded"
    //                     onClick={() => handleDelete(info._id)}
    //                   >
    //                     Delete
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           )}
    //       </td>
    //     </tr>
    //   ))}
    //   <tr className="bg-gray-200">
    //     <td></td>
    //     <div className="flex justify-center ">
    //       <Createmainpagination />
    //     </div>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //   </tr>
    // </tbody>
    <tbody className="text-gray-600 text-md font-semibold w-full">
      {inputs?.Tablemanuplation?.sortedData?.data?.map((info, ind) => (
        <tr
          key={ind}
          className="border-b border-gray-200 hover:bg-gray-200 w-full"
        >
          <td className="py-3 px-6 text-left flex items-center">
            {offset + ind + 1}
          </td>
          <td className="py-3 px-6 text-left">{info.sectionName}</td>
          <td className="py-3 px-6 text-left">
            <div className=" " onClick={() => handleShowkey(info._id)}>
              <Key />
            </div>
          </td>

          <td className="py-3 px-6 text-left">{formatDate(info.createdAt)}</td>

          <td className="py-3 px-6 text-left">
            <button
              className="text-blue-600 hover:text-blue-900"
              onClick={() => showQuestion(info._id)}
            >
              <div className="flex justify-center">
                <Popbox />
              </div>
            </button>
          </td>
          <td className="relative">
            <button
              className="ml-4 text-blue-600 hover:text-blue-900"
              onClick={() => handleClicktd(info._id)}
            >
              <div className="flex justify-center">
                <Option />
              </div>
            </button>

            {inputs.Tablemanuplation.display &&
              inputs.Tablemanuplation.idstore === info._id && (
                <div
                  ref={calendarRef}
                  role="tooltip"
                  className="absolute shadow-lg show bg-blue-400 z-10 border rounded   popover bs-popover-bottom "
                  style={{
                    top: "80%",
                    left: "54%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Upboxuparrow />
                  </div>
                  <div className="flex flex-col p-2">
                    <ul className="space-y-2">
                      <li
                        className="cursor-pointer hover:bg-blue-300 p-1 rounded text-black font-bold"
                        onClick={() => handleEditClick(info._id)}
                      >
                        Edit
                      </li>
                      <li
                        className="cursor-pointer hover:bg-blue-300 p-1 rounded text-black font-bold"
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
    </tbody>
  );
}

export default Tablebody;
