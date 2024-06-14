import React, { useEffect, useState } from "react";
import Navbar from "../fixdata/navbar";
import Sidebar from "../fixdata/sidebar";
import { useParams, Link } from "react-router-dom";
import Quizestart from "./Quizestart";
function Userpage() {
  const [data, setData] = useState([]);

  const [isstart, setIsstart] = useState(false);

  const api = "https://quiz-krishang.vercel.app/section/read";
  // const { id } = useParams();
  const id = localStorage.getItem("sectionId");
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

  const handleQuize = () => {
    setIsstart(true);
  };

  return (
    <div className="flex">
      <div className="h-screen bg-slate-400 w-52  p-4  ">
        <div className="ml-8">
          <div className="sidebar-header flex  items-center  ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="20px"
                width="20px"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <div className="ml-4"> Admin</div>
          </div>
          <div className="mt-8 p-0">
            <div className="m-0 p-0">
              <ul className="">Home</ul>
            </div>
          </div>
        </div>
      </div>
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
          <button className="btn btn-primary mt-3 w-fit" onClick={handleQuize}>
            Start
          </button>
          {isstart === true && <Quizestart id={id} />}
        </div>
      </div>
    </div>
  );
}

export default Userpage;
