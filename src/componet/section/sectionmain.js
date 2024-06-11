import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import Addquiz from "./addquiz";
import { Link } from "react-router-dom";

function Sectionmain({ setIsLoggedIn }) {
  const [quize, setQuize] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://quiz-krishang.vercel.app/quize/getall";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setQuize(result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div>
          <Addquiz />
        </div>
        {isLoading ? (
          <div className="flex align-middle">Loading ...</div>
        ) : (
          quize.data?.map((info, ind) => {
            return (
              <>
                <div
                  key={ind}
                  className="bg-slate-300 py-4 px-9 m-5 rounded-md"
                >
                  <h1 className="fw-bold text-2xl">Add the Quiz</h1>
                  <h1 className="fw-bold text-xl mt-3 mb-4">
                    {" "}
                    {info.quizename}
                  </h1>

                  <Link
                    to={`/Sectionmain/${info._id}`}
                    className=" bg-blue-400 p-2 rounded text-white"
                  >
                    Add the {info.quizename} Quiz ❯
                  </Link>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Sectionmain;
