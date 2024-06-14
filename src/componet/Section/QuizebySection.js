// import React, { useState, useEffect } from "react";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";
// import { useNavigate, useParams } from "react-router-dom";

// function QuizebySection() {
//   const [data, setData] = useState([]);
//   const { id } = useParams();
//   const [checkedIds, setCheckedIds] = useState([]);
//   const [selectedQuizzes, setSelectedQuizzes] = useState([]);
//   const navigate = useNavigate();
//   const [arrrr, setArrrr] = useState([]);
//   useEffect(() => {
//     fetchData();
//     fetchSectionData();
//   }, []);

//   const [hadcheck, setHadcheck] = useState([
//     data.map((quiz, ind) => checkedIds.includes(quiz._id)),
//   ]);
//   const handleQuestion = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       setSelectedQuizzes((prevSelected) => [...prevSelected, value]);
//     } else {
//       setSelectedQuizzes((prevSelected) =>
//         prevSelected.filter((quizId) => quizId !== value)
//       );
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const awr = arrrr.map((ele) => {
//       const response = fetch(
//         `https://quiz-krishang.vercel.app/section/insertquiz/${id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(ele),
//         }
//       );

//       if (response.ok) {
//         console.log("Submitted successfully");
//       } else {
//         console.error("Submission error");
//       }
//     });
//     navigate(`/Sectionmain/${id}`);
//   };
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full ">
//         <div>
//           <Navbar />
//         </div>
//         <div className="w-50 mx-auto mt-5 mb-4">
//           <h1 className="mb-4">Add New Quiz</h1>
//           <div className="mb-3">
//             <label htmlFor="question" className="form-label">
//               Quiz-Name
//             </label>
//             <table>
//               <tbody>
//                 {data.map((quiz) => (
//                   <tr key={quiz._id} className="border-2 border-slate-500">
//                     <td className="px-96 py-3">
//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="h-4 w-4"
//                           value={quiz._id}

//                           onChange={handleQuestion}
//                         />
//                         <div className="fw-bold text-xl">{quiz.quizename}</div>
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
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizebySection;
import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { useNavigate, useParams } from "react-router-dom";

function QuizebySection() {
  const [data, setData] = useState([]);
  // const { id } = useParams();
  const id = localStorage.getItem("sectionId");
  const [arrrr, setArrrr] = useState([]);
  const navigator = useNavigate();
  const [checkedIds, setCheckedIds] = useState([]);

  const url = "https://quiz-krishang.vercel.app/quize/getall";

  useEffect(() => {
    fetchData();
    fetchSectionData();
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

  const fetchSectionData = async () => {
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
      console.log("cccc", checkedIds);
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
    navigator(`/Sectionmain/Section-quiz-list`);
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
          <div />
        </div>
      </div>
    </div>
  );
}

export default QuizebySection;
