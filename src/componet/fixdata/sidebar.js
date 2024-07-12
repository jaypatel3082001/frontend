// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ReactComponent as Result } from "../../svgfile/result.svg";
// import { ReactComponent as Examlist } from "../../svgfile/examlist.svg";
// import { ReactComponent as Logout } from "../../svgfile/logout.svg";
// import { ReactComponent as Qestionadd } from "../../svgfile/Questionadd.svg";
// import { ReactComponent as Quize } from "../../svgfile/Quize.svg";
// import { ReactComponent as Home } from "../../svgfile/homg.svg";

// function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [active, setActive] = useState(location.pathname);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/");
//   };

//   const handleItemClick = (path) => {
//     setActive(path);
//     navigate(path);
//   };

//   return (
//     <div className="h-screen bg-[#ff6700] w-40 md:w-40 lg:w-32 xl:w-64 text-gray-400 font-bold fixed">
//       <div className="ml-8">
//         <div className="sidebar-header flex items-center py-4">
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 448 512"
//               height="20px"
//               width="20px"
//             >
//               <path
//                 fill="#ebebeb"
//                 d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
//               />
//             </svg>
//           </div>
//           <div className="ml-4 text-lg font-semibold text-[#ebebeb]">Admin</div>
//         </div>
//         <div className="mt-8">
//           <ul className="flex flex-col space-y-8">
//             <li>
//               <Link
//                 to="/Home"
//                 className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
//                   active === "/Home"
//                     ? "bg-[#F3F4F6] text-slate-800 svg-active "
//                     : "hover:bg-[#F3F4F6] hover:text-slate-800 "
//                 }`}
//                 onClick={() => handleItemClick("/Home")}
//               >
//                 <Home />

//                 <span className="text-base">Home</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/createmain"
//                 className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
//                   active === "/createmain"
//                     ? "bg-[#F3F4F6] text-slate-800 svg-active "
//                     : "hover:bg-[#F3F4F6] hover:text-slate-800 "
//                 }`}
//                 onClick={() => handleItemClick("/createmain")}
//               >
//                 <Qestionadd />

//                 <span className="text-base">Add Question</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Sectionmain"
//                 className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
//                   active === "/Sectionmain"
//                     ? "bg-[#F3F4F6] text-slate-800 svg-active "
//                     : "hover:bg-[#F3F4F6] hover:text-slate-800 "
//                 }`}
//                 onClick={() => handleItemClick("/Sectionmain")}
//               >
//                 <Quize />

//                 <span className="text-base">Section</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Quizemain"
//                 className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
//                   active === "/Quizemain"
//                     ? "bg-[#F3F4F6] text-slate-800 svg-active "
//                     : "hover:bg-[#F3F4F6] hover:text-slate-800 "
//                 }`}
//                 onClick={() => handleItemClick("/Quizemain")}
//               >
//                 <Examlist />

//                 <span className="text-base">Quiz</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/resultmain"
//                 className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
//                   active === "/resultmain"
//                     ? "bg-[#F3F4F6] text-slate-800 svg-active "
//                     : "hover:bg-[#F3F4F6] hover:text-slate-800 "
//                 }`}
//                 onClick={() => handleItemClick("/resultmain")}
//               >
//                 <Result />

//                 <span className="text-base">Result</span>
//               </Link>
//             </li>

//             <li>
//               <div
//                 onClick={handleLogout}
//                 className="flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] cursor-pointer hover:bg-[#F3F4F6]
//                 fill-white hover:fill-black hover:text-slate-800"
//               >
//                 <Logout />
//                 <span className="text-base">Logout</span>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Result } from "../../svgfile/result.svg";
import { ReactComponent as Examlist } from "../../svgfile/examlist.svg";
import { ReactComponent as Logout } from "../../svgfile/logout.svg";
import { ReactComponent as QuestionAdd } from "../../svgfile/Questionadd.svg";
import { ReactComponent as Quiz } from "../../svgfile/Quize.svg";
import { ReactComponent as Home } from "../../svgfile/homg.svg";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initially open

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleItemClick = (path) => {
    setActive(path);
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`h-screen bg-[#194164] w-40 md:w-40 lg:w-32 xl:w-64 text-gray-400 font-bold fixed ${
        isSidebarOpen ? "" : "w-16 md:w-16 lg:w-16 xl:w-16"
      }`}
    >
      <div className="ml-8">
        <div className="sidebar-header flex items-center py-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="20px"
              width="20px"
            >
              <path
                fill="#ebebeb"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </div>
          <div className="ml-4 text-lg font-semibold text-[#ebebeb]">Admin</div>
        </div>
        <div className="mt-8">
          <ul className="flex flex-col space-y-8">
            <li>
              <Link
                to="/Home"
                className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
                  active === "/Home"
                    ? "bg-[#F3F4F6] text-slate-800 svg-active "
                    : "hover:bg-[#F3F4F6] hover:text-slate-800 "
                }`}
                onClick={() => handleItemClick("/Home")}
              >
                <Home />
                <span className={`text-base ${isSidebarOpen ? "" : "hidden"}`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/createmain"
                className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
                  active === "/createmain"
                    ? "bg-[#F3F4F6] text-slate-800 svg-active "
                    : "hover:bg-[#F3F4F6] hover:text-slate-800 "
                }`}
                onClick={() => handleItemClick("/createmain")}
              >
                <QuestionAdd />
                <span className="text-base">Add Question</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Sectionmain"
                className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
                  active === "/Sectionmain"
                    ? "bg-[#F3F4F6] text-slate-800 svg-active "
                    : "hover:bg-[#F3F4F6] hover:text-slate-800 "
                }`}
                onClick={() => handleItemClick("/Sectionmain")}
              >
                <Quiz />
                <span className="text-base">Section</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Quizemain"
                className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
                  active === "/Quizemain"
                    ? "bg-[#F3F4F6] text-slate-800 svg-active "
                    : "hover:bg-[#F3F4F6] hover:text-slate-800 "
                }`}
                onClick={() => handleItemClick("/Quizemain")}
              >
                <Examlist />
                <span className="text-base">Quiz</span>
              </Link>
            </li>
            <li>
              <Link
                to="/resultmain"
                className={`flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] svg-hover ${
                  active === "/resultmain"
                    ? "bg-[#F3F4F6] text-slate-800 svg-active "
                    : "hover:bg-[#F3F4F6] hover:text-slate-800 "
                }`}
                onClick={() => handleItemClick("/resultmain")}
              >
                <Result />
                <span className="text-base">Result</span>
              </Link>
            </li>
            <li>
              <div
                onClick={handleLogout}
                className="flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] cursor-pointer hover:bg-[#F3F4F6] fill-white hover:fill-black hover:text-slate-800"
              >
                <Logout />
                <span className="text-base">Logout</span>
              </div>
            </li>
            {/* <li>
              <div className="flex items-center space-x-2 p-2 rounded-l-md text-[#ebebeb] cursor-pointer hover:bg-[#F3F4F6] fill-white hover:fill-black hover:text-slate-800">
                <button
                  onClick={toggleSidebar}
                  className="bg-red-800 p-2 rounded-md text-gray-700"
                ></button>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
