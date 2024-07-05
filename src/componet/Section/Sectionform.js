import React, { useState, useEffect, useCallback, useMemo } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Sectionform({ setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputSectiondata, setInputSectiondata] = useState({
    quizename: "",
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
    const createApi = "https://quiz-krishang.vercel.app/quize/create";
    const updateApi = `https://quiz-krishang.vercel.app/quize/update/${inputSectiondata._id}`;

    try {
      const api = inputSectiondata._id ? updateApi : createApi;
      const response = await fetch(api, {
        method: inputSectiondata._id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputSectiondata),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setInputSectiondata({
        quizename: "",
      });

      navigate("/Sectionmain");
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  const memoizedEndpoints = useMemo(
    () => ({
      createApi: "https://quiz-krishang.vercel.app/quize/create",
      updateApi: `https://quiz-krishang.vercel.app/quize/update/${inputSectiondata._id}`,
    }),
    [inputSectiondata._id]
  );

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
              name="quizename"
              value={inputSectiondata.quizename}
              onChange={handleChange}
              className="form-control"
              placeholder="Question*"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/Sectionmain" className="ml-4">
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
