import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../cssfile/Login.css";
import { Link } from "react-router-dom";

const Loginpage = ({ setIsLoggedIn }) => {
  const [inputlogindata, setInputlogindata] = useState({
    email: "",
    password: "",
    userkey: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
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

      if (response.ok) {
        const result = await response.json();
        console.log("result", result);
        localStorage.setItem("authToken", result.token);
        setInputlogindata(result);
        setErrorMessage("");
        // setIsLoggedIn(true);
        navigate("/");
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Fetch operation error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
    navigate(0);
  };

  return (
    // <div className="bg-red-300 w-full h-screen">
    //   <div className="flex ">
    //     <div className="w-full  bg-white-200">
    //       <div className="container login-container">
    //         <div className="card login-card">
    //           <div className="card-body">
    //             <h3 className="card-title text-center mb-4">Login</h3>
    //             {errorMessage && (
    //               <div className="alert alert-danger" role="alert">
    //                 {errorMessage}
    //               </div>
    //             )}
    //             <form onSubmit={handleSubmit}>
    //               <div className="form-group mb-3">
    //                 <label htmlFor="email" className="mb-2">
    //                   Email address
    //                 </label>
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   onChange={handleChange}
    //                   value={inputlogindata.email}
    //                   className="form-control"
    //                   id="email"
    //                   placeholder="Enter email"
    //                   required
    //                 />
    //               </div>
    //               <div className="form-group mb-3">
    //                 <label htmlFor="password" className="mb-2">
    //                   Password
    //                 </label>
    //                 <input
    //                   type="password"
    //                   name="password"
    //                   className="form-control"
    //                   id="password"
    //                   onChange={handleChange}
    //                   value={inputlogindata.password}
    //                   placeholder="Password"
    //                   required
    //                 />
    //               </div>
    //               <div className="form-group mb-3">
    //                 <label htmlFor="userkeykey" className="mb-2">
    //                   Userkey
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="userkey"
    //                   className="form-control"
    //                   id="userkey"
    //                   onChange={handleChange}
    //                   value={inputlogindata.userkey}
    //                   placeholder="userkey"
    //                 />
    //               </div>
    //               <div className="flex justify-between">
    //                 <button type="submit" className="btn btn-primary btn-block">
    //                   Login
    //                 </button>
    //                 <Link to="/Signup" className="font-semibold text-xl">
    //                   Signup
    //                 </Link>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="main bg-white rounded-lg shadow-md p-10 w-96">
        <h1 className="text-green-500 text-3xl mb-6">Admin Login</h1>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="first"
            className="text-left text-gray-700 font-bold block"
          >
            EmailId:
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputlogindata.email}
            id="email"
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
            value={inputlogindata.password}
            placeholder="Enter your Password"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 mt-1"
            required
          />

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        <Link to="/adminsignuppage">
          <p className="text-gray-600 mt-4">
            Not registered?
            <a href="#" className="text-green-500 ml-1 hover:underline">
              Create an account
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Loginpage;
