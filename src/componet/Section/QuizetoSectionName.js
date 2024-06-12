import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useLocation, useNavigate } from "react-router-dom";

function QuizetoSectionName({ setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputSectiondata, setInputSectiondata] = useState({
    sectionName: "",
  });
  useEffect(() => {
    if (location.state && location.state.itemToEdit) {
      setInputSectiondata(location.state.itemToEdit);
    }
  }, [location.state]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputSectiondata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const createApi = "https://quiz-krishang.vercel.app/section/create";
    const updateApi = `https://quiz-krishang.vercel.app/section/update/${inputSectiondata._id}`;
    try {
      const api = inputSectiondata._id ? updateApi : createApi;
      const response = await fetch(api, {
        method: inputSectiondata._id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputSectiondata),
      });
      navigate("/Sectionmain");
      console.log("inputSectiondata", inputSectiondata);
      setInputSectiondata({
        sectionName: "",
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
              QuizetoSectionName
            </label>
            <input
              type="text"
              name="sectionName"
              value={inputSectiondata.sectionName}
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

export default QuizetoSectionName;
