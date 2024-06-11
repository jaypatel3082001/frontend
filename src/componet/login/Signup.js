import React, { useState } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import "../../cssfile/Signup.css";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const [inputsigndata, setInputsigndata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsigndata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = "https://quiz-krishang.vercel.app/auth/signup";
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsigndata),
      });

      if (response.ok) {
        setInputsigndata({
          username: "",
          email: "",
          password: "",
        });
        setSignupSuccess(true);
        setErrorMessage("");
        navigate("/Login");
      } else {
        setErrorMessage("Username or Email already exists");
      }
    } catch (error) {
      console.error("Fetch operation error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex">
      <div className="w-full h-screen mr-2 bg-red-300">
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
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
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
                  <div className="flex justify-between">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                    <Link to="/Login" className="font-semibold text-xl">
                      Login
                    </Link>
                  </div>
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
