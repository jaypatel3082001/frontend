import React, { useState } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import "../../cssfile/Login.css";
import { useNavigate } from "react-router-dom";
const Loginpage = () => {
  const [inputlogindata, setInputlogindata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputlogindata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = "https://quiz-krishang.vercel.app/auth/login";
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputlogindata),
      });
      setInputlogindata({
        email: "",
        password: "",
      });
      navigate("/");
      if (!response.ok) {
        // throw new Error("Network response was not ok");
        alert("asasas");
        navigate("/Login");
      }
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mr-2 bg-white-200">
        <div>
          <Navbar />
        </div>

        <div className="container login-container">
          <div className="card login-card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={inputlogindata.email}
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    onChange={handleChange}
                    value={inputlogindata.password}
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
