import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Use the named export
import Quizestart from "./Quizestart";

function Userpage() {
  const [isstart, setIsstart] = useState(false);
  const [details, setDetails] = useState({});
  const id = localStorage.getItem("sectionId");
  console.log("details", details);
  useEffect(() => {
    const token = localStorage?.getItem("authToken");
    if (token) {
      setDetails(jwtDecode(token)); // Use the named export
    }
  }, []);

  const handleQuize = () => {
    setIsstart(true);
  };
  // useEffect(() => {
  //   // Function to disable keyboard events
  //   const disableKeyboard = (event) => {
  //     if (event.key == "q") {
  //       requestFullscreen();
  //       alert("dssd");
  //       event.preventDefault();
  //     }
  //     event.preventDefault();
  //   };

  //   // Function to disable right click (context menu)
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   const addEventListeners = () => {
  //     document.addEventListener("contextmenu", disableRightClick);
  //     document.addEventListener("keydown", disableKeyboard);
  //     document.addEventListener("keypress", disableKeyboard);
  //   };

  //   const requestFullscreen = () => {
  //     const element = document.getElementById("fullscreen");
  //     if (element) {
  //       element.requestFullscreen().catch((error) => {
  //         // alert("Error while requesting fullscreen: " + error.message);
  //         // console.error("Error while requesting fullssscreen:", error);
  //       });
  //     }
  //   };

  //   addEventListeners();
  //   requestFullscreen();
  // }, []);
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen font-sans p-5 bg-gray-100"
      id="fullscreen"
    >
      <div className="w-3/5 rounded-3xl p-4 shadow-lg flex flex-col justify-between items-center bg-white">
        <div className="w-full bg-gradient-to-r from-gray-700 to-black rounded-2xl p-4 shadow-lg h-full">
          <Link to="/">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="35px"
                width="35px"
              >
                <path
                  fill="#e8e8e8"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                />
              </svg>
            </div>
          </Link>
          <div className="flex justify-around items-center">
            <img
              className="w-48 h-48 rounded-full shadow-lg m-4"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__480.jpg"
              alt="Profile Image"
            />
            <div className="text-white">
              <h3 className="text-2xl mb-5">Profile Details</h3>
              <div className="flex">
                <table className="w-full h-70 border-collapse">
                  <tbody>
                    <tr className="text-lg border-b">
                      <td className="font-bold py-2 px-4">FirstName:</td>
                      <td className="py-2 px-4">{details.firstname}</td>
                    </tr>
                    <tr className="text-lg border-b">
                      <td className="font-bold py-2 px-4">LastName:</td>
                      <td className="py-2 px-4">{details.lastname}</td>
                    </tr>
                    <tr className="text-lg border-b">
                      <td className="font-bold py-2 px-4">Email:</td>
                      <td className="py-2 px-4">{details.userEmail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <button
              className="mt-3 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              onClick={handleQuize}
            >
              Start Exam
            </button>
            {isstart === true && <Quizestart id={id} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
