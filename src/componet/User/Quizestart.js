import React, { useState, useEffect } from "react";

function Quizestart({ id }) {
  const [data, setData] = useState([]);
  const [coutn, setCoutn] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [inputresultdata, setInputresultdata] = useState([]);
  const [arrrr, setArrrr] = useState([
    {
      questionId: "",
      name: "",
      answer: "",
      isAttempted: false,
    },
  ]);

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
      console.log("aaa", data);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("ggggggggg", data);
  const randomArray = (array) => {
    let randomedArray = array.slice();
    for (let i = randomedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomedArray[i], randomedArray[j]] = [
        randomedArray[j],
        randomedArray[i],
      ];
    }
    return randomedArray;
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const api =
  //     "https://quiz-krishang.vercel.app/result/create/66669a840ab0fa8918321786";
  //   try {
  //     const response = await fetch(api, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(inputresultdata),
  //     });

  //     if (response.ok) {
  //       setInputresultdata({
  //         questionId: "",
  //         answer: "",
  //         isAttemted: "",
  //       });
  //     } else {
  //       console("Fetch operation error:");
  //     }
  //   } catch (error) {
  //     console.error("Fetch operation error:", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = await Promise.all(
        arrrr.map(async (ele) => {
          const response = await fetch(
            "https://quiz-krishang.vercel.app/result/create/66669a840ab0fa8918321786",
            {
              method: "POST",
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
        })
      );

      console.log("All submissions completed", results);
    } catch (error) {
      console.error("Error during submission", error);
    }
  };

  // const handleQuestion = (e) => {
  //   const answer = e.target.value;
  //   const questionId = e.target.getAttribute("question_id");
  //   const name = e.target.name;

  //   console.log("name----", name);
  //   console.log("questionId----", questionId);
  //   // console.log("value----", value);
  // };
  const handleQuestion = (e) => {
    const answer = e.target.value;
    const questionId = e.target.getAttribute("data-question-id");
    const qindex = e.target.getAttribute("data-qindex");
    const name = e.target.getAttribute("data-question-name");

    setArrrr((prevArrrr) => {
      // Find the question in the array
      const existingQuestionIndex = prevArrrr.findIndex(
        (item) => item.qindex === qindex
      );

      if (existingQuestionIndex !== -1) {
        // If the question exists, update its details
        const updatedArrrr = [...prevArrrr];
        updatedArrrr[existingQuestionIndex] = {
          qindex,
          qdetails: {
            ...updatedArrrr[existingQuestionIndex].qdetails,
            questionId,
            name,
            answer,
            isAttempted: true,
          },
        };
        return updatedArrrr;
      } else {
        // If the question doesn't exist, add a new entry for the question
        return [
          ...prevArrrr,
          {
            qindex,
            qdetails: {
              questionId,
              name,
              answer,
              isAttempted: true,
            },
          },
        ];
      }
    });
  };

  let qcount = 0;

  console.log("arrrr", arrrr);
  return isLoading ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full  bg-slate-300 text-5xl font-extrabold">
      Loading ...
    </div>
  ) : (
    <div className=" absolute left-0 h-full top-0 w-full ">
      {randomArray(data)?.map((info, ind, awr) => (
        <div key={ind} className="border-red-600 bg-slate-300 p-5 ">
          <div className="flex items-center justify-between mb-4">
            <h1 value="{info.quizename}">{info.quizename}</h1>
            <div>
              <h1 className="text-3xl font-bold">Part {ind + 1}</h1>
            </div>
          </div>
          <div>
            {/* {randomArray(info.quizemcqs)?.map((ele, i) => (
              <div key={i} className="mb-4">
                <div className="border-2 py-3 font-bold text-xl pl-2 mb-2">
                  {ele.question}
                </div>
                <div>
                  <div className="border-2 p-2 mb-2">
                    <input
                      type="radio"
                      name={`option${i}`}
                      value="option1"
                      checked={arrrr === "option1"}
                      question_id={`${ele._id}`}
                      onChange={handleQuestion}
                    />
                    <label
                      className="ml-2 text-xl"
                      htmlFor={`option${ind}-${i}-1`}
                    >
                      {ele.option1}
                    </label>
                  </div>
                  <div className="border-2 p-2 mb-2">
                    <input
                      type="radio"
                      name={`option${i}`}
                      checked={arrrr === "option2"}
                      value="option2"
                      question_id={`${ele._id}`}
                      onChange={handleQuestion}
                    />
                    <label className="ml-2 text-xl" htmlFor={`option${i}-2`}>
                      {ele.option2}
                    </label>
                  </div>
                  <div className="border-2 p-2 mb-2">
                    <input
                      type="radio"
                      name={`option${i}`}
                      value="option3"
                      question_id={`${ele._id}`}
                      checked={arrrr === "option3"}
                      onChange={handleQuestion}
                    />
                    <label
                      className="ml-2 text-xl"
                      htmlFor={`option${ind}-${i}-3`}
                    >
                      {ele.option3}
                    </label>
                  </div>
                  <div className="border-2 p-2 mb-2">
                    <input
                      type="radio"
                      name={`option${i}`}
                      value="option4"
                      checked={arrrr === "option4"}
                      question_id={`${ele._id}`}
                      onChange={handleQuestion}
                    />
                    <label className="ml-2 text-xl" htmlFor={`option${i}-4`}>
                      {ele.option4}
                    </label>
                  </div>
                </div>
              </div>
            ))} */}
            <div className=" absolute left-0 h-full top-0 w-full ">
              {randomArray(data)?.map((info, ind) => (
                <div key={ind} className="border-red-600 bg-slate-300 p-5 ">
                  <div className="flex items-center justify-between mb-4">
                    <h1>{info.quizename}</h1>
                    <div>
                      <h1 className="text-3xl font-bold">Part {ind + 1}</h1>
                    </div>
                  </div>
                  <div>
                    {randomArray(info.quizemcqs)?.map((ele, i) => (
                      <div key={i} className="mb-4">
                        <h1>{`question ${ind + 1}`}</h1>
                        <div className="border-2 py-3 font-bold text-xl pl-2 mb-2">
                          {ele.question}
                        </div>
                        <div>
                          <div className="border-2 p-2 mb-2">
                            <input
                              type="radio"
                              name={`option${ind}-${i}`}
                              value="option1"
                              data-question-id={ele._id}
                              data-qindex={ind + 1}
                              data-question-name={`question ${ind + 1}`}
                              id={`option${ind}-${i}-1`}
                              onChange={handleQuestion}
                            />
                            <label
                              className="ml-2 text-xl"
                              htmlFor={`option${ind}-${i}-1`}
                            >
                              {ele.option1}
                            </label>
                          </div>
                          <div className="border-2 p-2 mb-2">
                            <input
                              type="radio"
                              name={`option${ind}-${i}`}
                              value="option2"
                              data-question-id={ele._id}
                              data-qindex={ind + 1}
                              data-question-name={`question ${ind + 1}`}
                              id={`option${ind}-${i}-2`}
                              onChange={handleQuestion}
                            />
                            <label
                              className="ml-2 text-xl"
                              htmlFor={`option${ind}-${i}-2`}
                            >
                              {ele.option2}
                            </label>
                          </div>
                          <div className="border-2 p-2 mb-2">
                            <input
                              type="radio"
                              name={`option${ind}-${i}`}
                              value="option3"
                              data-question-id={ele._id}
                              data-qindex={ind + 1}
                              data-question-name={`question ${ind + 1}`}
                              id={`option${ind}-${i}-3`}
                              onChange={handleQuestion}
                            />
                            <label
                              className="ml-2 text-xl"
                              htmlFor={`option${ind}-${i}-3`}
                            >
                              {ele.option3}
                            </label>
                          </div>
                          <div className="border-2 p-2 mb-2">
                            <input
                              type="radio"
                              name={`option${ind}-${i}`}
                              value="option4"
                              data-question-id={ele._id}
                              data-qindex={ind + 1}
                              data-question-name={`question ${ind + 1}`}
                              id={`option${ind}-${i}-4`}
                              onChange={handleQuestion}
                            />
                            <label
                              className="ml-2 text-xl"
                              htmlFor={`option${ind}-${i}-4`}
                            >
                              {ele.option4}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="bg-slate-300 flex justify-center ">
                <button className="btn btn-primary mb-5" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-slate-300 flex justify-center ">
        <button className="btn btn-primary mb-5" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quizestart;
