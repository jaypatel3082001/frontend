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
    <div className="flex  bg-slate-200 shadow-md p-4  justify-end border-b-1 border-slate-600">
      <div className="text-xl font-bold ">LOGO HERE</div>
    </div>
  );
}

export default Navbar;
