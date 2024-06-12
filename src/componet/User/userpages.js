import React, { useEffect, useState } from "react";
import Navbar from "../fixdata/navbar";
import Sidebar from "../fixdata/sidebar";
import { useParams, Link } from "react-router-dom";
function Userpage() {
  const [data, setData] = useState([]);

  const api = "https://quiz-krishang.vercel.app/section/read";
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${api}/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };
  console.log("data", data);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <div>
          <Navbar />
        </div>

        <div className="flex flex-col mx-5 my-5 bg-slate-300 rounded-md p-4">
          <div className="flex justify-end"></div>
          <h1 className="fw-bold text-2xl">Start Exam</h1>
          <h1 className="fw-bold text-xl mt-3 mb-4">
            {data.data?.sectionName}
          </h1>
          <button className="btn btn-primary mt-3 w-fit">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
