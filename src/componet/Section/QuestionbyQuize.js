import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  sectionaddquestionread,
  sectionallquestionread,
  sectioninsertquestion,
} from "../../services/get";

function QuestionbyQuize() {
  const [data, setData] = useState([]);

  // const { id } = useParams();
  const id = localStorage.getItem("ShowsectionId");
  const [arrrr, setArrrr] = useState([]);
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  useEffect(() => {
    fetchData();
    fetchApiData();
  }, []);
  const fetchData = async () => {
    try {
      // setIsLoading(true);

      const response = await sectionallquestionread();

      setData(response?.data);
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };
  const fetchApiData = async () => {
    try {
      console.log("response");
      const response = await sectionaddquestionread(id);

      setCheckedIds(response.data.sectionmcqs.map((question) => question._id));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const awr = arrrr.map((ele) => {
      const response = sectioninsertquestion(id, ele);
      navigator(`/admin/Sectionmain`);
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
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
                          <div className="fw-bold text-xl">
                            {" "}
                            {info.question?.length <= 40
                              ? info.question
                              : `${info.question?.substring(0, 40)}.....`}
                          </div>
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
          <Link to="/admin/Sectionmain">
            <button className="btn btn-primary ml-3">Back</button>
          </Link>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default QuestionbyQuize;
