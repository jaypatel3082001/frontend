import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Quizestart({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [issubmitted, setIssubmitted] = useState(false);
  const [arrrr, setArrrr] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const [currentPartPage, setCurrentPartPage] = useState(0);
  const [currentQuestionPage, setCurrentQuestionPage] = useState(0);
  const [highlightedQuestionPages, setHighlightedQuestionPages] = useState({});
  const [revisitedQuestions, setRevisitedQuestions] = useState({});

  const [answeredCount, setAnsweredCount] = useState({});
  const [unansweredCount, setUnansweredCount] = useState({});

  const [alreadyAnswered, setAlreadyAnswered] = useState({});
  let counter = 0;

  const partsPerPage = 1; // Number of parts per page
  const questionsPerPage = 1; // Number of questions per page

  const url = `https://quiz-krishang.vercel.app/section/getall/${id}`;

  const [timeRemaining, setTimeRemaining] = useState(30); // Initial time in minutes

  useEffect(() => {
    const totalSeconds = timeRemaining * 60;
    let currentTime = totalSeconds;

    const timer = setInterval(() => {
      currentTime -= 1;
      setTimeRemaining(currentTime / 60);

      if (currentTime <= 0) {
        clearInterval(timer);
        setTimeRemaining(0);
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (minutes) => {
    const totalSeconds = Math.floor(minutes * 60);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };
  const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  //*********************************************************** */
  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();
      // if (event.key === "F11" || event.key === "Escape") {
      //   event.preventDefault();
      //   alert(`You pressed ${event.key}, but it's disabled.`);
      // }
    };

    window.addEventListener("keypress", handleKeyDown);

    // const disableRightClick = (event) => {
    //   event.preventDefault();
    // };

    const addEventListeners = () => {
      document.addEventListener("keypress", handleKeyDown);
      // document.addEventListener("contextmenu", disableRightClick);
    };

    const requestFullscreen = () => {
      const element = document.getElementById("fullscreen");
      if (element) {
        element.requestFullscreen().catch((err) => {
          console.error("Failed to enter fullscreen:", err);
        });
      }
    };

    addEventListeners();
    requestFullscreen();
  }, []);

  //************************************************************************************* */
  useEffect(() => {
    fetchData();
  }, [url]);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      setData(shuffleArray(result));
      console.log("result", result);

      let initialUnansweredCount = {};

      result.forEach((section, index) => {
        if (section.quizemcqs && Array.isArray(section.quizemcqs)) {
          let unansweredInSection = 0;

          section.quizemcqs.forEach((mcq) => {
            // Adjust the condition as per your logic to determine if a question is unanswered
            if (mcq.answer) {
              unansweredInSection++;
            }
          });

          initialUnansweredCount[`Section ${index + 1}`] = unansweredInSection;
        } else {
          initialUnansweredCount[`Section ${index + 1}`] = 0; // Handle if quizemcqs is missing or not an array
        }
      });
      setUnansweredCount(initialUnansweredCount);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    const result = arrrr[0] || {
      sectionId: `${id}`,
      questions: [],
    };

    // Check if arrrr[0] exists and has necessary data
    if (!arrrr[0] || !arrrr[0].sectionId || !arrrr[0].questions.length) {
      alert("Please select an answer for all questions.");
      return; // Exit function if data is incomplete
    }

    try {
      const response = await fetch(
        "https://quiz-krishang.vercel.app/result/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(result),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      // Proceed with setting state and navigating
      setIssubmitted(true);
      const intervalId = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearInterval(intervalId);
    } catch (error) {
      console.error("Error during submission", error);
      // Handle error state or display an error message
    }
  };

  const handleQuestion = (e) => {
    const answer = e.target.value;
    const questionId = e.target.getAttribute("data-question-id");
    const qindex = parseInt(e.target.getAttribute("data-qindex"));
    const sectionName = `Section ${currentPartPage + 1}`;
    const quizeId = e.target.getAttribute("quizeId");
    const quizename = e.target.getAttribute("quizename");

    const weightage = parseInt(e.target.getAttribute("weightage"));

    setArrrr((prevArrrr) => {
      const existingSectionIndex = prevArrrr.findIndex(
        (section) => section.sectionId === id
      );

      if (existingSectionIndex !== -1) {
        const updatedArrrr = [...prevArrrr];
        const existingSection = updatedArrrr[existingSectionIndex];
        const existingQuestionIndex = existingSection.questions.findIndex(
          (q) => q.qindex === qindex
        );

        if (existingQuestionIndex !== -1) {
          existingSection.questions[existingQuestionIndex] = {
            ...existingSection.questions[existingQuestionIndex],
            answer,
            isAttempted: true,
          };
        } else {
          existingSection.questions.push({
            questionId,
            qindex,
            quizeId,
            quizename,
            weightage,
            answer,
            isAttempted: true,
          });
        }
        updatedArrrr[existingSectionIndex] = existingSection;
        return updatedArrrr;
      } else {
        return [
          ...prevArrrr,
          {
            sectionId: id,
            questions: [
              {
                questionId,
                qindex,
                quizeId,
                quizename,
                weightage,
                answer,
                isAttempted: true,
              },
            ],
          },
        ];
      }
    });

    if (
      !alreadyAnswered[`${currentPartPage}-${currentQuestionPage}-${qindex}`]
    ) {
      setAnsweredCount((prevAnsweredCount) => ({
        ...prevAnsweredCount,
        [sectionName]: (prevAnsweredCount[sectionName] || 0) + 1,
      }));
      console.log(answeredCount, "answeredCount");
      console.log(unansweredCount, "unansweredCount");

      setUnansweredCount((prevUnansweredCount) => ({
        ...prevUnansweredCount,
        [sectionName]: Math.max((prevUnansweredCount[sectionName] || 0) - 1, 0),
      }));

      setAlreadyAnswered((prevAlreadyAnswered) => ({
        ...prevAlreadyAnswered,
        [`${currentPartPage}-${currentQuestionPage}-${qindex}`]: true,
        [`${currentPartPage}-${currentQuestionPage}`]: true, // Mark the question as answered
      }));
    }
  };

  const handlePartPageClick = (index) => {
    setCurrentPartPage(index);
    setCurrentQuestionPage(0);
  };

  const handleQuestionPageClick = (index) => {
    setCurrentQuestionPage(index);
  };

  const handleHighlight = () => {
    const currentHighlightedPages =
      highlightedQuestionPages[currentPartPage] || [];
    const updatedHighlightedPages = currentHighlightedPages.includes(
      currentQuestionPage
    )
      ? currentHighlightedPages.filter((page) => page !== currentQuestionPage)
      : [...currentHighlightedPages, currentQuestionPage];

    setHighlightedQuestionPages((prev) => ({
      ...prev,
      [currentPartPage]: updatedHighlightedPages,
    }));

    const revisitedCount = updatedHighlightedPages.length;
    setRevisitedQuestions((prev) => ({
      ...prev,
      [`Section ${currentPartPage + 1}`]: revisitedCount,
    }));
  };

  return isLoading ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full bg-slate-300 text-5xl font-extrabold">
      Loading ...
    </div>
  ) : issubmitted ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full bg-slate-300 text-5xl font-extrabold">
      Thankyou ...
    </div>
  ) : (
    <div
      className="absolute left-0 h-full bg-blue-100 top-0 w-full"
      id="fullscreen"
    >
      <div className="flex flex-col h-screen justify-center items-center w-full p-8 ">
        <div className=" bg-red-50 p-8 w-full shadow-slate-600 shadow-xl rounded-lg">
          <div className="bg-white shadow-lg shadow-slate-50 w-full px-6 py-2 flex justify-between rounded-lg items-center mb-3">
            <div>
              <div className="flex mb-3">
                <h1 className="font-bold text-xl">Section :- </h1>

                <div className="flex items-center mx-2">
                  {Array.from({
                    length: Math.ceil(data.length / partsPerPage),
                  }).map((_, index) => (
                    <button
                      key={index}
                      className={`mx-1 px-3 py-1 rounded-md font-bold ${
                        alreadyAnswered[`part-${index}`]
                          ? "bg-green-500 text-white"
                          : currentPartPage === index
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                      onClick={() => handlePartPageClick(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <h1 className="font-bold text-xl">Question :- </h1>
                </div>
                {Array.from({
                  length: Math.ceil(
                    (data[currentPartPage]?.quizemcqs?.length || 0) /
                      questionsPerPage
                  ),
                }).map((_, index) => {
                  const buttonClass = `mx-1 px-3 py-1 rounded-md font-bold ${
                    highlightedQuestionPages[currentPartPage]?.includes(index)
                      ? "bg-yellow-500 text-white"
                      : alreadyAnswered[`${currentPartPage}-${index}`]
                      ? "bg-green-500 text-white"
                      : currentQuestionPage === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`;

                  return (
                    <button
                      key={index}
                      className={buttonClass}
                      onClick={() => handleQuestionPageClick(index)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-2">
              <table className="border-collapse border border-gray-200 w-full">
                <thead>
                  <tr className="bg-gray-100 border border-gray-200">
                    <th className="border border-white  px-4 py-2">Section</th>
                    <th className="border border-white  bg-green-600 font-bold text-white px-4 py-2">
                      Answered
                    </th>
                    <th className="border border-white bg-gray-300 px-4 py-2">
                      Unanswered
                    </th>
                    <th className="border border-white  bg-yellow-400 font-bold text-white px-4 py-2">
                      Highlight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((_, index) => (
                    <tr key={index} className="border border-gray-200">
                      <td className="border border-white bg-slate-100 px-4 py-2">
                        Section {index + 1}
                      </td>
                      <td className="border border-white bg-green-600 font-bold text-white px-4 py-2 text-center ">
                        {answeredCount[`Section ${index + 1}`] || 0}
                      </td>
                      <td className="border border-white bg-gray-300 px-4 py-2 text-center ">
                        {unansweredCount[`Section ${index + 1}`] !== undefined
                          ? unansweredCount[`Section ${index + 1}`]
                          : 0}
                      </td>
                      <td className="border border-white bg-yellow-400 font-bold text-white text-center px-4 py-2">
                        {revisitedQuestions[`Section ${index + 1}`] || 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {data
            ?.slice(
              currentPartPage * partsPerPage,
              (currentPartPage + 1) * partsPerPage
            )
            ?.map((info, partIndex) => (
              <div
                key={partIndex}
                className="bg-white shadow-lg shadow-slate-50 w-full my-2 px-6 py-2 rounded-lg"
              >
                <div className="border-red-600 p-2">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold">{info?.quizename}</h1>

                    <div className="timer text-2xl font-extrabold ">
                      Timer : -{" "}
                      <span className="text-red-600">
                        {formatTime(timeRemaining)}
                      </span>{" "}
                      Minutes
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">
                        Part {partIndex + 1 + currentPartPage * partsPerPage}
                      </h1>
                    </div>
                  </div>

                  <div>
                    {
                      // shuffleArray(info.quizemcqs) &&
                      info?.quizemcqs
                        ?.slice(
                          currentQuestionPage * questionsPerPage,
                          (currentQuestionPage + 1) * questionsPerPage
                        )
                        ?.map((ele, questionIndex) => {
                          counter = `${currentPartPage + 1}${
                            currentQuestionPage + 1
                          }`;

                          const qcount =
                            questionIndex +
                            1 +
                            currentQuestionPage * questionsPerPage;
                          const existingAnswer = arrrr
                            .find((section) => section.sectionId === id)
                            ?.questions.find(
                              (q) => q.qindex === parseInt(counter)
                            )?.answer;

                          return (
                            <div key={questionIndex} className="mb-4">
                              <div className="flex justify-between">
                                <h1 className="text-xl font-bold">{`Question ${qcount}`}</h1>
                                <h1 className="text-xl font-bold">
                                  Marks :- {ele.weightage}
                                </h1>
                              </div>

                              <div className="border-2 py-3 font-bold text-xl pl-2 mb-3">
                                {ele.question}
                              </div>
                              <div>
                                {[
                                  ele.option1,
                                  ele.option2,
                                  ele.option3,
                                  ele.option4,
                                ].map((option, index) => (
                                  <div key={index} className="border-2 p-2 ">
                                    <input
                                      type="radio"
                                      quizeId={info._id}
                                      quizename={info.quizename}
                                      weightage={ele.weightage}
                                      name={`option-${partIndex}-${questionIndex}`}
                                      value={`option${index + 1}`}
                                      data-question-id={ele._id}
                                      data-qindex={parseInt(counter)}
                                      id={`option-${partIndex}-${questionIndex}-${
                                        index + 1
                                      }`}
                                      checked={
                                        existingAnswer === `option${index + 1}`
                                      }
                                      onChange={handleQuestion}
                                      required // Ensure this input is required
                                    />
                                    <label
                                      className="ml-2 text-xl"
                                      htmlFor={`option-${partIndex}-${questionIndex}-${
                                        index + 1
                                      }`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })
                    }
                  </div>
                </div>
              </div>
            ))}

          <div className="bg-white shadow-lg shadow-slate-50 w-full px-6 py-2 flex justify-between rounded-lg mt-3 ">
            <div className="flex">
              <div>
                <button
                  className={`btn btn-primary font-bold ${
                    currentQuestionPage === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentQuestionPage((prev) => Math.max(prev - 1, 0))
                  }
                  disabled={currentQuestionPage === 0}
                >
                  Prev
                </button>
              </div>
              <div className="ml-6">
                <button
                  className={`btn btn-warning text-white font-bold ${
                    highlightedQuestionPages[currentPartPage]?.includes(
                      currentQuestionPage
                    )
                      ? "highlighted"
                      : ""
                  }`}
                  onClick={handleHighlight}
                >
                  {highlightedQuestionPages[currentPartPage]?.includes(
                    currentQuestionPage
                  )
                    ? "Unhighlight"
                    : "Highlight"}
                </button>
              </div>
              <div className="ml-6">
                <button
                  className={`btn btn-primary font-bold${
                    currentQuestionPage ===
                    Math.ceil(
                      (data[currentPartPage]?.quizemcqs?.length || 0) /
                        questionsPerPage
                    ) -
                      1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentQuestionPage((prev) =>
                      Math.min(
                        prev + 1,
                        Math.ceil(
                          (data[currentPartPage]?.quizemcqs?.length || 0) /
                            questionsPerPage
                        ) - 1
                      )
                    )
                  }
                  disabled={
                    currentQuestionPage ===
                    Math.ceil(
                      (data[currentPartPage]?.quizemcqs?.length || 0) /
                        questionsPerPage
                    ) -
                      1
                  }
                >
                  Next
                </button>
              </div>
            </div>
            <div className="">
              <button
                className="btn btn-danger font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizestart;
