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
    <div className="flex justify-between bg-red-300">
      <div></div>
      <div className="flex">
        <button onClick={handleLogout} className="p-3">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
