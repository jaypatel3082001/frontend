import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./componet/mainpage/main";
import Createmain from "./componet/createquestion/createmain/createmain";
import Sectionmain from "./componet/Section/sectionmain/Sectionmain";
import QuestionAdd from "./componet/createquestion/questionadd";
import LoginHomepage from "./componet/login/loginHomepage";
import Signup from "./componet/login/Signup";
import Userpages from "./componet/User/userpages";
import Sectionform from "./componet/Section/Sectionform";
import Resultmain from "./componet/result/resultquizhome/resultmain";
import QuestionbyQuize from "./componet/Section/QuestionbyQuize";
import Quizemain from "./componet/Quiz/Quizmain/Quizemain";
import AddSection from "./componet/Quiz/addSection";
import AddQuiz from "./componet/Quiz/addQuiz";

import PrivateRoute from "./PrivateRoute";
import ResultStudent from "./componet/result/resultbystudent/resultstudentmain";
import Loginstudentpage from "./componet/login/loginpage";
import LoginAdminpage from "./componet/login/adminloginpage";
import AdminSignuppage from "./componet/login/Signup";
import { jwtDecode } from "jwt-decode";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudentLoggedIn, setStudentIsLoggedIn] = useState(false);
  const token = localStorage.getItem("authToken");
  const tokenstudent = localStorage.getItem("authTokenstu");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (!decoded.exp || decoded.exp < currentTime) {
          localStorage.removeItem("authToken");
          console.log("Token expired or invalid, removed from local storage");
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    } else {
      console.log("No token found");
    }
  }, [token]);
  useEffect(() => {
    if (tokenstudent) {
      try {
        const decoded = jwtDecode(tokenstudent);
        const currentTime = Date.now() / 1000;

        if (!decoded.exp || decoded.exp < currentTime) {
          localStorage.removeItem("authTokenstu");
        } else {
          console.log(decoded);
        }
      } catch (error) {
        console.log("Invalid token:", error);
      }
    } else {
      console.log("No tokenstudent found");
    }
  }, [tokenstudent]);
  useEffect(() => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [token]);
  useEffect(() => {
    if (tokenstudent === null) {
      setStudentIsLoggedIn(false);
    } else {
      setStudentIsLoggedIn(true);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/AddSection"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <AddSection /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LoginHomepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/createmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Createmain /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/questionadd"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionAdd /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/Sectionform"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Sectionform /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />

        <Route
          path="/Sectionmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Sectionmain /> : <LoginHomepage />}
              {/* <Sectionmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Sectionmain/question-list/question-select"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionbyQuize /> : <LoginHomepage />}
              {/* <QuestionbyQuize /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Quizemain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Quizemain /> : <LoginHomepage />}
              {/* <Quizemain /> */}
            </PrivateRoute>
          }
        />

        <Route
          path="/QuizeHome/Quizemain/quizelist"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <AddQuiz /> : <LoginHomepage />}
              {/* <AddQuiz /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/AddQuiz"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <AddQuiz /> : <LoginHomepage />}
              {/* <AddQuiz /> */}
            </PrivateRoute>
          }
        />

        <Route
          path="Quizemain/Userpage/:id"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <LoginHomepage />}
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
        <Route
          path={`/userpages/quiz-start`}
          element={
            <PrivateRoute>
              {isStudentLoggedIn == true ? <Userpages /> : <LoginHomepage />}
              {/* <Userpages /> */}
            </PrivateRoute>
          }
        />

        <Route
          path="/resultmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Resultmain /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/resultstudentmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <ResultStudent /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/loginstudent"
          element={
            <PrivateRoute>
              <Loginstudentpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/loginadminpage"
          element={
            <PrivateRoute>
              <LoginAdminpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminsignuppage"
          element={
            <PrivateRoute>
              <AdminSignuppage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
