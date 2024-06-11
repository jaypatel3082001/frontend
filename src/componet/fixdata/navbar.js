import React from "react";
import { Link } from "react-router-dom";
import "../../cssfile/Login.css";

function Navbar() {
  return (
    <div className="flex justify-between bg-red-300 ">
      <div></div>
      <div className="flex">
        <Link to="/Login" className="p-3">
          loging
        </Link>
        <Link to="/Signup" className="p-3">
          signup
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
