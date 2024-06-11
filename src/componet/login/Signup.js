import React, { useState } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import "../../cssfile/Signup.css";

const Signup = () => {
  const [inputsigndata, setInputsigndata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsigndata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSignupSuccess(true);

    const api = "https://quiz-krishang.vercel.app/auth/signup";
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsigndata),
      });
      setInputsigndata({
        username: "",
        email: "",
        password: "",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
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
        {signupSuccess ? (
          <div
            className="alert alert-success container signup-container card signup-card"
            role="alert"
          >
            Signup successful! You can now login.
          </div>
        ) : (
          <div className="container signup-container">
            <div className="card signup-card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">UserName</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="name"
                      onChange={handleChange}
                      value={inputsigndata.username}
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div className="form-group  mb-3">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={inputsigndata.email}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group  mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={inputsigndata.password}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
