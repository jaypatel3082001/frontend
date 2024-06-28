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
//     navigate("/Logingpage");
//   };

//   const handleItemClick = (path) => {
//     setActive(path);
//     navigate(path);
//   };

//   return (
//     <div className="h-screen bg-slate-300 w-40 md:w-40 lg:w-32 xl:w-64">
//       <div className="ml-8">
//         <div className="sidebar-header flex items-center py-4">
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 448 512"
//               height="20px"
//               width="20px"
//             >
//               <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
//             </svg>
//           </div>
//           <div className="ml-4 text-lg font-semibold">Admin</div>
//         </div>
//         <div className="mt-8">
//           <ul className="flex flex-col space-y-8">
//             <li>
//               <Link
//                 to="/"
//                 className={`flex items-center space-x-2 p-2 rounded-md ${
//                   active === "/" ? "bg-gray-500" : "hover:bg-gray-300 hover:text-slate-600"
//                 }`}
//                 onClick={() => handleItemClick("/")}
//               >
//                 <Home />
//                 <span className="text-base">Home</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/createmain"
//                 className={`flex items-center space-x-2 p-2 rounded-md ${
//                   active === "/createmain" ? "bg-gray-500" : "hover:bg-gray-300 hover:text-slate-600"
//                 }`}
//                 onClick={() => handleItemClick("/createmain")}
//               >
//                 <Qestionadd />
//                 <span className="text-base">Add Question</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Quizmain"
//                 className={`flex items-center space-x-2 p-2 rounded-md ${
//                   active === "/Quizmain" ? "bg-gray-500" : "hover:bg-gray-300 hover:text-slate-600"
//                 }`}
//                 onClick={() => handleItemClick("/Quizmain")}
//               >
//                 <Quize />
//                 <span className="text-base">Quiz</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Sectionmain"
//                 className={`flex items-center space-x-2 p-2 rounded-md ${
//                   active === "/Sectionmain"
//                     ? "bg-gray-500"
//                     : "hover:bg-gray-300 hover:text-slate-600"
//                 }`}
//                 onClick={() => handleItemClick("/Sectionmain")}
//               >
//                 <Examlist />
//                 <span className="text-base">Sections</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/resultmain"
//                 className={`flex items-center space-x-2 p-2 rounded-md ${
//                   active === "/resultmain" ? "bg-gray-500" : "hover:bg-gray-300 hover:text-slate-600"
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
//                 className="flex items-center text-2xl text-teal-300 dark:text-gray-500 space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300 hover:text-slate-600"
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
import { ReactComponent as Qestionadd } from "../../svgfile/Questionadd.svg";
import { ReactComponent as Quize } from "../../svgfile/Quize.svg";
import { ReactComponent as Home } from "../../svgfile/homg.svg";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Logingpage");
  };

  const handleItemClick = (path) => {
    setActive(path);
    navigate(path);
  };

  return (
    <div className="h-screen bg-slate-200 w-40 md:w-40 lg:w-32 xl:w-64 text-black font-bold">
      <div className="ml-8">
        <div className="sidebar-header flex items-center py-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="20px"
              width="20px"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
          <div className="ml-4 text-lg font-semibold">Admin</div>
        </div>
        <div className="mt-8">
          <ul className="flex flex-col space-y-8">
            <li>
              <Link
                to="/"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  active === "/"
                    ? "bg-slate-500 text-white"
                    : "hover:bg-gray-300 hover:text-slate-600 "
                }`}
                onClick={() => handleItemClick("/")}
              >
                <Home fill={`${active === "/" ? "white" : "black"}`} />
                <span className="text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/createmain"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  active === "/createmain"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-300 hover:text-slate-600"
                }`}
                onClick={() => handleItemClick("/createmain")}
              >
                <Qestionadd
                  fill={`${active === "/createmain" ? "white" : "black"}`}
                />
                <span className="text-base">Add Question</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Quizmain"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  active === "/Quizmain"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-300 hover:text-slate-600"
                }`}
                onClick={() => handleItemClick("/Quizmain")}
              >
                <Quize fill={`${active === "/Quizmain" ? "white" : "black"}`} />
                <span className="text-base">Quiz</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Sectionmain"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  active === "/Sectionmain"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-300 hover:text-slate-600"
                }`}
                onClick={() => handleItemClick("/Sectionmain")}
              >
                <Examlist
                  fill={`${active === "/Sectionmain" ? "white" : "black"}`}
                />
                <span className="text-base">Sections</span>
              </Link>
            </li>
            <li>
              <Link
                to="/resultmain"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  active === "/resultmain"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-300 hover:text-slate-600"
                }`}
                onClick={() => handleItemClick("/resultmain")}
              >
                <Result
                  fill={`${active === "/resultmain" ? "white" : "black"}`}
                />
                <span className="text-base">Result</span>
              </Link>
            </li>

            <li>
              <div
                onClick={handleLogout}
                className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300 hover:text-slate-600"
              >
                <Logout />
                <span className="text-base">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
