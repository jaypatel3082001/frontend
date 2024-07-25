import React, { useEffect, useCallback, useRef } from "react";
import { ReactComponent as Option } from "../../svgfile/option.svg";
import { ReactComponent as Upboxuparrow } from "../../svgfile/boxuparrow.svg";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { setIdstore, setDisplay, setCurrentPage } from "../../reduxfiles/Admin";

function Tablebody({ formatDate, offset }) {
  const navigate = useNavigate();
  const inputs = useSelector((state) => state.inputs6);
  const dispatch = useDispatch();
  const token = localStorage.getItem("authToken");
  const decoded = jwtDecode(token);
  console.log("decoded", decoded);

  const handleAdmin = async (email) => {
    const api = `https://quiz-krishang.vercel.app/auth/AdminAccess/${decoded.user}`;
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: `${email}` }),
      });
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
    navigate(0);
  };
  const handleDelete = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `https://quiz-krishang.vercel.app/quiz/delete/${id}`,
          {
            method: "DELETE",

            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        await response.json();

        dispatch(setCurrentPage(1));
      } catch (error) {
        console.error("Fetch operation error:", error);
      }
      navigate(0);
    },
    [dispatch]
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
          colSpan="7"
          className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
        >
          Loading ...
        </td>
      </tr>
    </tbody>
  ) : inputs?.Tablemanuplation?.sortedData?.length === 0 ? (
    <tbody>
      <tr className="border-b border-gray-400">
        <td
          colSpan="7"
          className="text-center font-bold p-3 whitespace-nowrap hover:bg-gray-200 border-x-2 border-gray-300"
        >
          No data found
        </td>
      </tr>
    </tbody>
  ) : (
    <tbody className="text-gray-600 text-md font-semibold w-full">
      {inputs?.Tablemanuplation?.sortedData?.map((info, ind) => (
        <tr
          key={ind}
          className={`border-b border-gray-200 hover:bg-gray-200 w-full ${
            ind % 2 !== 0 ? "bg-[#FAF5FF]" : "bg-slate-50"
          }`}
        >
          <td className="py-3 px-6 text-left flex items-center">
            {offset + ind + 1}
          </td>
          <td className="py-3 px-6 text-left">{info.username}</td>
          <td className="py-3 px-6 text-left">{info.email}</td>
          <td className="py-3 px-6 text-left">{formatDate(info.createdAt)}</td>
          <td className="py-3 px-6 text-left">{info.role}</td>
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
                  className="absolute shadow-lg show bg-blue-400 z-10 border rounded popover bs-popover-bottom"
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
                      {info.role === "User" ? (
                        <li
                          className="cursor-pointer hover:bg-blue-300 p-1 rounded text-black font-bold"
                          onClick={() => handleAdmin(info.email)}
                        >
                          Admin
                        </li>
                      ) : (
                        <li
                          className="cursor-pointer hover:bg-blue-300 p-1 rounded text-black font-bold"
                          onClick={() => handleAdmin(info.email)}
                        >
                          Remove
                        </li>
                      )}
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
