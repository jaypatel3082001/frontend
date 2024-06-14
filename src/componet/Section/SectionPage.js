import React, { useState, useEffect } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setSectionid } from "../../reduxfiles/InputSlice";
import { setSectionid } from "../../reduxfiles/InputSlice";

function SectionPage({ setIsLoggedIn }) {
  const [quizes, setQuizes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://quiz-krishang.vercel.app/section/read";
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  // const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setQuizes(result);
      console.log("quizes", quizes);
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://quiz-krishang.vercel.app/section/delete/${id}`,
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
    const quizeToUpdate = quizes.data.find((quize) => quize._id === id);
    if (quizeToUpdate) {
      navigate("/QuizetoSectionName", { state: { itemToEdit: quizeToUpdate } });
    }
  };
  const handleSec = (id1) => {
    // const value = e.target.getAttribute("value");
    console.log("mmmmmmmmmm", id1);
    // dispatch(setSectionid(`${id1}`));
    localStorage.setItem("sectionId", id1);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <div>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        </div>

        <div>
          <div className="flex justify-between mt-5">
            <div></div>
            <div className=" flex items-center flex-col p-2  bg-blue-300">
              <div>Quize to SectionName</div>
              <Link to="/QuizetoSectionName">
                <button className="bg-red-300 w-fit mt-1" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="25px"
                    width="25px"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          {isLoading ? (
            <div className="flex align-middle">Loading ...</div>
          ) : (
            quizes.data?.map((info, ind) => (
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
                  <Link to={`/userpages/quiz-start`}>
                    {" "}
                    <div
                      className="cursor-pointer ml-4"
                      // onClick={() => handleDelete(info._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        height="20px"
                        width="20px"
                      >
                        <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
                      </svg>
                    </div>
                  </Link>
                </div>
                <h1 className="fw-bold text-2xl">Add the Quiz</h1>

                <h1 className="fw-bold text-xl mt-3 mb-4">
                  {info.sectionName}
                </h1>
                <Link
                  to={`/Sectionmain/Section-quiz-list`}
                  className="bg-blue-400 p-2 rounded text-white w-fit"
                >
                  <button onClick={() => handleSec(info._id)}>
                    {" "}
                    Add the{" "}
                    <span className="text-blue-700 font-bold">
                      {info.sectionName}
                    </span>{" "}
                    Section ❯
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionPage;
