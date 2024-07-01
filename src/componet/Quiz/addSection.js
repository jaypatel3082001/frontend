// import React, { useState, useEffect, useMemo, useCallback } from "react";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";
// import { Link, useNavigate } from "react-router-dom";

// function QuizebySection() {
//   const [data, setData] = useState([]);
//   const id = localStorage.getItem("sectionId");
//   const [arrrr, setArrrr] = useState([]);
//   const navigator = useNavigate();
//   const [checkedIds, setCheckedIds] = useState([]);
//   const url = "https://quiz-krishang.vercel.app/quize/getall";

//   useEffect(() => {
//     fetchData();
//     fetchSectionData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     }
//   };

//   const fetchSectionData = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `https://quiz-krishang.vercel.app/section/read/${id}`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const result = await response.json();
//       setCheckedIds(result.data.sectioninfo.map((question) => question._id));
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     }
//   }, [id]);

//   const hadcheck = useMemo(() => {
//     return data.data?.map((quiz, ind) => checkedIds.includes(quiz._id));
//   }, [data.data, checkedIds]);

//   const handleQuestion = useCallback((e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setArrrr((prevArrrr) => [...prevArrrr, { quizeId: value }]);
//     } else {
//       setArrrr((prevArrrr) =>
//         prevArrrr.filter((item) => item.quizeId !== value)
//       );
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     arrrr.forEach((ele) => {
//       fetch(`https://quiz-krishang.vercel.app/section/insertquiz/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(ele),
//       });
//     });
//     navigator(`/Sectionmain`);
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full">
//         <Navbar />
//         <div className="w-50 mx-auto mt-5 mb-4">
//           <h1 className="mb-4">Add New Quiz</h1>
//           <div className="mb-3">
//             <table>
//               <tbody>
//                 {data.data?.map((info, ind) => (
//                   <tr key={ind} className="border-2 border-slate-500">
//                     <td className="px-96 py-3">
//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="h-4 w-4"
//                           value={info._id}
//                           checked={
//                             checkedIds.includes(info._id) || hadcheck[ind]
//                           }
//                           onChange={handleQuestion}
//                         />
//                         <div className="fw-bold text-xl ml-2">
//                           {info.quizename}
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <button className="btn btn-primary" onClick={handleSubmit}>
//             Submit
//           </button>
//           <Link to="/sectionmain">
//             <button className="btn btn-primary ml-4">Cancel</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizebySection;
import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddSection() {
  const [data, setData] = useState([]);
  // const { id } = useParams();
  const id = localStorage.getItem("sectionId");
  const [arrrr, setArrrr] = useState([]);
  const navigator = useNavigate();
  const [checkedIds, setCheckedIds] = useState([]);

  const url = "https://quiz-krishang.vercel.app/quize/getall";

  useEffect(() => {
    fetchData();
    fetchQuizData();
  }, []);
  console.log("new quize id", id);
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

  const fetchQuizData = async () => {
    try {
      const response = await fetch(
        `https://quiz-krishang.vercel.app/section/read/${id}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("result", result);

      setCheckedIds(result.data.sectioninfo.map((question) => question._id));
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };
  const [hadcheck, setHadcheck] = useState([
    data.data?.map((quiz, ind) => checkedIds.includes(quiz._id)),
  ]);
  const handleQuestion = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add item if checked
      setArrrr((prevArrrr) => [...prevArrrr, { quizeId: value }]);
    } else {
      // Remove item if unchecked
      setArrrr((prevArrrr) =>
        prevArrrr.filter((item) => item.quizeId !== value)
      );
    }
  };

  console.log("srgc", arrrr);

  const handleSubmit = (e) => {
    e.preventDefault();
    const awr = arrrr.map((ele) => {
      const response = fetch(
        `https://quiz-krishang.vercel.app/section/insertquiz/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ele),
        }
      );

      if (response.ok) {
        console.log("Submitted successfully");
      } else {
        console.error("Submission error");
      }
    });
    navigator(`/Quizemain`);
  };
  console.log("this is data   k", data);

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
            <table>
              <tbody>
                {data.data?.map((info, ind) => (
                  <tr key={ind} className="border-2 border-slate-500">
                    <td className="px-96 py-3">
                      <div className="flex items-center">
                        <div>
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            value={info._id}
                            data-key={ind}
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
                        <div className="fw-bold text-xl">{info.quizename}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <Link to="/Quizemain">
            <button className="btn btn-primary ml-4" onClick={handleSubmit}>
              Back
            </button>
          </Link>
          <div />
        </div>
      </div>
    </div>
  );
}

export default AddSection;
