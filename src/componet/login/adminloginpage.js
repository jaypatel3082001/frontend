import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../cssfile/Login.css";
import { Link } from "react-router-dom";
import { Adminloging } from "../../services/auth";

const Loginpage = () => {
  const initialdata = {
    email: "",
    password: "",
  };
  const [inputlogindata, setInputlogindata] = useState(initialdata);
  const [showerror, setShowerror] = useState(false);
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
    try {
      const response = await Adminloging(inputlogindata);
      console.log("saa", response);
      if (response.statusText === "OK") {
        const result = await response.data;
        console.log("r", result);
        localStorage.setItem("authToken", result.data.token);
        localStorage.setItem("rtoken", result.data.dummytoken);
        setInputlogindata("");

        navigate("/admin/Home");
      } else {
        setShowerror(true);
        console.log("else");
      }
    } catch (error) {
      setShowerror(true);
      console.log("catch");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="main bg-white rounded-lg shadow-md p-10 w-96">
        {showerror && (
          <div className="text-red-500 font-bold text-center mb-3">
            Invalid email or password
          </div>
        )}
        <h1 className="text-green-500 text-3xl mb-6">Admin Login</h1>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="first"
            className="text-left text-gray-700 font-bold block mb-2"
          >
            Email
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
            className="text-left text-gray-700 font-bold block mt-4 mb-2"
          >
            Password
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

          <div className="flex justify-center w-100 mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition w-100 duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Not registered?
          <Link
            to="/admin/adminsignuppage"
            className="text-green-500 ml-1 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
