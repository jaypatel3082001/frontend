import React, { useEffect, useState } from "react";
import { ReactComponent as Sortbyname } from "../../../svgfile/sortbyname.svg";
import { setCurrentPage } from "../../../reduxfiles/quizredux";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

function Tableheader({ sortOrder, setSortOrder }) {
  const dispatch = useDispatch();
  const url = "https://quiz-krishang.vercel.app/auth/refreshToken";
  const handleSorting = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    dispatch(setCurrentPage(1));
  };
  ///************************************ */
  const authToken = localStorage.getItem("authToken");
  // if (!refreshtoken) return true; // Token doesn't exist

  /////////////////////
  const refreshtoken = localStorage.getItem("rtoken");
  const currentTime = Date.now() / 1000;
  const decodedToken = jwtDecode(authToken);
  const drToken = jwtDecode(refreshtoken);
  console.log(decodedToken.exp, "ds");
  console.log(currentTime, "currentTime");
  const checkAccessToken = async () => {
    const currentTime = Date.now() / 1000;
    const decodedToken = jwtDecode(authToken);
    const drToken = jwtDecode(refreshtoken);
    console.log(decodedToken.exp, "dd");
    console.log(currentTime, "currentTime");
    if (decodedToken.exp < currentTime || !decodedToken.exp) {
      if (!drToken.exp || drToken.exp > currentTime) {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshtoken}`,
            },
          });
          if (response.ok) {
            const result = await response.json();
            localStorage.setItem("authToken", result.token);
          } else {
            console.log("error");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("dr token is expired");
      }
    } else {
      console.log("else");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkAccessToken();
    }, 60000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <thead>
      <tr className="bg-[#8A6FDF]  text-white uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">NUMBER</th>
        <th className="py-3 px-6 text-left">
          {" "}
          <div className="flex  cursor-pointer" onClick={handleSorting}>
            <div> Name</div>
            <div className="ml-2">
              <Sortbyname
                fill="white"
                className={sortOrder === "asc" ? "rotate-180" : ""}
              />
            </div>
          </div>
        </th>
        <th className="py-3 px-6 text-left">KEY</th>
        <th className="py-3 px-6 text-left">CREATED DATE</th>
        <th className="py-3 px-6 text-left">SHOW</th>
        <th className="py-3 px-6 text-left">Download</th>
        <th className="py-3 px-6 ">ACTION</th>
      </tr>
    </thead>
  );
}

export default Tableheader;
