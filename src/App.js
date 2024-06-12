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
import Quizmain from "./componet/Quize/quizemain";
import QuestionAdd from "./componet/createquestion/questionadd";
import Loginpage from "./componet/login/loginpage";
import Signup from "./componet/login/Signup";

import Quizform from "./componet/Quize/quizform";
import Userpage from "./componet/Quize/Userpage";
import QuestionbyQuize from "./componet/Quize/QuestionbyQuize";
import QuizetoSection from "./componet/Section/QuizetoSection";
import Sectionmain from "./componet/Section/SectionPage";
import QuizetoSectionName from "./componet/Section/QuizetoSectionName";
import QuizebySection from "./componet/Section/QuizebySection";
import SectionHome from "./componet/Section/SectionHome";

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
          path="/QuizetoSectionName"
          element={
            isLoggedIn ? (
              <QuizetoSectionName setIsLoggedIn={setIsLoggedIn} />
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
          path="/Quizmain/:id"
          element={
            isLoggedIn ? (
              <Userpage setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />

        <Route
          path="/Quizmain"
          element={
            isLoggedIn ? (
              <Quizmain setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />

        <Route
          path="Quizmain/QuestionbyQuize/:id"
          element={
            isLoggedIn ? (
              <QuestionbyQuize setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/QuizetoSection"
          element={
            isLoggedIn ? (
              <QuizetoSection setIsLoggedIn={setIsLoggedIn} />
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
          path="/Sectionmain/:id"
          element={
            isLoggedIn ? (
              <SectionHome setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />

        <Route
          path="/SectionHome/Sectionmain/:id"
          element={
            isLoggedIn ? (
              <QuizebySection setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/SectionHome"
          element={
            isLoggedIn ? (
              <SectionHome setIsLoggedIn={setIsLoggedIn} />
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
