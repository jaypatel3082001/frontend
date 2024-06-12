// import React, { useState, useEffect } from "react";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";
// import Addquiz from "./addquiz";
// import { useNavigate, useLocation, useParams } from "react-router-dom";

// function Createmain() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [data, setData] = useState([]);
//   const [inputdata, setInputdata] = useState({});
//   const url = "https://quiz-krishang.vercel.app/questions/getallquestions";
//   const [isLoading, setIsLoading] = useState(false);

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

//       setData(result);
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`${url}/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       await response.json();
//       fetchData();
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     }
//   };
//   // const handleEditClick = async (id) => {
//   //   const itemToEdit = data.find((item) => item.id === id);
//   //   console.log("aaa", itemToEdit);
//   //   setData(itemToEdit);

//   //   navigate("/questionadd", { state: { itemToEdit } });
//   // };

//   const handleEditClick = async (id) => {
//     try {
//       // Find the index of the question in the data array
//       const index = data.findIndex((question) => question.id === id);
//       // Get the question object to update
//       const questionToUpdate = { ...data[index] };

//       // Fetch the question data from the server using its ID
//       const response = await fetch(
//         `https://quiz-krishang.vercel.app/questions/${id}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch question data");
//       }

//       // Parse the response JSON to get the updated question data
//       const updatedQuestion = await response.json();

//       // Populate the form fields with the fetched data
//       setata({
//         id: updatedQuestion.id, // Assuming there's an ID field in your form data
//         question: updatedQuestion.question,
//         option1: updatedQuestion.option1,
//         option2: updatedQuestion.option2,
//         option3: updatedQuestion.option3,
//         option4: updatedQuestion.option4,
//         answer: updatedQuestion.answer,
//       });

//       // Redirect the user to the page where they can edit the question
//       navigate("/questionadd", { state: { itemToEdit: questionToUpdate } });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="flex">
//         <Sidebar />
//         <div className="w-full  bg-white-200">
//           <div>
//             <Navbar />
//           </div>
//           <div>
//             <Addquiz />
//           </div>
//           {isLoading ? (
//             <div>Loading ...</div>
//           ) : (
//             data.map((info, ind) => (
//               <div key={info.id} className="border-red-600 m-10">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h1 className="text-3xl mb-2 font-bold">
//                       Question {ind + 1}
//                     </h1>
//                   </div>
//                   <div className="flex">
//                     <div
//                       // value={info.id}
//                       className="cursor-pointer ml-4"
//                       onClick={() => handleEditClick(info._id)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 512 512"
//                         height="20px"
//                         width="20px"
//                       >
//                         <path
//                           fill="#ee174c"
//                           d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
//                         />
//                       </svg>
//                     </div>
//                     <div
//                       className="cursor-pointer ml-4"
//                       onClick={() => handleDelete(info.id)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 448 512"
//                         height="20px"
//                         width="20px"
//                       >
//                         <path
//                           fill="#ee174c"
//                           d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bottom-1 border-2 py-3 font-bold text-xl pl-2">
//                   {info.question}
//                 </div>
//                 <div>
//                   <div className="bottom-1 border-2 p-2">
//                     <input type="radio" name={`option${ind}`} />
//                     <span className="ml-2 text-xl">{info.option1}</span>
//                   </div>
//                   <div className="bottom-1 border-2 p-2">
//                     <input type="radio" name={`option${ind}`} />
//                     <span className="ml-2 text-xl">{info.option2}</span>
//                   </div>
//                   <div className="bottom-1 border-2 p-2">
//                     <input type="radio" name={`option${ind}`} />
//                     <span className="ml-2 text-xl">{info.option3}</span>
//                   </div>
//                   <div className="bottom-1 border-2 p-2">
//                     <input type="radio" name={`option${ind}`} />
//                     <span className="ml-2 text-xl">{info.option4}</span>
//                   </div>
//                   <div className="bottom-1 border-2 p-2">
//                     <span className="ml-2 text-xl">Answer:-{info.answer}</span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Createmain;
import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import Addquiz from "./addquestion";
import { useNavigate } from "react-router-dom";

function Createmain({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://quiz-krishang.vercel.app/questions/getallquestions";

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
      setData(result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://quiz-krishang.vercel.app/questions/delete/${id}`,
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
    const questionToUpdate = data.find((question) => question._id === id);
    navigate("/questionadd", { state: { itemToEdit: questionToUpdate } });
  };

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full  bg-white-200">
          <div>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
          </div>
          <div>
            <Addquiz />
          </div>
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            data.map((info, ind) => (
              <div key={info._id} className="border-red-600 m-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl mb-2 font-bold">
                      Question {ind + 1}
                    </h1>
                  </div>
                  <div className="flex">
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
                </div>
                <div className="bottom-1 border-2 py-3 font-bold text-xl pl-2">
                  {info.question}
                </div>
                <div>
                  <div className="bottom-1 border-2 p-2">
                    <input type="radio" name={`option${ind}`} />
                    <span className="ml-2 text-xl">{info.option1}</span>
                  </div>
                  <div className="bottom-1 border-2 p-2">
                    <input type="radio" name={`option${ind}`} />
                    <span className="ml-2 text-xl">{info.option2}</span>
                  </div>
                  <div className="bottom-1 border-2 p-2">
                    <input type="radio" name={`option${ind}`} />
                    <span className="ml-2 text-xl">{info.option3}</span>
                  </div>
                  <div className="bottom-1 border-2 p-2">
                    <input type="radio" name={`option${ind}`} />
                    <span className="ml-2 text-xl">{info.option4}</span>
                  </div>
                  <div className="bottom-1 border-2 p-2">
                    <span className="ml-2 text-xl">Answer:-{info.answer}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Createmain;
