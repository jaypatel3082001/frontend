import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Use the named export
import Quizestart from "./Quizestart";

function Userpage() {
  const [isstart, setIsstart] = useState(false);
  const [details, setDetails] = useState({});
  const id = localStorage.getItem("paperQuizId");
  console.log("details", details);
  useEffect(() => {
    const token = localStorage?.getItem("authTokenstu");
    if (token) {
      setDetails(jwtDecode(token)); // Use the named export
    }
  }, []);
  console.log("details", details.key?._id);
  const handleQuize = () => {
    setIsstart(true);
  };

  // useEffect(() => {
  //   // Function to handle right-click prevention
  //   const handleContextMenu = (e) => {
  //     e.preventDefault(); // Prevent default right-click behavior
  //     // Additional logic as needed
  //   };

  //   // Function to handle fullscreen mode
  //   const handleFullscreen = () => {
  //     const element = document.getElementById("fullscreen");

  //     if (element) {
  //       if (element.requestFullscreen) {
  //         element.requestFullscreen();
  //       } else if (element.webkitRequestFullscreen) {
  //         /* Safari */
  //         element.webkitRequestFullscreen();
  //       } else if (element.msRequestFullscreen) {
  //         /* IE/Edge */
  //         element.msRequestFullscreen();
  //       }
  //     }
  //   };

  //   // Attach event listeners when component mounts
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   const fullscreenButton = document.getElementById("fullscreen");
  //   if (fullscreenButton) {
  //     fullscreenButton.addEventListener("click", handleFullscreen);
  //   }

  //   // Clean up event listeners when component unmounts
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     if (fullscreenButton) {
  //       fullscreenButton.removeEventListener("click", handleFullscreen);
  //     }
  //   };
  // }, []);
  //************************* */
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen font-sans p-5 bg-gray-100"
      id="fullscreen"
    >
      <div className="w-3/5 rounded-3xl p-4 shadow-lg flex flex-col justify-between items-center bg-white">
        <div className="w-full bg-gradient-to-r from-gray-700 to-black rounded-2xl p-4 shadow-lg h-full">
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
            {isstart === true && <Quizestart id={id} keyid={details.key._id} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
