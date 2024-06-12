import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useNavigate, useParams } from "react-router-dom";

function QuestionbyQuize() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [arrrr, setArrrr] = useState([]);
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);

  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";
  const api = `https://quiz-krishang.vercel.app/quize/read/${id}`;
  useEffect(() => {
    fetchData();
    fetchApiData();
  }, []);
  console.log("new quize id", id);
  const fetchData = async () => {
    try {
      //  setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };
  const fetchApiData = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setCheckedIds(result.quizemcqs.map((question) => question._id));
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };
  const [hadcheck, setHadcheck] = useState([
    data.map((info, ind) => checkedIds.includes(info._id)),
  ]);
  const handleQuestion = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setArrrr((prevArrrr) => [...prevArrrr, { questionId: value }]);
    } else {
      setArrrr((prevArrrr) =>
        prevArrrr.filter((item) => item.questionId !== value)
      );
    }
  };

  console.log("src", arrrr);

  const handleSubmit = (e) => {
    e.preventDefault();
    const awr = arrrr.map((ele) => {
      const response = fetch(
        `https://quiz-krishang.vercel.app/quize/insert-questions/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ele),
        }
      );

      if (response.ok) {
        console.log("Submitted successfully");
      } else {
        console.error("Submission error");
      }
    });
    navigator(`/Quizmain/${id}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar />
        </div>

        <div className="w-50 mx-auto mt-5 mb-4">
          <h1 className="mb-4">Add New Quiz</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Quiz-Name
            </label>
            <table>
              <tbody>
                {isLoading ? (
                  <div className="flex align-middle">Loading ...</div>
                ) : (
                  data.map((info, ind) => (
                    <tr key={ind} className="border-2 border-slate-500">
                      <td className="px-96 py-3">
                        <div className="flex items-center">
                          <div>
                            <input
                              type="checkbox"
                              className="h-4 w-4 "
                              value={info._id}
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
                          <div className="fw-bold text-xl">{info.question}</div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default QuestionbyQuize;
