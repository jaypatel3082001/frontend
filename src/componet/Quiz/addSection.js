import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  quizaddsectionread,
  quizallsectionread,
  quizinsertsectionread,
} from "../../services/get";

function AddSection() {
  const [data, setData] = useState([]);

  const id = localStorage.getItem("QuizeId");
  const [arrrr, setArrrr] = useState([]);
  const navigator = useNavigate();
  const [checkedIds, setCheckedIds] = useState([]);

  useEffect(() => {
    fetchData();
    fetchQuizData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await quizallsectionread();

      setData(response.data);
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  const fetchQuizData = async () => {
    try {
      const response = await quizaddsectionread(id);

      setCheckedIds(
        response.data.data.quizinfo.map((question) => question._id)
      );
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };
  const [hadcheck, setHadcheck] = useState([
    data.data?.map((quiz, ind) => checkedIds.includes(quiz._id)),
  ]);
  const handleQuestion = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add item if checked
      setArrrr((prevArrrr) => [...prevArrrr, { sectionId: value }]);
    } else {
      // Remove item if unchecked
      setArrrr((prevArrrr) =>
        prevArrrr.filter((item) => item.sectionId !== value)
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const awr = arrrr.map((ele) => {
      const response = quizinsertsectionread(id, ele);
    });
    navigator(`/admin/Quizemain`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <div>
          <Navbar />
        </div>

        <div className="w-50 mx-auto mt-5 mb-4">
          <h1 className="mb-4">Add New Section</h1>

          <div className="mb-3">
            <table>
              <tbody>
                {data.data?.map((info, ind) => (
                  <tr key={ind} className="border-2 border-slate-500">
                    <td className="px-96 py-3">
                      <div className="flex items-center">
                        <div>
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            value={info._id}
                            data-key={ind}
                            checked={
                              checkedIds.includes(info._id)
                                ? checkedIds.includes(info._id)
                                : hadcheck.data?.map((ele) => {
                                    return ele;
                                  })
                            }
                            onChange={handleQuestion}
                          />
                        </div>
                        <div className="fw-bold text-xl">
                          {info.sectionname}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <Link to="/admin/Quizemain">
            <button className="btn btn-primary ml-4" onClick={handleSubmit}>
              Back
            </button>
          </Link>
          <div />
        </div>
      </div>
    </div>
  );
}

export default AddSection;
