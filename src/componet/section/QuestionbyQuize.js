// import React, { useState, useEffect } from "react";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";

// function QuestionbyQuize({ setIsLoggedIn }) {
//   const [data, setData] = useState([]);
//   const [quiz, setQuiz] = useState([]);

//   const url = "https://quiz-krishang.vercel.app/questions/getallquestions";

//   useEffect(() => {
//     fetchData();
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
//     } finally {
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full mr-2">
//         <div>
//           <Navbar setIsLoggedIn={setIsLoggedIn} />
//         </div>

//         <div className="w-50 mx-auto mt-5 mb-4">
//           <h1 className="mb-4">Add New Quiz</h1>

//           <div className="mb-3">
//             <label htmlFor="question" className="form-label">
//               Quiz-Name
//             </label>
//             <table>
//               <tbody>
//                 {data.map((info, ind) => (
//                   <tr key={ind} className="border-2 border-slate-500">
//                     {" "}
//                     <td className="px-96 py-3">
//                       <div className="flex items-center">
//                         <div>
//                           <input type="checkbox" className="h-4 w-4" />
//                         </div>
//                         <div className="fw-bold text-xl">{info.question}</div>
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

// export default QuestionbyQuize;
import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function QuestionbyQuize({ setIsLoggedIn }) {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };
  console.log("Selected IDs:", selectedIds);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with selectedIds
    console.log("Selected IDs:", selectedIds);
    // You can now send selectedIds to your API or handle it as needed
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>

        <div className="w-50 mx-auto mt-5 mb-4">
          <h1 className="mb-4">Add New Quiz</h1>

          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Quiz-Name
            </label>
            <table>
              <tbody>
                {data.map((info, ind) => (
                  <tr key={ind} className="border-2 border-slate-500">
                    <td className="px-96 py-3">
                      <div className="flex items-center">
                        <div>
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={selectedIds.includes(info._id)}
                            onChange={() => handleCheckboxChange(info._id)}
                          />
                        </div>
                        <div className="fw-bold text-xl">{info.question}</div>
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
        </div>
      </div>
    </div>
  );
}

export default QuestionbyQuize;
