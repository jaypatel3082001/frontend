import React, { useState } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function Quizform({ setIsLoggedIn }) {
  const [inputquizdata, setInputquizdata] = useState({
    quizename: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputquizdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = "https://quiz-krishang.vercel.app/quize/create";
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputquizdata),
      });
      setInputquizdata({
        quizename: "",
      });
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
      <div className="w-full mr-2">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <form className="w-50 mx-auto mt-5 mb-4" onSubmit={handleSubmit}>
          <h1 className="mb-4">Add New Quiz</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Quiz-Name
            </label>
            <input
              type="text"
              name="quizename"
              value={inputquizdata.quizename}
              onChange={handleChange}
              className="form-control"
              placeholder="Question*"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quizform;
