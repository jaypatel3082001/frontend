import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function QuizetoGroup({ setIsLoggedIn }) {
  const [data, setData] = useState([]);

  const url = "https://quiz-krishang.vercel.app/quize/getall";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <form className="w-50 mx-auto mt-5 mb-4">
          <h1 className="mb-4">Group select</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Group Name
            </label>
            <input
              type="text"
              name="groupname"
              className="form-control"
              placeholder="Enter your Group Name"
              required
            />
          </div>
          {data.data?.map((info, ind) => (
            <tr key={ind} className="border-2 border-slate-500">
              <td className="px-96 py-3">
                <div className="flex items-center">
                  <div>
                    <input type="checkbox" className="h-4 w-4" />
                  </div>
                  <div className="fw-bold text-xl">{info.quizename}</div>
                </div>
              </td>
            </tr>
          ))}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuizetoGroup;
