// import React, { useState, useEffect, useMemo, useCallback } from "react";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// function QuizetoSectionName({ setIsLoggedIn }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [inputSectiondata, setInputSectiondata] = useState(() => ({
//     sectionName: "",
//     _id: location.state?.itemToEdit?._id || "",
//   }));

//   useEffect(() => {
//     if (location.state && location.state.itemToEdit) {
//       setInputSectiondata(location.state.itemToEdit);
//     }
//   }, [location.state]);

//   const handleChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setInputSectiondata((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }, []);

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       const createApi = "https://quiz-krishang.vercel.app/section/create";
//       const updateApi = `https://quiz-krishang.vercel.app/section/update/${inputSectiondata._id}`;

//       try {
//         const api = inputSectiondata._id ? updateApi : createApi;
//         const response = await fetch(api, {
//           method: inputSectiondata._id ? "PUT" : "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(inputSectiondata),
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         navigate("/Sectionmain");
//         setInputSectiondata({
//           sectionName: "",
//         });
//       } catch (error) {
//         console.error("Fetch operation error:", error);
//       }
//     },
//     [inputSectiondata._id, navigate]
//   );

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full">
//         <Navbar setIsLoggedIn={setIsLoggedIn} />
//         <form className="w-50 mx-auto mt-5 mb-4" onSubmit={handleSubmit}>
//           <h1 className="mb-4">Add New Section</h1>
//           <div className="mb-3">
//             <label htmlFor="sectionName" className="form-label">
//               Section Name
//             </label>
//             <input
//               type="text"
//               name="sectionName"
//               value={inputSectiondata.sectionName}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="Section Name"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//           <Link to="/Sectionmain">
//             <button className="btn btn-primary ml-4">Back</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default QuizetoSectionName;
import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

function AddQuiz({ setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputQuizdata, setInputQuizdata] = useState({
    sectionName: "",
  });
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
    const createApi = "https://quiz-krishang.vercel.app/section/create";
    const updateApi = `https://quiz-krishang.vercel.app/section/update/${inputQuizdata._id}`;
    try {
      const api = inputQuizdata._id ? updateApi : createApi;
      const response = await fetch(api, {
        method: inputQuizdata._id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputQuizdata),
      });
      navigate("/Quizemain");
      console.log("inputQuizdata", inputQuizdata);
      setInputQuizdata({
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
              name="sectionName"
              value={inputQuizdata.sectionName}
              onChange={handleChange}
              className="form-control"
              placeholder="Quiz*"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/Quizemain">
            <button className="btn btn-primary ml-4">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddQuiz;
