// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";
// import Addquiz from "./addquiz";

// function Sectionmain({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const [quize, setQuize] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const url = "https://quiz-krishang.vercel.app/quize/getall";

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const result = await response.json();
//       setQuize(result);
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(
//         `https://quiz-krishang.vercel.app/quize/delete/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       await response.json();
//       fetchData();
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     }
//   };

//   const handleEditClick = (id) => {
//     const quizeToUpdate = quize.find((quize) => quize._id === id);
//     navigate("/quizform", { state: { itemToEdit: quizeToUpdate } });
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full mr-2">
//         <div>
//           <Navbar setIsLoggedIn={setIsLoggedIn} />
//         </div>
//         <div>
//           <Addquiz />
//         </div>
//         {isLoading ? (
//           <div className="flex align-middle">Loading ...</div>
//         ) : (
//           quize.data?.map((info, ind) => (
//             <div
//               key={ind}
//               className="flex flex-col mx-5 my-5 bg-slate-300 rounded-md p-4"
//             >
//               <div className="flex justify-end">
//                 <div
//                   className="cursor-pointer ml-4"
//                   onClick={() => handleEditClick(info._id)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     height="20px"
//                     width="20px"
//                   >
//                     <path
//                       fill="#ee174c"
//                       d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
//                     />
//                   </svg>
//                 </div>
//                 <div
//                   className="cursor-pointer ml-4"
//                   onClick={() => handleDelete(info._id)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 448 512"
//                     height="20px"
//                     width="20px"
//                   >
//                     <path
//                       fill="#ee174c"
//                       d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <h1 className="fw-bold text-2xl">Add the Quiz</h1>
//               <h1 className="fw-bold text-xl mt-3 mb-4">{info.quizename}</h1>
//               <Link
//                 to={`/Sectionmain/${info._id}`}
//                 className="bg-blue-400 p-2 rounded text-white w-fit"
//               >
//                 Add the {info.quizename} Quiz ❯
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Sectionmain;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import Addquiz from "./addquiz";

function Sectionmain({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [quizes, setQuizes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://quiz-krishang.vercel.app/quize/getall";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setQuizes(result.data || []); // Assuming result.data contains the quizzes array
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://quiz-krishang.vercel.app/quize/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
      fetchData();
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  const handleEditClick = (id) => {
    const quizeToUpdate = quizes.find((quize) => quize._id === id);
    if (quizeToUpdate) {
      navigate("/quizform", { state: { itemToEdit: quizeToUpdate } });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div>
          <Addquiz />
        </div>
        {isLoading ? (
          <div className="flex align-middle">Loading ...</div>
        ) : (
          quizes.map((info, ind) => (
            <div
              key={ind}
              className="flex flex-col mx-5 my-5 bg-slate-300 rounded-md p-4"
            >
              <div className="flex justify-end">
                <div
                  className="cursor-pointer ml-4"
                  onClick={() => handleEditClick(info._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="20px"
                    width="20px"
                  >
                    <path
                      fill="#ee174c"
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                    />
                  </svg>
                </div>
                <div
                  className="cursor-pointer ml-4"
                  onClick={() => handleDelete(info._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="20px"
                    width="20px"
                  >
                    <path
                      fill="#ee174c"
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="fw-bold text-2xl">Add the Quiz</h1>
              <h1 className="fw-bold text-xl mt-3 mb-4">{info.quizename}</h1>
              <Link
                to={`/Sectionmain/${info._id}`}
                className="bg-blue-400 p-2 rounded text-white w-fit"
              >
                Add the {info.quizename} Quiz ❯
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Sectionmain;
