import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useNavigate, useParams } from "react-router-dom";

function QuestionbyQuize() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [arrrr, setArrrr] = useState([]);
  const navigator=useNavigate()

  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";

  useEffect(() => {
    fetchData();
  }, []);
 console.log("new quize id",id)
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
    }
  };

  const handleQuestion = (e) => {
    const { value, checked } = e.target;
    const ind = parseInt(e.target.getAttribute('data-key'), 10);

    if (checked) {
      // Add item if checked
      setArrrr((prevArrrr) => [
        ...prevArrrr,
        { questionId: value }
      ]);
    } else {
      // Remove item if unchecked
      setArrrr((prevArrrr) => prevArrrr.filter((_, i) => i !== ind));
    }
  };
  console.log("src",arrrr)

  const handleSubmit =  (e) => {
    e.preventDefault();
  const awr=  arrrr.map((ele)=>{
      const response = fetch(`https://quiz-krishang.vercel.app/quize/insert-questions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ele),
      });
  
      if (response.ok) {
        console.log("Submitted successfully");
      } else {
        console.error("Submission error");
      }
    })
    navigator(`/Sectionmain/${id}`)
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar />
        </div>

        {/* <div className="w-50 mx-auto mt-5 mb-4"> */}
          <h1 className="mb-4">Add New Quiz</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Quiz-Name
            </label>
            <table>
              <tbody>
                {data.map((info, ind) => (
                  <tr key={ind} className="border-2 border-slate-500">
                    <td className="px-96 py-3">
                      <div className="flex items-center">
                        <div>
                          <input type="checkbox" className="h-4 w-4" value={info._id} data-key={ind} onChange={handleQuestion} />
                        </div>
                        <div className="fw-bold text-xl">{info.question}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button  className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default QuestionbyQuize;
