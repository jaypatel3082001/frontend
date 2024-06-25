// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ReactComponent as Result } from "../../svgfile/result.svg";
// import { ReactComponent as Examlist } from "../../svgfile/examlist.svg";
// import { ReactComponent as Logout } from "../../svgfile/logout.svg";
// import { ReactComponent as Newexam } from "../../svgfile/newexam.svg";
// import { ReactComponent as Qestionadd } from "../../svgfile/Questionadd.svg";
// import { ReactComponent as Quize } from "../../svgfile/Quize.svg";
// import { ReactComponent as Home } from "../../svgfile/homg.svg";

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("onBoarding");

//     const token = localStorage.getItem("token"); // Check if token exists in local storage
//     if (token == null) {
//       navigate("/login"); // Redirect to login page if token does not exist
//     }
//   };

//   return (
//     <div className="h-full bg-blue-200 w-52 p-4">
//       <div className="ml-8">
//         <div className="sidebar-header flex items-center">
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
//           <div className="ml-4"> Admin</div>
//         </div>
//         <div className="mt-8 p-0">
//           <div className="m-0 p-0">
//             <div className="h-screen w-44 text-black flex flex-col space-y-8">
//               <ul className="flex flex-col space-y-6 mt-7">
//                 <li className="flex flex-row items-center py-1">
//                   <Link
//                     to="/"
//                     className="flex flex-row items-center py-2 space-x-2"
//                   >
//                     <Home />
//                     <div>Home</div>
//                   </Link>
//                 </li>
//                 <li className="flex flex-row items-center py-1">
//                   <Link
//                     to="/createmain"
//                     className="flex flex-row items-center py-2 space-x-2"
//                   >
//                     <Qestionadd />
//                     <div>Add-question</div>
//                   </Link>
//                 </li>
//                 <li className="flex flex-row items-center py-1">
//                   <Link
//                     to="/Quizmain"
//                     className="flex flex-row items-center py-2 space-x-2"
//                   >
//                     <Quize />
//                     <div>Quize</div>
//                   </Link>
//                 </li>
//                 <li className="flex flex-row items-center py-1">
//                   <Link
//                     to="/Sectionmain"
//                     className="flex flex-row items-center py-2 space-x-2"
//                   >
//                     <Examlist />
//                     <div>Section</div>
//                   </Link>
//                 </li>
//                 <li className="flex flex-row items-center py-2">
//                   <Link
//                     to="/result"
//                     className="flex flex-row items-center py-2 space-x-2"
//                   >
//                     <Result />
//                     <div>Result</div>
//                   </Link>
//                 </li>
//                 <li className="flex flex-row items-center py-2">
//                   <button
//                     className="flex flex-row items-center py-2 space-x-2"
//                     onClick={handleLogout}
//                   >
//                     <Logout />
//                     <div>Logout</div>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Result } from "../../svgfile/result.svg";
import { ReactComponent as Examlist } from "../../svgfile/examlist.svg";
import { ReactComponent as Logout } from "../../svgfile/logout.svg";
import { ReactComponent as Newexam } from "../../svgfile/newexam.svg";
import { ReactComponent as Qestionadd } from "../../svgfile/Questionadd.svg";
import { ReactComponent as Quize } from "../../svgfile/Quize.svg";
import { ReactComponent as Home } from "../../svgfile/homg.svg";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("this is");
    localStorage.setItem("authToken", null);

    // localStorage.removeItem("token");
    // localStorage.removeItem("refreshToken");
    // localStorage.removeItem("onBoarding");
    const token = localStorage.getItem("authToken");
    console.log(token);

    // const token = localStorage.getItem("token"); // Check if token exists in local storage
    if (token === "null") {
      // localStorage.setItem("authToken",)
      navigate("/Logingpage"); // Redirect to login page if token does not exist
    }
  };

  return (
    <div className="h-full bg-blue-200 w-52 p-4">
      <div className="ml-8">
        <div className="sidebar-header flex items-center">
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
          <div className="ml-4"> Admin</div>
        </div>
        <div className="mt-8 p-0">
          <div className="m-0 p-0">
            <div className="h-screen w-44 text-black flex flex-col space-y-8">
              <ul className="flex flex-col space-y-6 mt-7">
                <li className="flex flex-row items-center py-1">
                  <Link
                    to="/"
                    className="flex flex-row items-center py-2 space-x-2"
                  >
                    <Home />
                    <div>Home</div>
                  </Link>
                </li>
                <li className="flex flex-row items-center py-1">
                  <Link
                    to="/createmain"
                    className="flex flex-row items-center py-2 space-x-2"
                  >
                    <Qestionadd />
                    <div>Add-question</div>
                  </Link>
                </li>
                <li className="flex flex-row items-center py-1">
                  <Link
                    to="/Quizmain"
                    className="flex flex-row items-center py-2 space-x-2"
                  >
                    <Quize />
                    <div>Quize</div>
                  </Link>
                </li>
                <li className="flex flex-row items-center py-1">
                  <Link
                    to="/Sectionmain"
                    className="flex flex-row items-center py-2 space-x-2"
                  >
                    <Examlist />
                    <div>Section</div>
                  </Link>
                </li>
                <li className="flex flex-row items-center py-2">
                  <Link
                    to="/resultmain"
                    className="flex flex-row items-center py-2 space-x-2"
                  >
                    <Result />
                    <div>Result</div>
                  </Link>
                </li>
                <li className="flex flex-row items-center py-2">
                  <button
                    className="flex flex-row items-center py-2 space-x-2"
                    onClick={handleLogout}
                  >
                    <Logout />
                    <div>Logout</div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
