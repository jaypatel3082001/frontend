import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function QuestionAdd({ setIsLoggedIn }) {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputquedata, setInputquedata] = useState({
    _id: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  useEffect(() => {
    if (location.state && location.state.itemToEdit) {
      setInputquedata(location.state.itemToEdit);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputquedata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createApi = "https://quiz-krishang.vercel.app/questions/create";
    const updateApi = `https://quiz-krishang.vercel.app/questions/update/${inputquedata._id}`;
    try {
      const api = inputquedata._id ? updateApi : createApi;
      const response = await fetch(api, {
        method: inputquedata._id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputquedata),
      });
      setInputquedata({
        _id: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      navigate("/createmain");
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full ">
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
          </div>
          <form className="w-50 mx-auto mt-5 mb-4" onSubmit={handleSubmit}>
            <h1 className="mb-4">Add New Question</h1>

            <div className="mb-3">
              <label htmlFor="question" className="form-label">
                Question
              </label>
              <input
                type="text"
                name="question"
                value={inputquedata.question}
                onChange={handleChange}
                className="form-control"
                placeholder="Question*"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="option1" className="form-label">
                Option 1
              </label>
              <input
                type="text"
                name="option1"
                value={inputquedata.option1}
                onChange={handleChange}
                className="form-control"
                placeholder="Option 1*"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="option2" className="form-label">
                Option 2
              </label>
              <input
                type="text"
                name="option2"
                value={inputquedata.option2}
                onChange={handleChange}
                className="form-control"
                placeholder="Option 2*"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="option3" className="form-label">
                Option 3
              </label>
              <input
                type="text"
                name="option3"
                value={inputquedata.option3}
                onChange={handleChange}
                className="form-control"
                placeholder="Option 3*"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="option4" className="form-label">
                Option 4
              </label>
              <input
                type="text"
                name="option4"
                value={inputquedata.option4}
                onChange={handleChange}
                className="form-control"
                placeholder="Option 4*"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="answer" className="form-label">
                Answer
              </label>
              <select
                name="answer"
                value={inputquedata.answer}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select Answer*</option>
                <option value={inputquedata.option1}>
                  {inputquedata.option1}
                </option>
                <option value={inputquedata.option2}>
                  {inputquedata.option2}
                </option>
                <option value={inputquedata.option3}>
                  {inputquedata.option3}
                </option>
                <option value={inputquedata.option4}>
                  {inputquedata.option4}
                </option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default QuestionAdd;
