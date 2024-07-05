import React, { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../cssfile/Signup.css";

const Signup = ({ setIsLoggedIn }) => {
  const [inputsigndata, setInputsigndata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showerror, setShowerror] = useState(false);

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
          navigate("/loginadminpage");
        } else {
          setErrorMessage("Username or Email already exists");
          setShowerror(true);
        }
      } catch (error) {
        console.error("Fetch operation error:", error);
        setErrorMessage("An error occurred. Please try again.");
      }
    },
    [inputsigndata, navigate]
  );

  return (
    // <div className="flex">
    //   <div className="w-full h-screen bg-red-300">
    //     {signupSuccess ? (
    //       <div
    //         className="alert alert-success container signup-container card signup-card"
    //         role="alert"
    //       >
    //         Signup successful! You can now login.
    //       </div>
    //     ) : (
    //       <div className="container signup-container">
    //         <div className="card signup-card">
    //           <div className="card-body">
    //             <h3 className="card-title text-center mb-4">Sign Up</h3>
    //             {errorMessage && (
    //               <div className="alert alert-danger" role="alert">
    //                 {errorMessage}
    //               </div>
    //             )}
    //             <form onSubmit={handleSubmit}>
    //               <div className="form-group mb-3">
    //                 <label htmlFor="name">UserName</label>
    //                 <input
    //                   type="text"
    //                   name="username"
    //                   className="form-control"
    //                   id="name"
    //                   onChange={handleChange}
    //                   value={inputsigndata.username}
    //                   placeholder="Enter name"
    //                   required
    //                 />
    //               </div>
    //               <div className="form-group mb-3">
    //                 <label htmlFor="email">Email address</label>
    //                 <input
    //                   type="email"
    //                   className="form-control"
    //                   name="email"
    //                   id="email"
    //                   onChange={handleChange}
    //                   value={inputsigndata.email}
    //                   placeholder="Enter email"
    //                   required
    //                 />
    //               </div>
    //               <div className="form-group mb-3">
    //                 <label htmlFor="password">Password</label>
    //                 <input
    //                   type="password"
    //                   className="form-control"
    //                   name="password"
    //                   id="password"
    //                   onChange={handleChange}
    //                   value={inputsigndata.password}
    //                   placeholder="Password"
    //                   required
    //                 />
    //               </div>
    //               <div className="flex justify-between">
    //                 <button type="submit" className="btn btn-primary btn-block">
    //                   Sign Up
    //                 </button>
    //                 <Link to="/Logingpage" className="font-semibold text-xl">
    //                   Login
    //                 </Link>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="main bg-white rounded-lg shadow-md p-10 w-96">
        {showerror && (
          <div className="text-red-500 font-bold text-center mb-3">
            Username or Email already exists
          </div>
        )}
        <h1 className="text-green-500 text-3xl mb-6">Admin Signup</h1>
        {signupSuccess ? (
          <div
            className="alert alert-success container signup-container card signup-card"
            role="alert"
          >
            Signup successful! You can now login.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="first"
              className="text-left text-gray-700 font-bold block "
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="name"
              onChange={handleChange}
              value={inputsigndata.username}
              placeholder="Enter your UserName"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              required
            />
            <label
              htmlFor="first"
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
              placeholder="Enter your Username"
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
                Sign Up
              </button>
              <Link to="/loginadminpage" className="font-semibold text-xl">
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
