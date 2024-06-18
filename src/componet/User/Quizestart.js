import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Quizestart({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [issubmitted, setIssubmitted] = useState(false);
  const [arrrr, setArrrr] = useState([]);
  const navigate = useNavigate();

  const [currentPartPage, setCurrentPartPage] = useState(0);
  const [currentQuestionPage, setCurrentQuestionPage] = useState(0);
  const [highlightedQuestionPages, setHighlightedQuestionPages] = useState({});
  const [revisitedQuestions, setRevisitedQuestions] = useState({});
  const [selectedQuestions, setSelectedQuestions] = useState({});
  const [answeredCount, setAnsweredCount] = useState({});
  const [unansweredCount, setUnansweredCount] = useState({});
  const [alreadyAnswered, setAlreadyAnswered] = useState({});
  let counter = 0;

  const partsPerPage = 1; // Number of parts per page
  const questionsPerPage = 1; // Number of questions per page

  const url = `https://quiz-krishang.vercel.app/section/getall/${id}`;
  const [timeRemaining, setTimeRemaining] = useState(21); // Initial time in minutes

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

      // Initialize unanswered count for each section
      const initialUnansweredCount = {};
      result.forEach((section, index) => {
        initialUnansweredCount[`Section ${index + 1}`] =
          section.quizemcqs.length;
      });
      setUnansweredCount(initialUnansweredCount);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    console.log("arrrr", arrrr);
    try {
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
      }
    } catch (error) {
      console.error("Error during submission", error);
    }
    setIssubmitted(true);
    const intervalId = setTimeout(() => {
      navigate("/");
    }, 1000); // Update every second
    // setIssubmitted(false)
    // Cleanup function to clear the interval when the component unmounts
    //  clearInterval(intervalId) ;

    // return () => clearInterval(intervalId);
    return () => clearInterval(intervalId);
  };

  const handleQuestion = (e) => {
    const answer = e.target.value;
    const questionId = e.target.getAttribute("data-question-id");
    const qindex = parseInt(e.target.getAttribute("data-qindex"));
    const sectionName = `Section ${currentPartPage + 1}`;

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
                answer,
                isAttempted: true,
              },
            ],
          },
        ];
      }
    });

    setSelectedQuestions((prevSelectedQuestions) => ({
      ...prevSelectedQuestions,
      [`${currentPartPage}-${currentQuestionPage}-${qindex}`]: answer,
    }));

    if (
      !alreadyAnswered[`${currentPartPage}-${currentQuestionPage}-${qindex}`]
    ) {
      setAnsweredCount((prevAnsweredCount) => ({
        ...prevAnsweredCount,
        [sectionName]: (prevAnsweredCount[sectionName] || 0) + 1,
      }));

      setUnansweredCount((prevUnansweredCount) => ({
        ...prevUnansweredCount,
        [sectionName]: Math.max((prevUnansweredCount[sectionName] || 0) - 1, 0),
      }));

      setAlreadyAnswered((prevAlreadyAnswered) => ({
        ...prevAlreadyAnswered,
        [`${currentPartPage}-${currentQuestionPage}-${qindex}`]: true,
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
    <div className="absolute left-0 h-full bg-slate-200 top-0 w-full">
      <div className="flex flex-col h-screen justify-center items-center w-full">
        <div className="bg-white shadow-lg w-full p-2 flex justify-between items-center">
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
                      currentPartPage === index
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
                  <th className="border border-gray-200">Section</th>
                  <th className="border border-gray-200">Answered</th>
                  <th className="border border-gray-200">Unanswered</th>
                  <th className="border border-gray-200">Revisit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((_, index) => (
                  <tr key={index} className="border border-gray-200">
                    <td className="border border-gray-200">
                      Section {index + 1}
                    </td>
                    <td className="border border-gray-200">
                      {answeredCount[`Section ${index + 1}`] || 0}
                    </td>
                    <td className="border border-gray-200">
                      {unansweredCount[`Section ${index + 1}`] || 0}
                    </td>
                    <td className="border border-gray-200">
                      {revisitedQuestions[`Section ${index + 1}`] || 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {data
          .slice(
            currentPartPage * partsPerPage,
            (currentPartPage + 1) * partsPerPage
          )
          .map((info, partIndex) => (
            <div key={partIndex} className="bg-white shadow-lg w-full my-2">
              <div className="border-red-600 p-2">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold">{info.quizename}</h1>

                  <div className="timer text-2xl font-extrabold ">
                    Time Remaining : - {formatTime(timeRemaining)}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">
                      Part {partIndex + 1 + currentPartPage * partsPerPage}
                    </h1>
                  </div>
                </div>

                <div>
                  {info.quizemcqs
                    ?.slice(
                      currentQuestionPage * questionsPerPage,
                      (currentQuestionPage + 1) * questionsPerPage
                    )
                    .map((ele, questionIndex) => {
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
                          <h1>{`Question ${counter}`}</h1>
                          {/* <h1>{`Question ${counter1}`}</h1> */}
                          <div className="border-2 py-3 font-bold text-xl pl-2 mb-2">
                            {ele.question}
                          </div>
                          <div>
                            {[
                              ele.option1,
                              ele.option2,
                              ele.option3,
                              ele.option4,
                            ].map((option, index) => (
                              <div key={index} className="border-2 p-2 mb-2">
                                <input
                                  type="radio"
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
                    })}
                </div>
              </div>
            </div>
          ))}

        <div className="bg-white shadow-lg w-full flex justify-between p-2">
          <div>
            <button
              className={`btn btn-primary ${
                currentQuestionPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() =>
                setCurrentQuestionPage((prev) => Math.max(prev - 1, 0))
              }
              disabled={currentQuestionPage === 0}
            >
              Previous Question
            </button>
          </div>
          <div>
            <button
              className={`btn btn-primary ${
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
          <div>
            <button
              className={`btn btn-primary ${
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
              Next Question
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg w-full flex justify-center p-2 mt-4">
          <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quizestart;
