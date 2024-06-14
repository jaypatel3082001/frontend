// import React, { useState, useEffect } from "react";

// function Quizestart({ id }) {
//   const [data, setData] = useState([]);
//   const [coutn, setCoutn] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   const [arrrr, setArrrr] = useState([]);

//   const url = `https://quiz-krishang.vercel.app/section/getall/${id}`;

//   useEffect(() => {
//     fetchData();
//     fetchDatas();
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
//       console.log("aaa", data);
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   console.log("ggggggggg", data);
//   // const randomArray = (array) => {
//   //   let randomedArray = array.slice();
//   //   for (let i = randomedArray.length - 1; i > 0; i--) {
//   //     const j = Math.floor(Math.random() * (i + 1));
//   //     [randomedArray[i], randomedArray[j]] = [
//   //       randomedArray[j],
//   //       randomedArray[i],
//   //     ];
//   //   }
//   //   return randomedArray;
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await fetch(
//   //       "https://quiz-krishang.vercel.app/result/create/66669a840ab0fa8918321786",
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(arrrr),
//   //       }
//   //     );

//   //     if (response.ok) {
//   //       console.log("Submitted successfully");
//   //     } else {
//   //       console.error("Submission error");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during submission", error);
//   //   }
//   // };

//   const fetchDatas = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(
//         "https://quiz-krishang.vercel.app/result/create/66669a840ab0fa8918321786"
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       setData(result);
//       console.log("Fetched data:", result);
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "https://quiz-krishang.vercel.app/result/create/66669a840ab0fa8918321786",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(arrrr),
//         }
//       );

//       if (response.ok) {
//         console.log("Submitted successfully");
//       } else {
//         console.error("Submission error");
//       }
//     } catch (error) {
//       console.error("Error during submission", error);
//     } finally {
//     }
//   };
//   const handleQuestion = (e) => {
//     const answer = e.target.value;
//     const questionId = e.target.getAttribute("data-question-id");
//     const qindex = parseInt(e.target.getAttribute("data-qindex"));
//     const question = e.target.getAttribute("data-question-name");

//     setArrrr((prevArrrr) => {
//       const existingQuestionIndex = prevArrrr.findIndex(
//         (item) => item.qindex === qindex
//       );

//       if (existingQuestionIndex !== -1) {
//         const updatedArrrr = [...prevArrrr];
//         updatedArrrr[existingQuestionIndex] = {
//           sectionId: `${id}`,
//           questions: [
//             {
//               qindex,

//               ...updatedArrrr[existingQuestionIndex].qdetails,
//               questionId,
//               question,
//               answer,
//               isAttempted: true,
//             },
//           ],
//         };
//         return updatedArrrr;
//       } else {
//         return [
//           ...prevArrrr,
//           {
//             sectionId: `${id}`,
//             questions: [
//               {
//                 qindex,

//                 questionId,
//                 question,
//                 answer,
//                 isAttempted: true,
//               },
//             ],
//           },
//         ];
//       }
//     });
//   };

//   let qcount = 0;

//   console.log("arrrr", arrrr);
//   return isLoading ? (
//     <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full  bg-slate-300 text-5xl font-extrabold">
//       Loading ...
//     </div>
//   ) : (
//     <div className=" absolute left-0 h-full top-0 w-full ">
//       {data?.map((info, ind) => (
//         <div key={ind} className="border-red-600 bg-slate-300 p-5 ">
//           <div className="flex items-center justify-between mb-4">
//             <h1 value="{info.quizename}">{info.quizename}</h1>
//             <div>
//               <h1 className="text-3xl font-bold">Part {ind + 1}</h1>
//             </div>
//           </div>

//           <div>
//             {info.quizemcqs?.map((ele, i) => {
//               qcount++;
//               return (
//                 <div key={i} className="mb-4">
//                   <h1>{`question ${qcount}`}</h1>
//                   <div className="border-2 py-3 font-bold text-xl pl-2 mb-2">
//                     {ele.question}
//                   </div>
//                   <div>
//                     <div className="border-2 p-2 mb-2">
//                       <input
//                         type="radio"
//                         name={`option${ind}-${i}`}
//                         value="option1"
//                         data-question-id={ele._id}
//                         data-qindex={qcount}
//                         data-question-name={`question ${ind + 1}`}
//                         id={`option${ind}-${i}-1`}
//                         onChange={handleQuestion}
//                       />
//                       <label
//                         className="ml-2 text-xl"
//                         htmlFor={`option${ind}-${i}-1`}
//                       >
//                         {ele.option1}
//                       </label>
//                     </div>
//                     <div className="border-2 p-2 mb-2">
//                       <input
//                         type="radio"
//                         name={`option${ind}-${i}`}
//                         value="option2"
//                         data-question-id={ele._id}
//                         data-qindex={qcount}
//                         data-question-name={`question ${ind + 1}`}
//                         id={`option${ind}-${i}-2`}
//                         onChange={handleQuestion}
//                       />
//                       <label
//                         className="ml-2 text-xl"
//                         htmlFor={`option${ind}-${i}-2`}
//                       >
//                         {ele.option2}
//                       </label>
//                     </div>
//                     <div className="border-2 p-2 mb-2">
//                       <input
//                         type="radio"
//                         name={`option${ind}-${i}`}
//                         value="option3"
//                         data-question-id={ele._id}
//                         data-qindex={qcount}
//                         data-question-name={`question ${ind + 1}`}
//                         id={`option${ind}-${i}-3`}
//                         onChange={handleQuestion}
//                       />
//                       <label
//                         className="ml-2 text-xl"
//                         htmlFor={`option${ind}-${i}-3`}
//                       >
//                         {ele.option3}
//                       </label>
//                     </div>
//                     <div className="border-2 p-2 mb-2">
//                       <input
//                         type="radio"
//                         name={`option${ind}-${i}`}
//                         value="option4"
//                         data-question-id={ele._id}
//                         data-qindex={qcount}
//                         data-question-name={`question ${ind + 1}`}
//                         id={`option${ind}-${i}-4`}
//                         onChange={handleQuestion}
//                       />
//                       <label
//                         className="ml-2 text-xl"
//                         htmlFor={`option${ind}-${i}-4`}
//                       >
//                         {ele.option4}
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}

//       <div className="bg-slate-300 flex justify-center ">
//         <button className="btn btn-primary mb-5" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Quizestart;
import React, { useState, useEffect } from "react";

function Quizestart({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [arrrr, setArrrr] = useState([]);

  const url = `https://quiz-krishang.vercel.app/section/getall/${id}`;

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
      console.log("Fetched data:", result);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Log the payload to inspect its structure
      console.log("Submitting payload:", arrrr);

      const response = await fetch(
        "https://quiz-krishang.vercel.app/result/create/66669a840ab0fa8918321786",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(arrrr[0]),
        }
      );

      if (response.ok) {
        console.log("Submitted successfully");
      } else {
        console.error("Submission error");
        // Log the response status and text for debugging
        console.error("Response status:", response.status);
        const errorText = await response.text();
        console.error("Error response text:", errorText);
      }
    } catch (error) {
      console.error("Error during submission", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestion = (e) => {
    const answer = e.target.value;
    const questionId = e.target.getAttribute("data-question-id");
    const qindex = parseInt(e.target.getAttribute("data-qindex"));

    setArrrr((prevArrrr) => {
      const existingSectionIndex = prevArrrr.findIndex(
        (item) => item.sectionId === `${id}`
      );

      if (existingSectionIndex !== -1) {
        const updatedArrrr = [...prevArrrr];
        const existingQuestionIndex = updatedArrrr[
          existingSectionIndex
        ].questions.findIndex((q) => q.qindex === qindex);

        if (existingQuestionIndex !== -1) {
          updatedArrrr[existingSectionIndex].questions[existingQuestionIndex] =
            {
              ...updatedArrrr[existingSectionIndex].questions[
                existingQuestionIndex
              ],
              questionId,

              answer,
              isAttempted: true,
            };
        } else {
          updatedArrrr[existingSectionIndex].questions.push({
            qindex,
            questionId,

            answer,
            isAttempted: true,
          });
        }

        return updatedArrrr;
      } else {
        return [
          ...prevArrrr,
          {
            sectionId: `${id}`,
            questions: [
              {
                qindex,
                questionId,

                answer,
                isAttempted: true,
              },
            ],
          },
        ];
      }
    });
  };
  console.log("dddddddddd", arrrr);
  let qcount = 0;

  return isLoading ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full bg-slate-300 text-5xl font-extrabold">
      Loading ...
    </div>
  ) : (
    <div className="absolute left-0 h-full top-0 w-full">
      {data.map((info, ind) => (
        <div key={ind} className="border-red-600 bg-slate-300 p-5">
          <div className="flex items-center justify-between mb-4">
            <h1>{info.quizename}</h1>
            <div>
              <h1 className="text-3xl font-bold">Part {ind + 1}</h1>
            </div>
          </div>
          <div>
            {info.quizemcqs.map((ele, i) => {
              qcount++;
              return (
                <div key={i} className="mb-4">
                  <h1>{`Question ${qcount}`}</h1>
                  <div className="border-2 py-3 font-bold text-xl pl-2 mb-2">
                    {ele.question}
                  </div>
                  <div>
                    {["option1", "option2", "option3", "option4"].map(
                      (option, idx) => (
                        <div key={idx} className="border-2 p-2 mb-2">
                          <input
                            type="radio"
                            name={`option${ind}-${i}`}
                            value={option}
                            data-question-id={ele._id}
                            data-qindex={qcount}
                            data-question-name={ele.question}
                            id={`option${ind}-${i}-${idx}`}
                            onChange={handleQuestion}
                          />
                          <label
                            className="ml-2 text-xl"
                            htmlFor={`option${ind}-${i}-${idx}`}
                          >
                            {ele[option]}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="bg-slate-300 flex justify-center">
        <button
          className="btn btn-primary mb-5"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Quizestart;
