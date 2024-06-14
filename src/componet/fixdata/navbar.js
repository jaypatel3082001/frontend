import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../cssfile/Login.css";

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <div className="flex  bg-red-300 p-4  justify-end">
      <div className="text-xl font-bold ">LOGO HERE</div>
      {/* <div className="flex space-x-8">
        <ul className="flex space-x-6">
          <li className="flex flex-col items-center ">
            <Link to="/newexam">
              <Newexam />
              <div>New exam</div>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link to="/examlist">
              <div>
                <Examlist />
              </div>
              <div>Exam list</div>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link to="/result">
              <Result />
              <div>Result</div>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <button
              onClick={handleLogout}
              className="flex flex-col items-center"
            >
              <Logout />
              <div>Logout</div>
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
