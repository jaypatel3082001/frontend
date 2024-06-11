import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function QuestionbyQuize() {
  const [data, setData] = useState([]);

  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";

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
          <Navbar />
        </div>

        <form className="w-50 mx-auto mt-5 mb-4">
          <h1 className="mb-4">Add New Quiz</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Quiz-Name
            </label>
            <table>
              <tbody>
                {data.map((info, ind) => (
                  <tr key={ind} className="border-2 border-slate-500">
                    {" "}
                    <td className="px-96 py-3">
                      <div className="flex items-center">
                        <div>
                          <input type="checkbox" className="h-4 w-4" />
                        </div>
                        <div className="fw-bold text-xl">{info.question}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionbyQuize;
