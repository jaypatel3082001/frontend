import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createquiz } from "../../services/create";
import { updatequiz } from "../../services/update";

function AddQuiz({ setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const initialdata = {
    quizName: "",
    totalTime: "",
    PassingMarks: "",
  };
  const [inputQuizdata, setInputQuizdata] = useState(initialdata);
  useEffect(() => {
    if (location.state && location.state.itemToEdit) {
      setInputQuizdata(location.state.itemToEdit);
    }
  }, [location.state]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputQuizdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = inputQuizdata._id
        ? await updatequiz(inputQuizdata._id, inputQuizdata)
        : await createquiz(inputQuizdata);
      if (!response.status) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      navigate("/admin/Quizemain");
      setInputQuizdata(initialdata);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <form className="w-50 mx-auto mt-5 mb-4" onSubmit={handleSubmit}>
          <h1 className="mb-4">Add New Quiz</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              QuizName
            </label>
            <input
              type="text"
              name="quizName"
              value={inputQuizdata.quizName}
              onChange={handleChange}
              className="form-control"
              placeholder="Quiz*"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="totalTime" className="form-label">
              Exam Time
            </label>
            <input
              type="number"
              name="totalTime"
              value={inputQuizdata.totalTime}
              onChange={handleChange}
              className="form-control"
              placeholder="Exam Time"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="PassingMarks" className="form-label">
              Passing Marks
            </label>
            <input
              type="number"
              name="PassingMarks"
              value={inputQuizdata.PassingMarks}
              onChange={handleChange}
              className="form-control"
              placeholder="  Passing Marks "
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/admin/Quizemain">
            <button className="btn btn-primary ml-4">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddQuiz;
