import "./App.css";
import React, { useState } from "react";
import Main from "./componet/mainpage/main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Createmain from "./componet/createquestion/createmain";
import Quizmain from "./componet/section/sectionmain";
import QuestionAdd from "./componet/createquestion/questionadd";
import Loginpage from "./componet/login/loginpage";
import Signup from "./componet/login/Signup";
import Sectionmain from "./componet/section/sectionmain";
import Quizform from "./componet/section/quizform";
import Userpage from "./componet/section/Userpage";
import QuestionbyQuize from "./componet/section/QuestionbyQuize";
import QuizetoGroup from "./componet/Group/QuizetoGroup";
import Groupmain from "./componet/Group/Groupmain";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/Login"
          element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Main setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/createmain"
          element={
            isLoggedIn ? (
              <Createmain setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/questionadd"
          element={
            isLoggedIn ? (
              <QuestionAdd setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/Sectionmain"
          element={
            isLoggedIn ? (
              <Sectionmain setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/quizform"
          element={
            isLoggedIn ? (
              <Quizform setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/allQuiz"
          element={
            isLoggedIn ? (
              <Quizmain setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/Sectionmain/:id"
          element={
            isLoggedIn ? (
              <Userpage setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/QuestionbyQuize"
          element={
            isLoggedIn ? (
              <QuestionbyQuize setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/QuizetoGroup"
          element={
            isLoggedIn ? (
              <QuizetoGroup setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/Groupmain"
          element={
            isLoggedIn ? (
              <Groupmain setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
