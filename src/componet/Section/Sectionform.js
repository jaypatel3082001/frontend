import React, { useState, useEffect, useCallback, useMemo } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Sectionform({ setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [inputSectiondata, setInputSectiondata] = useState({
    sectionname: "",
    sectionpassingMarks: "",
  });

  useEffect(() => {
    if (location.state && location.state.itemToEdit) {
      setInputSectiondata(location.state.itemToEdit);
    }
  }, [location.state]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputSectiondata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

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

          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(inputSectiondata),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setInputSectiondata({
        sectionname: "",
        sectionpassingMarks: "",
      });

      navigate("/admin/Sectionmain");
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <form className="w-50 mx-auto mt-5 mb-4" onSubmit={handleSubmit}>
          <h1 className="mb-4">Add New Section</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Section-Name
            </label>
            <input
              type="text"
              name="sectionname"
              value={inputSectiondata.sectionname}
              onChange={handleChange}
              className="form-control"
              placeholder="Question*"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Passing Marks
            </label>
            <input
              type="number"
              name="sectionpassingMarks"
              value={inputSectiondata.sectionpassingMarks}
              onChange={handleChange}
              className="form-control"
              placeholder="passing marks"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/admin/Sectionmain" className="ml-4">
            <button type="button" className="btn btn-primary">
              Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Sectionform;
