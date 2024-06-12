// import React, { useState } from "react";
// import Sidebar from "../fixdata/sidebar";
// import Navbar from "../fixdata/navbar";
// import "../../cssfile/Login.css";
// import { useNavigate, Link } from "react-router-dom";

// const Loginpage = () => {
//   const [inputlogindata, setInputlogindata] = useState({
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputlogindata((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const api = "https://quiz-krishang.vercel.app/auth/login";
//     try {
//       const response = await fetch(api, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputlogindata),
//       });

//       const result = await response.json();
//       console.log("result", result);

//       if (response.ok) {
//         setInputlogindata({
//           email: "",
//           password: "",
//         });
//         setErrorMessage("");
//         navigate("/");
//       } else {
//         setErrorMessage("Invalid email or password");
//       }
//     } catch (error) {
//       console.error("Fetch operation error:", error);
//       setErrorMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full  bg-white-200">
//         <div>
//           <Navbar />
//         </div>

//         <div className="container login-container">
//           <div className="card login-card">
//             <div className="card-body">
//               <h3 className="card-title text-center mb-4">Login</h3>
//               {errorMessage && (
//                 <div className="alert alert-danger" role="alert">
//                   {errorMessage}
//                 </div>
//               )}
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                   <label htmlFor="email" className="mb-2">
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     value={inputlogindata.email}
//                     className="form-control"
//                     id="email"
//                     placeholder="Enter email"
//                     required
//                   />
//                 </div>
//                 <div className="form-group mb-3">
//                   <label htmlFor="password" className="mb-2">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     id="password"
//                     onChange={handleChange}
//                     value={inputlogindata.password}
//                     placeholder="Password"
//                     required
//                   />
//                 </div>
//                 <div className="flex justify-between">
//                   <button type="submit" className="btn btn-primary btn-block">
//                     Login
//                   </button>
//                   <Link to="/Signup" className="font-semibold text-xl">
//                     signup
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loginpage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../fixdata/sidebar";
import "../../cssfile/Login.css";
import { Link } from "react-router-dom";

const Loginpage = ({ setIsLoggedIn }) => {
  const [inputlogindata, setInputlogindata] = useState({
    email: "",
    password: "",
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
        setInputlogindata({
          email: "",
          password: "",
        });
        setErrorMessage("");
        setIsLoggedIn(true); // Set isLoggedIn state to true upon successful login
        navigate("/"); // Redirect to the main page upon successful login
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Fetch operation error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-red-300 w-full h-screen">
      <div className="flex ">
        <div className="w-full  bg-white-200">
          <div className="container login-container">
            <div className="card login-card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Login</h3>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
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
                      required
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
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                    <Link to="/Signup" className="font-semibold text-xl">
                      Signup
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
