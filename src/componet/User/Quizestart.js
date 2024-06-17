import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Quizestart({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [arrrr, setArrrr] = useState([]);

  const [currentPartPage, setCurrentPartPage] = useState(0);
  const [currentQuestionPage, setCurrentQuestionPage] = useState(0);

  const partsPerPage = 1; // Number of parts per page
  const questionsPerPage = 1; // Number of questions per page

  const url = `https://quiz-krishang.vercel.app/section/getall/${id}`;
  console.warn(arrrr);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    navigator(0);
  };

  const handleQuestion = (e) => {
    const answer = e.target.value;
    const questionId = e.target.getAttribute("data-question-id");
    const qindex = parseInt(e.target.getAttribute("data-qindex"));

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
  };

  const handleNextPartPage = () => {
    setCurrentPartPage((prev) => prev + 1);
    setCurrentQuestionPage(0); // Reset question page when changing part
  };

  const handlePreviousPartPage = () => {
    setCurrentPartPage((prev) => Math.max(prev - 1, 0));
    setCurrentQuestionPage(0); // Reset question page when changing part
  };

  const handleNextQuestionPage = () => {
    setCurrentQuestionPage((prev) => prev + 1);
  };

  const handlePreviousQuestionPage = () => {
    setCurrentQuestionPage((prev) => Math.max(prev - 1, 0));
  };

  const handlePartPageClick = (index) => {
    setCurrentPartPage(index);
    setCurrentQuestionPage(0); // Reset question page when changing part
  };

  const handleQuestionPageClick = (index) => {
    setCurrentQuestionPage(index);
  };

  const startIndex = currentPartPage * partsPerPage;
  const endIndex = startIndex + partsPerPage;
  const paginatedParts = data.slice(startIndex, endIndex);

  return isLoading ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full bg-slate-300 text-5xl font-extrabold">
      Loading ...
    </div>
  ) : (
    <div className="absolute left-0 h-full bg-slate-200 top-0 w-full">
      <div className="flex flex-col h-screen justify-center items-center w-full">
        <div className="bg-white shadow-lg w-full p-2">
          {/* Part Pagination */}
          <div className="flex mb-3">
            <div className="flex items-center mx-2">
              {Array.from({
                length: Math.ceil(data.length / partsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 px-3 py-1 ${
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

          {/* Question Pagination */}
          <div className="flex">
            <div className="flex items-center mx-2">
              {Array.from({
                length: Math.ceil(
                  (data[currentPartPage]?.quizemcqs?.length || 0) /
                    questionsPerPage
                ),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 px-3 py-1 ${
                    currentQuestionPage === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => handleQuestionPageClick(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {paginatedParts.map((info, partIndex) => (
          <div key={partIndex} className="bg-white shadow-lg w-full my-2">
            <div className="border-red-600 p-5">
              <div className="flex items-center justify-between mb-4">
                <h1>{info.quizename}</h1>
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
                    const qcount =
                      questionIndex +
                      1 +
                      currentQuestionPage * questionsPerPage;
                    const existingAnswer = arrrr
                      .find((section) => section.sectionId === id)
                      ?.questions.find((q) => q.qindex === qcount)?.answer;

                    return (
                      <div key={questionIndex} className="mb-4">
                        <h1>{`Question ${qcount}`}</h1>
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
                                value={option}
                                data-question-id={ele._id}
                                data-qindex={qcount}
                                id={`option-${partIndex}-${questionIndex}-${
                                  index + 1
                                }`}
                                checked={existingAnswer === option}
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
              onClick={handlePreviousQuestionPage}
              disabled={currentQuestionPage === 0}
            >
              Previous Question
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div>
            <button
              className={`btn btn-primary ${
                !data?.[currentPartPage]?.quizemcqs?.slice(
                  (currentQuestionPage + 1) * questionsPerPage,
                  (currentQuestionPage + 2) * questionsPerPage
                ).length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleNextQuestionPage}
              disabled={
                !data?.[currentPartPage]?.quizemcqs?.slice(
                  (currentQuestionPage + 1) * questionsPerPage,
                  (currentQuestionPage + 2) * questionsPerPage
                ).length
              }
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizestart;
