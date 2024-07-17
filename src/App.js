import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./componet/mainpage/main";
import Createmain from "./componet/createquestion/createmain/createmain";
import Sectionmain from "./componet/Section/sectionmain/Sectionmain";
import QuestionAdd from "./componet/createquestion/questionadd";
// import LoginAdminpage from "./componet/login/loginHomepage";
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
import NoAuthRoute from "./NoAuthRoute";

function App() {
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
    if (token) {
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
        {/* redirection */}
        <Route path="/*" element={<Navigate to={"login"} />} />
        {/* auth Routes */}
        <Route
          path="/login"
          element={
            <PrivateRoute>
              <Loginstudentpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/login"
          element={
            <NoAuthRoute>
              <LoginAdminpage />
            </NoAuthRoute>
          }
        />
        <Route
          path="/admin/adminsignuppage"
          element={
            <NoAuthRoute>
              <AdminSignuppage />
            </NoAuthRoute>
          }
        />
        {/* admin route redirection */}
        <Route path="/admin/*" element={<Navigate to={"/admin/login"} />} />
        {/* admin routes */}
        <Route
          path="/admin/Home"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/AddSection"
          element={
            <PrivateRoute>
              <AddSection />
            </PrivateRoute>
          }
        />
        <Route path="/admin/Signup" element={<Signup />} />
        <Route
          path="/admin/createmain"
          element={
            <PrivateRoute>
              <Createmain />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/questionadd"
          element={
            <PrivateRoute>
              <QuestionAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Sectionform"
          element={
            <PrivateRoute>
              <Sectionform />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Sectionmain"
          element={
            <PrivateRoute>
              <Sectionmain />
              {/* <Sectionmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Sectionmain/question-list/question-select"
          element={
            <PrivateRoute>
              <QuestionbyQuize />
              {/* <QuestionbyQuize /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Quizemain"
          element={
            <PrivateRoute>
              <Quizemain />
              {/* <Quizemain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/QuizeHome/Quizemain/quizelist"
          element={
            <PrivateRoute>
              <AddQuiz />
              {/* <AddQuiz /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/AddQuiz"
          element={
            <PrivateRoute>
              <AddQuiz />
              {/* <AddQuiz /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Quizemain/Userpage/:id"
          element={
            <PrivateRoute>
              <Main />
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
        <Route
          path={`/userpages/quiz-start`}
          element={
            <PrivateRoute>
              {isStudentLoggedIn ? (
                <Userpages />
              ) : (
                <Navigate to={"/admin/login"} />
              )}
              {/* <Userpages /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/resultmain"
          element={
            <PrivateRoute>
              <Resultmain />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/resultstudentmain"
          element={
            <PrivateRoute>
              <ResultStudent />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
