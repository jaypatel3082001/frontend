import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./componet/mainpage/main";
import Createmain from "./componet/createquestion/createmain/createmain";
import Quizmain from "./componet/Quize/quizemain/quizemain";
import QuestionAdd from "./componet/createquestion/questionadd";
import Loginpage from "./componet/login/loginpage";
import Signup from "./componet/login/Signup";
import Userpages from "./componet/User/userpages";
import Quizform from "./componet/Quize/quizform";
import Resultmain from "./componet/result/resultsectionhome/resultmain";
import QuestionbyQuize from "./componet/Quize/QuestionbyQuize";
import Sectionmain from "./componet/Section/sectionhome/sectionmain";
import QuizetoSectionName from "./componet/Section/QuizetoSectionName";
import QuizebySection from "./componet/Section/QuizebySection";
import SectionHome from "./componet/Section/SectionHome";
import PrivateRoute from "./PrivateRoute";
import ResultStudent from "./componet/result/resultbystudent/resultstudentmain";
import { jwtDecode } from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decodes the token (doesn't verify signature)
        console.log("decoded.ex", decoded.exp);
        // Example: Check token expiry
        const currentTime = Date.now() / 1000;
        console.log("currentTime", currentTime); // Convert current time to seconds
        if (decoded.exp < currentTime) {
          console.log("expire");
          // Navigater("/Logingpage");
          // Optionally, redirect to login or refresh token
        }

        // Example: Access token payload data
        console.log(decoded);

        // Proceed with application logic using decoded token data
      } catch (error) {
        console.log("Invalid token:", error);
        // Handle invalid token (e.g., redirect to login)
      }
    } else {
      console.log("No token found");
    }
  }, []);
  if (token) {
    try {
      const decoded = jwtDecode(token); // Decodes the token (doesn't verify signature)
      console.log("decoded.ex", decoded.exp);
      // Example: Check token expiry
      const currentTime = Date.now() / 1000;
      console.log("currentTime", currentTime); // Convert current time to seconds
      if (decoded.exp < currentTime) {
        console.log("expire");
        // Navigater("/Logingpage");
        // Optionally, redirect to login or refresh token
      }

      // Example: Access token payload data
      console.log(decoded);

      // Proceed with application logic using decoded token data
    } catch (error) {
      console.log("Invalid token:", error);
      // Handle invalid token (e.g., redirect to login)
    }
  } else {
    console.log("No token found");
  }

  useEffect(() => {
    if (token === "null") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <Loginpage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/QuizetoSectionName"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizetoSectionName /> : <Loginpage />}
              {/* <QuizetoSectionName setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route path="/Logingpage" element={<Loginpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/createmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Createmain /> : <Loginpage />}
              {/* <Createmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/questionadd"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionAdd /> : <Loginpage />}
              {/* <QuestionAdd setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/quizform"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Quizform /> : <Loginpage />}
              {/* <Quizform setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />

        <Route
          path="/Quizmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Quizmain /> : <Loginpage />}
              {/* <Quizmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Quizmain/question-list/question-select"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionbyQuize /> : <Loginpage />}
              {/* <QuestionbyQuize /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Sectionmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Sectionmain /> : <Loginpage />}
              {/* <Sectionmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Sectionmain/Section-quiz-list"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <SectionHome /> : <Loginpage />}
              {/* <SectionHome /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/SectionHome/Sectionmain/quizelist"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizebySection /> : <Loginpage />}
              {/* <QuizebySection /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/QuizebySection"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizebySection /> : <Loginpage />}
              {/* <QuizebySection /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/SectionHome"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <SectionHome /> : <Loginpage />}
              {/* <SectionHome /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Sectionmain/Userpage/:id"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <Loginpage />}
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/userpages/quiz-start"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Userpages /> : <Loginpage />}
              {/* <Userpages /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/userpages"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <Loginpage />}
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/resultmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Resultmain /> : <Loginpage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/resultstudentmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <ResultStudent /> : <Loginpage />}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
// App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminLoginPage from "./componet/dummy/adminloging";
// import Homepage from "./componet/dummy/homepage";
// import Adminsignup from "./componet/dummy/adminsignup";
// import StudentLoginPage from "./componet/dummy/studentloging";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/admin-login" element={<AdminLoginPage />} />
//         <Route path="/adminsignup" element={<Adminsignup />} />
//         <Route path="/studentlogin" element={<StudentLoginPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
