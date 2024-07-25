import React, { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../cssfile/Signup.css";
import { SignUpUser } from "../../services/auth";

const Signup = () => {
  const initialdata = { username: "", email: "", password: "" };
  const [inputsigndata, setInputsigndata] = useState(initialdata);
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);

  // Memoized handleChange function using useCallback
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputsigndata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Memoized handleSubmit function using useCallback
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const response = await SignUpUser(inputsigndata);
        console.log(response, "response");
        if (response.ok) {
          setInputsigndata(initialdata);
          setSignupSuccess(true);
        }
      } catch (error) {
        console.error("Fetch operation error:", error);
      }
    },
    [inputsigndata, navigate]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="main bg-white rounded-lg shadow-md p-10 w-96">
        <h1 className="text-green-500 text-3xl mb-6">Admin Signup</h1>
        {signupSuccess ? (
          <div>
            <div className="text-red-500 text-center mb-4">
              Your signup request has been successfully sent to the admin for
              approval.
            </div>
            <Link to="/admin">
              <button className="btn btn-primary w-100 btn-block">Login</button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              className="text-left text-gray-700 font-bold block "
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={inputsigndata.username}
              placeholder="Enter your UserName"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              required
            />
            <label
              htmlFor="email"
              className="text-left text-gray-700 font-bold block mt-4"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={inputsigndata.email}
              placeholder="Enter your Email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              required
            />
            <label
              htmlFor="password"
              className="text-left text-gray-700 font-bold block mt-4"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={inputsigndata.password}
              placeholder="Enter your Password"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 mt-1"
              required
            />

            <div className="flex justify-between mt-3">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <Link to="/admin/login" className="font-semibold text-xl">
                Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
