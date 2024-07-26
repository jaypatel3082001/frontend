import React, { useState, useEffect, useCallback, useMemo } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { updatesection } from "../../services/update";
import { createsection } from "../../services/create";

function Sectionform({ setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const intialdata = {
    sectionname: "",
    sectionpassingMarks: "",
  };
  const [inputSectiondata, setInputSectiondata] = useState(intialdata);
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
    try {
      const response = inputSectiondata._id
        ? await updatesection(inputSectiondata._id, inputSectiondata)
        : await createsection(inputSectiondata);

      if (!response.status) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setInputSectiondata(intialdata);
      navigate("/admin/Sectionmain");
    } catch (error) {
      console.log("Fetch operation error:", error);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <div className="">
          <form
            className="w-full max-w-md mx-auto mt-5 mb-4 p-8 bg-white shadow-lg rounded-lg "
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold   my-5">Add New Section</h1>
            <div className="mb-5">
              <label
                htmlFor="sectionname"
                className="block text-sm font-medium text-gray-700"
              >
                Section Name
              </label>
              <input
                type="text"
                name="sectionname"
                value={inputSectiondata.sectionname}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Section Name*"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sectionpassingMarks"
                className="block text-sm font-medium text-gray-700"
              >
                Passing Marks
              </label>
              <input
                type="number"
                name="sectionpassingMarks"
                value={inputSectiondata.sectionpassingMarks}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Passing Marks"
                required
              />
            </div>
            <div className="flex justify-between">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/admin/Sectionmain" className="ml-4">
                <button type="button" className="btn btn-secondary">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sectionform;
